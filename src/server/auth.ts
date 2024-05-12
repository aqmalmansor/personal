// Auth Middleware - To refresh token
// Middleware is disabled for now due to error regarding Cloudflare issue
// https://github.com/vercel/next.js/discussions/50177?sort=new

import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth from 'next-auth';
import {
    type DefaultSession,
} from 'next-auth';
import Google from 'next-auth/providers/google';

import config from '@/config';
import db from '@/db';
import { UserRoleType } from '@/db/schema';

declare module 'next-auth' {
    interface Session extends DefaultSession {
      user: {
        id: string;
        // ...other properties
        authToken: string | null;
        accessToken: string| null;
        role: UserRoleType;
      } & DefaultSession['user'];
    }

    interface User {
      // ...other properties
      role: UserRoleType;
    }
  }

export const { handlers, auth, signIn, signOut } = NextAuth({
    secret: config.AUTH_SECRET,
    adapter: DrizzleAdapter(db),
    providers: [
        Google({
            clientId: config.GOOGLE_ID,
            clientSecret: config.GOOGLE_SECRET,
            profile(profile) {
                return {
                    ...profile,
                    image: profile.picture,
                    role: 'guest',
                };
            },
        }),
    ],
});
