import type { NextApiRequest, NextApiResponse } from "next";
import { bffAuthHandler } from "middlecat-react";
import Cookies from "cookies";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cookies = new Cookies(req, res);
  const maxAge = undefined;
  const secure = process.env.NODE_ENV === "production" ? true : false;
  return await bffAuthHandler(req, res, cookies, maxAge, secure);
}
