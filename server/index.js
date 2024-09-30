import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParse from 'body-parse'
import chalk from 'chalk';
import ConnectDatabase from './mongodb/db-config.js';

dotenv.config();
ConnectDatabase();

const app = express();

// Middlewares
app.use(express.json());
app.use(bodyParse.json());

const PORT =   5000;

app.listen(PORT, () => {
 console.log(chalk.yellow(`Server Running on port ${chalk.bold(PORT)}`));
})