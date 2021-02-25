import { serve } from "https://deno.land/std@0.87.0/http/server.ts";
import { Request } from './Request/request.ts';

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
    const request = new Request(req);
  req.respond({ body: "Hello World\n" });
  console.log("Method : ", request.getMethod());
  console.log("Host : ", request.getHost)
  console.log("User Agent : ", request.getUserAgent())
  console.log("Accept : ", request.getAccept())
  console.log("Accept Language : ", request.getAcceptLanguage())
  console.log("Accept Encoding : ", request.getAcceptEncoding())
  console.log("Connection : ", request.getConnection())
  console.log("Cookie : ", request.getCookie())
  console.log('upgrade-insecure-requests : ', request.getUpgradeInsecureRequest())
}
