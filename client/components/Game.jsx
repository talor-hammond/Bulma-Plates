import React from 'react'

class Game extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.width);
    return <div>hello</div>
  }
}

export default Game
