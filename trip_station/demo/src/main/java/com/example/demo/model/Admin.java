package com.example.demo.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long Id;
    String Admin_Name;
    String First_Name;
    String Last_Name;
    String Email;
    String Password;

    public Admin(){

    }

    public Admin(String admin_Name ,String first_Name, String last_Name, String email, String password) {
        Admin_Name=admin_Name;
        First_Name = first_Name;
        Last_Name = last_Name;
        Email = email;
        Password = password;



    }

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }

    public String getFirst_Name() {
        return First_Name;
    }

    public void setFirst_Name(String first_Name) {
        First_Name = first_Name;
    }

    public String getLast_Name() {
        return Last_Name;
    }

    public void setLast_Name(String last_Name) {
        Last_Name = last_Name;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getAdmin_Name() {
        return Admin_Name;
    }

    public void setAdmin_Name(String admin_Name) {
        Admin_Name = admin_Name;

    }
}
