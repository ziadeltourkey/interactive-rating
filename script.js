const ratingButtons = document.querySelectorAll(".rating-btn");
const submitButton = document.getElementById("submit-btn");
const ratingState = document.getElementById("rating-state");
const thankYouState = document.getElementById("thank-you-state");
const selectedRating = document.getElementById("selected-rating");

let chosenRating = null;

ratingButtons.forEach(button => {
  button.addEventListener("click", () => {
    ratingButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    chosenRating = button.textContent;
  });
});

submitButton.addEventListener("click", () => {
  if (chosenRating !== null) {
    selectedRating.textContent = chosenRating;
    ratingState.classList.add("hidden");
    thankYouState.classList.remove("hidden");
  }
});
