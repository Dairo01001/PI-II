import "dotenv/config";

export default {
  DB: {
    USER: process.env.DB_USER || "postgres",
    PASSWORD: process.env.DB_PASSWORD || "1234",
    HOST: process.env.DB_HOST || "localhost:5432",
  },
  ACCESS: process.env.ACCESS || "http://localhost:3000",
  PORT: process.env.PORT || 3001,
  API: {
    KEY: process.env.API_KEY,
  },
};
