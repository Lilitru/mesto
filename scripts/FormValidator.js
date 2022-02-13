class FormValidator{
    constructor(selectors, form){
        this._selectors = selectors;
        this._form = form;
    }

     _showError = (form, input, errorMessageText, errorMessageClass, inputErrorClass) =>{
        const errorMessage = form.querySelector(`#${input.id}-error`);
        errorMessage.textContent = errorMessageText;
        errorMessage.classList.add(errorMessageClass);
        input.classList.add(inputErrorClass);
      }
      
      _hideError = (form, input, errorMessageClass, inputErrorClass) =>{
        const errorMessage = form.querySelector(`#${input.id}-error`);
        errorMessage.textContent = '';
        errorMessage.classList.remove(errorMessageClass);
        input.classList.remove(inputErrorClass);
      }
      
       _hasInvalidInput = (inputs) =>{
        return Array.from(inputs).some((el)=> !el.validity.valid);
      }
      
       _toggleButtonError = (inputs, button, inactiveButtonClass) =>{
        if (this._hasInvalidInput(inputs)){
         button.classList.add(inactiveButtonClass);
         button.disabled = true;
        } else {
          button.classList.remove(inactiveButtonClass);
          button.disabled = false;
        }
      }
      
      _checkIfInputValid = (form, input, {inputErrorClass, errorClass}) =>{
        if (!input.validity.valid){
          this._showError(form, input, input.validationMessage, errorClass, inputErrorClass)
        } else {
          this._hideError(form, input, errorClass, inputErrorClass);
        }
      }
      
      _setInputListeners = (form, {inputSelector, submitButtonSelector, inactiveButtonClass, ...rest}) =>{
        const inputs = form.querySelectorAll(inputSelector);
        const submitButton = form.querySelector(submitButtonSelector);
        this._toggleButtonError(inputs, submitButton, inactiveButtonClass);
       inputs.forEach((input)=>{
         input.addEventListener('input', ()=>{
           this._checkIfInputValid(form, input, rest);
           this._toggleButtonError(inputs, submitButton, inactiveButtonClass);
         });
       });
      };
      
      _enableValidation = ({form, ...rest}) =>{
          form.addEventListener('submit', (event)=>{
            event.preventDefault();
        });
        this._setInputListeners(form, rest.selectors);
      };

      enableValidation=()=>{
          this._enableValidation({
              form: this._form,
              selectors: this._selectors
          })
      }
}

export default FormValidator;