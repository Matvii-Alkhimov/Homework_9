!function(){let e=document.querySelector(".game");for(let t=1;t<4;t+=1){let n=document.createElement("div");n.innerHTML=`
    <div class="btn-cont"><button disabled class="game-button"></button></div>
    <div class="btn-cont"><button disabled class="game-button"></button></div>
    <div class="btn-cont"><button disabled class="game-button"></button></div>
    <div class="btn-cont"><button disabled class="game-button"></button></div>
    `,n.classList.add("buttons-container",`buttons-container-${t}`),e.append(n)}let t=document.querySelector(".buttons-container-2"),n=document.querySelector(".buttons-container-3"),r=document.querySelector(".easy-input"),o=document.querySelector(".medium-input"),c=document.querySelector(".difficult-input");r.addEventListener("change",function(e){t.classList.remove("active"),n.classList.remove("active")}),o.addEventListener("change",function(e){t.classList.add("active"),n.classList.remove("active")}),c.addEventListener("change",function(e){n.classList.add("active"),t.classList.add("active")});let s=Array.from(document.querySelectorAll(".buttons-container-1 button")),a=Array.from(document.querySelectorAll(".buttons-container-2 button")),l=Array.from(document.querySelectorAll(".buttons-container-3 button")),i=document.querySelector(".timer"),d=document.querySelector(".score"),u={exercises:null,gameStarted:null,timer:null,allButtons:null,width:50,answerPicked:null,score:0},m={colors:["red","orange","yellow","green","blue","purple","pink","brown","black","gray"],letters:["a","b","c","d","e","f","g","h","i","j"],strings:["8745","///sad","\\```sd","s","xdslc","....,,...","....///.,,,","..../.,.","QWS","23@"]},b=document.querySelector(".start-button"),v=document.querySelector(".game > p");function g(){u.exercises=[],b.textContent="",r.checked?(u.exercises=[m.colors],u.allButtons=[...s]):o.checked?(u.exercises=[m.colors,m.letters],u.allButtons=[...s,...a]):c.checked&&(u.exercises=[m.colors,m.letters,m.strings],u.allButtons=[...s,...a,...l]),b.removeEventListener("click",g),S(),function(){let e=[];u.allButtons.forEach(t=>{t.textContent="",t.style.backgroundColor="gray";let n=Math.round(Math.random()*(u.exercises.length-1-0)+0),r=u.exercises[n],o=Math.round(Math.random()*(r.length-1-0)+0),c=r[o];e.push(c),r.splice(o,1),t.dataset.answer=c,0===n?t.style.backgroundColor=c:t.textContent=c,t.addEventListener("click",k),t.removeAttribute("disabled")}),u.answerPicked=e[Math.round(Math.random()*(e.length-1-0)+0)],v.textContent=`Pick the "${u.answerPicked}" button`,i.classList.add("active"),u.timer=setInterval(y,100),u.gameStarted=setInterval(h,1e4)}()}function h(e){clearInterval(u.gameStarted),clearInterval(u.timer),i.classList.remove("active"),u.width=50,u.score=0,v.textContent="Time over!",b.addEventListener("click",g),b.textContent="RESTART",u.allButtons.forEach(e=>{e.removeEventListener("click",k),e.toggleAttribute("disabled"),e.style.backgroundColor="gray"})}function y(){u.width-=.5,i.style.width=`${u.width}%`}function S(){m.colors=["red","orange","yellow","green","blue","purple","pink","brown","black","gray"],m.letters=["a","b","c","d","e","f","g","h","i","j"],m.strings=["8745","///sad","\\```sd","s","xdslc","....,,...","....///.,,,","..../.,.","QWS","23@"],u.width=50}function k(e){let t=e.target.dataset.answer;t===u.answerPicked?(u.score+=1,d.textContent=`Score: ${u.score}`,clearInterval(u.gameStarted),clearInterval(u.timer),g(),S()):(u.score-=1,d.textContent=`You made a mistake! Score: ${u.score}`)}b.addEventListener("click",g)}();
//# sourceMappingURL=index.b903b03d.js.map