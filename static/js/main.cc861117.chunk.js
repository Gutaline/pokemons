(this.webpackJsonppokemons=this.webpackJsonppokemons||[]).push([[0],{14:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),a=c(9),r=c.n(a),n=(c(14),c(3)),o=c.n(n),l=c(6),j=c(7),b=c(2),u=c.p+"static/media/logo.0444b39a.png",d=c.p+"static/media/ball-1.49e2fb42.png",m=c(0),p=function(e){var t=e.burger,c=e.setBurger;return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("div",{className:"header-logo_ball",children:Object(m.jsx)("img",{src:d,alt:"ball"})}),Object(m.jsx)("div",{className:"header-logo__pokeman",children:Object(m.jsx)("img",{src:u,alt:"pokemon"})}),Object(m.jsx)("div",{className:"burger-menu",onClick:function(){c(!t)},children:Object(m.jsx)("span",{})})]})},f=c.p+"static/media/Heart1.c0316ea0.png",h=function(e){var t=e.setMobile,c=e.setBurger,i=e.setFilter,a=e.setFavoritesVisible,r=e.burger,n=e.itemClass,o=e.itemAbility,l=s.a.useState(!1),j=Object(b.a)(l,2),u=j[0],d=j[1],p=s.a.useState(!1),h=Object(b.a)(p,2),O=h[0],v=h[1];return Object(m.jsxs)("div",{className:r?"categories active":"categories",children:[Object(m.jsxs)("div",{className:"categories-favorites__wrapper",onClick:function(){a(!0)},children:[Object(m.jsx)("img",{className:"categories-img",src:f,alt:"heart"}),Object(m.jsx)("div",{className:"categories-favorites",onClick:function(){c(!1),t(!1)},children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})]}),Object(m.jsx)("div",{className:"title",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(m.jsxs)("ul",{className:"categoriesList",children:[Object(m.jsx)("li",{onClick:function(){i("All"),a(!1),c(!1),t(!1)},children:"\u0412\u0441\u0435 \u043f\u043e\u043a\u0435\u043c\u043e\u043d\u044b"}),Object(m.jsxs)("li",{onClick:function(){return d(!u)},children:["\u041a\u043b\u0430\u0441\u0441\u044b",u&&Object(m.jsx)("ul",{children:n.map((function(e,s){return Object(m.jsx)("li",{onClick:function(){i("".concat(e)),a(!1),c(!1),t(!1)},children:e},"".concat(e,"_").concat(s))}))})]}),Object(m.jsxs)("li",{onClick:function(){return v(!O)},children:["C\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",O&&Object(m.jsx)("ul",{children:o.map((function(e,s){return Object(m.jsx)("li",{onClick:function(){i("".concat(e)),a(!1),c(!1),t(!1)},children:e},"".concat(e,"_").concat(s))}))})]})]})]})},O=function(e){var t=e.id,c=e.name,i=e.type,s=e.image,a=e.deepState,r=e.favor,n=e.setShowHeartDescr,o=e.setMobile;return Object(m.jsxs)("button",{className:"pokemon-cart",onClick:function(){a(t),o(!0),n(!r)},children:[Object(m.jsx)("div",{children:Object(m.jsxs)("span",{children:["\u2116",t]})}),Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:s,alt:"pokemon"})}),Object(m.jsx)("div",{children:Object(m.jsxs)("strong",{className:"pokemon-cart__name",children:[" ",c]})}),Object(m.jsxs)("div",{children:["Class: ",i]}),r&&Object(m.jsx)("div",{className:"pokemon-cart__heart ",children:Object(m.jsx)("img",{src:f,alt:"like"})})]})},v=function(e){var t=e.pokemonsList,c=e.deepState,i=e.filter,a=e.favorites,r=e.favoritesVisible,n=e.setShowHeartDescr,o=e.setMobile,l=e.mobile,j=s.a.useState(""),u=Object(b.a)(j,2),d=u[0],p=u[1],f=s.a.useState(["name"]),h=Object(b.a)(f,1)[0];return Object(m.jsxs)("div",{className:l?"selectItems mobile":"selectItems",children:[Object(m.jsx)("div",{className:"search-wrapper",children:Object(m.jsx)("label",{htmlFor:"search-form",children:Object(m.jsx)("input",{type:"search",name:"search-form",id:"search-form",className:"search-input",placeholder:"Search for...",value:d,onChange:function(e){return p(e.target.value)}})})}),r?a.length>0?a.map((function(e,t){return Object(m.jsx)(O,{id:e.id,name:e.name,image:e.image,type:e.type,deepState:c,favor:e.favor,setShowHeartDescr:n,setMobile:o},t)})):Object(m.jsx)("div",{children:" \u0423 \u0432\u0430\u0441 \u0442\u0443\u0442 \u043f\u0443\u0441\u0442\u043e :("}):function(e){return e.filter((function(e){return e.types[0].type.name===i||e.abilities[0].ability.name===i||"All"===i?h.some((function(t){return e[t].toString().toLowerCase().indexOf(d.toLowerCase())>-1})):void 0}))}(t).map((function(e,t){return Object(m.jsx)(O,{id:e.id,name:e.name,image:e.sprites.other.dream_world.front_default,type:e.types[0].type.name,deepState:c,favor:e.favor,setShowHeartDescr:n,setMobile:o},t)}))]})},x=function(e){var t=e.id,c=e.name,i=e.image,s=e.type,a=e.ability,r=e.abilityDescr,n=e.favorites,o=e.showHeartDescr,j=e.setShowHeartDescr,b=e.allDescr,u=e.mobile,d=e.setMobile;return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:u?"view-description__mobile":"view-description",children:[Object(m.jsx)("div",{className:"view-description__name",children:c}),Object(m.jsx)("div",{className:"view-description__image",children:Object(m.jsx)("img",{src:i,alt:""})}),Object(m.jsxs)("div",{className:"view-description__type",children:["Class:",s]}),Object(m.jsxs)("div",{className:"view-description__ability",children:["Ability: ",Object(m.jsx)("span",{children:a})]}),Object(m.jsxs)("div",{className:"view-description__abilityDescr",children:[" ",r]}),Object(m.jsxs)("div",{className:"view-description__heart",children:[Object(m.jsx)("div",{onClick:function(){return function(e){if(e)n((function(e){return[].concat(Object(l.a)(e),[{id:t,name:c,image:i,type:s,favor:!0}])})),j(!e);else{var a=JSON.parse(localStorage.getItem("poki"));a.forEach((function(e,c){e.id===t&&a.splice(c,1)})),n(a),j(!e),b.favor=!1}}(o)},children:Object(m.jsx)("img",{className:b.favor?"view-description__heart--active":"view-description__heart--noactive",src:f,alt:"heart",onClick:function(){b.favor=!0}})}),Object(m.jsx)("div",{className:"view-description__back",children:Object(m.jsx)("span",{onClick:function(){d(!1)},children:"\u041d\u0430\u0437\u0430\u0434"})})]})]})})},g=function(e){var t=e.myState,c=e.pokiDescription,i=e.favorites,s=e.showHeartDescr,a=e.setShowHeartDescr,r=e.mobile,n=e.setMobile;return Object(m.jsx)("div",{className:"view",children:t&&Object(m.jsx)(x,{favorites:i,allDescr:c,ability:c.abilities[0].ability.name,abilityDescr:c.abildesr[1].effect,id:c.id,name:c.name,image:c.sprites.other.dream_world.front_default,type:c.types[0].type.name,showHeartDescr:s,setShowHeartDescr:a,mobile:r,setMobile:n})})},w=function(e,t){var c=Object(i.useState)((function(){try{var c=window.localStorage.getItem(e);return c?JSON.parse(c):t}catch(i){return console.log(i),t}})),s=Object(b.a)(c,2),a=s[0],r=s[1];return[a,function(t){try{var c=t instanceof Function?t(a):t;r(c),window.localStorage.setItem(e,JSON.stringify(c))}catch(i){console.log(i)}}]},k=function(e){var t=e.pokemonsList,c=Object(i.useState)(),s=Object(b.a)(c,2),a=s[0],r=s[1],n=Object(i.useState)("All"),o=Object(b.a)(n,2),l=o[0],j=o[1],u=Object(i.useState)(!1),d=Object(b.a)(u,2),f=d[0],O=d[1],x=Object(i.useState)(!1),k=Object(b.a)(x,2),y=k[0],S=k[1],_=w("poki",[]),N=Object(b.a)(_,2),C=N[0],D=N[1],H=Object(i.useState)(!0),M=Object(b.a)(H,2),A=M[0],I=M[1],L=Object(i.useState)(!1),E=Object(b.a)(L,2),F=E[0],J=E[1];return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(p,{burger:F,setBurger:J}),Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)(h,{setFilter:j,setFavoritesVisible:S,burger:F,setBurger:J,setMobile:O,itemClass:["grass","normal","fire","water","bug"],itemAbility:["overgroth","blaze","shield-dust","shed-skin","compound-eyes","swarm","keen-eye","run-away","torrent"]}),Object(m.jsx)(v,{pokemonsList:t,deepState:r,filter:l,favorites:C,favoritesVisible:y,setShowHeartDescr:I,setMobile:O,mobile:f}),Object(m.jsx)(g,{myState:a,pokiDescription:t[a-1],favorites:D,showHeartDescr:A,setShowHeartDescr:I,mobile:f,setMobile:O})]})]})},y=function(){var e=Object(i.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)("https://pokeapi.co/api/v2/pokemon?limit=20"),r=Object(b.a)(a,2),n=r[0],u=r[1],d=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c,i,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return(a=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.forEach(function(){var e=Object(j.a)(o.a.mark((function e(t){var c,i,a,r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t.name));case 2:return c=e.sent,e.next=5,c.json();case 5:return i=e.sent,e.next=8,fetch("https://pokeapi.co/api/v2/ability/".concat(i.abilities[0].ability.name));case 8:return a=e.sent,e.next=11,a.json();case 11:r=e.sent,n=r.effect_entries,i.abildesr=n,s((function(e){return[].concat(Object(l.a)(e),[i])}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)},i=function(e){return a.apply(this,arguments)},e.next=4,fetch(n);case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,u(c.next),i(c.results);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.sort((function(e,t){return e.id-t.id})),Object(i.useEffect)((function(){d()}),[]),function(){var e=JSON.parse(localStorage.getItem("poki")),t=[];e&&(e.forEach((function(e,c){t[c]=e.id})),c.forEach((function(e){t.includes(e.id)&&(e.favor=!0)})))}(),Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(k,{pokemonsList:c})})};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.cc861117.chunk.js.map