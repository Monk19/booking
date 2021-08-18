import React, { useEffect } from "react";
import useFetch from "react-fetch-hook";
import axios from "axios";
import "./BookCab.modules.css";
import mapMyindia from "./mapMyindia";
function BookCab() {
  useEffect(() => {
    axios
      .get("")
      .then((res) => {
        return console.log(res.data);
      })
      .catch((error) => console.log(error));
  });
  return (
    <div className="BookCab-container">
      <form className="Book-cab-form">
        <label>
          <input type="text" placeholder="Source"></input>
        </label>
        <label>
          <input type="text" placeholder="Destination"></input>
        </label>
        <label>
          <button className="Book-cab-btn">Let's Go</button>
        </label>
      </form>
      <div className="fair-calc">
        <mapMyindia />
      </div>
    </div>
  );
}

export default BookCab;
