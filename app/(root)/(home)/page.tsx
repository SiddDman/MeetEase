"use client"
import Loader from "@/components/Loader";
import MeetingCard from "@/components/MeetingCard";
import MeetingTypeList from "@/components/MeetingTypeList";
import { useGetCalls } from "@/hooks/useGetCalls";
import { useRouter } from "next/navigation";

const Home = () => {
  const now = new Date();
  const router = useRouter()
  const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const dateToday = (new Intl.DateTimeFormat('en-IN', { dateStyle: 'full' })).format(now)
  const { todaysCalls, loading } = useGetCalls()

  const getCalls = () => {
    return todaysCalls;
  }

  const calls = getCalls();

  if (loading)
    return <Loader />


  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>
            Upcoming Meeting at:12:00 PM
          </h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl'>
              {time}
            </h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
              {dateToday}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />

      {/* Todays Upcoming Meetings */}
      {calls && calls.length > 0 ? (<h1 className="text-3xl font-extrabold">Todays Upcoming Meetings</h1>) : (<></>)}
      <div className='grid grid-cols-1 gap-5 xl:grid-cols-2'>
        {calls && calls.length > 0 ? calls.map((meeting) => (
          <MeetingCard
            key={meeting?.id}
            title={meeting.state?.custom?.desc?.substring(0, 30)}
            date={dateToday}
            icon='/icons/upcoming.svg'
            isPreviousMeeting={false}
            buttonIcon1={undefined}
            buttonText='Start'
            handleClick={() => router.push(`/meeting/${(meeting).id}`)}
            link={`${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meeting.id}`}
          />
        )) : (
          <h1>
            No Meetings Today
          </h1>
        )}
      </div>
    </section>
  )
}

export default Home