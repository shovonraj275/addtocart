let cratval = 0;

function addcart() {
    cratval = cratval + 1;
    document.querySelector('.ic_po_ab_cart').innerHTML = cratval;
}

let favVal = 0;

function addfav() {
    favVal = favVal + 1;
    document.querySelector('.ic_po_ab_fav').innerHTML = favVal;
}
// function changes(){

// document.getElementById('jsChange').style.cssText ='color:red;';

//     console.log("dhhd")
// }


function Open() {
    document.getElementById('cartPage').style.width = "500px";
}

function closeNav() {
    document.getElementById('cartPage').style.width = "0px";
}


// html
// document.getElementById("porductOneName").innerHTML = "Prpoduct Name : " + poductList.CatShoes[0].ProductName;
// document.getElementById("ProducrOnePrice").innerHTML = "Product Prcie : " + poductList.CatShoes[0].Price;
// document.getElementById("ProducrOneCat").innerHTML = "Product Catagory : " + poductList.CatShoes[0].Cat;
// document.getElementById("porductTwoName").innerHTML = "Prpoduct Name : " + poductList.CatShoes[1].ProductName;
// document.getElementById("ProducrTwoPrice").innerHTML = "Product Prcie : " + poductList.CatShoes[1].Price;
// document.getElementById("ProducrTwoCat").innerHTML = "Product Catagory : " + poductList.CatShoes[1].Cat;

// html 


function catPageOpenOne() {
   
    let html_div = document.querySelector('.show');
    let js_innerHTML_create = document.createElement('div');
    js_innerHTML_create.innerHTML = `
<!-- html-->
<div style="padding: 20px;background:gray; ">
    <h1>${poductList.CatShoes[0].ProductName}</h1>
    <p> Quntity <span id="CartQuntityValueone"> 0</span></p>
    <span id="CartQuntityprcieone"> Totel Price 0</span>
    <br/>
    <button type="button" onclick="addOne()" class="btnUp"> + </button>
    <button type="button" class="btnDown" onclick="downOne()"> - </button> 
   
</div>

`
    html_div.appendChild(js_innerHTML_create);

}

let valCatPageOpenOne = 0;

function addOne() {
    valCatPageOpenOne = valCatPageOpenOne + 1;
    document.querySelector("#CartQuntityValueone").innerHTML = valCatPageOpenOne;
    document.querySelector("#CartQuntityprcieone").innerHTML = valCatPageOpenOne * poductList.CatShoes[0].Price;
}

function downOne() {
    valCatPageOpenOne = valCatPageOpenOne - 1;
    document.querySelector("#CartQuntityValueone").innerHTML = valCatPageOpenOne;
    document.querySelector("#CartQuntityprcieone").innerHTML = valCatPageOpenOne * poductList.CatShoes[0].Price;
}





























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


// let val= 0;
// function cart(){
//     val= val + 1;
//     document.querySelectorAll('.ic_po_ab_cart').innerHTML = val;
// }
// let btn = document.querySelectorAll(".btn_crat");
// btn.addEventListener("click" , cart);

// // fav
// let val2= 0;
// function fav(){
//     val2= val2 + 1;
//     document.querySelector('.ic_po_ab_fav').innerHTML = val2;
// }
// let btn3 = document.querySelector(".btn_fav");
// btn3.addEventListener("click" , fav);



// const poductList = {
//     ProductName: "Sport Shoes",
//     Price: "2000",
//     Cat: "Shose",
// }
// {
//     ProductName: "Sport Shoes",
//     Price: "2000",
//     Cat: "Shose",
// }
const RCCESID= {
    WDD:[
    {
        ID:"WDD00159",
        namee:"ezaz",
        mobile: "+880171741525",

    },
    {
        ID:"WDD00159",
        namee:"Shovon",
        mobile: "+88014458457",

    },
    {
        ID:"WDD00159",
        namee:"ezaz",
        mobile: "+880171741525",

    },
    {
        ID:"WDD00159",
        namee:"Shovon",
        mobile: "+88014458457",

    },
    {
        ID:"WDD00159",
        namee:"ezaz",
        mobile: "+880171741525",

    },
    {
        ID:"WDD00159",
        namee:"Shovon",
        mobile: "+88014458457",

    },


   ],
GD:[
    {
        ID:"GD00555",
        namee:"sara",
        mobile: "+88017458255",

    },
    {
        ID:"GD0005167",
        namee:"Shathy",
        mobile: "+88014458457",

    }
],
DM:[
    {
        ID:"DM000148",
        namee:"Akib",
        mobile: "+880171744859",

    },
    {
        ID:"DM005854",
        namee:"makarim",
        mobile: "+8801557",

    }
],
VE:[
    {
        ID:"VE000148",
        namee:"nobel",
        mobile: "+88017745544",

    },
    {
        ID:"VE005854",
        namee:"Abudullah",
        mobile: "+88014485528",

    }
],

}


const person = [{
    name: "John",
    age: 30,
    city: "New York"
  },
  {
    name: "John",
    age: 30,
    city: "New York"
  }
]

person.forEach(html454)
document.getElementById("nwe").innerHTML=person;












const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

document.getElementById("demo2").innerHTML = numbers;

function myFunction(item, index, arr) {
  arr[index] ;
}



//  person.forEach((x)=>x.name);
//  person.forEach((x)=>getElementById("demo2").innerHTML =x.name);
 
let shovon;
function catPageOpenOne() {
}   
   

document.getElementById("nwe").innerHTML = shovon;
// document.getElementById("demo2").innerHTML = RCCESID.DM[0].ID;


