const currentyear = document.querySelector(".currentyear");
const lastModified = document.querySelector(".lastModified");
const formtimestamp = document.querySelector(".timestamp-form");
const today = new Date();

lastModified.innerHTML = `<span class=" lastModified"> ${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "medium"
    }
).format(today)}</span>`;

formtimestamp.innerHTML = `<input type="hidden" class="timestamp-form" value="${new Intl.DateTimeFormat(
  "en-US",
  {
      dateStyle: "short",
      timeStyle: "short"
  }
).format(today)}"> `;

currentyear.innerHTML = `<span class=" currentyear"> ${today.getFullYear()}</span>`;

const nav = document.querySelector('#navigation')
const button = document.querySelector('#menu');

button.addEventListener('click', () => {
    nav.classList.toggle('show');
    button.classList.toggle('show');
});


const openButtons = document.querySelectorAll('.open-dialog');

const closeButtons = document.querySelectorAll('.close-dialog');

    openButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal(); 
      });
    });


    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('dialog'); 
        modal.close();
      });
    });