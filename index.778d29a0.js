const e=document.querySelector(".stopwatch-button"),t=document.querySelector(".stopwatch-input");let n=null,r=0;function u(){if(0===r)return clearInterval(n),t.value="",alert("time is over!");t.value=`${r-1} sec`,r-=1}e.addEventListener("click",function(){if(!Number(t.value))return alert("Enter the number!");r=t.value,n=setInterval(u,1e3)});
//# sourceMappingURL=index.778d29a0.js.map
