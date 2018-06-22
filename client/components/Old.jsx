import React from 'react'

const Old = props => (
        <g>        
           <circle style={{fill: props.fill}} cx={props.cx} cy={props.cy} r={props.r}  />
            <image href={props.image} x={props.cx-props.r} y={props.cy-props.r} width={props.r*2} height={props.r*2} />
         
            
        </g>       
)
{/*
    
    

*/}

export default Old