import axios from 'axios';
import React, { use, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import { useEffect } from 'react';
const Edit = () => {
    const nav = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState({
        name: '',
        position: '',
        department: '',
        location: ''
    });

  const fetchHandler = async(e)=>{
    

    try{
        const result = await axios.get(`http://localhost:3000/employees/${id}`);
      console.log(result.data);
      setData({
        name: result.data.name,
        position: result.data.position,
        department: result.data.department,
        location: result.data.location
      })

    }catch(err){
      console.log(err);
    }
  }
const updateHandler = async(e)=>{
    setData({...data,[e.target.id]: e.target.value});
}
    const submitHandler = async(e)=>{
        e.preventDefault();
        try{
            const result = await axios.patch(`http://localhost:3000/employees/${id}`,data)
            console.log(result);
            nav('/');
        }catch(err){
            console.log(err);
        }
    }

useEffect(()=>{
    fetchHandler();
  },[])

  return (
    <>
    <form action="" onSubmit={(e)=>submitHandler(e)}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" 
        id="name"
        value={data.name}
        onChange={(e)=>updateHandler(e)}/>
      </div>
      <div>
        <label htmlFor="position">Position</label>
        <input type="text"
         id="position" 
         value={data.position}
         onChange={(e)=>updateHandler(e)}
        />
      </div>
      <div>
        <label htmlFor="department">Department</label>
        <input type="text"
         id="department"
         value={data.department} 
         onChange={(e)=>updateHandler(e)}/>
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input type="text"
         id="location"
         value={data.location} />
      </div>
      <button type="submit">Update</button>
    </form>
    </>

  )
}

export default Edit