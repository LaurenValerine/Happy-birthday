/* =========================================================
   HAPPY BIRTHDAY M RIZKY ADITYA P
   COMPLETE SCRIPT.JS
   ========================================================= */


/* =========================================================
   HELPER
   ========================================================= */

function show(id, display = "flex") {
    const el = document.getElementById(id);
    if (el) {
        el.style.display = display;
        el.classList.add("active");
    }
}

function hide(id) {
    const el = document.getElementById(id);
    if (el) {
        el.style.display = "none";
        el.classList.remove("active");
    }
}


/* =========================================================
   TERMINAL
   ========================================================= */

const terminal = document.getElementById("terminal");

const terminalLines = [
    "root@birthday:~$ initializing...",
    "system: birthday_mode = true",
    "loading happiness.exe...",
    "checking memories...",
    "TKR module loaded...",
    "engine status: ONLINE",
    "birthday protocol: READY",
    "cake.exe ready",
    "gift.exe ready",
    "surprise protocol active..."
];

if (terminal) {
    for (let i = 0; i < 90; i++) {
        const line = document.createElement("span");

        line.textContent =
            terminalLines[
                Math.floor(Math.random() * terminalLines.length)
            ];

        terminal.appendChild(line);
    }
}


/* =========================================================
   COUNTDOWN
   ========================================================= */

let countdownNumber = 10;

const numberElement =
    document.getElementById("number");

const countdownTimer = setInterval(() => {

    countdownNumber--;

    if (numberElement) {
        numberElement.textContent = countdownNumber;
    }

    if (countdownNumber <= 0) {

        clearInterval(countdownTimer);

        hide("countdown");

        setTimeout(() => {
            showReveal();
        }, 500);

    }

}, 1000);


/* =========================================================
   REVEAL CAKE
   ========================================================= */

function showReveal() {

    show("reveal");

    setTimeout(() => {

        hide("reveal");

        show("gift");

    }, 5000);
}


/* =========================================================
   GIFT
   ========================================================= */

const giftButton =
    document.getElementById("giftButton");

if (giftButton) {

    giftButton.addEventListener("click", () => {

        const gift =
            document.getElementById("gift");

        if (gift) {
            gift.classList.add("gift-shake");
        }

        setTimeout(() => {

            hide("gift");

            startPrank();

        }, 900);

    });

}


/* =========================================================
   ERROR PRANK
   ========================================================= */

let errorClicks = 0;

const errorWord =
    document.getElementById("errorWord");

const errorGuide =
    document.getElementById("errorGuide");

const errorCounter =
    document.getElementById("errorCounter");


function startPrank() {

    errorClicks = 0;

    show("prank");

    if (errorGuide) {
        errorGuide.textContent =
            "Klik ERROR 3 kali.";
    }

    if (errorCounter) {
        errorCounter.textContent =
            "0 / 3";
    }

    if (errorWord) {
        errorWord.className = "error-word";
        errorWord.textContent = "ERROR";
    }

}


/* =========================================================
   ERROR CLICK
   ========================================================= */

function clickError() {

    errorClicks++;

    if (errorCounter) {
        errorCounter.textContent =
            `${errorClicks} / 3`;
    }


    /* CLICK 1 */

    if (errorClicks === 1) {

        if (errorGuide) {
            errorGuide.textContent =
                "SYSTEM WARNING...";
        }

        if (errorWord) {
            errorWord.classList.add(
                "error-warning"
            );
        }

        createErrorParticles(25);

    }


    /* CLICK 2 */

    else if (errorClicks === 2) {

        if (errorGuide) {
            errorGuide.textContent =
                "CRITICAL ERROR DETECTED";
        }

        if (errorWord) {
            errorWord.classList.remove(
                "error-warning"
            );

            errorWord.classList.add(
                "error-danger"
            );
        }

        createErrorParticles(50);

    }


    /* CLICK 3 */

    else if (errorClicks >= 3) {

        if (errorGuide) {
            errorGuide.textContent =
                "SYSTEM COLLAPSE...";
        }

        if (errorWord) {

            errorWord.classList.remove(
                "error-warning",
                "error-danger"
            );

            errorWord.classList.add(
                "error-explode"
            );

        }

        createErrorParticles(100);

        setTimeout(() => {

            hide("prank");

            createBirthdayHeart();

        }, 850);

    }

}


