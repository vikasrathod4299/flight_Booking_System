import {  Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPopUp from "./components/LoginPopUp";
import NavBar from "./components/NavBar";
import SerachMenu from "./components/SerachMenu";
import { useAuth } from "./Hooks/useAuth";
import Booking from "./pages/Booking";
import DisplayBookings from "./pages/DisplayBookings";
import Flights from "./pages/Flights";
import Home from "./pages/Home";
import Payment from "./pages/Payment";

function App() {

  const {user} = useAuth()

  return (
    <div className="App">

      <Routes>
        <Route element={<NavBar />}>
            <Route element={<SerachMenu />}>
                <Route path="/" element={<Home />} />
                <Route path="searchFlight" element={<Flights />} />
            </Route>
            <Route path="bookingDetails/:id" element={<Booking />} />
            <Route path="payment" element={<Payment />} />
            <Route path="login" element={<LoginPopUp />} />
            <Route path="showBookings"element={user?<DisplayBookings/>:<LoginPopUp/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
