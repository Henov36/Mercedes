'use strick'
// Header

const headerButton = document.querySelector('.header-button')
const headerButtonCross = headerButton.querySelector('img')
const headerButtonOpen = headerButton.querySelector('svg')
const adaptiveHeader = document.querySelector('.adaptive-header-content')



headerButton.addEventListener('click', () => {
	headerButtonOpen.classList.toggle('header-display-none')
	headerButtonCross.classList.toggle('header-display-none')
	adaptiveHeader.classList.toggle('content-transform')
	document.body.classList.toggle('overflow-hidden')
})

// CURSOR 

const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
if (window.innerWidth < 1024) {
	console.log('x');
	document.body.style.cursor = 'auto'
	cursorDot.style.display = 'none'
	cursorOutline.style.display = 'none'

} else {
	document.body.style.cursor = 'none'
	window.addEventListener('mousemove', (e) => {

		const posX = e.clientX;
		const posY = e.clientY;

		cursorDot.style.left = `${posX}px`
		cursorDot.style.top = `${posY}px`

		cursorOutline.style.left = `${posX}px`
		cursorOutline.style.top = `${posY}px`

		cursorOutline.animate({
			left: `${posX}px`,
			top: `${posY}px`
		}, { duration: 200, fill: 'forwards' })
	})
}


//Slider

const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	slidesPerView: 1,
	direction: 'horizontal',
	spaceBetween: 50,
	loop: false,


	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},

	navigation: {
		nextEl: '.custom-button-next',
		prevEl: '.custom-button-prev',
		disabledClass: 'swiper-button-disabled',
		hiddenClass: 'swiper-button-hidden',
	},


	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},


});

// Hovers //

// Hover row
const hoverRows = document.querySelectorAll('.hover-row')
const hoverLists = document.querySelectorAll('.hover-li')

const hoverRow = (arr) => {
	arr.forEach((row) => {
		let rowImg = row.querySelectorAll('img')

		row.addEventListener('mouseover', () => {
			row.classList.remove('disabled-row');
			rowImg.forEach((img) => {
				img.classList.remove('grayscale')
			})
		})
		row.addEventListener('mouseout', () => {
			row.classList.add('disabled-row');
			rowImg.forEach((img) => {
				img.classList.add('grayscale')
			})
		})
	})
}

hoverRow(hoverRows)


//hover for li element
const topUl = document.querySelector('.hover-ul')
const botUl = document.querySelector('.hover-ul-bot')


const hoverListHandle = (list) => {
	const listItems = list.getElementsByTagName('li')
	const span = document.createElement('span');
	span.textContent = '.';

	for (let i = 0; i < listItems.length; i++) {
		if (listItems[i].classList.contains('active')) {
			listItems[i].insertBefore(span, listItems[i].firstChild)
		}
		listItems[i].addEventListener('mouseover', (e) => {
			for (let j = 0; j < listItems.length; j++) {
				listItems[j].classList.remove('active')
			}
			e.target.classList.add('active')
			listItems[i].insertBefore(span, listItems[i].firstChild)
		})
	}
}

hoverListHandle(topUl)
hoverListHandle(botUl)


/// Scrolling text 
const scrollTextSection = document.querySelector('.section__scroll-text')
const scrollTextContent = document.querySelector('.section__scroll-content')
const scrollTextElements = document.querySelectorAll('.lights-element')
const scrollTextImg = document.querySelector('.scroll-text-img')




window.addEventListener('scroll', () => {

	scrollTextElements.forEach((e) => {

		const elemsCoords = e.getBoundingClientRect()
		const elemsTop = elemsCoords.bottom
		let sectionTopMargin = 0;

		window.innerWidth <= 768 ? sectionTopMargin = 250 : sectionTopMargin = 100

		if (elemsTop + sectionTopMargin <= window.innerHeight) {
			e.classList.remove('disabled-row')
		} else {
			e.classList.add('disabled-row')
		}
	})

	if (scrollTextImg.parentElement.classList.contains('disabled-row')) {
		scrollTextImg.classList.add('grayscale')
	} else {
		scrollTextImg.classList.remove('grayscale')
	}

	const runningLineContent = document.querySelector('.section__running-line')
	const mainContent = document.querySelector('.main__content')
	if (runningLineContent.offsetTop <= window.scrollY + window.innerHeight) {
		mainContent.classList.add('main__content-start-pos')
	}
})


