import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, viewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ProductWidgetComponent } from './product-widget/product-widget.component';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, ChildComponent, ProductWidgetComponent],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent implements OnInit {

  // @ViewChild("viewChild") viewChildExample: ElementRef | undefined;
  @ViewChildren("viewChild") viewChildrenExample: QueryList<any> | undefined;
  @ViewChild('childView') viewChildComponent: ChildComponent | undefined;
  public valueFromSubject: any

  products = [
    {id: 1, name: 'AC', price: 100},
    {id: 2, name: 'Laptop', price: 200},
    {id: 3, name: 'Mobiles', price: 300},
    {id: 4, name: 'Electronics', price: 400},
  ];

  topProducts = [
    {id: 1, name: 'Mobiles', price: 100},
    {id: 2, name: 'camera', price: 200},
    {id: 3, name: 'refrigerator', price: 300},
    {id: 4, name: 'Cooler', price: 400},
  ]

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    // this._employeeService.getValue().subscribe(data => this.valueFromSubject = data)
    // console.log(this.valueFromSubject)
    
  }
  ngAfterViewInit() {
    // console.log(this.viewChildExample);
    // this.viewChildExample ?  this.viewChildExample.nativeElement.style.color = 'red': '';
    this.viewChildrenExample ? this.viewChildrenExample.last.nativeElement.style.color = 'red' : '';
    this._employeeService.getValue().subscribe(data => this.valueFromSubject = data)
    console.log(this.valueFromSubject)
  }
  onFormSubmit() { 
    let obj = this.profileForm.value
    console.log(obj)
  }
  inc() {
    this.viewChildComponent?.increment()
  }
  dec() {
    this.viewChildComponent?.decrement()

  }

}
