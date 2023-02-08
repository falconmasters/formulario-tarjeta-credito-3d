const card = document.querySelector('#card'),
	  btnOpenForm = document.querySelector('#btn-open-form'),
	  form = document.querySelector('#card-form'),
	  cardNumber = document.querySelector('#card .number'),
	  cardName = document.querySelector('#card .name'),
	  bankLogo = document.querySelector('#bank-logo'),
	  firm = document.querySelector('#card .firm p'),
	  monthExpiration = document.querySelector('#card .month'),
	  yearExpiration = document.querySelector('#card .year'),
	  ccv = document.querySelector('#card .ccv'),
	  monthSelector = document.getElementById('selectMonth'),
	  yearSelector = document.getElementById('selectYear');

// * Toggle the card to show the front
const showFront = () => {
	if(card.classList.contains('active')){
		card.classList.remove('active');
	}
}

// * Rotation of the card
card.addEventListener('click', () => {
	card.classList.toggle('active');
});

// * BUTTON: Open form
btnOpenForm.addEventListener('click', () => {
	btnOpenForm.classList.toggle('active');
	form.classList.toggle('active');
});

// * Dynamic SELECT: Month
for(let i = 1; i <= 12; i++){
	monthSelector.innerHTML += `<option>${i}</option>`
}

// * Dynamic SELECT: Year
const currentYear = new Date().getFullYear();
for(let i=0; i<=8; i++){
	yearSelector.innerHTML += `<option>${currentYear + i}</option>`
}

// * INPUT: Card number
form.inputNumber.addEventListener('keyup', (e) => {
	let inputValue = e.target.value;

	form.inputNumber.value = inputValue
	// Delete white spaces
	.replace(/\s/g, '')
	// Delete letters
	.replace(/\D/g, '')
	// Add a white space each 4 numbers
	.replace(/([0-9]{4})/g, '$1 ')
	// Delete last white space
	.trim();

	cardNumber.textContent = inputValue;

	if(inputValue == ''){
		cardNumber.textContent = '#### #### #### ####';

		bankLogo.innerHTML = '';
	}

    switch(inputValue[0]){
        case '4':
            bankLogo.innerHTML = `<img src="img/logos/visa.png">`
            break
        case '5':
            bankLogo.innerHTML = `<img src="img/logos/mastercard.png">`
            break
    }

	// We toggle the card to show the front
	showFront();
});

// * INPUT: Card name
form.inputName.addEventListener('keyup', (e) => {
	let inputValue = e.target.value;

	form.inputName.value = inputValue.replace(/[0-9]/g, '');
	cardName.textContent = inputValue;
	firm.textContent = inputValue.replace(/[0-9]/g, '');

	if(inputValue == ''){
		cardName.textContent = 'Jhon Doe';
	}

	showFront();
});

// * Month SELECT
form.selectMonth.addEventListener('change', (e) => {
	monthExpiration.textContent = e.target.value;
	showFront();
});

// * Year SELECT
form.selectYear.addEventListener('change', (e) => {
	yearExpiration.textContent = e.target.value.slice(2);
	showFront();
});

// * CCV
form.inputCCV.addEventListener('keyup', () => {
	if(!card.classList.contains('active')){
		card.classList.toggle('active');
	}

	form.inputCCV.value = form.inputCCV.value
	// Delete white spaces
	.replace(/\s/g, '')
	// Delete letters
	.replace(/\D/g, '');

	ccv.textContent = form.inputCCV.value;
});