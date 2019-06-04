var express = require('express');
var router = express.Router();
const { projects } = require('../data/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  req.params.projects = projects;


  res.render('index', {
    projects: req.params.projects
    
  });
  
});


module.exports = router;