//imort React and sub module Component (es6)
import React, { Component } from 'react';
//Render tag in to the dom. Brings our code to the real world
import ReactDOM from 'react-dom'

class App extends Component {

  render(){
    return (
      <div>
        Hello React
      </div>
    )
  }

}
//take react code and glue to the DOM - take over id root tag
ReactDOM.render(<App />, document.getElementById('root'))
