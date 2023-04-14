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