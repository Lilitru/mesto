class Card {
    constructor(cardsData, templateSelector, handleCardClick) {
        this._cardsData = cardsData;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _handleDelete(event) {
        const targetEl = event.target;
        const listItem = targetEl.closest('.cards');
        listItem.remove();
    }

    createCard() {

        const newItem = this._templateSelector.content.cloneNode(true);
        const headerEl = newItem.querySelector('.cards__title');
        const imgEl = newItem.querySelector('.cards__img');
        headerEl.textContent = this._cardsData.name;
        imgEl.src = this._cardsData.link;
        imgEl.alt = this._cardsData.name;
        const like = newItem.querySelector('.cards__like');

        function cardsLike() {
            like.classList.toggle('cards__like_active');
        }

        like.addEventListener('click', cardsLike);
        const deleteBtn = newItem.querySelector('.cards__remove');
        deleteBtn.addEventListener('click', this._handleDelete);
        imgEl.addEventListener('click', () => this._handleCardClick(this._cardsData));
        return newItem;
    }
}

export default Card;