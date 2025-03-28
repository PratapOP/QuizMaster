// Quiz data with 10 questions per topic
const quizzes = {
    generalKnowledge: {
        title: "General Knowledge Quiz",
        questions: [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                answer: 2
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                answer: 1
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: 2
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                answer: 3
            },
            {
                question: "Which country is home to the kangaroo?",
                options: ["New Zealand", "Australia", "South Africa", "Brazil"],
                answer: 1
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Go", "Gd", "Au", "Ag"],
                answer: 2
            },
            {
                question: "Which year did World War II end?",
                options: ["1943", "1945", "1947", "1950"],
                answer: 1
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                answer: 1
            },
            {
                question: "What is the tallest mountain in the world?",
                options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
                answer: 1
            },
            {
                question: "Which gas is most abundant in Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                answer: 2
            }
        ]
    },
    javaQuiz: {
        title: "Java Quiz",
        questions: [
            {
                question: "Which keyword is used to create an instance of a class in Java?",
                options: ["this", "new", "instance", "create"],
                answer: 1
            },
            {
                question: "What is the default value of a boolean variable in Java?",
                options: ["true", "false", "null", "0"],
                answer: 1
            },
            {
                question: "Which of these is NOT a primitive data type in Java?",
                options: ["int", "boolean", "String", "double"],
                answer: 2
            },
            {
                question: "What is the parent class of all Java classes?",
                options: ["Object", "Class", "Main", "Super"],
                answer: 0
            },
            {
                question: "Which keyword is used for inheritance in Java?",
                options: ["inherits", "extends", "implements", "super"],
                answer: 1
            },
            {
                question: "What is the correct way to declare an array in Java?",
                options: ["int array[];", "int[] array;", "array int[];", "Both A and B"],
                answer: 3
            },
            {
                question: "Which method must be implemented by all threads in Java?",
                options: ["start()", "init()", "run()", "execute()"],
                answer: 2
            },
            {
                question: "What is the size of a 'long' variable in Java?",
                options: ["8 bits", "16 bits", "32 bits", "64 bits"],
                answer: 3
            },
            {
                question: "Which of these is NOT a Java keyword?",
                options: ["abstract", "assert", "native", "sizeof"],
                answer: 3
            },
            {
                question: "What does JVM stand for?",
                options: ["Java Virtual Machine", "Java Verified Method", "Just Virtual Machine", "Java Variable Method"],
                answer: 0
            }
        ]
    },
    webDevQuiz: {
        title: "Web Development Quiz",
        questions: [
            {
                question: "What does CSS stand for?",
                options: [
                    "Computer Style Sheets",
                    "Creative Style Sheets",
                    "Cascading Style Sheets",
                    "Colorful Style Sheets"
                ],
                answer: 2
            },
            {
                question: "Which HTML tag is used to link a JavaScript file?",
                options: ["<script>", "<js>", "<javascript>", "<link>"],
                answer: 0
            },
            {
                question: "What does the 'alt' attribute in an <img> tag do?",
                options: [
                    "Provides alternative text for screen readers",
                    "Specifies the image alignment",
                    "Defines the image source",
                    "Sets the image border"
                ],
                answer: 0
            },
            {
                question: "Which CSS property is used to change the text color?",
                options: ["text-color", "font-color", "color", "text-style"],
                answer: 2
            },
            {
                question: "What does HTML stand for?",
                options: [
                    "Hyper Text Markup Language",
                    "Home Tool Markup Language",
                    "Hyperlinks and Text Markup Language",
                    "Hyper Text Makeup Language"
                ],
                answer: 0
            },
            {
                question: "Which method is used to select an element by its ID in JavaScript?",
                options: [
                    "document.querySelector()",
                    "document.getElementById()",
                    "document.getElementByClass()",
                    "document.findElement()"
                ],
                answer: 1
            },
            {
                question: "What is the correct way to comment in CSS?",
                options: [
                    "// This is a comment",
                    "<!-- This is a comment -->",
                    "/* This is a comment */",
                    "' This is a comment"
                ],
                answer: 2
            },
            {
                question: "Which HTML5 element is used for drawing graphics?",
                options: ["<draw>", "<canvas>", "<svg>", "<graphics>"],
                answer: 1
            },
            {
                question: "Which of these is NOT a JavaScript framework?",
                options: ["React", "Angular", "Vue", "Flask"],
                answer: 3
            },
            {
                question: "What does API stand for?",
                options: [
                    "Application Programming Interface",
                    "Automated Programming Interface",
                    "Advanced Programming Interface",
                    "Application Process Integration"
                ],
                answer: 0
            }
        ]
    },
    pythonQuiz: {
        title: "Python Quiz",
        questions: [
            {
                question: "Which of these is NOT a Python data type?",
                options: ["list", "tuple", "array", "dict"],
                answer: 2
            },
            {
                question: "How do you start a 'for' loop in Python?",
                options: ["for x in y:", "for (x in y)", "for x = y", "loop x in y:"],
                answer: 0
            },
            {
                question: "What is the output of 'print(3 * '7')' in Python?",
                options: ["21", "777", "TypeError", "37"],
                answer: 1
            },
            {
                question: "Which keyword is used to define a function in Python?",
                options: ["def", "function", "define", "func"],
                answer: 0
            },
            {
                question: "What does the 'len()' function do?",
                options: [
                    "Returns the length of an object",
                    "Converts to lowercase",
                    "Rounds a number",
                    "Calculates logarithm"
                ],
                answer: 0
            },
            {
                question: "Which of these is used to create a virtual environment in Python?",
                options: ["venv", "virtualenv", "pipenv", "All of the above"],
                answer: 3
            },
            {
                question: "What is the correct way to import a module named 'mymodule'?",
                options: [
                    "import mymodule",
                    "include mymodule",
                    "require mymodule",
                    "using mymodule"
                ],
                answer: 0
            },
            {
                question: "Which operator is used for exponentiation in Python?",
                options: ["^", "**", "^^", "*^"],
                answer: 1
            },
            {
                question: "What does PEP stand for in Python?",
                options: [
                    "Python Enhancement Proposal",
                    "Python Execution Process",
                    "Python Evaluation Protocol",
                    "Python Extension Package"
                ],
                answer: 0
            },
            {
                question: "Which of these is NOT a Python web framework?",
                options: ["Django", "Flask", "Pyramid", "Spring"],
                answer: 3
            }
        ]
    }
};

