const triviaData = [
    {
      question: "Question 1?",
      answer: "Answer 1",
    },
    {
      question: "Question 2?",
      answer: "Answer 2",
    },
    // Add more trivia questions as needed
  ];
  
  const quoteText = document.getElementById("js-quote-text");
  const answerText = document.getElementById("js-answer-text");
  const newQuoteButton = document.getElementById("js-new-quote");
  const showAnswerButton = document.getElementById("js-tweet");
  
  function getRandomTrivia() {
    return triviaData[Math.floor(Math.random() * triviaData.length)];
  }
  
  function displayTrivia() {
    const { question, answer } = getRandomTrivia();
    quoteText.textContent = question;
    answerText.textContent = answer;
  }
  
  newQuoteButton.addEventListener("click", displayTrivia);
  showAnswerButton.addEventListener("click", () => {
    answerText.style.display = "block";
  });
  
  // Display initial trivia
  displayTrivia();