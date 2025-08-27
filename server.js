const express = require('express');
const path = require('path');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');              // <-- añade
const app = express();
const PORT = 3000;

const PUBLIC_DIR = path.join(__dirname, 'public');
const NODEMOD_DIR = path.join(__dirname, 'node_modules');
console.log({ PUBLIC_DIR, NODEMOD_DIR });      // <-- ver rutas reales

app.use(morgan('dev'));                        // <-- verás cada GET

// Sirve estáticos
app.use('/node_modules', express.static(NODEMOD_DIR));
app.use(express.static(PUBLIC_DIR));

app.use(cors());
app.use(express.json());
app.use(fileUpload());

// Rutas app
const router = require('./routes/router');
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
