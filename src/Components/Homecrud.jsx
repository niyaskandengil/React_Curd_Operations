import React from 'react'
import style from './home.module.css'
import { Link } from 'react-router-dom'

const Homecrud = () => {
  return (
    <div>
       <section id={style.nav}>
          <Link to="/createusers">CREATE USER</Link>
          <Link to="/users">USERS</Link>
       </section>
    </div>
  )
}

export default Homecrud