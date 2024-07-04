import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, retry, throwError } from "rxjs";
import { Customer } from "./customer.model";

@Injectable
(
    {
        providedIn : 'root',
    }
)

export class CustomerRestApiService
{
    apiURl1 = 'http://localhost:3000'; //access database

    constructor(private http : HttpClient){}

    //CRUD Methods for RESTful API
    httpOptions = 
    {
        headers : new HttpHeaders
        (
            {
                'Content-Type' : 'application/json',
            }
        ),
    };

    //get()
    getCustomers() : Observable<Customer[]>
    {
        return this.http
        .get<Customer[]>(this.apiURl1 + '/customers')
        .pipe(retry(1), catchError(this.handelError));
    }

    //get by id
    getCustomer(id : any) : Observable<Customer>
    {
        return this.http
        .get<Customer>(this.apiURl1 + '/customers' + id)
        .pipe(retry(1), catchError(this.handelError))
    }

    //post
    createCustomers(customer : any) : Observable<Customer>
    {
        console.log(customer)
        return this.http
        .post<Customer>(this.apiURl1 + '/customers', JSON.stringify(customer),this.httpOptions)
        .pipe(retry(1), catchError(this.handelError));
    }  

    //delete
    deleteCustomer(id : any)
    {
        return this.http
        .delete<Customer>(this.apiURl1+'/customers/'+id,this.httpOptions)
        .pipe(retry(1),catchError(this.handelError));
    }

    //put
    updateCustomer(id : any, customer : any) : Observable<Customer>
    {
        return this.http
        .put<Customer>(this.apiURl1+'/customers/'+id, JSON.stringify(customer),this.httpOptions)
        .pipe(retry(1),catchError(this.handelError));
    }

    //handel error
    handelError(error : any)
    {
        let errormessage = '';
        if(error.error instanceof ErrorEvent)
        {
            errormessage = error.error.message;
        }
        else
        {
            errormessage = 'Error Code : ${error.status} \n Message : ${error.message}';
        }
        window.alert(errormessage);
        return throwError(()=>{return errormessage});
    }
}