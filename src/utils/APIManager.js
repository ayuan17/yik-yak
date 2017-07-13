import superagent from 'superagent';
//this allows you to swap different packages without having to change any code in the actual components. Only in this file you change (superagent -> axios)
export default {

//api needs to pass two tests
  get: (url, params, callback) => {
    superagent
    .get(url)
    .query(params)
    .set('Accept', 'application/json')
    .end((err,response) => {
      if (err) {
        callback(err, null)
        return
      }

      const confirmation = response.body.confirmation
      if(confirmation != 'success') {
        callback({message: response.body.message}, null)
        return
      }
      callback(null, response.body)
    })
  },

  post: (url, body, callback) => {
    superagent
    .post(url)
    .send(body)
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err) {
        callback(err, null)
        return
      }

      const confirmation = response.body.confirmation
      if(confirmation != 'success') {
        callback({message: response.body.message}, null)
        return
      }
      callback(null, response.body)
    })

  },

  put: () => {

  },

  delete: () => {

  }

}
