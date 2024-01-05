
const greetings = ['a car enthusiast 🚗', 'a technology fanatic 💻', 'a whovian 🌀', 'a productivity fanatic 🧠', 'a self-development sucker 💪'];
const greetingLocation = document.getElementById('greeting-container');
let index = 0;

function cycleGreetings() {
    greetingLocation.innerHTML = greetings[index];
    index = (index + 1) % greetings.length;

    setTimeout(() => {
        greetingLocation.style.opacity = '0';

        // Set opacity back to 1 after a short duration
        setTimeout(() => {
            greetingLocation.style.opacity = '1';
        }, 1000); // Adjust this timeout value based on your transition duration

    }, 2000); // Delay before fading out
}

// Initial call
cycleGreetings();
setInterval(cycleGreetings, 3000);


