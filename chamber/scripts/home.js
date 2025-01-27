async function loadMembers() {
    try {
        // Fetch data from the JSON file
        const response = await fetch('./data/members.json');
        if (!response.ok) throw new Error('Failed to fetch data.');
        const members = await response.json();

        // Get the container element
        const container = document.getElementsByClassName('business-section')[0];

        // Loop through the members and create HTML elements for each
        members.forEach(member => {
            // Create a card for each member
            const card = document.createElement('div');
            card.classList.add('business-header');

            card.innerHTML = `
            <div class="business-nametag">
                <h2> ${member.name}</h2>
                <h3> Business Tag Line</h3>
            </div>
            <img src="images/${member.icon}" alt="${member.name} logo">
                <ul>
                    <li>EMAIL: info@gmail.com</li>
                    <li>Phone: ${member.phone}</li>
                    <li>URL: ${member.website}</li>
                </ul>
            </div>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading members:', error);
    }
}


loadMembers();


    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


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

// Função para converter Unix timestamp em formato AM/PM
function convertUnixToAMPM(unixTimestamp, timezoneOffset = 0) {
    // Adiciona o offset do fuso horário (em segundos)
    const localTimestamp = unixTimestamp + timezoneOffset;
    // Converte para milissegundos e cria um objeto Date
    const date = new Date(localTimestamp * 1000);
    // Obtém horas e minutos no formato AM/PM
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Converte para formato 12h
  
    return `${formattedHours}:${minutes} ${ampm}`;
  }
  
// Função para obter o dia da semana de um timestamp Unix
function getDayOfWeek(unixTimestamp, timezoneOffset = 0) {
    // Adiciona o offset do fuso horário (em segundos)
    const localTimestamp = unixTimestamp + timezoneOffset;
    // Converte para milissegundos e cria um objeto Date
    const date = new Date(localTimestamp * 1000);
    
    // Array com os nomes dos dias da semana
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Retorna o nome do dia da semana
    return daysOfWeek[date.getUTCDay()];
  }
  
  // Exemplo de uso

const apiKey = process.env.API_KEY;

async function loadcurrentweather() {
    try {
        // Fetch data from the JSON file
        const response = await fetch(`https://pro.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}&units=imperial`);
        if (!response.ok) throw new Error('Failed to fetch data.');
    
        const weathers = await response.json();
        console.log(weathers);
            const currenttemp = document.querySelector("#current-temp");
            const currentweather = document.querySelector("#current-weather");
            const currenthigh = document.querySelector("#current-high");
            const currentlow = document.querySelector("#current-low");
            const currenthumidity = document.querySelector("#current-humidity");
            const currentsunrise = document.querySelector("#current-sunrise");
            const currentsunset = document.querySelector("#current-sunset");
            currenttemp.innerHTML = `<span id="current-temp"> ${weathers.main.temp}</span>`;
            currentweather.innerHTML = `<span id="current-weather"> ${weathers.weather[0].description}</span>`;
            currenthigh.innerHTML = `<span id="current-weather"> ${weathers.main.temp_max}</span>`;
            currentlow.innerHTML = `<span id="current-weather"> ${weathers.main.temp_min}</span>`;
            currenthumidity.innerHTML = `<span id="current-weather"> ${weathers.main.humidity
            }</span>`;

              // Timestamps de exemplo (sunrise e sunset)
            const sunriseTimestamp = weathers.sys.sunrise; // Sunrise
            const sunsetTimestamp = weathers.sys.sunset; // Sunset
  
            // Offset do fuso horário (UTC+2 -> 2 * 3600 segundos)
            const timezoneOffset = 2 * 3600;
  
            // Converte os timestamps
const sunriseTime = convertUnixToAMPM(sunriseTimestamp, timezoneOffset);
const sunsetTime = convertUnixToAMPM(sunsetTimestamp, timezoneOffset);
            currentsunrise.innerHTML = `<span id="current-weather"> ${sunriseTime}</span>`;
            currentsunset.innerHTML = `<span id="current-weather"> ${sunsetTime}</span>`;

    }
    catch (error) {
        console.error('Error loading members:', error);
    }
}


loadcurrentweather();

async function loadforecastweather() {
    try {
        // Fetch data from the JSON file
        const response = await fetch("https://pro.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=3&appid=d722aff014f8242590e9a5e0aa62cb7f&units=imperial");
        if (!response.ok) throw new Error('Failed to fetch data.');
    
        const forecasts = await response.json();
        console.log(forecasts);

        const timezoneOffset = 0;         
        const forecastslimpo2 = getDayOfWeek(forecasts.list[1].dt, timezoneOffset);
        const forecastslimpo3 = getDayOfWeek(forecasts.list[2].dt, timezoneOffset);

        const forecasttoday = document.querySelector("#forecast-today");
        const forecastdayplusone = document.querySelector("#forecast-tomorrow");
        const forecastdayplusoneday = document.querySelector("#forecast-tomorrow-day");
        const forecastdayplustwo = document.querySelector("#forecast-two-daysahead");
        const forecastdayplustwoday = document.querySelector("#forecast-two-daysahead-day");
        forecasttoday.innerHTML = `<span id="forecast-today"> ${forecasts.list[0].temp.day}</span>`;
        forecastdayplusoneday.innerHTML = `<span id="forecast-tomorrow-day"> ${forecastslimpo2}</span>`; 
        forecastdayplusone.innerHTML =`<span id="forecast-tomorrow">${forecasts.list[1].temp.day}</span>`;
        forecastdayplustwo.innerHTML = `<span id="forecast-two-daysahead"> ${forecasts.list[2].temp.day}</span>`;
        forecastdayplustwoday.innerHTML = `<span id="forecast-two-daysahead-day"> ${forecastslimpo3}</span>`;

    }
    catch (error) {
        console.error('Error loading members:', error);
    }    
}

loadforecastweather()