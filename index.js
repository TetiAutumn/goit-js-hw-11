import{a as d,S as u,i}from"./assets/vendor--6n4cVRZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const f="14065997-636d53df3ecdad4eb4f635f43",y="https://pixabay.com/api/";async function p(r){const t={key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(y,{params:t})).data}const c=document.querySelector(".gallery");document.querySelector(".loader");const g=new u(".gallery a",{captionsData:"alt",captionDelay:250});function m(r){const t=r.map(a=>`
                <li class="gallery-item">
                    <a class="gallery-link" href="${a.largeImageURL}">
                        <img class="gallery-image" src="${a.webformatURL}" alt="${a.tags}" />
                    </a>
                    <div class="galery-info-container">
                        <div class="galery-info-column">
                            <span class="galery-info-title">Likes</span>
                            <span class="galery-info-value">${a.likes}</span>
                        </div>
                        <div class="galery-info-column">
                            <span class="galery-info-title">Views</span>
                            <span class="galery-info-value">${a.views}</span>
                        </div>
                        <div class="galery-info-column">
                            <span class="galery-info-title">Comments</span>
                            <span class="galery-info-value">${a.comments}</span>
                        </div>
                        <div class="galery-info-column">
                            <span class="galery-info-title">Downloads</span>
                            <span class="galery-info-value">${a.downloads}</span>
                        </div>
                    </div>
                </li>
            `).join("");c.insertAdjacentHTML("beforeend",t),g.refresh()}function h(){console.log("clear"),c.innerHTML=""}const v=document.querySelector(".form"),l=document.querySelector(".loader-container");v.addEventListener("submit",async r=>{r.preventDefault();const t=r.target.elements["search-text"].value.trim();if(t)try{h(),l.classList.remove("hidden");const a=await p(t);a.hits.length===0?i.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):m(a.hits)}catch{}finally{l.classList.add("hidden")}else{i.warning({message:"Please enter a search query!",position:"topRight"});return}});
//# sourceMappingURL=index.js.map
