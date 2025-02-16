import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpService } from '../services/http.service';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { CreateClaimComponent } from './create-claim/create-claim.component';
import { UpdateClaimComponent } from './update-claim/update-claim.component';
import { AssignClaimComponent } from './assign-claim/assign-claim.component';
import { CreateInvestigationComponent } from './create-investigation/create-investigation.component';
import { UpdateClaimUnderwriterrComponent } from './update-claim-underwriter/update-claim-underwriter.component';
import { UpdateInvestigationComponent } from './update-investigation/update-investigation/update-investigation.component';
import { HomeComponent } from './home/home.component';

  
 @NgModule({
   declarations: [
     AppComponent,
     LoginComponent,
     RegistrationComponent,
     DashbaordComponent,
     CreateClaimComponent,
      UpdateClaimComponent,
       AssignClaimComponent,
       CreateInvestigationComponent,
       UpdateClaimUnderwriterrComponent,
       UpdateInvestigationComponent,
       HomeComponent
   ],
   imports: [
     BrowserModule,
     AppRoutingModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
   ],
   providers: [HttpService, HttpClientModule],
   bootstrap: [AppComponent],
 })
 export class AppModule {}