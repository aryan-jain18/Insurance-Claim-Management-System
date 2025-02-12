   
 import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { HttpService } from '../../services/http.service';
 import { AuthService } from '../../services/auth.service';
 import { Router } from '@angular/router';
 import { ReactiveFormsModule } from '@angular/forms';
  
 @Component({
   selector: 'app-assign-claim',
   templateUrl: './assign-claim.component.html',
   styleUrls: ['./assign-claim.component.scss']
 })
 export class AssignClaimComponent implements OnInit {
  
      itemForm:FormGroup;
<<<<<<< HEAD
       claimList: any[] = [];
        underwriters: any[] = [];
         constructor(private formBuilder: FormBuilder,    private httpService: HttpService,    private authService: AuthService,    private router: Router  ) {    
           this.itemForm = this.formBuilder.group({      
             claimId: [null, Validators.required],      
=======
       claims: any[] = [];
        underwriters: any[] = [];
         constructor(private formBuilder: FormBuilder,    private httpService: HttpService,    private authService: AuthService,    private router: Router  ) {    
           this.itemForm = this.formBuilder.group({      
             claimId: ['', Validators.required],      
>>>>>>> 998aacb40a49e653415d5af46cfd3a4ee93750b2
             underwriterId: ['', Validators.required]  
            });  
           }
           ngOnInit() {
               this.loadClaims();
               this.loadUnderwriters();
             }
          
             loadClaims() {
               this.httpService.getAllClaims().subscribe(claims => {
<<<<<<< HEAD
                 this.claimList = claims;
=======
                 this.claims = claims;
>>>>>>> 998aacb40a49e653415d5af46cfd3a4ee93750b2
               });
             }
          
             loadUnderwriters() {
               this.httpService.GetAllUnderwriter().subscribe((underwriters: any[]) => {
                 this.underwriters = underwriters;
               });
             }
            onSubmit() {
               if (this.itemForm.valid) {
                 this.httpService.getClaimsByUnderwriter(this.itemForm.value).subscribe({
                   next: () => {
                     // Handle successful assignment
                     this.router.navigate(['/claims']); // Adjust route as needed
                   },
                   error: (error: any) => {
                     console.error('Error assigning claim:', error);
                   }
                 });
               }
             }
         }