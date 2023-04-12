const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/usuarios";
    this.authPath = "/api/auth";
    this.testimonialsPath = "/api/testimonials";
    // Conectar a la base de datos

    // Middlewares
    this.middlewares();
    // Rutas de aplicacion
    this.routes();
  }

  async conectarDB() {
    await dbConecction();
  }
  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    //Public dir
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.authPath, require("../routes/auth"));
    // this.app.use(this.usersPath, require('../routes/users'));
    this.app.use(this.testimonialsPath, require("../routes/testimonials"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}

module.exports = Server;
