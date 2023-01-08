import { ServerContextType } from "@/types";
import getDataProvider from "@/db/dataProvider";
export const resolvers = {
  Query: {
    books: async (
      parent: any,
      args: any,
      ctx: ServerContextType,
      info: any
    ) => {
      console.log({ ctx });
      const dataProvider = getDataProvider(ctx.db);
      return await dataProvider.books.getBooks();
    },
    book: async (_: any, args: any, ctx: ServerContextType, info: any) => {
      const dataProvider = getDataProvider(ctx.db);
      return await dataProvider.books.getBookById(args.id);
    },
  },
};
