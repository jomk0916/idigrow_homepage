$(document).ready(function(){
    var i = $(".btn li.on").index() + 1; //0
    // console.log(i);
    var value = 0;

    $(window).on("wheel",function(e){
        // console.log(e.originalEvent.deltaY);

        if(e.originalEvent.deltaY > 0){
            if(i == 3){

            }else{
                i++;

            }
            $("#btn li").removeClass("on");
            $("#btn li").eq(i).addClass("on");
            // $("#main section").stop().fadeOut();
            $("#main section").css('opacity','0');
            // $("#main section").eq(i).stop().fadeIn();
            $("#main section").eq(i).css('opacity','1');
            if(i == 0){
                console.log("1p");
            }
            if(i == 1){
                // 1p 끝
                $('.circle_all').addClass('js_animation');
                $('.textBox').addClass('js_animation');

                $('.circle_all').removeClass('js_animation_re');
                $('.textBox').removeClass('js_animation_re');

                // $("#main section").stop().fadeOut(6000);
                $("#main section").css('opacity','0');
                // $("#main section").eq(i).stop().fadeIn(9000);
                $("#main section").eq(i).css('opacity','1');
                // 2p 시작

                if($("#section2").hasClass("sec2_ani_start") === false) {
                    $('#section2').addClass('sec2_ani_start');
                }
                value = 1;
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
            // $("#main section").stop().fadeOut();
            $("#main section").css('opacity','0');
            // $("#main section").eq(i).stop().fadeIn();
            $("#main section").eq(i).css('opacity','1');
            if(i == 0 && value == 1){
                $('.circle_all').addClass('js_animation_re');
                $('.textBox').addClass('js_animation_re');

                $('.circle_all').removeClass('js_animation');
                $('.textBox').removeClass('js_animation');
            }
            else if (i == 1){

            }
        }
    });
    $(".top_btn").click(function(){
        i = $(".btn li.on").index() + 1;
        $("#btn li").removeClass("on");
        $("#btn li").eq(0).addClass("on");
        $("#main section").css('opacity','0');
        $("#main section").eq(0).css('opacity','1');

        $('.circle_all').addClass('js_animation_re');
        $('.textBox').addClass('js_animation_re');
        $('.circle_all').removeClass('js_animation');
        $('.textBox').removeClass('js_animation');
    });
});