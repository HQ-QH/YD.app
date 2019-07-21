$( function () {
	$('#fanhui').click(function () {
		history.go(-1);
	})
	$('.back').click(function () {
		history.go(-1);
	})
	$('#xiangQing').click(function () {
		window.location.href ="xiangqing.html";
	})
	$('#xiangQing1').click(function () {
		window.location.href ="xiangqing.html";
	})
	$('#xiangQing2').click(function () {
		window.location.href ="xiangqing.html";
	})
	$('#xiangQing3').click(function () {
		window.location.href ="xiangqing.html";
	})
	
	$('.footer ul li').eq(0).click(function () {
		window.location.href = "index.html"
	})
	
	$('.footer ul li').eq(2).click(function () {
		window.location.href = "Findgood.html"
	})
	
	$('.footer ul li').eq(3).click(function () {
		window.location.href = "shopCart.html"
	})
	
	$('.footer ul li').eq(4).click(function () {
		window.location.href = "my.html"
	})
	
	
})
