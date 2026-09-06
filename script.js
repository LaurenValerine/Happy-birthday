 /* =========================================================
   BIRTHDAY WEBSITE - BAGIAN 1: INISIALISASI & TERMINAL
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
        span.textContent = terminalLines[Math.floor(Math.random() * terminalLines.length)];
        terminal.appendChild(span);
    }
}

/* =========================================================
   COUNTDOWN AWAL 10 → 0
========================================================= */
let number = 10;
const countdown = document.getElementById("countdown");
const countNumber = document.getElementById("number");

const timer = setInterval(() => {
    number--;
    if (number <= 0) {
        clearInterval(timer);
        if (countdown) countdown.classList.add("countdown-hide");
        setTimeout(showReveal, 700);
    } else {
        if (countNumber) countNumber.textContent = number;
    }
}, 1000);

/* =========================================================
   BAGIAN 2: TAMPILAN AWAL & PRANK ERROR
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
            if (gift) { gift.style.display = "flex"; gift.classList.add("gift-show"); }
        }, 700);
    }, 5000);
}

/* =========================================================
   BUKA HADIAH
========================================================= */
let giftOpened = false;
function openGift() {
    if (giftOpened) return;
    giftOpened = true;
    const gift = document.getElementById("gift");
    if (!gift) return;
    gift.classList.add("gift-shake");
    setTimeout(() => { gift.style.display = "none"; startErrorPrank(); }, 650);
}

/* =========================================================
   ERROR PRANK
========================================================= */
let errorClicks = 0, prankStarted = false;
function startErrorPrank() {
    const prank = document.getElementById("prank");
    if (!prank) { console.error("ERROR: #prank tidak ditemukan."); return; }
    errorClicks = 0; prankStarted = false; prank.style.display = "flex";
    prank.classList.remove("danger-level-1","danger-level-2","danger-level-3","prank-blackout");
    const errorWord = document.getElementById("errorWord"), guide = document.getElementById("errorGuide"), counter = document.getElementById("errorCounter");
    if(errorWord) errorWord.classList.remove("error-warning","error-danger","error-explode");
    if(guide) guide.textContent = "Klik ERROR 3 kali.";
    if(counter){ counter.textContent = "0 / 3"; counter.style.display = "block"; }
    setTimeout(()=>{ prank.classList.add("prank-active"); },50);
}

function clickError() {
    if (prankStarted) return;
    const prank = document.getElementById("prank"), errorWord = document.getElementById("errorWord"), guide = document.getElementById("errorGuide"), counter = document.getElementById("errorCounter");
    if (!prank || !errorWord) return;
    errorClicks++; if(counter) counter.textContent = `${errorClicks} / 3`;
    if(errorClicks===1){ errorWord.classList.add("error-warning"); if(guide)guide.textContent="WARNING... system instability detected."; prank.classList.add("danger-level-1"); createGlitchParticles(20); }
    else if(errorClicks===2){ errorWord.classList.remove("error-warning"); errorWord.classList.add("error-danger"); if(guide)guide.textContent="CRITICAL ERROR... one more click."; prank.classList.remove("danger-level-1"); prank.classList.add("danger-level-2"); createGlitchParticles(40); }
    else if(errorClicks===3){ prankStarted=true; if(guide)guide.textContent="SYSTEM FAILURE."; if(counter)counter.style.display="none"; errorWord.classList.add("error-explode"); prank.classList.add("danger-level-3"); createGlitchParticles(90); setTimeout(()=>{ createBirthdayHeart(); },850); }
}

function createGlitchParticles(amount) {
    const prank = document.getElementById("prank"); if(!prank) return;
    for(let i=0;i<amount;i++){
        const particle=document.createElement("span"); particle.className="glitch-particle";
        particle.style.left=`${50+(Math.random()*40-20)}%`; particle.style.top=`${50+(Math.random()*40-20)}%`;
        particle.style.setProperty("--x",`${Math.random()*600-300}px`); particle.style.setProperty("--y",`${Math.random()*500-250}px`);
        particle.style.animationDelay=`${Math.random()*0.25}s`; prank.appendChild(particle);
        setTimeout(()=>particle.remove(),1200);
    }
}

