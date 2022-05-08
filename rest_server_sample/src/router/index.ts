import express from 'express';
import shopRouter from './shop/index';
import reviewRouter from './review/index';

const router = express.Router();

router.use('/shop', shopRouter);
router.use('/review', reviewRouter);

export default router;
