import { httpClient } from "../httpclient";
import { Vendedor } from "../interfaces/vendedor";

export async function getVendedores(): Promise<Vendedor[]> {
  return httpClient("/vendedores", {
    method: "GET",
  });
}

export async function getVendedor(id: number): Promise<Vendedor> {
  return httpClient(`/vendedores/${id}`, {
    method: "GET",
  });
}

export async function createVendedor(nome: string): Promise<Vendedor> {
  return httpClient("/vendedores", {
    method: "POST",
    body: JSON.stringify({
      nome,
      ativo: true,
    }),
  });
}

export async function updateVendedor(
  id: number,
  vendedor: Partial<Vendedor>,
): Promise<Vendedor> {
  return httpClient(`/vendedores/${id}`, {
    method: "PUT",
    body: JSON.stringify(vendedor),
  });
}

export async function setVendedorAtivo(
  id: number,
  ativo: boolean,
): Promise<Vendedor> {
  return httpClient(`/vendedores/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ ativo }),
  });
}
