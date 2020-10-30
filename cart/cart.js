
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
  
    var arr =JSON.parse(localStorage.detailedimg)
    var sub =0
    for(var i = 0 ; i < arr.length ; i++){
        
        var src =JSON.parse(localStorage.detailedimg)[i].src
        var name = JSON.parse(localStorage.detailedimg)[i].name
        var price = JSON.parse(localStorage.detailedimg)[i].price
        var quantity = JSON.parse(localStorage.detailedimg)[i].input
        var subtotal = eval(price.slice(1)*quantity)
        $("#cart-table tbody").append(`<tr><td id="first-td"><div class='cart-info'><img src=${src}><div><p id="p">${name}</p><small>
        Price: ${price}</small><br><a href="cart.html" class="remove">Remove</a></div></div></td><td>${quantity}</td>
        <td>$${subtotal}</td></tr>`)
        sub+=subtotal
         $("#sub").text(`$${sub}`)
       $("#tax").text(`$${eval(Math.floor(sub*0.2))}`)
      var tax = $("#tax").text().slice(1)
      $("#totalprice").text(`$${parseInt(tax) + sub}`)

 
      

    }
    $("#orderbtn").on("click" , function(){
        alert(`your order = $${parseInt(tax) + sub} and it will arrive in 2 days`)
      localStorage.removeItem("detailedimg")
      location.href="cart.html"
    })

    
    $(".remove").each(function(){
        $(this).on("click" , function(){
            
           $(this).parent().parent().parent().parent().hide()
            var removedimg = $(this).parent().parent().children("img")[0].src
      
          var removedrow = JSON.parse(localStorage.detailedimg).findIndex(obj=>{
               return obj.src===removedimg
               
            })
            var arr= JSON.parse(localStorage.detailedimg)
            arr.splice(removedrow , 1)
            console.log()
             localStorage.setItem('detailedimg' , JSON.stringify(arr))

            
        })
    })
     
 })

