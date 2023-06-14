import { Routes, Route } from "react-router-dom"; 
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Signup/Signup";
import { Home } from "./Pages/Home/Home";
import Mockman from "mockman-js"; 

function App() {
  return (
    <div className="App">

      
     
     <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/signup" element={<Signup />} /> 
      <Route path="/mockman" element={<Mockman />} /> 
     </Routes>

    </div>
  );
}

export default App;
