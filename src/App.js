import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Signin from "./pages/signin/Signin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Signin />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
