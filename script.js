/* =========================================================
   BIRTHDAY WEBSITE - SCRIPT.JS
   ========================================================= */


/* =========================================================
   TERMINAL BACKGROUND
   ========================================================= */

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

if (terminal) {

    for (let i = 0; i < 100; i++) {

        const span = document.createElement("span");

        span.textContent =
            terminalLines[
                Math.floor(
                    Math.random() * terminalLines.length
                )
            ];

        terminal.appendChild(span);
    }

}


/* =========================================================
   INITIAL COUNTDOWN
   10 → 0
   ========================================================= */

let number = 10;

const countdown =
    document.getElementById("countdown");

const countNumber =
    document.getElementById("number");

const initialTimer = setInterval(() => {

    number--;

    if (number <= 0) {

        clearInterval(initialTimer);

        if (countdown) {
            countdown.style.display = "none";
        }

        showReveal();

    } else {

        if (countNumber) {
            countNumber.textContent = number;
        }

    }

}, 1000);


/* =========================================================
   HAPPY BIRTHDAY REVEAL
   ========================================================= */

function showReveal() {

    const reveal =
        document.getElementById("reveal");

    if (!reveal) return;

    reveal.style.display = "flex";

    setTimeout(() => {

        reveal.style.display = "none";

        const gift =
            document.getElementById("gift");

        if (gift) {
            gift.style.display = "flex";
        }

    }, 5000);

}


/* =========================================================
   OPEN GIFT
   ========================================================= */

function openGift() {

    const gift =
        document.getElementById("gift");

    if (gift) {
        gift.style.display = "none";
    }

    const explosion =
        document.getElementById("tkrExplosion");

    if (explosion) {

        explosion.style.display = "flex";

        setTimeout(() => {

            explosion.style.display = "none";

            startFinalCountdown();

        }, 2300);

    } else {

        startFinalCountdown();

    }

}


/* =========================================================
   FINAL COUNTDOWN
   HAPPY BIRTHDAY RAIN
   3 → 2 → 1
   ========================================================= */

function createBirthdayRain() {

    const rain =
        document.getElementById("birthdayRain");

    if (!rain) return;

    rain.innerHTML = "";

    const totalText = 90;

    for (let i = 0; i < totalText; i++) {

        const text =
            document.createElement("div");

        text.className = "rain-text";

        text.textContent =
            "HAPPY BIRTHDAY";

        text.style.left =
            Math.random() * 100 + "%";

        text.style.fontSize =
            (10 + Math.random() * 12) + "px";

        const duration =
            2.5 + Math.random() * 3;

        text.style.animationDuration =
            duration + "s";

        text.style.animationDelay =
            -(Math.random() * duration) + "s";

        rain.appendChild(text);

    }

}


function startFinalCountdown() {

    const finalCountdown =
        document.getElementById("finalCountdown");

    const finalNumber =
        document.getElementById("finalNumber");

    if (!finalCountdown || !finalNumber) {

        showMainWebsite();

        return;

    }

    finalCountdown.style.display = "block";

    createBirthdayRain();

    let count = 3;

    finalNumber.textContent = count;

    const finalTimer = setInterval(() => {

        count--;

        if (count > 0) {

            finalNumber.textContent = count;

        } else {

            clearInterval(finalTimer);

            finalCountdown.style.display = "none";

            showMainWebsite();

        }

    }, 1000);

}


/* =========================================================
   SHOW MAIN WEBSITE
   ========================================================= */

function showMainWebsite() {

    const main =
        document.getElementById("main");

    if (!main) return;

    main.style.display = "block";

    startTyping();

}


/* =========================================================
   TYPING ANIMATION
   ========================================================= */

const message =
    "Today is your special day. Wishing you happiness, good health, and all your dreams come true. Sebelum lanjutt ada pantun dulu om. Pergi ke pasar membeli pita, Singgah sebentar membeli udang, Selamat bertambah tua om tercinta, Minta kuota dong sayangg... nyambung ga sihh... halahh bodo amat lahhh";

let typingIndex = 0;
let typingStarted = false;

function startTyping() {

    if (typingStarted) return;

    const text =
        document.getElementById("typingText");

    if (!text) return;

    typingStarted = true;

    text.textContent = "";

    typingIndex = 0;

    const typingTimer = setInterval(() => {

        if (typingIndex >= message.length) {

            clearInterval(typingTimer);

            return;

        }

        text.textContent +=
            message[typingIndex];

        typingIndex++;

    }, 45);

}


/* =========================================================
   SCROLL NOTIFICATION
   ========================================================= */

let notificationShown = false;

window.addEventListener("scroll", () => {

    if (notificationShown) return;

    const scroll =
        window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    if (height <= 0) return;

    const percentage =
        scroll / height;

    if (percentage >= 0.35) {

        notificationShown = true;

        const notification =
            document.getElementById("notification");

        if (!notification) return;

        notification.style.display = "flex";

        setTimeout(() => {

            notification.style.display = "none";

        }, 4500);

    }

});


/* =========================================================
   END OF SCRIPT
   ========================================================= */ 
