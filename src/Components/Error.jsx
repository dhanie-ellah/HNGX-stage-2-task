import React from 'react'
import { Link } from 'react-router-dom'
import ErrorImage from '../Assets/404-error.png'

const Error = () => {
  return (
    <div className=' h-screen flex justify-center items-center'>
      <div className=' text-center'>
        <h1 className=' font-extrabold text-5xl uppercase text-red md:text-lg'>Page not found</h1>
        <img src={ErrorImage} alt="" className=' w-[30%] m-auto' />
        <Link to="/" className=' text-sm font-bold underline'>Go back to Homepage</Link>
      </div>
    </div>
  );
}

export default Error