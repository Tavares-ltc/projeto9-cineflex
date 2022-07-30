import { useState } from 'react'
import './footer.css'
export default function Footer ({posterURL, title, weekday, schedule}) {
    return (
        <div className='footer'>
        <img src={posterURL}/>
        <div>
        <h1>{title}</h1>
        <h1>{weekday} - {schedule}</h1>
        </div>
        </div>
    )
}