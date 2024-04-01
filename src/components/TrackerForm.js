import React from 'react'

const TrackerForm = () => {
  return (
    <form className='TrackerForm'>
      <input type='text' className='tracker-input' placeholder='What habit would you like to track?'/>
      <button type='submit' className='tracker-btn'>Add Habit</button>
    </form>
  )
}

export default TrackerForm