import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const USERS_URL = environment.authURL;


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    public router: Router,
    private http: HttpClient
  ) {

  }

  getListing(): Observable<any>{
    return this.http.get<any>(`${USERS_URL}list`);
  }

}
