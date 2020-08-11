import React, { Component } from 'react'
import axios from 'axios'




export default class info extends Component {

    state = {
        email: '',
        password: ''
    }

    onSubmit = async (obj) =>{
        obj.preventDefault();
    }


    render() {
        return (
            
            <div className='login-container'>
              <h3>LOGIN</h3>
              <form onSubmit={this.onSubmit}>
                  <label for="email">Email:</label>
                  <input type="email" id="email" size="30" required />
                  <label for="password">Password:</label>
                  <input type="password" id="password" required />
                  <button className="form-button">
                      Login
                  </button>
              </form>
            </div>
        )
    }
}
