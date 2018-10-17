
$(".classifycontent").each(function (i,el) {  
    var  dls=$(el).find("dl");
    dls.mouseenter(function () {
        var _this=$(this).index();
        dls.eq($(this).index()).each(function (k,el) {
            var a=$(el).find("dd");
        //  console.log(a)
            a.click(function () {
           
                for(var i=0;i<a.children("a").length;i++){
                    if(a.children("a").eq(i).prop("class")=="current"){
                        a.children("a").eq(i).removeClass("current");
                    }        
                }
                 $(this).children("a").toggleClass("current");
                 $(".mychoose").find("a").eq(_this).html($(this).children("a").html())
              })
          })
      })
    //   dls.mouseleave(function () {
    //     dls =null;
    //   })

})
$(".restart").click(function () {
    for(var i=0;i<$(".classifycontent").find("a").length;i++){
        $(".classifycontent").find("a").eq(i).removeClass("current");    
        $(".mychoose").html('   <p>我的筛选：<a href="javascript:;" >未选择</a>><a href="javascript:;">未选择</a>><a href="javascript:;">未选择</a>><a href="javascript:;"> 未选择</a>><a href="javascript:;">未选择</a>><a href="javascript:;">未选择</a></p><div class="restart"><a href="javascript:;"><span></span>重置</a>  </div>') 
    }
  })

  $(".list-title ul li").click(function () {
      $(this).addClass("current").siblings().removeClass("current");
    })

