import type { Config } from 'drizzle-kit';

import config from '@/config';

export default {
    schema: './src/db/schema.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: config.DB_CONNECTION_STR,
    },
} satisfies Config;
