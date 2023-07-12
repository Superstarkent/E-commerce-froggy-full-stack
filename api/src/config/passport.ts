import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";


import { findUserByEmail } from "../services/users";


dotenv.config();
const JWT_Secret = process.env.JWT_SECRET as string;

export const jwtStrategy = new JwtStrategy(
    {
      secretOrKey: JWT_Secret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),  
    },
    async (payload: any, done: any) => {
        const userEmail = payload.email;
        const foundUser = await findUserByEmail(userEmail);
        done (null, foundUser);
    }
);