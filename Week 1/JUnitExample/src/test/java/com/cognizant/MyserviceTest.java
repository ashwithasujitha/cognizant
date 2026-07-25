package com.cognizant;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.Test;
import org.mockito.Mockito;

public class MyserviceTest {
      @Test 
    public void testExternalApi() { 
        ExternalApi mockApi = Mockito.mock(ExternalApi.class); 
        when(mockApi.getData()).thenReturn("Mock Data"); 
        Myservice service = new Myservice(mockApi); 
        String result = service.fetchData(); 
        assertEquals("Mock Data", result); 
    }
      public void testVerifyInteraction() { 
        ExternalApi mockApi = Mockito.mock(ExternalApi.class); 
        Myservice service = new Myservice(mockApi); 
        service.fetchData(); 
        verify(mockApi).getData(); 
    }
    
}