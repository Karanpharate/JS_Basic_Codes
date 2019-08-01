let counter = document.querySelector('.counter'),
count = 0;
const addCount = document.querySelector('#addCountBtn'),
lowerCount = document.querySelector('#lowerCountBtn'),
incrementCounter = () => {
	count++;
	console.log(count);
	counter.innerHTML = count;
	if (counter.innerHTML > '0') {
		counter.style.color = '#4caf50';
	} else if (counter.innerHTML === '0') {
		counter.style.color = 'white';
	}
},
decrementCounter = () => {
	count--;
	counter.innerHTML = count;
	if (counter.innerHTML < '0') {
		counter.style.color = 'red';
	} else if (counter.innerHTML === '0') {
		counter.style.color = 'white';
	}
};
addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);
