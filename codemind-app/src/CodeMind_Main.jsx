import React from 'react'

import {
    BrowserRouter,
    Routes,Route
  } from "react-router-dom";
import HTML from './HTMLTuto/HTML';
import CSS from './CSSTuto/CSS';
import JavaScript from './JAVASCRIPTTuto/JavaScript';
import React_Main from './ReactTuto/React_Main';
import React_Intro from './ReactTuto/React_Intro';
import JavaScript_Intro from './JAVASCRIPTTuto/JavaScript_Intro';
import CSS_Intro from './CSSTuto/CSS_Intro';
import HTML_Intro from './HTMLTuto/HTML_Intro';

const CodeMind_Main = () => {
  return (
    <>
    <BrowserRouter>

 <nav class="navbar navbar-expand-lg bg-body-dark">
  <div class="container-fluid">
    <div class="collapse navbar-collapse navbar" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <h4 id='codemind'><span>Code</span>Mind</h4>
          {/* <img src="codemind-app/src/image.png" width="10" height="10" class="d-inline-block " alt="image"/> */}

        </li>
        <li> </li>
        <li class="nav-item">
          <a class="nav-link  list" aria-current="page" href="/html">HTML</a>
        </li>
        <li class="nav-item">
          <a class="nav-link list" href="/css">CSS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link list" href="/javaScript">JavaScript</a>
        </li>
        <li class="nav-item">
          <a class="nav-link list" href="/react">React</a>
        </li>
        <li class="nav-item">
          <input type="text" class="form-control" type="text" placeholder="Search Courses Here" />
        </li>
      </ul>
    </div>
  </div>
</nav>

    <Routes>
            <Route exact path='/html' element={<HTML/>} ></Route>
            <Route exact path='/css' element={<CSS/>}></Route>
            <Route exact path='/javaScript' element={<JavaScript/>} ></Route>
            <Route exact path='/react' element={<React_Main/>} ></Route>
            <Route exact path='/react/introduction' element={<React_Intro/>} ></Route>
            <Route exact path='/javascript/introduction' element={<JavaScript_Intro/>} ></Route>
            <Route exact path='/css/introduction' element={<CSS_Intro/>} ></Route>
            <Route exact path='/html/introduction' element={<HTML_Intro/>} ></Route>


    </Routes>

</BrowserRouter>
    </>
  )
}

export default CodeMind_Main
