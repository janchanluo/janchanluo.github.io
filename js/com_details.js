            var artwork=document.getElementsByClassName("goodsshow_artwork")[0];
            var artwork_show=document.getElementsByClassName("goodsshow_artwork_show")[0];
            var thumbnail=document.getElementsByClassName("goodsshow_thumbnail")[0];
            var Oli=thumbnail.getElementsByTagName("li");
            var Img=thumbnail.getElementsByTagName("img");

                for(var i=0;i<Oli.length;i++){
                    Oli[i].index=i;
                    Oli[i].onclick=function(){
                         artwork.setAttribute("_src",Img[this.index].getAttribute("src")); 
                        // console.log(artwork.getAttribute("_src"))        
             }
            }   
            function windowH() {  
                return  document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            }   /* 浏览器滚动条位置 */
			artwork.onmouseenter=function(){
				 if(!this.span){
				 	this.span=document.createElement("span");
				 	this.zoom=document.createElement("div");
				 	this.zoom.id="zoom";
				 		}          
				 	this.zoom.innerHTML='<img src="'+artwork.getAttribute('_src')+'" />';
	           	zoomx=this.offsetWidth+this.offsetLeft;
				 	zoomy=this.offsetTop;		 	
				 	this.appendChild(this.span);
                     artwork_show.appendChild(this.zoom);
				 	this.zoom.style.left=zoomx+"px";
				 	this.zoom.style.top=zoomy+"px";
			     	}
                 artwork.onmousemove=function(e){
				 	spanx=e.clientX-this.offsetLeft-70;
				 	spany=e.clientY-this.offsetTop-70+windowH();
                    //  console.log(document.documentElement.clientHeight)
				 	if(spanx<0){
                         spanx=0;
				 	}
				   if(spanx>this.offsetWidth-this.span.offsetWidth){
				   	spanx=this.offsetWidth-this.span.offsetWidth;
				   }
				    if(spany<0){spany=0;
				 }
				 if(spany>this.offsetHeight-this.span.offsetHeight-4){
				   	spany=this.offsetHeight-this.span.offsetHeight-4;
				  }
				this.span.style.left=spanx+"px";
				 this.span.style.top=spany+"px";
				 bigImgx=spanx/(this.offsetWidth-140)*(this.zoom.children[0].offsetWidth-this.zoom.offsetWidth);
			 bigImgy=spany/(this.offsetHeight-140)*(this.zoom.children[0].offsetHeight-this.zoom.offsetHeight);
			//   console.log(this.zoom.offsetHeight)
				 this.zoom.children[0].style.left=-bigImgx+"px";
				  this.zoom.children[0].style.top=-bigImgy+"px";
				
			}
            artwork.onmouseleave=function(){
			this.removeChild(this.span);
            artwork_show.removeChild(this.zoom)
            }
            
    $(document).ready(function () {
        var num=1; /* 选购商品数量 */
        var allGoods=parseInt($('.allGoods em').text()); /* 所有商品数量 */
        var nub=0;/* 商品轮播下标 */
        var distance=0;  /* 商品轮播移动距离 */
        var clickNum=Math.abs(parseInt($(".goodsshow_thumbnail").css("marginLeft"))/100); /* 商品轮播点击限制初始在中间位置*/
        var marginLeft=0;   /* 商品轮播初始位置 */
        var shopcartNum=0;  /* 购物车显示数量 */
        $(".comment-title li").click(function() {
             $(this).addClass("current").siblings().removeClass("current");
             $(".comment-title li strong").not('hover_bottom').removeClass()
             $(this).children("strong").addClass("hover_bottom");       
    })
    $('.details').click(function() {
        $('.comment_all').hide();
        $(".productInfo").show();
    })
    $('.customer_comments').click(function() {
        $('.productInfo').hide();
        $('.comment_all').show();
    })
    $('.spec').find('span').click(function(){
    
        if($(this).prop("class")==""){
            $(this).prop('class','bag_span').siblings().prop('class','');
        }else{
            $(this).prop('class','');
        }
    }) /*  产品详情客户评论切换页面 */

    $('.num').change(function () {
        num=$(this).val();
        if(num>allGoods){
            alert("超过当前最大库存!");
            num=1;
        }
       if(isNaN(Number($('.num').val()) )){
        num=1;
       $(this).val(num);
       }else{
        $('.num').val(num);
       }
    })
   $('.add').click(function () {
       ++num;
       if(num>allGoods){
            alert("超过当前最大库存!");
            num=1;
        }
       $('.num').val(num);
    })
    $('.reduce').click(function () {
       --num;
       if(num<=0){
           num=1;
       }
       $('.num').val(num);
    })  /* 商品数量改变页 */
$(".goodsshow_thumbnail li").click(function () {
    $(this).css({"border":" 2px solid #b40303"}).siblings().css("border","2px solid #fff");
  })
$('.goodsshow_thumbnail li').find('img').click(function(){
    var Src=$(this).prop("src");
    $('.goodsshow_artwork img').prop("src",Src)
})    
//   $('.changeleft').click

$('.choosenum .num').keydown(function (e) { 
    code=e.keyCode;
    if((code>57 || code<48) && (code>105 || code<96) && code!=8 && code!=116 && code!=13){
        return false;
    }
 })  /* 控制输入框 */

 if(isNaN(parseInt($(".goodsshow_thumbnail").css("marginLeft")))){
    marginLeft=0;
 }else{
    marginLeft=parseInt($(".goodsshow_thumbnail").css("marginLeft"))
 }

// console.log(marginLeft,parseInt($(".goodsshow_thumbnail").css("marginLeft")));

 $(".changeleft").click(function () {
     if(!(clickNum>=$(".goodsshow_thumbnail li").length-4)){
        distance=distance-100+marginLeft;
       clickNum++;
       marginLeft=0;
        $(".goodsshow_thumbnail").css("margin-left",distance);
     }
   })

   $(".changeright").click(function () {
     if(!(clickNum<=0)){
        distance=distance+100+marginLeft;
        $(".goodsshow_thumbnail").css("margin-left",distance);
        clickNum--;
        marginLeft=0;
     }
   })
   $(".goCar").click(function () {
      shopcartNum++;
       var oldshopcartNum= $(".shopcartNum").html();
       $(".shopcartNum").html(Number(oldshopcartNum)+shopcartNum);
      var ocat= confirm("添加成功，点击前往购物车");
       if(ocat){
        location.href="../shop_cart.html";
       }
     })
     
    var lis=$(".comment_right").find("li");
      lis.each(function (i,el) {
       $(el).click(function () {
           $(this).toggleClass("choose");
         })
        })
     })