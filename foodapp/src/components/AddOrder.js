import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function AddOrder() {

  let [order, setOrder] = useState({
    fid: "",
    qty: "",
    price: ""
  })

  let [msg, setMsg] = useState("")

  const addData = () => {
    axios.post("http://localhost:1004/order/add", order)
      .then((res) => {
        console.log(res.data)
        setMsg(res.data)
      })
      .catch((error) => {
        console.log(error)
        alert("SOMETHING WENT WRONG ADDING DATA")
      })
  }

  const refreshData = () => {
    setMsg("")
    setOrder({
      fid: "",
      qty: "",
      price: ""
    })
  }

  return (
    <div style={{ width: "30%", margin: "50px auto" }}>
      <h2 className='text-primary'>ADDING ORDER</h2>

      <input
        type="text"
        className='form-control'
        placeholder='ENTER THE FOOD ID'
        value={order.fid}
        onChange={(event) => {
          setOrder({
            ...order,
            fid: event.target.value
          })
        }}
      />

      <input
        type="text"
        className='form-control'
        placeholder='ENTER THE QUANTITY'
        value={order.qty}
        onChange={(event) => {
          setOrder({
            ...order,
            qty: event.target.value
          })
        }}
      />

      <input
        type="text"
        className='form-control'
        placeholder='ENTER THE PRICE'
        value={order.price}
        onChange={(event) => {
          setOrder({
            ...order,
            price: event.target.value
          })
        }}
      />

      <button
        className='btn btn-outline-primary'
        style={{ marginTop: "5px" }}
        onClick={addData}
      >
        ADD
      </button>

      &nbsp;&nbsp;

      <button
        className='btn btn-outline-secondary'
        style={{ marginTop: "5px" }}
        onClick={refreshData}
      >
        REFRESH
      </button>

      <h2 className='text-danger'>{msg}</h2>
    </div>
  )
}

export default AddOrder
