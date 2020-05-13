var $window;
var project1Mobile={
		video:function(){
		var $start=$("#start");
		var video=document.getElementById("start");

		video.muted=true;
		video.play();

		var winw;
		var winh;
		var videow, videoh;

		$window.resize(function(){
			$start.removeAttr("style");
			winw=$window.width();
			winh=$window.height();
			console.log(winw+":"+winh);

			if(winw > winh){
				$start.css({"width" : winw});
				$start.css({"margin-left" : (-1)*winw/2});
			}
			else{
				$start.css({"height" : winh});
				videow=$start.width();
				$start.css({"margin-left" : (-1)*videow/2});
			}
		});
		$window.trigger("resize");
	},
	tab:function(){
		var $tab=$(".tab");
		var $menu=$(".menu");
		var $menuLi=$(".menu > ul > li");
		$tab.click(function(){
			$menu.css({"display" : "flex"});
			$tab.css({"opacity" : 0});
		});

		$(".menu .close").click(function(){
			$menu.css({"display" : "none"});
			$tab.css({"opacity" : 1});
			$menuLi.removeClass("active");
			$menuLi.find("ul").hide();
		});

		$menuLi.click(function(e){
			e.preventDefault();

			if($(this).hasClass("active") == false){
				$menuLi.removeClass("active");
				$(this).addClass("active");
				$menuLi.find("ul").slideUp(300);
				$(this).children("ul").slideDown(300);
			}
			else{
				$(this).removeClass("active");
				$(this).children("ul").slideUp(300);
			}
		});

		$(".menu ul ul li").click(function(e){
			e.preventDefault();

			if($(this).hasClass("active") == false){
				$(".menu ul ul li").removeClass("active");
				$(this).addClass("active");
			}
		});
	},
}
