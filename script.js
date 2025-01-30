const startButton = document.getElementById('startButton');
const newText = document.getElementById('newText');
const heartsContainer = document.querySelector('.hearts-container');


function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function startAnimation() {
    startButton.style.display = 'none';
    newText.style.display = 'block';
    setInterval(createHeart, 50);
}

startButton.addEventListener('click', startAnimation);