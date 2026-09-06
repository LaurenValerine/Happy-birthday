 /* =========================================================
GLOBAL
========================================================= */

{
box-sizing: border-box;
margin: 0;
padding: 0;
}


html {
scroll-behavior: smooth;
}

body {
background: #050505;
color: #fff;
font-family: Arial, Helvetica, sans-serif;
overflow-x: hidden;
}

button {
font-family: inherit;
}

::selection {
background: #ff7900;
color: #050505;
}

/* =========================================================
COUNTDOWN
========================================================= */

#countdown {
position: fixed;
inset: 0;
z-index: 1000;

display: flex;  
justify-content: center;  
align-items: center;  

background: #030303;  

overflow: hidden;  

transition:  
    opacity .7s ease,  
    visibility .7s ease;

}

#countdown.countdown-hide {
opacity: 0;
visibility: hidden;
}

.terminal {
position: absolute;
inset: 0;

padding: 15px;  

font-family: monospace;  
font-size: 11px;  
line-height: 1.5;  

color: #ff6500;  

opacity: .22;  

overflow: hidden;

}

.terminal span {
display: block;
}

.count-content {
position: relative;
z-index: 2;

text-align: center;  

animation:  
    countAppear 1s ease;

}

@keyframes countAppear {

from {  
    opacity: 0;  
    transform: scale(.7);  
}  

to {  
    opacity: 1;  
    transform: scale(1);  
}

}

.count-label {
color: #ff9a42;

letter-spacing: 4px;  

font-size: 13px;

}

.count-number {
margin: 15px 0;

font-size: clamp(100px, 25vw, 180px);  
font-weight: 900;  

color: #ff7900;  

text-shadow:  
    0 0 10px #ff7900,  
    0 0 30px #ff4500,  
    0 0 80px #ff2200;  

animation:  
    countPulse .8s infinite alternate;

}

@keyframes countPulse {

to {  
    transform: scale(1.08);  
}

}

.count-status {
color: #aaa;
font-family: monospace;
font-size: 12px;
}

/* =========================================================
CAKE REVEAL
========================================================= */

#reveal {
position: fixed;
inset: 0;
z-index: 900;

display: none;  

justify-content: center;  
align-items: center;  

text-align: center;  

background:  
    radial-gradient(  
        circle,  
        #461800 0%,  
        #080300 70%  
    );  

overflow: hidden;

}

#reveal.reveal-show {
animation:
revealIn .8s ease forwards;
}

#reveal.reveal-hide {
animation:
revealOut .7s ease forwards;
}

@keyframes revealIn {

from {  
    opacity: 0;  
    transform: scale(1.05);  
}  

to {  
    opacity: 1;  
    transform: scale(1);  
}

}

@keyframes revealOut {

to {  
    opacity: 0;  
    transform: scale(.95);  
}

}

.reveal-content {
position: relative;
z-index: 5;
}