/* =========================================================
   BAGIAN 3: BENTUK HATI & PERTANYAAN
========================================================= */
function createBirthdayHeart() {
    const prank=document.getElementById("prank"), birthdayLove=document.getElementById("birthdayLove"), heartContainer=document.getElementById("birthdayHeart"), heartMessage=document.getElementById("heartMessage");
    if(!birthdayLove||!heartContainer){ console.error("ERROR: birthdayLove atau birthdayHeart tidak ditemukan."); return; }
    if(prank){ prank.classList.add("prank-blackout"); setTimeout(()=>{prank.style.display="none";},800); }
    birthdayLove.style.display="flex"; birthdayLove.classList.remove("birthday-love-fade"); setTimeout(()=>{birthdayLove.classList.add("birthday-love-show");},50);
    heartContainer.innerHTML="";
    const words=[]; const layers=8, pointsPerLayer=38;
    for(let layer=0;layer<layers;layer++){
        const scale=0.35+(layer/layers)*0.65;
        for(let i=0;i<pointsPerLayer;i++){
            const t=(Math.PI*2/pointsPerLayer)*i;
            const x=16*Math.pow(Math.sin(t),3);
            const y=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t);
            const px=50+(x*scale)*2.6, py=48-(y*scale)*2.8;
            words.push({x:px,y:py});
        }
    }
    words.forEach((pos,idx)=>{
        const word=document.createElement("span"); word.className="heart-word"; word.textContent="HAPPY BIRTHDAY";
        word.style.left=`${pos.x}%`; word.style.top=`${pos.y}%`; word.style.animationDelay=`${idx*0.012}s`;
        heartContainer.appendChild(word);
    });
    const formTime=2800;
    setTimeout(()=>{if(heartMessage)heartMessage.classList.add("heart-message-show");},formTime);
    setTimeout(()=>{
        birthdayLove.classList.add("birthday-love-fade"); setTimeout(()=>{
            birthdayLove.style.display="none"; if(heartMessage)heartMessage.classList.remove("heart-message-show");
            showNextQuestion();
        },700);
    },formTime+3000);
}

/* =========================================================
   PERTANYAAN YA / TIDAK
========================================================= */
function showNextQuestion(){ const np=document.getElementById("nextPage"); if(!np)return; np.style.display="flex"; np.classList.remove("next-page-hide"); setTimeout(()=>{np.classList.add("next-page-show");},50); }
let noClicks=0; const noMessages=["yahh jahat 😭","yakin gamau tauu?","masa hadiahnya ditolak...","satu kali lagi ajaa 😭","serius gamau?","aku sudah menyiapkan ini loh...","kesempatan terakhir mungkin 👀","YA-nya kok malah diabaikan 😭"];
function chooseNo(){
    noClicks++; const yb=document.getElementById("yesButton"), nm=document.getElementById("noMessage");
    if(nm){ nm.textContent=noMessages[(noClicks-1)%noMessages.length]; nm.classList.remove("message-pop"); void nm.offsetWidth; nm.classList.add("message-pop"); }
    if(yb){ const s=Math.min(1+noClicks*0.16,2.5); yb.style.transform=`scale(${s})`; yb.style.zIndex="10"; }
}
function chooseYes(){ const np=document.getElementById("nextPage"); if(!np)return; np.classList.add("next-page-hide"); setTimeout(()=>{np.style.display="none"; startFinalCountdown();},700); }

/* =========================================================
   HITUNG MUNDUR AKHIR
========================================================= */
function startFinalCountdown(){
    const overlay=document.createElement("section"); overlay.id="finalCountdown";
    overlay.innerHTML=`<div class="final-countdown-content"><p>ACCESS GRANTED</p><div id="finalCountNumber">3</div><span>Loading birthday page...</span></div>`;
    document.body.appendChild(overlay);
    let count=3; const t=setInterval(()=>{
        count--; const n=document.getElementById("finalCountNumber");
        if(count<=0){ clearInterval(t); overlay.classList.add("final-countdown-hide"); setTimeout(()=>{overlay.remove(); showMainWebsite();},600); }
        else{ if(n)n.textContent=count; }
    },1000);
}

