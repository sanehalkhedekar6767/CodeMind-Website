import React from 'react'
import "../customDiv.css"
import { NavLink } from 'react-router-dom'

const LearnCSS = () => {
  return (
    <>
    <h3><span>CSS Tutorial</span></h3>

<ul type='none' className='list' >

 <li> <NavLink className="nav-link" to="/css/introduction">
 CSS Introduction
</NavLink></li>

 <li>CSS Getting Started</li>
 <li>Learn CSS </li>
</ul>
 
</>
  )
}

export default LearnCSS



