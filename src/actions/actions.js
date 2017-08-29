import constants from '../constants/constants'

export default {
//type mandatory in redux, other than that you can have as much stuff as you want. TYPE MANDATORY

  commentsReceived: (comments, zone) => {
    return {
      type: constants.COMMENTS_RECEIVED,
      comments: comments,
      zone: zone
    }
  },

  commentCreated: (comment) => {
    return {
      type: constants.COMMENT_CREATED,
      comment: comment
    }
  },

  zonesReceived: (zones) => {
    return {
      type: constants.ZONES_RECEIVED,
      zones: zones
    }
  },

  zoneCreated: (zone) => {
    return {
      type: constants.ZONE_CREATED,
      zone: zone
    }
  },

  selectZone: (index) => {
    return {
      type: constants.SELECT_ZONE,
      selectedZone: index
    }
  }

}
