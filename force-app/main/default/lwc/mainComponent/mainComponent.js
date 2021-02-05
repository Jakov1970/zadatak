import { LightningElement, wire, api } from 'lwc';
import getProducts from '@salesforce/apex/listOfProducts.getProducts';

export default class MainComponent extends LightningElement {

    @wire(getProducts)
    products;

    selectedProductId;
    boughtProducts = new Map();
    listOfProducts = [];

    handleTileClicked(event){
        this.selectedProductId = event.detail;
    }

    handleBuy(event){
        const id = event.detail;
        this.products.data.forEach(product => 
        {
             if(product.Id == id)
             {
                if(!this.boughtProducts.has(id))
                 {
                    console.log('Usli smo u f-ju koja dodaje objekat u slucaju kada on ne postoji u tabeli');
                    const existingProduct = { Name: product.Name, Currency__c: product.Currency__c, Amount: 1 };
                    console.log(existingProduct);
                    this.boughtProducts.set(id, 1);
                    this.listOfProducts.push(existingProduct);
                 }
                 else 
                 {               
                      console.log('Ovo se aktivira u slucaju da objekat vec postoji u tabeli');
                      let i = this.boughtProducts.get(id) + 1;
                      this.boughtProducts.set(id, i);
                      console.log('Ispisi mi promenljivu: ' + i);
                      for(let p = 0; p < this.listOfProducts.length; p++)
                      {
                          if(this.listOfProducts[p].Name == product.Name)
                          {
                              this.listOfProducts[p].Amount++;
                          }
                      }
                 }             
             }
        })        
        this.template.querySelector('c-buy').setProducts(this.listOfProducts);
    }

    handleDelete(event){
        const productId = event.detail;
        console.log('obrisalo se nesto');
        console.log(productId);

        this.products.data.forEach( product => {
            if(product.Id == productId){
                if(!this.boughtProducts.has(productId)){
                }
                else
                {
                    for(let p = 0; p < this.listOfProducts.length; p++)
                      {
                          if(this.listOfProducts[p].Name == product.Name)
                          {
                              this.listOfProducts[p].Amount--;
                              if(this.listOfProducts[p].Amount == 0){
                                this.boughtProducts.delete(productId);
                                delete this.listOfProducts[productId];
                                this.listOfProducts.splice(p, 1);
                              }
                          }
                      }                      
                }
            }
        })
        this.template.querySelector('c-buy').setProducts(this.listOfProducts);
    }    

    handleCompare(event){
        const productId = event.detail;
        this.template.querySelector('c-compare').setProductId(productId);
    }
    
}