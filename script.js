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
        document.getElementById('no-button').innerText = 'You sure?';
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
