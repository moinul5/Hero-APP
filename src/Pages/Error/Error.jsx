import React from 'react'
import errorImage from '../../assets/error-404.png'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center gap-4">
      <img className="" src={errorImage} alt="Error 404" />
      <h1 className="text-3xl font-bold bg-amber-300 px-4 py-2 rounded-md">
        Oops, page not found!
      </h1>
      <p className="text-gray-600">The page you are looking for is not available.</p>
      <Link to={'/'} className="bg-[#9F62F2] hover:bg-[#752bdc] text-white px-4 py-2 rounded-md">
        Go Back
      </Link>
    </div>
  )
}

export default Error
