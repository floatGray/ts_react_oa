import{a as n,A as An,_ as A,m as B,Q as _n,S as Lt,l as he,P as xe,g as w,h as F,U as $t,i as J,k as le,V as kn,W as Dn,f as Ln,e as $n,w as Tn,X as Vn,x as Fn,r as zn}from"./render-d5b6b10e.js";import{K as te,F as Te}from"./index-5981696e.js";import{b as Xe,T as Tt}from"./useFlexGapSupport-a785865b.js";import{b as Un,o as Vt}from"./button-419145c3.js";var Wn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};const Hn=Wn;var Ft=function(e,a){return n.createElement(An,A(A({},e),{},{ref:a,icon:Hn}))};Ft.displayName="EllipsisOutlined";const Lr=n.forwardRef(Ft);var zt=n.createContext(null);function ft(t,e){return t===void 0?null:"".concat(t,"-").concat(e)}function Ut(t){var e=n.useContext(zt);return ft(e,t)}var jn=["children","locked"],ee=n.createContext(null);function qn(t,e){var a=A({},t);return Object.keys(e).forEach(function(o){var r=e[o];r!==void 0&&(a[o]=r)}),a}function Ve(t){var e=t.children,a=t.locked,o=B(t,jn),r=n.useContext(ee),l=_n(function(){return qn(r,o)},[r,o],function(i,u){return!a&&(i[0]!==u[0]||!Lt(i[1],u[1],!0))});return n.createElement(ee.Provider,{value:l},e)}var Gn=[],Wt=n.createContext(null);function et(){return n.useContext(Wt)}var Ht=n.createContext(Gn);function Fe(t){var e=n.useContext(Ht);return n.useMemo(function(){return t!==void 0?[].concat(he(e),[t]):e},[e,t])}var jt=n.createContext(null),mt=n.createContext({});function Ot(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Un(t)){var a=t.nodeName.toLowerCase(),o=["input","select","textarea","button"].includes(a)||t.isContentEditable||a==="a"&&!!t.getAttribute("href"),r=t.getAttribute("tabindex"),l=Number(r),i=null;return r&&!Number.isNaN(l)?i=l:o&&i===null&&(i=0),o&&t.disabled&&(i=null),i!==null&&(i>=0||e&&i<0)}return!1}function qt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=he(t.querySelectorAll("*")).filter(function(o){return Ot(o,e)});return Ot(t,e)&&a.unshift(t),a}var ut=te.LEFT,st=te.RIGHT,ct=te.UP,Je=te.DOWN,Ze=te.ENTER,Gt=te.ESC,Le=te.HOME,$e=te.END,At=[ct,Je,ut,st];function Bn(t,e,a,o){var r,l,i,u,s="prev",c="next",m="children",g="parent";if(t==="inline"&&o===Ze)return{inlineTrigger:!0};var v=(r={},w(r,ct,s),w(r,Je,c),r),h=(l={},w(l,ut,a?c:s),w(l,st,a?s:c),w(l,Je,m),w(l,Ze,m),l),d=(i={},w(i,ct,s),w(i,Je,c),w(i,Ze,m),w(i,Gt,g),w(i,ut,a?m:g),w(i,st,a?g:m),i),y={inline:v,horizontal:h,vertical:d,inlineSub:v,horizontalSub:d,verticalSub:d},M=(u=y["".concat(t).concat(e?"":"Sub")])===null||u===void 0?void 0:u[o];switch(M){case s:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case g:return{offset:-1,sibling:!1};case m:return{offset:1,sibling:!1};default:return null}}function Yn(t){for(var e=t;e;){if(e.getAttribute("data-menu-list"))return e;e=e.parentElement}return null}function Xn(t,e){for(var a=t||document.activeElement;a;){if(e.has(a))return a;a=a.parentElement}return null}function Bt(t,e){var a=qt(t,!0);return a.filter(function(o){return e.has(o)})}function _t(t,e,a){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var r=Bt(t,e),l=r.length,i=r.findIndex(function(u){return a===u});return o<0?i===-1?i=l-1:i-=1:o>0&&(i+=1),i=(i+l)%l,r[i]}function Jn(t,e,a,o,r,l,i,u,s,c){var m=n.useRef(),g=n.useRef();g.current=e;var v=function(){xe.cancel(m.current)};return n.useEffect(function(){return function(){v()}},[]),function(h){var d=h.which;if([].concat(At,[Ze,Gt,Le,$e]).includes(d)){var y,M,S,K=function(){y=new Set,M=new Map,S=new Map;var $=l();return $.forEach(function(_){var k=document.querySelector("[data-menu-id='".concat(ft(o,_),"']"));k&&(y.add(k),S.set(k,_),M.set(_,k))}),y};K();var C=M.get(e),p=Xn(C,y),b=S.get(p),f=Bn(t,i(b,!0).length===1,a,d);if(!f&&d!==Le&&d!==$e)return;(At.includes(d)||[Le,$e].includes(d))&&h.preventDefault();var z=function($){if($){var _=$,k=$.querySelector("a");k!=null&&k.getAttribute("href")&&(_=k);var Q=S.get($);u(Q),v(),m.current=xe(function(){g.current===Q&&_.focus()})}};if([Le,$e].includes(d)||f.sibling||!p){var E;!p||t==="inline"?E=r.current:E=Yn(p);var U,T=Bt(E,y);d===Le?U=T[0]:d===$e?U=T[T.length-1]:U=_t(E,y,p,f.offset),z(U)}else if(f.inlineTrigger)s(b);else if(f.offset>0)s(b,!0),v(),m.current=xe(function(){K();var L=p.getAttribute("aria-controls"),$=document.getElementById(L),_=_t($,y);z(_)},5);else if(f.offset<0){var O=i(b,!0),D=O[O.length-2],Z=M.get(D);s(D,!1),z(Z)}}c==null||c(h)}}function Zn(t){Promise.resolve().then(t)}var pt="__RC_UTIL_PATH_SPLIT__",kt=function(e){return e.join(pt)},Qn=function(e){return e.split(pt)},vt="rc-menu-more";function er(){var t=n.useState({}),e=F(t,2),a=e[1],o=n.useRef(new Map),r=n.useRef(new Map),l=n.useState([]),i=F(l,2),u=i[0],s=i[1],c=n.useRef(0),m=n.useRef(!1),g=function(){m.current||a({})},v=n.useCallback(function(C,p){var b=kt(p);r.current.set(b,C),o.current.set(C,b),c.current+=1;var f=c.current;Zn(function(){f===c.current&&g()})},[]),h=n.useCallback(function(C,p){var b=kt(p);r.current.delete(b),o.current.delete(C)},[]),d=n.useCallback(function(C){s(C)},[]),y=n.useCallback(function(C,p){var b=o.current.get(C)||"",f=Qn(b);return p&&u.includes(f[0])&&f.unshift(vt),f},[u]),M=n.useCallback(function(C,p){return C.some(function(b){var f=y(b,!0);return f.includes(p)})},[y]),S=function(){var p=he(o.current.keys());return u.length&&p.push(vt),p},K=n.useCallback(function(C){var p="".concat(o.current.get(C)).concat(pt),b=new Set;return he(r.current.keys()).forEach(function(f){f.startsWith(p)&&b.add(r.current.get(f))}),b},[]);return n.useEffect(function(){return function(){m.current=!0}},[]),{registerPath:v,unregisterPath:h,refreshOverflowKeys:d,isSubPathKey:M,getKeyPath:y,getKeys:S,getSubPathKeys:K}}function Pe(t){var e=n.useRef(t);e.current=t;var a=n.useCallback(function(){for(var o,r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(o=e.current)===null||o===void 0?void 0:o.call.apply(o,[e].concat(l))},[]);return t?a:void 0}var tr=Math.random().toFixed(5).toString().slice(2),Dt=0;function nr(t){var e=Xe(t,{value:t}),a=F(e,2),o=a[0],r=a[1];return n.useEffect(function(){Dt+=1;var l="".concat(tr,"-").concat(Dt);r("rc-menu-uuid-".concat(l))},[]),o}function Yt(t,e,a,o){var r=n.useContext(ee),l=r.activeKey,i=r.onActive,u=r.onInactive,s={active:l===t};return e||(s.onMouseEnter=function(c){a==null||a({key:t,domEvent:c}),i(t)},s.onMouseLeave=function(c){o==null||o({key:t,domEvent:c}),u(t)}),s}var rr=["item"];function Qe(t){var e=t.item,a=B(t,rr);return Object.defineProperty(a,"item",{get:function(){return $t(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),e}}),a}function Xt(t){var e=t.icon,a=t.props,o=t.children,r;return typeof e=="function"?r=n.createElement(e,A({},a)):r=e,r||o||null}function Jt(t){var e=n.useContext(ee),a=e.mode,o=e.rtl,r=e.inlineIndent;if(a!=="inline")return null;var l=t;return o?{paddingRight:l*r}:{paddingLeft:l*r}}var ar=["title","attribute","elementRef"],ir=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],or=["active"],lr=function(t){kn(a,t);var e=Dn(a);function a(){return Ln(this,a),e.apply(this,arguments)}return $n(a,[{key:"render",value:function(){var r=this.props,l=r.title,i=r.attribute,u=r.elementRef,s=B(r,ar),c=Vt(s,["eventKey"]);return $t(!i,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(Te.Item,J({},i,{title:typeof l=="string"?l:void 0},c,{ref:u}))}}]),a}(n.Component),ur=function(e){var a,o=e.style,r=e.className,l=e.eventKey;e.warnKey;var i=e.disabled,u=e.itemIcon,s=e.children,c=e.role,m=e.onMouseEnter,g=e.onMouseLeave,v=e.onClick,h=e.onKeyDown,d=e.onFocus,y=B(e,ir),M=Ut(l),S=n.useContext(ee),K=S.prefixCls,C=S.onItemClick,p=S.disabled,b=S.overflowDisabled,f=S.itemIcon,z=S.selectedKeys,E=S.onActive,U=n.useContext(mt),T=U._internalRenderMenuItem,O="".concat(K,"-item"),D=n.useRef(),Z=n.useRef(),L=p||i,$=Fe(l),_=function(j){return{key:l,keyPath:he($).reverse(),item:D.current,domEvent:j}},k=u||f,Q=Yt(l,L,m,g),ce=Q.active,ne=B(Q,or),W=z.includes(l),V=Jt($.length),I=function(j){if(!L){var re=_(j);v==null||v(Qe(re)),C(re)}},x=function(j){if(h==null||h(j),j.which===te.ENTER){var re=_(j);v==null||v(Qe(re)),C(re)}},H=function(j){E(l),d==null||d(j)},ve={};e.role==="option"&&(ve["aria-selected"]=W);var de=n.createElement(lr,J({ref:D,elementRef:Z,role:c===null?"none":c||"menuitem",tabIndex:i?null:-1,"data-menu-id":b&&M?null:M},y,ne,ve,{component:"li","aria-disabled":i,style:A(A({},V),o),className:le(O,(a={},w(a,"".concat(O,"-active"),ce),w(a,"".concat(O,"-selected"),W),w(a,"".concat(O,"-disabled"),L),a),r),onClick:I,onKeyDown:x,onFocus:H}),s,n.createElement(Xt,{props:A(A({},e),{},{isSelected:W}),icon:k}));return T&&(de=T(de,e,{selected:W})),de};function gt(t){var e=t.eventKey,a=et(),o=Fe(e);return n.useEffect(function(){if(a)return a.registerPath(e,o),function(){a.unregisterPath(e,o)}},[o]),a?null:n.createElement(ur,t)}var sr=["className","children"],cr=function(e,a){var o=e.className,r=e.children,l=B(e,sr),i=n.useContext(ee),u=i.prefixCls,s=i.mode,c=i.rtl;return n.createElement("ul",J({className:le(u,c&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(s==="inline"?"inline":"vertical"),o),role:"menu"},l,{"data-menu-list":!0,ref:a}),r)},ht=n.forwardRef(cr);ht.displayName="SubMenuList";var vr=["label","children","key","type"];function Ct(t,e){return Tn(t).map(function(a,o){if(n.isValidElement(a)){var r,l,i=a.key,u=(r=(l=a.props)===null||l===void 0?void 0:l.eventKey)!==null&&r!==void 0?r:i,s=u==null;s&&(u="tmp_key-".concat([].concat(he(e),[o]).join("-")));var c={key:u,eventKey:u};return n.cloneElement(a,c)}return a})}function dt(t){return(t||[]).map(function(e,a){if(e&&Vn(e)==="object"){var o=e,r=o.label,l=o.children,i=o.key,u=o.type,s=B(o,vr),c=i??"tmp-".concat(a);return l||u==="group"?u==="group"?n.createElement(Qt,J({key:c},s,{title:r}),dt(l)):n.createElement(bt,J({key:c},s,{title:r}),dt(l)):u==="divider"?n.createElement(en,J({key:c},s)):n.createElement(gt,J({key:c},s),r)}return null}).filter(function(e){return e})}function dr(t,e,a){var o=t;return e&&(o=dt(e)),Ct(o,a)}var se={adjustX:1,adjustY:1},fr={topLeft:{points:["bl","tl"],overflow:se,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:se,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:se,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:se,offset:[4,0]}},mr={topLeft:{points:["bl","tl"],overflow:se,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:se,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:se,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:se,offset:[4,0]}};function Zt(t,e,a){if(e)return e;if(a)return a[t]||a.other}var pr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function gr(t){var e=t.prefixCls,a=t.visible,o=t.children,r=t.popup,l=t.popupClassName,i=t.popupOffset,u=t.disabled,s=t.mode,c=t.onVisibleChange,m=n.useContext(ee),g=m.getPopupContainer,v=m.rtl,h=m.subMenuOpenDelay,d=m.subMenuCloseDelay,y=m.builtinPlacements,M=m.triggerSubMenuAction,S=m.forceSubMenuRender,K=m.rootClassName,C=m.motion,p=m.defaultMotions,b=n.useState(!1),f=F(b,2),z=f[0],E=f[1],U=v?A(A({},mr),y):A(A({},fr),y),T=pr[s],O=Zt(s,C,p),D=n.useRef(O);s!=="inline"&&(D.current=O);var Z=A(A({},D.current),{},{leavedClassName:"".concat(e,"-hidden"),removeOnLeave:!1,motionAppear:!0}),L=n.useRef();return n.useEffect(function(){return L.current=xe(function(){E(a)}),function(){xe.cancel(L.current)}},[a]),n.createElement(Tt,{prefixCls:e,popupClassName:le("".concat(e,"-popup"),w({},"".concat(e,"-rtl"),v),l,K),stretch:s==="horizontal"?"minWidth":null,getPopupContainer:g,builtinPlacements:U,popupPlacement:T,popupVisible:z,popup:r,popupAlign:i&&{offset:i},action:u?[]:[M],mouseEnterDelay:h,mouseLeaveDelay:d,onPopupVisibleChange:c,forceRender:S,popupMotion:Z},o)}function hr(t){var e=t.id,a=t.open,o=t.keyPath,r=t.children,l="inline",i=n.useContext(ee),u=i.prefixCls,s=i.forceSubMenuRender,c=i.motion,m=i.defaultMotions,g=i.mode,v=n.useRef(!1);v.current=g===l;var h=n.useState(!v.current),d=F(h,2),y=d[0],M=d[1],S=v.current?a:!1;n.useEffect(function(){v.current&&M(!1)},[g]);var K=A({},Zt(l,c,m));o.length>1&&(K.motionAppear=!1);var C=K.onVisibleChanged;return K.onVisibleChanged=function(p){return!v.current&&!p&&M(!0),C==null?void 0:C(p)},y?null:n.createElement(Ve,{mode:l,locked:!v.current},n.createElement(Fn,J({visible:S},K,{forceRender:s,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden")}),function(p){var b=p.className,f=p.style;return n.createElement(ht,{id:e,className:b,style:f},r)}))}var Cr=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],br=["active"],yr=function(e){var a,o=e.style,r=e.className,l=e.title,i=e.eventKey;e.warnKey;var u=e.disabled,s=e.internalPopupClose,c=e.children,m=e.itemIcon,g=e.expandIcon,v=e.popupClassName,h=e.popupOffset,d=e.onClick,y=e.onMouseEnter,M=e.onMouseLeave,S=e.onTitleClick,K=e.onTitleMouseEnter,C=e.onTitleMouseLeave,p=B(e,Cr),b=Ut(i),f=n.useContext(ee),z=f.prefixCls,E=f.mode,U=f.openKeys,T=f.disabled,O=f.overflowDisabled,D=f.activeKey,Z=f.selectedKeys,L=f.itemIcon,$=f.expandIcon,_=f.onItemClick,k=f.onOpenChange,Q=f.onActive,ce=n.useContext(mt),ne=ce._internalRenderSubMenuItem,W=n.useContext(jt),V=W.isSubPathKey,I=Fe(),x="".concat(z,"-submenu"),H=T||u,ve=n.useRef(),de=n.useRef(),fe=m||L,j=g||$,re=U.includes(i),oe=!O&&re,ze=V(Z,i),Ue=Yt(i,H,K,C),Ee=Ue.active,Re=B(Ue,br),we=n.useState(!1),We=F(we,2),Ne=We[0],He=We[1],je=function(X){H||He(X)},ae=function(X){je(!0),y==null||y({key:i,domEvent:X})},nt=function(X){je(!1),M==null||M({key:i,domEvent:X})},Ke=n.useMemo(function(){return Ee||(E!=="inline"?Ne||V([D],i):!1)},[E,Ee,D,Ne,i,V]),qe=Jt(I.length),rt=function(X){H||(S==null||S({key:i,domEvent:X}),E==="inline"&&k(i,!re))},Ce=Pe(function(ie){d==null||d(Qe(ie)),_(ie)}),Oe=function(X){E!=="inline"&&k(i,X)},Ae=function(){Q(i)},_e=b&&"".concat(b,"-popup"),be=n.createElement("div",J({role:"menuitem",style:qe,className:"".concat(x,"-title"),tabIndex:H?null:-1,ref:ve,title:typeof l=="string"?l:null,"data-menu-id":O&&b?null:b,"aria-expanded":oe,"aria-haspopup":!0,"aria-controls":_e,"aria-disabled":H,onClick:rt,onFocus:Ae},Re),l,n.createElement(Xt,{icon:E!=="horizontal"?j:null,props:A(A({},e),{},{isOpen:oe,isSubMenu:!0})},n.createElement("i",{className:"".concat(x,"-arrow")}))),Y=n.useRef(E);if(E!=="inline"&&I.length>1?Y.current="vertical":Y.current=E,!O){var ye=Y.current;be=n.createElement(gr,{mode:ye,prefixCls:x,visible:!s&&oe&&E!=="inline",popupClassName:v,popupOffset:h,popup:n.createElement(Ve,{mode:ye==="horizontal"?"vertical":ye},n.createElement(ht,{id:_e,ref:de},c)),disabled:H,onVisibleChange:Oe},be)}var me=n.createElement(Te.Item,J({role:"none"},p,{component:"li",style:o,className:le(x,"".concat(x,"-").concat(E),r,(a={},w(a,"".concat(x,"-open"),oe),w(a,"".concat(x,"-active"),Ke),w(a,"".concat(x,"-selected"),ze),w(a,"".concat(x,"-disabled"),H),a)),onMouseEnter:ae,onMouseLeave:nt}),be,!O&&n.createElement(hr,{id:_e,open:oe,keyPath:I},c));return ne&&(me=ne(me,e,{selected:ze,active:Ke,open:oe,disabled:H})),n.createElement(Ve,{onItemClick:Ce,mode:E==="horizontal"?"vertical":E,itemIcon:fe,expandIcon:j},me)};function bt(t){var e=t.eventKey,a=t.children,o=Fe(e),r=Ct(a,o),l=et();n.useEffect(function(){if(l)return l.registerPath(e,o),function(){l.unregisterPath(e,o)}},[o]);var i;return l?i=r:i=n.createElement(yr,t,r),n.createElement(Ht.Provider,{value:o},i)}var Ir=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],Ie=[],Mr=n.forwardRef(function(t,e){var a,o,r=t,l=r.prefixCls,i=l===void 0?"rc-menu":l,u=r.rootClassName,s=r.style,c=r.className,m=r.tabIndex,g=m===void 0?0:m,v=r.items,h=r.children,d=r.direction,y=r.id,M=r.mode,S=M===void 0?"vertical":M,K=r.inlineCollapsed,C=r.disabled,p=r.disabledOverflow,b=r.subMenuOpenDelay,f=b===void 0?.1:b,z=r.subMenuCloseDelay,E=z===void 0?.1:z,U=r.forceSubMenuRender,T=r.defaultOpenKeys,O=r.openKeys,D=r.activeKey,Z=r.defaultActiveFirst,L=r.selectable,$=L===void 0?!0:L,_=r.multiple,k=_===void 0?!1:_,Q=r.defaultSelectedKeys,ce=r.selectedKeys,ne=r.onSelect,W=r.onDeselect,V=r.inlineIndent,I=V===void 0?24:V,x=r.motion,H=r.defaultMotions,ve=r.triggerSubMenuAction,de=ve===void 0?"hover":ve,fe=r.builtinPlacements,j=r.itemIcon,re=r.expandIcon,oe=r.overflowedIndicator,ze=oe===void 0?"...":oe,Ue=r.overflowedIndicatorPopupClassName,Ee=r.getPopupContainer,Re=r.onClick,we=r.onOpenChange,We=r.onKeyDown;r.openAnimation,r.openTransitionName;var Ne=r._internalRenderMenuItem,He=r._internalRenderSubMenuItem,je=B(r,Ir),ae=n.useMemo(function(){return dr(h,v,Ie)},[h,v]),nt=n.useState(!1),Ke=F(nt,2),qe=Ke[0],rt=Ke[1],Ce=n.useRef(),Oe=nr(y),Ae=d==="rtl",_e=Xe(T,{value:O,postState:function(P){return P||Ie}}),be=F(_e,2),Y=be[0],ye=be[1],me=function(P){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function q(){ye(P),we==null||we(P)}R?zn.flushSync(q):q()},ie=n.useState(Y),X=F(ie,2),tn=X[0],nn=X[1],at=n.useRef(!1),rn=n.useMemo(function(){return(S==="inline"||S==="vertical")&&K?["vertical",K]:[S,!1]},[S,K]),yt=F(rn,2),Ge=yt[0],it=yt[1],It=Ge==="inline",an=n.useState(Ge),Mt=F(an,2),ue=Mt[0],on=Mt[1],ln=n.useState(it),St=F(ln,2),un=St[0],sn=St[1];n.useEffect(function(){on(Ge),sn(it),at.current&&(It?ye(tn):me(Ie))},[Ge,it]);var cn=n.useState(0),Pt=F(cn,2),Be=Pt[0],vn=Pt[1],ot=Be>=ae.length-1||ue!=="horizontal"||p;n.useEffect(function(){It&&nn(Y)},[Y]),n.useEffect(function(){return at.current=!0,function(){at.current=!1}},[]);var pe=er(),xt=pe.registerPath,Et=pe.unregisterPath,dn=pe.refreshOverflowKeys,Rt=pe.isSubPathKey,fn=pe.getKeyPath,mn=pe.getKeys,pn=pe.getSubPathKeys,gn=n.useMemo(function(){return{registerPath:xt,unregisterPath:Et}},[xt,Et]),hn=n.useMemo(function(){return{isSubPathKey:Rt}},[Rt]);n.useEffect(function(){dn(ot?Ie:ae.slice(Be+1).map(function(N){return N.key}))},[Be,ot]);var Cn=Xe(D||Z&&((a=ae[0])===null||a===void 0?void 0:a.key),{value:D}),wt=F(Cn,2),ke=wt[0],lt=wt[1],bn=Pe(function(N){lt(N)}),yn=Pe(function(){lt(void 0)});n.useImperativeHandle(e,function(){return{list:Ce.current,focus:function(P){var R,q=ke??((R=ae.find(function(On){return!On.props.disabled}))===null||R===void 0?void 0:R.key);if(q){var G,ge,De;(G=Ce.current)===null||G===void 0||(ge=G.querySelector("li[data-menu-id='".concat(ft(Oe,q),"']")))===null||ge===void 0||(De=ge.focus)===null||De===void 0||De.call(ge,P)}}}});var In=Xe(Q||[],{value:ce,postState:function(P){return Array.isArray(P)?P:P==null?Ie:[P]}}),Nt=F(In,2),Ye=Nt[0],Mn=Nt[1],Sn=function(P){if($){var R=P.key,q=Ye.includes(R),G;k?q?G=Ye.filter(function(De){return De!==R}):G=[].concat(he(Ye),[R]):G=[R],Mn(G);var ge=A(A({},P),{},{selectedKeys:G});q?W==null||W(ge):ne==null||ne(ge)}!k&&Y.length&&ue!=="inline"&&me(Ie)},Pn=Pe(function(N){Re==null||Re(Qe(N)),Sn(N)}),Kt=Pe(function(N,P){var R=Y.filter(function(G){return G!==N});if(P)R.push(N);else if(ue!=="inline"){var q=pn(N);R=R.filter(function(G){return!q.has(G)})}Lt(Y,R,!0)||me(R,!0)}),xn=Pe(Ee),En=function(P,R){var q=R??!Y.includes(P);Kt(P,q)},Rn=Jn(ue,ke,Ae,Oe,Ce,mn,fn,lt,En,We);n.useEffect(function(){rt(!0)},[]);var wn=n.useMemo(function(){return{_internalRenderMenuItem:Ne,_internalRenderSubMenuItem:He}},[Ne,He]),Nn=ue!=="horizontal"||p?ae:ae.map(function(N,P){return n.createElement(Ve,{key:N.key,overflowDisabled:P>Be},N)}),Kn=n.createElement(Te,J({id:y,ref:Ce,prefixCls:"".concat(i,"-overflow"),component:"ul",itemComponent:gt,className:le(i,"".concat(i,"-root"),"".concat(i,"-").concat(ue),c,(o={},w(o,"".concat(i,"-inline-collapsed"),un),w(o,"".concat(i,"-rtl"),Ae),o),u),dir:d,style:s,role:"menu",tabIndex:g,data:Nn,renderRawItem:function(P){return P},renderRawRest:function(P){var R=P.length,q=R?ae.slice(-R):null;return n.createElement(bt,{eventKey:vt,title:ze,disabled:ot,internalPopupClose:R===0,popupClassName:Ue},q)},maxCount:ue!=="horizontal"||p?Te.INVALIDATE:Te.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(P){vn(P)},onKeyDown:Rn},je));return n.createElement(mt.Provider,{value:wn},n.createElement(zt.Provider,{value:Oe},n.createElement(Ve,{prefixCls:i,rootClassName:u,mode:ue,openKeys:Y,rtl:Ae,disabled:C,motion:qe?x:null,defaultMotions:qe?H:null,activeKey:ke,onActive:bn,onInactive:yn,selectedKeys:Ye,inlineIndent:I,subMenuOpenDelay:f,subMenuCloseDelay:E,forceSubMenuRender:U,builtinPlacements:fe,triggerSubMenuAction:de,getPopupContainer:xn,itemIcon:j,expandIcon:re,onItemClick:Pn,onOpenChange:Kt},n.createElement(jt.Provider,{value:hn},Kn),n.createElement("div",{style:{display:"none"},"aria-hidden":!0},n.createElement(Wt.Provider,{value:gn},ae)))))}),Sr=["className","title","eventKey","children"],Pr=["children"],xr=function(e){var a=e.className,o=e.title;e.eventKey;var r=e.children,l=B(e,Sr),i=n.useContext(ee),u=i.prefixCls,s="".concat(u,"-item-group");return n.createElement("li",J({role:"presentation"},l,{onClick:function(m){return m.stopPropagation()},className:le(s,a)}),n.createElement("div",{role:"presentation",className:"".concat(s,"-title"),title:typeof o=="string"?o:void 0},o),n.createElement("ul",{role:"group",className:"".concat(s,"-list")},r))};function Qt(t){var e=t.children,a=B(t,Pr),o=Fe(a.eventKey),r=Ct(e,o),l=et();return l?r:n.createElement(xr,Vt(a,["warnKey"]),r)}function en(t){var e=t.className,a=t.style,o=n.useContext(ee),r=o.prefixCls,l=et();return l?null:n.createElement("li",{className:le("".concat(r,"-item-divider"),e),style:a})}var tt=Mr;tt.Item=gt;tt.SubMenu=bt;tt.ItemGroup=Qt;tt.Divider=en;var Me={adjustX:1,adjustY:1},Se=[0,0],Er={topLeft:{points:["bl","tl"],overflow:Me,offset:[0,-4],targetOffset:Se},topCenter:{points:["bc","tc"],overflow:Me,offset:[0,-4],targetOffset:Se},topRight:{points:["br","tr"],overflow:Me,offset:[0,-4],targetOffset:Se},bottomLeft:{points:["tl","bl"],overflow:Me,offset:[0,4],targetOffset:Se},bottomCenter:{points:["tc","bc"],overflow:Me,offset:[0,4],targetOffset:Se},bottomRight:{points:["tr","br"],overflow:Me,offset:[0,4],targetOffset:Se}},Rr=te.ESC,wr=te.TAB;function Nr(t){var e=t.visible,a=t.setTriggerVisible,o=t.triggerRef,r=t.onVisibleChange,l=t.autoFocus,i=n.useRef(!1),u=function(){if(e&&o.current){var g,v,h,d;(g=o.current)===null||g===void 0||(v=g.triggerRef)===null||v===void 0||(h=v.current)===null||h===void 0||(d=h.focus)===null||d===void 0||d.call(h),a(!1),typeof r=="function"&&r(!1)}},s=function(){var g,v,h,d,y=qt((g=o.current)===null||g===void 0||(v=g.popupRef)===null||v===void 0||(h=v.current)===null||h===void 0||(d=h.getElement)===null||d===void 0?void 0:d.call(h)),M=y[0];return M!=null&&M.focus?(M.focus(),i.current=!0,!0):!1},c=function(g){switch(g.keyCode){case Rr:u();break;case wr:{var v=!1;i.current||(v=s()),v?g.preventDefault():u();break}}};n.useEffect(function(){return e?(window.addEventListener("keydown",c),l&&xe(s,3),function(){window.removeEventListener("keydown",c),i.current=!1}):function(){i.current=!1}},[e])}var Kr=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function Or(t,e){var a=t.arrow,o=a===void 0?!1:a,r=t.prefixCls,l=r===void 0?"rc-dropdown":r,i=t.transitionName,u=t.animation,s=t.align,c=t.placement,m=c===void 0?"bottomLeft":c,g=t.placements,v=g===void 0?Er:g,h=t.getPopupContainer,d=t.showAction,y=t.hideAction,M=t.overlayClassName,S=t.overlayStyle,K=t.visible,C=t.trigger,p=C===void 0?["hover"]:C,b=t.autoFocus,f=B(t,Kr),z=n.useState(),E=F(z,2),U=E[0],T=E[1],O="visible"in t?K:U,D=n.useRef(null);n.useImperativeHandle(e,function(){return D.current}),Nr({visible:O,setTriggerVisible:T,triggerRef:D,onVisibleChange:t.onVisibleChange,autoFocus:b});var Z=function(){var I=t.overlay,x;return typeof I=="function"?x=I():x=I,x},L=function(I){var x=t.onOverlayClick;T(!1),x&&x(I)},$=function(I){var x=t.onVisibleChange;T(I),typeof x=="function"&&x(I)},_=function(){var I=Z();return n.createElement(n.Fragment,null,o&&n.createElement("div",{className:"".concat(l,"-arrow")}),I)},k=function(){var I=t.overlay;return typeof I=="function"?_:_()},Q=function(){var I=t.minOverlayWidthMatchTrigger,x=t.alignPoint;return"minOverlayWidthMatchTrigger"in t?I:!x},ce=function(){var I=t.openClassName;return I!==void 0?I:"".concat(l,"-open")},ne=function(){var I=t.children,x=I.props?I.props:{},H=le(x.className,ce());return O&&I?n.cloneElement(I,{className:H}):I},W=y;return!W&&p.indexOf("contextMenu")!==-1&&(W=["click"]),n.createElement(Tt,A(A({builtinPlacements:v},f),{},{prefixCls:l,ref:D,popupClassName:le(M,w({},"".concat(l,"-show-arrow"),o)),popupStyle:S,action:p,showAction:d,hideAction:W||[],popupPlacement:m,popupAlign:s,popupTransitionName:i,popupAnimation:u,popupVisible:O,stretch:Q()?"minWidth":"",popup:k(),onPopupVisibleChange:$,onPopupClick:L,getPopupContainer:h}),ne())}const $r=n.forwardRef(Or);export{en as D,tt as E,gt as M,bt as S,Qt as a,Lr as b,$r as c,Fe as u};