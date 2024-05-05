import './envConfig';

const config = {
    DB_CONNECTION_STR: process.env.DATABASE_URL!,
};

export default config;
