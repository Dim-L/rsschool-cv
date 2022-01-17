const allBtn = document.querySelectorAll('.portfolio-category__btn')
const allPhoto = document.querySelectorAll('.gallery__photo')

allBtn.forEach(item => item.addEventListener('click', show))

function show() {
	allBtn.forEach(item => item.style.backgroundColor = 'black')
	this.style.backgroundColor = '#BDAE82'

	allPhoto.forEach(item => {
		item.style.display = item.dataset.pora === this.dataset.btn 
		? 'inline' 
		: 'none'
	})
}
