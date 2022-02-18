import Popup from "./Popup.js";

class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._popupSubtitle = this._popup.querySelector('.popup__subtitle');
        this._popupImg = this._popup.querySelector('.popup__img');
    }
    open(item){
        this._popupImg.src = item.link;
        this._popupImg.alt = item.name;
        this._popupSubtitle.textContent = item.name;
        super.open();
    }
}

export default PopupWithImage;