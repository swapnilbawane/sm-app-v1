import { Routes, Route } from "react-router-dom"; 
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Signup/Signup";
import { Home } from "./Pages/Home/Home";
import Mockman from "mockman-js"; 
import { RequiresAuth } from "./Components/RequiresAuth";

function App() {
  return (
    <div className="App">

      
     
     <Routes>

      <Route path="/home" element={

      <RequiresAuth> 
      <Home />
      </RequiresAuth>
      
      } />


      <Route path="/" element={<Login />} /> 
      <Route path="/signup" element={<Signup />} /> 
      <Route path="/mockman" element={<Mockman />} /> 
     </Routes>

    </div>
  );
}

export default App;
