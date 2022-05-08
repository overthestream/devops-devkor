import { Request, Response } from 'express';
import queryGenerator from '../../middleware/connector';

export const addReview = async (req: Request, res: Response) => {
  try {
    const { id, title, description } = req.body;
    const timestamp = new Date();
    const query = {
      str: `INSERT INTO review VALUES($1, $2, $3, $4)`,
      val: [id, title, timestamp, description],
    };
    await queryGenerator(query);

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

export const getReviewByShopId = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const query = {
      str: `SELECT * FROM review WHRE id = $1`,
      val: [id],
    };
    const rows: Array<JSON> = await queryGenerator(query);
    res.json(rows);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const getReviewByAuthor = async (req: Request, res: Response) => {
  try {
    const { author_id } = req.query;
    const query = {
      str: `SELECT * FROM review WHRE author_id = $1`,
      val: [author_id],
    };
    const rows: Array<JSON> = await queryGenerator(query);
    res.json(rows);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
