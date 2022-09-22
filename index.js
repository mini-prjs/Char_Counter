const textarea = document.getElementById('textarea');
const total_counter = document.getElementById('total-counter');
const remaining_counter = document.getElementById('remaining-counter');
textarea.addEventListener('input', () => {
	const textLength = textarea.value.length;
	total_counter.innerText = textLength;
	remaining_counter.innerText = textarea.getAttribute("maxLength") - textLength;
});