import { ServerContextType } from "@/types";

export const resolvers = {
  Query: {
    books: async (
      parent: any,
      args: any,
      ctx: ServerContextType,
      info: any
    ) => {
      return await ctx.db.books.getBooks();
    },
    book: async (_: any, args: any, ctx: ServerContextType, info: any) => {
      return await ctx.db.books.getBookById(args.id);
    },
  },
};
