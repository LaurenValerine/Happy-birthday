 /* =========================================================
BIRTHDAY WEBSITE
SCRIPT.JS
========================================================= */

/* =========================================================

1. TERMINAL BACKGROUND
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
"surprise protocol active...",
"target: M RIZKY ADITYA P",
"birthday protocol: READY"
];

if (terminal) {

for (let i = 0; i < 100; i++) {  

    const line = document.createElement("span");  

    line.textContent =  
        terminalLines[  
            Math.floor(  
                Math.random() * terminalLines.length  
            )  
        ];  

    terminal.appendChild(line);  
}

}

/* =========================================================
2. COUNTDOWN 10 → 0
========================================================= */

const countdown =
document.getElementById("countdown");

const countNumber =
document.getElementById("number");

let countdownNumber = 10;

const countdownTimer = setInterval(() => {

countdownNumber--;  

if (countNumber) {  
    countNumber.textContent =  
        countdownNumber;  
}  

if (countdownNumber <= 0) {  

    clearInterval(countdownTimer);  

    if (countdown) {  
        countdown.classList.add(  
            "countdown-hide"  
        );  
    }  

    setTimeout(() => {  
        showReveal();  
    }, 700);  
}

}, 1000);

/* =========================================================
3. CAKE REVEAL
========================================================= */

function showReveal() {

const reveal =  
    document.getElementById("reveal");  

if (!reveal) return;  

reveal.style.display = "flex";  

reveal.classList.remove(  
    "reveal-hide"  
);  

void reveal.offsetWidth;  

reveal.classList.add(  
    "reveal-show"  
);  


setTimeout(() => {  

    reveal.classList.remove(  
        "reveal-show"  
    );  

    reveal.classList.add(  
        "reveal-hide"  
    );  


    setTimeout(() => {  

        reveal.style.display = "none";  

        showGift();  

    }, 700);  

}, 5000);

}

/* =========================================================
4. GIFT
========================================================= */

const gift =
document.getElementById("gift");

const giftButton =
document.getElementById("giftButton");

let giftOpened = false;

if (giftButton) {

giftButton.addEventListener(  
    "click",  
    openGift  
);

}

function showGift() {

if (!gift) return;  

gift.style.display = "flex";  

gift.classList.remove(  
    "gift-shake"  
);  

void gift.offsetWidth;  

gift.classList.add(  
    "gift-show"  
);

}

function openGift() {

if (giftOpened) return;  

giftOpened = true;  

if (!gift) return;  

gift.classList.add(  
    "gift-shake"  
);  


setTimeout(() => {  

    gift.style.display = "none";  

    startErrorPrank();  

}, 650);

}

/* =========================================================
5. ERROR PRANK
========================================================= */

const prank =
document.getElementById("prank");

const errorWord =
document.getElementById("errorWord");

const errorGuide =
document.getElementById("errorGuide");

const errorCounter =
document.getElementById("errorCounter");

let errorClicks = 0;
let prankFinished = false;

if (prank) {
prank.style.display = "none";
}

if (errorWord) {

errorWord.addEventListener(  
    "click",  
    clickError  
);

}

function startErrorPrank() {

if (!prank) return;  

errorClicks = 0;  
prankFinished = false;  

prank.style.display = "flex";  

prank.classList.remove(  
    "prank-blackout",  
    "danger-level-1",  
    "danger-level-2",  
    "danger-level-3"  
);  


if (errorWord) {  

    errorWord.classList.remove(  
        "error-warning",  
        "error-danger",  
        "error-explode"  
    );  

}  


if (errorCounter) {  
    errorCounter.textContent =  
        "0 / 3";  

    errorCounter.style.display =  
        "block";  
}  


if (errorGuide) {  

    errorGuide.textContent =  
        "Klik ERROR 3 kali.";  

}  


setTimeout(() => {  

    prank.classList.add(  
        "prank-active"  
    );  

}, 50);

}

/* =========================================================
ERROR CLICK
========================================================= */

