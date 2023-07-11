import { Router } from "express";
import passport from "passport";

import { register, login, updateUser } from "../controllers/users";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.put(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  updateUser
);

export default router;
