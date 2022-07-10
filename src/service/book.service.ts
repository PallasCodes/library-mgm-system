import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from "mongoose";
import BookModel, { BookDocument } from "../models/book.model";

export async function createBook(
  input: DocumentDefinition<
    Omit<BookDocument, "createdAt" | "updatedAt" | "bookId">
  >
) {
  return BookModel.create(input);
}

export async function findBook(
  query: FilterQuery<BookDocument>,
  options: QueryOptions = { lean: true }
) {
  // TODO: find out what does QueryOptions = { lean: true } does
  return BookModel.findOne(query, {}, options);
}

export async function findAndUpdateBook(
  query: FilterQuery<BookDocument>,
  update: UpdateQuery<BookDocument>,
  options: QueryOptions
) {
  return BookModel.findOneAndUpdate(query, update, options);
}

export async function deleteBook(query: FilterQuery<BookDocument>) {
  return BookModel.deleteOne(query);
  // TODO: implement logic delete
}

export async function getBooks() {
  return BookModel.find({})
}