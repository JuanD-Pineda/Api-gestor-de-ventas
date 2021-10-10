import Express from "express";
import Cors from "cors";
import dotenv from "dotenv";
import rutasProducto from "./routes/productos.js";
import { conectarBD } from "./db/conn.js";

const app = Express();
dotenv.config({ path: "./.env" });

app.use(Express.json());
app.use(Cors());
app.use(rutasProducto);

// app.post("/productos/nuevo/", (req, res) => {
//   console.log(req);
//   const datosProductos = req.body;
//   console.log("llaves: ", Object.keys(datosProductos));
//   try {
//     if (
//       Object.keys(datosProductos).includes("nombre") &&
//       Object.keys(datosProductos).includes("descripcion") &&
//       Object.keys(datosProductos).includes("valor") &&
//       Object.keys(datosProductos).includes("cantidad") &&
//       Object.keys(datosProductos).includes("estado")
//     ) {
//       const baseDeDatos = getDB();
//       // implementar código para crear vehículo en la BD
//       baseDeDatos
//         .collection("vehiculo")
//         .insertOne(datosProductos, (err, result) => {
//           if (err) {
//             console.error(err);
//             res.sendStatus(500);
//           } else {
//             console.log(result);
//             res.sendStatus(200);
//           }
//         });
//     } else {
//       res.sendStatus(500);
//     }
//   } catch {
//     res.sendStatus(500);
//   }
// });

const main = () => {
  return app.listen(process.env.port, () => {
    console.log(`escuchando puerto ${process.env.port}`);
  });
};

conectarBD(main);
