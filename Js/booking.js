// booking.js
document.addEventListener("DOMContentLoaded", function () {
  const workshopSelect = document.getElementById("workshop");
  const participantsSelect = document.getElementById("participants");
  const totalPriceDisplay = document.getElementById("totalPrice");
  const bookingForm = document.getElementById("bookingForm");

  function updateTotalPrice() {
    const workshopOption = workshopSelect.options[workshopSelect.selectedIndex];
    const basePrice = workshopOption.getAttribute("data-price");
    const participants = participantsSelect.value;

    if (!basePrice) {
      totalPriceDisplay.textContent = "0 NOK";
      return;
    }

    const total = parseInt(basePrice) * parseInt(participants);
    totalPriceDisplay.textContent = `${total} NOK`;
  }

  workshopSelect.addEventListener("change", updateTotalPrice);
  participantsSelect.addEventListener("change", updateTotalPrice);

  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("🎨 Your booking has been submitted! We’ll be in touch soon.");
    bookingForm.reset();
    totalPriceDisplay.textContent = "0 NOK";
  });
});
