import './config';
import express, { Application } from 'express';

const app: Application = express();

const PORT: string | undefined = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`)
});