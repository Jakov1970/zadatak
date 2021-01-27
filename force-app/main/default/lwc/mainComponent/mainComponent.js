import { LightningElement, wire, api } from 'lwc';
import getProducts from '@salesforce/apex/listOfProducts.getProducts';

export default class MainComponent extends LightningElement {

    @wire(getProducts)
    products;

    selectedProductId;
    boughtProducts=[];

    handleTileClicked(event){
        this.selectedProductId = event.detail;
    }

    handleBuy(event){
        const productId = event.detail;
        this.products.data.forEach(prod => {
            if(prod.Id == productId){
                this.boughtProducts.push(prod);
            }
        });
        this.template.querySelector('c-buy').setProducts(this.boughtProducts);
    }

    handleCompare(event){
        const productId = event.detail;
        this.template.querySelector('c-compare').setProductId(productId);
    }
    
}