/* =========================================================
   BAGIAN 4: HALAMAN UTAMA & PESAN
========================================================= */
function showMainWebsite(){ const m=document.getElementById("main"); if(!m)return; m.style.display="block"; window.scrollTo({top:0,behavior:"instant"}); setTimeout(()=>{m.classList.add("main-show"); startTyping();},100); }

/* =========================================================
   KETIK OTOMATIS
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
let typingIndex = 0, typingStarted = false;
function startTyping(){ if(typingStarted)return; const el=document.getElementById("typingText"); if(!el)return; typingStarted=true; typingIndex=0; el.textContent=""; const t=setInterval(()=>{el.textContent+=message[typingIndex]; typingIndex++; if(typingIndex>=message.length)clearInterval(t);},35); }

/* =========================================================
   TAMPIL SAAT DIGULIR
========================================================= */
const sections=document.querySelectorAll(".section");
if("IntersectionObserver"in window){ new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add("section-visible");});},{threshold:0.15}).observe(sections); }

/* =========================================================
   NOTIFIKASI SAAT DIGULIR
========================================================= */
let notificationShown=false; window.addEventListener("scroll",()=>{ if(notificationShown)return; const s=window.scrollY,h=document.documentElement.scrollHeight-window.innerHeight; if(h<=0)return; const p=s/h; if(p>=0.35){ notificationShown=true; const n=document.getElementById("notification"); if(!n)return; n.style.display="flex"; setTimeout(()=>{n.classList.add("notification-hide"); setTimeout(()=>{n.style.display="none";},500);},4000); } });

/* =========================================================
   TOMBOL HADIAH TERAKHIR
========================================================= */
let finalGiftOpened=false;
function openFinalGift(){ if(finalGiftOpened)return; finalGiftOpened=true; const btn=document.querySelector(".next-button"); if(btn)btn.classList.add("final-button-active"); setTimeout(()=>{const m=document.getElementById("main"),fp=document.getElementById("finalLovePage"); if(m)m.style.display="none"; if(fp){fp.style.display="flex"; setTimeout(()=>{fp.classList.add("final-page-show"); init3DHeart();},100);}},600); }

