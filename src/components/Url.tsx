import React from 'react'

const Url = (props) => {
    return (
        <a href={props.href}>
            <div className='w-max inline transition-all rounded-md text-[#0000FF] hover:text-[#004f7c] italic font-medium'>
                {props.children}
            </div>
        </a>
    )
}

export default Url