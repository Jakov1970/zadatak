import { LightningElement, wire, api } from 'lwc';
import getProducts from '@salesforce/apex/listOfProducts.getProducts';

export default class MainComponent extends LightningElement {

    @wire(getProducts)
    products;

    selectedProductId;
    boughtProducts=[];
    //something;
    amount = 1;

    handleTileClicked(event){
        this.selectedProductId = event.detail;
    }

    //ovde treba da proverimo da li postoji taj produkt i ako postoji da povecamo amount, onda kad prosledimo u set product ovaj boughtProducts treba da radi
    //dodali smo polja na tabelu
    //

    handleBuy(event){
        const productId = event.detail;
        this.products.data.forEach(prod => {
            if(prod.Id == productId){
                
                    this.boughtProducts.push(prod);
                
            }
        });//amount, provera da li postioji
        this.template.querySelector('c-buy').setProducts(this.boughtProducts);
    }

    //ako ga ima u this.data, onda da updatujete njegov field amout koji cemo da napravimo. 
    //ako ocemo novi fild na objekat, kazemo this.data.objekat.ime filde i dodeli mu vrednost i automatski napravi novi field

    //da proverimo da li u data postoji taj objekat
    

    //moj kod
    //----------------------------------
    // handleDelete(event){
    //     const productId = event.detail;
    //     this.products.data.forEach(prod =>{
    //         if(prod.Id ==productId){
    //             this.boughtProducts.pop(prod);
    //         }
    //     })
    // }
    //----------------------------------

    handleCompare(event){
        const productId = event.detail;
        this.template.querySelector('c-compare').setProductId(productId);
    }
    
}