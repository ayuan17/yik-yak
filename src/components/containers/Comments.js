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
    console.log('submitComment: '+JSON.stringify(comment));

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
      this.props.commentCreated(response.result)
      // let updatedList = Object.assign([], this.state.list)
      // updatedList.push(response.result)
      // this.setState({
      //   list: updatedList
      // })
    })
  }

componentDidUpdate() {
  console.log('componentDidUpdate')
  let zone = this.props.zones[this.props.index]
  if(zone == null) {
    console.log('NO SELECTED ZONE')
    return
  }

  console.log('SELECTED ZONE IS RDY: ' + zone._id)
  if (this.props.commentsLoaded == true)
    return

  APIManager.get('/api/comment', {zone:zone._id}, (err, response) => {
    if (err){
      alert('Error: '+err.message)
      return
    }

    let comments = response.results
    this.props.commentsReceived(comments) //this will trigger the action then gets sent to the store
  })
}

  render (){
    const commentList = this.props.comments.map((comment, i) => {
      return (
          <li key={i}> <Comment currentComment={ comment } /> </li>
      )
    })

    const selectedZone = this.props.zones[this.props.index]
    const zoneName = (selectedZone == null) ? '' : selectedZone.name

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
    comments: state.comment.list,
    commentsLoaded: state.comment.commentsLoaded,
    index: state.zone.selectedZone,
    zones: state.zone.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    commentsReceived: (comments) => dispatch(actions.commentsReceived(comments)),
    commentCreated: (comment) => dispatch(actions.commentCreated(comment))
  }
}

export default connect(stateToProps, dispatchToProps) (Comments)
