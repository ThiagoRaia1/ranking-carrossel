const api = "http://localhost:3000";

export async function httpClient(
  endpoint: string,
  options: RequestInit,
  apiUrl: string = api,
) {
  console.log(`${apiUrl}${endpoint}`);

  const response = await fetch(`${apiUrl}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  // Lê como texto primeiro
  const text = await response.text();

  // Se não tiver nada, vira null
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(data?.message || "Erro na requisição");
  }

  return data;
}
