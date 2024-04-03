import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ParentComponent } from './Components/parent/parent.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent, EmployeeListComponent, EmployeeDetailsComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my angular appication';
  public dataFromParent = "data from parent";
  public messageFromChild: any = '';

  
}
