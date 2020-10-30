$(function(){


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
        $("#cartlogo").attr("href" , "../cart/cart.html")
        }
        else {
            $("#cartlogo").attr("href" , "../accountaccount.html")
        }
    })
    var xhttp = new XMLHttpRequest()
xhttp.open("GET" , "../products/data.txt")
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

       $(this).children("a").attr("href" , "product-details.html")

     })
  })
}
xhttp.send()

$("#detailed-img")[0].src = localStorage.getItem("clickedimage")
var detailedimg =  $("#detailed-img")[0].src
$(".col-2 ").children("h1").text( localStorage.getItem("h4"))
var detailedname =  $(".col-2 ").children("h1").text()
$(".col-2 ").children("h4").text(localStorage.getItem("price"))
var detailedprice =  $(".col-2 ").children("h4").text()
$(cartbtn)[0].src="../images/addcart.png"
$("#cartbtn").on("click" , function(){
    if(sessionStorage.username){
    $(cartbtn)[0].src="../images/addcart2.png"
   var detailedinput =$("#detailed-input").val()
   
   if(localStorage.getItem("detailedimg")){
       let arr = JSON.parse(localStorage.getItem("detailedimg"))
       let obj = {"src" :detailedimg , "name" : detailedname ,  "price" : detailedprice, "input" : detailedinput}
       arr.push(obj)
       localStorage.setItem("detailedimg" , JSON.stringify(arr))
   }
   else {
       let arr =[]
       let obj = {"src" :detailedimg , "name" : detailedname ,  "price" : detailedprice, "input" : detailedinput}
       arr.push(obj)
       localStorage.setItem("detailedimg" , JSON.stringify(arr))
   }
   // console.log(JSON.parse(localStorage.getItem("detailedimg")))

}
else {
   location.href="../account/account.html"
}})

})