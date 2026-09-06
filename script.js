/* =========================
   BIRTHDAY WEBSITE SCRIPT
========================= */


/* =========================
   ELEMENTS
========================= */

const countdown = document.getElementById("countdown");
const number = document.getElementById("number");

const reveal = document.getElementById("reveal");
const gift = document.getElementById("gift");

const tkrExplosion = document.getElementById("tkrExplosion");
const errorPrank = document.getElementById("errorPrank");
const errorText = document.getElementById("errorText");
const errorGuide = document.getElementById("errorGuide");

const birthdayHeart = document.getElementById("birthdayHeart");
const birthdayWords = document.getElementById("birthdayWords");

const nextQuestion = document.getElementById("nextQuestion");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const noMessage = document.getElementById("noMessage");

const finalCountdown = document.getElementById("finalCountdown");
const finalNumber = document.getElementById("finalNumber");

const main = document.getElementById("main");

const typingText = document.getElementById("typingText");

const lastGift = document.getElementById("lastGift");
const finalLovePage = document.getElementById("finalLovePage");
const wireHeart = document.getElementById("wireHeart");
const fireworksFinal = document.getElementById("fireworksFinal");


/* =========================
   INITIAL COUNTDOWN
   10 → 1
========================= */

let initialNumber = 10;

const initialCountdown = setInterval(() => {

    initialNumber--;

    if (initialNumber >= 1) {

        number.textContent = initialNumber;

    } else {

        clearInterval(initialCountdown);

        setTimeout(() => {
            showReveal();
        }, 500);
    }

}, 1000);


/* =========================
   CAKE
========================= */

function showReveal() {

    countdown.style.display = "none";

    reveal.style.display = "flex";

    setTimeout(() => {

        reveal.style.display = "none";
        gift.style.display = "flex";

    }, 5000);
}


/* =========================
   GIFT → PRANK
========================= */

function openGift() {

    gift.style.display = "none";

    tkrExplosion.style.display = "flex";

    setTimeout(() => {

        tkrExplosion.style.display = "none";

        errorPrank.style.display = "flex";

        startErrorSequence();

    }, 2300);
}


/* =========================
   ERROR × 3
========================= */

let errorClicks = 0;

function startErrorSequence() {

    errorClicks = 0;

    errorText.style.transform = "scale(1)";
    errorText.style.opacity = "1";

    errorGuide.textContent =
        "Klik ERROR 3 kali untuk melanjutkan";

}


errorText.addEventListener("click", () => {

    errorClicks++;

    if (errorClicks === 1) {

        errorText.style.transform = "scale(1.15)";

        errorGuide.textContent =
            "Hmm... masih ERROR.";

    }

    else if (errorClicks === 2) {

        errorText.style.transform = "scale(1.3)";

        errorGuide.textContent =
            "Sekali lagi... 😈";

    }

    else if (errorClicks === 3) {

        errorGuide.textContent = "";

        errorText.style.transition = ".7s";

        errorText.style.transform = "scale(8)";
        errorText.style.opacity = "0";

        setTimeout(() => {

            errorPrank.style.display = "none";

            showBirthdayHeart();

        }, 700);
    }

});


/* =========================
   HAPPY BIRTHDAY HEART
========================= */

function showBirthdayHeart() {

    birthdayHeart.style.display = "flex";

    birthdayWords.innerHTML = "";

    createBirthdayHeart();

}


/*
   Membuat kata HAPPY BIRTHDAY
   membentuk pola hati.

   Koordinatnya dibuat langsung di JS.
   Nanti kalau mau benar-benar memakai
   hasil Python, bagian ini bisa diganti
   dengan array koordinat dari Python.
*/

function createBirthdayHeart() {

    const totalWords = 150;

    const words = [];

    for (let i = 0; i < totalWords; i++) {

        const word = document.createElement("span");

        word.className = "birthday-word";

        word.textContent = "HAPPY BIRTHDAY";

        birthdayWords.appendChild(word);

        words.push(word);
    }


    const width = birthdayWords.clientWidth;
    const height = birthdayWords.clientHeight;

    for (let i = 0; i < words.length; i++) {

        const t =
            Math.PI * 2 * i / words.length;

        /*
          Rumus parametrik bentuk hati
        */

        const x =
            16 * Math.pow(Math.sin(t), 3);

        const y =
            -(
                13 * Math.cos(t)
                - 5 * Math.cos(2 * t)
                - 2 * Math.cos(3 * t)
                - Math.cos(4 * t)
            );

        const left =
            width / 2 + x * Math.min(width, height) / 36;

        const top =
            height / 2 + y * Math.min(width, height) / 36;


        setTimeout(() => {

            words[i].style.left = left + "px";
            words[i].style.top = top + "px";

            words[i].classList.add("show");

        }, i * 18);
    }


    /*
       Setelah semua kata selesai membentuk hati,
       tahan selama 3 detik.
    */

    const formationTime =
        totalWords * 18 + 1200;

    setTimeout(() => {

        setTimeout(() => {

            birthdayHeart.style.display = "none";

            showQuestion();

        }, 3000);

    }, formationTime);
}


