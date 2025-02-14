import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


import { AppComponent } from './app.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';





import { CreateClaimComponent } from './create-claim/create-claim.component';

import { UpdateClaimComponent } from './update-claim/update-claim.component';
import { AssignClaimComponent } from './assign-claim/assign-claim.component';
import { CreateInvestigatorComponent } from './create-investigator/create-investigator.component';
import { UpdateClaimUnderwriterrComponent} from './update-claim-underwriter/update-claim-underwriter.component';
import { UpdateInvestigationComponent } from './update-investigation/update-investigation/update-investigation.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashbaordComponent },
  { path: 'create-claim', component: CreateClaimComponent },  
  { path: 'update-claim/:id', component: UpdateClaimComponent },  
  { path: 'assign-claim/:id', component: AssignClaimComponent },  
  { path: 'create-investigator', component: CreateInvestigatorComponent },  
  { path: 'update-claim-investigator/:id', component: UpdateClaimUnderwriterrComponent },  
  {path: 'update-investigation/:id', component:UpdateInvestigationComponent},

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
