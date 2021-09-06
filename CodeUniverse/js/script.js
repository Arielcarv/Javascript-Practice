console.log('teste');

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('.toggle');
const textNav = document.querySelectorAll('.text-nav');

for (const element of toggle) {
	element.addEventListener('click', () => {
		nav.classList.toggle('show');
	});
}

for (const element of textNav) {
	element.addEventListener('click', () => {
		nav.classList.toggle('show');
		console.log('clickado');
	});
}

/* FIXED NAV */
const header = document.querySelector('#header');

window.addEventListener('scroll', () => {
	let getScrollPosition = window.scrollY;
	console.log(getScrollPosition);
	if (getScrollPosition > 10) {
		header.style.position = 'fixed';
		header.style.background = '#FFF';
		header.style.borderBottom = '1px solid rgb(248,248,248)';
	} else {
		header.style.position = 'relative';
		header.style.background = 'transparent';
		header.style.border = '0';
	}
});

/* FORMS */

const validForm = (event) => {
	var inputName = document.querySelector('#name');
	var inputPhone = document.querySelector('#phone');
	var inputEmail = document.querySelector('#email');
	var inputMessage = document.querySelector('#message');

	if (
		inputName.value === '' ||
		inputPhone.value === '' ||
		inputEmail.value === '' ||
		inputMessage.value === ''
	) {
		alert('Field needs to be filled!');
		inputName.focus();
		return false;
	}
	alert('Message sent!');
};
