import React from "react";
import HomeComponent from "./modules/home";
import "./App.css";


const App = () => {
  return (
    <div className="bg-white text-[#0d1d2c] flex flex-col items-center h-full   w-98p  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="bg-white text-[#0d1d2c] flex flex-row items-center p-22 text-25 font-bold">
        Expense Tracker
      </div>
      <HomeComponent />
    </div>
  );
};

export default App;
