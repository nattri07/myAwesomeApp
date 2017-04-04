// Genre.js
'use strict';

import Bookshelf from '../bookshelf';
import Book from './Book';

class Genre extends Bookshelf.Model{

  get tableName() {
    return 'genres';
  };

  books() {
    return this.belongsToMany('Book')
  }
};

export default Bookshelf.model('Genre', Genre);
