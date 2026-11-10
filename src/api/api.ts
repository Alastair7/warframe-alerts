import type { Alert } from "../domain/alert";
import { api } from "../lib/apiClient";

export async function checkhealth(): Promise<number> {
  type HeartbeatOutput = { message: string, code: number }

  const response = await api.get<HeartbeatOutput>('/heartbeat');

  return response.code
}

export async function fetchAlerts(): Promise<Alert[]> {
  return await api.get<Alert[]>('/pc/alerts')
}
