import { getDB } from "../../db/conn.js";
import { ObjectId } from "mongodb";

const crearVenta = async (datosVentas, callback) => {
  console.log(datosUsuarios);
  console.log("llaves: ", Object.keys(datosVentas));
  if (
    Object.keys(datosVentas).includes("valorTotal") &&
    Object.keys(datosVentas).includes("fecha") &&
    Object.keys(datosVentas).includes("documentoCliente") &&
    Object.keys(datosVentas).includes("nombreCliente") &&
    Object.keys(datosVentas).includes("nombreVendedor") &&
    Object.keys(datosVentas).includes("productos")
  ) {
    const baseDeDatos = getDB();
    // implementar código para crear ventas en la BD
    await baseDeDatos
      .collection("ventas2")
      .insertOne(datosVentas, callback);
  } else {
    return "error";
  }
};

const getAllVentas = async (callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos
    .collection("ventas2")
    .find({})
    .limit(50)
    .toArray(callback);
};

const editarVentas = async (id, edicion, callback) => {
  const filtroVentas = { _id: new ObjectId(id) };
  const operacion = {
    $set: edicion,
  };
  const baseDeDatos = getDB();
  await baseDeDatos
    .collection("ventas2")
    .findOneAndUpdate(
      filtroVentas,
      operacion,
      { upsert: true, returnOriginal: true },
      callback
    );
};

export { crearVenta, getAllVentas, editarVentas };