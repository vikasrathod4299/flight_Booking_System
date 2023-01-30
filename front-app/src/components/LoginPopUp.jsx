import React from "react";
import { useState } from "react";
import OtpInput from 'react-otp-input';
import {useForm } from "react-hook-form";
import loginBanner from '../Assets/Images/loginBanner.png'
import axios from "axios";


const LoginPopUp = ({showLogin, setUser, user}) => {
    const [otpToggler, setToggler] = useState('send')
    const [loader, setLoader] = useState('idle')
    const [mobile,setMobile] = useState('')
    const [otpValue, setOtpValue] = useState('')
    const [err, setErr] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = async(data) => {
        try{
            setLoader('fetching')
            await axios.post(`${process.env.REACT_APP_API_URL}auth/sendOtp`,data)
            setLoader('success')
        }catch(err){
            console.log(err)
        }
        setMobile(data.mobile)    
        setToggler('verify')
    };

    
    const onSubmitUser = async(data)=>{
        try{
            const res = await axios.post(`${process.env.REACT_APP_API_URL}auth/register`,data)
            setUser(res.data)
            setToggler('welcome')
            setTimeout(()=>{showLogin()},2000)
        }catch{
            console.log(err);
        }
    }

    const handleOtp = async (otp)=>{
        setOtpValue(otp)
        if(otp.length===4){
            try{
                const data={mobile,code:otp}
                const res = await axios.post(`${process.env.REACT_APP_API_URL}auth/varifyOtp`,data)
                if(res.data.status==='approved'){
                    if(res.data.userData){
                        console.log(res.data.userData);
                        setUser(res.data.userData)
                        setToggler('welcome')
                        setTimeout(()=>{showLogin()},2000)
                    }else{
                        setToggler('register')
                    }
                }else{
                    alert('Wrong OTP!')
                    setErr(true)
                }
            }catch(err){
                console.log(err);
            }
        }
    }   

    return (
        <div className=" z-50 fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white shadow-lg bg-clip-padding bg-opacity-25 border backdrop-blur-lg border-gray-200 rounded-lg p-6">
                {otpToggler!=='welcome' && <div className="flex justify-end ">
                    <button onClick={showLogin}>
                        <i className="fa-solid fa-circle-xmark text-white text-xl"/>
                    </button>
                </div>}
                <div className="flex gap-x-8">
                    {(otpToggler!=='register' && otpToggler!=='welcome') && <div className="shadow-lg">
                        <img className="h-96 w-70 rounded-lg " src={loginBanner} alt="loginBanner" />
                    </div>}
                    <div className="flex flex-col mt-5 font-mono text-white font-semibold">
                        {otpToggler==='send' && 
                        <div className="mb-4 ">
                            <h2 className="text-lg ">Login / SignUp</h2>
                            <label className="block mb-2 ">Email:</label>
                            <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col">
                                    <input className={`bg-gray-200 p-2 rounded  outline-white text-slate-400`} {...register('mobile',{required:true, minLength:{value:10,},maxLength:{value:10}})} type="number" placeholder="Enter Phone number..."/>
                                    {(errors.mobile?.type==='minLength' || errors.mobile?.type==='maxLength') && <span className="text-red-500 text-xs mt-2">Invalid Phone Number...</span>}
                                    {errors.mobile?.type==='required' && <span className="text-red-500 text-xs mt-2">Phone Number is required...</span>}
                                </div>                                
                                {loader==='idle'&&<input className="shadow-lg px-4 py-2 w-1/2 rounded bg-indigo-500 outline-none text-white cursor-pointer" type="submit" value="Send OTP"/>}
                                {loader==='fetching'&& <button type="button" className="flex items-center shadow-lg text-xs px-4 py-2 w-1/2 rounded bg-indigo-500 outline-none text-white cursor-pointer" disabled>
                                                                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                </svg>
                                                            Sending
                                                        </button>}
                            </form>
                        </div>}

                        {otpToggler==='verify' && <div className="mb-4">
                            <h2 className="text-lg">Login / SignUp</h2>
                            <div className="text-xs my-2">
                                <code className="">{mobile}</code>
                                <p onClick={()=>{setToggler('send');setLoader('idle')}} className={'text-blue-500 underline cursor-pointer'}>Change Number</p>
                            </div>
                            <label className="block my-2 ">Enter Otp:</label>
                            {loader==='success'&&<OtpInput
                                className={'text-slate-400 w-12 p-2'}
                                value={otpValue}
                                onChange={handleOtp}
                                inputStyle={' rounded-md'}
                                numInputs={4}
                                hasErrored={err}
                                />}
                        </div>}
                        {otpToggler==='register' &&
                            <form className="flex flex-col gap-y-8 text-slate-400" onSubmit={handleSubmit(onSubmitUser)}>
                                <h2 className="text-lg text-white">Sign Up</h2>
                                <div className='flex gap-x-20 justify-between'>
                                    <div className="flex flex-col">
                                        <input className="p-3 rounded-lg outline-blue-500" {...register('first_name',{required:true})} type="text" id="first_name" name="first_name" placeholder="Enter First Name"/>
                                        {errors.first_name && <span className="text-xs text-red-500">First Name is required</span>}
                                    </div>
                                    <div className="flex flex-col">
                                        <input className="p-3 rounded-lg outline-blue-500" {...register('last_name',{required:true})} type="text" id="last_name" name="last_name" placeholder="Enter Last Name"/>
                                        {errors.last_name && <span className="text-xs text-red-500">Last Name is required</span>}
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <input className="p-3 rounded-lg outline-blue-500"  {...register('email',{required:true})} type="email" id="email" name="email" placeholder="Enter Email"/>
                                    {errors.email && <span className="text-xs text-red-500">Email is required</span>}
                                </div>

                                <input className="shadow-lg px-4 py-2 rounded bg-indigo-500 outline-none text-white cursor-pointer" type="submit" value="Register" />
                            </form>
                        }
                        {otpToggler==='welcome' &&
                            <div className="flex flex-col justify-center  items-center h-80 w-96 text-white">

                                <div className=" flex h-full justify-center flex-col items-center gap-6">
                                    
                                    <p className="text-6xl font-bold tracking-widest">Welcome</p>
                                    <code className=" text-4xl font-thin">{user.first_name}</code>
                                </div>
                                
                                <div className="flex justify-end italic tracking-widest text-sm">
                                    <p>Let's fly.</p>
                                </div>   
                            </div>
                        }
                      </div>
                </div>
            </div>
        </div>
  );
};

export default LoginPopUp;
