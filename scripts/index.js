const popupProfile = document.querySelector('.popup_profile'); 
const popupProfileClose = popupProfile.querySelector('.popup__close');
const infoButton = document.querySelector('.profile__info-button');

const formProfile = popupProfile.querySelector('.popup__form');

const nameField = document.querySelector('input[name="name"]');
const nameMan = document.querySelector('.profile__info-title');
const professionField = document.querySelector('input[name="profession"]');
const professionMan = document.querySelector('.profile__info-subtitle');

const listContainer = document.querySelector('.list');
const templateEl=document.querySelector('.template');
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
  const popupBackground = document.querySelector('.popup__img');
  const popupImg = document.querySelector('.popup_image');
  const popupCloseImg = popupImg.querySelector('.popup__close'); 
  const popupSubtitle = document.querySelector('.popup__subtitle')
  const addButton = document.querySelector('.profile__addbutton');
  const popupGallery = document.querySelector('.popup_gallery');
  const titleField = document.querySelector('input[name="title"]');
  const linkField = document.querySelector('input[name="link"]');
  const popupCloseGallery = popupGallery.querySelector('.popup__close');
  const formAddCard = document.querySelector('.popup__form_add-card');

function openPopup(popup){
    popup.classList.add('popup_opened');
}
function closePopup(popup){
    popup.classList.remove('popup_opened');
}
function openPopupProfile(){
  openPopup(popupProfile);
  nameField.value = nameMan.textContent;
  professionField.value = professionMan.textContent;
}
infoButton.addEventListener('click', openPopupProfile);
popupProfileClose.addEventListener('click', ()=> closePopup(popupProfile));

function submitProfileForm(event){
    event.preventDefault();
    nameMan.textContent = nameField.value;
    professionMan.textContent = professionField.value;
    closePopup(popupProfile);
}

function getItem(item){
    const newItem = templateEl.content.cloneNode(true);
    const headerEl = newItem.querySelector('.cards__title');
    const imgEl = newItem.querySelector('.cards__img');
    headerEl.textContent = item.name;
    imgEl.src = item.link;
    imgEl.alt = item.name;
    const like = newItem.querySelector('.cards__like');
    function cardsLike(){
        like.classList.toggle('cards__like_active');
      }
    like.addEventListener('click', cardsLike);
    const deleteBtn = newItem.querySelector('.cards__remove');
    deleteBtn.addEventListener('click', handleDelete);
    imgEl.addEventListener('click', ()=> openPopupImg(item));
    return newItem;
}

function render(){
    const html= initialCards
        .map((item) => {
        return getItem(item);
    });
    listContainer.append(...html);
}
render();

formProfile.addEventListener('submit', submitProfileForm);

popupCloseGallery.addEventListener('click', ()=> closePopup(popupGallery));


addButton.addEventListener('click', ()=> openPopup(popupGallery));

function handleAdd(event){
  event.preventDefault();
  const newItem = { name: titleField.value, link: linkField.value};
  const listItem = getItem(newItem);
  listContainer.prepend(listItem);
  titleField.value = '';
  linkField.value = '';
  closePopup(popupGallery);
}

formAddCard.addEventListener('submit', handleAdd);

function handleDelete(event){
  const targetEl = event.target;
  const listItem = targetEl.closest('.cards');
  listItem.remove();
}
 
function openPopupImg(item){
  openPopup(popupImg);
  popupBackground.src = item.link;
  popupBackground.alt = item.name;
  popupSubtitle.textContent = item.name;
}
popupCloseImg.addEventListener('click', ()=> closePopup(popupImg));
