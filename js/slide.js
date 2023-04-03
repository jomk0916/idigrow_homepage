// $(document).ready(function(){
//     fullset();
//     quickClick();
// });
// function fullset(){
//     var pageindex = $("main > section").size(); //main 안에 section이 몇개인지 확인
//     for (var i = 1; i <= pageindex; i++){
//         $("#btn > .quick > ul").append("<li></li>");
//     }
//     $("#btn .quick ul :first-child").addClass("on"); //화면 로드시 첫번째 퀵버튼 활성화
//     // 마우스 휠 이벤트
//     $(window).bind("mousewheel", function(event){
// 		var page = $(".quick ul li.on");
// 		if($("body").find("main:animated").length >= 1) return false;
// 		//마우스 휠을 위로
// 		if(event.originalEvent.wheelDelta >= 0) {
// 			var before=page.index();
// 			if(page.index() >= 0) page.prev().addClass("on").siblings(".on").removeClass("on");//퀵버튼옮기기
// 			var pagelength=0;
// 			for(var i=1; i<(before); i++)
// 			{
// 				pagelength += $("#section"+i).height();
// 			}
// 			if(page.index() > 0){ //첫번째 페이지가 아닐때
// 				page=page.index()-1;
// 				$("main").animate({"top": -pagelength + "px"},1000, "padein");
// 			}else{
// 				alert("첫번째페이지 입니다.");
// 			}	
// 		}else{ // 마우스 휠을 아래로	
// 			var nextPage=parseInt(page.index()+1);
// 			var lastPageNum=parseInt($(".quick ul li").size());
// 			if(page.index() <= $(".quick ul li").size()-1){ 
// 				page.next().addClass("on").siblings(".on").removeClass("on");
// 			}
			
// 			if(nextPage < lastPageNum){ //마지막 페이지가 아닐때만 animate !
// 				var pagelength=0;
// 				for(var i = 1; i<(nextPage+1); i++){ 
// 					pagelength += $("#section"+i).height();
// 				}
// 				$("main").animate({"top": -pagelength + "px"},1000, "swing");
// 			}else{ // 현재 마지막 페이지 일때는
// 				alert("마지막 페이지 입니다!");
// 			};		
			
// 		}
// 	});
// 	$(window).resize(function(){ 
//         //페이지가 100%이기때문에 브라우저가 resize 될때마다 스크롤 위치가 그대로 남아있는것을 방지하기 위해
// 		var resizeindex = $(".quick ul li.on").index()+1;
// 		var pagelength=0;
// 		for(var i = 1; i<resizeindex; i++){ 
// 			pagelength += $("#section"+i).height();
// 		}

// 		$("main").animate({"top": -pagelength + "px"},0);
// 	});
    
// };

// // 사이드 퀵버튼 클릭 이동
// function quickClick(){
// 	$(".quick li").click(function(){
// 		var gnbindex = $(this).index()+1;
// 		var length=0;
// 		for(var i=1; i<(gnbindex); i++)
// 		{
// 			length+=$("#section"+i).height();
// 		}
// 		if($("body").find("main:animated").length >= 1) return false;
// 		$(this).addClass("on").siblings("li").removeClass("on");
		
// 		$("main").animate({"top": -length + "px"},800, "swing");
// 		return false;
// 	});
// };

// 탑버튼 기능이 되지 않음 오류 수정 할 것
// $(".top_btn").click(function(){
//     window.scrollTo({top:0});
// });

$("section:first-child").css("opacity",1)
$(".quick li:first").css("background","#000")
$(".quick li").click(function(){
    var $index = $(this).index();
    slide($index);
});

setInterval("show()", 2000);
    	var cnt = 0;

    	function show(){ 
          cnt++; 

          if( cnt < $("#main section").length ) { 
                slide(cnt);
    	  } else {
             cnt=0; 
             slide(cnt);
    	  }
    	}

        function slide(cnt){
       	    $("#main section").css("opacity", 0);
            $("#main section").eq(cnt).css("opacity", 1);
            $(".quick li").css("background", "#fff");
            $(".quick li").eq(cnt).css("background", "#000");
        }

        
        