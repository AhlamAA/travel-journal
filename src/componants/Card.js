import React from 'react'
import pin from '../images/placeholder.png'

export default function Card(props) {
  return (
    <div className='one-card'>
        <img src={props.imageUrl} className='cover-img'/>
        <div className='info'>
            <div className='location'>
                <img src={pin}/>
                <p>{props.location}</p>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h2>{props.title}</h2>
            <h4>{props.startDate} - {props.endDate}</h4>
            <p>{props.description}</p> 
        </div>
    </div>
  )
}
