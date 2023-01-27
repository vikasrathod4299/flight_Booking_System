import React from "react";

const LoginPopUp = () => {
  return (
    <div>
    <div class="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div class="bg-white rounded p-6">
                <h2 class="text-lg font-medium mb-4">Login</h2>
                <div class="mb-4">
                    <label class="block text-gray-700 font-medium mb-2">Email</label>
                    <input class="bg-gray-200 p-2 rounded w-full" type="email" required/>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-medium mb-2">Password</label>
                    <input class="bg-gray-200 p-2 rounded w-full" type="password" required/>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-medium mb-2">OTP</label>
                    <input class="bg-gray-200 p-2 rounded w-full" type="text" required/>
                </div>
                <div class="mb-4"/>
                    <input class="px-4 py-2 rounded bg-indigo-500 text-white" type="submit" value="Login"/>
                </div>
        </div>
    </div>
  );
};

export default LoginPopUp;