.birthday-cake-image {
display: block;

width: min(280px, 65vw);  
max-height: 300px;  

object-fit: contain;  

margin: auto;  

filter:  
    drop-shadow(0 0 12px #ff7900)  
    drop-shadow(0 0 35px #ff4500);  

animation:  
    cakeAppear 1.3s ease,  
    cakeFloat 3s ease-in-out infinite 1.3s;

}

@keyframes cakeAppear {

from {  
    opacity: 0;  
    transform:  
        translateY(80px)  
        scale(.5)  
        rotate(-8deg);  
}  

to {  
    opacity: 1;  
    transform:  
        translateY(0)  
        scale(1)  
        rotate(0);  
}

}

@keyframes cakeFloat {

50% {  
    transform:  
        translateY(-10px)  
        rotate(1deg);  
}

}

.happy {
margin-top: 20px;

font-size:  
    clamp(45px, 10vw, 90px);  

font-weight: 900;  

color: #ff7900;  

text-shadow:  
    0 0 15px #ff7900,  
    0 0 40px #ff4500;  

animation:  
    birthdayText 1s ease .35s both;

}

@keyframes birthdayText {

from {  
    opacity: 0;  
    transform: translateY(30px);  
    letter-spacing: -5px;  
}  

to {  
    opacity: 1;  
    transform: translateY(0);  
    letter-spacing: normal;  
}

}

.adit {
margin-top: 5px;

font-size: 25px;  
letter-spacing: 8px;  

color: #ffd0a3;  

animation:  
    fadeUp 1s ease .7s both;

}

/* =========================================================
FIREWORKS CAKE
========================================================= */

.firework {
position: absolute;

width: 5px;  
height: 5px;  

border-radius: 50%;  

background: #ff7900;  

box-shadow:  
    0 0 10px #ff7900,  
    0 0 25px #ff4500;  

animation:  
    boom 1.8s infinite;

}

.firework::before,
.firework::after {
content: "";

position: absolute;  

width: 4px;  
height: 100px;  

background:  
    linear-gradient(  
        transparent,  
        #ff7900,  
        transparent  
    );  

left: 0;  
top: -48px;

}

.firework::after {
transform: rotate(90deg);
}

.f1 {
left: 15%;
top: 25%;
}

.f2 {
right: 15%;
top: 20%;
animation-delay: .5s;
}

.f3 {
left: 25%;
bottom: 20%;
animation-delay: 1s;
}

.f4 {
right: 25%;
bottom: 25%;
animation-delay: 1.4s;
}

@keyframes boom {

0%,  
100% {  
    transform: scale(.2);  
    opacity: 0;  
}  

40% {  
    transform: scale(1);  
    opacity: 1;  
}  

70% {  
    transform: scale(1.5);  
    opacity: .7;  
}

}

/* =========================================================
GIFT
========================================================= */

#gift {
position: fixed;
inset: 0;
z-index: 800;

display: none;  

justify-content: center;  
align-items: center;  

text-align: center;  

background:  
    radial-gradient(  
        circle,  
        #351300,  
        #050505 70%  
    );  

overflow: hidden;

}

#gift.gift-show {
animation:
giftPageIn .8s ease;
}

@keyframes giftPageIn {

from {  
    opacity: 0;  
}  

to {  
    opacity: 1;  
}

}

.gift-content {
display: flex;

flex-direction: column;  

align-items: center;

}

.gift-image-box {
position: relative;

cursor: pointer;  

animation:  
    giftFloat 2.2s ease-in-out infinite;  

transition:  
    transform .25s ease,  
    filter .25s ease;

}

.gift-image-box::before {
content: "";

position: absolute;  

width: 170px;  
height: 170px;  

left: 50%;  
top: 50%;  

transform:  
    translate(-50%, -50%);  

border-radius: 50%;  

background: #ff6500;  

filter: blur(70px);  

opacity: .28;  

z-index: -1;

}

.gift-image-box:hover {
transform: scale(1.06);
}

.gift-image {
width: min(260px, 70vw);
max-height: 300px;

object-fit: contain;  

filter:  
    drop-shadow(0 0 12px #ff7900)  
    drop-shadow(0 0 35px #ff4500);  

user-select: none;

}

@keyframes giftFloat {

0%,  
100% {  
    transform: translateY(0);  
}  

50% {  
    transform: translateY(-14px);  
}

}

.gift-shake .gift-image-box {
animation:
giftShake .65s ease;
}

@keyframes giftShake {

0%,  
100% {  
    transform: rotate(0) scale(1);  
}  

15% {  
    transform: rotate(-7deg) scale(1.03);  
}  

30% {  
    transform: rotate(7deg) scale(1.06);  
}  

45% {  
    transform: rotate(-6deg) scale(1.08);  
}  

60% {  
    transform: rotate(6deg) scale(1.1);  
}  

75% {  
    transform: rotate(-3deg) scale(1.08);  
}

}

.gift-text {
margin-top: 35px;

color: #ffd0a3;  

font-size: 16px;  
line-height: 1.8;  

animation:  
    blink 1.5s infinite;

}

.gift-text span {
color: #ff7900;
font-weight: bold;
}

@keyframes blink {

50% {  
    opacity: .4;  
}

}

/* =========================================================
ERROR PRANK
========================================================= */

#tkrExplosion {
position: fixed;
inset: 0;
z-index: 700;

display: none;  

justify-content: center;  
align-items: center;  

background: #000;  

overflow: hidden;  

transition:  
    background .4s ease;

}

#tkrExplosion.prank-active {
animation:
prankAppear .5s ease;
}

