const watch = document.querySelector('.watch')

const timer = () => {
	const getDate = new Date()
	const times = {
		hour: getDate.getHours(),
		minutes: getDate.getMinutes(),
		seconds: getDate.getSeconds(), 
	}

	watch.innerHTML = `${times.hour} : ${times.minutes} : ${times.seconds}`

	console.log(getDate)
}

setInterval(timer, 1000)