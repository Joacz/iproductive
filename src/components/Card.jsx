import React from 'react';

const Card = (props) => {
  return (
    <div className='flex flex-col shadow-xl shadow-slate-400 bg-slate-100 rounded-xl'>
      <img
        className='w-full h-[24rem] object-cover rounded-xl bg-blend-overlay -mb-16'
        src={props.img}
        alt=''
      />
      <h2 className='-mt-6 bg-opacity-70 backdrop-blur-md border-t border-b border-stone-500 bg-white font-serif text-[2em] px-4 text-center'>
        {props.title}
      </h2>
      <div className='mt-6 flex py-8 flex-col gap-8 mx-4'>
        <p className='text-[1.1em]'>{props.content}</p>
      </div>
    </div>
  );
};

export default Card;
