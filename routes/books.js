import express from 'express';
import Author from '../models/Author';
import Book from '../models/Book';
import Genre from '../models/Genre';

const router = express.Router();


/* GET users listing. */
router.get('/', (req, res, next) => {
  Book
  .fetchAll({withRelated: ['author','genres']})
  .then((books)=>{
    res.json(books);
  })
});

router.post('/', (req, res, next) => {
  let genres = req.body.genres;
  if(genres){
    genres = genres.split(',').map((genre)=>{
      return genre.trim();
    })
  }
  else{
    genres = ['undefined']
  }

  Book
  .forge({
    title : req.body.title,
    year : req.body.year || null,
    author_id : req.body.author_id
  })
  .save()
  .then((book)=>{
    genres.forEach((genre_name)=>{
      console.log(genre_name)
      Genre
      .where({name : genre_name})
      .fetch()
      .then((genre)=>{
        if(genre){
          book.genres().attach(genre)
        }
        else{
          Genre
          .forge({
            name : genre_name
          })
          .save()
          .then((new_genre)=>{
            book.genres().attach(new_genre)
          })
        }
      })
    })
  })
  .then(()=>{
    res.json("Values Inserted")
  })
})

module.exports = router;
