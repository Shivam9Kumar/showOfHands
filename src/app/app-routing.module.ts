import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './admin/add-event/add-event.component';
import { AddProposalComponent } from './admin/add-proposal/add-proposal.component';
import { AddTaskComponent } from './admin/add-task/add-task.component';
import { AdminComponent } from './admin/admin.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetServiceComponent } from './get-service/get-service.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './user/user.component';
import { ViewEventComponent } from './user/view-event/view-event.component';
import { ViewProposalComponent } from './user/view-proposal/view-proposal.component';
import { ViewTaskComponent } from './user/view-task/view-task.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"getService",
    component:GetServiceComponent
  },
  {
    path:"user",
    component:UserComponent,
  children:[{
    path:"viewEvent",
    component:ViewEventComponent
  },
  {
    path:"viewProposal",
    component:ViewProposalComponent
  },
  {
    path:"viewTask",
    component:ViewTaskComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  }

] }
,{
  path:"admin",
  component:AdminComponent,
children:[{
  path:"addEvent",
  component:AddEventComponent
},
{
  path:"addProposal",
  component:AddProposalComponent
},
{
  path:"addTask",
  component:AddTaskComponent
},
{
  path:"profile",
  component: MyProfileComponent
}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
