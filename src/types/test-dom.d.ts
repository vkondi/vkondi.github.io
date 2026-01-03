declare global {
  // These globals are provided by the test JSDOM environment
  var window: Window & typeof globalThis;
  var document: Document;
  var navigator: Navigator;
  var HTMLElement: typeof HTMLElement;
  var Node: typeof Node;
}

export {};
