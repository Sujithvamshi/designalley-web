import React, { useState } from 'react'
import Register from './Register'

function Login() {
    const [inputVal,setInputVal] = useState(null)
    const [otp,setOtp] = useState(null)
    const [otpScreen,setOtpScreen] = useState(false)
    const [registerScreen,setRegisterScreen] = useState(false)
    const sendOtp = ()=>{
        setOtpScreen(true);
    }
    if(otpScreen){
        return (
            <div className='min-h-screen flex flex-col justify-center items-center'>
                <p className="bw-2/3 text-lg">OTP sent to {inputVal}</p>
                <input type='password' value={otp} onChange={(e)=>{setOtp(e.target.value)}} placeholder='Please Enter OTP' className="bg-gray-300 w-2/3 text-center p-2 text-sm rounded-sm"></input>
                <button onClick={()=>{login()}} className="bg-[#be9682] m-4 w-2/3 text-white text-lg rounded-sm p-1">Login</button>
                <a className="text-sm underline text-gray-600" href={()=>{}}>Don't have an account?</a>
            </div>

        )
    }
    else if(registerScreen){
        return <Register/>
    }
    else{
        return (
            <div className='min-h-screen flex flex-col justify-center items-center'>
                <input value={inputVal} onChange={(e)=>{setInputVal(e.target.value)}} placeholder='Mobile Number/Email Address' className="bg-gray-300 w-2/3 text-center p-2 text-sm rounded-sm"></input>
                <button onClick={()=>{sendOtp()}} className="bg-[#be9682] m-4 w-2/3 text-white text-lg rounded-sm p-1">Send OTP</button>
                <a className="text-sm underline text-gray-600" onClick={()=>{setRegisterScreen(true)}}>Don't have an account?</a>
            </div>
        )
    }
}

export default Login