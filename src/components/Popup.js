class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupClose = this._popup.querySelector('.popup__close');
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _popupClickHandler(event){
        console.log(event.target)
        if (event.target.classList.contains('popup')){
            this.close();
        }
      }

    setEventListeners() {
        this._popupClose.addEventListener('click', ()=> this.close());
        this._popup.addEventListener('mouseup', (e)=> this._popupClickHandler(e));
    }

    open() {
        this._popup.classList.add('popup_opened');        
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');        
        document.removeEventListener('keydown', this._handleEscClose);
    }
}

export default Popup;