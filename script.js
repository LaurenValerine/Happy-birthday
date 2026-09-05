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
    "surprise protocol active...",
    "target: M RIZKY ADITYA P",
    "birthday protocol: READY"
];

if (terminal) {

    for (let i = 0; i < 100; i++) {

        const span = document.createElement("span");

        span.textContent =
            terminalLines[
                Math.floor(Math.random() * terminalLines.length)
            ];

        terminal.appendChild(span);
    }
}


/* =========================================================
   COUNTDOWN 10 → 0
========================================================= */

let number = 10;

const countdown = document.getElementById("countdown");
const countNumber = document.getElementById("number");

const timer = setInterval(() => {

    number--;

    if (number <= 0) {

        clearInterval(timer);

        if (countdown) {
            countdown.classList.add("countdown-hide");
        }

        setTimeout(() => {
            showReveal();
        }, 700);

    } else {

        if (countNumber) {
            countNumber.textContent = number;
        }

    }

}, 1000);


/* =========================================================
   CAKE REVEAL
========================================================= */

function showReveal() {

    const reveal = document.getElementById("reveal");

    if (!reveal) return;

    reveal.style.display = "flex";

    reveal.classList.add("reveal-show");

    setTimeout(() => {

        reveal.classList.remove("reveal-show");
        reveal.classList.add("reveal-hide");

        setTimeout(() => {

            reveal.style.display = "none";

            const gift = document.getElementById("gift");

            if (gift) {
                gift.style.display = "flex";
                gift.classList.add("gift-show");
            }

        }, 700);

    }, 5000);
}


/* =========================================================
   GIFT
========================================================= */

let giftOpened = false;

function openGift() {

    if (giftOpened) return;

    giftOpened = true;

    const gift = document.getElementById("gift");

    if (gift) {

        gift.classList.add("gift-shake");

        setTimeout(() => {

            gift.style.display = "none";

            startErrorPrank();

        }, 650);
    }

}


/* =========================================================
   ERROR PRANK
========================================================= */

let errorClicks = 0;
let prankStarted = false;

function startErrorPrank() {

    const explosion = document.getElementById("tkrExplosion");

    if (!explosion) return;

    explosion.style.display = "flex";

    setTimeout(() => {

        explosion.classList.add("prank-active");

    }, 50);

    const guide = document.getElementById("errorGuide");

    if (guide) {
        guide.textContent = "Klik ERROR 3 kali.";
    }

}


function clickError() {

    if (prankStarted) return;

    errorClicks++;

    const explosion = document.getElementById("tkrExplosion");
    const errorWord = document.getElementById("errorWord");
    const guide = document.getElementById("errorGuide");
    const counter = document.getElementById("errorCounter");

    if (counter) {
        counter.textContent = `${errorClicks} / 3`;
    }


    /* CLICK 1 */

    if (errorClicks === 1) {

        if (errorWord) {
            errorWord.classList.add("error-warning");
        }

        if (guide) {
            guide.textContent =
                "WARNING... system instability detected.";
        }

        if (explosion) {
            explosion.classList.add("danger-level-1");
        }

        createGlitchParticles(15);
    }


    /* CLICK 2 */

    else if (errorClicks === 2) {

        if (errorWord) {
            errorWord.classList.remove("error-warning");
            errorWord.classList.add("error-danger");
        }

        if (guide) {
            guide.textContent =
                "CRITICAL ERROR... one more click.";
        }

        if (explosion) {
            explosion.classList.remove("danger-level-1");
            explosion.classList.add("danger-level-2");
        }

        createGlitchParticles(35);
    }


    /* CLICK 3 */

    else if (errorClicks >= 3) {

        prankStarted = true;

        if (guide) {
            guide.textContent = "SYSTEM FAILURE.";
        }

        if (counter) {
            counter.style.display = "none";
        }

        if (errorWord) {
            errorWord.classList.add("error-explode");
        }

        if (explosion) {
            explosion.classList.add("danger-level-3");
        }

        createGlitchParticles(80);

        setTimeout(() => {
            createBirthdayHeart();
        }, 850);
    }

}


/* =========================================================
   GLITCH PARTICLES
========================================================= */

