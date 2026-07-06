package com.cognizant.spring_learn.service;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.spring_learn.model.Country;

@Service
public class CountryService {
    @SuppressWarnings("unused")
    public List<Country>getAllCountries()
    {
          ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
          return (List<Country>)context.getBean("countrylist",List.class);
                 
    }
}
