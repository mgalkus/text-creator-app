export const copyTextOutput = () => {
	const qsAll = document.querySelectorAll.bind(document);
	const copyButtons = qsAll('.output-copy-link');
	const copyMessages = qsAll('.output-copy-message');
	const outputs = qsAll('.output-outputed-text');

	for (let i = 0; i < copyButtons.length; i++) {
		const element = copyButtons[i];

		element.addEventListener('click', () => {
			if (window.getSelection) {
				let selection = window.getSelection();
				let range = document.createRange();
				range.selectNodeContents(outputs[i]);
				selection.removeAllRanges();
				selection.addRange(range);
				document.execCommand('Copy');
				selection.removeAllRanges();
			}

			copyMessages[i].classList.add('active');
			setTimeout(() => {
				copyMessages[i].classList.add('visible');
			}, 10);
			setTimeout(() => {
				copyMessages[i].classList.remove('visible');
			}, 1000);
			setTimeout(() => {
				copyMessages[i].classList.remove('active');
			}, 1300);
		});
	}
};
