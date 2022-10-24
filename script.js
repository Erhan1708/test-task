 const getCategories = async (url) => {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`)
	}

	return await response.json();
}

getCategories('http://localhost:3001/hydra-member').then(data => {
   const Categories = data.flatMap( function recursive(el){
      return (`
      <ul><li class="post">${ [el.name].concat(el.categories?.flatMap(recursive) || [])}</li></ul>
      
      `
      )
   })
   
   

	Categories.forEach(e => {
		let categories = document.querySelector(".categories")
      categories.innerHTML = categories.innerHTML + e.replace(/[\,]/g, '');
	})
})
	.catch(err => console.error(err))