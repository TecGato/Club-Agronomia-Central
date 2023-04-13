const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.usersPath = "/api/users";
    this.authPath = "/api/auth";
    this.testimonialsPath = "/api/testimonials";
    this.postsPath = "/api/posts";
    this.athletesPath = "/api/athletes";
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
    this.app.use(this.postsPath, require("../routes/posts"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`server runing on port: ${this.port}`);
    });
  }
}

module.exports = Server;
