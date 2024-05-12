'use server';

import { desc } from 'drizzle-orm';

import db from '@/db';
import { users } from '@/db/schema';

import { signIn, signOut } from './auth';

export const getUserDetails = async (id: string) => {
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
        .limit(10);

    if (!result) throw new Error('Users not found');

    return result;
};

export const login = async (form: FormData) => {
    const provider = form.get('provider') as string;
    await signIn(provider);
};

export const logout = async () => signOut();
