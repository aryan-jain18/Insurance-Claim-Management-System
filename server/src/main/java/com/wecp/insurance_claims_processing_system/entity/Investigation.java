package com.wecp.insurance_claims_processing_system.entity;

import javax.persistence.*;

@Entity
public class Investigation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String report;
    private String status;

<<<<<<< HEAD
    @OneToOne
    @JoinColumn(name = "claim_id")
=======
    @OneToOne(mappedBy = "investigation")
>>>>>>> 998aacb40a49e653415d5af46cfd3a4ee93750b2
    private Claim claim;

    public Investigation() {
    }

    public Investigation(Long id, String report, String status, Claim claim) {
        this.id = id;
        this.report = report;
        this.status = status;
        this.claim = claim;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReport() {
        return report;
    }

    public void setReport(String report) {
        this.report = report;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Claim getClaim() {
        return claim;
    }

    public void setClaim(Claim claim) {
        this.claim = claim;
    }

    
    // implement investigation entity

    
}

