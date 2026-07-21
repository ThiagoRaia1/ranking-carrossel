import { httpClient } from "../httpclient";

export async function getDashboard() {
  return httpClient("/dashboard", {
    method: "GET",
  });
}
