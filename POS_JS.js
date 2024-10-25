let Dashboard = document.getElementById("Dashboard");
let Customer = document.getElementById("Customer");
let Item = document.getElementById("Item");
let Order = document.getElementById("Order");
let Order_history = document.getElementById("Order_history");

let Dashboard_section = document.getElementById("Dashboard_section");
let customer_section = document.getElementById("customer-section");
let item_section = document.getElementById("item-section");

customer_section.style.display = "none";
item_section.style.display = "none";

Dashboard.addEventListener('click', function () {
    Dashboard_section.style.display = "block"
    customer_section.style.display = "none";
    item_section.style.display = "none";

});

Customer.addEventListener('click', function () {
    Dashboard_section.style.display = "none"
    customer_section.style.display = "block";
    item_section.style.display = "none";

});

Item.addEventListener('click', function () {
    Dashboard_section.style.display = "none"
    customer_section.style.display = "none";
    item_section.style.display = "block";

});


///////////////////////////////////////////////////////
    /*Customer  & Table update*/
//////////////////////////////////////////////////////

//customer array
let CustomerDB = [];

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
        console.log(item);
        let Data = `<tr>
            <td>${item.id}</td>
            <td>${item.FirstName}</td>
            <td>${item.LastName}</td>
            <td>${item.CusEmail}</td>
            <td>${item.CustomerAddress}</td>
            <td>${item.PhoneNumber}</td>
            </tr>`
        $("#customerTableBody").append(Data);
    });
}

//----------------save customer----------------------//
$("#customer_add_button").on("click", function() {
    let First_Name = $("#firstName").val();
    let Last_Name = $("#lastName").val();
    let Email = $("#email").val();
    let Phone_Number = $("#mobile").val();
    let Cus_Address = $("#address").val();

    console.log()

    let customerData = {
        id : CustomerDB.length + 1,
        FirstName : First_Name,
        LastName : Last_Name,
        CusEmail : Email,
        PhoneNumber : Phone_Number,
        CustomerAddress : Cus_Address
    }
    CustomerDB.push(customerData);

    customerTable();
    clearForm();
});

//----------------get the customer----------------------//
let selectedCustomerIndex;

$("#customerTableBody").on("click", "tr", function (){
    selectedCustomerIndex = $(this).index();
    let customerData = CustomerDB[selectedCustomerIndex]; //get the customer data
    $('#firstName').val(customerData.FirstName);
    $('#lastName').val(customerData.LastName);
    $('#email').val(customerData.CusEmail);
    $('#mobile').val(customerData.PhoneNumber);
    $('#address').val(customerData.CustomerAddress);
});

//----------------delete customer----------------------//
$("#customer_delete_button").on("click", function() {
    if(selectedCustomerIndex!== undefined){
        CustomerDB.splice(selectedCustomerIndex, 1);
        customerTable();
        clearForm();
        selectedCustomerIndex = undefined;
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
        } else {
            alert("Please fill all fields before updating.");
        }
    } else {
        alert("Please select a customer to update.");
    }
});



///////////////////////////////////////////////////////
        /*Item  & Table update*/
//////////////////////////////////////////////////////

//ITEM ARRAY
let ItemDB = [];

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
