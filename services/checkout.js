import CallAPI from "./config";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function getPaymentMethod() {
  const url = `${ROOT_API}/${API_VERSION}/payment-method`;
  return CallAPI({ url, method: "GET" });
}

export async function postCheckout(data) {
  const url = `${ROOT_API}/${API_VERSION}/checkout`;
  return CallAPI({ url, method: "POST", data });
}
