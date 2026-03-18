function correction() {
    // Récupérer toutes les questions
    const questions = document.querySelectorAll(".question");
    let score = 0; // Initialiser le score
    let totalQuestions = questions.length; // Total des questions

    questions.forEach(question => {
        // Trouver les options pour chaque question
        const options = question.querySelectorAll("input[type='radio']");

        options.forEach(option => {
            const label = option.nextElementSibling;

            // Si l'option est la bonne réponse
            if (option.value === "correct") {
                label.classList.add("correct"); // Marquer en vert
                // Vérifier si cette réponse est cochée
                if (option.checked) {
                    score++; // Augmenter le score si la bonne réponse est sélectionnée
                }
            } else {
                label.classList.add("wrong"); // Marquer en rouge
            }
        });
    });

    // Afficher le score
    const resultContainer = document.getElementById("result");
    resultContainer.textContent = `Votre score : ${score}/${totalQuestions}`;
    resultContainer.style.fontSize = "1.2em";
    resultContainer.style.fontWeight = "bold";
    resultContainer.style.color = "green";
}




function corrige()
{window.location.href="corrigé.html"}

function effacer() {
    // Réinitialiser toutes les cases cochées
    document.querySelectorAll("input[type='checkbox']").forEach(input => (input.checked = false));

    // Réinitialiser toutes les classes des labels
    document.querySelectorAll("label").forEach(label => {
        label.classList.remove("correct");
        label.classList.remove("wrong");
    });

    // Réinitialiser les messages de correction
    document.getElementById("result").innerHTML = "";
}