import Popup from "./Popup.js";

class PopupWithImage extends Popup{
    constructor(popupSelector, item){
        super(popupSelector);
        this._popupSubtitle = this._popup.querySelector('.popup__subtitle');
        this._popupImg = this._popup.querySelector('.popup__img');
        this._item = item;
    }
    open(){
        this._popupImg.src = this._item.link;
        this._popupImg.alt = this._item.name;
        this._popupSubtitle.textContent = this._item.name;
        super.open();
    }
}

export default PopupWithImage;