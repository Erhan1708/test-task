const usersUrl = 'http://localhost:3001/hydra-member'

const sendRequest = async (method, url) => {
	const response = await fetch(url)
	return await response.json()
}

sendRequest('GET', usersUrl)
	.then(data => {
		const cards = data.map((item) => {
			return (`
			<div>
				<div>
					<h3>${item.name}</h3>
					<div>
						<h4>${item.categories}</h4>
					</div>
				</div>
			</div>
			`)
		})
		cards.forEach(element => {
			let users = document.querySelector('.users');
			users.innerHTML = users.innerHTML + element;
		});
	})
	.catch(err => console.error(err))