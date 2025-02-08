/* style.css */

body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    background-color: #FADADD;
}

#container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

#image-container {
    /* This container will hold the images */
}

#question {
    font-family: 'Sacramento', cursive;
    font-size: 52px;
}

#options {
    margin-top: 20px;
}

button {
    padding: 10px 20px;
    margin: 0 10px;
    font-size: 26px;
    font-family: 'Sacramento', cursive;
    background-color: #FB607F;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s; /* Added transition for smooth effects */
}

button:hover {
    background-color: #FF4C7D; /* Change color on hover */
    transform: scale(1.05); /* Slightly enlarge button on hover */
}

/* Responsive Design */
@media (max-width: 600px) {
    #question {
        font-size: 36px; /* Smaller font size on mobile */
    }
    button {
        font-size: 20px; /* Smaller button font size on mobile */
    }
}
