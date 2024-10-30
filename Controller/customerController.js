/*import {CustomerModel} from"./models/customer.js";*/
import CustomerModel from "../models/customer.js";
///////////////////////////////////////////////////////
    /*Customer  & Table update*/
//////////////////////////////////////////////////////
/*import {CustomerModel} from"./models/customer.js";*/

//customer array
/*let CustomerDB = [];*/
import {CustomerDB} from "../db/database.js";


const validateMobile = (mobile) => {
    const sriLankanMobileRegex = /^(?:\+94|0)?7[0-9]{8}$/;
    return sriLankanMobileRegex.test(mobile);
}

const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

//clear fields
const clearForm = ()=>{
    $("#firstName").val('');
    $("#lastName").val('');
    $("#email").val('');
    $("#mobile").val('');
    $("#address").val('');
}


//load all customer table
const customerTable = () => {
    $("#customerTableBody").empty();
    CustomerDB.map((item, index) => {
        /*console.log(item);*/
        let Data = `<tr>
            <td>${item.id}</td>
            <td>${item.firstName}</td>
            <td>${item.lastName}</td>
            <td>${item.phoneNumber}</td>
            <td>${item.cusEmail}</td>
            <td>${item.customerAddress}</td>
            </tr>`
        $("#customerTableBody").append(Data);
    });
}

//----------------save customer----------------------//
$("#customer_add_button").on("click", function() {
    let First_Name = $("#firstName").val(); //empty wwenn ba
    let Last_Name = $("#lastName").val();
    let Email = $("#email").val(); //meketh emty wenn ba format ekk thiyen oni
    let Phone_Number = $("#mobile").val(); //format eka hriytm check wenn oni
    let Cus_Address = $("#address").val();

    if (First_Name.length === 0){
        alert("invalid First Name");
    }else if(Last_Name. length === 0) {
        alert("invalid Last Name");
    }else if (!validateEmail(Email)) {
        Swal.fire({
            title: "Invalid email?",
            text: "That thing is still around?",
            icon: "question"
        });
    }else if (!validateMobile(Phone_Number)){
        Swal.fire({
            title: "Invalid Mobile Number?",
            text: "That thing is still around?",
            icon: "question"
        });
    }else if(Cus_Address. length === 0){
        alert("invalid Customer Address");
    }else {
        /*let customerData = {
            id : CustomerDB.length + 1,
            FirstName : First_Name,
            LastName : Last_Name,
            CusEmail : Email,
            PhoneNumber : Phone_Number,
            CustomerAddress : Cus_Address
        }*/

        let customerData = new CustomerModel(
            CustomerDB.length + 1,
            First_Name,
            Last_Name,
            Email,
            Phone_Number,
            Cus_Address
        );


        CustomerDB.push(customerData);

        customerTable();
        clearForm();
        Swal.fire({
            title: "Customer Saved!",
            text: "You clicked the button!",
            icon: "success"
        });
    }
});


//----------------get the customer----------------------//
let selectedCustomerIndex;

$("#customerTableBody").on("click", "tr", function (){
    selectedCustomerIndex = $(this).index();
    let customerData = CustomerDB[selectedCustomerIndex]; //get the customer data
    $('#firstName').val(customerData.firstName);
    $('#lastName').val(customerData.lastName);
    $('#email').val(customerData.cusEmail);
    $('#mobile').val(customerData.phoneNumber);
    $('#address').val(customerData.customerAddress);

    console.log(customerData);
});


//----------------delete customer----------------------//
$("#customer_delete_button").on("click", function() {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
    if(selectedCustomerIndex!== undefined){
        CustomerDB.splice(selectedCustomerIndex, 1);
        customerTable();
        clearForm();
       /* selectedCustomerIndex = undefined;*/
    }else {
        alert("Please select a customer to delete");
    }
});


