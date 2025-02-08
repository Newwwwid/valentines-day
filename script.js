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
            createFloatingHearts(); // Trigger floating hearts effect
        }, 500); // Match the duration of the // Match the duration of the CSS transition
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'miss click?';
    } else {
        alert('Invalid option!');
    }
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
displayCat();
// Add these new functions
function createFloatingHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 3000);
    }
}

function createActionButtons() {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.id = 'action-buttons';
    
    // Sound Button
    const soundButton = document.createElement('button');
    soundButton.innerHTML = '🔊';
    soundButton.onclick = toggleSound;
    
    // Rose Button
    const roseButton = document.createElement('button');
    roseButton.innerHTML = '🌹';
    roseButton.onclick = () => createEmojiEffect('🌹');
    
    // Heart Button
    const heartButton = document.createElement('button');
    heartButton.innerHTML = '❤️';
    heartButton.onclick = () => createEmojiEffect('❤️');

    buttonsContainer.append(soundButton, roseButton, heartButton);
    document.body.appendChild(buttonsContainer);
}

function toggleSound() {
    const audio = document.getElementById('valentine-sound');
    const button = document.querySelector('#action-buttons button:first-child');
    
    if (audio.paused) {
        audio.play();
        button.innerHTML = '🔊';
    } else {
        audio.pause();
        button.innerHTML = '🔇';
    }
}

function createEmojiEffect(emoji) {
    const emojiElement = document.createElement('div');
    emojiElement.className = 'emoji-effect';
    emojiElement.innerHTML = emoji;
    
    const xPos = Math.random() * 80 + 10; // Random position 10-90%
    emojiElement.style.left = xPos + '%';
    
    document.body.appendChild(emojiElement);
    setTimeout(() => emojiElement.remove(), 2000);
}

// Update displayCatHeart function
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    const imageContainer = document.getElementById('image-container');
    const catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = () => {
        imageContainer.appendChild(catHeartImage);
        createActionButtons();
        createFloatingHearts();
    };
    catHeartImage.onerror = () => console.error('Failed to load cat-heart image.');
}
