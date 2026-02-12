import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function DeleteFood() {
    let[Food,setFood]=useState({
        fid:"",
        fname:"",
        price:""
    })
    let[msg,setmsg]=useState("");
    const deleteData=(fid)=>{
      alert(fid);
        axios.delete(`http://localhost:1004/food/del/${fid}`,Food)
        .then((res)=>{
            console.log(res.data);
            setmsg(res.data);
        })
        .catch((error)=>{
            console.log(error);
            alert("SOMETHING WENT WRONG DELETING DATA");
        })
    }
    const refreshData=()=>{
        setmsg("");
        setFood({
            fid:"",
            fname:"",
            price:""
        })
    }
  return (
    <div style={{width:"100%",margin:"50px auto"}}>
      <h2 className='text-primary'>DELETING FOOD</h2>
      <input type="text" className='form-control' placeholder='ENTER THE FOOD ID'
      value={Food.fid} onChange={(event)=>{
        setFood({
            ...Food,
            fid:event.target.value
        })
      }}/>
     <input type="text" className='form-control' placeholder='ENTER THE FOOD NAME'
      value={Food.fname} onChange={(event)=>{
        setFood({
            ...Food,
            fname:event.target.value
        })
      }}/>
      <button className='btn btn-outline-primary' style={{marginTop:"5px"}}
      onClick={()=>{
        deleteData(Food.fid);
      }}>DELETE</button> &nbsp;&nbsp;
      <button className='btn btn-outline-secondary' style={{marginTop:"5px"}}
      onClick={refreshData}>REFRESH</button>
      <h2 className='text-danger'>{msg}</h2>
    </div>
  )
}

export default DeleteFood