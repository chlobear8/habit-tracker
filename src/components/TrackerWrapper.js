import React, { useState } from 'react';
import { TrackerForm } from './TrackerForm';
import { v4 as uuidv4 } from 'uuid';
import { Tracker } from './Tracker';
uuidv4();

export const TrackerWrapper = () => {
  const [trackers, setTrackers] = useState([]);

  const addTracker = tracker => {
    setTrackers([...trackers, {id: uuidv4(), task: tracker,
    completed: false, isEditing: false}])
  };

  const toggleComplete = id => {
    setTrackers(trackers.map(tracker => tracker.id === id ? {...tracker,
    completed: !tracker.completed} : tracker))
  }
  return (
    <div className='TrackerWrapper'>
      <h1>Track your habits!</h1>
      <TrackerForm addTracker={addTracker} />
      {trackers.map((tracker, index) => (
        <Tracker task={tracker} key={index} toggleComplete={toggleComplete} />
      ))}

    </div>
  )
};

