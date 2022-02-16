import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AuthGuard } from './auth.guard';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';


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
  },
  {
    path:"addemployee",component:AddemployeeComponent, canActivate:[AuthGuard]
  },
  {
      path:"**",component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
