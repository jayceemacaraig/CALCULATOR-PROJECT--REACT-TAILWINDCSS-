import React from 'react'

const Operator = ({value, onClick}) => {
  return (
    
    <div>
      <button className='btn operator' onClick={() => {onClick(value)}}>{value}</button>
    </div>
  )
}

export default Operator
