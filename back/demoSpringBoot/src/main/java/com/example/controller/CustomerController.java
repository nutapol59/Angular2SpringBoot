package com.example.controller;

import com.example.dao.Customer;
import com.example.repository.CustomerRepository;

import flexjson.JSONSerializer;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
public class CustomerController {

    private final CustomerRepository customerRepository;
    private static final Logger log = LoggerFactory.getLogger(CustomerController.class);

    public CustomerController(CustomerRepository customerRepository){
        this.customerRepository = customerRepository;
    }

    @RequestMapping(value="/getData" ,method = RequestMethod.GET)
    public ResponseEntity<String> getCustomers(){

        List<Customer> customers = new ArrayList<>();

        for (Customer customer : this.customerRepository.findAll()) {
//				log.info(customer.toString());
                customers.add(customer);
        }
        log.info(customers.toString());
        return new ResponseEntity<>(new JSONSerializer().exclude("*.class").deepSerialize(customers), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/addCustomer",method = RequestMethod.POST,headers = "Accept=application/json")
    public ResponseEntity<String> createCustomers(@RequestBody String json){
        log.info("===================================String RequestBody===========================");
        log.info("{ } \n\n\n\n\n",json);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
        JSONObject jsonObject = new JSONObject(json);

        String name = jsonObject.getString("name");
        String lastname = jsonObject.getString("lastname");
        int age = jsonObject.getInt("age");

        this.customerRepository.save(new Customer(name,lastname,age));

        return new ResponseEntity<>(new JSONSerializer().exclude("*.class").deepSerialize("save succes"), headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/updateCustomer",method = RequestMethod.GET,headers = "Accept=application/json")
    public ResponseEntity<String> updateCustomers(@RequestParam String name,
                                                  @RequestParam String lastname,
                                                  @RequestParam int age){
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
        log.info("\n\n\n\n\nage{} name{}\n\n\n\n\n",age,name);
        this.customerRepository.save(new Customer(name,lastname,age));

        return new ResponseEntity<>(new JSONSerializer().exclude("*.class").deepSerialize("save succes"), headers, HttpStatus.OK);
    }

}
