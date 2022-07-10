import mongoose from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface BookDocument extends mongoose.Document {
  bookId: string,
  title: string,
  author: string,
  publishDate: Date,
  image: string,
  editorial: string,
  numPages: number,
  numCopies: number,
  availableCopies: number,
  createdAt: Date,
  updatedAt: Date,
  // isDeleted: boolean,
}

const bookSchema = new mongoose.Schema(
  {
    bookId: {
      type: String,
      required: true,
      unique: true,
      default: () => `book_${nanoid()}`,
    },
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishDate: { type: Date, required: true },
    image: { type: String, required: true },
    editorial: { type: String, required: true },
    numPages: { type: Number, required: true },
    numCopies: { type: Number, required: true },
    availableCopies: { type: Number, required: true },
   // isDeleted: { type: Boolean, default: false }
  },
  { timestamps: true }
)

const BookModel = mongoose.model<BookDocument>("Book", bookSchema)

export default BookModel