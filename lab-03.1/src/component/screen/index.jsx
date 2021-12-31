import React from 'react'
import './style.css'
export default function Screen(props) {
    return (
        <input className='screen'
             type='text' value={props.value} />
    )
}
