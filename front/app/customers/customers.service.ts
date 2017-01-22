import { Injectable } from '@angular/core';
import { Headers, Http, Response,RequestOptions } from '@angular/http';

// Add the RxJS Observable operators.
import { Observable }     from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


import { Customer } from '../customers/customer'


@Injectable()
export class CustomersService{
    public values: any;
    private customersUrl = 'localhost:8080/demoSpringBoot/getData'; //URL to WEB API
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http : Http){

    } 

    getCustomers (): Observable<Customer[]> {
    return this.http.get(this.customersUrl)
                    .map(this.extractData)         
                    .catch(this.handleError);
  }
 

    private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
    }

    private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
}

 addHero (name: string): Observable<Customer> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('localhost:8080/addCustomer', { name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
}