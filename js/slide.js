$(document).ready(function(){
    fullset();
    quickClick();
});
function fullset(){
    var pageindex = $("main > section").size(); //main 안에 section이 몇개인지 확인
    for (var i = 1; i <= pageindex; i++){
        $("main > .quick > ul").append("<li></li>");
    }
    $("main .quick ul :first-child").addClass("on"); //화면 로드시 첫번째 퀵버튼 활성화
    // 마우스 휠 이벤트
    $(window).bind("mousewheel", function(event){
		var page = $(".quick ul li.on");
		if($("body").find("main:animated").length >= 1) return false;
		//마우스 휠을 위로
		if(event.originalEvent.wheelDelta >= 0) {
			var before=page.index();
			if(page.index() >= 0) page.prev().addClass("on").siblings(".on").removeClass("on");
			var pagelength=0;
			for(var i=1; i<(before); i++)
			{
				pagelength += $("#section"+i).height();
			}
			if(page.index() > 0){ //첫번째 페이지가 아닐때
				page=page.index()-1;
				$("main").animate({"top": -pagelength + "px"},1000, "swing");
			}
            // else{
			// 	alert("첫번째페이지 입니다.");
			// }	
		}else{ // 마우스 휠을 아래로	
			var nextPage=parseInt(page.index()+1); //다음페이지번호
			var lastPageNum=parseInt($(".quick ul li").size()); //마지막 페이지번호
			//현재페이지번호 <= (마지막 페이지 번호 - 1)
			//이럴때 퀵버튼옮기기
			if(page.index() <= $(".quick ul li").size()-1){ 
				page.next().addClass("on").siblings(".on").removeClass("on");
			}
			
			if(nextPage < lastPageNum){ //마지막 페이지가 아닐때만 animate !
				var pagelength=0;
				for(var i = 1; i<(nextPage+1); i++){ 
					//총 페이지 길이 구하기
					//ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
					pagelength += $("#section"+i).height();
				}
				$("main").animate({"top": -pagelength + "px"},1000, "swing");
			};
			// else{ // 현재 마지막 페이지 일때는
			// 	alert("마지막 페이지 입니다!");
			// };		
			
		}
	});
	$(window).resize(function(){ 
		//페이지가 100%이기때문에 브라우저가 resize 될때마다 스크롤 위치가 그대로 남아있는것을 방지하기 위해
		var resizeindex = $(".quick ul li.on").index()+1;
		
		var pagelength=0;
		for(var i = 1; i<resizeindex; i++){ 
			//총 페이지 길이 구하기
			//ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
			pagelength += $("#section"+i).height();
		}

		$("main").animate({"top": -pagelength + "px"},0);
	});
    
}

// 사이드 퀵버튼 클릭 이동
function quickClick(){
	$(".quick li").click(function(){
		var gnbindex = $(this).index()+1;
		var length=0;
		for(var i=1; i<(gnbindex); i++)
		{
			length+=$("#section"+i).height();
		}
		if($("body").find("main:animated").length >= 1) return false;
		$(this).addClass("on").siblings("li").removeClass("on");
		
		$("main").animate({"top": -length + "px"},800, "swing");
		return false;
	});
}