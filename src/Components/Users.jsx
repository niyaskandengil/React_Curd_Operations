import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"

const Users = () => {
  let [content,setContent]=useState([])
  
  useEffect(()=>{
    axios.get("http://localhost:3000/users")
    .then((response)=>{
      console.log("Got the Data");
      console.log(response.data);
      setContent(response.data)
      
    })
    .catch(()=>{
      console.log("Not Data Fetched");
    })
    },[])
  
    
    let dataDelete=(value)=>{
        
        axios.delete(`http://localhost:3000/users/${value}`)
        .then(()=>{
          console.log("Data Has Been Deleted")
        }).catch(()=>{
          console.log("Data Not Deleted");
        })
        window.location.assign('/users')
  }
  return(
    <div id={style.usersHome}>
      {content.map((x)=>{
      return(
        <div id={style.cards}>
           <table>
              <tr>
                <th colSpan="2">USER {x.id}</th>
              </tr>
              <tr>
                <td>Name</td>
                <td>:{x.name}</td>
              </tr>
              <tr>
                <td>Salary</td>
                <td>:{x.salary}</td>
              </tr>
              <tr>
                <td>Company</td>
                <td>:{x.company}</td>
              </tr>
              <tr>
                <td><Link id={style.lin} to={`/edit/${x.id}`}>EDIT</Link></td>
                <td><button onClick={()=>{dataDelete(x.id)}}>DELETE</button></td>
              </tr>
           </table>
          
        </div>
      )
    })}
    </div>
  )
}

export default Users