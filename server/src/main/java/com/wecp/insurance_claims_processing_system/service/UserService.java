package com.wecp.insurance_claims_processing_system.service;
<<<<<<< HEAD
 
 import com.wecp.insurance_claims_processing_system.entity.*;
 import com.wecp.insurance_claims_processing_system.repository.*;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.security.core.GrantedAuthority;
 import org.springframework.security.core.authority.SimpleGrantedAuthority;
 import org.springframework.security.core.userdetails.UserDetails;
 import org.springframework.security.core.userdetails.UserDetailsService;
 import org.springframework.security.core.userdetails.UsernameNotFoundException;
 import org.springframework.security.crypto.password.PasswordEncoder;
 import org.springframework.stereotype.Service;
 
 import java.util.ArrayList;
 import java.util.Collection;
import java.util.Collections;
import java.util.List;
 import java.util.Optional;
 import java.util.stream.Collectors;
 
 
 // public class UserService {
 //     // implement user service here
 // }
 
 
 @Service
 public class UserService implements UserDetailsService {
     @Autowired
     private UserRepository userRepository;
 
     @Autowired
     private InvestigatorRepository investigatorRepository;
 
     @Autowired
     private PolicyholderRepository policyholderRepository;
 
     @Autowired
     private AdjusterRepository adjusterRepository;
 
     @Autowired
     private UnderwriterRepository underwriterRepository;
 
     @Autowired
     private PasswordEncoder passwordEncoder;
   
 
 
 
 
     public User registerUser(User user) throws Exception{
        User newUser;
 
        switch(user.getRole()){
         case "ADJUSTER" :
             newUser = new Adjuster();
             copyProperties(user, newUser);
             adjusterRepository.save((Adjuster) newUser);
             break;
       
         case "INVESTIGATOR" :
             newUser = new Investigator();
             copyProperties(user, newUser);
             investigatorRepository.save((Investigator) newUser);
             break;
 
             case "POLICYHOLDER":
                 newUser = new Policyholder();
                 copyProperties(user, newUser);
                 policyholderRepository.save((Policyholder) newUser);
                 break;
 
             case "UNDERWRITER" :
                 newUser =  new Underwriter();
                 copyProperties(user, newUser);
                 underwriterRepository.save((Underwriter) newUser);
                 break;
             default:
                 throw new IllegalArgumentException("Invalid User try again");
               
        }
        return userRepository.save(newUser);
 
     }
 
 
 
 
     public User getUserByUsername(String username) {
         return userRepository.findByUsername(username);
     }
//  @Override
//      public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//          User user = userRepository.findByUsername(username);
//          if(user == null){
//              throw new UsernameNotFoundException("User not found");
//          }
//          return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), new ArrayList<>());
//      }
     
 
 @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
 
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority(user.getRole()))
        );
    }
 
     
     private void copyProperties(User source, User target){
         target.setUsername(source.getUsername());
         target.setEmail((source.getEmail()));
         target.setPassword(passwordEncoder.encode(source.getPassword()));
         target.setRole(source.getRole());
     }
 
   
 }
 
=======


import com.wecp.insurance_claims_processing_system.entity.*;
import com.wecp.insurance_claims_processing_system.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


// public class UserService {
//     // implement user service here
// }


@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    // @Autowired
    // public UserLoginServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
    //     this.userRepository = userRepository;
    //     this.passwordEncoder = passwordEncoder;
    // }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long userId) {
        return userRepository.findById(userId);
    }

    public User createUser(User user) throws Exception{
        User oldUser = userRepository.findByUsername(user.getUsername());
        User emailExists = userRepository.findByEmail(user.getEmail());
        if(oldUser != null){
            throw new Exception("User name is Unavailable: " + user.getUsername());
        }
        if(emailExists != null){
            throw new Exception("User already exists with the given email: "+user.getEmail());
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User updateUser(User user) {
        return userRepository.save(user);
    }

    // public void deleteUser(Integer id) {
    //     userRepository.deleteById(id);
    // }

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public UserDetails loadUserByUsername(String username) {
        User user = userRepository.findByUsername(username);
        if(user == null){
            throw new UsernameNotFoundException("User not found");
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), new ArrayList<>());
    }
}
>>>>>>> 998aacb40a49e653415d5af46cfd3a4ee93750b2
