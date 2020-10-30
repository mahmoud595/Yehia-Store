$(function(){

   
 
   
// var imgsrc = $(this).children("img")[0].src
// request products fro data.txt
var xhttp = new XMLHttpRequest()
xhttp.open("GET" , "data.txt")
xhttp.onload = function(){
    var data = JSON.parse(xhttp.responseText)
    for(var i =0 ; i< 8;i++){
        $(".small-container #row1").append("<div class='col-4'><a><img src="+data[i].src+">"+data[i].h4+"<p>"+
        data[i].price+"</p></a></div")
    }
 
  
  $(".col-4").each(function(){
     $(this).on("click" , function(){
       
        var imgsrc = $(this).children("a").children("img")[0].src
        var h4 = $(this).children("a").children("h4").text()   
        var price = $(this).children("a").children("p").text()
       localStorage.setItem("clickedimage" , imgsrc)
       localStorage.setItem("h4" ,h4 )
       localStorage.setItem("price" ,price )

       $(this).children("a").attr("href" , "./productdetails/product-details.html")

     })
  })
}
xhttp.send()

     
    // $("#detailed-img")[0].src === localStorage.getItem("clickedimage")



//toggle list items of navbar at small screens
var menuItems = document.getElementById("menuitems")
menuItems.style.maxHeight = "0px"

$("#menu-icon").on("click" , function(){
    if(menuItems.style.maxHeight == "0px" ){
        menuItems.style.maxHeight = "200px"

    }
    else {
        menuItems.style.maxHeight = "0px"


    }
})


$("#cartlogo").on("click" , function(){
    console.log("hi")
    if (sessionStorage.username){
    $("#cartlogo").attr("href" , "cart/cart.html")
    }
    else {
        $("#cartlogo").attr("href" , "account/account.html")
    }
})


})


//      console.log(localStorage.getItem("clickedimage"))



//  localStorage.setItem("detailedimg" , $("#detailed-img")[0].src)








