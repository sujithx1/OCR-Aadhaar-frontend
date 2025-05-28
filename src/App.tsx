import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from "./pages/Landing";

function App() {
  return (
    
    <>
    
     <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/ocr" element={<Home />} />
    </Routes>
    
          <ToastContainer position="top-right" autoClose={3000} />

    </>
  );
}

export default App;
