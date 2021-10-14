import Express from "express";
import crearVenta from "../controllers/ventas/controller.js";

const rutasVentas = Express.Router();


const genercCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send("Error agregando la venta");
  } else {
    res.json(result);
  }
};

rutasVentas.route("/ventas/nuevo").post((req, res) => {
  crearVenta(req.body, genercCallback(res));
});

export default rutasVentas;
