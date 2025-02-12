 import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
 import { ActivatedRoute, Router } from '@angular/router';
=======
 import { Router } from '@angular/router';
>>>>>>> 998aacb40a49e653415d5af46cfd3a4ee93750b2
 import { HttpService } from '../../services/http.service';
 import { AuthService } from '../../services/auth.service';
  
  
 @Component({
   selector: 'app-create-claim',
   templateUrl: './create-claim.component.html',
   styleUrls: ['./create-claim.component.scss']
 })
 export class CreateClaimComponent implements OnInit {
<<<<<<< HEAD
   itemForm: FormGroup;
=======
   itemForm!: FormGroup;
>>>>>>> 998aacb40a49e653415d5af46cfd3a4ee93750b2
  
   constructor(
     private formBuilder: FormBuilder,
     private httpService: HttpService,
     private authService: AuthService,
<<<<<<< HEAD
     private router: Router,
     private route: ActivatedRoute
=======
     private router: Router
>>>>>>> 998aacb40a49e653415d5af46cfd3a4ee93750b2
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
<<<<<<< HEAD
  
     if (this.itemForm.valid) {
       const policyholderId = this.route.snapshot.params['id'] 
       console.log(policyholderId)// This should be dynamically set based on your application's needs
=======
     if (this.itemForm.valid) {
       // Assuming we have a way to get the policyholderId
       const policyholderId = 1; // This should be dynamically set based on your application's needs
>>>>>>> 998aacb40a49e653415d5af46cfd3a4ee93750b2
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