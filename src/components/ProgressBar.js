import React from 'react';

export const ProgressBar = ({progress}) => {  

  return (
    <div className='w3-light-grey'>
      <div className='w3-container w3-green w3-center'
        style={{
          width: `${progress}%`}}>
          {progress}%
        </div>
    </div>
  );
};

