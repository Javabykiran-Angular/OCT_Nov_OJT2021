import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:"",redirectTo:'/login',pathMatch:"full"
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"home",component:HomeComponent,canActivate:[AuthGuard]
  },
  {
    path:"EmpDetails/:id",component:EmployeeDetailsComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
