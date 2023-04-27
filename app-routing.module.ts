import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SalesComponent } from './sales/sales.component';
import { PrintComponent } from './print/print.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'sales',component:SalesComponent},
  {path:'print',component:PrintComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
