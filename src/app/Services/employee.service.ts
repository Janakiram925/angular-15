import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../employee';
import { Observable, Subject } from 'rxjs';


// [
//   { id: 1, name: 'Ram', age: 28 },
//   { id: 2, name: 'Shiva', age: 29 },
//   { id: 3, name: 'Krishna', age: 30 },
//   { id: 4, name: 'Steve', age: 31 }
// ]

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public url: string = "/assets/data/employees.json"
  public userData: any
  public subject = new Subject();
  

  constructor(private http: HttpClient) { }

  getemployees(): Observable<IEmployee[]> {
    //  return this.http.get('https://jsonplaceholder.typicode.com/users')
    this.http.get<IEmployee[]>(this.url).subscribe((data) => {
      console.log(data);
    })
    return this.http.get<IEmployee[]>(this.url)
  }
  setValue() {
    console.log(this.subject)
    this.subject.next(`hello`);
  }
  getValue(): Observable<any> {
    return this.subject.asObservable();
  }
}
