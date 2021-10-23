import Express from "express";
import { editarVentas, getAllVentas } from "../controllers/ventas/controller2.js";

const rutasVentas2 = Express.Router();

const genercCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send("Error consultando los usuarios");
  } else {
    res.json(result);
  }
};

rutasVentas2.route("/ventas/nuevo").post((req, res) => {
  crearVenta(req.body, genercCallback(res));
});

rutasVentas2.route('/ventas/listar').get((req, res) => {
  getAllVentas(genercCallback(res));
});

rutasVentas2.route('/ventas/:id').patch((req, res) => {
  editarVentas(req.params.id, req.body, genercCallback(res));
});

export default rutasVentas2; 