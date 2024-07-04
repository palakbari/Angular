import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable
({
    providedIn : 'root'
})

export class ProductService
{
    getFromCart() {
      throw new Error('Method not implemented.');
    }
    private url = 'http://localhost:8080'

    constructor(private httpClient : HttpClient){}

    //methods
    addProduct(proData : any) : Observable<string>
    {
        const httpOptions = 
        {
            headers : new HttpHeaders
            ({ 'Content-Type' : 'application/json' })
        }
        return this.httpClient.post<string>(`${this.url}/addProduct`, proData, httpOptions);
    }

    getProducts()
    {
        return this.httpClient.get<any>(`${this.url}/getProducts`);
    }

    // updateProduct(id: any, proData: any)                 
    // {
    //     return this.httpClient.put<any>(this.url + '/updateEmployee/' + id, httpOptions);
    // }

    // removeProduct(id: any) 
    // {
    //     return this.httpClient.delete<any>(this.url + '/deleteEmployee/' + id, httpOptions);
    // }
}
