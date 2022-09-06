import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

class App extends Component {
    constructor() {
    super()
    this.state = {
        fullName:'',
        username:'',
        email:'',
        password:''
    }
    this.changeFullName = this.changeFullName.bind(this)
    this.changeUserName = this.changeUserName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

    changeFullName(event) {
        this.setState({
            fullName:event.target.value
        })
    }

    changeUserName(event) {
        this.setState({
            username:event.target.value
        })
    }

    changeEmail(event) {
        this.setState({
            email:event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data))

        this.setState({
            fullName:'',
            username:'',
            email:'',
            password:''
        })
    }

   render() {
    return (
        
            <div>
                <div className='container'>
                <form onSubmit={this.onSubmit}> 
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" 
                         className="form-control form-group"  
                         placeholder='Enter full name'
                         onChange={this.changeFullName}
                         value={this.state.fullName}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">User name</label>
                        <input type="text" 
                        className="form-control form-group"  
                        placeholder='Enter user name'
                        onChange={this.changeUserName}
                        value={this.state.username}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email"
                         className="form-control form-group" 
                         placeholder='Enter email address'
                         onChange={this.changeEmail}
                         value={this.state.email}   
                         />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" 
                         className="form-control form-group" 
                         placeholder='enter password'
                         onChange={this.changePassword}
                         value={this.state.password}
                         />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>

            </div>
        
    );
    }
   }

export default App;
