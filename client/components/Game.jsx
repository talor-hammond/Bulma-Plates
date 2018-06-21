import React from 'react'

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state
  }

  render() {
    const gameWindow = {
      width: this.props.width,
      height: this.props.height
    }

    console.log(gameWindow);
    console.log(window);
    
    return <div>hello</div>
  }
}

export default Game
