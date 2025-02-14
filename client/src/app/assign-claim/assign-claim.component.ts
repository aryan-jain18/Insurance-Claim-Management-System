  import { Underwriter } from '../model/Underwriter';
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
       claimList: any[] = [];
        underwriters: Underwriter[] = []
         constructor(private formBuilder: FormBuilder,    private httpService: HttpService,    private authService: AuthService,    private router: Router  ) {    
           this.itemForm = this.formBuilder.group({      
             claimId: [null, Validators.required],      
             underwriterId: [null, Validators.required]  
            });  
           }
           ngOnInit() {
               this.loadClaims();
               this.loadUnderwriters();
             }
          
             loadClaims() {
               this.httpService.getAllClaims().subscribe(claims => {
                 this.claimList = claims;
               });
             }
          
             loadUnderwriters() {
               this.httpService.getAllUnderwriter().subscribe((underwriters: any[]) => {
                 this.underwriters = underwriters;
               });
             }
            onSubmit() {
               if (this.itemForm.valid) {
                 this.httpService.assignClaim(this.itemForm.value).subscribe({
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