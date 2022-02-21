import Popup from "./Popup.js";

class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._formElement = this._popup.querySelector('.popup__form');
    }

    setSubmitListener(method) {
        this._removeSubmitListener();
        this._currentEventListener = (e) => method(e);
        this._formElement.addEventListener('submit', this._currentEventListener);
    }

    _removeSubmitListener() {
        if (this._currentEventListener !== null && this._currentEventListener !== undefined) {
            this._formElement.removeEventListener('submit', this._currentEventListener);
        }
    }
}

export default PopupWithSubmit;