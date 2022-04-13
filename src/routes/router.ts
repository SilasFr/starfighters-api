import { Router } from "express";
import { postBattle } from "../controllers/controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import battleSchema from "../schemas/battleSchema.js";

const router = Router();

router.post("/battle", validateSchema(battleSchema), postBattle);
router.get("/ranking");

export default router;
