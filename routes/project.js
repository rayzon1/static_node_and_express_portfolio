const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  req.params.projects = projects;
  res.render('project.pug', {
    projects: req.params.projects,
    id: req.params.id
  });
});

router.get('/', function(req, res, next) {
  res.redirect('/');
})

module.exports = router;