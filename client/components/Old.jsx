import React from 'react'

const Old = props => (
        <g>
            <circle style={{fill: props.fill}} cx={props.cx} cy={props.cy} r={props.r}  />
        </g>       
)
{/*
    
    <defs>
    <pattern id="img1" patternUnits="userSpaceOnUse" width="100" height="100">
        <image href="/images/old/dafoe.jpg" x="{props.cx}" y="{props.cy}" width="100" height="100" />
    </pattern>
    </defs>

*/}

export default Old