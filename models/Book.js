// Book.js
'use strict';

import Bookshelf from '../bookshelf';
import Author from './Author';
import Genre from './Genre';

class Book extends Bookshelf.Model{

  get tableName() {
    return 'books';
  };

  author() {
    return this.belongsTo('Author');
  };

  genres() {
    return this.belongsToMany('Genre')
  }
};

export default Bookshelf.model('Book', Book);
