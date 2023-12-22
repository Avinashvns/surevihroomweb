import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Signin from "./pages/signin/Signin";
import Mobileno from "./pages/signin/mobileno";
import Register from "./pages/signin/register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/logins' element={<Signin />} />
          <Route path='/login' element={<Mobileno />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
