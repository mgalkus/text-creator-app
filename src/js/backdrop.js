export const showBackdrop = () => {
	const fixedButton = qs('.fixed-header-button');
	const fixedHeader = qs('.fixed-header');
	const settingsInputCont = qs('.landing-settings-input');
	const outputSection = qs('.output');
	const landingCont = qs('.landing-container');
	const landingSettings = qs('.landing-settings-input');
	const textarea = qs('.landing-input-textarea');
	const backdropCross = qs('.backdrop-cross-container');
	let nodes = landingCont.children;
	const logo = qs('.landing-logo-link');

	fixedButton.addEventListener('click', () => {
		// Showing cross, backdrop and overflow-hidden removing fixedHeader, removing pointer events from outputSection
		backdropCross.style.display = 'flex';
		settingsInputCont.classList.add('in-backdrop');
		document.body.classList.add('overflow-hidden');
		fixedHeader.classList.remove('active');
		outputSection.style.pointerEvents = 'none';

		// Removing all children from landingCont and showing only landingSettings; removing padding
		for (let i = 0; i < nodes.length; i++) {
			nodes[i].style.display = 'none';
		}
		// landingCont.style.padding = '0';
		landingSettings.style.display = 'block';
		logo.style.display = 'block';

		// Allowing scroll on textarea (so it's more clear for mobile user they can't scroll parent element by scrolling textarea)
		textarea.addEventListener(
			'input',
			() => {
				textarea.style.height = 'auto';
				textarea.style.overflow = 'scroll';
			},
			false
		);
	});
};

export const hideBackdropfromClose = () => {
	const settingsInputCont = qs('.landing-settings-input');
	const outputSection = qs('.output');
	const landingCont = qs('.landing-container');
	const backdropCross = qs('.backdrop-cross-container');
	let nodes = landingCont.children;

	// Showing all children of landingCont again and resetting padding
	for (let i = 0; i < nodes.length; i++) {
		nodes[i].style.display = 'block';
	}
	// landingCont.style.padding = '';

	// Hiding cross, removing overflow hidden from body, removing modal and showing fixedHeader
	backdropCross.style.display = 'none';
	document.body.classList.remove('overflow-hidden');
	settingsInputCont.classList.remove('in-backdrop');

	// Allowing pointer events on outputSection again
	if (typeof outputSection != undefined && outputSection != null) {
		outputSection.style.pointerEvents = 'unset';
	} else return;
};

export const hideBackdropFromGenerate = () => {
	const settingsInputCont = qs('.landing-settings-input');
	const fixedHeader = qs('.fixed-header');
	const outputSection = qs('.output');
	const landingCont = qs('.landing-container');
	const backdropCross = qs('.backdrop-cross-container');
	let nodes = landingCont.children;

	// Showing all children of landingCont again and resetting padding
	for (let i = 0; i < nodes.length; i++) {
		nodes[i].style.display = 'block';
	}
	// landingCont.style.padding = '';

	// Hiding cross, removing overflow hidden from body, removing modal and showing fixedHeader
	backdropCross.style.display = 'none';
	document.body.classList.remove('overflow-hidden');
	settingsInputCont.classList.remove('in-backdrop');
	fixedHeader.classList.add('active');

	// Allowing pointer events on outputSection again
	if (typeof outputSection != undefined && outputSection != null) {
		outputSection.style.pointerEvents = 'unset';
	} else return;
};
