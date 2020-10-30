 
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

    var loginform = $("#loginform")
    var regform = $("#regform")
    var loginbtn = $("#loginbtn")
    var regbtn = $("#regbtn")
    var indicator = $ ("#indicator")
    
    regbtn.on("click" , function(){
        regform.css("transform" , "translateX(0px)")
        loginform.css("transform" , "translateX(0px)")
        indicator.css("transform" , "translateX(100px)")
    
    })
    loginbtn.on("click" , function(){
        regform.css("transform" , "translateX(300px)")
        loginform.css("transform" , "translateX(300px)")
        indicator.css("transform" , "translateX(0px)")
    
    
    })
    
    regform.on("submit" , function(e){
        
        e.preventDefault()
           
            var username = $("#regform input[type='text']").val()
             var email = $("#regform input[type='email']").val()
             var password = $("#regform input[type='password']").val()
             var obj = {"username" : username , "email" : email , "password" : password}
             let sessionobj ={}
             let sessionarr =[]
             if(localStorage.getItem("user")){
             let arr = JSON.parse(localStorage.getItem("user"))
             for(var i =0 ; i< arr.length ; i++){
                if(username == arr[i].username ){
                        alert("User name is already exist")
                         regform.css("transform" , "translateX(300px)")
                         loginform.css("transform" , "translateX(300px)")
                         indicator.css("transform" , "translateX(0px)")
                         break;
                
                }
                else if (email ==arr[i].email){
                    alert("email is already exist")
                    regform.css("transform" , "translateX(300px)")
                    loginform.css("transform" , "translateX(300px)")
                    indicator.css("transform" , "translateX(0px)")
                    break;
                }
                else {
                         arr.push(obj)
                         localStorage.setItem("user" , JSON.stringify(arr))
                         sessionobj ={"username" : username , "password" : password}
                         sessionarr.push(sessionobj)
                         sessionStorage.setItem("username" , JSON.stringify(sessionarr))
                         e.preventDefault()
                        //  location.href="./index.html"
                        history.go(-1)
                    break;
                }
                
         
             }
            }
             else {
                 e.preventDefault()
                 let arr =[]
                 arr.push(obj)
                 localStorage.setItem("user" , JSON.stringify(arr))
                 sessionobj ={"username" : username , "password" : password}
                //  sessionarr.push(sessionobj)
                 sessionStorage.setItem("username" , JSON.stringify(sessionobj))
                 history.go(-1)
                //  regform.css("transform" , "translateX(300px)")
                //  loginform.css("transform" , "translateX(300px)")
                //  indicator.css("transform" , "translateX(0px)")
                //  location.href="./index.html"
                
         
             }
            
         
         
    })
    
    
    $("#loginsubmit").on("click" ,function(e){
    
        // e.preventDefault()
        var username = $("#loginform input[type='text']").val()
         var password = $("#loginform input[type='password']").val()
    
    let arr = JSON.parse(localStorage.getItem("user"))
    let sessionobj ={}
    let sessionarr =[]
    if (arr){
    for(var i =0 ; i< arr.length ; i++){
        if(username == arr[i].username && password ==arr[i].password){
           sessionobj ={"username" : username , "password" : password}
           sessionarr.push(sessionobj)
           sessionStorage.setItem("username" , JSON.stringify(sessionarr))
      
        // e.preventDefault()
         history.go(-1)
         
            break ; 
        }
       
        else if(username != arr[i].username){
            alert("The user with this username is not exist")
            break;
        }
        else if (password !=arr[i].password){
            alert("the password is wrong")
            break;
        }
    }
}
else {
    alert("The user with this username is not exist")
}
    
    })
    
    
})
