import { object, number, string, TypeOf, date } from 'zod'

const payload = {
  body: object({
    title: string({
      required_error: 'Title is required'
    }),
    author: string({
      required_error: 'Author is required'
    }),
    publishDate: date({
      required_error: 'Publish Date is required'
    }),
    image: string({
      required_error: 'Image is required'
    }),
    editorial: string({
      required_error: 'Editorial is required'
    }),
    numPages: number({
      required_error: 'Number of Pages is required'
    }),
    numCopies: number({
      required_error: 'Number of Copies is required'
    }),
    availableCopies: number({
      required_error: 'Avaible Copies is required'
    }),
  })
}

const params = {
  params: object({
    bookId: string({
      required_error: "BookId is required"
    })
  })
}

export const createBookSchema = object({ ...payload })

export const updateBookSchema = object({
  ...payload,
  ...params
})

export const deleteBookSchema = object({
  ...params
})

export const getBookSchema = object({
  ...params
})

export type CreateBookInput = TypeOf<typeof createBookSchema>
export type UpdateBookInput = TypeOf<typeof updateBookSchema>
export type ReadBookInput = TypeOf<typeof getBookSchema>
export type DeleteBookInput = TypeOf<typeof deleteBookSchema>