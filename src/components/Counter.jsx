import React from 'react'
import './Counter.css'

export default props => {
    
    let time = '00:00'

    return(
        <h2 className='counter' contentEditable='true'>{time}</h2>
    )
}