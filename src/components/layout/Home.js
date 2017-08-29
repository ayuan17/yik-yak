import React, { Component } from 'react'
import Zones from '../containers/Zones'
import Comments from '../containers/Comments'
//We import Zones component to render to the Home component

class Home extends Component {

  render() {
    return (
      <div className='container'>

        <div className='row'>

          <div className='col-md-4'>
            <div>
              <h2>Login</h2>
              <input type='text' placeholder="username" /> <br />
              <input type='text' placeholder="password" /> <br />
              <button> Log In </button>
              <br />
                <h2>Sign up</h2>
                <input type='text' placeholder="username" /> <br />
                <input type='text' placeholder="password" /> <br />
                <button> Join </button>
            </div>
            <Zones />
          </div>

          <div className='col-md-8'>
            <Comments />
          </div>

        </div>

      </div>
    )
  }
}

export default Home
