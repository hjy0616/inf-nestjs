import * as express from "express";
import catsRouter from "./cats/cats.route";

// 싱글톤 패턴 각각의 라우터를 분리가 가능
class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }
  private setRoute() {
    // 모듈화 시켜서 라우터를 분리함
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("this is logging middleware");
      next();
    });

    // json middleware
    this.app.use(express.json());

    this.setRoute();

    // 404 middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      res.send({ error: "404 not found error" });
    });
  }
  public listen() {
    this.setMiddleware();
    const port: number = 8000;
    this.app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
}
function init() {
  const server = new Server();
  server.listen();
}
init();