/* CLICK / ENTER KEY SUPPORT */

if (errorWord) {

    errorWord.addEventListener(
        "click",
        clickError
    );

    errorWord.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {
                event.preventDefault();
                clickError();
            }

        }
    );

}


/* =========================================================
   ERROR PARTICLES
   ========================================================= */

function createErrorParticles(amount) {

    const container =
        document.getElementById(
            "prankParticles"
        );

    if (!container) return;


    for (let i = 0; i < amount; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "error-particle";

        particle.style.left =
            `${50 + (Math.random() * 10 - 5)}%`;

        particle.style.top =
            `${50 + (Math.random() * 10 - 5)}%`;

        particle.style.setProperty(
            "--x",
            `${Math.random() * 700 - 350}px`
        );

        particle.style.setProperty(
            "--y",
            `${Math.random() * 700 - 350}px`
        );

        container.appendChild(particle);


        setTimeout(() => {
            particle.remove();
        }, 1200);

    }

}


/* =========================================================
   MATHEMATICAL HEART
   =========================================================

   Kita memakai persamaan parametrik:

   x = 16 sin³(t)

   y = 13 cos(t)
       - 5 cos(2t)
       - 2 cos(3t)
       - cos(4t)

   Bukan Python.
   Semua dihitung langsung oleh JavaScript.
   */


/* =========================================================
   CREATE BIRTHDAY HEART
   ========================================================= */

function createBirthdayHeart() {

    const heart =
        document.getElementById(
            "birthdayHeart"
        );

    const message =
        document.getElementById(
            "heartMessage"
        );

    if (!heart) return;


    heart.innerHTML = "";

    if (message) {
        message.style.display = "none";
    }


    show("birthdayLove");


    /*
       Membuat beberapa lapisan hati.

       r = 0
       berada di tengah.

       r = 1
       berada di tepi.

       Dengan begitu LOVE bukan cuma garis,
       tetapi benar-benar terisi.
    */

    const layers = 9;

    const wordsPerLayer = 55;

    let index = 0;


    for (let layer = 1; layer <= layers; layer++) {

        const radius =
            layer / layers;


        for (
            let i = 0;
            i < wordsPerLayer;
            i++
        ) {

            const t =
                (Math.PI * 2 * i)
                / wordsPerLayer;


            /*
               Persamaan parametrik hati
            */

            const heartX =
                16 *
                Math.pow(
                    Math.sin(t),
                    3
                );


            const heartY =
                13 *
                Math.cos(t)
                -
                5 *
                Math.cos(2 * t)
                -
                2 *
                Math.cos(3 * t)
                -
                Math.cos(4 * t);


            /*
               Radius dari pusat.
               Lapisan dalam dibuat lebih kecil.
            */

            const x =
                heartX * radius;

            const y =
                heartY * radius;


            const word =
                document.createElement("span");

            word.className =
                "heart-word";

            word.textContent =
                "HAPPY BIRTHDAY";


            /*
               Posisi di layar.

               Angka ini sengaja dibuat
               relatif terhadap ukuran layar.
            */

            const xPosition =
                50 + x * 1.55;

            const yPosition =
                48 - y * 1.55;


            word.style.left =
                `${xPosition}%`;

            word.style.top =
                `${yPosition}%`;


            /*
               Sedikit variasi ukuran
               supaya tidak terlalu kaku.
            */

            const size =
                8 +
                Math.random() * 5;

            word.style.fontSize =
                `${size}px`;


            /*
               Muncul bertahap.
            */

            word.style.animationDelay =
                `${index * 0.008}s`;


            heart.appendChild(word);

            index++;

        }

    }


    /*
       Setelah semua tulisan muncul,
       tampilkan tulisan utama.
    */

    setTimeout(() => {

        if (message) {
            message.style.display = "block";
        }

    }, 3200);


    /*
       Setelah 3 detik berikutnya,
       masuk ke halaman pertanyaan.
    */

    setTimeout(() => {

        hide("birthdayLove");

        show("nextPage");

    }, 6200);

}


