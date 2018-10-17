$(document).ready(function () { 
$('.comment p').each(function(i,el){
        var spans = $(el).find('span');
        var num=null;/* 当前点击的span的下标 */
        spans.mouseenter(function(){
            var index = $(this).index();
            spans.each(function(k,el){
                if(k<= index){
                    $(el).addClass('starred');
                }else{
                    $(el).removeClass('starred');
                }
            })
        })
        spans.mouseleave(function(){
            console.log(num)
            var index = $(this).index();
            spans.each(function(k,el){
                    $(el).removeClass('starred');
                    if(k<=num && num!=null){   
                        $(el).addClass('starred');
                    }
            })       
        })  
        spans.click(function () {
             num = $(this).index();
            spans.each(function(j,el){
                if(j<= num){
                    $(el).addClass('starred');
                }else{
                    $(el).removeClass('starred');
                }
        })
          })
})
          $(".do").click(function(){
            for(var i=0;i<=$(".inputChoose").length;i++){
            if(!($(".do").eq(i).find("input").attr("checked"))){
                $(".do").eq(i).removeClass("checked");
                $(".do").eq(i).addClass("inputChoose");
            }  
              }
                $(this).addClass("checked");
                $(this).removeClass("inputChoose");
     
        })   
        
  
  

 $(".textarea textarea").change(function () {
     if(($("textarea")[0].scrollHeight-12)>$(this).height()){  //12是padding
         $(".txtnum").hide();
     }else{
        $(".txtnum").show();
     }
   })
   $(".textarea textarea").keydown(function () {
    if(($("textarea")[0].scrollHeight-12)>$(this).height()){  //12是padding
        $(".txtnum").hide();
    }else{
       $(".txtnum").show();
    }
   
  })
 })
