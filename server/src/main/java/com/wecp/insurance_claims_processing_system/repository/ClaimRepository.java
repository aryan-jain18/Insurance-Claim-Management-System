package com.wecp.insurance_claims_processing_system.repository;

import com.wecp.insurance_claims_processing_system.entity.Claim;
import com.wecp.insurance_claims_processing_system.entity.Policyholder;
import com.wecp.insurance_claims_processing_system.entity.Underwriter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClaimRepository extends JpaRepository<Claim, Long>{

    List<Claim> findByPolicyholder(Policyholder policyholder);

     List<Claim> findByUnderwriter(Underwriter underwriter);

    @Query("SELECT c FROM Claim c WHERE c.policyholder.id = :policyholderId")
    List<Claim> getClaimsByPolicyholder(@Param("policyholderId") Long policyholderId);

}

