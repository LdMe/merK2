import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import session from "express-session";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const APP_PORT = process.env.APP_PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;
const CLIENT_URL = process.env.CLIENT_URL;
const app = express();
const corsOptions = {
    origin: CLIENT_URL,
    credentials: true // Permitir envío de cookies
}
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.static('public')); // para poder subir archivos publicos (estilos, js de front, etc.)
app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))
app.use(express.json()); // para API (formato json)
app.use(express.urlencoded({extended:true})); // para Vistas (formato formulario)

app.set('views', 'src/views');
app.set('view engine', 'pug');



app.use("/",router);



app.listen(3000,()=>{
    console.log(`Backend conectado al puerto ${APP_PORT}`);
})