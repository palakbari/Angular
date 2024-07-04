import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable
({
    providedIn : 'root'
})

export class CartService
{
    private url = 'http://localhost:8080'

    constructor(private httpClient : HttpClient) {}

    //methods
    addToCart(cartData : any) : Observable<string>
    {
        const httpOptions = 
        {
            headers : new HttpHeaders
            ({ 'Content-Type' : 'application/json'})
        }
        return this.httpClient.post<string>(`${this.url}/addToCart`, cartData, httpOptions);
    }

    getCart() : Observable<any[]>
    {
        return this.httpClient.get<any>(`${this.url}/getCart`);
    }

    displayBill(username: string) : Observable<any>
    {
        return this.httpClient.get<any>(`${this.url}/displayBill/${ username }`);
    }

    payBill(username: string) : Observable<any>
    {
        return this.httpClient.post<any>(`${this.url}/payBill`, { username });
    }

    addBalance(username: string, amount: number) : Observable<any> 
    {
        return this.httpClient.post<any>(`${this.url}/addBalance`, { username, amount });
    }
    
    displayBalance(username: string): Observable<any> 
    {
        return this.httpClient.get<any>(`${this.url}/displayBalance/${username}`);
    }
}