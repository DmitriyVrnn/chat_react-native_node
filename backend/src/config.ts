// @ts-ignore
import { cleanEnv, port, str } from 'envalid';

export const configEnv = () =>  {
  cleanEnv(process.env, {
    MONGO_URL: str(),
    PORT: port(),
    JWT_SECRET_KEY: str()
  });
};