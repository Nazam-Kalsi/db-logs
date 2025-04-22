import { addUser, deleteUser } from "../controllers/user.Controller";
import { Router } from "express";

const router = Router();

router.route("/add").post(addUser)
router.route("/delete/:id").delete(deleteUser)

export default router;