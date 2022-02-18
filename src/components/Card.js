class Card {
    constructor(cardsData, templateSelector, handleCardClick) {
        this._cardsData = cardsData;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._cardElement = this._templateSelector.content.cloneNode(true);
        this._cardHeader = this._cardElement.querySelector('.cards__title');
        this._imageElement = this._cardElement.querySelector('.cards__img');
        this._likeElement = this._cardElement.querySelector('.cards__like');
        this._deleteBtn = this._cardElement.querySelector('.cards__remove');
    }

    _handleDelete(event) {
        const targetEl = event.target;
        const listItem = targetEl.closest('.cards');
        listItem.remove();
    }
    
    _handleLikeButton() {
        this._likeElement.classList.toggle('cards__like_active');
      }
      
      _setEventListeners(){
        this._likeElement.addEventListener('click', ()=>this._handleLikeButton());
        this._deleteBtn.addEventListener('click', this._handleDelete);
        this._imageElement.addEventListener('click', () => this._handleCardClick(this._cardsData));
      }

    createCard() {
        this._cardHeader.textContent = this._cardsData.name;
        this._imageElement.src = this._cardsData.link;
        this._imageElement.alt = this._cardsData.name;
        this._setEventListeners();
        return  this._cardElement;
    }
}

export default Card;