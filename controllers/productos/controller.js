import { getDB } from "../../db/conn.js";

const crearProducto = async (datosProductos, callback) => {
  console.log(datosProductos);
  // datosProductos = req.body;
  console.log("llaves: ", Object.keys(datosProductos));
  if (
    Object.keys(datosProductos).includes("nombre") &&
    Object.keys(datosProductos).includes("descripcion") &&
    Object.keys(datosProductos).includes("valor") &&
    Object.keys(datosProductos).includes("cantidad") &&
    Object.keys(datosProductos).includes("estado")
  ) {
    const baseDeDatos = getDB();
    // implementar código para crear vehículo en la BD
    await baseDeDatos.collection('productos').insertOne(datosProductos, callback);
  } else {
    return "error";
  }
};

export default crearProducto;
