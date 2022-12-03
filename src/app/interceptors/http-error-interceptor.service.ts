import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptorService extends HttpErrorResponse{

  constructor(private toastrService: ToastrService) { super(toastrService); }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((httpErrorResponse: HttpErrorResponse) => {
          let errorMessage = '';
          let errorType = '';

          if (httpErrorResponse.error instanceof ErrorEvent) {
            errorType = "Client side error"
            errorMessage = httpErrorResponse.error.error;
          } else {
            errorType = "Server side error"

            if (httpErrorResponse.status === 0) {
              errorMessage = "No hay conexión con el servidor";
            } else {
              errorMessage = `${httpErrorResponse.status}: ${httpErrorResponse.error.error}`
            }

            this.toastrService.error(errorMessage, errorType, { closeButton: true });
          }
          return throwError(() => new Error(errorMessage));
        })
      )
  }
}
