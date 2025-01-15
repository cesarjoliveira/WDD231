
const currentyear = document.querySelector(".currentyear");
const lastModified = document.querySelector(".lastModified");

const today = new Date();

lastModified.innerHTML = `<span class=" lastModified"> ${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "medium"
	}
).format(today)}</span>`;

currentyear.innerHTML = `<span class=" currentyear"> ${today.getFullYear()}</span>`;

const nav = document.querySelector('#navigation')
const button = document.querySelector('#menu');

button.addEventListener('click', () => {
	nav.classList.toggle('show');
	button.classList.toggle('show');
});

const all = document.querySelector('#all');
const cse = document.querySelector('#cse');
const wdd = document.querySelector('#wdd');
const cse110 = document.querySelector('#cse110');
const cse111 = document.querySelector('#cse111');
const cse210 = document.querySelector('#cse210');
const wdd130 = document.querySelector('#wdd130');
const wdd131 = document.querySelector('#wdd131');
const wdd231 = document.querySelector('#wdd231');

function showElements(elements) {
    elements.forEach(item => item.classList.remove('hidden'));
  }
  
  function hideElements(elements) {
    elements.forEach(item => item.classList.add('hidden'));
  }


all.addEventListener('click', () => {
    showElements([cse110, cse111, cse210, wdd130, wdd131, wdd231]);
  });
  
  cse.addEventListener('click', () => {
    showElements([cse110, cse111, cse210]);
    hideElements([wdd130, wdd131, wdd231]);
  });
  
  wdd.addEventListener('click', () => {
    showElements([wdd130, wdd131, wdd231]);
    hideElements([cse110, cse111, cse210]);
  });