import { api, LightningElement } from 'lwc';

export default class Tile extends LightningElement {

    @api
    product;

    handleClick() {
        const event = new CustomEvent('clicked', {detail: this.product.Id});
        this.dispatchEvent(event);
        console.log('kliknuo sam');
    }

    handleCompare() {
        const event = new CustomEvent('compare', {detail: this.product.Id});
        this.dispatchEvent(event);
    }

    handleBuy() {
        const event = new CustomEvent('buy', {detail: this.product.Id});
        this.dispatchEvent(event);
    }

}