export const toggleSettings = () => {
	const qs = document.querySelector.bind(document);
	const lineV = qs('.line-v');
	const wholeSettings = qs('.landing-settings');
	const settingsTop = qs('.landing-settings-top');
	const settingsBottom = qs('.landing-settings .landing-settings-bottom');

	const displayCorrectSize = () => {
		if (wholeSettings.classList.contains('active')) {
			lineV.classList.toggle('remove-v');
			settingsBottom.classList.toggle('active');
			setTimeout(() => {
				wholeSettings.classList.toggle('active');
				settingsTop.classList.toggle('active');
				settingsBottom.style.display = 'none';
			}, 200);
		} else {
			lineV.classList.toggle('remove-v');
			settingsTop.classList.toggle('active');
			wholeSettings.classList.toggle('active');

			setTimeout(() => {
				settingsBottom.style.display = 'block';
			}, 200);

			setTimeout(() => {
				settingsBottom.classList.toggle('active');
			}, 200);
		}
	};

	if (window.matchMedia('(max-width: 920px)').matches) {
		settingsTop.addEventListener('click', () => {
			displayCorrectSize();
		});
	} else return;
};
