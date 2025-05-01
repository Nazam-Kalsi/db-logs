import { Router } from "express";
import { addPost, deletePost } from "../controllers/post.controller";

const router = Router();

router.route('/add-post').post(addPost);
router.route('/delete-post/:id').post(deletePost);

export default router;

