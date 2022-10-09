/**
 *  Navigation principale/ Menu hamburger
 */

// Sélection des éléments requis
 const buttonToggle =  document.querySelector(".header__buttons-toggle");
 const navElement =  document.querySelector(".nav");

 function openNav() {
  buttonToggle.classList.add("header__js-show-nav"); 
  navElement.classList.add("nav__js-show-nav");
}

function closeNave() {
  buttonToggle.classList.remove("header__js-show-nav"); 
  navElement.classList.remove("nav__js-show-nav");  
}

buttonToggle.addEventListener("click", function () {
  if (!buttonToggle.classList.contains("header__js-show-nav")) {
      openNav();
  }
  else{
      closeNave();
  }
});
/**
 *  Fin Navigation principale/ Menu hamburger
 */


/**
 * Modal
 */
//Sélection des éléments requis
const modalBtns = document.querySelectorAll(".modal-btn-js");
const modalOverlay = document.querySelector(".modal__overlay-body");
const modalElement = document.querySelector(".modal__inner")
const btnCloseModal = document.querySelector(".modal__btn-close");
const body = document.querySelector("body");

//Ouverture du modal(deux boutons d'ouverture de modal)
function openModal() {
    modalOverlay.classList.add("open-modal");
    modalElement.classList.add("animation-modal");
    body.classList.add("modal__js-body-no-scrool");   
}

modalBtns.forEach(modalBtn => {
    modalBtn.addEventListener("click", function () {
        openModal();
    } ) 
});

//Fermeture du modal avec le bouton btnCloseModal
function closeModal() {
    modalOverlay.classList.remove("open-modal");
    modalElement.classList.remove("animation-modal");
    body.classList.remove("modal__js-body-no-scrool");
}
btnCloseModal.addEventListener("click", closeModal);

//Fermeture du modal quand on clic en dehors du modal
window.addEventListener("click", function (e) {
    if (e.target === modalOverlay ) {
        modalOverlay.classList.remove("open-modal");  
        modalElement.classList.remove("animation-modal");
        body.classList.remove("modal__js-body-no-scrool");
    }
});
/*Fin du modal*/
