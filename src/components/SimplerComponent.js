import React from 'react'

const SimplerComponent = props =>  <div onClick={props.handleClick}> I am just happy. </div>
//the function seems to be called automatically upon mounting component to DOM, rather than when clicked.

export default SimplerComponent
