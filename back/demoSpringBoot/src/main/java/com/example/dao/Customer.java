package com.example.dao;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class Customer {
    @Id
    @GeneratedValue
    private long id;
    @Column(name = "name")
    private String name;
    @Column(name = "lastname")
    private String lastname;
    @Column(name ="age")
    private int age;

    protected Customer(){

    }

    public Customer(String name , String lastname, int age){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }

}