/* =========================
   QUESTION
========================= */

let noClicks = 0;

const noMessages = [
    "yahh jahat 😭",
    "yakin gamau tauu?",
    "serius nih mau nolak?",
    "kok TIDAK terus sih 😭",
    "padahal tinggal klik YA...",
    "masih mau TIDAK juga?",
    "aku kasih kesempatan terakhir 😭"
];


function showQuestion() {

    nextQuestion.style.display = "flex";

    noClicks = 0;

    yesButton.style.transform = "scale(1)";

    noMessage.textContent = "";

}


noButton.addEventListener("click", () => {

    noClicks++;

    const index =
        Math.min(noClicks - 1, noMessages.length - 1);

    noMessage.textContent =
        noMessages[index];

    /*
       Setiap TIDAK membuat YA
       semakin besar.
    */

    const scale =
        1 + noClicks * 0.18;

    yesButton.style.transform =
        `scale(${scale})`;

});


/* =========================
   YA → FINAL COUNTDOWN
========================= */

yesButton.addEventListener("click", () => {

    nextQuestion.style.display = "none";

    startFinalCountdown();

});


/* =========================
   FINAL COUNTDOWN
   3 → 2 → 1
========================= */

function startFinalCountdown() {

    finalCountdown.style.display = "flex";

    let count = 3;

    finalNumber.textContent = count;

    const timer = setInterval(() => {

        count--;

        if (count >= 1) {

            finalNumber.textContent = count;

        } else {

            clearInterval(timer);

            finalCountdown.style.display = "none";

            showMain();

        }

    }, 1000);
}


/* =========================
   MAIN PAGE
========================= */

function showMain() {

    main.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    startTyping();

}


/* =========================
   TYPING
========================= */

const message =
`Today is your special day.
Wishing you happiness, good health, and all your dreams come true.

Sebelum lanjutt ada pantun dulu om.

Pergi ke pasar membeli pita,
Singgah sebentar membeli udang.
Selamat bertambah tua om tercinta,
Minta kuota dong sayangg...

Nyambung ga sihh...
Halahh bodo amat lahhh 😭`;

let typingIndex = 0;

function startTyping() {

    typingText.textContent = "";

    typingIndex = 0;

    typeCharacter();

}


function typeCharacter() {

    if (typingIndex < message.length) {

        typingText.textContent +=
            message.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeCharacter, 35);

    }

}


/* =========================
   LAST GIFT
========================= */