function createGlitchParticles(amount) {

    const explosion = document.getElementById("tkrExplosion");

    if (!explosion) return;

    for (let i = 0; i < amount; i++) {

        const particle = document.createElement("span");

        particle.className = "glitch-particle";

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

        explosion.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1200);
    }

}


/* =========================================================
   HAPPY BIRTHDAY HEART
========================================================= */
function createBirthdayHeart() {
    const heart = document.getElementById("birthdayHeart");
    const message = document.getElementById("heartMessage");

    heart.innerHTML = "";
    message.style.display = "none";

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scaleX = width * 0.025;
    const scaleY = height * 0.025;

    let index = 0;

    /*
       Persamaan hati:

       x = 16 sin³(t)

       y = 13 cos(t)
           - 5 cos(2t)
           - 2 cos(3t)
           - cos(4t)
    */

    for (let y = -14; y <= 14; y += 1.4) {

        for (let x = -17; x <= 17; x += 1.4) {

            // Persamaan implisit hati
            const equation =
                Math.pow(
                    x * x + y * y - 1,
                    3
                )
                -
                x * x * Math.pow(y, 3);

            // Titik berada di dalam bentuk hati
            if (equation <= 0) {

                const word =
                    document.createElement("span");

                word.textContent = "HAPPY BIRTHDAY";
                word.className = "heart-word";

                const posX =
                    50 + (x * scaleX / width);

                const posY =
                    48 - (y * scaleY / height);

                word.style.left = `${posX}%`;
                word.style.top = `${posY}%`;

                word.style.animationDelay =
                    `${index * 0.012}s`;

                heart.appendChild(word);

                index++;
            }
        }
    }

    setTimeout(() => {
        message.style.display = "block";
    }, 3500);
}


/* =========================================================
   NEXT QUESTION
========================================================= */

function showNextQuestion() {

    const nextPage = document.getElementById("nextPage");

    if (!nextPage) return;

    nextPage.style.display = "flex";

    setTimeout(() => {

        nextPage.classList.add("next-page-show");

    }, 50);

}


/* =========================================================
   YES / NO
========================================================= */

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


function chooseNo() {

    noClicks++;

    const yesButton = document.getElementById("yesButton");
    const noMessage = document.getElementById("noMessage");

    if (noMessage) {

        const message =
            noMessages[
                (noClicks - 1) % noMessages.length
            ];

        noMessage.textContent = message;

        noMessage.classList.remove("message-pop");

        void noMessage.offsetWidth;

        noMessage.classList.add("message-pop");
    }


    /*
       YA membesar setiap kali TIDAK ditekan.
    */

    if (yesButton) {

        const scale =
            Math.min(1 + noClicks * 0.16, 2.5);

        yesButton.style.transform =
            `scale(${scale})`;

        yesButton.style.zIndex = 10;

    }

}


function chooseYes() {

    const nextPage = document.getElementById("nextPage");

    if (!nextPage) return;

    nextPage.classList.add("next-page-hide");

    setTimeout(() => {

        nextPage.style.display = "none";

        startFinalCountdown();

    }, 700);

}


/* =========================================================
   COUNTDOWN 3 DETIK
========================================================= */

function startFinalCountdown() {

    const countdownOverlay =
        document.createElement("section");

    countdownOverlay.id =
        "finalCountdown";

    countdownOverlay.innerHTML = `
        <div class="final-countdown-content">
            <p>ACCESS GRANTED</p>
            <div id="finalCountNumber">3</div>
            <span>Loading birthday page...</span>
        </div>
    `;

    document.body.appendChild(countdownOverlay);


    let count = 3;

    const finalTimer = setInterval(() => {

        count--;

        const number =
            document.getElementById("finalCountNumber");

        if (count <= 0) {

            clearInterval(finalTimer);

            countdownOverlay.classList.add(
                "final-countdown-hide"
            );

            setTimeout(() => {

                countdownOverlay.remove();

                showMainWebsite();

            }, 600);

        } else {

            if (number) {
                number.textContent = count;
            }

        }

    }, 1000);

}


/* =========================================================
   MAIN WEBSITE
========================================================= */

function showMainWebsite() {

    const main =
        document.getElementById("main");

    if (!main) return;

    main.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    setTimeout(() => {

        main.classList.add("main-show");

        startTyping();

    }, 100);

}


