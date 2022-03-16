import axios from "axios";
import Cookies from "js-cookie";

export default async function CallAPI({
  url,
  method,
  data,
  tokenClient,
  tokenServer,
}) {
  let headers = {};

  if (tokenServer) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  } else if (tokenClient) {
    if (Cookies.get("tkn")) {
      headers = {
        Authorization: `Bearer ${Cookies.get("tkn")}`,
      };
    }
  }

  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((error) => error.response);

  return response;
}
