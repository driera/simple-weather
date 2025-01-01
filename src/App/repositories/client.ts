export class Client {
  async get(url: string): Promise<Response> {
    return await this.fetch(url, { method: "GET" });
  }

  async fetch(url: string, options: RequestInit): Promise<Response> {
    return await fetch(url, options);
  }
}
