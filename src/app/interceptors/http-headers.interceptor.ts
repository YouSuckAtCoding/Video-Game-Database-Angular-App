import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";

@Injectable()

export class HttpHeadersInterceptor implements HttpInterceptor
{
    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        req = req.clone({

            setParams: {
                key: '2c7604aa0c0e4da38b767ee2a8765a59',
              }
        });
    return next.handle(req);
    }
}