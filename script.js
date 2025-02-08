// script.js

function selectOption(option) {
    if (option === 'yes') {
        document.getElementById('question').style.display = 'none';
        displayCatHeart();
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        const yesButton = document.getElementById('yes-button');
        const currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        const newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = `${newSize}px`;
    } else {
        alert('Invalid option!');
    }
}

// Removed flashRainbowColors function

function displayCat() {
    const imageContainer = document.getElementById('image-container');
    const catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = () => imageContainer.appendChild(catImage);
    catImage.onerror = () => console.error('Failed to load cat image.');
}

function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    const imageContainer = document.getElementById('image-container');
    const catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = () => {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
    catHeartImage.onerror = () => console.error('Failed to load cat-heart image.');
}

displayCat();
