import { Request, Response } from 'express';
import queryGenerator from '../../middleware/connector';

export const getAllShop = async (req: Request, res: Response) => {
  try {
    const query = {
      str: `SELECT * FROM shop`,
      val: [],
    };
    const rows: Array<JSON> = await queryGenerator(query);
    res.json(rows);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

export const getShopById = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const query = {
      str: `SELECT * FROM shop WHERE id = $1`,
      val: [id],
    };
    await queryGenerator(query);
    const rows: Array<JSON> = await queryGenerator(query);
    res.json(rows);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const addShop = async (req: Request, res: Response) => {
  try {
    const { name, location, type } = req.body;
    const query = {
      str: `INSERT INTO shop WHERE VALUES($1, $2, $3)`,
      val: [name, location, type],
    };
    await queryGenerator(query);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
export const addKeyword = async (req: Request, res: Response) => {
  try {
    const { id, keyword } = req.body;
    const query = {
      str: `INSERT INTO shop_keyword WHERE VALUES($1, $2)`,
      val: [id, keyword],
    };
    await queryGenerator(query);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const getKeywordById = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const query = {
      str: `SELECT * FROM shop_keyword WHERE id = $1`,
      val: [id],
    };
    await queryGenerator(query);
    const rows: Array<JSON> = await queryGenerator(query);
    res.json(rows);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
