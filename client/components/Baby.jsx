import React from 'react'

class Baby extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cx: props.cx,/*width of game screen*/
            cy: props.cy,/*height of game screen*/
            r: 60,
            fill: 'blue'
        }
        this.updatePos = this.updatePos.bind(this)
    }
    
    updatePos(x,y) {
        this.setState({cx: x, cy: y})
    }

    render() {
        return (
            <React.Fragment>
                <circle style={{fill: (this.state.fill)}} cx={this.state.cx} cy={this.state.cy} r={this.state.r}  />
            </React.Fragment>
        )
    }
}

export default Baby