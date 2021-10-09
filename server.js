import Express from 'express';
import Cors from 'cors';
import { conectarBD, getDB } from './db/conn.js';

const app = Express();

app.use(Express.json());
app.use(Cors());


app.post('/vehiculos/nuevo', (req, res) => {
  console.log(req);
  const datosVehiculo = req.body;
  console.log('llaves: ', Object.keys(datosVehiculo));
  try {
    if (
      Object.keys(datosVehiculo).includes('name') &&
      Object.keys(datosVehiculo).includes('brand') &&
      Object.keys(datosVehiculo).includes('model')
    ) {
      // implementar código para crear vehículo en la BD
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  } catch {
    res.sendStatus(500);
  }
});

const main = ()=>{
  return app.listen(process.env.port,()=>{
    console.log(`escuchando puerto ${process.env.port}`)
  })
}

conectarBD(main);