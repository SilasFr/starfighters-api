import connection from "../database";

export async function getUser(userName) {
  return connection.query(
    `
        SELECT * FROM fighters WHERE username=$1
    `,
    [userName]
  );
}
