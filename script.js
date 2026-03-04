const ratingButtons = document.querySelectorAll(".rating-btn");
const submitButton = document.getElementById("submit-btn");
const ratingState = document.getElementById("rating-state");
const thankYouState = document.getElementById("thank-you-state");
const selectedRating = document.getElementById("selected-rating");

let chosenRating = null;

ratingButtons.forEach(button => {
  button.addEventListener("click", () => {

    ratingButtons.forEach(btn => {
      btn.classList.remove("active");
      btn.setAttribute("aria-checked", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-checked", "true");

    chosenRating = button.textContent;

    submitButton.disabled = false;
    submitButton.setAttribute("aria-disabled", "false");
  });
});

submitButton.addEventListener("click", () => {
  if (chosenRating !== null) {

    selectedRating.textContent = chosenRating;

    ratingState.classList.add("hidden");
    thankYouState.classList.remove("hidden");
  }
});