function clickError() {

if (prankFinished) return;  

errorClicks++;  


if (errorCounter) {  

    errorCounter.textContent =  
        `${Math.min(errorClicks, 3)} / 3`;  

}  


/* -------------------------  
   CLICK 1  
------------------------- */  

if (errorClicks === 1) {  

    if (errorWord) {  

        errorWord.classList.add(  
            "error-warning"  
        );  

    }  

    if (errorGuide) {  

        errorGuide.textContent =  
            "WARNING... system instability detected.";  

    }  

    if (prank) {  

        prank.classList.add(  
            "danger-level-1"  
        );  

    }  

    createGlitchParticles(20);  

}  


/* -------------------------  
   CLICK 2  
------------------------- */  

else if (errorClicks === 2) {  

    if (errorWord) {  

        errorWord.classList.remove(  
            "error-warning"  
        );  

        errorWord.classList.add(  
            "error-danger"  
        );  

    }  

    if (errorGuide) {  

        errorGuide.textContent =  
            "CRITICAL ERROR... one more click.";  

    }  

    if (prank) {  

        prank.classList.remove(  
            "danger-level-1"  
        );  

        prank.classList.add(  
            "danger-level-2"  
        );  

    }  

    createGlitchParticles(40);  

}  


/* -------------------------  
   CLICK 3  
------------------------- */  

else {  

    prankFinished = true;  

    if (errorGuide) {  

        errorGuide.textContent =  
            "SYSTEM FAILURE.";  

    }  

    if (errorCounter) {  

        errorCounter.style.display =  
            "none";  

    }  

    if (errorWord) {  

        errorWord.classList.add(  
            "error-explode"  
        );  

    }  

    if (prank) {  

        prank.classList.add(  
            "danger-level-3"  
        );  

    }  

    createGlitchParticles(90);  


    setTimeout(() => {  

        createBirthdayHeart();  

    }, 850);  

}

}

/* =========================================================
6. GLITCH PARTICLES
========================================================= */

function createGlitchParticles(amount) {

if (!prank) return;  

for (let i = 0; i < amount; i++) {  

    const particle =  
        document.createElement("span");  

    particle.className =  
        "glitch-particle";  


    particle.style.left =  
        `${50 + (Math.random() * 40 - 20)}%`;  

    particle.style.top =  
        `${50 + (Math.random() * 40 - 20)}%`;  


    particle.style.setProperty(  
        "--x",  
        `${Math.random() * 600 - 300}px`  
    );  

    particle.style.setProperty(  
        "--y",  
        `${Math.random() * 500 - 250}px`  
    );  


    particle.style.animationDelay =  
        `${Math.random() * 0.25}s`;  


    prank.appendChild(  
        particle  
    );  


    setTimeout(() => {  

        particle.remove();  

    }, 1300);  

}

}

/* =========================================================
7. HAPPY BIRTHDAY HEART
========================================================= */

