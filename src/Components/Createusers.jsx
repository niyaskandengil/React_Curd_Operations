import axios from 'axios'
import React, { useState } from 'react'
import style from './home.module.css'
import {useNavigate } from 'react-router-dom'


const Createusers = () => {

  let [name, setName]= useState("")
  let [salary, setSalary]= useState("")
  let [company, setCompany]= useState("")
  
  let navigate = useNavigate()

  let nameData=(e)=>{
    setName(e.target.value)
  }
  let salaryData=(e)=>{
    setSalary(e.target.value)
  }
  let companyData=(e)=>{
    setCompany(e.target.value)
  }
  let formHandle=()=>{
    let payload ={name,salary,company}
    axios.post("http://localhost:3000/users",payload)
    .then(()=>{
      console.log("Data Has Been Uploaded")
      navigate('/users')
    }).catch(()=>{
      console.log("Data Not Uploaded");
    })
  }
  return (
    <div>
        <section id={style.myform}>
          <article>
            <h1>CREATE USER</h1>
            <label>Name:</label>
            <input type="text" value={name} onChange={nameData}></input>
          
            <label>Salary:</label>
            <input type="number" value={salary} onChange={salaryData}></input>
          
            <label for="message">Company:</label>
            <input type="text" value={company} onChange={companyData}></input>

            <button type="submit" onClick={formHandle}>Submit</button>
          </article>
        </section>
    </div>
  )
}

export default Createusers