@keyframes prankAppear {

from {  
    opacity: 0;  
}  

to {  
    opacity: 1;  
}

}

.prank-background {
position: absolute;
inset: 0;

background:  
    repeating-linear-gradient(  
        0deg,  
        transparent 0px,  
        transparent 4px,  
        rgba(255, 121, 0, .035) 5px  
    );  

pointer-events: none;

}

.error-screen {
position: relative;

z-index: 10;  

text-align: center;

}

.error-glitch {
position: relative;

color: #fff;  

font-family: monospace;  

font-size:  
    clamp(65px, 18vw, 160px);  

font-weight: 900;  

letter-spacing: 10px;  

cursor: pointer;  

user-select: none;  

text-shadow:  
    4px 0 #ff6500,  
    -4px 0 #fff;  

animation:  
    errorGlitch .16s infinite;

}

@keyframes errorGlitch {

0% {  
    transform: translate(0);  
}  

25% {  
    transform: translate(-3px, 2px);  
}  

50% {  
    transform: translate(3px, -2px);  
}  

75% {  
    transform: translate(-2px, -1px);  
}  

100% {  
    transform: translate(0);  
}

}

.error-warning {
color: #ff9a42;

animation:  
    errorShake .1s infinite;

}

.error-danger {
color: #ff4500;

text-shadow:  
    0 0 10px #ff4500,  
    0 0 30px #ff2200;  

animation:  
    errorShake .06s infinite;

}

@keyframes errorShake {

0% {  
    transform: translate(-5px, 0);  
}  

50% {  
    transform: translate(5px, 0);  
}  

100% {  
    transform: translate(-5px, 0);  
}

}

.error-explode {
animation:
errorExplode .8s ease forwards !important;
}

@keyframes errorExplode {

0% {  
    transform: scale(1);  
    opacity: 1;  
}  

45% {  
    transform: scale(1.25);  
    opacity: 1;  
}  

100% {  
    transform: scale(5);  
    opacity: 0;  
    filter: blur(15px);  
}

}

#errorGuide {
margin-top: 25px;

color: #aaa;  

font-family: monospace;  
font-size: 13px;  

transition: .3s;

}

.error-counter {
margin-top: 12px;

color: #ff6500;  

font-family: monospace;  
font-size: 12px;

}

.danger-level-1 {
animation:
screenFlash .5s;
}

.danger-level-2 {
animation:
screenFlash .25s infinite;
}

.danger-level-3 {
background: #070000 !important;
}

@keyframes screenFlash {

50% {  
    background: #240000;  
}

}

.glitch-particle {
position: absolute;

width: 5px;  
height: 5px;  

background: #ff7900;  

box-shadow:  
    0 0 10px #ff4500;  

animation:  
    glitchParticle 1s ease-out forwards;

}

@keyframes glitchParticle {

from {  
    transform:  
        translate(0, 0)  
        scale(1);  

    opacity: 1;  
}  

to {  
    transform:  
        translate(var(--x), var(--y))  
        scale(0);  

    opacity: 0;  
}

}

.prank-blackout {
animation:
blackout .8s forwards;
}

@keyframes blackout {

to {  
    opacity: 0;  
}

}

/* =========================================================
HAPPY BIRTHDAY HEART
========================================================= */

#birthdayLove {
position: fixed;
inset: 0;
z-index: 650;

display: none;  

justify-content: center;  
align-items: center;  

background: #020202;  

