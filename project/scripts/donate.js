document.addEventListener("DOMContentLoaded", () => {
    const totalDonationsElement = document.getElementById("totalDonations");
    let totalDonations = parseInt(localStorage.getItem("totalDonations")) || 0;
    totalDonationsElement.textContent = `$${totalDonations}`;
});

function addDonation() {
    const donationInput = document.getElementById("donationAmount");
    let donationValue = parseInt(donationInput.value);
    
    if (isNaN(donationValue) || donationValue <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }
    
    let totalDonations = parseInt(localStorage.getItem("totalDonations")) || 0;
    totalDonations += donationValue;
    localStorage.setItem("totalDonations", totalDonations);
    
    document.getElementById("totalDonations").textContent = `$${totalDonations}`;
    donationInput.value = "";
}
