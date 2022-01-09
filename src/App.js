import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import CabBookingScreen from "./screens/CabBookingScreen";
import FlightSearchScreen from "./screens/FlightSearchScreen";
import FlightSearchResultScreen from "./screens/FlightSearchResultScreen";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/flightSearch" element={<FlightSearchResultScreen />} />
        <Route path="/flight" element={<FlightSearchScreen />} />
        <Route path="/cab_booking" element={<CabBookingScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<HomeScreen />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
