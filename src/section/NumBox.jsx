import React from 'react'

const NumBox = ({value, history}) => {
  return (
    <div className='flex flex-col items-end justify-center w-full px-5 bg-amber-50 h-1/5 rounded-xl mt-2 mb-5'>
      <h1>{history}</h1>
      <h1 className='text-4xl font-bold'>{value}</h1>
    </div>
  )
}

export default NumBox
