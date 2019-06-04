var express = require('express');
var router = express.Router();
const { projects } = require('../data/data.json');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  req.params.projects = projects;
  res.render('project.pug', {
    projects: req.params.projects,
    id: req.params.id
  });
  console.log(req.params)
});

router.get('/', function(req, res, next) {
  res.redirect('/');
})

module.exports = router;