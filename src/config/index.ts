export const ServerPort = parseInt(process.env.SERVER_PORT, 10) || 3000;

export const CorsAllowHeaders = ['Content-Type', 'Authorization', 'X-API-KEY', 'X-REQUESTED-WITH'];

if (process.env.NODE_ENV !== 'test') {
  process.env.DATABASE_URL = 'mongodb://localhost:27017/cat';
}
