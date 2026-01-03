// Provide safe runtime helpers that work in browser, jsdom, and Node environments
export const atobSafe = (s: string) => {
  if (typeof window !== "undefined" && typeof window.atob === "function") {
    return window.atob(s);
  }
  if (typeof globalThis !== "undefined") {
    const globalBuffer = (globalThis as unknown as { Buffer?: typeof Buffer })
      .Buffer;
    if (globalBuffer) {
      return globalBuffer.from(s, "base64").toString("binary");
    }
  }
  throw new Error("atob is not available in this environment");
};

export const btoaSafe = (s: string) => {
  if (typeof window !== "undefined" && typeof window.btoa === "function") {
    return window.btoa(s);
  }
  if (typeof globalThis !== "undefined") {
    const globalBuffer = (globalThis as unknown as { Buffer?: typeof Buffer })
      .Buffer;
    if (globalBuffer) {
      return globalBuffer.from(s, "binary").toString("base64");
    }
  }
  throw new Error("btoa is not available in this environment");
};

export const pemToArrayBuffer = (pem: string) => {
  // Remove header/footer and line breaks
  const b64 = pem
    .replace(/-----BEGIN PUBLIC KEY-----/, "")
    .replace(/-----END PUBLIC KEY-----/, "")
    .replace(/\s+/g, "");

  const binary = atobSafe(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
};

export const arrayBufferToBase64 = (buffer: ArrayBuffer | ArrayBufferView) => {
  let binary = "";
  const bytes = new Uint8Array(buffer as ArrayBuffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoaSafe(binary);
};
