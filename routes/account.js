var express = require('express');
var router = express.Router();
var controllers = require('../controllers/ProfileController')

router.get('/:action', function(req,res,next) {

  var action = req.params.action
  if (action =='login') {

    res.json({
      confirmation: 'success',
      action: action
    })
  }
})

router.post('/:action', function(req, res, next) {

  var action = req.params.action
  if (action == 'login') {
    var params = {username: req.body.username}
    ProfileController.find(params, function(err, results) {
      if (err){
        // alert('OOPS! '+ err.message) cant use alert in backend. must use res.render/res.json
        res.json({
          confirmation: 'fail',
          message: err.message
        })
        return
      }

      res.json({
        confirmation: 'success',
        results: results
      })

    })
  }
})

//test by going to localhost:3000/account/login ("need the router.get action in order to work")

module.exports = router
