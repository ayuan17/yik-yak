import React, { Component } from 'react';
import styles from './styles'

class Zone extends Component {
  render() {
    return (
// Zone component
// { this.props.name } = Zone property in Zones.js
//we take currentZone property and pass in the object properties for each zone
//div style, we take the styles const from const styles(object)
            <div style= {styles.container}>

              <h2 style={styles.header}>

                <a style={styles.title} href="#"> { this.props.currentZone.name } </a></h2>

                <span>{ this.props.currentZone.zipCode }</span>
                  <br />
                <span>{ this.props.currentZone.numComments } comments</span>

            </div>

    )
  }
}

export default Zone
