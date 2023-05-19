// import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { prisma } from "~/server/db";

export const exampleRouter = createTRPCRouter({
  getData: publicProcedure
    .query(async () => {
      const data = await prisma.solar_table.findMany({
        orderBy: {
          updated_at: "asc"
        },
        take: 20
      })
      return data
    }),
});
