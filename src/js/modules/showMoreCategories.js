const showMoreCategories = () => {
  function createCards(data) {
    if (document.querySelector('.categories__cards')) {
      for (const categorie of data.categories) {
        const categoriesItem = document.createElement('div');
        categoriesItem.classList.add('categories__card', 'card-categories');
        categoriesItem.insertAdjacentHTML(
          'afterbegin',
          `<a href="${categorie.url}" class="card-categories__main">
                <div class="card-categories__image">
                  <img src="img/categories/${
                    categorie.image
                  }" alt="${categorie.title.toLowerCase()}" />
                </div>
                <span class="card-categories__name">${categorie.title}</span>
              </a>`
        );
        document.querySelector('.categories__cards').append(categoriesItem);
      }
    }
  }

  fetch('json/categories.json')
    .then((responce) => {
      if (responce.status !== 200) {
        console.log(
          'Looks like there was a problem. Status Code: ' + responce.status
        );
        return;
      }
      responce.json().then((data) => {
        createCards(data);
      });
    })
    .catch((err) => {
      throw new Error('Fetch Error :-S', err);
    });
};

export default showMoreCategories;
