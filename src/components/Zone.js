import React, { Component } from 'react';

class Zone extends Component {
  render() {
    return (
// Zone component
// { this.props.name } = Zone property in Zones.js
            <div>

              <h2><a href="#"> { this.props.name } </a></h2>

                <span>30341</span>
                  <br />
                <span>10 comments</span>

            </div>

    )
  }
}

export default Zone
