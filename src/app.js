//imort React and sub module Component (es6)
import React, { Component } from 'react';
//Render tag in to the dom. Brings our code to the real world - only renders to root
import ReactDOM from 'react-dom'
// import Zones from '.components/Zones'
import Home from './components/layout/Home'

class App extends Component {

  render(){
    return (
      <div>
        Yik Yak Clone!
        <Home />
      </div>
    )
  }

}
//take react code and glue to the DOM - take over id root tag
ReactDOM.render(<App />, document.getElementById('root'))
