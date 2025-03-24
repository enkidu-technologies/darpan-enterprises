import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='text-center m-5 bg-white p-5 shadow'>
      <h1 className='display-1 text-primary'>404</h1>
      <h3>Not Found!</h3>
      <Link to="/">Go back to Home</Link>
    </div>
  )
}

export default NotFound