// Learn More links
const learnMoreLinks = {
    general: "https://en.wikipedia.org/wiki/General_knowledge",
    java: "https://www.w3schools.com/java/",
    webdev: "https://developer.mozilla.org/en-US/docs/Learn",
    python: "https://www.python.org/about/gettingstarted/"
};

// DOM elements
const mainContent = document.getElementById('main-content');
const scoresTable = document.getElementById('scores-table').getElementsByTagName('tbody')[0];

// Quiz state
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = [];

// Initialize the app
function init() {
    loadScores();
}

// Start a quiz
function startQuiz(quizName) {
    currentQuiz = quizzes[quizName];
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = [];
    
    // Check if user has already completed this quiz
    const quizCompleted = localStorage.getItem(`quiz_completed_${quizName}`);
    if (quizCompleted) {
        if (confirm("You've already completed this quiz. Do you want to start again?")) {
            localStorage.removeItem(`quiz_completed_${quizName}`);
            showQuestion();
        }
        return;
    }
    
    showQuestion();
}

// Show current question
function showQuestion() {
    // Clear main content
    mainContent.innerHTML = '';
    
    // Create quiz container
    const quizContainer = document.createElement('div');
    quizContainer.className = 'quiz-container';
    
    // Add quiz title
    const quizTitle = document.createElement('h2');
    quizTitle.textContent = currentQuiz.title;
    quizContainer.appendChild(quizTitle);
    
    // Add progress indicator
    const progress = document.createElement('p');
    progress.className = 'progress';
    progress.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuiz.questions.length}`;
    quizContainer.appendChild(progress);
    
    // Add question
    const question = document.createElement('div');
    question.className = 'question';
    question.textContent = currentQuiz.questions[currentQuestionIndex].question;
    quizContainer.appendChild(question);
    
    // Add options
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options-container';
    
    currentQuiz.questions[currentQuestionIndex].options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option;
        optionBtn.onclick = () => selectAnswer(index);
        
        // Disable if already answered
        if (answeredQuestions[currentQuestionIndex] !== undefined) {
            optionBtn.disabled = true;
            if (index === currentQuiz.questions[currentQuestionIndex].answer) {
                optionBtn.classList.add('correct');
            } else if (index === answeredQuestions[currentQuestionIndex]) {
                optionBtn.classList.add('wrong');
            }
        }
        
        optionsContainer.appendChild(optionBtn);
    });
    
    quizContainer.appendChild(optionsContainer);
    
    // Add navigation buttons
    const navButtons = document.createElement('div');
    navButtons.className = 'nav-buttons';
    
    if (currentQuestionIndex > 0) {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'nav-btn';
        prevBtn.textContent = 'Previous';
        prevBtn.onclick = () => {
            currentQuestionIndex--;
            showQuestion();
        };
        navButtons.appendChild(prevBtn);
    }
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'nav-btn';
    
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        nextBtn.textContent = 'Next';
        nextBtn.onclick = () => {
            if (answeredQuestions[currentQuestionIndex] === undefined) {
                alert('Please select an answer before proceeding.');
                return;
            }
            currentQuestionIndex++;
            showQuestion();
        };
    } else {
        nextBtn.textContent = 'Submit Quiz';
        nextBtn.onclick = submitQuiz;
    }
    
    navButtons.appendChild(nextBtn);
    quizContainer.appendChild(navButtons);
    
    mainContent.appendChild(quizContainer);
}
// Show alert with list of quiz topics
function showQuizTopicsAlert() {
    const topics = Object.keys(quizzes).map(key => quizzes[key].title).join('\n');
    alert(`Available Quiz Topics:\n\n${topics}`);
}
// Handle answer selection
function selectAnswer(selectedIndex) {
    // Mark question as answered
    answeredQuestions[currentQuestionIndex] = selectedIndex;
    
    // Check if answer is correct
    if (selectedIndex === currentQuiz.questions[currentQuestionIndex].answer) {
        score++;
    }
    
    // Re-render question to show correct/wrong answers
    showQuestion();
}

// Submit quiz and show results
function submitQuiz() {
    if (answeredQuestions[currentQuestionIndex] === undefined) {
        alert('Please select an answer before submitting.');
        return;
    }
    
    // Calculate percentage
    const percentage = Math.round((score / currentQuiz.questions.length) * 100);
    
    // Mark quiz as completed
    localStorage.setItem(`quiz_completed_${Object.keys(quizzes).find(key => quizzes[key].title === currentQuiz.title)}`, 'true');
    
    // Save score
    saveScore(currentQuiz.title, percentage);
    
    // Show results
    showResults(percentage);
}

// Show quiz results
function showResults(percentage) {
    mainContent.innerHTML = '';
    
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'results-container';
    
    const resultsTitle = document.createElement('h2');
    resultsTitle.textContent = 'Quiz Results';
    resultsContainer.appendChild(resultsTitle);
    
    const scoreText = document.createElement('p');
    scoreText.textContent = `Your score: ${score} out of ${currentQuiz.questions.length}`;
    resultsContainer.appendChild(scoreText);
    
    const percentageText = document.createElement('p');
    percentageText.textContent = `Percentage: ${percentage}%`;
    resultsContainer.appendChild(percentageText);
    
    // Add retake button
    const retakeBtn = document.createElement('button');
    retakeBtn.className = 'quiz-btn';
    retakeBtn.textContent = 'Retake Quiz';
    retakeBtn.onclick = () => {
        const quizName = Object.keys(quizzes).find(key => quizzes[key].title === currentQuiz.title);
        localStorage.removeItem(`quiz_completed_${quizName}`);
        startQuiz(quizName);
    };
    resultsContainer.appendChild(retakeBtn);
    
    // Add home button
    const homeBtn = document.createElement('button');
    homeBtn.className = 'quiz-btn';
    homeBtn.textContent = 'Back to Home';
    homeBtn.onclick = () => window.location.href = 'index.html';
    resultsContainer.appendChild(homeBtn);
    
    mainContent.appendChild(resultsContainer);
}

// Save score to local storage
function saveScore(quizName, score) {
    let scores = JSON.parse(localStorage.getItem('quizScores')) || [];
    
    scores.push({
        quizName: quizName,
        score: score,
        date: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
    });
    
    localStorage.setItem('quizScores', JSON.stringify(scores));
    loadScores();
}

// Load scores from local storage
function loadScores() {
    const scores = JSON.parse(localStorage.getItem('quizScores')) || [];
    scoresTable.innerHTML = '';
    
    scores.forEach(score => {
        const row = scoresTable.insertRow();
        row.insertCell(0).textContent = score.quizName;
        row.insertCell(1).textContent = `${score.score}%`;
        row.insertCell(2).textContent = score.date;
    });
}

// Navigate to learn more resources
function learnMore(topic) {
    window.open(learnMoreLinks[topic], '_blank');
}

// Navigation functions
function showQuizTopics() {
    window.location.href = 'index.html#quizzes';
}

function showLearnMore() {
    alert('Click the "Learn More" buttons on each quiz card to explore resources about that topic.');
}

function showPreviousScores() {
    window.location.href = 'index.html#scores-section';
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);