function createBirthdayHeart() {

const birthdayLove =  
    document.getElementById(  
        "birthdayLove"  
    );  

const birthdayHeart =  
    document.getElementById(  
        "birthdayHeart"  
    );  

const heartMessage =  
    document.getElementById(  
        "heartMessage"  
    );  


if (  
    !birthdayLove ||  
    !birthdayHeart ||  
    !heartMessage  
) {  
    return;  
}  


/* BLACKOUT PRANK */  

if (prank) {  

    prank.classList.add(  
        "prank-blackout"  
    );  

}  


setTimeout(() => {  

    if (prank) {  
        prank.style.display =  
            "none";  
    }  

}, 800);  


/* SHOW HEART */  

birthdayLove.style.display =  
    "flex";  

birthdayLove.classList.remove(  
    "birthday-love-fade"  
);  

void birthdayLove.offsetWidth;  

birthdayLove.classList.add(  
    "birthday-love-show"  
);  


/* CLEAR OLD WORDS */  

birthdayHeart.innerHTML = "";  


/*  
   Membuat pola hati matematis.  
*/  

const points = [];  


const scaleX = 2.35;  
const scaleY = 2.05;  


for (  
    let y = -1;  
    y <= 1;  
    y += 0.115  
) {  

    for (  
        let x = -1.25;  
        x <= 1.25;  
        x += 0.115  
    ) {  

        const nx = x * 1.15;  
        const ny = y * 1.15;  


        const equation =  
            Math.pow(  
                nx * nx +  
                ny * ny -  
                1,  
                3  
            )  
            -  
            nx * nx *  
            Math.pow(  
                ny,  
                3  
            );  


        if (equation <= 0) {  

            points.push({  
                x,  
                y  
            });  

        }  

    }  

}  


/*  
   Buat tulisan.  
*/  

points.forEach(  
    (point, index) => {  

        const word =  
            document.createElement(  
                "span"  
            );  

        word.className =  
            "heart-word";  

        word.textContent =  
            "HAPPY BIRTHDAY";  


        const left =  
            50 +  
            point.x *  
            scaleX *  
            25;  


        const top =  
            50 -  
            point.y *  
            scaleY *  
            24;  


        word.style.left =  
            `${left}%`;  

        word.style.top =  
            `${top}%`;  


        word.style.animationDelay =  
            `${index * 0.012}s`;  


        birthdayHeart.appendChild(  
            word  
        );  

    }  
);  


/*  
   Waktu pembentukan heart.  
*/  

const formationTime =  
    Math.min(  
        points.length * 12 + 800,  
        4200  
    );  


/*  
   Pesan tengah muncul  
   setelah heart terbentuk.  
*/  

setTimeout(() => {  

    heartMessage.classList.add(  
        "heart-message-show"  
    );  

}, formationTime);  


/*  
   Heart bertahan 3 detik.  
*/  

setTimeout(() => {  

    birthdayLove.classList.add(  
        "birthday-love-fade"  
    );  


    setTimeout(() => {  

        birthdayLove.style.display =  
            "none";  

        heartMessage.classList.remove(  
            "heart-message-show"  
        );  

        showNextQuestion();  

    }, 700);  

}, formationTime + 3000);

}

/* =========================================================
8. NEXT QUESTION
========================================================= */

const nextPage =
document.getElementById("nextPage");

const yesButton =
document.getElementById("yesButton");

const noButton =
document.getElementById("noButton");

const noMessage =
document.getElementById("noMessage");

let noClicks = 0;

const noMessages = [

"yahh jahat 😭",  

"yakin gamau tauu?",  

"masa hadiahnya ditolak...",  

"satu kali lagi ajaa 😭",  

"serius gamau?",  

"aku sudah menyiapkan ini loh...",  

"kesempatan terakhir mungkin 👀",  

"YA-nya kok malah diabaikan 😭"

];

if (yesButton) {

yesButton.addEventListener(  
    "click",  
    chooseYes  
);

}

if (noButton) {

noButton.addEventListener(  
    "click",  
    chooseNo  
);

}

function showNextQuestion() {

if (!nextPage) return;  

nextPage.style.display =  
    "flex";  

nextPage.classList.remove(  
    "next-page-hide"  
);  

void nextPage.offsetWidth;  

nextPage.classList.add(  
    "next-page-show"  
);

}

/* =========================================================
TIDAK
========================================================= */

function chooseNo() {

noClicks++;  


if (noMessage) {  

    noMessage.textContent =  
        noMessages[  
            (noClicks - 1) %  
            noMessages.length  
        ];  


    noMessage.classList.remove(  
        "message-pop"  
    );  

    void noMessage.offsetWidth;  

    noMessage.classList.add(  
        "message-pop"  
    );  

}  


/*  
   Tombol YA membesar.  
*/  

if (yesButton) {  

    const scale =  
        Math.min(  
            1 + noClicks * 0.16,  
            2.5  
        );  


    yesButton.style.transform =  
        `scale(${scale})`;  


    yesButton.style.zIndex =  
        "10";  

}

}

/* =========================================================
YA
========================================================= */

function chooseYes() {

if (!nextPage) return;  

nextPage.classList.add(  
    "next-page-hide"  
);  


setTimeout(() => {  

    nextPage.style.display =  
        "none";  

    startFinalCountdown();  

}, 700);

}

/* =========================================================
9. FINAL COUNTDOWN
========================================================= */

