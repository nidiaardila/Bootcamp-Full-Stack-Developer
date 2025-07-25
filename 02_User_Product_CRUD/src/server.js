import express from "express";


const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT} 👆` )
})


