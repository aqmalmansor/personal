import './envConfig';

const config = {
    AUTH_SECRET: process.env.AUTH_SECRET,
    DB_CONNECTION_STR: process.env.DATABASE_URL!,
    GOOGLE_ID: process.env.GOOGLE_ID!,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET!,
};

export default config;
