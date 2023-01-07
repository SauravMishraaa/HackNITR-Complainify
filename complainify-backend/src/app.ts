import express, { Application, Router } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
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
SERVER.app.use(express.json());
SERVER.app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();
const PORT = process.env.PORT || 3303;
mongoose.set('strictQuery', true);

// MongoDB

const URI = 'mongodb://localhost:27017/complainify';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

mongoose
  .connect(URI, options)
  .then(() => {
    console.log('connected to db');

    SERVER.app.listen(PORT, () => {
      console.log(`Listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log('error');
  });

SERVER.app.use('/api', SERVER.router);
