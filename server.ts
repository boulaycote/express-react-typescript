import * as bodyParser from "body-parser";
import * as express from "express";
import * as logger from "morgan";

export class Server {

  public static bootstrap(port: number): express.Application {
    if (!this.server) {
      this.server = new Server();
    }
    this.server.app.set("port", port);
    return this.server.app;
  }

  // instance
  private static server: Server;

  private app: express.Application;

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
    // TODO
  }

  public routes() {
    // TODO
  }
}
