jQuery(document).ready(function($){
	if ($(window).scrollTop() != "0")
		$(".scroll-to-top").fadeIn(1200) //如果距离顶部的距离不为0，显示.scroll-to-top
	var scrollDiv = $(".scroll-to-top");
	$(window).scroll(function()
	{
		if ($(window).scrollTop() == "0")
			$(scrollDiv).fadeOut(350)//如果距离顶部的距离为0，隐藏scrollDiv
		else
			$(scrollDiv).fadeIn(1200)//其他情况下，显示scrollDiv
	});
	$(".scroll-to-top").click(function(){
		$("HTML, body").animate({
			scrollTop: 0 //点击按钮，滚动回到顶部
		}, 600)
	})
 
});