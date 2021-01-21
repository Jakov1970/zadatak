import { LightningElement, wire } from 'lwc';
import getProducts from '@salesforce/apex/listOfProducts.getProducts';

export default class MainComponent extends LightningElement {

    @wire(getProducts)
    products;
    
}