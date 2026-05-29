// ==========================================
// CONFIGURATION: Set her Target Birthday Here!
// ==========================================
// Replace this with her actual 20th birthday details
const targetBirthday = new Date("December 31, 2026 00:00:00").getTime();

// Add your 20 customized reasons, inside jokes, or milestones here
const specialMessages = [
    "The day you walked into my life, everything changed for the better. ❤️",
    "Your laugh is quite literally my absolute favorite sound in the world.",
    "Remember that time we stayed up late just talking about absolutely nothing?",
    "You inspire me to be a better person every single day.",
    "I still get butterflies every single time I see you smile.",
    "You have the kindest heart of anyone I’ve ever met.",
    "Cheers to entering your 20s together—I wouldn't want to be anywhere else.",
    "You look stunningly beautiful even when you're just wearing an oversized t-shirt.",
    "Thank you for always being my biggest supporter.",
    "I love how we can be completely weird together without any judgment.",
    "You are my safe haven and my favorite adventure all wrapped into one.",
    "Here is a digital flower until I can give you real ones later! 🌸",
    "I promise to always hold your hand through whatever life throws at us.",
    "I love the way your eyes light up when you're genuinely excited about something.",
    "Twenty looks absolutely radiant on you, my love.",
    "You're not just my girlfriend; you're my best friend and my teammate.",
    "Thank you for all the warmth and love you bring into my world.",
    "I'm incredibly proud of the woman you are becoming.",
    "My favorite place in the entire world is right next to you.",
    "Happy 20th Birthday! Here’s to a lifetime of making beautiful memories together. 🥂✨"
];

// 1. COUNTDOWN FUNCTIONALITY
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetBirthday - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display numbers
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // If countdown finishes, customize header prompt text automatically
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown-subtext").innerText = "It's time! Open your gift! 🎉";
    }
}, 1000);

// 2. TRANSITION FROM INTRO TO MAIN SITE
function enterSite() {
    const intro = document.getElementById("intro-screen");
    const mainSite = document.getElementById("main-site");
    
    intro.classList.add("fade-out");
    mainSite.classList.remove("hidden");

    // Instantly explode beautiful canvas confetti!
    triggerConfettiExplosion();
}

function triggerConfettiExplosion() {
    var duration = 4 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff8fa3', '#ffb3c6', '#ffffff']
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff8fa3', '#ffb3c6', '#ffffff']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// 3. GENERATING THE 20 ENVELOPES
const envelopesGrid = document.getElementById("envelopes-grid");

specialMessages.forEach((msg, index) => {
    const envelope = document.createElement("div");
    envelope.classList.add("envelope");
    
    envelope.innerHTML = `
        <span class="number">${index + 1}</span>
        <span class="heart-icon">✉️</span>
    `;
    
    envelope.addEventListener("click", () => {
        openModal(msg);
        envelope.classList.add("opened");
        envelope.querySelector(".heart-icon").innerText = "💌";
    });
    
    envelopesGrid.appendChild(envelope);
});

// 4. MODAL POP-UPS
const modal = document.getElementById("message-modal");
const modalText = document.getElementById("modal-text");

function openModal(text) {
    modalText.innerHTML = text;
    modal.classList.add("active");
}

function closeModal() {
    modal.classList.remove("active");
}

// 5. RANDOM ROTATION FOR PHOTO GALLERY (Gives a cute Polaroid feel)
const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach(item => {
    const randomRot = Math.floor(Math.random() * 6) - 3; // -3deg to 3deg
    item.style.setProperty('--rotation', randomRot);
});

// 6. FLOATING BACKGROUND HEARTS 
const heartsBg = document.getElementById("hearts-bg");

function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerText = "❤️";
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s"; // 3s - 6s
    heart.style.fontSize = (Math.random() * 10 + 12) + "px"; // 12px - 22px
    
    heartsBg.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}
setInterval(createFloatingHeart, 350);
