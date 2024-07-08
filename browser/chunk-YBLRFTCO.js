import{c as A1}from"./chunk-D4LNFVQB.js";import{J as T1,M as Z,Q as P1,R as F1,d as _1}from"./chunk-GRQJSV6A.js";import{$ as C2,Ab as k1,Da as g1,Fb as s2,Gb as W,Pa as L1,Qb as J,Ua as g,V as M2,Va as x1,W as $,Y as C1,_a as N1,ab as w1,ac as l2,da as X,ea as Q,eb as q2,fa as K,fb as j2,ga as g2,kb as n2,ma as L2,nb as o2,pb as G2,ub as S1,vb as y1,wa as r2,wb as Y2}from"./chunk-DAEDL4JP.js";var R6=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=K({type:a}),a.\u0275inj=$({imports:[Z,Z]});let c=a;return c})();var I3=["mat-button",""],E3=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],U3=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var O3=new C1("MAT_BUTTON_CONFIG");var W3=[{attribute:"mat-button",mdcClasses:["mdc-button","mat-mdc-button"]},{attribute:"mat-flat-button",mdcClasses:["mdc-button","mdc-button--unelevated","mat-mdc-unelevated-button"]},{attribute:"mat-raised-button",mdcClasses:["mdc-button","mdc-button--raised","mat-mdc-raised-button"]},{attribute:"mat-stroked-button",mdcClasses:["mdc-button","mdc-button--outlined","mat-mdc-outlined-button"]},{attribute:"mat-fab",mdcClasses:["mdc-fab","mat-mdc-fab"]},{attribute:"mat-mini-fab",mdcClasses:["mdc-fab","mdc-fab--mini","mat-mdc-mini-fab"]},{attribute:"mat-icon-button",mdcClasses:["mdc-icon-button","mat-mdc-icon-button"]}],q3=(()=>{let a=class a{get ripple(){return this._rippleLoader?.getRipple(this._elementRef.nativeElement)}set ripple(e){this._rippleLoader?.attachRipple(this._elementRef.nativeElement,e)}get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}constructor(e,i,r,n){this._elementRef=e,this._platform=i,this._ngZone=r,this._animationMode=n,this._focusMonitor=C2(T1),this._rippleLoader=C2(F1),this._isFab=!1,this._disableRipple=!1,this._disabled=!1;let o=C2(O3,{optional:!0}),s=e.nativeElement,m=s.classList;this.disabledInteractive=o?.disabledInteractive??!1,this._rippleLoader?.configureRipple(s,{className:"mat-mdc-button-ripple"});for(let{attribute:l,mdcClasses:u}of W3)s.hasAttribute(l)&&m.add(...u)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}};a.\u0275fac=function(i){x1()},a.\u0275dir=g2({type:a,inputs:{color:"color",disableRipple:[X.HasDecoratorInputTransform,"disableRipple","disableRipple",l2],disabled:[X.HasDecoratorInputTransform,"disabled","disabled",l2],ariaDisabled:[X.HasDecoratorInputTransform,"aria-disabled","ariaDisabled",l2],disabledInteractive:[X.HasDecoratorInputTransform,"disabledInteractive","disabledInteractive",l2]},features:[j2]});let c=a;return c})();var Z6=(()=>{let a=class a extends q3{constructor(e,i,r,n){super(e,i,r,n)}};a.\u0275fac=function(i){return new(i||a)(g(r2),g(_1),g(w1),g(g1,8))},a.\u0275cmp=Q({type:a,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""]],hostVars:14,hostBindings:function(i,r){i&2&&(n2("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled()),G2(r.color?"mat-"+r.color:""),o2("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("_mat-animation-noopable",r._animationMode==="NoopAnimations")("mat-unthemed",!r.color)("mat-mdc-button-base",!0))},exportAs:["matButton"],standalone:!0,features:[q2,J],attrs:I3,ngContentSelectors:U3,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(s2(E3),Y2(0,"span",0),W(1),S1(2,"span",1),W(3,1),y1(),W(4,2),Y2(5,"span",2)(6,"span",3)),i&2&&o2("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:['.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px);display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{font-family:var(--mdc-text-button-label-text-font);font-size:var(--mdc-text-button-label-text-size);letter-spacing:var(--mdc-text-button-label-text-tracking);font-weight:var(--mdc-text-button-label-text-weight);text-transform:var(--mdc-text-button-label-text-transform);height:var(--mdc-text-button-container-height);border-radius:var(--mdc-text-button-container-shape);padding:0 var(--mat-text-button-horizontal-padding, 8px)}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape)}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color)}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity)}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity)}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity)}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{font-family:var(--mdc-filled-button-label-text-font);font-size:var(--mdc-filled-button-label-text-size);letter-spacing:var(--mdc-filled-button-label-text-tracking);font-weight:var(--mdc-filled-button-label-text-weight);text-transform:var(--mdc-filled-button-label-text-transform);height:var(--mdc-filled-button-container-height);border-radius:var(--mdc-filled-button-container-shape);padding:0 var(--mat-filled-button-horizontal-padding, 16px)}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color)}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color)}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity)}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity)}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity)}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{font-family:var(--mdc-protected-button-label-text-font);font-size:var(--mdc-protected-button-label-text-size);letter-spacing:var(--mdc-protected-button-label-text-tracking);font-weight:var(--mdc-protected-button-label-text-weight);text-transform:var(--mdc-protected-button-label-text-transform);height:var(--mdc-protected-button-container-height);border-radius:var(--mdc-protected-button-container-shape);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow)}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color)}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color)}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity)}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity)}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity)}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow)}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow)}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow)}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow)}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{font-family:var(--mdc-outlined-button-label-text-font);font-size:var(--mdc-outlined-button-label-text-size);letter-spacing:var(--mdc-outlined-button-label-text-tracking);font-weight:var(--mdc-outlined-button-label-text-weight);text-transform:var(--mdc-outlined-button-label-text-transform);height:var(--mdc-outlined-button-container-height);border-radius:var(--mdc-outlined-button-container-shape);padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width);padding:0 var(--mat-outlined-button-horizontal-padding, 15px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color)}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape)}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color)}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width))}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color)}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity)}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity)}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity)}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button-base{text-decoration:none}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}"],encapsulation:2,changeDetection:0});let c=a;return c})();var c0=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=K({type:a}),a.\u0275inj=$({imports:[Z,P1,Z]});let c=a;return c})();function B1(c,a){var t=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),t.push.apply(t,e)}return t}function f(c){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?B1(Object(t),!0).forEach(function(e){b(c,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(t)):B1(Object(t)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(t,e))})}return c}function D2(c){"@babel/helpers - typeof";return D2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},D2(c)}function j3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function R1(c,a){for(var t=0;t<a.length;t++){var e=a[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function G3(c,a,t){return a&&R1(c.prototype,a),t&&R1(c,t),Object.defineProperty(c,"prototype",{writable:!1}),c}function b(c,a,t){return a in c?Object.defineProperty(c,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):c[a]=t,c}function l1(c,a){return $3(c)||Q3(c,a)||l3(c,a)||J3()}function H2(c){return Y3(c)||X3(c)||l3(c)||K3()}function Y3(c){if(Array.isArray(c))return J2(c)}function $3(c){if(Array.isArray(c))return c}function X3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Q3(c,a){var t=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(t!=null){var e=[],i=!0,r=!1,n,o;try{for(t=t.call(c);!(i=(n=t.next()).done)&&(e.push(n.value),!(a&&e.length===a));i=!0);}catch(s){r=!0,o=s}finally{try{!i&&t.return!=null&&t.return()}finally{if(r)throw o}}return e}}function l3(c,a){if(c){if(typeof c=="string")return J2(c,a);var t=Object.prototype.toString.call(c).slice(8,-1);if(t==="Object"&&c.constructor&&(t=c.constructor.name),t==="Map"||t==="Set")return Array.from(c);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return J2(c,a)}}function J2(c,a){(a==null||a>c.length)&&(a=c.length);for(var t=0,e=new Array(a);t<a;t++)e[t]=c[t];return e}function K3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var I1=function(){},f1={},f3={},m3=null,d3={mark:I1,measure:I1};try{typeof window<"u"&&(f1=window),typeof document<"u"&&(f3=document),typeof MutationObserver<"u"&&(m3=MutationObserver),typeof performance<"u"&&(d3=performance)}catch{}var Z3=f1.navigator||{},E1=Z3.userAgent,U1=E1===void 0?"":E1,R=f1,z=f3,O1=m3,x2=d3,e0=!!R.document,F=!!z.documentElement&&!!z.head&&typeof z.addEventListener=="function"&&typeof z.createElement=="function",u3=~U1.indexOf("MSIE")||~U1.indexOf("Trident/"),N2,w2,S2,y2,k2,_="___FONT_AWESOME___",Z2=16,p3="fa",v3="svg-inline--fa",G="data-fa-i2svg",c1="data-fa-pseudo-element",c4="data-fa-pseudo-element-pending",m1="data-prefix",d1="data-icon",W1="fontawesome-i2svg",a4="async",e4=["HTML","HEAD","STYLE","SCRIPT"],h3=function(){try{return!0}catch{return!1}}(),h="classic",H="sharp",u1=[h,H];function b2(c){return new Proxy(c,{get:function(t,e){return e in t?t[e]:t[h]}})}var u2=b2((N2={},b(N2,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),b(N2,H,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),N2)),p2=b2((w2={},b(w2,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),b(w2,H,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),w2)),v2=b2((S2={},b(S2,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),b(S2,H,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),S2)),t4=b2((y2={},b(y2,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),b(y2,H,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),y2)),i4=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,z3="fa-layers-text",r4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,n4=b2((k2={},b(k2,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),b(k2,H,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),k2)),H3=[1,2,3,4,5,6,7,8,9,10],o4=H3.concat([11,12,13,14,15,16,17,18,19,20]),s4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},h2=new Set;Object.keys(p2[h]).map(h2.add.bind(h2));Object.keys(p2[H]).map(h2.add.bind(h2));var l4=[].concat(u1,H2(h2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY]).concat(H3.map(function(c){return"".concat(c,"x")})).concat(o4.map(function(c){return"w-".concat(c)})),m2=R.FontAwesomeConfig||{};function f4(c){var a=z.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function m4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}z&&typeof z.querySelector=="function"&&(q1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],q1.forEach(function(c){var a=l1(c,2),t=a[0],e=a[1],i=m4(f4(t));i!=null&&(m2[e]=i)}));var q1,b3={styleDefault:"solid",familyDefault:"classic",cssPrefix:p3,replacementClass:v3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};m2.familyPrefix&&(m2.cssPrefix=m2.familyPrefix);var t2=f(f({},b3),m2);t2.autoReplaceSvg||(t2.observeMutations=!1);var d={};Object.keys(b3).forEach(function(c){Object.defineProperty(d,c,{enumerable:!0,set:function(t){t2[c]=t,d2.forEach(function(e){return e(d)})},get:function(){return t2[c]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(a){t2.cssPrefix=a,d2.forEach(function(t){return t(d)})},get:function(){return t2.cssPrefix}});R.FontAwesomeConfig=d;var d2=[];function d4(c){return d2.push(c),function(){d2.splice(d2.indexOf(c),1)}}var B=Z2,A={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function u4(c){if(!(!c||!F)){var a=z.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var t=z.head.childNodes,e=null,i=t.length-1;i>-1;i--){var r=t[i],n=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=r)}return z.head.insertBefore(a,e),c}}var p4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function z2(){for(var c=12,a="";c-- >0;)a+=p4[Math.random()*62|0];return a}function i2(c){for(var a=[],t=(c||[]).length>>>0;t--;)a[t]=c[t];return a}function p1(c){return c.classList?i2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function V3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function v4(c){return Object.keys(c||{}).reduce(function(a,t){return a+"".concat(t,'="').concat(V3(c[t]),'" ')},"").trim()}function I2(c){return Object.keys(c||{}).reduce(function(a,t){return a+"".concat(t,": ").concat(c[t].trim(),";")},"")}function v1(c){return c.size!==A.size||c.x!==A.x||c.y!==A.y||c.rotate!==A.rotate||c.flipX||c.flipY}function h4(c){var a=c.transform,t=c.containerWidth,e=c.iconWidth,i={transform:"translate(".concat(t/2," 256)")},r="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),o="rotate(".concat(a.rotate," 0 0)"),s={transform:"".concat(r," ").concat(n," ").concat(o)},m={transform:"translate(".concat(e/2*-1," -256)")};return{outer:i,inner:s,path:m}}function z4(c){var a=c.transform,t=c.width,e=t===void 0?Z2:t,i=c.height,r=i===void 0?Z2:i,n=c.startCentered,o=n===void 0?!1:n,s="";return o&&u3?s+="translate(".concat(a.x/B-e/2,"em, ").concat(a.y/B-r/2,"em) "):o?s+="translate(calc(-50% + ".concat(a.x/B,"em), calc(-50% + ").concat(a.y/B,"em)) "):s+="translate(".concat(a.x/B,"em, ").concat(a.y/B,"em) "),s+="scale(".concat(a.size/B*(a.flipX?-1:1),", ").concat(a.size/B*(a.flipY?-1:1),") "),s+="rotate(".concat(a.rotate,"deg) "),s}var H4=`:root, :host {
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
}`;function M3(){var c=p3,a=v3,t=d.cssPrefix,e=d.replacementClass,i=H4;if(t!==c||e!==a){var r=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(a),"g");i=i.replace(r,".".concat(t,"-")).replace(n,"--".concat(t,"-")).replace(o,".".concat(e))}return i}var j1=!1;function $2(){d.autoAddCss&&!j1&&(u4(M3()),j1=!0)}var b4={mixout:function(){return{dom:{css:M3,insertCss:$2}}},hooks:function(){return{beforeDOMElementCreation:function(){$2()},beforeI2svg:function(){$2()}}}},T=R||{};T[_]||(T[_]={});T[_].styles||(T[_].styles={});T[_].hooks||(T[_].hooks={});T[_].shims||(T[_].shims=[]);var S=T[_],C3=[],V4=function c(){z.removeEventListener("DOMContentLoaded",c),B2=1,C3.map(function(a){return a()})},B2=!1;F&&(B2=(z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(z.readyState),B2||z.addEventListener("DOMContentLoaded",V4));function M4(c){F&&(B2?setTimeout(c,0):C3.push(c))}function V2(c){var a=c.tag,t=c.attributes,e=t===void 0?{}:t,i=c.children,r=i===void 0?[]:i;return typeof c=="string"?V3(c):"<".concat(a," ").concat(v4(e),">").concat(r.map(V2).join(""),"</").concat(a,">")}function G1(c,a,t){if(c&&c[a]&&c[a][t])return{prefix:a,iconName:t,icon:c[a][t]}}var C4=function(a,t){return function(e,i,r,n){return a.call(t,e,i,r,n)}},X2=function(a,t,e,i){var r=Object.keys(a),n=r.length,o=i!==void 0?C4(t,i):t,s,m,l;for(e===void 0?(s=1,l=a[r[0]]):(s=0,l=e);s<n;s++)m=r[s],l=o(l,a[m],m,a);return l};function g4(c){for(var a=[],t=0,e=c.length;t<e;){var i=c.charCodeAt(t++);if(i>=55296&&i<=56319&&t<e){var r=c.charCodeAt(t++);(r&64512)==56320?a.push(((i&1023)<<10)+(r&1023)+65536):(a.push(i),t--)}else a.push(i)}return a}function a1(c){var a=g4(c);return a.length===1?a[0].toString(16):null}function L4(c,a){var t=c.length,e=c.charCodeAt(a),i;return e>=55296&&e<=56319&&t>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(e-55296)*1024+i-56320+65536:e}function Y1(c){return Object.keys(c).reduce(function(a,t){var e=c[t],i=!!e.icon;return i?a[e.iconName]=e.icon:a[t]=e,a},{})}function e1(c,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=t.skipHooks,i=e===void 0?!1:e,r=Y1(a);typeof S.hooks.addPack=="function"&&!i?S.hooks.addPack(c,Y1(a)):S.styles[c]=f(f({},S.styles[c]||{}),r),c==="fas"&&e1("fa",a)}var A2,_2,T2,c2=S.styles,x4=S.shims,N4=(A2={},b(A2,h,Object.values(v2[h])),b(A2,H,Object.values(v2[H])),A2),h1=null,g3={},L3={},x3={},N3={},w3={},w4=(_2={},b(_2,h,Object.keys(u2[h])),b(_2,H,Object.keys(u2[H])),_2);function S4(c){return~l4.indexOf(c)}function y4(c,a){var t=a.split("-"),e=t[0],i=t.slice(1).join("-");return e===c&&i!==""&&!S4(i)?i:null}var S3=function(){var a=function(r){return X2(c2,function(n,o,s){return n[s]=X2(o,r,{}),n},{})};g3=a(function(i,r,n){if(r[3]&&(i[r[3]]=n),r[2]){var o=r[2].filter(function(s){return typeof s=="number"});o.forEach(function(s){i[s.toString(16)]=n})}return i}),L3=a(function(i,r,n){if(i[n]=n,r[2]){var o=r[2].filter(function(s){return typeof s=="string"});o.forEach(function(s){i[s]=n})}return i}),w3=a(function(i,r,n){var o=r[2];return i[n]=n,o.forEach(function(s){i[s]=n}),i});var t="far"in c2||d.autoFetchSvg,e=X2(x4,function(i,r){var n=r[0],o=r[1],s=r[2];return o==="far"&&!t&&(o="fas"),typeof n=="string"&&(i.names[n]={prefix:o,iconName:s}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:o,iconName:s}),i},{names:{},unicodes:{}});x3=e.names,N3=e.unicodes,h1=E2(d.styleDefault,{family:d.familyDefault})};d4(function(c){h1=E2(c.styleDefault,{family:d.familyDefault})});S3();function z1(c,a){return(g3[c]||{})[a]}function k4(c,a){return(L3[c]||{})[a]}function j(c,a){return(w3[c]||{})[a]}function y3(c){return x3[c]||{prefix:null,iconName:null}}function A4(c){var a=N3[c],t=z1("fas",c);return a||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function I(){return h1}var H1=function(){return{prefix:null,iconName:null,rest:[]}};function E2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.family,e=t===void 0?h:t,i=u2[e][c],r=p2[e][c]||p2[e][i],n=c in S.styles?c:null;return r||n||null}var $1=(T2={},b(T2,h,Object.keys(v2[h])),b(T2,H,Object.keys(v2[H])),T2);function U2(c){var a,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.skipLookups,i=e===void 0?!1:e,r=(a={},b(a,h,"".concat(d.cssPrefix,"-").concat(h)),b(a,H,"".concat(d.cssPrefix,"-").concat(H)),a),n=null,o=h;(c.includes(r[h])||c.some(function(m){return $1[h].includes(m)}))&&(o=h),(c.includes(r[H])||c.some(function(m){return $1[H].includes(m)}))&&(o=H);var s=c.reduce(function(m,l){var u=y4(d.cssPrefix,l);if(c2[l]?(l=N4[o].includes(l)?t4[o][l]:l,n=l,m.prefix=l):w4[o].indexOf(l)>-1?(n=l,m.prefix=E2(l,{family:o})):u?m.iconName=u:l!==d.replacementClass&&l!==r[h]&&l!==r[H]&&m.rest.push(l),!i&&m.prefix&&m.iconName){var p=n==="fa"?y3(m.iconName):{},v=j(m.prefix,m.iconName);p.prefix&&(n=null),m.iconName=p.iconName||v||m.iconName,m.prefix=p.prefix||m.prefix,m.prefix==="far"&&!c2.far&&c2.fas&&!d.autoFetchSvg&&(m.prefix="fas")}return m},H1());return(c.includes("fa-brands")||c.includes("fab"))&&(s.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(s.prefix="fad"),!s.prefix&&o===H&&(c2.fass||d.autoFetchSvg)&&(s.prefix="fass",s.iconName=j(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||n==="fa")&&(s.prefix=I()||"fas"),s}var _4=function(){function c(){j3(this,c),this.definitions={}}return G3(c,[{key:"add",value:function(){for(var t=this,e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(o){t.definitions[o]=f(f({},t.definitions[o]||{}),n[o]),e1(o,n[o]);var s=v2[h][o];s&&e1(s,n[o]),S3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var i=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(i).map(function(r){var n=i[r],o=n.prefix,s=n.iconName,m=n.icon,l=m[2];t[o]||(t[o]={}),l.length>0&&l.forEach(function(u){typeof u=="string"&&(t[o][u]=m)}),t[o][s]=m}),t}}]),c}(),X1=[],a2={},e2={},T4=Object.keys(e2);function P4(c,a){var t=a.mixoutsTo;return X1=c,a2={},Object.keys(e2).forEach(function(e){T4.indexOf(e)===-1&&delete e2[e]}),X1.forEach(function(e){var i=e.mixout?e.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(t[n]=i[n]),D2(i[n])==="object"&&Object.keys(i[n]).forEach(function(o){t[n]||(t[n]={}),t[n][o]=i[n][o]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(n){a2[n]||(a2[n]=[]),a2[n].push(r[n])})}e.provides&&e.provides(e2)}),t}function t1(c,a){for(var t=arguments.length,e=new Array(t>2?t-2:0),i=2;i<t;i++)e[i-2]=arguments[i];var r=a2[c]||[];return r.forEach(function(n){a=n.apply(null,[a].concat(e))}),a}function Y(c){for(var a=arguments.length,t=new Array(a>1?a-1:0),e=1;e<a;e++)t[e-1]=arguments[e];var i=a2[c]||[];i.forEach(function(r){r.apply(null,t)})}function P(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return e2[c]?e2[c].apply(null,a):void 0}function i1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,t=c.prefix||I();if(a)return a=j(t,a)||a,G1(k3.definitions,t,a)||G1(S.styles,t,a)}var k3=new _4,F4=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,Y("noAuto")},D4={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(Y("beforeI2svg",a),P("pseudoElements2svg",a),P("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,M4(function(){R4({autoReplaceSvgRoot:t}),Y("watch",a)})}},B4={icon:function(a){if(a===null)return null;if(D2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:j(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var t=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=E2(a[0]);return{prefix:e,iconName:j(e,t)||t}}if(typeof a=="string"&&(a.indexOf("".concat(d.cssPrefix,"-"))>-1||a.match(i4))){var i=U2(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||I(),iconName:j(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var r=I();return{prefix:r,iconName:j(r,a)||a}}}},x={noAuto:F4,config:d,dom:D4,parse:B4,library:k3,findIconDefinition:i1,toHtml:V2},R4=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot,e=t===void 0?z:t;(Object.keys(S.styles).length>0||d.autoFetchSvg)&&F&&d.autoReplaceSvg&&x.dom.i2svg({node:e})};function O2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return V2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(F){var e=z.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function I4(c){var a=c.children,t=c.main,e=c.mask,i=c.attributes,r=c.styles,n=c.transform;if(v1(n)&&t.found&&!e.found){var o=t.width,s=t.height,m={x:o/s/2,y:.5};i.style=I2(f(f({},r),{},{"transform-origin":"".concat(m.x+n.x/16,"em ").concat(m.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function E4(c){var a=c.prefix,t=c.iconName,e=c.children,i=c.attributes,r=c.symbol,n=r===!0?"".concat(a,"-").concat(d.cssPrefix,"-").concat(t):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},i),{},{id:n}),children:e}]}]}function b1(c){var a=c.icons,t=a.main,e=a.mask,i=c.prefix,r=c.iconName,n=c.transform,o=c.symbol,s=c.title,m=c.maskId,l=c.titleId,u=c.extra,p=c.watchable,v=p===void 0?!1:p,M=e.found?e:t,N=M.width,w=M.height,y=i==="fak",V=[d.replacementClass,r?"".concat(d.cssPrefix,"-").concat(r):""].filter(function(D){return u.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(u.classes).join(" "),C={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":i,"data-icon":r,class:V,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(w)})},k=y&&!~u.classes.indexOf("fa-fw")?{width:"".concat(N/w*16*.0625,"em")}:{};v&&(C.attributes[G]=""),s&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(l||z2())},children:[s]}),delete C.attributes.title);var L=f(f({},C),{},{prefix:i,iconName:r,main:t,mask:e,maskId:m,transform:n,symbol:o,styles:f(f({},k),u.styles)}),U=e.found&&t.found?P("generateAbstractMask",L)||{children:[],attributes:{}}:P("generateAbstractIcon",L)||{children:[],attributes:{}},O=U.children,W2=U.attributes;return L.children=O,L.attributes=W2,o?E4(L):I4(L)}function Q1(c){var a=c.content,t=c.width,e=c.height,i=c.transform,r=c.title,n=c.extra,o=c.watchable,s=o===void 0?!1:o,m=f(f(f({},n.attributes),r?{title:r}:{}),{},{class:n.classes.join(" ")});s&&(m[G]="");var l=f({},n.styles);v1(i)&&(l.transform=z4({transform:i,startCentered:!0,width:t,height:e}),l["-webkit-transform"]=l.transform);var u=I2(l);u.length>0&&(m.style=u);var p=[];return p.push({tag:"span",attributes:m,children:[a]}),r&&p.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),p}function U4(c){var a=c.content,t=c.title,e=c.extra,i=f(f(f({},e.attributes),t?{title:t}:{}),{},{class:e.classes.join(" ")}),r=I2(e.styles);r.length>0&&(i.style=r);var n=[];return n.push({tag:"span",attributes:i,children:[a]}),t&&n.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),n}var Q2=S.styles;function r1(c){var a=c[0],t=c[1],e=c.slice(4),i=l1(e,1),r=i[0],n=null;return Array.isArray(r)?n={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.PRIMARY),fill:"currentColor",d:r[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:a,height:t,icon:n}}var O4={found:!1,width:512,height:512};function W4(c,a){!h3&&!d.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function n1(c,a){var t=a;return a==="fa"&&d.styleDefault!==null&&(a=I()),new Promise(function(e,i){var r={found:!1,width:512,height:512,icon:P("missingIconAbstract")||{}};if(t==="fa"){var n=y3(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&Q2[a]&&Q2[a][c]){var o=Q2[a][c];return e(r1(o))}W4(c,a),e(f(f({},O4),{},{icon:d.showMissingIcons&&c?P("missingIconAbstract")||{}:{}}))})}var K1=function(){},o1=d.measurePerformance&&x2&&x2.mark&&x2.measure?x2:{mark:K1,measure:K1},f2='FA "6.5.2"',q4=function(a){return o1.mark("".concat(f2," ").concat(a," begins")),function(){return A3(a)}},A3=function(a){o1.mark("".concat(f2," ").concat(a," ends")),o1.measure("".concat(f2," ").concat(a),"".concat(f2," ").concat(a," begins"),"".concat(f2," ").concat(a," ends"))},V1={begin:q4,end:A3},P2=function(){};function J1(c){var a=c.getAttribute?c.getAttribute(G):null;return typeof a=="string"}function j4(c){var a=c.getAttribute?c.getAttribute(m1):null,t=c.getAttribute?c.getAttribute(d1):null;return a&&t}function G4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(d.replacementClass)}function Y4(){if(d.autoReplaceSvg===!0)return F2.replace;var c=F2[d.autoReplaceSvg];return c||F2.replace}function $4(c){return z.createElementNS("http://www.w3.org/2000/svg",c)}function X4(c){return z.createElement(c)}function _3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.ceFn,e=t===void 0?c.tag==="svg"?$4:X4:t;if(typeof c=="string")return z.createTextNode(c);var i=e(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var r=c.children||[];return r.forEach(function(n){i.appendChild(_3(n,{ceFn:e}))}),i}function Q4(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var F2={replace:function(a){var t=a[0];if(t.parentNode)if(a[1].forEach(function(i){t.parentNode.insertBefore(_3(i),t)}),t.getAttribute(G)===null&&d.keepOriginalSource){var e=z.createComment(Q4(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(a){var t=a[0],e=a[1];if(~p1(t).indexOf(d.replacementClass))return F2.replace(a);var i=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var r=e[0].attributes.class.split(" ").reduce(function(o,s){return s===d.replacementClass||s.match(i)?o.toSvg.push(s):o.toNode.push(s),o},{toNode:[],toSvg:[]});e[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",r.toNode.join(" "))}var n=e.map(function(o){return V2(o)}).join(`
`);t.setAttribute(G,""),t.innerHTML=n}};function Z1(c){c()}function T3(c,a){var t=typeof a=="function"?a:P2;if(c.length===0)t();else{var e=Z1;d.mutateApproach===a4&&(e=R.requestAnimationFrame||Z1),e(function(){var i=Y4(),r=V1.begin("mutate");c.map(i),r(),t()})}}var M1=!1;function P3(){M1=!0}function s1(){M1=!1}var R2=null;function c3(c){if(O1&&d.observeMutations){var a=c.treeCallback,t=a===void 0?P2:a,e=c.nodeCallback,i=e===void 0?P2:e,r=c.pseudoElementsCallback,n=r===void 0?P2:r,o=c.observeMutationsRoot,s=o===void 0?z:o;R2=new O1(function(m){if(!M1){var l=I();i2(m).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!J1(u.addedNodes[0])&&(d.searchPseudoElements&&n(u.target),t(u.target)),u.type==="attributes"&&u.target.parentNode&&d.searchPseudoElements&&n(u.target.parentNode),u.type==="attributes"&&J1(u.target)&&~s4.indexOf(u.attributeName))if(u.attributeName==="class"&&j4(u.target)){var p=U2(p1(u.target)),v=p.prefix,M=p.iconName;u.target.setAttribute(m1,v||l),M&&u.target.setAttribute(d1,M)}else G4(u.target)&&i(u.target)})}}),F&&R2.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function K4(){R2&&R2.disconnect()}function J4(c){var a=c.getAttribute("style"),t=[];return a&&(t=a.split(";").reduce(function(e,i){var r=i.split(":"),n=r[0],o=r.slice(1);return n&&o.length>0&&(e[n]=o.join(":").trim()),e},{})),t}function Z4(c){var a=c.getAttribute("data-prefix"),t=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",i=U2(p1(c));return i.prefix||(i.prefix=I()),a&&t&&(i.prefix=a,i.iconName=t),i.iconName&&i.prefix||(i.prefix&&e.length>0&&(i.iconName=k4(i.prefix,c.innerText)||z1(i.prefix,a1(c.innerText))),!i.iconName&&d.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function c6(c){var a=i2(c.attributes).reduce(function(i,r){return i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i},{}),t=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return d.autoA11y&&(t?a["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(e||z2()):(a["aria-hidden"]="true",a.focusable="false")),a}function a6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:A,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function a3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Z4(c),e=t.iconName,i=t.prefix,r=t.rest,n=c6(c),o=t1("parseNodeAttributes",{},c),s=a.styleParser?J4(c):[];return f({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:A,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:n}},o)}var e6=S.styles;function F3(c){var a=d.autoReplaceSvg==="nest"?a3(c,{styleParser:!1}):a3(c);return~a.extra.classes.indexOf(z3)?P("generateLayersText",c,a):P("generateSvgReplacementMutation",c,a)}var E=new Set;u1.map(function(c){E.add("fa-".concat(c))});Object.keys(u2[h]).map(E.add.bind(E));Object.keys(u2[H]).map(E.add.bind(E));E=H2(E);function e3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var t=z.documentElement.classList,e=function(u){return t.add("".concat(W1,"-").concat(u))},i=function(u){return t.remove("".concat(W1,"-").concat(u))},r=d.autoFetchSvg?E:u1.map(function(l){return"fa-".concat(l)}).concat(Object.keys(e6));r.includes("fa")||r.push("fa");var n=[".".concat(z3,":not([").concat(G,"])")].concat(r.map(function(l){return".".concat(l,":not([").concat(G,"])")})).join(", ");if(n.length===0)return Promise.resolve();var o=[];try{o=i2(c.querySelectorAll(n))}catch{}if(o.length>0)e("pending"),i("complete");else return Promise.resolve();var s=V1.begin("onTree"),m=o.reduce(function(l,u){try{var p=F3(u);p&&l.push(p)}catch(v){h3||v.name==="MissingIcon"&&console.error(v)}return l},[]);return new Promise(function(l,u){Promise.all(m).then(function(p){T3(p,function(){e("active"),e("complete"),i("pending"),typeof a=="function"&&a(),s(),l()})}).catch(function(p){s(),u(p)})})}function t6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;F3(c).then(function(t){t&&T3([t],a)})}function i6(c){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:i1(a||{}),i=t.mask;return i&&(i=(i||{}).icon?i:i1(i||{})),c(e,f(f({},t),{},{mask:i}))}}var r6=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.transform,i=e===void 0?A:e,r=t.symbol,n=r===void 0?!1:r,o=t.mask,s=o===void 0?null:o,m=t.maskId,l=m===void 0?null:m,u=t.title,p=u===void 0?null:u,v=t.titleId,M=v===void 0?null:v,N=t.classes,w=N===void 0?[]:N,y=t.attributes,V=y===void 0?{}:y,C=t.styles,k=C===void 0?{}:C;if(a){var L=a.prefix,U=a.iconName,O=a.icon;return O2(f({type:"icon"},a),function(){return Y("beforeDOMElementCreation",{iconDefinition:a,params:t}),d.autoA11y&&(p?V["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(M||z2()):(V["aria-hidden"]="true",V.focusable="false")),b1({icons:{main:r1(O),mask:s?r1(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:U,transform:f(f({},A),i),symbol:n,title:p,maskId:l,titleId:M,extra:{attributes:V,styles:k,classes:w}})})}},n6={mixout:function(){return{icon:i6(r6)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=e3,t.nodeCallback=t6,t}}},provides:function(a){a.i2svg=function(t){var e=t.node,i=e===void 0?z:e,r=t.callback,n=r===void 0?function(){}:r;return e3(i,n)},a.generateSvgReplacementMutation=function(t,e){var i=e.iconName,r=e.title,n=e.titleId,o=e.prefix,s=e.transform,m=e.symbol,l=e.mask,u=e.maskId,p=e.extra;return new Promise(function(v,M){Promise.all([n1(i,o),l.iconName?n1(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var w=l1(N,2),y=w[0],V=w[1];v([t,b1({icons:{main:y,mask:V},prefix:o,iconName:i,transform:s,symbol:m,maskId:u,title:r,titleId:n,extra:p,watchable:!0})])}).catch(M)})},a.generateAbstractIcon=function(t){var e=t.children,i=t.attributes,r=t.main,n=t.transform,o=t.styles,s=I2(o);s.length>0&&(i.style=s);var m;return v1(n)&&(m=P("generateAbstractTransformGrouping",{main:r,transform:n,containerWidth:r.width,iconWidth:r.width})),e.push(m||r.icon),{children:e,attributes:i}}}},o6={mixout:function(){return{layer:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.classes,r=i===void 0?[]:i;return O2({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:t,params:e});var n=[];return t(function(o){Array.isArray(o)?o.map(function(s){n=n.concat(s.abstract)}):n=n.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(H2(r)).join(" ")},children:n}]})}}}},s6={mixout:function(){return{counter:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.title,r=i===void 0?null:i,n=e.classes,o=n===void 0?[]:n,s=e.attributes,m=s===void 0?{}:s,l=e.styles,u=l===void 0?{}:l;return O2({type:"counter",content:t},function(){return Y("beforeDOMElementCreation",{content:t,params:e}),U4({content:t.toString(),title:r,extra:{attributes:m,styles:u,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(H2(o))}})})}}}},l6={mixout:function(){return{text:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.transform,r=i===void 0?A:i,n=e.title,o=n===void 0?null:n,s=e.classes,m=s===void 0?[]:s,l=e.attributes,u=l===void 0?{}:l,p=e.styles,v=p===void 0?{}:p;return O2({type:"text",content:t},function(){return Y("beforeDOMElementCreation",{content:t,params:e}),Q1({content:t,transform:f(f({},A),r),title:o,extra:{attributes:u,styles:v,classes:["".concat(d.cssPrefix,"-layers-text")].concat(H2(m))}})})}}},provides:function(a){a.generateLayersText=function(t,e){var i=e.title,r=e.transform,n=e.extra,o=null,s=null;if(u3){var m=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();o=l.width/m,s=l.height/m}return d.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([t,Q1({content:t.innerHTML,width:o,height:s,transform:r,title:i,extra:n,watchable:!0})])}}},f6=new RegExp('"',"ug"),t3=[1105920,1112319];function m6(c){var a=c.replace(f6,""),t=L4(a,0),e=t>=t3[0]&&t<=t3[1],i=a.length===2?a[0]===a[1]:!1;return{value:a1(i?a[0]:a),isSecondary:e||i}}function i3(c,a){var t="".concat(c4).concat(a.replace(":","-"));return new Promise(function(e,i){if(c.getAttribute(t)!==null)return e();var r=i2(c.children),n=r.filter(function(O){return O.getAttribute(c1)===a})[0],o=R.getComputedStyle(c,a),s=o.getPropertyValue("font-family").match(r4),m=o.getPropertyValue("font-weight"),l=o.getPropertyValue("content");if(n&&!s)return c.removeChild(n),e();if(s&&l!=="none"&&l!==""){var u=o.getPropertyValue("content"),p=~["Sharp"].indexOf(s[2])?H:h,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?p2[p][s[2].toLowerCase()]:n4[p][m],M=m6(u),N=M.value,w=M.isSecondary,y=s[0].startsWith("FontAwesome"),V=z1(v,N),C=V;if(y){var k=A4(N);k.iconName&&k.prefix&&(V=k.iconName,v=k.prefix)}if(V&&!w&&(!n||n.getAttribute(m1)!==v||n.getAttribute(d1)!==C)){c.setAttribute(t,C),n&&c.removeChild(n);var L=a6(),U=L.extra;U.attributes[c1]=a,n1(V,v).then(function(O){var W2=b1(f(f({},L),{},{icons:{main:O,mask:H1()},prefix:v,iconName:C,extra:U,watchable:!0})),D=z.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(D,c.firstChild):c.appendChild(D),D.outerHTML=W2.map(function(R3){return V2(R3)}).join(`
`),c.removeAttribute(t),e()}).catch(i)}else e()}else e()})}function d6(c){return Promise.all([i3(c,"::before"),i3(c,"::after")])}function u6(c){return c.parentNode!==document.head&&!~e4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(c1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function r3(c){if(F)return new Promise(function(a,t){var e=i2(c.querySelectorAll("*")).filter(u6).map(d6),i=V1.begin("searchPseudoElements");P3(),Promise.all(e).then(function(){i(),s1(),a()}).catch(function(){i(),s1(),t()})})}var p6={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=r3,t}}},provides:function(a){a.pseudoElements2svg=function(t){var e=t.node,i=e===void 0?z:e;d.searchPseudoElements&&r3(i)}}},n3=!1,v6={mixout:function(){return{dom:{unwatch:function(){P3(),n3=!0}}}},hooks:function(){return{bootstrap:function(){c3(t1("mutationObserverCallbacks",{}))},noAuto:function(){K4()},watch:function(t){var e=t.observeMutationsRoot;n3?s1():c3(t1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},o3=function(a){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,i){var r=i.toLowerCase().split("-"),n=r[0],o=r.slice(1).join("-");if(n&&o==="h")return e.flipX=!0,e;if(n&&o==="v")return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(n){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o;break}return e},t)},h6={mixout:function(){return{parse:{transform:function(t){return o3(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var i=e.getAttribute("data-fa-transform");return i&&(t.transform=o3(i)),t}}},provides:function(a){a.generateAbstractTransformGrouping=function(t){var e=t.main,i=t.transform,r=t.containerWidth,n=t.iconWidth,o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),m="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(s," ").concat(m," ").concat(l)},p={transform:"translate(".concat(n/2*-1," -256)")},v={outer:o,inner:u,path:p};return{tag:"g",attributes:f({},v.outer),children:[{tag:"g",attributes:f({},v.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:f(f({},e.icon.attributes),v.path)}]}]}}}},K2={x:0,y:0,width:"100%",height:"100%"};function s3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function z6(c){return c.tag==="g"?c.children:[c]}var H6={hooks:function(){return{parseNodeAttributes:function(t,e){var i=e.getAttribute("data-fa-mask"),r=i?U2(i.split(" ").map(function(n){return n.trim()})):H1();return r.prefix||(r.prefix=I()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(a){a.generateAbstractMask=function(t){var e=t.children,i=t.attributes,r=t.main,n=t.mask,o=t.maskId,s=t.transform,m=r.width,l=r.icon,u=n.width,p=n.icon,v=h4({transform:s,containerWidth:u,iconWidth:m}),M={tag:"rect",attributes:f(f({},K2),{},{fill:"white"})},N=l.children?{children:l.children.map(s3)}:{},w={tag:"g",attributes:f({},v.inner),children:[s3(f({tag:l.tag,attributes:f(f({},l.attributes),v.path)},N))]},y={tag:"g",attributes:f({},v.outer),children:[w]},V="mask-".concat(o||z2()),C="clip-".concat(o||z2()),k={tag:"mask",attributes:f(f({},K2),{},{id:V,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,y]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:z6(p)},k]};return e.push(L,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(V,")")},K2)}),{children:e,attributes:i}}}},b6={provides:function(a){var t=!1;R.matchMedia&&(t=R.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:f(f({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=f(f({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:f(f({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:f(f({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(o),e.push({tag:"path",attributes:f(f({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:f(f({},n),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:f(f({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},V6={hooks:function(){return{parseNodeAttributes:function(t,e){var i=e.getAttribute("data-fa-symbol"),r=i===null?!1:i===""?!0:i;return t.symbol=r,t}}}},M6=[b4,n6,o6,s6,l6,p6,v6,h6,H6,b6,V6];P4(M6,{mixoutsTo:x});var t0=x.noAuto,i0=x.config,r0=x.library,n0=x.dom,D3=x.parse,o0=x.findIconDefinition,s0=x.toHtml,B3=x.icon,l0=x.layer,C6=x.text,g6=x.counter;var L6=["*"],x6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},N6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},w6=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(t=>a[t]?t:null).filter(t=>t)},S6=c=>c.prefix!==void 0&&c.iconName!==void 0,y6=(c,a)=>S6(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},k6=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=M2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),A6=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...e){for(let i of e){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let r of i.icon[2])typeof r=="string"&&(this.definitions[i.prefix][r]=i)}}addIconPacks(...e){for(let i of e){let r=Object.keys(i).map(n=>i[n]);this.addIcons(...r)}}getIconDefinition(e,i){return e in this.definitions&&i in this.definitions[e]?this.definitions[e][i]:null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=M2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),_6=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(i){return new(i||a)},a.\u0275dir=g2({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[L2]});let c=a;return c})(),T6=(()=>{let a=class a{constructor(e,i){this.renderer=e,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};a.\u0275fac=function(i){return new(i||a)(g(N1),g(r2))},a.\u0275cmp=Q({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[L2,J],ngContentSelectors:L6,decls:1,vars:0,template:function(i,r){i&1&&(s2(),W(0))},encapsulation:2});let c=a;return c})(),p0=(()=>{let a=class a{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,i,r,n,o){this.sanitizer=e,this.config=i,this.iconLibrary=r,this.stackItem=n,this.classes=[],o!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){N6();return}if(e){let i=this.icon!=null?this.icon:this.config.fallbackIcon,r=this.findIconDefinition(i);if(r!=null){let n=this.buildParams();this.renderIcon(r,n)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let i=y6(e,this.config.defaultPrefix);if("icon"in i)return i;let r=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return r??(x6(i),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?D3.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:[...w6(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,i){let r=B3(e,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))}};a.\u0275fac=function(i){return new(i||a)(g(A1),g(k6),g(A6),g(_6,8),g(T6,8))},a.\u0275cmp=Q({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,r){i&2&&(k1("innerHTML",r.renderedIconHTML,L1),n2("title",r.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[L2,J],decls:0,vars:0,template:function(i,r){},encapsulation:2});let c=a;return c})();var v0=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=K({type:a}),a.\u0275inj=$({});let c=a;return c})();var z0={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"]};var H0={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]};var b0={prefix:"fas",iconName:"handshake",icon:[640,512,[],"f2b5","M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"]};var V0={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var M0={prefix:"fas",iconName:"check-double",icon:[448,512,[],"f560","M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"]};var C0={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"]};export{R6 as a,Z6 as b,c0 as c,p0 as d,v0 as e,z0 as f,H0 as g,b0 as h,V0 as i,M0 as j,C0 as k};
