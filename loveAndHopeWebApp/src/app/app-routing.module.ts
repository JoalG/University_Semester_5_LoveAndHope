import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { TraysComponent } from './components/trays/trays.component';
import { InfoComponent } from "./components/info/info.component";
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'trays', component:TraysComponent},
  {path:'info', component:InfoComponent},
  {path:'sign-up', component:SignUpComponent},

  {path:'**',pathMatch:'full',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
