class WarframeStatusAPI {
  private readonly baseURL: URL = new URL("https://api.warframestat.us");

  private async get<T>(path: string): Promise<T> {
    const endpoint = `${this.baseURL}${path}`

    const response = await fetch(endpoint)

    if (!response.ok) {
      throw new Error("Something went wrong with the API")
    }

    return response.json() as Promise<T>

  }

  checkhealth() {
    return this.get("/heartbeat")
  }
}
