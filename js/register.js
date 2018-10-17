$.idcode.setCode();
$("#btns").click(function (){
    var IsBy = $.idcode.validateCode(); 
    alert(IsBy);
    console.log(IsBy);
});

$(document).ready(function(){
    $("#username").blur(function () {
        if(!$(this).val()){
            $(".message_user").css("opacity",1)
      }else{
        $(".message_user").css("opacity",0);
      }
 })
 $("#pw").blur(function () {
        if(!$(this).val()){
            $(".message_pw").css("opacity",1)
      }else{
        $(".message_pw").css("opacity",0);
      }
 })
 $("#checkPw").blur(function () {
        if(!$(this).val()){
            $(".message_checkPw").css("opacity",1)
      }else{
        $(".message_checkPw").css("opacity",0);
      }
 })
 $("#email").blur(function () {
        if(!$(this).val()){
            $(".message_email").css("opacity",1)
      }else{
        $(".message_email").css("opacity",0);
      }
 })
 $("#phone").blur(function () {
        if(!$(this).val()){
            $(".message_phone").css("opacity",1)
      }else{
        $(".message_phone").css("opacity",0);
      }
 })    /* 表单验证 */

     $(".checkbox input").click(function () {
    if($(this).attr("checked")){
        $("#choose").prop("class","shop_cart_choose");
    }else{
        $("#choose").prop("class","");
    }
  })  
})   /* 隐私政策复选框效果 */
