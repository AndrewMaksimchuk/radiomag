import type { JWTPayload } from "jose";
import { SignJWT, jwtVerify } from "jose";

const alg = "HS256";
const secret = new TextEncoder().encode(process.env.KEY_SECRET);

export const tokenJWTSign = (payload: JWTPayload) => {
  return new SignJWT(payload).setProtectedHeader({ alg }).sign(secret);
};

export const tokenJWTVerify = (jwt: string) => {
  return jwtVerify(jwt, secret);
};

export const createAccessToken = (payload: JWTPayload = {}) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setExpirationTime("15m")
    .sign(secret);
};

export const createRefreshToken = (payload: JWTPayload = {}) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setExpirationTime("7d")
    .sign(secret);
};