overflow: hidden;  

opacity: 0;

}

#birthdayLove.birthday-love-show {
animation:
birthdayLoveIn .8s ease forwards;
}

#birthdayLove.birthday-love-fade {
animation:
birthdayLoveOut .7s ease forwards;
}

@keyframes birthdayLoveIn {

to {  
    opacity: 1;  
}

}

@keyframes birthdayLoveOut {

to {  
    opacity: 0;  
    transform: scale(1.04);  
}

}

.birthday-heart {
position: absolute;

width: min(90vw, 700px);  
height: min(80vh, 600px);  

left: 50%;  
top: 50%;  

transform:  
    translate(-50%, -50%);

}

.heart-word {
position: absolute;

transform:  
    translate(-50%, -50%)  
    scale(.2);  

color: #ff7900;  

font-size: clamp(7px, 1.1vw, 12px);  

font-weight: 900;  

white-space: nowrap;  

text-shadow:  
    0 0 5px #ff7900,  
    0 0 15px #ff4500;  

opacity: 0;  

animation:  
    heartWordAppear .55s ease forwards;

}

@keyframes heartWordAppear {

50% {  
    opacity: 1;  

    transform:  
        translate(-50%, -50%)  
        scale(1.2);  
}  

100% {  
    opacity: 1;  

    transform:  
        translate(-50%, -50%)  
        scale(1);  
}

}

.heart-message {
position: absolute;

bottom: 12%;  

opacity: 0;  

color: #ffd0a3;  

font-size: 13px;  

letter-spacing: 4px;  

text-transform: uppercase;  

text-shadow:  
    0 0 10px #ff7900;  

transition:  
    opacity .8s ease,  
    transform .8s ease;  

transform: translateY(20px);

}

.heart-message-show {
opacity: 1;

transform: translateY(0);

}

/* =========================================================
NEXT QUESTION
========================================================= */

#nextPage {
position: fixed;
inset: 0;
z-index: 600;

display: none;  

justify-content: center;  
align-items: center;  

padding: 25px;  

background:  
    radial-gradient(  
        circle,  
        #351300,  
        #050505 72%  
    );  

opacity: 0;

}

#nextPage.next-page-show {
animation:
nextPageIn .7s ease forwards;
}

#nextPage.next-page-hide {
animation:
nextPageOut .7s ease forwards;
}

@keyframes nextPageIn {

to {  
    opacity: 1;  
}

}

@keyframes nextPageOut {

to {  
    opacity: 0;  
    transform: scale(.95);  
}

}

.next-box {
width: min(500px, 100%);

padding: 40px 25px;  

text-align: center;  

border:  
    1px solid #ff6500;  

border-radius: 25px;  

background:  
    rgba(15, 7, 2, .9);  

box-shadow:  
    0 0 30px #ff650022,  
    inset 0 0 30px #ff650011;  

animation:  
    boxFloat 3s ease-in-out infinite;

}

@keyframes boxFloat {

50% {  
    transform: translateY(-7px);  
}

}

.question-icon {
font-size: 45px;

margin-bottom: 15px;  

animation:  
    gearSpin 4s linear infinite;

}

@keyframes gearSpin {

to {  
    transform: rotate(360deg);  
}

}

.next-box h2 {
color: #ff7900;

font-size: clamp(25px, 6vw, 38px);  

line-height: 1.3;

}

#noMessage {
min-height: 25px;

margin-top: 18px;  

color: #aaa;  

transition: .3s;

}

.message-pop {
animation:
messagePop .45s ease;
}

@keyframes messagePop {

50% {  
    transform: scale(1.12);  
    color: #ff7900;  
}

}

.answer-buttons {
display: flex;

justify-content: center;  
align-items: center;  

gap: 15px;  

margin-top: 30px;  

min-height: 70px;

}

.answer-buttons button {
border: none;

border-radius: 30px;  

padding: 13px 32px;  

font-size: 15px;  

font-weight: bold;  

cursor: pointer;  

transition:  
    transform .3s ease,  
    box-shadow .3s ease;

}

