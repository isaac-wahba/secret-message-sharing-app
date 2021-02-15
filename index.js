const form = document.querySelector("form");

const createLink = () => {};

const submitForm = (event) => {
  event.preventDefault();
  const input = document.querySelector("#message-input");
  
  const codedValue = btoa(input.value);
  document.querySelector("#link-input").value = codedValue;
};

form.addEventListener("submit", submitForm);
