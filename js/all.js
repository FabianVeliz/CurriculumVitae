$(document).on('ready',_ready);

var lang_es = {
	'experience':'Experiencia',
	'skills':'habilidades'
}

var lang_en = {}


function _ready(){
	$('.language ul li').on('click',changeLanguage);
}


function changeLanguage(){

	var itemToChange = $.find("[data-world]");


	/*itemToChange.each(function(){
		lang_en[$(this).data('world')]='';
	});
	*/
	console.log(itemToChange);

	/*
	$.each(lang_en, function(result,item) {
		console.log(result,item);
	});
	*/
	
}