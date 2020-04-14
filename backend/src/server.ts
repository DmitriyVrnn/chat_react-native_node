import app from './app';
import 'dotenv/config';
import { configEnv } from './config';

configEnv();

app.listen(process.env.PORT, () => {
  console.log(`Express server listening on port ${process.env.PORT}`);
});
