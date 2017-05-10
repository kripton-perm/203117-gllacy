var link = document.querySelector(".map .btn");
var overlay = document.querySelector(".modal-overlay");
    
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-feedback-close");
    
var form = popup.querySelector("form");
var fio = popup.querySelector("[name=fio]");
var email = popup.querySelector("[name=mail]");
var text = popup.querySelector("textarea");
    
var storageFio = localStorage.getItem("fiostorage");
var storageEmail = localStorage.getItem("emailstorage");
    
link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-feedback-show");
  overlay.classList.add("modal-overlay-show");
  
  if (storageFio) {
    fio.value = storageFio;
    if (storageEmail) {
      email.value = storageEmail;
      text.focus();
    } else {
        email.focus();
    }
  }
    else {
      fio.focus();
    }
});
    
close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-feedback-show");
  popup.classList.remove("modal-feedback-error");
  overlay.classList.remove("modal-overlay-show");
});
    
form.addEventListener("submit", function (event) {
  if (!fio.value || !email.value) {
    event.preventDefault();
    popup.classList.add("modal-feedback-error");
  } else {
      localStorage.setItem("fiostorage", fio.value);
      localStorage.setItem("emailstorage", email.value);
  }
});
    
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-feedback-show")) {
      popup.classList.remove("modal-feedback-show");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});