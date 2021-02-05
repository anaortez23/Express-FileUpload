const express = require('express');
const router  = express.Router();
const multer = require('multer');
const Picture = require('../models/picture.model');
const upload = multer({ dest: './public/uploads/' });

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


// Route to upload from project base path

 
router.post('/upload', upload.single('photo'), (req, res, next) => {
  const picture = new Picture({
    name: req.body.name,
    path: `/uploads/${req.file.filename}`,
    originalName: req.file.originalname
  });
 
  picture
    .save()
    .then(() => {
      res.redirect('/');
    })
    .catch(err => {
      next(error);
    });
  


module.exports = router;
