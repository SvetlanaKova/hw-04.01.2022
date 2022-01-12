
// document.querySelector('.i-1').value = document.querySelector('.i-1').value.replace(/[^a-zа-яё\s]/gi, '');

function deletDigits (str) {
	return str.replace(/\d/g, '');
}
$('body').on('input', '.input-words', function(){

	this.value = this.value.replace(/[^a-zа-яё\s]/gi, '');

});

// btn.onclick = unvisibleText;
// function unvisibleText () {
	
// 	document.querySelector('.text').innerHTML = " ";
// }