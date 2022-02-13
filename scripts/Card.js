class Card {
    constructor(cardsData, templateSelector) {
        this._cardsData = cardsData;
        this._templateSelector = templateSelector;
    }

    _popupImg = document.querySelector('.popup_image');
    _popupBackground = document.querySelector('.popup__img');
    _popupSubtitle = document.querySelector('.popup__subtitle');

    _handleDelete(event) {
        const targetEl = event.target;
        const listItem = targetEl.closest('.cards');
        listItem.remove();
    }

    _openPopupImg(item) {
        this._openPopup(this._popupImg);
        this._popupBackground.src = item.link;
        this._popupBackground.alt = item.name;
        this._popupSubtitle.textContent = item.name;
    }

    _openPopup(popup) {
        popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closePopupEscape);
    }
    
    _closePopupEscape = (evt)=>{
        if (evt.key === 'Escape'){
          const openedPopup = document.querySelector('.popup_opened');
         this._closePopup(openedPopup);
        }
      }

      _closePopup=(popup)=>{
        popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closePopupEscape);
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
        imgEl.addEventListener('click', () => this._openPopupImg(this._cardsData));
        return newItem;
    }
}

export default Card;