import React, { Component } from 'react'
import axios from 'axios'




export default class info extends Component {

    state = {
        email: '',
        password: '',
        users: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/users');
        if (res.data.length > 0) {
            this.setState({
                users: res.data.map(user => user)
            })

        }
    }



    onSubmit = async (obj) => {
        obj.preventDefault();
        /* const email = document.getElementById('email-label');
        const password = document.getElementById('password-label');
        this.setState({
            email: email.value,
            password: password.value
        }); */
        console.log(this.state.email);
        console.log(this.state.password);
        try {
            const res = await axios.post('http://localhost:4000/api/login', {
                body: {
                    email: this.state.email,
                    password: this.state.email
                }
            });
            console.log(res);
            
        } catch (error) {
            console.log(error);
            window.location.href = '/dashboard';
        }
        // const req = {email: this.state.email, password: this.state.password};


        //console.log(req);
        
    }


    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {
        return (

            <div className='login-container'>
                <h2>LOGIN</h2>
                <form onSubmit={this.onSubmit}>
                    <label className="login-label" id="email-label" for="email">Email:</label>
                    <input type="email" id="email" size="30" value={this.setState.email} name="email" onChange={this.onInputChange} required />
                    <label className="login-label" id="password-label" for="password">Password:</label>
                    <input type="password" id="password" value={this.setState.password} name="password" onChange={this.onInputChange} required />
                    <button className="form-button">
                        Login
                  </button>
                </form>
            </div>
        )
    }
}
