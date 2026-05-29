// 1. Array of 20 unique messages, memories, or reasons
const birthdayMessages = [
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

// 2. Generate the 20 Cards dynamically
const gridContainer = document.getElementById('cards-grid');

for (let i = 1; i <= 20; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerText = i;
    card.addEventListener('click', () => openModal(i - 1));
    gridContainer.appendChild(card);
}

// 3. Modal Functionality
const modal = document.getElementById('message-modal');
const modalText = document.getElementById('modal-text');

function openModal(index) {
    modalText.innerText = birthdayMessages[index];
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

function scrollToContent() {
    document.getElementById('surprises').scrollIntoView({ behavior: 'smooth' });
}

// 4. Create Gentle Floating Hearts Background
const bgEffects = document.getElementById('bg-effects');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's'; // Between 3s and 6s
    heart.style.fontSize = Math.random() * 15 + 15 + 'px'; // 15px to 30px
    
    bgEffects.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Spawn a heart every 400ms
setInterval(createHeart, 400);
