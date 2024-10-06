// Define the function to check the answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked'); // Check if any option is selected
    
    // Get the feedback element
    const feedback = document.getElementById("feedback");

    // Check if the user selected an answer
    if (userAnswer) {
        // Compare the value of the selected answer with the correct answer
        
        //["if (userAnswer === correctAnswer)"]
        
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedback.textContent = "Please select an answer.";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

