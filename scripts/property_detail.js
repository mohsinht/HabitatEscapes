$(document).ready(function() {

	$('.accordion-item-content').on("hide.bs.collapse",function(){
		// alert( $(this).attr("id"));
		var id = $(this).attr("id");
		var idPlus = '#'+id + 'Plus';
		var idMinus = '#'+id+ 'Minus';
		
		$(idPlus).show();
		$(idMinus).hide();
	});

	$('.accordion-item-content').on("show.bs.collapse",function(){
		// alert( $(this).attr("id"));
		var id = $(this).attr("id");
		var idPlus = '#'+id + 'Plus';
		var idMinus = '#'+id+ 'Minus';
		
		$(idPlus).hide();
		$(idMinus).show();
	});
});
	