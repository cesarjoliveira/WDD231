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