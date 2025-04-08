import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import session from "express-session";

dotenv.config();
const APP_PORT = process.env.APP_PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;
const app = express();
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



app.listen(APP_PORT,()=>{
    console.log(`Backend conectado al puerto ${APP_PORT}`);
})