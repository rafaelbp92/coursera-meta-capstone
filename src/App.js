import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import NotAvailable from "./components/NotAvailable";
import Bookings from "./components/booking/Bookings";
import BookingConfirmation from "./components/booking/BookingConfirmation";


function App() {
  return (
    <main id="rootContainer">
      <Header />
      <Routes>
        <Route  path="/" element={<HomePage />}/>
        <Route  path="/about" element={<NotAvailable />}/>
        <Route  path="/menu" element={<NotAvailable />}/>
        <Route  path="/reservations" element={<Bookings />}/>
        <Route  path="/booking-confirmation" element={<BookingConfirmation />}/>
        <Route  path="/order-online" element={<NotAvailable />}/>
        <Route  path="/login" element={<NotAvailable />}/>
        <Route path="*" element={<NotAvailable />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
