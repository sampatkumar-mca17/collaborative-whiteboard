import{c as S3,d as k3,f as _3,g as A3,i as T3}from"./chunk-2QBIGXJX.js";import{a as s1,b as P3,c as F3,g as D3,h as I3,i as R3,j as T2,l as B3,m as T,n as E3,o as l1,p as O3,r as U3,t as j3,u as W3,v as P2,w as q3}from"./chunk-X45RRAZ2.js";import{$a as H2,Ab as u2,Bb as x3,C as Z2,Cb as g2,Db as y3,E as A1,Fb as N3,Gb as k,Ja as H3,M as J2,N as T1,Na as Y,O as c1,Oa as v,Pa as b3,Pb as A2,Qa as P1,Rb as W,S as a1,T as E,Ua as V3,V as s2,Wa as _2,Xb as n1,Y as G,Ya as M3,_a as F1,a as X2,aa as V,ba as S,ca as O,da as c2,db as D1,eb as U,f as Q2,fb as a2,h as k1,hb as $,ia as e1,ja as l2,jb as m2,jc as w3,k as _1,ka as f2,kb as g3,la as v3,lb as x,mb as y,nb as D,qa as F,qb as i1,ra as t1,rb as C3,rc as I1,sa as h3,sc as r1,tb as b2,ub as V2,uc as C2,v as K2,vb as j,vc as R1,w as k2,wb as N,xa as z3,xb as M2,xc as o1,yb as L3,zb as d2}from"./chunk-4YRE6UBO.js";import{a as $2,b as p3}from"./chunk-SO6VPFYA.js";var v6=["mat-menu-item",""],h6=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],z6=["mat-icon, [matMenuItemIcon]","*"];function H6(c,e){c&1&&(v3(),x(0,"svg",2),D(1,"polygon",3),y())}var b6=["*"];function V6(c,e){if(c&1){let i=i1();x(0,"div",0),b2("keydown",function(t){l2(i);let n=V2();return f2(n._handleKeydown(t))})("click",function(){l2(i);let t=V2();return f2(t.closed.emit("click"))})("@transformMenu.start",function(t){l2(i);let n=V2();return f2(n._onAnimationStart(t))})("@transformMenu.done",function(t){l2(i);let n=V2();return f2(n._onAnimationDone(t))}),x(1,"div",1),N(2),y()()}if(c&2){let i=V2();m2(i._classList),a2("id",i.panelId)("@transformMenu",i._panelAnimationState),U("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby||null)("aria-describedby",i.ariaDescribedby||null)}}var B1=new s2("MAT_MENU_PANEL"),F2=(()=>{let e=class e{constructor(a,t,n,r,o){this._elementRef=a,this._document=t,this._focusMonitor=n,this._parentMenu=r,this._changeDetectorRef=o,this.role="menuitem",this.disabled=!1,this.disableRipple=!1,this._hovered=new Q2,this._focused=new Q2,this._highlighted=!1,this._triggersSubmenu=!1,r?.addItem?.(this)}focus(a,t){this._focusMonitor&&a?this._focusMonitor.focusVia(this._getHostElement(),a,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(a){this.disabled&&(a.preventDefault(),a.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let a=this._elementRef.nativeElement.cloneNode(!0),t=a.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return a.textContent?.trim()||""}_setHighlighted(a){this._highlighted=a,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(a){this._triggersSubmenu=a,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}};e.\u0275fac=function(t){return new(t||e)(v(F),v(n1),v(T2),v(B1,8),v(A2))},e.\u0275cmp=S({type:e,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&b2("click",function(o){return n._checkDisabled(o)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(U("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),$("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[V.HasDecoratorInputTransform,"disabled","disabled",W],disableRipple:[V.HasDecoratorInputTransform,"disableRipple","disableRipple",W]},exportAs:["matMenuItem"],standalone:!0,features:[H2,k],attrs:v6,ngContentSelectors:z6,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(j(h6),N(0),x(1,"span",0),N(2,1),y(),D(3,"div",1),D1(4,H6,2,0,":svg:svg",2)),t&2&&(Y(3),a2("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),Y(),g3(4,n._triggersSubmenu?4:-1))},dependencies:[E3],encapsulation:2,changeDetection:0});let c=e;return c})();var M6=new s2("MatMenuContent");var f1={transformMenu:I1("transformMenu",[R1("void",C2({opacity:0,transform:"scale(0.8)"})),o1("void => enter",r1("120ms cubic-bezier(0, 0, 0.2, 1)",C2({opacity:1,transform:"scale(1)"}))),o1("* => void",r1("100ms 25ms linear",C2({opacity:0})))]),fadeInItems:I1("fadeInItems",[R1("showing",C2({opacity:1})),o1("void => *",[C2({opacity:0}),r1("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},l5=f1.fadeInItems,f5=f1.transformMenu,g6=0,C6=new s2("mat-menu-default-options",{providedIn:"root",factory:L6});function L6(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}var L2=(()=>{let e=class e{get xPosition(){return this._xPosition}set xPosition(a){this._xPosition=a,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(a){this._yPosition=a,this.setPositionClasses()}set panelClass(a){let t=this._previousPanelClass,n=$2({},this._classList);t&&t.length&&t.split(" ").forEach(r=>{n[r]=!1}),this._previousPanelClass=a,a&&a.length&&(a.split(" ").forEach(r=>{n[r]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}get classList(){return this.panelClass}set classList(a){this.panelClass=a}constructor(a,t,n,r){this._elementRef=a,this._ngZone=t,this._changeDetectorRef=r,this._elevationPrefix="mat-elevation-z",this._baseElevation=8,this._directDescendantItems=new h3,this._classList={},this._panelAnimationState="void",this._animationDone=new Q2,this.closed=new t1,this.close=this.closed,this.panelId=`mat-menu-panel-${g6++}`,this.overlayPanelClass=n.overlayPanelClass||"",this._xPosition=n.xPosition,this._yPosition=n.yPosition,this.backdropClass=n.backdropClass,this.overlapTrigger=n.overlapTrigger,this.hasBackdrop=n.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new D3(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(J2(this._directDescendantItems),T1(a=>K2(...a.map(t=>t._focused)))).subscribe(a=>this._keyManager.updateActiveItem(a)),this._directDescendantItems.changes.subscribe(a=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=a.toArray(),r=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[r]&&!n[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusSubscription?.unsubscribe()}_hovered(){return this._directDescendantItems.changes.pipe(J2(this._directDescendantItems),T1(t=>K2(...t.map(n=>n._hovered))))}addItem(a){}removeItem(a){}_handleKeydown(a){let t=a.keyCode,n=this._keyManager;switch(t){case 27:F3(a)||(a.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(a);return}a.stopPropagation()}focusFirstItem(a="program"){this._firstItemFocusSubscription?.unsubscribe(),this._firstItemFocusSubscription=this._ngZone.onStable.pipe(Z2(1)).subscribe(()=>{let t=null;if(this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(a).setFirstItemActive(),!n.activeItem&&t&&t.focus()}})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(a){let t=Math.min(this._baseElevation+a,24),n=`${this._elevationPrefix}${t}`,r=Object.keys(this._classList).find(o=>o.startsWith(this._elevationPrefix));if(!r||r===this._previousElevation){let o=$2({},this._classList);this._previousElevation&&(o[this._previousElevation]=!1),o[n]=!0,this._previousElevation=n,this._classList=o}}setPositionClasses(a=this.xPosition,t=this.yPosition){this._classList=p3($2({},this._classList),{"mat-menu-before":a==="before","mat-menu-after":a==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(a){this._animationDone.next(a),this._isAnimating=!1}_onAnimationStart(a){this._isAnimating=!0,a.toState==="enter"&&this._keyManager.activeItemIndex===0&&(a.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe(J2(this._allItems)).subscribe(a=>{this._directDescendantItems.reset(a.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}};e.\u0275fac=function(t){return new(t||e)(v(F),v(_2),v(C6),v(A2))},e.\u0275cmp=S({type:e,selectors:[["mat-menu"]],contentQueries:function(t,n,r){if(t&1&&(M2(r,M6,5),M2(r,F2,5),M2(r,F2,4)),t&2){let o;d2(o=u2())&&(n.lazyContent=o.first),d2(o=u2())&&(n._allItems=o),d2(o=u2())&&(n.items=o)}},viewQuery:function(t,n){if(t&1&&L3(P1,5),t&2){let r;d2(r=u2())&&(n.templateRef=r.first)}},hostVars:3,hostBindings:function(t,n){t&2&&U("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[V.None,"aria-label","ariaLabel"],ariaLabelledby:[V.None,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[V.None,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[V.HasDecoratorInputTransform,"overlapTrigger","overlapTrigger",W],hasBackdrop:[V.HasDecoratorInputTransform,"hasBackdrop","hasBackdrop",a=>a==null?null:W(a)],panelClass:[V.None,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],standalone:!0,features:[N3([{provide:B1,useExisting:e}]),H2,k],ngContentSelectors:b6,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"keydown","click","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(j(),D1(0,V6,3,7,"ng-template"))},styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-divider{color:var(--mat-menu-divider-color);margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:var(--mat-menu-item-trailing-spacing);padding-right:var(--mat-menu-item-leading-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]),.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon])[dir=rtl]{padding-left:var(--mat-menu-item-with-icon-trailing-spacing);padding-right:var(--mat-menu-item-with-icon-leading-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[f1.transformMenu,f1.fadeInItems]},changeDetection:0});let c=e;return c})(),X3=new s2("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let c=G(P2);return()=>c.scrollStrategies.reposition()}});function x6(c){return()=>c.scrollStrategies.reposition()}var y6={provide:X3,deps:[P2],useFactory:x6},G3=P3({passive:!0});var Q3=(()=>{let e=class e{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(a){this.menu=a}get menu(){return this._menu}set menu(a){a!==this._menu&&(this._menu=a,this._menuCloseSubscription.unsubscribe(),a&&(this._parentMaterialMenu,this._menuCloseSubscription=a.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(a,t,n,r,o,s,f,l,d){this._overlay=a,this._element=t,this._viewContainerRef=n,this._menuItemInstance=s,this._dir=f,this._focusMonitor=l,this._ngZone=d,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=X2.EMPTY,this._hoverSubscription=X2.EMPTY,this._menuCloseSubscription=X2.EMPTY,this._changeDetectorRef=G(A2),this._handleTouchStart=p=>{R3(p)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new t1,this.onMenuOpen=this.menuOpened,this.menuClosed=new t1,this.onMenuClose=this.menuClosed,this._scrollStrategy=r,this._parentMaterialMenu=o instanceof L2?o:void 0,t.nativeElement.addEventListener("touchstart",this._handleTouchStart,G3)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,G3),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){let a=this.menu;if(this._menuOpen||!a)return;let t=this._createOverlay(a),n=t.getConfig(),r=n.positionStrategy;this._setPosition(a,r),n.hasBackdrop=a.hasBackdrop==null?!this.triggersSubmenu():a.hasBackdrop,t.attach(this._getPortal(a)),a.lazyContent&&a.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(a),a instanceof L2&&(a._startAnimation(),a._directDescendantItems.changes.pipe(c1(a.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(a,t){this._focusMonitor&&a?this._focusMonitor.focusVia(this._element,a,t):this._element.nativeElement.focus(t)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(a){if(!this._overlayRef||!this.menuOpen)return;let t=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&(a==="keydown"||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,t instanceof L2?(t._resetAnimation(),t.lazyContent?t._animationDone.pipe(k2(n=>n.toState==="void"),Z2(1),c1(t.lazyContent._attached)).subscribe({next:()=>t.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),t?.lazyContent?.detach())}_initMenu(a){a.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,a.direction=this.dir,this._setMenuElevation(a),a.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(a){if(a.setElevation){let t=0,n=a.parentMenu;for(;n;)t++,n=n.parentMenu;a.setElevation(t)}}_setIsMenuOpen(a){a!==this._menuOpen&&(this._menuOpen=a,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(a),this._changeDetectorRef.markForCheck())}_createOverlay(a){if(!this._overlayRef){let t=this._getOverlayConfig(a);this._subscribeToPositions(a,t.positionStrategy),this._overlayRef=this._overlay.create(t),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(a){return new W3({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:a.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:a.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(a,t){a.setPositionClasses&&t.positionChanges.subscribe(n=>{let r=n.connectionPair.overlayX==="start"?"after":"before",o=n.connectionPair.overlayY==="top"?"below":"above";this._ngZone?this._ngZone.run(()=>a.setPositionClasses(r,o)):a.setPositionClasses(r,o)})}_setPosition(a,t){let[n,r]=a.xPosition==="before"?["end","start"]:["start","end"],[o,s]=a.yPosition==="above"?["bottom","top"]:["top","bottom"],[f,l]=[o,s],[d,p]=[n,r],h=0;if(this.triggersSubmenu()){if(p=n=a.xPosition==="before"?"start":"end",r=d=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let g=this._parentMaterialMenu.items.first;this._parentInnerPadding=g?g._getHostElement().offsetTop:0}h=o==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else a.overlapTrigger||(f=o==="top"?"bottom":"top",l=s==="top"?"bottom":"top");t.withPositions([{originX:n,originY:f,overlayX:d,overlayY:o,offsetY:h},{originX:r,originY:f,overlayX:p,overlayY:o,offsetY:h},{originX:n,originY:l,overlayX:d,overlayY:s,offsetY:-h},{originX:r,originY:l,overlayX:p,overlayY:s,offsetY:-h}])}_menuClosingActions(){let a=this._overlayRef.backdropClick(),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:_1(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(k2(o=>o!==this._menuItemInstance),k2(()=>this._menuOpen)):_1();return K2(a,n,r,t)}_handleMousedown(a){I3(a)||(this._openedBy=a.button===0?"mouse":void 0,this.triggersSubmenu()&&a.preventDefault())}_handleKeydown(a){let t=a.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(a){this.triggersSubmenu()?(a.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe(k2(a=>a===this._menuItemInstance&&!a.disabled),A1(0,k1)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof L2&&this.menu._isAnimating?this.menu._animationDone.pipe(Z2(1),A1(0,k1),c1(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(a){return(!this._portal||this._portal.templateRef!==a.templateRef)&&(this._portal=new U3(a.templateRef,this._viewContainerRef)),this._portal}};e.\u0275fac=function(t){return new(t||e)(v(P2),v(F),v(M3),v(X3),v(B1,8),v(F2,10),v(B3,8),v(T2),v(_2))},e.\u0275dir=c2({type:e,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&b2("click",function(o){return n._handleClick(o)})("mousedown",function(o){return n._handleMousedown(o)})("keydown",function(o){return n._handleKeydown(o)}),t&2&&U("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[V.None,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[V.None,"matMenuTriggerFor","menu"],menuData:[V.None,"matMenuTriggerData","menuData"],restoreFocus:[V.None,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],standalone:!0});let c=e;return c})(),K3=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=O({type:e}),e.\u0275inj=E({providers:[y6],imports:[w3,l1,T,q3,j3,T]});let c=e;return c})();var S6=["*",[["mat-toolbar-row"]]],k6=["*","mat-toolbar-row"],_6=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=c2({type:e,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"],standalone:!0});let c=e;return c})(),Z3=(()=>{let e=class e{constructor(a,t,n){this._elementRef=a,this._platform=t,this._document=n}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}};e.\u0275fac=function(t){return new(t||e)(v(F),v(s1),v(n1))},e.\u0275cmp=S({type:e,selectors:[["mat-toolbar"]],contentQueries:function(t,n,r){if(t&1&&M2(r,_6,5),t&2){let o;d2(o=u2())&&(n._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,n){t&2&&(m2(n.color?"mat-"+n.color:""),$("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],standalone:!0,features:[k],ngContentSelectors:k6,decls:2,vars:0,template:function(t,n){t&1&&(j(S6),N(0),N(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],encapsulation:2,changeDetection:0});let c=e;return c})();var J3=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=O({type:e}),e.\u0275inj=E({imports:[T,T]});let c=e;return c})();var c4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=O({type:e}),e.\u0275inj=E({imports:[T,T]});let c=e;return c})();var T6=["mat-button",""],P6=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],F6=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var D6=new s2("MAT_BUTTON_CONFIG");var I6=[{attribute:"mat-button",mdcClasses:["mdc-button","mat-mdc-button"]},{attribute:"mat-flat-button",mdcClasses:["mdc-button","mdc-button--unelevated","mat-mdc-unelevated-button"]},{attribute:"mat-raised-button",mdcClasses:["mdc-button","mdc-button--raised","mat-mdc-raised-button"]},{attribute:"mat-stroked-button",mdcClasses:["mdc-button","mdc-button--outlined","mat-mdc-outlined-button"]},{attribute:"mat-fab",mdcClasses:["mdc-fab","mat-mdc-fab"]},{attribute:"mat-mini-fab",mdcClasses:["mdc-fab","mdc-fab--mini","mat-mdc-mini-fab"]},{attribute:"mat-icon-button",mdcClasses:["mdc-icon-button","mat-mdc-icon-button"]}],R6=(()=>{let e=class e{get ripple(){return this._rippleLoader?.getRipple(this._elementRef.nativeElement)}set ripple(a){this._rippleLoader?.attachRipple(this._elementRef.nativeElement,a)}get disableRipple(){return this._disableRipple}set disableRipple(a){this._disableRipple=a,this._updateRippleDisabled()}get disabled(){return this._disabled}set disabled(a){this._disabled=a,this._updateRippleDisabled()}constructor(a,t,n,r){this._elementRef=a,this._platform=t,this._ngZone=n,this._animationMode=r,this._focusMonitor=G(T2),this._rippleLoader=G(O3),this._isFab=!1,this._disableRipple=!1,this._disabled=!1;let o=G(D6,{optional:!0}),s=a.nativeElement,f=s.classList;this.disabledInteractive=o?.disabledInteractive??!1,this._rippleLoader?.configureRipple(s,{className:"mat-mdc-button-ripple"});for(let{attribute:l,mdcClasses:d}of I6)s.hasAttribute(l)&&f.add(...d)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(a="program",t){a?this._focusMonitor.focusVia(this._elementRef.nativeElement,a,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}};e.\u0275fac=function(t){b3()},e.\u0275dir=c2({type:e,inputs:{color:"color",disableRipple:[V.HasDecoratorInputTransform,"disableRipple","disableRipple",W],disabled:[V.HasDecoratorInputTransform,"disabled","disabled",W],ariaDisabled:[V.HasDecoratorInputTransform,"aria-disabled","ariaDisabled",W],disabledInteractive:[V.HasDecoratorInputTransform,"disabledInteractive","disabledInteractive",W]},features:[H2]});let c=e;return c})();var a4=(()=>{let e=class e extends R6{constructor(a,t,n,r){super(a,t,n,r)}};e.\u0275fac=function(t){return new(t||e)(v(F),v(s1),v(_2),v(z3,8))},e.\u0275cmp=S({type:e,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""]],hostVars:14,hostBindings:function(t,n){t&2&&(U("disabled",n._getDisabledAttribute())("aria-disabled",n._getAriaDisabled()),m2(n.color?"mat-"+n.color:""),$("mat-mdc-button-disabled",n.disabled)("mat-mdc-button-disabled-interactive",n.disabledInteractive)("_mat-animation-noopable",n._animationMode==="NoopAnimations")("mat-unthemed",!n.color)("mat-mdc-button-base",!0))},exportAs:["matButton"],standalone:!0,features:[F1,k],attrs:T6,ngContentSelectors:F6,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,n){t&1&&(j(P6),D(0,"span",0),N(1),x(2,"span",1),N(3,1),y(),N(4,2),D(5,"span",2)(6,"span",3)),t&2&&$("mdc-button__ripple",!n._isFab)("mdc-fab__ripple",n._isFab)},styles:['.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px);display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{font-family:var(--mdc-text-button-label-text-font);font-size:var(--mdc-text-button-label-text-size);letter-spacing:var(--mdc-text-button-label-text-tracking);font-weight:var(--mdc-text-button-label-text-weight);text-transform:var(--mdc-text-button-label-text-transform);height:var(--mdc-text-button-container-height);border-radius:var(--mdc-text-button-container-shape);padding:0 var(--mat-text-button-horizontal-padding, 8px)}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape)}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color)}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity)}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity)}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity)}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{font-family:var(--mdc-filled-button-label-text-font);font-size:var(--mdc-filled-button-label-text-size);letter-spacing:var(--mdc-filled-button-label-text-tracking);font-weight:var(--mdc-filled-button-label-text-weight);text-transform:var(--mdc-filled-button-label-text-transform);height:var(--mdc-filled-button-container-height);border-radius:var(--mdc-filled-button-container-shape);padding:0 var(--mat-filled-button-horizontal-padding, 16px)}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color)}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color)}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity)}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity)}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity)}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{font-family:var(--mdc-protected-button-label-text-font);font-size:var(--mdc-protected-button-label-text-size);letter-spacing:var(--mdc-protected-button-label-text-tracking);font-weight:var(--mdc-protected-button-label-text-weight);text-transform:var(--mdc-protected-button-label-text-transform);height:var(--mdc-protected-button-container-height);border-radius:var(--mdc-protected-button-container-shape);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow)}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color)}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color)}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity)}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity)}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity)}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow)}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow)}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow)}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow)}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{font-family:var(--mdc-outlined-button-label-text-font);font-size:var(--mdc-outlined-button-label-text-size);letter-spacing:var(--mdc-outlined-button-label-text-tracking);font-weight:var(--mdc-outlined-button-label-text-weight);text-transform:var(--mdc-outlined-button-label-text-transform);height:var(--mdc-outlined-button-container-height);border-radius:var(--mdc-outlined-button-container-shape);padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width);padding:0 var(--mat-outlined-button-horizontal-padding, 15px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color)}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape)}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color)}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width))}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color)}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity)}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity)}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity)}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button-base{text-decoration:none}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}"],encapsulation:2,changeDetection:0});let c=e;return c})();var e4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=O({type:e}),e.\u0275inj=E({imports:[T,l1,T]});let c=e;return c})();function t4(c,e){var i=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);e&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(c,t).enumerable})),i.push.apply(i,a)}return i}function m(c){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?t4(Object(i),!0).forEach(function(a){M(c,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(i)):t4(Object(i)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(i,a))})}return c}function g1(c){"@babel/helpers - typeof";return g1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g1(c)}function E6(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function i4(c,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(c,a.key,a)}}function O6(c,e,i){return e&&i4(c.prototype,e),i&&i4(c,i),Object.defineProperty(c,"prototype",{writable:!1}),c}function M(c,e,i){return e in c?Object.defineProperty(c,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):c[e]=i,c}function a3(c,e){return j6(c)||q6(c,e)||S4(c,e)||Y6()}function q2(c){return U6(c)||W6(c)||S4(c)||G6()}function U6(c){if(Array.isArray(c))return W1(c)}function j6(c){if(Array.isArray(c))return c}function W6(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function q6(c,e){var i=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var a=[],t=!0,n=!1,r,o;try{for(i=i.call(c);!(t=(r=i.next()).done)&&(a.push(r.value),!(e&&a.length===e));t=!0);}catch(s){n=!0,o=s}finally{try{!t&&i.return!=null&&i.return()}finally{if(n)throw o}}return a}}function S4(c,e){if(c){if(typeof c=="string")return W1(c,e);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return W1(c,e)}}function W1(c,e){(e==null||e>c.length)&&(e=c.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=c[i];return a}function G6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n4=function(){},e3={},k4={},_4=null,A4={mark:n4,measure:n4};try{typeof window<"u"&&(e3=window),typeof document<"u"&&(k4=document),typeof MutationObserver<"u"&&(_4=MutationObserver),typeof performance<"u"&&(A4=performance)}catch{}var $6=e3.navigator||{},r4=$6.userAgent,o4=r4===void 0?"":r4,t2=e3,H=k4,s4=_4,m1=A4,_5=!!t2.document,Z=!!H.documentElement&&!!H.head&&typeof H.addEventListener=="function"&&typeof H.createElement=="function",T4=~o4.indexOf("MSIE")||~o4.indexOf("Trident/"),d1,u1,p1,v1,h1,X="___FONT_AWESOME___",q1=16,P4="fa",F4="svg-inline--fa",h2="data-fa-i2svg",G1="data-fa-pseudo-element",X6="data-fa-pseudo-element-pending",t3="data-prefix",i3="data-icon",l4="fontawesome-i2svg",Q6="async",K6=["HTML","HEAD","STYLE","SCRIPT"],D4=function(){try{return!0}catch{return!1}}(),z="classic",b="sharp",n3=[z,b];function G2(c){return new Proxy(c,{get:function(i,a){return a in i?i[a]:i[z]}})}var E2=G2((d1={},M(d1,z,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),M(d1,b,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),d1)),O2=G2((u1={},M(u1,z,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),M(u1,b,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),u1)),U2=G2((p1={},M(p1,z,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),M(p1,b,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),p1)),Z6=G2((v1={},M(v1,z,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),M(v1,b,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),v1)),J6=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,I4="fa-layers-text",c0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,a0=G2((h1={},M(h1,z,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),M(h1,b,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),h1)),R4=[1,2,3,4,5,6,7,8,9,10],e0=R4.concat([11,12,13,14,15,16,17,18,19,20]),t0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],p2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},j2=new Set;Object.keys(O2[z]).map(j2.add.bind(j2));Object.keys(O2[b]).map(j2.add.bind(j2));var i0=[].concat(n3,q2(j2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",p2.GROUP,p2.SWAP_OPACITY,p2.PRIMARY,p2.SECONDARY]).concat(R4.map(function(c){return"".concat(c,"x")})).concat(e0.map(function(c){return"w-".concat(c)})),R2=t2.FontAwesomeConfig||{};function n0(c){var e=H.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function r0(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}H&&typeof H.querySelector=="function"&&(f4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],f4.forEach(function(c){var e=a3(c,2),i=e[0],a=e[1],t=r0(n0(i));t!=null&&(R2[a]=t)}));var f4,B4={styleDefault:"solid",familyDefault:"classic",cssPrefix:P4,replacementClass:F4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};R2.familyPrefix&&(R2.cssPrefix=R2.familyPrefix);var w2=m(m({},B4),R2);w2.autoReplaceSvg||(w2.observeMutations=!1);var u={};Object.keys(B4).forEach(function(c){Object.defineProperty(u,c,{enumerable:!0,set:function(i){w2[c]=i,B2.forEach(function(a){return a(u)})},get:function(){return w2[c]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(e){w2.cssPrefix=e,B2.forEach(function(i){return i(u)})},get:function(){return w2.cssPrefix}});t2.FontAwesomeConfig=u;var B2=[];function o0(c){return B2.push(c),function(){B2.splice(B2.indexOf(c),1)}}var e2=q1,q={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function s0(c){if(!(!c||!Z)){var e=H.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var i=H.head.childNodes,a=null,t=i.length-1;t>-1;t--){var n=i[t],r=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(a=n)}return H.head.insertBefore(e,a),c}}var l0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function W2(){for(var c=12,e="";c-- >0;)e+=l0[Math.random()*62|0];return e}function S2(c){for(var e=[],i=(c||[]).length>>>0;i--;)e[i]=c[i];return e}function r3(c){return c.classList?S2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function E4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function f0(c){return Object.keys(c||{}).reduce(function(e,i){return e+"".concat(i,'="').concat(E4(c[i]),'" ')},"").trim()}function x1(c){return Object.keys(c||{}).reduce(function(e,i){return e+"".concat(i,": ").concat(c[i].trim(),";")},"")}function o3(c){return c.size!==q.size||c.x!==q.x||c.y!==q.y||c.rotate!==q.rotate||c.flipX||c.flipY}function m0(c){var e=c.transform,i=c.containerWidth,a=c.iconWidth,t={transform:"translate(".concat(i/2," 256)")},n="translate(".concat(e.x*32,", ").concat(e.y*32,") "),r="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),s={transform:"".concat(n," ").concat(r," ").concat(o)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:t,inner:s,path:f}}function d0(c){var e=c.transform,i=c.width,a=i===void 0?q1:i,t=c.height,n=t===void 0?q1:t,r=c.startCentered,o=r===void 0?!1:r,s="";return o&&T4?s+="translate(".concat(e.x/e2-a/2,"em, ").concat(e.y/e2-n/2,"em) "):o?s+="translate(calc(-50% + ".concat(e.x/e2,"em), calc(-50% + ").concat(e.y/e2,"em)) "):s+="translate(".concat(e.x/e2,"em, ").concat(e.y/e2,"em) "),s+="scale(".concat(e.size/e2*(e.flipX?-1:1),", ").concat(e.size/e2*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var u0=`:root, :host {
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
}`;function O4(){var c=P4,e=F4,i=u.cssPrefix,a=u.replacementClass,t=u0;if(i!==c||a!==e){var n=new RegExp("\\.".concat(c,"\\-"),"g"),r=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");t=t.replace(n,".".concat(i,"-")).replace(r,"--".concat(i,"-")).replace(o,".".concat(a))}return t}var m4=!1;function E1(){u.autoAddCss&&!m4&&(s0(O4()),m4=!0)}var p0={mixout:function(){return{dom:{css:O4,insertCss:E1}}},hooks:function(){return{beforeDOMElementCreation:function(){E1()},beforeI2svg:function(){E1()}}}},Q=t2||{};Q[X]||(Q[X]={});Q[X].styles||(Q[X].styles={});Q[X].hooks||(Q[X].hooks={});Q[X].shims||(Q[X].shims=[]);var I=Q[X],U4=[],v0=function c(){H.removeEventListener("DOMContentLoaded",c),C1=1,U4.map(function(e){return e()})},C1=!1;Z&&(C1=(H.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(H.readyState),C1||H.addEventListener("DOMContentLoaded",v0));function h0(c){Z&&(C1?setTimeout(c,0):U4.push(c))}function Y2(c){var e=c.tag,i=c.attributes,a=i===void 0?{}:i,t=c.children,n=t===void 0?[]:t;return typeof c=="string"?E4(c):"<".concat(e," ").concat(f0(a),">").concat(n.map(Y2).join(""),"</").concat(e,">")}function d4(c,e,i){if(c&&c[e]&&c[e][i])return{prefix:e,iconName:i,icon:c[e][i]}}var z0=function(e,i){return function(a,t,n,r){return e.call(i,a,t,n,r)}},O1=function(e,i,a,t){var n=Object.keys(e),r=n.length,o=t!==void 0?z0(i,t):i,s,f,l;for(a===void 0?(s=1,l=e[n[0]]):(s=0,l=a);s<r;s++)f=n[s],l=o(l,e[f],f,e);return l};function H0(c){for(var e=[],i=0,a=c.length;i<a;){var t=c.charCodeAt(i++);if(t>=55296&&t<=56319&&i<a){var n=c.charCodeAt(i++);(n&64512)==56320?e.push(((t&1023)<<10)+(n&1023)+65536):(e.push(t),i--)}else e.push(t)}return e}function Y1(c){var e=H0(c);return e.length===1?e[0].toString(16):null}function b0(c,e){var i=c.length,a=c.charCodeAt(e),t;return a>=55296&&a<=56319&&i>e+1&&(t=c.charCodeAt(e+1),t>=56320&&t<=57343)?(a-55296)*1024+t-56320+65536:a}function u4(c){return Object.keys(c).reduce(function(e,i){var a=c[i],t=!!a.icon;return t?e[a.iconName]=a.icon:e[i]=a,e},{})}function $1(c,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=i.skipHooks,t=a===void 0?!1:a,n=u4(e);typeof I.hooks.addPack=="function"&&!t?I.hooks.addPack(c,u4(e)):I.styles[c]=m(m({},I.styles[c]||{}),n),c==="fas"&&$1("fa",e)}var z1,H1,b1,x2=I.styles,V0=I.shims,M0=(z1={},M(z1,z,Object.values(U2[z])),M(z1,b,Object.values(U2[b])),z1),s3=null,j4={},W4={},q4={},G4={},Y4={},g0=(H1={},M(H1,z,Object.keys(E2[z])),M(H1,b,Object.keys(E2[b])),H1);function C0(c){return~i0.indexOf(c)}function L0(c,e){var i=e.split("-"),a=i[0],t=i.slice(1).join("-");return a===c&&t!==""&&!C0(t)?t:null}var $4=function(){var e=function(n){return O1(x2,function(r,o,s){return r[s]=O1(o,n,{}),r},{})};j4=e(function(t,n,r){if(n[3]&&(t[n[3]]=r),n[2]){var o=n[2].filter(function(s){return typeof s=="number"});o.forEach(function(s){t[s.toString(16)]=r})}return t}),W4=e(function(t,n,r){if(t[r]=r,n[2]){var o=n[2].filter(function(s){return typeof s=="string"});o.forEach(function(s){t[s]=r})}return t}),Y4=e(function(t,n,r){var o=n[2];return t[r]=r,o.forEach(function(s){t[s]=r}),t});var i="far"in x2||u.autoFetchSvg,a=O1(V0,function(t,n){var r=n[0],o=n[1],s=n[2];return o==="far"&&!i&&(o="fas"),typeof r=="string"&&(t.names[r]={prefix:o,iconName:s}),typeof r=="number"&&(t.unicodes[r.toString(16)]={prefix:o,iconName:s}),t},{names:{},unicodes:{}});q4=a.names,G4=a.unicodes,s3=y1(u.styleDefault,{family:u.familyDefault})};o0(function(c){s3=y1(c.styleDefault,{family:u.familyDefault})});$4();function l3(c,e){return(j4[c]||{})[e]}function x0(c,e){return(W4[c]||{})[e]}function v2(c,e){return(Y4[c]||{})[e]}function X4(c){return q4[c]||{prefix:null,iconName:null}}function y0(c){var e=G4[c],i=l3("fas",c);return e||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function i2(){return s3}var f3=function(){return{prefix:null,iconName:null,rest:[]}};function y1(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.family,a=i===void 0?z:i,t=E2[a][c],n=O2[a][c]||O2[a][t],r=c in I.styles?c:null;return n||r||null}var p4=(b1={},M(b1,z,Object.keys(U2[z])),M(b1,b,Object.keys(U2[b])),b1);function N1(c){var e,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.skipLookups,t=a===void 0?!1:a,n=(e={},M(e,z,"".concat(u.cssPrefix,"-").concat(z)),M(e,b,"".concat(u.cssPrefix,"-").concat(b)),e),r=null,o=z;(c.includes(n[z])||c.some(function(f){return p4[z].includes(f)}))&&(o=z),(c.includes(n[b])||c.some(function(f){return p4[b].includes(f)}))&&(o=b);var s=c.reduce(function(f,l){var d=L0(u.cssPrefix,l);if(x2[l]?(l=M0[o].includes(l)?Z6[o][l]:l,r=l,f.prefix=l):g0[o].indexOf(l)>-1?(r=l,f.prefix=y1(l,{family:o})):d?f.iconName=d:l!==u.replacementClass&&l!==n[z]&&l!==n[b]&&f.rest.push(l),!t&&f.prefix&&f.iconName){var p=r==="fa"?X4(f.iconName):{},h=v2(f.prefix,f.iconName);p.prefix&&(r=null),f.iconName=p.iconName||h||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!x2.far&&x2.fas&&!u.autoFetchSvg&&(f.prefix="fas")}return f},f3());return(c.includes("fa-brands")||c.includes("fab"))&&(s.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(s.prefix="fad"),!s.prefix&&o===b&&(x2.fass||u.autoFetchSvg)&&(s.prefix="fass",s.iconName=v2(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||r==="fa")&&(s.prefix=i2()||"fas"),s}var N0=function(){function c(){E6(this,c),this.definitions={}}return O6(c,[{key:"add",value:function(){for(var i=this,a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];var r=t.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(o){i.definitions[o]=m(m({},i.definitions[o]||{}),r[o]),$1(o,r[o]);var s=U2[z][o];s&&$1(s,r[o]),$4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,a){var t=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(t).map(function(n){var r=t[n],o=r.prefix,s=r.iconName,f=r.icon,l=f[2];i[o]||(i[o]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(i[o][d]=f)}),i[o][s]=f}),i}}]),c}(),v4=[],y2={},N2={},w0=Object.keys(N2);function S0(c,e){var i=e.mixoutsTo;return v4=c,y2={},Object.keys(N2).forEach(function(a){w0.indexOf(a)===-1&&delete N2[a]}),v4.forEach(function(a){var t=a.mixout?a.mixout():{};if(Object.keys(t).forEach(function(r){typeof t[r]=="function"&&(i[r]=t[r]),g1(t[r])==="object"&&Object.keys(t[r]).forEach(function(o){i[r]||(i[r]={}),i[r][o]=t[r][o]})}),a.hooks){var n=a.hooks();Object.keys(n).forEach(function(r){y2[r]||(y2[r]=[]),y2[r].push(n[r])})}a.provides&&a.provides(N2)}),i}function X1(c,e){for(var i=arguments.length,a=new Array(i>2?i-2:0),t=2;t<i;t++)a[t-2]=arguments[t];var n=y2[c]||[];return n.forEach(function(r){e=r.apply(null,[e].concat(a))}),e}function z2(c){for(var e=arguments.length,i=new Array(e>1?e-1:0),a=1;a<e;a++)i[a-1]=arguments[a];var t=y2[c]||[];t.forEach(function(n){n.apply(null,i)})}function K(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return N2[c]?N2[c].apply(null,e):void 0}function Q1(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,i=c.prefix||i2();if(e)return e=v2(i,e)||e,d4(Q4.definitions,i,e)||d4(I.styles,i,e)}var Q4=new N0,k0=function(){u.autoReplaceSvg=!1,u.observeMutations=!1,z2("noAuto")},_0={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z?(z2("beforeI2svg",e),K("pseudoElements2svg",e),K("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,h0(function(){T0({autoReplaceSvgRoot:i}),z2("watch",e)})}},A0={icon:function(e){if(e===null)return null;if(g1(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:v2(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var i=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=y1(e[0]);return{prefix:a,iconName:v2(a,i)||i}}if(typeof e=="string"&&(e.indexOf("".concat(u.cssPrefix,"-"))>-1||e.match(J6))){var t=N1(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||i2(),iconName:v2(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){var n=i2();return{prefix:n,iconName:v2(n,e)||e}}}},_={noAuto:k0,config:u,dom:_0,parse:A0,library:Q4,findIconDefinition:Q1,toHtml:Y2},T0=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot,a=i===void 0?H:i;(Object.keys(I.styles).length>0||u.autoFetchSvg)&&Z&&u.autoReplaceSvg&&_.dom.i2svg({node:a})};function w1(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(a){return Y2(a)})}}),Object.defineProperty(c,"node",{get:function(){if(Z){var a=H.createElement("div");return a.innerHTML=c.html,a.children}}}),c}function P0(c){var e=c.children,i=c.main,a=c.mask,t=c.attributes,n=c.styles,r=c.transform;if(o3(r)&&i.found&&!a.found){var o=i.width,s=i.height,f={x:o/s/2,y:.5};t.style=x1(m(m({},n),{},{"transform-origin":"".concat(f.x+r.x/16,"em ").concat(f.y+r.y/16,"em")}))}return[{tag:"svg",attributes:t,children:e}]}function F0(c){var e=c.prefix,i=c.iconName,a=c.children,t=c.attributes,n=c.symbol,r=n===!0?"".concat(e,"-").concat(u.cssPrefix,"-").concat(i):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},t),{},{id:r}),children:a}]}]}function m3(c){var e=c.icons,i=e.main,a=e.mask,t=c.prefix,n=c.iconName,r=c.transform,o=c.symbol,s=c.title,f=c.maskId,l=c.titleId,d=c.extra,p=c.watchable,h=p===void 0?!1:p,g=a.found?a:i,A=g.width,P=g.height,R=t==="fak",C=[u.replacementClass,n?"".concat(u.cssPrefix,"-").concat(n):""].filter(function(J){return d.classes.indexOf(J)===-1}).filter(function(J){return J!==""||!!J}).concat(d.classes).join(" "),L={children:[],attributes:m(m({},d.attributes),{},{"data-prefix":t,"data-icon":n,class:C,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(P)})},B=R&&!~d.classes.indexOf("fa-fw")?{width:"".concat(A/P*16*.0625,"em")}:{};h&&(L.attributes[h2]=""),s&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(l||W2())},children:[s]}),delete L.attributes.title);var w=m(m({},L),{},{prefix:t,iconName:n,main:i,mask:a,maskId:f,transform:r,symbol:o,styles:m(m({},B),d.styles)}),r2=a.found&&i.found?K("generateAbstractMask",w)||{children:[],attributes:{}}:K("generateAbstractIcon",w)||{children:[],attributes:{}},o2=r2.children,S1=r2.attributes;return w.children=o2,w.attributes=S1,o?F0(w):P0(w)}function h4(c){var e=c.content,i=c.width,a=c.height,t=c.transform,n=c.title,r=c.extra,o=c.watchable,s=o===void 0?!1:o,f=m(m(m({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")});s&&(f[h2]="");var l=m({},r.styles);o3(t)&&(l.transform=d0({transform:t,startCentered:!0,width:i,height:a}),l["-webkit-transform"]=l.transform);var d=x1(l);d.length>0&&(f.style=d);var p=[];return p.push({tag:"span",attributes:f,children:[e]}),n&&p.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),p}function D0(c){var e=c.content,i=c.title,a=c.extra,t=m(m(m({},a.attributes),i?{title:i}:{}),{},{class:a.classes.join(" ")}),n=x1(a.styles);n.length>0&&(t.style=n);var r=[];return r.push({tag:"span",attributes:t,children:[e]}),i&&r.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),r}var U1=I.styles;function K1(c){var e=c[0],i=c[1],a=c.slice(4),t=a3(a,1),n=t[0],r=null;return Array.isArray(n)?r={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(p2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(p2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(p2.PRIMARY),fill:"currentColor",d:n[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:i,icon:r}}var I0={found:!1,width:512,height:512};function R0(c,e){!D4&&!u.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function Z1(c,e){var i=e;return e==="fa"&&u.styleDefault!==null&&(e=i2()),new Promise(function(a,t){var n={found:!1,width:512,height:512,icon:K("missingIconAbstract")||{}};if(i==="fa"){var r=X4(c)||{};c=r.iconName||c,e=r.prefix||e}if(c&&e&&U1[e]&&U1[e][c]){var o=U1[e][c];return a(K1(o))}R0(c,e),a(m(m({},I0),{},{icon:u.showMissingIcons&&c?K("missingIconAbstract")||{}:{}}))})}var z4=function(){},J1=u.measurePerformance&&m1&&m1.mark&&m1.measure?m1:{mark:z4,measure:z4},I2='FA "6.5.2"',B0=function(e){return J1.mark("".concat(I2," ").concat(e," begins")),function(){return K4(e)}},K4=function(e){J1.mark("".concat(I2," ").concat(e," ends")),J1.measure("".concat(I2," ").concat(e),"".concat(I2," ").concat(e," begins"),"".concat(I2," ").concat(e," ends"))},d3={begin:B0,end:K4},V1=function(){};function H4(c){var e=c.getAttribute?c.getAttribute(h2):null;return typeof e=="string"}function E0(c){var e=c.getAttribute?c.getAttribute(t3):null,i=c.getAttribute?c.getAttribute(i3):null;return e&&i}function O0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(u.replacementClass)}function U0(){if(u.autoReplaceSvg===!0)return M1.replace;var c=M1[u.autoReplaceSvg];return c||M1.replace}function j0(c){return H.createElementNS("http://www.w3.org/2000/svg",c)}function W0(c){return H.createElement(c)}function Z4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.ceFn,a=i===void 0?c.tag==="svg"?j0:W0:i;if(typeof c=="string")return H.createTextNode(c);var t=a(c.tag);Object.keys(c.attributes||[]).forEach(function(r){t.setAttribute(r,c.attributes[r])});var n=c.children||[];return n.forEach(function(r){t.appendChild(Z4(r,{ceFn:a}))}),t}function q0(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var M1={replace:function(e){var i=e[0];if(i.parentNode)if(e[1].forEach(function(t){i.parentNode.insertBefore(Z4(t),i)}),i.getAttribute(h2)===null&&u.keepOriginalSource){var a=H.createComment(q0(i));i.parentNode.replaceChild(a,i)}else i.remove()},nest:function(e){var i=e[0],a=e[1];if(~r3(i).indexOf(u.replacementClass))return M1.replace(e);var t=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var n=a[0].attributes.class.split(" ").reduce(function(o,s){return s===u.replacementClass||s.match(t)?o.toSvg.push(s):o.toNode.push(s),o},{toNode:[],toSvg:[]});a[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",n.toNode.join(" "))}var r=a.map(function(o){return Y2(o)}).join(`
`);i.setAttribute(h2,""),i.innerHTML=r}};function b4(c){c()}function J4(c,e){var i=typeof e=="function"?e:V1;if(c.length===0)i();else{var a=b4;u.mutateApproach===Q6&&(a=t2.requestAnimationFrame||b4),a(function(){var t=U0(),n=d3.begin("mutate");c.map(t),n(),i()})}}var u3=!1;function c6(){u3=!0}function c3(){u3=!1}var L1=null;function V4(c){if(s4&&u.observeMutations){var e=c.treeCallback,i=e===void 0?V1:e,a=c.nodeCallback,t=a===void 0?V1:a,n=c.pseudoElementsCallback,r=n===void 0?V1:n,o=c.observeMutationsRoot,s=o===void 0?H:o;L1=new s4(function(f){if(!u3){var l=i2();S2(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!H4(d.addedNodes[0])&&(u.searchPseudoElements&&r(d.target),i(d.target)),d.type==="attributes"&&d.target.parentNode&&u.searchPseudoElements&&r(d.target.parentNode),d.type==="attributes"&&H4(d.target)&&~t0.indexOf(d.attributeName))if(d.attributeName==="class"&&E0(d.target)){var p=N1(r3(d.target)),h=p.prefix,g=p.iconName;d.target.setAttribute(t3,h||l),g&&d.target.setAttribute(i3,g)}else O0(d.target)&&t(d.target)})}}),Z&&L1.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function G0(){L1&&L1.disconnect()}function Y0(c){var e=c.getAttribute("style"),i=[];return e&&(i=e.split(";").reduce(function(a,t){var n=t.split(":"),r=n[0],o=n.slice(1);return r&&o.length>0&&(a[r]=o.join(":").trim()),a},{})),i}function $0(c){var e=c.getAttribute("data-prefix"),i=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",t=N1(r3(c));return t.prefix||(t.prefix=i2()),e&&i&&(t.prefix=e,t.iconName=i),t.iconName&&t.prefix||(t.prefix&&a.length>0&&(t.iconName=x0(t.prefix,c.innerText)||l3(t.prefix,Y1(c.innerText))),!t.iconName&&u.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(t.iconName=c.firstChild.data)),t}function X0(c){var e=S2(c.attributes).reduce(function(t,n){return t.name!=="class"&&t.name!=="style"&&(t[n.name]=n.value),t},{}),i=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return u.autoA11y&&(i?e["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(a||W2()):(e["aria-hidden"]="true",e.focusable="false")),e}function Q0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:q,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function M4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=$0(c),a=i.iconName,t=i.prefix,n=i.rest,r=X0(c),o=X1("parseNodeAttributes",{},c),s=e.styleParser?Y0(c):[];return m({iconName:a,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:t,transform:q,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:s,attributes:r}},o)}var K0=I.styles;function a6(c){var e=u.autoReplaceSvg==="nest"?M4(c,{styleParser:!1}):M4(c);return~e.extra.classes.indexOf(I4)?K("generateLayersText",c,e):K("generateSvgReplacementMutation",c,e)}var n2=new Set;n3.map(function(c){n2.add("fa-".concat(c))});Object.keys(E2[z]).map(n2.add.bind(n2));Object.keys(E2[b]).map(n2.add.bind(n2));n2=q2(n2);function g4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z)return Promise.resolve();var i=H.documentElement.classList,a=function(d){return i.add("".concat(l4,"-").concat(d))},t=function(d){return i.remove("".concat(l4,"-").concat(d))},n=u.autoFetchSvg?n2:n3.map(function(l){return"fa-".concat(l)}).concat(Object.keys(K0));n.includes("fa")||n.push("fa");var r=[".".concat(I4,":not([").concat(h2,"])")].concat(n.map(function(l){return".".concat(l,":not([").concat(h2,"])")})).join(", ");if(r.length===0)return Promise.resolve();var o=[];try{o=S2(c.querySelectorAll(r))}catch{}if(o.length>0)a("pending"),t("complete");else return Promise.resolve();var s=d3.begin("onTree"),f=o.reduce(function(l,d){try{var p=a6(d);p&&l.push(p)}catch(h){D4||h.name==="MissingIcon"&&console.error(h)}return l},[]);return new Promise(function(l,d){Promise.all(f).then(function(p){J4(p,function(){a("active"),a("complete"),t("pending"),typeof e=="function"&&e(),s(),l()})}).catch(function(p){s(),d(p)})})}function Z0(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;a6(c).then(function(i){i&&J4([i],e)})}function J0(c){return function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Q1(e||{}),t=i.mask;return t&&(t=(t||{}).icon?t:Q1(t||{})),c(a,m(m({},i),{},{mask:t}))}}var c8=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.transform,t=a===void 0?q:a,n=i.symbol,r=n===void 0?!1:n,o=i.mask,s=o===void 0?null:o,f=i.maskId,l=f===void 0?null:f,d=i.title,p=d===void 0?null:d,h=i.titleId,g=h===void 0?null:h,A=i.classes,P=A===void 0?[]:A,R=i.attributes,C=R===void 0?{}:R,L=i.styles,B=L===void 0?{}:L;if(e){var w=e.prefix,r2=e.iconName,o2=e.icon;return w1(m({type:"icon"},e),function(){return z2("beforeDOMElementCreation",{iconDefinition:e,params:i}),u.autoA11y&&(p?C["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(g||W2()):(C["aria-hidden"]="true",C.focusable="false")),m3({icons:{main:K1(o2),mask:s?K1(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:r2,transform:m(m({},q),t),symbol:r,title:p,maskId:l,titleId:g,extra:{attributes:C,styles:B,classes:P}})})}},a8={mixout:function(){return{icon:J0(c8)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=g4,i.nodeCallback=Z0,i}}},provides:function(e){e.i2svg=function(i){var a=i.node,t=a===void 0?H:a,n=i.callback,r=n===void 0?function(){}:n;return g4(t,r)},e.generateSvgReplacementMutation=function(i,a){var t=a.iconName,n=a.title,r=a.titleId,o=a.prefix,s=a.transform,f=a.symbol,l=a.mask,d=a.maskId,p=a.extra;return new Promise(function(h,g){Promise.all([Z1(t,o),l.iconName?Z1(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var P=a3(A,2),R=P[0],C=P[1];h([i,m3({icons:{main:R,mask:C},prefix:o,iconName:t,transform:s,symbol:f,maskId:d,title:n,titleId:r,extra:p,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(i){var a=i.children,t=i.attributes,n=i.main,r=i.transform,o=i.styles,s=x1(o);s.length>0&&(t.style=s);var f;return o3(r)&&(f=K("generateAbstractTransformGrouping",{main:n,transform:r,containerWidth:n.width,iconWidth:n.width})),a.push(f||n.icon),{children:a,attributes:t}}}},e8={mixout:function(){return{layer:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.classes,n=t===void 0?[]:t;return w1({type:"layer"},function(){z2("beforeDOMElementCreation",{assembler:i,params:a});var r=[];return i(function(o){Array.isArray(o)?o.map(function(s){r=r.concat(s.abstract)}):r=r.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers")].concat(q2(n)).join(" ")},children:r}]})}}}},t8={mixout:function(){return{counter:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.title,n=t===void 0?null:t,r=a.classes,o=r===void 0?[]:r,s=a.attributes,f=s===void 0?{}:s,l=a.styles,d=l===void 0?{}:l;return w1({type:"counter",content:i},function(){return z2("beforeDOMElementCreation",{content:i,params:a}),D0({content:i.toString(),title:n,extra:{attributes:f,styles:d,classes:["".concat(u.cssPrefix,"-layers-counter")].concat(q2(o))}})})}}}},i8={mixout:function(){return{text:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.transform,n=t===void 0?q:t,r=a.title,o=r===void 0?null:r,s=a.classes,f=s===void 0?[]:s,l=a.attributes,d=l===void 0?{}:l,p=a.styles,h=p===void 0?{}:p;return w1({type:"text",content:i},function(){return z2("beforeDOMElementCreation",{content:i,params:a}),h4({content:i,transform:m(m({},q),n),title:o,extra:{attributes:d,styles:h,classes:["".concat(u.cssPrefix,"-layers-text")].concat(q2(f))}})})}}},provides:function(e){e.generateLayersText=function(i,a){var t=a.title,n=a.transform,r=a.extra,o=null,s=null;if(T4){var f=parseInt(getComputedStyle(i).fontSize,10),l=i.getBoundingClientRect();o=l.width/f,s=l.height/f}return u.autoA11y&&!t&&(r.attributes["aria-hidden"]="true"),Promise.resolve([i,h4({content:i.innerHTML,width:o,height:s,transform:n,title:t,extra:r,watchable:!0})])}}},n8=new RegExp('"',"ug"),C4=[1105920,1112319];function r8(c){var e=c.replace(n8,""),i=b0(e,0),a=i>=C4[0]&&i<=C4[1],t=e.length===2?e[0]===e[1]:!1;return{value:Y1(t?e[0]:e),isSecondary:a||t}}function L4(c,e){var i="".concat(X6).concat(e.replace(":","-"));return new Promise(function(a,t){if(c.getAttribute(i)!==null)return a();var n=S2(c.children),r=n.filter(function(o2){return o2.getAttribute(G1)===e})[0],o=t2.getComputedStyle(c,e),s=o.getPropertyValue("font-family").match(c0),f=o.getPropertyValue("font-weight"),l=o.getPropertyValue("content");if(r&&!s)return c.removeChild(r),a();if(s&&l!=="none"&&l!==""){var d=o.getPropertyValue("content"),p=~["Sharp"].indexOf(s[2])?b:z,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?O2[p][s[2].toLowerCase()]:a0[p][f],g=r8(d),A=g.value,P=g.isSecondary,R=s[0].startsWith("FontAwesome"),C=l3(h,A),L=C;if(R){var B=y0(A);B.iconName&&B.prefix&&(C=B.iconName,h=B.prefix)}if(C&&!P&&(!r||r.getAttribute(t3)!==h||r.getAttribute(i3)!==L)){c.setAttribute(i,L),r&&c.removeChild(r);var w=Q0(),r2=w.extra;r2.attributes[G1]=e,Z1(C,h).then(function(o2){var S1=m3(m(m({},w),{},{icons:{main:o2,mask:f3()},prefix:h,iconName:L,extra:r2,watchable:!0})),J=H.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(J,c.firstChild):c.appendChild(J),J.outerHTML=S1.map(function(l6){return Y2(l6)}).join(`
`),c.removeAttribute(i),a()}).catch(t)}else a()}else a()})}function o8(c){return Promise.all([L4(c,"::before"),L4(c,"::after")])}function s8(c){return c.parentNode!==document.head&&!~K6.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(G1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function x4(c){if(Z)return new Promise(function(e,i){var a=S2(c.querySelectorAll("*")).filter(s8).map(o8),t=d3.begin("searchPseudoElements");c6(),Promise.all(a).then(function(){t(),c3(),e()}).catch(function(){t(),c3(),i()})})}var l8={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=x4,i}}},provides:function(e){e.pseudoElements2svg=function(i){var a=i.node,t=a===void 0?H:a;u.searchPseudoElements&&x4(t)}}},y4=!1,f8={mixout:function(){return{dom:{unwatch:function(){c6(),y4=!0}}}},hooks:function(){return{bootstrap:function(){V4(X1("mutationObserverCallbacks",{}))},noAuto:function(){G0()},watch:function(i){var a=i.observeMutationsRoot;y4?c3():V4(X1("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},N4=function(e){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,t){var n=t.toLowerCase().split("-"),r=n[0],o=n.slice(1).join("-");if(r&&o==="h")return a.flipX=!0,a;if(r&&o==="v")return a.flipY=!0,a;if(o=parseFloat(o),isNaN(o))return a;switch(r){case"grow":a.size=a.size+o;break;case"shrink":a.size=a.size-o;break;case"left":a.x=a.x-o;break;case"right":a.x=a.x+o;break;case"up":a.y=a.y-o;break;case"down":a.y=a.y+o;break;case"rotate":a.rotate=a.rotate+o;break}return a},i)},m8={mixout:function(){return{parse:{transform:function(i){return N4(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,a){var t=a.getAttribute("data-fa-transform");return t&&(i.transform=N4(t)),i}}},provides:function(e){e.generateAbstractTransformGrouping=function(i){var a=i.main,t=i.transform,n=i.containerWidth,r=i.iconWidth,o={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),f="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),d={transform:"".concat(s," ").concat(f," ").concat(l)},p={transform:"translate(".concat(r/2*-1," -256)")},h={outer:o,inner:d,path:p};return{tag:"g",attributes:m({},h.outer),children:[{tag:"g",attributes:m({},h.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),h.path)}]}]}}}},j1={x:0,y:0,width:"100%",height:"100%"};function w4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function d8(c){return c.tag==="g"?c.children:[c]}var u8={hooks:function(){return{parseNodeAttributes:function(i,a){var t=a.getAttribute("data-fa-mask"),n=t?N1(t.split(" ").map(function(r){return r.trim()})):f3();return n.prefix||(n.prefix=i2()),i.mask=n,i.maskId=a.getAttribute("data-fa-mask-id"),i}}},provides:function(e){e.generateAbstractMask=function(i){var a=i.children,t=i.attributes,n=i.main,r=i.mask,o=i.maskId,s=i.transform,f=n.width,l=n.icon,d=r.width,p=r.icon,h=m0({transform:s,containerWidth:d,iconWidth:f}),g={tag:"rect",attributes:m(m({},j1),{},{fill:"white"})},A=l.children?{children:l.children.map(w4)}:{},P={tag:"g",attributes:m({},h.inner),children:[w4(m({tag:l.tag,attributes:m(m({},l.attributes),h.path)},A))]},R={tag:"g",attributes:m({},h.outer),children:[P]},C="mask-".concat(o||W2()),L="clip-".concat(o||W2()),B={tag:"mask",attributes:m(m({},j1),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,R]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:d8(p)},B]};return a.push(w,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(C,")")},j1)}),{children:a,attributes:t}}}},p8={provides:function(e){var i=!1;t2.matchMedia&&(i=t2.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],t={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},t),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var r=m(m({},n),{},{attributeName:"opacity"}),o={tag:"circle",attributes:m(m({},t),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||o.children.push({tag:"animate",attributes:m(m({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},r),{},{values:"1;0;1;1;0;1;"})}),a.push(o),a.push({tag:"path",attributes:m(m({},t),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:m(m({},r),{},{values:"1;0;0;0;0;1;"})}]}),i||a.push({tag:"path",attributes:m(m({},t),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},v8={hooks:function(){return{parseNodeAttributes:function(i,a){var t=a.getAttribute("data-fa-symbol"),n=t===null?!1:t===""?!0:t;return i.symbol=n,i}}}},h8=[p0,a8,e8,t8,i8,l8,f8,m8,u8,p8,v8];S0(h8,{mixoutsTo:_});var A5=_.noAuto,T5=_.config,P5=_.library,F5=_.dom,e6=_.parse,D5=_.findIconDefinition,I5=_.toHtml,t6=_.icon,R5=_.layer,z8=_.text,H8=_.counter;var b8=["*"],V8=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},M8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},g8=c=>{let e={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(e).map(i=>e[i]?i:null).filter(i=>i)},C8=c=>c.prefix!==void 0&&c.iconName!==void 0,L8=(c,e)=>C8(c)?c:typeof c=="string"?{prefix:e,iconName:c}:{prefix:c[0],iconName:c[1]},x8=(()=>{let e=class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a1({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),y8=(()=>{let e=class e{constructor(){this.definitions={}}addIcons(...a){for(let t of a){t.prefix in this.definitions||(this.definitions[t.prefix]={}),this.definitions[t.prefix][t.iconName]=t;for(let n of t.icon[2])typeof n=="string"&&(this.definitions[t.prefix][n]=t)}}addIconPacks(...a){for(let t of a){let n=Object.keys(t).map(r=>t[r]);this.addIcons(...n)}}getIconDefinition(a,t){return a in this.definitions&&t in this.definitions[a]?this.definitions[a][t]:null}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a1({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),N8=(()=>{let e=class e{constructor(){this.stackItemSize="1x"}ngOnChanges(a){if("size"in a)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=c2({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[e1]});let c=e;return c})(),w8=(()=>{let e=class e{constructor(a,t){this.renderer=a,this.elementRef=t}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(a){"size"in a&&(a.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${a.size.currentValue}`),a.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${a.size.previousValue}`))}};e.\u0275fac=function(t){return new(t||e)(v(V3),v(F))},e.\u0275cmp=S({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[e1,k],ngContentSelectors:b8,decls:1,vars:0,template:function(t,n){t&1&&(j(),N(0))},encapsulation:2});let c=e;return c})(),i6=(()=>{let e=class e{set spin(a){this.animation=a?"spin":void 0}set pulse(a){this.animation=a?"spin-pulse":void 0}constructor(a,t,n,r,o){this.sanitizer=a,this.config=t,this.iconLibrary=n,this.stackItem=r,this.classes=[],o!=null&&r==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(a){if(this.icon==null&&this.config.fallbackIcon==null){M8();return}if(a){let t=this.icon!=null?this.icon:this.config.fallbackIcon,n=this.findIconDefinition(t);if(n!=null){let r=this.buildParams();this.renderIcon(n,r)}}}render(){this.ngOnChanges({})}findIconDefinition(a){let t=L8(a,this.config.defaultPrefix);if("icon"in t)return t;let n=this.iconLibrary.getIconDefinition(t.prefix,t.iconName);return n??(V8(t),null)}buildParams(){let a={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},t=typeof this.transform=="string"?e6.transform(this.transform):this.transform;return{title:this.title,transform:t,classes:[...g8(a),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(a,t){let n=t6(a,t);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}};e.\u0275fac=function(t){return new(t||e)(v(S3),v(x8),v(y8),v(N8,8),v(w8,8))},e.\u0275cmp=S({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(t,n){t&2&&(C3("innerHTML",n.renderedIconHTML,H3),U("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[e1,k],decls:0,vars:0,template:function(t,n){},encapsulation:2});let c=e;return c})();var n6=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=O({type:e}),e.\u0275inj=E({});let c=e;return c})();var k8={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},r6=k8;var o6={prefix:"fas",iconName:"handshake",icon:[640,512,[],"f2b5","M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"]};var s6={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"]};var a7=(()=>{let e=class e{constructor(){this.faHandshake=o6,this.faCopy=s6,this.faSignOut=r6,this.toaster=G(A3)}get collabURL(){return location.href?.substring(0,20)+"..."}copyCollabURL(){let a=navigator.clipboard;a&&(a.writeText(location.href),this.toaster.success("URL copied.. Share it with your friend and enjoy collaboration!"))}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=S({type:e,selectors:[["app-whiteboard-wrapper"]],standalone:!0,features:[k],decls:21,vars:5,consts:[["collabMenu",""],[1,"whiteboard-container"],[1,"toolbar"],[1,"actions"],["mat-button","","aria-label","Example icon-button with heart icon",3,"mat-menu-trigger-for"],[3,"icon"],["mat-button","","aria-label","Example icon-button with heart icon"],[1,"collab-menu"],[1,"head"],["mat-menu-item","",3,"click"]],template:function(t,n){if(t&1){let r=i1();x(0,"div",1)(1,"mat-toolbar",2)(2,"span"),g2(3,"Whiteboard"),y(),x(4,"div",3)(5,"button",4),D(6,"fa-icon",5),g2(7," Remote Collaboration "),y(),x(8,"button",6),D(9,"fa-icon",5),g2(10," Logout "),y()()(),D(11,"router-outlet"),y(),x(12,"mat-menu",null,0)(14,"div",7)(15,"span",8),g2(16,"Invite a friend"),y(),x(17,"span",9),b2("click",function(){return l2(r),f2(n.copyCollabURL())}),x(18,"span"),g2(19),y(),D(20,"fa-icon",5),y()()()}if(t&2){let r=x3(13);Y(5),a2("mat-menu-trigger-for",r),Y(),a2("icon",n.faHandshake),Y(3),a2("icon",n.faSignOut),Y(10),y3(n.collabURL),Y(),a2("icon",n.faCopy)}},dependencies:[_3,k3,J3,Z3,c4,e4,a4,K3,L2,F2,Q3,n6,i6,T3],styles:[".whiteboard-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden}.whiteboard-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;overflow:hidden}.collab-menu[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.collab-menu[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{font-weight:700}"]});let c=e;return c})();export{a7 as WhiteboardWrapperComponent};
