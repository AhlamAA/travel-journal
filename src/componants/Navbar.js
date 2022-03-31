import React from 'react'
import World from '../images/location.png'

export default function Navbar() {
  return (
    <div className='nav'>
        <img src={World}/>
        <h1>My Travel Journal</h1>
    </div>
  )
}
