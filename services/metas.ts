import { httpClient } from "../httpclient";
import { Meta } from "../interfaces/metas";

export async function getMetas(): Promise<Meta> {
  return httpClient("/metas", {
    method: "GET",
  });
}

export async function updateMetas(meta: Partial<Meta>): Promise<Meta> {
  return httpClient("/metas", {
    method: "PUT",
    body: JSON.stringify(meta),
  });
}
