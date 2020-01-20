export const countInput = () => {
	const qs = document.querySelector.bind(document);
	const textareaCont = qs('.landing-input-textarea-container');
	const textarea = qs('.landing-input-textarea');
	const inputLengthLog = qs('.landing-input-count');
	const button = qs('.landing-input-generate-text-button');
	const textareaCross = qs('.textarea-cross');

	button.classList.add('disabled');
	textarea.addEventListener('input', () => {
		if (textarea.value.length > 1000) {
			inputLengthLog.classList.add('too-long');
			inputLengthLog.innerHTML = 'Too many characters: ' + textarea.value.length + '/1000';
			button.classList.add('disabled');
			textarea.classList.add('red-border');
			textareaCont.classList.add('on-input');
		} else if (textarea.value.length > 0 && /[a-z]/i.test(textarea.value) == false) {
			button.classList.add('disabled');
			inputLengthLog.innerHTML = '0/1000';
		} else if (textarea.value.length > 0 && textarea.value.length <= 1000 && inputLengthLog.classList.contains('too-long')) {
			inputLengthLog.classList.remove('too-long');
			inputLengthLog.innerHTML = textarea.value.length + '/1000';
			button.classList.remove('disabled');
			textarea.classList.remove('red-border');
			textareaCont.classList.add('on-input');
		} else if (textarea.value.length > 0 && textarea.value.length <= 1000 && /[a-z]/i.test(textarea.value)) {
			button.classList.remove('disabled');
			inputLengthLog.innerHTML = textarea.value.length + '/1000';
			textareaCont.classList.add('on-input');
		} else if (textarea.value.length == 0) {
			button.classList.add('disabled');
			inputLengthLog.innerHTML = textarea.value.length + '/1000';
			textareaCont.classList.remove('on-input');
		}
	});

	textareaCross.addEventListener('click', () => {
		textarea.value = '';
		textareaCont.classList.remove('on-input');
		inputLengthLog.innerHTML = '0/1000';
	});
};
