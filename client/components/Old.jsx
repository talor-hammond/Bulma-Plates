import React from 'react'

class Old extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cx: props.cx || Math.random()*800,/*width of game screen*/
            cy: props.cy || Math.random()*600,/*height of game screen*/
            r: 120,
            fill: 'red'
        }
    }
    render() {
        return (
            <React.Fragment>
                <circle style={{fill: (this.state.fill)}} cx={this.state.cx} cy={this.state.cy} r={this.state.r}  />
            </React.Fragment>
        )
    }
}

export default Old