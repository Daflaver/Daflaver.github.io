// window.onload = () => {
//     generateStars();
// };

// function generateStars() {
//     const starContainer = document.getElementById('star-container');
//     const starSound = document.getElementById('star-sound');

//     for (let i = 0; i < 100; i++) {
//         let star = document.createElement('div');
//         star.className = 'star';
//         let size = Math.random() * 20 + 10; // Задаем случайный размер звезды
//         star.style.width = `${size}px`;
//         star.style.height = `${size}px`;
//         star.style.borderBottomWidth = `${size * 1.7}px`;

//         star.style.top = `${Math.random() * 100}%`;
//         star.style.left = `${Math.random() * 100}%`;
//         star.style.borderBottomColor = getRandomStarColor();

//         starContainer.appendChild(star);

//         star.addEventListener('click', () => {
//             starSound.play();
//             star.remove();
//         });
//     }
// }

// function getRandomStarColor() {
//     const colors = ['#fdfd96', '#ffffff', '#fffacd', '#ffffe0'];
//     return colors[Math.floor(Math.random() * colors.length)];
// }
