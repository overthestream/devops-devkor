import express from 'express';
import { addReview, getReviewByAuthor, getReviewByShopId } from './controller';

const router = express.Router();

router.get('/author', getReviewByAuthor);
router.get('/shop', getReviewByShopId);

router.post('/add', addReview);

export default router;
