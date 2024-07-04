import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable
({
    providedIn: 'root'
})

export class CustomerService 
{
    private url = 'http://localhost:8080'

    constructor(private httpClient : HttpClient) {}
    
    //methods
    addCustomer(custData : any) : Observable<string> 
    {
        const httpOptions = 
        {
            headers: new HttpHeaders
            ({ 'Content-Type': 'application/json' })
        }
        return this.httpClient.post<string>(`${this.url}/addCustomer`, custData, httpOptions);
    }

    getCustomers() 
    {
        return this.httpClient.get<any>(`${this.url}/getCustomers`);
    }
}