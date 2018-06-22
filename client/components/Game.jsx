import React from 'react'
import Old from './Old'
import mouse from '../mouse'

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      old: [ 
        {cx: 200, cy: 200, r: 60, fill: 'blue'},
        {cx: 800, cy: 500, r: 60, fill: 'red'}
      ],
      young: [],
      babies: []
    }
    this.move = this.move.bind(this)
  }

  move(evt){
    const svgCoords = mouse.mouseTransform(evt.clientX, evt.clientY)
    let old = this.state.old    
    old[0].cx = svgCoords.x
    old[0].cy = svgCoords.y
    console.log(svgCoords);
    console.log(old)
    
    this.setState({old})
  }

 

  render() {
    const gameWindow = {
      width: this.props.width,
      height: this.props.height
    }    

    return (
      <svg onMouseMove={this.move} width={gameWindow.width} height={gameWindow.height}>
        {this.state.old.map(celeb => <Old {...celeb} />)}
        {this.state.young.map(celeb => <Old {...celeb} />)}
        {this.state.babies.map(celeb => <Old {...celeb} />)}
      </svg>
    )
  }
}

export default Game
