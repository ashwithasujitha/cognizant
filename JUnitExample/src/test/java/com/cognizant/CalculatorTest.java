package com.cognizant;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {
    private Calculator calculator ;
    @Before
    public void setUp() {
        calculator = new Calculator();
    }
    @After
    public void tearDown() {
        calculator = null;
    }
    @Test
    public void testAddition(){
        int a=5;
        int b=5;
        int result =calculator.add(a, b);
        assertEquals(10, result);
    }
}
