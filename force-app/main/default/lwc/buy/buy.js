import { LightningElement, api } from 'lwc';

const columns = [
    {label: 'Name', fieldName: 'Name', type: 'text'},
    //{label: 'Amount', fieldName: 'Amount', type: 'number'} //dodao sam
    {label: 'Price', fieldName: 'Currency__c', type: 'currency'}
];

export default class Buy extends LightningElement {

    columns = columns;
    data = [];
    //amount = 1;

    @api
    setProducts(prods){
        this.data = [...prods];
        
        //console.log(data);
    }

    get total(){
        return this.data.reduce((acc,currProd,)=>{
            return currProd.Currency__c + acc;
        },0.0);
    }

    //dodao sam
    // handleRowAction(event) {
    //     if (event.detail.action.name === 'delete') {
    //         this.deleteSelectedRow(event.detail.row);
    //     }
    // }

}