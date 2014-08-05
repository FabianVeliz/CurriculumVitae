$(document).on('ready',_ready);

var lang = 'en';
var lang_en = {}
var lang_es = {
	'experience':'Experiencia',
	'skills':'Habilidades',
	'aboutme':'Acerca de mí',
	'frontenddeveloper':'Desarrollador Frontend'
}


function _ready(){

	$("[data-world]").each(function(){
		var key = $(this).data('world');
		lang_en[key]=$(this).html();
	});

	$('.language ul li').on('click',changeLanguage);
}


function changeLanguage(){

	lang= $(this).data('id');

	$("[data-world]").fadeOut(function(){

		$(this).fadeIn();

		var key = $(this).data('world');

		eval('var l=lang_'+lang);

		if(l[key]!=undefined)
			$(this).html(l[key]);

	});
	
}
