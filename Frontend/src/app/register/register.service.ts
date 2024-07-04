import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    private url = 'http://localhost:8080'

    constructor(private httpClient: HttpClient) {}

    getEmployees() {
        return this.httpClient.get<any>(`${this.url}/getEmployees`);
    }

    insertEmployee(empData: any): Observable<string> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        return this.httpClient.post<string>(`${this.url}/insertEmployee`, empData, httpOptions);
    }
}