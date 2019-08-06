const validation = () => {
	let user = document.getElementById('userName').value,
		password = document.getElementById('pass').value,
		conPassword = document.getElementById('conPass').value,
		mobile = document.getElementById('mobile').value,
		email = document.getElementById('email').value,
		letters = /^[A-Za-z]+$/,
		numbers = /^[0-9]+$/,
		mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (user == '') {
		document.getElementById('uName').innerHTML = 'Please fill the username field.'
		return false;
	}
	if ((user.length < 5) || (user.length > 20)) {
		document.getElementById('uName').innerHTML = 'userName must be between 5-20 characters long.'
		return false;
	}
	if (!user.match(letters)) {
		document.getElementById('uName').innerHTML = 'username must have alphabet characters only.'
		return false;
	}
	if ((password.length == 0) || (password.length < 7) || (password.length > 12)) {
		document.getElementById('uPass').innerHTML = 'password should be 7-12 characters long.'
		return false;
	}
	if (password !== conPassword) {
		document.getElementById('uConPass').innerHTML = 'password not matching.'
		return false;
	}
	if (!mobile.match(numbers)) {
		document.getElementById('uMobile').innerHTML = 'Mobile number must have numeric characters only.'
		return false;
	}
	if (mobile.length !== 10) {
		document.getElementById('uMobile').innerHTML = 'Mobile number must be 10 digit.'
		return false;
	}
	if (!email.match(mailformat)) {
		document.getElementById('uEmail').innerHTML = 'Invalid email address.'
		return false;
	}
}

const pop = document.getElementById("popUp"),
	togglePopUp = (elem, value) => {
		return pop.style.display = value;
	}
