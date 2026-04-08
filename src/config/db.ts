import mongoose from 'mongoose';

/**
 * configuracion de la conexion a mongodb
 */
export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/biblioteca-digital';
    await mongoose.connect(uri);
    console.log('conectado a mongodb exitosamente');
  } catch (error) {
    console.error('error al conectar a mongodb:', error);
    process.exit(1);
  }
};
