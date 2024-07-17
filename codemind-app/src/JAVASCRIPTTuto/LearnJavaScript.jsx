import React from 'react'
import "../customDiv.css"
import { NavLink } from 'react-router-dom'

const LearnJavaScript = () => {
  return (
    <>
    <h3><span>JavaScript Tutorial</span></h3>

    <ul type='none' className='list' >

          <li> <NavLink className="nav-link" to="/javascript/introduction">
          JavaScript Introduction
        </NavLink></li>

          <li>JavaScript Getting Started</li>
          
          
    </ul>
  </>
  )
}

export default LearnJavaScript
