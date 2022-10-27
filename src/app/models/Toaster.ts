import { IToaster } from "./interfaces/IToaster";

export class Toaster implements IToaster {
  constructor(header: string, body: string, delay?: number) {
    this.header = header;
    this.body = body;
    this.delay = delay;
  }

  get header(): string {
    return this.header;
  }

  set header(header: string) {
    this.header = header;
  }

  get body(): string {
    return this.body;
  }

  set body(body: string) {
    this.body = body;
  }

  get delay(): number | undefined {
    return this.delay;
  }

  set delay(delay: number | undefined) {
    this.delay = delay
  }
}