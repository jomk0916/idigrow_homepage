let startValue = 0; // 표지 클릭 판단 변수
let startId = ''; // 표지 셋타임아웃 변수

// 효과음 관련
function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}
function stopSound(sound) {
  sound.currentTime = 0;
  sound.pause();
}

const click = new Audio('./idigrow/media/click.mp3');
const next = new Audio('./idigrow/media/next.mp3');
const Sound0101 = new Audio('./idigrow/media/sound01_01.mp3');
const Sound0102 = new Audio('./idigrow/media/sound01_02.mp3');
const Sound0201 = new Audio('./idigrow/media/sound02_01.mp3');
const Sound0202 = new Audio('./idigrow/media/sound02_02.mp3');
const Sound0203 = new Audio('./idigrow/media/sound02_03.mp3');

;(function($){
  const idgrow = {
    init:function(){
      this.cover_bg();
      this.mouse_custom();
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.section4();
    },

    
    cover_bg:function(){

      if(matchMedia("screen and (min-width: 992px)").matches){
        $('.cover_bg .loader').css('display','block');
        $('.start_btn').hover(function(){
          $('.loader').addClass('coverBg_start');
          $('.loader').removeClass('coverBg_end');
          $('#cover_mouse_custom').fadeIn(500);
        }, function(){
          $('.loader').removeClass('coverBg_start');
          $('.loader').addClass('coverBg_end');
          $('#cover_mouse_custom').fadeOut(200);
        });
      }
      else {
        $('.cover_bg .loader').css('display','none');
      }

      // 표지 마우스 포인터 관련
      const coords = { x:0, y:0 };
      const balloons = document.querySelectorAll("#cover_mouse_custom .balloon");
      let requestId;

      balloons.forEach(function(balloon){
        balloon.x = 0;
        balloon.y = 0;
      });

      window.addEventListener("mousemove", function(e){
        coords.x = e.clientX;
        coords.y = e.clientY;

        if (!requestId) {
          requestId = requestAnimationFrame(animateCircles);
        }
      })

      function animateCircles(){
        let x = coords.x;
        let y = coords.y;

        balloons.forEach(function (balloon, index){
          balloon.style.left = x - 20 + "px";
          balloon.style.top = y + 30 + "px";

          balloon.style.scale = 1;

          balloon.x = x;
          balloon.y = y;

          const nextCircle = balloons[index + 1] || balloons[0]; // circle[0] ~ circle[7] // 좌측이 false면 우측 실행
          x += (nextCircle.x - x) * 0.1;
          y += (nextCircle.y - y) * 0.1;

        });

        requestId = null;
        if (coords.x || coords.y) {
          requestId = requestAnimationFrame(animateCircles);
        }
      }
    },



    mouse_custom:function(){
      const coords = { x:0, y:0 };
      const circles = document.querySelectorAll("#mouse_custom .circle");
      let requestId;
      let stage = '';

      circles.forEach(function(circle){
        circle.x = 0;
        circle.y = 0;
      });

      window.addEventListener("mousemove", function(e){
        coords.x = e.clientX;
        coords.y = e.clientY;


        if (!requestId) {
          requestId = requestAnimationFrame(animateCircles);
        }
      })

      function animateCircles(){
        let x = coords.x;
        let y = coords.y;

        circles.forEach(function (circle, index){
          circle.style.left = x - 12 + "px";
          circle.style.top = y - 12 + "px";

          circle.style.scale = 1;

          circle.x = x;
          circle.y = y;

          const nextCircle = circles[index + 1] || circles[0]; // circle[0] ~ circle[7] // 좌측이 false면 우측 실행
          x += (nextCircle.x - x) * 0.8;
          y += (nextCircle.y - y) * 0.8;

        });

        requestId = null;
        if (coords.x || coords.y) {
          requestId = requestAnimationFrame(animateCircles);
        }
      }
    },
    header:function(){
      $('.ham').on({
        click: function(e){
          e.preventDefault();
          $(this).toggleClass('active');
          $('body').toggleClass('scrollLock');

          // 헤더 로고 관련
          if( $('#header').hasClass('logo_active') == true ){
            $('#header').removeClass('logo_active');
          }
          else {
            $('#header').addClass('logo_active');
          }

          $('#modal').toggle(300);
        }
      });

      $('#modal ul li a').on({
        click:function(){
          $('.ham').toggleClass('active');
          $('body').toggleClass('scrollLock');
          $('#modal').toggle(300);
        }
      });

    },
    section1:function(){
      $('.start_btn').on({
        click: function(){
          playSound(click);

          if( $('#section1').hasClass('sec1_ani_start') == false ){
            if(matchMedia("screen and (max-width: 1200px)").matches){
              $('#mouse_custom').css('display','none');
            }
            else {
              $('#mouse_custom').css('display','block');
            }
      
            // 모션 스타트
            $('#section1').addClass('sec1_ani_start');
            $('.cover_bg').fadeOut();
            startValue = 1;

            // svg goo 필터 최적화
            setTimeout(function(){
              $('.circle_g').addClass('goo');
              setTimeout(function(){
                $('.circle_g').removeClass('goo');
              },1000);
            }, 3300);

            // 1p 효과음 관련
            startId = setTimeout(()=>{
              playSound(Sound0101);
              startId = setTimeout(()=>{
                playSound(Sound0102);
              }, 3800)
            }, 300)
          }
        }
      });

      $('.testbtn').on({
        click:function(e){
          e.preventDefault();
          $('.circle_all').addClass('js_animation');
          $('.textBox').addClass('js_animation');

          $('.circle_all').removeClass('js_animation_re');
          $('.textBox').removeClass('js_animation_re');
        }
      });

      $('.endbtn').on({
        click: function(e){
          e.preventDefault();
          $('.circle_all').addClass('js_animation_re');
          $('.textBox').addClass('js_animation_re');

          $('.circle_all').removeClass('js_animation');
          $('.textBox').removeClass('js_animation');
        }
      })





    },
    section2:function(){

      function landscape(){ // 가로모드
        let attrX = 0;
        let attrX_2 = 0;
        for(let i = 1; i < 16; i++ ){
          if( i < 9 ){
            $(`#text${i}`).attr({ x: attrX, y : "50%" });
            attrX += 80;
          }
          else {
            $(`#text${i}`).attr({ x: 638 + attrX_2, y : "50%" });
            if( i == 10 ){
              attrX_2 += 30;
            }
            else {
              attrX_2 += 80;
            }
          }
        }
      }

      function portrait(){ // 세로모드
        let attrX = 0;
        let attrX_2 = 0;
        for(let i = 1; i < 16; i++ ){
          if( i < 9 ){
            $(`#text${i}`).attr({ x: attrX, y : "0%" });
            attrX += 150;
          }
          else {
            $(`#text${i}`).attr({ x: attrX_2, y : "150%" });
            if( i == 10 ){
              attrX_2 += 70;
            }
            else {
              attrX_2 += 150;
            }
          }
        }
      }

      if(matchMedia("screen and (max-width: 576px)").matches){
        // 모바일
        let attrX = 0;
        let attrX_2 = 0;
        for(let i = 1; i < 16; i++ ){
          if( i < 9 ){
            $(`#text${i}`).attr({ x: attrX, y : "0%" });
            attrX += 150;
          }
          else {
            $(`#text${i}`).attr({ x: attrX_2, y : "150%" });
            if( i == 10 ){
              attrX_2 += 70;
            }
            else {
              attrX_2 += 150;
            }
          }
        }
      }
      else if(matchMedia("screen and (max-width: 1000px)").matches){
        // 테블릿
        let attrX = 0;
        let attrX_2 = 0;
        for(let i = 1; i < 16; i++ ){
          if( i < 9 ){
            $(`#text${i}`).attr({ x: attrX, y : "0%" });
            attrX += 150;
          }
          else {
            $(`#text${i}`).attr({ x: attrX_2, y : "150%" });
            if( i == 10 ){
              attrX_2 += 70;
            }
            else {
              attrX_2 += 150;
            }
          }
        }
      }


      if (window.matchMedia('(orientation: landscape)').matches && matchMedia("screen and (max-width: 1199px)").matches) {
        // console.log("최초실행");
        landscape();        
      }

      if (window.matchMedia('(orientation: landscape)').matches && matchMedia("screen and (max-width: 899px)").matches) {
        console.log("최초실행");
        // portrait_m();   
        landscape();
      }

   

      window.addEventListener('resize', function () {        
        if (window.matchMedia('(orientation: landscape)').matches && matchMedia("screen and (max-width: 1199px)").matches) {
          // 테블릿 가로모드
          console.log("가로 모드");
          landscape();  
        }
        else {
          console.log("세로 모드");
          portrait();    
        }
        
      });

     
    },
    section3:function(){
      $('.contact_btn>p').click(function(){
        $('.contact_btn').addClass('on');
      });
      $('.close_btn').click(function(){
        $('.contact_btn').removeClass('on');
      });
    },
    section4:function(){

    },
  }
  idgrow.init();
})(jQuery);