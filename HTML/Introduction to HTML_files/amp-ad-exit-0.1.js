(self.AMP=self.AMP||[]).push({n:"amp-ad-exit",v:"1909181902540",f:(function(AMP,_){
var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},k;if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var m;a:{var ba={a:!0},p={};try{p.__proto__=ba;m=p.a;break a}catch(a){}m=!1}k=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=k;
function r(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(q)q(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.S=b.prototype}function t(a,b){this.name=a;this.type=b}t.prototype.filter=function(){};t.prototype.onLayoutMeasure=function(){};function ca(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function u(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var da=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function v(a){var b=Object.create(null);if(!a)return b;for(var c;c=da.exec(a);){var d=u(c[1],c[1]),e=c[2]?u(c[2],c[2]):"";b[d]=e}return b};var w="";
function ea(){var a,b=a||self;if(b.__AMP_MODE)var c=b.__AMP_MODE;else{c=b;var d=self.AMP_CONFIG||{},e=!!d.test||!1,f=c.__karma__&&c.__karma__.config.amp.testOnIe,h=v(c.location.originalHash||c.location.hash);d=d.spt;var g=v(c.location.search);w||(w=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011909181902540");c={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(h.development)||c.AMP_DEV_MODE),examiner:"2"==h.development,filter:h.filter,geoOverride:h["amp-geo"],userLocationOverride:h["amp-user-location"],
minified:!0,lite:void 0!=g.amp_lite,test:e,testIe:f,log:h.log,version:"1909181902540",rtvVersion:w,singlePassType:d};c=b.__AMP_MODE=c}return c};var fa=Object.prototype.toString;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var x=self.__AMP_LOG;function y(){if(!x.user)throw Error("failed to call initLogConstructor");return x.user}function z(){if(x.dev)return x.dev;throw Error("failed to call initLogConstructor");}function A(a,b,c,d){y().assert(a,b,c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function B(){var a=100;this.M=a;this.D=this.H=0;this.o=Object.create(null)}B.prototype.has=function(a){return!!this.o[a]};B.prototype.get=function(a){var b=this.o[a];if(b)return b.access=++this.D,b.payload};B.prototype.put=function(a,b){this.has(a)||this.H++;this.o[a]={payload:b,access:this.D};if(!(this.H<=this.M)){z().warn("lru-cache","Trimming LRU cache");a=this.o;var c=this.D+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.H--)}};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});var C,D;
function E(a){var b;C||(C=self.document.createElement("a"),D=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new B));var c=b?null:D,d=C;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;
e.origin=d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c&&c.put(a,e);a=e}return a};function ha(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){z().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function ia(a){var b=a.ownerDocument.defaultView,c=F(b),d=b!=c;var e=c;if(e.__AMP__EXPERIMENT_TOGGLES)var f=e.__AMP__EXPERIMENT_TOGGLES;else{e.__AMP__EXPERIMENT_TOGGLES=Object.create(null);f=e.__AMP__EXPERIMENT_TOGGLES;if(e.AMP_CONFIG)for(var h in e.AMP_CONFIG){var g=e.AMP_CONFIG[h];"number"===typeof g&&0<=g&&1>=g&&(f[h]=Math.random()<g)}if(e.AMP_CONFIG&&Array.isArray(e.AMP_CONFIG["allow-doc-opt-in"])&&0<e.AMP_CONFIG["allow-doc-opt-in"].length&&(h=e.AMP_CONFIG["allow-doc-opt-in"],g=e.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){g=
g.getAttribute("content").split(",");for(var l=0;l<g.length;l++)-1!=h.indexOf(g[l])&&(f[g[l]]=!0)}Object.assign(f,ha(e));if(e.AMP_CONFIG&&Array.isArray(e.AMP_CONFIG["allow-url-opt-in"])&&0<e.AMP_CONFIG["allow-url-opt-in"].length)for(h=e.AMP_CONFIG["allow-url-opt-in"],e=v(e.location.originalHash||e.location.hash),g=0;g<h.length;g++)l=e["e-"+h[g]],"1"==l&&(f[h[g]]=!0),"0"==l&&(f[h[g]]=!1)}var n=!!f["ampdoc-fie"];d&&!n?a=G(b,"url-replace")?H(b,"url-replace"):null:(a=I(a),a=J(a),a=G(a,"url-replace")?
H(a,"url-replace"):null);return a}function F(a){return a.__AMP_TOP||(a.__AMP_TOP=a)}function I(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=F(b);a=H(b,"ampdoc").getAmpDoc(a)}return a}function J(a){a=I(a);return a.isSingleDoc()?a.win:a}function H(a,b){G(a,b);var c=K(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function ja(a){var b;(b=K(a)["host-exit"])?b.promise?b=b.promise:(H(a,"host-exit"),b=b.promise=Promise.resolve(b.obj)):b=null;var c=b;if(c)return c;a=K(a);a["host-exit"]=ka();return a["host-exit"].promise}function K(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function G(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}
function ka(){var a=new ca,b=a,c=b.promise,d=b.resolve;b=b.reject;c.catch(function(){});return{obj:null,promise:c,resolve:d,reject:b,context:null,ctor:null}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function L(a,b,c){var d;try{var e=a.open(b,c,d)}catch(h){z().error("DOM","Failed to open url on target: ",c,h)}if(!(c=e||"_top"==c)){c=d||"";var f;"number"!==typeof f&&(f=0);c=f+8>c.length?!1:-1!==c.indexOf("noopener",f)}c||a.open(b,"_top")};var M;function la(a,b){var c=void 0,d=a,e=b;var f=function(a){try{return e(a)}catch(n){throw self.__AMP_REPORT_ERROR(n),n;}};var h=ma(),g=!1;c&&(g=c.capture);d.addEventListener("message",f,h?c:g);return function(){d&&d.removeEventListener("message",f,h?c:g);f=d=e=null}}function ma(){if(void 0!==M)return M;M=!1;try{var a={get capture(){M=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return M};function na(a,b){return la(a,b)};var N={bg:"https://tpc.googlesyndication.com/b4a/b4a-runner.html",moat:"https://z.moatads.com/ampanalytics093284/iframe.html"};Object.assign({},N,{bg:"https://tpc.googlesyndication.com/b4a/experimental/b4a-runner.html"});function oa(a){A("object"==typeof a);if(a.filters){var b=a.filters,c=["clickDelay","clickLocation","inactiveElement"],d;for(d in b)A("object"==typeof b[d],"Filter specification '%s' is malformed",d),A(-1!=c.indexOf(b[d].type),"Supported filters: "+c.join(", "))}else a.filters={};if(a.transport){b=a.transport;for(var e in b)A("beacon"==e||"image"==e,"Unknown transport option: '"+e+"'"),A("boolean"==typeof b[e])}else a.transport={};e=a.targets;A("object"==typeof e,"'targets' must be an object");for(var f in e)pa(f,
e[f],a);return a}function pa(a,b,c){A("string"==typeof b.finalUrl,"finalUrl of target '%s' must be a string",a);b.filters&&b.filters.forEach(function(a){A(c.filters[a],"filter '%s' not defined",a)});if(b.vars){a=/^_[a-zA-Z0-9_-]+$/;for(var d in b.vars)A(a.test(d),"'%s' must match the pattern '%s'",d,a)}}function O(a){return y().assertString(N[a],"Unknown or invalid vendor "+a+", note that vendor must use transport: iframe")};function P(a,b,c){t.call(this,a,b.type);A("clickDelay"==b.type&&"number"==typeof b.delay&&0<b.delay,"Invalid ClickDelay spec");this.spec=b;this.intervalStart=Date.now();b.startTimingEvent&&(c.performance&&c.performance.timing?void 0==c.performance.timing[b.startTimingEvent]?z().warn("amp-ad-exit","Invalid performance timing event type "+b.startTimingEvent+", falling back to now"):this.intervalStart=c.performance.timing[b.startTimingEvent]:z().warn("amp-ad-exit","Browser does not support performance timing, falling back to now"))}
r(P,t);P.prototype.filter=function(){return Date.now()-this.intervalStart>=this.spec.delay};function Q(a){var b=1E3;return{type:"clickDelay",delay:b,startTimingEvent:a}};function R(a,b,c){t.call(this,a,b.type);A("clickLocation"==b.type&&("undefined"===typeof b.left||"number"===typeof b.left)&&("undefined"===typeof b.right||"number"===typeof b.right)&&("undefined"===typeof b.top||"number"===typeof b.top)&&("undefined"===typeof b.bottom||"number"===typeof b.bottom)&&("undefined"===typeof b.relativeTo||"string"===typeof b.relativeTo),"Invaid ClickLocation spec");this.N=b.left||0;this.O=b.right||0;this.R=b.top||0;this.L=b.bottom||0;this.G=b.relativeTo;this.I=c;this.h=
{top:0,right:0,bottom:0,left:0}}r(R,t);R.prototype.filter=function(a){return a.clientX>=this.h.left&&a.clientX<=this.h.right&&a.clientY>=this.h.top&&a.clientY<=this.h.bottom?!0:!1};
R.prototype.onLayoutMeasure=function(){var a=this;this.I.getVsync().measure(function(){var b=a.I.win;if(a.G){var c=b.document.querySelector(a.G);A(c,"relativeTo element "+a.G+" not found.");var d=c.getBoundingClientRect();a.h.left=d.left;a.h.top=d.top;a.h.bottom=d.bottom;a.h.right=d.right}else a.h.left=0,a.h.top=0,a.h.bottom=b.innerHeight,a.h.right=b.innerWidth;a.h.left+=a.N;a.h.top+=a.R;a.h.right-=a.O;a.h.bottom-=a.L})};function S(a,b){t.call(this,a,b.type);A("inactiveElement"==b.type&&"string"==typeof b.selector,"Invalid InactiveElementspec");this.P=b.selector}r(S,t);S.prototype.filter=function(a){a=a.target;var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return!(b&&b.call(a,this.P))};function T(a,b,c){switch(b.type){case "clickDelay":return new P(a,b,c.win);case "clickLocation":return new R(a,b,c);case "inactiveElement":return new S(a,b)}};function qa(a,b){try{a:{var c=(a.ownerDocument||a).defaultView,d=b||F(c);if(c&&c!=d&&F(c)==d)try{var e=c.frameElement;break a}catch(h){}e=null}var f=e.parentElement;if("AMP-AD"==f.nodeName)return String(f.getResourceId())}catch(h){}return null};function U(a){a=AMP.BaseElement.call(this,a)||this;a.J={};a.w=[];a.A={beacon:!0,image:!0};a.C={};a.registerAction("exit",a.exit.bind(a));a.K={};a.B=null;a.m=null;a.F={};return a}r(U,AMP.BaseElement);
U.prototype.exit=function(a){var b=this,c=a.args;a=a.event;var d=this.J[c.target];A(d,"Exit target not found: '"+c.target+"'");A(a,"Unexpected null event");a.preventDefault();if(V(this.w,a)&&V(d.filters,a)){var e=ra(this,c,a,d);d.trackingUrls&&d.trackingUrls.map(e).forEach(function(a){b.A.beacon&&b.win.navigator.sendBeacon&&b.win.navigator.sendBeacon(a,"")||!b.A.image||(b.win.document.createElement("img").src=a)});var f=e(d.finalUrl);if(I(this.getAmpDoc()).getHeadNode().querySelector("script[host-service]"))ja(J(this.getAmpDoc())).then(function(a){return a.openUrl(f)}).catch(function(a){a.fallback&&
L(b.win,f,"_blank")});else{var h=d.behaviors&&d.behaviors.clickTarget&&"_top"==d.behaviors.clickTarget?"_top":"_blank";L(this.win,f,h)}}};
function ra(a,b,c,d){var e={CLICK_X:function(){return c.clientX},CLICK_Y:function(){return c.clientY}},f=ia(a.element),h={RANDOM:!0,CLICK_X:!0,CLICK_Y:!0};if(d.vars){var g={},l;for(l in d.vars)g.j=l,"_"==g.j[0]&&(g.l=d.vars[g.j],g.l&&(e[g.j]=function(c){return function(){if(c.l.iframeTransportSignal){var d=f.expandStringSync(c.l.iframeTransportSignal,{IFRAME_TRANSPORT_SIGNAL:function(b,c){if(!b||!c)return"";var d=a.K[b];if(d&&c in d)return d[c]}});if(c.l.iframeTransportSignal=="IFRAME_TRANSPORT_SIGNAL"+
d)z().error("amp-ad-exit","Invalid IFRAME_TRANSPORT_SIGNAL format:"+d+" (perhaps there is a space after a comma?)");else if(""!=d)return d}return c.j in b?b[c.j]:c.l.defaultValue}}(g),h[g.j]=!0)),g={l:g.l,j:g.j}}return function(a){return f.expandUrlSync(a,e,void 0,h)}}function V(a,b){return a.every(function(a){var c=a.filter(b);y().info("amp-ad-exit","Filter '"+a.name+"': "+(c?"pass":"fail"));return c})}
U.prototype.buildCallback=function(){var a=this;this.element.setAttribute("aria-hidden","true");this.w.push(T("minDelay",Q(),this));this.w.push(T("carouselBtns",{type:"inactiveElement",selector:".amp-carousel-button"},this));var b=this.element.children;A(1==b.length,"The tag should contain exactly one <script> child.");b=b[0];A("SCRIPT"==b.tagName&&b.hasAttribute("type")&&"APPLICATION/JSON"==b.getAttribute("type").toUpperCase(),'The amp-ad-exit config should be inside a <script> tag with type="application/json"');
try{var c=oa(JSON.parse(b.textContent));if("[object Object]"===fa.call(c.options)&&"string"===typeof c.options.startTimingEvent){var d=c.options.startTimingEvent;this.w.splice(0,1,T("minDelay",Q(c.options.startTimingEvent),this))}for(var e in c.filters){var f=c.filters[e];"clickDelay"==f.type&&(f.startTimingEvent=f.startTimingEvent||d);this.C[e]=T(e,f,this)}for(var h in c.targets){var g=c.targets[h];this.J[h]={finalUrl:g.finalUrl,trackingUrls:g.trackingUrls||[],vars:g.vars||{},filters:(g.filters||
[]).map(function(b){return a.C[b]}).filter(function(a){return a}),behaviors:g.behaviors||{}};for(var l in g.vars)if(g.vars[l].iframeTransportSignal){var n=g.vars[l].iframeTransportSignal.match(/IFRAME_TRANSPORT_SIGNAL\(([^,]+)/);if(n&&!(2>n.length)){var Y=n[1],W=E(O(Y)).origin;this.F[W]=this.F[W]||Y}}}this.A.beacon=!1!==c.transport.beacon;this.A.image=!1!==c.transport.image}catch(X){throw this.user().error("amp-ad-exit","Invalid JSON config",X),X;}Z(this)};U.prototype.resumeCallback=function(){Z(this)};
U.prototype.unlayoutCallback=function(){this.B&&(this.B(),this.B=null);return AMP.BaseElement.prototype.unlayoutCallback.call(this)};
function Z(a){"inabox"!=ea().runtime&&(a.m=a.m||qa(a.element,F(a.win)),a.m?a.B=na(a.getAmpDoc().win,function(b){if(a.F[b.origin]){var c=b.data;if("string"==typeof c&&0==c.indexOf("amp-")&&-1!=c.indexOf("{")){var d=c.indexOf("{");try{var e=JSON.parse(c.substr(d))}catch(h){z().error("MESSAGING","Failed to parse message: "+c,h),e=null}}else e=null;var f=e;f&&"iframe-transport-response"==f.type&&(e=f,b=b.origin,A(e.message,"Received empty response from 3p analytics frame"),A(e.creativeId,"Received malformed message from 3p analytics frame: creativeId missing"),
A(e.vendor,"Received malformed message from 3p analytics frame: vendor missing"),c=E(O(e.vendor)),A(c&&c.origin==b,"Invalid origin for vendor "+(e.vendor+": "+b)),f.creativeId==a.m&&(a.K[f.vendor]=f.message))}}):y().warn("amp-ad-exit","No friendly parent amp-ad element was found for amp-ad-exit; not in inabox case."))}U.prototype.isLayoutSupported=function(){return!0};U.prototype.onLayoutMeasure=function(){for(var a in this.C)this.C[a].onLayoutMeasure()};
(function(a){a.registerElement("amp-ad-exit",U)})(self.AMP);
})});

//# sourceMappingURL=amp-ad-exit-0.1.js.map
