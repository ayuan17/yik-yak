import React, { Component } from 'react';
import { CreateZone, Zone } from '../presentation';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions/actions'
import store from '../../stores/store'
//superagent similar to axios, http request
//(err, response) - first throw error (if there is one, then display payload)

//this renders Zone component
class Zones extends Component {

  constructor() {
    super()
    this.state = {
      // selected: 0
    }
  }

  componentDidMount() {
    console.log('componentDidMount - zones')
//grabbing the API from api/zone and using JSON stringify to display the data
    APIManager.get('/api/zone', null, (err, response) => {
      if (err){
        alert('Error: '+err.message)
        return
      }
      //Dispatch the actions
      const zones = response.results
      this.props.zonesReceived(zones)

    })
  }

  addZone(zone) {
    let updatedZone = Object.assign({}, zone)
    // updatedZone['zipCodes'] = updatedZone.zipCode.split(',')
    // console.log('ADD ZONE: '+JSON.stringify(updatedZone))

    APIManager.post('/api/zone', updatedZone, (err, response) => {
      if (err) {
        alert('ERROR: '+err.message)
        return
      }
      // console.log('Zone Created: '+JSON.stringify(response))
      this.props.zoneCreated(response.result)
      // let updatedList = Object.assign([], this.state.list)
      // updatedList.push(response.result)
      // this.setState({
      //   list: updatedList
      // })
    })
  }

  selectZone(index) {
    console.log('selectZone: ' + index)
    this.props.selectZone(index)
    // this.setState({
    //   selected: index
    // })
  }

//listItems maps through the zone and index of the array
  render() {

    const listItems = this.props.list.map((zone, i) => {
      let selected = (i == this.props.selected)
      return (
        <li key={i}>
          <Zone index={i} select={ this.selectZone.bind(this)} isSelected={selected} currentZone={zone} />

          </li>
      )
    })
//return the listItems child variable in the element
    return (
      <div>
        <ol>

          {listItems}

        </ol>


        <CreateZone onCreate={this.addZone.bind(this)}/>

      </div>
    )
  }
}

//Redux stuff going on - taking state from redux and assign them as properties to the components this.state -> this.props
const stateToProps = (state) => {
  return {
    list: state.zone.list, //state object is the store (state)
    selected: state.zone.selectedZone
  }
}

const dispatchToProps = (dispatch) => {
  return {
    zonesReceived: (zones) => dispatch(actions.zonesReceived(zones)),
    zoneCreated: (zone) => dispatch(actions.zoneCreated(zone)),
    selectZone: (index) => dispatch(actions.selectZone(index))
  }
}

export default connect(stateToProps, dispatchToProps)(Zones) //connecting redux to the ../stores/store.js
