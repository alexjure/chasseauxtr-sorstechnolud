/*
- Project: Chasse aux trésors Technolud
- Author: Alex Juré
- Role: Web Developer & Designer
- Created: 2026-01-18
- Description: javaScript for "Chasse aux trésors Technolud" part 1 (index)
*/

const solution = [
    "JAPON",
    "QUICKRESPONSE",
    "HTTPS",
    "HTML",
    "CLOUD",
    "SNAPCHAT"];

const form = document.querySelector(".quizForm")
const textIntro = document.querySelector(".textIntro")

form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {

    e.preventDefault()
    let hasAnswer = false;
    
    const inputsResults = document.querySelectorAll("input[type='text']");
    const errorBox = document.querySelector(".errorMessage")
   
    let results = [];

    inputsResults.forEach((inputsResults, index) => {

        
        const userAnswer = inputsResults.value.trim().toLowerCase().replace(/\s+/g, "").replace(/:\/\//g, "");
        const correctAnswer = solution[index].toLowerCase();
        if (userAnswer !== "") {
            hasAnswer = true;
        }

        
        if (userAnswer !== correctAnswer) {
            results.push(`<p><i class="fa-regular fa-circle-xmark"></i> ${inputsResults.name}</p>`)
            console.log(inputsResults)
        }

    })
    console.log(results)
    if (!hasAnswer) {
        errorBox.innerHTML = `<h3>Merci de rentrer vos réponses</h3>`;
        return
    }

    if (results.length === 0) {
        console.log("let's go")
        
        
        document.querySelector(".quizForm").style.display = "none";
        document.querySelector(".errorMessage").style.display = "none"
        
       
        document.getElementById("loader").classList.remove("hidden");
        textIntro.textContent="Analyse en cours des réponses, veuillez patienter"
       
        setTimeout(() => {
            window.location.href = "enigmeFinale.html";
        }, 3400); 
    }
    else {
        errorBox.innerHTML =
            `<h3>Vous vous êtes trompé sur :</h3>
        ${results.join("")}`

    }

}