function openLastGift() {

    finalLovePage.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


/* =====================================================
   FINAL 3D WIREFRAME HEART
===================================================== */

const wireHeart =
    document.getElementById("wireHeart");

const heartLight =
    document.getElementById("heartLight");

let heartClicked = false;


/* =========================
   CREATE 3D WIREFRAME
========================= */

function create3DHeart() {

    wireHeart.innerHTML = "";

    const points = [];

    /*
       Membuat permukaan hati
       menggunakan persamaan matematika.
    */

    const layers = 12;
    const segments = 34;

    for (let layer = 0; layer < layers; layer++) {

        const depth =
            (layer / (layers - 1) - .5) * 90;

        const depthScale =
            1 - Math.abs(depth) / 180;

        for (
            let i = 0;
            i < segments;
            i++
        ) {

            const t =
                Math.PI * 2 * i / segments;

            /*
               Heart equation
            */

            const hx =
                16 *
                Math.pow(
                    Math.sin(t),
                    3
                );

            const hy =
                -(
                    13 * Math.cos(t)
                    - 5 * Math.cos(2 * t)
                    - 2 * Math.cos(3 * t)
                    - Math.cos(4 * t)
                );

            const x =
                hx * 9 * depthScale;

            const y =
                hy * 9 * depthScale;

            const point =
                document.createElement("span");

            point.className =
                "heart-wire-point";

            point.style.left =
                `calc(50% + ${x}px)`;

            point.style.top =
                `calc(50% + ${y}px)`;

            point.style.transform =
                `translate(-50%, -50%)
                 translateZ(${depth}px)`;

            wireHeart.appendChild(point);

            points.push({
                element: point,
                layer,
                index: i,
                x,
                y,
                z: depth
            });

        }

    }


    /*
       Garis horizontal
       mengikuti setiap lapisan.
    */

    for (
        let layer = 0;
        layer < layers;
        layer++
    ) {

        for (
            let i = 0;
            i < segments;
            i++
        ) {

            const next =
                (i + 1) % segments;

            createHeartLine(
                points[
                    layer * segments + i
                ],
                points[
                    layer * segments + next
                ]
            );

        }

    }


    /*
       Garis vertikal
       menghubungkan kedalaman 3D.
    */

    for (
        let layer = 0;
        layer < layers - 1;
        layer++
    ) {

        for (
            let i = 0;
            i < segments;
            i += 2
        ) {

            createHeartLine(
                points[
                    layer * segments + i
                ],
                points[
                    (layer + 1) * segments + i
                ]
            );

        }

    }


    /*
       Garis tambahan diagonal
       supaya terlihat seperti wireframe 3D.
    */

    for (
        let layer = 0;
        layer < layers - 1;
        layer++
    ) {

        for (
            let i = 1;
            i < segments;
            i += 4
        ) {

            const next =
                (i + 1) % segments;

            createHeartLine(
                points[
                    layer * segments + i
                ],
                points[
                    (layer + 1) * segments + next
                ]
            );

        }

    }

}


/* =========================
   CREATE LINE
========================= */

function createHeartLine(a, b) {

    const line =
        document.createElement("span");

    line.className =
        "heart-wire-line";

    const dx =
        b.x - a.x;

    const dy =
        b.y - a.y;

    const dz =
        b.z - a.z;

    const length =
        Math.sqrt(
            dx * dx +
            dy * dy +
            dz * dz
        );

    const angle =
        Math.atan2(dy, dx) *
        180 / Math.PI;

    const centerX =
        (a.x + b.x) / 2;

    const centerY =
        (a.y + b.y) / 2;

    const centerZ =
        (a.z + b.z) / 2;

    line.style.left =
        `calc(50% + ${centerX}px)`;

    line.style.top =
        `calc(50% + ${centerY}px)`;

    line.style.width =
        `${length}px`;

    line.style.transform =
        `
        translate(-50%, -50%)
        rotate(${angle}deg)
        translateZ(${centerZ}px)
        `;

    wireHeart.appendChild(line);

}


/* =========================
   INITIALIZE HEART
========================= */

create3DHeart();


/* =====================================================
   HEART CLICK
===================================================== */

wireHeart.addEventListener(
    "click",
    () => {

        if (heartClicked)
            return;

        heartClicked = true;


        /*
           STEP 1
           Hati mulai membelah.
        */

        wireHeart.classList.add(
            "splitting"
        );


        /*
           STEP 2
           Cahaya muncul dari tengah.
        */

        setTimeout(() => {

            heartLight.classList.add(
                "active"
            );

            wireHeart.classList.add(
                "glowing"
            );

        }, 650);


        /*
           STEP 3
           Hati pecah.
        */

        setTimeout(() => {

            wireHeart.classList.remove(
                "glowing"
            );

            wireHeart.classList.add(
                "burst"
            );

            createFinalFireworks();

        }, 1800);

    }
);

/* =========================
   FIREWORKS
========================= */

function createFinalFireworks() {

    fireworksFinal.innerHTML = "";

    for (let i = 0; i < 35; i++) {

        const particle =
            document.createElement("span");

        particle.style.position = "absolute";

        particle.style.left =
            "50%";

        particle.style.top =
            "50%";

        particle.style.width =
            "5px";

        particle.style.height =
            "5px";

        particle.style.borderRadius =
            "50%";

        particle.style.background =
            "#ff8c00";

        particle.style.boxShadow =
            "0 0 10px #ff8c00";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            100 + Math.random() * 350;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        particle.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(1)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${x}px, ${y}px) scale(0)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    1000 + Math.random() * 1200,

                easing: "cubic-bezier(.1,.7,.2,1)",

                fill: "forwards"
            }
        );

        fireworksFinal.appendChild(particle);
    }

                   } 
