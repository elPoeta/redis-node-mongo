import './config/envConf';
import express, { Application } from 'express';
import './config/connection';
const app: Application = express();

const PORT: string | undefined = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`)
});