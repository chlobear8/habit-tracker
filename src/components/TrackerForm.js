import React, { useState } from 'react';

export const TrackerForm = ({addTracker}) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTracker(value);
    setValue("");
  }
  return (
    <form className='TrackerForm' onSubmit={handleSubmit}>
      <input type='text' className='tracker-input' value={value}
      placeholder='Add a habit to track?' onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='tracker-btn'>Add Habit</button>
    </form>
  )
};

