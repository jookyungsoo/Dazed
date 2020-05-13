
var project1PC={
	carousel:function(){
		$('.owl-carousel').owlCarousel({
			loop:true,  //  true or false반복//
			margin:10,
			nav:true,   // true or false 좌우버튼 //
			responsive:{
				0:{  // 600px 이하 면 아이콘1개//
					items:1
				}
			}
		});
		$(".owl-carousel").trigger("refresh.owl.carousel");
	},
	navigation:function(){
		$(".nav > ul > li").hover(
			function(){
				$(this).parent().addClass("over");
			},
			function(){
				$(this).parent().removeClass("over");
			}
		);
		$(".nav > ul > li").focusin(function(){
			$(this).addClass("over");
		});
		$(".nav > ul > li").focusout(function(){
			$(this).removeClass("over");
		});
		$(".nav > ul > li:first-child").focusin(function(){
			$(this).parent().addClass("over");
		});
		$(".nav li:last-child li:last-child").focusout(function(){
			$(this).parent().parent().removeClass("over");
			$(this).parent().parent().parent().removeClass("over");
		});
	},
	slider:function(){
		var w;
		var total=4;
		var amount=0;

		$(window).resize(function(){
			w=$(window).width();

			if(w > 1200){
				distance=w;
			}
			else{
				distance=1200;
			}
			$(".hero .gallery").css({width:distance*total});
		});
		$(window).trigger("resize");

		$(".direction_nav .left").click(function(e){
			e.preventDefault();

			if($(".gallery").is(":animated")){
				return false;
			}

			$(".gallery").prepend($(".gallery li").last());
			amount-=distance;
			$(".gallery").css({left:amount});


			amount+=distance;
			$(".gallery").animate({left:amount}, 500);
		});
		$(".direction_nav .right").click(function(e){
			e.preventDefault();

			if($(".gallery").is(":animated")){
				return false;
			}

			amount-=distance;
			$(".gallery").animate({left:amount}, 500, function(){
				$(this).append($(".gallery li").first());
				amount+=distance;
				$(this).css({left : amount});
			});
		});
	}
}
