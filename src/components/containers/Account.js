import React, { Component } from 'react'
import { APIManager } from '../../utils'

class Account extends Component {

  constructor() {
    super()
    this.state = {
      profile: {
        username: '',
        password: ''
      }
    }
  }

  updateProfile(event) {
    event.preventDefault()
    // console.log(event.target.id+ ' == ' +event.target.value)
    //Make a copy of updateProfile
    let updatedProfile = Object.assign({}, this.state.profile)
    updatedProfile[event.target.id] = event.target.value

    this.setState({
      profile: updatedProfile
    })

  }
  //Functionality for sign up
  signup(event) {
    event.preventDefault()
    console.log(JSON.stringify(this.state.profile))
    if (this.state.profile.username.length ==0) {
      alert('Please enter your username')
      return
    }

    if (this.state.profile.password.length ==0) {
      alert('Please enter your password')
      return
   }

   APIManager.post('/api/profile', this.state.profile, (err, response) => {
     if (err) {
       alert(err.message)
       return
     }

    console.log(JSON.stringify(response))

   })

 }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <input id="username" onChange={this.updateProfile.bind(this)} type='text' placeholder="username" /> <br />
        <input id="password" onChange={this.updateProfile.bind(this)} type='password' placeholder="password" /> <br />
        <button> Log In </button>
        <br />
          <h2>Sign up</h2>
          <input id="username" onChange={this.updateProfile.bind(this)} type='text' placeholder="username" /> <br />
          <input id="password" onChange={this.updateProfile.bind(this)} type='password' placeholder="password" /> <br />
          <button onClick={this.signup.bind(this)}> Join </button>
      </div>
    )
  }
}

export default Account
