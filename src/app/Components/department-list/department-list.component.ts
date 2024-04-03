import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.scss'
})
export class DepartmentListComponent implements OnInit {
  public selectedDeptId: any;
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
       let id = param.get('id');
       this.selectedDeptId = id
    })
    
  }
  departments = [
    {id:1, name: 'JavaScript'},
    {id:2, name: 'React'},
    {id:3, name: 'Angular'},
    {id:4, name: 'HTMl'},
    {id:5, name: 'CSS'}
  ];

  onSelect(department: any) {
    this.router.navigate(['/department', department.id]);
  }
  isSelected(department: any) {
    return department.id == parseInt(this.selectedDeptId);
  }

}
