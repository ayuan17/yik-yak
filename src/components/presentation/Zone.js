import React, { Component } from 'react';
import styles from './styles'

class Zone extends Component {
//importing styles.zone object from styles.js

onSelectTitle(event) {
  event.preventDefault()
  console.log('onSelectTitle: ' + this.props.index)
  this.props.select(this.props.index)
}

  render() {

    const zoneStyle = styles.zone
    const zipCode = this.props.currentZone.zipCodes[0]
    const title = (this.props.isSelected) ? <a style={zoneStyle.title} href='#'>{this.props.currentZone.name}</a> : <a href='#'>{this.props.currentZone.name}</a>

    return (
            <div style= {zoneStyle.container}>

              <h2 onClick={ this.onSelectTitle.bind(this)} style={zoneStyle.header}>
                { title }
              </h2>

                <span className='detail'>{ zipCode }</span>
                  <br />
                <span className='detail'>{ this.props.currentZone.numComments } comments</span>

            </div>

    )
  }
}

export default Zone

// Zone component
// { this.props.name } = Zone property in Zones.js
//we take currentZone property and pass in the object properties for each zone
//div style, we take the styles const from const styles(object)
