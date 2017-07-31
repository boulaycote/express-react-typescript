import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";

export class Server {

  // instance
  private static server: Server;
  
  private app: express.Application;

  public static bootstrap(port: Number): express.Application {
    if (this.server == null) {
      this.server = new Server();
    }
    this.server.app.set("port", port);
    return this.server.app;
  }

  constructor() {
    this.app = express();

    this.config();

    this.routes();

    this.api();
  }

  public config() {
    this.app.use(logger("dev"));

    this.app.use(bodyParser.json());
    
    if (process.env.NODE_ENV === "production") {
      this.app.use(express.static("client/build"));
    }
  }

  public api() {
    // this.app.use("/", require("./api"));
  }

  public routes() {

  }
}
