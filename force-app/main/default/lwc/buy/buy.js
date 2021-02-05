import { LightningElement, api } from 'lwc';

const columns = [
    {label: '   Name', fieldName: 'Name', type: 'text'},
    {label: '   Amount', fieldName: 'Amount', type: 'number'},   
    {label: '   Price', fieldName: 'Currency__c', type: 'currency'}
];

export default class Buy extends LightningElement {

    columns = columns;
    data = [];

    @api
    setProducts(prods){
        this.data = [...prods];
    }

    
    get total(){
        return this.data.reduce((acc,currProd,)=>{
            return currProd.Currency__c * currProd.Amount + acc;
        },0.0);
    }

}