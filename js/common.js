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

      // svg goo 필터 최적화



      setTimeout(function(){
        // console.log("5초뒤 실행");
        $('.circle_g').addClass('goo');
        setTimeout(function(){
          // console.log("3초뒤 실행");
          $('.circle_g').removeClass('goo');
        },2000);

      }, 5000);

      // <g class="circle_g goo"></g>

    },
    section2:function(){
      // 2p ani 실행 코드
      // $('#section2').addClass('sec2_ani_start');
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