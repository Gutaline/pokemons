(this.webpackJsonppokemons=this.webpackJsonppokemons||[]).push([[0],{14:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),r=c(9),s=c.n(r),a=(c(14),c(3)),o=c.n(a),l=c(6),j=c(7),d=c(2),u=c.p+"static/media/logo.0444b39a.png",b=c.p+"static/media/ball-1.49e2fb42.png",h=c(0),f=function(e){var t=e.burger,c=e.setBurger;return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("div",{className:"header-logo_ball",children:Object(h.jsx)("img",{src:b,alt:"ball"})}),Object(h.jsx)("div",{className:"header-logo__pokeman",children:Object(h.jsx)("img",{src:u,alt:"pokemon"})}),Object(h.jsx)("div",{className:"burger-menu",onClick:function(){c(!t)},children:Object(h.jsx)("span",{})})]})},p=c.p+"static/media/Heart1.c0316ea0.png",m=function(e){var t=e.setFilter,c=e.setFavoritesVisible,i=e.burger,r=n.a.useState(!1),s=Object(d.a)(r,2),a=s[0],o=s[1],l=n.a.useState(!1),j=Object(d.a)(l,2),u=j[0],b=j[1];return Object(h.jsxs)("div",{className:i?"categories active":"categories",children:[Object(h.jsxs)("div",{className:"categories-favorites__wrapper",onClick:function(){c(!0)},children:[Object(h.jsx)("img",{className:"categories-img",src:p,alt:"heart"}),Object(h.jsx)("div",{className:"categories-favorites",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})]}),Object(h.jsx)("div",{className:"title",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(h.jsxs)("ul",{className:"categoriesList",children:[Object(h.jsx)("li",{onClick:function(){t("All"),c(!1)},children:"\u0412\u0441\u0435 \u043f\u043e\u043a\u0435\u043c\u043e\u043d\u044b"}),Object(h.jsxs)("li",{onClick:function(){return o(!a)},children:["\u041a\u043b\u0430\u0441\u0441\u044b",a&&Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{onClick:function(){t("grass"),c(!1)},children:"Grass"}),Object(h.jsx)("li",{onClick:function(){t("normal"),c(!1)},children:"Normal"}),Object(h.jsx)("li",{onClick:function(){t("fire"),c(!1)},children:"Fire"}),Object(h.jsx)("li",{onClick:function(){t("water"),c(!1)},children:"Water"}),Object(h.jsx)("li",{onClick:function(){t("bug"),c(!1)},children:"Bug"})]})]}),Object(h.jsxs)("li",{onClick:function(){return b(!u)},children:["C\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",u&&Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{onClick:function(){t("overgrow"),c(!1)},children:"Overgroth"}),Object(h.jsx)("li",{onClick:function(){t("blaze"),c(!1)},children:"Blaze"}),Object(h.jsx)("li",{onClick:function(){t("shield-dust"),c(!1)},children:"Shield-dust"}),Object(h.jsx)("li",{onClick:function(){t("shed-skin"),c(!1)},children:"Shed-skin"}),Object(h.jsx)("li",{onClick:function(){t("compound-eyes"),c(!1)},children:"Compound-eyes"}),Object(h.jsx)("li",{onClick:function(){t("swarm"),c(!1)},children:"Swarm"}),Object(h.jsx)("li",{onClick:function(){t("keen-eye"),c(!1)},children:"Keen-eye"}),Object(h.jsx)("li",{onClick:function(){t("run-away"),c(!1)},children:"Run-away"}),Object(h.jsx)("li",{onClick:function(){t("torrent"),c(!1)},children:"Torrent"})]})]})]})]})},O=function(e){var t=e.id,c=e.name,i=e.type,n=e.image,r=e.deepState,s=e.favor,a=e.setShowHeartDescr;return Object(h.jsxs)("button",{className:"pokemon-cart",onClick:function(){r(t),a(!s)},children:[Object(h.jsx)("div",{children:Object(h.jsxs)("span",{children:["\u2116",t]})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:n,alt:"pokemon"})}),Object(h.jsx)("div",{children:Object(h.jsxs)("strong",{className:"pokemon-cart__name",children:[" ",c]})}),Object(h.jsxs)("div",{children:["Class: ",i]}),s&&Object(h.jsx)("div",{className:"pokemon-cart__heart ",children:Object(h.jsx)("img",{src:p,alt:"like"})})]})},v=function(e){var t=e.pokemonsList,c=e.deepState,i=e.filter,r=e.favorites,s=e.favoritesVisible,a=e.setShowHeartDescr,o=n.a.useState(""),l=Object(d.a)(o,2),j=l[0],u=l[1],b=n.a.useState(["name"]),f=Object(d.a)(b,1)[0];return Object(h.jsxs)("div",{className:"selectItems",children:[Object(h.jsx)("div",{className:"search-wrapper",children:Object(h.jsx)("label",{htmlFor:"search-form",children:Object(h.jsx)("input",{type:"search",name:"search-form",id:"search-form",className:"search-input",placeholder:"Search for...",value:j,onChange:function(e){return u(e.target.value)}})})}),s?r.length>0?r.map((function(e,t){return Object(h.jsx)(O,{id:e.id,name:e.name,image:e.image,type:e.type,deepState:c,favor:e.favor,setShowHeartDescr:a},t)})):Object(h.jsx)("div",{children:" \u0423 \u0432\u0430\u0441 \u0442\u0443\u0442 \u043f\u0443\u0441\u0442\u043e :("}):function(e){return e.filter((function(e){return e.types[0].type.name===i||e.abilities[0].ability.name===i||"All"===i?f.some((function(t){return e[t].toString().toLowerCase().indexOf(j.toLowerCase())>-1})):void 0}))}(t).map((function(e,t){return Object(h.jsx)(O,{id:e.id,name:e.name,image:e.sprites.other.dream_world.front_default,type:e.types[0].type.name,deepState:c,favor:e.favor,setShowHeartDescr:a},t)}))]})},x=function(e){var t=e.id,c=e.name,i=e.image,n=e.type,r=e.ability,s=e.abilityDescr,a=e.favorites,o=e.showHeartDescr,j=e.setShowHeartDescr,d=e.allDescr;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"view-description",children:[Object(h.jsx)("div",{className:"view-description__name",children:c}),Object(h.jsx)("div",{className:"view-description__image",children:Object(h.jsx)("img",{src:i,alt:""})}),Object(h.jsxs)("div",{className:"view-description__type",children:["Class:",n]}),Object(h.jsxs)("div",{className:"view-description__ability",children:["Ability: ",Object(h.jsx)("span",{children:r})]}),Object(h.jsxs)("div",{className:"view-description__abilityDescr",children:[" ",s]}),Object(h.jsx)("div",{className:"view-description__heart",children:Object(h.jsx)("div",{onClick:function(){return function(e){if(e)a((function(e){return[].concat(Object(l.a)(e),[{id:t,name:c,image:i,type:n,favor:!0}])})),j(!e);else{var r=JSON.parse(localStorage.getItem("poki"));r.forEach((function(e,c){e.id===t&&r.splice(c,1)})),a(r),j(!e),d.favor=!1}}(o)},children:Object(h.jsx)("img",{className:d.favor?"view-description__heart--active":"view-description__heart--noactive",src:p,alt:"heart",onClick:function(){d.favor=!0}})})})]})})},g=function(e){var t=e.myState,c=e.pokiDescription,i=e.favorites,n=e.showHeartDescr,r=e.setShowHeartDescr;return Object(h.jsx)("div",{className:"view",children:t&&Object(h.jsx)(x,{favorites:i,allDescr:c,ability:c.abilities[0].ability.name,abilityDescr:c.abildesr[1].effect,id:c.id,name:c.name,image:c.sprites.other.dream_world.front_default,type:c.types[0].type.name,showHeartDescr:n,setShowHeartDescr:r})})},k=function(e,t){var c=Object(i.useState)((function(){try{var c=window.localStorage.getItem(e);return c?JSON.parse(c):t}catch(i){return console.log(i),t}})),n=Object(d.a)(c,2),r=n[0],s=n[1];return[r,function(t){try{var c=t instanceof Function?t(r):t;s(c),window.localStorage.setItem(e,JSON.stringify(c))}catch(i){console.log(i)}}]},w=function(e){var t=e.pokemonsList,c=Object(i.useState)(),n=Object(d.a)(c,2),r=n[0],s=n[1],a=Object(i.useState)("All"),o=Object(d.a)(a,2),l=o[0],j=o[1],u=Object(i.useState)(!1),b=Object(d.a)(u,2),p=b[0],O=b[1],x=k("poki",[]),w=Object(d.a)(x,2),y=w[0],S=w[1],N=Object(i.useState)(!0),_=Object(d.a)(N,2),C=_[0],D=_[1],H=Object(i.useState)(!1),F=Object(d.a)(H,2),L=F[0],E=F[1];return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(f,{burger:L,setBurger:E}),Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)(m,{setFilter:j,setFavoritesVisible:O,burger:L}),Object(h.jsx)(v,{pokemonsList:t,deepState:s,filter:l,favorites:y,favoritesVisible:p,setShowHeartDescr:D}),Object(h.jsx)(g,{myState:r,pokiDescription:t[r-1],favorites:S,showHeartDescr:C,setShowHeartDescr:D})]})]})},y=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)("https://pokeapi.co/api/v2/pokemon?limit=20"),s=Object(d.a)(r,2),a=s[0],u=s[1],b=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c,i,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(){return(r=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.forEach(function(){var e=Object(j.a)(o.a.mark((function e(t){var c,i,r,s,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t.name));case 2:return c=e.sent,e.next=5,c.json();case 5:return i=e.sent,e.next=8,fetch("https://pokeapi.co/api/v2/ability/".concat(i.abilities[0].ability.name));case 8:return r=e.sent,e.next=11,r.json();case 11:s=e.sent,a=s.effect_entries,i.abildesr=a,n((function(e){return[].concat(Object(l.a)(e),[i])}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)},i=function(e){return r.apply(this,arguments)},e.next=4,fetch(a);case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,u(c.next),i(c.results);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.sort((function(e,t){return e.id-t.id})),Object(i.useEffect)((function(){b()}),[]),function(){var e=JSON.parse(localStorage.getItem("poki")),t=[];e&&(e.forEach((function(e,c){t[c]=e.id})),c.forEach((function(e){t.includes(e.id)&&(e.favor=!0)})))}(),Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(w,{pokemonsList:c})})};s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.34bce43c.chunk.js.map