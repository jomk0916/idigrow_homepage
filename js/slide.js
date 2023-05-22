let sec2_soundEffect = '';


$(document).ready(function(){
    var i = $("#btn li.on").index(); //0
    var value = 0;

    // 2p 모션 최적화
    function sec2_optimi(){
        setTimeout(function(){
            $('#circle_g_sec2 .sec2_circle').slice(1).css('display','none');
        }, 5000);
    }

    // 우측 점 네비게이션
    $("#btn li").click(function(){
        playSound(next);
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
            // 2p 효과음 정지
            sec2_soundEffect_stop();

            $('#section2').removeClass('sec2_ani_re');

            $('.circle_all').addClass('js_animation_re');
            $('.textBox').addClass('js_animation_re');

            $('.circle_all').removeClass('js_animation');
            $('.textBox').removeClass('js_animation');

            $('#header').removeClass('logo_active');
            $('#header').removeClass('logo_active_3p');
            //3p 모션 제거 시작
            $('.ani_box').removeClass('on');
            $('.circle1').removeClass('on');
            $('.circle2').removeClass('on');
            $('.circle3').removeClass('on');
            $('.move_circle').removeClass('on');
            $('.cnt3_box').removeClass('on');
            //3p 모션 제거 끝
            //3p 올라갈때 모션 제거 시작
            $('.move_circle').removeClass('up');
            $('.ani_box').removeClass('up');
            $('.circle1').removeClass('up');
            $('.circle2').removeClass('up');
            $('.circle3').removeClass('up');
            $('.cnt3_box').removeClass('up');
            //3p 올라갈때 모션 제거 끝
            //4p 모션 제거 시작
            $('.move4_circle').removeClass('on');
            $('.cnt_box').removeClass('on');
            $('.bg_box').removeClass('on');
            //4p 모션 제거 끝
        }
        if( i == 1 ){
            // 1p 효과음 정지
            sec1_soundEffect_stop();

            // 2p
            if($("#section2").hasClass("sec2_ani_start") === false) {
                $('#section2').addClass('sec2_ani_start');
                sec2_optimi();
                // 2p 효과음 시작
                sec2_soundEffect_start();
            }
            else {
                $('#section2').addClass('sec2_ani_re');
            }

            $('#header').removeClass('logo_active');
            $('#header').removeClass('logo_active_3p');
            //3p 모션 제거 시작
            $('.ani_box').removeClass('on');
            $('.circle1').removeClass('on');
            $('.circle2').removeClass('on');
            $('.circle3').removeClass('on');
            $('.move_circle').removeClass('on');
            $('.cnt3_box').removeClass('on');
            //3p 모션 제거 끝
            //3p 올라갈때 모션 제거 시작
            $('.move_circle').removeClass('up');
            $('.ani_box').removeClass('up');
            $('.circle1').removeClass('up');
            $('.circle2').removeClass('up');
            $('.circle3').removeClass('up');
            $('.cnt3_box').removeClass('up');
            //3p 올라갈때 모션 제거 끝
            //4p 모션 제거 시작
            $('.move4_circle').removeClass('on');
            $('.cnt_box').removeClass('on');
            $('.bg_box').removeClass('on');
            //4p 모션 제거 끝
        }
        if(i == 2){
            $('#section2').removeClass('sec2_ani_re');
            $('.ani_box').addClass('on');
            $('.circle1').addClass('on');
            $('.circle2').addClass('on');
            $('.circle3').addClass('on');
            $('.move_circle').addClass('on');
            $('.cnt3_box').addClass('on');
            // 로고 화이트 변경
            $('#header').addClass('logo_active');
            $('#header').addClass('logo_active_3p');
            //4p 모션 제거 시작
            $('.move4_circle').removeClass('on');
            $('.cnt_box').removeClass('on');
            $('.bg_box').removeClass('on');
            //4p 모션 제거 끝
        }
        if( i == 3){
            $('#header').removeClass('logo_active');
            $('#header').removeClass('logo_active_3p');
            $('.move4_circle').addClass('on');
            $('#section2').removeClass('sec2_ani_re');
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
            $('.bg_box').addClass('on');
            //3p 모션 제거 시작
            $('.ani_box').removeClass('on');
            $('.circle1').removeClass('on');
            $('.circle2').removeClass('on');
            $('.circle3').removeClass('on');
            $('.move_circle').removeClass('on');
            $('.cnt3_box').removeClass('on');
            //3p 모션 제거 끝
            //3p 올라갈때 모션 제거 시작
            $('.move_circle').removeClass('up');
            $('.ani_box').removeClass('up');
            $('.circle1').removeClass('up');
            $('.circle2').removeClass('up');
            $('.circle3').removeClass('up');
            $('.cnt3_box').removeClass('up');
            //3p 올라갈때 모션 제거 끝
        }

    });

    // 햄버거 네비게이션
    $('.ham').click(function(){
        $('.top_btn').removeClass("on");
    });
    function navi_start(){
        for(let k=0; k<4; k++){
            $('#modal .container ul li').eq(k).on({
                click: function(e){
                    playSound(next);
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
                        // 1p
                        $('.circle_all').addClass('js_animation_re');
                        $('.textBox').addClass('js_animation_re');

                        $('.circle_all').removeClass('js_animation');
                        $('.textBox').removeClass('js_animation');

                        $('#header').removeClass('logo_active');
                        $('#header').removeClass('logo_active_3p');
                        $('.top_btn').removeClass('on');

                        // 2p 효과음 정지
                        sec2_soundEffect_stop();

                        //3p 모션 제거 시작
                        $('.ani_box').removeClass('on');
                        $('.circle1').removeClass('on');
                        $('.circle2').removeClass('on');
                        $('.circle3').removeClass('on');
                        $('.move_circle').removeClass('on');
                        $('.cnt3_box').removeClass('on');
                        //3p 모션 제거 끝
                        //3p 올라갈때 모션 제거 시작
                        $('.move_circle').removeClass('up');
                        $('.ani_box').removeClass('up');
                        $('.circle1').removeClass('up');
                        $('.circle2').removeClass('up');
                        $('.circle3').removeClass('up');
                        $('.cnt3_box').removeClass('up');
                        //3p 올라갈때 모션 제거 끝
                        //4p 모션 제거 시작
                        $('.move4_circle').removeClass('on');
                        $('.cnt_box').removeClass('on');
                        $('.bg_box').removeClass('on');
                        //4p 모션 제거 끝

                        $('#section2').removeClass('sec2_ani_re');
                    }
                });
            }
            else if( k==1){
                $('#modal .container ul li').eq(k).on({
                    click: function(){
                        //1p 효과음 정지
                        sec1_soundEffect_stop();

                        // 2p
                        if($("#section2").hasClass("sec2_ani_start") === false) {
                            $('#section2').addClass('sec2_ani_start');
                            sec2_optimi();
                            // 2p 효과음 시작
                            sec2_soundEffect_start();
                        }
                        else {
                            $('#section2').addClass('sec2_ani_re');
                        }


                        $('#header').removeClass('logo_active');
                        $('#header').removeClass('logo_active_3p');
                        $('.top_btn').removeClass('on');
                        //3p 모션 제거 시작
                        $('.ani_box').removeClass('on');
                        $('.circle1').removeClass('on');
                        $('.circle2').removeClass('on');
                        $('.circle3').removeClass('on');
                        $('.move_circle').removeClass('on');
                        $('.cnt3_box').removeClass('on');
                        //3p 모션 제거 끝
                        //3p 올라갈때 모션 제거 시작
                        $('.move_circle').removeClass('up');
                        $('.ani_box').removeClass('up');
                        $('.circle1').removeClass('up');
                        $('.circle2').removeClass('up');
                        $('.circle3').removeClass('up');
                        $('.cnt3_box').removeClass('up');
                        //3p 올라갈때 모션 제거 끝
                        //4p 모션 제거 시작
                        $('.move4_circle').removeClass('on');
                        $('.cnt_box').removeClass('on');
                        $('.bg_box').removeClass('on');
                        //4p 모션 제거 끝
                    }
                });
            }
            else if( k==2 ){
                $('#modal .container ul li').eq(k).on({
                    click: function(){
                        $('#header').addClass('logo_active');
                        $('#header').addClass('logo_active_3p');
                        $('.top_btn').addClass('on');
                        $('.ani_box').addClass('on');
                        $('.circle1').addClass('on');
                        $('.circle2').addClass('on');
                        $('.circle3').addClass('on');
                        $('.move_circle').addClass('on');
                        $('.cnt3_box').addClass('on');
                        //4p 모션 제거 시작
                        $('.move4_circle').removeClass('on');
                        $('.cnt_box').removeClass('on');
                        $('.bg_box').removeClass('on');
                        //4p 모션 제거 끝
                        $('#section2').removeClass('sec2_ani_re');
                    }
                });

            }
            else if( k==3 ){
                $('#modal .container ul li').eq(k).on({
                    click: function(){
                        $('#header').removeClass('logo_active');
                        $('#header').removeClass('logo_active_3p');
                        $('#section2').removeClass('sec2_ani_re');
                        $('.top_btn').addClass('on');
                        $('.move4_circle').addClass('on');
                        $('.cnt_box').addClass('on');
                        $('.bg_box').addClass('on');
                        //3p 모션 제거 시작
                        $('.ani_box').removeClass('on');
                        $('.circle1').removeClass('on');
                        $('.circle2').removeClass('on');
                        $('.circle3').removeClass('on');
                        $('.move_circle').removeClass('on');
                        $('.cnt3_box').removeClass('on');
                        //3p 모션 제거 끝
                        //3p 올라갈때 모션 제거 시작
                        $('.move_circle').removeClass('up');
                        $('.ani_box').removeClass('up');
                        $('.circle1').removeClass('up');
                        $('.circle2').removeClass('up');
                        $('.circle3').removeClass('up');
                        $('.cnt3_box').removeClass('up');
                        //3p 올라갈때 모션 제거 끝
                    }
                });
            }
        }
    }

    navi_start();

    // 효과음 관련 펑션
    // 효과음 시작
    function sec1_soundEffect_start(){
        startId = setTimeout(()=>{
            playSound(Sound0101);
            startId = setTimeout(()=>{
              playSound(Sound0102);
            }, 4700)
          }, 600)
    }

    function sec2_soundEffect_start(){
        // sec2_soundEffect = setTimeout(() => {
        //     sec2_optimi();
        //     // 효과음
        //     sec2_soundEffect = setTimeout(()=>{
        //         playSound(Sound0201);
        //         sec2_soundEffect = setTimeout(()=>{
        //             playSound(Sound0202);
        //             sec2_soundEffect = setTimeout(()=>{
        //                 playSound(Sound0203);
        //             }, 7000)
        //         }, 6000)
        //     }, 0)
        // }, 0);
    }

    // 효과음 정지
    function sec1_soundEffect_stop(){
        clearTimeout(startId);
        stopSound(click);
        stopSound(Sound0101);
        stopSound(Sound0102);
    }
    function sec2_soundEffect_stop(){
        clearTimeout(sec2_soundEffect);
        stopSound(Sound0201);
        stopSound(Sound0202);
        stopSound(Sound0203);
    }

    let dist = 0;
    let startY;

    $(window).on("touchstart",function(e){
        startY = e.originalEvent.changedTouches[0].clientY;
    });
    $(window).on("touchmove",function(e){
        const currentY = e.originalEvent.changedTouches[0].clientY;
        dist = currentY - startY;        
    });

    $(window).on("wheel touchend",function(e){
        // const currentY = e.originalEvent.changedTouches[0].clientY;/
        //     dist = currentY - startY;
        if( startValue == 1 ){ // 표지 lock
            ///////////////////////////// 스크롤 내릴 때 /////////////////////////////
            if (e.type === "wheel" && e.originalEvent.deltaY > 0 || e.type === "touchend" && dist < 0) {   
                playSound(next);
                if(i == 3){

                }else{
                    i++;
                }
                $("#btn li").removeClass("on");
                $("#btn li").eq(i).addClass("on");
                $("#main section").css({'opacity':'0','transition':'all 0.5s'});
                $("#main section").eq(i).css({'opacity':'1','transition':'all 0.5s'});

                if(i == 0){
                    $('#section2').removeClass('sec2_ani_re');
                }
                if(i == 1){
                    // 1p 효과음 정지
                    sec1_soundEffect_stop();

                    // 1p 끝
                    $('.circle_all').addClass('js_animation');
                    $('.textBox').addClass('js_animation');

                    $('.circle_all').removeClass('js_animation_re');
                    $('.textBox').removeClass('js_animation_re');

                    $("#main section").css({'opacity':'0','transition':'all 0.5s','transition-delay':'0s'});
                    $("#main section").eq(i).css({'opacity':'1','transition':'all 0.5s','transition-delay':'0s'});

                    // 2p
                    if($("#section2").hasClass("sec2_ani_start") === false) {
                        $('#section2').addClass('sec2_ani_start');
                        sec2_optimi();
                        // 2p 효과음 시작
                        sec2_soundEffect_start();
                    }
                    else {
                        $('#section2').addClass('sec2_ani_re');
                    }

                    // 헤더 흰색 로고 제거
                    $('#header').removeClass('logo_active');

                value = 1;
            }
            if(i == 2){
                // 2p 끝
                $('#section2').removeClass('sec2_ani_re');

                // 2p 효과음 정지
                sec2_soundEffect_stop();

                // 3p 시작
                $('#header').addClass('logo_active_3p');

                $('.top_btn').addClass('on');
                $('.ani_box').addClass('on');
                $('.circle1').addClass('on');
                $('.circle2').addClass('on');
                $('.circle3').addClass('on');
                $('.move_circle').addClass('on');
                $('.cnt3_box').addClass('on');
            }
            if(i == 3){
                $('#section2').removeClass('sec2_ani_re');
                $('#header').removeClass('logo_active');
                $('#header').removeClass('logo_active_3p');
                //4p 모션 시작
                $('.move4_circle').addClass('on');
                $('.cnt_box').addClass('on');
                $('.bg_box').addClass('on');
                //4p 모션 끝

                //3p 모션 제거 시작
                $('.ani_box').removeClass('on');
                $('.circle1').removeClass('on');
                $('.circle2').removeClass('on');
                $('.circle3').removeClass('on');
                $('.move_circle').removeClass('on');
                $('.cnt3_box').removeClass('on');
                //3p 모션 제거 끝
                //3p 올라갈때 모션 제거 시작
                $('.move_circle').removeClass('up');
                $('.ani_box').removeClass('up');
                $('.circle1').removeClass('up');
                $('.circle2').removeClass('up');
                $('.circle3').removeClass('up');
                $('.cnt3_box').removeClass('up');
                //3p 올라갈때 모션 제거 끝
            }

            ///////////////////////////// 스크롤 올릴 때 /////////////////////////////
            }else if (e.type === "wheel" || e.type === "touchend" && dist > 0) {                
                playSound(next);
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
                    $('#section2').removeClass('sec2_ani_re');

                    // 2p 효과음 정지
                    sec2_soundEffect_stop();
                }
                else if (i == 1){
                    // 2p
                    if($("#section2").hasClass("sec2_ani_start") === false) {
                        $('#section2').addClass('sec2_ani_start');
                    }
                    else {
                        $('#section2').addClass('sec2_ani_re');
                    }
                    $('#header').removeClass('logo_active_3p');
                    $('#header').removeClass('logo_active');
                    $('.top_btn').removeClass('on');
                    //3p 모션 제거 시작
                    $('.ani_box').removeClass('on');
                    $('.circle1').removeClass('on');
                    $('.circle2').removeClass('on');
                    $('.circle3').removeClass('on');
                    $('.move_circle').removeClass('on');
                    $('.cnt3_box').removeClass('on');
                    //3p 모션 제거 끝
                    //3p 올라갈때 모션 제거 시작
                    $('.move_circle').removeClass('up');
                    $('.ani_box').removeClass('up');
                    $('.circle1').removeClass('up');
                    $('.circle2').removeClass('up');
                    $('.circle3').removeClass('up');
                    $('.cnt3_box').removeClass('up');
                    //3p 올라갈때 모션 제거 끝
                }
                else if (i == 2){
                    $('#header').addClass('logo_active_3p');
                    //3p 올라갈때 모션 시작
                    $('.move_circle').addClass('up');
                    $('.ani_box').addClass('up');
                    $('.circle1').addClass('up');
                    $('.circle2').addClass('up');
                    $('.circle3').addClass('up');
                    $('.cnt3_box').addClass('up');
                    //3p 올라갈때 모션 끝
                    //4p 모션 제거 시작
                    $('.move4_circle').removeClass('on');
                    $('.cnt_box').removeClass('on');
                    $('.bg_box').removeClass('on');
                    //4p 모션 제거 끝
                }
        }
        dist = 0; // 값 초기화
        navi_start();
        }
    });


    $(".top_btn, #header .left a").click(function(e){
        e.preventDefault();
        playSound(next);
        i = $(".btn li.on").index() + 1;
        $("#btn li").removeClass("on");
        $("#btn li").eq(0).addClass("on");
        $("#main section").css('opacity','0');
        $("#main section").eq(0).css('opacity','1');

        $('.circle_all').addClass('js_animation_re');
        $('.textBox').addClass('js_animation_re');
        $('.circle_all').removeClass('js_animation');
        $('.textBox').removeClass('js_animation');
        $('.top_btn').removeClass('on');
    });

});
