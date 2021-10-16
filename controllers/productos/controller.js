import { getDB } from "../../db/conn.js";
import { ObjectId } from "mongodb";

const crearProducto = async (datosProductos, callback) => {
  console.log(datosProductos);
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
    await baseDeDatos
      .collection("productos")
      .insertOne(datosProductos, callback);
  } else {
    return "error";
  }
};

const getAllProducts = async (callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos
    .collection("productos")
    .find({})
    .limit(50)
    .toArray(callback);
};

const editarProducto = async (id, edicion, callback) => {
  const filtroProducto = { _id: new ObjectId(id) };
  const operacion = {
    $set: edicion,
  };
  const baseDeDatos = getDB();
  await baseDeDatos
    .collection("productos")
    .findOneAndUpdate(
      filtroProducto,
      operacion,
      { upsert: true, returnOriginal: true },
      callback
    );
};

export { crearProducto, getAllProducts, editarProducto };
