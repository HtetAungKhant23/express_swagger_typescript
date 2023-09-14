import express, { Express } from "express";
import router from "./routes/pingRoute";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app: Express = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/", async (_req, res) => {
  res.send({
    message: "hello world",
  });
});

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use(router);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
