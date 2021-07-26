var popupButton = document.querySelector('.button-popup-js')
var popup = document.querySelector('.popup')
var popupCloseButton = document.querySelector('.popup-close-js')
var inputFocus = popup.querySelector('input')

popupButton.addEventListener('click', function () {
	popup.classList.add('popup_open')
	inputFocus.focus()
})

popupCloseButton.addEventListener('click', function () {
	popup.classList.remove('popup_open')
	popupButton.focus()
})

window.addEventListener('keydown', function (event) {
	if (event.code === 'Escape') {
		popup.classList.remove('popup_open')
		popupButton.focus()
	}
})
