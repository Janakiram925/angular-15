import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.scss'
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId: any;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    //snapshot will not update the id in component we will go with paramMap
    // let id: any = this.route.snapshot.paramMap.get('id');  
    // this.departmentId = id;
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id');
      this.departmentId = id;
      
    })
  }
  goPrevious() {
    let prevId = parseInt(this.departmentId) - 1;
    this.router.navigate(['/department', prevId])

  }
  goNext() {
    let nextId = parseInt(this.departmentId) + 1;
    this.router.navigate(['/department', nextId])
  }
  //optional Route Params
  navigateToDepartment() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/department', {id: selectedId}])
  }
  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route})

  }
  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route})
  }

}
