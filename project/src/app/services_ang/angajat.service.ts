import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngajatService {

  public url = 'https://localhost:44316//api/angajati';
  constructor(
    public http: HttpClient,
  ) { }

  public GetAll(): Observable<any> {
    return this.http.get('${this.url}');
  }

  public GetAllAngajati(job: any): Observable<any> {
    return this.http.get('${this.url}/{job}');
  }

  public GetJobBy(id: any): Observable<any> {
    return this.http.get('${this.url}/{id}');
  }

  public GetAngajatCuPrenumeDat(prenume: any): Observable<any> {
    return this.http.get('${this.url}/{prenume}');
  }

  public getAngajatById(id: any): Observable<any> {
    return this.http.get('${this.url}/getClientById/${id}'); 
  }

  public DeleteAngajat(angajat: any): Observable<any> {
    const options = {
      headers: new HttpHeaders(),
      body: angajat
    };
    return this.http.delete('${this.url}',angajat);
  }

  public AddAngajat(angajat: any): Observable<any> {
    return this.http.post('${this.url}', angajat);
  }

  public EditAngajat(angajat: any): Observable<any> {
    return this.http.put('${this.url}', angajat);
  }
}
