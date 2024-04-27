// document.addEventListener('DOMContentLoaded', function(){
//     var typed = new Typed('#typed-header', {
//         strings: ["Welcome to My Portfolio!"],
//         typeSpeed: 30
//     });
// });

document.addEventListener('DOMContentLoaded', function(){
    var typed = new Typed('#typed-header', {
        strings: ["Welcome to My Portfolio!"],
        typeSpeed: 50, // Increase the typing speed
        startDelay: 1000, // Delay the start of typing by 1 second
        backSpeed: 50, // Increase the backspacing speed
        smartBackspace: true, // Only backspace what doesn't match the previous string
        shuffle: false, // Don't shuffle the strings
        backDelay: 1000, // Delay backspacing by 1 second
        fadeOut: false, // Don't fade out
        fadeOutClass: 'typed-fade-out', // Use the 'typed-fade-out' class for the fade animation
        fadeOutDelay: 500 // Delay the fade out by 500 milliseconds
    });
});