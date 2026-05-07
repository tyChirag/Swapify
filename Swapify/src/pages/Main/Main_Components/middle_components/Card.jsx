import React from 'react'

const Card = (props) => {
  return (
    <div className='border-gray-300'>
      <h1>props.heading</h1>
      <h3>props.title</h3>
      <p>props.desc</p>
    </div>
  )
}

export default Card
