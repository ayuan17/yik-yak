import constants from '../constants/constants'

var initialState = {
  list: []
}

export default (state = initialState, action) => {

  switch (action.type) {

    case constants.COMMENTS_RECEIVED:
      console.log('COMMENTS_RECEIVED: ' + JSON.stringify(action.comments))
      let updated = Object.assign({}, state)
      updated['list'] = action.comments

      return updated

    default:
      return state
  }
}
