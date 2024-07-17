import React from 'react'
import LearnCSS from "./LearnCSS";


const CSS = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-2 customDiv">
          <LearnCSS/>
        </div>
        <div className="col-md-8">
          <h1> CSS Tutorial </h1>
          <p>
            {" "}
            CSS is the language we use to style an HTML document.

CSS describes how HTML elements should be displayed.

This tutorial will teach you CSS from basic to advanced.
          </p>
        </div>
      </div>
    </>
  )
}
export default CSS;


