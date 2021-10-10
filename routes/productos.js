import Express from "express";
import crearProducto from "../controllers/productos/controller.js";

const rutasProducto = Express.Router();

const genercCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send("Error consultando los productos");
  } else {
    res.json(result);
  }
};

rutasProducto.route("/productos/nuevo/").post((req, res) => {
  crearProducto(req.body, genercCallback(res));
});

export default rutasProducto;
