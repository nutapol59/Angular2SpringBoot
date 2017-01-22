package com.example.service;


import com.example.repository.CustomerRepository;
import com.example.dao.Customer;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component //@Component annotation so that it is automatically picked up by @SpringBootApplication
public class DatabaseLoader implements CommandLineRunner{
    private final CustomerRepository customerRepository;


    public DatabaseLoader(CustomerRepository customerRepository){
        this.customerRepository = customerRepository;
    }

    @Override
    public void run(String... strings) throws Exception{
        //save a couple of Customers
        // save a couple of customers
        this.customerRepository.save(new Customer("Nutapol", "Khemayothin",22));
        this.customerRepository.save(new Customer("Wadjakorn", "Tonsri",24));
        this.customerRepository.save(new Customer("Pongsatorn", "Saeung",23));
        this.customerRepository.save(new Customer("Apisit", "Namracha",21));

    }

}
