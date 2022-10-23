const data = [
   {
      id: 1,
      name: "Категория - 1",
      categories: [
         {
            id: 2,
            name: "Категория - 2",
            categories: null
         },
         {
            id: 3,
            name: "Категория - 3",
            categories: [
               {
                  id: 4,
                  name: "Категория - 4",
                  categories: null
               }
            ]
         },
         {
            id: 5,
            name: "Категория - 5",
            "categories": null
         },
         {
            id: 6,
            name: "Категория - 6",
            categories: null
         }
      ]
   },
   {
      id: 7,
      name: "Категория - 7",
      categories: [
         {
            id: 8,
            name: "Категория - 8",
            categories: null
         }
      ]
   },
   {
      id: 9,
      name: "Категория - 9",
      categories: null
   }
]


const test=(data)=> {
   let result = [];

   data.forEach(el => {
      result.push(el.name);

      if (el.categories)
         result.push(...test(el.categories));
   });

   return result;
}

console.log(test(data));