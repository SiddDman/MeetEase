import React from 'react'

const Meeting = ({ params }: { params: { id: number } }) => {
  return (
    <div>Meeting Room : id={params.id}</div>
  )
}

export default Meeting