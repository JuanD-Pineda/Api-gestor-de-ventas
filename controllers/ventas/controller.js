
import { getDB } from "../../db/conn.js";



const crearVenta = async (datosVentas, callback) => {
  console.log(datosVentas);
  console.log("llaves: ", Object.keys(datosVentas));
  if (
    Object.keys(datosVentas).includes("vendedor") &&
    Object.keys(datosVentas).includes("total_venta") &&
    Object.keys(datosVentas).includes("productos") &&
    Object.keys(datosVentas).includes("documento")
  ) {
    const baseDeDatos = getDB();
    await baseDeDatos.collection('ventas').insertOne(datosVentas, callback);
  } else {
    console.log("errorrrrrr")
    return "error";
  }
};

const getAllVentas = async (callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos
    .collection("ventas")
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
    .collection("ventas")
    .findOneAndUpdate(
      filtroVentas,
      operacion,
      { upsert: true, returnOriginal: true },
      callback
    );
};

export { crearVenta, getAllVentas, editarVentas };
