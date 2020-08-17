import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component{
    render(){
        return(
            <nav className='navbar'>

                <Link className='nav-app-name' to='/'><h1>SATAS</h1></Link>

                <Link className='nav-dashboard' to='/dashboard'>Dashboard</Link>
                <Link className='nav-orders' to='/orders'>Orders</Link>
                <Link className='nav-users' to='/'>Users</Link>
                <Link className='nav-logout' to='/'>LogOut</Link>
                <Link className='nav-login' to='/login'>Login</Link>
            </nav>
        )
    }
}
