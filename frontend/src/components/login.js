import React, { Component } from 'react'
import axios from 'axios'




export default class info extends Component {

    state = {
        email: '',
        password: '',
        users: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost/4000/api/users');
        if (res.data.length > 0) {
            this.setState({
                users: res.data.map(user => user.email)
            })
        }
    }

    onSubmit = async (obj) =>{
        obj.preventDefault();

    }


    render() {
        return (
            
            <div className='login-container'>
              <h2>LOGIN</h2>
              <form onSubmit={this.onSubmit}>
                  <label className="login-label" id="email-label" for="email">Email:</label>
                  <input type="email" id="email" size="30" required />
                  <label className="login-label" id="password-label" for="password">Password:</label>
                  <input type="password" id="password" required />
                  <button className="form-button">
                      Login
                  </button>
              </form>
            </div>
        )
    }
}
