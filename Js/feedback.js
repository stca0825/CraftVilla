document.addEventListener("DOMContentLoaded", function () {
  const feedbackForm = document.getElementById("feedbackForm");

  if (!feedbackForm) return;

  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert(
      "💬 Thank you for your feedback! We truly appreciate your time and thoughts."
    );

    feedbackForm.reset();
  });
});
