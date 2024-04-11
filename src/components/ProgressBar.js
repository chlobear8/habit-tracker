import React from 'react';

export const ProgressBar = ({progressValue}) => {  

  return (
    <div className='Progress'>
      <div
        style={{
          width: `${progressValue}%`,
          bgcolor: "pink",
          height: '30px',
        }}
      />
    </div>
  )
};

