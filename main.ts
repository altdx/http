import { serve } from "https://deno.land/std@0.87.0/http/server.ts";
import { Request } from './Request/request.ts';

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
    const request = new Request(req);
  req.respond({ body: "Hello World\n" });
  console.log("Method : ", request.getMethod());
  console.log("Headers Host : ", request.getHost())
  console.log("Headers User Agent : ", request.getUserAgent())
  console.log("Headers Accept : ", request.getAccept())
  console.log("Headers Accept Language : ", request.getAcceptLanguage())
  console.log("Headers Accept Encoding : ", request.getAcceptEncoding())
  console.log("Headers Connection : ", request.getConnection())
  console.log("Headers Cookie : ", request.getCookie())
  console.log('Headers upgrade-insecure-requests : ', request.getUpgradeInsecureRequest())
}
