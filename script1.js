const birthdaydate="1 october 2023"
const days=document.getElementById("Days");
const hours=document.getElementById("Hours");
const minutes=document.getElementById("Minutes");
const seconds=document.getElementById("Seconds");

function birthdaycounter(){
    const bdate=new Date(birthdaydate);
    const todaydate=new Date();
    // console.log(todaydate);
    const tseconds=(bdate-todaydate)/1000;
    const tdays=Math.floor(tseconds/3600/24);
    const thours=Math.floor(todaydate/3600)%24;
    const tmin=Math.floor(tseconds/60)%60;
    const tsec=Math.floor(tseconds)%60;
    Days.innerHTML=tdays;
    Hours.innerHTML=thours;
    Minutes.innerHTML=tmin;
    Seconds.innerHTML=tsec;
}
birthdaycounter();
setInterval(birthdaycounter,1000);

function celebration(){
    const baloon=document.createElement("div");
    const baloon1=document.createElement("div");
    const heart=document.createElement("div");
    baloon.classList.add("baloon");
    baloon1.classList.add("baloon1");
    heart.classList.add("heart");
    baloon.style.left=Math.random()*100;
    baloon.style.animationDuration=Math.random()*2+3;
    baloon.innerText="🎈";
    document.body.appendChild(baloon);

    heart.style.left=Math.random()*100+"vw";
    heart.style.animationDuration=Math.random()*2+3;
    heart.innerText="❤️";
    document.body.appendChild(heart);

    baloon1.style.left=Math.random()*100;
    baloon1.style.animationDuration=Math.random()*2+3;
    baloon1.innerText="🎈";
    document.body.appendChild(baloon1);


    setTimeout(() => {
        baloon.remove();
    },5000);

    setTimeout(() => {
        baloon1.remove();
    },5000);

    setTimeout(() => {
        heart.remove();
    },1500);
}

setInterval(celebration,300);