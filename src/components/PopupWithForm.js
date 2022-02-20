import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm){
        super(popupSelector);
        this._submitForm = submitForm;
        this._formElement = this._popup.querySelector('.popup__form');
        this._inputElements = this._popup.querySelectorAll('.popup__input');
        this._submitButton = this._popup.querySelector('.popup__button');
        this._initialSubmitButtonText = this._submitButton.textContent;
    }
    
    _getInputValues(){
        this._inputs = Array.from(this._inputElements);
        this._values ={};
        this._inputs.forEach(input => {
            this._values[input.name] = input.value;
        });
        return this._values;
    }

    setEventListeners(){
        super.setEventListeners();
        this._formElement.addEventListener('submit', (e)=> this._submitForm(e, this._getInputValues()));
    }

    changeSubmitButtonText(){
        this._submitButton.textContent = 'Сохранение...';
    }

    close(){
        this._formElement.reset();
        super.close();
        this._submitButton.textContent = this._initialSubmitButtonText;
    }
}

export default PopupWithForm;