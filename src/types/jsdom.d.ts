declare module "jsdom" {
  export class JSDOM {
    window: Window & typeof globalThis;
    document: Document;
    constructor(html?: string);
  }
}
