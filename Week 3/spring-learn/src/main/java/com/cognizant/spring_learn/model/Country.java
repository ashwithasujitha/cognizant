package com.cognizant.spring_learn.model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Country {
    public static  final Logger log = LoggerFactory.getLogger(Country.class);
    private  String Code;
    private String name;
    public Country() {
    log.debug("Inside Country Constructor.");
}

public String getCode() {
    log.debug("Inside getCode()");
    return Code;
}

public void setCode(String code) {
    log.debug("Inside setCode()");
    this.Code = code;
}

public String getName() {
    log.debug("Inside getName()");
    return name;
}

public void setName(String name) {
    log.debug("Inside setName()");
    this.name = name;
}
@Override
public String toString() {
    log.debug("Inside toString()");
    return "Country [Code=" + Code + ", name=" + name + "]";
}
}
