const quotes = [{
		name: 'Stephen King',
		quote: 'Get busy living or get busy dying.'
	},
	{
		name: 'John F. Kennedy',
		quote: 'Those who dare to fail miserably can achieve greatly.'
	},

	{
		name: 'Abraham Lincoln',
		quote: 'I am a success today because I had a friend who believed in me and i didn\'t have the heart to let him down.'
	},
	{
		name: 'Leonardo Da Vinci',
		quote: 'It had long since come to my attention that people of accomplishment rarely set back and let things happen to them.They went out and happened to things. '
	},
	{
		name: 'Leo Tolstoy',
		quote: 'If you want to be happy, be.'
	}
],
quoteBtn = document.querySelector('#quoteBtn'),
quoteAuthor = document.querySelector('#quoteAuthor'),
quote = document.querySelector('#quote'),
displayQuote = () => {
	let number = Math.floor(Math.random() * quotes.length);
	quoteAuthor.innerHTML = quotes[number].name;
	quote.innerHTML = quotes[number].quote;
}
quoteBtn.addEventListener('click', displayQuote);
