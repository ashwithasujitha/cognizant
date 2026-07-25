package com.cognizant.spring_learn.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.spring_learn.model.Country;
import com.cognizant.spring_learn.service.CountryService;

@RestController
public class CountryController {
   
    
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);
   @Autowired
    private CountryService countryService;
    
    @GetMapping("/country")
    public Country getCountryIndia() {
        LOGGER.info("START");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = context.getBean("in", Country.class);
        LOGGER.debug("Country : {}",country);

        LOGGER.info("END");
        return country;
    }
    @GetMapping("/countries")
    public List<Country>getAllCountries()
    {
        LOGGER.info("START");
        List<Country> countries = countryService.getAllCountries();
       LOGGER.info("End");
        return countries;
    }
}
