import {ItemDB} from "../db/database.js";
import ItemModel from "../models/item.js";

import CustomerModel from "../models/customer.js";
import {CustomerDB} from "../db/database.js";

import {OrderDB} from "../db/database.js";

$(document).ready(function (){
    setOrderId();
    loadCustomerCbx();
})

function generateNextOrderId(){
    let id = OrderDB.length +1;
    return "O00" + id;
}

function setOrderId(){
    $('#order_id').val(generateNextOrderId());
    console.log(generateNextOrderId());
}

export function loadCustomerCbx(){
    console.log(2);
    $('#customer_id1').empty();
    $('#customer_id1').append(`<option>select a item</option>`);
    CustomerDB.map((Customer, number) => {
        let data = `<option>${Customer._id}</option>`

        console.log(data);
        $('#customer_id1').append(data);
    });
}

