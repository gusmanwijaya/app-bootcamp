import CallAPI from "./config";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function getTransaction(id) {
  const url = `${ROOT_API}/${API_VERSION}/history-transaction/${id}`;
  return CallAPI({ url, method: "GET" });
}
