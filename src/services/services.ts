import axios from "axios";
import GitHub from "github-api";

export async function verifyUsers(users) {
  await axios
    .get(`http://api.github.com/users/${users.firstUser}`)
    .catch((error) => {
      throw { type: "not_found", message: error.response.data };
    });

  await axios
    .get(`http://api.github.com/users/${users.secondUser}`)
    .catch((error) => {
      throw { type: "not_found", message: error.response.data };
    });

  return;
}

export async function getRepos(username: string) {
  const repos = await axios
    .get(`http://api.github.com/users/${username}/repos`)
    .catch((error) => {
      throw { type: "not_found", message: error.response.data };
    });
  return repos;
}
