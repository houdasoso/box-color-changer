document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.getElementById("color-box");
    const button = document.getElementById("change-color-btn");

    // Function to generate a random hex color
    function getRandomColor() {
        let letters = "0123456789ABCDEF";  // Possible hex digits
        let color = "#";  // Start with #
    
        for (let i = 0; i < 6; i++) {
            // Pick a random character from `letters` and add it to `color`
            color += letters[Math.floor(Math.random() * 16)];
        }
    
        return color; 
    }
    

    // Event listener for button click
    button.addEventListener("click", () => {
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;
    });
});
// What's a Hex Color?
        //A hex color always starts with #.
       // It has 6 characters, each can be a number (0-9) or a letter (A-F).
        //Example: #FF5733 → red-orange color
        //Example: #00FF00 → green
        // Start with #.
        // Pick 6 random numbers/letters from "0123456789ABCDEF".
        // Combine them into a string like "#A1B2C3".
        // Return the color and use it to change a background!