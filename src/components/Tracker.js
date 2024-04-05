import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Tracker = ({task, toggleComplete, toggleProgress, deleteTracker, editTracker}) => {
  return (
    <div className='Tracker'>
      <p onClick={() => toggleComplete(task.id)} 
      className={`${task.completed ? 'completed' : ""}`}>
      {task.task}</p>
      {/* <p onClick={() => toggleProgress(task.id)} 
      className={`${task.progress ? 'progress' : ""}`}>
      {task.task}</p> */}
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTracker(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTracker(task.id)} />
        <FontAwesomeIcon icon={faBarsProgress} onClick={() => toggleProgress(task.id)} />
      </div>
    </div>
  )
};

