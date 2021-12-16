
//input values and calculate net amount
function calculateAmt(){
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var qty = document.getElementById("qty").value;
    var netAmt = price*qty;
    netAmt = Math.round(netAmt);

    if(!id || !name || !price || !qty ){
        alert("Please fill ll the boxes." );
    }else if(price ==0 || qty == 0){
        alert("Quantity and Price can't be empty or zero.")
    }else{        document.getElementById("netAmt").innerHTML = netAmt;
    }
}

//display all inputs in tabular form by adding rows accordingly 
function displayDetails(){
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var qty = document.getElementById("qty").value;
    var netAmt = price*qty;
    netAmt = Math.round(netAmt);
     if(!id || !name || !price || !qty ||!netAmt){
        alert("Please fill ll the boxes." );
     }else{
   
    var row = 1;
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = id;
    cell2.innerHTML = name;
    cell3.innerHTML = price;
    cell4.innerHTML = qty;
    cell5.innerHTML = netAmt;
     }

     //inputs get refreshed 
    document.getElementById("id").value="";
     document.getElementById("name").value="";
     document.getElementById("price").value="";
     document.getElementById("qty").value="";
     document.getElementById("netAmt").innerHTML="";

}

//sum of net amounts(total amount)
function totalAmount(){
    var display = document.getElementById("display");
    var tAmt = 0;
    for(i = 1; i < display.rows.length; i++){
        tAmt += parseInt(display.rows[i].cells[4].innerHTML);
    }
    document.getElementById("tAmt").innerHTML = "Rs. " + tAmt;  
    
}

