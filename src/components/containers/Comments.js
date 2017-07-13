import React, { Component } from 'react'
import { Comment, CreateComment } from '../presentation'
import styles from './styles'
import { APIManager } from '../../utils'
//super = superclass or parent class - adding to the constructor, take out super you're replacing constructor
class Comments extends Component {
  constructor(){
    super()
    this.state = {

      // comment: {
      //   username: '',
      //   body: ''
      // },
      list: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount - comments')
//grabbing the API from api/comment and using JSON stringify to display the data
    APIManager.get('/api/comment', null, (err, response) => {
      if (err){
        alert('Error: '+err.message)
        return
      }
      this.setState({
        list: response.results
      })
    })
  }


//updatedList is making a copy of the array "list"
  submitComment(comment) {
    console.log('submitComment: '+JSON.stringify(comment));

    let updatedComment = Object.assign({}, comment)
    APIManager.post('/api/comment', updatedComment, (err, response) => {
      if (err) {
        alert(err)
        return
      }

      console.log(JSON.stringify(response))
      let updatedList = Object.assign([], this.state.list)
      updatedList.push(response.result)
      this.setState({
        list: updatedList
      })
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

            <CreateComment onCreate={this.submitComment.bind(this)} />

        </div>
      </div>
    )
  }
}

export default Comments
