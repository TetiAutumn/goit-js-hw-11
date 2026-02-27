import{a as d,S as f,i as o}from"./assets/vendor--6n4cVRZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const u="14065997-636d53df3ecdad4eb4f635f43",p="https://pixabay.com/api/";async function g(n){const t={key:u,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(p,{params:t})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader-container"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function m(n){const t=n.map(a=>`
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
            `).join("");l.insertAdjacentHTML("beforeend",t),y.refresh()}function h(){console.log("clear"),l.innerHTML=""}function v(){c.classList.remove("hidden")}function L(){c.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",async n=>{n.preventDefault();const t=n.target.elements["search-text"].value.trim();if(t)try{h(),v();const a=await g(t);a.hits.length===0?o.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):m(a.hits)}catch{o.warning({message:"Something went wrong!",position:"topRight"})}finally{L()}else{o.warning({message:"Please enter a search query!",position:"topRight"});return}});
//# sourceMappingURL=index.js.map
