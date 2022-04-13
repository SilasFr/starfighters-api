import axios from "axios";
import { Request, Response } from "express";
import * as services from "../services/services.js";

export async function postBattle(req: Request, res: Response) {
  const users = res.locals.verified;

  services.verifyUsers(users);

  const firstUserRepos = await services.getRepos(users.firstUser);
  const secondUserRepos = await services.getRepos(users.secondUser);

  res.send([firstUserRepos, secondUserRepos]);
}
