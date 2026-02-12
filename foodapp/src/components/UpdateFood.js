import React, { useState } from 'react';
import axios from 'axios';

function UpdateFood() {

  const [food, setFood] = useState({
    fid: "",
    fname: "",
    price: ""
  });

  const [msg, setMsg] = useState("");

  const updateData = () => {
    axios.put(`http://localhost:1004/food/upd/${food.fid}`, food)
      .then((res) => {
        console.log(res.data);
        setMsg(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("SOMETHING WENT WRONG WHILE UPDATING DATA");
      });
  };

  const refreshData = () => {
    setMsg("");
    setFood({
      fid: "",
      fname: "",
      price: ""
    });
  };

  return (
    <div style={{ width: "100%", margin: "50px auto" }}>
      <h2 className="text-primary">UPDATE FOOD</h2>

      <input
        type="text"
        className="form-control"
        placeholder="ENTER FOOD ID"
        value={food.fid}
        onChange={(e) =>
          setFood({ ...food, fid: e.target.value })
        }
      />

      <input
        type="text"
        className="form-control"
        placeholder="ENTER FOOD NAME"
        value={food.fname}
        onChange={(e) =>
          setFood({ ...food, fname: e.target.value })
        }
      />

      <input
        type="text"
        className="form-control"
        placeholder="ENTER FOOD PRICE"
        value={food.price}
        onChange={(e) =>
          setFood({ ...food, price: e.target.value })
        }
      />

      <button
        className="btn btn-outline-success"
        style={{ marginTop: "5px" }}
        onClick={updateData}
      >
        UPDATE
      </button>
      &nbsp;&nbsp;

      <button
        className="btn btn-outline-secondary"
        style={{ marginTop: "5px" }}
        onClick={refreshData}
      >
        REFRESH
      </button>

      <h2 className="text-danger">{msg}</h2>
    </div>
  );
}

export default UpdateFood;
