import { Router } from "express";
import passport from "passport";

import { register, login, updateUser, getUser } from "../controllers/users";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.put(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  updateUser
);

router.get(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  getUser
);


export default router;
