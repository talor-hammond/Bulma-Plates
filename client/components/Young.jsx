import React from 'react'

const Young = props => {   
    const fill = 'yellow'
    
        return (
        <g>
            <circle style={{fill: (fill)}} cx={props.cx} cy={props.cy} r={props.r}  />
        </g>
       
        )
}

export default Young
