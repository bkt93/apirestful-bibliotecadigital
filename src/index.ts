// cargo las variables de entorno del archivo .env
import process from 'node:process';
process.loadEnvFile();

import express from 'express';
import { connectDB } from './config/db.js';
import bookRoutes from './routes/bookRoutes.js';

// conecto a la base de datos
connectDB();

// inicializo express
const app = express();
const PORT = process.env.PORT || 3000;

// middleware para parsear json
app.use(express.json());

// rutas de la api
app.use('/books', bookRoutes);

// ruta base para probar que el servidor funciona
app.get('/', (req, res) => {
  res.json({ message: 'api de biblioteca digital funcionando' });
});

// inicio el servidor
app.listen(PORT, () => {
  console.log(`servidor corriendo en http://localhost:${PORT}`);
});
