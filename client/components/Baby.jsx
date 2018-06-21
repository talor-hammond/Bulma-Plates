import React from 'react'

class Baby extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cx: props.cx || Math.random()*800,/*width of game screen*/
            cy: props.cy || Math.random()*600,/*height of game screen*/
            r: 60,
            fill: 'blue'
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

export default Baby