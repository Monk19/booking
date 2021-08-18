import React, { useState, useEffect } from "react";
import "./Home.modules.css";
import BookCab from "./BookCab/BookCab";
import RentalPage from "../Rental/RentalPage";
function HomePage() {
  const [rideOption, setRideOption] = useState("");
  const rideHandler = (option) => {
    setRideOption(option);
  };
  const HomeOptionComponent = (
    <div className="hme">
      <div className="About us"></div>
      <div className="ride-btns">
        <button
          className="hme-bttn btn-grad"
          onClick={() => {
            rideHandler("Rent");
          }}
        >
          Rent a ride
        </button>
        <button
          className="hme-bttn btn-grad"
          onClick={() => {
            rideHandler("Cab");
          }}
        >
          Book a cab
        </button>
      </div>
      <div className="vhme-grid ">
        <div className="hme-v">
          <img
            src="https://image.flaticon.com/icons/png/512/426/426140.png"
            alt="car"
          ></img>
        </div>
        <div className="hme-v">
          <img
            src="https://img-premium.flaticon.com/png/512/1768/premium/1768214.png?token=exp=1628574745~hmac=cb2394961bc9751675b922142916041b"
            alt="bike"
          ></img>
        </div>
        <div className="hme-v">
          <img
            src="https://img-premium.flaticon.com/png/512/1048/premium/1048329.png?token=exp=1628574814~hmac=a543b4fb356c96f95aff7940b364a303"
            alt="mover"
          ></img>
        </div>
      </div>
    </div>
  );

  return (
    <div className="Home-page">
      {rideOption === "Cab" ? (
        <BookCab />
      ) : rideOption === "Home" ? (
        HomeOptionComponent
      ) : rideOption === "Rent" ? (
        <RentalPage />
      ) : (
        HomeOptionComponent
      )}
    </div>
  );
}

export default HomePage;
