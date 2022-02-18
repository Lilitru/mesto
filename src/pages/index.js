import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import './index.css';
import {initialCards, infoButton, nameField, professionField, templateEl, addButton, validationSettings} from "../utils/consts.js";

const userInfoData = new UserInfo({ nameSelector: '.profile__info-title', infoSelector: '.profile__info-subtitle' });

const section = new Section({ items: initialCards, renderer: getCardElement }, '.list');
section.renderAll();

function fillPopupProfile({ name, info }) {
  nameField.value = name;
  professionField.value = info;
}

function getCardElement(item) {
  const newCard = new Card(item, templateEl, handleCardClick);
  return newCard.createCard();
}

function handleAdd(event, { title, link }) {
  event.preventDefault();
  const listItem = getCardElement({ name: title, link });
  section.addItem(listItem);
  popupAddCardForm.close();
}

function submitProfileForm(event, { name, profession }) {
  event.preventDefault();
  userInfoData.setUserInfo({ name: name, info: profession });
  popupProfileForm.close();
}
const popupImageForm = new PopupWithImage('.popup_image');
popupImageForm.setEventListeners();

function handleCardClick(item) {
  popupImageForm.open(item);
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

const formEdit = document.querySelector('.popup__form');
const formEditValidator = new FormValidator(validationSettings, formEdit);
formEditValidator.enableValidation();

const formAdd = document.querySelector('.popup__form_add-card');
const formAddValidator = new FormValidator(validationSettings, formAdd);
formAddValidator.enableValidation();

addButton.addEventListener('click', () => {
  formAddValidator.toggleButtonError();
  popupAddCardForm.open();
});
