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
            if(i == 0){
                console.log("1p")
            }
            if(i == 1){
                console.log("2p");
                $('.circle_all').addClass('js_animation');
                $('.textBox').addClass('js_animation');

                $('.circle_all').removeClass('js_animation_re');
                $('.textBox').removeClass('js_animation_re');
                $("#main section").stop().fadeOut(6000);
                $("#main section").eq(i).stop().fadeIn(9000);
            }
            if(i == 2){
                console.log("3p");
            }
            if(i == 3){
                console.log("4p");
            }
        }else{
            if(i == 0){
                
            }else{
                i--;
            }
            $("#btn li").removeClass("on");
            $("#btn li").eq(i).addClass("on");
            $("#main section").stop().fadeOut();
            $("#main section").eq(i).stop().fadeIn();
            if(i == 0){
                // $('.circle_all').addClass('js_animation_re');
                // $('.textBox').addClass('js_animation_re');

                // $('.circle_all').removeClass('js_animation');
                // $('.textBox').removeClass('js_animation');
            }
        }
    });
    $(".top_btn").click(function(){
        i = $(".btn li.on").index(0);
        $("#btn li").removeClass("on");
        $("#btn li").eq(0).addClass("on");
        $("#main section").stop().fadeOut();
        $("#main section").eq(0).stop().fadeIn();
    });
});