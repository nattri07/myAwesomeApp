import express from 'express';
import Author from '../models/Author';
import Book from '../models/Book';

const router = express.Router();


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
  if(req.body.first_name){
    Author.forge({
      first_name : req.body.first_name,
      last_name : req.body.last_name || null
    })
    .save()
    .then((author) => {
      res.json(author)
    })
  }
  else{
    res.status(400).send('Missing Parameters')
  }
})

module.exports = router;
