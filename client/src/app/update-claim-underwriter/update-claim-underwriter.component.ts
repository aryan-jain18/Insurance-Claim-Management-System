import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-update-claim-underwriter',
  templateUrl: './update-claim-underwriter.component.html',
  styleUrls: ['./update-claim-underwriter.component.scss']
})
export class UpdateClaimUnderwriterrComponent implements OnInit{

  itemForm: FormGroup
  claimId : number | undefined
  status : string = ''

  constructor(private formBuilder : FormBuilder, private httpService: HttpService, private router : Router, private route : ActivatedRoute){
    this.itemForm = this.formBuilder.group({
      status : ['', Validators.required]
    })
  }
  ngOnInit(): void {
    this.claimId = this.route.snapshot.params['id']
    this.httpService.getClaimById(this.claimId).subscribe((data)=> {
      this.itemForm.patchValue(data)
    })
  }



  onSubmit(){
    if(this.itemForm.valid){
        this.httpService.updateClaimsStatus(this.status, this.claimId).subscribe(() => {
              this.router.navigate(['/dashboard'])
        })
    }
  }
  
}
