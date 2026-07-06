package com.cognizant.spring_learn;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cognizant.spring_learn.model.Country;

import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);
	public static void main(String[] args) throws Exception {
		SpringApplication.run(SpringLearnApplication.class, args);
		displayDate();
		displayCountry();
	}
    public static void displayDate() throws Exception {
		 LOGGER.info("Start");
		   ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
		   SimpleDateFormat dateFormat = (SimpleDateFormat) context.getBean("dateFormat");
		   Date date = dateFormat.parse("31/12/2018");
		   
			   
		LOGGER.debug("Date {}",date);
		LOGGER.info("End");
	}
	public static void displayCountry() {
        LOGGER.info("Start");
		ApplicationContext context =  new ClassPathXmlApplicationContext("country.xml");
		Country country = context.getBean("in",Country.class);
		 LOGGER.debug("Country : {}", country);

    LOGGER.info("END");

	}
		
}
