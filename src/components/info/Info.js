import { Typography } from '@mui/material'
import React from 'react'
import "./info.css"
const Info = (props) => {
  return (
    <div className='container'>
        <div >
            <img alt='icon' src={props.img}></img>
        </div>
        <div className='contents'>
            <Typography style={{fontSize:16,display:"flex",justifyContent:"flex-start"}}>{props.con1}</Typography>
            <Typography style={{fontSize:12,display:"flex",justifyContent:"flex-start"}}>{props.con2}</Typography>
        </div>
    </div>
  )
}

export default Info