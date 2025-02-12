 import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { ActivatedRoute, Router } from '@angular/router';
 import { HttpService } from '../../services/http.service';
 import { AuthService } from '../../services/auth.service';
  
  
 @Component({
   selector: 'app-create-claim',
   templateUrl: './create-claim.component.html',
   styleUrls: ['./create-claim.component.scss']
 })
 export class CreateClaimComponent implements OnInit {
   itemForm: FormGroup;
  
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
     // Any initialization logic if needed
   }
  
   onSubmit() {
  
     if (this.itemForm.valid) {
       const policyholderId = this.route.snapshot.params['id'] 
       console.log(policyholderId)// This should be dynamically set based on your application's needs
       this.httpService.createClaims(this.itemForm.value, policyholderId).subscribe({
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