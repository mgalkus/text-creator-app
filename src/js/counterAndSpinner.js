export const totalCounterInterval = 20000;
export const countTimeOne = 5000;
export const countTimeTwo = 15000;
const qs = document.querySelector.bind(document);
const qsAll = document.querySelectorAll.bind(document);

export const displayCounterScreen = () => {
	const removeables = qsAll('.removeable');
	const landing = qs('.landing');
	const spinnerText = qs('.landing-spinner-text');

	for (let i = 0; i < removeables.length; i++) {
		const element = removeables[i];
		element.classList.add('removed');
	}
	landing.classList.add('full-screen');
	spinnerText.classList.add('active');
};

export const removeCounterScreen = () => {
	const removeables = qsAll('.removeable');
	const landing = qs('.landing');
	const spinnerCont = qs('.landing-spinner-container');
	const spinnerText = qs('.landing-spinner-text');

	for (let i = 0; i < removeables.length; i++) {
		const element = removeables[i];
		element.classList.remove('removed');
	}
	landing.classList.remove('full-screen');
	spinnerCont.classList.remove('active');
	spinnerText.classList.remove('active');
};

export const runSpinner = () => {
	const spinnerCont = qs('.landing-spinner-container');
	const spinner = qs('.spinner');

	spinnerCont.classList.add('active');

	if (spinner.classList.contains('fading')) {
		spinner.classList.remove('fading');
	}
};

export const removeSpinner = () => {
	const spinner = qs('.spinner');

	spinner.classList.add('fading');
};
