import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Userdata = () => {
    const [data, setData] = useState([])
    const FeachAPI=async()=>{
        try {
            const result = await axios.get('http://localhost:3000/employees')
            console.log(result.data)
            setData(result.data)
        } catch (error) {
            
        }
    }
    const deleteHandler = async(id)=>{
        try{
            const result = data.filter((val)=>val.id !== id)
            setData(result)
            await axios.delete(`http://localhost:3000/employees/${id}`)
            
        }catch(err){

        }
    }
    useEffect(()=>{
        FeachAPI();
    },[])
  return (
    <>
    <table className='table table-striped '>
        <thead >
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>POSITION</th>
                <th>DEPARTMENT</th>
                <th>LOCATION</th>
            </tr>
        </thead>
        <tbody>
            {
                
                data.map((val,index)=>{
                    
                    return(
                        <tr key={index}>
                        <>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.position}</td>
                            <td>{val.department}</td>
                            <td>{val.location}</td>
                            <td><i class="bi bi-trash3-fill fs-4 text-success" onClick={(id)=>deleteHandler(val.id)}></i></td>
                            <td><Link to={`/edit/${val.id}`}><i class="bi bi-pencil-square fs-3 text-warning"></i></Link></td>
                        </>
                        </tr>
                    )
                })
            
            }
        </tbody>
    </table>
    </>
  )
}

export default Userdata