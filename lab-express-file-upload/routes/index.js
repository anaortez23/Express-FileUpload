const express = require('express');
const router  = express.Router();
const multer = require('multer');
const Picture = require('../models/picture.model');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
