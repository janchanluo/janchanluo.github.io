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
})