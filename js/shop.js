var i = 0
var f = 0
var s = 0
var t = 0
var d = 0
var c = 0
var r = 17
var m = 45

var cart = document.querySelector('.shop-cart')
var shopOverlay = document.querySelector('.shop-overlay')
var shopCloseButton = document.querySelector('.shop-overlay-content-close-button')
var productMove = document.querySelectorAll('.product')
var cartValue = document.querySelector('.shop-cart-number-value')
var buyButton = document.querySelectorAll('.product-info-buyButton')
var colzaValue = document.querySelector('.colza-value')
var colzaButton = document.querySelector('.product-info-buyButton.colza')
var productColza = document.querySelector('.shop-product.colza')
var removeColza = document.querySelector('.remove.colza')
var chanvreValue = document.querySelector('.chanvre-value')
var chanvreButton = document.querySelector('.product-info-buyButton.chanvre')
var productChanvre = document.querySelector('.shop-product.chanvre')
var removeChanvre = document.querySelector('.remove.chanvre')
var sojaValue = document.querySelector('.soja-value')
var sojaButton = document.querySelector('.product-info-buyButton.soja')
var productSoja = document.querySelector('.shop-product.soja')
var removeSoja = document.querySelector('.remove.soja')
var discoverValue = document.querySelector('.discover-value')
var discoverButton = document.querySelector('.product-info-buyButton.discover')
var productDiscover = document.querySelector('.shop-product.discover')
var removeDiscover = document.querySelector('.remove.discover')
var totalValue = document.querySelector('.total-value')
var statement = document.querySelector('.cart-statement')






var openShopOverlay = function () {
	shopOverlay.classList.add('is-active')
}

cart.addEventListener('click', openShopOverlay)

var closeShopOverlay = function () {
	shopOverlay.classList.remove('is-active')
}

shopCloseButton.addEventListener('click', closeShopOverlay)


// cart add article + animation 

var buttonClick = function () {
	i++;
	cartValue.value = i;
	cart.classList.add('is-animate')
	setTimeout(function () {
		cart.classList.remove('is-animate')
	}, 500);
	if (i >= 1) {
		statement.classList.add('no-display')
	}
}

// add ColzaProduct to cart 

var colzaAddToCart = function () {
	f++;
	colzaValue.value = f;
	c++;
	totalValue.value = c * r;
	if (f > 0) {
		productColza.classList.add('display')
	} else {
		productColza.classList.remove('display')
	}
}

colzaButton.addEventListener('click', colzaAddToCart)

var chanvreAddToCart = function () {
	s++;
	chanvreValue.value = s;
	c++;
	totalValue.value = c * r;
	if (s > 0) {
		productChanvre.classList.add('display')
	} else {
		productChanvre.classList.remove('display')
	}
}

chanvreButton.addEventListener('click', chanvreAddToCart)

var sojaAddToCart = function () {
	t++;
	sojaValue.value = t;
	c++;
	totalValue.value = c * r;
	if (t > 0) {
		productSoja.classList.add('display')
	} else {
		productSoja.classList.remove('display')
	}
}

sojaButton.addEventListener('click', sojaAddToCart)

var discoverAddToCart = function () {
	d++;
	discoverValue.value = d;
	c++;
	totalValue.value = c * m;
	if (d > 0) {
		productDiscover.classList.add('display')
	} else {
		productDiscover.classList.remove('display')
	}
}

discoverButton.addEventListener('click', discoverAddToCart)

// adapt the value of the cart and inside de shop

var colzaRemove = function () {
	colzaValue.value--;
	cartValue.value--;
	f--;
	i--;
	c--;
	totalValue.value = c * r;
	if (colzaValue.value <= 0) {
		productColza.classList.remove('display')
	}
}

removeColza.addEventListener('click', colzaRemove)

var chanvreRemove = function () {
	chanvreValue.value--;
	cartValue.value--;
	s--;
	i--;
	c--;
	totalValue.value = c * r;
	if (chanvreValue.value <= 0) {
		productChanvre.classList.remove('display')
	}
}

removeChanvre.addEventListener('click', chanvreRemove)

var sojaRemove = function () {
	sojaValue.value--;
	cartValue.value--;
	t--;
	i--;
	c--;
	totalValue.value = c * r;
	if (sojaValue.value <= 0) {
		productSoja.classList.remove('display')
	}
}

removeSoja.addEventListener('click', sojaRemove)

var discoverRemove = function () {
	discoverValue.value--;
	cartValue.value--;
	d--;
	i--;
	c--;
	totalValue.value = c * m;
	if (discoverValue.value <= 0) {
		productDiscover.classList.remove('display')
	}
}

removeDiscover.addEventListener('click', discoverRemove)
