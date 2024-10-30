import { ItemDB } from "../db/database.js";
import ItemModel from "../models/item.js";
import CustomerModel from "../models/customer.js";
import { CustomerDB } from "../db/database.js";
import { OrderDB } from "../db/database.js";

$(document).ready(function () {
    setOrderId();
    loadCustomerCbx(); // Load customers when the document is ready
});

// Function to generate the next order ID
function generateNextOrderId() {
    let id = OrderDB.length + 1;
    return "O00" + id;
}

// Function to set the order ID in the input field
function setOrderId() {
    $('#order_id').val(generateNextOrderId());
    console.log(generateNextOrderId());
}


export function loadCustomerCbx(){
    $('#customer_id1').empty();
    $('#customer_id1').append(`<option>select a item</option>`);
    CustomerDB.map((Customer, number) => {
        let data = `<option>${Customer._id}</option>`
        console.log(data);
        $('#customer_id1').append(data);
    });
}

export function loadItemCbx(){
    $('#item_code1').empty();
    $('#item_code1').append(`<option>select a item</option>`);
    ItemDB.map((item, number) => {
        let data = `<option>${item._id}</option>`
        console.log(data);
        $('#item_code1').append(data);
    });
}