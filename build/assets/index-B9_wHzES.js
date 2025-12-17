(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const L of document.querySelectorAll('link[rel="modulepreload"]'))b(L);new MutationObserver(L=>{for(const O of L)if(O.type==="childList")for(const ne of O.addedNodes)ne.tagName==="LINK"&&ne.rel==="modulepreload"&&b(ne)}).observe(document,{childList:!0,subtree:!0});function m(L){const O={};return L.integrity&&(O.integrity=L.integrity),L.referrerPolicy&&(O.referrerPolicy=L.referrerPolicy),L.crossOrigin==="use-credentials"?O.credentials="include":L.crossOrigin==="anonymous"?O.credentials="omit":O.credentials="same-origin",O}function b(L){if(L.ep)return;L.ep=!0;const O=m(L);fetch(L.href,O)}})();var No={exports:{}},wr={},_o={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nu;function Td(){if(Nu)return j;Nu=1;var C=Symbol.for("react.element"),A=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),ne=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),H=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),J=Symbol.iterator;function W(c){return c===null||typeof c!="object"?null:(c=J&&c[J]||c["@@iterator"],typeof c=="function"?c:null)}var re={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ye=Object.assign,X={};function Q(c,g,M){this.props=c,this.context=g,this.refs=X,this.updater=M||re}Q.prototype.isReactComponent={},Q.prototype.setState=function(c,g){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,g,"setState")},Q.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Ue(){}Ue.prototype=Q.prototype;function ut(c,g,M){this.props=c,this.context=g,this.refs=X,this.updater=M||re}var Je=ut.prototype=new Ue;Je.constructor=ut,ye(Je,Q.prototype),Je.isPureReactComponent=!0;var Ce=Array.isArray,et=Object.prototype.hasOwnProperty,ze={current:null},Re={key:!0,ref:!0,__self:!0,__source:!0};function $e(c,g,M){var U,$={},K=null,ee=null;if(g!=null)for(U in g.ref!==void 0&&(ee=g.ref),g.key!==void 0&&(K=""+g.key),g)et.call(g,U)&&!Re.hasOwnProperty(U)&&($[U]=g[U]);var Y=arguments.length-2;if(Y===1)$.children=M;else if(1<Y){for(var oe=Array(Y),be=0;be<Y;be++)oe[be]=arguments[be+2];$.children=oe}if(c&&c.defaultProps)for(U in Y=c.defaultProps,Y)$[U]===void 0&&($[U]=Y[U]);return{$$typeof:C,type:c,key:K,ref:ee,props:$,_owner:ze.current}}function Pt(c,g){return{$$typeof:C,type:c.type,key:g,ref:c.ref,props:c.props,_owner:c._owner}}function vt(c){return typeof c=="object"&&c!==null&&c.$$typeof===C}function Gt(c){var g={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(M){return g[M]})}var ct=/\/+/g;function Be(c,g){return typeof c=="object"&&c!==null&&c.key!=null?Gt(""+c.key):g.toString(36)}function tt(c,g,M,U,$){var K=typeof c;(K==="undefined"||K==="boolean")&&(c=null);var ee=!1;if(c===null)ee=!0;else switch(K){case"string":case"number":ee=!0;break;case"object":switch(c.$$typeof){case C:case A:ee=!0}}if(ee)return ee=c,$=$(ee),c=U===""?"."+Be(ee,0):U,Ce($)?(M="",c!=null&&(M=c.replace(ct,"$&/")+"/"),tt($,g,M,"",function(be){return be})):$!=null&&(vt($)&&($=Pt($,M+(!$.key||ee&&ee.key===$.key?"":(""+$.key).replace(ct,"$&/")+"/")+c)),g.push($)),1;if(ee=0,U=U===""?".":U+":",Ce(c))for(var Y=0;Y<c.length;Y++){K=c[Y];var oe=U+Be(K,Y);ee+=tt(K,g,M,oe,$)}else if(oe=W(c),typeof oe=="function")for(c=oe.call(c),Y=0;!(K=c.next()).done;)K=K.value,oe=U+Be(K,Y++),ee+=tt(K,g,M,oe,$);else if(K==="object")throw g=String(c),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return ee}function dt(c,g,M){if(c==null)return c;var U=[],$=0;return tt(c,U,"","",function(K){return g.call(M,K,$++)}),U}function De(c){if(c._status===-1){var g=c._result;g=g(),g.then(function(M){(c._status===0||c._status===-1)&&(c._status=1,c._result=M)},function(M){(c._status===0||c._status===-1)&&(c._status=2,c._result=M)}),c._status===-1&&(c._status=0,c._result=g)}if(c._status===1)return c._result.default;throw c._result}var ce={current:null},S={transition:null},T={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:S,ReactCurrentOwner:ze};function N(){throw Error("act(...) is not supported in production builds of React.")}return j.Children={map:dt,forEach:function(c,g,M){dt(c,function(){g.apply(this,arguments)},M)},count:function(c){var g=0;return dt(c,function(){g++}),g},toArray:function(c){return dt(c,function(g){return g})||[]},only:function(c){if(!vt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},j.Component=Q,j.Fragment=m,j.Profiler=L,j.PureComponent=ut,j.StrictMode=b,j.Suspense=I,j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,j.act=N,j.cloneElement=function(c,g,M){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var U=ye({},c.props),$=c.key,K=c.ref,ee=c._owner;if(g!=null){if(g.ref!==void 0&&(K=g.ref,ee=ze.current),g.key!==void 0&&($=""+g.key),c.type&&c.type.defaultProps)var Y=c.type.defaultProps;for(oe in g)et.call(g,oe)&&!Re.hasOwnProperty(oe)&&(U[oe]=g[oe]===void 0&&Y!==void 0?Y[oe]:g[oe])}var oe=arguments.length-2;if(oe===1)U.children=M;else if(1<oe){Y=Array(oe);for(var be=0;be<oe;be++)Y[be]=arguments[be+2];U.children=Y}return{$$typeof:C,type:c.type,key:$,ref:K,props:U,_owner:ee}},j.createContext=function(c){return c={$$typeof:ne,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:O,_context:c},c.Consumer=c},j.createElement=$e,j.createFactory=function(c){var g=$e.bind(null,c);return g.type=c,g},j.createRef=function(){return{current:null}},j.forwardRef=function(c){return{$$typeof:q,render:c}},j.isValidElement=vt,j.lazy=function(c){return{$$typeof:B,_payload:{_status:-1,_result:c},_init:De}},j.memo=function(c,g){return{$$typeof:H,type:c,compare:g===void 0?null:g}},j.startTransition=function(c){var g=S.transition;S.transition={};try{c()}finally{S.transition=g}},j.unstable_act=N,j.useCallback=function(c,g){return ce.current.useCallback(c,g)},j.useContext=function(c){return ce.current.useContext(c)},j.useDebugValue=function(){},j.useDeferredValue=function(c){return ce.current.useDeferredValue(c)},j.useEffect=function(c,g){return ce.current.useEffect(c,g)},j.useId=function(){return ce.current.useId()},j.useImperativeHandle=function(c,g,M){return ce.current.useImperativeHandle(c,g,M)},j.useInsertionEffect=function(c,g){return ce.current.useInsertionEffect(c,g)},j.useLayoutEffect=function(c,g){return ce.current.useLayoutEffect(c,g)},j.useMemo=function(c,g){return ce.current.useMemo(c,g)},j.useReducer=function(c,g,M){return ce.current.useReducer(c,g,M)},j.useRef=function(c){return ce.current.useRef(c)},j.useState=function(c){return ce.current.useState(c)},j.useSyncExternalStore=function(c,g,M){return ce.current.useSyncExternalStore(c,g,M)},j.useTransition=function(){return ce.current.useTransition()},j.version="18.3.1",j}var _u;function Ao(){return _u||(_u=1,_o.exports=Td()),_o.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function Fd(){if(Pu)return wr;Pu=1;var C=Ao(),A=Symbol.for("react.element"),m=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,L=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function ne(q,I,H){var B,J={},W=null,re=null;H!==void 0&&(W=""+H),I.key!==void 0&&(W=""+I.key),I.ref!==void 0&&(re=I.ref);for(B in I)b.call(I,B)&&!O.hasOwnProperty(B)&&(J[B]=I[B]);if(q&&q.defaultProps)for(B in I=q.defaultProps,I)J[B]===void 0&&(J[B]=I[B]);return{$$typeof:A,type:q,key:W,ref:re,props:J,_owner:L.current}}return wr.Fragment=m,wr.jsx=ne,wr.jsxs=ne,wr}var zu;function Od(){return zu||(zu=1,No.exports=Fd()),No.exports}var x=Od(),Ai={},Po={exports:{}},je={},zo={exports:{}},Lo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function Id(){return Lu||(Lu=1,(function(C){function A(S,T){var N=S.length;S.push(T);e:for(;0<N;){var c=N-1>>>1,g=S[c];if(0<L(g,T))S[c]=T,S[N]=g,N=c;else break e}}function m(S){return S.length===0?null:S[0]}function b(S){if(S.length===0)return null;var T=S[0],N=S.pop();if(N!==T){S[0]=N;e:for(var c=0,g=S.length,M=g>>>1;c<M;){var U=2*(c+1)-1,$=S[U],K=U+1,ee=S[K];if(0>L($,N))K<g&&0>L(ee,$)?(S[c]=ee,S[K]=N,c=K):(S[c]=$,S[U]=N,c=U);else if(K<g&&0>L(ee,N))S[c]=ee,S[K]=N,c=K;else break e}}return T}function L(S,T){var N=S.sortIndex-T.sortIndex;return N!==0?N:S.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var O=performance;C.unstable_now=function(){return O.now()}}else{var ne=Date,q=ne.now();C.unstable_now=function(){return ne.now()-q}}var I=[],H=[],B=1,J=null,W=3,re=!1,ye=!1,X=!1,Q=typeof setTimeout=="function"?setTimeout:null,Ue=typeof clearTimeout=="function"?clearTimeout:null,ut=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Je(S){for(var T=m(H);T!==null;){if(T.callback===null)b(H);else if(T.startTime<=S)b(H),T.sortIndex=T.expirationTime,A(I,T);else break;T=m(H)}}function Ce(S){if(X=!1,Je(S),!ye)if(m(I)!==null)ye=!0,De(et);else{var T=m(H);T!==null&&ce(Ce,T.startTime-S)}}function et(S,T){ye=!1,X&&(X=!1,Ue($e),$e=-1),re=!0;var N=W;try{for(Je(T),J=m(I);J!==null&&(!(J.expirationTime>T)||S&&!Gt());){var c=J.callback;if(typeof c=="function"){J.callback=null,W=J.priorityLevel;var g=c(J.expirationTime<=T);T=C.unstable_now(),typeof g=="function"?J.callback=g:J===m(I)&&b(I),Je(T)}else b(I);J=m(I)}if(J!==null)var M=!0;else{var U=m(H);U!==null&&ce(Ce,U.startTime-T),M=!1}return M}finally{J=null,W=N,re=!1}}var ze=!1,Re=null,$e=-1,Pt=5,vt=-1;function Gt(){return!(C.unstable_now()-vt<Pt)}function ct(){if(Re!==null){var S=C.unstable_now();vt=S;var T=!0;try{T=Re(!0,S)}finally{T?Be():(ze=!1,Re=null)}}else ze=!1}var Be;if(typeof ut=="function")Be=function(){ut(ct)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,dt=tt.port2;tt.port1.onmessage=ct,Be=function(){dt.postMessage(null)}}else Be=function(){Q(ct,0)};function De(S){Re=S,ze||(ze=!0,Be())}function ce(S,T){$e=Q(function(){S(C.unstable_now())},T)}C.unstable_IdlePriority=5,C.unstable_ImmediatePriority=1,C.unstable_LowPriority=4,C.unstable_NormalPriority=3,C.unstable_Profiling=null,C.unstable_UserBlockingPriority=2,C.unstable_cancelCallback=function(S){S.callback=null},C.unstable_continueExecution=function(){ye||re||(ye=!0,De(et))},C.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pt=0<S?Math.floor(1e3/S):5},C.unstable_getCurrentPriorityLevel=function(){return W},C.unstable_getFirstCallbackNode=function(){return m(I)},C.unstable_next=function(S){switch(W){case 1:case 2:case 3:var T=3;break;default:T=W}var N=W;W=T;try{return S()}finally{W=N}},C.unstable_pauseExecution=function(){},C.unstable_requestPaint=function(){},C.unstable_runWithPriority=function(S,T){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var N=W;W=S;try{return T()}finally{W=N}},C.unstable_scheduleCallback=function(S,T,N){var c=C.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?c+N:c):N=c,S){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=N+g,S={id:B++,callback:T,priorityLevel:S,startTime:N,expirationTime:g,sortIndex:-1},N>c?(S.sortIndex=N,A(H,S),m(I)===null&&S===m(H)&&(X?(Ue($e),$e=-1):X=!0,ce(Ce,N-c))):(S.sortIndex=g,A(I,S),ye||re||(ye=!0,De(et))),S},C.unstable_shouldYield=Gt,C.unstable_wrapCallback=function(S){var T=W;return function(){var N=W;W=T;try{return S.apply(this,arguments)}finally{W=N}}}})(Lo)),Lo}var Au;function Md(){return Au||(Au=1,zo.exports=Id()),zo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru;function jd(){if(Ru)return je;Ru=1;var C=Ao(),A=Md();function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b=new Set,L={};function O(e,t){ne(e,t),ne(e+"Capture",t)}function ne(e,t){for(L[e]=t,e=0;e<t.length;e++)b.add(t[e])}var q=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),I=Object.prototype.hasOwnProperty,H=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,B={},J={};function W(e){return I.call(J,e)?!0:I.call(B,e)?!1:H.test(e)?J[e]=!0:(B[e]=!0,!1)}function re(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ye(e,t,n,r){if(t===null||typeof t>"u"||re(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function X(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new X(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new X(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new X(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new X(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new X(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new X(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new X(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new X(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new X(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ue=/[\-:]([a-z])/g;function ut(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ue,ut);Q[t]=new X(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ue,ut);Q[t]=new X(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ue,ut);Q[t]=new X(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new X(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new X(e,1,!1,e.toLowerCase(),null,!0,!0)});function Je(e,t,n,r){var i=Q.hasOwnProperty(t)?Q[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ye(t,n,i,r)&&(n=null),r||i===null?W(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ce=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,et=Symbol.for("react.element"),ze=Symbol.for("react.portal"),Re=Symbol.for("react.fragment"),$e=Symbol.for("react.strict_mode"),Pt=Symbol.for("react.profiler"),vt=Symbol.for("react.provider"),Gt=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),Be=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),De=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),S=Symbol.iterator;function T(e){return e===null||typeof e!="object"?null:(e=S&&e[S]||e["@@iterator"],typeof e=="function"?e:null)}var N=Object.assign,c;function g(e){if(c===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);c=t&&t[1]||""}return`
`+c+e}var M=!1;function U(e,t){if(!e||M)return"";M=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{M=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?g(e):""}function $(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=U(e.type,!1),e;case 11:return e=U(e.type.render,!1),e;case 1:return e=U(e.type,!0),e;default:return""}}function K(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Re:return"Fragment";case ze:return"Portal";case Pt:return"Profiler";case $e:return"StrictMode";case Be:return"Suspense";case tt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gt:return(e.displayName||"Context")+".Consumer";case vt:return(e._context.displayName||"Context")+".Provider";case ct:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dt:return t=e.displayName||null,t!==null?t:K(e.type)||"Memo";case De:t=e._payload,e=e._init;try{return K(e(t))}catch{}}return null}function ee(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return K(t);case 8:return t===$e?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Y(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function be(e){var t=oe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sr(e){e._valueTracker||(e._valueTracker=be(e))}function Ro(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=oe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ri(e,t){var n=t.checked;return N({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Do(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Y(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function To(e,t){t=t.checked,t!=null&&Je(e,"checked",t,!1)}function Di(e,t){To(e,t);var n=Y(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ti(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ti(e,t.type,Y(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ti(e,t,n){(t!=="number"||xr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Y(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(m(91));return N({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(m(92));if(Fn(n)){if(1<n.length)throw Error(m(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Y(n)}}function Io(e,t){var n=Y(t.value),r=Y(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,Uo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mu=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){Mu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function Bo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function bo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ju=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ii(e,t){if(t){if(ju[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(m(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(m(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(m(61))}if(t.style!=null&&typeof t.style!="object")throw Error(m(62))}}function Mi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=null;function Ui(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bi=null,cn=null,dn=null;function Vo(e){if(e=ir(e)){if(typeof Bi!="function")throw Error(m(280));var t=e.stateNode;t&&(t=Qr(t),Bi(e.stateNode,e.type,t))}}function Ho(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Wo(){if(cn){var e=cn,t=dn;if(dn=cn=null,Vo(e),t)for(e=0;e<t.length;e++)Vo(t[e])}}function Qo(e,t){return e(t)}function $o(){}var bi=!1;function Ko(e,t,n){if(bi)return e(t,n);bi=!0;try{return Qo(e,t,n)}finally{bi=!1,(cn!==null||dn!==null)&&($o(),Wo())}}function Mn(e,t){var n=e.stateNode;if(n===null)return null;var r=Qr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(m(231,t,typeof n));return n}var Vi=!1;if(q)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){Vi=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{Vi=!1}function Uu(e,t,n,r,i,l,o,a,s){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(y){this.onError(y)}}var Un=!1,Cr=null,Er=!1,Hi=null,Bu={onError:function(e){Un=!0,Cr=e}};function bu(e,t,n,r,i,l,o,a,s){Un=!1,Cr=null,Uu.apply(Bu,arguments)}function Vu(e,t,n,r,i,l,o,a,s){if(bu.apply(this,arguments),Un){if(Un){var p=Cr;Un=!1,Cr=null}else throw Error(m(198));Er||(Er=!0,Hi=p)}}function Xt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Go(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xo(e){if(Xt(e)!==e)throw Error(m(188))}function Hu(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(m(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Xo(i),e;if(l===r)return Xo(i),t;l=l.sibling}throw Error(m(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o)throw Error(m(189))}}if(n.alternate!==r)throw Error(m(190))}if(n.tag!==3)throw Error(m(188));return n.stateNode.current===n?e:t}function Yo(e){return e=Hu(e),e!==null?Zo(e):null}function Zo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zo(e);if(t!==null)return t;e=e.sibling}return null}var qo=A.unstable_scheduleCallback,Jo=A.unstable_cancelCallback,Wu=A.unstable_shouldYield,Qu=A.unstable_requestPaint,fe=A.unstable_now,$u=A.unstable_getCurrentPriorityLevel,Wi=A.unstable_ImmediatePriority,ea=A.unstable_UserBlockingPriority,Nr=A.unstable_NormalPriority,Ku=A.unstable_LowPriority,ta=A.unstable_IdlePriority,_r=null,ft=null;function Gu(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(_r,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:Zu,Xu=Math.log,Yu=Math.LN2;function Zu(e){return e>>>=0,e===0?32:31-(Xu(e)/Yu|0)|0}var Pr=64,zr=4194304;function Bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Bn(a):(l&=o,l!==0&&(r=Bn(l)))}else o=n&~i,o!==0?r=Bn(o):l!==0&&(r=Bn(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),i=1<<n,r|=e[n],t&=~i;return r}function qu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ju(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-nt(l),a=1<<o,s=i[o];s===-1?((a&n)===0||(a&r)!==0)&&(i[o]=qu(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function na(){var e=Pr;return Pr<<=1,(Pr&4194240)===0&&(Pr=64),e}function $i(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function ec(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-nt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Ki(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Z=0;function ra(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ia,Gi,la,oa,aa,Xi=!1,Ar=[],zt=null,Lt=null,At=null,Vn=new Map,Hn=new Map,Rt=[],tc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sa(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function Wn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=ir(t),t!==null&&Gi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function nc(e,t,n,r,i){switch(t){case"focusin":return zt=Wn(zt,e,t,n,r,i),!0;case"dragenter":return Lt=Wn(Lt,e,t,n,r,i),!0;case"mouseover":return At=Wn(At,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Vn.set(l,Wn(Vn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Hn.set(l,Wn(Hn.get(l)||null,e,t,n,r,i)),!0}return!1}function ua(e){var t=Yt(e.target);if(t!==null){var n=Xt(t);if(n!==null){if(t=n.tag,t===13){if(t=Go(n),t!==null){e.blockedOn=t,aa(e.priority,function(){la(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ji=r,n.target.dispatchEvent(r),ji=null}else return t=ir(n),t!==null&&Gi(t),e.blockedOn=n,!1;t.shift()}return!0}function ca(e,t,n){Rr(e)&&n.delete(t)}function rc(){Xi=!1,zt!==null&&Rr(zt)&&(zt=null),Lt!==null&&Rr(Lt)&&(Lt=null),At!==null&&Rr(At)&&(At=null),Vn.forEach(ca),Hn.forEach(ca)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Xi||(Xi=!0,A.unstable_scheduleCallback(A.unstable_NormalPriority,rc)))}function $n(e){function t(i){return Qn(i,e)}if(0<Ar.length){Qn(Ar[0],e);for(var n=1;n<Ar.length;n++){var r=Ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&Qn(zt,e),Lt!==null&&Qn(Lt,e),At!==null&&Qn(At,e),Vn.forEach(t),Hn.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)ua(n),n.blockedOn===null&&Rt.shift()}var fn=Ce.ReactCurrentBatchConfig,Dr=!0;function ic(e,t,n,r){var i=Z,l=fn.transition;fn.transition=null;try{Z=1,Yi(e,t,n,r)}finally{Z=i,fn.transition=l}}function lc(e,t,n,r){var i=Z,l=fn.transition;fn.transition=null;try{Z=4,Yi(e,t,n,r)}finally{Z=i,fn.transition=l}}function Yi(e,t,n,r){if(Dr){var i=Zi(e,t,n,r);if(i===null)ml(e,t,r,Tr,n),sa(e,r);else if(nc(i,e,t,n,r))r.stopPropagation();else if(sa(e,r),t&4&&-1<tc.indexOf(e)){for(;i!==null;){var l=ir(i);if(l!==null&&ia(l),l=Zi(e,t,n,r),l===null&&ml(e,t,r,Tr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else ml(e,t,r,null,n)}}var Tr=null;function Zi(e,t,n,r){if(Tr=null,e=Ui(r),e=Yt(e),e!==null)if(t=Xt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Go(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Tr=e,null}function da(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($u()){case Wi:return 1;case ea:return 4;case Nr:case Ku:return 16;case ta:return 536870912;default:return 16}default:return 16}}var Dt=null,qi=null,Fr=null;function fa(){if(Fr)return Fr;var e,t=qi,n=t.length,r,i="value"in Dt?Dt.value:Dt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Fr=i.slice(e,1<r?1-r:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ir(){return!0}function pa(){return!1}function Ve(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ir:pa,this.isPropagationStopped=pa,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ji=Ve(pn),Kn=N({},pn,{view:0,detail:0}),oc=Ve(Kn),el,tl,Gn,Mr=N({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gn&&(Gn&&e.type==="mousemove"?(el=e.screenX-Gn.screenX,tl=e.screenY-Gn.screenY):tl=el=0,Gn=e),el)},movementY:function(e){return"movementY"in e?e.movementY:tl}}),ma=Ve(Mr),ac=N({},Mr,{dataTransfer:0}),sc=Ve(ac),uc=N({},Kn,{relatedTarget:0}),nl=Ve(uc),cc=N({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),dc=Ve(cc),fc=N({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pc=Ve(fc),mc=N({},pn,{data:0}),ha=Ve(mc),hc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yc[e])?!!t[e]:!1}function rl(){return vc}var wc=N({},Kn,{key:function(e){if(e.key){var t=hc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rl,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sc=Ve(wc),xc=N({},Mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ga=Ve(xc),kc=N({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rl}),Cc=Ve(kc),Ec=N({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nc=Ve(Ec),_c=N({},Mr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pc=Ve(_c),zc=[9,13,27,32],il=q&&"CompositionEvent"in window,Xn=null;q&&"documentMode"in document&&(Xn=document.documentMode);var Lc=q&&"TextEvent"in window&&!Xn,ya=q&&(!il||Xn&&8<Xn&&11>=Xn),va=" ",wa=!1;function Sa(e,t){switch(e){case"keyup":return zc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function Ac(e,t){switch(e){case"compositionend":return xa(t);case"keypress":return t.which!==32?null:(wa=!0,va);case"textInput":return e=t.data,e===va&&wa?null:e;default:return null}}function Rc(e,t){if(mn)return e==="compositionend"||!il&&Sa(e,t)?(e=fa(),Fr=qi=Dt=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ya&&t.locale!=="ko"?null:t.data;default:return null}}var Dc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dc[e.type]:t==="textarea"}function Ca(e,t,n,r){Ho(r),t=Vr(t,"onChange"),0<t.length&&(n=new Ji("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,Zn=null;function Tc(e){ba(e,0)}function jr(e){var t=wn(e);if(Ro(t))return e}function Fc(e,t){if(e==="change")return t}var Ea=!1;if(q){var ll;if(q){var ol="oninput"in document;if(!ol){var Na=document.createElement("div");Na.setAttribute("oninput","return;"),ol=typeof Na.oninput=="function"}ll=ol}else ll=!1;Ea=ll&&(!document.documentMode||9<document.documentMode)}function _a(){Yn&&(Yn.detachEvent("onpropertychange",Pa),Zn=Yn=null)}function Pa(e){if(e.propertyName==="value"&&jr(Zn)){var t=[];Ca(t,Zn,e,Ui(e)),Ko(Tc,t)}}function Oc(e,t,n){e==="focusin"?(_a(),Yn=t,Zn=n,Yn.attachEvent("onpropertychange",Pa)):e==="focusout"&&_a()}function Ic(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jr(Zn)}function Mc(e,t){if(e==="click")return jr(t)}function jc(e,t){if(e==="input"||e==="change")return jr(t)}function Uc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Uc;function qn(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!I.call(t,i)||!rt(e[i],t[i]))return!1}return!0}function za(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function La(e,t){var n=za(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=za(n)}}function Aa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Aa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ra(){for(var e=window,t=xr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xr(e.document)}return t}function al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bc(e){var t=Ra(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Aa(n.ownerDocument.documentElement,n)){if(r!==null&&al(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=La(n,l);var o=La(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bc=q&&"documentMode"in document&&11>=document.documentMode,hn=null,sl=null,Jn=null,ul=!1;function Da(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ul||hn==null||hn!==xr(r)||(r=hn,"selectionStart"in r&&al(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jn&&qn(Jn,r)||(Jn=r,r=Vr(sl,"onSelect"),0<r.length&&(t=new Ji("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hn)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},cl={},Ta={};q&&(Ta=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Br(e){if(cl[e])return cl[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ta)return cl[e]=t[n];return e}var Fa=Br("animationend"),Oa=Br("animationiteration"),Ia=Br("animationstart"),Ma=Br("transitionend"),ja=new Map,Ua="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){ja.set(e,t),O(t,[e])}for(var dl=0;dl<Ua.length;dl++){var fl=Ua[dl],Vc=fl.toLowerCase(),Hc=fl[0].toUpperCase()+fl.slice(1);Tt(Vc,"on"+Hc)}Tt(Fa,"onAnimationEnd"),Tt(Oa,"onAnimationIteration"),Tt(Ia,"onAnimationStart"),Tt("dblclick","onDoubleClick"),Tt("focusin","onFocus"),Tt("focusout","onBlur"),Tt(Ma,"onTransitionEnd"),ne("onMouseEnter",["mouseout","mouseover"]),ne("onMouseLeave",["mouseout","mouseover"]),ne("onPointerEnter",["pointerout","pointerover"]),ne("onPointerLeave",["pointerout","pointerover"]),O("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),O("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),O("onBeforeInput",["compositionend","keypress","textInput","paste"]),O("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),O("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),O("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wc=new Set("cancel close invalid load scroll toggle".split(" ").concat(er));function Ba(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vu(r,t,void 0,e),e.currentTarget=null}function ba(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,p=a.currentTarget;if(a=a.listener,s!==l&&i.isPropagationStopped())break e;Ba(i,a,p),l=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,p=a.currentTarget,a=a.listener,s!==l&&i.isPropagationStopped())break e;Ba(i,a,p),l=s}}}if(Er)throw e=Hi,Er=!1,Hi=null,e}function ie(e,t){var n=t[Sl];n===void 0&&(n=t[Sl]=new Set);var r=e+"__bubble";n.has(r)||(Va(t,e,2,!1),n.add(r))}function pl(e,t,n){var r=0;t&&(r|=4),Va(n,e,r,t)}var br="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[br]){e[br]=!0,b.forEach(function(n){n!=="selectionchange"&&(Wc.has(n)||pl(n,!1,e),pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[br]||(t[br]=!0,pl("selectionchange",!1,t))}}function Va(e,t,n,r){switch(da(t)){case 1:var i=ic;break;case 4:i=lc;break;default:i=Yi}n=i.bind(null,t,n,e),i=void 0,!Vi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ml(e,t,n,r,i){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Yt(a),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}a=a.parentNode}}r=r.return}Ko(function(){var p=l,y=Ui(n),v=[];e:{var h=ja.get(e);if(h!==void 0){var k=Ji,_=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":k=Sc;break;case"focusin":_="focus",k=nl;break;case"focusout":_="blur",k=nl;break;case"beforeblur":case"afterblur":k=nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ma;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=sc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Cc;break;case Fa:case Oa:case Ia:k=dc;break;case Ma:k=Nc;break;case"scroll":k=oc;break;case"wheel":k=Pc;break;case"copy":case"cut":case"paste":k=pc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ga}var P=(t&4)!==0,pe=!P&&e==="scroll",d=P?h!==null?h+"Capture":null:h;P=[];for(var u=p,f;u!==null;){f=u;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,d!==null&&(w=Mn(u,d),w!=null&&P.push(nr(u,w,f)))),pe)break;u=u.return}0<P.length&&(h=new k(h,_,null,n,y),v.push({event:h,listeners:P}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==ji&&(_=n.relatedTarget||n.fromElement)&&(Yt(_)||_[wt]))break e;if((k||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,k?(_=n.relatedTarget||n.toElement,k=p,_=_?Yt(_):null,_!==null&&(pe=Xt(_),_!==pe||_.tag!==5&&_.tag!==6)&&(_=null)):(k=null,_=p),k!==_)){if(P=ma,w="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(P=ga,w="onPointerLeave",d="onPointerEnter",u="pointer"),pe=k==null?h:wn(k),f=_==null?h:wn(_),h=new P(w,u+"leave",k,n,y),h.target=pe,h.relatedTarget=f,w=null,Yt(y)===p&&(P=new P(d,u+"enter",_,n,y),P.target=f,P.relatedTarget=pe,w=P),pe=w,k&&_)t:{for(P=k,d=_,u=0,f=P;f;f=yn(f))u++;for(f=0,w=d;w;w=yn(w))f++;for(;0<u-f;)P=yn(P),u--;for(;0<f-u;)d=yn(d),f--;for(;u--;){if(P===d||d!==null&&P===d.alternate)break t;P=yn(P),d=yn(d)}P=null}else P=null;k!==null&&Ha(v,h,k,P,!1),_!==null&&pe!==null&&Ha(v,pe,_,P,!0)}}e:{if(h=p?wn(p):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var z=Fc;else if(ka(h))if(Ea)z=jc;else{z=Ic;var R=Oc}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(z=Mc);if(z&&(z=z(e,p))){Ca(v,z,n,y);break e}R&&R(e,h,p),e==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Ti(h,"number",h.value)}switch(R=p?wn(p):window,e){case"focusin":(ka(R)||R.contentEditable==="true")&&(hn=R,sl=p,Jn=null);break;case"focusout":Jn=sl=hn=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,Da(v,n,y);break;case"selectionchange":if(bc)break;case"keydown":case"keyup":Da(v,n,y)}var D;if(il)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else mn?Sa(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(ya&&n.locale!=="ko"&&(mn||F!=="onCompositionStart"?F==="onCompositionEnd"&&mn&&(D=fa()):(Dt=y,qi="value"in Dt?Dt.value:Dt.textContent,mn=!0)),R=Vr(p,F),0<R.length&&(F=new ha(F,e,null,n,y),v.push({event:F,listeners:R}),D?F.data=D:(D=xa(n),D!==null&&(F.data=D)))),(D=Lc?Ac(e,n):Rc(e,n))&&(p=Vr(p,"onBeforeInput"),0<p.length&&(y=new ha("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:p}),y.data=D))}ba(v,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Mn(e,n),l!=null&&r.unshift(nr(e,l,i)),l=Mn(e,t),l!=null&&r.push(nr(e,l,i))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ha(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,p=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&p!==null&&(a=p,i?(s=Mn(n,l),s!=null&&o.unshift(nr(n,s,a))):i||(s=Mn(n,l),s!=null&&o.push(nr(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Qc=/\r\n?/g,$c=/\u0000|\uFFFD/g;function Wa(e){return(typeof e=="string"?e:""+e).replace(Qc,`
`).replace($c,"")}function Hr(e,t,n){if(t=Wa(t),Wa(e)!==t&&n)throw Error(m(425))}function Wr(){}var hl=null,gl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vl=typeof setTimeout=="function"?setTimeout:void 0,Kc=typeof clearTimeout=="function"?clearTimeout:void 0,Qa=typeof Promise=="function"?Promise:void 0,Gc=typeof queueMicrotask=="function"?queueMicrotask:typeof Qa<"u"?function(e){return Qa.resolve(null).then(e).catch(Xc)}:vl;function Xc(e){setTimeout(function(){throw e})}function wl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$n(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$n(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $a(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),pt="__reactFiber$"+vn,rr="__reactProps$"+vn,wt="__reactContainer$"+vn,Sl="__reactEvents$"+vn,Yc="__reactListeners$"+vn,Zc="__reactHandles$"+vn;function Yt(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$a(e);e!==null;){if(n=e[pt])return n;e=$a(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[pt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(m(33))}function Qr(e){return e[rr]||null}var xl=[],Sn=-1;function Ot(e){return{current:e}}function le(e){0>Sn||(e.current=xl[Sn],xl[Sn]=null,Sn--)}function te(e,t){Sn++,xl[Sn]=e.current,e.current=t}var It={},Ee=Ot(It),Te=Ot(!1),Zt=It;function xn(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(e){return e=e.childContextTypes,e!=null}function $r(){le(Te),le(Ee)}function Ka(e,t,n){if(Ee.current!==It)throw Error(m(168));te(Ee,t),te(Te,n)}function Ga(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(m(108,ee(e)||"Unknown",i));return N({},n,r)}function Kr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Zt=Ee.current,te(Ee,e),te(Te,Te.current),!0}function Xa(e,t,n){var r=e.stateNode;if(!r)throw Error(m(169));n?(e=Ga(e,t,Zt),r.__reactInternalMemoizedMergedChildContext=e,le(Te),le(Ee),te(Ee,e)):le(Te),te(Te,n)}var St=null,Gr=!1,kl=!1;function Ya(e){St===null?St=[e]:St.push(e)}function qc(e){Gr=!0,Ya(e)}function Mt(){if(!kl&&St!==null){kl=!0;var e=0,t=Z;try{var n=St;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,Gr=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),qo(Wi,Mt),i}finally{Z=t,kl=!1}}return null}var kn=[],Cn=0,Xr=null,Yr=0,Ke=[],Ge=0,qt=null,xt=1,kt="";function Jt(e,t){kn[Cn++]=Yr,kn[Cn++]=Xr,Xr=e,Yr=t}function Za(e,t,n){Ke[Ge++]=xt,Ke[Ge++]=kt,Ke[Ge++]=qt,qt=e;var r=xt;e=kt;var i=32-nt(r)-1;r&=~(1<<i),n+=1;var l=32-nt(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xt=1<<32-nt(t)+i|n<<i|r,kt=l+e}else xt=1<<l|n<<i|r,kt=e}function Cl(e){e.return!==null&&(Jt(e,1),Za(e,1,0))}function El(e){for(;e===Xr;)Xr=kn[--Cn],kn[Cn]=null,Yr=kn[--Cn],kn[Cn]=null;for(;e===qt;)qt=Ke[--Ge],Ke[Ge]=null,kt=Ke[--Ge],Ke[Ge]=null,xt=Ke[--Ge],Ke[Ge]=null}var He=null,We=null,ae=!1,it=null;function qa(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ja(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,We=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qt!==null?{id:xt,overflow:kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,We=null,!0):!1;default:return!1}}function Nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _l(e){if(ae){var t=We;if(t){var n=t;if(!Ja(e,t)){if(Nl(e))throw Error(m(418));t=Ft(n.nextSibling);var r=He;t&&Ja(e,t)?qa(r,n):(e.flags=e.flags&-4097|2,ae=!1,He=e)}}else{if(Nl(e))throw Error(m(418));e.flags=e.flags&-4097|2,ae=!1,He=e}}}function es(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function Zr(e){if(e!==He)return!1;if(!ae)return es(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=We)){if(Nl(e))throw ts(),Error(m(418));for(;t;)qa(e,t),t=Ft(t.nextSibling)}if(es(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=He?Ft(e.stateNode.nextSibling):null;return!0}function ts(){for(var e=We;e;)e=Ft(e.nextSibling)}function En(){We=He=null,ae=!1}function Pl(e){it===null?it=[e]:it.push(e)}var Jc=Ce.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(m(309));var r=n.stateNode}if(!r)throw Error(m(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(m(284));if(!n._owner)throw Error(m(290,e))}return e}function qr(e,t){throw e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ns(e){var t=e._init;return t(e._payload)}function rs(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=Qt(d,u),d.index=0,d.sibling=null,d}function l(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,u,f,w){return u===null||u.tag!==6?(u=wo(f,d.mode,w),u.return=d,u):(u=i(u,f),u.return=d,u)}function s(d,u,f,w){var z=f.type;return z===Re?y(d,u,f.props.children,w,f.key):u!==null&&(u.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===De&&ns(z)===u.type)?(w=i(u,f.props),w.ref=lr(d,u,f),w.return=d,w):(w=ki(f.type,f.key,f.props,null,d.mode,w),w.ref=lr(d,u,f),w.return=d,w)}function p(d,u,f,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=So(f,d.mode,w),u.return=d,u):(u=i(u,f.children||[]),u.return=d,u)}function y(d,u,f,w,z){return u===null||u.tag!==7?(u=sn(f,d.mode,w,z),u.return=d,u):(u=i(u,f),u.return=d,u)}function v(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=wo(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case et:return f=ki(u.type,u.key,u.props,null,d.mode,f),f.ref=lr(d,null,u),f.return=d,f;case ze:return u=So(u,d.mode,f),u.return=d,u;case De:var w=u._init;return v(d,w(u._payload),f)}if(Fn(u)||T(u))return u=sn(u,d.mode,f,null),u.return=d,u;qr(d,u)}return null}function h(d,u,f,w){var z=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return z!==null?null:a(d,u,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case et:return f.key===z?s(d,u,f,w):null;case ze:return f.key===z?p(d,u,f,w):null;case De:return z=f._init,h(d,u,z(f._payload),w)}if(Fn(f)||T(f))return z!==null?null:y(d,u,f,w,null);qr(d,f)}return null}function k(d,u,f,w,z){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(f)||null,a(u,d,""+w,z);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case et:return d=d.get(w.key===null?f:w.key)||null,s(u,d,w,z);case ze:return d=d.get(w.key===null?f:w.key)||null,p(u,d,w,z);case De:var R=w._init;return k(d,u,f,R(w._payload),z)}if(Fn(w)||T(w))return d=d.get(f)||null,y(u,d,w,z,null);qr(u,w)}return null}function _(d,u,f,w){for(var z=null,R=null,D=u,F=u=0,Se=null;D!==null&&F<f.length;F++){D.index>F?(Se=D,D=null):Se=D.sibling;var G=h(d,D,f[F],w);if(G===null){D===null&&(D=Se);break}e&&D&&G.alternate===null&&t(d,D),u=l(G,u,F),R===null?z=G:R.sibling=G,R=G,D=Se}if(F===f.length)return n(d,D),ae&&Jt(d,F),z;if(D===null){for(;F<f.length;F++)D=v(d,f[F],w),D!==null&&(u=l(D,u,F),R===null?z=D:R.sibling=D,R=D);return ae&&Jt(d,F),z}for(D=r(d,D);F<f.length;F++)Se=k(D,d,F,f[F],w),Se!==null&&(e&&Se.alternate!==null&&D.delete(Se.key===null?F:Se.key),u=l(Se,u,F),R===null?z=Se:R.sibling=Se,R=Se);return e&&D.forEach(function($t){return t(d,$t)}),ae&&Jt(d,F),z}function P(d,u,f,w){var z=T(f);if(typeof z!="function")throw Error(m(150));if(f=z.call(f),f==null)throw Error(m(151));for(var R=z=null,D=u,F=u=0,Se=null,G=f.next();D!==null&&!G.done;F++,G=f.next()){D.index>F?(Se=D,D=null):Se=D.sibling;var $t=h(d,D,G.value,w);if($t===null){D===null&&(D=Se);break}e&&D&&$t.alternate===null&&t(d,D),u=l($t,u,F),R===null?z=$t:R.sibling=$t,R=$t,D=Se}if(G.done)return n(d,D),ae&&Jt(d,F),z;if(D===null){for(;!G.done;F++,G=f.next())G=v(d,G.value,w),G!==null&&(u=l(G,u,F),R===null?z=G:R.sibling=G,R=G);return ae&&Jt(d,F),z}for(D=r(d,D);!G.done;F++,G=f.next())G=k(D,d,F,G.value,w),G!==null&&(e&&G.alternate!==null&&D.delete(G.key===null?F:G.key),u=l(G,u,F),R===null?z=G:R.sibling=G,R=G);return e&&D.forEach(function(Dd){return t(d,Dd)}),ae&&Jt(d,F),z}function pe(d,u,f,w){if(typeof f=="object"&&f!==null&&f.type===Re&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case et:e:{for(var z=f.key,R=u;R!==null;){if(R.key===z){if(z=f.type,z===Re){if(R.tag===7){n(d,R.sibling),u=i(R,f.props.children),u.return=d,d=u;break e}}else if(R.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===De&&ns(z)===R.type){n(d,R.sibling),u=i(R,f.props),u.ref=lr(d,R,f),u.return=d,d=u;break e}n(d,R);break}else t(d,R);R=R.sibling}f.type===Re?(u=sn(f.props.children,d.mode,w,f.key),u.return=d,d=u):(w=ki(f.type,f.key,f.props,null,d.mode,w),w.ref=lr(d,u,f),w.return=d,d=w)}return o(d);case ze:e:{for(R=f.key;u!==null;){if(u.key===R)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=i(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=So(f,d.mode,w),u.return=d,d=u}return o(d);case De:return R=f._init,pe(d,u,R(f._payload),w)}if(Fn(f))return _(d,u,f,w);if(T(f))return P(d,u,f,w);qr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=i(u,f),u.return=d,d=u):(n(d,u),u=wo(f,d.mode,w),u.return=d,d=u),o(d)):n(d,u)}return pe}var Nn=rs(!0),is=rs(!1),Jr=Ot(null),ei=null,_n=null,zl=null;function Ll(){zl=_n=ei=null}function Al(e){var t=Jr.current;le(Jr),e._currentValue=t}function Rl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pn(e,t){ei=e,zl=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Oe=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(zl!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(ei===null)throw Error(m(308));_n=e,ei.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var en=null;function Dl(e){en===null?en=[e]:en.push(e)}function ls(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Dl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ct(e,r)}function Ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jt=!1;function Tl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function os(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(V&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ct(e,n)}return i=r.interleaved,i===null?(t.next=t,Dl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ct(e,n)}function ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ki(e,n)}}function as(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ni(e,t,n,r){var i=e.updateQueue;jt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,p=s.next;s.next=null,o===null?l=p:o.next=p,o=s;var y=e.alternate;y!==null&&(y=y.updateQueue,a=y.lastBaseUpdate,a!==o&&(a===null?y.firstBaseUpdate=p:a.next=p,y.lastBaseUpdate=s))}if(l!==null){var v=i.baseState;o=0,y=p=s=null,a=l;do{var h=a.lane,k=a.eventTime;if((r&h)===h){y!==null&&(y=y.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,P=a;switch(h=t,k=n,P.tag){case 1:if(_=P.payload,typeof _=="function"){v=_.call(k,v,h);break e}v=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=P.payload,h=typeof _=="function"?_.call(k,v,h):_,h==null)break e;v=N({},v,h);break e;case 2:jt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else k={eventTime:k,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(p=y=k,s=v):y=y.next=k,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(y===null&&(s=v),i.baseState=s,i.firstBaseUpdate=p,i.lastBaseUpdate=y,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);rn|=o,e.lanes=o,e.memoizedState=v}}function ss(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(m(191,i));i.call(r)}}}var or={},mt=Ot(or),ar=Ot(or),sr=Ot(or);function tn(e){if(e===or)throw Error(m(174));return e}function Fl(e,t){switch(te(sr,t),te(ar,e),te(mt,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oi(t,e)}le(mt),te(mt,t)}function zn(){le(mt),le(ar),le(sr)}function us(e){tn(sr.current);var t=tn(mt.current),n=Oi(t,e.type);t!==n&&(te(ar,e),te(mt,n))}function Ol(e){ar.current===e&&(le(mt),le(ar))}var se=Ot(0);function ri(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Il=[];function Ml(){for(var e=0;e<Il.length;e++)Il[e]._workInProgressVersionPrimary=null;Il.length=0}var ii=Ce.ReactCurrentDispatcher,jl=Ce.ReactCurrentBatchConfig,nn=0,ue=null,he=null,ve=null,li=!1,ur=!1,cr=0,ed=0;function Ne(){throw Error(m(321))}function Ul(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function Bl(e,t,n,r,i,l){if(nn=l,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ii.current=e===null||e.memoizedState===null?id:ld,e=n(r,i),ur){l=0;do{if(ur=!1,cr=0,25<=l)throw Error(m(301));l+=1,ve=he=null,t.updateQueue=null,ii.current=od,e=n(r,i)}while(ur)}if(ii.current=si,t=he!==null&&he.next!==null,nn=0,ve=he=ue=null,li=!1,t)throw Error(m(300));return e}function bl(){var e=cr!==0;return cr=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ue.memoizedState=ve=e:ve=ve.next=e,ve}function Ye(){if(he===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ve===null?ue.memoizedState:ve.next;if(t!==null)ve=t,he=e;else{if(e===null)throw Error(m(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ve===null?ue.memoizedState=ve=e:ve=ve.next=e}return ve}function dr(e,t){return typeof t=="function"?t(e):t}function Vl(e){var t=Ye(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=he,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,s=null,p=l;do{var y=p.lane;if((nn&y)===y)s!==null&&(s=s.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var v={lane:y,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};s===null?(a=s=v,o=r):s=s.next=v,ue.lanes|=y,rn|=y}p=p.next}while(p!==null&&p!==l);s===null?o=r:s.next=a,rt(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,ue.lanes|=l,rn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hl(e){var t=Ye(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);rt(l,t.memoizedState)||(Oe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function cs(){}function ds(e,t){var n=ue,r=Ye(),i=t(),l=!rt(r.memoizedState,i);if(l&&(r.memoizedState=i,Oe=!0),r=r.queue,Wl(ms.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,fr(9,ps.bind(null,n,r,i,t),void 0,null),we===null)throw Error(m(349));(nn&30)!==0||fs(n,t,i)}return i}function fs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ps(e,t,n,r){t.value=n,t.getSnapshot=r,hs(t)&&gs(e)}function ms(e,t,n){return n(function(){hs(t)&&gs(e)})}function hs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function gs(e){var t=Ct(e,1);t!==null&&st(t,e,1,-1)}function ys(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=rd.bind(null,ue,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vs(){return Ye().memoizedState}function oi(e,t,n,r){var i=ht();ue.flags|=e,i.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function ai(e,t,n,r){var i=Ye();r=r===void 0?null:r;var l=void 0;if(he!==null){var o=he.memoizedState;if(l=o.destroy,r!==null&&Ul(r,o.deps)){i.memoizedState=fr(t,n,l,r);return}}ue.flags|=e,i.memoizedState=fr(1|t,n,l,r)}function ws(e,t){return oi(8390656,8,e,t)}function Wl(e,t){return ai(2048,8,e,t)}function Ss(e,t){return ai(4,2,e,t)}function xs(e,t){return ai(4,4,e,t)}function ks(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cs(e,t,n){return n=n!=null?n.concat([e]):null,ai(4,4,ks.bind(null,t,e),n)}function Ql(){}function Es(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ul(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ns(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ul(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _s(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n):(rt(n,t)||(n=na(),ue.lanes|=n,rn|=n,e.baseState=!0),t)}function td(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=jl.transition;jl.transition={};try{e(!1),t()}finally{Z=n,jl.transition=r}}function Ps(){return Ye().memoizedState}function nd(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e))Ls(t,n);else if(n=ls(e,t,n,r),n!==null){var i=Ae();st(n,e,r,i),As(n,t,r)}}function rd(e,t,n){var r=Ht(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Ls(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,a=l(o,n);if(i.hasEagerState=!0,i.eagerState=a,rt(a,o)){var s=t.interleaved;s===null?(i.next=i,Dl(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=ls(e,t,i,r),n!==null&&(i=Ae(),st(n,e,r,i),As(n,t,r))}}function zs(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Ls(e,t){ur=li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function As(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ki(e,n)}}var si={readContext:Xe,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},id={readContext:Xe,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:ws,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,oi(4194308,4,ks.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return oi(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=nd.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:ys,useDebugValue:Ql,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=ys(!1),t=e[0];return e=td.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,i=ht();if(ae){if(n===void 0)throw Error(m(407));n=n()}else{if(n=t(),we===null)throw Error(m(349));(nn&30)!==0||fs(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,ws(ms.bind(null,r,l,e),[e]),r.flags|=2048,fr(9,ps.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=ht(),t=we.identifierPrefix;if(ae){var n=kt,r=xt;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ed++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ld={readContext:Xe,useCallback:Es,useContext:Xe,useEffect:Wl,useImperativeHandle:Cs,useInsertionEffect:Ss,useLayoutEffect:xs,useMemo:Ns,useReducer:Vl,useRef:vs,useState:function(){return Vl(dr)},useDebugValue:Ql,useDeferredValue:function(e){var t=Ye();return _s(t,he.memoizedState,e)},useTransition:function(){var e=Vl(dr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:cs,useSyncExternalStore:ds,useId:Ps,unstable_isNewReconciler:!1},od={readContext:Xe,useCallback:Es,useContext:Xe,useEffect:Wl,useImperativeHandle:Cs,useInsertionEffect:Ss,useLayoutEffect:xs,useMemo:Ns,useReducer:Hl,useRef:vs,useState:function(){return Hl(dr)},useDebugValue:Ql,useDeferredValue:function(e){var t=Ye();return he===null?t.memoizedState=e:_s(t,he.memoizedState,e)},useTransition:function(){var e=Hl(dr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:cs,useSyncExternalStore:ds,useId:Ps,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=N({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $l(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:N({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ui={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),i=Ht(e),l=Et(r,i);l.payload=t,n!=null&&(l.callback=n),t=Ut(e,l,i),t!==null&&(st(t,e,i,r),ti(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),i=Ht(e),l=Et(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Ut(e,l,i),t!==null&&(st(t,e,i,r),ti(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=Ht(e),i=Et(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ut(e,i,r),t!==null&&(st(t,e,r,n),ti(t,e,r))}};function Rs(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!qn(n,r)||!qn(i,l):!0}function Ds(e,t,n){var r=!1,i=It,l=t.contextType;return typeof l=="object"&&l!==null?l=Xe(l):(i=Fe(t)?Zt:Ee.current,r=t.contextTypes,l=(r=r!=null)?xn(e,i):It),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ui,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ts(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ui.enqueueReplaceState(t,t.state,null)}function Kl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Tl(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Xe(l):(l=Fe(t)?Zt:Ee.current,i.context=xn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&($l(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ui.enqueueReplaceState(i,i.state,null),ni(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ln(e,t){try{var n="",r=t;do n+=$(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ad=typeof WeakMap=="function"?WeakMap:Map;function Fs(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){gi||(gi=!0,co=r),Xl(e,t)},n}function Os(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Xl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Xl(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Is(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ad;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=xd.bind(null,e,t,n),t.then(e,e))}function Ms(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function js(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var sd=Ce.ReactCurrentOwner,Oe=!1;function Le(e,t,n,r){t.child=e===null?is(t,null,n,r):Nn(t,e.child,n,r)}function Us(e,t,n,r,i){n=n.render;var l=t.ref;return Pn(t,i),r=Bl(e,t,n,r,l,i),n=bl(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(ae&&n&&Cl(t),t.flags|=1,Le(e,t,r,i),t.child)}function Bs(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!vo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,bs(e,t,l,r,i)):(e=ki(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:qn,n(o,r)&&e.ref===t.ref)return Nt(e,t,i)}return t.flags|=1,e=Qt(l,r),e.ref=t.ref,e.return=t,t.child=e}function bs(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(qn(l,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Oe=!0);else return t.lanes=e.lanes,Nt(e,t,i)}return Yl(e,t,n,r,i)}function Vs(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Rn,Qe),Qe|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Rn,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,te(Rn,Qe),Qe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,te(Rn,Qe),Qe|=r;return Le(e,t,i,n),t.child}function Hs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yl(e,t,n,r,i){var l=Fe(n)?Zt:Ee.current;return l=xn(t,l),Pn(t,i),n=Bl(e,t,n,r,l,i),r=bl(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(ae&&r&&Cl(t),t.flags|=1,Le(e,t,n,i),t.child)}function Ws(e,t,n,r,i){if(Fe(n)){var l=!0;Kr(t)}else l=!1;if(Pn(t,i),t.stateNode===null)di(e,t),Ds(t,n,r),Kl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=Xe(p):(p=Fe(n)?Zt:Ee.current,p=xn(t,p));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==p)&&Ts(t,o,r,p),jt=!1;var h=t.memoizedState;o.state=h,ni(t,r,o,i),s=t.memoizedState,a!==r||h!==s||Te.current||jt?(typeof y=="function"&&($l(t,n,y,r),s=t.memoizedState),(a=jt||Rs(t,n,a,r,h,s,p))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=p,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,os(e,t),a=t.memoizedProps,p=t.type===t.elementType?a:lt(t.type,a),o.props=p,v=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Xe(s):(s=Fe(n)?Zt:Ee.current,s=xn(t,s));var k=n.getDerivedStateFromProps;(y=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==v||h!==s)&&Ts(t,o,r,s),jt=!1,h=t.memoizedState,o.state=h,ni(t,r,o,i);var _=t.memoizedState;a!==v||h!==_||Te.current||jt?(typeof k=="function"&&($l(t,n,k,r),_=t.memoizedState),(p=jt||Rs(t,n,p,r,h,_,s)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),o.props=r,o.state=_,o.context=s,r=p):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Zl(e,t,n,r,l,i)}function Zl(e,t,n,r,i,l){Hs(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Xa(t,n,!1),Nt(e,t,l);r=t.stateNode,sd.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Nn(t,e.child,null,l),t.child=Nn(t,null,a,l)):Le(e,t,a,l),t.memoizedState=r.state,i&&Xa(t,n,!0),t.child}function Qs(e){var t=e.stateNode;t.pendingContext?Ka(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ka(e,t.context,!1),Fl(e,t.containerInfo)}function $s(e,t,n,r,i){return En(),Pl(i),t.flags|=256,Le(e,t,n,r),t.child}var ql={dehydrated:null,treeContext:null,retryLane:0};function Jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ks(e,t,n){var r=t.pendingProps,i=se.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),te(se,i&1),e===null)return _l(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ci(o,r,0,null),e=sn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Jl(n),t.memoizedState=ql,e):eo(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ud(e,t,o,r,a,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Qt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=Qt(a,l):(l=sn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Jl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=ql,r}return l=e.child,e=l.sibling,r=Qt(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function eo(e,t){return t=Ci({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ci(e,t,n,r){return r!==null&&Pl(r),Nn(t,e.child,null,n),e=eo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ud(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Gl(Error(m(422))),ci(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Ci({mode:"visible",children:r.children},i,0,null),l=sn(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Nn(t,e.child,null,o),t.child.memoizedState=Jl(o),t.memoizedState=ql,l);if((t.mode&1)===0)return ci(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(m(419)),r=Gl(l,r,void 0),ci(e,t,o,r)}if(a=(o&e.childLanes)!==0,Oe||a){if(r=we,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ct(e,i),st(r,e,i,-1))}return yo(),r=Gl(Error(m(421))),ci(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=kd.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,We=Ft(i.nextSibling),He=t,ae=!0,it=null,e!==null&&(Ke[Ge++]=xt,Ke[Ge++]=kt,Ke[Ge++]=qt,xt=e.id,kt=e.overflow,qt=t),t=eo(t,r.children),t.flags|=4096,t)}function Gs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Rl(e.return,t,n)}function to(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Xs(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Le(e,t,r.children,n),r=se.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gs(e,n,t);else if(e.tag===19)Gs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(se,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ri(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),to(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ri(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}to(t,!0,n,null,l);break;case"together":to(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function di(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cd(e,t,n){switch(t.tag){case 3:Qs(t),En();break;case 5:us(t);break;case 1:Fe(t.type)&&Kr(t);break;case 4:Fl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;te(Jr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(se,se.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ks(e,t,n):(te(se,se.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);te(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Xs(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Vs(e,t,n)}return Nt(e,t,n)}var Ys,no,Zs,qs;Ys=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},no=function(){},Zs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tn(mt.current);var l=null;switch(n){case"input":i=Ri(e,i),r=Ri(e,r),l=[];break;case"select":i=N({},i,{value:void 0}),r=N({},r,{value:void 0}),l=[];break;case"textarea":i=Fi(e,i),r=Fi(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}Ii(n,r);var o;n=null;for(p in i)if(!r.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var a=i[p];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(L.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in r){var s=r[p];if(a=i?.[p],r.hasOwnProperty(p)&&s!==a&&(s!=null||a!=null))if(p==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(l||(l=[]),l.push(p,n)),n=s;else p==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(p,s)):p==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(p,""+s):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(L.hasOwnProperty(p)?(s!=null&&p==="onScroll"&&ie("scroll",e),l||a===s||(l=[])):(l=l||[]).push(p,s))}n&&(l=l||[]).push("style",n);var p=l;(t.updateQueue=p)&&(t.flags|=4)}},qs=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dd(e,t,n){var r=t.pendingProps;switch(El(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return Fe(t.type)&&$r(),_e(t),null;case 3:return r=t.stateNode,zn(),le(Te),le(Ee),Ml(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,it!==null&&(mo(it),it=null))),no(e,t),_e(t),null;case 5:Ol(t);var i=tn(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)Zs(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(m(166));return _e(t),null}if(e=tn(mt.current),Zr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[pt]=t,r[rr]=l,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<er.length;i++)ie(er[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Do(r,l),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ie("invalid",r);break;case"textarea":Oo(r,l),ie("invalid",r)}Ii(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Hr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Hr(r.textContent,a,e),i=["children",""+a]):L.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":Sr(r),Fo(r,l,!0);break;case"textarea":Sr(r),Mo(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Wr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[pt]=t,e[rr]=r,Ys(e,t,!1,!1),t.stateNode=e;e:{switch(o=Mi(n,r),n){case"dialog":ie("cancel",e),ie("close",e),i=r;break;case"iframe":case"object":case"embed":ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<er.length;i++)ie(er[i],e);i=r;break;case"source":ie("error",e),i=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=r;break;case"details":ie("toggle",e),i=r;break;case"input":Do(e,r),i=Ri(e,r),ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=N({},r,{value:void 0}),ie("invalid",e);break;case"textarea":Oo(e,r),i=Fi(e,r),ie("invalid",e);break;default:i=r}Ii(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?bo(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Uo(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&On(e,s):typeof s=="number"&&On(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(L.hasOwnProperty(l)?s!=null&&l==="onScroll"&&ie("scroll",e):s!=null&&Je(e,l,s,o))}switch(n){case"input":Sr(e),Fo(e,r,!1);break;case"textarea":Sr(e),Mo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Y(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?un(e,!!r.multiple,l,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Wr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)qs(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(m(166));if(n=tn(sr.current),tn(mt.current),Zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(l=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return _e(t),null;case 13:if(le(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&We!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ts(),En(),t.flags|=98560,l=!1;else if(l=Zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(m(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(m(317));l[pt]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),l=!1}else it!==null&&(mo(it),it=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(se.current&1)!==0?ge===0&&(ge=3):yo())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return zn(),no(e,t),e===null&&tr(t.stateNode.containerInfo),_e(t),null;case 10:return Al(t.type._context),_e(t),null;case 17:return Fe(t.type)&&$r(),_e(t),null;case 19:if(le(se),l=t.memoizedState,l===null)return _e(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)pr(l,!1);else{if(ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=ri(e),o!==null){for(t.flags|=128,pr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(se,se.current&1|2),t.child}e=e.sibling}l.tail!==null&&fe()>Dn&&(t.flags|=128,r=!0,pr(l,!1),t.lanes=4194304)}else{if(!r)if(e=ri(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!ae)return _e(t),null}else 2*fe()-l.renderingStartTime>Dn&&n!==1073741824&&(t.flags|=128,r=!0,pr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=fe(),t.sibling=null,n=se.current,te(se,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return go(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Qe&1073741824)!==0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error(m(156,t.tag))}function fd(e,t){switch(El(t),t.tag){case 1:return Fe(t.type)&&$r(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(),le(Te),le(Ee),Ml(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ol(t),null;case 13:if(le(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(se),null;case 4:return zn(),null;case 10:return Al(t.type._context),null;case 22:case 23:return go(),null;case 24:return null;default:return null}}var fi=!1,Pe=!1,pd=typeof WeakSet=="function"?WeakSet:Set,E=null;function An(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function ro(e,t,n){try{n()}catch(r){de(e,t,r)}}var Js=!1;function md(e,t){if(hl=Dr,e=Ra(),al(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,p=0,y=0,v=e,h=null;t:for(;;){for(var k;v!==n||i!==0&&v.nodeType!==3||(a=o+i),v!==l||r!==0&&v.nodeType!==3||(s=o+r),v.nodeType===3&&(o+=v.nodeValue.length),(k=v.firstChild)!==null;)h=v,v=k;for(;;){if(v===e)break t;if(h===n&&++p===i&&(a=o),h===l&&++y===r&&(s=o),(k=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=k}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(gl={focusedElem:e,selectionRange:n},Dr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var _=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var P=_.memoizedProps,pe=_.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?P:lt(t.type,P),pe);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163))}}catch(w){de(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return _=Js,Js=!1,_}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ro(t,n,l)}i=i.next}while(i!==r)}}function pi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function io(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eu(e){var t=e.alternate;t!==null&&(e.alternate=null,eu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[rr],delete t[Sl],delete t[Yc],delete t[Zc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tu(e){return e.tag===5||e.tag===3||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(lo(e,t,n),e=e.sibling;e!==null;)lo(e,t,n),e=e.sibling}function oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oo(e,t,n),e=e.sibling;e!==null;)oo(e,t,n),e=e.sibling}var xe=null,ot=!1;function Bt(e,t,n){for(n=n.child;n!==null;)ru(e,t,n),n=n.sibling}function ru(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(_r,n)}catch{}switch(n.tag){case 5:Pe||An(n,t);case 6:var r=xe,i=ot;xe=null,Bt(e,t,n),xe=r,ot=i,xe!==null&&(ot?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(ot?(e=xe,n=n.stateNode,e.nodeType===8?wl(e.parentNode,n):e.nodeType===1&&wl(e,n),$n(e)):wl(xe,n.stateNode));break;case 4:r=xe,i=ot,xe=n.stateNode.containerInfo,ot=!0,Bt(e,t,n),xe=r,ot=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&((l&2)!==0||(l&4)!==0)&&ro(n,t,o),i=i.next}while(i!==r)}Bt(e,t,n);break;case 1:if(!Pe&&(An(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){de(n,t,a)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Bt(e,t,n),Pe=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pd),t.forEach(function(r){var i=Cd.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:xe=a.stateNode,ot=!1;break e;case 3:xe=a.stateNode.containerInfo,ot=!0;break e;case 4:xe=a.stateNode.containerInfo,ot=!0;break e}a=a.return}if(xe===null)throw Error(m(160));ru(l,o,i),xe=null,ot=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(p){de(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lu(t,e),t=t.sibling}function lu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),gt(e),r&4){try{mr(3,e,e.return),pi(3,e)}catch(P){de(e,e.return,P)}try{mr(5,e,e.return)}catch(P){de(e,e.return,P)}}break;case 1:at(t,e),gt(e),r&512&&n!==null&&An(n,n.return);break;case 5:if(at(t,e),gt(e),r&512&&n!==null&&An(n,n.return),e.flags&32){var i=e.stateNode;try{On(i,"")}catch(P){de(e,e.return,P)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&To(i,l),Mi(a,o);var p=Mi(a,l);for(o=0;o<s.length;o+=2){var y=s[o],v=s[o+1];y==="style"?bo(i,v):y==="dangerouslySetInnerHTML"?Uo(i,v):y==="children"?On(i,v):Je(i,y,v,p)}switch(a){case"input":Di(i,l);break;case"textarea":Io(i,l);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var k=l.value;k!=null?un(i,!!l.multiple,k,!1):h!==!!l.multiple&&(l.defaultValue!=null?un(i,!!l.multiple,l.defaultValue,!0):un(i,!!l.multiple,l.multiple?[]:"",!1))}i[rr]=l}catch(P){de(e,e.return,P)}}break;case 6:if(at(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(m(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(P){de(e,e.return,P)}}break;case 3:if(at(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(P){de(e,e.return,P)}break;case 4:at(t,e),gt(e);break;case 13:at(t,e),gt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(uo=fe())),r&4&&iu(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(p=Pe)||y,at(t,e),Pe=p):at(t,e),gt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!y&&(e.mode&1)!==0)for(E=e,y=e.child;y!==null;){for(v=E=y;E!==null;){switch(h=E,k=h.child,h.tag){case 0:case 11:case 14:case 15:mr(4,h,h.return);break;case 1:An(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(P){de(r,n,P)}}break;case 5:An(h,h.return);break;case 22:if(h.memoizedState!==null){su(v);continue}}k!==null?(k.return=h,E=k):su(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{i=v.stateNode,p?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=v.stateNode,s=v.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Bo("display",o))}catch(P){de(e,e.return,P)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=p?"":v.memoizedProps}catch(P){de(e,e.return,P)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:at(t,e),gt(e),r&4&&iu(e);break;case 21:break;default:at(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tu(n)){var r=n;break e}n=n.return}throw Error(m(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(On(i,""),r.flags&=-33);var l=nu(e);oo(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=nu(e);lo(e,a,o);break;default:throw Error(m(161))}}catch(s){de(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hd(e,t,n){E=e,ou(e)}function ou(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fi;if(!o){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Pe;a=fi;var p=Pe;if(fi=o,(Pe=s)&&!p)for(E=i;E!==null;)o=E,s=o.child,o.tag===22&&o.memoizedState!==null?uu(i):s!==null?(s.return=o,E=s):uu(i);for(;l!==null;)E=l,ou(l),l=l.sibling;E=i,fi=a,Pe=p}au(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,E=l):au(e)}}function au(e){for(;E!==null;){var t=E;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Pe||pi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&ss(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ss(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var y=p.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&$n(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163))}Pe||t.flags&512&&io(t)}catch(h){de(t,t.return,h)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function su(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function uu(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pi(4,t)}catch(s){de(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){de(t,i,s)}}var l=t.return;try{io(t)}catch(s){de(t,l,s)}break;case 5:var o=t.return;try{io(t)}catch(s){de(t,o,s)}}}catch(s){de(t,t.return,s)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var gd=Math.ceil,mi=Ce.ReactCurrentDispatcher,ao=Ce.ReactCurrentOwner,Ze=Ce.ReactCurrentBatchConfig,V=0,we=null,me=null,ke=0,Qe=0,Rn=Ot(0),ge=0,hr=null,rn=0,hi=0,so=0,gr=null,Ie=null,uo=0,Dn=1/0,_t=null,gi=!1,co=null,bt=null,yi=!1,Vt=null,vi=0,yr=0,fo=null,wi=-1,Si=0;function Ae(){return(V&6)!==0?fe():wi!==-1?wi:wi=fe()}function Ht(e){return(e.mode&1)===0?1:(V&2)!==0&&ke!==0?ke&-ke:Jc.transition!==null?(Si===0&&(Si=na()),Si):(e=Z,e!==0||(e=window.event,e=e===void 0?16:da(e.type)),e)}function st(e,t,n,r){if(50<yr)throw yr=0,fo=null,Error(m(185));bn(e,n,r),((V&2)===0||e!==we)&&(e===we&&((V&2)===0&&(hi|=n),ge===4&&Wt(e,ke)),Me(e,r),n===1&&V===0&&(t.mode&1)===0&&(Dn=fe()+500,Gr&&Mt()))}function Me(e,t){var n=e.callbackNode;Ju(e,t);var r=Lr(e,e===we?ke:0);if(r===0)n!==null&&Jo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Jo(n),t===1)e.tag===0?qc(du.bind(null,e)):Ya(du.bind(null,e)),Gc(function(){(V&6)===0&&Mt()}),n=null;else{switch(ra(r)){case 1:n=Wi;break;case 4:n=ea;break;case 16:n=Nr;break;case 536870912:n=ta;break;default:n=Nr}n=wu(n,cu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cu(e,t){if(wi=-1,Si=0,(V&6)!==0)throw Error(m(327));var n=e.callbackNode;if(Tn()&&e.callbackNode!==n)return null;var r=Lr(e,e===we?ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=xi(e,r);else{t=r;var i=V;V|=2;var l=pu();(we!==e||ke!==t)&&(_t=null,Dn=fe()+500,on(e,t));do try{wd();break}catch(a){fu(e,a)}while(!0);Ll(),mi.current=l,V=i,me!==null?t=0:(we=null,ke=0,t=ge)}if(t!==0){if(t===2&&(i=Qi(e),i!==0&&(r=i,t=po(e,i))),t===1)throw n=hr,on(e,0),Wt(e,r),Me(e,fe()),n;if(t===6)Wt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!yd(i)&&(t=xi(e,r),t===2&&(l=Qi(e),l!==0&&(r=l,t=po(e,l))),t===1))throw n=hr,on(e,0),Wt(e,r),Me(e,fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(m(345));case 2:an(e,Ie,_t);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=uo+500-fe(),10<t)){if(Lr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vl(an.bind(null,e,Ie,_t),t);break}an(e,Ie,_t);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-nt(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gd(r/1960))-r,10<r){e.timeoutHandle=vl(an.bind(null,e,Ie,_t),r);break}an(e,Ie,_t);break;case 5:an(e,Ie,_t);break;default:throw Error(m(329))}}}return Me(e,fe()),e.callbackNode===n?cu.bind(null,e):null}function po(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=xi(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&mo(t)),e}function mo(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function yd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!rt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~so,t&=~hi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function du(e){if((V&6)!==0)throw Error(m(327));Tn();var t=Lr(e,0);if((t&1)===0)return Me(e,fe()),null;var n=xi(e,t);if(e.tag!==0&&n===2){var r=Qi(e);r!==0&&(t=r,n=po(e,r))}if(n===1)throw n=hr,on(e,0),Wt(e,t),Me(e,fe()),n;if(n===6)throw Error(m(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Ie,_t),Me(e,fe()),null}function ho(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Dn=fe()+500,Gr&&Mt())}}function ln(e){Vt!==null&&Vt.tag===0&&(V&6)===0&&Tn();var t=V;V|=1;var n=Ze.transition,r=Z;try{if(Ze.transition=null,Z=1,e)return e()}finally{Z=r,Ze.transition=n,V=t,(V&6)===0&&Mt()}}function go(){Qe=Rn.current,le(Rn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kc(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(El(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:zn(),le(Te),le(Ee),Ml();break;case 5:Ol(r);break;case 4:zn();break;case 13:le(se);break;case 19:le(se);break;case 10:Al(r.type._context);break;case 22:case 23:go()}n=n.return}if(we=e,me=e=Qt(e.current,null),ke=Qe=t,ge=0,hr=null,so=hi=rn=0,Ie=gr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}en=null}return e}function fu(e,t){do{var n=me;try{if(Ll(),ii.current=si,li){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}li=!1}if(nn=0,ve=he=ue=null,ur=!1,cr=0,ao.current=null,n===null||n.return===null){ge=1,hr=t,me=null;break}e:{var l=e,o=n.return,a=n,s=t;if(t=ke,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=s,y=a,v=y.tag;if((y.mode&1)===0&&(v===0||v===11||v===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var k=Ms(o);if(k!==null){k.flags&=-257,js(k,o,a,l,t),k.mode&1&&Is(l,p,t),t=k,s=p;var _=t.updateQueue;if(_===null){var P=new Set;P.add(s),t.updateQueue=P}else _.add(s);break e}else{if((t&1)===0){Is(l,p,t),yo();break e}s=Error(m(426))}}else if(ae&&a.mode&1){var pe=Ms(o);if(pe!==null){(pe.flags&65536)===0&&(pe.flags|=256),js(pe,o,a,l,t),Pl(Ln(s,a));break e}}l=s=Ln(s,a),ge!==4&&(ge=2),gr===null?gr=[l]:gr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Fs(l,s,t);as(l,d);break e;case 1:a=s;var u=l.type,f=l.stateNode;if((l.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(bt===null||!bt.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Os(l,a,t);as(l,w);break e}}l=l.return}while(l!==null)}hu(n)}catch(z){t=z,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function pu(){var e=mi.current;return mi.current=si,e===null?si:e}function yo(){(ge===0||ge===3||ge===2)&&(ge=4),we===null||(rn&268435455)===0&&(hi&268435455)===0||Wt(we,ke)}function xi(e,t){var n=V;V|=2;var r=pu();(we!==e||ke!==t)&&(_t=null,on(e,t));do try{vd();break}catch(i){fu(e,i)}while(!0);if(Ll(),V=n,mi.current=r,me!==null)throw Error(m(261));return we=null,ke=0,ge}function vd(){for(;me!==null;)mu(me)}function wd(){for(;me!==null&&!Wu();)mu(me)}function mu(e){var t=vu(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?hu(e):me=t,ao.current=null}function hu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=dd(n,t,Qe),n!==null){me=n;return}}else{if(n=fd(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,me=null;return}}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ge===0&&(ge=5)}function an(e,t,n){var r=Z,i=Ze.transition;try{Ze.transition=null,Z=1,Sd(e,t,n,r)}finally{Ze.transition=i,Z=r}return null}function Sd(e,t,n,r){do Tn();while(Vt!==null);if((V&6)!==0)throw Error(m(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(m(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(ec(e,l),e===we&&(me=we=null,ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||yi||(yi=!0,wu(Nr,function(){return Tn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=Ze.transition,Ze.transition=null;var o=Z;Z=1;var a=V;V|=4,ao.current=null,md(e,n),lu(n,e),Bc(gl),Dr=!!hl,gl=hl=null,e.current=n,hd(n),Qu(),V=a,Z=o,Ze.transition=l}else e.current=n;if(yi&&(yi=!1,Vt=e,vi=i),l=e.pendingLanes,l===0&&(bt=null),Gu(n.stateNode),Me(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gi)throw gi=!1,e=co,co=null,e;return(vi&1)!==0&&e.tag!==0&&Tn(),l=e.pendingLanes,(l&1)!==0?e===fo?yr++:(yr=0,fo=e):yr=0,Mt(),null}function Tn(){if(Vt!==null){var e=ra(vi),t=Ze.transition,n=Z;try{if(Ze.transition=null,Z=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,vi=0,(V&6)!==0)throw Error(m(331));var i=V;for(V|=4,E=e.current;E!==null;){var l=E,o=l.child;if((E.flags&16)!==0){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var p=a[s];for(E=p;E!==null;){var y=E;switch(y.tag){case 0:case 11:case 15:mr(8,y,l)}var v=y.child;if(v!==null)v.return=y,E=v;else for(;E!==null;){y=E;var h=y.sibling,k=y.return;if(eu(y),y===p){E=null;break}if(h!==null){h.return=k,E=h;break}E=k}}}var _=l.alternate;if(_!==null){var P=_.child;if(P!==null){_.child=null;do{var pe=P.sibling;P.sibling=null,P=pe}while(P!==null)}}E=l}}if((l.subtreeFlags&2064)!==0&&o!==null)o.return=l,E=o;else e:for(;E!==null;){if(l=E,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:mr(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,E=d;break e}E=l.return}}var u=e.current;for(E=u;E!==null;){o=E;var f=o.child;if((o.subtreeFlags&2064)!==0&&f!==null)f.return=o,E=f;else e:for(o=u;E!==null;){if(a=E,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:pi(9,a)}}catch(z){de(a,a.return,z)}if(a===o){E=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,E=w;break e}E=a.return}}if(V=i,Mt(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(_r,e)}catch{}r=!0}return r}finally{Z=n,Ze.transition=t}}return!1}function gu(e,t,n){t=Ln(n,t),t=Fs(e,t,1),e=Ut(e,t,1),t=Ae(),e!==null&&(bn(e,1,t),Me(e,t))}function de(e,t,n){if(e.tag===3)gu(e,e,n);else for(;t!==null;){if(t.tag===3){gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=Ln(n,e),e=Os(t,e,1),t=Ut(t,e,1),e=Ae(),t!==null&&(bn(t,1,e),Me(t,e));break}}t=t.return}}function xd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(ke&n)===n&&(ge===4||ge===3&&(ke&130023424)===ke&&500>fe()-uo?on(e,0):so|=n),Me(e,t)}function yu(e,t){t===0&&((e.mode&1)===0?t=1:(t=zr,zr<<=1,(zr&130023424)===0&&(zr=4194304)));var n=Ae();e=Ct(e,t),e!==null&&(bn(e,t,n),Me(e,n))}function kd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yu(e,n)}function Cd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(m(314))}r!==null&&r.delete(t),yu(e,n)}var vu;vu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Oe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Oe=!1,cd(e,t,n);Oe=(e.flags&131072)!==0}else Oe=!1,ae&&(t.flags&1048576)!==0&&Za(t,Yr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;di(e,t),e=t.pendingProps;var i=xn(t,Ee.current);Pn(t,n),i=Bl(null,t,r,e,i,n);var l=bl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(l=!0,Kr(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tl(t),i.updater=ui,t.stateNode=i,i._reactInternals=t,Kl(t,r,e,n),t=Zl(null,t,r,!0,l,n)):(t.tag=0,ae&&l&&Cl(t),Le(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(di(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Nd(r),e=lt(r,e),i){case 0:t=Yl(null,t,r,e,n);break e;case 1:t=Ws(null,t,r,e,n);break e;case 11:t=Us(null,t,r,e,n);break e;case 14:t=Bs(null,t,r,lt(r.type,e),n);break e}throw Error(m(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Yl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Ws(e,t,r,i,n);case 3:e:{if(Qs(t),e===null)throw Error(m(387));r=t.pendingProps,l=t.memoizedState,i=l.element,os(e,t),ni(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Ln(Error(m(423)),t),t=$s(e,t,r,n,i);break e}else if(r!==i){i=Ln(Error(m(424)),t),t=$s(e,t,r,n,i);break e}else for(We=Ft(t.stateNode.containerInfo.firstChild),He=t,ae=!0,it=null,n=is(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===i){t=Nt(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return us(t),e===null&&_l(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,yl(r,i)?o=null:l!==null&&yl(r,l)&&(t.flags|=32),Hs(e,t),Le(e,t,o,n),t.child;case 6:return e===null&&_l(t),null;case 13:return Ks(e,t,n);case 4:return Fl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nn(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Us(e,t,r,i,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,te(Jr,r._currentValue),r._currentValue=o,l!==null)if(rt(l.value,o)){if(l.children===i.children&&!Te.current){t=Nt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Et(-1,n&-n),s.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var y=p.pending;y===null?s.next=s:(s.next=y.next,y.next=s),p.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Rl(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(m(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rl(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Le(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pn(t,n),i=Xe(i),r=r(i),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,i=lt(r,t.pendingProps),i=lt(r.type,i),Bs(e,t,r,i,n);case 15:return bs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),di(e,t),t.tag=1,Fe(r)?(e=!0,Kr(t)):e=!1,Pn(t,n),Ds(t,r,i),Kl(t,r,i,n),Zl(null,t,r,!0,e,n);case 19:return Xs(e,t,n);case 22:return Vs(e,t,n)}throw Error(m(156,t.tag))};function wu(e,t){return qo(e,t)}function Ed(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new Ed(e,t,n,r)}function vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nd(e){if(typeof e=="function")return vo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ct)return 11;if(e===dt)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ki(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")vo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Re:return sn(n.children,i,l,t);case $e:o=8,i|=8;break;case Pt:return e=qe(12,n,t,i|2),e.elementType=Pt,e.lanes=l,e;case Be:return e=qe(13,n,t,i),e.elementType=Be,e.lanes=l,e;case tt:return e=qe(19,n,t,i),e.elementType=tt,e.lanes=l,e;case ce:return Ci(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vt:o=10;break e;case Gt:o=9;break e;case ct:o=11;break e;case dt:o=14;break e;case De:o=16,r=null;break e}throw Error(m(130,e==null?e:typeof e,""))}return t=qe(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function sn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function Ci(e,t,n,r){return e=qe(22,e,r,t),e.elementType=ce,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function So(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _d(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$i(0),this.expirationTimes=$i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xo(e,t,n,r,i,l,o,a,s){return e=new _d(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=qe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tl(l),e}function Pd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ze,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Su(e){if(!e)return It;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(m(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(m(171))}if(e.tag===1){var n=e.type;if(Fe(n))return Ga(e,n,t)}return t}function xu(e,t,n,r,i,l,o,a,s){return e=xo(n,r,!0,e,i,l,o,a,s),e.context=Su(null),n=e.current,r=Ae(),i=Ht(n),l=Et(r,i),l.callback=t??null,Ut(n,l,i),e.current.lanes=i,bn(e,i,r),Me(e,r),e}function Ei(e,t,n,r){var i=t.current,l=Ae(),o=Ht(i);return n=Su(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(i,t,o),e!==null&&(st(e,i,o,l),ti(e,i,o)),o}function Ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ku(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ko(e,t){ku(e,t),(e=e.alternate)&&ku(e,t)}function zd(){return null}var Cu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Co(e){this._internalRoot=e}_i.prototype.render=Co.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));Ei(e,t,null,null)},_i.prototype.unmount=Co.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){Ei(null,e,null,null)}),t[wt]=null}};function _i(e){this._internalRoot=e}_i.prototype.unstable_scheduleHydration=function(e){if(e){var t=oa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&ua(e)}};function Eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eu(){}function Ld(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var p=Ni(o);l.call(p)}}var o=xu(t,r,e,0,null,!1,!1,"",Eu);return e._reactRootContainer=o,e[wt]=o.current,tr(e.nodeType===8?e.parentNode:e),ln(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var p=Ni(s);a.call(p)}}var s=xo(e,0,!1,null,null,!1,!1,"",Eu);return e._reactRootContainer=s,e[wt]=s.current,tr(e.nodeType===8?e.parentNode:e),ln(function(){Ei(t,s,n,r)}),s}function zi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var s=Ni(o);a.call(s)}}Ei(t,o,e,i)}else o=Ld(n,t,e,i,r);return Ni(o)}ia=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bn(t.pendingLanes);n!==0&&(Ki(t,n|1),Me(t,fe()),(V&6)===0&&(Dn=fe()+500,Mt()))}break;case 13:ln(function(){var r=Ct(e,1);if(r!==null){var i=Ae();st(r,e,1,i)}}),ko(e,1)}},Gi=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var n=Ae();st(t,e,134217728,n)}ko(e,134217728)}},la=function(e){if(e.tag===13){var t=Ht(e),n=Ct(e,t);if(n!==null){var r=Ae();st(n,e,t,r)}ko(e,t)}},oa=function(){return Z},aa=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}},Bi=function(e,t,n){switch(t){case"input":if(Di(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Qr(r);if(!i)throw Error(m(90));Ro(r),Di(r,i)}}}break;case"textarea":Io(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}},Qo=ho,$o=ln;var Ad={usingClientEntryPoint:!1,Events:[ir,wn,Qr,Ho,Wo,ho]},vr={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rd={bundleType:vr.bundleType,version:vr.version,rendererPackageName:vr.rendererPackageName,rendererConfig:vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yo(e),e===null?null:e.stateNode},findFiberByHostInstance:vr.findFiberByHostInstance||zd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{_r=Li.inject(Rd),ft=Li}catch{}}return je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ad,je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eo(t))throw Error(m(200));return Pd(e,t,null,n)},je.createRoot=function(e,t){if(!Eo(e))throw Error(m(299));var n=!1,r="",i=Cu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=xo(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,tr(e.nodeType===8?e.parentNode:e),new Co(t)},je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=Yo(t),e=e===null?null:e.stateNode,e},je.flushSync=function(e){return ln(e)},je.hydrate=function(e,t,n){if(!Pi(t))throw Error(m(200));return zi(null,e,t,!0,n)},je.hydrateRoot=function(e,t,n){if(!Eo(e))throw Error(m(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=Cu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=xu(t,null,e,1,n??null,i,!1,l,o),e[wt]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new _i(t)},je.render=function(e,t,n){if(!Pi(t))throw Error(m(200));return zi(null,e,t,!1,n)},je.unmountComponentAtNode=function(e){if(!Pi(e))throw Error(m(40));return e._reactRootContainer?(ln(function(){zi(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1},je.unstable_batchedUpdates=ho,je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pi(n))throw Error(m(200));if(e==null||e._reactInternals===void 0)throw Error(m(38));return zi(e,t,n,!1,r)},je.version="18.3.1-next-f1338f8080-20240426",je}var Du;function Ud(){if(Du)return Po.exports;Du=1;function C(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C)}catch(A){console.error(A)}}return C(),Po.exports=jd(),Po.exports}var Tu;function Bd(){if(Tu)return Ai;Tu=1;var C=Ud();return Ai.createRoot=C.createRoot,Ai.hydrateRoot=C.hydrateRoot,Ai}var bd=Bd(),yt=Ao();const Vd=[{id:"c-language",title:"C Language",levels:[{id:"level-1-c",name:"Level 1: C Fundamentals",topics:[{id:"intro-c",title:"Introduction to C"},{id:"data-types",title:"Data Types & Variables"},{id:"operators",title:"Operators"},{id:"control-statements",title:"Control Statements"}]},{id:"level-2-c",name:"Level 2: Core Programming",topics:[{id:"functions",title:"Functions"},{id:"arrays",title:"Arrays"},{id:"strings",title:"Strings"}]},{id:"level-3-c",name:"Level 3: Memory & Structures",topics:[{id:"pointers",title:"Pointers"},{id:"structures",title:"Structures & Unions"},{id:"enums",title:"Enumerations & Typedef"}]},{id:"level-4-c",name:"Level 4: Files & Advanced",topics:[{id:"file-handling",title:"File Handling"},{id:"dynamic-memory",title:"Dynamic Memory Allocation"},{id:"preprocessor",title:"Preprocessor Directives"},{id:"error-handling",title:"Error Handling"}]},{id:"level-5-c",name:"Level 5: System-Level C",topics:[{id:"command-line",title:"Command Line Arguments"},{id:"bit-manipulation",title:"Bit Manipulation"},{id:"storage-classes",title:"Storage Classes"},{id:"low-level",title:"Low-Level Concepts"}]}]},{id:"cpp-language",title:"C++ Language",levels:[{id:"level-1-cpp",name:"Level 1: C++ Fundamentals",topics:[{id:"intro-cpp",title:"Introduction to C++"},{id:"cpp-data-types",title:"Data Types & Variables"},{id:"cpp-control",title:"Control Structures"}]},{id:"level-2-cpp",name:"Level 2: OOP Core",topics:[{id:"oop-concepts",title:"OOP Concepts"},{id:"inheritance",title:"Inheritance"},{id:"polymorphism",title:"Polymorphism"}]},{id:"level-3-cpp",name:"Level 3: Memory & References",topics:[{id:"cpp-pointers",title:"Pointers & References"},{id:"const-correctness",title:"const Correctness"}]},{id:"level-4-cpp",name:"Level 4: STL",topics:[{id:"stl-overview",title:"STL Overview"}]},{id:"level-5-cpp",name:"Level 5: Advanced C++",topics:[{id:"exception-handling",title:"Exception Handling"},{id:"templates",title:"Templates"},{id:"cpp-file-handling",title:"File Handling"}]},{id:"level-6-cpp",name:"Level 6: Modern C++",topics:[{id:"modern-cpp",title:"Modern C++ Features"},{id:"multithreading",title:"Multithreading"},{id:"performance",title:"Performance & Memory"}]},{id:"level-7-cpp",name:"Level 7: Design & Best Practices",topics:[{id:"design-patterns",title:"Design Patterns"},{id:"competitive-programming",title:"Competitive Programming"},{id:"best-practices",title:"C++ Best Practices"}]}]}];/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=C=>C.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wd=C=>C.replace(/^([A-Z])|[\s-_]+(\w)/g,(A,m,b)=>b?b.toUpperCase():m.toLowerCase()),Fu=C=>{const A=Wd(C);return A.charAt(0).toUpperCase()+A.slice(1)},Iu=(...C)=>C.filter((A,m,b)=>!!A&&A.trim()!==""&&b.indexOf(A)===m).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=yt.forwardRef(({color:C="currentColor",size:A=24,strokeWidth:m=2,absoluteStrokeWidth:b,className:L="",children:O,iconNode:ne,...q},I)=>yt.createElement("svg",{ref:I,...Qd,width:A,height:A,stroke:C,strokeWidth:b?Number(m)*24/Number(A):m,className:Iu("lucide",L),...q},[...ne.map(([H,B])=>yt.createElement(H,B)),...Array.isArray(O)?O:[O]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=(C,A)=>{const m=yt.forwardRef(({className:b,...L},O)=>yt.createElement($d,{ref:O,iconNode:A,className:Iu(`lucide-${Hd(Fu(C))}`,`lucide-${C}`,b),...L}));return m.displayName=Fu(C),m};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Gd=Kt("check",Kd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Yd=Kt("chevron-down",Xd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],qd=Kt("chevron-right",Zd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],ef=Kt("copy",Jd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],nf=Kt("menu",tf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],lf=Kt("moon",rf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],af=Kt("sun",of);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],uf=Kt("x",sf);function cf({selectedTopic:C,setSelectedTopic:A,sidebarOpen:m,setSidebarOpen:b}){const[L,O]=yt.useState({"level-1-c":!0}),ne=I=>{O(H=>({...H,[I]:!H[I]}))},q=I=>{A(I),window.innerWidth<1024&&b(!1)};return x.jsxs(x.Fragment,{children:[m&&x.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden",onClick:()=>b(!1)}),x.jsx("aside",{className:`fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto z-40 transition-transform duration-300 ${m?"translate-x-0":"-translate-x-full lg:translate-x-0"}`,children:x.jsx("nav",{className:"p-4",children:Vd.map(I=>x.jsxs("div",{className:"mb-6",children:[x.jsx("h2",{className:"px-3 py-2 text-gray-900 dark:text-white rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-2",children:I.title}),I.levels.map(H=>x.jsxs("div",{className:"mb-2",children:[x.jsxs("button",{onClick:()=>ne(H.id),className:"w-full flex items-center justify-between px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",children:[x.jsx("span",{children:H.name}),L[H.id]?x.jsx(Yd,{size:16}):x.jsx(qd,{size:16})]}),L[H.id]&&x.jsx("div",{className:"ml-4 mt-1 space-y-1",children:H.topics.map(B=>x.jsx("button",{onClick:()=>q(B.id),className:`w-full text-left px-3 py-2 rounded-lg transition-colors ${C===B.id?"bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100":"text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"}`,children:B.title},B.id))})]},H.id))]},I.id))})})]})}const df={"file-handling":{title:"File Handling",sections:[{heading:"Introduction to File Handling",content:"File handling in C allows programs to store data permanently. C provides various functions to create, read, write, and manipulate files."},{heading:"File Pointer",content:"A file pointer is a pointer to a structure FILE defined in stdio.h. It keeps track of the file being accessed.",code:`#include <stdio.h>

FILE *filePointer;`},{heading:"File Opening Modes",points:["r: Open for reading (file must exist)","w: Open for writing (creates new file or truncates existing)","a: Open for appending (creates new file if doesn't exist)","r+: Open for reading and writing (file must exist)","w+: Open for reading and writing (creates new or truncates)","a+: Open for reading and appending","rb, wb, ab: Binary mode variants"]},{heading:"Basic File Operations",subsections:[{subheading:"Opening and Closing Files",code:`#include <stdio.h>

int main() {
    FILE *fp;
    
    // Open file
    fp = fopen("data.txt", "w");
    
    if (fp == NULL) {
        printf("Error opening file\\n");
        return 1;
    }
    
    // File operations here
    
    // Close file
    fclose(fp);
    
    return 0;
}`},{subheading:"Writing to File",code:`// Using fprintf
FILE *fp = fopen("output.txt", "w");
fprintf(fp, "Hello, World!\\n");
fprintf(fp, "Number: %d\\n", 42);
fclose(fp);

// Using fputc
fp = fopen("output.txt", "w");
fputc('A', fp);
fputc('B', fp);
fclose(fp);

// Using fputs
fp = fopen("output.txt", "w");
fputs("First line\\n", fp);
fputs("Second line\\n", fp);
fclose(fp);`},{subheading:"Reading from File",code:`// Using fscanf
FILE *fp = fopen("input.txt", "r");
int num;
char str[100];

fscanf(fp, "%d %s", &num, str);
printf("Number: %d, String: %s\\n", num, str);
fclose(fp);

// Using fgetc
fp = fopen("input.txt", "r");
char ch;
while ((ch = fgetc(fp)) != EOF) {
    printf("%c", ch);
}
fclose(fp);

// Using fgets
fp = fopen("input.txt", "r");
char line[256];
while (fgets(line, sizeof(line), fp) != NULL) {
    printf("%s", line);
}
fclose(fp);`}]},{heading:"File Position Functions",code:`FILE *fp = fopen("data.txt", "r");

// fseek: Move file pointer
fseek(fp, 10, SEEK_SET);  // 10 bytes from beginning
fseek(fp, 5, SEEK_CUR);   // 5 bytes from current position
fseek(fp, -5, SEEK_END);  // 5 bytes before end

// ftell: Get current position
long pos = ftell(fp);
printf("Current position: %ld\\n", pos);

// rewind: Move to beginning
rewind(fp);

fclose(fp);`},{heading:"Binary File Operations",code:`#include <stdio.h>

struct Student {
    int rollNo;
    char name[50];
    float marks;
};

int main() {
    FILE *fp;
    struct Student s1 = {101, "Alice", 85.5};
    struct Student s2;
    
    // Write binary data
    fp = fopen("students.dat", "wb");
    fwrite(&s1, sizeof(struct Student), 1, fp);
    fclose(fp);
    
    // Read binary data
    fp = fopen("students.dat", "rb");
    fread(&s2, sizeof(struct Student), 1, fp);
    printf("Roll: %d, Name: %s, Marks: %.2f\\n", 
           s2.rollNo, s2.name, s2.marks);
    fclose(fp);
    
    return 0;
}`},{heading:"Error Handling in File Operations",code:`#include <stdio.h>
#include <errno.h>

FILE *fp = fopen("nonexistent.txt", "r");

if (fp == NULL) {
    perror("Error");  // Prints error message
    printf("Error code: %d\\n", errno);
    return 1;
}

// Check for errors during file operations
if (ferror(fp)) {
    printf("Error reading file\\n");
}

// Check for end of file
if (feof(fp)) {
    printf("End of file reached\\n");
}

fclose(fp);`}]},"dynamic-memory":{title:"Dynamic Memory Allocation",sections:[{heading:"Introduction",content:"Dynamic memory allocation allows programs to request memory during runtime. Memory is allocated on the heap and must be manually freed."},{heading:"malloc() Function",content:"Allocates specified bytes of memory and returns a pointer to the first byte.",code:`#include <stdlib.h>

// Allocate memory for 5 integers
int *ptr = (int*)malloc(5 * sizeof(int));

if (ptr == NULL) {
    printf("Memory allocation failed\\n");
    return 1;
}

// Use the memory
for (int i = 0; i < 5; i++) {
    ptr[i] = i + 1;
}

// Print values
for (int i = 0; i < 5; i++) {
    printf("%d ", ptr[i]);
}

// Free memory
free(ptr);
ptr = NULL;`},{heading:"calloc() Function",content:"Allocates memory for an array of elements and initializes all bytes to zero.",code:`#include <stdlib.h>

// Allocate memory for 5 integers (initialized to 0)
int *arr = (int*)calloc(5, sizeof(int));

if (arr == NULL) {
    printf("Memory allocation failed\\n");
    return 1;
}

// All elements are 0
for (int i = 0; i < 5; i++) {
    printf("%d ", arr[i]);  // Output: 0 0 0 0 0
}

free(arr);`},{heading:"realloc() Function",content:"Changes the size of previously allocated memory block.",code:`#include <stdlib.h>

// Initially allocate for 5 integers
int *ptr = (int*)malloc(5 * sizeof(int));

for (int i = 0; i < 5; i++) {
    ptr[i] = i + 1;
}

// Resize to hold 10 integers
ptr = (int*)realloc(ptr, 10 * sizeof(int));

if (ptr == NULL) {
    printf("Reallocation failed\\n");
    return 1;
}

// Add more data
for (int i = 5; i < 10; i++) {
    ptr[i] = i + 1;
}

free(ptr);`},{heading:"free() Function",content:"Deallocates previously allocated memory.",code:`int *ptr = (int*)malloc(sizeof(int));
*ptr = 100;

printf("Value: %d\\n", *ptr);

// Free the memory
free(ptr);

// Good practice: set to NULL after freeing
ptr = NULL;`,note:"Always free dynamically allocated memory to prevent memory leaks."},{heading:"Memory Leaks",content:"A memory leak occurs when allocated memory is not freed.",code:`// Memory leak example (BAD)
void badFunction() {
    int *ptr = (int*)malloc(sizeof(int));
    *ptr = 10;
    // Forgot to free - memory leak!
}

// Correct approach (GOOD)
void goodFunction() {
    int *ptr = (int*)malloc(sizeof(int));
    *ptr = 10;
    // Use the memory
    printf("%d\\n", *ptr);
    free(ptr);  // Always free!
}`},{heading:"Dynamic Array Example",code:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    
    // Dynamically allocate array
    int *arr = (int*)malloc(n * sizeof(int));
    
    if (arr == NULL) {
        printf("Memory allocation failed\\n");
        return 1;
    }
    
    // Input elements
    printf("Enter elements:\\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    // Process elements
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }
    
    printf("Sum: %d\\n", sum);
    
    // Free memory
    free(arr);
    
    return 0;
}`},{heading:"Dynamic 2D Array",code:`#include <stdlib.h>

int rows = 3, cols = 4;

// Allocate array of pointers
int **arr = (int**)malloc(rows * sizeof(int*));

// Allocate each row
for (int i = 0; i < rows; i++) {
    arr[i] = (int*)malloc(cols * sizeof(int));
}

// Use the 2D array
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        arr[i][j] = i * cols + j;
        printf("%d ", arr[i][j]);
    }
    printf("\\n");
}

// Free memory
for (int i = 0; i < rows; i++) {
    free(arr[i]);
}
free(arr);`}]},preprocessor:{title:"Preprocessor Directives",sections:[{heading:"Introduction",content:"Preprocessor directives are instructions to the compiler to preprocess the source code before compilation. They begin with # symbol."},{heading:"#include Directive",content:"Used to include header files in the program.",code:`// Include standard library
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Include user-defined header
#include "myheader.h"`,note:'Use <> for standard headers and "" for user-defined headers.'},{heading:"#define Directive",subsections:[{subheading:"Object-like Macros",code:`#define PI 3.14159
#define MAX_SIZE 100
#define GREETING "Hello, World!"

int main() {
    float radius = 5.0;
    float area = PI * radius * radius;
    printf("Area: %.2f\\n", area);
    return 0;
}`},{subheading:"Function-like Macros",code:`#define SQUARE(x) ((x) * (x))
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define IS_EVEN(n) ((n) % 2 == 0)

int main() {
    printf("Square of 5: %d\\n", SQUARE(5));
    printf("Max of 10 and 20: %d\\n", MAX(10, 20));
    printf("Is 4 even? %d\\n", IS_EVEN(4));
    return 0;
}`,note:"Use parentheses in macros to avoid precedence issues."}]},{heading:"#undef Directive",content:"Undefines a previously defined macro.",code:`#define MAX 100
printf("MAX: %d\\n", MAX);

#undef MAX
#define MAX 200
printf("New MAX: %d\\n", MAX);`},{heading:"Conditional Compilation",subsections:[{subheading:"#ifdef, #ifndef, #endif",code:`#define DEBUG

#ifdef DEBUG
    printf("Debug mode is ON\\n");
#endif

#ifndef RELEASE
    printf("Not in release mode\\n");
#endif`},{subheading:"#if, #elif, #else",code:`#define VERSION 2

#if VERSION == 1
    printf("Version 1\\n");
#elif VERSION == 2
    printf("Version 2\\n");
#else
    printf("Unknown version\\n");
#endif`}]},{heading:"Predefined Macros",code:`printf("File: %s\\n", __FILE__);
printf("Line: %d\\n", __LINE__);
printf("Date: %s\\n", __DATE__);
printf("Time: %s\\n", __TIME__);

#ifdef __STDC__
    printf("Standard C\\n");
#endif`},{heading:"Creating Header Files",code:`// mymath.h
#ifndef MYMATH_H
#define MYMATH_H

int add(int a, int b);
int subtract(int a, int b);

#endif

// mymath.c
#include "mymath.h"

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

// main.c
#include <stdio.h>
#include "mymath.h"

int main() {
    printf("Sum: %d\\n", add(10, 5));
    printf("Difference: %d\\n", subtract(10, 5));
    return 0;
}`,note:"Use header guards (#ifndef, #define, #endif) to prevent multiple inclusion."},{heading:"Stringification (#)",code:`#define PRINT_VAR(x) printf(#x " = %d\\n", x)

int age = 25;
PRINT_VAR(age);  // Output: age = 25`},{heading:"Token Pasting (##)",code:`#define CONCAT(a, b) a##b

int xy = 100;
printf("%d\\n", CONCAT(x, y));  // Becomes xy, prints 100`}]},"error-handling":{title:"Error Handling",sections:[{heading:"errno Variable",content:"errno is a global variable that stores error codes when library functions fail.",code:`#include <stdio.h>
#include <errno.h>
#include <string.h>

int main() {
    FILE *fp = fopen("nonexistent.txt", "r");
    
    if (fp == NULL) {
        printf("Error number: %d\\n", errno);
        printf("Error: %s\\n", strerror(errno));
    }
    
    return 0;
}`},{heading:"perror() Function",content:"Prints a descriptive error message to stderr based on errno.",code:`#include <stdio.h>
#include <errno.h>

FILE *fp = fopen("test.txt", "r");

if (fp == NULL) {
    perror("Error opening file");
    // Output: Error opening file: No such file or directory
}`},{heading:"strerror() Function",content:"Returns a pointer to the error message string corresponding to errno.",code:`#include <string.h>
#include <errno.h>

FILE *fp = fopen("data.txt", "r");

if (fp == NULL) {
    printf("Error: %s\\n", strerror(errno));
}`},{heading:"Custom Error Handling",code:`#include <stdio.h>
#include <stdlib.h>

enum ErrorCode {
    SUCCESS = 0,
    ERROR_FILE_NOT_FOUND = 1,
    ERROR_INVALID_INPUT = 2,
    ERROR_MEMORY_ALLOCATION = 3
};

int divide(int a, int b, int *result) {
    if (b == 0) {
        return ERROR_INVALID_INPUT;
    }
    *result = a / b;
    return SUCCESS;
}

int main() {
    int result;
    int status = divide(10, 0, &result);
    
    if (status == SUCCESS) {
        printf("Result: %d\\n", result);
    } else {
        printf("Error: Division by zero\\n");
    }
    
    return 0;
}`},{heading:"Error Handling Best Practices",points:["Always check return values of functions","Use meaningful error codes","Provide descriptive error messages","Clean up resources (close files, free memory) on error","Log errors for debugging","Handle errors at appropriate level"],code:`#include <stdio.h>
#include <stdlib.h>

int* createArray(int size) {
    if (size <= 0) {
        fprintf(stderr, "Error: Invalid array size\\n");
        return NULL;
    }
    
    int *arr = (int*)malloc(size * sizeof(int));
    
    if (arr == NULL) {
        fprintf(stderr, "Error: Memory allocation failed\\n");
        return NULL;
    }
    
    return arr;
}

int main() {
    int *myArray = createArray(10);
    
    if (myArray == NULL) {
        return 1;  // Exit with error
    }
    
    // Use array
    for (int i = 0; i < 10; i++) {
        myArray[i] = i;
    }
    
    // Clean up
    free(myArray);
    
    return 0;  // Success
}`},{heading:"assert() Macro",content:"Used for debugging, terminates program if condition is false.",code:`#include <assert.h>

void processArray(int *arr, int size) {
    assert(arr != NULL);  // Ensure array is not NULL
    assert(size > 0);     // Ensure size is positive
    
    for (int i = 0; i < size; i++) {
        // Process array
    }
}`,note:"assert() is disabled when compiled with -DNDEBUG flag."}]},"command-line":{title:"Command Line Arguments",sections:[{heading:"Introduction",content:"Command line arguments allow passing information to a program when it starts."},{heading:"argc and argv",points:["argc: Argument count (number of arguments)","argv: Argument vector (array of string pointers)","argv[0]: Program name","argv[1] to argv[argc-1]: Actual arguments"],code:`#include <stdio.h>

int main(int argc, char *argv[]) {
    printf("Number of arguments: %d\\n", argc);
    
    printf("Arguments:\\n");
    for (int i = 0; i < argc; i++) {
        printf("argv[%d]: %s\\n", i, argv[i]);
    }
    
    return 0;
}

// Run: ./program hello world
// Output:
// Number of arguments: 3
// argv[0]: ./program
// argv[1]: hello
// argv[2]: world`},{heading:"Processing Arguments",code:`#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    if (argc != 3) {
        printf("Usage: %s <num1> <num2>\\n", argv[0]);
        return 1;
    }
    
    int num1 = atoi(argv[1]);
    int num2 = atoi(argv[2]);
    
    printf("Sum: %d\\n", num1 + num2);
    
    return 0;
}

// Run: ./program 10 20
// Output: Sum: 30`}]},"bit-manipulation":{title:"Bit Manipulation",sections:[{heading:"Bitwise Operators",points:["& (AND): Sets bit to 1 if both bits are 1","| (OR): Sets bit to 1 if at least one bit is 1","^ (XOR): Sets bit to 1 if bits are different","~ (NOT): Inverts all bits","<< (Left shift): Shifts bits left",">> (Right shift): Shifts bits right"]},{heading:"Common Bit Operations",code:`// Check if bit is set
int checkBit(int num, int pos) {
    return (num & (1 << pos)) != 0;
}

// Set a bit
int setBit(int num, int pos) {
    return num | (1 << pos);
}

// Clear a bit
int clearBit(int num, int pos) {
    return num & ~(1 << pos);
}

// Toggle a bit
int toggleBit(int num, int pos) {
    return num ^ (1 << pos);
}`},{heading:"Practical Applications",code:`// Check if power of 2
int isPowerOfTwo(int n) {
    return (n > 0) && ((n & (n - 1)) == 0);
}

// Count set bits
int countSetBits(int n) {
    int count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}

// Swap without temp
void swap(int *a, int *b) {
    *a = *a ^ *b;
    *b = *a ^ *b;
    *a = *a ^ *b;
}`}]},"storage-classes":{title:"Storage Classes",sections:[{heading:"Introduction",content:"Storage classes define the scope and lifetime of variables.",points:["auto: Default for local variables","register: CPU register storage","static: Preserves value between calls","extern: Global variable from another file"]},{heading:"static Storage Class",code:`void counter() {
    static int count = 0;  // Initialized once
    count++;
    printf("Count: %d\\n", count);
}

int main() {
    counter();  // Count: 1
    counter();  // Count: 2
    counter();  // Count: 3
    return 0;
}`},{heading:"extern Storage Class",code:`// global.c
int globalVariable = 100;

// main.c
extern int globalVariable;

int main() {
    printf("Value: %d\\n", globalVariable);
    return 0;
}`}]},"low-level":{title:"Low-Level Concepts",sections:[{heading:"Memory Layout",points:["Text Segment: Executable code","Data Segment: Initialized globals","BSS Segment: Uninitialized globals","Heap: Dynamic allocation","Stack: Local variables"]},{heading:"Stack vs Heap",code:`void example() {
    int stack_var = 10;  // Stack
    
    int* heap_var = (int*)malloc(sizeof(int));  // Heap
    *heap_var = 20;
    
    free(heap_var);
}`},{heading:"volatile Keyword",content:"Prevents compiler optimization for variables that may change unexpectedly.",code:`volatile int* hardwareReg = (int*)0x40000000;

int value = *hardwareReg;  // Always reads from memory`}]},"cpp-data-types":{title:"C++ Data Types & Variables",sections:[{heading:"Built-in Data Types",code:`int num = 10;
double pi = 3.14159;
char grade = 'A';
bool isValid = true;
string name = "Alice";`,language:"cpp"},{heading:"auto Keyword",code:`auto x = 5;        // int
auto y = 3.14;     // double
auto z = "Hello";  // const char*`,language:"cpp"},{heading:"Constants",code:`const int MAX = 100;
constexpr double PI = 3.14159;`,language:"cpp"}]},"cpp-control":{title:"C++ Control Structures",sections:[{heading:"Range-based For Loop",code:`#include <vector>
using namespace std;

vector<int> v = {1, 2, 3, 4, 5};

for (int x : v) {
    cout << x << " ";
}`,language:"cpp"},{heading:"if, switch, and loops",code:`// if-else
if (x > 0) {
    cout << "Positive" << endl;
} else {
    cout << "Non-positive" << endl;
}

// switch
switch (day) {
    case 1:
        cout << "Monday" << endl;
        break;
    default:
        cout << "Other day" << endl;
}

// while loop
while (i < 10) {
    cout << i << " ";
    i++;
}`,language:"cpp"}]},"const-correctness":{title:"const Correctness",sections:[{heading:"const Variables",code:`const int MAX = 100;
// MAX = 200;  // Error`,language:"cpp"},{heading:"const Member Functions",code:`class MyClass {
private:
    int value;
    
public:
    int getValue() const {
        // Cannot modify member variables
        return value;
    }
};`,language:"cpp"},{heading:"const Pointers",code:`const int* ptr1;     // Pointer to const int
int* const ptr2;     // Const pointer to int
const int* const ptr3;  // Const pointer to const int`,language:"cpp"}]},"cpp-file-handling":{title:"C++ File Handling",sections:[{heading:"File Streams",code:`#include <fstream>
using namespace std;

// Writing to file
ofstream outFile("output.txt");
outFile << "Hello, World!" << endl;
outFile.close();

// Reading from file
ifstream inFile("input.txt");
string line;
while (getline(inFile, line)) {
    cout << line << endl;
}
inFile.close();`,language:"cpp"},{heading:"Binary File Handling",code:`struct Student {
    int rollNo;
    char name[50];
    float marks;
};

// Write binary
ofstream outFile("data.dat", ios::binary);
Student s1 = {101, "Alice", 85.5};
outFile.write((char*)&s1, sizeof(Student));
outFile.close();

// Read binary
ifstream inFile("data.dat", ios::binary);
Student s2;
inFile.read((char*)&s2, sizeof(Student));
inFile.close();`,language:"cpp"}]},multithreading:{title:"Multithreading",sections:[{heading:"Creating Threads",code:`#include <thread>
#include <iostream>
using namespace std;

void printNumbers() {
    for (int i = 0; i < 5; i++) {
        cout << i << " ";
    }
}

int main() {
    thread t1(printNumbers);
    thread t2(printNumbers);
    
    t1.join();
    t2.join();
    
    return 0;
}`,language:"cpp"},{heading:"Mutex for Synchronization",code:`#include <mutex>
using namespace std;

mutex mtx;
int counter = 0;

void increment() {
    mtx.lock();
    counter++;
    mtx.unlock();
}`,language:"cpp"}]},performance:{title:"Performance & Memory",sections:[{heading:"RAII Principle",content:"Resource Acquisition Is Initialization - resources are tied to object lifetime.",code:`class File {
private:
    FILE* fp;
    
public:
    File(const char* filename) {
        fp = fopen(filename, "r");
    }
    
    ~File() {
        if (fp) fclose(fp);
    }
};`,language:"cpp"}]},"design-patterns":{title:"Design Patterns",sections:[{heading:"Singleton Pattern",code:`class Singleton {
private:
    static Singleton* instance;
    Singleton() {}
    
public:
    static Singleton* getInstance() {
        if (!instance) {
            instance = new Singleton();
        }
        return instance;
    }
};`,language:"cpp"},{heading:"Factory Pattern",code:`class Shape {
public:
    virtual void draw() = 0;
};

class Circle : public Shape {
public:
    void draw() override {
        cout << "Circle" << endl;
    }
};

class ShapeFactory {
public:
    static Shape* createShape(string type) {
        if (type == "circle") {
            return new Circle();
        }
        return nullptr;
    }
};`,language:"cpp"}]},"competitive-programming":{title:"Competitive Programming",sections:[{heading:"Fast I/O",code:`ios_base::sync_with_stdio(false);
cin.tie(NULL);`,language:"cpp"},{heading:"Time Complexity",points:["O(1): Constant time","O(log n): Logarithmic","O(n): Linear","O(n log n): Linearithmic","O(n²): Quadratic","O(2ⁿ): Exponential"]},{heading:"STL Tricks",code:`// Sorting in descending order
sort(v.begin(), v.end(), greater<int>());

// Binary search
auto it = lower_bound(v.begin(), v.end(), value);

// Unique elements
sort(v.begin(), v.end());
v.erase(unique(v.begin(), v.end()), v.end());`,language:"cpp"}]},"best-practices":{title:"C++ Best Practices",sections:[{heading:"Coding Standards",points:["Use meaningful variable names","Follow consistent naming conventions","Write comments for complex logic","Keep functions small and focused","Use const correctness","Prefer stack allocation over heap"]},{heading:"Memory Management",points:["Use smart pointers instead of raw pointers","Follow RAII principle","Avoid memory leaks","Delete what you allocate","Use containers instead of manual arrays"]},{heading:"Modern C++ Features",code:`// Use auto
auto result = calculateValue();

// Use range-based loops
for (const auto& item : collection) {
    // Process item
}

// Use smart pointers
unique_ptr<MyClass> ptr = make_unique<MyClass>();

// Use lambdas
auto func = [](int x) { return x * 2; };`,language:"cpp"}]}},ff={inheritance:{title:"Inheritance",sections:[{heading:"Introduction to Inheritance",content:"Inheritance allows a class to inherit properties and methods from another class."},{heading:"Single Inheritance",code:`#include <iostream>
using namespace std;

// Base class
class Animal {
public:
    void eat() {
        cout << "Eating..." << endl;
    }
};

// Derived class
class Dog : public Animal {
public:
    void bark() {
        cout << "Barking..." << endl;
    }
};

int main() {
    Dog d;
    d.eat();   // Inherited from Animal
    d.bark();  // Own method
    return 0;
}`,language:"cpp"},{heading:"Multiple Inheritance",code:`#include <iostream>
using namespace std;

class Father {
public:
    void showFather() {
        cout << "Father class" << endl;
    }
};

class Mother {
public:
    void showMother() {
        cout << "Mother class" << endl;
    }
};

class Child : public Father, public Mother {
public:
    void showChild() {
        cout << "Child class" << endl;
    }
};

int main() {
    Child c;
    c.showFather();
    c.showMother();
    c.showChild();
    return 0;
}`,language:"cpp"},{heading:"Multilevel Inheritance",code:`class GrandParent {
public:
    void show1() {
        cout << "GrandParent" << endl;
    }
};

class Parent : public GrandParent {
public:
    void show2() {
        cout << "Parent" << endl;
    }
};

class Child : public Parent {
public:
    void show3() {
        cout << "Child" << endl;
    }
};`,language:"cpp"},{heading:"Hierarchical Inheritance",code:`class Animal {
public:
    void eat() {
        cout << "Eating..." << endl;
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Barking..." << endl;
    }
};

class Cat : public Animal {
public:
    void meow() {
        cout << "Meowing..." << endl;
    }
};`,language:"cpp"},{heading:"Virtual Base Classes",content:"Solves the diamond problem in multiple inheritance.",code:`class Base {
public:
    int value;
};

class Derived1 : virtual public Base {
};

class Derived2 : virtual public Base {
};

class Final : public Derived1, public Derived2 {
    // Only one copy of Base
};`,language:"cpp"}]},polymorphism:{title:"Polymorphism",sections:[{heading:"Function Overloading",code:`#include <iostream>
using namespace std;

class Calculator {
public:
    int add(int a, int b) {
        return a + b;
    }
    
    double add(double a, double b) {
        return a + b;
    }
    
    int add(int a, int b, int c) {
        return a + b + c;
    }
};

int main() {
    Calculator calc;
    cout << calc.add(5, 3) << endl;
    cout << calc.add(5.5, 3.2) << endl;
    cout << calc.add(1, 2, 3) << endl;
    return 0;
}`,language:"cpp"},{heading:"Operator Overloading",code:`#include <iostream>
using namespace std;

class Complex {
private:
    float real, imag;
    
public:
    Complex(float r = 0, float i = 0) {
        real = r;
        imag = i;
    }
    
    // Overload + operator
    Complex operator + (const Complex& obj) {
        Complex temp;
        temp.real = real + obj.real;
        temp.imag = imag + obj.imag;
        return temp;
    }
    
    void display() {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    Complex c1(3.5, 2.5), c2(1.5, 4.5);
    Complex c3 = c1 + c2;  // Using overloaded operator
    c3.display();  // 5 + 7i
    return 0;
}`,language:"cpp"},{heading:"Virtual Functions",content:"Enable runtime polymorphism through function overriding.",code:`#include <iostream>
using namespace std;

class Shape {
public:
    virtual void draw() {
        cout << "Drawing Shape" << endl;
    }
};

class Circle : public Shape {
public:
    void draw() override {
        cout << "Drawing Circle" << endl;
    }
};

class Rectangle : public Shape {
public:
    void draw() override {
        cout << "Drawing Rectangle" << endl;
    }
};

int main() {
    Shape* shape;
    Circle circle;
    Rectangle rectangle;
    
    shape = &circle;
    shape->draw();  // Drawing Circle
    
    shape = &rectangle;
    shape->draw();  // Drawing Rectangle
    
    return 0;
}`,language:"cpp"},{heading:"Pure Virtual Functions and Abstract Classes",code:`class AbstractShape {
public:
    virtual void draw() = 0;  // Pure virtual function
    virtual double area() = 0;
};

class Circle : public AbstractShape {
private:
    double radius;
    
public:
    Circle(double r) : radius(r) {}
    
    void draw() override {
        cout << "Drawing Circle" << endl;
    }
    
    double area() override {
        return 3.14159 * radius * radius;
    }
};`,language:"cpp"},{heading:"Virtual Destructor",code:`class Base {
public:
    Base() {
        cout << "Base Constructor" << endl;
    }
    
    virtual ~Base() {
        cout << "Base Destructor" << endl;
    }
};

class Derived : public Base {
public:
    Derived() {
        cout << "Derived Constructor" << endl;
    }
    
    ~Derived() {
        cout << "Derived Destructor" << endl;
    }
};

int main() {
    Base* ptr = new Derived();
    delete ptr;  // Calls both destructors
    return 0;
}`,language:"cpp"}]},"cpp-pointers":{title:"Pointers & References",sections:[{heading:"Pointers in C++",code:`int num = 10;
int* ptr = &num;

cout << "Value: " << *ptr << endl;
cout << "Address: " << ptr << endl;`,language:"cpp"},{heading:"References",code:`int x = 5;
int& ref = x;  // Reference must be initialized

ref = 10;  // Changes x to 10
cout << x << endl;  // 10`,language:"cpp"},{heading:"Pass by Reference",code:`void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 10, y = 20;
    swap(x, y);
    cout << "x: " << x << ", y: " << y << endl;
    return 0;
}`,language:"cpp"},{heading:"new and delete Operators",code:`// Allocate single variable
int* ptr = new int;
*ptr = 10;
delete ptr;

// Allocate array
int* arr = new int[5];
for (int i = 0; i < 5; i++) {
    arr[i] = i + 1;
}
delete[] arr;`,language:"cpp"},{heading:"Shallow vs Deep Copy",code:`class Array {
private:
    int* data;
    int size;
    
public:
    // Constructor
    Array(int s) : size(s) {
        data = new int[size];
    }
    
    // Deep copy constructor
    Array(const Array& other) : size(other.size) {
        data = new int[size];
        for (int i = 0; i < size; i++) {
            data[i] = other.data[i];
        }
    }
    
    // Deep copy assignment operator
    Array& operator=(const Array& other) {
        if (this != &other) {
            delete[] data;
            size = other.size;
            data = new int[size];
            for (int i = 0; i < size; i++) {
                data[i] = other.data[i];
            }
        }
        return *this;
    }
    
    ~Destructor() {
        delete[] data;
    }
};`,language:"cpp"}]},"stl-overview":{title:"STL Overview",sections:[{heading:"Vector",code:`#include <vector>
#include <iostream>
using namespace std;

int main() {
    vector<int> v = {1, 2, 3, 4, 5};
    
    v.push_back(6);  // Add element
    v.pop_back();    // Remove last element
    
    cout << "Size: " << v.size() << endl;
    cout << "Front: " << v.front() << endl;
    cout << "Back: " << v.back() << endl;
    
    for (int x : v) {
        cout << x << " ";
    }
    
    return 0;
}`,language:"cpp"},{heading:"List",code:`#include <list>
using namespace std;

list<int> l = {1, 2, 3, 4, 5};

l.push_front(0);  // Add to front
l.push_back(6);   // Add to back
l.pop_front();    // Remove from front
l.pop_back();     // Remove from back

for (int x : l) {
    cout << x << " ";
}`,language:"cpp"},{heading:"Map",code:`#include <map>
using namespace std;

map<string, int> m;

m["Alice"] = 25;
m["Bob"] = 30;
m["Charlie"] = 35;

cout << m["Alice"] << endl;  // 25

for (auto pair : m) {
    cout << pair.first << ": " << pair.second << endl;
}`,language:"cpp"},{heading:"Set",code:`#include <set>
using namespace std;

set<int> s = {3, 1, 4, 1, 5, 9};  // Duplicates removed, sorted

s.insert(6);
s.erase(1);

for (int x : s) {
    cout << x << " ";  // 3 4 5 6 9
}`,language:"cpp"},{heading:"Algorithms",code:`#include <algorithm>
#include <vector>
using namespace std;

vector<int> v = {5, 2, 8, 1, 9};

// Sort
sort(v.begin(), v.end());

// Find
auto it = find(v.begin(), v.end(), 8);
if (it != v.end()) {
    cout << "Found at position: " << distance(v.begin(), it) << endl;
}

// Count
int count = count(v.begin(), v.end(), 5);

// Binary search
bool found = binary_search(v.begin(), v.end(), 8);`,language:"cpp"}]},"exception-handling":{title:"Exception Handling",sections:[{heading:"try-catch Block",code:`#include <iostream>
using namespace std;

int main() {
    try {
        int age;
        cout << "Enter age: ";
        cin >> age;
        
        if (age < 0) {
            throw "Age cannot be negative";
        }
        
        cout << "Age: " << age << endl;
    }
    catch (const char* msg) {
        cout << "Error: " << msg << endl;
    }
    
    return 0;
}`,language:"cpp"},{heading:"Multiple Catch Blocks",code:`try {
    // Code that may throw exceptions
}
catch (int e) {
    cout << "Integer exception: " << e << endl;
}
catch (const char* e) {
    cout << "String exception: " << e << endl;
}
catch (...) {
    cout << "Unknown exception" << endl;
}`,language:"cpp"},{heading:"Custom Exceptions",code:`#include <exception>
using namespace std;

class MyException : public exception {
public:
    const char* what() const throw() {
        return "My custom exception occurred";
    }
};

int main() {
    try {
        throw MyException();
    }
    catch (MyException& e) {
        cout << e.what() << endl;
    }
    return 0;
}`,language:"cpp"},{heading:"Standard Exceptions",code:`#include <stdexcept>
using namespace std;

try {
    throw runtime_error("Runtime error occurred");
}
catch (runtime_error& e) {
    cout << e.what() << endl;
}

// Other standard exceptions:
// logic_error, out_of_range, invalid_argument,
// overflow_error, underflow_error`,language:"cpp"}]},templates:{title:"Templates",sections:[{heading:"Function Templates",code:`#include <iostream>
using namespace std;

template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << maximum(10, 20) << endl;      // int
    cout << maximum(10.5, 20.3) << endl;  // double
    cout << maximum('a', 'z') << endl;    // char
    return 0;
}`,language:"cpp"},{heading:"Class Templates",code:`template <typename T>
class Array {
private:
    T* data;
    int size;
    
public:
    Array(int s) : size(s) {
        data = new T[size];
    }
    
    void set(int index, T value) {
        data[index] = value;
    }
    
    T get(int index) {
        return data[index];
    }
    
    ~Array() {
        delete[] data;
    }
};

int main() {
    Array<int> intArr(5);
    Array<double> doubleArr(5);
    
    intArr.set(0, 10);
    cout << intArr.get(0) << endl;
    
    return 0;
}`,language:"cpp"},{heading:"Template Specialization",code:`template <typename T>
class MyClass {
public:
    void display() {
        cout << "General template" << endl;
    }
};

// Specialization for int
template <>
class MyClass<int> {
public:
    void display() {
        cout << "Specialized for int" << endl;
    }
};`,language:"cpp"}]},"modern-cpp":{title:"Modern C++ Features",sections:[{heading:"auto Keyword",code:`auto x = 5;           // int
auto y = 3.14;        // double
auto z = "Hello";     // const char*

vector<int> v = {1, 2, 3};
auto it = v.begin();  // vector<int>::iterator`,language:"cpp"},{heading:"nullptr",code:`int* ptr = nullptr;  // Better than NULL

if (ptr == nullptr) {
    cout << "Pointer is null" << endl;
}`,language:"cpp"},{heading:"Range-based For Loop",code:`vector<int> v = {1, 2, 3, 4, 5};

for (int x : v) {
    cout << x << " ";
}

// With reference
for (int& x : v) {
    x *= 2;  // Modify elements
}`,language:"cpp"},{heading:"Smart Pointers",subsections:[{subheading:"unique_ptr",code:`#include <memory>
using namespace std;

unique_ptr<int> ptr(new int(10));
cout << *ptr << endl;

// Transfer ownership
unique_ptr<int> ptr2 = move(ptr);`},{subheading:"shared_ptr",code:`shared_ptr<int> ptr1(new int(10));
shared_ptr<int> ptr2 = ptr1;  // Shared ownership

cout << ptr1.use_count() << endl;  // 2`},{subheading:"weak_ptr",code:`shared_ptr<int> sptr(new int(10));
weak_ptr<int> wptr = sptr;

if (auto locked = wptr.lock()) {
    cout << *locked << endl;
}`}],language:"cpp"},{heading:"Lambda Expressions",code:`auto add = [](int a, int b) {
    return a + b;
};

cout << add(5, 3) << endl;  // 8

// With capture
int x = 10;
auto addX = [x](int a) {
    return a + x;
};

cout << addX(5) << endl;  // 15`,language:"cpp"}]}},pf={"intro-c":{title:"Introduction to C",sections:[{heading:"History of C",content:"C was developed by Dennis Ritchie at Bell Labs between 1972-1973. It was created to develop the UNIX operating system. C is considered a middle-level language as it combines features of both high-level and low-level languages."},{heading:"Features of C",points:["Simple and Efficient: C has a small set of keywords and is easy to learn","Portable: Programs written in C can run on different machines with little or no modification","Fast: C programs are compiled and execute quickly","Structured: Supports structured programming with functions","Rich Library: Provides many built-in functions","Low-level Access: Can manipulate bits, bytes, and memory addresses"]},{heading:"Applications of C",points:["Operating Systems (UNIX, Linux, Windows)","Embedded Systems","System Software","Database Systems","Compilers and Interpreters","Network Drivers"]},{heading:"Structure of a C Program",content:"A basic C program consists of preprocessor directives, main function, variable declarations, and statements.",code:`#include <stdio.h>

int main() {
    // Variable declaration
    int num = 10;
    
    // Print statement
    printf("Hello, World!\\n");
    printf("Number: %d\\n", num);
    
    return 0;
}`,language:"c"},{heading:"Compilation Process",content:"The C compilation process involves four stages:",points:["Preprocessing: Handles directives like #include, #define","Compilation: Converts source code to assembly code","Assembly: Converts assembly code to object code","Linking: Links object files and libraries to create executable"],note:"Use gcc compiler: gcc program.c -o program"},{heading:"C Standards",points:["C89/C90 (ANSI C): First standardized version","C99: Added inline functions, variable-length arrays, new data types","C11: Added multi-threading support, improved Unicode support","C17/C18: Bug fixes and clarifications to C11"]}]},"data-types":{title:"Data Types & Variables",sections:[{heading:"Keywords & Identifiers",content:"Keywords are reserved words in C that have special meaning. Identifiers are names given to variables, functions, and other user-defined items.",points:["Keywords: int, float, if, else, while, for, return, etc.","Identifiers: Must start with letter or underscore, can contain letters, digits, and underscores","C has 32 keywords that cannot be used as identifiers"]},{heading:"Basic Data Types",subsections:[{subheading:"int (Integer)",content:"Used to store whole numbers. Size: typically 4 bytes (32 bits)",code:`int age = 25;
int marks = 95;
printf("Age: %d, Marks: %d\\n", age, marks);`},{subheading:"float (Floating Point)",content:"Used to store decimal numbers. Size: 4 bytes, precision: 6 decimal places",code:`float price = 99.99;
float pi = 3.14159;
printf("Price: %.2f, Pi: %.5f\\n", price, pi);`},{subheading:"double",content:"Used to store double precision floating point numbers. Size: 8 bytes, precision: 15 decimal places",code:`double distance = 384400.5;
printf("Distance: %.2lf km\\n", distance);`},{subheading:"char (Character)",content:"Used to store single characters. Size: 1 byte",code:`char grade = 'A';
char initial = 'J';
printf("Grade: %c, Initial: %c\\n", grade, initial);`}]},{heading:"Data Type Modifiers",content:"Modifiers change the meaning of base data types to fit various situations.",code:`// Signed and Unsigned
signed int num1 = -100;      // Can store negative values
unsigned int num2 = 100;     // Only positive values

// Short and Long
short int small = 32000;     // 2 bytes
long int big = 2147483647;   // 4 or 8 bytes
long long huge = 9223372036854775807LL;  // 8 bytes

// Size examples
printf("Size of int: %zu bytes\\n", sizeof(int));
printf("Size of short: %zu bytes\\n", sizeof(short));
printf("Size of long: %zu bytes\\n", sizeof(long));`},{heading:"Constants & Literals",subsections:[{subheading:"Constants using const",code:`const int MAX_SIZE = 100;
const float PI = 3.14159;
// MAX_SIZE = 200;  // Error: cannot modify const`},{subheading:"Using #define",code:`#define MAX_VALUE 1000
#define GREETING "Hello"

int main() {
    printf("%s, Max value: %d\\n", GREETING, MAX_VALUE);
    return 0;
}`},{subheading:"Types of Literals",code:`// Integer literals
int decimal = 100;
int octal = 0144;      // Prefix with 0
int hex = 0x64;        // Prefix with 0x

// Floating point literals
float f1 = 3.14;
float f2 = 3.14e2;     // Scientific notation: 314.0

// Character literals
char c1 = 'A';
char c2 = '\\n';       // Escape sequence

// String literals
char str[] = "Hello, World!";`}]},{heading:"Type Conversion & Casting",subsections:[{subheading:"Implicit Conversion",content:"Automatic conversion by compiler from lower to higher data type.",code:`int x = 10;
float y = 5.5;
float result = x + y;  // x is converted to float
printf("Result: %.2f\\n", result);`},{subheading:"Explicit Casting",content:"Manual conversion using cast operator.",code:`float f = 9.7;
int i = (int)f;  // Explicit cast: i = 9

int a = 10, b = 3;
float division = (float)a / b;  // Result: 3.333333
printf("Division: %.2f\\n", division);`}]},{heading:"sizeof Operator",content:"Returns the size of a data type or variable in bytes.",code:`printf("Size of char: %zu byte\\n", sizeof(char));
printf("Size of int: %zu bytes\\n", sizeof(int));
printf("Size of float: %zu bytes\\n", sizeof(float));
printf("Size of double: %zu bytes\\n", sizeof(double));

int arr[10];
printf("Size of array: %zu bytes\\n", sizeof(arr));`}]},operators:{title:"Operators",sections:[{heading:"Arithmetic Operators",content:"Used to perform basic mathematical operations.",code:`int a = 10, b = 3;

printf("Addition: %d + %d = %d\\n", a, b, a + b);      // 13
printf("Subtraction: %d - %d = %d\\n", a, b, a - b);   // 7
printf("Multiplication: %d * %d = %d\\n", a, b, a * b); // 30
printf("Division: %d / %d = %d\\n", a, b, a / b);      // 3
printf("Modulus: %d %% %d = %d\\n", a, b, a % b);      // 1`},{heading:"Relational Operators",content:"Used to compare two values. Returns 1 (true) or 0 (false).",code:`int x = 10, y = 20;

printf("x == y: %d\\n", x == y);  // Equal to: 0
printf("x != y: %d\\n", x != y);  // Not equal to: 1
printf("x > y: %d\\n", x > y);    // Greater than: 0
printf("x < y: %d\\n", x < y);    // Less than: 1
printf("x >= y: %d\\n", x >= y);  // Greater than or equal: 0
printf("x <= y: %d\\n", x <= y);  // Less than or equal: 1`},{heading:"Logical Operators",content:"Used to combine conditional statements.",code:`int a = 1, b = 0;

printf("a && b: %d\\n", a && b);  // Logical AND: 0
printf("a || b: %d\\n", a || b);  // Logical OR: 1
printf("!a: %d\\n", !a);          // Logical NOT: 0

// Example with conditions
int age = 25;
if (age >= 18 && age <= 60) {
    printf("Eligible for work\\n");
}`},{heading:"Assignment Operators",code:`int x = 10;

x += 5;   // x = x + 5; x becomes 15
x -= 3;   // x = x - 3; x becomes 12
x *= 2;   // x = x * 2; x becomes 24
x /= 4;   // x = x / 4; x becomes 6
x %= 4;   // x = x % 4; x becomes 2

printf("Final value of x: %d\\n", x);`},{heading:"Increment & Decrement Operators",subsections:[{subheading:"Post-increment and Post-decrement",code:`int a = 5;
printf("a = %d\\n", a);       // 5
printf("a++ = %d\\n", a++);   // 5 (use then increment)
printf("a = %d\\n", a);       // 6`},{subheading:"Pre-increment and Pre-decrement",code:`int b = 5;
printf("b = %d\\n", b);       // 5
printf("++b = %d\\n", ++b);   // 6 (increment then use)
printf("b = %d\\n", b);       // 6`}]},{heading:"Bitwise Operators",content:"Operate on bits and perform bit-by-bit operations.",code:`int a = 5;   // Binary: 0101
int b = 3;   // Binary: 0011

printf("a & b = %d\\n", a & b);   // AND: 1 (0001)
printf("a | b = %d\\n", a | b);   // OR: 7 (0111)
printf("a ^ b = %d\\n", a ^ b);   // XOR: 6 (0110)
printf("~a = %d\\n", ~a);         // NOT: -6
printf("a << 1 = %d\\n", a << 1); // Left shift: 10 (1010)
printf("a >> 1 = %d\\n", a >> 1); // Right shift: 2 (0010)`},{heading:"Ternary Operator",content:"A shorthand for if-else statement. Syntax: condition ? expression1 : expression2",code:`int a = 10, b = 20;
int max = (a > b) ? a : b;
printf("Maximum: %d\\n", max);

// Multiple ternary operators
int num = 0;
char* result = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
printf("Number is %s\\n", result);`},{heading:"Operator Precedence & Associativity",content:"Determines the order in which operators are evaluated in an expression.",code:`int result = 10 + 20 * 3;  // Multiplication first: 70

// Use parentheses to change precedence
int result2 = (10 + 20) * 3;  // Addition first: 90

// Precedence order (highest to lowest):
// 1. () [] -> .
// 2. ! ~ ++ -- + - * & (unary) sizeof
// 3. * / %
// 4. + -
// 5. << >>
// 6. < <= > >=
// 7. == !=
// 8. &
// 9. ^
// 10. |
// 11. &&
// 12. ||
// 13. ?:
// 14. = += -= *= /= etc.`,note:"When in doubt, use parentheses to make your intention clear."}]},"control-statements":{title:"Control Statements",sections:[{heading:"if Statement",content:"Executes a block of code if a specified condition is true.",code:`int age = 18;

if (age >= 18) {
    printf("You are eligible to vote\\n");
}`},{heading:"if-else Statement",code:`int number = -5;

if (number >= 0) {
    printf("Number is positive\\n");
} else {
    printf("Number is negative\\n");
}`},{heading:"Nested if-else",code:`int marks = 85;

if (marks >= 90) {
    printf("Grade: A+\\n");
} else if (marks >= 80) {
    printf("Grade: A\\n");
} else if (marks >= 70) {
    printf("Grade: B\\n");
} else if (marks >= 60) {
    printf("Grade: C\\n");
} else {
    printf("Grade: F\\n");
}`},{heading:"switch Statement",content:"Allows a variable to be tested for equality against a list of values.",code:`int day = 3;

switch (day) {
    case 1:
        printf("Monday\\n");
        break;
    case 2:
        printf("Tuesday\\n");
        break;
    case 3:
        printf("Wednesday\\n");
        break;
    case 4:
        printf("Thursday\\n");
        break;
    case 5:
        printf("Friday\\n");
        break;
    case 6:
        printf("Saturday\\n");
        break;
    case 7:
        printf("Sunday\\n");
        break;
    default:
        printf("Invalid day\\n");
}`,note:"Always use break to prevent fall-through unless intentional."},{heading:"while Loop",content:"Repeats a block of code as long as the condition is true.",code:`int i = 1;

while (i <= 5) {
    printf("%d ", i);
    i++;
}
// Output: 1 2 3 4 5`},{heading:"do-while Loop",content:"Executes the code block once before checking the condition.",code:`int i = 1;

do {
    printf("%d ", i);
    i++;
} while (i <= 5);
// Output: 1 2 3 4 5

// Example: Menu-driven program
int choice;
do {
    printf("\\n1. Add\\n2. Subtract\\n3. Exit\\n");
    printf("Enter choice: ");
    scanf("%d", &choice);
    
    if (choice != 3) {
        printf("Processing...\\n");
    }
} while (choice != 3);`},{heading:"for Loop",content:"Used when the number of iterations is known.",code:`// Basic for loop
for (int i = 1; i <= 5; i++) {
    printf("%d ", i);
}
// Output: 1 2 3 4 5

// Nested for loop - multiplication table
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        printf("%d * %d = %d\\n", i, j, i * j);
    }
}`},{heading:"break Statement",content:"Terminates the loop or switch statement immediately.",code:`// Finding first even number
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        printf("First even number: %d\\n", i);
        break;  // Exit loop
    }
}`},{heading:"continue Statement",content:"Skips the current iteration and continues with the next iteration.",code:`// Print only odd numbers
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;  // Skip even numbers
    }
    printf("%d ", i);
}
// Output: 1 3 5 7 9`},{heading:"goto Statement",content:"Transfers control to a labeled statement. Generally discouraged.",code:`int num = 10;

if (num < 0) {
    goto error;
}

printf("Number is valid\\n");
goto end;

error:
    printf("Error: Number is negative\\n");

end:
    printf("Program finished\\n");`,note:"Use goto sparingly. It can make code difficult to read and maintain."}]},functions:{title:"Functions",sections:[{heading:"Function Basics",content:"A function is a block of code that performs a specific task. Functions help in code reusability and organization.",code:`// Function declaration (prototype)
int add(int a, int b);

int main() {
    int result = add(10, 20);
    printf("Sum: %d\\n", result);
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}`},{heading:"Function Components",points:["Return Type: Data type of value returned (int, float, void, etc.)","Function Name: Identifier for the function","Parameters: Input values (optional)","Function Body: Block of code to execute","Return Statement: Sends value back to caller (optional for void)"]},{heading:"Types of Functions",subsections:[{subheading:"Function with no arguments and no return value",code:`void greet() {
    printf("Hello, World!\\n");
}

int main() {
    greet();
    return 0;
}`},{subheading:"Function with arguments but no return value",code:`void printSum(int a, int b) {
    printf("Sum: %d\\n", a + b);
}

int main() {
    printSum(5, 10);
    return 0;
}`},{subheading:"Function with arguments and return value",code:`int multiply(int a, int b) {
    return a * b;
}

int main() {
    int result = multiply(4, 5);
    printf("Product: %d\\n", result);
    return 0;
}`},{subheading:"Function with no arguments but return value",code:`int getNumber() {
    return 42;
}

int main() {
    int num = getNumber();
    printf("Number: %d\\n", num);
    return 0;
}`}]},{heading:"Call by Value",content:"In call by value, a copy of the actual parameter is passed to the function. Changes made to the parameter inside the function do not affect the original value.",code:`void modify(int x) {
    x = 100;
    printf("Inside function: %d\\n", x);  // 100
}

int main() {
    int num = 10;
    modify(num);
    printf("After function: %d\\n", num);  // 10 (unchanged)
    return 0;
}`},{heading:"Recursion",content:"A function that calls itself is called a recursive function.",subsections:[{subheading:"Factorial using Recursion",code:`int factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;  // Base case
    }
    return n * factorial(n - 1);  // Recursive call
}

int main() {
    int num = 5;
    printf("Factorial of %d is %d\\n", num, factorial(num));
    // Output: 120
    return 0;
}`},{subheading:"Fibonacci using Recursion",code:`int fibonacci(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    printf("Fibonacci series: ");
    for (int i = 0; i < 10; i++) {
        printf("%d ", fibonacci(i));
    }
    // Output: 0 1 1 2 3 5 8 13 21 34
    return 0;
}`}],note:"Recursion needs a base case to stop, otherwise it will result in infinite recursion."},{heading:"Function Examples",code:`// Check if number is prime
int isPrime(int num) {
    if (num <= 1) return 0;
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0) return 0;
    }
    return 1;
}

// Find maximum of three numbers
int max(int a, int b, int c) {
    int maximum = a;
    if (b > maximum) maximum = b;
    if (c > maximum) maximum = c;
    return maximum;
}

// Swap two numbers (call by reference using pointers)
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}`}]},arrays:{title:"Arrays",sections:[{heading:"Introduction to Arrays",content:"An array is a collection of elements of the same data type stored in contiguous memory locations. Arrays allow you to store multiple values in a single variable."},{heading:"One-Dimensional Arrays",subsections:[{subheading:"Declaration and Initialization",code:`// Declaration
int numbers[5];

// Initialization during declaration
int marks[5] = {85, 90, 78, 92, 88};

// Partial initialization (rest are 0)
int arr[5] = {1, 2, 3};  // {1, 2, 3, 0, 0}

// Without size (compiler determines size)
int values[] = {10, 20, 30, 40};  // Size is 4`},{subheading:"Accessing Array Elements",code:`int arr[5] = {10, 20, 30, 40, 50};

// Access using index (0-based)
printf("First element: %d\\n", arr[0]);   // 10
printf("Third element: %d\\n", arr[2]);   // 30

// Modify elements
arr[1] = 25;
printf("Modified second element: %d\\n", arr[1]);  // 25`},{subheading:"Traversing an Array",code:`int numbers[5] = {1, 2, 3, 4, 5};

// Using for loop
for (int i = 0; i < 5; i++) {
    printf("%d ", numbers[i]);
}

// Calculate sum
int sum = 0;
for (int i = 0; i < 5; i++) {
    sum += numbers[i];
}
printf("\\nSum: %d\\n", sum);`}]},{heading:"Two-Dimensional Arrays",content:"A 2D array is an array of arrays, often used to represent matrices or tables.",subsections:[{subheading:"Declaration and Initialization",code:`// Declaration
int matrix[3][3];

// Initialization
int mat[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Alternative initialization
int mat2[2][3] = {1, 2, 3, 4, 5, 6};`},{subheading:"Accessing 2D Array Elements",code:`int mat[2][3] = {{1, 2, 3}, {4, 5, 6}};

// Access element at row 1, column 2
printf("Element: %d\\n", mat[1][2]);  // 6

// Nested loop to traverse
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d ", mat[i][j]);
    }
    printf("\\n");
}`}]},{heading:"Multi-Dimensional Arrays",code:`// 3D Array
int cube[2][3][4];

// Initialize 3D array
int arr3d[2][2][2] = {
    {{1, 2}, {3, 4}},
    {{5, 6}, {7, 8}}
};

// Access element
printf("%d\\n", arr3d[1][0][1]);  // 6`},{heading:"Passing Arrays to Functions",code:`// Pass 1D array
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

// Pass 2D array
void print2DArray(int arr[][3], int rows) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", arr[i][j]);
        }
        printf("\\n");
    }
}

int main() {
    int arr1d[5] = {1, 2, 3, 4, 5};
    int arr2d[2][3] = {{1, 2, 3}, {4, 5, 6}};
    
    printArray(arr1d, 5);
    print2DArray(arr2d, 2);
    
    return 0;
}`,note:"Arrays are passed by reference (address) to functions, so modifications affect the original array."},{heading:"Common Array Operations",code:`// Find maximum element
int findMax(int arr[], int size) {
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Reverse an array
void reverseArray(int arr[], int size) {
    for (int i = 0; i < size / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[size - 1 - i];
        arr[size - 1 - i] = temp;
    }
}

// Linear search
int linearSearch(int arr[], int size, int key) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == key) {
            return i;  // Return index
        }
    }
    return -1;  // Not found
}`}]},strings:{title:"Strings",sections:[{heading:"Introduction to Strings",content:"In C, a string is an array of characters terminated by a null character (\\0). Strings are used to store and manipulate text.",code:`// String declaration and initialization
char str1[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};
char str2[] = "Hello";  // Automatically adds \\0
char str3[20] = "World";  // Size 20, but stores "World\\0"

printf("%s\\n", str2);  // Output: Hello`},{heading:"String Input/Output",code:`char name[50];

// Using scanf (reads until whitespace)
printf("Enter your first name: ");
scanf("%s", name);
printf("Hello, %s!\\n", name);

// Using gets (deprecated, unsafe)
// gets(name);

// Using fgets (safer alternative)
printf("Enter your full name: ");
fgets(name, sizeof(name), stdin);
printf("Hello, %s", name);

// Clear input buffer
while (getchar() != '\\n');`,note:"Use fgets() instead of gets() as it prevents buffer overflow."},{heading:"String Handling Functions",subsections:[{subheading:"strlen() - String Length",code:`#include <string.h>

char str[] = "Hello";
int len = strlen(str);
printf("Length: %d\\n", len);  // 5`},{subheading:"strcpy() - String Copy",code:`#include <string.h>

char source[] = "Hello";
char destination[20];

strcpy(destination, source);
printf("Copied string: %s\\n", destination);`},{subheading:"strcat() - String Concatenation",code:`#include <string.h>

char str1[50] = "Hello ";
char str2[] = "World";

strcat(str1, str2);
printf("Concatenated: %s\\n", str1);  // Hello World`},{subheading:"strcmp() - String Comparison",code:`#include <string.h>

char str1[] = "Apple";
char str2[] = "Banana";
char str3[] = "Apple";

int result1 = strcmp(str1, str2);  // Negative (str1 < str2)
int result2 = strcmp(str1, str3);  // 0 (equal)
int result3 = strcmp(str2, str1);  // Positive (str2 > str1)

if (strcmp(str1, str3) == 0) {
    printf("Strings are equal\\n");
}`},{subheading:"Other String Functions",code:`#include <string.h>

// strncpy - Copy n characters
char dest[20];
strncpy(dest, "Hello World", 5);
dest[5] = '\\0';
printf("%s\\n", dest);  // Hello

// strncat - Concatenate n characters
char str[20] = "Hello";
strncat(str, " World!", 6);

// strstr - Find substring
char text[] = "Hello World";
char *ptr = strstr(text, "World");
if (ptr != NULL) {
    printf("Found at: %ld\\n", ptr - text);
}

// strchr - Find character
char *ch = strchr(text, 'W');
if (ch != NULL) {
    printf("Character found: %c\\n", *ch);
}`}]},{heading:"String Manipulation Examples",code:`// Convert string to uppercase
void toUpper(char str[]) {
    for (int i = 0; str[i] != '\\0'; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            str[i] = str[i] - 32;
        }
    }
}

// Reverse a string
void reverseString(char str[]) {
    int len = strlen(str);
    for (int i = 0; i < len / 2; i++) {
        char temp = str[i];
        str[i] = str[len - 1 - i];
        str[len - 1 - i] = temp;
    }
}

// Check if palindrome
int isPalindrome(char str[]) {
    int len = strlen(str);
    for (int i = 0; i < len / 2; i++) {
        if (str[i] != str[len - 1 - i]) {
            return 0;
        }
    }
    return 1;
}

// Count vowels
int countVowels(char str[]) {
    int count = 0;
    for (int i = 0; str[i] != '\\0'; i++) {
        char ch = tolower(str[i]);
        if (ch == 'a' || ch == 'e' || ch == 'i' || 
            ch == 'o' || ch == 'u') {
            count++;
        }
    }
    return count;
}`},{heading:"Array of Strings",code:`// 2D character array
char names[3][20] = {
    "Alice",
    "Bob",
    "Charlie"
};

// Print all names
for (int i = 0; i < 3; i++) {
    printf("%d. %s\\n", i + 1, names[i]);
}

// Array of pointers to strings
char *fruits[] = {
    "Apple",
    "Banana",
    "Orange"
};

for (int i = 0; i < 3; i++) {
    printf("%s\\n", fruits[i]);
}`}]},pointers:{title:"Pointers",sections:[{heading:"Pointer Basics",content:"A pointer is a variable that stores the memory address of another variable. Pointers are powerful features of C that allow direct memory manipulation.",code:`int num = 10;
int *ptr;  // Pointer declaration

ptr = &num;  // Store address of num

printf("Value of num: %d\\n", num);
printf("Address of num: %p\\n", &num);
printf("Value of ptr: %p\\n", ptr);
printf("Value at address stored in ptr: %d\\n", *ptr);`},{heading:"Pointer Operations",subsections:[{subheading:"Address Operator (&)",code:`int x = 5;
printf("Address of x: %p\\n", &x);`},{subheading:"Dereference Operator (*)",code:`int y = 10;
int *p = &y;

printf("Value through pointer: %d\\n", *p);  // 10
*p = 20;  // Change value at address
printf("New value of y: %d\\n", y);  // 20`}]},{heading:"Pointer Arithmetic",code:`int arr[5] = {10, 20, 30, 40, 50};
int *ptr = arr;  // Points to first element

printf("First element: %d\\n", *ptr);      // 10
printf("Second element: %d\\n", *(ptr+1)); // 20
printf("Third element: %d\\n", *(ptr+2));  // 30

// Increment pointer
ptr++;
printf("After increment: %d\\n", *ptr);  // 20

// Pointer subtraction
int *p1 = &arr[4];
int *p2 = &arr[1];
printf("Difference: %ld\\n", p1 - p2);  // 3`},{heading:"Pointers and Arrays",content:"Array name is a constant pointer to the first element.",code:`int numbers[5] = {1, 2, 3, 4, 5};
int *p = numbers;

// Access using array notation
printf("numbers[0]: %d\\n", numbers[0]);

// Access using pointer notation
printf("*p: %d\\n", *p);
printf("*(p+2): %d\\n", *(p+2));

// Array traversal using pointer
for (int i = 0; i < 5; i++) {
    printf("%d ", *(p + i));
}`},{heading:"Pointers and Functions",subsections:[{subheading:"Call by Reference",code:`void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    printf("Before: x=%d, y=%d\\n", x, y);
    
    swap(&x, &y);
    
    printf("After: x=%d, y=%d\\n", x, y);
    return 0;
}`},{subheading:"Returning Multiple Values",code:`void calculate(int a, int b, int *sum, int *product) {
    *sum = a + b;
    *product = a * b;
}

int main() {
    int s, p;
    calculate(5, 3, &s, &p);
    printf("Sum: %d, Product: %d\\n", s, p);
    return 0;
}`}]},{heading:"Pointer to Pointer (Double Pointer)",code:`int num = 10;
int *ptr = &num;
int **pptr = &ptr;

printf("Value of num: %d\\n", num);
printf("Value using pointer: %d\\n", *ptr);
printf("Value using double pointer: %d\\n", **pptr);

printf("Address of num: %p\\n", &num);
printf("Value of ptr: %p\\n", ptr);
printf("Address of ptr: %p\\n", &ptr);
printf("Value of pptr: %p\\n", pptr);`},{heading:"NULL Pointer",content:"A pointer that doesn't point to any valid memory location.",code:`int *ptr = NULL;

if (ptr == NULL) {
    printf("Pointer is NULL\\n");
}

// Always check before dereferencing
if (ptr != NULL) {
    printf("%d\\n", *ptr);
} else {
    printf("Cannot dereference NULL pointer\\n");
}`},{heading:"Dangling Pointer",content:"A pointer that points to memory that has been freed or deallocated.",code:`int *ptr;
{
    int x = 10;
    ptr = &x;
}  // x goes out of scope, ptr is now dangling

// Avoid using dangling pointers
// Set to NULL after freeing
ptr = NULL;`,note:"Always initialize pointers and set them to NULL after freeing memory."},{heading:"Pointer to Array",code:`int arr[3] = {10, 20, 30};
int (*ptr)[3] = &arr;  // Pointer to entire array

printf("First element: %d\\n", (*ptr)[0]);
printf("Second element: %d\\n", (*ptr)[1]);

// Difference between int *p and int (*p)[3]
int *p1 = arr;      // Pointer to first element
int (*p2)[3] = &arr; // Pointer to entire array`}]},structures:{title:"Structures & Unions",sections:[{heading:"Introduction to Structures",content:"A structure is a user-defined data type that groups related variables of different data types under a single name.",code:`// Define a structure
struct Student {
    int rollNo;
    char name[50];
    float marks;
};

// Declare structure variables
struct Student s1, s2;

// Initialize during declaration
struct Student s3 = {101, "John", 85.5};`},{heading:"Accessing Structure Members",code:`struct Student s1;

// Using dot operator
s1.rollNo = 101;
strcpy(s1.name, "Alice");
s1.marks = 92.5;

printf("Roll No: %d\\n", s1.rollNo);
printf("Name: %s\\n", s1.name);
printf("Marks: %.2f\\n", s1.marks);`},{heading:"Nested Structures",code:`struct Date {
    int day;
    int month;
    int year;
};

struct Employee {
    int id;
    char name[50];
    struct Date joinDate;
    float salary;
};

struct Employee emp1;
emp1.id = 1001;
strcpy(emp1.name, "Bob");
emp1.joinDate.day = 15;
emp1.joinDate.month = 3;
emp1.joinDate.year = 2020;
emp1.salary = 50000.0;

printf("Join Date: %d/%d/%d\\n", 
    emp1.joinDate.day, 
    emp1.joinDate.month, 
    emp1.joinDate.year);`},{heading:"Array of Structures",code:`struct Student {
    int rollNo;
    char name[50];
    float marks;
};

struct Student students[3] = {
    {101, "Alice", 85.5},
    {102, "Bob", 90.0},
    {103, "Charlie", 78.5}
};

// Access array of structures
for (int i = 0; i < 3; i++) {
    printf("Roll: %d, Name: %s, Marks: %.2f\\n",
        students[i].rollNo,
        students[i].name,
        students[i].marks);
}`},{heading:"Pointers to Structures",code:`struct Student {
    int rollNo;
    char name[50];
    float marks;
};

struct Student s1 = {101, "Alice", 85.5};
struct Student *ptr = &s1;

// Access using arrow operator
printf("Roll No: %d\\n", ptr->rollNo);
printf("Name: %s\\n", ptr->name);
printf("Marks: %.2f\\n", ptr->marks);

// Alternative: using dereference
printf("Roll No: %d\\n", (*ptr).rollNo);`},{heading:"Structures and Functions",code:`struct Rectangle {
    int length;
    int width;
};

// Pass structure by value
int calculateArea(struct Rectangle r) {
    return r.length * r.width;
}

// Pass structure by reference
void modifyRectangle(struct Rectangle *r) {
    r->length = 20;
    r->width = 15;
}

int main() {
    struct Rectangle rect = {10, 5};
    
    printf("Area: %d\\n", calculateArea(rect));
    
    modifyRectangle(&rect);
    printf("New dimensions: %d x %d\\n", rect.length, rect.width);
    
    return 0;
}`},{heading:"Unions",content:"A union is similar to a structure but all members share the same memory location. Only one member can hold a value at any given time.",code:`union Data {
    int intVal;
    float floatVal;
    char charVal;
};

union Data d;

d.intVal = 10;
printf("Integer: %d\\n", d.intVal);

d.floatVal = 3.14;  // Overwrites intVal
printf("Float: %.2f\\n", d.floatVal);

d.charVal = 'A';    // Overwrites floatVal
printf("Char: %c\\n", d.charVal);

printf("Size of union: %zu bytes\\n", sizeof(d));`},{heading:"Structure vs Union",points:["Structure: Each member has its own memory location","Union: All members share the same memory location","Structure size: Sum of all member sizes (plus padding)","Union size: Size of largest member","Structure: All members can be accessed simultaneously","Union: Only one member can be accessed at a time"],code:`struct TestStruct {
    int a;
    float b;
    char c;
};

union TestUnion {
    int a;
    float b;
    char c;
};

printf("Size of structure: %zu\\n", sizeof(struct TestStruct));
printf("Size of union: %zu\\n", sizeof(union TestUnion));`},{heading:"typedef with Structures",code:`// Using typedef
typedef struct {
    int rollNo;
    char name[50];
    float marks;
} Student;

// Now we can declare without 'struct' keyword
Student s1, s2;
s1.rollNo = 101;
strcpy(s1.name, "Alice");
s1.marks = 85.5;

// typedef with existing structure
struct Point {
    int x;
    int y;
};
typedef struct Point Point;

Point p1 = {10, 20};`}]},enums:{title:"Enumerations & Typedef",sections:[{heading:"Enumeration (enum)",content:"An enumeration is a user-defined data type consisting of named integer constants.",code:`// Define enum
enum Days {
    MONDAY,     // 0
    TUESDAY,    // 1
    WEDNESDAY,  // 2
    THURSDAY,   // 3
    FRIDAY,     // 4
    SATURDAY,   // 5
    SUNDAY      // 6
};

enum Days today = WEDNESDAY;

if (today == WEDNESDAY) {
    printf("It's Wednesday!\\n");
}`},{heading:"Custom Enum Values",code:`enum Status {
    SUCCESS = 1,
    FAILURE = 0,
    PENDING = 2,
    ERROR = -1
};

enum Status result = SUCCESS;

switch (result) {
    case SUCCESS:
        printf("Operation successful\\n");
        break;
    case FAILURE:
        printf("Operation failed\\n");
        break;
    case PENDING:
        printf("Operation pending\\n");
        break;
    case ERROR:
        printf("Error occurred\\n");
        break;
}`},{heading:"Enum in Switch Statement",code:`enum Color {RED, GREEN, BLUE, YELLOW};

void printColor(enum Color c) {
    switch(c) {
        case RED:
            printf("Red color\\n");
            break;
        case GREEN:
            printf("Green color\\n");
            break;
        case BLUE:
            printf("Blue color\\n");
            break;
        case YELLOW:
            printf("Yellow color\\n");
            break;
    }
}

int main() {
    enum Color myColor = GREEN;
    printColor(myColor);
    return 0;
}`},{heading:"typedef Keyword",content:"typedef is used to create an alias name for data types.",subsections:[{subheading:"typedef with Basic Types",code:`// Create alias for existing type
typedef unsigned long ulong;
typedef int integer;

ulong population = 1000000000UL;
integer age = 25;

printf("Population: %lu\\n", population);
printf("Age: %d\\n", age);`},{subheading:"typedef with Structures",code:`typedef struct {
    int x;
    int y;
} Point;

Point p1 = {10, 20};
Point p2 = {30, 40};

printf("P1: (%d, %d)\\n", p1.x, p1.y);
printf("P2: (%d, %d)\\n", p2.x, p2.y);`},{subheading:"typedef with Pointers",code:`typedef int* IntPtr;

IntPtr p1, p2;  // Both are int pointers
int x = 10, y = 20;

p1 = &x;
p2 = &y;

printf("*p1 = %d, *p2 = %d\\n", *p1, *p2);`},{subheading:"typedef with Arrays",code:`typedef int IntArray[10];

IntArray arr1, arr2;  // Both are int arrays of size 10

arr1[0] = 100;
arr2[0] = 200;

printf("arr1[0] = %d\\n", arr1[0]);
printf("arr2[0] = %d\\n", arr2[0]);`},{subheading:"typedef with Enums",code:`typedef enum {
    NORTH,
    SOUTH,
    EAST,
    WEST
} Direction;

Direction playerDirection = NORTH;

if (playerDirection == NORTH) {
    printf("Moving north\\n");
}`}]},{heading:"Practical Use Cases",code:`// File operations status
typedef enum {
    FILE_SUCCESS,
    FILE_NOT_FOUND,
    FILE_READ_ERROR,
    FILE_WRITE_ERROR
} FileStatus;

// Function using enum
FileStatus readFile(const char *filename) {
    // File reading logic
    return FILE_SUCCESS;
}

// Boolean type (before C99)
typedef enum {
    FALSE = 0,
    TRUE = 1
} Boolean;

Boolean isValid = TRUE;

if (isValid) {
    printf("Data is valid\\n");
}

// Complex data structure
typedef struct {
    int id;
    char name[50];
    enum {ACTIVE, INACTIVE, SUSPENDED} status;
} Account;

Account acc1 = {1001, "John Doe", ACTIVE};`}]},"intro-cpp":{title:"Introduction to C++",sections:[{heading:"C++ vs C",points:["C++ is an extension of C with object-oriented features","C++ supports both procedural and OOP paradigms","C++ has classes, objects, inheritance, polymorphism","C++ has function and operator overloading","C++ has references in addition to pointers","C++ has better type checking and error handling"]},{heading:"Basic C++ Program Structure",code:`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,language:"cpp"},{heading:"Input/Output in C++",code:`#include <iostream>
using namespace std;

int main() {
    int age;
    string name;
    
    // Output
    cout << "Enter your name: ";
    
    // Input
    cin >> name;
    
    cout << "Enter your age: ";
    cin >> age;
    
    cout << "Hello, " << name << "! You are " << age << " years old." << endl;
    
    return 0;
}`,language:"cpp"},{heading:"Namespaces",content:"Namespaces prevent name conflicts by grouping related entities.",code:`#include <iostream>

// Define namespace
namespace MyNamespace {
    int value = 10;
    void display() {
        std::cout << "Value: " << value << std::endl;
    }
}

int main() {
    // Access using scope resolution
    std::cout << MyNamespace::value << std::endl;
    MyNamespace::display();
    
    // Using namespace
    using namespace MyNamespace;
    std::cout << value << std::endl;
    
    return 0;
}`,language:"cpp"},{heading:"References",content:"A reference is an alias for an existing variable.",code:`#include <iostream>
using namespace std;

int main() {
    int num = 10;
    int &ref = num;  // Reference to num
    
    cout << "num: " << num << endl;   // 10
    cout << "ref: " << ref << endl;   // 10
    
    ref = 20;  // Modifies num through reference
    cout << "num: " << num << endl;   // 20
    
    return 0;
}`,language:"cpp"},{heading:"Function Overloading",content:"Multiple functions can have the same name with different parameters.",code:`#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}

int main() {
    cout << add(5, 3) << endl;         // Calls first function
    cout << add(5.5, 3.2) << endl;     // Calls second function
    cout << add(1, 2, 3) << endl;      // Calls third function
    
    return 0;
}`,language:"cpp"},{heading:"Default Arguments",code:`#include <iostream>
using namespace std;

void display(int a, int b = 10, int c = 20) {
    cout << "a: " << a << ", b: " << b << ", c: " << c << endl;
}

int main() {
    display(5);           // a: 5, b: 10, c: 20
    display(5, 15);       // a: 5, b: 15, c: 20
    display(5, 15, 25);   // a: 5, b: 15, c: 25
    
    return 0;
}`,language:"cpp"},{heading:"Inline Functions",code:`#include <iostream>
using namespace std;

inline int square(int x) {
    return x * x;
}

int main() {
    cout << "Square of 5: " << square(5) << endl;
    return 0;
}`,language:"cpp",note:"Inline functions are expanded at the point of call, reducing function call overhead."}]},"oop-concepts":{title:"OOP Concepts",sections:[{heading:"Classes and Objects",content:"A class is a blueprint for creating objects. An object is an instance of a class.",code:`#include <iostream>
using namespace std;

class Student {
public:
    int rollNo;
    string name;
    float marks;
    
    void display() {
        cout << "Roll: " << rollNo << endl;
        cout << "Name: " << name << endl;
        cout << "Marks: " << marks << endl;
    }
};

int main() {
    Student s1;  // Create object
    s1.rollNo = 101;
    s1.name = "Alice";
    s1.marks = 85.5;
    
    s1.display();
    
    return 0;
}`,language:"cpp"},{heading:"Access Specifiers",points:["public: Members accessible from outside the class","private: Members accessible only within the class","protected: Members accessible within class and derived classes"],code:`class Example {
private:
    int privateVar;  // Only accessible within class
    
protected:
    int protectedVar;  // Accessible in derived classes
    
public:
    int publicVar;  // Accessible from anywhere
    
    void setPrivateVar(int val) {
        privateVar = val;
    }
    
    int getPrivateVar() {
        return privateVar;
    }
};`,language:"cpp"},{heading:"Constructors",content:"A constructor is a special member function that initializes objects.",code:`#include <iostream>
using namespace std;

class Rectangle {
private:
    int length, width;
    
public:
    // Default constructor
    Rectangle() {
        length = 0;
        width = 0;
    }
    
    // Parameterized constructor
    Rectangle(int l, int w) {
        length = l;
        width = w;
    }
    
    // Copy constructor
    Rectangle(const Rectangle &rect) {
        length = rect.length;
        width = rect.width;
    }
    
    int area() {
        return length * width;
    }
};

int main() {
    Rectangle r1;           // Default constructor
    Rectangle r2(10, 5);    // Parameterized constructor
    Rectangle r3(r2);       // Copy constructor
    
    cout << "Area: " << r2.area() << endl;
    
    return 0;
}`,language:"cpp"},{heading:"Destructors",content:"A destructor is called when an object is destroyed to free resources.",code:`#include <iostream>
using namespace std;

class Demo {
public:
    Demo() {
        cout << "Constructor called" << endl;
    }
    
    ~Demo() {
        cout << "Destructor called" << endl;
    }
};

int main() {
    Demo obj;  // Constructor called
    
    return 0;  // Destructor called automatically
}`,language:"cpp"},{heading:"this Pointer",content:"this pointer points to the current object.",code:`class Example {
private:
    int value;
    
public:
    void setValue(int value) {
        this->value = value;  // Disambiguate parameter and member
    }
    
    Example* getPointer() {
        return this;  // Return pointer to current object
    }
};`,language:"cpp"},{heading:"Encapsulation",content:"Bundling data and methods that operate on that data within a class.",code:`class BankAccount {
private:
    double balance;
    
public:
    BankAccount(double initialBalance) {
        balance = initialBalance;
    }
    
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
    
    double getBalance() {
        return balance;
    }
};`,language:"cpp"},{heading:"Abstraction",content:"Hiding implementation details and showing only essential features.",code:`class AbstractCalculator {
public:
    // Public interface
    int add(int a, int b) {
        return performAddition(a, b);
    }
    
private:
    // Hidden implementation
    int performAddition(int x, int y) {
        return x + y;
    }
};`,language:"cpp"}]}},mf={...pf,...df,...ff};function Ou({code:C,language:A}){const[m,b]=yt.useState(!1),L=async()=>{try{await navigator.clipboard.writeText(C),b(!0),setTimeout(()=>b(!1),2e3)}catch(q){console.error("Failed to copy:",q)}},O=q=>{const I=["int","float","double","char","void","long","short","signed","unsigned","if","else","while","for","do","switch","case","break","continue","return","struct","union","enum","typedef","sizeof","const","static","extern","auto","register","class","public","private","protected","virtual","friend","this","new","delete","namespace","using","template","typename","try","catch","throw","nullptr","bool","true","false","std","cout","cin","endl","include","define","main"];return q.split(`
`).map((B,J)=>{if(B.trim().startsWith("#"))return x.jsx("div",{children:x.jsx("span",{className:"text-purple-600 dark:text-purple-400",children:B})},J);if(B.trim().startsWith("//"))return x.jsx("div",{children:x.jsx("span",{className:"text-gray-500 dark:text-gray-500 italic",children:B})},J);const W=/"([^"\\]*(\\.[^"\\]*)*)"/g,re=[];let ye=0,X;const Q=B;for(;(X=W.exec(Q))!==null;){if(X.index>ye){const Ue=Q.substring(ye,X.index);re.push(ne(Ue,I,re.length))}re.push(x.jsx("span",{className:"text-green-600 dark:text-green-400",children:X[0]},re.length)),ye=X.index+X[0].length}if(ye<Q.length){const Ue=Q.substring(ye);re.push(ne(Ue,I,re.length))}return x.jsx("div",{children:re.length>0?re:B},J)})},ne=(q,I,H)=>{const B=[];return q.split(/(\s+|[{}();,[\]])/).forEach((W,re)=>{I.includes(W)?B.push(x.jsx("span",{className:"text-blue-600 dark:text-blue-400 font-semibold",children:W},`${H}-${re}`)):/^\d+$/.test(W)?B.push(x.jsx("span",{className:"text-orange-600 dark:text-orange-400",children:W},`${H}-${re}`)):B.push(x.jsx("span",{children:W},`${H}-${re}`))}),B};return x.jsxs("div",{className:"relative group my-4",children:[x.jsx("div",{className:"absolute right-2 top-2 z-10",children:x.jsx("button",{onClick:L,className:"p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white opacity-0 group-hover:opacity-100 transition-opacity","aria-label":"Copy code",children:m?x.jsx(Gd,{size:16}):x.jsx(ef,{size:16})})}),x.jsx("pre",{className:"bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto border border-gray-700",children:x.jsx("code",{className:"text-sm leading-relaxed",children:O(C)})})]})}function hf({selectedTopic:C}){const A=mf[C];return A?x.jsx("main",{className:"flex-1 p-4 lg:p-8",children:x.jsx("div",{className:"max-w-4xl mx-auto pb-16",children:x.jsxs("article",{className:"prose dark:prose-invert max-w-none",children:[x.jsx("h1",{className:"text-gray-900 dark:text-white mb-6",children:A.title}),A.sections.map((m,b)=>x.jsxs("section",{className:"mb-8",children:[m.heading&&x.jsx("h2",{className:"text-gray-900 dark:text-white mt-8 mb-4",children:m.heading}),m.content&&x.jsx("div",{className:"text-gray-700 dark:text-gray-300 mb-4 space-y-4",children:m.content.split(`

`).map((L,O)=>x.jsx("p",{children:L},O))}),m.points&&x.jsx("ul",{className:"list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4",children:m.points.map((L,O)=>x.jsx("li",{children:L},O))}),m.code&&x.jsx(Ou,{code:m.code,language:m.language||"c"}),m.note&&x.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4",children:x.jsxs("p",{className:"text-gray-800 dark:text-gray-200",children:[x.jsx("strong",{children:"Note:"})," ",m.note]})}),m.subsections&&x.jsx("div",{className:"ml-4",children:m.subsections.map((L,O)=>x.jsxs("div",{className:"mb-6",children:[L.subheading&&x.jsx("h3",{className:"text-gray-800 dark:text-gray-200 mt-6 mb-3",children:L.subheading}),L.content&&x.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-3",children:L.content}),L.code&&x.jsx(Ou,{code:L.code,language:L.language||"c"})]},O))})]},b))]})})}):x.jsx("main",{className:"flex-1 p-8 lg:ml-80",children:x.jsx("div",{className:"max-w-4xl mx-auto",children:x.jsxs("div",{className:"text-center py-12",children:[x.jsx("h2",{className:"text-gray-900 dark:text-white mb-2",children:"Topic not found"}),x.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Please select a topic from the sidebar"})]})})})}function gf({darkMode:C,setDarkMode:A}){return x.jsx("button",{onClick:()=>A(!C),className:"p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors","aria-label":"Toggle theme",children:C?x.jsx(af,{size:20,className:"text-yellow-400"}):x.jsx(lf,{size:20,className:"text-gray-700"})})}function yf(){const[C,A]=yt.useState(!1),[m,b]=yt.useState("intro-c"),[L,O]=yt.useState(!1);return x.jsx("div",{className:C?"dark":"",children:x.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200",children:[x.jsx("header",{className:"fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50",children:x.jsxs("div",{className:"h-full px-4 flex items-center justify-between",children:[x.jsxs("div",{className:"flex items-center gap-4",children:[x.jsx("button",{onClick:()=>O(!L),className:"lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg",children:L?x.jsx(uf,{size:24}):x.jsx(nf,{size:24})}),x.jsx("h1",{className:"text-gray-900 dark:text-white",children:"C/C++ Complete Notes"})]}),x.jsx(gf,{darkMode:C,setDarkMode:A})]})}),x.jsxs("div",{className:"pt-16 flex",children:[x.jsx(cf,{selectedTopic:m,setSelectedTopic:b,sidebarOpen:L,setSidebarOpen:O}),x.jsx(hf,{selectedTopic:m})]})]})})}bd.createRoot(document.getElementById("root")).render(x.jsx(yf,{}));
