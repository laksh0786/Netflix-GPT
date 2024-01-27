import React, { useRef, useState } from 'react'
import { checkValidEmail , checkValidPassword  , checkValidName } from '../utils/validate';

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [emailVal , setIsEmailVal ] = useState(null);
  const [passwordVal , setIsPasswordVal ] = useState(null);
  const [nameVal , setIsNameVal ] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const checkEmail = (e)=>{
    const email = e.target.value;
    if(!checkValidEmail(email)){
      setIsEmailVal("Please enter a valid email");
    }
    else{
      setIsEmailVal(null);
    }
  }

  const checkPassword = ()=>{
    const password = passwordRef.current.value;
    console.log(password)
    if(!checkValidPassword(password)){
      setIsPasswordVal("Please enter a valid password");
    }
    else{
      setIsPasswordVal(null);
    }
  }

  const checkName = ()=>{
    const name = nameRef.current.value;
    if(!checkValidName(name)){
      setIsNameVal("Please enter a valid Name");
    }
    else{
      setIsNameVal(null);
    }
  }

  return (
    <div className=' w-full h-screen sm:absolute sm:top-5 md:top-10'>

      <div className='mt-6 sm:max-w-[400px] lg:max-w-[460px] flex flex-col  sm:bg-black sm:p-5 md:p-8 sm:bg-opacity-70 sm:mx-auto sm:rounded-md'>

        <h2 className='text-3xl md:text-4xl font-bold text-slate-100'>
          {isSignIn ? 'Sign In' : 'Sign up'}
        </h2>

        <form className=' mt-6 sm:mt-6 md:mt-10 flex flex-col gap-5'>

          {
            !isSignIn && (
              <div className='flex flex-col gap-2'>
                <input className='ipt-box' type="text" placeholder='Enter Full Name' ref={nameRef} onBlur={checkName}/>
                <p className='text-red-500 text-sm'>{nameVal}</p>
              </div>

            )
          }

          <div className='flex flex-col gap-2'>
            <input className='ipt-box' type="email" placeholder='Enter Email' ref={emailRef} onBlur={checkEmail}/>
            <p className='text-red-500 text-sm'>{emailVal}</p>
          </div>

          <div className='flex flex-col gap-2'>
            <input className='ipt-box' type="password" placeholder='Enter Password' ref={passwordRef} onBlur={checkPassword} />
            <p className='text-red-500 text-sm'>{passwordVal}</p>
          </div>

          <button className='bg-red-600 py-2 rounded-md hover:bg-red-700 text-slate-100 font-bold duration-200' type='submit'>
            {isSignIn ? 'Sign In' : 'Sign up'}
          </button>

          <p className='text-slate-200 mx-auto hover:text-gray-400 hover:underline cursor-pointer'>Forgot Password? </p>

          <p className='text-gray-400'>{!isSignIn ? 'Already a User?' : 'New to Netflix? '}<span className='cursor-pointer font-bold text-slate-200 hover:underline' onClick={() => setIsSignIn(!isSignIn)}>  {isSignIn ? 'Sign Up' : 'Sign In'}</span> </p>

        </form>


      </div>

    </div>
  )
}

export default Login