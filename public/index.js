window.onload = () => {

	const input = document.querySelector('.searchQuery')
	const submit = document.querySelector('.submitBtn')
	const error = document.querySelector('.error')
	const catainer = document.querySelector('#catainer')

	submit.addEventListener('click', async (event)=> {
		event.preventDefault()
		catainer.innerHTML = ''

		if (input.value === '') {
			error.innerText = 'please input valid catjective' 
		} else {
			
			let r = await fetch(`/${input.value}`)
			let cats = await r.json()

			cats.forEach(img=> {
				catainer.innerHTML += `
					<div style='padding: 10px;'>
						<img src='${img}'/>
					</div>
				`
			})
		}
	})
}