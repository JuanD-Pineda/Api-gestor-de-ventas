import Express from "express";
//import {crearProducto,getAllProducts} from "../controllers/productos/controller.js";
import { crearUsuario,getAllUsers } from "../controllers/usuarios/controller.js";
const rutasUsuario = Express.Router();

const genercCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send("Error consultando los usuarios");
  } else {
    res.json(result);
  }
};

rutasUsuario.route("/usuarios/crear/").post((req, res) => {
  crearUsuario(req.body, genercCallback(res));
});

rutasUsuario.route('/usuarios/listar').get((req, res) => {
  getAllUsers(genercCallback(res));
});


export default rutasUsuario;