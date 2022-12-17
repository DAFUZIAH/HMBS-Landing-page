var rootElement = document.documentElement
var menu = document.querySelector('.burger-menu')
var overlay = document.querySelector('.burger-menu-overlay')
var button = document.querySelector('.product-info-details')
var buttonChanvre = document.querySelector('.product-info-details.chanvre')
var buttonSoja = document.querySelector('.product-info-details.soja')
var sliderColza = document.querySelector('.product-info-details-content.colza')
var sliderChanvre = document.querySelector('.product-info-details-content.chanvre')
var sliderSoja = document.querySelector('.product-info-details-content.soja')
var user = document.querySelector('.shop-section')
var banner = document.querySelector('.banner')
var bannerButton = document.querySelector('.banner-remove')
var userButton = document.querySelector('.shop-user')
var userOverlay = document.querySelector('.connexion')
var topButton = document.querySelector('.top-button')

// burger menu

var menuMove = function () {
	menu.classList.toggle('is-active')
}

menu.addEventListener('click', menuMove)

var overlayAdd = function () {
	overlay.classList.toggle('is-active')
}

menu.addEventListener('click', overlayAdd)


// product details

var openSlider = function () {
	sliderColza.classList.toggle('is-active')
	button.classList.toggle('is-active')
}

button.addEventListener('click', openSlider)

var openSlider2 = function () {
	sliderChanvre.classList.toggle('is-active')
	buttonChanvre.classList.toggle('is-active')
}

buttonChanvre.addEventListener('click', openSlider2)

var openSlider3 = function () {
	sliderSoja.classList.toggle('is-active')
	buttonSoja.classList.toggle('is-active')
}

buttonSoja.addEventListener('click', openSlider3)

// banner

var closeBanner = function () {
	banner.classList.add('no-display')
}

bannerButton.addEventListener('click', closeBanner)

// User connexion

var userConnexion = function () {
	userOverlay.classList.toggle('is-active')
}

userButton.addEventListener('click', userConnexion)

// add class when scroll

window.onscroll = function () {
	if (window.pageYOffset >= 300) {
		user.classList.add("user-fixed")
		user.classList.add("user-discover")
	} else {
		user.classList.remove("user-fixed")
		user.classList.remove("user-discover")
	}
	if (window.pageYOffset >= 4000) {
		topButton.classList.add('is-active')
	} else {
		topButton.classList.remove('is-active')
	}
}

// top button

function scrollToTop() {
	rootElement.scrollTo({
		top: 0,
		behavior: "smooth",
	})
}

topButton.addEventListener('click', scrollToTop)
