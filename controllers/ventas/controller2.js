import { getDB } from "../../db/conn.js";
import { ObjectId } from "mongodb";


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

export { getAllVentas, editarVentas };