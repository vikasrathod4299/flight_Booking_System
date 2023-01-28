import React from "react";
import { useState } from "react";
import OtpInput from 'react-otp-input';
import loginBanner from '../Assets/Images/loginBanner.png'

const LoginPopUp = ({showLogin}) => {
    const [otpToggler, setToggler] = useState(true)
    const [email,setEmail] = useState('')
    const [otpValue, setOtpValue] = useState('')

    const handleOtp = (data)=>{
        setOtpValue(data)
    }    

    
    return (
    <div className=" z-50 fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-gray-900 bg-opacity-50 ">
        <div className="bg-white shadow-lg bg-clip-padding bg-opacity-25 border backdrop-blur-lg border-gray-200 rounded-lg p-6">
            <div className="flex justify-end ">
                <button onClick={showLogin}>
                    <i className="fa-solid fa-circle-xmark text-white text-xl"/>
                </button>
            </div>
            <div className="flex gap-x-8 ">
                <div className="shadow-lg ">
                    <img className="h-96 w-70 rounded-lg " src={loginBanner} alt="loginBanner" />
                </div>
                <div className="flex flex-col mt-5 font-mono text-white font-semibold">
                    <h2 className="text-lg  mb-4">Login / SignUp</h2>
                    {otpToggler && <div className="mb-4">
                        <label className="block  mb-2 ">Email:</label>
                        <input className={`bg-gray-200 p-2 rounded w-full outline-white`} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email..." required/>
                    </div>}

                    {!otpToggler && <div className="mb-4">
                        <label className="block  mb-2 ">Enter Otp:</label>
                        <OtpInput
                            className={'text-slate-400 p-3 h-2'}
                            value={otpValue}
                            numInputs={4}
                            onChange={handleOtp}
                            separator={<span>-</span>}
                            />
                    </div>}

                    <div className="mb-4">
                        <input className="shadow-lg px-4 py-2 rounded bg-indigo-500 outline-none text-white cursor-pointer" type="submit" value="Continue" onClick={()=>setToggler(otpToggler?false:true)}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
  );
};

export default LoginPopUp;
