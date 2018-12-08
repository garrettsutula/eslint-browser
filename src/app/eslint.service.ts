import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EslintService {

  constructor(private http: HttpClient) { }

  getRules() {
    return this.http.get('./assets/rules.json');
  }
  
}
