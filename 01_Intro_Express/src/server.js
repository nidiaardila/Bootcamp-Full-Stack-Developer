import express from "express";
import routerPages from './routes/router.js';

const app = express();
const PORT = 3000;


// Middleware => funciones que se ejecutan entre la peticion y la respuesta.
app.use('/api/v1', routerPages);


app.listen(PORT, () => {
    console.log(`💻 Servidor arriba ⬆️ en http://localhost: ${PORT}`);
})


