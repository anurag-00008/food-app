import React, { useState } from 'react';
import axios from 'axios';
import NavClient from './NavClient';

function Billing() {
  const [bill, setBill] = useState([]);
  const [msg, setMsg] = useState("");
  const [searchUname, setSearchUname] = useState(""); // State for the input field

  const fetchBill = () => {
    // Prevent empty searches
    if (!searchUname.trim()) {
      setMsg("Please enter a username to search.");
      setBill([]);
      return;
    }

    setMsg("Searching...");
    
    axios.get(`http://localhost:1004/order/bill/${searchUname}`)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setBill(res.data);
          setMsg(""); // Clear message if data is found
        } else {
          setBill([]);
          setMsg(`No records found for "${searchUname}"`);
        }
      })
      .catch((error) => {
        console.error(error);
        setBill([]);
        setMsg("Error fetching data. Check if the server is running.");
      });
  };

  return (
    <div>
      <NavClient />

      <div style={{ width: "80%", margin: "30px auto", textAlign: "center" }}>
        <h2 className='text-primary mb-4'>SEARCH USER BILLS</h2>
        
        {/* Search Bar Section */}
        <div className="input-group mb-4" style={{ maxWidth: "500px", margin: "0 auto" }}>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Username (e.g. john_doe)" 
            value={searchUname}
            onChange={(e) => setSearchUname(e.target.value)}
          />
          <button className="btn btn-primary" onClick={fetchBill}>
            Search Bill
          </button>
        </div>
      </div>

      <hr />

      {bill.length > 0 ? (
        <div style={{ width: "80%", margin: "20px auto" }}>
          <table className='table table-hover shadow-sm'>
            <thead className='table-dark'>
              <tr>
                <th>ORDER ID</th>
                <th>DATE</th>
                <th>FOOD ID</th>
                <th>FOOD NAME</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {bill.map((element, index) => (
                <tr key={index}>
                  <td>{element[0]}</td>
                  <td>{element[1]}</td>
                  <td>{element[2]}</td>
                  <td>{element[3]}</td>
                  <td>{element[4]}</td>
                  <td><strong>${element[5]}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className="text-center mt-5" style={{ color: "#888" }}>
          {msg || "Enter a username above to view billing details."}
        </h3>
      )}
    </div>
  );
}

export default Billing;