import * as toggleSettings from './toggleSettings.js';
import * as textareaExpand from './textareaExpand.js';
import * as displaySliderValues from './displaySliderValues';
import * as countInput from './countInput';
import * as displayOutputsAndSpinner from './displayOutputsAndSpinner.js';
import * as counterAndSpinner from './counterAndSpinner.js';
import * as settingsInBackdrop from './backdrop.js';
import * as fixedHeaderVisibilty from './fixedHeaderVisibilty.js';

window.qs = document.querySelector.bind(document);
window.qsAll = document.querySelectorAll.bind(document);

window.addEventListener('load', () => {
	const qs = document.querySelector.bind(document);
	const backdropCross = qs('.backdrop-cross-container');

	toggleSettings.toggleSettings();
	textareaExpand.textareaExpand();
	displaySliderValues.displayLength();
	displaySliderValues.displayUniqueness();
	displaySliderValues.displayDeepness();
	countInput.countInput();

	const generateOutputs = (() => {
		const generateButtons = qsAll('.generation-button');
		const waitingCont = qs('.landing-waiting-error-container');

		generateButtons.forEach(button => {
			button.addEventListener('click', () => {
				counterAndSpinner.displayCounterScreen();
				counterAndSpinner.runSpinner();
				backdropCross.style.display = 'none';
				waitingCont.classList.remove('active');
				displayOutputsAndSpinner.displayOutputsAndSpinner();
				// Again alowing autoexpanding for textarea in case generateButton is clicked from backdrop:
				textareaExpand.textareaExpand();
				fixedHeaderVisibilty.fixedHeaderVisibilty();
			});
		});
	})();

	settingsInBackdrop.showBackdrop();

	backdropCross.addEventListener('click', () => {
		// Again alowing autoexpanding for textarea after closing backdrop
		settingsInBackdrop.hideBackdropfromClose();
		textareaExpand.textareaExpand();
	});
});
