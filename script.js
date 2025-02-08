// script.js

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Fade out the question and options
        const questionElement = document.getElementById('question');
        const optionsElement = document.getElementById('options');
        
        questionElement.style.opacity = '0';
        optionsElement.style.opacity = '0';

        // Wait for the transition to finish before displaying the cat-heart
        setTimeout(() => {
            questionElement.style.display = 'none';
            optionsElement.style.display = 'none';
            displayCatHeart();
            launchConfetti(); // Trigger confetti effect
        }, 500); // Match the duration of the CSS transition
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'miss click?';
    } else {
        alert('Invalid option!');
    }
}

// Function to launch confetti
function launchConfetti() {
    const duration = 3 * 800; // Duration in milliseconds
    const animationEnd = Date.now() + duration;
    const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        gravity: 1,
        colors: ['#bb0000', '#ffffff', '#00bb00', '#0000bb', '#bbbb00']
    };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    (function frame() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return;

        const particleCount = 50 * (timeLeft / duration);
        confetti({
            ...defaults,
            particleCount: Math.floor(particleCount),
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }
        });

        requestAnimationFrame(frame);
    })();
}

// Function to display the cat.gif initially
function displayCat() {
    const imageContainer = document.getElementById('image-container');
    const catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = () => imageContainer.appendChild(catImage);
    catImage.onerror = () => console.error('Failed to load cat image.'); // Error handling
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    const imageContainer = document.getElementById('image-container');
    const catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = () => {
        imageContainer.appendChild(catHeartImage);
    };
    catHeartImage.onerror = () => console.error('Failed to load cat-heart image.'); // Error handling
}

// Display the cat.gif initially
displayCat();
// Updated script.js
function selectOption(option) {
    if (option === 'yes') {
        createHearts();
        document.getElementById('question').style.display = 'none';
        setTimeout(() => {
            displayCatHeart();
        }, 1000);
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        const yesButton = document.getElementById('yes-button');
        const currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        const newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = `${newSize}px`;
    }
}

function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'heart-animation';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 1500);
    }
}

// Keep existing displayCat and displayCatHeart functions
