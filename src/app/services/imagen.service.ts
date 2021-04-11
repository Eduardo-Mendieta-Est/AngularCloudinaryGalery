import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imagen } from '../models/imagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  imagenUrl = 'http://localhost:9898/app/';

  constructor(private httpClient: HttpClient) { }


  public list(): Observable<Imagen[]> {
    return this.httpClient.get<Imagen[]>(this.imagenUrl + 'list');
  }


  public upload(imagen: File): Observable<any> {
    const formData = new FormData();
    formData.append('multipartFile', imagen);
    return this.httpClient.post<any>(this.imagenUrl + 'upload', formData);
  }


  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.imagenUrl + `delete/${id}`);
  }
}
