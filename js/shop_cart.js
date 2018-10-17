
$(document).ready(function () {
    var num=0;              /* 判断单选框选中个数 */
    var number=1;          /* 商品数量 */
    var price=0;            /* 行总价 */
    var priceSum=0;          /* 总价 */
    var all=0   /* 是否全選 */;
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
$('.num input').keydown(function (e) { 
    code=e.keyCode;
    if((code>57 || code<48) && (code>105 || code<96) && code!=8 && code!=116 && code!=13){
        return false;
    }
    // console.log(e.keyCode)
 })
    $('.num input').change(function(){
        if($(this).val()<=0){
            number=1;
            $(this).val(1);
        }
        else if(isNaN(Number($(this).val()))){
            $(this).val(1);
            number=1;
            nowPrice();  /* 获取目前选中的商品的价格 */
           priceEnd();
        }else{
            number=$(this).val();
            nowPrice();  /* 获取目前选中的商品的价格 */
           priceEnd();
        }
        price=Number($(this).parents("tr").find(".price span").html())*Number($(this).parents("tr").find("input[type=text]").val());
        // console.log($(this).parents("tr").find("input[type=text]").val(),$(this).parents("tr").find(".price").html())
    $(this).parents("tr").find(".line_price").html("￥"+returnFloat(price));
    })          /* 自定义输入商品数量 */
// function priceAdd(obj) { 
//     price=$(obj).parents('tr').children('.price').children('span').text();
//        return  priceSum+=price*number;
//  }           /* 價格增加 */

//  function priceReduce(obj) { 
//     price=$(obj).parents('tr').children('.price').children('span').text();
//     return  priceSum-=price*number;
//  }           /* 價格減少 */     
function nowPrice(){
    priceSum=0;
    number=0;
    for(var i=0;i<$(".checkbox").length;i++){
                    if( $(".checkbox input").eq(i).prop('checked')){
                        priceSum+=$('.num input').eq(i).val()*$('.price span').eq(i).text();
                        number+=Number($('.num input').eq(i).val()) ;
                    } 
           
            }  /* 获取目前选中的商品的价格 */
          
            return priceSum;
}
function priceEnd() { 
    $('.priceSum span').text(returnFloat(priceSum)) /* 價格總計 */
        $('.goodsNum').children('span').text(number);   /* 已选商品数量 */

 }
    $(".checkbox").click(function(){
        priceSum=0;
        nowPrice();  /* 获取目前选中的商品的价格 */
        if( $(this).children('span').prop('class')){
            $(this).children('span').removeClass();
            num--;
        }else{
            $(this).children('span').addClass('shop_cart_choose');
           num++;
        }
        priceEnd();
        if(number==$(".checkbox").length){
            $('.qxInput').children('span').addClass('shop_cart_choose');
        }else{
            $('.qxInput').children('span').removeClass();
        } 
    })                             /* 单选 */
    $('.qx').click(function(){
        priceSum=0;
        number=$(this).prev().val();
        if( $('.qxInput').children('span').prop('class')){
            $(".checkbox").children('span').removeClass();
            $(".checkbox").children('input').prop('checked',false);
            $('.qxInput').children('span').removeClass();
            priceEnd();
        }else{
            $(".checkbox").children('span').addClass('shop_cart_choose');
            $('.qxInput').children('span').addClass('shop_cart_choose');
            $(".checkbox").children('input').prop('checked',true);
 
        }
        nowPrice();  /* 获取目前选中的商品的价格 */
         priceEnd();
        // console.log( num)
    })                     /* 全选 */
    $('.add').click(function () {
        priceSum=0;
        number= $(this).prev().val();         /* 获取当前输入框的val */
        ++number;
     $(this).prev().val(number);
        nowPrice();  /* 获取目前选中的商品的价格 */
         priceEnd();
         price=Number($(this).parents("tr").find(".price span").html())*Number($(this).parents("tr").find("input[type=text]").val());
         // console.log($(this).parents("tr").find("input[type=text]").val(),$(this).parents("tr").find(".price").html())
     $(this).parents("tr").find(".line_price").html("￥"+returnFloat(price));
      })
      $('.reduce').click(function () {
          priceSum=0;
        number= $(this).next().val();
        --number;
        if(number<=0){
            number=1;
        }else{
            $(this).next().val(number);
        }
         nowPrice();  /* 获取目前选中的商品的价格 */
         priceEnd();
         price=Number($(this).parents("tr").find(".price span").html())*Number($(this).parents("tr").find("input[type=text]").val());
         // console.log($(this).parents("tr").find("input[type=text]").val(),$(this).parents("tr").find(".price").html())
     $(this).parents("tr").find(".line_price").html("￥"+returnFloat(price));
      })                 /* + -商品个数 */

      $('.del').click(function(){
        priceSum=0;
         $(this).parent('tr').remove();
         nowPrice();  /* 获取目前选中的商品的价格 */
         priceEnd();
         if(number==$(".checkbox").length){
            $('.qxInput').children('span').addClass('shop_cart_choose');
        }else{
            $('.qxInput').children('span').removeClass();
        } 
      })         /* 删除 */
      $('.delAll').click(function(){
        priceSum=0;
         $('.shop-list-goods>tr').remove();
         nowPrice();  /* 获取目前选中的商品的价格 */
         priceEnd();
      })     
// $('.price').html()
})
