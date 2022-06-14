import express from 'express';

import { userAuth } from '../middlewares/auth.middleware';
import router from './user.route';
import * as bookController from '../controllers/book.controller'


router.get('',userAuth,bookController.getAllBooks);
router.get('/:_id',userAuth,bookController.getBook);

export default router;