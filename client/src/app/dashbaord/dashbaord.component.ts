import { Claim } from '../model/Claim';
import { IfStmt, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute, Router } from '@angular/router';
 import { AuthService } from '../../services/auth.service';
 import { HttpService } from '../../services/http.service';
import { Investigation } from '../model/Investigation';
 
 @Component({
   selector: 'app-dashbaord',
   templateUrl: './dashbaord.component.html',
   styleUrls: ['./dashbaord.component.scss']
 })
 export class DashbaordComponent  implements OnInit{

  claimList : Claim[] = []
  role: string | null = ''
  underWriterId : string | null = '' 
  claimByUnderwriter :  Claim[] = []
  investigations : Investigation[] = []
  policyholderId : string | null = ''
  claimByPolicyholder : Claim[] = []
   

  
  
 
 
 
  //  investigations: any[] = [];
 
 
   constructor(
     private httpService: HttpService,
     private authService: AuthService,
     private router: Router
   ) {

    this.role=this.authService.getRole;
    
   }
   ngOnInit(): void {

    this.underWriterId = this.authService.getUserId()
    this.policyholderId = this.authService.getUserId()


    if(this.role === 'ADJUSTER'){
     this.httpService.getAllClaims().subscribe((data) => {
      this.claimList = data
     })
    }


    if(this.role === 'UNDERWRITER'){
      this.httpService.getClaimsByUnderwriter(this.underWriterId).subscribe((data) => {
          this.claimByUnderwriter = data
      })

    }


    if(this.role === 'INVESTIGATOR'){
      this.httpService.getInvestigations().subscribe((data)=> {
          this.investigations = data
      })
    }

    if(this.role === 'POLICYHOLDER'){
      this.httpService.getClaimsByPolicyholder(this.policyholderId).subscribe((data) => {
        this.claimByPolicyholder = data
      })
    }
   }


   onAdjusterUpdateClaim(id: number){
    this.router.navigate([`/update-claim/${id}`])
   }

   onAdjusterAssignClaim(id:number){
    this.router.navigate([`/assign-claim/${id}`])
   }

   onUnderwriterUpdateClaim(id:number){
        this.router.navigate([`/update-claim-investigator/${id}`])
   }

   onInvestigatorUpdateInvestigation(id:number){
        this.router.navigate([`/update-investigation/${id}`])
   }
   
 
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
