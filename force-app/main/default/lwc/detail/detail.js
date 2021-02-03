import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import ID_FIELD from '@salesforce/schema/Product2.Id';
import NAME_FIELD from '@salesforce/schema/Product2.Name';
import DESCRIPTION_FIELD from '@salesforce/schema/Product2.Description';
import PRICE_FIELD from '@salesforce/schema/Product2.Currency__c';
import PICTURE_FIELD from '@salesforce/schema/Product2.Image__c';

const FIELDS = [ID_FIELD,NAME_FIELD,DESCRIPTION_FIELD,PRICE_FIELD];

export default class Detail extends LightningElement {

    @api selectedProductId;
    @api compare = false;

    error;
    product;

    @wire(getRecord, { recordId: '$selectedProductId', fields: FIELDS})
    wiredProduct({error, data}){
        if(error){
            this.error = error.body.message;
        } else if (data){
            this.product = data;
        }
    }

    get name() {
        return getFieldValue(this.product, NAME_FIELD);
    }
    get description(){
        return getFieldValue(this.product, DESCRIPTION_FIELD);
    }
    get price() {
        return getFieldValue(this.product, PRICE_FIELD);
    }

    get picture() {
        return getFieldValue(this.product, PICTURE_FIELD);
    }

    handleBuy(){
        const prodId = getFieldValue(this.product, ID_FIELD);
        const event = new CustomEvent('buy',{detail:prodId});
        this.dispatchEvent(event);
    }

    handleCompare(){
        const prodId = getFieldValue(this.product, ID_FIELD);
        const event = new CustomEvent('compare',{detail:prodId});
        this.dispatchEvent(event);
    }

    handleDelete(){
        const deleteId = getFieldValue(this.product, ID_FIELD);
        const event = new CustomEvent('delete',{detail:deleteId});
        this.dispatchEvent(event);
    }

}