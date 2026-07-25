package com.cognizant;

public class Myservice {
    private ExternalApi api;

    public Myservice(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}
