$(document).ready(function(){
    var i = $("#btn li.on").index(); //0
    // console.log(i);
    var value = 0;

    $("#btn li").click(function(){
        i = $(this).index();

        $("#btn li").removeClass("on");
        $("#btn li").eq(i).addClass("on");
        $("#main section").css({'opacity':'0','transition':'all 0.5s'});
        $("#main section").eq(i).css({'opacity':'1','transition':'all 0.5s'});

        if(i > 1){
            $('.top_btn').addClass('on');
        }else{
            $('.top_btn').removeClass('on');
        }

        // 슬라이드 if 위치 따른 모션 넣어야 함.
        if(i == 0){
            $('.circle_all').addClass('js_animation_re');
            $('.textBox').addClass('js_animation_re');

            $('.circle_all').removeClass('js_animation');
            $('.textBox').removeClass('js_animation');

            $('#header').removeClass('logo_active');
        }
        if( i == 1 ){
            $('#section2').addClass('sec2_ani_start');
            $('#header').removeClass('logo_active');
        }
        if(i == 2){
            $('.ani_box').addClass('on');
            $('.circle1').addClass('on');
            $('.circle2').addClass('on');
            $('.move_circle').addClass('on');
            $('.cnt3_box').addClass('on');
        }
        if( i == 3){
            $('.cha_body').addClass('on');
            $('.cha_head').addClass('on');
            $('.cha_hair').addClass('on');
            $('.bottom_l').addClass('on');
            $('.bottom_r').addClass('on');
            $('.lt_box').addClass('on');
            $('.rt_box').addClass('on');
            $('.motxt_1').addClass('on');
            $('.motxt_2').addClass('on');
            $('.motxt_3').addClass('on');
            $('.motxt_4').addClass('on');
            $('.motxt_5').addClass('on');
            $('.motxt_6').addClass('on');
            $('.cnt_box').addClass('on');
        }

    });

    // 네비게이션
    function navi_start(){
        // console.log("네비 스타트");
        for(let k=0; k<4; k++){
            $('#modal .container ul li').eq(k).on({
                click: function(e){
                    e.preventDefault();
                    i = k;
                    value = 1;
                    $("#btn li").removeClass("on");
                    $("#btn li").eq(k).addClass("on");
                    $("#main section").css({'opacity':'0','transition':'all 0.5s'});
                    $('#main section').eq(k).css({'opacity':1});
                }
            });

            if( k==0){
                $('#modal .container ul li').eq(k).on({
                    click: function(e){
                        e.preventDefault();
                        $('.circle_all').addClass('js_animation_re');
                        $('.textBox').addClass('js_animation_re');

                        $('.circle_all').removeClass('js_animation');
                        $('.textBox').removeClass('js_animation');

                        $('#header').removeClass('logo_active');
                        $('.top_btn').removeClass('on');
                    }
                });
            }
            else if( k==1){
                $('#modal .container ul li').eq(k).on({
                    click: function(){
                        $('#section2').addClass('sec2_ani_start');
                        $('#header').removeClass('logo_active');
                        $('.top_btn').removeClass('on');
                    }
                });
            }
            else if( k==2 ){
                $('#modal .container ul li').eq(k).on({
                    click: function(){
                        $('#header').addClass('logo_active');
                        $('.top_btn').addClass('on');
                        $('.ani_box').addClass('on');
                        $('.circle1').addClass('on');
                        $('.circle2').addClass('on');
                        $('.move_circle').addClass('on');
                        $('.cnt3_box').addClass('on');
                    }
                });
                
            }
            else if( k==3 ){
                $('#modal .container ul li').eq(k).on({
                    click: function(){
                        $('#header').removeClass('logo_active');
                        $('.top_btn').addClass('on');
                        $('.cha_body').addClass('on');
                        $('.cha_head').addClass('on');
                        $('.cha_hair').addClass('on');
                        $('.bottom_l').addClass('on');
                        $('.bottom_r').addClass('on');
                        $('.lt_box').addClass('on');
                        $('.rt_box').addClass('on');
                        $('.motxt_1').addClass('on');
                        $('.motxt_2').addClass('on');
                        $('.motxt_3').addClass('on');
                        $('.motxt_4').addClass('on');
                        $('.motxt_5').addClass('on');
                        $('.motxt_6').addClass('on');  
                        $('.cnt_box').addClass('on');
                    }
                });
            }
        }
    }

    navi_start();


    $(window).on("wheel",function(e){

        // 스크롤 내릴 때
        if(e.originalEvent.deltaY > 0){
            if(i == 3){

            }else{
                i++;
            }
            $("#btn li").removeClass("on");
            $("#btn li").eq(i).addClass("on");
            $("#main section").css({'opacity':'0','transition':'all 0.5s'});
            $("#main section").eq(i).css({'opacity':'1','transition':'all 0.5s'});

            if(i == 0){

            }
            if(i == 1){
                // 1p 끝
                $('.circle_all').addClass('js_animation');
                $('.textBox').addClass('js_animation');

                $('.circle_all').removeClass('js_animation_re');
                $('.textBox').removeClass('js_animation_re');

                $("#main section").css({'opacity':'0','transition':'all 0.5s','transition-delay':'0s'});
                $("#main section").eq(i).css({'opacity':'1','transition':'all 0.5s','transition-delay':'0s'});

                // 2p 시작
                setTimeout(() => {
                    if($("#section2").hasClass("sec2_ani_start") === false) {
                        $('#section2').addClass('sec2_ani_start');
                    }
                }, 1000);
                // 헤더 흰색 로고 제거
                $('#header').removeClass('logo_active');

                value = 1;
            }
            if(i == 2){
                $('#header').addClass('logo_active');
                $('.top_btn').addClass('on');
                $('.ani_box').addClass('on');
                $('.circle1').addClass('on');
                $('.circle2').addClass('on');
                $('.move_circle').addClass('on');
                $('.cnt3_box').addClass('on');
            }
            if(i == 3){
                $('#header').removeClass('logo_active');
                $('.cha_body').addClass('on');
                $('.cha_head').addClass('on');
                $('.cha_hair').addClass('on');
                $('.bottom_l').addClass('on');
                $('.bottom_r').addClass('on');
                $('.lt_box').addClass('on');
                $('.rt_box').addClass('on');
                $('.motxt_1').addClass('on');
                $('.motxt_2').addClass('on');
                $('.motxt_3').addClass('on');
                $('.motxt_4').addClass('on');
                $('.motxt_5').addClass('on');
                $('.motxt_6').addClass('on');  
                $('.cnt_box').addClass('on');
            }

        // 스크롤 올릴 때
        }else{
            if(i == 0){

            }else{
                i--;
            }
            $("#btn li").removeClass("on");
            $("#btn li").eq(i).addClass("on");
            $("#main section").css('opacity','0');
            $("#main section").eq(i).css('opacity','1');

            if(i == 0 && value == 1){
                $('.circle_all').addClass('js_animation_re');
                $('.textBox').addClass('js_animation_re');

                $('.circle_all').removeClass('js_animation');
                $('.textBox').removeClass('js_animation');

                $('#header').removeClass('logo_active');
            }
            else if (i == 1){
                if($("#section2").hasClass("sec2_ani_start") === false) {
                    $('#section2').addClass('sec2_ani_start');
                }
                $('#header').removeClass('logo_active');
                $('.top_btn').removeClass('on');
            }
            else if (i == 2){
                $('#header').addClass('logo_active');
                $('.ani_box').addClass('on');
                $('.circle1').addClass('on');
                $('.circle2').addClass('on');
                $('.move_circle').addClass('on');
                $('.cnt3_box').addClass('on');
            }
        }

        navi_start();

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