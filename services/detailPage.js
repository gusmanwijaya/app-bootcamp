import CallAPI from "./config";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function getDetailPage(id) {
  const url = `${ROOT_API}/${API_VERSION}/detail-page/${id}`;
  return CallAPI({ url, method: "GET" });
}
