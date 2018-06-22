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
      young: [{cx: 700, cy: 200, r: 40, fill: 'yellow'}],
      babies: [{cx: 400, cy: 300, r: 25, fill: 'pink'}]
    }
    this.move = this.move.bind(this)
  }

  move(evt){
    const svgCoords = mouse.mouseTransform(evt.clientX, evt.clientY)
    let {old, young, babies} = this.state    
    old[0].cx = svgCoords.x
    old[0].cy = svgCoords.y 
    young.concat(this.oldCollisions(old))
    babies.concat(this.youngCollisions(young))
    this.setState({old, young, babies})
  }

  oldCollisions(old){
    let newObjs = iteratePairs(old)
    newObjs.forEach(element => {
      element.r = 40
      element.fill = 'yellow'      
    });
    return newObjs
  }
  
  youngCollisions(young){
    let newObjs = iteratePairs(young)
    newObjs.forEach(element => {
      element.r = 25
      element.fill = 'pink'      
    });
    return newObjs
  }


  iteratePairs(arr){
    let newObjs = []
    for (let i = 0; i < arr.length-1; i++){
      for(let j = i+1; j < arr.length; j++){
        if (mouse.checkForCollision(arr[i], arr[j]) && Math.random() > 0.99) newObj.push(mouse.processCollision(arr[i], arr[j]))
      }
    }
    return newObjs
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