function startFinalCountdown() {

const overlay =  
    document.createElement(  
        "section"  
    );  

overlay.id =  
    "finalCountdown";  


overlay.innerHTML = `  

    <div class="final-countdown-content">  

        <p>  
            ACCESS GRANTED  
        </p>  

        <div id="finalCountNumber">  
            3  
        </div>  

        <span>  
            Loading birthday page...  
        </span>  

    </div>  

`;  


document.body.appendChild(  
    overlay  
);  


let count = 3;  


const timer =  
    setInterval(() => {  

        count--;  


        const number =  
            document.getElementById(  
                "finalCountNumber"  
            );  


        if (count <= 0) {  

            clearInterval(  
                timer  
            );  


            overlay.classList.add(  
                "final-countdown-hide"  
            );  


            setTimeout(() => {  

                overlay.remove();  

                showMainWebsite();  

            }, 600);  


        } else {  

            if (number) {  

                number.textContent =  
                    count;  

            }  

        }  

    }, 1000);

}

/* =========================================================
10. MAIN WEBSITE
========================================================= */

function showMainWebsite() {

const main =  
    document.getElementById(  
        "main"  
    );  


if (!main) return;  


main.style.display =  
    "block";  


window.scrollTo({  
    top: 0,  
    behavior: "instant"  
});  


setTimeout(() => {  

    main.classList.add(  
        "main-show"  
    );  

    startTyping();  

}, 100);

}

/* =========================================================
11. TYPING MESSAGE
========================================================= */

const message = `
Today is your special day. Wishing you happiness, good health, and all your dreams come true.

Sebelum lanjutt ada pantun dulu om.

Pergi ke pasar membeli pita,
Singgah sebentar membeli udang,
Selamat bertambah tua om tercinta,
Minta kuota dong sayangg...

Nyambung ga sihh...
halahh bodo amat lahhh 😭
`;

let typingIndex = 0;
let typingStarted = false;

function startTyping() {

if (typingStarted) return;  

typingStarted = true;  


const text =  
    document.getElementById(  
        "typingText"  
    );  


if (!text) return;  


text.textContent = "";  


const typing =  
    setInterval(() => {  

        if (  
            typingIndex >=  
            message.length  
        ) {  

            clearInterval(  
                typing  
            );  

            return;  

        }  


        text.textContent +=  
            message[  
                typingIndex  
            ];  


        typingIndex++;  

    }, 35);

}

/* =========================================================
12. SECTION REVEAL
========================================================= */

const sections =
document.querySelectorAll(
".section"
);

if (
"IntersectionObserver"
in window
) {

const observer =  
    new IntersectionObserver(  
        entries => {  

            entries.forEach(  
                entry => {  

                    if (  
                        entry.isIntersecting  
                    ) {  

                        entry.target.classList.add(  
                            "section-visible"  
                        );  

                    }  

                }  
            );  

        },  
        {  
            threshold: 0.15  
        }  
    );  


sections.forEach(  
    section => {  

        observer.observe(  
            section  
        );  

    }  
);

}

/* =========================================================
13. SCROLL NOTIFICATION
========================================================= */

let notificationShown =
false;

window.addEventListener(
"scroll",
() => {

if (notificationShown) return;  


    const notification =  
        document.getElementById(  
            "notification"  
        );  


    /*  
       Kalau elemen notification  
       memang tidak ada di HTML,  
       abaikan saja.  
    */  

    if (!notification) return;  


    const scroll =  
        window.scrollY;  


    const height =  
        document.documentElement  
            .scrollHeight  
        -  
        window.innerHeight;  


    if (height <= 0) return;  


    const percentage =  
        scroll / height;  


    if (percentage >= 0.35) {  

        notificationShown =  
            true;  


        notification.style.display =  
            "flex";  


        setTimeout(() => {  

            notification.classList.add(  
                "notification-hide"  
            );  


            setTimeout(() => {  

                notification.style.display =  
                    "none";  

            }, 500);  

        }, 4000);  

    }  

}

);

/* =========================================================
14. FINAL GIFT
========================================================= */

const finalGiftButton =
document.getElementById(
"finalGiftButton"
);

