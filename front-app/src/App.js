import { Route, Routes } from 'react-router-dom';
import './App.css';
import SerachMenu from './components/SerachMenu';
import Booking from './pages/Booking';
import Flights from './pages/Flights';
import Home from './pages/Home';
import Payment from './pages/Payment';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route element={<SerachMenu/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='searchFlight' element={<Flights/>} />
        </Route>
        <Route path='bookingDetails/:id' element={<Booking/>} />
        <Route path='payment' element={<Payment/>} />
      </Routes>
    </div>
  );
}

export default App;
