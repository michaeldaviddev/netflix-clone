import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private httpClient: HttpClient) { }

  getSeries() {
    return this.httpClient.get(`${environment.API_BASE}/discover/tv?api_key=${environment.API_KEY}`);
  }
}
