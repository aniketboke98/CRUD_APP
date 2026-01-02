import React, { useState } from 'react'
import axios from 'axios'
const Home = () => {
    const [data, setData] = useState({name:'',position:'',department:'',location:''})

    const dataHandler = (e)=>{
        setData({...data,[e.target.name]: e.target.value})
        console.log(data)
    }
    
    const dataSubmit = async(e)=>{

        
        e.preventDefault()
        try{
            
            const result = await axios.post('http://localhost:3000/employees',data)
            setData(result.data)
            
            console.log(data)
            setData({name:'',position:'',department:'',location:''})
            
        }catch(err){
            console.log(err)
        }
        
    }
  return (

    <>
    <form style={{ maxWidth: "400px" }} onSubmit={(e)=>dataSubmit(e)}>
        <h3>Add Employee</h3>

        <div>
            <label>Name</label><br />
            <input type="text" 
            name="name" 
            placeholder="Enter Name"
            value={data.name}
            onChange={(e)=>dataHandler(e)} />

        </div>

        <br />

        <div>
            <label>Position</label><br />
            <input type="text"
             name="position"
             placeholder="Enter Position"
             value={data.position}
             onChange={(e)=>dataHandler(e)}  />
        </div>

        <br />

        <div>
            <label>Department</label><br />
            <input type="text"
             name="department"
              placeholder="Enter Department"
              value={data.department}
              onChange={(e)=>dataHandler(e)}  />
        </div>

        <br />

        <div>
            <label>Location</label><br />
            <input type="text"
             name="location"
              placeholder="Enter Location"
              value={data.location}
              onChange={(e)=>dataHandler(e)}  />
        </div>

        <br />

        <button type="submit">Save</button>
    </form>

    </>
  )
}

export default Home