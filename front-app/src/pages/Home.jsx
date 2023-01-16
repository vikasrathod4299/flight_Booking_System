import React from 'react'
import { Outlet } from 'react-router-dom'
import SerachMenu from '../components/SerachMenu'

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-80 shadow-purple-200 shadow-xl ">
        <div className='pt-52 max-w-screen-xl mx-auto px-20 lg:px-0 '>
                <SerachMenu/>
                <Outlet/>
        </div>
    </div>
  )
}

export default Home