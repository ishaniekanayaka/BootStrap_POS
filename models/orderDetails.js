export default class orderDetailsModel{
    constructor(order_id, date, customerId, itemName, itemPrice, order_qty, sub_total, discount_range, discount, final_total) {
        this._order_id = order_id;
        this._date = date;
        this._customerId = customerId;
        this._itemName = itemName;
        this._itemPrice = itemPrice;
        this._order_qty = order_qty;
        this._sub_total = sub_total;
        this._discount_range = discount_range;
        this._discount = discount;
        this._final_total = final_total;
    }

    get order_id() {
        return this._order_id;
    }

    set order_id(value) {
        this._order_id = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get customerId() {
        return this._customerId;
    }

    set customerId(value) {
        this._customerId = value;
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(value) {
        this._itemName = value;
    }

    get itemPrice() {
        return this._itemPrice;
    }

    set itemPrice(value) {
        this._itemPrice = value;
    }

    get order_qty() {
        return this._order_qty;
    }

    set order_qty(value) {
        this._order_qty = value;
    }

    get sub_total() {
        return this._sub_total;
    }

    set sub_total(value) {
        this._sub_total = value;
    }

    get discount_range() {
        return this._discount_range;
    }

    set discount_range(value) {
        this._discount_range = value;
    }

    get discount() {
        return this._discount;
    }

    set discount(value) {
        this._discount = value;
    }

    get final_total() {
        return this._final_total;
    }

    set final_total(value) {
        this._final_total = value;
    }
}