import React from 'react';

export const ProgressBar = (progress) => {
  return (
    <div className='Progress'>
      <ProgressBar 
        bgcolor="pink"
        progress={progress}
        height={30}
      />
    </div>
  )
};

