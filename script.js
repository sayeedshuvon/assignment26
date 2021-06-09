$(document).ready(function(){

$('button').click(function(){
alert("hello everyone");
});

$('.enter').mouseenter(function(){
	alert("jquery");
});


$('#hide').click(function(){
	$('.message').hide(1000);
});

$('#show').click(function(){
	$('.message').show(1000);
});


});