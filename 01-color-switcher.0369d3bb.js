const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");let l=null;function a(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.disabled=!0,t.addEventListener("click",(()=>{l=setInterval((()=>{let n=a();d.style.backgroundColor=n,null!==l&&(e.disabled=!1,t.disabled=!0,e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1})))}),1e3)})),e.addEventListener("click",(()=>{clearInterval(l)})),console.log(a()),t.style.margin="100px auto auto 550px",t.style.padding="10px 20px 10px 20px",e.style.padding="10px 20px 10px 20px";
//# sourceMappingURL=01-color-switcher.0369d3bb.js.map