/* =========================================================
   NEXT PAGE
   ========================================================= */

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const noMessage =
    document.getElementById("noMessage");


let noClicks = 0;


const noMessages = [
    "Yakin gamau tauu? 😭",
    "Yahh jahat...",
    "Serius mau nolak?",
    "Padahal tinggal klik YA 😭",
    "TIDAK terusss?",
    "Sistem mulai kecewa...",
    "Kesempatan terakhir... mungkin.",
    "Kok tombol TIDAK yang dipilih 😭"
];


if (noButton) {

    noButton.addEventListener(
        "click",
        () => {

            noClicks++;

            if (noMessage) {

                noMessage.textContent =
                    noMessages[
                        (noClicks - 1)
                        % noMessages.length
                    ];

            }


            /*
               Tombol YA makin besar
               setiap kali TIDAK ditekan.
            */

            if (yesButton) {

                const scale =
                    1 +
                    noClicks * 0.15;

                yesButton.style.transform =
                    `scale(${scale})`;

            }

        }
    );

}


/* =========================================================
   YES
   ========================================================= */

if (yesButton) {

    yesButton.addEventListener(
        "click",
        startYesCountdown
    );

}


function startYesCountdown() {

    hide("nextPage");


    const countdown =
        document.createElement("div");

    countdown.className =
        "yes-countdown";

    document.body.appendChild(countdown);


    let count = 3;

    countdown.textContent = count;


    const timer =
        setInterval(() => {

            count--;

            if (count <= 0) {

                clearInterval(timer);

                countdown.remove();

                openMainPage();

            } else {

                countdown.textContent =
                    count;

            }

        }, 1000);

}


/* =========================================================
   MAIN PAGE
   ========================================================= */

function openMainPage() {

    const main =
        document.getElementById("main");

    if (!main) return;

    main.style.display = "block";

    main.classList.add(
        "page-fade-in"
    );

    startTyping();

}


/* =========================================================
   TYPING MESSAGE
   ========================================================= */

const birthdayMessage =
`Today is your special day. Wishing you happiness, good health, and all your dreams come true.

Sebelum lanjutt ada pantun dulu om.

Pergi ke pasar membeli pita,
Singgah sebentar membeli udang,
Selamat bertambah tua om tercinta,
Minta kuota dong sayangg...

Nyambung ga sihh...
halahh bodo amat lahhh 😭`;


let typingStarted = false;


function startTyping() {

    if (typingStarted) return;

    typingStarted = true;


    const text =
        document.getElementById(
            "typingText"
        );

    if (!text) return;


    let index = 0;

    text.textContent = "";


    const typing =
        setInterval(() => {

            text.textContent +=
                birthdayMessage[index];

            index++;


            if (
                index >=
                birthdayMessage.length
            ) {

                clearInterval(typing);

            }

        }, 35);

}


/* =========================================================
   SCROLL NOTIFICATION
   ========================================================= */

let notificationShown = false;


window.addEventListener(
    "scroll",
    () => {

        if (notificationShown) return;

        const height =
            document.documentElement
                .scrollHeight
            -
            window.innerHeight;


        if (height <= 0) return;


        const percentage =
            window.scrollY / height;


        if (percentage >= 0.35) {

            notificationShown = true;


            const notification =
                document.getElementById(
                    "notification"
                );


            if (notification) {

                notification.style.display =
                    "flex";


                setTimeout(() => {

                    notification.style.display =
                        "none";

                }, 4500);

            }

        }

    }
);


/* =========================================================
   FINAL GIFT
   ========================================================= */

const finalGiftButton =
    document.getElementById(
        "finalGiftButton"
    );


if (finalGiftButton) {

    finalGiftButton.addEventListener(
        "click",
        openFinalGift
    );

}


function openFinalGift() {

    const finalPage =
        document.getElementById(
            "finalLovePage"
        );

    if (!finalPage) return;


    finalPage.style.display = "block";

    finalPage.classList.add(
        "page-fade-in"
    );


    setTimeout(() => {

        init3DHeart();

    }, 200);

}


/* =========================================================
   THREE.JS 3D HEART
   ========================================================= */

let scene;
let camera;
let renderer;

