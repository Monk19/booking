import React from "react";
import "./SelectedMode.modules.css";
function SelectedMode(props) {
  return (
    <div className="Selected-item">
      <div className="clear">
        <img
          src="https://image.flaticon.com/icons/png/512/150/150488.png"
          alt="clear"
          onClick={props.undoDisp}
        ></img>
      </div>
      <div id="selected">
        <img src={props.vehicle.imageUrl} alt=""></img>
        <div>
          <span>{props.vehicle.ModelName}</span>
          <span>{}</span>
          <span>{props.vehicle.ModelName}</span>
        </div>
      </div>

      <div className="specs-grid">
        <div className="Svgs">
          <img
            src="https://image.flaticon.com/icons/png/512/5235/5235583.png"
            alt="Milage"
          ></img>
          <p>{props.vehicle.milage}</p>
        </div>
        <div className="Svgs">
          <img
            src="https://image.flaticon.com/icons/png/512/2085/2085970.png"
            alt="Transmission"
          ></img>
          <p>{props.vehicle.Transmission}</p>
        </div>
        <div className="Svgs">
          <img
            src="https://image.flaticon.com/icons/png/512/2061/2061956.png"
            alt="engine"
          ></img>
          <p>{props.vehicle.Engine}</p>
        </div>
        <div className="Svgs">
          <img
            src="https://image.flaticon.com/icons/png/512/1506/1506329.png"
            alt="fuel"
          ></img>
          <p>{props.vehicle.fuelType}</p>
        </div>
        <div className="Svgs">
          <img
            src="https://img-premium.flaticon.com/png/512/2248/premium/2248860.png?token=exp=1628327545~hmac=4697f0131d5c45473da9c4067dd1da89"
            alt="fuel"
          ></img>
          <p>{props.vehicle.powerAndTorque}</p>
        </div>
        <div className="Svgs">
          <img
            src="https://image.flaticon.com/icons/png/512/3439/3439912.png"
            alt="setter"
          ></img>
          <p>{props.vehicle.setter}</p>
        </div>
      </div>
      <button className="btn-grad">Book Now</button>
    </div>
  );
}

export default SelectedMode;
