export const fixedHeaderVisibilty = () => {
	const qs = document.querySelector.bind(document);
	const outputSection = qs('.output');
	const fixedHeader = qs('.fixed-header');

	window.addEventListener('scroll', () => {
		if (document.body.classList.contains('overflow-hidden')) {
			return;
		} else {
			if (window.scrollY < outputSection.offsetTop) {
				fixedHeader.classList.remove('active');
			} else if (window.scrollY >= outputSection.offsetTop) {
				fixedHeader.classList.add('active');
			}
		}
	});
};
