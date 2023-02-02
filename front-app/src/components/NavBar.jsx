import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

const NavBar = () => {

  const {user, setUser} = useAuth()
 
  const navigate = useNavigate();

  return (
    <>
      <div className="fixed top-4 z-50 w-full">
        <div className="mx-8 flex justify-between">
          <div className="text-white font-mono font-bold">
            <button
              style={{ backdropFilter: "blur(20px)" }}
              onClick={() => navigate("/")}
              className=" cursor-pointer rounded-full px-2 py-1 bg-white shadow-sm  bg-clip-padding bg-opacity-25 border hover:bg-opacity-40 border-gray-200"
            >
              <i className="fa-solid fa-house text-white"></i> Home
            </button>
          </div>

          <div className="flex text-white w-96 font-mono text-sm justify-around  tracking-tighter font-bold">
            <button
              style={{ backdropFilter: "blur(20px)" }}
              className="rounded-full px-2 py-1 bg-white shadow-sm  bg-clip-padding bg-opacity-25 border hover:bg-opacity-40 border-gray-200"
              onClick={() => navigate("/showBookings")}
            >
              <i className="fa-solid fa-ticket text-white" /> Show my Tickets
            </button>

            <button
              style={{ backdropFilter: "blur(20px)" }}
              className="rounded-full px-2 py-1 bg-white shadow-sm  bg-clip-padding bg-opacity-25 border hover:bg-opacity-40 border-gray-200"
            >
              About
            </button>

            <button
              style={{ backdropFilter: "blur(20px)" }}
              className="rounded-full px-2 py-1 bg-white shadow-sm  bg-clip-padding bg-opacity-25 border hover:bg-opacity-40 border-gray-200"
              onClick={() => {
                !user 
                ? navigate("/login") 
                :setUser(null)
              }}>
              {!user && (
                <div className="flex items-center gap-x-1">
                  {" "}
                  <i className="fa-solid fa-arrow-right-to-bracket text-white" />{" "}
                  Login/SignUp
                </div>
              )}
              {user && (
                <div className="flex items-center gap-x-1 tracking-widest">
                  {" "}
                  <i className="fa-solid fa-user"></i>
                  {user?.first_name.charAt(0).toUpperCase() +  user?.first_name.slice(1)}
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
