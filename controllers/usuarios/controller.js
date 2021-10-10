import { getDB } from "../../db/conn.js";

const crearUsuario = async (datosUsuarios, callback) => {
  console.log(datosUsuarios);
  console.log("llaves: ", Object.keys(datosUsuarios));
  if (
    Object.keys(datosUsuarios).includes("nombre") &&
    Object.keys(datosUsuarios).includes("apellido") &&
    Object.keys(datosUsuarios).includes("cedula") &&
    Object.keys(datosUsuarios).includes("email") &&
    Object.keys(datosUsuarios).includes("rol") &&
    Object.keys(datosUsuarios).includes("estado")
  ) {
    const baseDeDatos = getDB();
    await baseDeDatos.collection('usuarios').insertOne(datosUsuarios, callback);
  } else {
    return "error";
  }
};

const getAllUsers = async (callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection('usuarios').find().limit(50).toArray(callback);
};


export {crearUsuario, getAllUsers} ;