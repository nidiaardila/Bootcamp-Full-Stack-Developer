import express from "express";
import userRouter from "./routes/user.routes.js";



const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api/v1', userRouter)


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT} 👆` )
})


