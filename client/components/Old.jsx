import React from 'react'

const Old = props => (
        <g>        
           <circle style={{fill: props.fill}} cx={props.cx} cy={props.cy} r={props.r}  />
            <image href={props.image} x={props.cx-props.r*.8} y={props.cy-props.r*.8} width={props.r*1.6} height={props.r*1.6} />
         
            
        </g>       
)
{/*
    
    

*/}

export default Old