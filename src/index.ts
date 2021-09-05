import express, { Application } from 'express';
const app: Application = express();

const PORT: string | number = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`)
});