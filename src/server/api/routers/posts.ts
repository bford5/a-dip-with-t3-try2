import type { User } from "@clerk/nextjs/dist/api";
import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const filterUser = (user: User) => {
  return {
    id: user.id,
    // username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    profileImage: user.profileImageUrl,
  };
};

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
    });

    const users = (
      await clerkClient.users.getUserList({
        userId: posts.map((post) => post.userAuthorId),
        limit: 100,
      })
    ).map(filterUser);
    // the above will pull the main users object and the map over again to filter out and return what's setup in filterUser ^^

    // console.log(users);

    return posts.map((post) => ({
      post,
      author: users.find((user) => user.id === post.userAuthorId),
    }));
  }),
});

// this connects with prisma for Posts schema

// the below is a default to get all posts data from post
// export const postsRouter = createTRPCRouter({
//   getAll: publicProcedure.query(({ ctx }) => {
//     return ctx.prisma.post.findMany();
//   }),
// });
