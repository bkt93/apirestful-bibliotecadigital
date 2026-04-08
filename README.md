# api restful de biblioteca digital

este proyecto es una api restful desarrollada con node.js, express, typescript y mongodb para la gestión de una colección de libros. sigue el patrón de diseño mvc (modelo-vista-controlador).

## requisitos previos

- node.js (versión 20.12.0 o superior para soporte de `process.loadEnvFile()`)
- mongodb corriendo localmente o una uri de mongodb atlas (por si queremos tener
la db hosteada en la nube)

## instalación

1. clonar el repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```

2. instalar las dependencias:
   ```bash
   npm install
   ```

3. configurar las variables de entorno:
   crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/biblioteca-digital
   ```

## ejecución

para iniciar el servidor en modo de desarrollo:
```bash
npm run dev
```

el servidor estará disponible en `http://localhost:3000`

## endpoints

- `get /books`: listar todos los libros
- `get /books/:id`: obtener un libro por su id
- `post /books`: crear un nuevo libro
- `patch /books/:id`: actualizar un libro existente
- `delete /books/:id`: eliminar un libro
