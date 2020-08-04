import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component{
    render(){
        return(
            <nav className='navbar'>
                <div className='container-app-name'>
                    <Link className='nav-app-name' to='/'>SATAS</Link>
                </div>
            </nav>
        )
    }
}
