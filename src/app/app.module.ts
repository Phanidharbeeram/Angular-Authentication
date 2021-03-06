import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { EventsService } from './services/events.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { EventsComponent } from './Components/events/events.component';
import { SpecialComponent } from './Components/special/special.component';
import { RegistrationComponent } from './Components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventsComponent,
    SpecialComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    EventsService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
