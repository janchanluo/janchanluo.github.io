
var inputNum=null;  /* 当前选择的交易密码输入框 */
$(".payuse li").click(function(){
    var inputs=$(".payway").find("input");
    var divs=$(".payway").find(".checkbox_choose");
    $(this).find("input").attr("checked","checked");
         for(var i=0;i<inputs.length;i++){
             if(inputs.eq(i).attr("checked")){
                $(divs).eq(i).addClass("checked"); 
             }else{
                $(divs).eq(i).removeClass("checked"); 
             }  
         }
})
      $('.pay_password input').keydown(function (e) {  
        code=e.keyCode;
if((code>57 || code<48) && (code>105 || code<96) && code!=8 && code!=116 && code!=13){
    return false;
}
})
for(var i=0;i< $('.pay_password input').length;i++){
$('.pay_password input').eq(i).keyup(function (e) {  
          if($(this).val()){
            inputNum =  $(this).index()+1;
            $('.pay_password input').eq(inputNum).focus();
          }
          if(e.keyCode==8){
            inputNum =  $(this).index()-1;
            if(inputNum<0){
                inputNum=0;
               }
            //    console.log(inputNum)
            $('.pay_password input').eq(inputNum).focus();
          }
})

    }

function pay(){
    var sure=confirm("确认提交订单？");
    if(sure){
        $("form").prop("action","pay_success.html");
    }else{
        $("form").prop("action","pay_failure.html");
    }
}
