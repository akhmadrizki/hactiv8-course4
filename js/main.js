// $('#tes').on('click', 'a', function(event)){
// 	event.preventDefault();
// 	console.log($(this).text());
// }

$('.testing').on('click', function(e){
	$('body').append(`<button class="tes">dengan jquery</button>`)
})

$('.testing').on('click', '.tes', function(e){
	alert('click');
});