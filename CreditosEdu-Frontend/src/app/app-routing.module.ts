import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditRequestListComponent } from './pages/CreditRequestListComponent/CreditRequestListComponent.component';
import { CreditRequestDetailRComponent } from './pages/CreditRequestDetailRComponent/CreditRequestDetailRComponent.component';
import { CreditRequestDetailComponent } from './pages/CreditRequestDetailComponent/CreditRequestDetailComponent.component';
import { LoginComponent } from './pages/LoginComponent/LoginComponent.component';
import { RegisterComponent } from './pages/RegisterComponent/RegisterComponent.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'credit-requests', component: CreditRequestListComponent },
  { path: 'credit-requests/:id', component: CreditRequestDetailComponent },
  { path: 'credit-requests-reg',component: CreditRequestDetailRComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
