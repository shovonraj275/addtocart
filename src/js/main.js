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
            catagory:"Shoes",
            namee: " Boys shoes",
            price: "1900",
            img:"new (1).jpeg",
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
                    '<h3>prouct name   : <span class="productnamee">'+ hmtlProductGet.namee +'</span></h3>'+
                   
                    '<h3 class="price">Price : $ <span>'  + hmtlProductGet.price +  '</span></h3>'+
                    '<h3 class="dddddddd"> Catagory  ' + hmtlProductGet.catagory + '</h3>'+
                    '<input type="text" class="product_uantity" namee="quantity" value="1" size="2" />'+
                   '<button type="button"   onClick="addToCart(this)" class="btn_crat">Add to cart</button>'+
                //    '<button type="button" class="btn_fav">Add to favourite</button>'+
                '</div>';
                "<tr>"
    });
    $('#js_input').html(productHTML_page);
}

// add to cart
function addToCart(element){
    var productPrentdiv = $(element).closest('div.grid_content');
    var price = $(productPrentdiv).find('.price span').text();
    // এখনে মূল্য একটি ভ্যরিএব্লে তেরী করার হল ও মূল্য spam   কে আনা হলো
    var productnamee = $(productPrentdiv).find('.productnamee').text();
    var catagory = $(productPrentdiv).find('.dddddddd').text();
    var quantity = $(productPrentdiv).find('.product_uantity').val();

    // এখনে মুলত cart page a নেওয়া হবে JSON.stringify ki
    var cartPageItem = {
        productnamee: productnamee,
        price: price,
        quantity: quantity,
        catagory:catagory,
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

function showCartPage(){
    var cartRow = "";
    var itemCount = 0;
    var garndTotel = 0;

    var price = 0;
    var quantity = 0;
    var subtotel = 0 ;
    if (sessionStorage.getItem('CartInputJS')) {
         var soppinggCart = JSON.parse(sessionStorage.getItem('CartInputJS'));
    itemCount = soppinggCart.length;
        soppinggCart.forEach(function(hmtlProductGet) {
     var cartPageItem = JSON.parse(hmtlProductGet);
     price = parseFloat(cartPageItem.price);
     quantity = parseInt (cartPageItem.quantity);
     subtotel = price * quantity;
     cartRow += "<tr>" +
     "<td>" + cartPageItem.productnamee + "</td>" +
     "<td class='text-right'>$" + price.toFixed(2) + "</td>" +
     "<td class='text-right'>" + quantity + "</td>" +
     "<td class='text-right'>$" + subtotel.toFixed(2) + "</td>" +
     "</tr>";
        garndTotel += subtotel
    });
    }
    $('#cartTableBody').html(cartRow);
	$('#itemCount').text(itemCount);
    $('#totalAmount').text("$" + garndTotel.toFixed(2));
}
// parseFloat mane ki  parseInt ?



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


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("main").style.marginLeft = "100%";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }






























