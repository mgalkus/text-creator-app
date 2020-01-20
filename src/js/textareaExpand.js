export const textareaExpand = () => {
	const qs = document.querySelector.bind(document);
	const textarea = qs('.landing-input-textarea');
	const textareaDiv = qs('.landing-input-textarea-div');

	//Didn't use keypress event, as keypress event doesn't detect backspace and delete keys.
	textarea.addEventListener(
		'input',
		() => {
			var content = textarea.value;
			textareaDiv.innerHTML = content;
			textarea.style.height = textareaDiv.scrollHeight + 60 + 'px';
		},
		false
	);
};
