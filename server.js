import Express from "express";
import Cors from "cors";
import dotenv from "dotenv";
import rutasProducto from "./routes/productos.js";
import rutasVentas from "./routes/ventas.js";
import rutasUsuario from "./routes/usuarios.js";
import { conectarBD } from "./db/conn.js";
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';


const app = Express();
dotenv.config({ path: "./.env" });


app.use(Express.json());
app.use(Cors());
app.use(rutasProducto);
app.use(rutasUsuario);
app.use(rutasVentas);
// app.use(jwtCheck);


const main = () => {
  return app.listen(process.env.port, () => {
    console.log(`escuchando puerto ${process.env.port}`);
  });
};

conectarBD(main);
