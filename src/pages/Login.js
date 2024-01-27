import React from 'react'
import Navbar from '../components/Navbar'
import SignIn from '../components/Login'
import bgImage from '../assets/bg-image.jpg'

const Login = () => {
  return (
    <div className='w-full bg-black sm:bg-transparent'>

      <div className='p-5 sm:p-0 sm:relative'>

        {/* Background Image */}
        <div className='sm:bg-black  '>
          <img className='hidden sm:block w-screen min-h-[700px] object-cover opacity-50' src={bgImage} alt="Movies Cover" />
        </div>

        <Navbar />

        <SignIn/>

      </div>

    </div>
  )
}

export default Login