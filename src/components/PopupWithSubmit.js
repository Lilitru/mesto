import Popup from "./Popup.js";

class PopupWithSubmit extends Popup  {
    constructor(popupSelector){
        super(popupSelector);
        this._formElement = this._popup.querySelector('.popup__form');
    }

    setSubmitListener(method)
    {
        this._formElement.addEventListener('submit', (e)=> method(e));
    }   
}

export default PopupWithSubmit;