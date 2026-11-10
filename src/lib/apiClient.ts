const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = {
  async request<T>(path: string, init?: RequestInit) {

    const response = await fetch(`${BASE_URL}${path}`, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...init?.headers
      },
    });

    if (!response.ok) {
      throw new Error(`API Failed with status ${response.status}`)
    }

    if (response.status === 204) {
      return undefined as T
    }

    return response.json() as Promise<T>;
  },

  get: <T>(path: string, params?: Record<string, string>) => {

    const queries = params
      ? '?' + new URLSearchParams(
        Object.entries(params).filter(([, v]) => v != null)
      ).toString()
      : '';

    return api.request<T>(`${path}${queries}`)
  }
}
