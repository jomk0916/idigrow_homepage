$(document).ready(function(){
    var i = $("#btn li.on").index(); //0
    // console.log(i);
    var value = 0;

    // 우측 점 네비게이션
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
            // 로고 화이트 변경
            $('#header').addClass('logo_active');

            //3p 모션
            const canvas = document.querySelector('.sec3_ani') // canvas 불러와서 변수 지정
            canvas.width = 1920; // 가로크기 윈도우 가로에 맞게
            canvas.height = 1080; // 세로크기 윈도우 세로에 맞게
            const ctx = canvas.getContext('2d') // 2d 그래픽 작업을 할 수 있게 해주는 것
            // getContext() 메서드는 렌더링 컨텍스트 타입을 지정하는 하나의 파라메터를 가짐.

            const TOTAL = 5 // 갯수지정
            const petalArray = [] // 이미지를 담을 배열
            const TOTAL2 = 15
            const petalArray2 = []
            const TOTAL3 = 10
            const petalArray3 = []
            const TOTAL4 = 8
            const petalArray4 = []

            const petalImg = new Image() // 이미지 불러오기위함
            petalImg.src = './images/circle.png' // 이미지 불러오기
            const petalImg2 = new Image()
            petalImg2.src = './images/circle2.png'
            const petalImg3 = new Image()
            petalImg3.src = './images/circle3.png'
            const petalImg4 = new Image()
            petalImg4.src = './images/circle4.png'

            petalImg.onload = () => { // 이미지가 다 불러와지고 난 후
              for (let i = 0; i < TOTAL; i++){
                  petalArray.push(new Petal()) // 배열에 'petal'을 넣음
              }  console.log(petalArray)
              for (let i = 0; i < TOTAL2; i++){
                  petalArray2.push(new Circle()) // 배열에 'petal'을 넣음
              }  // console.log(petalArray2)
              for (let i = 0; i < TOTAL3; i++){
                  petalArray3.push(new Circle3()) // 배열에 'petal'을 넣음
              }  // console.log(petalArray3)
              for (let i = 0; i < TOTAL4; i++){
                  petalArray4.push(new Circle4()) // 배열에 'petal'을 넣음
              }  // console.log(petalArray4)
              render() // 랜더함수 실행
            }

            // 캐릭터 준비
            function circle () {
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

            function render () {
                ctx.clearRect(0, 0, canvas.width, canvas.height) // 캔버스 가로 세로 전체 지우는 기능 - 애니메이션 관련
                petalArray.forEach(petal => { // 각각의 'petal'을 불러옴
                    petal.animate()
                })
                petalArray2.forEach(circle => { // 각각의 'petal'을 불러옴
                    circle.animate()
                })
                petalArray3.forEach(circle3 => { // 각각의 'petal'을 불러옴
                    circle3.animate()
                })
                petalArray4.forEach(circle4 => { // 각각의 'petal'을 불러옴
                    circle4.animate()
                })

                window.requestAnimationFrame(render) // 반복실행 1초에 60번 정도 - 애니메이션 관련
            }

            // window.addEventListener('resize', () => { // 리사이징 이벤트
            //     canvas.width = window.innerWidth
            //     canvas.height = window.innerHeight
            // })

            // 파란원
            class Petal {
                constructor() {
                    this.x = Math.random() * canvas.width // 랜덤한 가로값
                    this.y = Math.random() * canvas.height * 1.3 - canvas.height
                    this.w = 70 + Math.random() * 30 // 가로크기 랜덤하게 (30 ~ 45)
                    this.h = this.w // 높이 가로랑 똑같이
                    this.opacity = this.w / 100 // 투명도값이 45분의 30 부터 1까지
                    this.xSpeed = 1.5 + Math.random() // 가로 스피드를 2px ~ 3px
                    this.ySpeed = 1 + Math.random() // 세로 스피드를 1px ~ 2px
                }

                draw() { // draw 클래스 정의
                    if (this.y > canvas.height && this.x > canvas.width) { // 화면 끝을 지났을 경우 - 만약 y값이 캔버스의 높이보다 클 경우 그리고 x값이 캔버스의 가로보다 클 경우
                        this.x = -petalImg.width // 이미지의 가로값을 뺌
                        this.y = Math.random() * canvas.height * 2 - canvas.height
                        // 높이를 2배를 주고 높이중 랜덤하게 나타나게 그래야 보이는 화면에서 가득히 보임
                        this.xSpeed = 2 + Math.random() // 가로 스피드를 2px ~ 3px
                        this.ySpeed = 1 + Math.random() // 세로 스피드를 1px ~ 2px
                    }
                    ctx.globalAlpha = this.opacity // 투명도 적용
                    ctx.drawImage( // 이미지를 그릴 수 있게 해주는 것
                        petalImg, // 변수
                        this.x, // x위치
                        this.y, // y위치
                        this.w, // 가로크기(dw)
                        this.h // 세로크기(dh)
                    )
                    circle()
                }

                animate() {
                    // this.x += 1 // x값을 1씩 증가
                    // this.y += 1 // y값을 1씩 증가
                    this.x += this.xSpeed
                    this.y += this.ySpeed
                    this.draw()
                }

            }

            // 주황원
            class Circle {
                constructor() {
                    this.x = Math.random() * canvas.width // 랜덤한 가로값
                    this.y = Math.random() * canvas.height * 2 - canvas.height
                    this.w = 10 + Math.random() * 30 // 가로크기 랜덤하게 (30 ~ 45)
                    this.h = this.w // 높이 가로랑 똑같이
                    this.opacity = this.w / 45 // 투명도값이 45분의 30 부터 1까지
                    this.xSpeed = 1.5 + Math.random() // 가로 스피드를 2px ~ 3px
                    this.ySpeed = 1 + Math.random() // 세로 스피드를 1px ~ 2px
                }

                draw() { // draw 클래스 정의
                    if (this.y > canvas.height && this.x > canvas.width) { // 화면 끝을 지났을 경우 - 만약 y값이 캔버스의 높이보다 클 경우 그리고 x값이 캔버스의 가로보다 클 경우
                        this.x = -petalImg2.width // 이미지의 가로값을 뺌
                        this.y = Math.random() * canvas.height * 2 - canvas.height
                        // 높이를 2배를 주고 높이중 랜덤하게 나타나게 그래야 보이는 화면에서 가득히 보임
                        this.xSpeed = 2 + Math.random() // 가로 스피드를 2px ~ 3px
                        this.ySpeed = 1 + Math.random() // 세로 스피드를 1px ~ 2px
                    }
                    ctx.globalAlpha = this.opacity // 투명도 적용
                    ctx.drawImage( // 이미지를 그릴 수 있게 해주는 것
                        petalImg2, // 변수
                        this.x, // x위치
                        this.y, // y위치
                        this.w, // 가로크기(dw)
                        this.h // 세로크기(dh)
                    )
                    circle()
                }

                animate() {
                    // this.x += 1 // x값을 1씩 증가
                    // this.y += 1 // y값을 1씩 증가
                    this.x += this.xSpeed
                    this.y += this.ySpeed
                    this.draw()
                }

            }

            // 다홍원
            class Circle3 {
                constructor() {
                    this.x = Math.random() * canvas.width // 랜덤한 가로값
                    this.y = Math.random() * canvas.height * 1.2 - canvas.height
                    this.w = 5 + Math.random() * 10 // 가로크기 랜덤하게 (30 ~ 45)
                    this.h = this.w // 높이 가로랑 똑같이
                    this.opacity = this.w / 15 // 투명도값이 45분의 30 부터 1까지
                    this.xSpeed = 1.2 + Math.random() // 가로 스피드를 2px ~ 3px
                    this.ySpeed = 1.5 + Math.random() // 세로 스피드를 1px ~ 2px
                }

                draw() { // draw 클래스 정의
                    if (this.y > canvas.height && this.x > canvas.width) { // 화면 끝을 지났을 경우 - 만약 y값이 캔버스의 높이보다 클 경우 그리고 x값이 캔버스의 가로보다 클 경우
                        this.x = -petalImg3.width // 이미지의 가로값을 뺌
                        this.y = Math.random() * canvas.height * 2 - canvas.height
                        // 높이를 2배를 주고 높이중 랜덤하게 나타나게 그래야 보이는 화면에서 가득히 보임
                        this.xSpeed = 2 + Math.random() // 가로 스피드를 2px ~ 3px
                        this.ySpeed = 1 + Math.random() // 세로 스피드를 1px ~ 2px
                    }
                    ctx.globalAlpha = this.opacity // 투명도 적용
                    ctx.drawImage( // 이미지를 그릴 수 있게 해주는 것
                        petalImg3, // 변수
                        this.x, // x위치
                        this.y, // y위치
                        this.w, // 가로크기(dw)
                        this.h // 세로크기(dh)
                    )
                    circle()
                }

                animate() {
                    // this.x += 1 // x값을 1씩 증가
                    // this.y += 1 // y값을 1씩 증가
                    this.x += this.xSpeed
                    this.y += this.ySpeed
                    this.draw()
                }

            }

            // 다홍선원
            class Circle4 {
                constructor() {
                    this.x = Math.random() * canvas.width // 랜덤한 가로값
                    this.y = Math.random() * canvas.height * 1.5 - canvas.height
                    this.w = 40 + Math.random() * 20 // 가로크기 랜덤하게 (30 ~ 45)
                    this.h = this.w // 높이 가로랑 똑같이
                    this.opacity = 1 // 투명도값이 45분의 30 부터 1까지
                    this.xSpeed = 1.5 + Math.random() // 가로 스피드를 2px ~ 3px
                    this.ySpeed = 1 + Math.random() // 세로 스피드를 1px ~ 2px
                }

                draw() { // draw 클래스 정의
                    if (this.y > canvas.height && this.x > canvas.width) { // 화면 끝을 지났을 경우 - 만약 y값이 캔버스의 높이보다 클 경우 그리고 x값이 캔버스의 가로보다 클 경우
                        this.x = -petalImg4.width // 이미지의 가로값을 뺌
                        this.y = Math.random() * canvas.height * 2 - canvas.height
                        // 높이를 2배를 주고 높이중 랜덤하게 나타나게 그래야 보이는 화면에서 가득히 보임
                        this.xSpeed = 2 + Math.random() // 가로 스피드를 2px ~ 3px
                        this.ySpeed = 1 + Math.random() // 세로 스피드를 1px ~ 2px
                    }
                    ctx.globalAlpha = this.opacity // 투명도 적용
                    ctx.drawImage( // 이미지를 그릴 수 있게 해주는 것
                        petalImg4, // 변수
                        this.x, // x위치
                        this.y, // y위치
                        this.w, // 가로크기(dw)
                        this.h // 세로크기(dh)
                    )
                    circle()
                }

                animate() {
                    // this.x += 1 // x값을 1씩 증가
                    // this.y += 1 // y값을 1씩 증가
                    this.x += this.xSpeed
                    this.y += this.ySpeed
                    this.draw()
                }

            }
        }

    });

    // 햄버거 네비게이션
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
                    }
                });
            }
            //     //3p 모션
            //     const canvas = document.querySelector('.sec3_ani') // canvas 불러와서 변수 지정
            //     canvas.width = 1920; // 가로크기 윈도우 가로에 맞게
            //     canvas.height = 1080; // 세로크기 윈도우 세로에 맞게
            //     const ctx = canvas.getContext('2d') // 2d 그래픽 작업을 할 수 있게 해주는 것
            //     // getContext() 메서드는 렌더링 컨텍스트 타입을 지정하는 하나의 파라메터를 가짐.

            //     const TOTAL = 5 // 갯수지정
            //     const petalArray = [] // 이미지를 담을 배열
            //     const TOTAL2 = 15
            //     const petalArray2 = []
            //     const TOTAL3 = 10
            //     const petalArray3 = []
            //     const TOTAL4 = 8
            //     const petalArray4 = []

            //     const petalImg = new Image() // 이미지 불러오기위함
            //     petalImg.src = './images/circle.png' // 이미지 불러오기
            //     const petalImg2 = new Image()
            //     petalImg2.src = './images/circle2.png'
            //     const petalImg3 = new Image()
            //     petalImg3.src = './images/circle3.png'
            //     const petalImg4 = new Image()
            //     petalImg4.src = './images/circle4.png'

            //     petalImg.onload = () => { // 이미지가 다 불러와지고 난 후
            //       for (let i = 0; i < TOTAL; i++){
            //           petalArray.push(new Petal()) // 배열에 'petal'을 넣음
            //       }  console.log(petalArray)
            //       for (let i = 0; i < TOTAL2; i++){
            //           petalArray2.push(new Circle()) // 배열에 'petal'을 넣음
            //       }  // console.log(petalArray2)
            //       for (let i = 0; i < TOTAL3; i++){
            //           petalArray3.push(new Circle3()) // 배열에 'petal'을 넣음
            //       }  // console.log(petalArray3)
            //       for (let i = 0; i < TOTAL4; i++){
            //           petalArray4.push(new Circle4()) // 배열에 'petal'을 넣음
            //       }  // console.log(petalArray4)
            //       render() // 랜더함수 실행
            //     }

            //     // 캐릭터 준비
            //     function circle () {
            //         // 캐릭터

            //               // 머리
            //               ctx.beginPath();
            //               ctx.arc(1431, 991, 218, 0, Math.PI * 2, true);
            //               ctx.fillStyle = "#fff"
            //               ctx.fill();
            //               ctx.strokeStyle = "#ff4713"
            //               ctx.stroke();

            //               // 머리 꽁지
            //               ctx.beginPath();
            //               ctx.arc(1651, 779, 57, 0, Math.PI * 2, true);
            //               ctx.fillStyle = "#fff"
            //               ctx.fill();
            //               ctx.strokeStyle = "#ff4713"
            //               ctx.stroke();

            //               // 몸
            //               ctx.beginPath();
            //               // ctx.arc(1431, 1000, 210, 1.9, 0.8, Math.PI, true);
            //               ctx.arc(1431, 1280, 218, 2.8, 5.9, Math.PI, true);
            //               ctx.fillStyle = "#ff4713"
            //               ctx.fill();
            //               ctx.strokeStyle = "#ff4713"
            //               ctx.stroke();
            //     }

            //     function render () {
            //         ctx.clearRect(0, 0, canvas.width, canvas.height) // 캔버스 가로 세로 전체 지우는 기능 - 애니메이션 관련
            //         petalArray.forEach(petal => { // 각각의 'petal'을 불러옴
            //             petal.animate()
            //         })
            //         petalArray2.forEach(circle => { // 각각의 'petal'을 불러옴
            //             circle.animate()
            //         })
            //         petalArray3.forEach(circle3 => { // 각각의 'petal'을 불러옴
            //             circle3.animate()
            //         })
            //         petalArray4.forEach(circle4 => { // 각각의 'petal'을 불러옴
            //             circle4.animate()
            //         })

            //         window.requestAnimationFrame(render) // 반복실행 1초에 60번 정도 - 애니메이션 관련
            //     }

            //     // window.addEventListener('resize', () => { // 리사이징 이벤트
            //     //     canvas.width = window.innerWidth
            //     //     canvas.height = window.innerHeight
            //     // })

            //     // 파란원
            //     class Petal {
            //         constructor() {
            //             this.x = Math.random() * canvas.width // 랜덤한 가로값
            //             this.y = Math.random() * canvas.height * 1.3 - canvas.height
            //             this.w = 70 + Math.random() * 30 // 가로크기 랜덤하게 (30 ~ 45)
            //             this.h = this.w // 높이 가로랑 똑같이
            //             this.opacity = this.w / 100 // 투명도값이 45분의 30 부터 1까지
            //             this.xSpeed = 1.5 + Math.random() // 가로 스피드를 2px ~ 3px
            //             this.ySpeed = 1 + Math.random() // 세로 스피드를 1px ~ 2px
            //         }

            //         draw() { // draw 클래스 정의
            //             if (this.y > canvas.height && this.x > canvas.width) { // 화면 끝을 지났을 경우 - 만약 y값이 캔버스의 높이보다 클 경우 그리고 x값이 캔버스의 가로보다 클 경우
            //                 this.x = -petalImg.width // 이미지의 가로값을 뺌
            //                 this.y = Math.random() * canvas.height * 2 - canvas.height
            //                 // 높이를 2배를 주고 높이중 랜덤하게 나타나게 그래야 보이는 화면에서 가득히 보임
            //                 this.xSpeed = 2 + Math.random() // 가로 스피드를 2px ~ 3px
            //                 this.ySpeed = 1 + Math.random() // 세로 스피드를 1px ~ 2px
            //             }
            //             ctx.globalAlpha = this.opacity // 투명도 적용
            //             ctx.drawImage( // 이미지를 그릴 수 있게 해주는 것
            //                 petalImg, // 변수
            //                 this.x, // x위치
            //                 this.y, // y위치
            //                 this.w, // 가로크기(dw)
            //                 this.h // 세로크기(dh)
            //             )
            //             circle()
            //         }

            //         animate() {
            //             // this.x += 1 // x값을 1씩 증가
            //             // this.y += 1 // y값을 1씩 증가
            //             this.x += this.xSpeed
            //             this.y += this.ySpeed
            //             this.draw()
            //         }

            //     }

            //     // 주황원
            //     class Circle {
            //         constructor() {
            //             this.x = Math.random() * canvas.width // 랜덤한 가로값
            //             this.y = Math.random() * canvas.height * 2 - canvas.height
            //             this.w = 10 + Math.random() * 30 // 가로크기 랜덤하게 (30 ~ 45)
            //             this.h = this.w // 높이 가로랑 똑같이
            //             this.opacity = this.w / 45 // 투명도값이 45분의 30 부터 1까지
            //             this.xSpeed = 1.5 + Math.random() // 가로 스피드를 2px ~ 3px
            //             this.ySpeed = 1 + Math.random() // 세로 스피드를 1px ~ 2px
            //         }

            //         draw() { // draw 클래스 정의
            //             if (this.y > canvas.height && this.x > canvas.width) { // 화면 끝을 지났을 경우 - 만약 y값이 캔버스의 높이보다 클 경우 그리고 x값이 캔버스의 가로보다 클 경우
            //                 this.x = -petalImg2.width // 이미지의 가로값을 뺌
            //                 this.y = Math.random() * canvas.height * 2 - canvas.height
            //                 // 높이를 2배를 주고 높이중 랜덤하게 나타나게 그래야 보이는 화면에서 가득히 보임
            //                 this.xSpeed = 2 + Math.random() // 가로 스피드를 2px ~ 3px
            //                 this.ySpeed = 1 + Math.random() // 세로 스피드를 1px ~ 2px
            //             }
            //             ctx.globalAlpha = this.opacity // 투명도 적용
            //             ctx.drawImage( // 이미지를 그릴 수 있게 해주는 것
            //                 petalImg2, // 변수
            //                 this.x, // x위치
            //                 this.y, // y위치
            //                 this.w, // 가로크기(dw)
            //                 this.h // 세로크기(dh)
            //             )
            //             circle()
            //         }

            //         animate() {
            //             // this.x += 1 // x값을 1씩 증가
            //             // this.y += 1 // y값을 1씩 증가
            //             this.x += this.xSpeed
            //             this.y += this.ySpeed
            //             this.draw()
            //         }

            //     }

            //     // 다홍원
            //     class Circle3 {
            //         constructor() {
            //             this.x = Math.random() * canvas.width // 랜덤한 가로값
            //             this.y = Math.random() * canvas.height * 1.2 - canvas.height
            //             this.w = 5 + Math.random() * 10 // 가로크기 랜덤하게 (30 ~ 45)
            //             this.h = this.w // 높이 가로랑 똑같이
            //             this.opacity = this.w / 15 // 투명도값이 45분의 30 부터 1까지
            //             this.xSpeed = 1.2 + Math.random() // 가로 스피드를 2px ~ 3px
            //             this.ySpeed = 1.5 + Math.random() // 세로 스피드를 1px ~ 2px
            //         }

            //         draw() { // draw 클래스 정의
            //             if (this.y > canvas.height && this.x > canvas.width) { // 화면 끝을 지났을 경우 - 만약 y값이 캔버스의 높이보다 클 경우 그리고 x값이 캔버스의 가로보다 클 경우
            //                 this.x = -petalImg3.width // 이미지의 가로값을 뺌
            //                 this.y = Math.random() * canvas.height * 2 - canvas.height
            //                 // 높이를 2배를 주고 높이중 랜덤하게 나타나게 그래야 보이는 화면에서 가득히 보임
            //                 this.xSpeed = 2 + Math.random() // 가로 스피드를 2px ~ 3px
            //                 this.ySpeed = 1 + Math.random() // 세로 스피드를 1px ~ 2px
            //             }
            //             ctx.globalAlpha = this.opacity // 투명도 적용
            //             ctx.drawImage( // 이미지를 그릴 수 있게 해주는 것
            //                 petalImg3, // 변수
            //                 this.x, // x위치
            //                 this.y, // y위치
            //                 this.w, // 가로크기(dw)
            //                 this.h // 세로크기(dh)
            //             )
            //             circle()
            //         }

            //         animate() {
            //             // this.x += 1 // x값을 1씩 증가
            //             // this.y += 1 // y값을 1씩 증가
            //             this.x += this.xSpeed
            //             this.y += this.ySpeed
            //             this.draw()
            //         }

            //     }

            //     // 다홍선원
            //     class Circle4 {
            //         constructor() {
            //             this.x = Math.random() * canvas.width // 랜덤한 가로값
            //             this.y = Math.random() * canvas.height * 1.5 - canvas.height
            //             this.w = 40 + Math.random() * 20 // 가로크기 랜덤하게 (30 ~ 45)
            //             this.h = this.w // 높이 가로랑 똑같이
            //             this.opacity = 1 // 투명도값이 45분의 30 부터 1까지
            //             this.xSpeed = 1.5 + Math.random() // 가로 스피드를 2px ~ 3px
            //             this.ySpeed = 1 + Math.random() // 세로 스피드를 1px ~ 2px
            //         }

            //         draw() { // draw 클래스 정의
            //             if (this.y > canvas.height && this.x > canvas.width) { // 화면 끝을 지났을 경우 - 만약 y값이 캔버스의 높이보다 클 경우 그리고 x값이 캔버스의 가로보다 클 경우
            //                 this.x = -petalImg4.width // 이미지의 가로값을 뺌
            //                 this.y = Math.random() * canvas.height * 2 - canvas.height
            //                 // 높이를 2배를 주고 높이중 랜덤하게 나타나게 그래야 보이는 화면에서 가득히 보임
            //                 this.xSpeed = 2 + Math.random() // 가로 스피드를 2px ~ 3px
            //                 this.ySpeed = 1 + Math.random() // 세로 스피드를 1px ~ 2px
            //             }
            //             ctx.globalAlpha = this.opacity // 투명도 적용
            //             ctx.drawImage( // 이미지를 그릴 수 있게 해주는 것
            //                 petalImg4, // 변수
            //                 this.x, // x위치
            //                 this.y, // y위치
            //                 this.w, // 가로크기(dw)
            //                 this.h // 세로크기(dh)
            //             )
            //             circle()
            //         }

            //         animate() {
            //             // this.x += 1 // x값을 1씩 증가
            //             // this.y += 1 // y값을 1씩 증가
            //             this.x += this.xSpeed
            //             this.y += this.ySpeed
            //             this.draw()
            //         }

            //     }
            // }
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