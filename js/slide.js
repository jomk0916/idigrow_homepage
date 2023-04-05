$(document).ready(function(){
    var i = $(".btn li.on").index();
    $(window).on("wheel",function(e){
        console.log(e.originalEvent.deltaY);

        if(e.originalEvent.deltaY > 0){
            if(i == 3){
            }else{
                i++;
            }
            $("#btn li").removeClass("on");
            $("#btn li").eq(i).addClass("on");
            $("#main section").stop().fadeOut();
            $("#main section").eq(i).stop().fadeIn();
        }else{
            if(i == 0){
                
            }else{
                i--;
            }
            $("#btn li").removeClass("on");
            $("#btn li").eq(i).addClass("on");
            $("#main section").stop().fadeOut();
            $("#main section").eq(i).stop().fadeIn();
        }
    });
});