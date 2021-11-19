import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './setup/attendance/attendance.component';
import { EmployeeComponent } from './setup/employee/employee.component';
import { HomeComponent } from './setup/home/home.component';
import { LoginComponent } from './setup/login/login.component';
import { NavbarComponent } from './setup/navbar/navbar.component';
import { SalaryformComponent } from './setup/salaryform/salaryform.component';
import { SalaryissueComponent } from './setup/salaryissue/salaryissue.component';
import { SignupComponent } from './setup/signup/signup.component';
import { TextComponent } from './setup/text/text.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '', component: NavbarComponent, children:[
    { path: 'home', component:HomeComponent},
    { path: 'employee', component:EmployeeComponent},
    { path: 'salaryIssue', component:SalaryissueComponent},
    { path: 'attendance', component:AttendanceComponent},
  ]},
  { path: 'login', component:LoginComponent},
  { path: 'signUp', component:SignupComponent},
  { path: 'text', component:TextComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
