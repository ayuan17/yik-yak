import constants from '../constants/constants'

var initialState = {
  commentsLoaded: false,
  list: []
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state)

  switch (action.type) {

    case constants.COMMENTS_RECEIVED:
      console.log('COMMENTS_RECEIVED: ' + JSON.stringify(action.comments))
      // let updated = Object.assign({}, state)
      updated['list'] = action.comments
      updated['commentsLoaded'] = true

      return updated

    case constants.SELECT_ZONE:
      // let updated = Object.assign({}, state)
      updated['commentsLoaded'] = false
      return updated

    case constants.COMMENT_CREATED:
      console.log('COMMENT_CREATED: ' + JSON.stringify(action.comment))
      let updatedList = Object.assign([], updated.list)
      updatedList.push(action.comment)
      updated['list'] = updatedList

      return updated

    default:
      return state
  }
}
