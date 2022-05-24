const mongoose = require('mongoose');

// mongourl debe ser mongodb:// + url o en caso de ser local el nombre del contenedor de mongo + :27017 o el puerto a usar
const mongo_url = process.env.MONGO_URL || 'mongodb://mongodb:27017';

mongoose.connect(mongo_url);

mongoose.connection.on('connected', () => {
  console.log(`Conectado a la base de datos: ${mongo_url}`);
});
mongoose.connection.on('error', (err) => {
  console.log(`Error al conectar a la base de datos: ${err}`);
});
mongoose.connection.on('disconnected', () => {
  console.log('Desconectado de la base de datos');
})

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Desconectado de la base de datos al terminar la app');
    process.exit(0);
  });
});
