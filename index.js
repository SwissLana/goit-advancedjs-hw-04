import{a as q,S as R,i as a}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const E="https://pixabay.com/api/",$="55877928-5048cf5b75a61a83a7743c80d",B=15;async function f(r,o){return(await q.get(E,{params:{key:$,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:B}})).data}const y=document.querySelector(".gallery"),g=document.querySelector(".loader"),m=document.querySelector(".load-more-btn"),M=new R(".gallery a",{captionsData:"alt",captionDelay:250});function h(r){const o=r.map(({webformatURL:s,largeImageURL:l,tags:e,likes:t,views:i,comments:S,downloads:P})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${l}">
              <img
                class="gallery-image"
                src="${s}"
                alt="${e}"
              />
            </a>

            <div class="gallery-info">
              <p class="gallery-info-item">
                <span class="gallery-info-title">Likes</span>
                <span>${t}</span>
              </p>
              <p class="gallery-info-item">
                <span class="gallery-info-title">Views</span>
                <span>${i}</span>
              </p>
              <p class="gallery-info-item">
                <span class="gallery-info-title">Comments</span>
                <span>${S}</span>
              </p>
              <p class="gallery-info-item">
                <span class="gallery-info-title">Downloads</span>
                <span>${P}</span>
              </p>
            </div>
          </li>
        `).join("");y.insertAdjacentHTML("beforeend",o),M.refresh()}function A(){y.innerHTML=""}function L(){g.classList.add("is-visible")}function b(){g.classList.remove("is-visible")}function v(){m.classList.remove("hidden")}function c(){m.classList.add("hidden")}const d=document.querySelector(".form"),O=d.elements["search-text"],_=document.querySelector(".load-more-btn");let u="",n=1,p=0;const w=15;d.addEventListener("submit",x);_.addEventListener("click",H);async function x(r){r.preventDefault();const o=O.value.trim();if(!o){a.error({message:"Please enter a search query!",position:"topRight"});return}u=o,n=1,A(),c(),L();try{const s=await f(u,n);if(s.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p=s.totalHits,h(s.hits),n*w>=p?(c(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):v()}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b(),d.reset()}}async function H(){n+=1,L(),c();try{const r=await f(u,n);h(r.hits),D(),n*w>=p?(c(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):v()}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b()}}function D(){const r=document.querySelector(".gallery-item");if(!r)return;const o=r.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
