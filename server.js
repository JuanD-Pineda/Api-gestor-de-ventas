import Express from "express";
import Cors from "cors";
import dotenv from "dotenv";
import rutasProducto from "./routes/productos.js";
import rutasVentas from "./routes/ventas.js";
import rutasUsuario from "./routes/usuarios.js";
import { conectarBD } from "./db/conn.js";
import jwt from "express-jwt";
import jwks from "jwks-rsa";

dotenv.config({ path: "./.env" });

const PORT = process.env.port || 4000;
const app = Express();
app.use(Express.json());
app.use(Cors());

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-tic-team.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "api-gestor-ventas",
  issuer: "https://dev-tic-team.us.auth0.com/",
  algorithms: ["RS256"],
});

app.use(jwtCheck);
app.use(rutasProducto);
app.use(rutasUsuario);
app.use(rutasVentas);



const main = () => {
  return app.listen(process.env.port, () => {
    console.log(`escuchando puerto ${PORT}`);
  });
};

conectarBD(main);
