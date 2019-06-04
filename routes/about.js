var express = require('express');
var router = express.Router();
const { projects } = require('../data/data.json');

/* GET home page. */
router.get('/about.pug', function(req, res, next) {
  //req.params.projects = projects;
//   res.render('about', {
//     projects: req.params.projects
//   });
    res.send('Hello')
});

module.exports = router;