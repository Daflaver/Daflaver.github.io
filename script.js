const starContainer = document.getElementById('star-container');
const startButton = document.getElementById('start-game');

startButton.addEventListener('click', () => {
    starContainer.style.display = 'block';
    generateStars();
});

function generateStars() {
    starContainer.innerHTML = '';
    for (let i = 0; i < 50; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        starContainer.appendChild(star);
        star.addEventListener('click', () => {
            star.remove();
        });
    }
}
