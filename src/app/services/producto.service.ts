import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = "http://localhost:8091/product/";
  private customersList: Producto[] = new Array();

  constructor(private http: HttpClient) { }

                 public getDataFromServer(): Observable<any> {
                  return new Observable((observer) => {
                 
                 const eventSource = new EventSource(this.url+"stream");
                eventSource.addEventListener('producto-result', (message: any) => {
                 observer.next(message.data);
                 });
                 return () => eventSource.close();
              });
            }


  getProductos(): Observable<any>{
    return this.http.get(this.url+"all");
  }

  eliminarProducto(id: string): Observable<any>{
    return this.http.delete(this.url+id);
  }

  crearProducto(producto: Producto): Observable<any>{
    return this.http.post(this.url, producto);
  }

/*  crearProducto2(producto: Producto): Observable<any>{
    this.customersList = new Array();
    return Observable.create((observer:any) => {
      const eventSource = new EventSource(`${this.url}`);
      eventSource.onmessage = (event) => {
        console.log('eventSource.onmessage: ', event);
        const json = JSON.parse(event.data);
        this.customersList.push(new Producto(json['nombre'], json['ubicacion'], json['precio'], json['categoria']));
        observer.next(this.customersList);

      };
      eventSource.onerror = (error) => observer.error('eventSource.onerror: ' + error);
      return () => eventSource.close();
    });
  }  

  getList(): Observable<any> {
    this.customersList = new Array();
    return Observable.create((observer:any) => {
      const eventSource = new EventSource(`${this.url}`);
      eventSource.onmessage = (event) => {
        console.log('eventSource.onmessage: ', event);
        const json = JSON.parse(event.data);
        this.customersList.push(new Producto(json['nombre'], json['ubicacion'], json['precio'], json['categoria']));
        observer.next(this.customersList);

      };
      eventSource.onerror = (error) => observer.error('eventSource.onerror: ' + error);
      return () => eventSource.close();
    });
  }*/
}
