const faqs = document.querySelectorAll('.c-faq');

for (const faq of faqs) {
	faq.addEventListener('click', function (e) {
		this.classList.toggle('active');
	});
}