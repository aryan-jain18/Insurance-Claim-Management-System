
 



import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute, Router } from '@angular/router';
 import { AuthService } from '../../services/auth.service';
 import { HttpService } from '../../services/http.service';
 
 @Component({
   selector: 'app-dashbaord',
   templateUrl: './dashbaord.component.html',
   styleUrls: ['./dashbaord.component.scss']
 })
 export class DashbaordComponent {

  

  
  
 
 
  //  claims: any[] = [];
  //  investigations: any[] = [];
  //  underwriters: any[] = [];
  //  role: string | null = ''
  //  constructor(
  //    private httpService: HttpService,
  //    private authService: AuthService,
  //    private router: Router
  //  ) {
   
    
  //  }
 
  //  ngOnInit(): void {
  //   this.role=this.authService.getRole
  //    this.loadDashboardData();
     
  //  }
 
  //  loadDashboardData(): void {
  //    // Load claims
  //    this.httpService.getAllClaims().subscribe(
  //      (data: any) => {
  //        this.claims = data;
  //      },
  //      (      error: any) => {
  //        console.error('Error loading claims:', error);
  //      }
  //    );
 
  //    // Load investigations
  //    this.httpService.getInvestigations().subscribe(
  //      (data: any) => {
  //        this.investigations = data;
  //      },
  //      (      error: any) => {
  //        console.error('Error loading investigations:', error);
  //      }
  //    );
 
  //    // Load underwriters
  //    this.httpService.getAllUnderwriter().subscribe(
  //      (data: any) => {
  //        this.underwriters = data;
  //      },
  //      (      error: any) => {
  //        console.error('Error loading underwriters:', error);
  //      }
  //    );
  //  }
 
  //  navigateToCreateClaim(): void {
  //   // this.roleName="POLICYHOLDER"
  //    this.router.navigate(['/create-claim']);
  //  }
 
 
  //  navigateToAssignClaim(): void {
  //   // if(this.roleName='ADJUSTER')
  //    this.router.navigate(['/assign-claim']);
  //  }
 
  //  navigateToUpdateClaim(): void {
  //   // this.roleName='ADJUSTER'
  //    this.router.navigate(['/update-claim']);
  //  }
 
  //  navigateToCreateInvestigator(): void {
  //   // this.roleName="INVESTIGATOR"
  //    this.router.navigate(['/create-investigator']);
  //  }
  //  redirectBasedOnRole(): void {
  //      if (this.role === 'ADJUSTER') {
  //       this.navigateToAssignClaim();
  //       this.navigateToUpdateClaim();
         
  //      } else if (this.role === 'POLICYHOLDER') {
  //       this.navigateToCreateClaim();
  //      } else if (this.role === 'INVESTIGATOR') {
  //        this.navigateToCreateInvestigator
  //      }
  //    }
    }
