////////////////////header, footer로드//////////////////////
$(function () {
	$("header").load("header.html");
	$("footer").load("footer.html");

	new WOW().init();
	AOS.init();
});

////////////////////////main 슬라이드////////////////////////////////////
! function (e) {
	"undefined" == typeof module ? this.charming = e : module.exports = e
}(function (e, n) {
	"use strict";
	n = n || {};
	var t = n.tagName || "span",
		o = null != n.classPrefix ? n.classPrefix : "char",
		r = 1,
		a = function (e) {
			for (var n = e.parentNode, a = e.nodeValue, c = a.length, l = -1; ++l < c;) {
				var d = document.createElement(t);
				o && (d.className = o + r, r++), d.appendChild(document.createTextNode(a[l])), n.insertBefore(d, e)
			}
			n.removeChild(e)
		};
	return function c(e) {
		for (var n = [].slice.call(e.childNodes), t = n.length, o = -1; ++o < t;) c(n[o]);
		e.nodeType === Node.TEXT_NODE && a(e)
	}(e), e
});


/////////////////////section01 box hover ///////////////////////////////////////		
$(function () {
	var i = $(this).index();
	$(".item01>li").mouseenter(function () {
		$(this).addClass("shadow");

	});
	$(".item01>li").mouseleave(function () {
		$(this).removeClass("shadow");

	});

	$(".item02>li").mouseenter(function () {
		$(this).addClass("shadow");

	});
	$(".item02>li").mouseleave(function () {
		$(this).removeClass("shadow");

	});
});



//////////////////////section03//////////////////////////////////////

$(function () {
	$(".photo > ul > li").eq(0).css("display","block");
	
	
	$(".photo_txt > ul > li").click(function () {
		var i = $(this).index();	
		var photo_index = $(".photo > ul > li").index(this);
		
		
//		alert("photo : "+$(".photo > ul > li").index(this));
		console.log("this index : " + $(this).index());
		console.log("photo_index : " + $(".photo > ul > li").index(this));
		
		
		$(".photo > ul > li").fadeOut();
		$(".photo > ul > li").eq(i).fadeIn();
	});
});










