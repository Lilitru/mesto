import Card from "./Card.js"
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

const infoButton = document.querySelector('.profile__info-button');
const nameField = document.querySelector('input[name="name"]');
const professionField = document.querySelector('input[name="profession"]');
const templateEl = document.querySelector('.template');
const addButton = document.querySelector('.profile__addbutton');
const userInfoData = new UserInfo({ nameSelector: '.profile__info-title', infoSelector: '.profile__info-subtitle' });


const initialCards = [
  {
    name: 'Мопс',
    link: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80'
  },
  {
    name: 'Корги',
    link: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80'
  },
  {
    name: 'Мальтипу',
    link: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
  },
  {
    name: 'Французский бульдог',
    link: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
  },
  {
    name: 'Болонка',
    link: 'https://images.unsplash.com/photo-1607923432503-763cf6180fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
  },
  {
    name: 'Ретривер',
    link: 'https://images.unsplash.com/photo-1590767950092-42b8362368da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  }
];

const section = new Section({ items: initialCards, renderer: getItem }, '.list');
section.renderAll();

function fillPopupProfile({ name, info }) {
  nameField.value = name;
  professionField.value = info;
}

function getItem(item) {
  const newCard = new Card(item, templateEl, handleCardClick);
  return newCard.createCard();
}

function handleAdd(event, { title, link }) {
  event.preventDefault();
  const listItem = getItem({ name: title, link });
  section.addItem(listItem);

  event.target.reset();
  popupAddCardForm.close();
}

function submitProfileForm(event, { name, profession }) {
  event.preventDefault();
  userInfoData.setUserInfo({ name: name, info: profession });
  popupProfileForm.close();
}

function handleCardClick(item) {
  const popupImageForm = new PopupWithImage('.popup_image', item);
  popupImageForm.setEventListeners();
  popupImageForm.open();
}

const popupProfileForm = new PopupWithForm('.popup_profile', submitProfileForm);
popupProfileForm.setEventListeners();

infoButton.addEventListener('click', () => {
  const userInfo = userInfoData.getUserInfo();
  fillPopupProfile(userInfo);
  popupProfileForm.open();
});


const popupAddCardForm = new PopupWithForm('.popup_gallery', handleAdd);
popupAddCardForm.setEventListeners();

addButton.addEventListener('click', () => {
  popupAddCardForm.open();
});

const validationSettings =
{
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const formEdit = document.querySelector('.popup__form');
const formEditValidator = new FormValidator(validationSettings, formEdit);
formEditValidator.enableValidation();

const formAdd = document.querySelector('.popup__form_add-card');
const formAddValidator = new FormValidator(validationSettings, formAdd);
formAddValidator.enableValidation();
