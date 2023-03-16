// This file overwrites the stock RV config.js

self.__rv$config = {
  prefix: "/rv/service/",
  bare: "/bare/",
  encodeUrl: Revela.codec.xor.encode,
  decodeUrl: Revela.codec.xor.decode,
  handler: "/rv/rv.handler.js",
  client: "/rv/rv.client.js",
  bundle: "/rv/rv.bundle.js",
  config: "/rv/rv.config.js",
  sw: "/rv/rv.sw.js",
};
