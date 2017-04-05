import express from 'express';
import Author from '../models/Author'; // Import the Author Model

const router = express.Router();

//Get all Authors with the books that they wrote
router.get('/', (req, res, next) => {
  Author
  .fetchAll({withRelated: ['books']})
  .then((author)=>{
    res.json(author);
  })
});

//Get Author with specified ID
router.get('/:id',(req, res, next) => {
  Author
  .where({id : req.params.id})
  .fetch({withRelated: ['books']})
  .then((author)=>{
    res.json(author)
  })
})

//Create a New Author
router.post('/', (req, res, next) => {
  if(req.body.first_name){
    Author.forge({
      first_name : req.body.first_name,
      last_name : req.body.last_name || null
    })
    .save()
    .then((saved) => {
      res.json({saved})
    })
  }
  else{
    res.status(400).send('Missing Parameters')
  }
})

//Delete an Author with the Given ID
router.delete('/:id', (req, res, next) => {
  Author.forge({id : req.params.id})
  .fetch({require: true})
  .then((author) => {
    author.destroy()
    .then(()=>{
      res.json("Successfully deleted Author")
    })
  })
})

//Update the Author with the specified ID
router.patch('/:id', (req, res, next) => {
  Author
  .where({id : req.params.id})
  .fetch({withRelated: ["books"]})
  .then((author)=>{
    author.save({
      first_name : req.body.first_name || author.first_name,
      last_name : req.body.last_name || author.last_name
    }, {
      method: 'update',
      patch: true
    })
    .then((update)=>{
      res.json(update);
    })
  })
})

module.exports = router;
