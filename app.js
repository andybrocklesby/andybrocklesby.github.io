function pageSetup() {
    let contactCard = document.getElementById('contact-card').style;
    contactCard.display = "none";
}


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



let isShowing = true;

function toggleMenu() {
    let menuDiv = document.getElementById('mobile-menu');
    let currentTransform = menuDiv.style.transform;

    if (currentTransform === 'translateY(10vh)') {
        menuDiv.style.transform = 'translateY(0vh)';
    } else {
        menuDiv.style.transform = 'translateY(10vh)';
    }
}

function openResume() {
    window.open('./AndyBrocklesby_Resume.pdf');
}

// function alertUser() {
//     alert("Website under development. Things will be missing!");
// }

let contactVisible = false;

function toggleContact() {
    let contactCard = document.getElementById('contact-card').style;

    if (contactVisible) {
        contactCard.display = 'none';
        contactVisible = false;
    }
    else if (!contactVisible) {
        contactCard.display = 'grid';
        contactVisible = true;
    }
}