let leftHeart;
let rightHeart;

let heartInitialized = false;

let heartAnimationStarted = false;


/* =========================================================
   INIT 3D HEART
   ========================================================= */

function init3DHeart() {

    if (heartInitialized) return;

    if (
        typeof THREE ===
        "undefined"
    ) {

        console.error(
            "Three.js tidak ditemukan."
        );

        return;

    }


    const container =
        document.getElementById(
            "love3dContainer"
        );

    if (!container) return;


    heartInitialized = true;


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


    camera.position.z = 38;


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


    /*
       Group utama.
       Kiri dan kanan dibuat TERPISAH.
       Jadi nanti benar-benar bisa dibelah.
    */

    leftHeart =
        new THREE.Group();

    rightHeart =
        new THREE.Group();


    scene.add(leftHeart);
    scene.add(rightHeart);


    create3DHeart();


    heartAnimationStarted = true;

    animateHeart();

}


/* =========================================================
   CREATE 3D WIREFRAME HEART
   ========================================================= */

function create3DHeart() {

    const pointsLeft = [];
    const pointsRight = [];


    /*
       Membuat banyak titik pada permukaan hati.
    */

    for (
        let i = 0;
        i < 1800;
        i++
    ) {

        const t =
            Math.random() *
            Math.PI * 2;


        const scale =
            Math.sqrt(
                Math.random()
            );


        const x =
            16 *
            Math.pow(
                Math.sin(t),
                3
            ) *
            scale;


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
            scale;


        /*
           Kedalaman 3D.
        */

        const z =
            (
                Math.random() -
                0.5
            ) * 5;


        const point =
            new THREE.Vector3(
                x * 0.75,
                y * 0.75,
                z
            );


        if (point.x <= 0) {
            pointsLeft.push(point);
        } else {
            pointsRight.push(point);
        }

    }


    /*
       Titik-titik kiri
    */

    const leftGeometry =
        new THREE.BufferGeometry()
            .setFromPoints(
                pointsLeft
            );


    const rightGeometry =
        new THREE.BufferGeometry()
            .setFromPoints(
                pointsRight
            );


    const material =
        new THREE.PointsMaterial({
            color: 0xff6a00,
            size: 0.09,
            transparent: true,
            opacity: 0.95
        });


    const leftPoints =
        new THREE.Points(
            leftGeometry,
            material
        );


    const rightPoints =
        new THREE.Points(
            rightGeometry,
            material.clone()
        );


    leftHeart.add(leftPoints);
    rightHeart.add(rightPoints);


    /*
       Tambahkan garis wireframe
       sederhana supaya terlihat
       seperti hati 3D.
    */

    createHeartLines(
        pointsLeft,
        leftHeart
    );

    createHeartLines(
        pointsRight,
        rightHeart
    );

}


/* =========================================================
   HEART WIREFRAME LINES
   ========================================================= */

function createHeartLines(
    points,
    group
) {

    const vertices = [];

    const maxLines = 350;


    for (
        let i = 0;
        i < maxLines;
        i++
    ) {

        const a =
            points[
                Math.floor(
                    Math.random() *
                    points.length
                )
            ];


        const b =
            points[
                Math.floor(
                    Math.random() *
                    points.length
                )
            ];


        if (!a || !b) continue;


        const distance =
            a.distanceTo(b);


        /*
           Hanya hubungkan titik
           yang cukup dekat.
        */

        if (distance < 2.5) {

            vertices.push(
                a.x, a.y, a.z,
                b.x, b.y, b.z
            );

        }

    }


    const geometry =
        new THREE.BufferGeometry();


    geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(
            vertices,
            3
        )
    );


    const material =
        new THREE.LineBasicMaterial({
            color: 0xff6a00,
            transparent: true,
            opacity: 0.35
        });


    const lines =
        new THREE.LineSegments(
            geometry,
            material
        );


    group.add(lines);

}


/* =========================================================
   HEART ANIMATION
   ========================================================= */