#yesButton {
background: #ff7900;

color: #050505;  

box-shadow:  
    0 0 15px #ff6500;  

transform-origin: center;

}

#yesButton:hover {
box-shadow:
0 0 30px #ff7900;
}

#noButton {
background: transparent;

color: #ffd0a3;  

border: 1px solid #663000;  

transition:  
    transform .2s ease,  
    border-color .2s ease;

}

#noButton:hover {
border-color: #ff6500;
}

/* =========================================================
FINAL COUNTDOWN
========================================================= */

#finalCountdown {
position: fixed;
inset: 0;

z-index: 1500;  

display: flex;  

justify-content: center;  
align-items: center;  

text-align: center;  

background: #030303;  

transition:  
    opacity .6s ease;

}

#finalCountdown.final-countdown-hide {
opacity: 0;
}

.final-countdown-content p {
color: #ff7900;

font-family: monospace;  

letter-spacing: 5px;

}

#finalCountNumber {
margin: 20px;

font-size: clamp(100px, 25vw, 170px);  

font-weight: 900;  

color: #ff7900;  

text-shadow:  
    0 0 15px #ff7900,  
    0 0 50px #ff4500;  

animation:  
    finalCountPulse .8s infinite alternate;

}

@keyframes finalCountPulse {

to {  
    transform: scale(1.1);  
}

}

.final-countdown-content span {
color: #888;

font-family: monospace;

}

/* =========================================================
MAIN WEBSITE
========================================================= */

#main {
display: none;

opacity: 0;

}

#main.main-show {
animation:
mainAppear 1s ease forwards;
}

@keyframes mainAppear {

to {  
    opacity: 1;  
}

}

/* =========================================================
HERO
========================================================= */

.hero {
min-height: 100vh;

display: flex;  

justify-content: center;  
align-items: center;  

text-align: center;  

padding: 40px 25px;  

background:  
    radial-gradient(  
        circle at center,  
        #401700,  
        #050505 70%  
    );  

overflow: hidden;

}

.hero-content {
width: min(850px, 100%);
}

.birthday-character {
margin-bottom: 20px;

animation:  
    characterAppear 1.3s ease;

}

