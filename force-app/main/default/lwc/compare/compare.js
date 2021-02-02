import { LightningElement, api } from 'lwc';

export default class Compare extends LightningElement {

    product1Id;
    product2Id;
    product3Id;
    lastChanged=0;

    //menjao sam ovo
    @api
    setProductId(prodId){
        if(prodId == this.product1Id || prodId == this.product2Id || prodId == this.product3Id){
            alert('Ne mozete dodati isti proizvod u Compare. Izaberite drugi proizvod.');
        }
        else{
            if(this.product1Id!=null && this.product2Id!=null && this.product3Id!=null){
                alert('Ne moze se dodati vise od 3 proizvoda u Compare. Izbacite neki proizvod.');
            }
            else{
            console.log(prodId);
                // if(this.lastChanged==0 || this.lastChanged==3){
                //     this.product1Id=prodId;
                //     this.lastChanged=1;
                // }else if(this.lastChanged == 1){
                //     this.product2Id=prodId;
                //     this.lastChanged=2;
                // }else{
                //     this.product3Id=prodId;
                //     this.lastChanged=3;
                // } 

                if(this.product1Id == null){
                    this.product1Id=prodId;
                }
                else if(this.product2Id == null){
                    this.product2Id=prodId;
                }
                else if(this.product3Id == null){
                    this.product3Id=prodId;
                }
            }
        }
    }    

    
    //ovo sam dodao - Andjelin nacin, ali radi dobro
    handleDelete1() {
        console.log('obrisi sa 1. mesta');
        this.product1Id = null;     
        //naknadno dodato
        this.product1Id = this.product2Id;
        this.product2Id = this.product3Id;   
        this.product3Id = null;
    }

    handleDelete2() {
        console.log('obrisi sa 2. mesta');
        this.product2Id = null;        
        //naknadno dodato
        this.product2Id = this.product3Id;
        this.product3Id = null;
    }

    handleDelete3() {
        console.log('obrisi sa 3. mesta');
        this.product3Id = null;        
    }


}