import CallListCard from '@/components/CallListCard'
import React from 'react'

const Upcoming = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <h1 className='text-3xl font-bold'>
        Upcoming
      </h1>
      <CallListCard type="upcoming" />
    </section>)
}

export default Upcoming