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

const click = new Audio('./media/click.mp3');
const next = new Audio('./media/next.mp3');
const Sound0101 = new Audio('./media/sound01_01.mp3');
const Sound0102 = new Audio('./media/sound01_02.mp3');
const Sound0201 = new Audio('./media/sound02_01.mp3');
const Sound0202 = new Audio('./media/sound02_02.mp3');
const Sound0203 = new Audio('./media/sound02_03.mp3');

;(function($){
  const idgrow = {
    init:function(){
      this.mouse_custom();
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.section4();
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

        // switch(e.target.getAttribute('data-cursor')) {
        //   case 'ham':
        //     if (stage === 'ham') return
        //     console.log("ham");
        //     $('#mouse_custom .circle1').css('opacity','0').css('transition','all 0.3s')
        //     $('#mouse_custom .circle2').css('transform','scale(3)').css('transition','all 0.3s')
        //     $('#mouse_custom .circle3').css('opacity','0').css('transition','all 0.3s')
        //     stage = 'ham';
        //     break

        //   default:
        //     if (stage === '') return
        //     console.log("WWW");
        //     $('#mouse_custom .circle1').css('opacity','1').css('transition','all 0.3s')
        //     $('#mouse_custom .circle2').css('transform','scale(1)').css('transition','all 0.3s')
        //     $('#mouse_custom .circle3').css('opacity','1').css('transition','all 0.3s')
        //     stage = '';
        // }


        // if (e.target.getAttribute('data-cursor') === 'ham') {
        //   if (stage === 'ham') return;
        //     console.log("ham");
        //     $('#mouse_custom .circle1').css('opacity','0').css('transition','all 0.3s')
        //     $('#mouse_custom .circle2').css('transform','scale(3)').css('transition','all 0.3s')
        //     $('#mouse_custom .circle3').css('opacity','0').css('transition','all 0.3s')
        //     stage = 'ham';
        // } else {
        //   if (stage === '') return;
        //   console.log("디폴트");
        //   $('#mouse_custom .circle1').css('opacity','1').css('transition','all 0.3s')
        //   $('#mouse_custom .circle2').css('transform','scale(1)').css('transition','all 0.3s')
        //   $('#mouse_custom .circle3').css('opacity','1').css('transition','all 0.3s')
        //   stage = '';
        // }

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

          if( $('section').data('logo') == '1' ){
            console.log("3페이지");
          }

          if( $('#header').hasClass('logo_active') == true ){
            $('#header').removeClass('logo_active');
          }
          else {
            $('#header').addClass('logo_active');
          }

          // console.log(i);
          // $('#header').toggleClass('logo_active');
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
            $('#mouse_custom').css('display','block');
            // 모션 스타트
            $('#section1').addClass('sec1_ani_start');
            $('.cover_bg').fadeOut();
            startValue = 1;

            // svg goo 필터 최적화
            setTimeout(function(){
              $('.circle_g').addClass('goo');
              setTimeout(function(){
                $('.circle_g').removeClass('goo');
              },2000);
            }, 5000);

            // 효과음 관련
            startId = setTimeout(()=>{
              playSound(Sound0101);
              setTimeout(()=>{
                playSound(Sound0102);
              }, 4700)
            }, 600)
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

      if(matchMedia("screen and (max-width: 576px)").matches){
        //화면 크기가 576px이하일때
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