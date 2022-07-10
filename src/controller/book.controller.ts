import { Request, Response } from "express";
import {
  CreateBookInput,
  ReadBookInput,
  UpdateBookInput,
  DeleteBookInput,
} from "../schema/book.schema";
import {
  createBook,
  deleteBook,
  findAndUpdateBook,
  findBook,
  getBooks
} from "../service/book.service";

// TODO: use try catch on every controller and implement an error handler

export async function createBookHandler(
  req: Request<{}, {}, CreateBookInput["body"]>,
  res: Response
) {
  const body = req.body;

  const book = await createBook({ ...body });

  return res.send(book);
}

export async function getBooksHandler(req: Request, res: Response) {
  const books = await getBooks()

  return res.send(books)
}
