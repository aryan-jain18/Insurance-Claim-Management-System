 import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { ActivatedRoute, Router } from '@angular/router';
 import { HttpService } from '../../services/http.service';
 import { AuthService } from '../../services/auth.service';
 import { DashbaordComponent } from '../dashbaord/dashbaord.component';
  
  
 @Component({
   selector: 'app-create-claim',
   templateUrl: './create-claim.component.html',
   styleUrls: ['./create-claim.component.scss']
 })
 export class CreateClaimComponent implements OnInit {
   itemForm: FormGroup;
   policyholderId: string | null ='';
  
   constructor(
     private formBuilder: FormBuilder,
     private httpService: HttpService,
     private authService: AuthService,
     private router: Router,
     private route: ActivatedRoute
   ) {
     this.itemForm = this.formBuilder.group({
       description: ['', Validators.required],
       date: ['', Validators.required],
       status: ['', Validators.required]
     });
   }
  
   ngOnInit() {
    this.policyholderId = this.authService.getUserId();
     
   }
  
   onSubmit() {
     if (this.itemForm.valid) {
       // This should be dynamically set based on your application's needs
       this.httpService.createClaims(this.itemForm.value, this.policyholderId).subscribe({
         next: () => {
           this.router.navigate(['/claims']);
         },
         error: (error) => {
           console.error('Error creating claim:', error);
         }
       });
     }
   }
 }