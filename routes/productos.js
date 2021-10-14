import Express from "express";
import {crearProducto,getAllProducts,editarProducto} from "../controllers/productos/controller.js";

const rutasProducto = Express.Router();

const genercCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send("Error consultando los productos");
  } else {
    res.json(result);
  }
};

rutasProducto.route("/productos/nuevo").post((req, res) => {
  crearProducto(req.body, genercCallback(res));
});

rutasProducto.route('/productos/ver').get((req, res) => {
  getAllProducts(genercCallback(res));
});

rutasProducto.route('/productos/:id').patch((req, res) => {
  editarProducto(req.params.id, req.body, genercCallback(res));
});


export default rutasProducto;
