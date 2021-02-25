import { IRequest, HTTP_METHOD_TYPES, HTTP_HEADERS_TYPES } from "./types.ts";
import { ServerRequest } from "https://deno.land/std@0.87.0/http/server.ts";

export class Request implements IRequest {
  private request: ServerRequest;

	constructor(req: ServerRequest) {
		this.request = req;
	}

  public getMethod(): HTTP_METHOD_TYPES {
    return this.request.method as HTTP_METHOD_TYPES;
  }

  public getHost(): HTTP_HEADERS_TYPES {

    return this.request.headers.get('host')
  } 

  public getUserAgent(): HTTP_HEADERS_TYPES {
    return this.request.headers.get('user-agent')
  }

  public getAccept(): HTTP_HEADERS_TYPES {
    return this.request.headers.get('accept')
  }

  public getAcceptLanguage(): HTTP_HEADERS_TYPES {
    return this.request.headers.get('accept-language')
  }

  public getAcceptEncoding(): HTTP_HEADERS_TYPES {
    return this.request.headers.get('accept-encoding')
  }

  public getConnection(): HTTP_HEADERS_TYPES {
    return this.request.headers.get('connection')
  }

  public getCookie(): HTTP_HEADERS_TYPES {
    return this.request.headers.get('cookie')
  }

  public getUpgradeInsecureRequest(): HTTP_HEADERS_TYPES {
    return this.request.headers.get('upgrade-insecure-requests')
  }
}