const mainContainer = document.querySelector(".container")
const thankyouContainer = document.querySelector(".thank-you-container")
const submitButton = document.getElementById("submit")
const rateButton = document.getElementById("rate")
const ratings = document.querySelectorAll(".rating")
const ratingValue = document.getElementById("number")

submitButton.addEventListener("click", () => {
    thankyouContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rateButton.addEventListener("click", () => {
    mainContainer.style.display = "block"
    thankyouContainer.classList.add("hidden")
})


ratings.forEach((number) => {
    number.addEventListener("click", () => {
      ratingValue.innerHTML = number.innerHTML
    })
})
