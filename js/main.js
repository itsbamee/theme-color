const colors = ['lightblue', 'pink', 'lightgreen', '#333'];
const [btnColors, btnReset] = createPickerDom(colors);

console.log(document.cookie);

if (document.cookie.indexOf('color=') < 0) {
	document.body.className = '';
} else {
	const pos = document.cookie.indexOf('color=');
	const restCookie = document.cookie.slice(pos + 6);
	const colorVal = restCookie.split(' ')[0];
	document.body.style.setProperty('--pointColor', colorVal);
	document.body.className = 'theme_' + colorVal;
}

btnColors.forEach((el, idx) => {
	el.addEventListener('click', (e) => {
		const color = e.currentTarget.innerText;
		// console.log(color);
		setCookie('color', color, 1);
		//getcomputedStyle(document.body).getPropertyValue('--pointColor');
		document.body.style.setProperty('--pointColor', color);
		document.body.className = 'theme_' + color;
	});
});

btnReset.addEventListener('click', () => {
	const pos = document.cookie.indexOf('color=');
	if (pos >= 0) {
		const restCookie = document.cookie.slice(pos + 6);
		const colorVal = restCookie.split(' ')[0];
		setCookie('color', colorVal, 0);
		document.body.className = '';
		alert('색상초기화');
	}
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
