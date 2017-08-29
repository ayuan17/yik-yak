import constants from '../constants/constants'

var initialState = {
  // list: [],
  map: {}
}

export default (state = initialState, action) => {
  var updated = Object.assign({}, state)
  let updatedMap = Object.assign({}, updated.map)

  switch (action.type) {
    case constants.COMMENTS_RECEIVED:
      console.log('COMMENTS_RECEIVED: ' + JSON.stringify(action.comments))
      // let updatedMap = Object.assign({}, updated.map)
      let zoneComments = updatedMap[action.zone._id]
      if (zoneComments == null)
          zoneComments = []
      else
        zoneComments = Object.assign([], zoneComments)

        action.comments.forEach((comment, i) => {
          zoneComments.push(comment)
      })

      updatedMap[action.zone._id] = zoneComments
      updated['map'] = updatedMap

        return updated

      case constants.COMMENT_CREATED:
        console.log('COMMENT_CREATED: ' + JSON.stringify(action.comment))
        // let updatedMap = Object.assign({}, updated.map)
        let commentList = updatedMap[action.comment.zone]

        if (commentList == null)
            commentList = []
        else
          commentList = Object.assign([], commentList)

           commentList.push(action.comment)

           updatedMap[action.comment.zone] = commentList
           updated['map'] = updatedMap

           return updated

      case constants.SELECT_ZONE:
        // let updated = Object.assign({}, state)
          return updated

    default:
      return state
    }
}
