import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GuestNavbar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddCrimeSceneForm from "./pages/AddScene";
import AddCrimeForm from "./pages/AddCrimeForm";
import SafetyTips from "./pages/SafetyTips";

function App() {
  return (
    <BrowserRouter>
      <GuestNavbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/dashboard/add-crime" element={<AddCrimeForm />}></Route>
        <Route exact path="/add-crime-scene" element={<AddCrimeSceneForm />}></Route>
        <Route exact path="/safety-tips" element={<SafetyTips />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
