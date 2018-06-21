import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Game from './Game'

const App = () => (
  <Router>
    <div className="hero is-dark is-fullheight" >
      <div className="hero-head">
        <div className="container has-text-centered">
          <h1 className="title is-spaced">Celebabies: Life in High-Profile</h1>
        </div>
      </div>

      <div className="hero-body">
        <div id='game-board'>
          <Game width={window.innerWidth*0.9} height={window.innerHeight*0.9}/>
        </div>
      </div>

      <div className="hero-foot">
        <h3>asdfasdf</h3>
      </div>
    </div>
  </Router>
)

export default App
