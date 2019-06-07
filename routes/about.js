var express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  req.params.projects = projects;
  res.render('about', {
    projects: req.params.projects
  });
});

module.exports = router;