.character-image {
width: min(230px, 55vw);
max-height: 280px;

object-fit: contain;  

filter:  
    drop-shadow(0 0 12px #ff7900)  
    drop-shadow(0 0 30px #ff4500);  

animation:  
    characterFloat 3s ease-in-out infinite;

}

@keyframes characterAppear {

from {  
    opacity: 0;  

    transform:  
        translateY(-80px)  
        scale(.5)  
        rotate(-5deg);  
}  

to {  
    opacity: 1;  

    transform:  
        translateY(0)  
        scale(1)  
        rotate(0);  
}

}

@keyframes characterFloat {

50% {  
    transform:  
        translateY(-9px)  
        rotate(1deg);  
}

}

.hero-small,
.section-label {
color: #ff9a42;

font-family: monospace;  

font-size: 11px;  

letter-spacing: 4px;  

margin-bottom: 12px;

}

.hero h1 {
font-size:
clamp(48px, 12vw, 100px);

color: #ff7900;  

text-shadow:  
    0 0 15px #ff7900,  
    0 0 40px #ff4500;  

animation:  
    heroTitle 1s ease .3s both;

}

@keyframes heroTitle {

from {  
    opacity: 0;  
    transform: scale(.8);  
}  

to {  
    opacity: 1;  
    transform: scale(1);  
}

}

.hero h2 {
margin-top: 5px;

font-size:  
    clamp(24px, 6vw, 35px);  

letter-spacing: 8px;  

color: #ffd0a3;  

animation:  
    fadeUp 1s ease .5s both;

}

.typing-wrapper {
margin-top: 30px;
}

.typing {
margin: auto;

max-width: 650px;  

min-height: 100px;  

color: #ddd;  

line-height: 1.8;  

white-space: pre-line;

}

.cursor {
display: inline-block;

width: 2px;  
height: 18px;  

background: #ff7900;  

animation:  
    cursorBlink .7s infinite;

}

@keyframes cursorBlink {

50% {  
    opacity: 0;  
}

}

/* =========================================================
SECTIONS
========================================================= */

.section {
min-height: 100vh;

padding: 100px 25px;  

display: flex;  

justify-content: center;  
align-items: center;  

text-align: center;  

background: #070707;  

opacity: 0;  

transform: translateY(50px);  

transition:  
    opacity .9s ease,  
    transform .9s ease;

}

.section-visible {
opacity: 1;

transform: translateY(0);

}

.section:nth-child(even) {
background:
radial-gradient(
circle,
#241000,
#050505 70%
);
}

.container {
width: min(850px, 100%);
}

.title {
color: #ff7900;

font-size:  
    clamp(32px, 7vw, 45px);  

margin-bottom: 25px;  

text-shadow:  
    0 0 20px #ff6500;

}

.section-description {
margin-top: 25px;

color: #aaa;  

line-height: 1.7;

}

/* =========================================================
PHOTO
========================================================= */

.photo {
width: min(350px, 90%);

margin: auto;  

padding: 12px;  

background: #eee;  

transform: rotate(-2deg);  

box-shadow:  
    0 10px 40px #000;  

transition:  
    transform .4s ease,  
    box-shadow .4s ease;

}

.photo:hover {
transform:
rotate(0)
scale(1.03);

box-shadow:  
    0 15px 50px #000;

}

.photo img {
width: 100%;

display: block;

}

/* =========================================================
TKR
========================================================= */

.tkr-card {
padding: 35px;

border:  
    1px solid #ff7200;  

border-radius: 25px;  

background: #ff650008;  

box-shadow:  
    0 0 30px #ff650022;  

transition:  
    transform .4s ease,  
    box-shadow .4s ease;

}

.tkr-card:hover {
transform: translateY(-8px);

box-shadow:  
    0 0 45px #ff650044;

}

.tkr-card h3 {
margin-bottom: 15px;

color: #ffd0a3;  

font-size: 25px;

}

.tkr-card p {
color: #bbb;

line-height: 1.8;

}

.gear {
font-size: 70px;

margin-bottom: 15px;  

animation:  
    gear 5s linear infinite;

}

@keyframes gear {

to {  
    transform: rotate(360deg);  
}

}

.tools-row {
margin-top: 25px;

font-size: 28px;  

letter-spacing: 5px;  

opacity: .8;

}

/* =========================================================
SPOTIFY
========================================================= */

.spotify-subtitle {
color: #aaa;

margin-bottom: 25px;  

line-height: 1.6;

}

.spotify-player {
width: min(650px, 100%);

margin: auto;  

padding: 8px;  

border:  
    1px solid #663000;  

border-radius: 18px;  

background: #120700;  

box-shadow:  
    0 0 20px #ff650022,  
    0 0 40px #ff450011;  

transition:  
    transform .4s ease,  
    box-shadow .4s ease;

}

.spotify-player:hover {
transform: translateY(-5px);

box-shadow:  
    0 0 30px #ff650044;

}

.spotify-player iframe {
display: block;

width: 100%;  

border: none;  

border-radius: 12px;

}

.song-lyrics {
width: min(650px, 100%);

margin: 30px auto 0;  

padding: 22px;  

border:  
    1px solid #663000;  

border-radius: 18px;  

background: #0d0500;

}

.song-lyrics h3 {
color: #ff7900;

margin-bottom: 12px;

}

.song-lyrics p {
color: #ccc;

line-height: 1.7;

}

.song-lyrics small {
display: block;

margin-top: 12px;  

color: #777;

}

/* =========================================================
LETTER
========================================================= */

.letter {
padding: 35px;

border-radius: 20px;  

border:  
    1px solid #663000;  

background: #120700;  

color: #ddd;  

line-height: 1.9;  

text-align: left;  

box-shadow:  
    0 0 25px #ff650011;  

transition:  
    transform .4s ease,  
    box-shadow .4s ease;

}

.letter:hover {
transform: translateY(-5px);

box-shadow:  
    0 0 35px #ff650033;

}

/* =========================================================
NOTIFICATION
========================================================= */

.notification {
position: fixed;

right: 20px;  
top: 25px;  

z-index: 200;  

width:  
    min(340px, calc(100% - 40px));  

padding: 15px;  

border-radius: 18px;  

background:  
    rgba(35, 35, 35, .95);  

box-shadow:  
    0 8px 30px #000;  

display: none;  

align-items: center;  

gap: 15px;  

animation:  
    notificationIn .5s ease;

}

.notification-hide {
animation:
notificationOut .5s ease forwards;
}

.notification-icon {
font-size: 35px;
}

.notification-text {
text-align: left;
}

.notification-title {
font-size: 12px;

color: #aaa;

}

.notification-message {
margin-top: 4px;

font-weight: bold;

}

@keyframes notificationIn {

from {  
    transform: translateY(-100px);  
    opacity: 0;  
}  

to {  
    transform: translateY(0);  
    opacity: 1;  
}

}

@keyframes notificationOut {

to {  
    transform: translateY(-100px);  
    opacity: 0;  
}

}

/* =========================================================
END
========================================================= */

.end {
min-height: 100vh;

display: flex;  

justify-content: center;  
align-items: center;  

text-align: center;  

padding: 30px;  

background:  
    radial-gradient(  
        circle,  
        #421600,  
        #050505 70%  
    );

}

.end-content {
animation:
endFloat 3s ease-in-out infinite;
}

@keyframes endFloat {

50% {  
    transform: translateY(-8px);  
}

}

.end h2 {
color: #ff7900;

font-size:  
    clamp(35px, 8vw, 55px);  

text-shadow:  
    0 0 25px #ff4500;

}

.end p:not(.section-label) {
margin-top: 20px;

color: #ffd0a3;

}

.next-button {
display: inline-block;

margin-top: 35px;  

padding: 14px 45px;  

border:  
    1px solid #ff7900;  

border-radius: 30px;  

color: #ff7900;  

background:  
    rgba(255, 101, 0, .08);  

font-weight: bold;  

letter-spacing: 4px;  

cursor: pointer;  

box-shadow:  
    0 0 10px #ff6500,  
    0 0 25px #ff450055;  

transition:  
    .3s;

}

.next-button:hover {
background: #ff7900;

color: #050505;  

box-shadow:  
    0 0 20px #ff7900,  
    0 0 50px #ff4500;  

transform: scale(1.05);

}

.final-button-active {
animation:
finalButton .6s ease forwards;
}

@keyframes finalButton {

50% {  
    transform: scale(1.15);  
}  

100% {  
    transform: scale(0);  
    opacity: 0;  
}

}

/* =========================================================
FINAL 3D LOVE
========================================================= */

#finalLovePage {
position: fixed;

inset: 0;  

z-index: 2000;  

display: none;  

justify-content: center;  
align-items: center;  

background:  
    radial-gradient(  
        circle at center,  
        #260d00,  
        #010101 75%  
    );  

overflow: hidden;  

opacity: 0;

}

#finalLovePage.final-page-show {
animation:
finalPageIn 1s ease forwards;
}

