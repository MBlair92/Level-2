const clickCount = document.getElementById('click-count');
const countdown = document.getElementById('countdown');

let totalClicks = 0;
let clickDisabled = false;

// Check if there is a saved click count in local storage
if (localStorage.getItem('clickCount')) {
    totalClicks = parseInt(localStorage.getItem('clickCount'));
    clickCount.innerHTML = `Total clicks: ${totalClicks}`;
}

// Function to update the click count
function updateClickCount() {
    if (!clickDisabled) {
        totalClicks++;
        clickCount.innerHTML = `Total clicks: ${totalClicks}`;
        localStorage.setItem('clickCount', totalClicks.toString());
    }
}

// Add event listener for click anywhere on the page
document.addEventListener('click', updateClickCount);

// Function to start the countdown timer
function startCountdown() {
    let timeLeft = 30; 
    countdown.innerHTML = `Time left: ${timeLeft} seconds`;
    const timer = setInterval(() => {
        timeLeft--;
        countdown.innerHTML = `Time left: ${timeLeft} seconds`;

        if (timeLeft === 0) {
            clearInterval(timer);
            clickDisabled = true;
            countdown.innerHTML = 'Times up';
        }
    }, 1000);
}

startCountdown();

