const gifts={
1:{title:"Memory Lane 📸",text:"This gift opens our 17-photo scrapbook.",next:5},
2:{title:"Why You're The Best ❤️",text:"Because you care, you listen, you make me laugh, you tolerate my irritating behaviour, and you're simply irreplaceable. 🫶",next:6},
3:{title:"One Last Thing 💌",text:"There is a letter waiting for you. But first, take your official award...",next:6}
};
function show(n){document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));document.getElementById("page"+n).classList.add("active");scrollTo({top:0,behavior:"smooth"})}
function openGift(n){let g=gifts[n];document.getElementById("giftContent").innerHTML=`<div style="font-size:4rem">🎁</div><p class="eyebrow">YOUR GIFT</p><h1>${g.title}</h1><p>${g.text}</p><button onclick="show(${g.next})">Open it →</button>`;show(4)}
const gallery=document.getElementById("gallery");
for(let i=1;i<=17;i++){let d=document.createElement("div");d.className="photo";d.innerHTML=`<img src="photos/photo${i}.jpg" alt="Memory ${i}"><span>Memory ${i}</span>`;gallery.appendChild(d)}
function celebrate(){for(let i=0;i<90;i++){let e=document.createElement("div");e.textContent=["❤️","🌸","✨","💖","🫶"][Math.floor(Math.random()*5)];Object.assign(e.style,{position:"fixed",left:Math.random()*100+"vw",top:"-25px",fontSize:16+Math.random()*22+"px",zIndex:9999});document.body.appendChild(e);e.animate([{transform:"translateY(0)",opacity:1},{transform:`translateY(110vh) rotate(${Math.random()*720-360}deg)`,opacity:0}],{duration:1800+Math.random()*1800,easing:"ease-out"}).onfinish=()=>e.remove()}}
