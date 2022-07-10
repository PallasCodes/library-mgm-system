import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import {
  createUserSessionHandler,
  deleteSessionHandler,
  getUserSessionHandler,
} from "./controller/session.controller";
import validateResource from "./middleware/validateResource";
import { createSessionSchema } from "./schema/session.schema";
import { createUserSchema } from "./schema/user.schema";
import requireUser from "./middleware/requireUser";
import {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
  deleteProductSchema
} from "./schema/product.schema";
import {
  createProductHandler,
  updateProductHandler,
  getProductHandler,
  deleteProductHandler
} from "./controller/product.controller";
import validate from "./middleware/validateResource";
import { createBookSchema } from "./schema/book.schema";
import { createBookHandler, getBooksHandler } from "./controller/book.controller";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/users", validateResource(createUserSchema), createUserHandler);

  app.post(
    "/api/sessions",
    validateResource(createSessionSchema),
    createUserSessionHandler
  );

  app.get("/api/sessions", requireUser, getUserSessionHandler);

  app.delete("/api/sessions", requireUser, deleteSessionHandler);

  app.post(
    "/api/products",
    [requireUser, validateResource(createProductSchema)],
    createProductHandler
  );

  app.put(
    "/api/products/:productId",
    [requireUser, validateResource(updateProductSchema)],
    updateProductHandler
  );

  app.get(
    "/api/products/:productId",
    validateResource(getProductSchema),
    getProductHandler
  );

  app.delete(
    "/api/products/:productId",
    [requireUser, validateResource(deleteProductSchema)],
    deleteProductHandler
  );

  app.post("/api/books", validateResource(createBookSchema), createBookHandler)

  app.get("/api/books", getBooksHandler)
}

export default routes;
