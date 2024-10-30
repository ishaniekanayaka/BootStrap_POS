import {ItemDB} from "../db/database.js";
import ItemModel from "../models/item.js";

import CustomerModel from "../models/customer.js";
import {CustomerDB} from "../db/database.js";

import {OrderDB} from "../db/database.js";

$(document).ready(function (){
    setOrderId();
})

function generateNextOrderId(){
    let id = OrderDB.length +1;
    return "O00" + id;
}

function setOrderId(){
    $('#order_id').val(generateNextOrderId());
    console.log(generateNextOrderId());
}