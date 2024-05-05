import { sql } from 'drizzle-orm';
import { integer, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable(
    'users',
    {
        id: serial('id').primaryKey(),
        name: varchar('name', { length: 256 }).notNull(),
        createdAt: timestamp('created_at')
            .default(sql`CURRENT_TIMESTAMP`)
            .notNull(),
        updatedAt: timestamp('updatedAt'),
    },
);

export type UserQueryType = typeof users.$inferSelect;
export type UserMutationType = typeof users.$inferInsert;

export const posts = pgTable(
    'posts',
    {
        id: serial('id').primaryKey(),
        title: varchar('title', { length: 1000 }).notNull(),
        content: varchar('content', { length: 1000 }),
        user_id: integer('user_id').references(() => users.id),
        createdAt: timestamp('created_at')
            .default(sql`CURRENT_TIMESTAMP`)
            .notNull(),
        updatedAt: timestamp('updatedAt'),
    },
);

export type PostQueryType = typeof posts.$inferSelect;
export type PostMutationType = typeof posts.$inferSelect;
