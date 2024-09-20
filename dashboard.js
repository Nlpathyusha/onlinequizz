document.addEventListener('DOMContentLoaded', function() {
    // Example: Fetching quiz progress from backend (this will be an API call in the real project)
    fetch('/api/quiz-progress')
        .then(response => response.json())
        .then(data => {
            const quizCards = document.querySelectorAll('.quiz-card');

            // Loop through the fetched data and update the cards
            data.forEach((quiz, index) => {
                if (quizCards[index]) {
                    quizCards[index].querySelector('h3').textContent = quiz.title;
                    quizCards[index].querySelector('.percentage').textContent = quiz.score + '%';

                    if (quiz.score === 100) {
                        quizCards[index].classList.add('highlight');
                    }
                }
            });
        })
        .catch(err => console.error('Error fetching quiz progress:', err));
});
