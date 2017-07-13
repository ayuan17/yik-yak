//imort React and sub module Component (es6)
import React, { Component } from 'react';
//Render tag in to the dom. Brings our code to the real world - only renders to root
import ReactDOM from 'react-dom'
// import Zones from '.components/Zones'
import Home from './components/layout/Home'
import { Provider } from 'react-redux'
import store from './stores/store'

class App extends Component {

  render(){
    return (
      //Provider - configureStore is where all reducers are brought together
      <Provider store={ store.configureStore() }>
        <div>
          Yik Yak Clone!
          <Home />
        </div>
      </Provider>
    )
  }

}
//take react code and glue to the DOM - take over id root tag
ReactDOM.render(<App />, document.getElementById('root'))
