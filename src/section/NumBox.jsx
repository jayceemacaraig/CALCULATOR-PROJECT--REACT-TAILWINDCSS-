import React from 'react'

const NumBox = ({value, operator}) => {
  return (
    <div className='flex flex-col items-end justify-center w-full h-20 px-5 bg-amber-50 rounded-xl mt-2 mb-5'>
      <h1>{operator}</h1>
      <h1 className='text-4xl font-bold break-all'>{value}</h1>
    </div>
  )
}

export default NumBox
