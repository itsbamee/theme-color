const colors = ['lightblue', 'pink', 'lightgreen', '#333'];

const btns = createPickerDom(colors);
console.log(btns);

function createPickerDom(arr) {
	const aside = document.createElement('aside');
	aside.classList.add('picker');
	let tags = '';
	arr.forEach((data) => {
		tags += `<span style='background-color:${data}'>${data}</span>`;
	});

	aside.innerHTML = tags;
	document.body.append(aside);

	return document.querySelectorAll('aside span');
}
