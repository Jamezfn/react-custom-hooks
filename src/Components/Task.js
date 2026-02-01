import React from 'react';
import './Task.css';

function Task(props) {
  function onDeleteTask(id) {
    props.onDeleteTask(id);
  }

  return (
    <div className="task-list">
      {props.tasks.map((task) => {
        return (
          <div className="task-card" key={task.id}>
            <p>{task.name}</p>
            <button 
              className="btn btn-danger" 
              onClick={() => onDeleteTask(task)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Task;