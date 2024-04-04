import React, { useState } from 'react';

export const EditTrackerForm = ({editTracker, task}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = e => {
    e.preventDefault();
    editTracker(value, task.id);
    setValue("");
  }
  return (
    <form className='EditTrackerForm' onSubmit={handleSubmit}>
      <input type='text' className='tracker-input' value={value}
      placeholder='Update Habit' onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='tracker-btn'>Update Habit</button>
    </form>
  )
};



