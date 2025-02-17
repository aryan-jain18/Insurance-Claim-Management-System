package com.wecp.insurance_claims_processing_system.service;


import com.wecp.insurance_claims_processing_system.entity.Claim;
import com.wecp.insurance_claims_processing_system.entity.Policyholder;
import com.wecp.insurance_claims_processing_system.entity.Underwriter;
import com.wecp.insurance_claims_processing_system.repository.ClaimRepository;
import com.wecp.insurance_claims_processing_system.repository.PolicyholderRepository;
import com.wecp.insurance_claims_processing_system.repository.UnderwriterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ClaimService {

@Autowired
private UnderwriterRepository underwriterRepository;

@Autowired
private ClaimRepository claimRepository;

@Autowired
private PolicyholderRepository policyholderRepository;


//Create Claim Component
public Claim submitClaim(Long policyholderId, Claim claim){

    Policyholder ph = policyholderRepository.findById(policyholderId).get();
    claim.setPolicyholder(ph);
    return claimRepository.save(claim);
} 



//Dashboard Component for role: Policyholder
public List<Claim> getClaimsByPolicyholder(Long policyholderId){

    Policyholder ph = policyholderRepository.findById(policyholderId).get();
    List<Claim> claims = claimRepository.findByPolicyholder(ph);
    return claims;
   
}




public Claim updateClaim(Long id, Claim claimDetails){

    Claim c = claimRepository.findById(id).get();
    claimDetails.setId(c.getId());
    claimDetails.setPolicyholder(c.getPolicyholder());
    claimDetails.setInvestigation(c.getInvestigation());
    return claimRepository.save(claimDetails);

}


//Dashboard Component for role: Adjuster
public List<Claim> getAllClaims(){

    return claimRepository.findAll();

}


//Adjuster Assigning Claim 
public List<Underwriter> getAllUnderwriters(){

    return underwriterRepository.findAll();
}


//Adjuster Assigning Claim
public Claim assignClaimToUnderwriter(Long claimId, Long underwriterId) {

    Claim claim = claimRepository.findById(claimId).get();
    Underwriter underwriter = underwriterRepository.findById(underwriterId).get();

    if (claim != null && underwriter!=null) {
        claim.setUnderwriter(underwriter);
        return claimRepository.save(claim);
    } else {
        throw new IllegalArgumentException("Claim or Underwriter not found");
    }
}
 

//Dashboard Component for role: Underwriter 
public List<Claim> getAllClaimsForReview(Long underwriterId){

    Underwriter uw = underwriterRepository.findById(underwriterId).get();
    List<Claim> claims = claimRepository.findByUnderwriter(uw);
    return claims;

}

//Underwriter update claim
public Claim reviewClaim(Long id, String status){

    Claim c = claimRepository.findById(id).get();
    c.setStatus(status);
    return claimRepository.save(c);
}




 public Claim getClaimById(Long claimId){

    Claim claim = claimRepository.findById(claimId).get();
    return claim;

 }

}
