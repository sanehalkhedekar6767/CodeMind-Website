import React from 'react'
import "../customDiv.css"
import { NavLink } from 'react-router-dom'

const LearnHTML = () => {
  return (
    <>
    <h3><span>HTML Tutorial</span></h3>

<ul type='none' className='list' >

 <li> <NavLink className="nav-link" to="/html/introduction">
 HTML Introduction
</NavLink></li>

 <li>HTML Getting Started</li>
 <li>Learn HTML </li>
</ul>
 
</>
  )
}

export default LearnHTML




