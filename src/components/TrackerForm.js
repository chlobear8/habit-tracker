import React, { useState } from 'react';

export const TrackerForm = () => {
  const [value, setValue] = useState("");
  return (
    <form className='TrackerForm'>
      <input type='text' className='tracker-input' placeholder='What habit would you like to track?' onChange={(e) => console.log(e.target.value)}/>
      <button type='submit' className='tracker-btn'>Add Habit</button>
    </form>
  )
};

