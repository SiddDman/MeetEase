"use client"
import { useGetCalls } from '@/hooks/useGetCalls'
import { Call, CallRecording } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import MeetingCard from './MeetingCard'
import { Lacquer } from 'next/font/google'
import Loader from './Loader'
import { useToast } from './ui/use-toast'

const CallListCard = ({ type }: { type: 'ended' | 'upcoming' | 'recordings' }) => {
    const { endedCalls, upcomingCalls, callRecordings, loading } = useGetCalls()
    const router = useRouter()
    const [recordings, setRecordings] = useState<CallRecording[]>([])
    const { toast } = useToast()

    const getCalls = () => {
        switch (type) {
            case "ended":
                return endedCalls
            case "upcoming":
                return upcomingCalls
            case "recordings":
                return recordings;
            default:
                return [];
        }
    }

    const getNoCallsMessage = () => {
        switch (type) {
            case "ended":
                return "No Previous Calls!!"
            case "upcoming":
                return "No Upcoming Calls!!"
            case "recordings":
                return "No Video Call Recordings!!";
            default:
                return '';
        }
    }

    useEffect(() => {
        const fetchRecordings = async () => {
            try {
                const callData = await Promise.all(callRecordings.map((meeting) => meeting.queryRecordings()))

                const recordings = callData.filter(call => call.recordings.length > 0).flatMap(call => call.recordings)

                setRecordings(recordings);
            } catch (error) {
                toast({ title: 'Try Again Later' })
            }
        }
        if (type === 'recordings')
            fetchRecordings()
    }, [type, callRecordings])

    const calls = getCalls();
    const noCallsMessage = getNoCallsMessage()

    if (loading)
        return <Loader />

    return (
        <div className='grid grid-cols-1 gap-5 xl:grid-cols-2'>
            {calls && calls.length > 0 ? calls.map((meeting: Call | CallRecording) => (
                <MeetingCard
                    key={(meeting as Call)?.id}
                    title={(meeting as Call).state?.custom?.desc?.substring(0, 30) || (meeting as CallRecording)?.filename?.substring(0, 25) || 'Personal Meeting'}
                    date={(meeting as Call).state?.startsAt?.toLocaleString() || (meeting as CallRecording)?.start_time.toLocaleString()}
                    icon={
                        type === 'ended' ? '/icons/previous.svg' :
                            type === 'upcoming' ? '/icons/upcoming.svg' :
                                '/icons/recordings.svg'
                    }
                    isPreviousMeeting={type === 'ended'}
                    buttonIcon1={type === 'recordings' ? '/icons/play.svg' : undefined}
                    buttonText={type === 'recordings' ? 'Play' : 'Start'}
                    handleClick={type === 'recordings' ? () => router.push(`${(meeting as CallRecording).url}`) : () => router.push(`/meeting/${(meeting as Call).id}`)}
                    link={type === 'recordings' ? (meeting as CallRecording).url : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${(meeting as Call).id}`}
                />
            )) : (
                <h1>
                    {noCallsMessage}
                </h1>
            )}
        </div>
    )
}

export default CallListCard