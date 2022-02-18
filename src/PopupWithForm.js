import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm){
        super(popupSelector);
        this._submitForm = submitForm;
        this._submit = this._popup.querySelector('.popup__form');
    }
    
    _getInputValues(){
        this._inputs = Array.from(this._popup.querySelectorAll('.popup__input'));
        this._values ={};
        this._inputs.forEach(input => {
            this._values[input.name] = input.value;
        });
        return this._values;
    }

    setEventListeners(){
        super.setEventListeners();
        this._submit.addEventListener('submit', (e)=> this._submitForm(e, this._getInputValues()));
    }

    close(){
        this._inputs = this._popup.querySelectorAll('.popup__input');
        this._inputs.forEach(input => {
            input.value = '';
        });
        super.close();
    }
}

export default PopupWithForm;