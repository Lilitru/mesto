class FormValidator {
  constructor(selectors, form) {
    this._selectors = selectors;
    this._form = form;
    this._inputs = this._form.querySelectorAll(this._selectors.inputSelector);
    this._submitButton = this._form.querySelector(this._selectors.submitButtonSelector);
  }

  _showError = (input, errorMessageText) => {
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = errorMessageText;
    errorMessage.classList.add(this._selectors.errorMessageClass);
    input.classList.add(this._selectors.inputErrorClass);
  }

  _hideError = (input) => {
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = '';
    errorMessage.classList.remove(this._selectors.errorMessageClass);
    input.classList.remove(this._selectors.inputErrorClass);
  }

  _hasInvalidInput = () => {
    return Array.from(this._inputs).some((el) => !el.validity.valid);
  }

  toggleButtonError = () => {
    if (this._hasInvalidInput(this._inputs)) {
      this._submitButton.classList.add(this._selectors.inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._selectors.inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  _checkIfInputValid = (input) => {
    if (!input.validity.valid) {
      this._showError(input, input.validationMessage)
    } else {
      this._hideError(input);
    }
  }

  _setInputListeners = () => {
    this.toggleButtonError();
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkIfInputValid(input);
        this.toggleButtonError();
      });
    });
  };

  enableValidation = () => {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    this._setInputListeners();
  };
}

export default FormValidator;