let finalGiftOpened =
false;

if (finalGiftButton) {

finalGiftButton.addEventListener(  
    "click",  
    openFinalGift  
);

}

function openFinalGift() {

if (finalGiftOpened) return;  

finalGiftOpened = true;  


if (finalGiftButton) {  

    finalGiftButton.classList.add(  
        "final-button-active"  
    );  

}  


setTimeout(() => {  

    const main =  
        document.getElementById(  
            "main"  
        );  

    const finalPage =  
        document.getElementById(  
            "finalLovePage"  
        );  


    if (main) {  

        main.style.display =  
            "none";  

    }  


    if (finalPage) {  

        finalPage.style.display =  
            "flex";  


        setTimeout(() => {  

            finalPage.classList.add(  
                "final-page-show"  
            );  


            init3DHeart();  

        }, 100);  

    }  

}, 600);

}

/* =========================================================
15. THREE.JS VARIABLES
========================================================= */

let scene = null;
let camera = null;
let renderer = null;

let heartGroup = null;
let leftHeart = null;
let rightHeart = null;

let heartClicked = false;
let threeInitialized = false;

/* =========================================================
16. INITIALIZE 3D HEART
========================================================= */

function init3DHeart() {

const container =  
    document.getElementById(  
        "love3dContainer"  
    );  


if (!container) return;  


if (  
    typeof THREE ===  
    "undefined"  
) {  

    console.error(  
        "Three.js tidak ditemukan."  
    );  

    return;  

}  


/*  
   Jangan membuat canvas  
   berkali-kali.  
*/  

if (threeInitialized) return;  

threeInitialized = true;  


scene =  
    new THREE.Scene();  


camera =  
    new THREE.PerspectiveCamera(  
        45,  
        window.innerWidth /  
        window.innerHeight,  
        0.1,  
        1000  
    );  


camera.position.z =  
    8;  


renderer =  
    new THREE.WebGLRenderer({  
        antialias: true,  
        alpha: true  
    });  


renderer.setPixelRatio(  
    Math.min(  
        window.devicePixelRatio,  
        2  
    )  
);  


renderer.setSize(  
    window.innerWidth,  
    window.innerHeight  
);  


container.appendChild(  
    renderer.domElement  
);  


create3DHeart();  


renderer.domElement.addEventListener(  
    "click",  
    handleHeartClick  
);  


window.addEventListener(  
    "resize",  
    resize3D  
);  


animate3DHeart();

}

/* =========================================================
17. CREATE 3D HEART
========================================================= */

function create3DHeart() {

leftHeart =  
    new THREE.Group();  


rightHeart =  
    new THREE.Group();  


heartGroup =  
    new THREE.Group();  


heartGroup.add(  
    leftHeart  
);  

heartGroup.add(  
    rightHeart  
);  


scene.add(  
    heartGroup  
);  


/*  
   Membuat titik hati.  
*/  

const leftPoints = [];  
const rightPoints = [];  


/*  
   Beberapa lapisan kedalaman  
   supaya terlihat 3D.  
*/  

for (  
    let layer = 0;  
    layer < 7;  
    layer++  
) {  

    const z =  
        -1.2 +  
        layer * 0.4;  


    for (  
        let i = 0;  
        i < 260;  
        i++  
    ) {  

        const t =  
            Math.random() *  
            Math.PI *  
            2;  


        const radius =  
            Math.sqrt(  
                Math.random()  
            );  


        const x =  
            16 *  
            Math.pow(  
                Math.sin(t),  
                3  
            ) *  
            radius;  


        const y =  
            (  
                13 *  
                Math.cos(t)  
                -  
                5 *  
                Math.cos(2 * t)  
                -  
                2 *  
                Math.cos(3 * t)  
                -  
                Math.cos(4 * t)  
            ) *  
            radius;  


        const point =  
            new THREE.Vector3(  
                x / 8,  
                y / 8,  
                z +  
                (  
                    Math.random() -  
                    0.5  
                ) * 0.25  
            );  


        if (point.x <= 0) {  

            leftPoints.push(  
                point  
            );  

        } else {  

            rightPoints.push(  
                point  
            );  

        }  

    }  

}  


createHeartPointCloud(  
    leftPoints,  
    leftHeart  
);  


createHeartPointCloud(  
    rightPoints,  
    rightHeart  
);  


/*  
   Ukuran keseluruhan.  
*/  

heartGroup.scale.set(  
    1.35,  
    1.35,  
    1.35  
);

}

