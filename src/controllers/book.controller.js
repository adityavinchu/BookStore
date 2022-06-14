import HttpStatus from 'http-status-codes';

import * as bookService from '../services/book.service';


/**
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
  
  //getAllBooks
  export const getAllBooks = async (req, res, next) => {
    try {
      const data = await bookService.getAllBooks();
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'All Books!!'
      });
    } catch (error) {
      next(error);
    }
  }