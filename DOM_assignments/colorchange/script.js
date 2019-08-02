const colorBtn = document.querySelector('.colorBtn'),
bodyBcg = document.querySelector('body'),
colors = ['yellow', 'red', 'green', '#5b9938'],
changeColor = () => {
	let random = Math.floor(Math.random() * colors.length);
	bodyBcg.style.backgroundColor = colors[random];
}
colorBtn.addEventListener('click', changeColor);
