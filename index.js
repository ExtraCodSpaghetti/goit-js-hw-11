import{a as d,S as p,i as a}from"./assets/vendor-Dt0HiiXr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y="49114219-148fd2eac33b6a5671d248709",g="https://pixabay.com/api/";function h(n){const t=`${g}?key=${y}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;return d.get(t).then(s=>s.data.hits.length===0?Promise.reject("No images found."):s.data.hits)}const f=document.querySelector(".gallery");let L=new p(".gallery a");function $(n){const t=n.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:o,comments:u,downloads:m})=>`
      <a href="${i}" class="gallery-item">
        <img src="${s}" alt="${e}" />
        <ul class="info">
                    <li class="inform-link">
                        <span class="inform-title">Likes:</span>
                        <p class="inform-dan">${r}</p>
                    </li>
                    <li class="inform-link">
                        <span class="inform-title">Views:</span>
                        <p class="inform-dan">${o}</p>
                    </li>
                    <li class="inform-link">
                        <span class="inform-title">Comments:</span>
                        <p class="inform-dan">${u}</p>
                    </li>
                    <li class="inform-link">
                        <span class="inform-title">Downloads:</span>
                        <p class="inform-dan">${m}</p>
                    </li>
                </ul>
      </a>`).join("");f.innerHTML=t,L.refresh()}function b(){f.innerHTML=""}const l=document.querySelector("#search-form"),c=document.querySelector(".loader");l.addEventListener("submit",n=>{n.preventDefault();const t=n.target.elements.searchQuery.value.trim();if(!t){a.error({title:"Error",message:"Please enter a search query!"});return}b(),c.style.display="block",h(t).then(s=>{$(s),a.success({title:"Success",message:"Images loaded!"})}).catch(s=>{a.error({title:"Error",message:s})}).finally(()=>{c.style.display="none",l.reset()})});
//# sourceMappingURL=index.js.map
