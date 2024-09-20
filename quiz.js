document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const q1Answer = document.querySelector('input[name="q1"]:checked')?.value;
    const q2Answer = document.querySelector('input[name="q2"]:checked')?.value;

    let score = 0;

    if (q1Answer === 'Paris') score++;
    if (q2Answer === '4') score++;

    alert('Your score is: ' + score + '/2');
});
