$(document).ready(function() {
    var RCCESID = [{
            catagory:"Cloth",
            namee: "Femal Cloth",
            price: "2500",
            img:"cl.jpg",
            
        },
        {
            catagory:"Cloth",
            namee: "T - shrit",
            price: "1200",
            img:"cl (2).jpeg",
        },
        
        {
            catagory:"Begs",
            namee: "School Bages",
            price: "800",
            img:"bg (2).jpg",
        },
        
        {
            catagory:"Begs",
            namee: "Party Bags",
            price: "3200",
            img:"03 (3).png",
        },
        {
            catagory:"shoes",
            namee: "Femel's shoes",
            price: "2500",
            img:"03 (4).jpg",
        },
         {
            catagory:"Case Shoes",
            namee: "Meals shoes",
            price: "5200",
            img:"new (1).jpeg",
        },
        {
            catagory:"Shoes",
            namee: "Girls shoes",
            price: "1900",
            img:"03 (6).jpg",
        },
        {
            catagory:"boys Shoes",
            namee: "High Boys shoes",
            price: "3200",
            img:"new (2).jpeg",
        }];
    showOnHTMLFileAndarreey(RCCESID);
    // variable k html  a anner jonno kin sothik jani na 

        showCartPage();

});
// console.log(RCCESID)

function showOnHTMLFileAndarreey(htmlshowproduct){
    var productHTML_page = "";
    htmlshowproduct.forEach(function(hmtlProductGet){
        productHTML_page += '<div class="grid_content">'+
             '<img src="src/img/' +hmtlProductGet.img+'">'+
                    '<h3 class="productnamee">prouct namee : '+ hmtlProductGet.nameee +'</h3>'+
                   
                    '<h3 class="price">Price : $ <span>'  + hmtlProductGet.price +  '</span></h3>'+
                    '<h3> Catagory  ' + hmtlProductGet.catagory + '</h3>'+
                    '<input type="text" class="product_uantity" namee="quantity" value="1" size="2" />'+
                   '<button type="button"   onClick="addToCart(this)" class="btn_crat">Add to cart</button>'+
                //    '<button type="button" class="btn_fav">Add to favourite</button>'+
                '</div>';
                "<tr>"
    });
    $('#js_input').html(productHTML_page);
}
//this bolte ki bolcha

// add to cart
function addToCart(element){
    var productPrentdiv = $(element).closest('div.grid_content');
    var price = $(productPrentdiv).find('.price span').text();
    // এখনে মূল্য একটি ভ্যরিএব্লে তেরী করার হল ও মূল্য spam   কে আনা হলো
    var productnamee = $(productPrentdiv).find('.productnamee').text();
    var quantity = $(productPrentdiv).find('.quantity').val();

    // এখনে মুলত cart page a নেওয়া হবে JSON.stringify ki
    var cartPageItem = {
        productnamee: productnamee,
        price: price,
        quantity: quantity
    };
    // এখানে cart page পেজে এ ডাটা নিয়ে যাওয়া হচ্ছে 
    var cqartItemJson =JSON.stringify(cartPageItem);
    // If javascript shopping cart session is not empty
    var cartArray = new Array();
    if (sessionStorage.getItem('CartInputJS')){
        cartArray = JSON.parse(sessionStorage.getItem('CartInputJS'));
    }
    //এখেনে ডাটা যোগ করা হচ্ছে 
    cartArray.push(cqartItemJson);
// নতুন আরে তোরি হচ্ছে
    var cartJSON =JSON.stringify(cartArray);
    sessionStorage.setItem('CartInputJS',cartJSON);
    showCartPage();

}
// fully remove imtes hobe
function emptyCart(){
    if (sessionStorage.getItem('CartInputJS')){
        sessionStorage.removeItem("CartInputJS");
        showCartPage();
    }
}

function removeItems(index){
    if (sessionStorage.getItem('CartInputJS')){
        var soppinggCart = JSON.parse(sessionStorage.getItem('CartInputJS'));
        sessionStorage.removeItem(soppinggCart[index]);
        showCartPage();
    }
}

function showCartPage(){
    var cartRow = "";
    var itemCount = 0;
    var garndTotel = 0;

    var price = 0;
    var quantity = 0;
    var subtotel = 0 ;
    if (sessionStorage.getItem('CartInputJS'));{
         var soppinggCart = JSON.parse(sessionStorage.getItem('CartInputJS'));
    itemCount = soppinggCart.length;
    soppinggCart.forEach(function(hmtlProductGet) {
     var cartPageItem = JSON.parse(hmtlProductGet);
     price = parseFloat(cartPageItem.price);
     quantity = parseInt (cartPageItem);
     subtotel = price * quantity;
     cartRow += "<tr>" +
     "<td>" + cartPageItem.nameee + "</td>" +
     "<td class='text-right'>$" + price.toFixed(2) + "</td>" +
     "<td class='text-right'>" + quantity + "</td>" +
     "<td class='text-right'>$" + subtotel.toFixed(2) + "</td>" +
     "</tr>";
        garndTotel += subtotel
    });
    }
    $('#cartTableBody').html(cartRow);
	$('#itemCount').text(itemCount);
	$('#totalAmount').text("$" + grandTotal.toFixed(2));
}
// parseFloat mane ki  parseInt ?























/*

function catPageOpenOne() {
   
    let html_div = document.querySelector('.show');
    let js_innerHTML_create = document.createElement('div');
    js_innerHTML_create.innerHTML = `
<!-- html-->
<div style="padding: 20px;background:gray; ">
    <h1>${poductList.CatShoes[0].Productnamee}</h1>
    <p> Quntity <span id="CartQuntityValueone"> 0</span></p>
    <span id="CartQuntityprcieone"> Totel Price 0</span>
    <br/>
    <button type="button" onclick="addOne()" class="btnUp"> + </button>
    <button type="button" class="btnDown" onclick="downOne()"> - </button> 
   
</div>

`
    html_div.appendChild(js_innerHTML_create);

}





*/
// let cratval = 0;

// function addcart() {
//     cratval = cratval + 1;
//     document.querySelector('.ic_po_ab_cart').innerHTML = cratval;
// }

// let favVal = 0;

// function addfav() {
//     favVal = favVal + 1;
//     document.querySelector('.ic_po_ab_fav').innerHTML = favVal;
// }



// function Open() {
//     document.getElementById('cartPage').style.width = "500px";
// }

// function closeNav() {
//     document.getElementById('cartPage').style.width = "0px";
// }










// }
// let val = 0;
// function add(){
//     val= val +1;
//     document.querySelector(".Value").innerHTML=val;
//     document.querySelector(".Value2").innerHTML=val * poductList.CatShoes[0].Price;
// }
// function down(){
//     val = val -1;
//     document.querySelector(".Value").innerHTML=val;
// }



// html show
// let HTMLInput = document.querySelector('.owl-carousel');
// RCCESID.forEach((yx) => {
//     let create = document.createElement('div');
//     create.innerHTML = ``;
//     HTMLInput.appendChild(create);
// });
// let htmlInputCart = document.querySelector('#cartPage');
// function add(){
//     let createCartPage = document.createElement('div');
//     createCartPage.innerHTML = `
//     <h6>${yx[0].price}</H6>
//     `;
//     htmlInputCart.appendChild(createCartPage);
// }





