import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './pages/Booking';
import Flights from './components/Flights';
import Home from './pages/Home';

function App() {
  
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}>
            <Route path='searchFlight/:params' element={<Flights/>}></Route>
          </Route>
            <Route path='bookingDetails/:id' element={<Booking/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
