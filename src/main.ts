import './scss/styles.scss'

/**
 * Selecting HTML-elements
 */

// buttons
const startBtn = document.querySelector('#startBtn') as HTMLDivElement
const locationFinishedBtn = document.querySelector('#locationFinishedBtn') as HTMLDivElement
const fillInfoFinishedBtn = document.querySelector('#fillInfoFinishedBtn') as HTMLDivElement
const contactInfoFinishedBtn = document.querySelector('#contactInfoFinishedBtn') as HTMLDivElement
const backToStartBtn = document.querySelector('#backToStartBtn') as HTMLDivElement

// pages
const firstPage = document.querySelector('#firstPage') as HTMLElement
const localisation = document.querySelector('#localisation') as HTMLElement
const fillInfo = document.querySelector('#fill-info') as HTMLElement
const kontaktuppgifter = document.querySelector('#kontaktuppgifter') as HTMLElement
const lastPage = document.querySelector('#lastPage') as HTMLElement



/**
 * Eventlisteners
 */
startBtn.addEventListener('click', () => {
	console.log('You clicked the startBtn, now localisation page ought to be shown')

	firstPage.style.display = "none"
	localisation.style.display = "flex"
})

locationFinishedBtn.addEventListener('click', () => {

	localisation.style.display = "none"
	fillInfo.style.display = "flex"
})

fillInfoFinishedBtn.addEventListener('click', () => {

	fillInfo.style.display = "none"
	kontaktuppgifter.style.display = "flex"
})

contactInfoFinishedBtn.addEventListener('click', () => {

	kontaktuppgifter.style.display = "none"
	lastPage.style.display = "flex"
})

backToStartBtn.addEventListener('click', () => {

	lastPage.style.display = "none"
	firstPage.style.display = "flex"
})