//----------------update customer----------------------//
$("#customer_update_button").on("click", function() {
    if(selectedCustomerIndex !== undefined) { // Check if a customer is selected
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let cusEmail = $("#email").val();
        let phoneNumber = $("#mobile").val();
        let customerAddress = $("#address").val();

        // Check if the inputs are not empty before updating
        if(firstName && lastName && cusEmail && phoneNumber && customerAddress) {
            CustomerDB[selectedCustomerIndex] = {
                id: CustomerDB[selectedCustomerIndex].id, // Retain the same ID
                FirstName: firstName,
                LastName: lastName,
                CusEmail: cusEmail,
                PhoneNumber: phoneNumber,
                CustomerAddress: customerAddress
            };

            customerTable(); // Refresh the table after updating the customer
            clearForm(); // Clear the form fields
            selectedCustomerIndex = undefined; // Reset the selected index

            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Update",
                denyButtonText: `Don't Update`
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire("Saved!", "", "success");
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
        } else {
            alert("Please fill all fields before updating.");
        }
    } else {
        alert("Please select a customer to update.");
    }
});


/*

///////////////////////////////////////////////////////
        /!*Item  & Table update*!/
//////////////////////////////////////////////////////

//ITEM ARRAY
/!*let ItemDB = [];*!/
import {ItemDB} from "../db/database.js";

//clear fields
const ItemClearForm = ()=>{
    $("#itemName").val('');
    $("#qty").val('');
    $("#itemDescription").val('');
    $("#price").val('');
}

//load all item table
const itemTable = () => {
    $("#itemTableBody").empty();
    ItemDB.map((item,index) => {
        let Data = `<tr>
            <td>${item.id}</td>
            <td>${item.ItemName}</td>
            <td>${item.itemDescription}</td>
            <td>${item.ItemQuantity}</td>
            <td>${item.ItemPrice}</td>
            </tr>`
        $("#itemTableBody").append(Data);
    });
}

$("#item_add_button").on("click", function() {
    let Item_Name = $("#itemName").val();
    let Item_Quantity = $("#qty").val();
    let Description = $("#itemDescription").val();
    let Item_Price = $("#price").val();


    console.log()

    let itemData = {
        id : ItemDB.length + 1,
        ItemName : Item_Name,
        itemDescription : Description,
        ItemQuantity : Item_Quantity,
        ItemPrice : Item_Price
    }
    ItemDB.push(itemData);

    itemTable();
    ItemClearForm();
});

//----------------get the item----------------------//
let selectedItemIndex;

$("#itemTableBody").on("click", "tr", function (){
    selectedItemIndex = $(this).index();
    let itemData = ItemDB[selectedItemIndex]; //get the item data
    $('#itemName').val(itemData.ItemName);
    $('#qty').val(itemData.ItemQuantity);
    $('#itemDescription').val(itemData.itemDescription);
    $('#price').val(itemData.ItemPrice);

});

//----------------delete item----------------------//
$("#item_delete_button").on("click", function() {
    if(selectedItemIndex!== undefined){
        ItemDB.splice(selectedItemIndex, 1);
        itemTable();
        ItemClearForm();
        selectedItemIndex = undefined;
    }else {
        alert("Please select a item to delete");
    }
});


//----------------update item----------------------//
$("#item_update_button").on("click", function() {
    if(selectedItemIndex!== undefined) { // Check if an item is selected
        let Item_Name = $("#itemName").val();
        let Item_Quantity = $("#qty").val();
        let Description = $("#itemDescription").val();
        let Item_Price = $("#price").val();

        // Check if the inputs are not empty before updating
        if (Item_Name && Item_Quantity && Description && Item_Price) {
            ItemDB[selectedItemIndex] = {
                id: ItemDB[selectedItemIndex].id, // Retain the same ID
                ItemName: Item_Name,
                itemDescription: Description,
                ItemQuantity: Item_Quantity,
                ItemPrice: Item_Price
            };

            itemTable(); // Refresh the table after updating the item
            ItemClearForm(); // Clear the form fields
            selectedItemIndex = undefined; // Reset the selected index
        } else {
            alert("Please fill all fields before updating.");
        }
    }
});
*/