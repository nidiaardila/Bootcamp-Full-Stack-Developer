import express from "express";
import userRouter from './routes/user.routes.js';
import productRouter from './routes/product.routes.js'
import { errorHandler } from "./middleware/errorHandler.js";


const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api/v1', userRouter)
app.use('/api/v1', productRouter)

app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT} 👆` )
})


