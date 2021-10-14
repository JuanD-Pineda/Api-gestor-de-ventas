import { getDB } from "../../db/conn.js";



const crearVenta = async (datosVentas, callback) => {
  console.log(datosVentas);
  console.log("llaves: ", Object.keys(datosVentas));
  if (
    Object.keys(datosVentas).includes("vendedor") &&
    Object.keys(datosVentas).includes("producto") &&
    Object.keys(datosVentas).includes("cantidad")
  ) {
    const baseDeDatos = getDB();
    // implementar código para crear vehículo en la BD
    await baseDeDatos.collection('ventas').insertOne(datosVentas, callback);
  } else {
    return "error";
  }
};

export default crearVenta;