import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Tracker = ({task, toggleComplete, deleteTracker, editTracker}) => {
  return (
    <div className='Tracker'>
      <p onClick={() => toggleComplete(task.id)} 
      className={`${task.completed ? 'completed' : ""}`}>
      {task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTracker(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTracker(task.id)} />
      </div>
    </div>
  )
};

