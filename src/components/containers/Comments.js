import React, { Component } from 'react'
import { Comment, CreateComment } from '../presentation'
import styles from './styles'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions/actions'
//Use redux when data needs to be shared across more than one component
//super = superclass or parent class - adding to the constructor, take out super you're replacing constructor
class Comments extends Component {
  constructor(){
    super()
    this.state = {
      commentsLoaded: false,
      index: 0
    }
  }

//updatedList is making a copy of the array "list"
  submitComment(comment) {
    let updatedComment = Object.assign({}, comment)

    let zone = this.props.zones[this.props.index]
    updatedComment['zone'] = zone._id
//API call
    APIManager.post('/api/comment', updatedComment, (err, response) => {
      if (err) {
        alert(err)
        return
      }

      console.log(JSON.stringify(response))
      const comment = response.result

      this.props.commentsReceived([comment], zone)

    })
  }

componentDidUpdate() {
  console.log('componentDidUpdate')
  let zone = this.props.zones[this.props.index]
  if(zone == null) {
    console.log('NO SELECTED ZONE')
    return
  }

  let commentsArray = this.props.commentsMap[zone._id]
  if (commentsArray != null) //comments already loaded, no need to make follow up requests.
    return

  APIManager.get('/api/comment', {zone:zone._id}, (err, response) => {
    if (err){
      alert('Error: '+err.message)
      return
    }

    let comments = response.results
    this.props.commentsReceived(comments, zone) //this will trigger the action then gets sent to the store
  })
}

  render (){

    const selectedZone = this.props.zones[this.props.index]

    let zoneName = null
    let commentList = null

    if (selectedZone != null) {
      zoneName = selectedZone.name

      let zoneComments = this.props.commentsMap[selectedZone._id]
    if (zoneComments != null) {
      commentList = zoneComments.map((comment, i) => { //no need for this.props. - it is a local variable
        return (
            <li key={i}> <Comment currentComment={ comment } /> </li>
        )
      })
    }
  }

    return(
      <div>
        <h2> { zoneName } </h2>
        <div style={ styles.comment.commentsBox }>
            <ul style={ styles.comment.commentsList }>
                  { commentList }
            </ul>

            <CreateComment onCreate={this.submitComment.bind(this)} />

        </div>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    commentsMap: state.comment.map,
    // comments: state.comment.list,
    commentsLoaded: state.comment.commentsLoaded,
    index: state.zone.selectedZone,
    zones: state.zone.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    commentsReceived: (comments, zone) => dispatch(actions.commentsReceived(comments, zone)),
    commentCreated: (comment) => dispatch(actions.commentCreated(comment))
  }
}

export default connect(stateToProps, dispatchToProps) (Comments)
