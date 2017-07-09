import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'
import superagent from 'superagent';
//super = superclass or parent class - adding to the constructor, take out super you're replacing constructor
class Comments extends Component {
  constructor(){
    super()
    this.state = {

      comment: {
        username: '',
        body: '',
        timestamp: ''
      },
      list: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
//grabbing the API from api/comment and using JSON stringify to display the data
    superagent
    .get('/api/comment')
    .query(null)
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err){
        alert('Error: '+err)
        return
      }

      console.log(JSON.stringify(response.body))
      let results = response.body.results

      this.setState({
        list: results
      })
    })
  }


//updatedList is making a copy of the array "list"
  submitComment() {
    console.log('submitComment: '+JSON.stringify(this.state.comment));
    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.comment)

    this.setState({
      list: updatedList
    })
  }

  updateUsername(event) {

    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['username'] = event.target.value

    this.setState({
      comment: updatedComment
    })
  }

  updateBody(event) {

    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['body'] = event.target.value

    this.setState({
      comment: updatedComment
    })
  }

  updateTimestamp(event) {
    console.log('updatedTimestamp: '+event.target.value)

    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['timestamp'] = event.target.value

    this.setState({
      comment: updatedComment
    })
  }


  render (){
    const commentList = this.state.list.map((comment, i) => {
      return (
          <li key={i}> <Comment currentComment={ comment } /> </li>
      )
    })

    return(
      <div>
        <h2> Comments: Zone 1 </h2>
        <div style={ styles.comment.commentsBox }>
            <ul style={ styles.comment.commentsList }>
                  { commentList }
            </ul>

            <input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username" /><br />
            <input onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder="Comment" /><br />
            <input onChange={this.updateTimestamp.bind(this)} className="form-control" type="text" placeholder="Timestamp" /><br />
            <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>

        </div>
      </div>
    )
  }
}

export default Comments
