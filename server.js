import Express from "express";
import Cors from "cors";
import dotenv from "dotenv";
import rutasProducto from "./routes/productos.js";
import { conectarBD } from "./db/conn.js";
import rutasUsuario from "./routes/usuarios.js";
const app = Express();
dotenv.config({ path: "./.env" });

app.use(Express.json());
app.use(Cors());
app.use(rutasProducto);
app.use(rutasUsuario);

const main = () => {
  return app.listen(process.env.port, () => {
    console.log(`escuchando puerto ${process.env.port}`);
  });
};

conectarBD(main);
