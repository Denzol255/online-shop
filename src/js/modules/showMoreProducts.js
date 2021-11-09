import createRating from './createRating';

const showMoreProducts = () => {
  fetch('json/products.json')
    .then((responce) => {
      if (responce.status !== 200) {
        console.log(
          'Looks like there was a problem. Status Code: ' + responce.status
        );
        return;
      }
      responce.json().then((data) => {
        if (document.querySelector('.products__cards')) {
          for (const product of data.products) {
            const productItem = document.createElement('div');
            productItem.classList.add('products__card', 'card-product');
            productItem.insertAdjacentHTML(
              'afterbegin',
              `<div class="card-product__main">
                <div class="card-product__image">
                  <picture>
                    <source srcset="./img/products/${
                      product.imageWebp
                    }" type="image/webp"><img src="./img/products/${
                product.imagePng
              }"
                      alt="${product.title.toLowerCase()}" />
                  </picture>
                </div>
                <div class="card-product__description">
                  <span class="card-product__label">${product.label}</span>
                  <h3 class="card-product__title">${product.title}</h3>
                  <div class="card-product__info">
                    <span class="card-product__price">$${product.price}</span>
                    <div class="card-product__rating rating rating_product" data-rating="${
                      product.rating
                    }">
                      <div class="rating__items">
                        ${createRating(Number(product.rating))}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-product__buttons">
                  <button class="card-product__button _blue-btn">Add to Cart</button>
                  <button class="card-product__button _border-btn">Quick view</button>
                </div>
              </div>`
            );
            document.querySelector('.products__cards').append(productItem);
          }
        }
      });
    })
    .catch((error) => {
      throw new Error('Fetch Error: ', error);
    });
};

export default showMoreProducts;
