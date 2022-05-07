import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetServiceComponent } from './get-service/get-service.component';
import { AdminComponent } from './admin/admin.component';
import { AddEventComponent } from './admin/add-event/add-event.component';
import { AddTaskComponent } from './admin/add-task/add-task.component';
import { AddProposalComponent } from './admin/add-proposal/add-proposal.component';
import { UserComponent } from './user/user.component';
import { ViewEventComponent } from './user/view-event/view-event.component';
import { ViewTaskComponent } from './user/view-task/view-task.component';
import { ViewProposalComponent } from './user/view-proposal/view-proposal.component';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './user/profile/profile.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    GetServiceComponent,
    AdminComponent,
    AddEventComponent,
    AddTaskComponent,
    AddProposalComponent,
    UserComponent,
    ViewEventComponent,
    ViewTaskComponent,
    ViewProposalComponent,
    ProfileComponent,
    MyProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