function animateHeart() {

    if (!heartAnimationStarted) {
        return;
    }


    requestAnimationFrame(
        animateHeart
    );


    if (
        leftHeart &&
        rightHeart
    ) {

        /*
           Sebelum diklik,
           kedua bagian bergerak
           seperti satu hati.
        */

        leftHeart.rotation.y += 0.004;
        rightHeart.rotation.y += 0.004;

        leftHeart.rotation.z =
            Math.sin(
                Date.now() * 0.001
            ) * 0.015;

        rightHeart.rotation.z =
            Math.sin(
                Date.now() * 0.001
            ) * 0.015;

    }


    if (renderer) {

        renderer.render(
            scene,
            camera
        );

    }

}


/* =========================================================
   FINAL HEART CLICK
   ========================================================= */

let heartClicked = false;


document.addEventListener(
    "click",
    (event) => {

        const finalPage =
            document.getElementById(
                "finalLovePage"
            );


        if (
            !finalPage ||
            finalPage.style.display === "none"
        ) {
            return;
        }


        /*
           Jangan klik elemen lain.
           Hanya area love.
        */

        if (
            event.target.closest(
                ".final-love-text"
            )
        ) {
            return;
        }


        if (heartClicked) return;

        heartClicked = true;

        splitHeart();

    }
);


/* =========================================================
   SPLIT HEART
   ========================================================= */

function splitHeart() {

    if (
        !leftHeart ||
        !rightHeart
    ) {
        return;
    }


    /*
       Hentikan rotasi normal.
    */

    heartAnimationStarted = false;


    /*
       Animasi membelah.
    */

    const startTime =
        performance.now();

    const duration = 1200;


    function splitAnimation(now) {

        const progress =
            Math.min(
                (now - startTime) /
                duration,
                1
            );


        /*
           Easing
        */

        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        leftHeart.position.x =
            -6 * eased;

        rightHeart.position.x =
            6 * eased;


        leftHeart.rotation.z =
            -0.15 * eased;

        rightHeart.rotation.z =
            0.15 * eased;


        if (renderer) {

            renderer.render(
                scene,
                camera
            );

        }


        if (progress < 1) {

            requestAnimationFrame(
                splitAnimation
            );

        } else {

            createHeartLight();

        }

    }


    requestAnimationFrame(
        splitAnimation
    );

}


/* =========================================================
   LIGHT FROM INSIDE HEART
   ========================================================= */

function createHeartLight() {

    const container =
        document.getElementById(
            "finalLovePage"
        );

    if (!container) return;


    const light =
        document.createElement(
            "div"
        );

    light.className =
        "heart-light";


    container.appendChild(
        light
    );


    /*
       Cahaya semakin terang
       sebelum ledakan.
    */

    setTimeout(() => {

        if (leftHeart) {
            leftHeart.visible = false;
        }

        if (rightHeart) {
            rightHeart.visible = false;
        }

    }, 900);


    setTimeout(() => {

        light.remove();

        createFinalFireworks();

    }, 1400);

}


/* =========================================================
   FINAL FIREWORKS
   ========================================================= */

function createFinalFireworks() {

    const container =
        document.getElementById(
            "fireworksContainer"
        );

    if (!container) return;


    const bursts = 8;


    for (
        let b = 0;
        b < bursts;
        b++
    ) {

        setTimeout(() => {

            createFireworkBurst(
                container
            );

        }, b * 180);

    }

}


/* =========================================================
   FIREWORK BURST
   ========================================================= */

function createFireworkBurst(
    container
) {

    const centerX =
        15 +
        Math.random() * 70;

    const centerY =
        15 +
        Math.random() * 65;


    const particles = 35;


    for (
        let i = 0;
        i < particles;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "final-firework";


        particle.style.left =
            `${centerX}%`;

        particle.style.top =
            `${centerY}%`;


        const angle =
            Math.random() * 360;

        const distance =
            50 +
            Math.random() * 180;


        particle.style.setProperty(
            "--angle",
            `${angle}deg`
        );


        particle.style.setProperty(
            "--distance",
            `${distance}px`
        );


        container.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 1600);

    }

}


/* =========================================================
   RESIZE THREE.JS
   ========================================================= */

window.addEventListener(
    "resize",
    () => {

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
);


/* =========================================================
   SAFETY LOG
   ========================================================= */

console.log(
    "🎂 Birthday system loaded successfully."
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
