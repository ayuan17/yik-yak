import constants from '../constants/constants'

var initialState = {
  list: []
}

export default (state = initialState, action) => {

  switch (action.type) {

    case constants.ZONES_RECEIVED:
      console.log('ZONES_RECEIVED: ' + JSON.stringify(action.zones))
      let updated = Object.assign({}, state)
      updated['list'] = action.zones //Here you take the Zones.js payload (data) and assign to list value of th reducer (state)
      return updated  //here the action is similar to this.setState(...)

    default:
      return state

  }

}
