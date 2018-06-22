import React from 'react'
import Old from './Old'
import mouse from '../mouse'

const oldPics = [
  '/images/old/dafoe.jpg',
  '/images/old/trump.jpg'
]

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      old: [ 
        {cx: Math.random() * props.width, cy: Math.random() * props.height, r: 60, fill: 'red'},
        {cx: Math.random() * props.width, cy: Math.random() * props.height, r: 60, fill: 'red'},
        {cx: Math.random() * props.width, cy: Math.random() * props.height, r: 60, fill: 'red'},
        {cx: Math.random() * props.width, cy: Math.random() * props.height, r: 60, fill: 'red'},
        {cx: Math.random() * props.width, cy: Math.random() * props.height, r: 60, fill: 'red'},
        {cx: Math.random() * props.width, cy: Math.random() * props.height, r: 60, fill: 'red'}
      ],
      young: [],
      babies: []
    }
    this.move = this.move.bind(this)
    this.oldCollisions = this.oldCollisions.bind(this)
    this.youngCollisions = this.youngCollisions.bind(this)
    this.reactMouse = this.reactMouse.bind(this)
  }

  move(evt){
    const svgCoords = mouse.mouseTransform(evt.clientX, evt.clientY)
    let {old, young, babies} = this.state    
    this.reactMouse(svgCoords.x, svgCoords.y)    
    young = young.concat(this.oldCollisions(old))
    babies = babies.concat(this.youngCollisions(young))
    this.setState({old, young, babies})
  }

  reactMouse(x, y){
    let {old, young, babies} = this.state
    for (let i=0; i < old.length; i++){
      //console.log(old[i], x,y)
      if (mouse.checkMouseDistance(old[i],x,y) < 500) mouse.moveFromMouse(old[i],x,y)
    }
    for (let i=0; i < young.length; i++){
      if (mouse.checkMouseDistance(young[i],x,y) < 400) mouse.moveFromMouse(young[i],x,y)
    }
    for (let i=0; i < babies.length; i++){
      if (mouse.checkMouseDistance(babies[i],x,y) < 300) mouse.moveFromMouse(babies[i],x,y)
    }
    this.setState({old, young, babies})
  }

  oldCollisions(old){
    let newObjs = this.iteratePairs(old)
    newObjs.forEach(element => {
      element.r = 40
      element.fill = 'yellow'      
    });
    return newObjs
  }
  
  youngCollisions(young){
    let newObjs = this.iteratePairs(young)
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
        if (mouse.checkForCollision(arr[i], arr[j]) && Math.random() > 0.99) newObjs.push(mouse.processCollision(arr[i], arr[j]))
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
