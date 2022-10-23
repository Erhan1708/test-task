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
		return (`
		<div>
			<div>
				<h4>${item.name}</h4>
				<div>
					<h4>${item.categories && item.categories.map((item) => {
                  return (`
                  <h4>${item.name}</h4>
                  <div>${item.categories && item.categories.map((item)=>item.name)}</div>
                  `)
               })}</h4>
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