@keyframes finalPageIn {

to {  
    opacity: 1;  
}

}

.love3d-container {
position: absolute;

inset: 0;  

display: flex;  

justify-content: center;  
align-items: center;

}

.love3d-container canvas {
display: block;

width: 100%;  
height: 100%;

}

.final-love-text {
position: absolute;

bottom: 10%;  

left: 0;  
right: 0;  

z-index: 10;  

text-align: center;  

pointer-events: none;

}

.for-you {
color: #ff7900;

font-size:  
    clamp(35px, 9vw, 65px);  

font-weight: 900;  

letter-spacing: 10px;  

text-shadow:  
    0 0 10px #ff7900,  
    0 0 30px #ff4500;

}

.love-hint {
margin-top: 12px;

color: #ffd0a3;  

font-size: 12px;  

letter-spacing: 3px;  

opacity: .8;

}

/* =========================================================
HEART LIGHT
========================================================= */

.heart-light-start {
filter:
brightness(1.2);
}

.heart-explosion-light {
position: absolute;

left: 50%;  
top: 50%;  

width: 30px;  
height: 30px;  

transform:  
    translate(-50%, -50%)  
    scale(.2);  

border-radius: 50%;  

background: #fff;  

box-shadow:  
    0 0 20px #fff,  
    0 0 50px #ffdfaa,  
    0 0 100px #ff7900,  
    0 0 180px #ff4500;  

animation:  
    lightGrow 1.3s ease forwards;  

pointer-events: none;

}

