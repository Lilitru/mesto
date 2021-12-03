const popup = document.querySelector('.popup'); 
const popupClose = document.querySelector('.popup__close');
const infoButton = document.querySelector('.profile__info-button');

const form = document.querySelector('.popup__form');

const nameField = document.querySelector('input[name="name"]');
const nameMan = document.querySelector('.profile__info-title');
const professionField = document.querySelector('input[name="profession"]')
const professionMan = document.querySelector('.profile__info-subtitle')

const listContainer = document.querySelector('.list')
const templateEl=document.querySelector('.template')
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
      name: 'Стаффордширский терьер',
      link: 'https://images.unsplash.com/photo-1535554836559-dd299ea942dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1487&q=80'
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

function getItem(item){
    const newItem = templateEl.content.cloneNode(true);
    const headerEl = newItem.querySelector('.cards__title');
    const imgEl = newItem.querySelector('.cards__img');
    headerEl.textContent = item.name;
    imgEl.src = item.link;

    return newItem;
}

function render(){
    const html= initialCards
        .map((item) => {
        return getItem(item);
    });
    listContainer.append(...html);
}
render()



form.addEventListener('submit', submitForm)

