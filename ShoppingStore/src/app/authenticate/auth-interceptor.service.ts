import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { authenticateService } from "./authenticate.service";
import { exhaustMap, take } from "rxjs/operators";

@Injectable()
export class authInterceptorService implements HttpInterceptor {

    constructor(private authService: authenticateService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(data => {

                if(!data)
                {
                    return next.handle(req)
                }
                const request = req.clone({
                    params: new HttpParams().set('auth', data.token)
                })
                return next.handle(request) 
            }))
    }
}