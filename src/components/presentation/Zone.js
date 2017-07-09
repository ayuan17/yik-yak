import React, { Component } from 'react';
import styles from './styles'

class Zone extends Component {
//importing styles.zone object from styles.js
  render() {

    const zoneStyle = styles.zone

    return (
            <div style= {zoneStyle.container}>

              <h2 style={zoneStyle.header}>

                <a style={zoneStyle.title} href="#"> { this.props.currentZone.name } </a></h2>

                <span className='detail'>{ this.props.currentZone.zipCode }</span>
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
