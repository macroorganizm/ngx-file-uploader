import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

Injectable()
export class UploaderService {
  constructor(private http: HttpClient) {
    console.log('IN C');
  }

  upload(file: any): Observable<any> {
      const request = new HttpRequest("PUT", "http://localhost:3000/api", file, {
        reportProgress: true
        // headers: new HttpHeaders({fileName: file.name})
      });

    return this.http.request(request);
  }
}
