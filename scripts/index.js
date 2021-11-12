const popup = document.querySelector('.popup'); 
const popupClose = document.querySelector('.popup__close');
const infoButton = document.querySelector('.profile__info-button');

const form = document.querySelector('.popup__form');

const nameField = document.querySelector('input[name="name"]');
const nameMan = document.querySelector('.profile__info-title');
const professionField = document.querySelector('input[name="profession"]')
const professionMan = document.querySelector('.profile__info-subtitle')

function openPopup(){
    popup.classList.add('popup_opened');
    nameField.value = nameMan.textContent;
    professionField.value = professionMan.textContent;
}
function closePopup(){
    popup.classList.remove('popup_opened')
}

infoButton.addEventListener('click', openPopup)
popupClose.addEventListener('click', closePopup)

/*function popupClickHandler(event){
    console.log(event.target)
    if (event.target.classList.contains('popup')){
        closePopup()
    }
}

popup.addEventListener('mouseup', popupClickHandler)*/

function submitForm(event){
    event.preventDefault();
    nameMan.textContent = nameField.value;
    professionMan.textContent = professionField.value;


    closePopup();
}

form.addEventListener('submit', submitForm)