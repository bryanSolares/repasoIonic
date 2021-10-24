import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import auth from '../auth/routes/auth';
import user from '../user/routes/user';

export default class Server {
  public app: express.Application;
  public port = 3000;

  constructor() {
    this.app = express();
    this.startMiddlwares();
    this.startRoutes();
    this.connectToDataBase();
  }

  startServe() {
    this.app.listen(this.port, () => {
      console.log(`Server on port ${this.port}`);
    });
  }
  private startMiddlwares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(morgan('dev'));
  }

  private startRoutes() {
    this.app.use('/auth', auth);
    this.app.use('/user', user);
  }

  private async connectToDataBase() {
    await mongoose.connect('mongodb://localhost:27017/photosGram', (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Connect to Database');
      }
    });
  }
}

//0PtjtbwMiVnz65UK
//mongodb+srv://mean_full:0PtjtbwMiVnz65UK@cluster0.gw8x9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
