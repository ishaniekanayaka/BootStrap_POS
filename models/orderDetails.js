export default class orderDetailsModel{

    constructor(orderId,orderDate,cusId,ItemId,qty,total,cash,discount) {
        this.itemId = ItemId;
        this._orderId = orderId;
        this._orderDate = orderDate;
        this._cusId = cusId;
        this._ItemId = ItemId;
        this._qty = qty;
        this._total = total;
        this._cash = cash;
        this._discount = discount;
    }

    get orderId() {
        return this._orderId;
    }

    set orderId(value) {
        this._orderId = value;
    }

    get orderDate() {
        return this._orderDate;
    }

    set orderDate(value) {
        this._orderDate = value;
    }

    get cusId() {
        return this._cusId;
    }

    set cusId(value) {
        this._cusId = value;
    }

    get ItemId() {
        return this._ItemId;
    }

    set ItemId(value) {
        this._ItemId = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

    get total() {
        return this._total;
    }

    set total(value) {
        this._total = value;
    }

    get cash() {
        return this._cash;
    }

    set cash(value) {
        this._cash = value;
    }

    get discount() {
        return this._discount;
    }

    set discount(value) {
        this._discount = value;
    }

}