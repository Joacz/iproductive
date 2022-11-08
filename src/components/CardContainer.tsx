import React from 'react'

const CardContainer = (props) => {
  return (
    <div className='select-none flex justify-center py-32'>
      <div className='grid xl:grid-cols-2 grid-cols-1 gap-20 lg:w-[60%] md:w-[80%] w-[90%] text-xl'>
        {props.children}
      </div>
    </div>
  )
}

export default CardContainer