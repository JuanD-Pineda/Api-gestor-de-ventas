import Express from "express";

import {
  crearVenta,
  editarVentas,
  getAllVentas,
} from "../controllers/ventas/controller.js";


const rutasVentas = Express.Router();

const genercCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send("Error consultando los usuarios");
  } else {
    res.json(result);
  }
};

rutasVentas.route("/ventas/crear").post((req, res) => {
  crearVenta(req.body, genercCallback(res));
});


rutasVentas.route("/ventas/listar").get((req, res) => {
  getAllVentas(genercCallback(res));
});

rutasVentas.route("/ventas/:id").patch((req, res) => {
  editarVentas(req.params.id, req.body, genercCallback(res));
});

export default rutasVentas;

