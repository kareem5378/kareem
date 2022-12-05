import { React } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Viewdata from "./components/Viewdata";
import Bamboozled from "./components/Bamboozled";
import { createContext } from "react";
import Items from "./components/items";
import Signin from "./components/signin";

export const UserContext = createContext();

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Viewdata" element={<Viewdata />} />
        <Route path="/items" element={<Items />} />
        <Route path="/bamboozled" element={<Bamboozled />} />
      </Routes>

      <Footer />
    </>
  );
}
export default App;
