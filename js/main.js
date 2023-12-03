const colors = ['lightblue', 'pink', 'lightgreen', '#333'];
const [btnColors, btnReset] = createPickerDom(colors);

console.log(document.cookie);

//처음 로딩시 color=으로 시작하는 쿠키가 없으면 강제로 body요소에 클래스명을 제거
if (document.cookie.indexOf('color=') < 0) {
	document.body.className = '';
} else {
	//만약에 로딩시 color=으로 시작하는 쿠기가 있으면 해당 쿠키 순번에서 color= 다음에 있는 색상 문자값만 잘라내기해서 body의 클래스로 지정
	const pos = document.cookie.indexOf('color=');
	const restCookie = document.cookie.slice(pos + 6);
	const colorVal = restCookie.split(' ')[0];
	document.body.className = colorVal;
}

//span버튼 클릭 시 해당 색상값으로 cookie='색상값' 형태의 쿠키 생성
btnColors.forEach((el, idx) => {
	el.addEventListener('click', (e) => {
		const color = e.currentTarget.innerText;
		console.log(color);
		setCookie('color', color, 1);
		document.body.className = color;
	});
});

btnReset.addEventListener('click', () => {
	const pos = document.cookie.indexOf('color=');
	if (pos < 0) {
		const restCookie = document.cookie.slice(pos + 6);
		const colorVal = restCookie.split(' ')[0];
		setCookie('color', colorVal, 0);
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