/* =========================================================
   BAGIAN 5: HATI 3D, KEMBANG API & INISIALISASI
========================================================= */
let scene=null,camera=null,renderer=null,heartGroup=null,heartClicked=false;
function init3DHeart(){
    const c=document.getElementById("love3dContainer"); if(!c)return; if(typeof THREE==="undefined"){console.error("Three.js tidak ditemukan.");return;}
    if(renderer){renderer.dispose();c.innerHTML="";} heartClicked=false;
    scene=new THREE.Scene(); camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000); camera.position.z=8;
    renderer=new THREE.WebGLRenderer({antialias:true,alpha:true}); renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)); renderer.setSize(window.innerWidth,window.innerHeight);
    c.appendChild(renderer.domElement); heartGroup=new THREE.Group(); scene.add(heartGroup);
    create3DHeart(); renderer.domElement.addEventListener("click",handleHeartClick); window.addEventListener("resize",resize3D); animate3DHeart();
}
function create3DHeart(){
    const pts=[];
    for(let u=0;u<Math.PI*2;u+=0.13){ const x=16*Math.pow(Math.sin(u),3); const y=13*Math.cos(u)-5*Math.cos(2*u)-2*Math.cos(3*u)-Math.cos(4*u); for(let v=-1;v<=1;v+=0.12){ pts.push(new THREE.Vector3(x/7,y/7,v*(1.2+1.2*Math.sin(u)))); } }
    const g=new THREE.BufferGeometry().setFromPoints(pts); const m=new THREE.PointsMaterial({color:0xff7900,size:0.045,transparent:true,opacity:0.95});
    heartGroup.add(new THREE.Points(g,m));
    const lp=[]; for(let i=0;i<pts.length-20;i+=8){const a=pts[i],b=pts[i+1];if(!a||!b)continue; lp.push(a.x,a.y,a.z,b.x,b.y,b.z);}
    const lg=new THREE.BufferGeometry(); lg.setAttribute("position",new THREE.Float32BufferAttribute(lp,3)); heartGroup.add(new THREE.LineSegments(lg,new THREE.LineBasicMaterial({color:0xff6500,transparent:true,opacity:0.28})));
    heartGroup.scale.set(1.7,1.7,1.7);
}
function animate3DHeart(){ if(!renderer||!scene||!camera)return; requestAnimationFrame(animate3DHeart); if(!heartClicked&&heartGroup){heartGroup.rotation.y+=0.008; heartGroup.rotation.x=Math.sin(Date.now()*0.0007)*0.12;} renderer.render(scene,camera); }
function handleHeartClick(){ if(heartClicked)return; heartClicked=true; splitHeart(); }
function splitHeart(){
    if(!heartGroup)return; const c=document.getElementById("love3dContainer"); if(c)c.classList.add("heart-light-start");
    const s=performance.now(),d=1100; (function a(n){const p=Math.min((n-s)/d,1),e=p*p*(3-2*p); heartGroup.position.x=-e*0.7; heartGroup.rotation.z=-e*0.1; if(p<1)requestAnimationFrame(a); else createExplosionLight();})();
}
function createExplosionLight(){
    const c=document.getElementById("love3dContainer"); if(!c)return; const l=document.createElement("div"); l.className="heart-explosion-light"; c.appendChild(l); setTimeout(()=>l.classList.add("light-max"),100); setTimeout(()=>explodeHeart(),1300);
}
function explodeHeart(){ if(heartGroup)heartGroup.visible=false; const c=document.getElementById("love3dContainer"); if(c)c.classList.add("final-flash"); createFireworks(); setTimeout(()=>{if(c)c.classList.remove("final-flash");},800); }
function createFireworks(){ const c=document.getElementById("fireworksContainer"); if(!c)return; c.innerHTML=""; for(let i=0;i<16;i++)setTimeout(()=>createFirework(Math.random()*100,20+Math.random()*65),i*180); }
function createFirework(x,y){
    const c=document.getElementById("fireworksContainer"); if(!c)return; const fb=document.createElement("div"); fb.className="firework-burst"; fb.style.left=`${x}%`; fb.style.top=`${y}%`;
    for(let i=0;i<28;i++){const p=document.createElement("span"); p.className="firework-particle"; const a=(Math.PI*2/28)*i,d=80+Math.random()*130; p.style.setProperty("--x",`${Math.cos(a)*d}px`); p.style.setProperty("--y",`${Math.sin(a)*d}px`); p.style.animationDelay=`${Math.random()*0.1}s`; fb.appendChild(p); }
    c.appendChild(fb); setTimeout(()=>fb.remove(),1800);
}
function resize3D(){ if(!camera||!renderer)return; camera.aspect=window.innerWidth/window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth,window.innerHeight); }

/* =========================================================
   HUBUNGKAN TOMBOL
========================================================= */
document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("giftButton")?.addEventListener("click",openGift);
    const e=document.getElementById("errorWord");
    if(e){ e.addEventListener("click",clickError); e.addEventListener("keydown",ev=>{if(ev.key==="Enter")clickError();}); }
    document.getElementById("yesButton")?.addEventListener("click",chooseYes);
    document.getElementById("noButton")?.addEventListener("click",chooseNo);
    document.getElementById("finalGiftButton")?.addEventListener("click",openFinalGift);
});

console.log("🎂 Birthday system loaded successfully.");
console.log("🔧 TKR module: ONLINE");
console.log("❤️ Mathematical heart: READY");
console.log("🎁 Surprise protocol: ACTIVE");

