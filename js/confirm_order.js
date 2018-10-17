function returnFloat(value){
    var value=Math.round(parseFloat(value)*100)/100;
    var xsd=value.toString().split(".");
  if(xsd.length==1){
 value=value.toString()+".00";
 return value;
 }
 if(xsd.length>1){
 if(xsd[1].length<2){
 value=value.toString()+"0";
 }
 return value;
 }
} /* 取有效数字 */
    $(document).ready(function () { 
        var num=0; //商品数量
        var price=0; //总价
        var linePrice=0; //行总价
        $(".address ul").click(function(){
        if(!$(this).prop("class")){
            $(this).addClass("hoversquer").siblings().removeClass();
        }else{
            $(this).removeClass("hoversquer").siblings().removeClass();
        }
    })
    function goods(){
        for(var i=0;i<$(".num").length;i++){
            num+=Number($(".num").eq(i).html());
            price+=Number($(".num").eq(i).html())*Number($(".price").eq(i).html());
        }
    }  //封装商品数量及价格函数
 for(var j=0;j<$(".num").length;j++){
    linePrice=Number($(".num").eq(j).html())*Number($(".unitPrice").eq(j).html());
    $(".price").eq(j).html(returnFloat(linePrice))
 }
     goods();
         $(".goodsNum").html(num);
         $(".goodsPrice").html(returnFloat(price))
         $(".del").click(function(){
             num=0;
             price=0;
             $(this).parents("tr").remove();
             goods();
             $(".goodsNum").html(num);
         $(".goodsPrice").html(returnFloat(price))
         
         })
     })
