import{S as t,i as e,s as a,r as n,a as r,e as c,m as s,K as i,f as o,c as l,b as d,d as m,n as u,g as h,h as f,p,j as g,t as D,k as v,l as E,o as $,L as w,I as T,A as b,q as A,u as L,v as S,w as _,x as O,y,z as M}from"./client.4fa3918d.js";import{c as x,a as C,h as H,L as I}from"./createOctokit.8a9777e9.js";function R(t,e,a){const n=t.slice();return n[9]=e[a],n}function N(t){let e,a,i,g,D,v=t[4].title+"",E=("closed"===t[4].state?t[4].metadata.start?n.i18n.incidentCompleted:n.i18n.incidentFixed:t[4].metadata.start?n.i18n.incidentScheduled:n.i18n.incidentOngoing)+"";return{c(){e=s(v),a=r(),i=c("span"),g=s(E),this.h()},l(t){e=u(t,v),a=l(t),i=d(t,"SPAN",{class:!0});var n=m(i);g=u(n,E),n.forEach(o),this.h()},h(){h(i,"class",D=T("tag ".concat(t[4].state))+" svelte-4o16l6")},m(t,n){f(t,e,n),f(t,a,n),f(t,i,n),p(i,g)},p(t,a){16&a&&v!==(v=t[4].title+"")&&b(e,v),16&a&&E!==(E=("closed"===t[4].state?t[4].metadata.start?n.i18n.incidentCompleted:n.i18n.incidentFixed:t[4].metadata.start?n.i18n.incidentScheduled:n.i18n.incidentOngoing)+"")&&b(g,E),16&a&&D!==(D=T("tag ".concat(t[4].state))+" svelte-4o16l6")&&h(i,"class",D)},d(t){t&&o(e),t&&o(a),t&&o(i)}}}function U(t){let e,a=n.i18n.incidentDetails+"";return{c(){e=s(a)},l(t){e=u(t,a)},m(t,a){f(t,e,a)},p:A,d(t){t&&o(e)}}}function V(t){let e,a,i,g,D,v,E,$,w,T,b,_=n.i18n.incidentViewOnGitHub+"";function O(t,e){return t[4].metadata.start?B:k}let y=O(t),M=y(t);function x(t,e){return t[4].metadata.start&&t[4].metadata.end?P:t[4].closed_at?F:void 0}let C=x(t),H=C&&C(t),I=t[3],N=[];for(let e=0;e<I.length;e+=1)N[e]=q(R(t,I,e));return{c(){e=c("div"),a=c("dl"),M.c(),i=L(),H&&H.c(),g=r(),D=c("div"),v=c("p"),E=c("a"),$=s(_),T=r();for(let t=0;t<N.length;t+=1)N[t].c();b=L(),this.h()},l(t){e=d(t,"DIV",{class:!0});var n=m(e);a=d(n,"DL",{});var r=m(a);M.l(r),i=L(),H&&H.l(r),r.forEach(o),g=l(n),D=d(n,"DIV",{class:!0});var c=m(D);v=d(c,"P",{class:!0});var s=m(v);E=d(s,"A",{href:!0});var h=m(E);$=u(h,_),h.forEach(o),s.forEach(o),c.forEach(o),n.forEach(o),T=l(t);for(let e=0;e<N.length;e+=1)N[e].l(t);b=L(),this.h()},h(){h(E,"href",w="https://github.com/".concat(n.owner,"/").concat(n.repo,"/issues/").concat(t[0])),h(v,"class","svelte-4o16l6"),h(D,"class","r svelte-4o16l6"),h(e,"class","f")},m(t,n){f(t,e,n),p(e,a),M.m(a,null),p(a,i),H&&H.m(a,null),p(e,g),p(e,D),p(D,v),p(v,E),p(E,$),f(t,T,n);for(let e=0;e<N.length;e+=1)N[e]&&N[e].m(t,n);f(t,b,n)},p(t,e){if(y===(y=O(t))&&M?M.p(t,e):(M.d(1),M=y(t),M&&(M.c(),M.m(a,i))),C===(C=x(t))&&H?H.p(t,e):(H&&H.d(1),H=C&&C(t),H&&(H.c(),H.m(a,null))),1&e&&w!==(w="https://github.com/".concat(n.owner,"/").concat(n.repo,"/issues/").concat(t[0]))&&h(E,"href",w),40&e){let a;for(I=t[3],a=0;a<I.length;a+=1){const n=R(t,I,a);N[a]?N[a].p(n,e):(N[a]=q(n),N[a].c(),N[a].m(b.parentNode,b))}for(;a<N.length;a+=1)N[a].d(1);N.length=I.length}},i:A,o:A,d(t){t&&o(e),M.d(),H&&H.d(),t&&o(T),S(N,t),t&&o(b)}}}function j(t){let e,a;return e=new I({}),{c(){_(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,n){y(e,t,n),a=!0},p:A,i(t){a||(E(e.$$.fragment,t),a=!0)},o(t){D(e.$$.fragment,t),a=!1},d(t){M(e,t)}}}function k(t){let e,a,r,i,l=n.i18n.incidentOpenedAt+"",h=new Date(t[4].created_at).toLocaleString()+"";return{c(){e=c("dt"),a=s(l),r=c("dd"),i=s(h)},l(t){e=d(t,"DT",{});var n=m(e);a=u(n,l),n.forEach(o),r=d(t,"DD",{});var c=m(r);i=u(c,h),c.forEach(o)},m(t,n){f(t,e,n),p(e,a),f(t,r,n),p(r,i)},p(t,e){16&e&&h!==(h=new Date(t[4].created_at).toLocaleString()+"")&&b(i,h)},d(t){t&&o(e),t&&o(r)}}}function B(t){let e,a,i,h,g,D=(new Date(t[4].metadata.start).getTime()<(new Date).getTime()?n.i18n.startedAt:n.i18n.startsAt)+"",v=new Date(t[4].metadata.start).toLocaleString()+"";return{c(){e=c("dt"),a=s(D),i=r(),h=c("dd"),g=s(v)},l(t){e=d(t,"DT",{});var n=m(e);a=u(n,D),i=l(n),n.forEach(o),h=d(t,"DD",{});var r=m(h);g=u(r,v),r.forEach(o)},m(t,n){f(t,e,n),p(e,a),p(e,i),f(t,h,n),p(h,g)},p(t,e){16&e&&D!==(D=(new Date(t[4].metadata.start).getTime()<(new Date).getTime()?n.i18n.startedAt:n.i18n.startsAt)+"")&&b(a,D),16&e&&v!==(v=new Date(t[4].metadata.start).toLocaleString()+"")&&b(g,v)},d(t){t&&o(e),t&&o(h)}}}function F(t){let e,a,r,i,l=n.i18n.incidentClosedAt+"",h=new Date(t[4].closed_at).toLocaleString()+"";return{c(){e=c("dt"),a=s(l),r=c("dd"),i=s(h)},l(t){e=d(t,"DT",{});var n=m(e);a=u(n,l),n.forEach(o),r=d(t,"DD",{});var c=m(r);i=u(c,h),c.forEach(o)},m(t,n){f(t,e,n),p(e,a),f(t,r,n),p(r,i)},p(t,e){16&e&&h!==(h=new Date(t[4].closed_at).toLocaleString()+"")&&b(i,h)},d(t){t&&o(e),t&&o(r)}}}function P(t){let e,a,r,i,l=n.i18n.duration+"",h=n.i18n.durationMin.replace(/\$DURATION/g,Math.floor((new Date(t[4].metadata.end).getTime()-new Date(t[4].metadata.start).getTime())/6e4))+"";return{c(){e=c("dt"),a=s(l),r=c("dd"),i=s(h)},l(t){e=d(t,"DT",{});var n=m(e);a=u(n,l),n.forEach(o),r=d(t,"DD",{});var c=m(r);i=u(c,h),c.forEach(o)},m(t,n){f(t,e,n),p(e,a),f(t,r,n),p(r,i)},p(t,e){16&e&&h!==(h=n.i18n.durationMin.replace(/\$DURATION/g,Math.floor((new Date(t[4].metadata.end).getTime()-new Date(t[4].metadata.start).getTime())/6e4))+"")&&b(i,h)},d(t){t&&o(e),t&&o(r)}}}function q(t){let e,a,s,i,u,g=t[5](t[9].body)+"",D=n.i18n.incidentCommentSummary.replace(/\$DATE/g,"<a href=".concat(t[9].html_url,">").concat(new Date(t[9].created_at).toLocaleString(),"</a>")).replace(/\$AUTHOR/g,"<a href=".concat(t[9].user.html_url,">@").concat(t[9].user.login,"</a>"))+"";return{c(){e=c("article"),a=c("p"),s=r(),i=c("div"),u=r(),this.h()},l(t){e=d(t,"ARTICLE",{});var n=m(e);a=d(n,"P",{class:!0}),m(a).forEach(o),s=l(n),i=d(n,"DIV",{}),m(i).forEach(o),u=l(n),n.forEach(o),this.h()},h(){h(a,"class","svelte-4o16l6")},m(t,n){f(t,e,n),p(e,a),a.innerHTML=g,p(e,s),p(e,i),i.innerHTML=D,p(e,u)},p(t,e){8&e&&g!==(g=t[5](t[9].body)+"")&&(a.innerHTML=g),8&e&&D!==(D=n.i18n.incidentCommentSummary.replace(/\$DATE/g,"<a href=".concat(t[9].html_url,">").concat(new Date(t[9].created_at).toLocaleString(),"</a>")).replace(/\$AUTHOR/g,"<a href=".concat(t[9].user.html_url,">@").concat(t[9].user.login,"</a>"))+"")&&(i.innerHTML=D)},d(t){t&&o(e)}}}function z(t){let e,a,$,w,T,b,A,L,S,_,O,y,M=n.i18n.incidentBack+"";function x(t,e){return t[2]?U:N}document.title=e=n.i18n.incidentTitle.replace("$NUMBER",t[0]);let C=x(t),H=C(t);const I=[j,V],R=[];function k(t,e){return t[1]?0:1}return b=k(t),A=R[b]=I[b](t),{c(){a=r(),$=c("h2"),H.c(),w=r(),T=c("section"),A.c(),L=r(),S=c("footer"),_=c("a"),O=s(M),this.h()},l(t){i("svelte-slinv8",document.head).forEach(o),a=l(t),$=d(t,"H2",{class:!0});var e=m($);H.l(e),e.forEach(o),w=l(t),T=d(t,"SECTION",{});var n=m(T);A.l(n),n.forEach(o),L=l(t),S=d(t,"FOOTER",{class:!0});var r=m(S);_=d(r,"A",{href:!0});var c=m(_);O=u(c,M),c.forEach(o),r.forEach(o),this.h()},h(){h($,"class","svelte-4o16l6"),h(_,"href",n.path),h(S,"class","svelte-4o16l6")},m(t,e){f(t,a,e),f(t,$,e),H.m($,null),f(t,w,e),f(t,T,e),R[b].m(T,null),f(t,L,e),f(t,S,e),p(S,_),p(_,O),y=!0},p(t,a){let[r]=a;(!y||1&r)&&e!==(e=n.i18n.incidentTitle.replace("$NUMBER",t[0]))&&(document.title=e),C===(C=x(t))&&H?H.p(t,r):(H.d(1),H=C(t),H&&(H.c(),H.m($,null)));let c=b;b=k(t),b===c?R[b].p(t,r):(g(),D(R[c],1,1,(()=>{R[c]=null})),v(),A=R[b],A?A.p(t,r):(A=R[b]=I[b](t),A.c()),E(A,1),A.m(T,null))},i(t){y||(E(A),y=!0)},o(t){D(A),y=!1},d(t){t&&o(a),t&&o($),H.d(),t&&o(w),t&&o(T),R[b].d(),t&&o(L),t&&o(S)}}}function G(t,e,a){let{number:r}=e,c=w,s=!0,i=!0;const o=x(),l=n.owner,d=n.repo;let m=[],u={};return $((async()=>{try{if(a(4,u=(await C("issue-".concat(l,"-").concat(d,"-").concat(r),(()=>o.issues.get({owner:l,repo:d,issue_number:r,sort:"created",direction:"desc"})))).data),a(4,u.metadata={},u),u.body.includes("\x3c!--")){const t=u.body.split("\x3c!--")[1].split("--\x3e")[0];t.split("\n").filter((t=>t.trim())).filter((t=>t.includes(":"))).forEach((t=>{a(4,u.metadata[t.split(/:(.+)/)[0].trim()]=t.split(/:(.+)/)[1].trim(),u)}))}}catch(t){H(t)}a(2,i=!1);try{a(3,m=(await C("issue-comments-".concat(l,"-").concat(d,"-").concat(r),(()=>o.issues.listComments({owner:l,repo:d,issue_number:r})))).data.reverse())}catch(t){H(t)}a(1,s=!1)})),t.$$set=t=>{"number"in t&&a(0,r=t.number)},[r,s,i,m,u,c]}class K extends t{constructor(t){super(),e(this,t,G,z,a,{number:0})}}function J(t){let e,a;return e=new K({props:{number:t[0]}}),{c(){_(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,n){y(e,t,n),a=!0},p(t,a){let[n]=a;const r={};1&n&&(r.number=t[0]),e.$set(r)},i(t){a||(E(e.$$.fragment,t),a=!0)},o(t){D(e.$$.fragment,t),a=!1},d(t){M(e,t)}}}async function Q(t){const{number:e}=t.params;return{number:e}}function W(t,e,a){let{number:n}=e;return t.$$set=t=>{"number"in t&&a(0,n=t.number)},[n]}class X extends t{constructor(t){super(),e(this,t,W,J,a,{number:0})}}export{X as default,Q as preload};
