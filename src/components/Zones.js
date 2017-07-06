import React, { Component } from 'react';
import Zone from './Zone'

//this renders Zone component
class Zones extends Component {

  constructor() {
    super()
    this.state = {
      list: [
          {name: 'Zone 1', zipCode: '30341', numComments:10},
          {name: 'Zone 2', zipCode: '30342', numComments:20},
          {name: 'Zone 3', zipCode: '30343', numComments:30},
          {name: 'Zone 4', zipCode: '30344', numComments:40},
          {name: 'Zone 5', zipCode: '30345', numComments:50}
      ]
    }
  }
//listItems maps through the zone and index of the array
  render() {

    const listItems = this.state.list.map((zone, i) => {
      return (
        <li><Zone currentZone={zone} /></li>
      )
    })
//return the listItems variable in the element
    return (
      <div>
        <ol>

          {listItems}

        </ol>

      </div>
    )
  }
}

export default Zones
