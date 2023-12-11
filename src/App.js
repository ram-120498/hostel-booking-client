import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hostel from "./pages/hostel/Hostel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import RegisterPage from "./pages/register/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hostels" element={<List/>}/>
        <Route path="/hostels/:id" element={<Hostel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;