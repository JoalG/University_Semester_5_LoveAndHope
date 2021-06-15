import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TrayCardComponent } from './components/shared/tray-card/tray-card.component';
import { HomeComponent } from './components/home/home.component';
import { TraysComponent } from './components/trays/trays.component';
import { InfoComponent } from './components/info/info.component';
import { NewTrayComponent } from './components/new-tray/new-tray.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ReceiverFormComponent } from './components/receiver-form/receiver-form.component';
import { InfoFormComponent } from './components/info-form/info-form.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ShoppingHistoryComponent } from './components/shopping-history/shopping-history.component';
import { TrayCardsCarouselComponent } from './components/shared/tray-cards-carousel/tray-cards-carousel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrayCardComponent,
    HomeComponent,
    TraysComponent,
    InfoComponent,
    NewTrayComponent,
    ProductsFormComponent,
    ReceiverFormComponent,
    InfoFormComponent,
    ShoppingCartComponent,
    SignUpComponent,
    ShoppingHistoryComponent,
    TrayCardsCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    AuthGuard,
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
