import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WordService {

 baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  palindrome(text: any) {
    return this.http.post(`${this.baseUrl}/palindrome`, text);
  }

  firstChar(text: any) {
    return this.http.post(`${this.baseUrl}/firstChar`, text);
  }

  listar() {
    return this.http.get<any[]>(`${this.baseUrl}/words`);
  }


}