.light-max {
animation:
lightMax .45s ease forwards;
}

@keyframes lightGrow {

50% {  
    transform:  
        translate(-50%, -50%)  
        scale(15);  
}  

100% {  
    transform:  
        translate(-50%, -50%)  
        scale(35);  

    opacity: .9;  
}

}

@keyframes lightMax {

to {  
    transform:  
        translate(-50%, -50%)  
        scale(70);  

    opacity: 1;  
}

}

.final-flash {
animation:
finalFlash .8s ease;
}

@keyframes finalFlash {

0% {  
    filter: brightness(1);  
}  

50% {  
    filter: brightness(8);  
}  

100% {  
    filter: brightness(1);  
}

}

/* =========================================================
FIREWORKS
========================================================= */

.fireworks-container {
position: absolute;

inset: 0;  

z-index: 20;  

pointer-events: none;

}

.firework-burst {
position: absolute;

width: 10px;  
height: 10px;  

transform:  
    translate(-50%, -50%);

}

.firework-particle {
position: absolute;

left: 0;  
top: 0;  

width: 5px;  
height: 5px;  

border-radius: 50%;  

background: #ff7900;  

box-shadow:  
    0 0 8px #ff7900,  
    0 0 18px #ff4500;  

animation:  
    particleExplode 1.3s ease-out forwards;

}

@keyframes particleExplode {

0% {  
    opacity: 1;  

    transform:  
        translate(0, 0)  
        scale(1.2);  
}  

70% {  
    opacity: 1;  
}  

100% {  
    opacity: 0;  

    transform:  
        translate(var(--x), var(--y))  
        scale(.15);  
}

}

/* =========================================================
UTILITY ANIMATION
========================================================= */

@keyframes fadeUp {

from {  
    opacity: 0;  
    transform: translateY(25px);  
}  

to {  
    opacity: 1;  
    transform: translateY(0);  
}

}

/* =========================================================
MOBILE
========================================================= */

@media (max-width: 600px) {

.terminal {  
    font-size: 9px;  
}  

.adit {  
    font-size: 17px;  
    letter-spacing: 4px;  
}  

.birthday-cake-image {  
    width: min(240px, 70vw);  
}  

.gift-image {  
    width: min(230px, 70vw);  
}  

.character-image {  
    width: min(190px, 55vw);  
}  

.section {  
    padding:  
        80px 20px;  
}  

.tkr-card,  
.letter {  
    padding:  
        25px 20px;  
}  

.hero h2 {  
    letter-spacing: 4px;  
}  

.typing {  
    font-size: 14px;  
}  

.next-box {  
    padding:  
        35px 20px;  
}  

.answer-buttons {  
    gap: 10px;  
}  

.answer-buttons button {  
    padding:  
        12px 25px;  
}  

.heart-word {  
    font-size: 7px;  
}  

.for-you {  
    letter-spacing: 5px;  
}  

.love-hint {  
    font-size: 10px;  
}  

.notification {  
    right: 10px;  
    top: 15px;  

    width:  
        calc(100% - 20px);  
}  

}

Style css
