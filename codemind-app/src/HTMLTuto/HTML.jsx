import React from 'react'
import LearnHTML from './LearnHTML'

const HTML = () => {
  return (
    <>
    <div className="row">
      <div className="col-md-2 customDiv">
        <LearnHTML/>
      </div>
      <div className="col-md-8">
        <h1> HTML Tutorial </h1>
        <p>
          {" "}
          HTML is the standard markup language for Web pages.

With HTML you can create your own Website.

HTML is easy to learn - You will enjoy it!
        </p>
      </div>
    </div>
  </>
  )
}

export default HTML
