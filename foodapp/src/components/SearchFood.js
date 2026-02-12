import React, { useState } from 'react';
import axios from 'axios';

function SearchFood() {

  const [fid, setFid] = useState("");
  const [food, setFood] = useState(null);
  const [msg, setMsg] = useState("");

  const searchFood = () => {

    if (!fid) {
      alert("PLEASE ENTER FOOD ID");
      return;
    }

    axios.get(`http://localhost:1004/food/get/${fid}`)
      .then((res) => {
        console.log(res.data);
        setFood(res.data);
        setMsg("");
      })
      .catch((error) => {
        console.log(error);
        setFood(null);
        setMsg("FOOD NOT FOUND");
      });
  };

  const refreshData = () => {
    setFid("");
    setFood(null);
    setMsg("");
  };

  return (
    <div style={{ width: "100%", margin: "50px auto" }}>
      <h2 className="text-primary">SEARCH FOOD</h2>

      <input
        type="text"
        className="form-control"
        placeholder="ENTER FOOD ID"
        value={fid}
        onChange={(e) => setFid(e.target.value)}
      />

      <button
        className="btn btn-outline-info"
        style={{ marginTop: "5px" }}
        onClick={searchFood}
      >
        SEARCH
      </button>
      &nbsp;&nbsp;

      <button
        className="btn btn-outline-secondary"
        style={{ marginTop: "5px" }}
        onClick={refreshData}
      >
        REFRESH
      </button>

      {/* MESSAGE */}
      {msg && <h3 className="text-danger">{msg}</h3>}

      {/* FOOD DETAILS */}
      {food && (
        <div className="card mt-3 p-3">
          <h4 className="text-success">FOOD DETAILS</h4>
          <p><b>ID:</b> {food.fid}</p>
          <p><b>NAME:</b> {food.fname}</p>
          <p><b>PRICE:</b> ₹{food.price}</p>
        </div>
      )}
    </div>
  );
}

export default SearchFood;
