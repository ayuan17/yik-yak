import React, { Component } from 'react';
import { CreateZone, Zone } from '../presentation';
import { APIManager } from '../../utils'
//superagent similar to axios, http request
//(err, response) - first throw error (if there is one, then display payload)

//this renders Zone component
class Zones extends Component {

  constructor() {
    super()
    this.state = {
      selected: 0,
      list: []
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
      // console.log('RESULTS: '+JSON.stringify(response.results))
      this.setState({
        list: response.results
      })
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

      console.log('Zone Created: '+JSON.stringify(response))

      let updatedList = Object.assign([], this.state.list)
      updatedList.push(response.result)
      this.setState({
        list: updatedList
      })

    })
  }

  selectZone(index) {
    console.log('selectZone: ' + index)
    this.setState({
      selected: index
    })
  }

//listItems maps through the zone and index of the array
  render() {

    const listItems = this.state.list.map((zone, i) => {
      let selected = (i == this.state.selected)
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

export default Zones
