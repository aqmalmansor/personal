import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import config from '@/config';

import * as schema from './schema';

const client = postgres(config.DB_CONNECTION_STR);
const db = drizzle(client, { schema });

export default db;
