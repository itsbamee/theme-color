const colors = ['lightblue', 'pink', 'lightgreen', '#333'];

const btns = createPickerDom(colors);
console.log(btns);

btns.forEach((el, idx) => {
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

	aside.innerHTML = tags;
	document.body.append(aside);

	return document.querySelectorAll('aside span');
}
//setcookie실행되면
function setCookie(name, value, expires) {
	let now = new Date(); //쿠키생성시간 구하고
	let duedate = now.getTime() + 1000 * 60 * 60 * expires; //현재 시간값을 밀리세컨 값으로 변환시킨다음에 대입되는 값에 따라 우리가 원하는 만료시간 설정가능
	now.setTime(duedate); //duedate변수 담아놓고 now를 변경할 수 있음
	document.cookie = `${name}=${value}; path=/; expires=${now.toUTCString()}`;
	//변경한 now 시간값을 표준시로 변경
}

//미션1 - 각 버튼 클릭 시 사용자 컴퓨터에 1시간동안 유지되는 쿠키생성
//쿠키 형식 : color = 클릭한 버튼의 색상 코드
