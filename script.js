const getCategories = async (url) => {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`)
	}

	return await response.json();
}

getCategories('http://localhost:3001/hydra-member').then(data => {
	console.log(data)
	const Categories = data.map(item => {
		console.log(item.categories)
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

	Categories.forEach(e => {
		let categories = document.querySelector(".categories")
		categories.innerHTML = categories.innerHTML + e
	})
})
	.catch(err => console.error(err))