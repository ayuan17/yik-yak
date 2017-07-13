import constants from '../constants/constants'

export default {
//type mandatory in redux
  zonesReceived: (zones) => {
    return {
      type: constants.ZONES_RECEIVED,
      zones: zones
    }
  }

}
