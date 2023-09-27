import React from 'react'

function Todo(props) {
  return (
    <div>
        <li>{props.text}</li>
        <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

export default Todo