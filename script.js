 /* ==================================================
   ELEMENTS
================================================== */

const countdown =
    document.getElementById("countdown");

const countdownNumber =
    document.getElementById("countdownNumber");

const reveal =
    document.getElementById("reveal");

const giftSection =
    document.getElementById("giftSection");

const tkrExplosion =
    document.getElementById("tkrExplosion");

const errorPrank =
    document.getElementById("errorPrank");

const errorText =
    document.getElementById("errorText");

const birthdayHeart =
    document.getElementById("birthdayHeart");

const birthdayWords =
    document.getElementById("birthdayWords");

const nextQuestion =
    document.getElementById("nextQuestion");

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const noMessage =
    document.getElementById("noMessage");

const finalCountdown =
    document.getElementById("finalCountdown");

const finalNumber =
    document.getElementById("finalNumber");

const mainPage =
    document.getElementById("mainPage");

const typingText =
    document.getElementById("typingText");

const scrollNotification =
    document.getElementById("scrollNotification");

const finalLovePage =
    document.getElementById("finalLovePage");

const loveContainer =
    document.getElementById("loveContainer");

const wireHeart =
    document.getElementById("wireHeart");

const heartLight =
    document.getElementById("heartLight");

const fireworksFinal =
    document.getElementById("fireworksFinal");


/* ==================================================
   INITIAL COUNTDOWN
   10 → 9 → ... → 1
================================================== */

let count = 10;

const initialCountdown =
    setInterval(() => {

        count--;

        if (count <= 0) {

            clearInterval(initialCountdown);

            countdown.style.display = "none";

            reveal.style.display = "flex";

            setTimeout(() => {

                reveal.style.display = "none";

                giftSection.style.display = "flex";

            }, 3000);

        } else {

            countdownNumber.textContent = count;

        }

    }, 1000);


/* ==================================================
   GIFT → TKR PRANK
================================================== */

function openGift() {

    giftSection.style.display = "none";

    tkrExplosion.style.display = "block";

    setTimeout(() => {

        tkrExplosion.style.display = "none";

        showError();

    }, 1500);
}


/* ==================================================
   ERROR ×3
================================================== */

let errorClicks = 0;

function showError() {

    errorPrank.style.display = "flex";

    errorClicks = 0;

    errorText.textContent = "ERROR";

    errorText.style.color = "#fff";

    errorPrank.onclick = () => {

        errorClicks++;

        errorText.classList.remove("errorHit");

        void errorText.offsetWidth;

        errorText.classList.add("errorHit");


        if (errorClicks === 2) {

            errorText.style.color = "#ff7900";

        }


        if (errorClicks >= 3) {

            errorPrank.onclick = null;

            createBirthdayHeart();

        }

    };
}


/* ==================================================
   HAPPY BIRTHDAY TEXT → HEART
================================================== */

function createBirthdayHeart() {

    errorPrank.style.display = "none";

    birthdayHeart.style.display = "flex";

    birthdayWords.innerHTML = "";


    const points = [];


    /*
       Persamaan LOVE:

       x = 16 sin³(t)

       y =
       13 cos(t)
       - 5 cos(2t)
       - 2 cos(3t)
       - cos(4t)
    */

    for (
        let t = 0;
        t < Math.PI * 2;
        t += 0.055
    ) {

        const x =
            16 * Math.pow(Math.sin(t), 3);

        const y =
            -(
                13 * Math.cos(t)
                - 5 * Math.cos(2 * t)
                - 2 * Math.cos(3 * t)
                - Math.cos(4 * t)
            );


        points.push({

            x: 50 + x * 2.15,

            y: 50 + y * 2.15

        });

    }


    points.forEach((point, index) => {

        const word =
            document.createElement("span");

        word.className = "happyWord";

        word.textContent = "HAPPY BIRTHDAY";

        word.style.left =
            point.x + "%";

        word.style.top =
            point.y + "%";

        word.style.transform =
            "translate(-50%,-50%) scale(.2)";

        word.style.animationDelay =
            index * 0.012 + "s";

        birthdayWords.appendChild(word);

    });


    /*
       Tahan heart selama 3 detik
       setelah pembentukan selesai.
    */

    setTimeout(() => {

        setTimeout(() => {

            birthdayHeart.style.display = "none";

            nextQuestion.style.display = "flex";

        }, 3000);

    }, points.length * 12 + 900);
}


