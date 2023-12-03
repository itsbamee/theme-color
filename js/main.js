const colors = ['lightblue', 'pink', 'lightgreen', '#333'];

const [btnColors, btnReset] = createPickerDom(colors);

btnColors.forEach((el, idx) => {
	el.addEventListener('click', (e) => {
		const color = e.currentTarget.innerText;
		console.log(color);
	});
});

function createPickerDom(arr) {
	const aside = document.createElement('aside');
	aside.classList.add('picker');
	let tags = '';
	arr.forEach((data) => {
		tags += `<span style='background-color:${data}'>${data}</span>`;
	});

	tags += `<button class='btnReset'>컬러 초기화</button>`;

	aside.innerHTML = tags;
	document.body.append(aside);

	return [document.querySelectorAll('aside span'), document.querySelector('aside .btnReset')];
}

function setCookie(name, value, expires) {
	let now = new Date();
	let duedate = now.getTime() + 1000 * 60 * 60 * expires;
	now.setTime(duedate);
	document.cookie = `${name}=${value}; path=/; expires=${now.toUTCString()}`;
}

//미션1 - 각 버튼 클릭 시 사용자 컴퓨터에 1시간동안 유지되는 쿠키생성
//쿠키 형식 : color = 클릭한 버튼의 색상 코드
