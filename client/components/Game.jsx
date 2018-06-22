import React from 'react'
import Old from './Old'

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      celebs: [ 
        {
          cx: 200, cy: 200
        }
      ]
    }
    this.move = this.move.bind(this)
  }

  move(e){
    console.log('click')
  }

  render() {
    const gameWindow = {
      width: this.props.width,
      height: this.props.height
    }

    console.log(gameWindow);
    console.log(window);

    {/* {this.state.celebs.map(celeb => celeb)} */ }

    return (
      <svg onClick={this.move} width={gameWindow.width} height={gameWindow.height}>
        {this.state.celebs.map(celeb => <Old {...celeb} />)}
      </svg>
    )
  }
}

export default Game
