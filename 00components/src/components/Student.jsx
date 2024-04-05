// Build Student component that takes props to understand
// props: are arguments passed into React components
// propsType: ensures the correct type of props are passed to the component
// defaultProps: sets default values for props

import React from 'react'
import PropTypes from 'prop-types'
import './Student.css'


export default function Student(props) {
  return (
    <div className='student'>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
Student.defaultProps = {
    name: 'Guest',
    age: 0,
    isStudent: false
}