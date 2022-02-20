class Card {
    constructor(cardsData, currentUser, templateSelector, handleCardClick, handleCardDelete, handleCardLike) {
        this.cardsData = cardsData;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._cardElement = this._templateSelector.content.cloneNode(true);
        this._cardHeader = this._cardElement.querySelector('.cards__title');
        this._imageElement = this._cardElement.querySelector('.cards__img');
        this._likeElement = this._cardElement.querySelector('.cards__like');
        this._deleteBtn = this._cardElement.querySelector('.cards__remove');
        this._cardsCounterElement = this._cardElement.querySelector('.cards__counter');
        this._currentUser = currentUser;
        this._handleCardLike = handleCardLike;
    }

    handleDelete(event) {
        const targetEl = event.target;
        const listItem = targetEl.closest('.cards');
        listItem.remove();
    }

    _handleLikeButton() {       
        if(this.isLiked()){
            this._likeElement.classList.add('cards__like_active');
        }
        else{
            this._likeElement.classList.remove('cards__like_active');
        }
    }

    isLiked(){
        return this.cardsData.likes.map(item=> item.name).some(el=>el === this._currentUser.name);
    }

    _setEventListeners() {
        this._likeElement.addEventListener('click', () => this._handleCardLike(this));
        this._deleteBtn.addEventListener('click', (e) => { this._handleCardDelete(e, this); });
        this._imageElement.addEventListener('click', () => this._handleCardClick(this.cardsData));
    }

    _canBeDeleted() {
        return this._currentUser.name === this.cardsData.owner.name;
    }

    _hideDeleteButton() {
        this._deleteBtn.classList.toggle('cards__remove_hidden');
    }

    setLikes(cardData)
    {
        this.cardsData.likes = cardData.likes;
        this._cardsCounterElement.textContent = this.cardsData.likes.length;
        this._handleLikeButton();
    }

    createCard() {

        if (!this._canBeDeleted()) {
            this._hideDeleteButton();
        }

        this._cardHeader.textContent = this.cardsData.name;
        this._imageElement.src = this.cardsData.link;
        this._imageElement.alt = this.cardsData.name;
        this.setLikes(this.cardsData);
        this._setEventListeners();
        return this._cardElement;
    }
}

export default Card;