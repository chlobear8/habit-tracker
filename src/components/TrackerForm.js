import React, { useState } from 'react';

export const TrackerForm = ({addTracker}) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTracker(value);
  }
  return (
    <form className='TrackerForm' onSubmit={handleSubmit}>
      <input type='text' className='tracker-input' placeholder='What habit would you like to track?' onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='tracker-btn'>Add Habit</button>
    </form>
  )
};

