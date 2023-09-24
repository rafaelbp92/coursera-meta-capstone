import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";


function App() {
  return (
    <main id="rootContainer">
      <Nav />
      <Routes>
        <Route  path="/" element={<HomePage />}/>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