///Future slide for 2 photos in adaptive
const leftSideButton = document.querySelector('.left-side-arrow')
const leftSideHiddenPhoto = document.querySelectorAll('.left-side-photo')

leftSideButton.addEventListener('click', () => {
	leftSideHiddenPhoto.forEach((e) => {
		if (!e.classList.contains('left-side-none-photo')) {
			e.classList.add('left-side-none-photo')
			leftSideButton.classList.add('arrow-transform-back')
			leftSideButton.classList.remove('arrow-transform')
		} else {
			e.classList.remove('left-side-none-photo')
			leftSideButton.classList.remove('arrow-transform-back')
			leftSideButton.classList.add('arrow-transform')
		}
	})
})

///  Acordion functionality

const accordionTopList = document.querySelector('.accordion__ul-top')
const accordionBotList = document.querySelector('.accordion__ul-bot')
const spanPlus = document.querySelectorAll('.plus-span')
const spanMinus = document.querySelectorAll('.minus-span')

const accordionShowContent = (list) => {
	const ulElems = [...list.querySelectorAll('.ul-element')]

	ulElems.forEach((elem) => {
		const header = elem.firstElementChild;
		const content = elem.lastElementChild
		const spanPlus = header.querySelector('.plus-span')
		const spanMinus = header.querySelector('.minus-span')
		const spans = header.querySelectorAll('span')

		header.addEventListener('click', () => {
			if (content.classList.contains('accordion-content-active')) {
				content.classList.remove('accordion-content-active')
				content.classList.add('accordion-content-disabled')
				spanPlus.classList.remove('accordion-content-disabled')
				spanMinus.classList.add('accordion-content-disabled')
			} else {
				ulElems.forEach(otherItem => {

					otherItem.lastElementChild.classList.remove('accordion-content-active')
					otherItem.lastElementChild.classList.add('accordion-content-disabled')
				})
				content.classList.add('accordion-content-active')
				content.classList.remove('accordion-content-disabled')
				spanPlus.classList.add('accordion-content-disabled')
				spanMinus.classList.remove('accordion-content-disabled')
			}
		})
	})
}

accordionShowContent(accordionTopList)
accordionShowContent(accordionBotList)


//button event

const buttons = document.querySelectorAll('.button')

buttons.forEach((e) => {

	e.addEventListener('click', (e) => {
		e.preventDefault()
	})
})


//Email Validate

const form = document.querySelector('.input-container')
const inputEmail = document.querySelector('.email')
const emailButton = document.querySelector('.email-button')
const emailSvg = document.querySelector('.email-svg')

const inputColorValid = '#F0783C'
const inputColorNotValid = '#F0423C'
// document.documentElement.style.setProperty('--email-valid', inpurColorValid);


form.addEventListener('submit', (e) => {
	console.log(e);
	e.preventDefault();
	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	if (inputEmail.checked) {
		console.log('wqwqwq');
	}

	if (inputEmail.value === '') {
		document.documentElement.style.setProperty('--email-valid', inputColorNotValid);
		form.classList.add('invalid-email')
		emailSvg.style.transform = 'rotate(90deg)'
	} else if (!inputEmail.value.match(pattern)) {
		console.log('gt');
		document.documentElement.style.setProperty('--email-valid', inputColorNotValid);
		form.classList.add('invalid-email')
		emailSvg.style.transform = 'rotate(90deg)'
	} else {
		document.documentElement.style.setProperty('--email-valid', inputColorValid);
		form.classList.remove('invalid-email')
		emailSvg.style.transform = 'rotate(0deg)'
		inputEmail.value = ''
	}
})








