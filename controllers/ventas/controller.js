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

export default crearVenta;