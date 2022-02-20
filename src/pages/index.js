import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import UserInfo from "../components/UserInfo.js";
import './index.css';
import { infoButton, nameField, professionField, templateEl, addButton, validationSettings } from "../utils/consts.js";
import Api from "../components/Api.js";

const userInfoData = new UserInfo({
  nameSelector: '.profile__info-title'
  , infoSelector: '.profile__info-subtitle'
  , avatarSelector: '.profile__avatar'
});

// const section = new Section({ items: initialCards, renderer: getCardElement }, '.list');
// section.renderAll();

function fillPopupProfile({ name, info }) {
  nameField.value = name;
  professionField.value = info;
}

function getCardElement(item) {
  const newCard = new Card(item, userInfoData.getUserInfo(), templateEl, handleCardClick, handleCardDeleteClick, handleCardLike);
  return newCard.createCard();
}

function handleCardLike(card) {

  if (card.isLiked()) {
    api.removeLike(card.cardsData.id)
      .then((result) => {
        card.setLikes(result);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
  else {
    api.addLike(card.cardsData.id)
      .then((result) => {
        card.setLikes(result);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
}

function handleCardDeleteClick(event, card) {
  console.log(card);

  deleteCard.setSubmitListener((ev) => {
    ev.preventDefault();
    api.deleteCard(card.cardsData.id)
      .then((result) => {
        console.log(result);
        card.handleDelete(event);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
      .finally(() => {
        deleteCard.close();
      });
  });

  deleteCard.open();
}

function handleAdd(event, { title, link }) {
  event.preventDefault();

  popupAddCardForm.changeSubmitButtonText();
  api.addNewCard(title, link)
    .then((result) => {
      const listItem = getCardElement({ name: result.name, link: result.link, id: result._id, owner: result.owner, likes: result.likes });
      section.addItem(listItem);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() => {
      popupAddCardForm.close();
    });
}

function submitProfileForm(event, { name, profession }) {
  event.preventDefault();
  popupProfileForm.changeSubmitButtonText();
  api.setUserInfo(name, profession)
    .then((result) => {
      userInfoData.setUserInfo({ name: result.name, info: result.about, avatar: result.avatar, id: result._id });
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() => {
      popupProfileForm.close();
    });
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

function handleAvatar(event, avatarUrl) {
  event.preventDefault();
  popupEditAvatar.changeSubmitButtonText();
  api.setUserAvatar(avatarUrl.edit)
    .then((result) => {
      userInfoData.setUserInfo({ name: result.name, info: result.about, avatar: result.avatar, id: result._id });
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() => {
      popupEditAvatar.close();
    });
}

const popupEditAvatar = new PopupWithForm('.popup_avatar', handleAvatar);
popupEditAvatar.setEventListeners();
const editAvatar = document.querySelector('.profile__avatar-edit');
editAvatar.addEventListener('click', () => popupEditAvatar.open());
const formAvatar = document.querySelector('.popup__form_avatar')
const editformAvatar = new FormValidator(validationSettings, formAvatar);
editformAvatar.enableValidation();

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

const deleteCard = new PopupWithSubmit('.popup_delete-card');
deleteCard.setEventListeners();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-35',
  headers: {
    authorization: '59fa2368-57bc-421b-8a9b-bec049dce68e',
    'Content-Type': 'application/json'
  }
});

api.getUserInfo()
  .then((result) => {
    console.log(result);
    userInfoData.setUserInfo({ name: result.name, info: result.about, avatar: result.avatar, id: result._id });
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

let section = {};

api.getInitialCards()
  .then((result) => {
    const initialCards = result.map((el) => {
      return {
        name: el.name,
        link: el.link,
        id: el._id,
        owner: el.owner,
        likes: el.likes
      };
    })
    section = new Section({ items: initialCards, renderer: getCardElement }, '.list');
    section.renderAll();
  })
  .catch((err) => {
    console.log(err);
  });