/* =========================================================
18. HEART POINT CLOUD
========================================================= */

function createHeartPointCloud(
points,
group
) {

const geometry =  
    new THREE.BufferGeometry();  


geometry.setFromPoints(  
    points  
);  


const material =  
    new THREE.PointsMaterial({  
        color: 0xff6a00,  
        size: 0.045,  
        transparent: true,  
        opacity: 0.95  
    });  


const pointCloud =  
    new THREE.Points(  
        geometry,  
        material  
    );  


group.add(  
    pointCloud  
);  


/*  
   Wireframe lines.  
*/  

const linePositions = [];  


for (  
    let i = 0;  
    i < points.length - 2;  
    i += 4  
) {  

    const a =  
        points[i];  

    const b =  
        points[i + 1];  


    if (!a || !b) continue;  


    const distance =  
        a.distanceTo(b);  


    if (distance < 1.5) {  

        linePositions.push(  

            a.x,  
            a.y,  
            a.z,  

            b.x,  
            b.y,  
            b.z  

        );  

    }  

}  


if (  
    linePositions.length >  
    0  
) {  

    const lineGeometry =  
        new THREE.BufferGeometry();  


    lineGeometry.setAttribute(  
        "position",  
        new THREE.Float32BufferAttribute(  
            linePositions,  
            3  
        )  
    );  


    const lineMaterial =  
        new THREE.LineBasicMaterial({  
            color: 0xff6500,  
            transparent: true,  
            opacity: 0.32  
        });  


    const lines =  
        new THREE.LineSegments(  
            lineGeometry,  
            lineMaterial  
        );  


    group.add(  
        lines  
    );  

}

}

/* =========================================================
19. 3D HEART ANIMATION
========================================================= */

function animate3DHeart() {

if (  
    !renderer ||  
    !scene ||  
    !camera  
) {  
    return;  
}  


requestAnimationFrame(  
    animate3DHeart  
);  


if (  
    !heartClicked &&  
    heartGroup  
) {  

    heartGroup.rotation.y +=  
        0.008;  


    heartGroup.rotation.x =  
        Math.sin(  
            Date.now() *  
            0.0007  
        ) * 0.12;  

}  


renderer.render(  
    scene,  
    camera  
);

}

/* =========================================================
20. HEART CLICK
========================================================= */

function handleHeartClick() {

if (heartClicked) return;  

heartClicked = true;  

splitHeart();

}

/* =========================================================
21. SPLIT HEART
========================================================= */

function splitHeart() {

if (  
    !leftHeart ||  
    !rightHeart  
) {  
    return;  
}  


const container =  
    document.getElementById(  
        "love3dContainer"  
    );  


if (container) {  

    container.classList.add(  
        "heart-light-start"  
    );  

}  


const start =  
    performance.now();  


const duration =  
    1200;  


function animateSplit(now) {  

    const progress =  
        Math.min(  
            (now - start) /  
            duration,  
            1  
        );  


    /*  
       Smooth easing.  
    */  

    const ease =  
        progress *  
        progress *  
        (  
            3 -  
            2 * progress  
        );  


    /*  
       Bagian kiri bergerak  
       ke kiri.  
    */  

    leftHeart.position.x =  
        -ease * 1.4;  


    leftHeart.rotation.z =  
        -ease * 0.12;  


    /*  
       Bagian kanan bergerak  
       ke kanan.  
    */  

    rightHeart.position.x =  
        ease * 1.4;  


    rightHeart.rotation.z =  
        ease * 0.12;  


    if (progress < 1) {  

        requestAnimationFrame(  
            animateSplit  
        );  

    } else {  

        createExplosionLight();  

    }  

}  


requestAnimationFrame(  
    animateSplit  
);

}

