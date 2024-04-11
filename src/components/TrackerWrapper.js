import React, { useState } from 'react';
import { TrackerForm } from './TrackerForm';
import { v4 as uuidv4 } from 'uuid';
import { Tracker } from './Tracker';
import { EditTrackerForm } from './EditTrackerForm';
import { ProgressBar } from './ProgressBar';
//import { AppRoutes } from './AppRoutes';
uuidv4();

export const TrackerWrapper = () => {
  const [trackers, setTrackers] = useState([]);
  const [trackersProgress, setTrackerProgress] = useState([]);
  const [showProgressPage, setShowProgressPage] = useState(false);

  const addTracker = tracker => {
    setTrackers([...trackers, {id: uuidv4(), task: tracker,
    completed: false, isEditing: false}])
  };

  const toggleComplete = id => {
    setTrackers(trackers.map(tracker => tracker.id === id ? {...tracker,
    completed: !tracker.completed} : tracker))
  };

  const toggleProgress = id => {
    setTrackerProgress(trackersProgress.map(tracker => tracker.id === id ? {...tracker,
    progress: !tracker.progress} : tracker))
  };

  const deleteTracker = id => {
    setTrackers(trackers.filter(tracker => tracker.id !== id))
  };

  const editTracker = id => {
    setTrackers(trackers.map(tracker => tracker.id === id ? {...tracker,
    isEditing: !tracker.isEditing} : tracker))
  };
  
  const editTask = (task, id) => {
    setTrackers(trackers.map(tracker => tracker.id === id ? {...tracker,
    task, isEditing: !tracker.isEditing} : tracker))
  };

  return (
    <div className='TrackerWrapper'>
      <h1>Track your habits!</h1>
      <TrackerForm addTracker={addTracker} />
      {trackers.map((tracker, index) => (
        <div key={index}>
          <ProgressBar progress={trackersProgress.find(progress => progress.id === tracker.id)?.progress || 0} />
          {tracker.isEditing ? (
            <EditTrackerForm editTracker={editTask} task={tracker}/>
        ) : (
            <Tracker 
            task={tracker} 
            key={index} 
            toggleComplete={toggleComplete}
            toggleProgress={toggleProgress}
            deleteTracker={deleteTracker}
            editTracker={editTracker} 
            />
          )}
        </div>
      ))}
    </div>
  );
};

