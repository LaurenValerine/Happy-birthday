/* =========================  
   TERMINAL BACKGROUND  
========================= */  
  
const terminal = document.getElementById("terminal");  
  
const terminalLines = [  
    "root@birthday:~$ initializing...",  
    "system: birthday_mode = true",  
    "loading happiness.exe...",  
    "checking memories...",  
    "TKR module loaded...",  
    "fireworks.exe ready",  
    "cake.exe ready",  
    "gift.exe ready",  
    "surprise protocol active..."  
];  
  
for (let i = 0; i < 100; i++) {  
    const span = document.createElement("span");  
  
    span.textContent =  
        terminalLines[  
            Math.floor(Math.random() * terminalLines.length)  
        ];  
  
    terminal.appendChild(span);  
}  
  
  
/* =========================  
   COUNTDOWN  
========================= */  
  
let number = 10;  
  
const countdown =  
    document.getElementById("countdown");  
  
const countNumber =  
    document.getElementById("number");  
  
const timer = setInterval(() => {  
  
    number--;  
  
    if (number <= 0) {  
  
        clearInterval(timer);  
  
        countdown.style.display = "none";  
  
        showReveal();  
  
    } else {  
  
        countNumber.textContent = number;  
  
    }  
  
}, 1000);  
  
  
/* =========================  
   HAPPY BIRTHDAY REVEAL  
========================= */  
  
function showReveal() {  
  
    const reveal =  
        document.getElementById("reveal");  
  
    reveal.style.display = "flex";  
  
    setTimeout(() => {  
  
        reveal.style.display = "none";  
  
        document.getElementById("gift")  
            .style.display = "flex";  
  
    }, 5000);  
  
}  
  
  
/* =========================  
   OPEN GIFT  
========================= */  
  
function openGift() {  
  
    const gift =  
        document.getElementById("gift");  
  
    gift.style.display = "none";  
  
    const explosion =  
        document.getElementById("tkrExplosion");  
  
    explosion.style.display = "flex";  
  
    setTimeout(() => {  
  
        explosion.style.display = "none";  
  
        document.getElementById("main")  
            .style.display = "block";  
  
        startTyping();  
  
    }, 2300);  
  
}  
  
  
/* =========================  
   TYPING ANIMATION  
========================= */  
  
const message =  
    "Today is your special day. Wishing you happiness, good health, and all your dreams come true. Semoga setiap langkahmu selalu membawa cerita yang indah.";  
  
let typingIndex = 0;  
  
function startTyping() {  
  
    const text =  
        document.getElementById("typingText");  
  
    const typing = setInterval(() => {  
  
        text.textContent += message[typingIndex];  
  
        typingIndex++;  
  
        if (typingIndex >= message.length) {  
            clearInterval(typing);  
        }  
  
    }, 45);  
  
}  
  
  
/* =========================  
   SCROLL NOTIFICATION  
========================= */  
  
let notificationShown = false;  
  
window.addEventListener("scroll", () => {  
  
    if (notificationShown) return;  
  
    const scroll = window.scrollY;  
  
    const height =  
        document.documentElement.scrollHeight -  
        window.innerHeight;  
  
    if (height <= 0) return;  
  
    const percentage = scroll / height;  
  
    if (percentage >= 0.35) {  
  
        notificationShown = true;  
  
        const notification =  
            document.getElementById("notification");  
  
        notification.style.display = "flex";  
  
        setTimeout(() => {  
  
            notification.style.display = "none";  
  
        }, 4500);  
  
    }  
  
});
