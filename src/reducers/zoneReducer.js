import constants from '../constants/constants'

var initialState = {
  selectedZone: 0,
  list: []
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state)

  switch (action.type) {

    case constants.ZONES_RECEIVED:
      console.log('ZONES_RECEIVED: ' + JSON.stringify(action.zones))
      updated['list'] = action.zones //Here you take the Zones.js payload (data) and assign to list value of th reducer (state)
      return updated  //here the action is similar to this.setState(...)

    case constants.ZONE_CREATED:
      console.log('ZONE_CREATED: ' + JSON.stringify(action.zone))

      let updatedList = Object.assign([], updated.list)
      updatedList.push(action.zone)
      updated['list'] = updatedList
      return updated

    case constants.SELECT_ZONE:
      updated['selectedZone'] = action.selectedZone
      return updated

    default:
      return state

  }
}
