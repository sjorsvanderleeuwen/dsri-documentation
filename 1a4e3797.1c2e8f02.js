(window.webpackJsonp=window.webpackJsonp||[]).push([[10,12,15],{165:function(e,t,a){"use strict";a.r(t);var n=a(203),r=a(204),c=a.n(r),l=a(0),o=a.n(l),s=a(22),i=a(179),u=a(25),m=a(172),f=a(175),h=a(9);var d=function(){var e=Object(f.useHistory)(),t=Object(f.useLocation)(),a=Object(s.default)().siteConfig.baseUrl;return{searchValue:h.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(a){var n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:function(e){return a+"search?q="+encodeURIComponent(e)}}},p=a(212),g=a(226),b=a(205),E=a(227),v=a(214),j=a(215),y=a(77),O=a.n(y);function k(e){var t=e.searchResult,a=t.document,n=t.type,r=t.page,c=t.tokens,l=t.metadata,s=0===n,i=2===n,u=(s?a.b:r.b).slice(),f=i?a.s:a.t;return s||u.push(r.t),o.a.createElement("article",{className:O.a.searchResultItem},o.a.createElement("h2",null,o.a.createElement(m.a,{to:a.u+(a.h||""),dangerouslySetInnerHTML:{__html:i?Object(b.a)(f,c):Object(E.a)(f,Object(v.a)(l,"t"),c,100)}})),u.length>0&&o.a.createElement("p",{className:O.a.searchResultItemPath},u.join(" \u203a ")),i&&o.a.createElement("p",{className:O.a.searchResultItemSummary,dangerouslySetInnerHTML:{__html:Object(E.a)(a.t,Object(v.a)(l,"t"),c,100)}}))}t.default=function(){var e=Object(s.default)().siteConfig.baseUrl,t=d(),a=t.searchValue,r=t.updateSearchPath,m=Object(l.useState)(a),f=m[0],h=m[1],b=Object(l.useState)(),E=b[0],v=b[1],y=Object(l.useState)(),_=y[0],w=y[1],S=Object(l.useMemo)((function(){return f?'Search results for "'+f+'"':"Search the documentation"}),[f]);Object(l.useEffect)((function(){r(f),E&&(f?E(f,(function(e){w(e)})):w(void 0))}),[f,E]);var N=Object(l.useCallback)((function(e){h(e.target.value)}),[]);return Object(l.useEffect)((function(){a&&a!==f&&h(a)}),[a]),Object(l.useEffect)((function(){function t(){return(t=Object(n.a)(c.a.mark((function t(){var a,n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.a)(e);case 2:a=t.sent,n=a.wrappedIndexes,r=a.zhDictionary,v((function(){return Object(g.a)(n,r,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),o.a.createElement(i.a,{title:S},o.a.createElement(u.a,null,o.a.createElement("meta",{property:"robots",content:"noindex, follow"})),o.a.createElement("div",{className:"container margin-vert--lg"},o.a.createElement("h1",null,S),o.a.createElement("form",null,o.a.createElement("input",{type:"search",name:"q",className:O.a.searchQueryInput,"aria-label":"Search",onChange:N,value:f,autoComplete:"off",autoFocus:!0})),!E&&f&&o.a.createElement("div",null,o.a.createElement(j.a,null)),_&&(_.length>0?o.a.createElement("p",null,_.length," document",1===_.length?"":"s"," found"):o.a.createElement("p",null,"No documents were found")),o.a.createElement("section",null,_&&_.map((function(e){return o.a.createElement(k,{key:e.document.i,searchResult:e})})))))}},178:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"f",(function(){return o})),a.d(t,"e",(function(){return s}));a(176);var n=["en"],r=!1,c=null,l="d1bffb06",o=8,s=50},181:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),l=a.n(c),o=a(170),s=a(172),i=a(171),u=a(173),m=a(2);a(54);function f(e){var t=e.to,a=e.href,c=e.label,o=e.prependBaseUrlToHref,i=Object(r.a)(e,["to","href","label","prependBaseUrlToHref"]),m=Object(u.a)(t),f=Object(u.a)(a,{forcePrependBaseUrl:!0});return l.a.createElement(s.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:o?f:a}:{to:m},i),c)}t.a=function(){var e,t=Object(i.useThemeConfig)().footer,a=Object(m.l)(),n=t||{},r=n.copyright,c=n.links,s=void 0===c?[]:c,h=n.logo,d=void 0===h?{}:h;return Object(u.a)(d.src),t?(a.pathname,l.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===t.style})},l.a.createElement("div",{className:"container"},s&&s.length>0&&l.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return l.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(f,e))}))):null)}))),(d||r)&&l.a.createElement("div",{className:"text--center"},l.a.createElement("div",null,l.a.createElement("a",((e={rel:"license",href:"https://creativecommons.org/licenses/by/4.0/",title:"Creative Commons Attribution 4.0 International license",target:"_blank"}).rel="noopener noreferrer",e),l.a.createElement("img",{src:"/dsri-documentation/img/cc-by.svg",alt:"cc by license"}))),l.a.createElement("div",{style:{marginBottom:"10px"},dangerouslySetInnerHTML:{__html:r}}),l.a.createElement("div",{style:{marginBottom:"10px",color:"grey"}},"We track page views and users demographics using Google Analytics to improve our users experience. ",l.a.createElement("a",{href:"https://policies.google.com/technologies/partner-sites"},"See how Google uses collected informations"),".",l.a.createElement("br",null),"You can prevent Google Analytics tracking by enabling ",l.a.createElement("a",{href:"https://blog.mozilla.org/blog/2019/06/04/firefox-now-available-with-enhanced-tracking-protection-by-default/"},"Firefox Tracking Protection"),", installing ",l.a.createElement("a",{href:"https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=fr"},"uBlock Origin add-on"),", or using the official ",l.a.createElement("a",{href:"https://tools.google.com/dlpage/gaoptout/"},"Google Analytics Opt-out add-on"),"."))))):null}}}]);