/* ==================================================
   QUESTION
================================================== */

const noMessages = [

    "yahh jahat 😭",

    "yakin gamau tauu?",

    "serius TIDAK?",

    "kok tega sih 😭",

    "masih mau pilih TIDAK?",

    "hmm... mencurigakan.",

    "coba pikir lagi.",

    "YA lebih aman loh 😌"

];

let noCount = 0;


noButton.onclick = () => {

    noMessage.textContent =
        noMessages[
            noCount % noMessages.length
        ];

    noCount++;


    yesButton.style.transform =
        `scale(${1 + noCount * 0.15})`;

};


/* ==================================================
   YES → 3 → 2 → 1 → MAIN PAGE
================================================== */

yesButton.onclick = () => {

    nextQuestion.style.display = "none";

    finalCountdown.style.display = "flex";


    let n = 3;

    finalNumber.textContent = n;


    const timer =
        setInterval(() => {

            n--;


            if (n <= 0) {

                clearInterval(timer);

                finalCountdown.style.display = "none";

                mainPage.style.display = "block";

                startTyping();

                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });


                setTimeout(() => {

                    scrollNotification.style.display =
                        "block";


                    setTimeout(() => {

                        scrollNotification.style.display =
                            "none";

                    }, 5000);

                }, 2500);


            } else {

                finalNumber.textContent = n;

            }

        }, 1000);

};


/* ==================================================
   TYPING MESSAGE
================================================== */

const message =
`Happy birthday, M. Rizky Aditya P! 🎉

Semoga di umur yang baru ini, semoga makin banyak hal baik yang datang, mimpi-mimpi yang perlahan menjadi nyata, dan setiap perjalananmu selalu punya cerita yang layak untuk dikenang.

Tetap jadi versi terbaik dari dirimu sendiri. Have a great birthday! 🧡`;


function startTyping() {

    typingText.textContent = "";

    let i = 0;


    function type() {

        if (i < message.length) {

            typingText.textContent +=
                message[i];

            i++;

            setTimeout(type, 25);

        }

    }


    type();
}


/* ==================================================
   LAST GIFT
================================================== */

