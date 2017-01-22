package com.example.repository;

import com.example.dao.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by nbkf on 19/1/2560.
 */


    public interface CustomerRepository extends CrudRepository<Customer, Long> {

        List<Customer> findByLastnameAllIgnoreCaseContaining(@Param("lastname") String lastname);


    }

