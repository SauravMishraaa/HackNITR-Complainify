import express, { Application, Router } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import bodyParser = require('body-parser');
import route from './routers/Routes';
import mongoose from 'mongoose';

class Server {
  public app: Application = express();
  public router = route;
}
const SERVER = new Server();

// If you want anyone to be able to connect
SERVER.app.use(cors({ origin: true }));

// Allowing body-parsers
SERVER.app.use(bodyParser.json());
SERVER.app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();
const PORT = process.env.PORT || 3303;
SERVER.app.listen(PORT, async () => {
  console.log(`Listening on port http://localhost:${PORT}`);
  mongoose.set('strictQuery', true);
  mongoose.connect('http://localhost:27017/complainify', () => {
    console.log('connected');
  });
});

SERVER.app.use('/api', SERVER.router);