function openLastGift() {

    finalLovePage.style.display = "flex";

    create3DHeart();

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* ==================================================
   3D WIREFRAME HEART
================================================== */

function create3DHeart() {

    wireHeart.innerHTML = "";


    const layers = 9;

    const pointsPerLayer = 46;

    const allPoints = [];


    /*
       Membuat beberapa lapisan kedalaman.

       Setiap lapisan menggunakan persamaan
       matematika love sehingga bentuknya
       benar-benar ❤️.
    */

    for (
        let layer = 0;
        layer < layers;
        layer++
    ) {

        const z =
            (layer - (layers - 1) / 2) * 13;


        const layerPoints = [];


        for (
            let i = 0;
            i < pointsPerLayer;
            i++
        ) {

            const t =
                (Math.PI * 2 * i) /
                pointsPerLayer;


            const x =
                16 *
                Math.pow(Math.sin(t), 3);


            const y =
                13 * Math.cos(t)
                - 5 * Math.cos(2 * t)
                - 2 * Math.cos(3 * t)
                - Math.cos(4 * t);


            const px =
                50 + x * 2.65;


            const py =
                50 - y * 2.65;


            layerPoints.push({

                x: px,

                y: py,

                z: z

            });

        }


        allPoints.push(layerPoints);

    }


    /*
       Titik-titik heart
    */

    allPoints.forEach((layerPoints, layerIndex) => {

        layerPoints.forEach(point => {

            const dot =
                document.createElement("span");

            dot.className =
                "heart-wire-point";


            dot.style.left =
                point.x + "%";


            dot.style.top =
                point.y + "%";


            dot.style.transform =
                `translateZ(${point.z}px)`;


            if (
                layerIndex === 0 ||
                layerIndex === layers - 1
            ) {

                dot.style.opacity = "1";

            } else {

                dot.style.opacity = ".65";

            }


            wireHeart.appendChild(dot);

        });

    });


    /*
       Garis di setiap layer
    */

    allPoints.forEach((layerPoints, layerIndex) => {

        for (
            let i = 0;
            i < layerPoints.length;
            i++
        ) {

            const a =
                layerPoints[i];

            const b =
                layerPoints[
                    (i + 1) %
                    layerPoints.length
                ];


            createHeartLine(a, b, layerIndex);
        }

    });


    /*
       Garis antar-lapisan,
       membuat efek wireframe 3D.
    */

    for (
        let layer = 0;
        layer < layers - 1;
        layer++
    ) {

        for (
            let i = 0;
            i < pointsPerLayer;
            i += 2
        ) {

            createHeartLine(
                allPoints[layer][i],
                allPoints[layer + 1][i],
                layer
            );

        }

    }


    /*
       Garis tambahan dari depan
       supaya bentuk love lebih jelas.
    */

    const front =
        allPoints[layers - 1];

    for (
        let i = 0;
        i < front.length;
        i += 3
    ) {

        const next =
            front[
                (i + 3) %
                front.length
            ];

        createHeartLine(
            front[i],
            next,
            layers - 1
        );

    }
}


/* ==================================================
   CREATE HEART LINE
================================================== */

function createHeartLine(a, b, layerIndex) {

    const line =
        document.createElement("span");

    line.className =
        "heart-wire-line";


    if (
        layerIndex > 1 &&
        layerIndex < 7
    ) {

        line.classList.add("back");

    }


    const containerWidth =
        wireHeart.clientWidth;

    const containerHeight =
        wireHeart.clientHeight;


    const x1 =
        (a.x / 100) *
        containerWidth;

    const y1 =
        (a.y / 100) *
        containerHeight;

    const x2 =
        (b.x / 100) *
        containerWidth;

    const y2 =
        (b.y / 100) *
        containerHeight;


    const dx =
        x2 - x1;

    const dy =
        y2 - y1;


    const length =
        Math.sqrt(
            dx * dx +
            dy * dy
        );


    const angle =
        Math.atan2(dy, dx) *
        180 /
        Math.PI;


    const z =
        a.z;


    line.style.left =
        x1 + "px";

    line.style.top =
        y1 + "px";

    line.style.width =
        length + "px";


    line.style.transform =
        `rotate(${angle}deg) translateZ(${z}px)`;


    wireHeart.appendChild(line);
}


/* ==================================================
   FINAL HEART CLICK
================================================== */

let loveClicked = false;


loveContainer.onclick = () => {

    if (loveClicked) return;

    loveClicked = true;


    /*
       Heart mulai terbelah.
    */

    loveContainer.classList.add(
        "cracking"
    );


    /*
       Cahaya putih-orange muncul
       dari tengah.
    */

    setTimeout(() => {

        heartLight.classList.add(
            "active"
        );

    }, 600);


    /*
       Cahaya makin besar.
    */

    setTimeout(() => {

        finalLovePage.classList.add(
            "light-flood"
        );

    }, 1200);


    /*
       Heart burst.
    */

    setTimeout(() => {

        loveContainer.classList.add(
            "burst"
        );

    }, 1750);


    /*
       Fireworks memenuhi layar.
    */

    setTimeout(() => {

        createFinalFireworks();

    }, 2200);

};


/* ==================================================
   FINAL FIREWORKS
================================================== */

function createFinalFireworks() {

    fireworksFinal.innerHTML = "";


    /*
       Banyak ledakan dengan posisi berbeda
       supaya layar benar-benar penuh.
    */

    for (
        let burst = 0;
        burst < 30;
        burst++
    ) {

        setTimeout(() => {

            const x =
                Math.random() *
                window.innerWidth;

            const y =
                Math.random() *
                window.innerHeight *
                0.85;


            const particles =
                45 +
                Math.floor(
                    Math.random() * 20
                );


            for (
                let i = 0;
                i < particles;
                i++
            ) {

                const particle =
                    document.createElement("div");

                particle.className =
                    "final-particle";


                particle.style.left =
                    x + "px";

                particle.style.top =
                    y + "px";


                const angle =
                    (Math.PI * 2 * i) /
                    particles;


                const distance =
                    80 +
                    Math.random() * 260;


                particle.style.setProperty(
                    "--tx",
                    Math.cos(angle) *
                    distance +
                    "px"
                );


                particle.style.setProperty(
                    "--ty",
                    Math.sin(angle) *
                    distance +
                    "px"
                );


                particle.style.animationDelay =
                    Math.random() *
                    0.25 +
                    "s";


                fireworksFinal.appendChild(
                    particle
                );

            }

        }, burst * 130);

    }
         }
