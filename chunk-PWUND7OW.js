import{Aa as A,Ba as N,Ca as Pt,Da as Lt,Db as b,Ea as kt,Fa as Ft,Fb as O,Ga as Bt,Ha as Vt,Hb as pt,Ia as Ut,Ja as C,Ka as lt,Na as k,Oa as d,Ob as $,Pa as M,R,Rb as Kt,T as m,Ta as Zt,U as tt,Ua as $t,Vb as ft,W as j,Wb as Gt,Xa as D,Xb as Yt,Y as c,Yb as y,Z as I,aa as P,ca as et,cc as qt,da as it,eb as F,f as S,fa as nt,fb as B,fc as mt,ga as xt,gb as f,hb as V,ka as st,kb as w,la as ot,lc as Wt,mb as T,nb as _,nc as vt,ob as U,pa as Y,pb as ut,pc as Xt,qa as rt,qb as dt,rb as ht,sc as Jt,tb as zt,tc as gt,ua as Ht,ub as Z,va as at,vb as g,vc as q,wa as jt,wc as W,xa as L,yc as yt,za as ct}from"./chunk-ABD2XBHC.js";import{a as p,b as E}from"./chunk-SO6VPFYA.js";var wt=class extends Yt{constructor(){super(...arguments),this.supportsDOMEvents=!0}},_t=class s extends wt{static makeCurrent(){Gt(new s)}onAndCancel(e,n,t){return e.addEventListener(n,t),()=>{e.removeEventListener(n,t)}}dispatchEvent(e,n){e.dispatchEvent(n)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,n){return n=n||this.getDefaultDocument(),n.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,n){return n==="window"?window:n==="document"?e:n==="body"?e.body:null}getBaseHref(e){let n=fe();return n==null?null:me(n)}resetBaseElement(){z=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return qt(document.cookie,e)}},z=null;function fe(){return z=z||document.querySelector("base"),z?z.getAttribute("href"):null}function me(s){return new URL(s,document.baseURI).pathname}var ve=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=m({token:e,factory:e.\u0275fac});let s=e;return s})(),bt=new j(""),ie=(()=>{let e=class e{constructor(t,i){this._zone=i,this._eventNameToPlugin=new Map,t.forEach(o=>{o.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,o){return this._findPluginFor(i).addEventListener(t,i,o)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(r=>r.supports(t)),!i)throw new R(5101,!1);return this._eventNameToPlugin.set(t,i),i}};e.\u0275fac=function(i){return new(i||e)(c(bt),c(D))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let s=e;return s})(),X=class{constructor(e){this._doc=e}},Tt="ng-app-id",ne=(()=>{let e=class e{constructor(t,i,o,r={}){this.doc=t,this.appId=i,this.nonce=o,this.platformId=r,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=vt(r),this.resetHostNodes()}addStyles(t){for(let i of t)this.changeUsageCount(i,1)===1&&this.onStyleAdded(i)}removeStyles(t){for(let i of t)this.changeUsageCount(i,-1)<=0&&this.onStyleRemoved(i)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(i=>i.remove()),t.clear());for(let i of this.getAllStyles())this.onStyleRemoved(i);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let i of this.getAllStyles())this.addStyleToHost(t,i)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let i of this.hostNodes)this.addStyleToHost(i,t)}onStyleRemoved(t){let i=this.styleRef;i.get(t)?.elements?.forEach(o=>o.remove()),i.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${Tt}="${this.appId}"]`);if(t?.length){let i=new Map;return t.forEach(o=>{o.textContent!=null&&i.set(o.textContent,o)}),i}return null}changeUsageCount(t,i){let o=this.styleRef;if(o.has(t)){let r=o.get(t);return r.usage+=i,r.usage}return o.set(t,{usage:i,elements:[]}),i}getStyleElement(t,i){let o=this.styleNodesInDOM,r=o?.get(i);if(r?.parentNode===t)return o.delete(i),r.removeAttribute(Tt),r;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=i,this.platformIsServer&&a.setAttribute(Tt,this.appId),t.appendChild(a),a}}addStyleToHost(t,i){let o=this.getStyleElement(t,i),r=this.styleRef,a=r.get(i)?.elements;a?a.push(o):r.set(i,{elements:[o],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}};e.\u0275fac=function(i){return new(i||e)(c(y),c(at),c(ct,8),c(L))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let s=e;return s})(),Ct={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},St=/%COMP%/g,se="%COMP%",ge=`_nghost-${se}`,ye=`_ngcontent-${se}`,Te=!0,Ce=new j("",{providedIn:"root",factory:()=>Te});function we(s){return ye.replace(St,s)}function _e(s){return ge.replace(St,s)}function oe(s,e){return e.map(n=>n.replace(St,s))}var Qt=(()=>{let e=class e{constructor(t,i,o,r,a,l,u,h=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=o,this.removeStylesOnCompDestroy=r,this.doc=a,this.platformId=l,this.ngZone=u,this.nonce=h,this.rendererByCompId=new Map,this.platformIsServer=vt(l),this.defaultRenderer=new K(t,a,u,this.platformIsServer)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===P.ShadowDom&&(i=E(p({},i),{encapsulation:P.Emulated}));let o=this.getOrCreateRenderer(t,i);return o instanceof J?o.applyToHost(t):o instanceof G&&o.applyStyles(),o}getOrCreateRenderer(t,i){let o=this.rendererByCompId,r=o.get(i.id);if(!r){let a=this.doc,l=this.ngZone,u=this.eventManager,h=this.sharedStylesHost,v=this.removeStylesOnCompDestroy,H=this.platformIsServer;switch(i.encapsulation){case P.Emulated:r=new J(u,h,i,this.appId,v,a,l,H);break;case P.ShadowDom:return new Et(u,h,t,i,a,l,this.nonce,H);default:r=new G(u,h,i,v,a,l,H);break}o.set(i.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(i){return new(i||e)(c(ie),c(ne),c(at),c(Ce),c(y),c(L),c(D),c(ct))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let s=e;return s})(),K=class{constructor(e,n,t,i){this.eventManager=e,this.doc=n,this.ngZone=t,this.platformIsServer=i,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,n){return n?this.doc.createElementNS(Ct[n]||n,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,n){(te(e)?e.content:e).appendChild(n)}insertBefore(e,n,t){e&&(te(e)?e.content:e).insertBefore(n,t)}removeChild(e,n){e&&e.removeChild(n)}selectRootElement(e,n){let t=typeof e=="string"?this.doc.querySelector(e):e;if(!t)throw new R(-5104,!1);return n||(t.textContent=""),t}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,n,t,i){if(i){n=i+":"+n;let o=Ct[i];o?e.setAttributeNS(o,n,t):e.setAttribute(n,t)}else e.setAttribute(n,t)}removeAttribute(e,n,t){if(t){let i=Ct[t];i?e.removeAttributeNS(i,n):e.removeAttribute(`${t}:${n}`)}else e.removeAttribute(n)}addClass(e,n){e.classList.add(n)}removeClass(e,n){e.classList.remove(n)}setStyle(e,n,t,i){i&(k.DashCase|k.Important)?e.style.setProperty(n,t,i&k.Important?"important":""):e.style[n]=t}removeStyle(e,n,t){t&k.DashCase?e.style.removeProperty(n):e.style[n]=""}setProperty(e,n,t){e!=null&&(e[n]=t)}setValue(e,n){e.nodeValue=n}listen(e,n,t){if(typeof e=="string"&&(e=ft().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${n}`);return this.eventManager.addEventListener(e,n,this.decoratePreventDefault(t))}decoratePreventDefault(e){return n=>{if(n==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(n)):e(n))===!1&&n.preventDefault()}}};function te(s){return s.tagName==="TEMPLATE"&&s.content!==void 0}var Et=class extends K{constructor(e,n,t,i,o,r,a,l){super(e,o,r,l),this.sharedStylesHost=n,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=oe(i.id,i.styles);for(let h of u){let v=document.createElement("style");a&&v.setAttribute("nonce",a),v.textContent=h,this.shadowRoot.appendChild(v)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,n){return super.appendChild(this.nodeOrShadowRoot(e),n)}insertBefore(e,n,t){return super.insertBefore(this.nodeOrShadowRoot(e),n,t)}removeChild(e,n){return super.removeChild(this.nodeOrShadowRoot(e),n)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},G=class extends K{constructor(e,n,t,i,o,r,a,l){super(e,o,r,a),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=i,this.styles=l?oe(l,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},J=class extends G{constructor(e,n,t,i,o,r,a,l){let u=i+"-"+t.id;super(e,n,t,o,r,a,l,u),this.contentAttr=we(u),this.hostAttr=_e(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,n){let t=super.createElement(e,n);return super.setAttribute(t,this.contentAttr,""),t}},be=(()=>{let e=class e extends X{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,o){return t.addEventListener(i,o,!1),()=>this.removeEventListener(t,i,o)}removeEventListener(t,i,o){return t.removeEventListener(i,o)}};e.\u0275fac=function(i){return new(i||e)(c(y))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let s=e;return s})(),ee=["alt","control","meta","shift"],Ee={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Se={alt:s=>s.altKey,control:s=>s.ctrlKey,meta:s=>s.metaKey,shift:s=>s.shiftKey},De=(()=>{let e=class e extends X{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,i,o){let r=e.parseEventName(i),a=e.eventCallback(r.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ft().onAndCancel(t,r.domEventName,a))}static parseEventName(t){let i=t.toLowerCase().split("."),o=i.shift();if(i.length===0||!(o==="keydown"||o==="keyup"))return null;let r=e._normalizeKey(i.pop()),a="",l=i.indexOf("code");if(l>-1&&(i.splice(l,1),a="code."),ee.forEach(h=>{let v=i.indexOf(h);v>-1&&(i.splice(v,1),a+=h+".")}),a+=r,i.length!=0||r.length===0)return null;let u={};return u.domEventName=o,u.fullKey=a,u}static matchEventFullKeyCode(t,i){let o=Ee[t.key]||t.key,r="";return i.indexOf("code.")>-1&&(o=t.code,r="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),ee.forEach(a=>{if(a!==o){let l=Se[a];l(t)&&(r+=a+".")}}),r+=o,r===i)}static eventCallback(t,i,o){return r=>{e.matchEventFullKeyCode(r,t)&&o.runGuarded(()=>i(r))}}static _normalizeKey(t){return t==="esc"?"escape":t}};e.\u0275fac=function(i){return new(i||e)(c(y))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let s=e;return s})();function bi(s,e){return Kt(p({rootComponent:s},Ie(e)))}function Ie(s){return{appProviders:[...Ne,...s?.providers??[]],platformProviders:Ae}}function Me(){_t.makeCurrent()}function Oe(){return new rt}function Re(){return Ht(document),document}var Ae=[{provide:L,useValue:Wt},{provide:jt,useValue:Me,multi:!0},{provide:y,useFactory:Re,deps:[]}];var Ne=[{provide:xt,useValue:"root"},{provide:rt,useFactory:Oe,deps:[]},{provide:bt,useClass:be,multi:!0,deps:[y,D,L]},{provide:bt,useClass:De,multi:!0,deps:[y]},Qt,ne,ie,{provide:$t,useExisting:Qt},{provide:Xt,useClass:ve,deps:[]},[]];var Ei=(()=>{let e=class e{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}};e.\u0275fac=function(i){return new(i||e)(c(y))},e.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();var Dt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=m({token:e,factory:function(i){let o=null;return i?o=new(i||e):o=c(xe),o},providedIn:"root"});let s=e;return s})(),xe=(()=>{let e=class e extends Dt{constructor(t){super(),this._doc=t}sanitize(t,i){if(i==null)return null;switch(t){case C.NONE:return i;case C.HTML:return N(i,"HTML")?A(i):Ut(this._doc,String(i)).toString();case C.STYLE:return N(i,"Style")?A(i):i;case C.SCRIPT:if(N(i,"Script"))return A(i);throw new R(5200,!1);case C.URL:return N(i,"URL")?A(i):Vt(String(i));case C.RESOURCE_URL:if(N(i,"ResourceURL"))return A(i);throw new R(5201,!1);default:throw new R(5202,!1)}}bypassSecurityTrustHtml(t){return Pt(t)}bypassSecurityTrustStyle(t){return Lt(t)}bypassSecurityTrustScript(t){return kt(t)}bypassSecurityTrustUrl(t){return Ft(t)}bypassSecurityTrustResourceUrl(t){return Bt(t)}};e.\u0275fac=function(i){return new(i||e)(c(y))},e.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();var re=["toast-component",""];function je(s,e){if(s&1){let n=ht();T(0,"button",5),Z("click",function(){st(n);let i=g();return ot(i.remove())}),T(1,"span",6),b(2,"\xD7"),_()()}}function Pe(s,e){if(s&1&&(ut(0),b(1),dt()),s&2){let n=g(2);d(),O("[",n.duplicatesCount+1,"]")}}function Le(s,e){if(s&1&&(T(0,"div"),b(1),F(2,Pe,2,1,"ng-container",4),_()),s&2){let n=g();w(n.options.titleClass),B("aria-label",n.title),d(),O(" ",n.title," "),d(),f("ngIf",n.duplicatesCount)}}function ke(s,e){if(s&1&&U(0,"div",7),s&2){let n=g();w(n.options.messageClass),f("innerHTML",n.message,lt)}}function Fe(s,e){if(s&1&&(T(0,"div",8),b(1),_()),s&2){let n=g();w(n.options.messageClass),B("aria-label",n.message),d(),O(" ",n.message," ")}}function Be(s,e){if(s&1&&(T(0,"div"),U(1,"div",9),_()),s&2){let n=g();d(),V("width",n.width+"%")}}function Ve(s,e){if(s&1){let n=ht();T(0,"button",5),Z("click",function(){st(n);let i=g();return ot(i.remove())}),T(1,"span",6),b(2,"\xD7"),_()()}}function Ue(s,e){if(s&1&&(ut(0),b(1),dt()),s&2){let n=g(2);d(),O("[",n.duplicatesCount+1,"]")}}function Ze(s,e){if(s&1&&(T(0,"div"),b(1),F(2,Ue,2,1,"ng-container",4),_()),s&2){let n=g();w(n.options.titleClass),B("aria-label",n.title),d(),O(" ",n.title," "),d(),f("ngIf",n.duplicatesCount)}}function $e(s,e){if(s&1&&U(0,"div",7),s&2){let n=g();w(n.options.messageClass),f("innerHTML",n.message,lt)}}function ze(s,e){if(s&1&&(T(0,"div",8),b(1),_()),s&2){let n=g();w(n.options.messageClass),B("aria-label",n.message),d(),O(" ",n.message," ")}}function Ke(s,e){if(s&1&&(T(0,"div"),U(1,"div",9),_()),s&2){let n=g();d(),V("width",n.width+"%")}}var It=class{_attachedHost;component;viewContainerRef;injector;constructor(e,n){this.component=e,this.injector=n}attach(e,n){return this._attachedHost=e,e.attach(this,n)}detach(){let e=this._attachedHost;if(e)return this._attachedHost=void 0,e.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}},Mt=class{_attachedPortal;_disposeFn;attach(e,n){return this._attachedPortal=e,this.attachComponentPortal(e,n)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(e){this._disposeFn=e}},Ot=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new S;_activate=new S;_manualClose=new S;_resetTimeout=new S;_countDuplicate=new S;constructor(e){this._overlayRef=e}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(e,n){e&&this._resetTimeout.next(),n&&this._countDuplicate.next(++this.duplicatesCount)}},x=class{toastId;config;message;title;toastType;toastRef;_onTap=new S;_onAction=new S;constructor(e,n,t,i,o,r){this.toastId=e,this.config=n,this.message=t,this.title=i,this.toastType=o,this.toastRef=r,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(e){this._onAction.next(e)}onAction(){return this._onAction.asObservable()}},ae={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},ce=new j("ToastConfig"),Rt=class extends Mt{_hostDomElement;_componentFactoryResolver;_appRef;constructor(e,n,t){super(),this._hostDomElement=e,this._componentFactoryResolver=n,this._appRef=t}attachComponentPortal(e,n){let t=this._componentFactoryResolver.resolveComponentFactory(e.component),i;return i=t.create(e.injector),this._appRef.attachView(i.hostView),this.setDisposeFn(()=>{this._appRef.detachView(i.hostView),i.destroy()}),n?this._hostDomElement.insertBefore(this._getComponentRootNode(i),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(i)),i}_getComponentRootNode(e){return e.hostView.rootNodes[0]}},Ge=(()=>{class s{_document=I(y);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let n=this._document.createElement("div");n.classList.add("overlay-container"),n.setAttribute("aria-live","polite"),this._document.body.appendChild(n),this._containerElement=n}static \u0275fac=function(t){return new(t||s)};static \u0275prov=m({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),At=class{_portalHost;constructor(e){this._portalHost=e}attach(e,n=!0){return this._portalHost.attach(e,n)}detach(){return this._portalHost.detach()}},Ye=(()=>{class s{_overlayContainer=I(Ge);_componentFactoryResolver=I(Zt);_appRef=I($);_document=I(y);_paneElements=new Map;create(n,t){return this._createOverlayRef(this.getPaneElement(n,t))}getPaneElement(n="",t){return this._paneElements.get(t)||this._paneElements.set(t,{}),this._paneElements.get(t)[n]||(this._paneElements.get(t)[n]=this._createPaneElement(n,t)),this._paneElements.get(t)[n]}_createPaneElement(n,t){let i=this._document.createElement("div");return i.id="toast-container",i.classList.add(n),i.classList.add("toast-container"),t?t.getContainerElement().appendChild(i):this._overlayContainer.getContainerElement().appendChild(i),i}_createPortalHost(n){return new Rt(n,this._componentFactoryResolver,this._appRef)}_createOverlayRef(n){return new At(this._createPortalHost(n))}static \u0275fac=function(t){return new(t||s)};static \u0275prov=m({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),le=(()=>{class s{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(n,t,i,o,r){this.overlay=t,this._injector=i,this.sanitizer=o,this.ngZone=r,this.toastrConfig=p(p({},n.default),n.config),n.config.iconClasses&&(this.toastrConfig.iconClasses=p(p({},n.default.iconClasses),n.config.iconClasses))}show(n,t,i={},o=""){return this._preBuildNotification(o,n,t,this.applyConfig(i))}success(n,t,i={}){let o=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(o,n,t,this.applyConfig(i))}error(n,t,i={}){let o=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(o,n,t,this.applyConfig(i))}info(n,t,i={}){let o=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(o,n,t,this.applyConfig(i))}warning(n,t,i={}){let o=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(o,n,t,this.applyConfig(i))}clear(n){for(let t of this.toasts)if(n!==void 0){if(t.toastId===n){t.toastRef.manualClose();return}}else t.toastRef.manualClose()}remove(n){let t=this._findToast(n);if(!t||(t.activeToast.toastRef.close(),this.toasts.splice(t.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let i=this.toasts[this.currentlyActive].toastRef;i.isInactive()||(this.currentlyActive=this.currentlyActive+1,i.activate())}return!0}findDuplicate(n="",t="",i,o){let{includeTitleDuplicates:r}=this.toastrConfig;for(let a of this.toasts){let l=r&&a.title===n;if((!r||l)&&a.message===t)return a.toastRef.onDuplicate(i,o),a}return null}applyConfig(n={}){return p(p({},this.toastrConfig),n)}_findToast(n){for(let t=0;t<this.toasts.length;t++)if(this.toasts[t].toastId===n)return{index:t,activeToast:this.toasts[t]};return null}_preBuildNotification(n,t,i,o){return o.onActivateTick?this.ngZone.run(()=>this._buildNotification(n,t,i,o)):this._buildNotification(n,t,i,o)}_buildNotification(n,t,i,o){if(!o.toastComponent)throw new Error("toastComponent required");let r=this.findDuplicate(i,t,this.toastrConfig.resetTimeoutOnDuplicate&&o.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&i||t)&&this.toastrConfig.preventDuplicates&&r!==null)return r;this.previousToastMessage=t;let a=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(a=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let l=this.overlay.create(o.positionClass,this.overlayContainer);this.index=this.index+1;let u=t;t&&o.enableHtml&&(u=this.sanitizer.sanitize(C.HTML,t));let h=new Ot(l),v=new x(this.index,o,u,i,n,h),H=[{provide:x,useValue:v}],ue=Y.create({providers:H,parent:this._injector}),de=new It(o.toastComponent,ue),Nt=l.attach(de,o.newestOnTop);h.componentInstance=Nt.instance;let Q={toastId:this.index,title:i||"",message:t||"",toastRef:h,onShown:h.afterActivate(),onHidden:h.afterClosed(),onTap:v.onTap(),onAction:v.onAction(),portal:Nt};return a||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{Q.toastRef.activate()})),this.toasts.push(Q),Q}static \u0275fac=function(t){return new(t||s)(c(ce),c(Ye),c(Y),c(Dt),c(D))};static \u0275prov=m({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),qe=(()=>{class s{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=-1;toastClasses="";state;get displayStyle(){if(this.state.value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(n,t,i){this.toastrService=n,this.toastPackage=t,this.ngZone=i,this.message=t.message,this.title=t.title,this.options=t.config,this.originalTimeout=t.config.timeOut,this.toastClasses=`${t.toastType} ${t.config.toastClass}`,this.sub=t.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=t.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=t.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=t.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o}),this.state={value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}}}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state=E(p({},this.state),{value:"active"}),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width===0||this.width===100||!this.options.timeOut)return;let n=new Date().getTime(),t=this.hideTime-n;this.width=t/this.options.timeOut*100,this.options.progressAnimation==="increasing"&&(this.width=100-this.width),this.width<=0&&(this.width=0),this.width>=100&&(this.width=100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state=E(p({},this.state),{value:"active"}),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width=-1,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state.value!=="removed"&&(clearTimeout(this.timeout),this.state=E(p({},this.state),{value:"removed"}),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state.value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state.value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width=0)}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state.value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width=-1,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(n,t){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(n),t)):this.timeout=setTimeout(()=>n(),t)}outsideInterval(n,t){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(n),t)):this.intervalId=setInterval(()=>n(),t)}runInsideAngular(n){this.ngZone?this.ngZone.run(()=>n()):n()}static \u0275fac=function(t){return new(t||s)(M(le),M(x),M(D))};static \u0275cmp=et({type:s,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(t,i){t&1&&Z("click",function(){return i.tapToast()})("mouseenter",function(){return i.stickAround()})("mouseleave",function(){return i.delayedHideToast()}),t&2&&(zt("@flyInOut",i.state),w(i.toastClasses),V("display",i.displayStyle))},standalone:!0,features:[pt],attrs:re,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(t,i){t&1&&F(0,je,3,0,"button",0)(1,Le,3,5,"div",1)(2,ke,1,3,"div",2)(3,Fe,2,4,"div",3)(4,Be,2,2,"div",4),t&2&&(f("ngIf",i.options.closeButton),d(),f("ngIf",i.title),d(),f("ngIf",i.message&&i.options.enableHtml),d(),f("ngIf",i.message&&!i.options.enableHtml),d(),f("ngIf",i.options.progressBar))},dependencies:[mt],encapsulation:2,data:{animation:[Jt("flyInOut",[W("inactive",q({opacity:0})),W("active",q({opacity:1})),W("removed",q({opacity:0})),yt("inactive => active",gt("{{ easeTime }}ms {{ easing }}")),yt("active => removed",gt("{{ easeTime }}ms {{ easing }}"))])]}})}return s})(),We=E(p({},ae),{toastComponent:qe}),Xe=(s={})=>nt([{provide:ce,useValue:{default:We,config:s}}]),Fi=(()=>{class s{static forRoot(n={}){return{ngModule:s,providers:[Xe(n)]}}static \u0275fac=function(t){return new(t||s)};static \u0275mod=it({type:s});static \u0275inj=tt({})}return s})();var Je=(()=>{class s{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=-1;toastClasses="";get displayStyle(){return this.state==="inactive"?"none":null}state="inactive";timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(n,t,i){this.toastrService=n,this.toastPackage=t,this.appRef=i,this.message=t.message,this.title=t.title,this.options=t.config,this.originalTimeout=t.config.timeOut,this.toastClasses=`${t.toastType} ${t.config.toastClass}`,this.sub=t.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=t.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=t.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=t.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state="active",!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width===0||this.width===100||!this.options.timeOut)return;let n=new Date().getTime(),t=this.hideTime-n;this.width=t/this.options.timeOut*100,this.options.progressAnimation==="increasing"&&(this.width=100-this.width),this.width<=0&&(this.width=0),this.width>=100&&(this.width=100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state="active",this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width=-1,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state!=="removed"&&(clearTimeout(this.timeout),this.state="removed",this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width=0)}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width=-1,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(t){return new(t||s)(M(le),M(x),M($))};static \u0275cmp=et({type:s,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(t,i){t&1&&Z("click",function(){return i.tapToast()})("mouseenter",function(){return i.stickAround()})("mouseleave",function(){return i.delayedHideToast()}),t&2&&(w(i.toastClasses),V("display",i.displayStyle))},standalone:!0,features:[pt],attrs:re,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(t,i){t&1&&F(0,Ve,3,0,"button",0)(1,Ze,3,5,"div",1)(2,$e,1,3,"div",2)(3,ze,2,4,"div",3)(4,Ke,2,2,"div",4),t&2&&(f("ngIf",i.options.closeButton),d(),f("ngIf",i.title),d(),f("ngIf",i.message&&i.options.enableHtml),d(),f("ngIf",i.message&&!i.options.enableHtml),d(),f("ngIf",i.options.progressBar))},dependencies:[mt],encapsulation:2})}return s})(),Bi=E(p({},ae),{toastComponent:Je});export{Qt as a,bi as b,Ei as c,Dt as d,le as e,Xe as f,Fi as g};
