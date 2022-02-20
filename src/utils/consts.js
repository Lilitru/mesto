// export const initialCards = [
//     {
//         name: 'Мопс',
//         link: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80'
//     },
//     {
//         name: 'Корги',
//         link: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80'
//     },
//     {
//         name: 'Мальтипу',
//         link: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
//     },
//     {
//         name: 'Французский бульдог',
//         link: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
//     },
//     {
//         name: 'Болонка',
//         link: 'https://images.unsplash.com/photo-1607923432503-763cf6180fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
//     },
//     {
//         name: 'Ретривер',
//         link: 'https://images.unsplash.com/photo-1590767950092-42b8362368da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
//     }
// ];

export const infoButton = document.querySelector('.profile__info-button');
export const nameField = document.querySelector('input[name="name"]');
export const professionField = document.querySelector('input[name="profession"]');
export const templateEl = document.querySelector('.template');
export const addButton = document.querySelector('.profile__addbutton');


export const validationSettings =
{
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};
