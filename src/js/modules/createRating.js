const createRating = (rating) => {
  const integer = Math.trunc(rating);
  let ratingItems = '';
  const fractional = rating % 1;

  for (let i = 0; i < integer; i++) {
    ratingItems += `<div class="rating__item">
                          <input type="radio" name="rating" value="1" class="rating__radio" id="rating__1" />
                          <label for="rating__1" class="rating__label">
                            <svg class="rating__star" width="14" height="14" viewBox="0 0 14 14">
                              <use xlink:href="#star" fill="#FFC700" stroke="#FFC700"></use>
                            </svg>
                          </label>
                      </div>`;
  }
  if (fractional) {
    ratingItems += ` <div class="rating__item">
                          <input type="radio" name="rating" value="5" class="rating__radio" id="rating__5" />
                          <label for="rating__5" class="rating__label">
                            <svg class="rating__star" width="14" height="14" viewBox="0 0 14 14">
                              <use xlink:href="#star" fill="#FFC700" stroke="#FFC700"></use>
                              <use xlink:href="#star" fill="#fff" mask="url(#half)"></use>
                            </svg>
                          </label>
                        </div>`;
  }
  return ratingItems;
};

export default createRating;
