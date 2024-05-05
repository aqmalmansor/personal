'use server';

import { desc } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

import db from '@/db';
import { users } from '@/db/schema';

export const createUser = async (form: FormData) => {
    const name = form.get('name') as string;

    if (!name) throw new Error('Name is required');

    const result = await db.insert(users).values({
        name,
    });

    if (!result) throw new Error('User not created');

    revalidatePath('/');
    return result;
};

export const getUserDetails = async (id: number) => {
    const result = await db.query.users.findFirst({
        where: (model, { eq }) => eq(model.id, id),
    });

    if (!result) throw new Error('User not found');

    return result;
};

export const getUserList = async () => {
    const result = await db
        .select()
        .from(users)
        .orderBy(desc(users.id))
        .limit(10)
        .offset(10);

    if (!result) throw new Error('Users not found');

    return result;
};
