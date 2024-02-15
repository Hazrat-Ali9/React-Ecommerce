import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Nav from "./Components/Pages/Nav";
import Footer from "./Components/Pages/Footer";
import AllProduct from "./Components/Pages/AllProduct";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import Add from "./Components/Pages/Add";
import Details from "./Components/Pages/Details";
import Update from "./Components/Pages/Update";
import RequireAdmin from "./Components/Require/RequireAdmin";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all" element={<AllProduct/>}></Route>
        <Route path="/details/:id" element={<Details/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
      </Routes>
      <ToastContainer/>
      <Footer/>
    </div>
  );
}

export default App;
