import app from './app';
import { config } from 'dotenv';
import {prisma} from './config/db';

config();

const PORT = process.env.PORT || 5000;

async function startServer(){
  try{
    await prisma.$connect()
    console.log('Database connected successfully');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    
  }catch(e){
     console.error('Failed to connect to database:', e);
    process.exit(1); // E
  }
}

startServer()