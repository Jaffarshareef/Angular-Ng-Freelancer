import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FreeLancer } from '../Freelancer';

@Injectable()
export class ProviderService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<FreeLancer[]> {
   return this.http.get<FreeLancer[]>('http://localhost:3000/webdevelopers');

  }
}
