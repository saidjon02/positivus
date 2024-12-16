import React from 'react'
import logo from "../../imgs/logo (2).png"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
        <div className="container head-row">
        <div className="head-left">
            <img src={logo} alt="" />
        </div>
        <div className="head-right">
            <Link className="head-link">About us</Link>
            <Link className="head-link">Services</Link>
            <Link className="head-link">Use Cases</Link>
            <Link className="head-link">Pricing</Link>
            <Link className="head-link">Blog</Link>
            <button className="btn head-btn btr">Request a quote</button>
        </div>
        </div>
    </div>
  )
}

export default Header