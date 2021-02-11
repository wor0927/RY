	// Create HTML5 elements for IE
	document.createElement("article");
	document.createElement("section");

	new WOW().init();

	$(function() {
		$("header").load("../common/header.html");
		//            $("footer").load("../common/foot.html");
		//          $(".mobile").load("../common/mobile.html");
	});

	//---------- M_txt fadein / fadeout ----------//
	$(window).scroll(function() {

		var num = 0;
		var win_sc = $(window).scrollTop();
		var this_sc = $(this).scrollTop();
		var M_txt = $(".M_txt");
		var sec_txt = $(".sec_txt");
		var container = $(".container")


		console.log("window : " + $(window).scrollTop());
		console.log("this_sc : " + $(this).scrollTop());

		if (win_sc > 50) {
			M_txt.addClass("M_txt_Out");
			M_txt.removeClass("M_txt_In");
			sec_txt.css("visibility", "visible");

		} else {
			M_txt.addClass("M_txt_In");
			M_txt.removeClass("M_txt_Out");
			sec_txt.css("visibility", "hidden");
		}

	});

	//---------- sct02 / 텍스트 나오기 ----------//
	$(window).scroll(function(e) {

		var win_sc = $(window).scrollTop();
		var this_sc = $(this).scrollTop();
		var sct02 = $(".sct02").offset().top;

		if (win_sc >= sct02 - 450) {
			$(".o_txt ").stop().animate({
				opacity: "1"
			});
			$(".o_cle").fadeOut().css({
				zIndex: "0"
			});
			//				

		} else {
			$(".o_cle").fadeIn().css({
				zIndex: "1"
			});
			$(".o_txt ").stop().animate({
				opacity: "0"
			});
		}
	});
	//---------- sct02 / Skill IMG ----------//	
	
	$(function(){
//		-- mouseleave fadeOut -- //
		$(".m_brackets").mouseleave(function(){
			$(".modal > .m_brackets").fadeOut();
		});
		//-------------------------//
		
		
		//-- html cilck event -- //
		$(".skil01>p:nth-child(1)").click(function(){
			$(".modal > .M_HTML").fadeIn();
		});
		$(".modal > .M_HTML").click(function(){
			$(".modal > .M_HTML").fadeOut();
		});

		
		//-- css cilck event -- //
		$(".skil01>p:nth-child(2)").click(function(){
			$(".modal > .M_CSS").fadeIn();
		});
		$(".modal > .M_CSS").click(function(){
			$(".modal > .M_CSS").fadeOut();
		});
		
		//-- JQ cilck event -- //
		$(".skil02>p:nth-child(1)").click(function(){
			$(".modal > .M_JQ").fadeIn();
		});
		$(".modal > .M_JQ").click(function(){
			$(".modal > .M_JQ").fadeOut();
		})
		
		//-- JAVA cilck event -- //
		$(".skil02>p:nth-child(2)").click(function(){
			$(".modal > .M_JAVA").fadeIn();
		});
		$(".modal > .M_JAVA").click(function(){
			$(".modal > .M_JAVA").fadeOut();
		})
		
		//-- PHOTO cilck event -- //
		$(".skil03>p:nth-child(1)").click(function(){
			$(".modal > .M_PHOTO").fadeIn();
		});
		$(".modal > .M_PHOTO").click(function(){
			$(".modal > .M_PHOTO").fadeOut();
		})
		
		//-- Illust cilck event -- //
		$(".skil03>p:nth-child(2)").click(function(){
			$(".modal > .M_ILLUST").fadeIn();
		});
		$(".modal > .M_ILLUST").click(function(){
			$(".modal > .M_ILLUST").fadeOut();
		})

	});
	
	//---------- sct03 / Share swiper ----------//
	$(function() {
		var swiper = new Swiper('.swiper-container', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			spaceBetween:0,
			autoplayDisableOnInteraction: false,
			loop: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
		});
	});
