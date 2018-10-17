var defaultAddress="设为默认地址";
var address="默认地址";
 $(".setaddress").click(function () {
for(var i=0;i<$(".setaddress").length;i++){
 $(".setaddress").eq(i).removeClass("default");   
 $(".setaddress").eq(i).html(defaultAddress);    
     $(this).html(address);
     $(this).addClass("default");
     
       }
  })