/* =========================================================
   TYPING
========================================================= */

const message =
`Today is your special day. Wishing you happiness, good health, and all your dreams come true.

Sebelum lanjutt ada pantun dulu om.

Pergi ke pasar membeli pita,
Singgah sebentar membeli udang,
Selamat bertambah tua om tercinta,
Minta kuota dong sayangg...

Nyambung ga sihh...
halahh bodo amat lahhh 😭`;

let typingIndex = 0;
let typingStarted = false;


function startTyping() {

    if (typingStarted) return;

    typingStarted = true;

    const text =
        document.getElementById("typingText");

    if (!text) return;

    text.textContent = "";

    const typing =
        setInterval(() => {

            text.textContent +=
                message[typingIndex];

            typingIndex++;

            if (typingIndex >= message.length) {

                clearInterval(typing);

            }

        }, 35);

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const sections =
    document.querySelectorAll(".section");

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "section-visible"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


sections.forEach(section => {

    observer.observe(section);

});


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

            notification.classList.add(
                "notification-hide"
            );

            setTimeout(() => {

                notification.style.display = "none";

            }, 500);

        }, 4000);

    }

});


/* =========================================================
   FINAL GIFT
========================================================= */

let finalGiftOpened = false;


function openFinalGift() {

    if (finalGiftOpened) return;

    finalGiftOpened = true;

    const finalButton =
        document.querySelector(".next-button");

    if (finalButton) {

        finalButton.classList.add(
            "final-button-active"
        );

    }

    setTimeout(() => {

        const main =
            document.getElementById("main");

        const finalPage =
            document.getElementById("finalLovePage");

        if (main) {
            main.style.display = "none";
        }

        if (finalPage) {

            finalPage.style.display = "flex";

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
   THREE.JS 3D WIREFRAME HEART
========================================================= */

let scene;
let camera;
let renderer;
let heartGroup;

let heartClicked = false;
let animationStarted = false;


function init3DHeart() {

    const container =
        document.getElementById("love3dContainer");

    if (!container) return;

    if (typeof THREE === "undefined") {

        console.error(
            "Three.js tidak ditemukan."
        );

        return;

    }


    scene =
        new THREE.Scene();


    camera =
        new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

    camera.position.z = 9;


    renderer =
        new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });

    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    container.appendChild(
        renderer.domElement
    );


    heartGroup =
        new THREE.Group();

    scene.add(
        heartGroup
    );


    /*
       Heart dibuat dari banyak titik
       menggunakan persamaan parametris.
    */

    const points = [];

    for (
        let u = 0;
        u < Math.PI * 2;
        u += 0.16
    ) {

        for (
            let v = 0;
            v < Math.PI * 2;
            v += 0.16
        ) {

            const x =
                16 *
                Math.pow(Math.sin(u), 3);

            const y =
                13 * Math.cos(u)
                - 5 * Math.cos(2 * u)
                - 2 * Math.cos(3 * u)
                - Math.cos(4 * u);

            const z =
                4 *
                Math.sin(v)
                *
                Math.sin(u);

            points.push(
                new THREE.Vector3(
                    x / 16,
                    y / 16,
                    z / 8
                )
            );

        }

    }


    const geometry =
        new THREE.BufferGeometry()
            .setFromPoints(points);


    const material =
        new THREE.PointsMaterial({
            color: 0xff7900,
            size: 0.035,
            transparent: true,
            opacity: 0.9
        });


    const heartPoints =
        new THREE.Points(
            geometry,
            material
        );


    heartGroup.add(
        heartPoints
    );


    /*
       Tambahkan garis wireframe
       berdasarkan geometri convex-ish.
    */

    const lineMaterial =
        new THREE.LineBasicMaterial({
            color: 0xff6500,
            transparent: true,
            opacity: 0.22
        });


    const lineGeometry =
        new THREE.BufferGeometry();


    const linePositions = [];


    for (
        let i = 0;
        i < points.length - 1;
        i += 3
    ) {

        const a = points[i];
        const b = points[i + 1];

        linePositions.push(
            a.x, a.y, a.z,
            b.x, b.y, b.z
        );

    }


    lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(
            linePositions,
            3
        )
    );


    const lines =
        new THREE.LineSegments(
            lineGeometry,
            lineMaterial
        );


    heartGroup.add(
        lines
    );


    /*
       Ukuran heart.
    */

    heartGroup.scale.set(
        2.7,
        2.7,
        2.7
    );


    /*
       Klik heart.
    */

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
   3D ANIMATION
========================================================= */

function animate3DHeart() {

    if (!renderer || !scene || !camera) {
        return;
    }

    requestAnimationFrame(
        animate3DHeart
    );


    if (!heartClicked && heartGroup) {

        heartGroup.rotation.y += 0.008;
        heartGroup.rotation.x =
            Math.sin(Date.now() * 0.0007) * 0.12;

    }


    renderer.render(
        scene,
        camera
    );

}


/* =========================================================
   HEART CLICK
========================================================= */

function handleHeartClick(event) {

    if (heartClicked) return;

    heartClicked = true;

    splitHeart();

}


/* =========================================================
   SPLIT HEART
========================================================= */

function splitHeart() {

    if (!heartGroup) return;

    const container =
        document.getElementById(
            "love3dContainer"
        );


    if (container) {
        container.classList.add(
            "heart-light-start"
        );
    }


    /*
       Heart berhenti berputar
       dan bergerak seperti terbelah.
    */

    heartGroup.children.forEach(
        child => {

            child.userData.originalX =
                child.position.x;

        }
    );


    const start =
        performance.now();

    const duration = 1100;


    function splitAnimation(now) {

        const progress =
            Math.min(
                (now - start) / duration,
                1
            );


        const ease =
            progress * progress *
            (3 - 2 * progress);


        /*
           Bagian kiri dan kanan
           disimulasikan dengan dua kelompok.
        */

        heartGroup.position.x =
            -ease * 0.7;


        heartGroup.rotation.z =
            -ease * 0.08;


        if (progress < 1) {

            requestAnimationFrame(
                splitAnimation
            );

        } else {

            createExplosionLight();

        }

    }


    requestAnimationFrame(
        splitAnimation
    );

}


/* =========================================================
   LIGHT
========================================================= */

function createExplosionLight() {

    const container =
        document.getElementById(
            "love3dContainer"
        );

    if (!container) return;


    const light =
        document.createElement("div");

    light.className =
        "heart-explosion-light";

    container.appendChild(
        light
    );


    setTimeout(() => {

        light.classList.add(
            "light-max"
        );

    }, 100);


    setTimeout(() => {

        explodeHeart();

    }, 1300);

}


/* =========================================================
   HEART EXPLOSION
========================================================= */

function explodeHeart() {

    if (heartGroup) {

        heartGroup.visible = false;

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

    }, 800);

}


/* =========================================================
   FIREWORKS
========================================================= */

function createFireworks() {

    const container =
        document.getElementById(
            "fireworksContainer"
        );

    if (!container) return;


    container.innerHTML = "";


    /*
       Banyak ledakan.
    */

    for (let i = 0; i < 16; i++) {

        setTimeout(() => {

            createFirework(
                Math.random() * 100,
                20 + Math.random() * 65
            );

        }, i * 180);

    }

}


function createFirework(x, y) {

    const container =
        document.getElementById(
            "fireworksContainer"
        );

    if (!container) return;


    const firework =
        document.createElement("div");

    firework.className =
        "firework-burst";

    firework.style.left =
        `${x}%`;

    firework.style.top =
        `${y}%`;


    /*
       Buat partikel radial.
    */

    for (let i = 0; i < 28; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "firework-particle";

        const angle =
            (Math.PI * 2 / 28) * i;

        const distance =
            80 + Math.random() * 130;

        particle.style.setProperty(
            "--x",
            `${Math.cos(angle) * distance}px`
        );

        particle.style.setProperty(
            "--y",
            `${Math.sin(angle) * distance}px`
        );

        particle.style.animationDelay =
            `${Math.random() * 0.1}s`;

        firework.appendChild(
            particle
        );

    }


    container.appendChild(
        firework
    );
 

    setTimeout(() => {
        firework.remove();

    }, 1800);

}


/* =========================================================
   RESIZE THREE.JS
========================================================= */

function resize3D() {

    if (!camera || !renderer) return;

    camera.aspect =
        window.innerWidth /
        window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

}
