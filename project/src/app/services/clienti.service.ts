import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  public url = 'https://localhost:44316/api/clienti';
  constructor(
    public http: HttpClient,
  ) { }

  public GetFemei(): Observable<any> {
    return this.http.get('${this.url}');
  }

  public GetBarbati(): Observable<any> {
    return this.http.get('${this.url}');
  }

  public getClientById(id: any): Observable<any> {
    return this.http.get('${this.url}/getClientById/${id}'); 
  }

  public deleteClient(client: any): Observable <any> {
    const options = {
      headers: new HttpHeaders(),
      body: client
    };
    return this.http.get('${this.url}',client);
  }

  public AddClient(client: any): Observable<any> {
    return this.http.post('${this.url}', client);
  }

  public EditClient(client: any): Observable<any> {
    return this.http.put('${this.url}', client);
  }
}
