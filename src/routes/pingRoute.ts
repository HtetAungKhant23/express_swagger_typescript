import express from "express";
import PingController from "../controllers/pingController";

const router = express.Router();

router.get("/hay", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

export default router;
