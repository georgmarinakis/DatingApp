import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ //Makes the service available to the DI System
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}
    
  // go to this link and post a model
    login(model: any) {
      return this.http.post(this.baseUrl + 'account/login', model);
    }
   }

