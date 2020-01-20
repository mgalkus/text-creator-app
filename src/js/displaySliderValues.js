const qs = document.querySelector.bind(document);

export const displayLength = () => {
	const lengthSlider = qs('.landing-settings-length-slider');
	const lengthNr = qs('.landing-settings-length-number');

	lengthNr.innerHTML = lengthSlider.value;
	lengthSlider.addEventListener('input', () => {
		lengthNr.innerHTML = lengthSlider.value;

		//Fills slider progress on input. Based on https://stackoverflow.com/a/57153340/12100458
		lengthSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 ' + lengthSlider.value / 10.24 + '%, #e4e4e4 ' + lengthSlider.value / 10.24 + '%, #e4e4e4 100%)';
	});
};

export const displayUniqueness = () => {
	const uniquenessSlider = qs('.landing-settings-uniqueness-slider');
	const uniquenessNr = qs('.landing-settings-uniqueness-number');

	uniquenessNr.innerHTML = uniquenessSlider.value;
	uniquenessSlider.addEventListener('input', function() {
		uniquenessNr.innerHTML = uniquenessSlider.value;

		//Fills slider progress on input. Based on https://stackoverflow.com/a/57153340/12100458
		if (uniquenessSlider.value == 0.1) {
			uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 0%, #e4e4e4 0%, #e4e4e4 100%)';
		} else if (uniquenessSlider.value == 0.2) {
			uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 11%, #e4e4e4 11%, #e4e4e4 100%)';
		} else if (uniquenessSlider.value == 0.3) {
			uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 22%, #e4e4e4 22%, #e4e4e4 100%)';
		} else if (uniquenessSlider.value == 0.4) {
			uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 33%, #e4e4e4 33%, #e4e4e4 100%)';
		} else if (uniquenessSlider.value == 0.5) {
			uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 44%, #e4e4e4 44%, #e4e4e4 100%)';
		} else if (uniquenessSlider.value == 0.6) {
			uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 55%, #e4e4e4 55%, #e4e4e4 100%)';
		} else if (uniquenessSlider.value == 0.7) {
			uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 66%, #e4e4e4 66%, #e4e4e4 100%)';
		} else if (uniquenessSlider.value == 0.8) {
			uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 77%, #e4e4e4 77%, #e4e4e4 100%)';
		} else if (uniquenessSlider.value == 0.9) {
			uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 88%, #e4e4e4 88%, #e4e4e4 100%)';
		} else if (uniquenessSlider.value == 1) {
			uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 100%, #2980B9 0%, #e4e4e4 0%, #e4e4e4 0%)';
		}
	});
};

export function displayDeepness() {
	const deepnessSlider = qs('.landing-settings-deepness-slider');
	const deepnessNr = qs('.landing-settings-deepness-number');

	deepnessNr.innerHTML = deepnessSlider.value;
	deepnessSlider.addEventListener('input', function() {
		deepnessNr.innerHTML = deepnessSlider.value;

		//Fills slider progress on input. Based on https://stackoverflow.com/a/57153340/12100458
		deepnessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 ' + deepnessSlider.value + '%, #e4e4e4 ' + deepnessSlider.value + '%, #e4e4e4 100%)';
	});
}