/* =========================================================
22. LIGHT FROM INSIDE
========================================================= */

function createExplosionLight() {

const page =  
    document.getElementById(  
        "finalLovePage"  
    );  


if (!page) return;  


const light =  
    document.createElement(  
        "div"  
    );  


light.className =  
    "heart-explosion-light";  


page.appendChild(  
    light  
);  


/*  
   Cahaya membesar.  
*/  

setTimeout(() => {  

    light.classList.add(  
        "light-max"  
    );  

}, 100);  


/*  
   Setelah cahaya cukup terang,  
   hati menghilang dan meledak.  
*/  

setTimeout(() => {  

    if (leftHeart) {  
        leftHeart.visible =  
            false;  
    }  


    if (rightHeart) {  
        rightHeart.visible =  
            false;  
    }  


    explodeHeart(  
        light  
    );  

}, 1300);

}

/* =========================================================
23. HEART EXPLOSION
========================================================= */

function explodeHeart(light) {

if (light) {  

    light.classList.add(  
        "light-explode"  
    );  

}  


const container =  
    document.getElementById(  
        "love3dContainer"  
    );  


if (container) {  

    container.classList.add(  
        "final-flash"  
    );  

}  


createFireworks();  


setTimeout(() => {  

    if (container) {  

        container.classList.remove(  
            "final-flash"  
        );  

    }  

}, 900);

}

/* =========================================================
24. FIREWORKS
========================================================= */

function createFireworks() {

const container =  
    document.getElementById(  
        "fireworksContainer"  
    );  


if (!container) return;  


container.innerHTML =  
    "";  


/*  
   Ledakan pertama.  
*/  

for (  
    let i = 0;  
    i < 18;  
    i++  
) {  

    setTimeout(() => {  

        createFirework(  
            Math.random() * 100,  
            15 +  
            Math.random() * 70  
        );  

    }, i * 170);  

}

}

/* =========================================================
25. FIREWORK BURST
========================================================= */

function createFirework(
x,
y
) {

const container =  
    document.getElementById(  
        "fireworksContainer"  
    );  


if (!container) return;  


const firework =  
    document.createElement(  
        "div"  
    );  


firework.className =  
    "firework-burst";  


firework.style.left =  
    `${x}%`;  


firework.style.top =  
    `${y}%`;  


const particleCount =  
    32;  


for (  
    let i = 0;  
    i < particleCount;  
    i++  
) {  

    const particle =  
        document.createElement(  
            "span"  
        );  


    particle.className =  
        "firework-particle";  


    const angle =  
        (  
            Math.PI * 2 /  
            particleCount  
        ) * i;  


    const distance =  
        70 +  
        Math.random() * 140;  


    particle.style.setProperty(  
        "--x",  
        `${Math.cos(angle) * distance}px`  
    );  


    particle.style.setProperty(  
        "--y",  
        `${Math.sin(angle) * distance}px`  
    );  


    particle.style.animationDelay =  
        `${Math.random() * 0.12}s`;  


    firework.appendChild(  
        particle  
    );  

}  


container.appendChild(  
    firework  
);  


setTimeout(() => {  

    firework.remove();  

}, 1900);

}

/* =========================================================
26. RESIZE
========================================================= */

function resize3D() {

if (  
    !camera ||  
    !renderer  
) {  
    return;  
}  


camera.aspect =  
    window.innerWidth /  
    window.innerHeight;  


camera.updateProjectionMatrix();  


renderer.setSize(  
    window.innerWidth,  
    window.innerHeight  
);

}

/* =========================================================
27. INITIAL STATE
========================================================= */

const main =
document.getElementById(
"main"
);

const finalLovePage =
document.getElementById(
"finalLovePage"
);

if (main) {

main.style.display =  
    "none";

}

if (finalLovePage) {

finalLovePage.style.display =  
    "none";

}

/* =========================================================
SYSTEM LOG
========================================================= */

console.log(
"🎂 Birthday system loaded."
);

console.log(
"🔧 TKR module: ONLINE"
);

console.log(
"❤️ Mathematical heart: READY"
);

console.log(
"🎁 Surprise protocol: ACTIVE"
);

