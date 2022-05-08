import express from 'express';
import {
  getAllShop,
  getKeywordById,
  getShopById,
  addKeyword,
  addShop,
} from './controller';

const router = express.Router();

router.get('/list', getAllShop);
router.get('/info', getShopById);
router.post('/add', addShop);

router.get('/keyword/list', getKeywordById);
router.post('/keyword/add', addKeyword);

export default router;
