import CallAPI from "./config";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function postSignUp(data) {
  const url = `${ROOT_API}/${API_VERSION}/auth/participant/sign-up`;
  return CallAPI({ url, method: "POST", data });
}

export async function postSignIn(data) {
  const url = `${ROOT_API}/${API_VERSION}/auth/participant/sign-in`;
  return CallAPI({ url, method: "POST", data });
}
