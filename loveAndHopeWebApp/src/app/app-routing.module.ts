import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { TraysComponent } from './components/trays/trays.component';
import { InfoComponent } from "./components/info/info.component";
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NewTrayComponent } from './components/new-tray/new-tray.component';
import { ShoppingHistoryComponent } from './components/shopping-history/shopping-history.component';

const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'trays', component:TraysComponent},
  {path:'info', component:InfoComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'shopping-cart', component:ShoppingCartComponent},

  {path:'new-tray', component:NewTrayComponent},
  {path:'user', component:ShoppingHistoryComponent},

  {path:'**',pathMatch:'full',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
