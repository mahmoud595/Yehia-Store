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
})