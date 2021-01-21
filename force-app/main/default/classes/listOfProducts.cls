public with sharing class listOfProducts {
    
    @AuraEnabled(Cacheable=true)
    public static List<Product2> getProducts(){
        
        List<Product2> products = [ SELECT Id, Name, Currency__c, Description FROM Product2 WHERE Currency__c != null ];
        return products;
        
    }
}
