import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/solid';

const CheckBox = ({ taskId }) => {
  const [mark, setMark] = useState(false);

  const handleMark = () => {
    setMark(!mark);
    if (mark === false) {
      console.log('checked: ' + taskId);
    } else {
      console.log('unchecked: ' + taskId);
    }
  };

  return (
    <div
      className='h-10 hover:cursor-pointer select-none w-10 border-2 border-slate-900 rounded-md'
      onClick={() => handleMark()}
    >
      <span className='text-center flex items-center'>
        {mark ? <CheckIcon className='h-10 w-10 text-green-500' /> : ''}
      </span>
    </div>
  );
};

export default CheckBox;
