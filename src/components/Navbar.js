import React from 'react'
import logo from "../assets/Logonetflix.png"

const Navbar = () => {
  return (
    <div className='sm:absolute sm:top-4 sm:left-6 md:left-8 lg:left-32 '>
        <div>
            <img className='w-24 sm:w-[6rem] md:w-[7rem] ' src={logo} alt="logo"/>
        </div>
    </div>
  )
}

export default Navbar