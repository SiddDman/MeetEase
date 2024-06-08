"use client"
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useState } from 'react';

const Meeting = ({ params }: { params: { id: number } }) => {

  const { user, isLoaded } = useUser();
  const [setupComplete, setSetupComplete] = useState(false)

  return (
    <main className='h-screen w-full'>
      <StreamCall>
        <StreamTheme>
          {!setupComplete ? ("Meeting Setup") : ("Meeting Room")}
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default Meeting