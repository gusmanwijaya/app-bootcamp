import CallAPI from "./config";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function getLandingPage() {
  const url = `${ROOT_API}/${API_VERSION}/landing-page`;
  return CallAPI({ url, method: "GET" });
}
