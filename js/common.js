;(function($){
  const idgrow = {
    init:function(){
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.section4();
    },
    header:function(){
      $('.ham').on({
        click: function(e){
          e.preventDefault();
          $(this).toggleClass('active');
          $('body').toggleClass('scrollLock');
          $('#modal').toggle(300);
          $('#header').removeClass('logo_active');

        }
      });

      $('#modal ul li a').on({
        click:function(){
          $('.ham').toggleClass('active');
          $('body').toggleClass('scrollLock');
          $('#modal').toggle(300);
          $('#header').removeClass('logo_active');
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


    },
    section2:function(){
      // 2p ani 실행 코드
      // $('#section2').addClass('sec2_ani_start');
    },
    section3:function(){
      function draw(){
        var canvas = document.getElementById("sec3_ani");
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        if(canvas.getContext){
          var ctx = canvas.getContext("2d");

          ctx.beginPath();
          ctx.arc(128, 385, 45, 0, Math.PI * 2, true);
          ctx.fillStyle = "#3cb4e5"
          ctx.fill();

          ctx.beginPath();
          ctx.arc(207, 210, 35, 0, Math.PI * 2, true);
          ctx.fillStyle = "#3cb4e5"
          ctx.fill();

          ctx.beginPath();
          ctx.arc(280, 300, 12, 0, Math.PI * 2, true);
          ctx.fillStyle = "#ff7a00"
          ctx.fill();

          ctx.beginPath();
          ctx.arc(404, 338, 20, 0, Math.PI * 2, true);
          ctx.fillStyle = "#3cb4e5"
          ctx.fill();

          ctx.beginPath();
          ctx.arc(441, 188, 77, 0, Math.PI * 2, true);
          ctx.fillStyle = "#3cb4e5"
          ctx.fill();

          ctx.beginPath();
          ctx.arc(540, 350, 9, 0, Math.PI * 2, true);
          ctx.fillStyle = "#ff7a00"
          ctx.fill();

          ctx.beginPath();
          ctx.arc(560, 242, 12, 0, Math.PI * 2, true);
          ctx.fillStyle = "#ff4713"
          ctx.fill();

          ctx.beginPath();
          ctx.arc(611, 388, 16, 0, Math.PI * 2, true);
          ctx.fillStyle = "#fff"
          ctx.fill();
          ctx.strokeStyle = "#3cb4e5"
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(666, 290, 46, 0, Math.PI * 2, true);
          ctx.fillStyle = "#3cb4e5"
          ctx.fill();

          ctx.beginPath();
          ctx.arc(693, 455, 38, 0, Math.PI * 2, true);
          ctx.fillStyle = "#fff"
          ctx.fill();
          ctx.strokeStyle = "#ff4713"
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(744, 209, 21, 0, Math.PI * 2, true);
          ctx.fillStyle = "#3cb4e5"
          ctx.fill();

          ctx.beginPath();
          ctx.arc(815, 417, 25, 0, Math.PI * 2, true);
          ctx.fillStyle = "#3cb4e5"
          ctx.fill();

          ctx.beginPath();
          ctx.arc(929, 436, 25, 0, Math.PI * 2, true);
          ctx.fillStyle = "#fff"
          ctx.fill();
          ctx.strokeStyle = "#3cb4e5"
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(937, 322, 33, 0, Math.PI * 2, true);
          ctx.fillStyle = "#3cb4e5"
          ctx.fill();

          ctx.beginPath();
          ctx.arc(1029, 378, 6, 0, Math.PI * 2, true);
          ctx.fillStyle = "#ff4713"
          ctx.fill();

          ctx.beginPath();
          ctx.arc(1114, 241, 91, 0, Math.PI * 2, true);
          ctx.fillStyle = "#3cb4e5"
          ctx.fill();

          ctx.beginPath();
          ctx.arc(1252, 600, 17, 0, Math.PI * 2, true);
          ctx.fillStyle = "#3cb4e5"
          ctx.fill();

          ctx.beginPath();
          ctx.arc(1273, 318, 23, 0, Math.PI * 2, true);
          ctx.fillStyle = "#ff7a00"
          ctx.fill();

          ctx.beginPath();
          ctx.arc(1331, 484, 8, 0, Math.PI * 2, true);
          ctx.fillStyle = "#ff4713"
          ctx.fill();

          ctx.beginPath();
          ctx.arc(1358, 144, 18, 0, Math.PI * 2, true);
          ctx.fillStyle = "#fff"
          ctx.fill();
          ctx.strokeStyle = "#3cb4e5"
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(1447, 198, 36, 0, Math.PI * 2, true);
          ctx.fillStyle = "#fff"
          ctx.fill();
          ctx.strokeStyle = "#3cb4e5"
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(1560, 544, 17, 0, Math.PI * 2, true);
          ctx.fillStyle = "#ff7a00"
          ctx.fill();

          ctx.beginPath();
          ctx.arc(1749, 962, 6, 0, Math.PI * 2, true);
          ctx.fillStyle = "#ff4713"
          ctx.fill();

          ctx.beginPath();
          ctx.arc(1830, 776, 25, 0, Math.PI * 2, true);
          ctx.fillStyle = "#ff4713"
          ctx.fill();

          // 캐릭터

          // 머리
          ctx.beginPath();
          ctx.arc(1431, 991, 218, 0, Math.PI * 2, true);
          ctx.fillStyle = "#fff"
          ctx.fill();
          ctx.strokeStyle = "#ff4713"
          ctx.stroke();

          // 머리 꽁지
          ctx.beginPath();
          ctx.arc(1651, 779, 57, 0, Math.PI * 2, true);
          ctx.fillStyle = "#fff"
          ctx.fill();
          ctx.strokeStyle = "#ff4713"
          ctx.stroke();

          // 몸
          ctx.beginPath();
          // ctx.arc(1431, 1000, 210, 1.9, 0.8, Math.PI, true);
          ctx.arc(1431, 1280, 218, 2.8, 5.9, Math.PI, true);
          ctx.fillStyle = "#ff4713"
          ctx.fill();
          ctx.strokeStyle = "#ff4713"
          ctx.stroke();
        }
      }
      draw()
    },
    section4:function(){

    },
  }
  idgrow.init();
})(jQuery);