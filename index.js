


const form = document.querySelector("form");
const {hash} = window.location;

const message = atob(hash.replace('#',''));

if(message){
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');
  document.querySelector('h1').innerHTML = message;
}


const submitForm = (event) => {
  event.preventDefault();

  document.querySelector("#message-form").classList.add('hide');
  document.querySelector("#link-form").classList.remove('hide');

  const input = document.querySelector("#message-input");

  const codedValue = btoa(input.value);
  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${codedValue}`;
  linkInput.select();
};

form.addEventListener("submit", submitForm);
