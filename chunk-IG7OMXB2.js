import{$ as N3,K as C3,M as L3,U as g3,X as x3,Y as b3,Z as y1,aa as s2,c as d3,ea as S3,fa as w3,ha as k3,ma as y3,na as A3,qa as M2,ra as P3}from"./chunk-HGITZB6Y.js";import{$ as Z,$a as L1,Aa as U2,Ab as q2,Ba as l3,Bb as S1,C as F2,D as f2,Fb as z3,Gb as h3,Gc as M3,Ib as G2,J as _2,Jb as a2,Kb as e2,L as u1,Lb as Y,Mb as j2,Nb as V3,Ob as h2,Oc as w1,Pb as V2,Pc as Y2,Rc as i2,Sa as f3,Sc as k1,U as R2,Ub as p3,Uc as $2,V as M1,Vb as $,W as D2,Ya as C1,Za as V,_ as B2,a as P2,ba as m2,db as m3,ea as d1,f as T2,fb as g1,h as V1,hb as v3,hc as p2,ia as x,ja as G,jc as u2,ka as c2,kb as O2,la as I2,ob as x1,pb as B,q as p1,qa as E2,qb as b1,qc as u3,ra as v2,sa as H2,sb as W2,ta as t3,ub as N1,vb as H3,za as j,zb as z2}from"./chunk-JPNHJXW6.js";import{a as A2,b as o3}from"./chunk-SO6VPFYA.js";var G4=["mat-menu-item",""],j4=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Y4=["mat-icon, [matMenuItemIcon]","*"];function $4(c,e){c&1&&(t3(),z2(0,"svg",2),S1(1,"polygon",3),q2())}var X4=["*"];function Q4(c,e){if(c&1){let s=z3();z2(0,"div",0),G2("keydown",function(i){v2(s);let r=a2();return H2(r._handleKeydown(i))})("click",function(){v2(s);let i=a2();return H2(i.closed.emit("click"))})("@transformMenu.start",function(i){v2(s);let r=a2();return H2(r._onAnimationStart(i))})("@transformMenu.done",function(i){v2(s);let r=a2();return H2(r._onAnimationDone(i))}),z2(1,"div",1),Y(2),q2()()}if(c&2){let s=a2();N1(s._classList),b1("id",s.panelId)("@transformMenu",s._panelAnimationState),B("aria-label",s.ariaLabel||null)("aria-labelledby",s.ariaLabelledby||null)("aria-describedby",s.ariaDescribedby||null)}}var P1=new m2("MAT_MENU_PANEL"),A1=(()=>{let e=class e{constructor(a,i,r,n,o){this._elementRef=a,this._document=i,this._focusMonitor=r,this._parentMenu=n,this._changeDetectorRef=o,this.role="menuitem",this.disabled=!1,this.disableRipple=!1,this._hovered=new T2,this._focused=new T2,this._highlighted=!1,this._triggersSubmenu=!1,n?.addItem?.(this)}focus(a,i){this._focusMonitor&&a?this._focusMonitor.focusVia(this._getHostElement(),a,i):this._getHostElement().focus(i),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(a){this.disabled&&(a.preventDefault(),a.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let a=this._elementRef.nativeElement.cloneNode(!0),i=a.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<i.length;r++)i[r].remove();return a.textContent?.trim()||""}_setHighlighted(a){this._highlighted=a,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(a){this._triggersSubmenu=a,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}};e.\u0275fac=function(i){return new(i||e)(V(j),V(u3),V(y1),V(P1,8),V(p2))},e.\u0275cmp=G({type:e,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(i,r){i&1&&G2("click",function(o){return r._checkDisabled(o)})("mouseenter",function(){return r._handleMouseEnter()}),i&2&&(B("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),W2("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[x.HasDecoratorInputTransform,"disabled","disabled",u2],disableRipple:[x.HasDecoratorInputTransform,"disableRipple","disableRipple",u2]},exportAs:["matMenuItem"],standalone:!0,features:[O2,$],attrs:G4,ngContentSelectors:Y4,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(i,r){i&1&&(e2(j4),Y(0),z2(1,"span",0),Y(2,1),q2(),S1(3,"div",1),x1(4,$4,2,0,":svg:svg",2)),i&2&&(C1(3),b1("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),C1(),H3(4,r._triggersSubmenu?4:-1))},dependencies:[S3],encapsulation:2,changeDetection:0});let c=e;return c})();var K4=new m2("MatMenuContent");var Q2={transformMenu:w1("transformMenu",[k1("void",i2({opacity:0,transform:"scale(0.8)"})),$2("void => enter",Y2("120ms cubic-bezier(0, 0, 0.2, 1)",i2({opacity:1,transform:"scale(1)"}))),$2("* => void",Y2("100ms 25ms linear",i2({opacity:0})))]),fadeInItems:w1("fadeInItems",[k1("showing",i2({opacity:1})),$2("void => *",[i2({opacity:0}),Y2("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},N8=Q2.fadeInItems,S8=Q2.transformMenu,J4=0,Z4=new m2("mat-menu-default-options",{providedIn:"root",factory:c6});function c6(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}var X2=(()=>{let e=class e{get xPosition(){return this._xPosition}set xPosition(a){this._xPosition=a,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(a){this._yPosition=a,this.setPositionClasses()}set panelClass(a){let i=this._previousPanelClass,r=A2({},this._classList);i&&i.length&&i.split(" ").forEach(n=>{r[n]=!1}),this._previousPanelClass=a,a&&a.length&&(a.split(" ").forEach(n=>{r[n]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}get classList(){return this.panelClass}set classList(a){this.panelClass=a}constructor(a,i,r,n){this._elementRef=a,this._ngZone=i,this._changeDetectorRef=n,this._elevationPrefix="mat-elevation-z",this._baseElevation=8,this._directDescendantItems=new l3,this._classList={},this._panelAnimationState="void",this._animationDone=new T2,this.closed=new U2,this.close=this.closed,this.panelId=`mat-menu-panel-${J4++}`,this.overlayPanelClass=r.overlayPanelClass||"",this._xPosition=r.xPosition,this._yPosition=r.yPosition,this.backdropClass=r.backdropClass,this.overlapTrigger=r.overlapTrigger,this.hasBackdrop=r.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new g3(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(R2(this._directDescendantItems),M1(a=>F2(...a.map(i=>i._focused)))).subscribe(a=>this._keyManager.updateActiveItem(a)),this._directDescendantItems.changes.subscribe(a=>{let i=this._keyManager;if(this._panelAnimationState==="enter"&&i.activeItem?._hasFocus()){let r=a.toArray(),n=Math.max(0,Math.min(r.length-1,i.activeItemIndex||0));r[n]&&!r[n].disabled?i.setActiveItem(n):i.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusSubscription?.unsubscribe()}_hovered(){return this._directDescendantItems.changes.pipe(R2(this._directDescendantItems),M1(i=>F2(...i.map(r=>r._hovered))))}addItem(a){}removeItem(a){}_handleKeydown(a){let i=a.keyCode,r=this._keyManager;switch(i){case 27:L3(a)||(a.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(i===38||i===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(a);return}a.stopPropagation()}focusFirstItem(a="program"){this._firstItemFocusSubscription?.unsubscribe(),this._firstItemFocusSubscription=this._ngZone.onStable.pipe(_2(1)).subscribe(()=>{let i=null;if(this._directDescendantItems.length&&(i=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!i||!i.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(a).setFirstItemActive(),!r.activeItem&&i&&i.focus()}})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(a){let i=Math.min(this._baseElevation+a,24),r=`${this._elevationPrefix}${i}`,n=Object.keys(this._classList).find(o=>o.startsWith(this._elevationPrefix));if(!n||n===this._previousElevation){let o=A2({},this._classList);this._previousElevation&&(o[this._previousElevation]=!1),o[r]=!0,this._previousElevation=r,this._classList=o}}setPositionClasses(a=this.xPosition,i=this.yPosition){this._classList=o3(A2({},this._classList),{"mat-menu-before":a==="before","mat-menu-after":a==="after","mat-menu-above":i==="above","mat-menu-below":i==="below"}),this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(a){this._animationDone.next(a),this._isAnimating=!1}_onAnimationStart(a){this._isAnimating=!0,a.toState==="enter"&&this._keyManager.activeItemIndex===0&&(a.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe(R2(this._allItems)).subscribe(a=>{this._directDescendantItems.reset(a.filter(i=>i._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}};e.\u0275fac=function(i){return new(i||e)(V(j),V(g1),V(Z4),V(p2))},e.\u0275cmp=G({type:e,selectors:[["mat-menu"]],contentQueries:function(i,r,n){if(i&1&&(j2(n,K4,5),j2(n,A1,5),j2(n,A1,4)),i&2){let o;h2(o=V2())&&(r.lazyContent=o.first),h2(o=V2())&&(r._allItems=o),h2(o=V2())&&(r.items=o)}},viewQuery:function(i,r){if(i&1&&V3(L1,5),i&2){let n;h2(n=V2())&&(r.templateRef=n.first)}},hostVars:3,hostBindings:function(i,r){i&2&&B("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[x.None,"aria-label","ariaLabel"],ariaLabelledby:[x.None,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[x.None,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[x.HasDecoratorInputTransform,"overlapTrigger","overlapTrigger",u2],hasBackdrop:[x.HasDecoratorInputTransform,"hasBackdrop","hasBackdrop",a=>a==null?null:u2(a)],panelClass:[x.None,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],standalone:!0,features:[p3([{provide:P1,useExisting:e}]),O2,$],ngContentSelectors:X4,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"keydown","click","id"],[1,"mat-mdc-menu-content"]],template:function(i,r){i&1&&(e2(),x1(0,Q4,3,7,"ng-template"))},styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-divider{color:var(--mat-menu-divider-color);margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:var(--mat-menu-item-trailing-spacing);padding-right:var(--mat-menu-item-leading-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]),.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon])[dir=rtl]{padding-left:var(--mat-menu-item-with-icon-trailing-spacing);padding-right:var(--mat-menu-item-with-icon-leading-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[Q2.transformMenu,Q2.fadeInItems]},changeDetection:0});let c=e;return c})(),D3=new m2("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let c=d1(M2);return()=>c.scrollStrategies.reposition()}});function a6(c){return()=>c.scrollStrategies.reposition()}var e6={provide:D3,deps:[M2],useFactory:a6},T3=C3({passive:!0});var w8=(()=>{let e=class e{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(a){this.menu=a}get menu(){return this._menu}set menu(a){a!==this._menu&&(this._menu=a,this._menuCloseSubscription.unsubscribe(),a&&(this._parentMaterialMenu,this._menuCloseSubscription=a.close.subscribe(i=>{this._destroyMenu(i),(i==="click"||i==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(i)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(a,i,r,n,o,t,f,l,v){this._overlay=a,this._element=i,this._viewContainerRef=r,this._menuItemInstance=t,this._dir=f,this._focusMonitor=l,this._ngZone=v,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=P2.EMPTY,this._hoverSubscription=P2.EMPTY,this._menuCloseSubscription=P2.EMPTY,this._changeDetectorRef=d1(p2),this._handleTouchStart=z=>{b3(z)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new U2,this.onMenuOpen=this.menuOpened,this.menuClosed=new U2,this.onMenuClose=this.menuClosed,this._scrollStrategy=n,this._parentMaterialMenu=o instanceof X2?o:void 0,i.nativeElement.addEventListener("touchstart",this._handleTouchStart,T3)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,T3),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){let a=this.menu;if(this._menuOpen||!a)return;let i=this._createOverlay(a),r=i.getConfig(),n=r.positionStrategy;this._setPosition(a,n),r.hasBackdrop=a.hasBackdrop==null?!this.triggersSubmenu():a.hasBackdrop,i.attach(this._getPortal(a)),a.lazyContent&&a.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(a),a instanceof X2&&(a._startAnimation(),a._directDescendantItems.changes.pipe(D2(a.close)).subscribe(()=>{n.withLockedPosition(!1).reapplyLastPosition(),n.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(a,i){this._focusMonitor&&a?this._focusMonitor.focusVia(this._element,a,i):this._element.nativeElement.focus(i)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(a){if(!this._overlayRef||!this.menuOpen)return;let i=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&(a==="keydown"||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,i instanceof X2?(i._resetAnimation(),i.lazyContent?i._animationDone.pipe(f2(r=>r.toState==="void"),_2(1),D2(i.lazyContent._attached)).subscribe({next:()=>i.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),i?.lazyContent?.detach())}_initMenu(a){a.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,a.direction=this.dir,this._setMenuElevation(a),a.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(a){if(a.setElevation){let i=0,r=a.parentMenu;for(;r;)i++,r=r.parentMenu;a.setElevation(i)}}_setIsMenuOpen(a){a!==this._menuOpen&&(this._menuOpen=a,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(a),this._changeDetectorRef.markForCheck())}_createOverlay(a){if(!this._overlayRef){let i=this._getOverlayConfig(a);this._subscribeToPositions(a,i.positionStrategy),this._overlayRef=this._overlay.create(i),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(a){return new A3({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:a.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:a.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(a,i){a.setPositionClasses&&i.positionChanges.subscribe(r=>{let n=r.connectionPair.overlayX==="start"?"after":"before",o=r.connectionPair.overlayY==="top"?"below":"above";this._ngZone?this._ngZone.run(()=>a.setPositionClasses(n,o)):a.setPositionClasses(n,o)})}_setPosition(a,i){let[r,n]=a.xPosition==="before"?["end","start"]:["start","end"],[o,t]=a.yPosition==="above"?["bottom","top"]:["top","bottom"],[f,l]=[o,t],[v,z]=[r,n],h=0;if(this.triggersSubmenu()){if(z=r=a.xPosition==="before"?"start":"end",n=v=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let C=this._parentMaterialMenu.items.first;this._parentInnerPadding=C?C._getHostElement().offsetTop:0}h=o==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else a.overlapTrigger||(f=o==="top"?"bottom":"top",l=t==="top"?"bottom":"top");i.withPositions([{originX:r,originY:f,overlayX:v,overlayY:o,offsetY:h},{originX:n,originY:f,overlayX:z,overlayY:o,offsetY:h},{originX:r,originY:l,overlayX:v,overlayY:t,offsetY:-h},{originX:n,originY:l,overlayX:z,overlayY:t,offsetY:-h}])}_menuClosingActions(){let a=this._overlayRef.backdropClick(),i=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:p1(),n=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(f2(o=>o!==this._menuItemInstance),f2(()=>this._menuOpen)):p1();return F2(a,r,n,i)}_handleMousedown(a){x3(a)||(this._openedBy=a.button===0?"mouse":void 0,this.triggersSubmenu()&&a.preventDefault())}_handleKeydown(a){let i=a.keyCode;(i===13||i===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(i===39&&this.dir==="ltr"||i===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(a){this.triggersSubmenu()?(a.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe(f2(a=>a===this._menuItemInstance&&!a.disabled),u1(0,V1)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof X2&&this.menu._isAnimating?this.menu._animationDone.pipe(_2(1),u1(0,V1),D2(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(a){return(!this._portal||this._portal.templateRef!==a.templateRef)&&(this._portal=new k3(a.templateRef,this._viewContainerRef)),this._portal}};e.\u0275fac=function(i){return new(i||e)(V(M2),V(j),V(v3),V(D3),V(P1,8),V(A1,10),V(N3,8),V(y1),V(g1))},e.\u0275dir=I2({type:e,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(i,r){i&1&&G2("click",function(o){return r._handleClick(o)})("mousedown",function(o){return r._handleMousedown(o)})("keydown",function(o){return r._handleKeydown(o)}),i&2&&B("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[x.None,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[x.None,"matMenuTriggerFor","menu"],menuData:[x.None,"matMenuTriggerData","menuData"],restoreFocus:[x.None,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],standalone:!0});let c=e;return c})(),k8=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c2({type:e}),e.\u0275inj=Z({providers:[e6],imports:[M3,w3,s2,P3,y3,s2]});let c=e;return c})();var R8=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c2({type:e}),e.\u0275inj=Z({imports:[s2,s2]});let c=e;return c})();function B3(c,e){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);e&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),s.push.apply(s,a)}return s}function m(c){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?B3(Object(s),!0).forEach(function(a){d(c,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):B3(Object(s)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(s,a))})}return c}function t1(c){"@babel/helpers - typeof";return t1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t1(c)}function i6(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function I3(c,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(c,a.key,a)}}function s6(c,e,s){return e&&I3(c.prototype,e),s&&I3(c,s),Object.defineProperty(c,"prototype",{writable:!1}),c}function d(c,e,s){return e in c?Object.defineProperty(c,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[e]=s,c}function $1(c,e){return n6(c)||t6(c,e)||f4(c,e)||f6()}function w2(c){return r6(c)||o6(c)||f4(c)||l6()}function r6(c){if(Array.isArray(c))return D1(c)}function n6(c){if(Array.isArray(c))return c}function o6(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function t6(c,e){var s=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(s!=null){var a=[],i=!0,r=!1,n,o;try{for(s=s.call(c);!(i=(n=s.next()).done)&&(a.push(n.value),!(e&&a.length===e));i=!0);}catch(t){r=!0,o=t}finally{try{!i&&s.return!=null&&s.return()}finally{if(r)throw o}}return a}}function f4(c,e){if(c){if(typeof c=="string")return D1(c,e);var s=Object.prototype.toString.call(c).slice(8,-1);if(s==="Object"&&c.constructor&&(s=c.constructor.name),s==="Map"||s==="Set")return Array.from(c);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return D1(c,e)}}function D1(c,e){(e==null||e>c.length)&&(e=c.length);for(var s=0,a=new Array(e);s<e;s++)a[s]=c[s];return a}function l6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var E3=function(){},X1={},m4={},v4=null,H4={mark:E3,measure:E3};try{typeof window<"u"&&(X1=window),typeof document<"u"&&(m4=document),typeof MutationObserver<"u"&&(v4=MutationObserver),typeof performance<"u"&&(H4=performance)}catch{}var m6=X1.navigator||{},U3=m6.userAgent,O3=U3===void 0?"":U3,E=X1,u=m4,W3=v4,K2=H4,B8=!!E.document,R=!!u.documentElement&&!!u.head&&typeof u.addEventListener=="function"&&typeof u.createElement=="function",z4=~O3.indexOf("MSIE")||~O3.indexOf("Trident/"),J2,Z2,c1,a1,e1,T="___FONT_AWESOME___",B1=16,h4="fa",V4="svg-inline--fa",K="data-fa-i2svg",I1="data-fa-pseudo-element",v6="data-fa-pseudo-element-pending",Q1="data-prefix",K1="data-icon",q3="fontawesome-i2svg",H6="async",z6=["HTML","HEAD","STYLE","SCRIPT"],p4=function(){try{return!0}catch{return!1}}(),p="classic",M="sharp",J1=[p,M];function k2(c){return new Proxy(c,{get:function(s,a){return a in s?s[a]:s[p]}})}var g2=k2((J2={},d(J2,p,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),d(J2,M,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),J2)),x2=k2((Z2={},d(Z2,p,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),d(Z2,M,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Z2)),b2=k2((c1={},d(c1,p,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),d(c1,M,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),c1)),h6=k2((a1={},d(a1,p,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),d(a1,M,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),a1)),V6=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,u4="fa-layers-text",p6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,u6=k2((e1={},d(e1,p,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),d(e1,M,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),e1)),M4=[1,2,3,4,5,6,7,8,9,10],M6=M4.concat([11,12,13,14,15,16,17,18,19,20]),d6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],X={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},N2=new Set;Object.keys(x2[p]).map(N2.add.bind(N2));Object.keys(x2[M]).map(N2.add.bind(N2));var C6=[].concat(J1,w2(N2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",X.GROUP,X.SWAP_OPACITY,X.PRIMARY,X.SECONDARY]).concat(M4.map(function(c){return"".concat(c,"x")})).concat(M6.map(function(c){return"w-".concat(c)})),C2=E.FontAwesomeConfig||{};function L6(c){var e=u.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function g6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}u&&typeof u.querySelector=="function"&&(G3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],G3.forEach(function(c){var e=$1(c,2),s=e[0],a=e[1],i=g6(L6(s));i!=null&&(C2[a]=i)}));var G3,d4={styleDefault:"solid",familyDefault:"classic",cssPrefix:h4,replacementClass:V4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};C2.familyPrefix&&(C2.cssPrefix=C2.familyPrefix);var t2=m(m({},d4),C2);t2.autoReplaceSvg||(t2.observeMutations=!1);var H={};Object.keys(d4).forEach(function(c){Object.defineProperty(H,c,{enumerable:!0,set:function(s){t2[c]=s,L2.forEach(function(a){return a(H)})},get:function(){return t2[c]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(e){t2.cssPrefix=e,L2.forEach(function(s){return s(H)})},get:function(){return t2.cssPrefix}});E.FontAwesomeConfig=H;var L2=[];function x6(c){return L2.push(c),function(){L2.splice(L2.indexOf(c),1)}}var I=B1,P={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function b6(c){if(!(!c||!R)){var e=u.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var s=u.head.childNodes,a=null,i=s.length-1;i>-1;i--){var r=s[i],n=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(a=r)}return u.head.insertBefore(e,a),c}}var N6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function S2(){for(var c=12,e="";c-- >0;)e+=N6[Math.random()*62|0];return e}function l2(c){for(var e=[],s=(c||[]).length>>>0;s--;)e[s]=c[s];return e}function Z1(c){return c.classList?l2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function C4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function S6(c){return Object.keys(c||{}).reduce(function(e,s){return e+"".concat(s,'="').concat(C4(c[s]),'" ')},"").trim()}function m1(c){return Object.keys(c||{}).reduce(function(e,s){return e+"".concat(s,": ").concat(c[s].trim(),";")},"")}function c3(c){return c.size!==P.size||c.x!==P.x||c.y!==P.y||c.rotate!==P.rotate||c.flipX||c.flipY}function w6(c){var e=c.transform,s=c.containerWidth,a=c.iconWidth,i={transform:"translate(".concat(s/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),n="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),t={transform:"".concat(r," ").concat(n," ").concat(o)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:i,inner:t,path:f}}function k6(c){var e=c.transform,s=c.width,a=s===void 0?B1:s,i=c.height,r=i===void 0?B1:i,n=c.startCentered,o=n===void 0?!1:n,t="";return o&&z4?t+="translate(".concat(e.x/I-a/2,"em, ").concat(e.y/I-r/2,"em) "):o?t+="translate(calc(-50% + ".concat(e.x/I,"em), calc(-50% + ").concat(e.y/I,"em)) "):t+="translate(".concat(e.x/I,"em, ").concat(e.y/I,"em) "),t+="scale(".concat(e.size/I*(e.flipX?-1:1),", ").concat(e.size/I*(e.flipY?-1:1),") "),t+="rotate(".concat(e.rotate,"deg) "),t}var y6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function L4(){var c=h4,e=V4,s=H.cssPrefix,a=H.replacementClass,i=y6;if(s!==c||a!==e){var r=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(s,"-")).replace(n,"--".concat(s,"-")).replace(o,".".concat(a))}return i}var j3=!1;function T1(){H.autoAddCss&&!j3&&(b6(L4()),j3=!0)}var A6={mixout:function(){return{dom:{css:L4,insertCss:T1}}},hooks:function(){return{beforeDOMElementCreation:function(){T1()},beforeI2svg:function(){T1()}}}},F=E||{};F[T]||(F[T]={});F[T].styles||(F[T].styles={});F[T].hooks||(F[T].hooks={});F[T].shims||(F[T].shims=[]);var k=F[T],g4=[],P6=function c(){u.removeEventListener("DOMContentLoaded",c),l1=1,g4.map(function(e){return e()})},l1=!1;R&&(l1=(u.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(u.readyState),l1||u.addEventListener("DOMContentLoaded",P6));function T6(c){R&&(l1?setTimeout(c,0):g4.push(c))}function y2(c){var e=c.tag,s=c.attributes,a=s===void 0?{}:s,i=c.children,r=i===void 0?[]:i;return typeof c=="string"?C4(c):"<".concat(e," ").concat(S6(a),">").concat(r.map(y2).join(""),"</").concat(e,">")}function Y3(c,e,s){if(c&&c[e]&&c[e][s])return{prefix:e,iconName:s,icon:c[e][s]}}var F6=function(e,s){return function(a,i,r,n){return e.call(s,a,i,r,n)}},F1=function(e,s,a,i){var r=Object.keys(e),n=r.length,o=i!==void 0?F6(s,i):s,t,f,l;for(a===void 0?(t=1,l=e[r[0]]):(t=0,l=a);t<n;t++)f=r[t],l=o(l,e[f],f,e);return l};function _6(c){for(var e=[],s=0,a=c.length;s<a;){var i=c.charCodeAt(s++);if(i>=55296&&i<=56319&&s<a){var r=c.charCodeAt(s++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),s--)}else e.push(i)}return e}function E1(c){var e=_6(c);return e.length===1?e[0].toString(16):null}function R6(c,e){var s=c.length,a=c.charCodeAt(e),i;return a>=55296&&a<=56319&&s>e+1&&(i=c.charCodeAt(e+1),i>=56320&&i<=57343)?(a-55296)*1024+i-56320+65536:a}function $3(c){return Object.keys(c).reduce(function(e,s){var a=c[s],i=!!a.icon;return i?e[a.iconName]=a.icon:e[s]=a,e},{})}function U1(c,e){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=s.skipHooks,i=a===void 0?!1:a,r=$3(e);typeof k.hooks.addPack=="function"&&!i?k.hooks.addPack(c,$3(e)):k.styles[c]=m(m({},k.styles[c]||{}),r),c==="fas"&&U1("fa",e)}var i1,s1,r1,r2=k.styles,D6=k.shims,B6=(i1={},d(i1,p,Object.values(b2[p])),d(i1,M,Object.values(b2[M])),i1),a3=null,x4={},b4={},N4={},S4={},w4={},I6=(s1={},d(s1,p,Object.keys(g2[p])),d(s1,M,Object.keys(g2[M])),s1);function E6(c){return~C6.indexOf(c)}function U6(c,e){var s=e.split("-"),a=s[0],i=s.slice(1).join("-");return a===c&&i!==""&&!E6(i)?i:null}var k4=function(){var e=function(r){return F1(r2,function(n,o,t){return n[t]=F1(o,r,{}),n},{})};x4=e(function(i,r,n){if(r[3]&&(i[r[3]]=n),r[2]){var o=r[2].filter(function(t){return typeof t=="number"});o.forEach(function(t){i[t.toString(16)]=n})}return i}),b4=e(function(i,r,n){if(i[n]=n,r[2]){var o=r[2].filter(function(t){return typeof t=="string"});o.forEach(function(t){i[t]=n})}return i}),w4=e(function(i,r,n){var o=r[2];return i[n]=n,o.forEach(function(t){i[t]=n}),i});var s="far"in r2||H.autoFetchSvg,a=F1(D6,function(i,r){var n=r[0],o=r[1],t=r[2];return o==="far"&&!s&&(o="fas"),typeof n=="string"&&(i.names[n]={prefix:o,iconName:t}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:o,iconName:t}),i},{names:{},unicodes:{}});N4=a.names,S4=a.unicodes,a3=v1(H.styleDefault,{family:H.familyDefault})};x6(function(c){a3=v1(c.styleDefault,{family:H.familyDefault})});k4();function e3(c,e){return(x4[c]||{})[e]}function O6(c,e){return(b4[c]||{})[e]}function Q(c,e){return(w4[c]||{})[e]}function y4(c){return N4[c]||{prefix:null,iconName:null}}function W6(c){var e=S4[c],s=e3("fas",c);return e||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function U(){return a3}var i3=function(){return{prefix:null,iconName:null,rest:[]}};function v1(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.family,a=s===void 0?p:s,i=g2[a][c],r=x2[a][c]||x2[a][i],n=c in k.styles?c:null;return r||n||null}var X3=(r1={},d(r1,p,Object.keys(b2[p])),d(r1,M,Object.keys(b2[M])),r1);function H1(c){var e,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.skipLookups,i=a===void 0?!1:a,r=(e={},d(e,p,"".concat(H.cssPrefix,"-").concat(p)),d(e,M,"".concat(H.cssPrefix,"-").concat(M)),e),n=null,o=p;(c.includes(r[p])||c.some(function(f){return X3[p].includes(f)}))&&(o=p),(c.includes(r[M])||c.some(function(f){return X3[M].includes(f)}))&&(o=M);var t=c.reduce(function(f,l){var v=U6(H.cssPrefix,l);if(r2[l]?(l=B6[o].includes(l)?h6[o][l]:l,n=l,f.prefix=l):I6[o].indexOf(l)>-1?(n=l,f.prefix=v1(l,{family:o})):v?f.iconName=v:l!==H.replacementClass&&l!==r[p]&&l!==r[M]&&f.rest.push(l),!i&&f.prefix&&f.iconName){var z=n==="fa"?y4(f.iconName):{},h=Q(f.prefix,f.iconName);z.prefix&&(n=null),f.iconName=z.iconName||h||f.iconName,f.prefix=z.prefix||f.prefix,f.prefix==="far"&&!r2.far&&r2.fas&&!H.autoFetchSvg&&(f.prefix="fas")}return f},i3());return(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(t.prefix="fad"),!t.prefix&&o===M&&(r2.fass||H.autoFetchSvg)&&(t.prefix="fass",t.iconName=Q(t.prefix,t.iconName)||t.iconName),(t.prefix==="fa"||n==="fa")&&(t.prefix=U()||"fas"),t}var q6=function(){function c(){i6(this,c),this.definitions={}}return s6(c,[{key:"add",value:function(){for(var s=this,a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(o){s.definitions[o]=m(m({},s.definitions[o]||{}),n[o]),U1(o,n[o]);var t=b2[p][o];t&&U1(t,n[o]),k4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(s,a){var i=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(i).map(function(r){var n=i[r],o=n.prefix,t=n.iconName,f=n.icon,l=f[2];s[o]||(s[o]={}),l.length>0&&l.forEach(function(v){typeof v=="string"&&(s[o][v]=f)}),s[o][t]=f}),s}}]),c}(),Q3=[],n2={},o2={},G6=Object.keys(o2);function j6(c,e){var s=e.mixoutsTo;return Q3=c,n2={},Object.keys(o2).forEach(function(a){G6.indexOf(a)===-1&&delete o2[a]}),Q3.forEach(function(a){var i=a.mixout?a.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(s[n]=i[n]),t1(i[n])==="object"&&Object.keys(i[n]).forEach(function(o){s[n]||(s[n]={}),s[n][o]=i[n][o]})}),a.hooks){var r=a.hooks();Object.keys(r).forEach(function(n){n2[n]||(n2[n]=[]),n2[n].push(r[n])})}a.provides&&a.provides(o2)}),s}function O1(c,e){for(var s=arguments.length,a=new Array(s>2?s-2:0),i=2;i<s;i++)a[i-2]=arguments[i];var r=n2[c]||[];return r.forEach(function(n){e=n.apply(null,[e].concat(a))}),e}function J(c){for(var e=arguments.length,s=new Array(e>1?e-1:0),a=1;a<e;a++)s[a-1]=arguments[a];var i=n2[c]||[];i.forEach(function(r){r.apply(null,s)})}function _(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return o2[c]?o2[c].apply(null,e):void 0}function W1(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,s=c.prefix||U();if(e)return e=Q(s,e)||e,Y3(A4.definitions,s,e)||Y3(k.styles,s,e)}var A4=new q6,Y6=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,J("noAuto")},$6={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(J("beforeI2svg",e),_("pseudoElements2svg",e),_("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=e.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,T6(function(){Q6({autoReplaceSvgRoot:s}),J("watch",e)})}},X6={icon:function(e){if(e===null)return null;if(t1(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var s=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=v1(e[0]);return{prefix:a,iconName:Q(a,s)||s}}if(typeof e=="string"&&(e.indexOf("".concat(H.cssPrefix,"-"))>-1||e.match(V6))){var i=H1(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||U(),iconName:Q(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var r=U();return{prefix:r,iconName:Q(r,e)||e}}}},N={noAuto:Y6,config:H,dom:$6,parse:X6,library:A4,findIconDefinition:W1,toHtml:y2},Q6=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=e.autoReplaceSvgRoot,a=s===void 0?u:s;(Object.keys(k.styles).length>0||H.autoFetchSvg)&&R&&H.autoReplaceSvg&&N.dom.i2svg({node:a})};function z1(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(a){return y2(a)})}}),Object.defineProperty(c,"node",{get:function(){if(R){var a=u.createElement("div");return a.innerHTML=c.html,a.children}}}),c}function K6(c){var e=c.children,s=c.main,a=c.mask,i=c.attributes,r=c.styles,n=c.transform;if(c3(n)&&s.found&&!a.found){var o=s.width,t=s.height,f={x:o/t/2,y:.5};i.style=m1(m(m({},r),{},{"transform-origin":"".concat(f.x+n.x/16,"em ").concat(f.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function J6(c){var e=c.prefix,s=c.iconName,a=c.children,i=c.attributes,r=c.symbol,n=r===!0?"".concat(e,"-").concat(H.cssPrefix,"-").concat(s):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},i),{},{id:n}),children:a}]}]}function s3(c){var e=c.icons,s=e.main,a=e.mask,i=c.prefix,r=c.iconName,n=c.transform,o=c.symbol,t=c.title,f=c.maskId,l=c.titleId,v=c.extra,z=c.watchable,h=z===void 0?!1:z,C=a.found?a:s,S=C.width,w=C.height,y=i==="fak",L=[H.replacementClass,r?"".concat(H.cssPrefix,"-").concat(r):""].filter(function(D){return v.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(v.classes).join(" "),g={children:[],attributes:m(m({},v.attributes),{},{"data-prefix":i,"data-icon":r,class:L,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(w)})},A=y&&!~v.classes.indexOf("fa-fw")?{width:"".concat(S/w*16*.0625,"em")}:{};h&&(g.attributes[K]=""),t&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(l||S2())},children:[t]}),delete g.attributes.title);var b=m(m({},g),{},{prefix:i,iconName:r,main:s,mask:a,maskId:f,transform:n,symbol:o,styles:m(m({},A),v.styles)}),W=a.found&&s.found?_("generateAbstractMask",b)||{children:[],attributes:{}}:_("generateAbstractIcon",b)||{children:[],attributes:{}},q=W.children,h1=W.attributes;return b.children=q,b.attributes=h1,o?J6(b):K6(b)}function K3(c){var e=c.content,s=c.width,a=c.height,i=c.transform,r=c.title,n=c.extra,o=c.watchable,t=o===void 0?!1:o,f=m(m(m({},n.attributes),r?{title:r}:{}),{},{class:n.classes.join(" ")});t&&(f[K]="");var l=m({},n.styles);c3(i)&&(l.transform=k6({transform:i,startCentered:!0,width:s,height:a}),l["-webkit-transform"]=l.transform);var v=m1(l);v.length>0&&(f.style=v);var z=[];return z.push({tag:"span",attributes:f,children:[e]}),r&&z.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),z}function Z6(c){var e=c.content,s=c.title,a=c.extra,i=m(m(m({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")}),r=m1(a.styles);r.length>0&&(i.style=r);var n=[];return n.push({tag:"span",attributes:i,children:[e]}),s&&n.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),n}var _1=k.styles;function q1(c){var e=c[0],s=c[1],a=c.slice(4),i=$1(a,1),r=i[0],n=null;return Array.isArray(r)?n={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(X.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(X.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(X.PRIMARY),fill:"currentColor",d:r[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:s,icon:n}}var c0={found:!1,width:512,height:512};function a0(c,e){!p4&&!H.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function G1(c,e){var s=e;return e==="fa"&&H.styleDefault!==null&&(e=U()),new Promise(function(a,i){var r={found:!1,width:512,height:512,icon:_("missingIconAbstract")||{}};if(s==="fa"){var n=y4(c)||{};c=n.iconName||c,e=n.prefix||e}if(c&&e&&_1[e]&&_1[e][c]){var o=_1[e][c];return a(q1(o))}a0(c,e),a(m(m({},c0),{},{icon:H.showMissingIcons&&c?_("missingIconAbstract")||{}:{}}))})}var J3=function(){},j1=H.measurePerformance&&K2&&K2.mark&&K2.measure?K2:{mark:J3,measure:J3},d2='FA "6.5.2"',e0=function(e){return j1.mark("".concat(d2," ").concat(e," begins")),function(){return P4(e)}},P4=function(e){j1.mark("".concat(d2," ").concat(e," ends")),j1.measure("".concat(d2," ").concat(e),"".concat(d2," ").concat(e," begins"),"".concat(d2," ").concat(e," ends"))},r3={begin:e0,end:P4},n1=function(){};function Z3(c){var e=c.getAttribute?c.getAttribute(K):null;return typeof e=="string"}function i0(c){var e=c.getAttribute?c.getAttribute(Q1):null,s=c.getAttribute?c.getAttribute(K1):null;return e&&s}function s0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(H.replacementClass)}function r0(){if(H.autoReplaceSvg===!0)return o1.replace;var c=o1[H.autoReplaceSvg];return c||o1.replace}function n0(c){return u.createElementNS("http://www.w3.org/2000/svg",c)}function o0(c){return u.createElement(c)}function T4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.ceFn,a=s===void 0?c.tag==="svg"?n0:o0:s;if(typeof c=="string")return u.createTextNode(c);var i=a(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var r=c.children||[];return r.forEach(function(n){i.appendChild(T4(n,{ceFn:a}))}),i}function t0(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var o1={replace:function(e){var s=e[0];if(s.parentNode)if(e[1].forEach(function(i){s.parentNode.insertBefore(T4(i),s)}),s.getAttribute(K)===null&&H.keepOriginalSource){var a=u.createComment(t0(s));s.parentNode.replaceChild(a,s)}else s.remove()},nest:function(e){var s=e[0],a=e[1];if(~Z1(s).indexOf(H.replacementClass))return o1.replace(e);var i=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var r=a[0].attributes.class.split(" ").reduce(function(o,t){return t===H.replacementClass||t.match(i)?o.toSvg.push(t):o.toNode.push(t),o},{toNode:[],toSvg:[]});a[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",r.toNode.join(" "))}var n=a.map(function(o){return y2(o)}).join(`
`);s.setAttribute(K,""),s.innerHTML=n}};function c4(c){c()}function F4(c,e){var s=typeof e=="function"?e:n1;if(c.length===0)s();else{var a=c4;H.mutateApproach===H6&&(a=E.requestAnimationFrame||c4),a(function(){var i=r0(),r=r3.begin("mutate");c.map(i),r(),s()})}}var n3=!1;function _4(){n3=!0}function Y1(){n3=!1}var f1=null;function a4(c){if(W3&&H.observeMutations){var e=c.treeCallback,s=e===void 0?n1:e,a=c.nodeCallback,i=a===void 0?n1:a,r=c.pseudoElementsCallback,n=r===void 0?n1:r,o=c.observeMutationsRoot,t=o===void 0?u:o;f1=new W3(function(f){if(!n3){var l=U();l2(f).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!Z3(v.addedNodes[0])&&(H.searchPseudoElements&&n(v.target),s(v.target)),v.type==="attributes"&&v.target.parentNode&&H.searchPseudoElements&&n(v.target.parentNode),v.type==="attributes"&&Z3(v.target)&&~d6.indexOf(v.attributeName))if(v.attributeName==="class"&&i0(v.target)){var z=H1(Z1(v.target)),h=z.prefix,C=z.iconName;v.target.setAttribute(Q1,h||l),C&&v.target.setAttribute(K1,C)}else s0(v.target)&&i(v.target)})}}),R&&f1.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function l0(){f1&&f1.disconnect()}function f0(c){var e=c.getAttribute("style"),s=[];return e&&(s=e.split(";").reduce(function(a,i){var r=i.split(":"),n=r[0],o=r.slice(1);return n&&o.length>0&&(a[n]=o.join(":").trim()),a},{})),s}function m0(c){var e=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",i=H1(Z1(c));return i.prefix||(i.prefix=U()),e&&s&&(i.prefix=e,i.iconName=s),i.iconName&&i.prefix||(i.prefix&&a.length>0&&(i.iconName=O6(i.prefix,c.innerText)||e3(i.prefix,E1(c.innerText))),!i.iconName&&H.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function v0(c){var e=l2(c.attributes).reduce(function(i,r){return i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i},{}),s=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return H.autoA11y&&(s?e["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(a||S2()):(e["aria-hidden"]="true",e.focusable="false")),e}function H0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:P,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function e4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},s=m0(c),a=s.iconName,i=s.prefix,r=s.rest,n=v0(c),o=O1("parseNodeAttributes",{},c),t=e.styleParser?f0(c):[];return m({iconName:a,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:P,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:t,attributes:n}},o)}var z0=k.styles;function R4(c){var e=H.autoReplaceSvg==="nest"?e4(c,{styleParser:!1}):e4(c);return~e.extra.classes.indexOf(u4)?_("generateLayersText",c,e):_("generateSvgReplacementMutation",c,e)}var O=new Set;J1.map(function(c){O.add("fa-".concat(c))});Object.keys(g2[p]).map(O.add.bind(O));Object.keys(g2[M]).map(O.add.bind(O));O=w2(O);function i4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var s=u.documentElement.classList,a=function(v){return s.add("".concat(q3,"-").concat(v))},i=function(v){return s.remove("".concat(q3,"-").concat(v))},r=H.autoFetchSvg?O:J1.map(function(l){return"fa-".concat(l)}).concat(Object.keys(z0));r.includes("fa")||r.push("fa");var n=[".".concat(u4,":not([").concat(K,"])")].concat(r.map(function(l){return".".concat(l,":not([").concat(K,"])")})).join(", ");if(n.length===0)return Promise.resolve();var o=[];try{o=l2(c.querySelectorAll(n))}catch{}if(o.length>0)a("pending"),i("complete");else return Promise.resolve();var t=r3.begin("onTree"),f=o.reduce(function(l,v){try{var z=R4(v);z&&l.push(z)}catch(h){p4||h.name==="MissingIcon"&&console.error(h)}return l},[]);return new Promise(function(l,v){Promise.all(f).then(function(z){F4(z,function(){a("active"),a("complete"),i("pending"),typeof e=="function"&&e(),t(),l()})}).catch(function(z){t(),v(z)})})}function h0(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;R4(c).then(function(s){s&&F4([s],e)})}function V0(c){return function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:W1(e||{}),i=s.mask;return i&&(i=(i||{}).icon?i:W1(i||{})),c(a,m(m({},s),{},{mask:i}))}}var p0=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.transform,i=a===void 0?P:a,r=s.symbol,n=r===void 0?!1:r,o=s.mask,t=o===void 0?null:o,f=s.maskId,l=f===void 0?null:f,v=s.title,z=v===void 0?null:v,h=s.titleId,C=h===void 0?null:h,S=s.classes,w=S===void 0?[]:S,y=s.attributes,L=y===void 0?{}:y,g=s.styles,A=g===void 0?{}:g;if(e){var b=e.prefix,W=e.iconName,q=e.icon;return z1(m({type:"icon"},e),function(){return J("beforeDOMElementCreation",{iconDefinition:e,params:s}),H.autoA11y&&(z?L["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(C||S2()):(L["aria-hidden"]="true",L.focusable="false")),s3({icons:{main:q1(q),mask:t?q1(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:W,transform:m(m({},P),i),symbol:n,title:z,maskId:l,titleId:C,extra:{attributes:L,styles:A,classes:w}})})}},u0={mixout:function(){return{icon:V0(p0)}},hooks:function(){return{mutationObserverCallbacks:function(s){return s.treeCallback=i4,s.nodeCallback=h0,s}}},provides:function(e){e.i2svg=function(s){var a=s.node,i=a===void 0?u:a,r=s.callback,n=r===void 0?function(){}:r;return i4(i,n)},e.generateSvgReplacementMutation=function(s,a){var i=a.iconName,r=a.title,n=a.titleId,o=a.prefix,t=a.transform,f=a.symbol,l=a.mask,v=a.maskId,z=a.extra;return new Promise(function(h,C){Promise.all([G1(i,o),l.iconName?G1(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var w=$1(S,2),y=w[0],L=w[1];h([s,s3({icons:{main:y,mask:L},prefix:o,iconName:i,transform:t,symbol:f,maskId:v,title:r,titleId:n,extra:z,watchable:!0})])}).catch(C)})},e.generateAbstractIcon=function(s){var a=s.children,i=s.attributes,r=s.main,n=s.transform,o=s.styles,t=m1(o);t.length>0&&(i.style=t);var f;return c3(n)&&(f=_("generateAbstractTransformGrouping",{main:r,transform:n,containerWidth:r.width,iconWidth:r.width})),a.push(f||r.icon),{children:a,attributes:i}}}},M0={mixout:function(){return{layer:function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.classes,r=i===void 0?[]:i;return z1({type:"layer"},function(){J("beforeDOMElementCreation",{assembler:s,params:a});var n=[];return s(function(o){Array.isArray(o)?o.map(function(t){n=n.concat(t.abstract)}):n=n.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(w2(r)).join(" ")},children:n}]})}}}},d0={mixout:function(){return{counter:function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.title,r=i===void 0?null:i,n=a.classes,o=n===void 0?[]:n,t=a.attributes,f=t===void 0?{}:t,l=a.styles,v=l===void 0?{}:l;return z1({type:"counter",content:s},function(){return J("beforeDOMElementCreation",{content:s,params:a}),Z6({content:s.toString(),title:r,extra:{attributes:f,styles:v,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(w2(o))}})})}}}},C0={mixout:function(){return{text:function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.transform,r=i===void 0?P:i,n=a.title,o=n===void 0?null:n,t=a.classes,f=t===void 0?[]:t,l=a.attributes,v=l===void 0?{}:l,z=a.styles,h=z===void 0?{}:z;return z1({type:"text",content:s},function(){return J("beforeDOMElementCreation",{content:s,params:a}),K3({content:s,transform:m(m({},P),r),title:o,extra:{attributes:v,styles:h,classes:["".concat(H.cssPrefix,"-layers-text")].concat(w2(f))}})})}}},provides:function(e){e.generateLayersText=function(s,a){var i=a.title,r=a.transform,n=a.extra,o=null,t=null;if(z4){var f=parseInt(getComputedStyle(s).fontSize,10),l=s.getBoundingClientRect();o=l.width/f,t=l.height/f}return H.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([s,K3({content:s.innerHTML,width:o,height:t,transform:r,title:i,extra:n,watchable:!0})])}}},L0=new RegExp('"',"ug"),s4=[1105920,1112319];function g0(c){var e=c.replace(L0,""),s=R6(e,0),a=s>=s4[0]&&s<=s4[1],i=e.length===2?e[0]===e[1]:!1;return{value:E1(i?e[0]:e),isSecondary:a||i}}function r4(c,e){var s="".concat(v6).concat(e.replace(":","-"));return new Promise(function(a,i){if(c.getAttribute(s)!==null)return a();var r=l2(c.children),n=r.filter(function(q){return q.getAttribute(I1)===e})[0],o=E.getComputedStyle(c,e),t=o.getPropertyValue("font-family").match(p6),f=o.getPropertyValue("font-weight"),l=o.getPropertyValue("content");if(n&&!t)return c.removeChild(n),a();if(t&&l!=="none"&&l!==""){var v=o.getPropertyValue("content"),z=~["Sharp"].indexOf(t[2])?M:p,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(t[2])?x2[z][t[2].toLowerCase()]:u6[z][f],C=g0(v),S=C.value,w=C.isSecondary,y=t[0].startsWith("FontAwesome"),L=e3(h,S),g=L;if(y){var A=W6(S);A.iconName&&A.prefix&&(L=A.iconName,h=A.prefix)}if(L&&!w&&(!n||n.getAttribute(Q1)!==h||n.getAttribute(K1)!==g)){c.setAttribute(s,g),n&&c.removeChild(n);var b=H0(),W=b.extra;W.attributes[I1]=e,G1(L,h).then(function(q){var h1=s3(m(m({},b),{},{icons:{main:q,mask:i3()},prefix:h,iconName:g,extra:W,watchable:!0})),D=u.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(D,c.firstChild):c.appendChild(D),D.outerHTML=h1.map(function(I4){return y2(I4)}).join(`
`),c.removeAttribute(s),a()}).catch(i)}else a()}else a()})}function x0(c){return Promise.all([r4(c,"::before"),r4(c,"::after")])}function b0(c){return c.parentNode!==document.head&&!~z6.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(I1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function n4(c){if(R)return new Promise(function(e,s){var a=l2(c.querySelectorAll("*")).filter(b0).map(x0),i=r3.begin("searchPseudoElements");_4(),Promise.all(a).then(function(){i(),Y1(),e()}).catch(function(){i(),Y1(),s()})})}var N0={hooks:function(){return{mutationObserverCallbacks:function(s){return s.pseudoElementsCallback=n4,s}}},provides:function(e){e.pseudoElements2svg=function(s){var a=s.node,i=a===void 0?u:a;H.searchPseudoElements&&n4(i)}}},o4=!1,S0={mixout:function(){return{dom:{unwatch:function(){_4(),o4=!0}}}},hooks:function(){return{bootstrap:function(){a4(O1("mutationObserverCallbacks",{}))},noAuto:function(){l0()},watch:function(s){var a=s.observeMutationsRoot;o4?Y1():a4(O1("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},t4=function(e){var s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,i){var r=i.toLowerCase().split("-"),n=r[0],o=r.slice(1).join("-");if(n&&o==="h")return a.flipX=!0,a;if(n&&o==="v")return a.flipY=!0,a;if(o=parseFloat(o),isNaN(o))return a;switch(n){case"grow":a.size=a.size+o;break;case"shrink":a.size=a.size-o;break;case"left":a.x=a.x-o;break;case"right":a.x=a.x+o;break;case"up":a.y=a.y-o;break;case"down":a.y=a.y+o;break;case"rotate":a.rotate=a.rotate+o;break}return a},s)},w0={mixout:function(){return{parse:{transform:function(s){return t4(s)}}}},hooks:function(){return{parseNodeAttributes:function(s,a){var i=a.getAttribute("data-fa-transform");return i&&(s.transform=t4(i)),s}}},provides:function(e){e.generateAbstractTransformGrouping=function(s){var a=s.main,i=s.transform,r=s.containerWidth,n=s.iconWidth,o={transform:"translate(".concat(r/2," 256)")},t="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),v={transform:"".concat(t," ").concat(f," ").concat(l)},z={transform:"translate(".concat(n/2*-1," -256)")},h={outer:o,inner:v,path:z};return{tag:"g",attributes:m({},h.outer),children:[{tag:"g",attributes:m({},h.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),h.path)}]}]}}}},R1={x:0,y:0,width:"100%",height:"100%"};function l4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function k0(c){return c.tag==="g"?c.children:[c]}var y0={hooks:function(){return{parseNodeAttributes:function(s,a){var i=a.getAttribute("data-fa-mask"),r=i?H1(i.split(" ").map(function(n){return n.trim()})):i3();return r.prefix||(r.prefix=U()),s.mask=r,s.maskId=a.getAttribute("data-fa-mask-id"),s}}},provides:function(e){e.generateAbstractMask=function(s){var a=s.children,i=s.attributes,r=s.main,n=s.mask,o=s.maskId,t=s.transform,f=r.width,l=r.icon,v=n.width,z=n.icon,h=w6({transform:t,containerWidth:v,iconWidth:f}),C={tag:"rect",attributes:m(m({},R1),{},{fill:"white"})},S=l.children?{children:l.children.map(l4)}:{},w={tag:"g",attributes:m({},h.inner),children:[l4(m({tag:l.tag,attributes:m(m({},l.attributes),h.path)},S))]},y={tag:"g",attributes:m({},h.outer),children:[w]},L="mask-".concat(o||S2()),g="clip-".concat(o||S2()),A={tag:"mask",attributes:m(m({},R1),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,y]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:k0(z)},A]};return a.push(b,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(L,")")},R1)}),{children:a,attributes:i}}}},A0={provides:function(e){var s=!1;E.matchMedia&&(s=E.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=m(m({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:m(m({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||o.children.push({tag:"animate",attributes:m(m({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},n),{},{values:"1;0;1;1;0;1;"})}),a.push(o),a.push({tag:"path",attributes:m(m({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:m(m({},n),{},{values:"1;0;0;0;0;1;"})}]}),s||a.push({tag:"path",attributes:m(m({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},P0={hooks:function(){return{parseNodeAttributes:function(s,a){var i=a.getAttribute("data-fa-symbol"),r=i===null?!1:i===""?!0:i;return s.symbol=r,s}}}},T0=[A6,u0,M0,d0,C0,N0,S0,w0,y0,A0,P0];j6(T0,{mixoutsTo:N});var I8=N.noAuto,E8=N.config,U8=N.library,O8=N.dom,D4=N.parse,W8=N.findIconDefinition,q8=N.toHtml,B4=N.icon,G8=N.layer,F0=N.text,_0=N.counter;var R0=["*"],D0=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},B0=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},I0=c=>{let e={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(e).map(s=>e[s]?s:null).filter(s=>s)},E0=c=>c.prefix!==void 0&&c.iconName!==void 0,U0=(c,e)=>E0(c)?c:typeof c=="string"?{prefix:e,iconName:c}:{prefix:c[0],iconName:c[1]},O0=(()=>{let e=class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=B2({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),W0=(()=>{let e=class e{constructor(){this.definitions={}}addIcons(...a){for(let i of a){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let r of i.icon[2])typeof r=="string"&&(this.definitions[i.prefix][r]=i)}}addIconPacks(...a){for(let i of a){let r=Object.keys(i).map(n=>i[n]);this.addIcons(...r)}}getIconDefinition(a,i){return a in this.definitions&&i in this.definitions[a]?this.definitions[a][i]:null}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=B2({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),q0=(()=>{let e=class e{constructor(){this.stackItemSize="1x"}ngOnChanges(a){if("size"in a)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=I2({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[E2]});let c=e;return c})(),G0=(()=>{let e=class e{constructor(a,i){this.renderer=a,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(a){"size"in a&&(a.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${a.size.currentValue}`),a.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${a.size.previousValue}`))}};e.\u0275fac=function(i){return new(i||e)(V(m3),V(j))},e.\u0275cmp=G({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[E2,$],ngContentSelectors:R0,decls:1,vars:0,template:function(i,r){i&1&&(e2(),Y(0))},encapsulation:2});let c=e;return c})(),K8=(()=>{let e=class e{set spin(a){this.animation=a?"spin":void 0}set pulse(a){this.animation=a?"spin-pulse":void 0}constructor(a,i,r,n,o){this.sanitizer=a,this.config=i,this.iconLibrary=r,this.stackItem=n,this.classes=[],o!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(a){if(this.icon==null&&this.config.fallbackIcon==null){B0();return}if(a){let i=this.icon!=null?this.icon:this.config.fallbackIcon,r=this.findIconDefinition(i);if(r!=null){let n=this.buildParams();this.renderIcon(r,n)}}}render(){this.ngOnChanges({})}findIconDefinition(a){let i=U0(a,this.config.defaultPrefix);if("icon"in i)return i;let r=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return r??(D0(i),null)}buildParams(){let a={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?D4.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:[...I0(a),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(a,i){let r=B4(a,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))}};e.\u0275fac=function(i){return new(i||e)(V(d3),V(O0),V(W0),V(q0,8),V(G0,8))},e.\u0275cmp=G({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,r){i&2&&(h3("innerHTML",r.renderedIconHTML,f3),B("title",r.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[E2,$],decls:0,vars:0,template:function(i,r){},encapsulation:2});let c=e;return c})();var J8=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c2({type:e}),e.\u0275inj=Z({});let c=e;return c})();var j0={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},c5=j0;var Y0={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},a5=Y0;var e5={prefix:"fas",iconName:"handshake",icon:[640,512,[],"f2b5","M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"]};var i5={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]};var s5={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"]};var r5={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]};export{A1 as a,X2 as b,w8 as c,k8 as d,R8 as e,K8 as f,J8 as g,c5 as h,a5 as i,e5 as j,i5 as k,s5 as l,r5 as m};
