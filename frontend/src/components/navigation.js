import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component{
    render(){
        return(
            <nav className='navbar'>

                <Link className='nav-app-name' to='/'><h1>SATAS</h1></Link>

                <Link className='nav-login' to='/'>login</Link>
            </nav>
        )
    }
}
