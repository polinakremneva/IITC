import React from 'react';
function TodoStatistics(props){
    return (
        <div className="statistics">
        <p>Total Todos: {props.totalTodos}</p>
        <p>Completed Todos: {props.completedTodos}</p>
        <p>Active Todos: {props.activeTodos}</p>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${props.completionPercentage}%` }}></div>
        </div>
      </div>
    )
}
export default TodoStatistics;