import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { ParentComponent } from './Components/parent/parent.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { DepartmentListComponent } from './Components/department-list/department-list.component';
import { DepartmentDetailsComponent } from './Components/department-details/department-details.component';
import { DepartmentOverviewComponent } from './Components/department-overview/department-overview.component';
import { DepartmentContactComponent } from './Components/department-contact/department-contact.component';
import { ReactiveFormsComponent } from './Components/reactive-forms/reactive-forms.component';

export const routes: Routes = [
    { path: '', redirectTo: 'employee', pathMatch: 'full' },
    { path: 'employee', component: EmployeeListComponent },
    { path: 'department', component: DepartmentListComponent },
    {
        path: 'department/:id', component: DepartmentDetailsComponent,
        children: [
            { path: 'overview', component: DepartmentOverviewComponent },
            { path: 'contact', component: DepartmentContactComponent }
        ]
    },
    { path: 'form', component: ReactiveFormsComponent },
    { path: '**', component: PageNotFoundComponent }
];
