/*
- Project: Chasse aux trésors Technolud
- Author: Alex Juré
- Role: Web Developer & Designer
- Created: 2026-01-18
- Description: javaScript for "Chasse aux trésors Technolud" part 2 (sucess)
*/

const solutions = [
    "motdepasse",
    "lemotdepasse",
    "lesmotsdepasses",
    "motsdepasses",
    "motdepasses",
    "mdp"
]
const form = document.querySelector(".answerForm")

form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault()

    const input = document.querySelector("input[type='text']");

    const reponse = input.value.replace(/\s+/g, "").toLowerCase();
    const message = document.querySelector(".feedbackMessage");
    const riddleText = document.querySelector(".riddleText")
    const errorMessage = document.querySelector(".errorMessage")

    let correctAnswer = false;

    for (let i = 0; i < solutions.length; i++) {
        if (reponse === solutions[i]) {
            correctAnswer = true;
            break;
        }
    }

    if (correctAnswer) {
        console.log("Bonne réponse")

        riddleText.classList.add("hidden");
        form.classList.add("hidden")

        message.classList.remove("hidden");
        errorMessage.innerHTML = "";

    } else {
        console.log("mauvaise réponse")
        errorMessage.innerHTML = `<p>Mauvaise réponse</p>`;
    }



}