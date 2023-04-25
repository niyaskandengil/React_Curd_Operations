
import React, { useEffect, useState } from 'react'
import style from './home.module.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const Editusers = () => {
    
  let [name, setName]= useState("")
  let [salary, setSalary]= useState("")
  let [company, setCompany]= useState("")

  let navigate = useNavigate() 

  let {index} = useParams()

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
    axios.put(`http://localhost:3000/users/${index}`,payload)
    .then(()=>{
      console.log("Data Has Been Updated")
      navigate('/users')
    }).catch(()=>{
      console.log("Data Not Updated");
    })
  }
  

  useEffect(()=>{
    axios.get(`http://localhost:3000/users/${index}`)
    .then((response) => {
      setName(response.data.name)
      setSalary(response.data.salary)
      setCompany(response.data.company)
    }).catch((err) => {
      console.log("Didn't Get The Data");
    })
  },[])


  return (
    <div>
        <section id={style.myform}>
          <article>
            <h1>UPDATE USER</h1>
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

export default Editusers

