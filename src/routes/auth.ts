import { Router } from "express";

import AuthController from "../controllers/auth";

const router = Router();

router.get("/register", async (req, res) => {
  console.log(req.body);
  const controller = new AuthController(req.body);
  const response = await controller.register();
  return res.send(response);
});

export default router;
