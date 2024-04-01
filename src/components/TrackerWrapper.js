import React, { useState } from 'react';
import { TrackerForm } from './TrackerForm';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export const TrackerWrapper = () => {
  const [tracker, setTracker] = useState([]);

  const addTracker = tracker => {
    setTracker([...tracker, {id: uuidv4(), task: tracker, completed: false, isEditing: false}])
    console.log(tracker);
  };

  return (
    <div className='TrackerWrapper'>
      <TrackerForm addTracker={addTracker} />
    </div>
  )
};

