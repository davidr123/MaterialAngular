import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



//componentes
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';
import { RegisterComponent } from './components/register/register.component';
import { GraphQLModule } from './graphql.module';
import { HeaderModule } from './shared/components/header/header.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    GraphQLModule,
    HttpClientModule,
    HeaderModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
