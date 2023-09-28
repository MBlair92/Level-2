	const baddiesList = document.getElementById('baddies-list');
	const baddieTotals = document.querySelectorAll('input[type="number"]');
	const priceElements = document.querySelectorAll('.price');
	const totalPriceElement = document.getElementById('total-price');

	let totalPrice = 0;

	for (let i = 0; i < baddieTotals.length; i++) {
		baddieTotals[i].addEventListener('input', function() {
			const price = parseFloat(priceElements[i].textContent);
			const total = parseInt(baddieTotals[i].value);
			const subtotal = price * total;

			totalPrice = 0;
			for (let j = 0; j < baddieTotals.length; j++) {
				const price = parseFloat(priceElements[j].textContent);
				const total = parseInt(baddieTotals[j].value);
				const subtotal = price * total;
				console.log(subtotal)
             }})}

			 //Add a total button
			