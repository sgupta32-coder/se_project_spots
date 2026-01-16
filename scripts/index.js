const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileModalCloseBtn =
  editProfileModal.querySelector(".modal__close-btn");
const addProfileBtn = document.querySelector(".profile__add-btn");
const addProfileModal = document.querySelector("#new-post-modal");
const addProfileModalCloseBtn =
  addProfileModal.querySelector(".modal__close-btn");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

editProfileModalCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

addProfileBtn.addEventListener("click", function () {
  addProfileModal.classList.add("modal_is-opened");
});

addProfileModalCloseBtn.addEventListener("click", function () {
  addProfileModal.classList.remove("modal_is-opened");
});
