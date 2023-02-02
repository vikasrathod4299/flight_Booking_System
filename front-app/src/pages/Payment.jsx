import React from "react";
import axios from "axios";
import OtpInput from 'react-otp-input';
import { useNavigate } from "react-router-dom";
import paymentImg from '../Assets/Images/paymanetImg.png'
import {useForm } from "react-hook-form";
import {useAuth} from '../Hooks/useAuth';
import { useEffect } from "react";
import { useState } from "react";

const Payment = () => {
  const navigate = useNavigate();
  const bookingData = JSON.parse(localStorage.getItem("bookingData"));
  const [otpValue, setOtpValue] = useState('')
  const {user, setUser} = useAuth();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const bookFlight = () => {
        const headers = {'Authorization':user.accessToken}

        const passengers = [];
        for (let i = 1; i <= bookingData.adult; i++) {
          passengers.push({
            first_name: bookingData.passengers[`adult${i}firstName`],
            last_name: bookingData.passengers[`adult${i}lastName`],
            gender: bookingData.passengers[`adult${i}title`],
            p_type: "adult",
          });
        }

        for (let i = 1; i <= bookingData.child; i++) {
          passengers.push({
            first_name: bookingData.passengers[`child${i}firstName`],
            last_name: bookingData.passengers[`child${i}lastName`],
            gender: bookingData.passengers[`child${i}title`],
            p_type: "child",
          });
        }

        const seats = [];
          bookingData.bookedSeats.forEach((item) => {
          seats.push({
            seat_number: item,
            seat_class:
              (item <= 50 && "Economy") ||
              (item > 50 && item <= 100 && "Business") ||
              (item > 100 && "Premium"),
            flightId: bookingData.flightId,
          });
        });

        (async () => {
          try {
            const data = await axios.post(
              `${process.env.REACT_APP_API_URL}bookings/${user.id}`,
              {
                bookingData: {
                  total_price: bookingData.total_price,
                  total_passengers: bookingData.adult + bookingData.child,
                  total_adult: bookingData.adult,
                  total_child: bookingData.child,
                  flightId: bookingData.flightId,},
                  seats,
                  passengers,
              },
                {headers}
                );
                navigate("/");
              } catch(err) {
                console.log(err);
              }
            })();
    
  };

  useEffect(()=>{
    if(!user)(async()=>{
      try{
        const res = await axios.post(`${process.env.REACT_APP_API_URL}auth/sendOtp`,{mobile:bookingData.passengers.phone})
        console.log(res.data);
    }catch(err){
        console.log(err)
    }
    })()
  },[user,bookingData.passengers.mobile])

  const handleOtp =  async (otp) =>{
        setOtpValue(otp)
        if(otp.length===4){
          try{
            const data={mobile:bookingData.passengers.phone,code:otp}
            const res = await axios.post(`${process.env.REACT_APP_API_URL}auth/varifyOtp`,data)
            console.log(res);
              if(res.data.status==='approved'){
                  if(!res.data.userData){
                    const res = await axios.post(`${process.env.REACT_APP_API_URL}auth/register`,{mobile:bookingData.passengers.phone,email:bookingData.passengers.email})
                    setUser({...res.data.userData, accessToken:res.data.accessToken})
                  }
              }else{
                  alert('Wrong OTP!')
              }
          }catch(err){
              console.log(err);
          }
      }
  }


  return (
    <div className="top-0 left-0 h-screen w-screen flex items-center justify-center bg-[url('https://res.cloudinary.com/practicaldev/image/fetch/s--RNNNA7AE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/69592270/101304060-72ff5b00-380d-11eb-8c58-a3172d791c9c.png')] bg-cover bg-center">

        <div className="bg-white shadow-lg bg-clip-padding bg-opacity-25 border backdrop-blur-lg border-gray-200 rounded-lg p-6">
              <div className="flex gap-x-8">
                      <div className="shadow-lg">
                                <img className="h-[300px] w-[500px] rounded-lg " src={paymentImg} alt="loginBanner" />
                      </div>
                      <div className="flex flex-col gap-y-4 text-white " >
                          <div >
                              <p className="text-3xl font-bold italic ">Payments</p>
                          </div>
                          {user && 
                          <>
                          <div>
                              <code className=" font-bold">{bookingData.total_price.toLocaleString("en-IN", {style: "currency",currency: "INR",}).slice(0, -3)}/-</code>
                          </div>
                          <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(bookFlight)}>
                              <lable className="text-sm ">Enter Amount:</lable>
                              <input className="p-2 rounded-md text-gray-400 outline-blue-400" name="amount" id="amount" {...register('amount',{required:true,validate:()=>bookingData.total_price==getValues('amount')})} type='number'/>
                              {errors.amount?.type==='validate' && <span className="text-xs">Enter valid amount!</span>}
                              {errors.amount?.type==='required' && <span className="text-xs">This field is required!</span>}
                              <div>
                                  <button className="bg-green-500 p-2 w-full rounded-md font-bold italic">
                                      Pay now <span><i className="fa-regular fa-credit-card"></i></span>
                                  </button>
                              </div>
                          </form>
                          </>
}
                          {!user && <form className="flex flex-col gap-y-4" >
                                <lable className="text-sm ">Enter OTP:</lable>
                                  <OtpInput
                                  className={'text-slate-400 w-12 p-2'}
                                  value={otpValue}
                                  onChange={handleOtp}
                                  inputStyle={' rounded-md'}
                                  numInputs={4} />
                              </form>}
                      </div>
              </div>
        </div>
    </div>
  );
};

export default Payment;
