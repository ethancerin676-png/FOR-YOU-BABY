// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Music Elements
const music = document.getElementById("valentineSong");
const playBtn = document.getElementById("playBtn");
let musicStarted = false;

// ===============================
// Envelope Click → Show Letter + Play Music
// ===============================
envelope.addEventListener("click", function () {
    // Start music once
    if (!musicStarted) {
        music.play().then(() => {
            musicStarted = true;
            playBtn.classList.add("playing");
            playBtn.textContent = "💖";
        }).catch(err => console.log("Music play blocked:", err));
    }

    // Show letter
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// ===============================
// Music Button Toggle
// ===============================
playBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        playBtn.classList.add("playing");
        playBtn.textContent = "💖";
    } else {
        music.pause();
        playBtn.classList.remove("playing");
        playBtn.textContent = "🎵";
    }
});

// ===============================
// NO Button Move Logic
// ===============================
noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// ===============================
// YES Button Click Logic
// ===============================
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
