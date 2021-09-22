import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomerComponent } from './customer/customer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'HomeComponent', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard] },
  { path: 'user', component: UserComponent },
  {
    path: 'customer',
    children: [
    { path:'', component: CustomerComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'contactus', component: ContactusComponent },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
