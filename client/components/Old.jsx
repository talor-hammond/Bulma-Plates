import React from 'react'

class Old extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            r: 120,
            fill: 'red' 
        }
        this.updatePos = this.updatePos.bind(this)
        this.getPos = this.getPos.bind(this)
    }
    
    updatePos(x,y) {
        this.setState({cx: x, cy: y})
    }

    getPos() {
        const pos = this.state
        return {cx: pos.cx, cy: pos.cy}
    }

    render() {
        console.log(this.state)
        return (
        <g>
            <circle style={{fill: (this.state.fill)}} cx={this.props.cx} cy={this.props.cy} r={this.state.r}  />
        </g>
       
        )
    }
}

export default Old