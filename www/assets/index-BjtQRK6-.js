(function(){const E=document.createElement("link").relList;if(E&&E.supports&&E.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))f(N);new MutationObserver(N=>{for(const q of N)if(q.type==="childList")for(const K of q.addedNodes)K.tagName==="LINK"&&K.rel==="modulepreload"&&f(K)}).observe(document,{childList:!0,subtree:!0});function O(N){const q={};return N.integrity&&(q.integrity=N.integrity),N.referrerPolicy&&(q.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?q.credentials="include":N.crossOrigin==="anonymous"?q.credentials="omit":q.credentials="same-origin",q}function f(N){if(N.ep)return;N.ep=!0;const q=O(N);fetch(N.href,q)}})();function Cm(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}var Ci={exports:{}},Qu={};var Wf;function Rm(){if(Wf)return Qu;Wf=1;var g=Symbol.for("react.transitional.element"),E=Symbol.for("react.fragment");function O(f,N,q){var K=null;if(q!==void 0&&(K=""+q),N.key!==void 0&&(K=""+N.key),"key"in N){q={};for(var k in N)k!=="key"&&(q[k]=N[k])}else q=N;return N=q.ref,{$$typeof:g,type:f,key:K,ref:N!==void 0?N:null,props:q}}return Qu.Fragment=E,Qu.jsx=O,Qu.jsxs=O,Qu}var Ff;function Hm(){return Ff||(Ff=1,Ci.exports=Rm()),Ci.exports}var c=Hm(),Ri={exports:{}},Z={};var Pf;function qm(){if(Pf)return Z;Pf=1;var g=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),K=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),Y=Symbol.for("react.activity"),re=Symbol.iterator;function Xe(o){return o===null||typeof o!="object"?null:(o=re&&o[re]||o["@@iterator"],typeof o=="function"?o:null)}var Ue={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ae=Object.assign,Al={};function tl(o,S,z){this.props=o,this.context=S,this.refs=Al,this.updater=z||Ue}tl.prototype.isReactComponent={},tl.prototype.setState=function(o,S){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,S,"setState")},tl.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function Le(){}Le.prototype=tl.prototype;function He(o,S,z){this.props=o,this.context=S,this.refs=Al,this.updater=z||Ue}var ul=He.prototype=new Le;ul.constructor=He,Ae(ul,tl.prototype),ul.isPureReactComponent=!0;var vl=Array.isArray;function Ze(){}var F={H:null,A:null,T:null,S:null},Ve=Object.prototype.hasOwnProperty;function ml(o,S,z){var D=z.ref;return{$$typeof:g,type:o,key:S,ref:D!==void 0?D:null,props:z}}function Yl(o,S){return ml(o.type,S,o.props)}function xe(o){return typeof o=="object"&&o!==null&&o.$$typeof===g}function Ke(o){var S={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(z){return S[z]})}var Ce=/\/+/g;function Sl(o,S){return typeof o=="object"&&o!==null&&o.key!=null?Ke(""+o.key):S.toString(36)}function Be(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(Ze,Ze):(o.status="pending",o.then(function(S){o.status==="pending"&&(o.status="fulfilled",o.value=S)},function(S){o.status==="pending"&&(o.status="rejected",o.reason=S)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function b(o,S,z,D,Q){var I=typeof o;(I==="undefined"||I==="boolean")&&(o=null);var ue=!1;if(o===null)ue=!0;else switch(I){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(o.$$typeof){case g:case E:ue=!0;break;case H:return ue=o._init,b(ue(o._payload),S,z,D,Q)}}if(ue)return Q=Q(o),ue=D===""?"."+Sl(o,0):D,vl(Q)?(z="",ue!=null&&(z=ue.replace(Ce,"$&/")+"/"),b(Q,S,z,"",function(Gl){return Gl})):Q!=null&&(xe(Q)&&(Q=Yl(Q,z+(Q.key==null||o&&o.key===Q.key?"":(""+Q.key).replace(Ce,"$&/")+"/")+ue)),S.push(Q)),1;ue=0;var qe=D===""?".":D+":";if(vl(o))for(var ge=0;ge<o.length;ge++)D=o[ge],I=qe+Sl(D,ge),ue+=b(D,S,z,I,Q);else if(ge=Xe(o),typeof ge=="function")for(o=ge.call(o),ge=0;!(D=o.next()).done;)D=D.value,I=qe+Sl(D,ge++),ue+=b(D,S,z,I,Q);else if(I==="object"){if(typeof o.then=="function")return b(Be(o),S,z,D,Q);throw S=String(o),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return ue}function M(o,S,z){if(o==null)return o;var D=[],Q=0;return b(o,D,"","",function(I){return S.call(z,I,Q++)}),D}function X(o){if(o._status===-1){var S=o._result;S=S(),S.then(function(z){(o._status===0||o._status===-1)&&(o._status=1,o._result=z)},function(z){(o._status===0||o._status===-1)&&(o._status=2,o._result=z)}),o._status===-1&&(o._status=0,o._result=S)}if(o._status===1)return o._result.default;throw o._result}var oe=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},de={map:M,forEach:function(o,S,z){M(o,function(){S.apply(this,arguments)},z)},count:function(o){var S=0;return M(o,function(){S++}),S},toArray:function(o){return M(o,function(S){return S})||[]},only:function(o){if(!xe(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return Z.Activity=Y,Z.Children=de,Z.Component=tl,Z.Fragment=O,Z.Profiler=N,Z.PureComponent=He,Z.StrictMode=f,Z.Suspense=B,Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,Z.__COMPILER_RUNTIME={__proto__:null,c:function(o){return F.H.useMemoCache(o)}},Z.cache=function(o){return function(){return o.apply(null,arguments)}},Z.cacheSignal=function(){return null},Z.cloneElement=function(o,S,z){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var D=Ae({},o.props),Q=o.key;if(S!=null)for(I in S.key!==void 0&&(Q=""+S.key),S)!Ve.call(S,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&S.ref===void 0||(D[I]=S[I]);var I=arguments.length-2;if(I===1)D.children=z;else if(1<I){for(var ue=Array(I),qe=0;qe<I;qe++)ue[qe]=arguments[qe+2];D.children=ue}return ml(o.type,Q,D)},Z.createContext=function(o){return o={$$typeof:K,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:q,_context:o},o},Z.createElement=function(o,S,z){var D,Q={},I=null;if(S!=null)for(D in S.key!==void 0&&(I=""+S.key),S)Ve.call(S,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(Q[D]=S[D]);var ue=arguments.length-2;if(ue===1)Q.children=z;else if(1<ue){for(var qe=Array(ue),ge=0;ge<ue;ge++)qe[ge]=arguments[ge+2];Q.children=qe}if(o&&o.defaultProps)for(D in ue=o.defaultProps,ue)Q[D]===void 0&&(Q[D]=ue[D]);return ml(o,I,Q)},Z.createRef=function(){return{current:null}},Z.forwardRef=function(o){return{$$typeof:k,render:o}},Z.isValidElement=xe,Z.lazy=function(o){return{$$typeof:H,_payload:{_status:-1,_result:o},_init:X}},Z.memo=function(o,S){return{$$typeof:A,type:o,compare:S===void 0?null:S}},Z.startTransition=function(o){var S=F.T,z={};F.T=z;try{var D=o(),Q=F.S;Q!==null&&Q(z,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(Ze,oe)}catch(I){oe(I)}finally{S!==null&&z.types!==null&&(S.types=z.types),F.T=S}},Z.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},Z.use=function(o){return F.H.use(o)},Z.useActionState=function(o,S,z){return F.H.useActionState(o,S,z)},Z.useCallback=function(o,S){return F.H.useCallback(o,S)},Z.useContext=function(o){return F.H.useContext(o)},Z.useDebugValue=function(){},Z.useDeferredValue=function(o,S){return F.H.useDeferredValue(o,S)},Z.useEffect=function(o,S){return F.H.useEffect(o,S)},Z.useEffectEvent=function(o){return F.H.useEffectEvent(o)},Z.useId=function(){return F.H.useId()},Z.useImperativeHandle=function(o,S,z){return F.H.useImperativeHandle(o,S,z)},Z.useInsertionEffect=function(o,S){return F.H.useInsertionEffect(o,S)},Z.useLayoutEffect=function(o,S){return F.H.useLayoutEffect(o,S)},Z.useMemo=function(o,S){return F.H.useMemo(o,S)},Z.useOptimistic=function(o,S){return F.H.useOptimistic(o,S)},Z.useReducer=function(o,S,z){return F.H.useReducer(o,S,z)},Z.useRef=function(o){return F.H.useRef(o)},Z.useState=function(o){return F.H.useState(o)},Z.useSyncExternalStore=function(o,S,z){return F.H.useSyncExternalStore(o,S,z)},Z.useTransition=function(){return F.H.useTransition()},Z.version="19.2.0",Z}var e1;function Wi(){return e1||(e1=1,Ri.exports=qm()),Ri.exports}var $=Wi();const Ym=Cm($);var Hi={exports:{}},Xu={},qi={exports:{}},Yi={};var l1;function Gm(){return l1||(l1=1,(function(g){function E(b,M){var X=b.length;b.push(M);e:for(;0<X;){var oe=X-1>>>1,de=b[oe];if(0<N(de,M))b[oe]=M,b[X]=de,X=oe;else break e}}function O(b){return b.length===0?null:b[0]}function f(b){if(b.length===0)return null;var M=b[0],X=b.pop();if(X!==M){b[0]=X;e:for(var oe=0,de=b.length,o=de>>>1;oe<o;){var S=2*(oe+1)-1,z=b[S],D=S+1,Q=b[D];if(0>N(z,X))D<de&&0>N(Q,z)?(b[oe]=Q,b[D]=X,oe=D):(b[oe]=z,b[S]=X,oe=S);else if(D<de&&0>N(Q,X))b[oe]=Q,b[D]=X,oe=D;else break e}}return M}function N(b,M){var X=b.sortIndex-M.sortIndex;return X!==0?X:b.id-M.id}if(g.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var q=performance;g.unstable_now=function(){return q.now()}}else{var K=Date,k=K.now();g.unstable_now=function(){return K.now()-k}}var B=[],A=[],H=1,Y=null,re=3,Xe=!1,Ue=!1,Ae=!1,Al=!1,tl=typeof setTimeout=="function"?setTimeout:null,Le=typeof clearTimeout=="function"?clearTimeout:null,He=typeof setImmediate<"u"?setImmediate:null;function ul(b){for(var M=O(A);M!==null;){if(M.callback===null)f(A);else if(M.startTime<=b)f(A),M.sortIndex=M.expirationTime,E(B,M);else break;M=O(A)}}function vl(b){if(Ae=!1,ul(b),!Ue)if(O(B)!==null)Ue=!0,Ze||(Ze=!0,Ke());else{var M=O(A);M!==null&&Be(vl,M.startTime-b)}}var Ze=!1,F=-1,Ve=5,ml=-1;function Yl(){return Al?!0:!(g.unstable_now()-ml<Ve)}function xe(){if(Al=!1,Ze){var b=g.unstable_now();ml=b;var M=!0;try{e:{Ue=!1,Ae&&(Ae=!1,Le(F),F=-1),Xe=!0;var X=re;try{l:{for(ul(b),Y=O(B);Y!==null&&!(Y.expirationTime>b&&Yl());){var oe=Y.callback;if(typeof oe=="function"){Y.callback=null,re=Y.priorityLevel;var de=oe(Y.expirationTime<=b);if(b=g.unstable_now(),typeof de=="function"){Y.callback=de,ul(b),M=!0;break l}Y===O(B)&&f(B),ul(b)}else f(B);Y=O(B)}if(Y!==null)M=!0;else{var o=O(A);o!==null&&Be(vl,o.startTime-b),M=!1}}break e}finally{Y=null,re=X,Xe=!1}M=void 0}}finally{M?Ke():Ze=!1}}}var Ke;if(typeof He=="function")Ke=function(){He(xe)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,Sl=Ce.port2;Ce.port1.onmessage=xe,Ke=function(){Sl.postMessage(null)}}else Ke=function(){tl(xe,0)};function Be(b,M){F=tl(function(){b(g.unstable_now())},M)}g.unstable_IdlePriority=5,g.unstable_ImmediatePriority=1,g.unstable_LowPriority=4,g.unstable_NormalPriority=3,g.unstable_Profiling=null,g.unstable_UserBlockingPriority=2,g.unstable_cancelCallback=function(b){b.callback=null},g.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ve=0<b?Math.floor(1e3/b):5},g.unstable_getCurrentPriorityLevel=function(){return re},g.unstable_next=function(b){switch(re){case 1:case 2:case 3:var M=3;break;default:M=re}var X=re;re=M;try{return b()}finally{re=X}},g.unstable_requestPaint=function(){Al=!0},g.unstable_runWithPriority=function(b,M){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var X=re;re=b;try{return M()}finally{re=X}},g.unstable_scheduleCallback=function(b,M,X){var oe=g.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?oe+X:oe):X=oe,b){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=X+de,b={id:H++,callback:M,priorityLevel:b,startTime:X,expirationTime:de,sortIndex:-1},X>oe?(b.sortIndex=X,E(A,b),O(B)===null&&b===O(A)&&(Ae?(Le(F),F=-1):Ae=!0,Be(vl,X-oe))):(b.sortIndex=de,E(B,b),Ue||Xe||(Ue=!0,Ze||(Ze=!0,Ke()))),b},g.unstable_shouldYield=Yl,g.unstable_wrapCallback=function(b){var M=re;return function(){var X=re;re=M;try{return b.apply(this,arguments)}finally{re=X}}}})(Yi)),Yi}var a1;function Qm(){return a1||(a1=1,qi.exports=Gm()),qi.exports}var Gi={exports:{}},al={};var t1;function Xm(){if(t1)return al;t1=1;var g=Wi();function E(B){var A="https://react.dev/errors/"+B;if(1<arguments.length){A+="?args[]="+encodeURIComponent(arguments[1]);for(var H=2;H<arguments.length;H++)A+="&args[]="+encodeURIComponent(arguments[H])}return"Minified React error #"+B+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(){}var f={d:{f:O,r:function(){throw Error(E(522))},D:O,C:O,L:O,m:O,X:O,S:O,M:O},p:0,findDOMNode:null},N=Symbol.for("react.portal");function q(B,A,H){var Y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:Y==null?null:""+Y,children:B,containerInfo:A,implementation:H}}var K=g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(B,A){if(B==="font")return"";if(typeof A=="string")return A==="use-credentials"?A:""}return al.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,al.createPortal=function(B,A){var H=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error(E(299));return q(B,A,null,H)},al.flushSync=function(B){var A=K.T,H=f.p;try{if(K.T=null,f.p=2,B)return B()}finally{K.T=A,f.p=H,f.d.f()}},al.preconnect=function(B,A){typeof B=="string"&&(A?(A=A.crossOrigin,A=typeof A=="string"?A==="use-credentials"?A:"":void 0):A=null,f.d.C(B,A))},al.prefetchDNS=function(B){typeof B=="string"&&f.d.D(B)},al.preinit=function(B,A){if(typeof B=="string"&&A&&typeof A.as=="string"){var H=A.as,Y=k(H,A.crossOrigin),re=typeof A.integrity=="string"?A.integrity:void 0,Xe=typeof A.fetchPriority=="string"?A.fetchPriority:void 0;H==="style"?f.d.S(B,typeof A.precedence=="string"?A.precedence:void 0,{crossOrigin:Y,integrity:re,fetchPriority:Xe}):H==="script"&&f.d.X(B,{crossOrigin:Y,integrity:re,fetchPriority:Xe,nonce:typeof A.nonce=="string"?A.nonce:void 0})}},al.preinitModule=function(B,A){if(typeof B=="string")if(typeof A=="object"&&A!==null){if(A.as==null||A.as==="script"){var H=k(A.as,A.crossOrigin);f.d.M(B,{crossOrigin:H,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0})}}else A==null&&f.d.M(B)},al.preload=function(B,A){if(typeof B=="string"&&typeof A=="object"&&A!==null&&typeof A.as=="string"){var H=A.as,Y=k(H,A.crossOrigin);f.d.L(B,H,{crossOrigin:Y,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,type:typeof A.type=="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy=="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet=="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes=="string"?A.imageSizes:void 0,media:typeof A.media=="string"?A.media:void 0})}},al.preloadModule=function(B,A){if(typeof B=="string")if(A){var H=k(A.as,A.crossOrigin);f.d.m(B,{as:typeof A.as=="string"&&A.as!=="script"?A.as:void 0,crossOrigin:H,integrity:typeof A.integrity=="string"?A.integrity:void 0})}else f.d.m(B)},al.requestFormReset=function(B){f.d.r(B)},al.unstable_batchedUpdates=function(B,A){return B(A)},al.useFormState=function(B,A,H){return K.H.useFormState(B,A,H)},al.useFormStatus=function(){return K.H.useHostTransitionStatus()},al.version="19.2.0",al}var u1;function Lm(){if(u1)return Gi.exports;u1=1;function g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g)}catch(E){console.error(E)}}return g(),Gi.exports=Xm(),Gi.exports}var n1;function Zm(){if(n1)return Xu;n1=1;var g=Qm(),E=Wi(),O=Lm();function f(e){var l="https://react.dev/errors/"+e;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)l+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function q(e){var l=e,a=e;if(e.alternate)for(;l.return;)l=l.return;else{e=l;do l=e,(l.flags&4098)!==0&&(a=l.return),e=l.return;while(e)}return l.tag===3?a:null}function K(e){if(e.tag===13){var l=e.memoizedState;if(l===null&&(e=e.alternate,e!==null&&(l=e.memoizedState)),l!==null)return l.dehydrated}return null}function k(e){if(e.tag===31){var l=e.memoizedState;if(l===null&&(e=e.alternate,e!==null&&(l=e.memoizedState)),l!==null)return l.dehydrated}return null}function B(e){if(q(e)!==e)throw Error(f(188))}function A(e){var l=e.alternate;if(!l){if(l=q(e),l===null)throw Error(f(188));return l!==e?null:e}for(var a=e,t=l;;){var u=a.return;if(u===null)break;var n=u.alternate;if(n===null){if(t=u.return,t!==null){a=t;continue}break}if(u.child===n.child){for(n=u.child;n;){if(n===a)return B(u),e;if(n===t)return B(u),l;n=n.sibling}throw Error(f(188))}if(a.return!==t.return)a=u,t=n;else{for(var s=!1,i=u.child;i;){if(i===a){s=!0,a=u,t=n;break}if(i===t){s=!0,t=u,a=n;break}i=i.sibling}if(!s){for(i=n.child;i;){if(i===a){s=!0,a=n,t=u;break}if(i===t){s=!0,t=n,a=u;break}i=i.sibling}if(!s)throw Error(f(189))}}if(a.alternate!==t)throw Error(f(190))}if(a.tag!==3)throw Error(f(188));return a.stateNode.current===a?e:l}function H(e){var l=e.tag;if(l===5||l===26||l===27||l===6)return e;for(e=e.child;e!==null;){if(l=H(e),l!==null)return l;e=e.sibling}return null}var Y=Object.assign,re=Symbol.for("react.element"),Xe=Symbol.for("react.transitional.element"),Ue=Symbol.for("react.portal"),Ae=Symbol.for("react.fragment"),Al=Symbol.for("react.strict_mode"),tl=Symbol.for("react.profiler"),Le=Symbol.for("react.consumer"),He=Symbol.for("react.context"),ul=Symbol.for("react.forward_ref"),vl=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),ml=Symbol.for("react.activity"),Yl=Symbol.for("react.memo_cache_sentinel"),xe=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=xe&&e[xe]||e["@@iterator"],typeof e=="function"?e:null)}var Ce=Symbol.for("react.client.reference");function Sl(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ce?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ae:return"Fragment";case tl:return"Profiler";case Al:return"StrictMode";case vl:return"Suspense";case Ze:return"SuspenseList";case ml:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ue:return"Portal";case He:return e.displayName||"Context";case Le:return(e._context.displayName||"Context")+".Consumer";case ul:var l=e.render;return e=e.displayName,e||(e=l.displayName||l.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return l=e.displayName||null,l!==null?l:Sl(e.type)||"Memo";case Ve:l=e._payload,e=e._init;try{return Sl(e(l))}catch{}}return null}var Be=Array.isArray,b=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=O.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},oe=[],de=-1;function o(e){return{current:e}}function S(e){0>de||(e.current=oe[de],oe[de]=null,de--)}function z(e,l){de++,oe[de]=e.current,e.current=l}var D=o(null),Q=o(null),I=o(null),ue=o(null);function qe(e,l){switch(z(I,l),z(Q,e),z(D,null),l.nodeType){case 9:case 11:e=(e=l.documentElement)&&(e=e.namespaceURI)?bf(e):0;break;default:if(e=l.tagName,l=l.namespaceURI)l=bf(l),e=jf(l,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}S(D),z(D,e)}function ge(){S(D),S(Q),S(I)}function Gl(e){e.memoizedState!==null&&z(ue,e);var l=D.current,a=jf(l,e.type);l!==a&&(z(Q,e),z(D,a))}function Ql(e){Q.current===e&&(S(D),S(Q)),ue.current===e&&(S(ue),Hu._currentValue=X)}var be,el;function Cl(e){if(be===void 0)try{throw Error()}catch(a){var l=a.stack.trim().match(/\n( *(at )?)/);be=l&&l[1]||"",el=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+be+e+el}var Xl=!1;function Je(e,l){if(!e||Xl)return"";Xl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(l){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(x){var y=x}Reflect.construct(e,[],T)}else{try{T.call()}catch(x){y=x}e.call(T.prototype)}}else{try{throw Error()}catch(x){y=x}(T=e())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(x){if(x&&y&&typeof x.stack=="string")return[x.stack,y.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=t.DetermineComponentFrameRoot(),s=n[0],i=n[1];if(s&&i){var r=s.split(`
`),p=i.split(`
`);for(u=t=0;t<r.length&&!r[t].includes("DetermineComponentFrameRoot");)t++;for(;u<p.length&&!p[u].includes("DetermineComponentFrameRoot");)u++;if(t===r.length||u===p.length)for(t=r.length-1,u=p.length-1;1<=t&&0<=u&&r[t]!==p[u];)u--;for(;1<=t&&0<=u;t--,u--)if(r[t]!==p[u]){if(t!==1||u!==1)do if(t--,u--,0>u||r[t]!==p[u]){var j=`
`+r[t].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=t&&0<=u);break}}}finally{Xl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Cl(a):""}function wc(e,l){switch(e.tag){case 26:case 27:case 5:return Cl(e.type);case 16:return Cl("Lazy");case 13:return e.child!==l&&l!==null?Cl("Suspense Fallback"):Cl("Suspense");case 19:return Cl("SuspenseList");case 0:case 15:return Je(e.type,!1);case 11:return Je(e.type.render,!1);case 1:return Je(e.type,!0);case 31:return Cl("Activity");default:return""}}function ut(e){try{var l="",a=null;do l+=wc(e,a),a=e,e=e.return;while(e);return l}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var nt=Object.prototype.hasOwnProperty,ct=g.unstable_scheduleCallback,st=g.unstable_cancelCallback,da=g.unstable_shouldYield,it=g.unstable_requestPaint,ll=g.unstable_now,Ju=g.unstable_getCurrentPriorityLevel,kt=g.unstable_ImmediatePriority,ku=g.unstable_UserBlockingPriority,rt=g.unstable_NormalPriority,It=g.unstable_LowPriority,Iu=g.unstable_IdlePriority,v=g.log,_=g.unstable_setDisableYieldValue,C=null,W=null;function ke(e){if(typeof v=="function"&&_(e),W&&typeof W.setStrictMode=="function")try{W.setStrictMode(C,e)}catch{}}var hl=Math.clz32?Math.clz32:j1,x1=Math.log,b1=Math.LN2;function j1(e){return e>>>=0,e===0?32:31-(x1(e)/b1|0)|0}var $u=256,Wu=262144,Fu=4194304;function qa(e){var l=e&42;if(l!==0)return l;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pu(e,l,a){var t=e.pendingLanes;if(t===0)return 0;var u=0,n=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var i=t&134217727;return i!==0?(t=i&~n,t!==0?u=qa(t):(s&=i,s!==0?u=qa(s):a||(a=i&~e,a!==0&&(u=qa(a))))):(i=t&~n,i!==0?u=qa(i):s!==0?u=qa(s):a||(a=t&~e,a!==0&&(u=qa(a)))),u===0?0:l!==0&&l!==u&&(l&n)===0&&(n=u&-u,a=l&-l,n>=a||n===32&&(a&4194048)!==0)?l:u}function $t(e,l){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&l)===0}function w1(e,l){switch(e){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pi(){var e=Fu;return Fu<<=1,(Fu&62914560)===0&&(Fu=4194304),e}function Ac(e){for(var l=[],a=0;31>a;a++)l.push(e);return l}function Wt(e,l){e.pendingLanes|=l,l!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function A1(e,l,a,t,u,n){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var i=e.entanglements,r=e.expirationTimes,p=e.hiddenUpdates;for(a=s&~a;0<a;){var j=31-hl(a),T=1<<j;i[j]=0,r[j]=-1;var y=p[j];if(y!==null)for(p[j]=null,j=0;j<y.length;j++){var x=y[j];x!==null&&(x.lane&=-536870913)}a&=~T}t!==0&&er(e,t,0),n!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=n&~(s&~l))}function er(e,l,a){e.pendingLanes|=l,e.suspendedLanes&=~l;var t=31-hl(l);e.entangledLanes|=l,e.entanglements[t]=e.entanglements[t]|1073741824|a&261930}function lr(e,l){var a=e.entangledLanes|=l;for(e=e.entanglements;a;){var t=31-hl(a),u=1<<t;u&l|e[t]&l&&(e[t]|=l),a&=~u}}function ar(e,l){var a=l&-l;return a=(a&42)!==0?1:Sc(a),(a&(e.suspendedLanes|l))!==0?0:a}function Sc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Tc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tr(){var e=M.p;return e!==0?e:(e=window.event,e===void 0?32:Zf(e.type))}function ur(e,l){var a=M.p;try{return M.p=e,l()}finally{M.p=a}}var fa=Math.random().toString(36).slice(2),Ie="__reactFiber$"+fa,cl="__reactProps$"+fa,ot="__reactContainer$"+fa,zc="__reactEvents$"+fa,S1="__reactListeners$"+fa,T1="__reactHandles$"+fa,nr="__reactResources$"+fa,Ft="__reactMarker$"+fa;function Ec(e){delete e[Ie],delete e[cl],delete e[zc],delete e[S1],delete e[T1]}function dt(e){var l=e[Ie];if(l)return l;for(var a=e.parentNode;a;){if(l=a[ot]||a[Ie]){if(a=l.alternate,l.child!==null||a!==null&&a.child!==null)for(e=Nf(e);e!==null;){if(a=e[Ie])return a;e=Nf(e)}return l}e=a,a=e.parentNode}return null}function ft(e){if(e=e[Ie]||e[ot]){var l=e.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return e}return null}function Pt(e){var l=e.tag;if(l===5||l===26||l===27||l===6)return e.stateNode;throw Error(f(33))}function vt(e){var l=e[nr];return l||(l=e[nr]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function Ye(e){e[Ft]=!0}var cr=new Set,sr={};function Ya(e,l){mt(e,l),mt(e+"Capture",l)}function mt(e,l){for(sr[e]=l,e=0;e<l.length;e++)cr.add(l[e])}var z1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ir={},rr={};function E1(e){return nt.call(rr,e)?!0:nt.call(ir,e)?!1:z1.test(e)?rr[e]=!0:(ir[e]=!0,!1)}function en(e,l,a){if(E1(l))if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(l);return;case"boolean":var t=l.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){e.removeAttribute(l);return}}e.setAttribute(l,""+a)}}function ln(e,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttribute(l,""+a)}}function Jl(e,l,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(l,a,""+t)}}function Tl(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function or(e){var l=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function N1(e,l,a){var t=Object.getOwnPropertyDescriptor(e.constructor.prototype,l);if(!e.hasOwnProperty(l)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var u=t.get,n=t.set;return Object.defineProperty(e,l,{configurable:!0,get:function(){return u.call(this)},set:function(s){a=""+s,n.call(this,s)}}),Object.defineProperty(e,l,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[l]}}}}function Nc(e){if(!e._valueTracker){var l=or(e)?"checked":"value";e._valueTracker=N1(e,l,""+e[l])}}function dr(e){if(!e)return!1;var l=e._valueTracker;if(!l)return!0;var a=l.getValue(),t="";return e&&(t=or(e)?e.checked?"true":"false":e.value),e=t,e!==a?(l.setValue(e),!0):!1}function an(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var B1=/[\n"\\]/g;function zl(e){return e.replace(B1,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function Bc(e,l,a,t,u,n,s,i){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),l!=null?s==="number"?(l===0&&e.value===""||e.value!=l)&&(e.value=""+Tl(l)):e.value!==""+Tl(l)&&(e.value=""+Tl(l)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),l!=null?Mc(e,s,Tl(l)):a!=null?Mc(e,s,Tl(a)):t!=null&&e.removeAttribute("value"),u==null&&n!=null&&(e.defaultChecked=!!n),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.name=""+Tl(i):e.removeAttribute("name")}function fr(e,l,a,t,u,n,s,i){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),l!=null||a!=null){if(!(n!=="submit"&&n!=="reset"||l!=null)){Nc(e);return}a=a!=null?""+Tl(a):"",l=l!=null?""+Tl(l):a,i||l===e.value||(e.value=l),e.defaultValue=l}t=t??u,t=typeof t!="function"&&typeof t!="symbol"&&!!t,e.checked=i?e.checked:!!t,e.defaultChecked=!!t,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Nc(e)}function Mc(e,l,a){l==="number"&&an(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ht(e,l,a,t){if(e=e.options,l){l={};for(var u=0;u<a.length;u++)l["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=l.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&t&&(e[a].defaultSelected=!0)}else{for(a=""+Tl(a),l=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,t&&(e[u].defaultSelected=!0);return}l!==null||e[u].disabled||(l=e[u])}l!==null&&(l.selected=!0)}}function vr(e,l,a){if(l!=null&&(l=""+Tl(l),l!==e.value&&(e.value=l),a==null)){e.defaultValue!==l&&(e.defaultValue=l);return}e.defaultValue=a!=null?""+Tl(a):""}function mr(e,l,a,t){if(l==null){if(t!=null){if(a!=null)throw Error(f(92));if(Be(t)){if(1<t.length)throw Error(f(93));t=t[0]}a=t}a==null&&(a=""),l=a}a=Tl(l),e.defaultValue=a,t=e.textContent,t===a&&t!==""&&t!==null&&(e.value=t),Nc(e)}function pt(e,l){if(l){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=l;return}}e.textContent=l}var M1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hr(e,l,a){var t=l.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?t?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="":t?e.setProperty(l,a):typeof a!="number"||a===0||M1.has(l)?l==="float"?e.cssFloat=a:e[l]=(""+a).trim():e[l]=a+"px"}function pr(e,l,a){if(l!=null&&typeof l!="object")throw Error(f(62));if(e=e.style,a!=null){for(var t in a)!a.hasOwnProperty(t)||l!=null&&l.hasOwnProperty(t)||(t.indexOf("--")===0?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="");for(var u in l)t=l[u],l.hasOwnProperty(u)&&a[u]!==t&&hr(e,u,t)}else for(var n in l)l.hasOwnProperty(n)&&hr(e,n,l[n])}function Oc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var O1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tn(e){return _1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function kl(){}var _c=null;function Dc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yt=null,gt=null;function yr(e){var l=ft(e);if(l&&(e=l.stateNode)){var a=e[cl]||null;e:switch(e=l.stateNode,l.type){case"input":if(Bc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),l=a.name,a.type==="radio"&&l!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+zl(""+l)+'"][type="radio"]'),l=0;l<a.length;l++){var t=a[l];if(t!==e&&t.form===e.form){var u=t[cl]||null;if(!u)throw Error(f(90));Bc(t,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(l=0;l<a.length;l++)t=a[l],t.form===e.form&&dr(t)}break e;case"textarea":vr(e,a.value,a.defaultValue);break e;case"select":l=a.value,l!=null&&ht(e,!!a.multiple,l,!1)}}}var Uc=!1;function gr(e,l,a){if(Uc)return e(l,a);Uc=!0;try{var t=e(l);return t}finally{if(Uc=!1,(yt!==null||gt!==null)&&(Vn(),yt&&(l=yt,e=gt,gt=yt=null,yr(l),e)))for(l=0;l<e.length;l++)yr(e[l])}}function eu(e,l){var a=e.stateNode;if(a===null)return null;var t=a[cl]||null;if(t===null)return null;a=t[l];e:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(f(231,l,typeof a));return a}var Il=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cc=!1;if(Il)try{var lu={};Object.defineProperty(lu,"passive",{get:function(){Cc=!0}}),window.addEventListener("test",lu,lu),window.removeEventListener("test",lu,lu)}catch{Cc=!1}var va=null,Rc=null,un=null;function xr(){if(un)return un;var e,l=Rc,a=l.length,t,u="value"in va?va.value:va.textContent,n=u.length;for(e=0;e<a&&l[e]===u[e];e++);var s=a-e;for(t=1;t<=s&&l[a-t]===u[n-t];t++);return un=u.slice(e,1<t?1-t:void 0)}function nn(e){var l=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&l===13&&(e=13)):e=l,e===10&&(e=13),32<=e||e===13?e:0}function cn(){return!0}function br(){return!1}function sl(e){function l(a,t,u,n,s){this._reactName=a,this._targetInst=u,this.type=t,this.nativeEvent=n,this.target=s,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(a=e[i],this[i]=a?a(n):n[i]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?cn:br,this.isPropagationStopped=br,this}return Y(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cn)},persist:function(){},isPersistent:cn}),l}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sn=sl(Ga),au=Y({},Ga,{view:0,detail:0}),D1=sl(au),Hc,qc,tu,rn=Y({},au,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tu&&(tu&&e.type==="mousemove"?(Hc=e.screenX-tu.screenX,qc=e.screenY-tu.screenY):qc=Hc=0,tu=e),Hc)},movementY:function(e){return"movementY"in e?e.movementY:qc}}),jr=sl(rn),U1=Y({},rn,{dataTransfer:0}),C1=sl(U1),R1=Y({},au,{relatedTarget:0}),Yc=sl(R1),H1=Y({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),q1=sl(H1),Y1=Y({},Ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),G1=sl(Y1),Q1=Y({},Ga,{data:0}),wr=sl(Q1),X1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V1(e){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(e):(e=Z1[e])?!!l[e]:!1}function Gc(){return V1}var K1=Y({},au,{key:function(e){if(e.key){var l=X1[e.key]||e.key;if(l!=="Unidentified")return l}return e.type==="keypress"?(e=nn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?L1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(e){return e.type==="keypress"?nn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J1=sl(K1),k1=Y({},rn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ar=sl(k1),I1=Y({},au,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),$1=sl(I1),W1=Y({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),F1=sl(W1),P1=Y({},rn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ev=sl(P1),lv=Y({},Ga,{newState:0,oldState:0}),av=sl(lv),tv=[9,13,27,32],Qc=Il&&"CompositionEvent"in window,uu=null;Il&&"documentMode"in document&&(uu=document.documentMode);var uv=Il&&"TextEvent"in window&&!uu,Sr=Il&&(!Qc||uu&&8<uu&&11>=uu),Tr=" ",zr=!1;function Er(e,l){switch(e){case"keyup":return tv.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xt=!1;function nv(e,l){switch(e){case"compositionend":return Nr(l);case"keypress":return l.which!==32?null:(zr=!0,Tr);case"textInput":return e=l.data,e===Tr&&zr?null:e;default:return null}}function cv(e,l){if(xt)return e==="compositionend"||!Qc&&Er(e,l)?(e=xr(),un=Rc=va=null,xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return Sr&&l.locale!=="ko"?null:l.data;default:return null}}var sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Br(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l==="input"?!!sv[e.type]:l==="textarea"}function Mr(e,l,a,t){yt?gt?gt.push(t):gt=[t]:yt=t,l=Fn(l,"onChange"),0<l.length&&(a=new sn("onChange","change",null,a,t),e.push({event:a,listeners:l}))}var nu=null,cu=null;function iv(e){mf(e,0)}function on(e){var l=Pt(e);if(dr(l))return e}function Or(e,l){if(e==="change")return l}var _r=!1;if(Il){var Xc;if(Il){var Lc="oninput"in document;if(!Lc){var Dr=document.createElement("div");Dr.setAttribute("oninput","return;"),Lc=typeof Dr.oninput=="function"}Xc=Lc}else Xc=!1;_r=Xc&&(!document.documentMode||9<document.documentMode)}function Ur(){nu&&(nu.detachEvent("onpropertychange",Cr),cu=nu=null)}function Cr(e){if(e.propertyName==="value"&&on(cu)){var l=[];Mr(l,cu,e,Dc(e)),gr(iv,l)}}function rv(e,l,a){e==="focusin"?(Ur(),nu=l,cu=a,nu.attachEvent("onpropertychange",Cr)):e==="focusout"&&Ur()}function ov(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return on(cu)}function dv(e,l){if(e==="click")return on(l)}function fv(e,l){if(e==="input"||e==="change")return on(l)}function vv(e,l){return e===l&&(e!==0||1/e===1/l)||e!==e&&l!==l}var pl=typeof Object.is=="function"?Object.is:vv;function su(e,l){if(pl(e,l))return!0;if(typeof e!="object"||e===null||typeof l!="object"||l===null)return!1;var a=Object.keys(e),t=Object.keys(l);if(a.length!==t.length)return!1;for(t=0;t<a.length;t++){var u=a[t];if(!nt.call(l,u)||!pl(e[u],l[u]))return!1}return!0}function Rr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hr(e,l){var a=Rr(e);e=0;for(var t;a;){if(a.nodeType===3){if(t=e+a.textContent.length,e<=l&&t>=l)return{node:a,offset:l-e};e=t}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rr(a)}}function qr(e,l){return e&&l?e===l?!0:e&&e.nodeType===3?!1:l&&l.nodeType===3?qr(e,l.parentNode):"contains"in e?e.contains(l):e.compareDocumentPosition?!!(e.compareDocumentPosition(l)&16):!1:!1}function Yr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var l=an(e.document);l instanceof e.HTMLIFrameElement;){try{var a=typeof l.contentWindow.location.href=="string"}catch{a=!1}if(a)e=l.contentWindow;else break;l=an(e.document)}return l}function Zc(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l&&(l==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||l==="textarea"||e.contentEditable==="true")}var mv=Il&&"documentMode"in document&&11>=document.documentMode,bt=null,Vc=null,iu=null,Kc=!1;function Gr(e,l,a){var t=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||bt==null||bt!==an(t)||(t=bt,"selectionStart"in t&&Zc(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),iu&&su(iu,t)||(iu=t,t=Fn(Vc,"onSelect"),0<t.length&&(l=new sn("onSelect","select",null,l,a),e.push({event:l,listeners:t}),l.target=bt)))}function Qa(e,l){var a={};return a[e.toLowerCase()]=l.toLowerCase(),a["Webkit"+e]="webkit"+l,a["Moz"+e]="moz"+l,a}var jt={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},Jc={},Qr={};Il&&(Qr=document.createElement("div").style,"AnimationEvent"in window||(delete jt.animationend.animation,delete jt.animationiteration.animation,delete jt.animationstart.animation),"TransitionEvent"in window||delete jt.transitionend.transition);function Xa(e){if(Jc[e])return Jc[e];if(!jt[e])return e;var l=jt[e],a;for(a in l)if(l.hasOwnProperty(a)&&a in Qr)return Jc[e]=l[a];return e}var Xr=Xa("animationend"),Lr=Xa("animationiteration"),Zr=Xa("animationstart"),hv=Xa("transitionrun"),pv=Xa("transitionstart"),yv=Xa("transitioncancel"),Vr=Xa("transitionend"),Kr=new Map,kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kc.push("scrollEnd");function Rl(e,l){Kr.set(e,l),Ya(l,[e])}var dn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},El=[],wt=0,Ic=0;function fn(){for(var e=wt,l=Ic=wt=0;l<e;){var a=El[l];El[l++]=null;var t=El[l];El[l++]=null;var u=El[l];El[l++]=null;var n=El[l];if(El[l++]=null,t!==null&&u!==null){var s=t.pending;s===null?u.next=u:(u.next=s.next,s.next=u),t.pending=u}n!==0&&Jr(a,u,n)}}function vn(e,l,a,t){El[wt++]=e,El[wt++]=l,El[wt++]=a,El[wt++]=t,Ic|=t,e.lanes|=t,e=e.alternate,e!==null&&(e.lanes|=t)}function $c(e,l,a,t){return vn(e,l,a,t),mn(e)}function La(e,l){return vn(e,null,null,l),mn(e)}function Jr(e,l,a){e.lanes|=a;var t=e.alternate;t!==null&&(t.lanes|=a);for(var u=!1,n=e.return;n!==null;)n.childLanes|=a,t=n.alternate,t!==null&&(t.childLanes|=a),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(u=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,u&&l!==null&&(u=31-hl(a),e=n.hiddenUpdates,t=e[u],t===null?e[u]=[l]:t.push(l),l.lane=a|536870912),n):null}function mn(e){if(50<Mu)throw Mu=0,ni=null,Error(f(185));for(var l=e.return;l!==null;)e=l,l=e.return;return e.tag===3?e.stateNode:null}var At={};function gv(e,l,a,t){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yl(e,l,a,t){return new gv(e,l,a,t)}function Wc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $l(e,l){var a=e.alternate;return a===null?(a=yl(e.tag,l,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=l,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,l=e.dependencies,a.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function kr(e,l){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=l,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,l=a.dependencies,e.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),e}function hn(e,l,a,t,u,n){var s=0;if(t=e,typeof e=="function")Wc(e)&&(s=1);else if(typeof e=="string")s=Am(e,a,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ml:return e=yl(31,a,l,u),e.elementType=ml,e.lanes=n,e;case Ae:return Za(a.children,u,n,l);case Al:s=8,u|=24;break;case tl:return e=yl(12,a,l,u|2),e.elementType=tl,e.lanes=n,e;case vl:return e=yl(13,a,l,u),e.elementType=vl,e.lanes=n,e;case Ze:return e=yl(19,a,l,u),e.elementType=Ze,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case He:s=10;break e;case Le:s=9;break e;case ul:s=11;break e;case F:s=14;break e;case Ve:s=16,t=null;break e}s=29,a=Error(f(130,e===null?"null":typeof e,"")),t=null}return l=yl(s,a,l,u),l.elementType=e,l.type=t,l.lanes=n,l}function Za(e,l,a,t){return e=yl(7,e,t,l),e.lanes=a,e}function Fc(e,l,a){return e=yl(6,e,null,l),e.lanes=a,e}function Ir(e){var l=yl(18,null,null,0);return l.stateNode=e,l}function Pc(e,l,a){return l=yl(4,e.children!==null?e.children:[],e.key,l),l.lanes=a,l.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},l}var $r=new WeakMap;function Nl(e,l){if(typeof e=="object"&&e!==null){var a=$r.get(e);return a!==void 0?a:(l={value:e,source:l,stack:ut(l)},$r.set(e,l),l)}return{value:e,source:l,stack:ut(l)}}var St=[],Tt=0,pn=null,ru=0,Bl=[],Ml=0,ma=null,Ll=1,Zl="";function Wl(e,l){St[Tt++]=ru,St[Tt++]=pn,pn=e,ru=l}function Wr(e,l,a){Bl[Ml++]=Ll,Bl[Ml++]=Zl,Bl[Ml++]=ma,ma=e;var t=Ll;e=Zl;var u=32-hl(t)-1;t&=~(1<<u),a+=1;var n=32-hl(l)+u;if(30<n){var s=u-u%5;n=(t&(1<<s)-1).toString(32),t>>=s,u-=s,Ll=1<<32-hl(l)+u|a<<u|t,Zl=n+e}else Ll=1<<n|a<<u|t,Zl=e}function es(e){e.return!==null&&(Wl(e,1),Wr(e,1,0))}function ls(e){for(;e===pn;)pn=St[--Tt],St[Tt]=null,ru=St[--Tt],St[Tt]=null;for(;e===ma;)ma=Bl[--Ml],Bl[Ml]=null,Zl=Bl[--Ml],Bl[Ml]=null,Ll=Bl[--Ml],Bl[Ml]=null}function Fr(e,l){Bl[Ml++]=Ll,Bl[Ml++]=Zl,Bl[Ml++]=ma,Ll=l.id,Zl=l.overflow,ma=e}var $e=null,je=null,te=!1,ha=null,Ol=!1,as=Error(f(519));function pa(e){var l=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ou(Nl(l,e)),as}function Pr(e){var l=e.stateNode,a=e.type,t=e.memoizedProps;switch(l[Ie]=e,l[cl]=t,a){case"dialog":ee("cancel",l),ee("close",l);break;case"iframe":case"object":case"embed":ee("load",l);break;case"video":case"audio":for(a=0;a<_u.length;a++)ee(_u[a],l);break;case"source":ee("error",l);break;case"img":case"image":case"link":ee("error",l),ee("load",l);break;case"details":ee("toggle",l);break;case"input":ee("invalid",l),fr(l,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":ee("invalid",l);break;case"textarea":ee("invalid",l),mr(l,t.value,t.defaultValue,t.children)}a=t.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||l.textContent===""+a||t.suppressHydrationWarning===!0||gf(l.textContent,a)?(t.popover!=null&&(ee("beforetoggle",l),ee("toggle",l)),t.onScroll!=null&&ee("scroll",l),t.onScrollEnd!=null&&ee("scrollend",l),t.onClick!=null&&(l.onclick=kl),l=!0):l=!1,l||pa(e,!0)}function eo(e){for($e=e.return;$e;)switch($e.tag){case 5:case 31:case 13:Ol=!1;return;case 27:case 3:Ol=!0;return;default:$e=$e.return}}function zt(e){if(e!==$e)return!1;if(!te)return eo(e),te=!0,!1;var l=e.tag,a;if((a=l!==3&&l!==27)&&((a=l===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||bi(e.type,e.memoizedProps)),a=!a),a&&je&&pa(e),eo(e),l===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));je=Ef(e)}else if(l===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));je=Ef(e)}else l===27?(l=je,Ma(e.type)?(e=Ti,Ti=null,je=e):je=l):je=$e?Dl(e.stateNode.nextSibling):null;return!0}function Va(){je=$e=null,te=!1}function ts(){var e=ha;return e!==null&&(dl===null?dl=e:dl.push.apply(dl,e),ha=null),e}function ou(e){ha===null?ha=[e]:ha.push(e)}var us=o(null),Ka=null,Fl=null;function ya(e,l,a){z(us,l._currentValue),l._currentValue=a}function Pl(e){e._currentValue=us.current,S(us)}function ns(e,l,a){for(;e!==null;){var t=e.alternate;if((e.childLanes&l)!==l?(e.childLanes|=l,t!==null&&(t.childLanes|=l)):t!==null&&(t.childLanes&l)!==l&&(t.childLanes|=l),e===a)break;e=e.return}}function cs(e,l,a,t){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var n=u.dependencies;if(n!==null){var s=u.child;n=n.firstContext;e:for(;n!==null;){var i=n;n=u;for(var r=0;r<l.length;r++)if(i.context===l[r]){n.lanes|=a,i=n.alternate,i!==null&&(i.lanes|=a),ns(n.return,a,e),t||(s=null);break e}n=i.next}}else if(u.tag===18){if(s=u.return,s===null)throw Error(f(341));s.lanes|=a,n=s.alternate,n!==null&&(n.lanes|=a),ns(s,a,e),s=null}else s=u.child;if(s!==null)s.return=u;else for(s=u;s!==null;){if(s===e){s=null;break}if(u=s.sibling,u!==null){u.return=s.return,s=u;break}s=s.return}u=s}}function Et(e,l,a,t){e=null;for(var u=l,n=!1;u!==null;){if(!n){if((u.flags&524288)!==0)n=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var s=u.alternate;if(s===null)throw Error(f(387));if(s=s.memoizedProps,s!==null){var i=u.type;pl(u.pendingProps.value,s.value)||(e!==null?e.push(i):e=[i])}}else if(u===ue.current){if(s=u.alternate,s===null)throw Error(f(387));s.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Hu):e=[Hu])}u=u.return}e!==null&&cs(l,e,a,t),l.flags|=262144}function yn(e){for(e=e.firstContext;e!==null;){if(!pl(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){Ka=e,Fl=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function We(e){return lo(Ka,e)}function gn(e,l){return Ka===null&&Ja(e),lo(e,l)}function lo(e,l){var a=l._currentValue;if(l={context:l,memoizedValue:a,next:null},Fl===null){if(e===null)throw Error(f(308));Fl=l,e.dependencies={lanes:0,firstContext:l},e.flags|=524288}else Fl=Fl.next=l;return a}var xv=typeof AbortController<"u"?AbortController:function(){var e=[],l=this.signal={aborted:!1,addEventListener:function(a,t){e.push(t)}};this.abort=function(){l.aborted=!0,e.forEach(function(a){return a()})}},bv=g.unstable_scheduleCallback,jv=g.unstable_NormalPriority,Me={$$typeof:He,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ss(){return{controller:new xv,data:new Map,refCount:0}}function du(e){e.refCount--,e.refCount===0&&bv(jv,function(){e.controller.abort()})}var fu=null,is=0,Nt=0,Bt=null;function wv(e,l){if(fu===null){var a=fu=[];is=0,Nt=di(),Bt={status:"pending",value:void 0,then:function(t){a.push(t)}}}return is++,l.then(ao,ao),l}function ao(){if(--is===0&&fu!==null){Bt!==null&&(Bt.status="fulfilled");var e=fu;fu=null,Nt=0,Bt=null;for(var l=0;l<e.length;l++)(0,e[l])()}}function Av(e,l){var a=[],t={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){t.status="fulfilled",t.value=l;for(var u=0;u<a.length;u++)(0,a[u])(l)},function(u){for(t.status="rejected",t.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),t}var to=b.S;b.S=function(e,l){Qd=ll(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&wv(e,l),to!==null&&to(e,l)};var ka=o(null);function rs(){var e=ka.current;return e!==null?e:ye.pooledCache}function xn(e,l){l===null?z(ka,ka.current):z(ka,l.pool)}function uo(){var e=rs();return e===null?null:{parent:Me._currentValue,pool:e}}var Mt=Error(f(460)),os=Error(f(474)),bn=Error(f(542)),jn={then:function(){}};function no(e){return e=e.status,e==="fulfilled"||e==="rejected"}function co(e,l,a){switch(a=e[a],a===void 0?e.push(l):a!==l&&(l.then(kl,kl),l=a),l.status){case"fulfilled":return l.value;case"rejected":throw e=l.reason,io(e),e;default:if(typeof l.status=="string")l.then(kl,kl);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=l,e.status="pending",e.then(function(t){if(l.status==="pending"){var u=l;u.status="fulfilled",u.value=t}},function(t){if(l.status==="pending"){var u=l;u.status="rejected",u.reason=t}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw e=l.reason,io(e),e}throw $a=l,Mt}}function Ia(e){try{var l=e._init;return l(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($a=a,Mt):a}}var $a=null;function so(){if($a===null)throw Error(f(459));var e=$a;return $a=null,e}function io(e){if(e===Mt||e===bn)throw Error(f(483))}var Ot=null,vu=0;function wn(e){var l=vu;return vu+=1,Ot===null&&(Ot=[]),co(Ot,e,l)}function mu(e,l){l=l.props.ref,e.ref=l!==void 0?l:null}function An(e,l){throw l.$$typeof===re?Error(f(525)):(e=Object.prototype.toString.call(l),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":e)))}function ro(e){function l(m,d){if(e){var h=m.deletions;h===null?(m.deletions=[d],m.flags|=16):h.push(d)}}function a(m,d){if(!e)return null;for(;d!==null;)l(m,d),d=d.sibling;return null}function t(m){for(var d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function u(m,d){return m=$l(m,d),m.index=0,m.sibling=null,m}function n(m,d,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<d?(m.flags|=67108866,d):h):(m.flags|=67108866,d)):(m.flags|=1048576,d)}function s(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function i(m,d,h,w){return d===null||d.tag!==6?(d=Fc(h,m.mode,w),d.return=m,d):(d=u(d,h),d.return=m,d)}function r(m,d,h,w){var G=h.type;return G===Ae?j(m,d,h.props.children,w,h.key):d!==null&&(d.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Ve&&Ia(G)===d.type)?(d=u(d,h.props),mu(d,h),d.return=m,d):(d=hn(h.type,h.key,h.props,null,m.mode,w),mu(d,h),d.return=m,d)}function p(m,d,h,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Pc(h,m.mode,w),d.return=m,d):(d=u(d,h.children||[]),d.return=m,d)}function j(m,d,h,w,G){return d===null||d.tag!==7?(d=Za(h,m.mode,w,G),d.return=m,d):(d=u(d,h),d.return=m,d)}function T(m,d,h){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=Fc(""+d,m.mode,h),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Xe:return h=hn(d.type,d.key,d.props,null,m.mode,h),mu(h,d),h.return=m,h;case Ue:return d=Pc(d,m.mode,h),d.return=m,d;case Ve:return d=Ia(d),T(m,d,h)}if(Be(d)||Ke(d))return d=Za(d,m.mode,h,null),d.return=m,d;if(typeof d.then=="function")return T(m,wn(d),h);if(d.$$typeof===He)return T(m,gn(m,d),h);An(m,d)}return null}function y(m,d,h,w){var G=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return G!==null?null:i(m,d,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Xe:return h.key===G?r(m,d,h,w):null;case Ue:return h.key===G?p(m,d,h,w):null;case Ve:return h=Ia(h),y(m,d,h,w)}if(Be(h)||Ke(h))return G!==null?null:j(m,d,h,w,null);if(typeof h.then=="function")return y(m,d,wn(h),w);if(h.$$typeof===He)return y(m,d,gn(m,h),w);An(m,h)}return null}function x(m,d,h,w,G){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return m=m.get(h)||null,i(d,m,""+w,G);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Xe:return m=m.get(w.key===null?h:w.key)||null,r(d,m,w,G);case Ue:return m=m.get(w.key===null?h:w.key)||null,p(d,m,w,G);case Ve:return w=Ia(w),x(m,d,h,w,G)}if(Be(w)||Ke(w))return m=m.get(h)||null,j(d,m,w,G,null);if(typeof w.then=="function")return x(m,d,h,wn(w),G);if(w.$$typeof===He)return x(m,d,h,gn(d,w),G);An(d,w)}return null}function U(m,d,h,w){for(var G=null,ne=null,R=d,J=d=0,ae=null;R!==null&&J<h.length;J++){R.index>J?(ae=R,R=null):ae=R.sibling;var ce=y(m,R,h[J],w);if(ce===null){R===null&&(R=ae);break}e&&R&&ce.alternate===null&&l(m,R),d=n(ce,d,J),ne===null?G=ce:ne.sibling=ce,ne=ce,R=ae}if(J===h.length)return a(m,R),te&&Wl(m,J),G;if(R===null){for(;J<h.length;J++)R=T(m,h[J],w),R!==null&&(d=n(R,d,J),ne===null?G=R:ne.sibling=R,ne=R);return te&&Wl(m,J),G}for(R=t(R);J<h.length;J++)ae=x(R,m,J,h[J],w),ae!==null&&(e&&ae.alternate!==null&&R.delete(ae.key===null?J:ae.key),d=n(ae,d,J),ne===null?G=ae:ne.sibling=ae,ne=ae);return e&&R.forEach(function(Ca){return l(m,Ca)}),te&&Wl(m,J),G}function L(m,d,h,w){if(h==null)throw Error(f(151));for(var G=null,ne=null,R=d,J=d=0,ae=null,ce=h.next();R!==null&&!ce.done;J++,ce=h.next()){R.index>J?(ae=R,R=null):ae=R.sibling;var Ca=y(m,R,ce.value,w);if(Ca===null){R===null&&(R=ae);break}e&&R&&Ca.alternate===null&&l(m,R),d=n(Ca,d,J),ne===null?G=Ca:ne.sibling=Ca,ne=Ca,R=ae}if(ce.done)return a(m,R),te&&Wl(m,J),G;if(R===null){for(;!ce.done;J++,ce=h.next())ce=T(m,ce.value,w),ce!==null&&(d=n(ce,d,J),ne===null?G=ce:ne.sibling=ce,ne=ce);return te&&Wl(m,J),G}for(R=t(R);!ce.done;J++,ce=h.next())ce=x(R,m,J,ce.value,w),ce!==null&&(e&&ce.alternate!==null&&R.delete(ce.key===null?J:ce.key),d=n(ce,d,J),ne===null?G=ce:ne.sibling=ce,ne=ce);return e&&R.forEach(function(Um){return l(m,Um)}),te&&Wl(m,J),G}function pe(m,d,h,w){if(typeof h=="object"&&h!==null&&h.type===Ae&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Xe:e:{for(var G=h.key;d!==null;){if(d.key===G){if(G=h.type,G===Ae){if(d.tag===7){a(m,d.sibling),w=u(d,h.props.children),w.return=m,m=w;break e}}else if(d.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Ve&&Ia(G)===d.type){a(m,d.sibling),w=u(d,h.props),mu(w,h),w.return=m,m=w;break e}a(m,d);break}else l(m,d);d=d.sibling}h.type===Ae?(w=Za(h.props.children,m.mode,w,h.key),w.return=m,m=w):(w=hn(h.type,h.key,h.props,null,m.mode,w),mu(w,h),w.return=m,m=w)}return s(m);case Ue:e:{for(G=h.key;d!==null;){if(d.key===G)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){a(m,d.sibling),w=u(d,h.children||[]),w.return=m,m=w;break e}else{a(m,d);break}else l(m,d);d=d.sibling}w=Pc(h,m.mode,w),w.return=m,m=w}return s(m);case Ve:return h=Ia(h),pe(m,d,h,w)}if(Be(h))return U(m,d,h,w);if(Ke(h)){if(G=Ke(h),typeof G!="function")throw Error(f(150));return h=G.call(h),L(m,d,h,w)}if(typeof h.then=="function")return pe(m,d,wn(h),w);if(h.$$typeof===He)return pe(m,d,gn(m,h),w);An(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,d!==null&&d.tag===6?(a(m,d.sibling),w=u(d,h),w.return=m,m=w):(a(m,d),w=Fc(h,m.mode,w),w.return=m,m=w),s(m)):a(m,d)}return function(m,d,h,w){try{vu=0;var G=pe(m,d,h,w);return Ot=null,G}catch(R){if(R===Mt||R===bn)throw R;var ne=yl(29,R,null,m.mode);return ne.lanes=w,ne.return=m,ne}finally{}}}var Wa=ro(!0),oo=ro(!1),ga=!1;function ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fs(e,l){e=e.updateQueue,l.updateQueue===e&&(l.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ba(e,l,a){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(ie&2)!==0){var u=t.pending;return u===null?l.next=l:(l.next=u.next,u.next=l),t.pending=l,l=mn(e),Jr(e,null,a),l}return vn(e,t,l,a),mn(e)}function hu(e,l,a){if(l=l.updateQueue,l!==null&&(l=l.shared,(a&4194048)!==0)){var t=l.lanes;t&=e.pendingLanes,a|=t,l.lanes=a,lr(e,a)}}function vs(e,l){var a=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,a===t)){var u=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};n===null?u=n=s:n=n.next=s,a=a.next}while(a!==null);n===null?u=n=l:n=n.next=l}else u=n=l;a={baseState:t.baseState,firstBaseUpdate:u,lastBaseUpdate:n,shared:t.shared,callbacks:t.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=l:e.next=l,a.lastBaseUpdate=l}var ms=!1;function pu(){if(ms){var e=Bt;if(e!==null)throw e}}function yu(e,l,a,t){ms=!1;var u=e.updateQueue;ga=!1;var n=u.firstBaseUpdate,s=u.lastBaseUpdate,i=u.shared.pending;if(i!==null){u.shared.pending=null;var r=i,p=r.next;r.next=null,s===null?n=p:s.next=p,s=r;var j=e.alternate;j!==null&&(j=j.updateQueue,i=j.lastBaseUpdate,i!==s&&(i===null?j.firstBaseUpdate=p:i.next=p,j.lastBaseUpdate=r))}if(n!==null){var T=u.baseState;s=0,j=p=r=null,i=n;do{var y=i.lane&-536870913,x=y!==i.lane;if(x?(le&y)===y:(t&y)===y){y!==0&&y===Nt&&(ms=!0),j!==null&&(j=j.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var U=e,L=i;y=l;var pe=a;switch(L.tag){case 1:if(U=L.payload,typeof U=="function"){T=U.call(pe,T,y);break e}T=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=L.payload,y=typeof U=="function"?U.call(pe,T,y):U,y==null)break e;T=Y({},T,y);break e;case 2:ga=!0}}y=i.callback,y!==null&&(e.flags|=64,x&&(e.flags|=8192),x=u.callbacks,x===null?u.callbacks=[y]:x.push(y))}else x={lane:y,tag:i.tag,payload:i.payload,callback:i.callback,next:null},j===null?(p=j=x,r=T):j=j.next=x,s|=y;if(i=i.next,i===null){if(i=u.shared.pending,i===null)break;x=i,i=x.next,x.next=null,u.lastBaseUpdate=x,u.shared.pending=null}}while(!0);j===null&&(r=T),u.baseState=r,u.firstBaseUpdate=p,u.lastBaseUpdate=j,n===null&&(u.shared.lanes=0),Ta|=s,e.lanes=s,e.memoizedState=T}}function fo(e,l){if(typeof e!="function")throw Error(f(191,e));e.call(l)}function vo(e,l){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fo(a[e],l)}var _t=o(null),Sn=o(0);function mo(e,l){e=ia,z(Sn,e),z(_t,l),ia=e|l.baseLanes}function hs(){z(Sn,ia),z(_t,_t.current)}function ps(){ia=Sn.current,S(_t),S(Sn)}var gl=o(null),_l=null;function ja(e){var l=e.alternate;z(Ee,Ee.current&1),z(gl,e),_l===null&&(l===null||_t.current!==null||l.memoizedState!==null)&&(_l=e)}function ys(e){z(Ee,Ee.current),z(gl,e),_l===null&&(_l=e)}function ho(e){e.tag===22?(z(Ee,Ee.current),z(gl,e),_l===null&&(_l=e)):wa()}function wa(){z(Ee,Ee.current),z(gl,gl.current)}function xl(e){S(gl),_l===e&&(_l=null),S(Ee)}var Ee=o(0);function Tn(e){for(var l=e;l!==null;){if(l.tag===13){var a=l.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ai(a)||Si(a)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var ea=0,V=null,me=null,Oe=null,zn=!1,Dt=!1,Fa=!1,En=0,gu=0,Ut=null,Sv=0;function Te(){throw Error(f(321))}function gs(e,l){if(l===null)return!1;for(var a=0;a<l.length&&a<e.length;a++)if(!pl(e[a],l[a]))return!1;return!0}function xs(e,l,a,t,u,n){return ea=n,V=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,b.H=e===null||e.memoizedState===null?Fo:Us,Fa=!1,n=a(t,u),Fa=!1,Dt&&(n=yo(l,a,t,u)),po(e),n}function po(e){b.H=ju;var l=me!==null&&me.next!==null;if(ea=0,Oe=me=V=null,zn=!1,gu=0,Ut=null,l)throw Error(f(300));e===null||_e||(e=e.dependencies,e!==null&&yn(e)&&(_e=!0))}function yo(e,l,a,t){V=e;var u=0;do{if(Dt&&(Ut=null),gu=0,Dt=!1,25<=u)throw Error(f(301));if(u+=1,Oe=me=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}b.H=Po,n=l(a,t)}while(Dt);return n}function Tv(){var e=b.H,l=e.useState()[0];return l=typeof l.then=="function"?xu(l):l,e=e.useState()[0],(me!==null?me.memoizedState:null)!==e&&(V.flags|=1024),l}function bs(){var e=En!==0;return En=0,e}function js(e,l,a){l.updateQueue=e.updateQueue,l.flags&=-2053,e.lanes&=~a}function ws(e){if(zn){for(e=e.memoizedState;e!==null;){var l=e.queue;l!==null&&(l.pending=null),e=e.next}zn=!1}ea=0,Oe=me=V=null,Dt=!1,gu=En=0,Ut=null}function nl(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?V.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function Ne(){if(me===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var l=Oe===null?V.memoizedState:Oe.next;if(l!==null)Oe=l,me=e;else{if(e===null)throw V.alternate===null?Error(f(467)):Error(f(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Oe===null?V.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Nn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xu(e){var l=gu;return gu+=1,Ut===null&&(Ut=[]),e=co(Ut,e,l),l=V,(Oe===null?l.memoizedState:Oe.next)===null&&(l=l.alternate,b.H=l===null||l.memoizedState===null?Fo:Us),e}function Bn(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xu(e);if(e.$$typeof===He)return We(e)}throw Error(f(438,String(e)))}function As(e){var l=null,a=V.updateQueue;if(a!==null&&(l=a.memoCache),l==null){var t=V.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(l={data:t.data.map(function(u){return u.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),a===null&&(a=Nn(),V.updateQueue=a),a.memoCache=l,a=l.data[l.index],a===void 0)for(a=l.data[l.index]=Array(e),t=0;t<e;t++)a[t]=Yl;return l.index++,a}function la(e,l){return typeof l=="function"?l(e):l}function Mn(e){var l=Ne();return Ss(l,me,e)}function Ss(e,l,a){var t=e.queue;if(t===null)throw Error(f(311));t.lastRenderedReducer=a;var u=e.baseQueue,n=t.pending;if(n!==null){if(u!==null){var s=u.next;u.next=n.next,n.next=s}l.baseQueue=u=n,t.pending=null}if(n=e.baseState,u===null)e.memoizedState=n;else{l=u.next;var i=s=null,r=null,p=l,j=!1;do{var T=p.lane&-536870913;if(T!==p.lane?(le&T)===T:(ea&T)===T){var y=p.revertLane;if(y===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),T===Nt&&(j=!0);else if((ea&y)===y){p=p.next,y===Nt&&(j=!0);continue}else T={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},r===null?(i=r=T,s=n):r=r.next=T,V.lanes|=y,Ta|=y;T=p.action,Fa&&a(n,T),n=p.hasEagerState?p.eagerState:a(n,T)}else y={lane:T,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},r===null?(i=r=y,s=n):r=r.next=y,V.lanes|=T,Ta|=T;p=p.next}while(p!==null&&p!==l);if(r===null?s=n:r.next=i,!pl(n,e.memoizedState)&&(_e=!0,j&&(a=Bt,a!==null)))throw a;e.memoizedState=n,e.baseState=s,e.baseQueue=r,t.lastRenderedState=n}return u===null&&(t.lanes=0),[e.memoizedState,t.dispatch]}function Ts(e){var l=Ne(),a=l.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=e;var t=a.dispatch,u=a.pending,n=l.memoizedState;if(u!==null){a.pending=null;var s=u=u.next;do n=e(n,s.action),s=s.next;while(s!==u);pl(n,l.memoizedState)||(_e=!0),l.memoizedState=n,l.baseQueue===null&&(l.baseState=n),a.lastRenderedState=n}return[n,t]}function go(e,l,a){var t=V,u=Ne(),n=te;if(n){if(a===void 0)throw Error(f(407));a=a()}else a=l();var s=!pl((me||u).memoizedState,a);if(s&&(u.memoizedState=a,_e=!0),u=u.queue,Ns(jo.bind(null,t,u,e),[e]),u.getSnapshot!==l||s||Oe!==null&&Oe.memoizedState.tag&1){if(t.flags|=2048,Ct(9,{destroy:void 0},bo.bind(null,t,u,a,l),null),ye===null)throw Error(f(349));n||(ea&127)!==0||xo(t,l,a)}return a}function xo(e,l,a){e.flags|=16384,e={getSnapshot:l,value:a},l=V.updateQueue,l===null?(l=Nn(),V.updateQueue=l,l.stores=[e]):(a=l.stores,a===null?l.stores=[e]:a.push(e))}function bo(e,l,a,t){l.value=a,l.getSnapshot=t,wo(l)&&Ao(e)}function jo(e,l,a){return a(function(){wo(l)&&Ao(e)})}function wo(e){var l=e.getSnapshot;e=e.value;try{var a=l();return!pl(e,a)}catch{return!0}}function Ao(e){var l=La(e,2);l!==null&&fl(l,e,2)}function zs(e){var l=nl();if(typeof e=="function"){var a=e;if(e=a(),Fa){ke(!0);try{a()}finally{ke(!1)}}}return l.memoizedState=l.baseState=e,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},l}function So(e,l,a,t){return e.baseState=a,Ss(e,me,typeof t=="function"?t:la)}function zv(e,l,a,t,u){if(Dn(e))throw Error(f(485));if(e=l.action,e!==null){var n={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){n.listeners.push(s)}};b.T!==null?a(!0):n.isTransition=!1,t(n),a=l.pending,a===null?(n.next=l.pending=n,To(l,n)):(n.next=a.next,l.pending=a.next=n)}}function To(e,l){var a=l.action,t=l.payload,u=e.state;if(l.isTransition){var n=b.T,s={};b.T=s;try{var i=a(u,t),r=b.S;r!==null&&r(s,i),zo(e,l,i)}catch(p){Es(e,l,p)}finally{n!==null&&s.types!==null&&(n.types=s.types),b.T=n}}else try{n=a(u,t),zo(e,l,n)}catch(p){Es(e,l,p)}}function zo(e,l,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(t){Eo(e,l,t)},function(t){return Es(e,l,t)}):Eo(e,l,a)}function Eo(e,l,a){l.status="fulfilled",l.value=a,No(l),e.state=a,l=e.pending,l!==null&&(a=l.next,a===l?e.pending=null:(a=a.next,l.next=a,To(e,a)))}function Es(e,l,a){var t=e.pending;if(e.pending=null,t!==null){t=t.next;do l.status="rejected",l.reason=a,No(l),l=l.next;while(l!==t)}e.action=null}function No(e){e=e.listeners;for(var l=0;l<e.length;l++)(0,e[l])()}function Bo(e,l){return l}function Mo(e,l){if(te){var a=ye.formState;if(a!==null){e:{var t=V;if(te){if(je){l:{for(var u=je,n=Ol;u.nodeType!==8;){if(!n){u=null;break l}if(u=Dl(u.nextSibling),u===null){u=null;break l}}n=u.data,u=n==="F!"||n==="F"?u:null}if(u){je=Dl(u.nextSibling),t=u.data==="F!";break e}}pa(t)}t=!1}t&&(l=a[0])}}return a=nl(),a.memoizedState=a.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:l},a.queue=t,a=Io.bind(null,V,t),t.dispatch=a,t=zs(!1),n=Ds.bind(null,V,!1,t.queue),t=nl(),u={state:l,dispatch:null,action:e,pending:null},t.queue=u,a=zv.bind(null,V,u,n,a),u.dispatch=a,t.memoizedState=e,[l,a,!1]}function Oo(e){var l=Ne();return _o(l,me,e)}function _o(e,l,a){if(l=Ss(e,l,Bo)[0],e=Mn(la)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var t=xu(l)}catch(s){throw s===Mt?bn:s}else t=l;l=Ne();var u=l.queue,n=u.dispatch;return a!==l.memoizedState&&(V.flags|=2048,Ct(9,{destroy:void 0},Ev.bind(null,u,a),null)),[t,n,e]}function Ev(e,l){e.action=l}function Do(e){var l=Ne(),a=me;if(a!==null)return _o(l,a,e);Ne(),l=l.memoizedState,a=Ne();var t=a.queue.dispatch;return a.memoizedState=e,[l,t,!1]}function Ct(e,l,a,t){return e={tag:e,create:a,deps:t,inst:l,next:null},l=V.updateQueue,l===null&&(l=Nn(),V.updateQueue=l),a=l.lastEffect,a===null?l.lastEffect=e.next=e:(t=a.next,a.next=e,e.next=t,l.lastEffect=e),e}function Uo(){return Ne().memoizedState}function On(e,l,a,t){var u=nl();V.flags|=e,u.memoizedState=Ct(1|l,{destroy:void 0},a,t===void 0?null:t)}function _n(e,l,a,t){var u=Ne();t=t===void 0?null:t;var n=u.memoizedState.inst;me!==null&&t!==null&&gs(t,me.memoizedState.deps)?u.memoizedState=Ct(l,n,a,t):(V.flags|=e,u.memoizedState=Ct(1|l,n,a,t))}function Co(e,l){On(8390656,8,e,l)}function Ns(e,l){_n(2048,8,e,l)}function Nv(e){V.flags|=4;var l=V.updateQueue;if(l===null)l=Nn(),V.updateQueue=l,l.events=[e];else{var a=l.events;a===null?l.events=[e]:a.push(e)}}function Ro(e){var l=Ne().memoizedState;return Nv({ref:l,nextImpl:e}),function(){if((ie&2)!==0)throw Error(f(440));return l.impl.apply(void 0,arguments)}}function Ho(e,l){return _n(4,2,e,l)}function qo(e,l){return _n(4,4,e,l)}function Yo(e,l){if(typeof l=="function"){e=e();var a=l(e);return function(){typeof a=="function"?a():l(null)}}if(l!=null)return e=e(),l.current=e,function(){l.current=null}}function Go(e,l,a){a=a!=null?a.concat([e]):null,_n(4,4,Yo.bind(null,l,e),a)}function Bs(){}function Qo(e,l){var a=Ne();l=l===void 0?null:l;var t=a.memoizedState;return l!==null&&gs(l,t[1])?t[0]:(a.memoizedState=[e,l],e)}function Xo(e,l){var a=Ne();l=l===void 0?null:l;var t=a.memoizedState;if(l!==null&&gs(l,t[1]))return t[0];if(t=e(),Fa){ke(!0);try{e()}finally{ke(!1)}}return a.memoizedState=[t,l],t}function Ms(e,l,a){return a===void 0||(ea&1073741824)!==0&&(le&261930)===0?e.memoizedState=l:(e.memoizedState=a,e=Ld(),V.lanes|=e,Ta|=e,a)}function Lo(e,l,a,t){return pl(a,l)?a:_t.current!==null?(e=Ms(e,a,t),pl(e,l)||(_e=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(le&261930)===0?(_e=!0,e.memoizedState=a):(e=Ld(),V.lanes|=e,Ta|=e,l)}function Zo(e,l,a,t,u){var n=M.p;M.p=n!==0&&8>n?n:8;var s=b.T,i={};b.T=i,Ds(e,!1,l,a);try{var r=u(),p=b.S;if(p!==null&&p(i,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var j=Av(r,t);bu(e,l,j,wl(e))}else bu(e,l,t,wl(e))}catch(T){bu(e,l,{then:function(){},status:"rejected",reason:T},wl())}finally{M.p=n,s!==null&&i.types!==null&&(s.types=i.types),b.T=s}}function Bv(){}function Os(e,l,a,t){if(e.tag!==5)throw Error(f(476));var u=Vo(e).queue;Zo(e,u,l,X,a===null?Bv:function(){return Ko(e),a(t)})}function Vo(e){var l=e.memoizedState;if(l!==null)return l;l={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:X},next:null};var a={};return l.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=l,e=e.alternate,e!==null&&(e.memoizedState=l),l}function Ko(e){var l=Vo(e);l.next===null&&(l=e.alternate.memoizedState),bu(e,l.next.queue,{},wl())}function _s(){return We(Hu)}function Jo(){return Ne().memoizedState}function ko(){return Ne().memoizedState}function Mv(e){for(var l=e.return;l!==null;){switch(l.tag){case 24:case 3:var a=wl();e=xa(a);var t=ba(l,e,a);t!==null&&(fl(t,l,a),hu(t,l,a)),l={cache:ss()},e.payload=l;return}l=l.return}}function Ov(e,l,a){var t=wl();a={lane:t,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dn(e)?$o(l,a):(a=$c(e,l,a,t),a!==null&&(fl(a,e,t),Wo(a,l,t)))}function Io(e,l,a){var t=wl();bu(e,l,a,t)}function bu(e,l,a,t){var u={lane:t,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dn(e))$o(l,u);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=l.lastRenderedReducer,n!==null))try{var s=l.lastRenderedState,i=n(s,a);if(u.hasEagerState=!0,u.eagerState=i,pl(i,s))return vn(e,l,u,0),ye===null&&fn(),!1}catch{}finally{}if(a=$c(e,l,u,t),a!==null)return fl(a,e,t),Wo(a,l,t),!0}return!1}function Ds(e,l,a,t){if(t={lane:2,revertLane:di(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Dn(e)){if(l)throw Error(f(479))}else l=$c(e,a,t,2),l!==null&&fl(l,e,2)}function Dn(e){var l=e.alternate;return e===V||l!==null&&l===V}function $o(e,l){Dt=zn=!0;var a=e.pending;a===null?l.next=l:(l.next=a.next,a.next=l),e.pending=l}function Wo(e,l,a){if((a&4194048)!==0){var t=l.lanes;t&=e.pendingLanes,a|=t,l.lanes=a,lr(e,a)}}var ju={readContext:We,use:Bn,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useLayoutEffect:Te,useInsertionEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useSyncExternalStore:Te,useId:Te,useHostTransitionStatus:Te,useFormState:Te,useActionState:Te,useOptimistic:Te,useMemoCache:Te,useCacheRefresh:Te};ju.useEffectEvent=Te;var Fo={readContext:We,use:Bn,useCallback:function(e,l){return nl().memoizedState=[e,l===void 0?null:l],e},useContext:We,useEffect:Co,useImperativeHandle:function(e,l,a){a=a!=null?a.concat([e]):null,On(4194308,4,Yo.bind(null,l,e),a)},useLayoutEffect:function(e,l){return On(4194308,4,e,l)},useInsertionEffect:function(e,l){On(4,2,e,l)},useMemo:function(e,l){var a=nl();l=l===void 0?null:l;var t=e();if(Fa){ke(!0);try{e()}finally{ke(!1)}}return a.memoizedState=[t,l],t},useReducer:function(e,l,a){var t=nl();if(a!==void 0){var u=a(l);if(Fa){ke(!0);try{a(l)}finally{ke(!1)}}}else u=l;return t.memoizedState=t.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},t.queue=e,e=e.dispatch=Ov.bind(null,V,e),[t.memoizedState,e]},useRef:function(e){var l=nl();return e={current:e},l.memoizedState=e},useState:function(e){e=zs(e);var l=e.queue,a=Io.bind(null,V,l);return l.dispatch=a,[e.memoizedState,a]},useDebugValue:Bs,useDeferredValue:function(e,l){var a=nl();return Ms(a,e,l)},useTransition:function(){var e=zs(!1);return e=Zo.bind(null,V,e.queue,!0,!1),nl().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,l,a){var t=V,u=nl();if(te){if(a===void 0)throw Error(f(407));a=a()}else{if(a=l(),ye===null)throw Error(f(349));(le&127)!==0||xo(t,l,a)}u.memoizedState=a;var n={value:a,getSnapshot:l};return u.queue=n,Co(jo.bind(null,t,n,e),[e]),t.flags|=2048,Ct(9,{destroy:void 0},bo.bind(null,t,n,a,l),null),a},useId:function(){var e=nl(),l=ye.identifierPrefix;if(te){var a=Zl,t=Ll;a=(t&~(1<<32-hl(t)-1)).toString(32)+a,l="_"+l+"R_"+a,a=En++,0<a&&(l+="H"+a.toString(32)),l+="_"}else a=Sv++,l="_"+l+"r_"+a.toString(32)+"_";return e.memoizedState=l},useHostTransitionStatus:_s,useFormState:Mo,useActionState:Mo,useOptimistic:function(e){var l=nl();l.memoizedState=l.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=a,l=Ds.bind(null,V,!0,a),a.dispatch=l,[e,l]},useMemoCache:As,useCacheRefresh:function(){return nl().memoizedState=Mv.bind(null,V)},useEffectEvent:function(e){var l=nl(),a={impl:e};return l.memoizedState=a,function(){if((ie&2)!==0)throw Error(f(440));return a.impl.apply(void 0,arguments)}}},Us={readContext:We,use:Bn,useCallback:Qo,useContext:We,useEffect:Ns,useImperativeHandle:Go,useInsertionEffect:Ho,useLayoutEffect:qo,useMemo:Xo,useReducer:Mn,useRef:Uo,useState:function(){return Mn(la)},useDebugValue:Bs,useDeferredValue:function(e,l){var a=Ne();return Lo(a,me.memoizedState,e,l)},useTransition:function(){var e=Mn(la)[0],l=Ne().memoizedState;return[typeof e=="boolean"?e:xu(e),l]},useSyncExternalStore:go,useId:Jo,useHostTransitionStatus:_s,useFormState:Oo,useActionState:Oo,useOptimistic:function(e,l){var a=Ne();return So(a,me,e,l)},useMemoCache:As,useCacheRefresh:ko};Us.useEffectEvent=Ro;var Po={readContext:We,use:Bn,useCallback:Qo,useContext:We,useEffect:Ns,useImperativeHandle:Go,useInsertionEffect:Ho,useLayoutEffect:qo,useMemo:Xo,useReducer:Ts,useRef:Uo,useState:function(){return Ts(la)},useDebugValue:Bs,useDeferredValue:function(e,l){var a=Ne();return me===null?Ms(a,e,l):Lo(a,me.memoizedState,e,l)},useTransition:function(){var e=Ts(la)[0],l=Ne().memoizedState;return[typeof e=="boolean"?e:xu(e),l]},useSyncExternalStore:go,useId:Jo,useHostTransitionStatus:_s,useFormState:Do,useActionState:Do,useOptimistic:function(e,l){var a=Ne();return me!==null?So(a,me,e,l):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:As,useCacheRefresh:ko};Po.useEffectEvent=Ro;function Cs(e,l,a,t){l=e.memoizedState,a=a(t,l),a=a==null?l:Y({},l,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Rs={enqueueSetState:function(e,l,a){e=e._reactInternals;var t=wl(),u=xa(t);u.payload=l,a!=null&&(u.callback=a),l=ba(e,u,t),l!==null&&(fl(l,e,t),hu(l,e,t))},enqueueReplaceState:function(e,l,a){e=e._reactInternals;var t=wl(),u=xa(t);u.tag=1,u.payload=l,a!=null&&(u.callback=a),l=ba(e,u,t),l!==null&&(fl(l,e,t),hu(l,e,t))},enqueueForceUpdate:function(e,l){e=e._reactInternals;var a=wl(),t=xa(a);t.tag=2,l!=null&&(t.callback=l),l=ba(e,t,a),l!==null&&(fl(l,e,a),hu(l,e,a))}};function ed(e,l,a,t,u,n,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,n,s):l.prototype&&l.prototype.isPureReactComponent?!su(a,t)||!su(u,n):!0}function ld(e,l,a,t){e=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(a,t),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(a,t),l.state!==e&&Rs.enqueueReplaceState(l,l.state,null)}function Pa(e,l){var a=l;if("ref"in l){a={};for(var t in l)t!=="ref"&&(a[t]=l[t])}if(e=e.defaultProps){a===l&&(a=Y({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function ad(e){dn(e)}function td(e){console.error(e)}function ud(e){dn(e)}function Un(e,l){try{var a=e.onUncaughtError;a(l.value,{componentStack:l.stack})}catch(t){setTimeout(function(){throw t})}}function nd(e,l,a){try{var t=e.onCaughtError;t(a.value,{componentStack:a.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Hs(e,l,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Un(e,l)},a}function cd(e){return e=xa(e),e.tag=3,e}function sd(e,l,a,t){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var n=t.value;e.payload=function(){return u(n)},e.callback=function(){nd(l,a,t)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){nd(l,a,t),typeof u!="function"&&(za===null?za=new Set([this]):za.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})})}function _v(e,l,a,t,u){if(a.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(l=a.alternate,l!==null&&Et(l,a,u,!0),a=gl.current,a!==null){switch(a.tag){case 31:case 13:return _l===null?Kn():a.alternate===null&&ze===0&&(ze=3),a.flags&=-257,a.flags|=65536,a.lanes=u,t===jn?a.flags|=16384:(l=a.updateQueue,l===null?a.updateQueue=new Set([t]):l.add(t),ii(e,t,u)),!1;case 22:return a.flags|=65536,t===jn?a.flags|=16384:(l=a.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([t])},a.updateQueue=l):(a=l.retryQueue,a===null?l.retryQueue=new Set([t]):a.add(t)),ii(e,t,u)),!1}throw Error(f(435,a.tag))}return ii(e,t,u),Kn(),!1}if(te)return l=gl.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=u,t!==as&&(e=Error(f(422),{cause:t}),ou(Nl(e,a)))):(t!==as&&(l=Error(f(423),{cause:t}),ou(Nl(l,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,t=Nl(t,a),u=Hs(e.stateNode,t,u),vs(e,u),ze!==4&&(ze=2)),!1;var n=Error(f(520),{cause:t});if(n=Nl(n,a),Bu===null?Bu=[n]:Bu.push(n),ze!==4&&(ze=2),l===null)return!0;t=Nl(t,a),a=l;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Hs(a.stateNode,t,e),vs(a,e),!1;case 1:if(l=a.type,n=a.stateNode,(a.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(za===null||!za.has(n))))return a.flags|=65536,u&=-u,a.lanes|=u,u=cd(u),sd(u,e,a,t),vs(a,u),!1}a=a.return}while(a!==null);return!1}var qs=Error(f(461)),_e=!1;function Fe(e,l,a,t){l.child=e===null?oo(l,null,a,t):Wa(l,e.child,a,t)}function id(e,l,a,t,u){a=a.render;var n=l.ref;if("ref"in t){var s={};for(var i in t)i!=="ref"&&(s[i]=t[i])}else s=t;return Ja(l),t=xs(e,l,a,s,n,u),i=bs(),e!==null&&!_e?(js(e,l,u),aa(e,l,u)):(te&&i&&es(l),l.flags|=1,Fe(e,l,t,u),l.child)}function rd(e,l,a,t,u){if(e===null){var n=a.type;return typeof n=="function"&&!Wc(n)&&n.defaultProps===void 0&&a.compare===null?(l.tag=15,l.type=n,od(e,l,n,t,u)):(e=hn(a.type,null,t,l,l.mode,u),e.ref=l.ref,e.return=l,l.child=e)}if(n=e.child,!Ks(e,u)){var s=n.memoizedProps;if(a=a.compare,a=a!==null?a:su,a(s,t)&&e.ref===l.ref)return aa(e,l,u)}return l.flags|=1,e=$l(n,t),e.ref=l.ref,e.return=l,l.child=e}function od(e,l,a,t,u){if(e!==null){var n=e.memoizedProps;if(su(n,t)&&e.ref===l.ref)if(_e=!1,l.pendingProps=t=n,Ks(e,u))(e.flags&131072)!==0&&(_e=!0);else return l.lanes=e.lanes,aa(e,l,u)}return Ys(e,l,a,t,u)}function dd(e,l,a,t){var u=t.children,n=e!==null?e.memoizedState:null;if(e===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((l.flags&128)!==0){if(n=n!==null?n.baseLanes|a:a,e!==null){for(t=l.child=e.child,u=0;t!==null;)u=u|t.lanes|t.childLanes,t=t.sibling;t=u&~n}else t=0,l.child=null;return fd(e,l,n,a,t)}if((a&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},e!==null&&xn(l,n!==null?n.cachePool:null),n!==null?mo(l,n):hs(),ho(l);else return t=l.lanes=536870912,fd(e,l,n!==null?n.baseLanes|a:a,a,t)}else n!==null?(xn(l,n.cachePool),mo(l,n),wa(),l.memoizedState=null):(e!==null&&xn(l,null),hs(),wa());return Fe(e,l,u,a),l.child}function wu(e,l){return e!==null&&e.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function fd(e,l,a,t,u){var n=rs();return n=n===null?null:{parent:Me._currentValue,pool:n},l.memoizedState={baseLanes:a,cachePool:n},e!==null&&xn(l,null),hs(),ho(l),e!==null&&Et(e,l,t,!0),l.childLanes=u,null}function Cn(e,l){return l=Hn({mode:l.mode,children:l.children},e.mode),l.ref=e.ref,e.child=l,l.return=e,l}function vd(e,l,a){return Wa(l,e.child,null,a),e=Cn(l,l.pendingProps),e.flags|=2,xl(l),l.memoizedState=null,e}function Dv(e,l,a){var t=l.pendingProps,u=(l.flags&128)!==0;if(l.flags&=-129,e===null){if(te){if(t.mode==="hidden")return e=Cn(l,t),l.lanes=536870912,wu(null,e);if(ys(l),(e=je)?(e=zf(e,Ol),e=e!==null&&e.data==="&"?e:null,e!==null&&(l.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Ll,overflow:Zl}:null,retryLane:536870912,hydrationErrors:null},a=Ir(e),a.return=l,l.child=a,$e=l,je=null)):e=null,e===null)throw pa(l);return l.lanes=536870912,null}return Cn(l,t)}var n=e.memoizedState;if(n!==null){var s=n.dehydrated;if(ys(l),u)if(l.flags&256)l.flags&=-257,l=vd(e,l,a);else if(l.memoizedState!==null)l.child=e.child,l.flags|=128,l=null;else throw Error(f(558));else if(_e||Et(e,l,a,!1),u=(a&e.childLanes)!==0,_e||u){if(t=ye,t!==null&&(s=ar(t,a),s!==0&&s!==n.retryLane))throw n.retryLane=s,La(e,s),fl(t,e,s),qs;Kn(),l=vd(e,l,a)}else e=n.treeContext,je=Dl(s.nextSibling),$e=l,te=!0,ha=null,Ol=!1,e!==null&&Fr(l,e),l=Cn(l,t),l.flags|=4096;return l}return e=$l(e.child,{mode:t.mode,children:t.children}),e.ref=l.ref,l.child=e,e.return=l,e}function Rn(e,l){var a=l.ref;if(a===null)e!==null&&e.ref!==null&&(l.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(f(284));(e===null||e.ref!==a)&&(l.flags|=4194816)}}function Ys(e,l,a,t,u){return Ja(l),a=xs(e,l,a,t,void 0,u),t=bs(),e!==null&&!_e?(js(e,l,u),aa(e,l,u)):(te&&t&&es(l),l.flags|=1,Fe(e,l,a,u),l.child)}function md(e,l,a,t,u,n){return Ja(l),l.updateQueue=null,a=yo(l,t,a,u),po(e),t=bs(),e!==null&&!_e?(js(e,l,n),aa(e,l,n)):(te&&t&&es(l),l.flags|=1,Fe(e,l,a,n),l.child)}function hd(e,l,a,t,u){if(Ja(l),l.stateNode===null){var n=At,s=a.contextType;typeof s=="object"&&s!==null&&(n=We(s)),n=new a(t,n),l.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Rs,l.stateNode=n,n._reactInternals=l,n=l.stateNode,n.props=t,n.state=l.memoizedState,n.refs={},ds(l),s=a.contextType,n.context=typeof s=="object"&&s!==null?We(s):At,n.state=l.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Cs(l,a,s,t),n.state=l.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(s=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),s!==n.state&&Rs.enqueueReplaceState(n,n.state,null),yu(l,t,n,u),pu(),n.state=l.memoizedState),typeof n.componentDidMount=="function"&&(l.flags|=4194308),t=!0}else if(e===null){n=l.stateNode;var i=l.memoizedProps,r=Pa(a,i);n.props=r;var p=n.context,j=a.contextType;s=At,typeof j=="object"&&j!==null&&(s=We(j));var T=a.getDerivedStateFromProps;j=typeof T=="function"||typeof n.getSnapshotBeforeUpdate=="function",i=l.pendingProps!==i,j||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(i||p!==s)&&ld(l,n,t,s),ga=!1;var y=l.memoizedState;n.state=y,yu(l,t,n,u),pu(),p=l.memoizedState,i||y!==p||ga?(typeof T=="function"&&(Cs(l,a,T,t),p=l.memoizedState),(r=ga||ed(l,a,r,t,y,p,s))?(j||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(l.flags|=4194308)):(typeof n.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=t,l.memoizedState=p),n.props=t,n.state=p,n.context=s,t=r):(typeof n.componentDidMount=="function"&&(l.flags|=4194308),t=!1)}else{n=l.stateNode,fs(e,l),s=l.memoizedProps,j=Pa(a,s),n.props=j,T=l.pendingProps,y=n.context,p=a.contextType,r=At,typeof p=="object"&&p!==null&&(r=We(p)),i=a.getDerivedStateFromProps,(p=typeof i=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==T||y!==r)&&ld(l,n,t,r),ga=!1,y=l.memoizedState,n.state=y,yu(l,t,n,u),pu();var x=l.memoizedState;s!==T||y!==x||ga||e!==null&&e.dependencies!==null&&yn(e.dependencies)?(typeof i=="function"&&(Cs(l,a,i,t),x=l.memoizedState),(j=ga||ed(l,a,j,t,y,x,r)||e!==null&&e.dependencies!==null&&yn(e.dependencies))?(p||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(t,x,r),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(t,x,r)),typeof n.componentDidUpdate=="function"&&(l.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(l.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(l.flags|=1024),l.memoizedProps=t,l.memoizedState=x),n.props=t,n.state=x,n.context=r,t=j):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(l.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(l.flags|=1024),t=!1)}return n=t,Rn(e,l),t=(l.flags&128)!==0,n||t?(n=l.stateNode,a=t&&typeof a.getDerivedStateFromError!="function"?null:n.render(),l.flags|=1,e!==null&&t?(l.child=Wa(l,e.child,null,u),l.child=Wa(l,null,a,u)):Fe(e,l,a,u),l.memoizedState=n.state,e=l.child):e=aa(e,l,u),e}function pd(e,l,a,t){return Va(),l.flags|=256,Fe(e,l,a,t),l.child}var Gs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qs(e){return{baseLanes:e,cachePool:uo()}}function Xs(e,l,a){return e=e!==null?e.childLanes&~a:0,l&&(e|=jl),e}function yd(e,l,a){var t=l.pendingProps,u=!1,n=(l.flags&128)!==0,s;if((s=n)||(s=e!==null&&e.memoizedState===null?!1:(Ee.current&2)!==0),s&&(u=!0,l.flags&=-129),s=(l.flags&32)!==0,l.flags&=-33,e===null){if(te){if(u?ja(l):wa(),(e=je)?(e=zf(e,Ol),e=e!==null&&e.data!=="&"?e:null,e!==null&&(l.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Ll,overflow:Zl}:null,retryLane:536870912,hydrationErrors:null},a=Ir(e),a.return=l,l.child=a,$e=l,je=null)):e=null,e===null)throw pa(l);return Si(e)?l.lanes=32:l.lanes=536870912,null}var i=t.children;return t=t.fallback,u?(wa(),u=l.mode,i=Hn({mode:"hidden",children:i},u),t=Za(t,u,a,null),i.return=l,t.return=l,i.sibling=t,l.child=i,t=l.child,t.memoizedState=Qs(a),t.childLanes=Xs(e,s,a),l.memoizedState=Gs,wu(null,t)):(ja(l),Ls(l,i))}var r=e.memoizedState;if(r!==null&&(i=r.dehydrated,i!==null)){if(n)l.flags&256?(ja(l),l.flags&=-257,l=Zs(e,l,a)):l.memoizedState!==null?(wa(),l.child=e.child,l.flags|=128,l=null):(wa(),i=t.fallback,u=l.mode,t=Hn({mode:"visible",children:t.children},u),i=Za(i,u,a,null),i.flags|=2,t.return=l,i.return=l,t.sibling=i,l.child=t,Wa(l,e.child,null,a),t=l.child,t.memoizedState=Qs(a),t.childLanes=Xs(e,s,a),l.memoizedState=Gs,l=wu(null,t));else if(ja(l),Si(i)){if(s=i.nextSibling&&i.nextSibling.dataset,s)var p=s.dgst;s=p,t=Error(f(419)),t.stack="",t.digest=s,ou({value:t,source:null,stack:null}),l=Zs(e,l,a)}else if(_e||Et(e,l,a,!1),s=(a&e.childLanes)!==0,_e||s){if(s=ye,s!==null&&(t=ar(s,a),t!==0&&t!==r.retryLane))throw r.retryLane=t,La(e,t),fl(s,e,t),qs;Ai(i)||Kn(),l=Zs(e,l,a)}else Ai(i)?(l.flags|=192,l.child=e.child,l=null):(e=r.treeContext,je=Dl(i.nextSibling),$e=l,te=!0,ha=null,Ol=!1,e!==null&&Fr(l,e),l=Ls(l,t.children),l.flags|=4096);return l}return u?(wa(),i=t.fallback,u=l.mode,r=e.child,p=r.sibling,t=$l(r,{mode:"hidden",children:t.children}),t.subtreeFlags=r.subtreeFlags&65011712,p!==null?i=$l(p,i):(i=Za(i,u,a,null),i.flags|=2),i.return=l,t.return=l,t.sibling=i,l.child=t,wu(null,t),t=l.child,i=e.child.memoizedState,i===null?i=Qs(a):(u=i.cachePool,u!==null?(r=Me._currentValue,u=u.parent!==r?{parent:r,pool:r}:u):u=uo(),i={baseLanes:i.baseLanes|a,cachePool:u}),t.memoizedState=i,t.childLanes=Xs(e,s,a),l.memoizedState=Gs,wu(e.child,t)):(ja(l),a=e.child,e=a.sibling,a=$l(a,{mode:"visible",children:t.children}),a.return=l,a.sibling=null,e!==null&&(s=l.deletions,s===null?(l.deletions=[e],l.flags|=16):s.push(e)),l.child=a,l.memoizedState=null,a)}function Ls(e,l){return l=Hn({mode:"visible",children:l},e.mode),l.return=e,e.child=l}function Hn(e,l){return e=yl(22,e,null,l),e.lanes=0,e}function Zs(e,l,a){return Wa(l,e.child,null,a),e=Ls(l,l.pendingProps.children),e.flags|=2,l.memoizedState=null,e}function gd(e,l,a){e.lanes|=l;var t=e.alternate;t!==null&&(t.lanes|=l),ns(e.return,l,a)}function Vs(e,l,a,t,u,n){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:t,tail:a,tailMode:u,treeForkCount:n}:(s.isBackwards=l,s.rendering=null,s.renderingStartTime=0,s.last=t,s.tail=a,s.tailMode=u,s.treeForkCount=n)}function xd(e,l,a){var t=l.pendingProps,u=t.revealOrder,n=t.tail;t=t.children;var s=Ee.current,i=(s&2)!==0;if(i?(s=s&1|2,l.flags|=128):s&=1,z(Ee,s),Fe(e,l,t,a),t=te?ru:0,!i&&e!==null&&(e.flags&128)!==0)e:for(e=l.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gd(e,a,l);else if(e.tag===19)gd(e,a,l);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===l)break e;for(;e.sibling===null;){if(e.return===null||e.return===l)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=l.child,u=null;a!==null;)e=a.alternate,e!==null&&Tn(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=l.child,l.child=null):(u=a.sibling,a.sibling=null),Vs(l,!1,u,a,n,t);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=l.child,l.child=null;u!==null;){if(e=u.alternate,e!==null&&Tn(e)===null){l.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Vs(l,!0,a,null,n,t);break;case"together":Vs(l,!1,null,null,void 0,t);break;default:l.memoizedState=null}return l.child}function aa(e,l,a){if(e!==null&&(l.dependencies=e.dependencies),Ta|=l.lanes,(a&l.childLanes)===0)if(e!==null){if(Et(e,l,a,!1),(a&l.childLanes)===0)return null}else return null;if(e!==null&&l.child!==e.child)throw Error(f(153));if(l.child!==null){for(e=l.child,a=$l(e,e.pendingProps),l.child=a,a.return=l;e.sibling!==null;)e=e.sibling,a=a.sibling=$l(e,e.pendingProps),a.return=l;a.sibling=null}return l.child}function Ks(e,l){return(e.lanes&l)!==0?!0:(e=e.dependencies,!!(e!==null&&yn(e)))}function Uv(e,l,a){switch(l.tag){case 3:qe(l,l.stateNode.containerInfo),ya(l,Me,e.memoizedState.cache),Va();break;case 27:case 5:Gl(l);break;case 4:qe(l,l.stateNode.containerInfo);break;case 10:ya(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,ys(l),null;break;case 13:var t=l.memoizedState;if(t!==null)return t.dehydrated!==null?(ja(l),l.flags|=128,null):(a&l.child.childLanes)!==0?yd(e,l,a):(ja(l),e=aa(e,l,a),e!==null?e.sibling:null);ja(l);break;case 19:var u=(e.flags&128)!==0;if(t=(a&l.childLanes)!==0,t||(Et(e,l,a,!1),t=(a&l.childLanes)!==0),u){if(t)return xd(e,l,a);l.flags|=128}if(u=l.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),z(Ee,Ee.current),t)break;return null;case 22:return l.lanes=0,dd(e,l,a,l.pendingProps);case 24:ya(l,Me,e.memoizedState.cache)}return aa(e,l,a)}function bd(e,l,a){if(e!==null)if(e.memoizedProps!==l.pendingProps)_e=!0;else{if(!Ks(e,a)&&(l.flags&128)===0)return _e=!1,Uv(e,l,a);_e=(e.flags&131072)!==0}else _e=!1,te&&(l.flags&1048576)!==0&&Wr(l,ru,l.index);switch(l.lanes=0,l.tag){case 16:e:{var t=l.pendingProps;if(e=Ia(l.elementType),l.type=e,typeof e=="function")Wc(e)?(t=Pa(e,t),l.tag=1,l=hd(null,l,e,t,a)):(l.tag=0,l=Ys(null,l,e,t,a));else{if(e!=null){var u=e.$$typeof;if(u===ul){l.tag=11,l=id(null,l,e,t,a);break e}else if(u===F){l.tag=14,l=rd(null,l,e,t,a);break e}}throw l=Sl(e)||e,Error(f(306,l,""))}}return l;case 0:return Ys(e,l,l.type,l.pendingProps,a);case 1:return t=l.type,u=Pa(t,l.pendingProps),hd(e,l,t,u,a);case 3:e:{if(qe(l,l.stateNode.containerInfo),e===null)throw Error(f(387));t=l.pendingProps;var n=l.memoizedState;u=n.element,fs(e,l),yu(l,t,null,a);var s=l.memoizedState;if(t=s.cache,ya(l,Me,t),t!==n.cache&&cs(l,[Me],a,!0),pu(),t=s.element,n.isDehydrated)if(n={element:t,isDehydrated:!1,cache:s.cache},l.updateQueue.baseState=n,l.memoizedState=n,l.flags&256){l=pd(e,l,t,a);break e}else if(t!==u){u=Nl(Error(f(424)),l),ou(u),l=pd(e,l,t,a);break e}else{switch(e=l.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=Dl(e.firstChild),$e=l,te=!0,ha=null,Ol=!0,a=oo(l,null,t,a),l.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Va(),t===u){l=aa(e,l,a);break e}Fe(e,l,t,a)}l=l.child}return l;case 26:return Rn(e,l),e===null?(a=_f(l.type,null,l.pendingProps,null))?l.memoizedState=a:te||(a=l.type,e=l.pendingProps,t=Pn(I.current).createElement(a),t[Ie]=l,t[cl]=e,Pe(t,a,e),Ye(t),l.stateNode=t):l.memoizedState=_f(l.type,e.memoizedProps,l.pendingProps,e.memoizedState),null;case 27:return Gl(l),e===null&&te&&(t=l.stateNode=Bf(l.type,l.pendingProps,I.current),$e=l,Ol=!0,u=je,Ma(l.type)?(Ti=u,je=Dl(t.firstChild)):je=u),Fe(e,l,l.pendingProps.children,a),Rn(e,l),e===null&&(l.flags|=4194304),l.child;case 5:return e===null&&te&&((u=t=je)&&(t=om(t,l.type,l.pendingProps,Ol),t!==null?(l.stateNode=t,$e=l,je=Dl(t.firstChild),Ol=!1,u=!0):u=!1),u||pa(l)),Gl(l),u=l.type,n=l.pendingProps,s=e!==null?e.memoizedProps:null,t=n.children,bi(u,n)?t=null:s!==null&&bi(u,s)&&(l.flags|=32),l.memoizedState!==null&&(u=xs(e,l,Tv,null,null,a),Hu._currentValue=u),Rn(e,l),Fe(e,l,t,a),l.child;case 6:return e===null&&te&&((e=a=je)&&(a=dm(a,l.pendingProps,Ol),a!==null?(l.stateNode=a,$e=l,je=null,e=!0):e=!1),e||pa(l)),null;case 13:return yd(e,l,a);case 4:return qe(l,l.stateNode.containerInfo),t=l.pendingProps,e===null?l.child=Wa(l,null,t,a):Fe(e,l,t,a),l.child;case 11:return id(e,l,l.type,l.pendingProps,a);case 7:return Fe(e,l,l.pendingProps,a),l.child;case 8:return Fe(e,l,l.pendingProps.children,a),l.child;case 12:return Fe(e,l,l.pendingProps.children,a),l.child;case 10:return t=l.pendingProps,ya(l,l.type,t.value),Fe(e,l,t.children,a),l.child;case 9:return u=l.type._context,t=l.pendingProps.children,Ja(l),u=We(u),t=t(u),l.flags|=1,Fe(e,l,t,a),l.child;case 14:return rd(e,l,l.type,l.pendingProps,a);case 15:return od(e,l,l.type,l.pendingProps,a);case 19:return xd(e,l,a);case 31:return Dv(e,l,a);case 22:return dd(e,l,a,l.pendingProps);case 24:return Ja(l),t=We(Me),e===null?(u=rs(),u===null&&(u=ye,n=ss(),u.pooledCache=n,n.refCount++,n!==null&&(u.pooledCacheLanes|=a),u=n),l.memoizedState={parent:t,cache:u},ds(l),ya(l,Me,u)):((e.lanes&a)!==0&&(fs(e,l),yu(l,null,null,a),pu()),u=e.memoizedState,n=l.memoizedState,u.parent!==t?(u={parent:t,cache:t},l.memoizedState=u,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=u),ya(l,Me,t)):(t=n.cache,ya(l,Me,t),t!==u.cache&&cs(l,[Me],a,!0))),Fe(e,l,l.pendingProps.children,a),l.child;case 29:throw l.pendingProps}throw Error(f(156,l.tag))}function ta(e){e.flags|=4}function Js(e,l,a,t,u){if((l=(e.mode&32)!==0)&&(l=!1),l){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Jd())e.flags|=8192;else throw $a=jn,os}else e.flags&=-16777217}function jd(e,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hf(l))if(Jd())e.flags|=8192;else throw $a=jn,os}function qn(e,l){l!==null&&(e.flags|=4),e.flags&16384&&(l=e.tag!==22?Pi():536870912,e.lanes|=l,Yt|=l)}function Au(e,l){if(!te)switch(e.tailMode){case"hidden":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?l||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function we(e){var l=e.alternate!==null&&e.alternate.child===e.child,a=0,t=0;if(l)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,t|=u.subtreeFlags&65011712,t|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,t|=u.subtreeFlags,t|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=t,e.childLanes=a,l}function Cv(e,l,a){var t=l.pendingProps;switch(ls(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(l),null;case 1:return we(l),null;case 3:return a=l.stateNode,t=null,e!==null&&(t=e.memoizedState.cache),l.memoizedState.cache!==t&&(l.flags|=2048),Pl(Me),ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(zt(l)?ta(l):e===null||e.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,ts())),we(l),null;case 26:var u=l.type,n=l.memoizedState;return e===null?(ta(l),n!==null?(we(l),jd(l,n)):(we(l),Js(l,u,null,t,a))):n?n!==e.memoizedState?(ta(l),we(l),jd(l,n)):(we(l),l.flags&=-16777217):(e=e.memoizedProps,e!==t&&ta(l),we(l),Js(l,u,e,t,a)),null;case 27:if(Ql(l),a=I.current,u=l.type,e!==null&&l.stateNode!=null)e.memoizedProps!==t&&ta(l);else{if(!t){if(l.stateNode===null)throw Error(f(166));return we(l),null}e=D.current,zt(l)?Pr(l):(e=Bf(u,t,a),l.stateNode=e,ta(l))}return we(l),null;case 5:if(Ql(l),u=l.type,e!==null&&l.stateNode!=null)e.memoizedProps!==t&&ta(l);else{if(!t){if(l.stateNode===null)throw Error(f(166));return we(l),null}if(n=D.current,zt(l))Pr(l);else{var s=Pn(I.current);switch(n){case 1:n=s.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:n=s.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":n=s.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":n=s.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":n=s.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof t.is=="string"?s.createElement("select",{is:t.is}):s.createElement("select"),t.multiple?n.multiple=!0:t.size&&(n.size=t.size);break;default:n=typeof t.is=="string"?s.createElement(u,{is:t.is}):s.createElement(u)}}n[Ie]=l,n[cl]=t;e:for(s=l.child;s!==null;){if(s.tag===5||s.tag===6)n.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===l)break e;for(;s.sibling===null;){if(s.return===null||s.return===l)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}l.stateNode=n;e:switch(Pe(n,u,t),u){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ta(l)}}return we(l),Js(l,l.type,e===null?null:e.memoizedProps,l.pendingProps,a),null;case 6:if(e&&l.stateNode!=null)e.memoizedProps!==t&&ta(l);else{if(typeof t!="string"&&l.stateNode===null)throw Error(f(166));if(e=I.current,zt(l)){if(e=l.stateNode,a=l.memoizedProps,t=null,u=$e,u!==null)switch(u.tag){case 27:case 5:t=u.memoizedProps}e[Ie]=l,e=!!(e.nodeValue===a||t!==null&&t.suppressHydrationWarning===!0||gf(e.nodeValue,a)),e||pa(l,!0)}else e=Pn(e).createTextNode(t),e[Ie]=l,l.stateNode=e}return we(l),null;case 31:if(a=l.memoizedState,e===null||e.memoizedState!==null){if(t=zt(l),a!==null){if(e===null){if(!t)throw Error(f(318));if(e=l.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(557));e[Ie]=l}else Va(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;we(l),e=!1}else a=ts(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return l.flags&256?(xl(l),l):(xl(l),null);if((l.flags&128)!==0)throw Error(f(558))}return we(l),null;case 13:if(t=l.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=zt(l),t!==null&&t.dehydrated!==null){if(e===null){if(!u)throw Error(f(318));if(u=l.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(f(317));u[Ie]=l}else Va(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;we(l),u=!1}else u=ts(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return l.flags&256?(xl(l),l):(xl(l),null)}return xl(l),(l.flags&128)!==0?(l.lanes=a,l):(a=t!==null,e=e!==null&&e.memoizedState!==null,a&&(t=l.child,u=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(u=t.alternate.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==u&&(t.flags|=2048)),a!==e&&a&&(l.child.flags|=8192),qn(l,l.updateQueue),we(l),null);case 4:return ge(),e===null&&hi(l.stateNode.containerInfo),we(l),null;case 10:return Pl(l.type),we(l),null;case 19:if(S(Ee),t=l.memoizedState,t===null)return we(l),null;if(u=(l.flags&128)!==0,n=t.rendering,n===null)if(u)Au(t,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=l.child;e!==null;){if(n=Tn(e),n!==null){for(l.flags|=128,Au(t,!1),e=n.updateQueue,l.updateQueue=e,qn(l,e),l.subtreeFlags=0,e=a,a=l.child;a!==null;)kr(a,e),a=a.sibling;return z(Ee,Ee.current&1|2),te&&Wl(l,t.treeForkCount),l.child}e=e.sibling}t.tail!==null&&ll()>Ln&&(l.flags|=128,u=!0,Au(t,!1),l.lanes=4194304)}else{if(!u)if(e=Tn(n),e!==null){if(l.flags|=128,u=!0,e=e.updateQueue,l.updateQueue=e,qn(l,e),Au(t,!0),t.tail===null&&t.tailMode==="hidden"&&!n.alternate&&!te)return we(l),null}else 2*ll()-t.renderingStartTime>Ln&&a!==536870912&&(l.flags|=128,u=!0,Au(t,!1),l.lanes=4194304);t.isBackwards?(n.sibling=l.child,l.child=n):(e=t.last,e!==null?e.sibling=n:l.child=n,t.last=n)}return t.tail!==null?(e=t.tail,t.rendering=e,t.tail=e.sibling,t.renderingStartTime=ll(),e.sibling=null,a=Ee.current,z(Ee,u?a&1|2:a&1),te&&Wl(l,t.treeForkCount),e):(we(l),null);case 22:case 23:return xl(l),ps(),t=l.memoizedState!==null,e!==null?e.memoizedState!==null!==t&&(l.flags|=8192):t&&(l.flags|=8192),t?(a&536870912)!==0&&(l.flags&128)===0&&(we(l),l.subtreeFlags&6&&(l.flags|=8192)):we(l),a=l.updateQueue,a!==null&&qn(l,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),t=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(t=l.memoizedState.cachePool.pool),t!==a&&(l.flags|=2048),e!==null&&S(ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),Pl(Me),we(l),null;case 25:return null;case 30:return null}throw Error(f(156,l.tag))}function Rv(e,l){switch(ls(l),l.tag){case 1:return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 3:return Pl(Me),ge(),e=l.flags,(e&65536)!==0&&(e&128)===0?(l.flags=e&-65537|128,l):null;case 26:case 27:case 5:return Ql(l),null;case 31:if(l.memoizedState!==null){if(xl(l),l.alternate===null)throw Error(f(340));Va()}return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 13:if(xl(l),e=l.memoizedState,e!==null&&e.dehydrated!==null){if(l.alternate===null)throw Error(f(340));Va()}return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 19:return S(Ee),null;case 4:return ge(),null;case 10:return Pl(l.type),null;case 22:case 23:return xl(l),ps(),e!==null&&S(ka),e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 24:return Pl(Me),null;case 25:return null;default:return null}}function wd(e,l){switch(ls(l),l.tag){case 3:Pl(Me),ge();break;case 26:case 27:case 5:Ql(l);break;case 4:ge();break;case 31:l.memoizedState!==null&&xl(l);break;case 13:xl(l);break;case 19:S(Ee);break;case 10:Pl(l.type);break;case 22:case 23:xl(l),ps(),e!==null&&S(ka);break;case 24:Pl(Me)}}function Su(e,l){try{var a=l.updateQueue,t=a!==null?a.lastEffect:null;if(t!==null){var u=t.next;a=u;do{if((a.tag&e)===e){t=void 0;var n=a.create,s=a.inst;t=n(),s.destroy=t}a=a.next}while(a!==u)}}catch(i){ve(l,l.return,i)}}function Aa(e,l,a){try{var t=l.updateQueue,u=t!==null?t.lastEffect:null;if(u!==null){var n=u.next;t=n;do{if((t.tag&e)===e){var s=t.inst,i=s.destroy;if(i!==void 0){s.destroy=void 0,u=l;var r=a,p=i;try{p()}catch(j){ve(u,r,j)}}}t=t.next}while(t!==n)}}catch(j){ve(l,l.return,j)}}function Ad(e){var l=e.updateQueue;if(l!==null){var a=e.stateNode;try{vo(l,a)}catch(t){ve(e,e.return,t)}}}function Sd(e,l,a){a.props=Pa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(t){ve(e,l,t)}}function Tu(e,l){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var t=e.stateNode;break;case 30:t=e.stateNode;break;default:t=e.stateNode}typeof a=="function"?e.refCleanup=a(t):a.current=t}}catch(u){ve(e,l,u)}}function Vl(e,l){var a=e.ref,t=e.refCleanup;if(a!==null)if(typeof t=="function")try{t()}catch(u){ve(e,l,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ve(e,l,u)}else a.current=null}function Td(e){var l=e.type,a=e.memoizedProps,t=e.stateNode;try{e:switch(l){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break e;case"img":a.src?t.src=a.src:a.srcSet&&(t.srcset=a.srcSet)}}catch(u){ve(e,e.return,u)}}function ks(e,l,a){try{var t=e.stateNode;um(t,e.type,a,l),t[cl]=l}catch(u){ve(e,e.return,u)}}function zd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ma(e.type)||e.tag===4}function Is(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $s(e,l,a){var t=e.tag;if(t===5||t===6)e=e.stateNode,l?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,l):(l=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,l.appendChild(e),a=a._reactRootContainer,a!=null||l.onclick!==null||(l.onclick=kl));else if(t!==4&&(t===27&&Ma(e.type)&&(a=e.stateNode,l=null),e=e.child,e!==null))for($s(e,l,a),e=e.sibling;e!==null;)$s(e,l,a),e=e.sibling}function Yn(e,l,a){var t=e.tag;if(t===5||t===6)e=e.stateNode,l?a.insertBefore(e,l):a.appendChild(e);else if(t!==4&&(t===27&&Ma(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Yn(e,l,a),e=e.sibling;e!==null;)Yn(e,l,a),e=e.sibling}function Ed(e){var l=e.stateNode,a=e.memoizedProps;try{for(var t=e.type,u=l.attributes;u.length;)l.removeAttributeNode(u[0]);Pe(l,t,a),l[Ie]=e,l[cl]=a}catch(n){ve(e,e.return,n)}}var ua=!1,De=!1,Ws=!1,Nd=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Hv(e,l){if(e=e.containerInfo,gi=cc,e=Yr(e),Zc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var t=a.getSelection&&a.getSelection();if(t&&t.rangeCount!==0){a=t.anchorNode;var u=t.anchorOffset,n=t.focusNode;t=t.focusOffset;try{a.nodeType,n.nodeType}catch{a=null;break e}var s=0,i=-1,r=-1,p=0,j=0,T=e,y=null;l:for(;;){for(var x;T!==a||u!==0&&T.nodeType!==3||(i=s+u),T!==n||t!==0&&T.nodeType!==3||(r=s+t),T.nodeType===3&&(s+=T.nodeValue.length),(x=T.firstChild)!==null;)y=T,T=x;for(;;){if(T===e)break l;if(y===a&&++p===u&&(i=s),y===n&&++j===t&&(r=s),(x=T.nextSibling)!==null)break;T=y,y=T.parentNode}T=x}a=i===-1||r===-1?null:{start:i,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(xi={focusedElem:e,selectionRange:a},cc=!1,Ge=l;Ge!==null;)if(l=Ge,e=l.child,(l.subtreeFlags&1028)!==0&&e!==null)e.return=l,Ge=e;else for(;Ge!==null;){switch(l=Ge,n=l.alternate,e=l.flags,l.tag){case 0:if((e&4)!==0&&(e=l.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,a=l,u=n.memoizedProps,n=n.memoizedState,t=a.stateNode;try{var U=Pa(a.type,u);e=t.getSnapshotBeforeUpdate(U,n),t.__reactInternalSnapshotBeforeUpdate=e}catch(L){ve(a,a.return,L)}}break;case 3:if((e&1024)!==0){if(e=l.stateNode.containerInfo,a=e.nodeType,a===9)wi(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wi(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(f(163))}if(e=l.sibling,e!==null){e.return=l.return,Ge=e;break}Ge=l.return}}function Bd(e,l,a){var t=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),t&4&&Su(5,a);break;case 1:if(ca(e,a),t&4)if(e=a.stateNode,l===null)try{e.componentDidMount()}catch(s){ve(a,a.return,s)}else{var u=Pa(a.type,l.memoizedProps);l=l.memoizedState;try{e.componentDidUpdate(u,l,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ve(a,a.return,s)}}t&64&&Ad(a),t&512&&Tu(a,a.return);break;case 3:if(ca(e,a),t&64&&(e=a.updateQueue,e!==null)){if(l=null,a.child!==null)switch(a.child.tag){case 27:case 5:l=a.child.stateNode;break;case 1:l=a.child.stateNode}try{vo(e,l)}catch(s){ve(a,a.return,s)}}break;case 27:l===null&&t&4&&Ed(a);case 26:case 5:ca(e,a),l===null&&t&4&&Td(a),t&512&&Tu(a,a.return);break;case 12:ca(e,a);break;case 31:ca(e,a),t&4&&_d(e,a);break;case 13:ca(e,a),t&4&&Dd(e,a),t&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Kv.bind(null,a),fm(e,a))));break;case 22:if(t=a.memoizedState!==null||ua,!t){l=l!==null&&l.memoizedState!==null||De,u=ua;var n=De;ua=t,(De=l)&&!n?sa(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),ua=u,De=n}break;case 30:break;default:ca(e,a)}}function Md(e){var l=e.alternate;l!==null&&(e.alternate=null,Md(l)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(l=e.stateNode,l!==null&&Ec(l)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,il=!1;function na(e,l,a){for(a=a.child;a!==null;)Od(e,l,a),a=a.sibling}function Od(e,l,a){if(W&&typeof W.onCommitFiberUnmount=="function")try{W.onCommitFiberUnmount(C,a)}catch{}switch(a.tag){case 26:De||Vl(a,l),na(e,l,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:De||Vl(a,l);var t=Se,u=il;Ma(a.type)&&(Se=a.stateNode,il=!1),na(e,l,a),Uu(a.stateNode),Se=t,il=u;break;case 5:De||Vl(a,l);case 6:if(t=Se,u=il,Se=null,na(e,l,a),Se=t,il=u,Se!==null)if(il)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(a.stateNode)}catch(n){ve(a,l,n)}else try{Se.removeChild(a.stateNode)}catch(n){ve(a,l,n)}break;case 18:Se!==null&&(il?(e=Se,Sf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Jt(e)):Sf(Se,a.stateNode));break;case 4:t=Se,u=il,Se=a.stateNode.containerInfo,il=!0,na(e,l,a),Se=t,il=u;break;case 0:case 11:case 14:case 15:Aa(2,a,l),De||Aa(4,a,l),na(e,l,a);break;case 1:De||(Vl(a,l),t=a.stateNode,typeof t.componentWillUnmount=="function"&&Sd(a,l,t)),na(e,l,a);break;case 21:na(e,l,a);break;case 22:De=(t=De)||a.memoizedState!==null,na(e,l,a),De=t;break;default:na(e,l,a)}}function _d(e,l){if(l.memoizedState===null&&(e=l.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Jt(e)}catch(a){ve(l,l.return,a)}}}function Dd(e,l){if(l.memoizedState===null&&(e=l.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jt(e)}catch(a){ve(l,l.return,a)}}function qv(e){switch(e.tag){case 31:case 13:case 19:var l=e.stateNode;return l===null&&(l=e.stateNode=new Nd),l;case 22:return e=e.stateNode,l=e._retryCache,l===null&&(l=e._retryCache=new Nd),l;default:throw Error(f(435,e.tag))}}function Gn(e,l){var a=qv(e);l.forEach(function(t){if(!a.has(t)){a.add(t);var u=Jv.bind(null,e,t);t.then(u,u)}})}function rl(e,l){var a=l.deletions;if(a!==null)for(var t=0;t<a.length;t++){var u=a[t],n=e,s=l,i=s;e:for(;i!==null;){switch(i.tag){case 27:if(Ma(i.type)){Se=i.stateNode,il=!1;break e}break;case 5:Se=i.stateNode,il=!1;break e;case 3:case 4:Se=i.stateNode.containerInfo,il=!0;break e}i=i.return}if(Se===null)throw Error(f(160));Od(n,s,u),Se=null,il=!1,n=u.alternate,n!==null&&(n.return=null),u.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)Ud(l,e),l=l.sibling}var Hl=null;function Ud(e,l){var a=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:rl(l,e),ol(e),t&4&&(Aa(3,e,e.return),Su(3,e),Aa(5,e,e.return));break;case 1:rl(l,e),ol(e),t&512&&(De||a===null||Vl(a,a.return)),t&64&&ua&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?t:a.concat(t))));break;case 26:var u=Hl;if(rl(l,e),ol(e),t&512&&(De||a===null||Vl(a,a.return)),t&4){var n=a!==null?a.memoizedState:null;if(t=e.memoizedState,a===null)if(t===null)if(e.stateNode===null){e:{t=e.type,a=e.memoizedProps,u=u.ownerDocument||u;l:switch(t){case"title":n=u.getElementsByTagName("title")[0],(!n||n[Ft]||n[Ie]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=u.createElement(t),u.head.insertBefore(n,u.querySelector("head > title"))),Pe(n,t,a),n[Ie]=e,Ye(n),t=n;break e;case"link":var s=Cf("link","href",u).get(t+(a.href||""));if(s){for(var i=0;i<s.length;i++)if(n=s[i],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(i,1);break l}}n=u.createElement(t),Pe(n,t,a),u.head.appendChild(n);break;case"meta":if(s=Cf("meta","content",u).get(t+(a.content||""))){for(i=0;i<s.length;i++)if(n=s[i],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(i,1);break l}}n=u.createElement(t),Pe(n,t,a),u.head.appendChild(n);break;default:throw Error(f(468,t))}n[Ie]=e,Ye(n),t=n}e.stateNode=t}else Rf(u,e.type,e.stateNode);else e.stateNode=Uf(u,t,e.memoizedProps);else n!==t?(n===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):n.count--,t===null?Rf(u,e.type,e.stateNode):Uf(u,t,e.memoizedProps)):t===null&&e.stateNode!==null&&ks(e,e.memoizedProps,a.memoizedProps)}break;case 27:rl(l,e),ol(e),t&512&&(De||a===null||Vl(a,a.return)),a!==null&&t&4&&ks(e,e.memoizedProps,a.memoizedProps);break;case 5:if(rl(l,e),ol(e),t&512&&(De||a===null||Vl(a,a.return)),e.flags&32){u=e.stateNode;try{pt(u,"")}catch(U){ve(e,e.return,U)}}t&4&&e.stateNode!=null&&(u=e.memoizedProps,ks(e,u,a!==null?a.memoizedProps:u)),t&1024&&(Ws=!0);break;case 6:if(rl(l,e),ol(e),t&4){if(e.stateNode===null)throw Error(f(162));t=e.memoizedProps,a=e.stateNode;try{a.nodeValue=t}catch(U){ve(e,e.return,U)}}break;case 3:if(ac=null,u=Hl,Hl=ec(l.containerInfo),rl(l,e),Hl=u,ol(e),t&4&&a!==null&&a.memoizedState.isDehydrated)try{Jt(l.containerInfo)}catch(U){ve(e,e.return,U)}Ws&&(Ws=!1,Cd(e));break;case 4:t=Hl,Hl=ec(e.stateNode.containerInfo),rl(l,e),ol(e),Hl=t;break;case 12:rl(l,e),ol(e);break;case 31:rl(l,e),ol(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Gn(e,t)));break;case 13:rl(l,e),ol(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xn=ll()),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Gn(e,t)));break;case 22:u=e.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,p=ua,j=De;if(ua=p||u,De=j||r,rl(l,e),De=j,ua=p,ol(e),t&8192)e:for(l=e.stateNode,l._visibility=u?l._visibility&-2:l._visibility|1,u&&(a===null||r||ua||De||et(e)),a=null,l=e;;){if(l.tag===5||l.tag===26){if(a===null){r=a=l;try{if(n=r.stateNode,u)s=n.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{i=r.stateNode;var T=r.memoizedProps.style,y=T!=null&&T.hasOwnProperty("display")?T.display:null;i.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(U){ve(r,r.return,U)}}}else if(l.tag===6){if(a===null){r=l;try{r.stateNode.nodeValue=u?"":r.memoizedProps}catch(U){ve(r,r.return,U)}}}else if(l.tag===18){if(a===null){r=l;try{var x=r.stateNode;u?Tf(x,!0):Tf(r.stateNode,!1)}catch(U){ve(r,r.return,U)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===e)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break e;for(;l.sibling===null;){if(l.return===null||l.return===e)break e;a===l&&(a=null),l=l.return}a===l&&(a=null),l.sibling.return=l.return,l=l.sibling}t&4&&(t=e.updateQueue,t!==null&&(a=t.retryQueue,a!==null&&(t.retryQueue=null,Gn(e,a))));break;case 19:rl(l,e),ol(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Gn(e,t)));break;case 30:break;case 21:break;default:rl(l,e),ol(e)}}function ol(e){var l=e.flags;if(l&2){try{for(var a,t=e.return;t!==null;){if(zd(t)){a=t;break}t=t.return}if(a==null)throw Error(f(160));switch(a.tag){case 27:var u=a.stateNode,n=Is(e);Yn(e,n,u);break;case 5:var s=a.stateNode;a.flags&32&&(pt(s,""),a.flags&=-33);var i=Is(e);Yn(e,i,s);break;case 3:case 4:var r=a.stateNode.containerInfo,p=Is(e);$s(e,p,r);break;default:throw Error(f(161))}}catch(j){ve(e,e.return,j)}e.flags&=-3}l&4096&&(e.flags&=-4097)}function Cd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var l=e;Cd(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),e=e.sibling}}function ca(e,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)Bd(e,l.alternate,l),l=l.sibling}function et(e){for(e=e.child;e!==null;){var l=e;switch(l.tag){case 0:case 11:case 14:case 15:Aa(4,l,l.return),et(l);break;case 1:Vl(l,l.return);var a=l.stateNode;typeof a.componentWillUnmount=="function"&&Sd(l,l.return,a),et(l);break;case 27:Uu(l.stateNode);case 26:case 5:Vl(l,l.return),et(l);break;case 22:l.memoizedState===null&&et(l);break;case 30:et(l);break;default:et(l)}e=e.sibling}}function sa(e,l,a){for(a=a&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var t=l.alternate,u=e,n=l,s=n.flags;switch(n.tag){case 0:case 11:case 15:sa(u,n,a),Su(4,n);break;case 1:if(sa(u,n,a),t=n,u=t.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(p){ve(t,t.return,p)}if(t=n,u=t.updateQueue,u!==null){var i=t.stateNode;try{var r=u.shared.hiddenCallbacks;if(r!==null)for(u.shared.hiddenCallbacks=null,u=0;u<r.length;u++)fo(r[u],i)}catch(p){ve(t,t.return,p)}}a&&s&64&&Ad(n),Tu(n,n.return);break;case 27:Ed(n);case 26:case 5:sa(u,n,a),a&&t===null&&s&4&&Td(n),Tu(n,n.return);break;case 12:sa(u,n,a);break;case 31:sa(u,n,a),a&&s&4&&_d(u,n);break;case 13:sa(u,n,a),a&&s&4&&Dd(u,n);break;case 22:n.memoizedState===null&&sa(u,n,a),Tu(n,n.return);break;case 30:break;default:sa(u,n,a)}l=l.sibling}}function Fs(e,l){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&du(a))}function Ps(e,l){e=null,l.alternate!==null&&(e=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==e&&(l.refCount++,e!=null&&du(e))}function ql(e,l,a,t){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)Rd(e,l,a,t),l=l.sibling}function Rd(e,l,a,t){var u=l.flags;switch(l.tag){case 0:case 11:case 15:ql(e,l,a,t),u&2048&&Su(9,l);break;case 1:ql(e,l,a,t);break;case 3:ql(e,l,a,t),u&2048&&(e=null,l.alternate!==null&&(e=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==e&&(l.refCount++,e!=null&&du(e)));break;case 12:if(u&2048){ql(e,l,a,t),e=l.stateNode;try{var n=l.memoizedProps,s=n.id,i=n.onPostCommit;typeof i=="function"&&i(s,l.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){ve(l,l.return,r)}}else ql(e,l,a,t);break;case 31:ql(e,l,a,t);break;case 13:ql(e,l,a,t);break;case 23:break;case 22:n=l.stateNode,s=l.alternate,l.memoizedState!==null?n._visibility&2?ql(e,l,a,t):zu(e,l):n._visibility&2?ql(e,l,a,t):(n._visibility|=2,Rt(e,l,a,t,(l.subtreeFlags&10256)!==0||!1)),u&2048&&Fs(s,l);break;case 24:ql(e,l,a,t),u&2048&&Ps(l.alternate,l);break;default:ql(e,l,a,t)}}function Rt(e,l,a,t,u){for(u=u&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var n=e,s=l,i=a,r=t,p=s.flags;switch(s.tag){case 0:case 11:case 15:Rt(n,s,i,r,u),Su(8,s);break;case 23:break;case 22:var j=s.stateNode;s.memoizedState!==null?j._visibility&2?Rt(n,s,i,r,u):zu(n,s):(j._visibility|=2,Rt(n,s,i,r,u)),u&&p&2048&&Fs(s.alternate,s);break;case 24:Rt(n,s,i,r,u),u&&p&2048&&Ps(s.alternate,s);break;default:Rt(n,s,i,r,u)}l=l.sibling}}function zu(e,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var a=e,t=l,u=t.flags;switch(t.tag){case 22:zu(a,t),u&2048&&Fs(t.alternate,t);break;case 24:zu(a,t),u&2048&&Ps(t.alternate,t);break;default:zu(a,t)}l=l.sibling}}var Eu=8192;function Ht(e,l,a){if(e.subtreeFlags&Eu)for(e=e.child;e!==null;)Hd(e,l,a),e=e.sibling}function Hd(e,l,a){switch(e.tag){case 26:Ht(e,l,a),e.flags&Eu&&e.memoizedState!==null&&Sm(a,Hl,e.memoizedState,e.memoizedProps);break;case 5:Ht(e,l,a);break;case 3:case 4:var t=Hl;Hl=ec(e.stateNode.containerInfo),Ht(e,l,a),Hl=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Eu,Eu=16777216,Ht(e,l,a),Eu=t):Ht(e,l,a));break;default:Ht(e,l,a)}}function qd(e){var l=e.alternate;if(l!==null&&(e=l.child,e!==null)){l.child=null;do l=e.sibling,e.sibling=null,e=l;while(e!==null)}}function Nu(e){var l=e.deletions;if((e.flags&16)!==0){if(l!==null)for(var a=0;a<l.length;a++){var t=l[a];Ge=t,Gd(t,e)}qd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yd(e),e=e.sibling}function Yd(e){switch(e.tag){case 0:case 11:case 15:Nu(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:Nu(e);break;case 12:Nu(e);break;case 22:var l=e.stateNode;e.memoizedState!==null&&l._visibility&2&&(e.return===null||e.return.tag!==13)?(l._visibility&=-3,Qn(e)):Nu(e);break;default:Nu(e)}}function Qn(e){var l=e.deletions;if((e.flags&16)!==0){if(l!==null)for(var a=0;a<l.length;a++){var t=l[a];Ge=t,Gd(t,e)}qd(e)}for(e=e.child;e!==null;){switch(l=e,l.tag){case 0:case 11:case 15:Aa(8,l,l.return),Qn(l);break;case 22:a=l.stateNode,a._visibility&2&&(a._visibility&=-3,Qn(l));break;default:Qn(l)}e=e.sibling}}function Gd(e,l){for(;Ge!==null;){var a=Ge;switch(a.tag){case 0:case 11:case 15:Aa(8,a,l);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var t=a.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:du(a.memoizedState.cache)}if(t=a.child,t!==null)t.return=a,Ge=t;else e:for(a=e;Ge!==null;){t=Ge;var u=t.sibling,n=t.return;if(Md(t),t===a){Ge=null;break e}if(u!==null){u.return=n,Ge=u;break e}Ge=n}}}var Yv={getCacheForType:function(e){var l=We(Me),a=l.data.get(e);return a===void 0&&(a=e(),l.data.set(e,a)),a},cacheSignal:function(){return We(Me).controller.signal}},Gv=typeof WeakMap=="function"?WeakMap:Map,ie=0,ye=null,P=null,le=0,fe=0,bl=null,Sa=!1,qt=!1,ei=!1,ia=0,ze=0,Ta=0,lt=0,li=0,jl=0,Yt=0,Bu=null,dl=null,ai=!1,Xn=0,Qd=0,Ln=1/0,Zn=null,za=null,Re=0,Ea=null,Gt=null,ra=0,ti=0,ui=null,Xd=null,Mu=0,ni=null;function wl(){return(ie&2)!==0&&le!==0?le&-le:b.T!==null?di():tr()}function Ld(){if(jl===0)if((le&536870912)===0||te){var e=Wu;Wu<<=1,(Wu&3932160)===0&&(Wu=262144),jl=e}else jl=536870912;return e=gl.current,e!==null&&(e.flags|=32),jl}function fl(e,l,a){(e===ye&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(Qt(e,0),Na(e,le,jl,!1)),Wt(e,a),((ie&2)===0||e!==ye)&&(e===ye&&((ie&2)===0&&(lt|=a),ze===4&&Na(e,le,jl,!1)),Kl(e))}function Zd(e,l,a){if((ie&6)!==0)throw Error(f(327));var t=!a&&(l&127)===0&&(l&e.expiredLanes)===0||$t(e,l),u=t?Lv(e,l):si(e,l,!0),n=t;do{if(u===0){qt&&!t&&Na(e,l,0,!1);break}else{if(a=e.current.alternate,n&&!Qv(a)){u=si(e,l,!1),n=!1;continue}if(u===2){if(n=l,e.errorRecoveryDisabledLanes&n)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){l=s;e:{var i=e;u=Bu;var r=i.current.memoizedState.isDehydrated;if(r&&(Qt(i,s).flags|=256),s=si(i,s,!1),s!==2){if(ei&&!r){i.errorRecoveryDisabledLanes|=n,lt|=n,u=4;break e}n=dl,dl=u,n!==null&&(dl===null?dl=n:dl.push.apply(dl,n))}u=s}if(n=!1,u!==2)continue}}if(u===1){Qt(e,0),Na(e,l,0,!0);break}e:{switch(t=e,n=u,n){case 0:case 1:throw Error(f(345));case 4:if((l&4194048)!==l)break;case 6:Na(t,l,jl,!Sa);break e;case 2:dl=null;break;case 3:case 5:break;default:throw Error(f(329))}if((l&62914560)===l&&(u=Xn+300-ll(),10<u)){if(Na(t,l,jl,!Sa),Pu(t,0,!0)!==0)break e;ra=l,t.timeoutHandle=wf(Vd.bind(null,t,a,dl,Zn,ai,l,jl,lt,Yt,Sa,n,"Throttled",-0,0),u);break e}Vd(t,a,dl,Zn,ai,l,jl,lt,Yt,Sa,n,null,-0,0)}}break}while(!0);Kl(e)}function Vd(e,l,a,t,u,n,s,i,r,p,j,T,y,x){if(e.timeoutHandle=-1,T=l.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:kl},Hd(l,n,T);var U=(n&62914560)===n?Xn-ll():(n&4194048)===n?Qd-ll():0;if(U=Tm(T,U),U!==null){ra=n,e.cancelPendingCommit=U(Pd.bind(null,e,l,n,a,t,u,s,i,r,j,T,null,y,x)),Na(e,n,s,!p);return}}Pd(e,l,n,a,t,u,s,i,r)}function Qv(e){for(var l=e;;){var a=l.tag;if((a===0||a===11||a===15)&&l.flags&16384&&(a=l.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var t=0;t<a.length;t++){var u=a[t],n=u.getSnapshot;u=u.value;try{if(!pl(n(),u))return!1}catch{return!1}}if(a=l.child,l.subtreeFlags&16384&&a!==null)a.return=l,l=a;else{if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function Na(e,l,a,t){l&=~li,l&=~lt,e.suspendedLanes|=l,e.pingedLanes&=~l,t&&(e.warmLanes|=l),t=e.expirationTimes;for(var u=l;0<u;){var n=31-hl(u),s=1<<n;t[n]=-1,u&=~s}a!==0&&er(e,a,l)}function Vn(){return(ie&6)===0?(Ou(0),!1):!0}function ci(){if(P!==null){if(fe===0)var e=P.return;else e=P,Fl=Ka=null,ws(e),Ot=null,vu=0,e=P;for(;e!==null;)wd(e.alternate,e),e=e.return;P=null}}function Qt(e,l){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,sm(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,ci(),ye=e,P=a=$l(e.current,null),le=l,fe=0,bl=null,Sa=!1,qt=$t(e,l),ei=!1,Yt=jl=li=lt=Ta=ze=0,dl=Bu=null,ai=!1,(l&8)!==0&&(l|=l&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=l;0<t;){var u=31-hl(t),n=1<<u;l|=e[u],t&=~n}return ia=l,fn(),a}function Kd(e,l){V=null,b.H=ju,l===Mt||l===bn?(l=so(),fe=3):l===os?(l=so(),fe=4):fe=l===qs?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,bl=l,P===null&&(ze=1,Un(e,Nl(l,e.current)))}function Jd(){var e=gl.current;return e===null?!0:(le&4194048)===le?_l===null:(le&62914560)===le||(le&536870912)!==0?e===_l:!1}function kd(){var e=b.H;return b.H=ju,e===null?ju:e}function Id(){var e=b.A;return b.A=Yv,e}function Kn(){ze=4,Sa||(le&4194048)!==le&&gl.current!==null||(qt=!0),(Ta&134217727)===0&&(lt&134217727)===0||ye===null||Na(ye,le,jl,!1)}function si(e,l,a){var t=ie;ie|=2;var u=kd(),n=Id();(ye!==e||le!==l)&&(Zn=null,Qt(e,l)),l=!1;var s=ze;e:do try{if(fe!==0&&P!==null){var i=P,r=bl;switch(fe){case 8:ci(),s=6;break e;case 3:case 2:case 9:case 6:gl.current===null&&(l=!0);var p=fe;if(fe=0,bl=null,Xt(e,i,r,p),a&&qt){s=0;break e}break;default:p=fe,fe=0,bl=null,Xt(e,i,r,p)}}Xv(),s=ze;break}catch(j){Kd(e,j)}while(!0);return l&&e.shellSuspendCounter++,Fl=Ka=null,ie=t,b.H=u,b.A=n,P===null&&(ye=null,le=0,fn()),s}function Xv(){for(;P!==null;)$d(P)}function Lv(e,l){var a=ie;ie|=2;var t=kd(),u=Id();ye!==e||le!==l?(Zn=null,Ln=ll()+500,Qt(e,l)):qt=$t(e,l);e:do try{if(fe!==0&&P!==null){l=P;var n=bl;l:switch(fe){case 1:fe=0,bl=null,Xt(e,l,n,1);break;case 2:case 9:if(no(n)){fe=0,bl=null,Wd(l);break}l=function(){fe!==2&&fe!==9||ye!==e||(fe=7),Kl(e)},n.then(l,l);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:no(n)?(fe=0,bl=null,Wd(l)):(fe=0,bl=null,Xt(e,l,n,7));break;case 5:var s=null;switch(P.tag){case 26:s=P.memoizedState;case 5:case 27:var i=P;if(s?Hf(s):i.stateNode.complete){fe=0,bl=null;var r=i.sibling;if(r!==null)P=r;else{var p=i.return;p!==null?(P=p,Jn(p)):P=null}break l}}fe=0,bl=null,Xt(e,l,n,5);break;case 6:fe=0,bl=null,Xt(e,l,n,6);break;case 8:ci(),ze=6;break e;default:throw Error(f(462))}}Zv();break}catch(j){Kd(e,j)}while(!0);return Fl=Ka=null,b.H=t,b.A=u,ie=a,P!==null?0:(ye=null,le=0,fn(),ze)}function Zv(){for(;P!==null&&!da();)$d(P)}function $d(e){var l=bd(e.alternate,e,ia);e.memoizedProps=e.pendingProps,l===null?Jn(e):P=l}function Wd(e){var l=e,a=l.alternate;switch(l.tag){case 15:case 0:l=md(a,l,l.pendingProps,l.type,void 0,le);break;case 11:l=md(a,l,l.pendingProps,l.type.render,l.ref,le);break;case 5:ws(l);default:wd(a,l),l=P=kr(l,ia),l=bd(a,l,ia)}e.memoizedProps=e.pendingProps,l===null?Jn(e):P=l}function Xt(e,l,a,t){Fl=Ka=null,ws(l),Ot=null,vu=0;var u=l.return;try{if(_v(e,u,l,a,le)){ze=1,Un(e,Nl(a,e.current)),P=null;return}}catch(n){if(u!==null)throw P=u,n;ze=1,Un(e,Nl(a,e.current)),P=null;return}l.flags&32768?(te||t===1?e=!0:qt||(le&536870912)!==0?e=!1:(Sa=e=!0,(t===2||t===9||t===3||t===6)&&(t=gl.current,t!==null&&t.tag===13&&(t.flags|=16384))),Fd(l,e)):Jn(l)}function Jn(e){var l=e;do{if((l.flags&32768)!==0){Fd(l,Sa);return}e=l.return;var a=Cv(l.alternate,l,ia);if(a!==null){P=a;return}if(l=l.sibling,l!==null){P=l;return}P=l=e}while(l!==null);ze===0&&(ze=5)}function Fd(e,l){do{var a=Rv(e.alternate,e);if(a!==null){a.flags&=32767,P=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!l&&(e=e.sibling,e!==null)){P=e;return}P=e=a}while(e!==null);ze=6,P=null}function Pd(e,l,a,t,u,n,s,i,r){e.cancelPendingCommit=null;do kn();while(Re!==0);if((ie&6)!==0)throw Error(f(327));if(l!==null){if(l===e.current)throw Error(f(177));if(n=l.lanes|l.childLanes,n|=Ic,A1(e,a,n,s,i,r),e===ye&&(P=ye=null,le=0),Gt=l,Ea=e,ra=a,ti=n,ui=u,Xd=t,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kv(rt,function(){return uf(),null})):(e.callbackNode=null,e.callbackPriority=0),t=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||t){t=b.T,b.T=null,u=M.p,M.p=2,s=ie,ie|=4;try{Hv(e,l,a)}finally{ie=s,M.p=u,b.T=t}}Re=1,ef(),lf(),af()}}function ef(){if(Re===1){Re=0;var e=Ea,l=Gt,a=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||a){a=b.T,b.T=null;var t=M.p;M.p=2;var u=ie;ie|=4;try{Ud(l,e);var n=xi,s=Yr(e.containerInfo),i=n.focusedElem,r=n.selectionRange;if(s!==i&&i&&i.ownerDocument&&qr(i.ownerDocument.documentElement,i)){if(r!==null&&Zc(i)){var p=r.start,j=r.end;if(j===void 0&&(j=p),"selectionStart"in i)i.selectionStart=p,i.selectionEnd=Math.min(j,i.value.length);else{var T=i.ownerDocument||document,y=T&&T.defaultView||window;if(y.getSelection){var x=y.getSelection(),U=i.textContent.length,L=Math.min(r.start,U),pe=r.end===void 0?L:Math.min(r.end,U);!x.extend&&L>pe&&(s=pe,pe=L,L=s);var m=Hr(i,L),d=Hr(i,pe);if(m&&d&&(x.rangeCount!==1||x.anchorNode!==m.node||x.anchorOffset!==m.offset||x.focusNode!==d.node||x.focusOffset!==d.offset)){var h=T.createRange();h.setStart(m.node,m.offset),x.removeAllRanges(),L>pe?(x.addRange(h),x.extend(d.node,d.offset)):(h.setEnd(d.node,d.offset),x.addRange(h))}}}}for(T=[],x=i;x=x.parentNode;)x.nodeType===1&&T.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<T.length;i++){var w=T[i];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}cc=!!gi,xi=gi=null}finally{ie=u,M.p=t,b.T=a}}e.current=l,Re=2}}function lf(){if(Re===2){Re=0;var e=Ea,l=Gt,a=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||a){a=b.T,b.T=null;var t=M.p;M.p=2;var u=ie;ie|=4;try{Bd(e,l.alternate,l)}finally{ie=u,M.p=t,b.T=a}}Re=3}}function af(){if(Re===4||Re===3){Re=0,it();var e=Ea,l=Gt,a=ra,t=Xd;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?Re=5:(Re=0,Gt=Ea=null,tf(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(za=null),Tc(a),l=l.stateNode,W&&typeof W.onCommitFiberRoot=="function")try{W.onCommitFiberRoot(C,l,void 0,(l.current.flags&128)===128)}catch{}if(t!==null){l=b.T,u=M.p,M.p=2,b.T=null;try{for(var n=e.onRecoverableError,s=0;s<t.length;s++){var i=t[s];n(i.value,{componentStack:i.stack})}}finally{b.T=l,M.p=u}}(ra&3)!==0&&kn(),Kl(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===ni?Mu++:(Mu=0,ni=e):Mu=0,Ou(0)}}function tf(e,l){(e.pooledCacheLanes&=l)===0&&(l=e.pooledCache,l!=null&&(e.pooledCache=null,du(l)))}function kn(){return ef(),lf(),af(),uf()}function uf(){if(Re!==5)return!1;var e=Ea,l=ti;ti=0;var a=Tc(ra),t=b.T,u=M.p;try{M.p=32>a?32:a,b.T=null,a=ui,ui=null;var n=Ea,s=ra;if(Re=0,Gt=Ea=null,ra=0,(ie&6)!==0)throw Error(f(331));var i=ie;if(ie|=4,Yd(n.current),Rd(n,n.current,s,a),ie=i,Ou(0,!1),W&&typeof W.onPostCommitFiberRoot=="function")try{W.onPostCommitFiberRoot(C,n)}catch{}return!0}finally{M.p=u,b.T=t,tf(e,l)}}function nf(e,l,a){l=Nl(a,l),l=Hs(e.stateNode,l,2),e=ba(e,l,2),e!==null&&(Wt(e,2),Kl(e))}function ve(e,l,a){if(e.tag===3)nf(e,e,a);else for(;l!==null;){if(l.tag===3){nf(l,e,a);break}else if(l.tag===1){var t=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(za===null||!za.has(t))){e=Nl(a,e),a=cd(2),t=ba(l,a,2),t!==null&&(sd(a,t,l,e),Wt(t,2),Kl(t));break}}l=l.return}}function ii(e,l,a){var t=e.pingCache;if(t===null){t=e.pingCache=new Gv;var u=new Set;t.set(l,u)}else u=t.get(l),u===void 0&&(u=new Set,t.set(l,u));u.has(a)||(ei=!0,u.add(a),e=Vv.bind(null,e,l,a),l.then(e,e))}function Vv(e,l,a){var t=e.pingCache;t!==null&&t.delete(l),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ye===e&&(le&a)===a&&(ze===4||ze===3&&(le&62914560)===le&&300>ll()-Xn?(ie&2)===0&&Qt(e,0):li|=a,Yt===le&&(Yt=0)),Kl(e)}function cf(e,l){l===0&&(l=Pi()),e=La(e,l),e!==null&&(Wt(e,l),Kl(e))}function Kv(e){var l=e.memoizedState,a=0;l!==null&&(a=l.retryLane),cf(e,a)}function Jv(e,l){var a=0;switch(e.tag){case 31:case 13:var t=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:t=e.stateNode;break;case 22:t=e.stateNode._retryCache;break;default:throw Error(f(314))}t!==null&&t.delete(l),cf(e,a)}function kv(e,l){return ct(e,l)}var In=null,Lt=null,ri=!1,$n=!1,oi=!1,Ba=0;function Kl(e){e!==Lt&&e.next===null&&(Lt===null?In=Lt=e:Lt=Lt.next=e),$n=!0,ri||(ri=!0,$v())}function Ou(e,l){if(!oi&&$n){oi=!0;do for(var a=!1,t=In;t!==null;){if(e!==0){var u=t.pendingLanes;if(u===0)var n=0;else{var s=t.suspendedLanes,i=t.pingedLanes;n=(1<<31-hl(42|e)+1)-1,n&=u&~(s&~i),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(a=!0,df(t,n))}else n=le,n=Pu(t,t===ye?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(n&3)===0||$t(t,n)||(a=!0,df(t,n));t=t.next}while(a);oi=!1}}function Iv(){sf()}function sf(){$n=ri=!1;var e=0;Ba!==0&&cm()&&(e=Ba);for(var l=ll(),a=null,t=In;t!==null;){var u=t.next,n=rf(t,l);n===0?(t.next=null,a===null?In=u:a.next=u,u===null&&(Lt=a)):(a=t,(e!==0||(n&3)!==0)&&($n=!0)),t=u}Re!==0&&Re!==5||Ou(e),Ba!==0&&(Ba=0)}function rf(e,l){for(var a=e.suspendedLanes,t=e.pingedLanes,u=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var s=31-hl(n),i=1<<s,r=u[s];r===-1?((i&a)===0||(i&t)!==0)&&(u[s]=w1(i,l)):r<=l&&(e.expiredLanes|=i),n&=~i}if(l=ye,a=le,a=Pu(e,e===l?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t=e.callbackNode,a===0||e===l&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return t!==null&&t!==null&&st(t),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$t(e,a)){if(l=a&-a,l===e.callbackPriority)return l;switch(t!==null&&st(t),Tc(a)){case 2:case 8:a=ku;break;case 32:a=rt;break;case 268435456:a=Iu;break;default:a=rt}return t=of.bind(null,e),a=ct(a,t),e.callbackPriority=l,e.callbackNode=a,l}return t!==null&&t!==null&&st(t),e.callbackPriority=2,e.callbackNode=null,2}function of(e,l){if(Re!==0&&Re!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(kn()&&e.callbackNode!==a)return null;var t=le;return t=Pu(e,e===ye?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t===0?null:(Zd(e,t,l),rf(e,ll()),e.callbackNode!=null&&e.callbackNode===a?of.bind(null,e):null)}function df(e,l){if(kn())return null;Zd(e,l,!0)}function $v(){im(function(){(ie&6)!==0?ct(kt,Iv):sf()})}function di(){if(Ba===0){var e=Nt;e===0&&(e=$u,$u<<=1,($u&261888)===0&&($u=256)),Ba=e}return Ba}function ff(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tn(""+e)}function vf(e,l){var a=l.ownerDocument.createElement("input");return a.name=l.name,a.value=l.value,e.id&&a.setAttribute("form",e.id),l.parentNode.insertBefore(a,l),e=new FormData(e),a.parentNode.removeChild(a),e}function Wv(e,l,a,t,u){if(l==="submit"&&a&&a.stateNode===u){var n=ff((u[cl]||null).action),s=t.submitter;s&&(l=(l=s[cl]||null)?ff(l.formAction):s.getAttribute("formAction"),l!==null&&(n=l,s=null));var i=new sn("action","action",null,t,u);e.push({event:i,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(Ba!==0){var r=s?vf(u,s):new FormData(u);Os(a,{pending:!0,data:r,method:u.method,action:n},null,r)}}else typeof n=="function"&&(i.preventDefault(),r=s?vf(u,s):new FormData(u),Os(a,{pending:!0,data:r,method:u.method,action:n},n,r))},currentTarget:u}]})}}for(var fi=0;fi<kc.length;fi++){var vi=kc[fi],Fv=vi.toLowerCase(),Pv=vi[0].toUpperCase()+vi.slice(1);Rl(Fv,"on"+Pv)}Rl(Xr,"onAnimationEnd"),Rl(Lr,"onAnimationIteration"),Rl(Zr,"onAnimationStart"),Rl("dblclick","onDoubleClick"),Rl("focusin","onFocus"),Rl("focusout","onBlur"),Rl(hv,"onTransitionRun"),Rl(pv,"onTransitionStart"),Rl(yv,"onTransitionCancel"),Rl(Vr,"onTransitionEnd"),mt("onMouseEnter",["mouseout","mouseover"]),mt("onMouseLeave",["mouseout","mouseover"]),mt("onPointerEnter",["pointerout","pointerover"]),mt("onPointerLeave",["pointerout","pointerover"]),Ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _u="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),em=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_u));function mf(e,l){l=(l&4)!==0;for(var a=0;a<e.length;a++){var t=e[a],u=t.event;t=t.listeners;e:{var n=void 0;if(l)for(var s=t.length-1;0<=s;s--){var i=t[s],r=i.instance,p=i.currentTarget;if(i=i.listener,r!==n&&u.isPropagationStopped())break e;n=i,u.currentTarget=p;try{n(u)}catch(j){dn(j)}u.currentTarget=null,n=r}else for(s=0;s<t.length;s++){if(i=t[s],r=i.instance,p=i.currentTarget,i=i.listener,r!==n&&u.isPropagationStopped())break e;n=i,u.currentTarget=p;try{n(u)}catch(j){dn(j)}u.currentTarget=null,n=r}}}}function ee(e,l){var a=l[zc];a===void 0&&(a=l[zc]=new Set);var t=e+"__bubble";a.has(t)||(hf(l,e,2,!1),a.add(t))}function mi(e,l,a){var t=0;l&&(t|=4),hf(a,e,t,l)}var Wn="_reactListening"+Math.random().toString(36).slice(2);function hi(e){if(!e[Wn]){e[Wn]=!0,cr.forEach(function(a){a!=="selectionchange"&&(em.has(a)||mi(a,!1,e),mi(a,!0,e))});var l=e.nodeType===9?e:e.ownerDocument;l===null||l[Wn]||(l[Wn]=!0,mi("selectionchange",!1,l))}}function hf(e,l,a,t){switch(Zf(l)){case 2:var u=Nm;break;case 8:u=Bm;break;default:u=Mi}a=u.bind(null,l,a,e),u=void 0,!Cc||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(u=!0),t?u!==void 0?e.addEventListener(l,a,{capture:!0,passive:u}):e.addEventListener(l,a,!0):u!==void 0?e.addEventListener(l,a,{passive:u}):e.addEventListener(l,a,!1)}function pi(e,l,a,t,u){var n=t;if((l&1)===0&&(l&2)===0&&t!==null)e:for(;;){if(t===null)return;var s=t.tag;if(s===3||s===4){var i=t.stateNode.containerInfo;if(i===u)break;if(s===4)for(s=t.return;s!==null;){var r=s.tag;if((r===3||r===4)&&s.stateNode.containerInfo===u)return;s=s.return}for(;i!==null;){if(s=dt(i),s===null)return;if(r=s.tag,r===5||r===6||r===26||r===27){t=n=s;continue e}i=i.parentNode}}t=t.return}gr(function(){var p=n,j=Dc(a),T=[];e:{var y=Kr.get(e);if(y!==void 0){var x=sn,U=e;switch(e){case"keypress":if(nn(a)===0)break e;case"keydown":case"keyup":x=J1;break;case"focusin":U="focus",x=Yc;break;case"focusout":U="blur",x=Yc;break;case"beforeblur":case"afterblur":x=Yc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=jr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=C1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=$1;break;case Xr:case Lr:case Zr:x=q1;break;case Vr:x=F1;break;case"scroll":case"scrollend":x=D1;break;case"wheel":x=ev;break;case"copy":case"cut":case"paste":x=G1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ar;break;case"toggle":case"beforetoggle":x=av}var L=(l&4)!==0,pe=!L&&(e==="scroll"||e==="scrollend"),m=L?y!==null?y+"Capture":null:y;L=[];for(var d=p,h;d!==null;){var w=d;if(h=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||h===null||m===null||(w=eu(d,m),w!=null&&L.push(Du(d,w,h))),pe)break;d=d.return}0<L.length&&(y=new x(y,U,null,a,j),T.push({event:y,listeners:L}))}}if((l&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",y&&a!==_c&&(U=a.relatedTarget||a.fromElement)&&(dt(U)||U[ot]))break e;if((x||y)&&(y=j.window===j?j:(y=j.ownerDocument)?y.defaultView||y.parentWindow:window,x?(U=a.relatedTarget||a.toElement,x=p,U=U?dt(U):null,U!==null&&(pe=q(U),L=U.tag,U!==pe||L!==5&&L!==27&&L!==6)&&(U=null)):(x=null,U=p),x!==U)){if(L=jr,w="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(L=Ar,w="onPointerLeave",m="onPointerEnter",d="pointer"),pe=x==null?y:Pt(x),h=U==null?y:Pt(U),y=new L(w,d+"leave",x,a,j),y.target=pe,y.relatedTarget=h,w=null,dt(j)===p&&(L=new L(m,d+"enter",U,a,j),L.target=h,L.relatedTarget=pe,w=L),pe=w,x&&U)l:{for(L=lm,m=x,d=U,h=0,w=m;w;w=L(w))h++;w=0;for(var G=d;G;G=L(G))w++;for(;0<h-w;)m=L(m),h--;for(;0<w-h;)d=L(d),w--;for(;h--;){if(m===d||d!==null&&m===d.alternate){L=m;break l}m=L(m),d=L(d)}L=null}else L=null;x!==null&&pf(T,y,x,L,!1),U!==null&&pe!==null&&pf(T,pe,U,L,!0)}}e:{if(y=p?Pt(p):window,x=y.nodeName&&y.nodeName.toLowerCase(),x==="select"||x==="input"&&y.type==="file")var ne=Or;else if(Br(y))if(_r)ne=fv;else{ne=ov;var R=rv}else x=y.nodeName,!x||x.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?p&&Oc(p.elementType)&&(ne=Or):ne=dv;if(ne&&(ne=ne(e,p))){Mr(T,ne,a,j);break e}R&&R(e,y,p),e==="focusout"&&p&&y.type==="number"&&p.memoizedProps.value!=null&&Mc(y,"number",y.value)}switch(R=p?Pt(p):window,e){case"focusin":(Br(R)||R.contentEditable==="true")&&(bt=R,Vc=p,iu=null);break;case"focusout":iu=Vc=bt=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,Gr(T,a,j);break;case"selectionchange":if(mv)break;case"keydown":case"keyup":Gr(T,a,j)}var J;if(Qc)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else xt?Er(e,a)&&(ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Sr&&a.locale!=="ko"&&(xt||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&xt&&(J=xr()):(va=j,Rc="value"in va?va.value:va.textContent,xt=!0)),R=Fn(p,ae),0<R.length&&(ae=new wr(ae,e,null,a,j),T.push({event:ae,listeners:R}),J?ae.data=J:(J=Nr(a),J!==null&&(ae.data=J)))),(J=uv?nv(e,a):cv(e,a))&&(ae=Fn(p,"onBeforeInput"),0<ae.length&&(R=new wr("onBeforeInput","beforeinput",null,a,j),T.push({event:R,listeners:ae}),R.data=J)),Wv(T,e,p,a,j)}mf(T,l)})}function Du(e,l,a){return{instance:e,listener:l,currentTarget:a}}function Fn(e,l){for(var a=l+"Capture",t=[];e!==null;){var u=e,n=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||n===null||(u=eu(e,a),u!=null&&t.unshift(Du(e,u,n)),u=eu(e,l),u!=null&&t.push(Du(e,u,n))),e.tag===3)return t;e=e.return}return[]}function lm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pf(e,l,a,t,u){for(var n=l._reactName,s=[];a!==null&&a!==t;){var i=a,r=i.alternate,p=i.stateNode;if(i=i.tag,r!==null&&r===t)break;i!==5&&i!==26&&i!==27||p===null||(r=p,u?(p=eu(a,n),p!=null&&s.unshift(Du(a,p,r))):u||(p=eu(a,n),p!=null&&s.push(Du(a,p,r)))),a=a.return}s.length!==0&&e.push({event:l,listeners:s})}var am=/\r\n?/g,tm=/\u0000|\uFFFD/g;function yf(e){return(typeof e=="string"?e:""+e).replace(am,`
`).replace(tm,"")}function gf(e,l){return l=yf(l),yf(e)===l}function he(e,l,a,t,u,n){switch(a){case"children":typeof t=="string"?l==="body"||l==="textarea"&&t===""||pt(e,t):(typeof t=="number"||typeof t=="bigint")&&l!=="body"&&pt(e,""+t);break;case"className":ln(e,"class",t);break;case"tabIndex":ln(e,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":ln(e,a,t);break;case"style":pr(e,t,n);break;case"data":if(l!=="object"){ln(e,"data",t);break}case"src":case"href":if(t===""&&(l!=="a"||a!=="href")){e.removeAttribute(a);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(a);break}t=tn(""+t),e.setAttribute(a,t);break;case"action":case"formAction":if(typeof t=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(a==="formAction"?(l!=="input"&&he(e,l,"name",u.name,u,null),he(e,l,"formEncType",u.formEncType,u,null),he(e,l,"formMethod",u.formMethod,u,null),he(e,l,"formTarget",u.formTarget,u,null)):(he(e,l,"encType",u.encType,u,null),he(e,l,"method",u.method,u,null),he(e,l,"target",u.target,u,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(a);break}t=tn(""+t),e.setAttribute(a,t);break;case"onClick":t!=null&&(e.onclick=kl);break;case"onScroll":t!=null&&ee("scroll",e);break;case"onScrollEnd":t!=null&&ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(f(61));if(a=t.__html,a!=null){if(u.children!=null)throw Error(f(60));e.innerHTML=a}}break;case"multiple":e.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":e.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){e.removeAttribute("xlink:href");break}a=tn(""+t),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(a,""+t):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":t===!0?e.setAttribute(a,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(a,t):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?e.setAttribute(a,t):e.removeAttribute(a);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?e.removeAttribute(a):e.setAttribute(a,t);break;case"popover":ee("beforetoggle",e),ee("toggle",e),en(e,"popover",t);break;case"xlinkActuate":Jl(e,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":Jl(e,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":Jl(e,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":Jl(e,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":Jl(e,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":Jl(e,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":Jl(e,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":Jl(e,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":Jl(e,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":en(e,"is",t);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=O1.get(a)||a,en(e,a,t))}}function yi(e,l,a,t,u,n){switch(a){case"style":pr(e,t,n);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(f(61));if(a=t.__html,a!=null){if(u.children!=null)throw Error(f(60));e.innerHTML=a}}break;case"children":typeof t=="string"?pt(e,t):(typeof t=="number"||typeof t=="bigint")&&pt(e,""+t);break;case"onScroll":t!=null&&ee("scroll",e);break;case"onScrollEnd":t!=null&&ee("scrollend",e);break;case"onClick":t!=null&&(e.onclick=kl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),l=a.slice(2,u?a.length-7:void 0),n=e[cl]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(l,n,u),typeof t=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(l,t,u);break e}a in e?e[a]=t:t===!0?e.setAttribute(a,""):en(e,a,t)}}}function Pe(e,l,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ee("error",e),ee("load",e);var t=!1,u=!1,n;for(n in a)if(a.hasOwnProperty(n)){var s=a[n];if(s!=null)switch(n){case"src":t=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,l));default:he(e,l,n,s,a,null)}}u&&he(e,l,"srcSet",a.srcSet,a,null),t&&he(e,l,"src",a.src,a,null);return;case"input":ee("invalid",e);var i=n=s=u=null,r=null,p=null;for(t in a)if(a.hasOwnProperty(t)){var j=a[t];if(j!=null)switch(t){case"name":u=j;break;case"type":s=j;break;case"checked":r=j;break;case"defaultChecked":p=j;break;case"value":n=j;break;case"defaultValue":i=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(f(137,l));break;default:he(e,l,t,j,a,null)}}fr(e,n,i,r,p,s,u,!1);return;case"select":ee("invalid",e),t=s=n=null;for(u in a)if(a.hasOwnProperty(u)&&(i=a[u],i!=null))switch(u){case"value":n=i;break;case"defaultValue":s=i;break;case"multiple":t=i;default:he(e,l,u,i,a,null)}l=n,a=s,e.multiple=!!t,l!=null?ht(e,!!t,l,!1):a!=null&&ht(e,!!t,a,!0);return;case"textarea":ee("invalid",e),n=u=t=null;for(s in a)if(a.hasOwnProperty(s)&&(i=a[s],i!=null))switch(s){case"value":t=i;break;case"defaultValue":u=i;break;case"children":n=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(f(91));break;default:he(e,l,s,i,a,null)}mr(e,t,u,n);return;case"option":for(r in a)if(a.hasOwnProperty(r)&&(t=a[r],t!=null))switch(r){case"selected":e.selected=t&&typeof t!="function"&&typeof t!="symbol";break;default:he(e,l,r,t,a,null)}return;case"dialog":ee("beforetoggle",e),ee("toggle",e),ee("cancel",e),ee("close",e);break;case"iframe":case"object":ee("load",e);break;case"video":case"audio":for(t=0;t<_u.length;t++)ee(_u[t],e);break;case"image":ee("error",e),ee("load",e);break;case"details":ee("toggle",e);break;case"embed":case"source":case"link":ee("error",e),ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(t=a[p],t!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,l));default:he(e,l,p,t,a,null)}return;default:if(Oc(l)){for(j in a)a.hasOwnProperty(j)&&(t=a[j],t!==void 0&&yi(e,l,j,t,a,void 0));return}}for(i in a)a.hasOwnProperty(i)&&(t=a[i],t!=null&&he(e,l,i,t,a,null))}function um(e,l,a,t){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,n=null,s=null,i=null,r=null,p=null,j=null;for(x in a){var T=a[x];if(a.hasOwnProperty(x)&&T!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":r=T;default:t.hasOwnProperty(x)||he(e,l,x,null,t,T)}}for(var y in t){var x=t[y];if(T=a[y],t.hasOwnProperty(y)&&(x!=null||T!=null))switch(y){case"type":n=x;break;case"name":u=x;break;case"checked":p=x;break;case"defaultChecked":j=x;break;case"value":s=x;break;case"defaultValue":i=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(f(137,l));break;default:x!==T&&he(e,l,y,x,t,T)}}Bc(e,s,i,r,p,j,n,u);return;case"select":x=s=i=y=null;for(n in a)if(r=a[n],a.hasOwnProperty(n)&&r!=null)switch(n){case"value":break;case"multiple":x=r;default:t.hasOwnProperty(n)||he(e,l,n,null,t,r)}for(u in t)if(n=t[u],r=a[u],t.hasOwnProperty(u)&&(n!=null||r!=null))switch(u){case"value":y=n;break;case"defaultValue":i=n;break;case"multiple":s=n;default:n!==r&&he(e,l,u,n,t,r)}l=i,a=s,t=x,y!=null?ht(e,!!a,y,!1):!!t!=!!a&&(l!=null?ht(e,!!a,l,!0):ht(e,!!a,a?[]:"",!1));return;case"textarea":x=y=null;for(i in a)if(u=a[i],a.hasOwnProperty(i)&&u!=null&&!t.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:he(e,l,i,null,t,u)}for(s in t)if(u=t[s],n=a[s],t.hasOwnProperty(s)&&(u!=null||n!=null))switch(s){case"value":y=u;break;case"defaultValue":x=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(f(91));break;default:u!==n&&he(e,l,s,u,t,n)}vr(e,y,x);return;case"option":for(var U in a)if(y=a[U],a.hasOwnProperty(U)&&y!=null&&!t.hasOwnProperty(U))switch(U){case"selected":e.selected=!1;break;default:he(e,l,U,null,t,y)}for(r in t)if(y=t[r],x=a[r],t.hasOwnProperty(r)&&y!==x&&(y!=null||x!=null))switch(r){case"selected":e.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:he(e,l,r,y,t,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var L in a)y=a[L],a.hasOwnProperty(L)&&y!=null&&!t.hasOwnProperty(L)&&he(e,l,L,null,t,y);for(p in t)if(y=t[p],x=a[p],t.hasOwnProperty(p)&&y!==x&&(y!=null||x!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(f(137,l));break;default:he(e,l,p,y,t,x)}return;default:if(Oc(l)){for(var pe in a)y=a[pe],a.hasOwnProperty(pe)&&y!==void 0&&!t.hasOwnProperty(pe)&&yi(e,l,pe,void 0,t,y);for(j in t)y=t[j],x=a[j],!t.hasOwnProperty(j)||y===x||y===void 0&&x===void 0||yi(e,l,j,y,t,x);return}}for(var m in a)y=a[m],a.hasOwnProperty(m)&&y!=null&&!t.hasOwnProperty(m)&&he(e,l,m,null,t,y);for(T in t)y=t[T],x=a[T],!t.hasOwnProperty(T)||y===x||y==null&&x==null||he(e,l,T,y,t,x)}function xf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,l=0,a=performance.getEntriesByType("resource"),t=0;t<a.length;t++){var u=a[t],n=u.transferSize,s=u.initiatorType,i=u.duration;if(n&&i&&xf(s)){for(s=0,i=u.responseEnd,t+=1;t<a.length;t++){var r=a[t],p=r.startTime;if(p>i)break;var j=r.transferSize,T=r.initiatorType;j&&xf(T)&&(r=r.responseEnd,s+=j*(r<i?1:(i-p)/(r-p)))}if(--t,l+=8*(n+s)/(u.duration/1e3),e++,10<e)break}}if(0<e)return l/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var gi=null,xi=null;function Pn(e){return e.nodeType===9?e:e.ownerDocument}function bf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jf(e,l){if(e===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&l==="foreignObject"?0:e}function bi(e,l){return e==="textarea"||e==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var ji=null;function cm(){var e=window.event;return e&&e.type==="popstate"?e===ji?!1:(ji=e,!0):(ji=null,!1)}var wf=typeof setTimeout=="function"?setTimeout:void 0,sm=typeof clearTimeout=="function"?clearTimeout:void 0,Af=typeof Promise=="function"?Promise:void 0,im=typeof queueMicrotask=="function"?queueMicrotask:typeof Af<"u"?function(e){return Af.resolve(null).then(e).catch(rm)}:wf;function rm(e){setTimeout(function(){throw e})}function Ma(e){return e==="head"}function Sf(e,l){var a=l,t=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(t===0){e.removeChild(u),Jt(l);return}t--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")t++;else if(a==="html")Uu(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Uu(a);for(var n=a.firstChild;n;){var s=n.nextSibling,i=n.nodeName;n[Ft]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&n.rel.toLowerCase()==="stylesheet"||a.removeChild(n),n=s}}else a==="body"&&Uu(e.ownerDocument.body);a=u}while(a);Jt(l)}function Tf(e,l){var a=e;e=0;do{var t=a.nextSibling;if(a.nodeType===1?l?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(l?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),t&&t.nodeType===8)if(a=t.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=t}while(a)}function wi(e){var l=e.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var a=l;switch(l=l.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wi(a),Ec(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function om(e,l,a,t){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==l.toLowerCase()){if(!t&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(t){if(!e[Ft])switch(l){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(l==="input"&&e.type==="hidden"){var n=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=Dl(e.nextSibling),e===null)break}return null}function dm(e,l,a){if(l==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Dl(e.nextSibling),e===null))return null;return e}function zf(e,l){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Dl(e.nextSibling),e===null))return null;return e}function Ai(e){return e.data==="$?"||e.data==="$~"}function Si(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function fm(e,l){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=l;else if(e.data!=="$?"||a.readyState!=="loading")l();else{var t=function(){l(),a.removeEventListener("DOMContentLoaded",t)};a.addEventListener("DOMContentLoaded",t),e._reactRetry=t}}function Dl(e){for(;e!=null;e=e.nextSibling){var l=e.nodeType;if(l===1||l===3)break;if(l===8){if(l=e.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return e}var Ti=null;function Ef(e){e=e.nextSibling;for(var l=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(l===0)return Dl(e.nextSibling);l--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||l++}e=e.nextSibling}return null}function Nf(e){e=e.previousSibling;for(var l=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(l===0)return e;l--}else a!=="/$"&&a!=="/&"||l++}e=e.previousSibling}return null}function Bf(e,l,a){switch(l=Pn(a),e){case"html":if(e=l.documentElement,!e)throw Error(f(452));return e;case"head":if(e=l.head,!e)throw Error(f(453));return e;case"body":if(e=l.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}function Uu(e){for(var l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Ec(e)}var Ul=new Map,Mf=new Set;function ec(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=M.d;M.d={f:vm,r:mm,D:hm,C:pm,L:ym,m:gm,X:bm,S:xm,M:jm};function vm(){var e=oa.f(),l=Vn();return e||l}function mm(e){var l=ft(e);l!==null&&l.tag===5&&l.type==="form"?Ko(l):oa.r(e)}var Zt=typeof document>"u"?null:document;function Of(e,l,a){var t=Zt;if(t&&typeof l=="string"&&l){var u=zl(l);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Mf.has(u)||(Mf.add(u),e={rel:e,crossOrigin:a,href:l},t.querySelector(u)===null&&(l=t.createElement("link"),Pe(l,"link",e),Ye(l),t.head.appendChild(l)))}}function hm(e){oa.D(e),Of("dns-prefetch",e,null)}function pm(e,l){oa.C(e,l),Of("preconnect",e,l)}function ym(e,l,a){oa.L(e,l,a);var t=Zt;if(t&&e&&l){var u='link[rel="preload"][as="'+zl(l)+'"]';l==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+zl(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+zl(a.imageSizes)+'"]')):u+='[href="'+zl(e)+'"]';var n=u;switch(l){case"style":n=Vt(e);break;case"script":n=Kt(e)}Ul.has(n)||(e=Y({rel:"preload",href:l==="image"&&a&&a.imageSrcSet?void 0:e,as:l},a),Ul.set(n,e),t.querySelector(u)!==null||l==="style"&&t.querySelector(Cu(n))||l==="script"&&t.querySelector(Ru(n))||(l=t.createElement("link"),Pe(l,"link",e),Ye(l),t.head.appendChild(l)))}}function gm(e,l){oa.m(e,l);var a=Zt;if(a&&e){var t=l&&typeof l.as=="string"?l.as:"script",u='link[rel="modulepreload"][as="'+zl(t)+'"][href="'+zl(e)+'"]',n=u;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Kt(e)}if(!Ul.has(n)&&(e=Y({rel:"modulepreload",href:e},l),Ul.set(n,e),a.querySelector(u)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ru(n)))return}t=a.createElement("link"),Pe(t,"link",e),Ye(t),a.head.appendChild(t)}}}function xm(e,l,a){oa.S(e,l,a);var t=Zt;if(t&&e){var u=vt(t).hoistableStyles,n=Vt(e);l=l||"default";var s=u.get(n);if(!s){var i={loading:0,preload:null};if(s=t.querySelector(Cu(n)))i.loading=5;else{e=Y({rel:"stylesheet",href:e,"data-precedence":l},a),(a=Ul.get(n))&&zi(e,a);var r=s=t.createElement("link");Ye(r),Pe(r,"link",e),r._p=new Promise(function(p,j){r.onload=p,r.onerror=j}),r.addEventListener("load",function(){i.loading|=1}),r.addEventListener("error",function(){i.loading|=2}),i.loading|=4,lc(s,l,t)}s={type:"stylesheet",instance:s,count:1,state:i},u.set(n,s)}}}function bm(e,l){oa.X(e,l);var a=Zt;if(a&&e){var t=vt(a).hoistableScripts,u=Kt(e),n=t.get(u);n||(n=a.querySelector(Ru(u)),n||(e=Y({src:e,async:!0},l),(l=Ul.get(u))&&Ei(e,l),n=a.createElement("script"),Ye(n),Pe(n,"link",e),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},t.set(u,n))}}function jm(e,l){oa.M(e,l);var a=Zt;if(a&&e){var t=vt(a).hoistableScripts,u=Kt(e),n=t.get(u);n||(n=a.querySelector(Ru(u)),n||(e=Y({src:e,async:!0,type:"module"},l),(l=Ul.get(u))&&Ei(e,l),n=a.createElement("script"),Ye(n),Pe(n,"link",e),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},t.set(u,n))}}function _f(e,l,a,t){var u=(u=I.current)?ec(u):null;if(!u)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(l=Vt(a.href),a=vt(u).hoistableStyles,t=a.get(l),t||(t={type:"style",instance:null,count:0,state:null},a.set(l,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Vt(a.href);var n=vt(u).hoistableStyles,s=n.get(e);if(s||(u=u.ownerDocument||u,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,s),(n=u.querySelector(Cu(e)))&&!n._p&&(s.instance=n,s.state.loading=5),Ul.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ul.set(e,a),n||wm(u,e,a,s.state))),l&&t===null)throw Error(f(528,""));return s}if(l&&t!==null)throw Error(f(529,""));return null;case"script":return l=a.async,a=a.src,typeof a=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=Kt(a),a=vt(u).hoistableScripts,t=a.get(l),t||(t={type:"script",instance:null,count:0,state:null},a.set(l,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function Vt(e){return'href="'+zl(e)+'"'}function Cu(e){return'link[rel="stylesheet"]['+e+"]"}function Df(e){return Y({},e,{"data-precedence":e.precedence,precedence:null})}function wm(e,l,a,t){e.querySelector('link[rel="preload"][as="style"]['+l+"]")?t.loading=1:(l=e.createElement("link"),t.preload=l,l.addEventListener("load",function(){return t.loading|=1}),l.addEventListener("error",function(){return t.loading|=2}),Pe(l,"link",a),Ye(l),e.head.appendChild(l))}function Kt(e){return'[src="'+zl(e)+'"]'}function Ru(e){return"script[async]"+e}function Uf(e,l,a){if(l.count++,l.instance===null)switch(l.type){case"style":var t=e.querySelector('style[data-href~="'+zl(a.href)+'"]');if(t)return l.instance=t,Ye(t),t;var u=Y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return t=(e.ownerDocument||e).createElement("style"),Ye(t),Pe(t,"style",u),lc(t,a.precedence,e),l.instance=t;case"stylesheet":u=Vt(a.href);var n=e.querySelector(Cu(u));if(n)return l.state.loading|=4,l.instance=n,Ye(n),n;t=Df(a),(u=Ul.get(u))&&zi(t,u),n=(e.ownerDocument||e).createElement("link"),Ye(n);var s=n;return s._p=new Promise(function(i,r){s.onload=i,s.onerror=r}),Pe(n,"link",t),l.state.loading|=4,lc(n,a.precedence,e),l.instance=n;case"script":return n=Kt(a.src),(u=e.querySelector(Ru(n)))?(l.instance=u,Ye(u),u):(t=a,(u=Ul.get(n))&&(t=Y({},a),Ei(t,u)),e=e.ownerDocument||e,u=e.createElement("script"),Ye(u),Pe(u,"link",t),e.head.appendChild(u),l.instance=u);case"void":return null;default:throw Error(f(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(t=l.instance,l.state.loading|=4,lc(t,a.precedence,e));return l.instance}function lc(e,l,a){for(var t=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=t.length?t[t.length-1]:null,n=u,s=0;s<t.length;s++){var i=t[s];if(i.dataset.precedence===l)n=i;else if(n!==u)break}n?n.parentNode.insertBefore(e,n.nextSibling):(l=a.nodeType===9?a.head:a,l.insertBefore(e,l.firstChild))}function zi(e,l){e.crossOrigin==null&&(e.crossOrigin=l.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=l.referrerPolicy),e.title==null&&(e.title=l.title)}function Ei(e,l){e.crossOrigin==null&&(e.crossOrigin=l.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=l.referrerPolicy),e.integrity==null&&(e.integrity=l.integrity)}var ac=null;function Cf(e,l,a){if(ac===null){var t=new Map,u=ac=new Map;u.set(a,t)}else u=ac,t=u.get(a),t||(t=new Map,u.set(a,t));if(t.has(e))return t;for(t.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var n=a[u];if(!(n[Ft]||n[Ie]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var s=n.getAttribute(l)||"";s=e+s;var i=t.get(s);i?i.push(n):t.set(s,[n])}}return t}function Rf(e,l,a){e=e.ownerDocument||e,e.head.insertBefore(a,l==="title"?e.querySelector("head > title"):null)}function Am(e,l,a){if(a===1||l.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;switch(l.rel){case"stylesheet":return e=l.disabled,typeof l.precedence=="string"&&e==null;default:return!0}case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function Hf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Sm(e,l,a,t){if(a.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Vt(t.href),n=l.querySelector(Cu(u));if(n){l=n._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(e.count++,e=tc.bind(e),l.then(e,e)),a.state.loading|=4,a.instance=n,Ye(n);return}n=l.ownerDocument||l,t=Df(t),(u=Ul.get(u))&&zi(t,u),n=n.createElement("link"),Ye(n);var s=n;s._p=new Promise(function(i,r){s.onload=i,s.onerror=r}),Pe(n,"link",t),a.instance=n}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,l),(l=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=tc.bind(e),l.addEventListener("load",a),l.addEventListener("error",a))}}var Ni=0;function Tm(e,l){return e.stylesheets&&e.count===0&&nc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var t=setTimeout(function(){if(e.stylesheets&&nc(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4+l);0<e.imgBytes&&Ni===0&&(Ni=62500*nm());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&nc(e,e.stylesheets),e.unsuspend)){var n=e.unsuspend;e.unsuspend=null,n()}},(e.imgBytes>Ni?50:800)+l);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(t),clearTimeout(u)}}:null}function tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var uc=null;function nc(e,l){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uc=new Map,l.forEach(zm,e),uc=null,tc.call(e))}function zm(e,l){if(!(l.state.loading&4)){var a=uc.get(e);if(a)var t=a.get(null);else{a=new Map,uc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<u.length;n++){var s=u[n];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),t=s)}t&&a.set(null,t)}u=l.instance,s=u.getAttribute("data-precedence"),n=a.get(s)||t,n===t&&a.set(null,u),a.set(s,u),this.count++,t=tc.bind(this),u.addEventListener("load",t),u.addEventListener("error",t),n?n.parentNode.insertBefore(u,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),l.state.loading|=4}}var Hu={$$typeof:He,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function Em(e,l,a,t,u,n,s,i,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ac(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.hiddenUpdates=Ac(null),this.identifierPrefix=t,this.onUncaughtError=u,this.onCaughtError=n,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function qf(e,l,a,t,u,n,s,i,r,p,j,T){return e=new Em(e,l,a,s,r,p,j,T,i),l=1,n===!0&&(l|=24),n=yl(3,null,null,l),e.current=n,n.stateNode=e,l=ss(),l.refCount++,e.pooledCache=l,l.refCount++,n.memoizedState={element:t,isDehydrated:a,cache:l},ds(n),e}function Yf(e){return e?(e=At,e):At}function Gf(e,l,a,t,u,n){u=Yf(u),t.context===null?t.context=u:t.pendingContext=u,t=xa(l),t.payload={element:a},n=n===void 0?null:n,n!==null&&(t.callback=n),a=ba(e,t,l),a!==null&&(fl(a,e,l),hu(a,e,l))}function Qf(e,l){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<l?a:l}}function Bi(e,l){Qf(e,l),(e=e.alternate)&&Qf(e,l)}function Xf(e){if(e.tag===13||e.tag===31){var l=La(e,67108864);l!==null&&fl(l,e,67108864),Bi(e,67108864)}}function Lf(e){if(e.tag===13||e.tag===31){var l=wl();l=Sc(l);var a=La(e,l);a!==null&&fl(a,e,l),Bi(e,l)}}var cc=!0;function Nm(e,l,a,t){var u=b.T;b.T=null;var n=M.p;try{M.p=2,Mi(e,l,a,t)}finally{M.p=n,b.T=u}}function Bm(e,l,a,t){var u=b.T;b.T=null;var n=M.p;try{M.p=8,Mi(e,l,a,t)}finally{M.p=n,b.T=u}}function Mi(e,l,a,t){if(cc){var u=Oi(t);if(u===null)pi(e,l,t,sc,a),Vf(e,t);else if(Om(u,e,l,a,t))t.stopPropagation();else if(Vf(e,t),l&4&&-1<Mm.indexOf(e)){for(;u!==null;){var n=ft(u);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var s=qa(n.pendingLanes);if(s!==0){var i=n;for(i.pendingLanes|=2,i.entangledLanes|=2;s;){var r=1<<31-hl(s);i.entanglements[1]|=r,s&=~r}Kl(n),(ie&6)===0&&(Ln=ll()+500,Ou(0))}}break;case 31:case 13:i=La(n,2),i!==null&&fl(i,n,2),Vn(),Bi(n,2)}if(n=Oi(t),n===null&&pi(e,l,t,sc,a),n===u)break;u=n}u!==null&&t.stopPropagation()}else pi(e,l,t,null,a)}}function Oi(e){return e=Dc(e),_i(e)}var sc=null;function _i(e){if(sc=null,e=dt(e),e!==null){var l=q(e);if(l===null)e=null;else{var a=l.tag;if(a===13){if(e=K(l),e!==null)return e;e=null}else if(a===31){if(e=k(l),e!==null)return e;e=null}else if(a===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;e=null}else l!==e&&(e=null)}}return sc=e,null}function Zf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ju()){case kt:return 2;case ku:return 8;case rt:case It:return 32;case Iu:return 268435456;default:return 32}default:return 32}}var Di=!1,Oa=null,_a=null,Da=null,qu=new Map,Yu=new Map,Ua=[],Mm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vf(e,l){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":qu.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yu.delete(l.pointerId)}}function Gu(e,l,a,t,u,n){return e===null||e.nativeEvent!==n?(e={blockedOn:l,domEventName:a,eventSystemFlags:t,nativeEvent:n,targetContainers:[u]},l!==null&&(l=ft(l),l!==null&&Xf(l)),e):(e.eventSystemFlags|=t,l=e.targetContainers,u!==null&&l.indexOf(u)===-1&&l.push(u),e)}function Om(e,l,a,t,u){switch(l){case"focusin":return Oa=Gu(Oa,e,l,a,t,u),!0;case"dragenter":return _a=Gu(_a,e,l,a,t,u),!0;case"mouseover":return Da=Gu(Da,e,l,a,t,u),!0;case"pointerover":var n=u.pointerId;return qu.set(n,Gu(qu.get(n)||null,e,l,a,t,u)),!0;case"gotpointercapture":return n=u.pointerId,Yu.set(n,Gu(Yu.get(n)||null,e,l,a,t,u)),!0}return!1}function Kf(e){var l=dt(e.target);if(l!==null){var a=q(l);if(a!==null){if(l=a.tag,l===13){if(l=K(a),l!==null){e.blockedOn=l,ur(e.priority,function(){Lf(a)});return}}else if(l===31){if(l=k(a),l!==null){e.blockedOn=l,ur(e.priority,function(){Lf(a)});return}}else if(l===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ic(e){if(e.blockedOn!==null)return!1;for(var l=e.targetContainers;0<l.length;){var a=Oi(e.nativeEvent);if(a===null){a=e.nativeEvent;var t=new a.constructor(a.type,a);_c=t,a.target.dispatchEvent(t),_c=null}else return l=ft(a),l!==null&&Xf(l),e.blockedOn=a,!1;l.shift()}return!0}function Jf(e,l,a){ic(e)&&a.delete(l)}function _m(){Di=!1,Oa!==null&&ic(Oa)&&(Oa=null),_a!==null&&ic(_a)&&(_a=null),Da!==null&&ic(Da)&&(Da=null),qu.forEach(Jf),Yu.forEach(Jf)}function rc(e,l){e.blockedOn===l&&(e.blockedOn=null,Di||(Di=!0,g.unstable_scheduleCallback(g.unstable_NormalPriority,_m)))}var oc=null;function kf(e){oc!==e&&(oc=e,g.unstable_scheduleCallback(g.unstable_NormalPriority,function(){oc===e&&(oc=null);for(var l=0;l<e.length;l+=3){var a=e[l],t=e[l+1],u=e[l+2];if(typeof t!="function"){if(_i(t||a)===null)continue;break}var n=ft(a);n!==null&&(e.splice(l,3),l-=3,Os(n,{pending:!0,data:u,method:a.method,action:t},t,u))}}))}function Jt(e){function l(r){return rc(r,e)}Oa!==null&&rc(Oa,e),_a!==null&&rc(_a,e),Da!==null&&rc(Da,e),qu.forEach(l),Yu.forEach(l);for(var a=0;a<Ua.length;a++){var t=Ua[a];t.blockedOn===e&&(t.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)Kf(a),a.blockedOn===null&&Ua.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(t=0;t<a.length;t+=3){var u=a[t],n=a[t+1],s=u[cl]||null;if(typeof n=="function")s||kf(a);else if(s){var i=null;if(n&&n.hasAttribute("formAction")){if(u=n,s=n[cl]||null)i=s.formAction;else if(_i(u)!==null)continue}else i=s.action;typeof i=="function"?a[t+1]=i:(a.splice(t,3),t-=3),kf(a)}}}function If(){function e(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(s){return u=s})},focusReset:"manual",scroll:"manual"})}function l(){u!==null&&(u(),u=null),t||setTimeout(a,20)}function a(){if(!t&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(a,100),function(){t=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),u!==null&&(u(),u=null)}}}function Ui(e){this._internalRoot=e}dc.prototype.render=Ui.prototype.render=function(e){var l=this._internalRoot;if(l===null)throw Error(f(409));var a=l.current,t=wl();Gf(a,t,e,l,null,null)},dc.prototype.unmount=Ui.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var l=e.containerInfo;Gf(e.current,2,null,e,null,null),Vn(),l[ot]=null}};function dc(e){this._internalRoot=e}dc.prototype.unstable_scheduleHydration=function(e){if(e){var l=tr();e={blockedOn:null,target:e,priority:l};for(var a=0;a<Ua.length&&l!==0&&l<Ua[a].priority;a++);Ua.splice(a,0,e),a===0&&Kf(e)}};var $f=E.version;if($f!=="19.2.0")throw Error(f(527,$f,"19.2.0"));M.findDOMNode=function(e){var l=e._reactInternals;if(l===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=A(l),e=e!==null?H(e):null,e=e===null?null:e.stateNode,e};var Dm={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{C=fc.inject(Dm),W=fc}catch{}}return Xu.createRoot=function(e,l){if(!N(e))throw Error(f(299));var a=!1,t="",u=ad,n=td,s=ud;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(t=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(n=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError)),l=qf(e,1,!1,null,null,a,t,null,u,n,s,If),e[ot]=l.current,hi(e),new Ui(l)},Xu.hydrateRoot=function(e,l,a){if(!N(e))throw Error(f(299));var t=!1,u="",n=ad,s=td,i=ud,r=null;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),l=qf(e,1,!0,l,a??null,t,u,r,n,s,i,If),l.context=Yf(null),a=l.current,t=wl(),t=Sc(t),u=xa(t),u.callback=null,ba(a,u,t),a=t,l.current.lanes=a,Wt(l,a),Kl(l),e[ot]=l.current,hi(e),new dc(l)},Xu.version="19.2.0",Xu}var c1;function Vm(){if(c1)return Hi.exports;c1=1;function g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g)}catch(E){console.error(E)}}return g(),Hi.exports=Zm(),Hi.exports}var Km=Vm();const Jm=g=>g.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),h1=(...g)=>g.filter((E,O,f)=>!!E&&E.trim()!==""&&f.indexOf(E)===O).join(" ").trim();var km={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Im=$.forwardRef(({color:g="currentColor",size:E=24,strokeWidth:O=2,absoluteStrokeWidth:f,className:N="",children:q,iconNode:K,...k},B)=>$.createElement("svg",{ref:B,...km,width:E,height:E,stroke:g,strokeWidth:f?Number(O)*24/Number(E):O,className:h1("lucide",N),...k},[...K.map(([A,H])=>$.createElement(A,H)),...Array.isArray(q)?q:[q]]));const se=(g,E)=>{const O=$.forwardRef(({className:f,...N},q)=>$.createElement(Im,{ref:q,iconNode:E,className:h1(`lucide-${Jm(g)}`,f),...N}));return O.displayName=`${g}`,O};const Ra=se("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);const at=se("ArrowUpLeft",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);const $m=se("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);const Ku=se("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const s1=se("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);const p1=se("ChartNoAxesCombined",[["path",{d:"M12 16v5",key:"zza2cw"}],["path",{d:"M16 14v7",key:"1g90b9"}],["path",{d:"M20 10v11",key:"1iqoj0"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",key:"1fw8x9"}],["path",{d:"M4 18v3",key:"1yp0dc"}],["path",{d:"M8 14v7",key:"n3cwzv"}]]);const vc=se("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);const Lu=se("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const i1=se("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const r1=se("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const Wm=se("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const Fm=se("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);const mc=se("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);const o1=se("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);const Ji=se("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);const Pm=se("Grid2x2",[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]);const d1=se("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);const ki=se("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);const eh=se("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const lh=se("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);const ah=se("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);const hc=se("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const th=se("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);const f1=se("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);const pc=se("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const Ii=se("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const uh=se("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);const yc=se("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);const Qi=se("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);const nh=se("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);const tt=se("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const v1=se("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);


// Additional Clock Icon for Hard Mode Timer Control
const ClockIcon = se("Clock", [["circle",{cx:"12",cy:"12",r:"10",key:"clk1"}],["polyline",{points:"12 6 12 12 16 14",key:"clk2"}]]);

// ============================================================================
// Lifetime Offline Audio Cache (Base64 Data URLs in IndexedDB + Memory + LocalStorage Backup)
// Works 100% on file://, http://, https://, and Android APK WebViews!
// ============================================================================
const AUDIO_DB_NAME = "lexora-audio-cache-v2";
const AUDIO_STORE_NAME = "audio_data_urls";
const LS_AUDIO_PREFIX = "lx_aud_";
const memoryAudioCache = new Map();

function openAudioDB(){
  return new Promise((resolve, reject) => {
    if(typeof indexedDB === "undefined") { reject(new Error("no_idb")); return; }
    try {
      const req = indexedDB.open(AUDIO_DB_NAME, 1);
      req.onupgradeneeded = e => {
        const db = e.target.result;
        if(!db.objectStoreNames.contains(AUDIO_STORE_NAME)) {
          db.createObjectStore(AUDIO_STORE_NAME);
        }
      };
      req.onsuccess = e => resolve(e.target.result);
      req.onerror = () => reject(req.error || new Error("idb_error"));
    } catch(err) {
      reject(err);
    }
  });
}

function blobToDataURL(blob){
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        if(typeof reader.result === "string" && reader.result.startsWith("data:")) {
          resolve(reader.result);
        } else {
          reject(new Error("bad_data_url"));
        }
      };
      reader.onerror = () => reject(new Error("reader_err"));
      reader.readAsDataURL(blob);
    } catch(e) {
      reject(e);
    }
  });
}

async function getCachedAudioDataUrl(key){
  if(memoryAudioCache.has(key)) return memoryAudioCache.get(key);
  try {
    const lsVal = localStorage.getItem(LS_AUDIO_PREFIX + key);
    if(lsVal && lsVal.startsWith("data:audio")) {
      memoryAudioCache.set(key, lsVal);
      return lsVal;
    }
  } catch(e){}
  try {
    const db = await openAudioDB();
    const res = await new Promise((resolve) => {
      const tx = db.transaction(AUDIO_STORE_NAME, "readonly");
      const store = tx.objectStore(AUDIO_STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
    if(typeof res === "string" && res.startsWith("data:")) {
      memoryAudioCache.set(key, res);
      return res;
    }
  } catch(e){}
  return null;
}

async function saveAudioDataUrl(key, dataUrl){
  if(!dataUrl || typeof dataUrl !== "string" || !dataUrl.startsWith("data:")) return false;
  memoryAudioCache.set(key, dataUrl);
  // Also save in localStorage if space permits (instant synchronous fallback on file://)
  try {
    if(dataUrl.length < 180000) {
      localStorage.setItem(LS_AUDIO_PREFIX + key, dataUrl);
    }
  } catch(e){}
  try {
    const db = await openAudioDB();
    return await new Promise((resolve) => {
      const tx = db.transaction(AUDIO_STORE_NAME, "readwrite");
      const store = tx.objectStore(AUDIO_STORE_NAME);
      const req = store.put(dataUrl, key);
      req.onsuccess = () => resolve(true);
      req.onerror = () => resolve(false);
    });
  } catch(e) {
    return true;
  }
}

async function countCachedWordAudios(){
  const keys = new Set(memoryAudioCache.keys());
  try {
    for(let i=0; i<localStorage.length; i++){
      const k = localStorage.key(i);
      if(k && k.startsWith(LS_AUDIO_PREFIX)) keys.add(k.slice(LS_AUDIO_PREFIX.length));
    }
  } catch(e){}
  try {
    const db = await openAudioDB();
    // Pre-warm memoryAudioCache from IndexedDB so synchronous 0ms playback works for all cached audios
    await new Promise((resolve) => {
      const tx = db.transaction(AUDIO_STORE_NAME, "readonly");
      const store = tx.objectStore(AUDIO_STORE_NAME);
      const req = store.openCursor();
      req.onsuccess = e => {
        const cursor = e.target.result;
        if(cursor) {
          const k = String(cursor.key);
          keys.add(k);
          if(typeof cursor.value === "string" && cursor.value.startsWith("data:") && !memoryAudioCache.has(k)) {
            memoryAudioCache.set(k, cursor.value);
          }
          cursor.continue();
        } else {
          resolve(true);
        }
      };
      req.onerror = () => resolve(false);
    });
    const idbKeys = await new Promise((resolve) => {
      const tx = db.transaction(AUDIO_STORE_NAME, "readonly");
      const store = tx.objectStore(AUDIO_STORE_NAME);
      if(typeof store.getAllKeys === "function") {
        const req = store.getAllKeys();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => resolve([]);
      } else {
        const req = store.count();
        req.onsuccess = () => resolve(req.result || 0);
        req.onerror = () => resolve(0);
      }
    });
    if(Array.isArray(idbKeys)) idbKeys.forEach(k => keys.add(k));
    else if(typeof idbKeys === "number") return Math.max(keys.size, idbKeys);
  } catch(e){}
  return keys.size;
}

// Fetch binary audio via direct CORS or fast CORS proxies so ssl.gstatic.com MP3s can be saved as Base64 Data URLs forever!
async function exportAllCachedAudiosMap(){
  const result = {};
  for(const [k, v] of memoryAudioCache.entries()){
    if(typeof v === "string" && v.startsWith("data:")) result[k] = v;
  }
  try {
    for(let i=0; i<localStorage.length; i++){
      const k = localStorage.key(i);
      if(k && k.startsWith(LS_AUDIO_PREFIX)){
        const val = localStorage.getItem(k);
        if(val && val.startsWith("data:")) result[k.slice(LS_AUDIO_PREFIX.length)] = val;
      }
    }
  } catch(e){}
  try {
    const db = await openAudioDB();
    await new Promise((resolve) => {
      const tx = db.transaction(AUDIO_STORE_NAME, "readonly");
      const store = tx.objectStore(AUDIO_STORE_NAME);
      const req = store.openCursor();
      req.onsuccess = e => {
        const cursor = e.target.result;
        if(cursor) {
          if(typeof cursor.value === "string" && cursor.value.startsWith("data:")) {
            result[String(cursor.key)] = cursor.value;
          }
          cursor.continue();
        } else {
          resolve(true);
        }
      };
      req.onerror = () => resolve(false);
    });
  } catch(e){}
  return result;
}

async function importCachedAudiosMap(audioMap){
  if(!audioMap || typeof audioMap !== "object") return 0;
  const entries = Object.entries(audioMap).filter(([k,v]) => k && typeof v === "string" && v.startsWith("data:"));
  for(let i=0; i<entries.length; i++){
    const [k, v] = entries[i];
    await saveAudioDataUrl(k, v);
  }
  return entries.length;
}

// Also cache opaque response in CacheStorage for Service Worker (sw.js) offline playback
function cacheOpaqueInServiceWorkerCache(url){
  if(!url || typeof caches === "undefined") return;
  try {
    fetch(url, { mode: "no-cors" }).then(resp => {
      if(resp) {
        caches.open("lexora-audio-forever-v3").then(c => c.put(url, resp)).catch(()=>{});
      }
    }).catch(()=>{});
  } catch(e){}
}

// Fetch binary audio via Local Server (/___audio_cache___), Vercel API (/api/audio), or CORS proxies, and save as Base64 DataURL forever!
function getSyncCachedAudioDataUrl(key){
  if(!key) return null;
  if(memoryAudioCache.has(key)) return memoryAudioCache.get(key);
  try {
    const lsVal = localStorage.getItem(LS_AUDIO_PREFIX + key);
    if(lsVal && lsVal.startsWith("data:")) {
      memoryAudioCache.set(key, lsVal);
      return lsVal;
    }
  } catch(e){}
  return null;
}

async function fetchAudioBlobWithCorsFallback(targetUrl, cacheKey=""){
  if(!targetUrl) return null;
  if(targetUrl.startsWith("/") || targetUrl.startsWith("http://localhost") || targetUrl.startsWith("http://127.")) {
    try {
      const ctrl = new AbortController();
      const tmr = setTimeout(() => ctrl.abort(), 300);
      const r = await fetch(targetUrl, { signal: ctrl.signal });
      clearTimeout(tmr);
      if(r && r.ok) {
        const ct = (r.headers.get("content-type") || "").toLowerCase();
        if(!ct.includes("text/html") && !ct.includes("application/json")) {
          const blob = await r.blob();
          if(blob && blob.size > 350) return await blobToDataURL(blob);
        }
      }
    } catch(e){}
    return null;
  }
  cacheOpaqueInServiceWorkerCache(targetUrl);
  const proto = (typeof window !== "undefined" && window.location && window.location.protocol) || "";
  const isHttp = proto.startsWith("http");
  const candidateUrls = [];
  if(isHttp) {
    candidateUrls.push(`/__audio_cache__?key=${encodeURIComponent(cacheKey || "aud")}&url=${encodeURIComponent(targetUrl)}`);
    candidateUrls.push(`/api/audio?url=${encodeURIComponent(targetUrl)}`);
  } else {
    candidateUrls.push(`http://localhost:3000/__audio_cache__?key=${encodeURIComponent(cacheKey || "aud")}&url=${encodeURIComponent(targetUrl)}`);
  }

  if(!targetUrl.startsWith("/") && !targetUrl.startsWith("http://localhost")) {
    try {
      const ctrl = new AbortController();
      const tmr = setTimeout(() => ctrl.abort(), 6000);
      const aoResp = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`, { signal: ctrl.signal });
      clearTimeout(tmr);
      if(aoResp && aoResp.ok) {
        const aoJson = await aoResp.json();
        if(aoJson && typeof aoJson.contents === "string" && aoJson.contents.startsWith("data:") && aoJson.contents.length > 500) {
          const fixedDataUrl = aoJson.contents.replace(/^data:[^;]+;base64,/, "data:audio/mpeg;base64,");
          return fixedDataUrl;
        }
      }
    } catch(e){}
  }

  candidateUrls.push(
    targetUrl,
    `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`,
    `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(targetUrl)}`
  );

  for(let i=0; i<candidateUrls.length; i++){
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 6500);
      const resp = await fetch(candidateUrls[i], { signal: controller.signal });
      clearTimeout(timer);
      if(resp && resp.ok) {
        const ct = (resp.headers.get("content-type") || "").toLowerCase();
        if(ct.includes("text/html") || ct.includes("application/json")) continue;
        const blob = await resp.blob();
        if(blob && blob.size > 350) {
          const fixedBlob = blob.type && blob.type.startsWith("audio/")
            ? blob
            : new Blob([blob], { type: "audio/mpeg" });
          // Also store in CacheStorage under targetUrl
          if(typeof caches !== "undefined") {
            caches.open("lexora-audio-forever-v3").then(c => {
              c.put(targetUrl, new Response(fixedBlob, { headers: { "Content-Type": "audio/mpeg" } })).catch(()=>{});
            }).catch(()=>{});
          }
          return await blobToDataURL(fixedBlob);
        }
      }
    } catch(e){}
  }
  return null;
}

const ch = {
  translations: "ترجمات عربية مراجعة لقائمتي Oxford 3000 و Oxford 5000",
  license: "محتوى تعليمي معتمد لقائمتي أكسفورد الأساسية والموسعة للمستويات A1-C1.",
  note: "النسخة الموسعة الكاملة 5000 كلمة مدمجة وموحدة المعاني مع النطقين الأمريكي والبريطاني والأمثلة السياقية المترجمة."
};
const sh = (typeof window !== "undefined" && (window.lexoraWordsData || window.wordsData)) || [];
const y1 = { source: ch, entries: sh };
const Zu = { n: "اسم", v: "فعل", adj: "صفة", adv: "ظرف", prep: "حرف جر", pron: "ضمير", det: "محدِّد", conj: "أداة ربط", exclam: "تعجّب", article: "أداة تنكير", aux: "فعل مساعد", "modal v": "فعل ناقص", number: "رقم" };
const LevelNamesAr = {
  A1: "مبتدئ أساسي",
  A2: "مبتدئ متقدم",
  B1: "متوسط",
  B2: "فوق المتوسط",
  C1: "متقدم وأكاديمي"
};
const Qe = y1.entries;
const gc = ["A1", "A2", "B1", "B2", "C1"];
const Vu = y1.source;

function jc(g){
  if(!g) return "";
  return g.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f\u064b-\u065f\u0670]/g,"").replace(/[أإآ]/g,"ا").replace(/ى/g,"ي").trim();
}

function ih(g,E,O=[]){
  const f=jc(E.query);
  return g.filter(N=>{
    if(E.favoritesOnly && !O.includes(N.id)) return false;
    const matchLevelAndPos = N.senses.some(q=>(!E.level||q.level===E.level)&&(!E.pos||(q.pos&&q.pos.includes(E.pos))));
    if(!matchLevelAndPos) return false;
    if(!f) return true;
    const searchTarget = jc(N.word + " " + (N.speech||"") + " " + N.senses.map(q=>(q.ar||q.meaning_ar||"") + " " + (q.example_ar||"")).join(" "));
    return searchTarget.includes(f);
  });
}

function bc(g,E=Math.random){
  const O=[...g];
  for(let f=O.length-1;f>0;f--){
    const N=Math.floor(E()*(f+1));
    [O[f],O[N]]=[O[N],O[f]];
  }
  return O;
}

const VALID_COUNTS = [5, 10, 15, 20, 25, 30, 40, 50];

function $i(){
  return {
    version: 1,
    favorites: [],
    learned: [],
    seen: [],
    events: [],
    theme: "light",
    voice: "",
    rate: 0.85,
    goal: 10,
    defaultDialect: "us",
    quizModes: ["meaning_ar","word_en","listening","sentence","spelling"],
    quizCount: 10,
    quizDifficulty: "easy",
    quizTimeLimit: 12,
    completedGrammar: {},
    learnedVerbs: [],
    completedStories: {},
    completedConversations: {}
  };
}

// Local Device Calendar YYYY-MM-DD
function Fi(g=new Date()){
  const d = g instanceof Date ? g : new Date(g);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

function Xi(g,E=1){
  const[O,f,N]=g.split("-").map(Number);
  return Fi(new Date(O,f-1,N-E,12));
}

const ArabicDayNames = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
function getArabicDayLabel(dateStr, isToday=false){
  if(isToday) return "اليوم";
  try {
    const [y,m,d] = dateStr.split("-").map(Number);
    const dt = new Date(y, m-1, d, 12);
    return ArabicDayNames[dt.getDay()] || dateStr.slice(5);
  } catch(e) {
    return dateStr.slice(5);
  }
}

function normalizeEventDay(ev){
  if(ev && typeof ev.day === "string" && /^\d{4}-\d{2}-\d{2}$/.test(ev.day)) {
    return ev.day;
  }
  if(ev && typeof ev.at === "number") {
    return Fi(new Date(ev.at));
  }
  return "";
}

function oh(g, E=Fi()){
  const allEvents = (g.events || []).map(ev => ({...ev, _day: normalizeEventDay(ev)}));
  const O = allEvents.filter(K=>K.kind==="quiz");
  const f = new Set(allEvents.map(K=>K._day).filter(Boolean));
  let N = f.has(E) ? E : Xi(E, 1), q = 0;
  for(; f.has(N); ) q++, N = Xi(N, 1);
  
  const byLevel = { A1: { total: 0, learned: 0 }, A2: { total: 0, learned: 0 }, B1: { total: 0, learned: 0 }, B2: { total: 0, learned: 0 }, C1: { total: 0, learned: 0 } };
  const learnedSet = new Set(g.learned || []);
  Qe.forEach(w => {
    (w.levels || []).forEach(lvl => {
      if(byLevel[lvl]) {
        byLevel[lvl].total++;
        if(learnedSet.has(w.id)) byLevel[lvl].learned++;
      }
    });
  });

  const week = Array.from({length:7}, (_, k) => {
    const dayStr = Xi(E, 6 - k);
    const isToday = dayStr === E;
    const count = allEvents.filter(A => A._day === dayStr).length;
    return {
      day: dayStr,
      label: getArabicDayLabel(dayStr, isToday),
      isToday,
      count
    };
  });

  return {
    learned: (g.learned || []).length,
    seen: (g.seen || []).length,
    quiz: O.length,
    correct: O.filter(K=>K.correct).length,
    accuracy: O.length ? Math.round(100*O.filter(K=>K.correct).length/O.length) : null,
    streak: q,
    today: allEvents.filter(K=>K._day===E).length,
    byLevel: byLevel,
    week: week
  };
}

const m1=new Set(Qe.map(g=>g.id));

function dh(g){
  if(!g) return $i();
  try {
    const E=JSON.parse(g);
    if(!E||E.version!==1||!Array.isArray(E.events)) return $i();
    const O=f=>Array.isArray(f)?[...new Set(f.filter(N=>typeof N=="string"))]:[];
    return {
      ...$i(),
      favorites: O(E.favorites),
      learned: O(E.learned),
      seen: O(E.seen),
      events: E.events.filter(f=>f&&f.wordId&&["quiz","review","explore"].includes(f.kind)),
      theme: E.theme==="dark"?"dark":"light",
      voice: typeof E.voice=="string"?E.voice:"",
      rate: typeof E.rate=="number"&&E.rate>=0.5&&E.rate<=1.5?E.rate:0.85,
      goal: typeof E.goal=="number"&&E.goal>=1&&E.goal<=100?E.goal:10,
      defaultDialect: ["us","uk"].includes(E.defaultDialect)?E.defaultDialect:"us",
      quizModes: Array.isArray(E.quizModes)&&E.quizModes.length?E.quizModes:["meaning_ar","word_en","listening","sentence","spelling"],
      quizCount: VALID_COUNTS.includes(Number(E.quizCount))?Number(E.quizCount):10,
      quizDifficulty: ["easy","medium","difficult"].includes(E.quizDifficulty)?E.quizDifficulty:"easy",
      quizTimeLimit: typeof E.quizTimeLimit==="number"&&E.quizTimeLimit>=5&&E.quizTimeLimit<=120?E.quizTimeLimit:12,
      completedGrammar: E.completedGrammar && typeof E.completedGrammar === "object" ? E.completedGrammar : {},
      learnedVerbs: O(E.learnedVerbs),
      completedStories: E.completedStories && typeof E.completedStories === "object" ? E.completedStories : {},
      completedConversations: E.completedConversations && typeof E.completedConversations === "object" ? E.completedConversations : {}
    };
  } catch(e) {
    return $i();
  }
}

const g1="lexora-progress-v1";
const Li=[
  {id:"home",label:"الرئيسية",shortLabel:"الرئيسية",icon:Pm},
  {id:"dictionary",label:"القاموس",shortLabel:"القاموس",icon:Ku},
  {id:"cards",label:"البطاقات التعليمية",shortLabel:"البطاقات",icon:ki},
  {id:"quiz",label:"الاختبارات",shortLabel:"الاختبارات",icon:Ji},
  {id:"grammar",label:"القواعد والتصاريف",shortLabel:"القواعد",icon:v1},
  {id:"immersion",label:"القصص والمحادثات",shortLabel:"القصص والمحادثات",icon:d1},
  {id:"stats",label:"إحصائياتي",shortLabel:"الإحصائيات",icon:p1}
];

function fh(){
  try{
    return {p:dh(localStorage.getItem(g1)),error:""};
  }catch{
    return {p:$i(),error:"تعذّر قراءة الحفظ المحلي. تعمل الجلسة حاليًا دون حفظ."};
  }
}
const Zi=fh();

async function Vi(g,E){
  try {
    const audioMap = await exportAllCachedAudiosMap();
    const fullBackup = {
      ...E,
      backupCreatedAt: new Date().toISOString(),
      audioCacheCount: Object.keys(audioMap).length,
      audioCache: audioMap
    };
    const O=URL.createObjectURL(new Blob([JSON.stringify(fullBackup,null,2)],{type:"application/json"}));
    const f=document.createElement("a");
    f.href=O;
    f.download=g;
    f.click();
    setTimeout(()=>URL.revokeObjectURL(O),1000);
  } catch(err) {
    const O=URL.createObjectURL(new Blob([JSON.stringify(E,null,2)],{type:"application/json"}));
    const f=document.createElement("a");
    f.href=O;
    f.download=g;
    f.click();
    setTimeout(()=>URL.revokeObjectURL(O),1000);
  }
}

function Ki({title:g,onClose:E,children:O}){
  const f=$.useRef(null);
  $.useEffect(()=>{
    const N=document.activeElement;
    f.current?.focus();
    const q=k=>{
      if(k.key==="Escape") E();
      if(k.key==="Tab"){
        const B=f.current?.querySelectorAll("button,select,input,a[href]");
        if(!B?.length) return;
        const A=B[0],H=B[B.length-1];
        k.shiftKey&&(document.activeElement===A||document.activeElement===f.current)?(k.preventDefault(),H.focus()):!k.shiftKey&&document.activeElement===H&&(k.preventDefault(),A.focus());
      }
    };
    document.addEventListener("keydown",q);
    const K=document.body.style.overflow;
    document.body.style.overflow="hidden";
    return ()=>{
      document.removeEventListener("keydown",q);
      document.body.style.overflow=K;
      N?.focus();
    };
  },[]);
  return c.jsx("div",{className:"modal-backdrop",onClick:E,children:c.jsxs("div",{className:"modal",role:"dialog","aria-modal":"true","aria-label":g,ref:f,tabIndex:-1,onClick:N=>N.stopPropagation(),children:[c.jsxs("div",{className:"modal-heading",children:[c.jsx("h2",{children:g}),c.jsx("button",{type:"button",className:"icon-btn","aria-label":"إغلاق",onClick:E,children:c.jsx(tt,{})})]}),O]})});
}

function Ha({level:g}){
  return c.jsx("span",{className:`badge level-${g}`,dir:"ltr",children:g});
}

function vh({title:g,text:E,action:O}){
  return c.jsxs("div",{className:"empty",children:[c.jsx(Ku,{size:34}),c.jsx("h3",{children:g}),c.jsx("p",{children:E}),O]});
}

// Clean headword helper for speech & audio lookup
function cleanWordForSpeech(rawWord){
  if(!rawWord) return "";
  return rawWord
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/[™®©]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Build candidate Oxford human MP3 URLs
function getOxfordCandidateUrls(wordObj, dialect="us"){
  const dCode = dialect === "uk" ? "gb" : "us";
  const baseUrl = "https://ssl.gstatic.com/dictionary/static/sounds/oxford/";
  const raw = wordObj?.word || "";
  const cleaned = cleanWordForSpeech(raw).toLowerCase();
  const candidates = [];

  if (cleaned === "a, an") {
    return {
      singleCandidates: [],
      sequenceUrls: [
        `${baseUrl}a--_${dCode}_1.mp3`,
        `${baseUrl}an--_${dCode}_1.mp3`
      ]
    };
  }
  if (cleaned === "all right") {
    return {
      singleCandidates: [`${baseUrl}alright--_${dCode}_1.mp3`],
      sequenceUrls: [
        `${baseUrl}all--_${dCode}_1.mp3`,
        `${baseUrl}right--_${dCode}_1.mp3`
      ]
    };
  }
  if (cleaned === "any more") {
    return {
      singleCandidates: [`${baseUrl}anymore--_${dCode}_1.mp3`],
      sequenceUrls: [
        `${baseUrl}any--_${dCode}_1.mp3`,
        `${baseUrl}more--_${dCode}_1.mp3`
      ]
    };
  }
  if (cleaned.includes(" ")) {
    const parts = cleaned.split(/\s+/).filter(Boolean);
    return {
      singleCandidates: [
        `${baseUrl}${parts.join("_")}--_${dCode}_1.mp3`,
        `${baseUrl}${parts.join("")}--_${dCode}_1.mp3`
      ],
      sequenceUrls: parts.map(p => `${baseUrl}${p.replace(/[^a-z-]/g,"")}--_${dCode}_1.mp3`)
    };
  }

  if (cleaned) {
    candidates.push(`${baseUrl}${cleaned}--_${dCode}_1.mp3`);
    if (cleaned.includes("-")) {
      candidates.push(`${baseUrl}${cleaned.replace(/-/g, "_")}--_${dCode}_1.mp3`);
      candidates.push(`${baseUrl}${cleaned.replace(/-/g, "")}--_${dCode}_1.mp3`);
    }
  }
  const origUrl = dialect === "uk" ? wordObj?.phonetics?.audio_uk : wordObj?.phonetics?.audio_us;
  if (origUrl && !candidates.includes(origUrl)) {
    candidates.push(origUrl);
  }
  return {
    singleCandidates: candidates,
    sequenceUrls: cleaned.includes("-")
      ? cleaned.split("-").filter(Boolean).map(p => `${baseUrl}${p}--_${dCode}_1.mp3`)
      : []
  };
}

// Advanced Quiz Generator
function rh(wordsPool, levelFilter, posFilter, count=10, difficulty="easy", modes=["meaning_ar","word_en","listening","sentence","spelling"], weakWords=[]){
  let pool = [...wordsPool];
  if (difficulty === "difficult" && weakWords.length > 0) {
    const weakSet = new Set(weakWords);
    pool.sort((a,b) => (weakSet.has(b.id)?1:0) - (weakSet.has(a.id)?1:0));
  } else {
    pool = bc(pool);
  }

  if (pool.length < count) {
    const existingIds = new Set(pool.map(w => w.id));
    const fallbackExtras = bc(Qe.filter(w => !existingIds.has(w.id) && w.senses.some(s => (!levelFilter || s.level === levelFilter) && (!posFilter || (s.pos && s.pos.includes(posFilter))))));
    pool = [...pool, ...fallbackExtras];
    if (pool.length < count) {
      const anyExtras = bc(Qe.filter(w => !new Set(pool.map(x => x.id)).has(w.id)));
      pool = [...pool, ...anyExtras];
    }
  }
  const selectedWords = pool.slice(0, Math.min(count, pool.length));
  const activeModes = modes && modes.length ? modes : ["meaning_ar"];

  return selectedWords.map(wordItem => {
    const sense = wordItem.senses.find(s => (!levelFilter || s.level === levelFilter) && (!posFilter || (s.pos && s.pos.includes(posFilter)))) || wordItem.senses[0];
    const targetMeaning = sense.ar || sense.meaning_ar || "";
    const targetWord = wordItem.word;
    const cleanedTarget = cleanWordForSpeech(targetWord);
    const mode = activeModes[Math.floor(Math.random() * activeModes.length)];

    let optionsCount = difficulty === "difficult" ? 5 : 4;
    let distractorPool = [];

    if (difficulty === "easy") {
      distractorPool = Qe.filter(k => k.id !== wordItem.id && (!sense.pos || !k.senses[0]?.pos?.some(p => sense.pos.includes(p))));
    } else if (difficulty === "medium") {
      distractorPool = Qe.filter(k => k.id !== wordItem.id && k.senses.some(s => s.level === sense.level));
      if (distractorPool.length < 3) distractorPool = Qe.filter(k => k.id !== wordItem.id);
    } else {
      distractorPool = Qe.filter(k => k.id !== wordItem.id && k.senses.some(s => s.level === sense.level && (!sense.pos || s.pos?.some(p => sense.pos.includes(p)))));
      if (distractorPool.length < 5) distractorPool = Qe.filter(k => k.id !== wordItem.id);
    }

    const posLabel = `النوع النحوي: ${sense.pos?.map(p => Zu[p]||p).join(" / ") || "عام"}`;

    let distractorValues = [];
    if (mode === "word_en" || mode === "listening" || mode === "sentence") {
      const allDistinctWords = [...new Set(distractorPool.map(k => k.word))].filter(w => w !== targetWord);
      distractorValues = bc(allDistinctWords).slice(0, optionsCount - 1);
      const buildGuaranteedBlankSentence = (rawSent, targetW, senseObj) => {
        const baseClean = cleanWordForSpeech(targetW).trim();
        const formsToMask = new Set([baseClean]);
        // Add verb conjugations if available
        if (typeof window !== "undefined" && typeof window.conjugateVerb === "function") {
          const cj = window.conjugateVerb(baseClean);
          if (cj) {
            [cj.v1, ...(cj.v2 || "").split("/"), ...(cj.v3 || "").split("/"), cj.ving]
              .map(x => (x || "").trim())
              .filter(x => x && !x.startsWith("—"))
              .forEach(x => formsToMask.add(x));
          }
        }
        // Add common morphological suffixes (s, es, ies, ed, d, ing, er, est, ly)
        formsToMask.add(baseClean + "s");
        formsToMask.add(baseClean + "es");
        formsToMask.add(baseClean + "ed");
        formsToMask.add(baseClean + "d");
        formsToMask.add(baseClean + "ing");
        formsToMask.add(baseClean + "er");
        formsToMask.add(baseClean + "est");
        formsToMask.add(baseClean + "ly");
        if (baseClean.endsWith("y") && baseClean.length > 2) {
          const stemY = baseClean.slice(0, -1);
          formsToMask.add(stemY + "ies");
          formsToMask.add(stemY + "ied");
          formsToMask.add(stemY + "ier");
          formsToMask.add(stemY + "iest");
          formsToMask.add(stemY + "ily");
        }
        if (baseClean.endsWith("e") && baseClean.length > 2) {
          const stemE = baseClean.slice(0, -1);
          formsToMask.add(stemE + "ing");
          formsToMask.add(stemE + "ed");
          formsToMask.add(stemE + "er");
          formsToMask.add(stemE + "est");
        }

        let resultSent = (rawSent || "").trim();
        if (resultSent) {
          // Sort longer forms first so "abandoned" is matched completely before "abandon"
          const sortedForms = Array.from(formsToMask)
            .filter(Boolean)
            .sort((a, b) => b.length - a.length)
            .map(f => f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
          if (sortedForms.length) {
            const pattern = new RegExp(`\\b(?:${sortedForms.join("|")})\\b`, "gi");
            resultSent = resultSent.replace(pattern, "_______");
          }
          // Secondary prefix stem match if still no blank
          if (!resultSent.includes("_______") && baseClean.length >= 4) {
            const stemPrefix = baseClean.slice(0, Math.max(4, baseClean.length - 2)).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const stemRegex = new RegExp(`\\b${stemPrefix}[a-zA-Z']*\\b`, "gi");
            resultSent = resultSent.replace(stemRegex, "_______");
          }
        }

        // Hard guarantee: if resultSent STILL does not contain "_______", build a clear contextual sentence with "_______"
        if (!resultSent || !resultSent.includes("_______")) {
          const posArr = senseObj?.pos || [];
          if (posArr.includes("v")) {
            resultSent = `In this situation, we need to _______ carefully to achieve the best result.`;
          } else if (posArr.includes("adj")) {
            resultSent = `Everyone noticed that the situation was very _______ from the beginning.`;
          } else if (posArr.includes("adv")) {
            resultSent = `She handled the entire task _______ and completed it on time.`;
          } else {
            resultSent = `The _______ played an essential role in solving the problem.`;
          }
        }
        return resultSent;
      };
      const blankedSentence = buildGuaranteedBlankSentence(sense.example_en, targetWord, sense);
      return {
        mode,
        wordId: wordItem.id,
        wordItem,
        word: targetWord,
        level: sense.level,
        pos: sense.pos,
        questionPrompt: mode === "listening" ? "استمع للنطق الصوتي واختر الكلمة الإنجليزية الصحيحة" : mode === "sentence" ? blankedSentence : targetMeaning,
        // IMPORTANT: In 'sentence' mode, NEVER show Arabic sentence translation in any difficulty level!
        subPrompt: posLabel,
        answer: targetWord,
        options: bc([targetWord, ...distractorValues]),
        exampleEn: sense.example_en,
        exampleAr: sense.example_ar,
        difficulty
      };
    } else if (mode === "spelling") {
      const letters = cleanedTarget.replace(/[^a-zA-Z]/g, "").toUpperCase().split("");
      return {
        mode,
        wordId: wordItem.id,
        wordItem,
        word: targetWord,
        level: sense.level,
        pos: sense.pos,
        questionPrompt: targetMeaning,
        subPrompt: `رتّب حروف الكلمة الإنجليزية (${letters.length} أحرف)`,
        answer: letters.join(""),
        scrambledLetters: bc(letters),
        options: [],
        exampleEn: sense.example_en,
        exampleAr: sense.example_ar,
        difficulty
      };
    } else {
      const allDistinctMeanings = [...new Set(distractorPool.map(k => k.senses[0]?.ar || k.senses[0]?.meaning_ar))].filter(m => m && m !== targetMeaning);
      distractorValues = bc(allDistinctMeanings).slice(0, optionsCount - 1);
      return {
        mode,
        wordId: wordItem.id,
        wordItem,
        word: targetWord,
        level: sense.level,
        pos: sense.pos,
        questionPrompt: targetWord,
        subPrompt: posLabel,
        answer: targetMeaning,
        options: bc([targetMeaning, ...distractorValues]),
        exampleEn: sense.example_en,
        exampleAr: sense.example_ar,
        difficulty
      };
    }
  });
}

const DICT_PAGE_SIZE = 24;

function mh(){
  const[g,E]=$.useState(Zi.p);
  const[O,f]=$.useState(Zi.error);
  const[N,q]=$.useState(()=>{ const h=(typeof window!=="undefined"&&window.location.hash||"").replace("#",""); return ["home","dictionary","cards","quiz","grammar","immersion","stats"].includes(h)?h:"home"; });
  const[K,k]=$.useState(!1);
  const[B,A]=$.useState(null);
  const[H,Y]=$.useState({query:"",level:"",pos:"",favoritesOnly:!1});
  const[re,Xe]=$.useState(1);
  const[Ue,Ae]=$.useState("");
  const[Al,tl]=$.useState(navigator.onLine);
  const[Le,He]=$.useState([]);
  const[ul,vl]=$.useState("");
  const[Ze,F]=$.useState(!1);
  const[Ve,ml]=$.useState(null);
  const[cachedAudioCount, setCachedAudioCount]=$.useState(0);
  const Yl="speechSynthesis"in window&&"SpeechSynthesisUtterance"in window;
  
  // Flashcards state
  const[xe,Ke]=$.useState([]);
  const[Ce,Sl]=$.useState(0);
  const[Be,b]=$.useState(!1);
  const[M,X]=$.useState(!1);
  const[oe,de]=$.useState(0);
  const[flashcardCount, setFlashcardCount]=$.useState(10);

  // Quiz state
  const[o,S]=$.useState([]);
  const[z,D]=$.useState(0);
  const[Q,I]=$.useState([]);
  const[ue,qe]=$.useState(!1);
  const[quizTimer, setQuizTimer]=$.useState(g.quizTimeLimit || 12);
  const[spellingInput, setSpellingInput]=$.useState([]);
  const[openQuizModeModal, setOpenQuizModeModal]=$.useState(!1);
  const[openImportModal, setOpenImportModal]=$.useState(!1);
  const[importDataCandidate, setImportDataCandidate]=$.useState(null);
  const[openSenseIdx, setOpenSenseIdx]=$.useState(0);
  // Grammar & Verb Conjugations state
  const[grammarSubTab, setGrammarSubTab]=$.useState("rules"); // "rules" | "verbs"
  const[selectedGrammarLesson, setSelectedGrammarLesson]=$.useState(null);
  const[grammarQuizState, setGrammarQuizState]=$.useState({active:!1, questions:[], idx:0, answers:[], done:!1, title:"", targetType:"", targetId:""});
  const[verbTypeFilter, setVerbTypeFilter]=$.useState("all"); // "all" | "irregular" | "regular"
  const[verbPage, setVerbPage]=$.useState(1);

  // Stories & Conversations (Immersion) state
  const[immersionSubTab, setImmersionSubTab]=$.useState("stories"); // "stories" | "conversations"
  const[immersionStatusFilter, setImmersionStatusFilter]=$.useState("all"); // "all" | "completed" | "remaining"
  const[immersionPage, setImmersionPage]=$.useState(1);
  const[selectedStory, setSelectedStory]=$.useState(null);
  const[showStoryAr, setShowStoryAr]=$.useState(!0);
  const[storyAudioDisabled, setStoryAudioDisabled]=$.useState(!1);
  const[wordBubbleData, setWordBubbleData]=$.useState(null);
  const[selectedVerbDetail, setSelectedVerbDetail]=$.useState(null);
  const abortPlaybackIdRef=$.useRef(0);
  const currentAudioDoneRef=$.useRef(null);
  const[playingStoryIdx, setPlayingStoryIdx]=$.useState(-1);
  const[storyPaused, setStoryPaused]=$.useState(!1);
  const[selectedConv, setSelectedConv]=$.useState(null);
  const[showConvEn, setShowConvEn]=$.useState(!0);
  const[showConvAr, setShowConvAr]=$.useState(!0);
  const[playingConvIdx, setPlayingConvIdx]=$.useState(-1);
  const[convPaused, setConvPaused]=$.useState(!1);
  const convPlayRef=$.useRef({active:!1, paused:!1, lineIdx:0});
  const storyPlayRef=$.useRef({active:!1, paused:!1, paraIdx:0});

  // Refresh cached audio count on mount
  $.useEffect(()=>{
    countCachedWordAudios().then(setCachedAudioCount).catch(()=>{});
  },[]);

  $.useEffect(()=>{
    const onHash = () => {
      const h = (window.location.hash || "").replace("#","");
      if(["home","dictionary","cards","quiz","grammar","immersion","stats"].includes(h)) q(h);
    };
    window.addEventListener("hashchange", onHash);
    onHash();
    return () => window.removeEventListener("hashchange", onHash);
  },[]);

  const ge=$.useRef(!1);
  const Gl=$.useRef(!1);
  const Ql=$.useRef(null);
  const timerRef=$.useRef(null);
  const currentAudioRef=$.useRef(null);
  const activeObjectUrlRef=$.useRef(null);
  const synthTimeoutRef=$.useRef(null);
  const fileInputRef=$.useRef(null);

  const[currentToday, setCurrentToday]=$.useState(()=>Fi(new Date()));
  $.useEffect(()=>{
    const syncDate = () => {
      const nowStr = Fi(new Date());
      setCurrentToday(prev => prev !== nowStr ? nowStr : prev);
    };
    syncDate();
    const iv = setInterval(syncDate, 20000);
    window.addEventListener("focus", syncDate);
    document.addEventListener("visibilitychange", syncDate);
    return () => {
      clearInterval(iv);
      window.removeEventListener("focus", syncDate);
      document.removeEventListener("visibilitychange", syncDate);
    };
  },[N]);
  const be=$.useMemo(()=>oh(g, currentToday),[g, currentToday, N]);
  const el=$.useMemo(()=>ih(Qe,H,g.favorites),[H,g.favorites]);
  const Cl=Qe.find(v=>v.word==="achievement") || Qe[0];

  $.useEffect(()=>{
    Xe(1);
    setVerbPage(1);
    setImmersionPage(1);
  },[H, verbTypeFilter, immersionStatusFilter, immersionSubTab, grammarSubTab]);

  // Quiz Timer for Difficult Mode
  $.useEffect(()=>{
    if(N!=="quiz" || !o.length || ue || Q[z]!==void 0) {
      if(timerRef.current) clearInterval(timerRef.current);
      return;
    }
    const currentQ = o[z];
    if(currentQ && currentQ.difficulty === "difficult") {
      const limit = g.quizTimeLimit || 12;
      setQuizTimer(limit);
      timerRef.current = setInterval(()=>{
        setQuizTimer(prev => {
          if(prev <= 1) {
            clearInterval(timerRef.current);
            ku("__TIMEOUT__");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => { if(timerRef.current) clearInterval(timerRef.current); };
    }
  },[N, o, z, Q, ue, g.quizTimeLimit]);

  // Auto-play audio ONLY in 'listening' mode or 'easy' mode when word audio is allowed
  $.useEffect(()=>{
    if(N==="quiz" && o.length && !ue && Q[z]===void 0 && o[z]?.mode==="listening" && o[z]?.wordItem) {
      const t = setTimeout(()=>playAudio(o[z].wordItem, g.defaultDialect || "us"), 220);
      return ()=>clearTimeout(t);
    }
  },[N, o, z, ue]);

  // Keyboard shortcuts for Flashcards
  $.useEffect(()=>{
    if(N!=="cards" || !xe.length || M) return;
    const onKey = e => {
      if(B || openQuizModeModal || openImportModal) return;
      if(e.code === "Space") {
        e.preventDefault();
        b(prev => !prev);
      } else if(Be && e.code === "ArrowLeft") {
        e.preventDefault();
        Ju(!0);
      } else if(Be && e.code === "ArrowRight") {
        e.preventDefault();
        Ju(!1);
      }
    };
    window.addEventListener("keydown", onKey);
    return ()=>window.removeEventListener("keydown", onKey);
  },[N, xe, Ce, Be, M, B, openQuizModeModal, openImportModal]);

  $.useEffect(()=>{
    document.documentElement.dataset.theme=g.theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content",g.theme==="dark"?"#17231f":"#17715b");
    if(!Zi.error) {
      try{
        localStorage.setItem(g1,JSON.stringify(g));
        f("");
      }catch{
        f("الحفظ المحلي غير متاح أو ممتلئ. تقدم هذه الجلسة غير محفوظ؛ يمكنك تصديره من الإعدادات.");
      }
    }
  },[g]);

  $.useEffect(()=>{
    const v=()=>tl(navigator.onLine);
    window.addEventListener("online",v);
    window.addEventListener("offline",v);
    if("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then(()=>F(!0));
    }
    const _=C=>{C.preventDefault();ml(C);};
    window.addEventListener("beforeinstallprompt",_);
    return ()=>{
      window.removeEventListener("online",v);
      window.removeEventListener("offline",v);
      window.removeEventListener("beforeinstallprompt",_);
    };
  },[]);

  $.useEffect(()=>{
    if(!Yl) return;
    const v=()=>He(window.speechSynthesis.getVoices().filter(_=>_.lang.toLowerCase().startsWith("en")));
    v();
    speechSynthesis.addEventListener("voiceschanged",v);
    return ()=>{
      speechSynthesis.removeEventListener("voiceschanged",v);
      speechSynthesis.cancel();
    };
  },[]);

  $.useEffect(()=>{
    if(!Ue) return;
    const v=setTimeout(()=>Ae(""),4000);
    return ()=>clearTimeout(v);
  },[Ue]);

  function stopImmersionPlayback(){
    convPlayRef.current = {active:!1, paused:!1, lineIdx:0};
    storyPlayRef.current = {active:!1, paused:!1, paraIdx:0};
    setPlayingConvIdx(-1);
    setConvPaused(!1);
    setPlayingStoryIdx(-1);
    setStoryPaused(!1);
    stopAllAudio();
  }

  function Je(v){
    stopImmersionPlayback();
    setGrammarQuizState({active:!1, questions:[], idx:0, answers:[], done:!1, title:"", targetType:"", targetId:""});
    q(v);
    k(!1);
    window.location.hash = v;
    window.scrollTo({top:0,behavior:"smooth"});
  }

  function wc(v){
    E(_=>({..._,favorites:_.favorites.includes(v.id)?_.favorites.filter(C=>C!==v.id):[..._.favorites,v.id]}));
  }

  function ut(v){
    if(!v) return;
    const todayStr = Fi(new Date());
    setCurrentToday(todayStr);
    E(_=>{
      const alreadySeen = _.seen.includes(v.id);
      const alreadyLoggedToday = (_.events || []).some(ev => ev.wordId === v.id && normalizeEventDay(ev) === todayStr);
      return {
        ..._,
        seen: alreadySeen ? _.seen : [..._.seen, v.id],
        events: alreadyLoggedToday ? _.events : [...(_.events || []), {
          id: typeof crypto.randomUUID=="function"?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2)}`,
          wordId: v.id,
          kind: "explore",
          correct: true,
          day: todayStr,
          at: Date.now()
        }]
      };
    });
  }

  function nt(v){
    ut(v);
    setOpenSenseIdx(0);
    A(v);
  }

  function ct(v,_,C){
    if(!v) return;
    const todayStr = Fi(new Date());
    E(W=>({
      ...W,
      seen: W.seen.includes(v.id)?W.seen:[...W.seen,v.id],
      learned: _==="review"?(C?[...new Set([...W.learned,v.id])]:W.learned.filter(ke=>ke!==v.id)):W.learned,
      events: [...W.events,{
        id: typeof crypto.randomUUID=="function"?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2)}`,
        wordId: v.id,
        kind: _,
        correct: C,
        day: todayStr,
        at: Date.now()
      }]
    }));
  }

  function stopAllAudio(){
    abortPlaybackIdRef.current += 1;
    if(Ql.current) { clearTimeout(Ql.current); Ql.current = null; }
    if(synthTimeoutRef.current) { clearTimeout(synthTimeoutRef.current); synthTimeoutRef.current = null; }
    if(currentAudioRef.current) {
      try {
        currentAudioRef.current.onended = null;
        currentAudioRef.current.onerror = null;
        currentAudioRef.current.oncanplay = null;
        currentAudioRef.current.onplay = null;
        currentAudioRef.current.onplaying = null;
        currentAudioRef.current.ontimeupdate = null;
        currentAudioRef.current.pause();
      } catch(e){}
      currentAudioRef.current = null;
    }
    if(currentAudioDoneRef.current) {
      const fn = currentAudioDoneRef.current;
      currentAudioDoneRef.current = null;
      try { fn(false); } catch(e){}
    }
    // CRITICAL: Never call speechSynthesis.pause() here (which freezes Chromium/Edge TTS queue),
    // and only call cancel() when speechSynthesis is actually speaking or pending!
    if(Yl && (window.speechSynthesis.speaking || window.speechSynthesis.pending)) {
      try {
        window.__lastLexoraSynthCancel = Date.now();
        window.speechSynthesis.cancel();
      } catch(e){}
    }
  }

  // Play any Audio URL or Base64 Data URL with exact user playbackRate + Gender Voice Tuning
  function playAudioSourceWithSpeed(srcUrl, speedRate, maxWaitMs=3500, speakerGender=null){
    return new Promise((resolve, reject) => {
      try {
        const baseRate = typeof speedRate === "number" && speedRate >= 0.5 && speedRate <= 1.5 ? speedRate : 0.85;
        const rate = speakerGender === "male"
          ? Math.max(0.5, Math.min(1.45, baseRate * 0.92))
          : speakerGender === "female"
            ? Math.max(0.5, Math.min(1.5, baseRate * 1.03))
            : baseRate;
        const aud = new Audio();
        aud.preload = "auto";
        const usePitchShift = speakerGender === "male";
        if("preservesPitch" in aud) aud.preservesPitch = !usePitchShift;
        if("mozPreservesPitch" in aud) aud.mozPreservesPitch = !usePitchShift;
        if("webkitPreservesPitch" in aud) aud.webkitPreservesPitch = !usePitchShift;
        aud.defaultPlaybackRate = rate;
        aud.playbackRate = rate;
        currentAudioRef.current = aud;
        let settled = false;
        let hasStarted = false;
        const stallTimer = setTimeout(() => {
          if(!settled && !hasStarted && aud.readyState < 2) {
            try { aud.pause(); aud.src = ""; } catch(e){}
            done(false);
          }
        }, maxWaitMs);
        const markStarted = () => {
          hasStarted = true;
          clearTimeout(stallTimer);
          try {
            if("preservesPitch" in aud) aud.preservesPitch = !usePitchShift;
            aud.playbackRate = rate;
          } catch(e){}
        };
        const done = (ok) => {
          if(settled) return;
          settled = true;
          clearTimeout(stallTimer);
          if(currentAudioDoneRef.current === done) currentAudioDoneRef.current = null;
          aud.onended = null;
          aud.onerror = null;
          aud.onloadedmetadata = null;
          aud.oncanplay = null;
          aud.onplay = null;
          aud.onplaying = null;
          aud.ontimeupdate = null;
          if(ok) resolve(true);
          else reject(new Error("audio_play_error"));
        };
        currentAudioDoneRef.current = done;
        aud.onloadedmetadata = () => {
          try { aud.defaultPlaybackRate = rate; aud.playbackRate = rate; } catch(e){}
        };
        aud.oncanplay = markStarted;
        aud.onplay = markStarted;
        aud.onplaying = markStarted;
        aud.ontimeupdate = () => { if(aud.currentTime > 0) markStarted(); };
        aud.onended = () => done(true);
        aud.onerror = () => done(false);
        aud.src = srcUrl;
        try { aud.playbackRate = rate; } catch(e){}
        const p = aud.play();
        if(p && typeof p.then === "function") {
          p.then(() => {
            markStarted();
          }).catch(() => done(false));
        }
      } catch(err) {
        reject(err);
      }
    });
  }

  // Play a sequence of Oxford MP3 URLs with exact user playbackRate
  async function tryPlayAudioSequence(urls, speedRate){
    if(!urls || !urls.length) throw new Error("empty_seq");
    const rate = typeof speedRate === "number" && speedRate >= 0.5 && speedRate <= 1.5 ? speedRate : 0.85;
    const preloaded = urls.map(u => {
      const a = new Audio();
      a.preload = "auto";
      a.defaultPlaybackRate = rate;
      a.playbackRate = rate;
      a.src = u;
      a.load();
      return a;
    });
    for(let i=0; i<preloaded.length; i++){
      const seg = preloaded[i];
      currentAudioRef.current = seg;
      await new Promise((resolve, reject) => {
        let settled = false;
        const finish = (ok) => {
          if(settled) return;
          settled = true;
          seg.onended = null;
          seg.onerror = null;
          if(ok) resolve(true);
          else reject(new Error("seq_segment_failed"));
        };
        seg.onloadedmetadata = () => { try { seg.playbackRate = rate; } catch(e){} };
        seg.onplay = () => { try { seg.playbackRate = rate; } catch(e){} };
        seg.onended = () => finish(true);
        seg.onerror = () => finish(false);
        try { seg.playbackRate = rate; } catch(e){}
        const p = seg.play();
        if(p && typeof p.then === "function") {
          p.then(() => { try { seg.playbackRate = rate; } catch(e){} }).catch(() => finish(false));
        }
      });
    }
    return true;
  }

  // Background downloader that caches the authentic human MP3 into IndexedDB, localStorage & ./offline_audio/
  async function cacheWordAudioInBackground(wordObj, dialect, primaryUrl, cacheKey){
    try {
      if(getSyncCachedAudioDataUrl(cacheKey)) return true;
      const existing = await getCachedAudioDataUrl(cacheKey);
      if(existing) return true;

      if(primaryUrl) {
        const dataUrl = await fetchAudioBlobWithCorsFallback(primaryUrl, cacheKey);
        if(dataUrl) {
          await saveAudioDataUrl(cacheKey, dataUrl);
          countCachedWordAudios().then(setCachedAudioCount).catch(()=>{});
          return true;
        }
      }

      const cleaned = cleanWordForSpeech(wordObj?.word || "").toLowerCase();
      if(cleaned && !cleaned.includes(" ")) {
        try {
          const resp = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cleaned)}`);
          if(resp.ok) {
            const json = await resp.json();
            const phonetics = (json || []).flatMap(entry => entry?.phonetics || []).filter(p => p && p.audio);
            const targetTag = dialect === "uk" ? "-uk" : "-us";
            const altTag = dialect === "uk" ? "_gb" : "_us";
            const matched = phonetics.find(p => p.audio.toLowerCase().includes(targetTag) || p.audio.toLowerCase().includes(altTag)) || phonetics[0];
            if(matched && matched.audio) {
              const dUrl = await fetchAudioBlobWithCorsFallback(matched.audio, cacheKey);
              if(dUrl) {
                await saveAudioDataUrl(cacheKey, dUrl);
                countCachedWordAudios().then(setCachedAudioCount).catch(()=>{});
                return true;
              }
            }
          }
        } catch(e){}
      }

      const youdaoUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(cleaned)}&type=${dialect === "uk" ? 1 : 2}`;
      const ydDataUrl = await fetchAudioBlobWithCorsFallback(youdaoUrl, cacheKey);
      if(ydDataUrl) {
        await saveAudioDataUrl(cacheKey, ydDataUrl);
        countCachedWordAudios().then(setCachedAudioCount).catch(()=>{});
        return true;
      }

      const fallbackTtsUrl = `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${dialect === "uk" ? "en-GB" : "en-US"}&q=${encodeURIComponent(cleaned)}`;
      const ttsDataUrl = await fetchAudioBlobWithCorsFallback(fallbackTtsUrl, cacheKey);
      if(ttsDataUrl) {
        await saveAudioDataUrl(cacheKey, ttsDataUrl);
        countCachedWordAudios().then(setCachedAudioCount).catch(()=>{});
        return true;
      }
    } catch(e){}
    return false;
  }

  // Select best distinct US vs UK voices for both Online and Offline modes
  // PRIORITIZES Microsoft Edge "Online (Natural)" Studio Human Neural Voices (Ava, Andrew, Emma, Brian, Aria, Jenny, Guy, Sonia, Ryan)
  function selectBestVoiceForDialect(dialect="us", isOffline=false){
    if(!Yl) return { voice: null, sharedFallback: true, isNatural: false };
    const allVoices = window.speechSynthesis.getVoices() || [];
    const enVoices = allVoices.filter(v => v.lang && v.lang.toLowerCase().startsWith("en"));
    if(!enVoices.length) return { voice: null, sharedFallback: true, isNatural: false };

    const localEnVoices = enVoices.filter(v => v.localService);
    const primaryPool = isOffline
      ? (localEnVoices.length ? localEnVoices : enVoices)
      : enVoices;

    const scoreVoice = (v, targetDialect) => {
      const lang = (v.lang || "").replace("_", "-").toLowerCase();
      const name = (v.name || "").toLowerCase();
      let score = 0;

      if(isOffline && v.localService) score += 100;
      if(!isOffline) {
        // Highest priority for Microsoft Edge Online (Natural) & Multilingual Studio Human Voices
        if(name.includes("multilingual") && name.includes("natural")) score += 380;
        else if(name.includes("natural") || name.includes("neural")) score += 320;
        if(name.includes("online")) score += 180;
        if(name.includes("ava") || name.includes("andrew") || name.includes("emma") || name.includes("brian")) score += 90;
        if(name.includes("aria") || name.includes("jenny") || name.includes("guy") || name.includes("sonia") || name.includes("ryan")) score += 80;
        if(name.includes("google")) score += 150;
      }

      if(targetDialect === "uk") {
        if(lang === "en-gb" || lang.startsWith("en-gb")) score += 140;
        if(name.includes("uk") || name.includes("british") || name.includes("great britain") || name.includes("united kingdom")) score += 100;
        if(name.includes("sonia") || name.includes("ryan") || name.includes("libby") || name.includes("maisie") || name.includes("thomas") || name.includes("hazel") || name.includes("daniel") || name.includes("george") || name.includes("susan") || name.includes("oliver") || name.includes("kate") || name.includes("serena") || name.includes("arthur")) score += 75;
        if(lang === "en-au" || lang === "en-ie" || lang === "en-nz") score += 40;
        if(lang === "en-us" || name.includes("united states")) score -= 70;
      } else {
        if(lang === "en-us" || lang.startsWith("en-us")) score += 140;
        if(name.includes("us") || name.includes("united states") || name.includes("american")) score += 100;
        if(name.includes("ava") || name.includes("andrew") || name.includes("emma") || name.includes("brian") || name.includes("aria") || name.includes("jenny") || name.includes("guy") || name.includes("christopher") || name.includes("eric") || name.includes("michelle") || name.includes("roger") || name.includes("steffan") || name.includes("samantha") || name.includes("david") || name.includes("zira") || name.includes("mark") || name.includes("alex")) score += 75;
        if(lang === "en-ca") score += 40;
        if(lang === "en-gb" || name.includes("british") || name.includes("united kingdom")) score -= 70;
      }
      return score;
    };

    const sortedUS = [...primaryPool].sort((a,b) => scoreVoice(b, "us") - scoreVoice(a, "us"));
    const sortedUK = [...primaryPool].sort((a,b) => scoreVoice(b, "uk") - scoreVoice(a, "uk"));

    let chosenUS = sortedUS[0] || null;
    let chosenUK = sortedUK[0] || null;
    let sharedFallback = false;

    if(chosenUS && chosenUK && chosenUS.voiceURI === chosenUK.voiceURI) {
      const diffVoice = sortedUK.find(v => v.voiceURI !== chosenUS.voiceURI);
      if(diffVoice) {
        chosenUK = diffVoice;
      } else {
        sharedFallback = true;
      }
    }

    const chosen = dialect === "uk" ? chosenUK : chosenUS;
    const isNatural = !!(chosen && /natural|online|neural|multilingual|google/i.test(chosen.name || ""));
    return {
      voice: chosen,
      sharedFallback,
      isNatural
    };
  }

  // Select best Gender-Matched Studio Human Voice (Male vs Female) for Conversations
  function selectVoiceByGenderAndDialect(speakerGender=null, dialect="us", isOffline=false){
    if(!Yl) return { voice: null, sameGenderFound: false, isNatural: false };
    const allVoices = window.speechSynthesis.getVoices() || [];
    const enVoices = allVoices.filter(v => v.lang && v.lang.toLowerCase().startsWith("en"));
    if(!enVoices.length) return { voice: null, sameGenderFound: false, isNatural: false };
    const localEn = enVoices.filter(v => v.localService);
    const pool = isOffline ? (localEn.length ? localEn : enVoices) : enVoices;

    const maleNames = ["andrew", "brian", "guy", "christopher", "eric", "roger", "steffan", "ryan", "thomas", "david", "mark", "george", "daniel", "james", "richard", "alex", "fred", "oliver", "arthur", "male"];
    const femaleNames = ["ava", "emma", "aria", "jenny", "sonia", "libby", "maisie", "michelle", "ana", "zira", "hazel", "samantha", "susan", "amy", "joanna", "salli", "kendra", "kimberly", "ivy", "victoria", "karen", "moira", "tessa", "veena", "fiona", "female"];

    const isMaleVoice = (v) => maleNames.some(m => (v.name || "").toLowerCase().includes(m));
    const isFemaleVoice = (v) => femaleNames.some(f => (v.name || "").toLowerCase().includes(f));

    const scoreGenderVoice = (v) => {
      const na = (v.name || "").toLowerCase();
      const lang = (v.lang || "").replace("_", "-").toLowerCase();
      let s = 0;
      if(!isOffline) {
        if(na.includes("multilingual") && na.includes("natural")) s += 350;
        else if(na.includes("natural") || na.includes("neural")) s += 300;
        if(na.includes("online")) s += 160;
        if(na.includes("google")) s += 130;
      } else if(v.localService) {
        s += 80;
      }
      if(dialect === "uk" && lang.startsWith("en-gb")) s += 60;
      if(dialect !== "uk" && lang.startsWith("en-us")) s += 60;

      if(speakerGender === "male") {
        if(isMaleVoice(v)) s += 500;
        if(isFemaleVoice(v)) s -= 500;
      } else if(speakerGender === "female") {
        if(isFemaleVoice(v)) s += 500;
        if(isMaleVoice(v)) s -= 500;
      }
      return s;
    };

    if(speakerGender === "male" || speakerGender === "female") {
      const sorted = [...pool].sort((a, b) => scoreGenderVoice(b) - scoreGenderVoice(a));
      const best = sorted[0] || null;
      const matchedGender = best ? (speakerGender === "male" ? isMaleVoice(best) : isFemaleVoice(best)) : false;
      const isNatural = !!(best && /natural|online|neural|multilingual|google/i.test(best.name || ""));
      return { voice: best, sameGenderFound: matchedGender, isNatural };
    }

    const def = selectBestVoiceForDialect(dialect, isOffline);
    return { voice: def.voice, sameGenderFound: true, isNatural: def.isNatural };
  }

  // Studio-Quality Human Neural Speech Engine with 950ms onstart Watchdog (Guarantees 100% Human Voice when available & 0% chance of silence!)
  function speakWithHumanNeuralEngine(rawText, dialect="us", onEnd=()=>{}, isSentence=false, speakerGender=null, fallbackStreamFn=null){
    const text = isSentence ? (rawText || "").trim() : cleanWordForSpeech(rawText);
    if(!text) { onEnd(); return; }
    if(!Yl){
      if(typeof fallbackStreamFn === "function") fallbackStreamFn();
      else onEnd();
      return;
    }

    const wasBusy = window.speechSynthesis.speaking || window.speechSynthesis.pending;
    if(wasBusy) {
      try {
        window.__lastLexoraSynthCancel = Date.now();
        window.speechSynthesis.cancel();
      } catch(e){}
    }
    if(synthTimeoutRef.current) {
      clearTimeout(synthTimeoutRef.current);
      synthTimeoutRef.current = null;
    }

    const sinceLastCancel = Date.now() - (window.__lastLexoraSynthCancel || 0);
    // If cancel() was called recently, wait 80ms so Edge's Neural WebSocket resets cleanly; otherwise speak in 5ms!
    const delayMs = (wasBusy || sinceLastCancel < 130) ? 80 : 5;

    synthTimeoutRef.current = setTimeout(() => {
      try {
        if(window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
        const isOffline = !navigator.onLine;
        const dialInfo = selectBestVoiceForDialect(dialect, isOffline);
        const genderInfo = speakerGender ? selectVoiceByGenderAndDialect(speakerGender, dialect, isOffline) : null;
        const voice = (genderInfo && genderInfo.voice) ? genderInfo.voice : dialInfo.voice;

        // If no English voice is available at all, use fallback stream immediately
        if(!voice && typeof fallbackStreamFn === "function" && navigator.onLine) {
          fallbackStreamFn();
          return;
        }

        const utt = new SpeechSynthesisUtterance(text);
        window.__lexoraActiveUtterance = utt;
        utt.lang = voice?.lang || (dialect === "uk" ? "en-GB" : "en-US");
        if(voice) utt.voice = voice;

        const userRate = typeof g.rate === "number" ? g.rate : 0.85;
        utt.rate = Math.max(0.5, Math.min(1.5, userRate));

        // CRITICAL FOR HUMAN REALISM:
        // Keep pitch at 1.0 (unmodified natural human vocal cords!) whenever a distinct voice or Male/Female voice is found,
        // avoiding any metallic DSP pitch-shifting!
        if(isSentence) {
          if(speakerGender && genderInfo && !genderInfo.sameGenderFound) {
            utt.pitch = speakerGender === "male" ? 0.88 : 1.12;
          } else {
            utt.pitch = 1.0;
          }
        } else {
          utt.pitch = dialInfo.sharedFallback ? (dialect === "uk" ? 1.08 : 0.94) : 1.0;
        }
        utt.volume = 1.0;

        let finished = false;
        let startedSpeaking = false;
        let watchdogTimer = null;

        const finishOnce = () => {
          if(finished) return;
          finished = true;
          if(watchdogTimer) { clearTimeout(watchdogTimer); watchdogTimer = null; }
          if(Ql.current) { clearTimeout(Ql.current); Ql.current = null; }
          onEnd();
        };

        const triggerFallbackStream = () => {
          if(finished || startedSpeaking) return;
          finished = true;
          if(watchdogTimer) { clearTimeout(watchdogTimer); watchdogTimer = null; }
          if(Ql.current) { clearTimeout(Ql.current); Ql.current = null; }
          try {
            window.__lastLexoraSynthCancel = Date.now();
            window.speechSynthesis.cancel();
          } catch(e){}
          if(typeof fallbackStreamFn === "function" && navigator.onLine) {
            fallbackStreamFn();
          } else {
            onEnd();
          }
        };

        // Watchdog: If the browser's speechSynthesis doesn't actually start speaking within 1100ms,
        // seamlessly switch to the Cloud Neural MP3 stream so it NEVER stays silent!
        if(typeof fallbackStreamFn === "function" && navigator.onLine) {
          watchdogTimer = setTimeout(() => {
            if(!startedSpeaking && !finished && !window.speechSynthesis.speaking) {
              triggerFallbackStream();
            }
          }, 1100);
        }

        utt.onstart = () => {
          startedSpeaking = true;
          if(watchdogTimer) { clearTimeout(watchdogTimer); watchdogTimer = null; }
        };
        utt.onboundary = () => {
          startedSpeaking = true;
          if(watchdogTimer) { clearTimeout(watchdogTimer); watchdogTimer = null; }
        };
        utt.onend = finishOnce;
        utt.onerror = () => {
          if(!startedSpeaking && typeof fallbackStreamFn === "function" && navigator.onLine) {
            triggerFallbackStream();
            return;
          }
          finishOnce();
        };

        const maxDuration = isSentence ? 18000 : 6000;
        Ql.current = setTimeout(finishOnce, maxDuration);

        window.speechSynthesis.speak(utt);
      } catch(e) {
        if(typeof fallbackStreamFn === "function" && navigator.onLine) fallbackStreamFn();
        else onEnd();
      }
    }, delayMs);
  }

  function speakSpeechSynth(rawText, dialect="us", onEnd=()=>{}, isSentence=false, speakerGender=null){
    speakWithHumanNeuralEngine(rawText, dialect, onEnd, isSentence, speakerGender, null);
  }

  // Master Word Audio Player:
  // 1. Plays synchronously (0ms!) from RAM/localStorage cache if already downloaded
  // 2. Plays authentic Oxford US/UK Human MP3 immediately on click (0ms before aud.play()!) + caches in background for lifetime offline use
  // 3. Falls back to Studio Neural Voice / Youdao Human Dictionary MP3 if not on Oxford static CDN
  async function playAudio(wordObj, dialect="us"){
    if(!wordObj) return;
    stopAllAudio();

    const myRunId = abortPlaybackIdRef.current;
    const audioKey = `${wordObj.id}_${dialect}`;
    const userRate = typeof g.rate === "number" ? g.rate : 0.85;
    const spokenText = cleanWordForSpeech(wordObj.word || wordObj.speech || "");
    vl(audioKey);
    ut(wordObj);

    const onFinish = () => {
      vl(prev => prev === audioKey ? "" : prev);
      if(Ql.current) { clearTimeout(Ql.current); Ql.current = null; }
    };

    // 1. 0ms Synchronous RAM / LocalStorage Cache Check
    const syncCached = getSyncCachedAudioDataUrl(audioKey);
    if(syncCached) {
      try {
        await playAudioSourceWithSpeed(syncCached, userRate, 3200);
        onFinish();
        return;
      } catch(e){}
    }

    // 2. Online: Immediately play Authentic Oxford Human MP3 (0ms before aud.play()!) + Background Cache
    if(navigator.onLine) {
      const { singleCandidates, sequenceUrls } = getOxfordCandidateUrls(wordObj, dialect);
      const youdaoType = dialect === "uk" ? 1 : 2;
      const youdaoWordUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(spokenText)}&type=${youdaoType}`;

      cacheWordAudioInBackground(wordObj, dialect, singleCandidates[0] || youdaoWordUrl, audioKey);
      const otherDialect = dialect === "uk" ? "us" : "uk";
      const otherKey = `${wordObj.id}_${otherDialect}`;
      const otherCands = getOxfordCandidateUrls(wordObj, otherDialect).singleCandidates;
      cacheWordAudioInBackground(wordObj, otherDialect, otherCands[0] || `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(spokenText)}&type=${otherDialect === "uk" ? 1 : 2}`, otherKey);

      for(let i=0; i<singleCandidates.length; i++){
        if(abortPlaybackIdRef.current !== myRunId) { onFinish(); return; }
        try {
          await playAudioSourceWithSpeed(singleCandidates[i], userRate, 2800);
          onFinish();
          return;
        } catch(e){}
      }

      if(sequenceUrls && sequenceUrls.length > 0 && abortPlaybackIdRef.current === myRunId) {
        try {
          await tryPlayAudioSequence(sequenceUrls, userRate);
          onFinish();
          return;
        } catch(e){}
      }

      if(abortPlaybackIdRef.current === myRunId) {
        try {
          await playAudioSourceWithSpeed(youdaoWordUrl, userRate, 2800);
          onFinish();
          return;
        } catch(e){}
      }
    }

    // 3. Check IndexedDB if offline and not yet in RAM map
    try {
      const idbDataUrl = await getCachedAudioDataUrl(audioKey);
      if(idbDataUrl && abortPlaybackIdRef.current === myRunId) {
        await playAudioSourceWithSpeed(idbDataUrl, userRate, 3000);
        onFinish();
        return;
      }
    } catch(e){}

    // 4. Fallback to Human Neural SpeechSynthesis
    if(abortPlaybackIdRef.current === myRunId) {
      speakSpeechSynth(spokenText, dialect, onFinish, false);
    } else {
      onFinish();
    }
  }

  // Helper: Stream Cloud Neural MP3 for a sentence/chunk via HTML5 <audio>
  async function playCloudNeuralSentenceStream(cleanSent, dial, userRate, speakerGender, cacheKey, myRunId){
    const syncCached = getSyncCachedAudioDataUrl(cacheKey);
    if(syncCached && abortPlaybackIdRef.current === myRunId) {
      try {
        await playAudioSourceWithSpeed(syncCached, userRate, 3200, speakerGender);
        return true;
      } catch(e){}
    }
    if(navigator.onLine && abortPlaybackIdRef.current === myRunId) {
      const dialectLang = dial === "uk" ? "en-GB" : "en-US";
      const youdaoType = dial === "uk" ? 1 : 2;
      // Put Google's natural tw-ob & gtx Neural voices FIRST for full sentences, followed by Youdao
      const streamUrls = speakerGender === "male"
        ? [
            `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en-GB&q=${encodeURIComponent(cleanSent)}`,
            `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=gtx&tl=en-GB&q=${encodeURIComponent(cleanSent)}`,
            `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(cleanSent)}&type=1`,
            `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(cleanSent)}&type=2`
          ]
        : speakerGender === "female"
          ? [
              `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en-US&q=${encodeURIComponent(cleanSent)}`,
              `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=gtx&tl=en-US&q=${encodeURIComponent(cleanSent)}`,
              `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(cleanSent)}&type=2`
            ]
          : [
              `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${dialectLang}&q=${encodeURIComponent(cleanSent)}`,
              `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=gtx&tl=${dialectLang}&q=${encodeURIComponent(cleanSent)}`,
              `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(cleanSent)}&type=${youdaoType}`
            ];

      if(typeof window !== "undefined" && window.location && window.location.protocol.startsWith("http")) {
        streamUrls.push(`/__audio_cache__?key=${encodeURIComponent(cacheKey)}&url=${encodeURIComponent(streamUrls[0])}`);
      }

      fetchAudioBlobWithCorsFallback(streamUrls[0], cacheKey).then(dUrl => {
        if(dUrl) {
          saveAudioDataUrl(cacheKey, dUrl);
          countCachedWordAudios().then(setCachedAudioCount).catch(()=>{});
        }
      }).catch(()=>{});

      for(let i=0; i<streamUrls.length; i++){
        if(abortPlaybackIdRef.current !== myRunId) return false;
        try {
          await playAudioSourceWithSpeed(streamUrls[i], userRate, 3200, speakerGender);
          return true;
        } catch(e){}
      }
    }
    try {
      const idbDataUrl = await getCachedAudioDataUrl(cacheKey);
      if(idbDataUrl && abortPlaybackIdRef.current === myRunId) {
        await playAudioSourceWithSpeed(idbDataUrl, userRate, 3200, speakerGender);
        return true;
      }
    } catch(e){}
    return false;
  }

  // Master Sentence Audio Player:
  // Uses Studio Human Neural Voices (Microsoft Edge Online Natural: Ava, Andrew, Emma, Brian, Aria, Guy, Sonia, Ryan)
  // with an automatic 1.1s Watchdog that seamlessly falls back to Cloud Neural MP3 stream if needed!
  async function speakSentence(sentence, dialectOverride=null){
    if(!sentence) return;
    const cleanSent = sentence.trim();
    if(!cleanSent) return;

    if(cleanSent.length > 165) {
      await speakTextAsync(cleanSent, dialectOverride || g.defaultDialect || "us", null);
      return;
    }

    stopAllAudio();
    const myRunId = abortPlaybackIdRef.current;
    const dial = dialectOverride || g.defaultDialect || "us";
    const sentHash = cleanSent.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 36);
    const cacheKey = `sent_${dial}_${sentHash}`;
    const uiKey = `sent_${cleanSent.slice(0,22)}`;
    const userRate = typeof g.rate === "number" ? g.rate : 0.85;

    vl(uiKey);
    const onFinish = () => {
      vl(prev => prev === uiKey ? "" : prev);
      if(Ql.current) { clearTimeout(Ql.current); Ql.current = null; }
    };

    const runCloudFallback = () => {
      playCloudNeuralSentenceStream(cleanSent, dial, userRate, null, cacheKey, myRunId).then(onFinish).catch(onFinish);
    };

    // Check if the browser has Studio Human Neural Voices (Online Natural / Neural / Google)
    const { voice, isNatural } = selectBestVoiceForDialect(dial, !navigator.onLine);
    if(Yl && voice && (isNatural || !navigator.onLine)) {
      speakWithHumanNeuralEngine(cleanSent, dial, onFinish, true, null, runCloudFallback);
      return;
    }

    // Otherwise stream Cloud Neural Voice MP3 first, and if that fails, use local voice
    const ok = await playCloudNeuralSentenceStream(cleanSent, dial, userRate, null, cacheKey, myRunId);
    if(!ok && abortPlaybackIdRef.current === myRunId) {
      speakWithHumanNeuralEngine(cleanSent, dial, onFinish, true, null, null);
    } else {
      onFinish();
    }
  }

  // Dual US and UK Audio Pill Buttons for Words
  const da = (v, isLarge=false) => {
    if(!v) return null;
    const isPlayingUS = ul === `${v.id}_us`;
    const isPlayingUK = ul === `${v.id}_uk`;
    return c.jsxs("span",{className:"audio-pill-group",dir:"ltr",children:[
      c.jsxs("button",{
        type:"button",
        className:`audio-pill-btn ${isLarge?"large":""} ${isPlayingUS?"playing":""}`,
        "aria-label":`استمع لنطق ${cleanWordForSpeech(v.word)} الأمريكي`,
        title:"النطق الأمريكي (US)",
        onClick:C=>{C.stopPropagation(); playAudio(v, "us");},
        children:[isPlayingUS ? c.jsx($m,{size:isLarge?14:11}) : c.jsx(Qi,{size:isLarge?14:11}), " US"]
      }),
      c.jsxs("button",{
        type:"button",
        className:`audio-pill-btn ${isLarge?"large":""} ${isPlayingUK?"playing":""}`,
        "aria-label":`استمع لنطق ${cleanWordForSpeech(v.word)} البريطاني`,
        title:"النطق البريطاني (UK)",
        onClick:C=>{C.stopPropagation(); playAudio(v, "uk");},
        children:[isPlayingUK ? c.jsx($m,{size:isLarge?14:11}) : c.jsx(Qi,{size:isLarge?14:11}), " UK"]
      })
    ]});
  };

  // Single Unified AI Audio Button for Sentences
  const renderSingleSentenceAudioBtn = (sentenceText) => {
    if(!sentenceText) return null;
    const key = `sent_${sentenceText.slice(0,22)}`;
    const isPlaying = ul === key;
    return c.jsxs("button",{
      type:"button",
      className:`audio-pill-btn sentence-audio-btn ${isPlaying?"playing":""}`,
      title:"استمع للجملة كاملة بصوت واضح",
      "aria-label":"استمع للجملة كاملة",
      onClick:e=>{e.stopPropagation(); speakSentence(sentenceText);},
      children:[isPlaying ? c.jsx($m,{size:13}) : c.jsx(Qi,{size:13}), " استمع للجملة"]
    });
  };

  const it = v => c.jsx("button",{
    type:"button",
    className:`icon-btn bookmark ${g.favorites.includes(v.id)?"saved":""}`,
    "aria-label":`${g.favorites.includes(v.id)?"إزالة":"إضافة"} ${v.word} من المفضلة`,
    "aria-pressed":g.favorites.includes(v.id),
    onClick:_=>{_.stopPropagation();wc(v);},
    children:c.jsx(s1,{size:19,fill:g.favorites.includes(v.id)?"currentColor":"none"})
  });

  // Reset All Filters to Default Main Filter
  function clearAllFilters(){
    Y({query:"",level:"",pos:"",favoritesOnly:!1});
    setFlashcardCount(10);
    E(prev => ({
      ...prev,
      quizCount: 10,
      quizDifficulty: "easy",
      quizTimeLimit: 12,
      quizModes: ["meaning_ar","word_en","listening","sentence","spelling"]
    }));
  }

  const hasAnyActiveFilter = Boolean(
    H.query || H.level || H.pos || H.favoritesOnly ||
    (N==="cards" && flashcardCount !== 10) ||
    (N==="quiz" && (g.quizCount !== 10 || g.quizDifficulty !== "easy" || g.quizModes.length !== 5 || g.quizTimeLimit !== 12))
  );

  // Start Flashcards Session
  function ll(){
    const v=bc(el).slice(0, flashcardCount);
    Ke(v);
    Sl(0);
    b(!1);
    X(!1);
    de(0);
    Gl.current=!1;
  }

  function Ju(v){
    if(!Be||Gl.current) return;
    Gl.current=!0;
    ct(xe[Ce],"review",v);
    if(v) de(_=>_+1);
    if(Ce+1>=xe.length){
      X(!0);
    } else {
      Sl(_=>_+1);
      b(!1);
      setTimeout(()=>{Gl.current=!1;},150);
    }
  }

  // Start Quiz Session
  function kt(){
    const incorrectWordIds = g.events.filter(ev=>ev.kind==="quiz" && !ev.correct).map(ev=>ev.wordId);
    const questions = rh(el, H.level, H.pos, g.quizCount, g.quizDifficulty, g.quizModes, incorrectWordIds);
    S(questions);
    D(0);
    I([]);
    qe(!1);
    setSpellingInput([]);
    ge.current=!1;
  }

  function ku(v){
    if(ge.current || Q[z]!==void 0) return;
    ge.current=!0;
    if(timerRef.current) clearInterval(timerRef.current);
    const currentQ = o[z];
    const isCorrect = v === currentQ.answer;
    I(C=>[...C, v]);
    ct(Qe.find(C=>C.id===currentQ.wordId),"quiz",isCorrect);
  }

  function rt(){
    if(z+1 >= o.length){
      qe(!0);
    } else {
      D(v=>v+1);
      setSpellingInput([]);
      ge.current=!1;
    }
  }

  function handleSpellingLetterClick(letter, index){
    if(spellingInput.includes(index) || Q[z]!==void 0) return;
    const updated = [...spellingInput, index];
    setSpellingInput(updated);
    const currentQ = o[z];
    const constructedWord = updated.map(idx => currentQ.scrambledLetters[idx]).join("");
    if(constructedWord.length === currentQ.answer.length) {
      ku(constructedWord);
    }
  }

  function handleSpellingBackspace(){
    if(!spellingInput.length || Q[z]!==void 0) return;
    setSpellingInput(prev => prev.slice(0, -1));
  }

  function handleImportFile(event){
    const file = event.target.files?.[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const parsed = JSON.parse(e.target.result);
        if(!parsed || typeof parsed !== "object" || !Array.isArray(parsed.events)) {
          Ae("الملف المختار لا يحتوي على بنية بيانات Lexora صالحة.");
          return;
        }
        setImportDataCandidate(parsed);
        setOpenImportModal(!0);
      } catch(err) {
        Ae("تعذّر قراءة ملف JSON. تأكد من صحة الملف.");
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  }

  async function executeImport(mergeMode=true){
    if(!importDataCandidate) return;
    let restoredAudios = 0;
    if(importDataCandidate.audioCache && typeof importDataCandidate.audioCache === "object") {
      restoredAudios = await importCachedAudiosMap(importDataCandidate.audioCache);
      countCachedWordAudios().then(setCachedAudioCount).catch(()=>{});
    }
    if(mergeMode) {
      E(prev => ({
        ...prev,
        favorites: [...new Set([...prev.favorites, ...(importDataCandidate.favorites||[])])],
        learned: [...new Set([...prev.learned, ...(importDataCandidate.learned||[])])],
        seen: [...new Set([...prev.seen, ...(importDataCandidate.seen||[])])],
        events: [...prev.events, ...(importDataCandidate.events||[])],
        learnedVerbs: [...new Set([...(prev.learnedVerbs||[]), ...(importDataCandidate.learnedVerbs||[])])],
        completedGrammar: {...(prev.completedGrammar||{}), ...(importDataCandidate.completedGrammar||{})},
        completedStories: {...(prev.completedStories||{}), ...(importDataCandidate.completedStories||{})},
        completedConversations: {...(prev.completedConversations||{}), ...(importDataCandidate.completedConversations||{})}
      }));
      Ae(restoredAudios > 0 ? `تم دمج الإحصائيات واستعادة ${restoredAudios} ملف صوتي للعمل بدون إنترنت!` : "تم دمج بيانات التقدم والإحصائيات بنجاح!");
    } else {
      E(dh(JSON.stringify(importDataCandidate)));
      Ae(restoredAudios > 0 ? `تم استرجاع الإحصائيات و ${restoredAudios} ملف صوتي بالكامل!` : "تم استبدال بيانات التقدم بالكامل!");
    }
    setOpenImportModal(!1);
    setImportDataCandidate(null);
  }

  function renderHighlightedSentence(sentence, targetWord){
    if(!sentence) return "";
    const cleaned = cleanWordForSpeech(targetWord);
    if(!cleaned) return sentence;
    try {
      const escaped = cleaned.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`(\\b${escaped}\\b)`, "gi");
      const parts = sentence.split(regex);
      return parts.map((part, idx) => 
        regex.test(part) ? c.jsx("span",{key:idx,className:"example-target-word",children:part}) : part
      );
    } catch(e) {
      return sentence;
    }
  }

  // Filter Bar with working Question Count, Hard Mode Timer, and full Clear Filters
  const It = c.jsxs("div",{className:"filter-bar",children:[
    c.jsxs("div",{className:"filter-label",children:[c.jsx(f1,{size:17}),c.jsx("span",{children:"تخصيص مجموعتك"})]}),
    c.jsxs("label",{className:"select-wrap",children:[
      c.jsx("span",{className:"sr-only",children:"المستوى"}),
      c.jsxs("select",{"aria-label":"المستوى",value:H.level,onChange:v=>Y({...H,level:v.target.value}),children:[
        c.jsx("option",{value:"",children:"كل المستويات (A1–C1)"}),
        gc.map(v=>c.jsx("option",{value:v,children:`المستوى ${v}`},v))
      ]}),
      c.jsx(i1,{size:14})
    ]}),
    c.jsxs("label",{className:"select-wrap",children:[
      c.jsx("span",{className:"sr-only",children:"النوع النحوي"}),
      c.jsxs("select",{"aria-label":"النوع النحوي",value:H.pos,onChange:v=>Y({...H,pos:v.target.value}),children:[
        c.jsx("option",{value:"",children:"كل الأقسام النحوية"}),
        Object.entries(Zu).map(([v,_])=>c.jsx("option",{value:v,children:_},v))
      ]}),
      c.jsx(i1,{size:14})
    ]}),
    c.jsxs("button",{
      type:"button",
      className:`pill-toggle ${H.favoritesOnly?"on":""}`,
      "aria-pressed":H.favoritesOnly,
      onClick:()=>Y({...H,favoritesOnly:!H.favoritesOnly}),
      children:[c.jsx(s1,{size:16})," المفضلة ",c.jsx("span",{children:g.favorites.length})]
    }),
    (N==="quiz"||N==="cards")&&c.jsxs("label",{className:"select-wrap",children:[
      c.jsx("span",{className:"sr-only",children:"عدد الأسئلة"}),
      c.jsxs("select",{
        "aria-label":"عدد الأسئلة",
        value: String(N==="quiz" ? g.quizCount : flashcardCount),
        onChange: v => {
          const val = Number(v.target.value);
          if(N==="quiz") E(prev => ({...prev, quizCount: val}));
          else setFlashcardCount(val);
        },
        children:VALID_COUNTS.map(cnt => c.jsx("option",{value:String(cnt),children:N==="quiz"?`عدد الأسئلة: ${cnt}`:`عدد البطاقات: ${cnt}`},cnt))
      }),
      c.jsx(i1,{size:14})
    ]}),
    N==="quiz"&&c.jsxs("label",{className:"select-wrap",children:[
      c.jsx("span",{className:"sr-only",children:"الصعوبة"}),
      c.jsxs("select",{
        "aria-label":"صعوبة الاختبار",
        value: g.quizDifficulty,
        onChange: v => E(prev => ({...prev, quizDifficulty: v.target.value})),
        children:[
          c.jsx("option",{value:"easy",children:"الصعوبة: سهل (Easy)"}),
          c.jsx("option",{value:"medium",children:"الصعوبة: متوسط (Medium)"}),
          c.jsx("option",{value:"difficult",children:"الصعوبة: صعب (Difficult)"})
        ]
      }),
      c.jsx(i1,{size:14})
    ]}),
    (N==="quiz" && g.quizDifficulty==="difficult")&&c.jsxs("label",{className:"select-wrap timer-select-wrap",title:"التحكم بالوقت المحدد لكل سؤال في الوضع الصعب",children:[
      c.jsx("span",{className:"sr-only",children:"وقت السؤال"}),
      c.jsxs("select",{
        "aria-label":"وقت السؤال في الوضع الصعب",
        value: String(g.quizTimeLimit || 12),
        onChange: v => {
          const newLimit = Number(v.target.value);
          E(prev => ({...prev, quizTimeLimit: newLimit}));
          setQuizTimer(newLimit);
        },
        children:[
          {v:5, l:"وقت السؤال: 5 ثوانٍ"},
          {v:8, l:"وقت السؤال: 8 ثوانٍ"},
          {v:10, l:"وقت السؤال: 10 ثوانٍ"},
          {v:12, l:"وقت السؤال: 12 ثانية (افتراضي)"},
          {v:15, l:"وقت السؤال: 15 ثانية"},
          {v:20, l:"وقت السؤال: 20 ثانية"},
          {v:30, l:"وقت السؤال: 30 ثانية"},
          {v:45, l:"وقت السؤال: 45 ثانية"},
          {v:60, l:"وقت السؤال: 60 ثانية"}
        ].map(item => c.jsx("option",{value:String(item.v),children:item.l},item.v))
      }),
      c.jsx(ClockIcon,{size:14})
    ]}),
    N==="quiz"&&c.jsxs("button",{
      type:"button",
      className:"pill-toggle",
      onClick:()=>setOpenQuizModeModal(!0),
      children:[c.jsx(o1,{size:15}),` الأنماط (${g.quizModes.length}) ▾`]
    }),
    hasAnyActiveFilter&&c.jsxs("button",{
      type:"button",
      className:"text-btn",
      onClick:clearAllFilters,
      children:["مسح الفلاتر ",c.jsx(tt,{size:14})]
    })
  ]});

  const Iu = v => {
    const _ = v.senses.filter(C=>(!H.level||C.level===H.level)&&(!H.pos||(C.pos&&C.pos.includes(H.pos))));
    const sensesToDisplay = _.length ? _ : v.senses;
    return c.jsxs("article",{className:"word-card",onClick:()=>nt(v),children:[
      c.jsxs("div",{className:"word-card-top",children:[
        c.jsx("div",{className:"badges",children:[...new Set(sensesToDisplay.map(C=>C.level))].map(C=>c.jsx(Ha,{level:C},C))}),
        it(v)
      ]}),
      c.jsxs("div",{className:"word-line",dir:"ltr",children:[
        c.jsx("button",{type:"button",className:"word-name",onClick:e=>{e.stopPropagation();nt(v);},children:v.word}),
        da(v)
      ]}),
      c.jsx("div",{className:"word-pos",dir:"ltr",children:[...new Set(sensesToDisplay.flatMap(C=>C.pos||[]))].map(C=>C==="article"?"indefinite article":C==="aux"?"auxiliary v.":`${C}.`).join(" / ")}),
      c.jsx("p",{className:"translation",children:sensesToDisplay[0]?.ar || sensesToDisplay[0]?.meaning_ar}),
      c.jsxs("div",{className:"word-card-foot",children:[
        c.jsx("span",{children:[...new Set(sensesToDisplay.flatMap(C=>C.pos||[]))].map(C=>Zu[C]||C).join(" / ")}),
        c.jsx("button",{
          type:"button",
          onClick:e=>{e.stopPropagation();nt(v);},
          "aria-label":`تفاصيل ${v.word}`,
          className:"detail-link",
          children: g.learned.includes(v.id) 
            ? c.jsxs(c.Fragment,{children:[c.jsx(Lu,{size:14})," أعرفها"]})
            : c.jsxs(c.Fragment,{children:["استكشف ",c.jsx(at,{size:14})]})
        })
      ]})
    ]},v.id);
  };

  const totalDictPages = Math.max(1, Math.ceil(el.length / DICT_PAGE_SIZE));
  const safeDictPage = Math.min(re, totalDictPages);
  const currentDictSlice = el.slice((safeDictPage - 1) * DICT_PAGE_SIZE, safeDictPage * DICT_PAGE_SIZE);
  const goalPct = Math.min(100, Math.round((be.today / Math.max(1, g.goal)) * 100));
  const maxWeekCount = Math.max(1, ...be.week.map(d => d.count));

  const grammarLessonsList = (typeof window !== "undefined" && window.lexoraGrammarLessons) || [];
  const verbConjugationsList = (typeof window !== "undefined" && window.lexoraVerbConjugations) || [];
  const allStoriesList = (typeof window !== "undefined" && window.lexoraStories) || [];
  const allConversationsList = (typeof window !== "undefined" && window.lexoraConversations) || [];

  // Split long paragraphs or dialogue turns into natural sentence chunks (<=165 chars) so cloud & local TTS never reject long strings
  function splitIntoSentenceChunks(rawText){
    if(!rawText) return [];
    const cleaned = rawText.replace(/\s+/g, " ").trim();
    if(cleaned.length <= 165) return [cleaned];
    const rawSentences = cleaned.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [cleaned];
    const chunks = [];
    rawSentences.forEach(sent => {
      const sTrim = sent.trim();
      if(!sTrim) return;
      if(sTrim.length <= 165) {
        chunks.push(sTrim);
      } else {
        // Split further by commas/semicolons if a single sentence exceeds 165 chars
        const parts = sTrim.split(/(?<=[,;:])\s+/);
        let acc = "";
        parts.forEach(p => {
          if((acc + " " + p).trim().length <= 165) {
            acc = (acc + " " + p).trim();
          } else {
            if(acc) chunks.push(acc);
            acc = p.trim();
          }
        });
        if(acc) chunks.push(acc);
      }
    });
    return chunks.length ? chunks : [cleaned];
  }

  // Play a single short sentence chunk in Stories & Conversations with Studio Human Neural Voices (Male: Andrew/Brian/Guy/Ryan, Female: Ava/Emma/Aria/Sonia) + Watchdog Cloud Neural Fallback!
  function speakSingleChunkAsync(chunkText, dial="us", speakerGender=null, expectedRunId=null){
    return new Promise(async (resolve) => {
      if(!chunkText) { resolve(); return; }
      const runId = expectedRunId !== null ? expectedRunId : abortPlaybackIdRef.current;
      if(abortPlaybackIdRef.current !== runId) { resolve(); return; }

      const cleanSent = chunkText.trim();
      const genderTag = speakerGender || "N";
      const sentHash = cleanSent.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 40);
      const cacheKey = `sent_${dial}_${genderTag}_${sentHash}`;
      const userRate = typeof g.rate === "number" ? g.rate : 0.85;

      const runCloudStreamFallback = () => {
        playCloudNeuralSentenceStream(cleanSent, dial, userRate, speakerGender, cacheKey, runId).then(() => resolve()).catch(() => resolve());
      };

      const genderInfo = speakerGender
        ? selectVoiceByGenderAndDialect(speakerGender, dial, !navigator.onLine)
        : selectBestVoiceForDialect(dial, !navigator.onLine);

      if(Yl && genderInfo.voice && (genderInfo.isNatural || !navigator.onLine)) {
        speakWithHumanNeuralEngine(cleanSent, dial, () => resolve(), true, speakerGender, runCloudStreamFallback);
        return;
      }

      const ok = await playCloudNeuralSentenceStream(cleanSent, dial, userRate, speakerGender, cacheKey, runId);
      if(!ok && abortPlaybackIdRef.current === runId) {
        speakWithHumanNeuralEngine(cleanSent, dial, () => resolve(), true, speakerGender, null);
      } else {
        resolve();
      }
    });
  }

  // Play any text (single sentence OR multi-sentence story paragraph) seamlessly chunk-by-chunk with instant pause support
  async function speakTextAsync(text, dialectOverride=null, speakerGender=null, checkAbortFn=null){
    if(!text) return;
    stopAllAudio();
    const myRunId = abortPlaybackIdRef.current;
    const dial = dialectOverride || g.defaultDialect || "us";
    const chunks = splitIntoSentenceChunks(text);
    for(let cIdx = 0; cIdx < chunks.length; cIdx++){
      if(abortPlaybackIdRef.current !== myRunId) break;
      if(typeof checkAbortFn === "function" && !checkAbortFn()) break;
      await speakSingleChunkAsync(chunks[cIdx], dial, speakerGender, myRunId);
      if(abortPlaybackIdRef.current !== myRunId) break;
      if(cIdx + 1 < chunks.length) {
        if(typeof checkAbortFn === "function" && !checkAbortFn()) break;
        await new Promise(r => setTimeout(r, 90));
      }
    }
  }

  // Continuous Conversation Player (supports Play All, Pause, Resume, and Line Jump)
  async function startConversationPlayback(conv, startIdx=0){
    if(!conv || !conv.lines || !conv.lines.length) return;
    stopAllAudio();
    convPlayRef.current = { active: !0, paused: !1, lineIdx: startIdx };
    setConvPaused(!1);

    for(let i = startIdx; i < conv.lines.length; i++){
      if(!convPlayRef.current.active || convPlayRef.current.paused) break;
      convPlayRef.current.lineIdx = i;
      setPlayingConvIdx(i);
      const lineEl = document.getElementById(`conv-line-${i}`);
      if(lineEl) {
        try { lineEl.scrollIntoView({ behavior: "smooth", block: "center" }); } catch(e){}
      }
      const line = conv.lines[i];
      const speakerGender = line.gender || (line.role === "B" ? "female" : "male");
      const spDialect = g.defaultDialect || "us";
      await speakTextAsync(line.en, spDialect, speakerGender, () => convPlayRef.current.active && !convPlayRef.current.paused);
      if(!convPlayRef.current.active || convPlayRef.current.paused) break;
      await new Promise(r => setTimeout(r, 280));
    }

    if(convPlayRef.current.active && !convPlayRef.current.paused) {
      convPlayRef.current = { active: !1, paused: !1, lineIdx: 0 };
      setPlayingConvIdx(-1);
      setConvPaused(!1);
    }
  }

  function pauseConversationPlayback(){
    convPlayRef.current.paused = !0;
    setConvPaused(!0);
    stopAllAudio();
  }

  function resumeConversationPlayback(conv){
    const idx = Math.max(0, convPlayRef.current.lineIdx || 0);
    startConversationPlayback(conv, idx);
  }

  // Continuous Story Player (plays paragraphs sequentially with Pause/Resume)
  async function startStoryPlayback(story, startIdx=0){
    if(!story || !story.paragraphs || !story.paragraphs.length) return;
    stopAllAudio();
    storyPlayRef.current = { active: !0, paused: !1, paraIdx: startIdx };
    setStoryPaused(!1);

    for(let i = startIdx; i < story.paragraphs.length; i++){
      if(!storyPlayRef.current.active || storyPlayRef.current.paused) break;
      storyPlayRef.current.paraIdx = i;
      setPlayingStoryIdx(i);
      const pEl = document.getElementById(`story-para-${i}`);
      if(pEl) {
        try { pEl.scrollIntoView({ behavior: "smooth", block: "center" }); } catch(e){}
      }
      await speakTextAsync(story.paragraphs[i].en, g.defaultDialect || "us", null, () => storyPlayRef.current.active && !storyPlayRef.current.paused);
      if(!storyPlayRef.current.active || storyPlayRef.current.paused) break;
      await new Promise(r => setTimeout(r, 320));
    }

    if(storyPlayRef.current.active && !storyPlayRef.current.paused) {
      storyPlayRef.current = { active: !1, paused: !1, paraIdx: 0 };
      setPlayingStoryIdx(-1);
      setStoryPaused(!1);
    }
  }

  function pauseStoryPlayback(){
    storyPlayRef.current.paused = !0;
    setStoryPaused(!0);
    stopAllAudio();
  }

  // Launch 10-Question Interactive Quiz for a Grammar Lesson, Verb Conjugation Set, Story, or Conversation
  function startModuleQuiz(targetType, targetId, title, questionsList){
    stopImmersionPlayback();
    setGrammarQuizState({
      active: !0,
      questions: questionsList.slice(0, 10),
      idx: 0,
      answers: [],
      done: !1,
      title,
      targetType,
      targetId
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startVerbConjugationQuiz(filteredVerbs){
    const pool = bc(filteredVerbs.length >= 10 ? filteredVerbs : verbConjugationsList).slice(0, 10);
    const qList = pool.map((v, i) => {
      const askV3 = i % 2 === 0;
      const correctAns = askV3 ? v.v3 : v.v2;
      const otherVerbs = bc(verbConjugationsList.filter(x => x.id !== v.id)).slice(0, 3);
      const distractors = otherVerbs.map(x => askV3 ? x.v3 : x.v2).filter(d => d !== correctAns);
      while(distractors.length < 3) {
        distractors.push(v.v1 + (distractors.length === 0 ? "ed" : distractors.length === 1 ? "en" : "ing"));
      }
      return {
        id: `vq-${v.id}-${i}`,
        prompt: askV3
          ? `ما هو التصريف الثالث (Past Participle - V3) للفعل «${v.v1}» (${v.ar})؟`
          : `ما هو الماضي البسيط (Past Simple - V2) للفعل «${v.v1}» (${v.ar})؟`,
        subPrompt: `المستوى ${v.level} · نوع الفعل: ${v.type === "irregular" ? "شاذ (Irregular)" : "قياسي (Regular)"}`,
        answer: correctAns,
        options: bc([correctAns, ...distractors.slice(0, 3)]),
        explanation: `التصاريف الثلاثة للفعل (${v.v1}): المضارع: ${v.v1} | الماضي: ${v.v2} | التصريف الثالث: ${v.v3}`
      };
    });
    startModuleQuiz("verbs", "verbs-quiz", "اختبار التصاريف الثلاثة للأفعال (10 أسئلة)", qList);
  }

  function startImmersionItemQuiz(item, isStory){
    const qRaw = (typeof window.generateImmersionQuiz === "function")
      ? window.generateImmersionQuiz(item, isStory)
      : [];
    const formatted = qRaw.map((q, i) => ({
      id: `${item.id}-q-${i}`,
      prompt: q.mode === "sentence"
        ? `أكمل الجملة التالية من ${isStory ? "القصة" : "المحادثة"}:\n"${q.questionPrompt}"`
        : q.mode === "meaning_ar"
          ? `ما المعنى العربي الصحيح لكلمة «${q.questionPrompt}» التي وردت في النص؟`
          : `ما الكلمة الإنجليزية التي وردت في النص بمعنى «${q.questionPrompt}»؟`,
      subPrompt: q.subPrompt,
      answer: q.answer,
      options: q.options,
      explanation: q.exampleEn ? `${q.exampleEn} — ${q.exampleAr || ""}` : `الإجابة الصحيحة: ${q.answer}`
    }));
    startModuleQuiz(
      isStory ? "story" : "conversation",
      item.id,
      isStory ? `اختبار استيعاب القصة: ${item.title_ar}` : `اختبار استيعاب المحادثة: ${item.title_ar}`,
      formatted
    );
  }

  function answerModuleQuizQuestion(opt){
    if(grammarQuizState.answers[grammarQuizState.idx] !== void 0) return;
    const currentQ = grammarQuizState.questions[grammarQuizState.idx];
    const isCorrect = opt === currentQ.answer;
    const updatedAnswers = [...grammarQuizState.answers, opt];
    setGrammarQuizState(prev => ({ ...prev, answers: updatedAnswers }));

    // Log event to daily activity chart!
    const todayStr = Fi(new Date());
    E(prev => ({
      ...prev,
      events: [...prev.events, {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        wordId: `${grammarQuizState.targetType}-${grammarQuizState.targetId}-${grammarQuizState.idx}`,
        kind: "quiz",
        correct: isCorrect,
        day: todayStr,
        at: Date.now()
      }]
    }));
  }

  function nextModuleQuizQuestion(){
    if(grammarQuizState.idx + 1 >= grammarQuizState.questions.length) {
      // Compute final score and mark module item completed!
      const correctCount = grammarQuizState.answers.filter((a, i) => a === grammarQuizState.questions[i]?.answer).length;
      const tType = grammarQuizState.targetType;
      const tId = grammarQuizState.targetId;
      E(prev => {
        const next = { ...prev };
        if(tType === "grammar" && tId) {
          next.completedGrammar = { ...(prev.completedGrammar || {}), [tId]: Math.max(prev.completedGrammar?.[tId] || 0, correctCount) };
        } else if(tType === "story" && tId) {
          next.completedStories = { ...(prev.completedStories || {}), [tId]: Math.max(prev.completedStories?.[tId] || 0, correctCount) };
        } else if(tType === "conversation" && tId) {
          next.completedConversations = { ...(prev.completedConversations || {}), [tId]: Math.max(prev.completedConversations?.[tId] || 0, correctCount) };
        }
        return next;
      });
      setGrammarQuizState(prev => ({ ...prev, done: !0 }));
    } else {
      setGrammarQuizState(prev => ({ ...prev, idx: prev.idx + 1 }));
    }
  }

  function toggleVerbLearned(verbId){
    E(prev => {
      const list = prev.learnedVerbs || [];
      const exists = list.includes(verbId);
      const todayStr = Fi(new Date());
      return {
        ...prev,
        learnedVerbs: exists ? list.filter(x => x !== verbId) : [...list, verbId],
        events: exists ? prev.events : [...prev.events, {
          id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          wordId: `verb-${verbId}`,
          kind: "review",
          correct: true,
          day: todayStr,
          at: Date.now()
        }]
      };
    });
  }

  // Open Smart Word Bubble for ANY clicked word in Stories or Conversations (and auto-pause active Story/Conversation playback!)
  function handleStoryOrConvWordClick(rawToken, e){
    if(e) e.stopPropagation();
    // Auto-pause Story or Conversation narration immediately when user clicks any word!
    if(storyPlayRef.current.active && !storyPlayRef.current.paused) {
      pauseStoryPlayback();
    } else if(convPlayRef.current.active && !convPlayRef.current.paused) {
      pauseConversationPlayback();
    } else {
      stopAllAudio();
    }

    const resolver = (typeof window !== "undefined" && window.resolveAnyClickedWord) || null;
    const info = resolver ? resolver(rawToken) : null;
    if(info) {
      setWordBubbleData(info);
    }
  }

  // Render interactive text where EVERY English word in Stories & Conversations is clickable to show the Smart Translation & Verb Conjugation Bubble!
  function renderInteractiveTextWithWords(text, keyWordsList=[]){
    if(!text) return "";
    const kwSet = new Set();
    (keyWordsList || []).forEach(w => {
      if(w && w.word) {
        const cl = cleanWordForSpeech(w.word).toLowerCase();
        if(cl) kwSet.add(cl);
      }
    });

    const tokens = text.split(/([a-zA-Z]+(?:'[a-zA-Z]+)?)/g);
    return tokens.map((tok, idx) => {
      if(/^[a-zA-Z]+(?:'[a-zA-Z]+)?$/.test(tok)) {
        const lower = tok.toLowerCase();
        const isKey = kwSet.has(lower);
        return c.jsx("button", {
          key: idx,
          type: "button",
          className: `interactive-any-word ${isKey ? "is-key-word" : ""}`,
          title: "اضغط لترجمة الكلمة وسماع نطقها",
          onClick: e => handleStoryOrConvWordClick(tok, e),
          children: tok
        });
      }
      return tok;
    });
  }

  // Shared 10-Question Module Quiz Runner Component (used inside Grammar, Verbs, Stories, and Conversations)
  const renderModuleQuizModalOrSection = (onBackLabel, onBackClick) => {
    const qList = grammarQuizState.questions;
    const qIdx = grammarQuizState.idx;
    const currentQ = qList[qIdx];
    const userAns = grammarQuizState.answers[qIdx];
    const isAnswered = userAns !== void 0;
    const totalCorrect = grammarQuizState.answers.filter((a, i) => a === qList[i]?.answer).length;

    if(grammarQuizState.done) {
      return c.jsxs("section", { className: "session-start completed", children: [
        c.jsx("span", { className: "session-symbol", children: c.jsx(vc, { size: 36 }) }),
        c.jsxs("span", { className: "eyebrow", children: [c.jsx("span", {}), " ASSESSMENT COMPLETED"] }),
        c.jsx("h2", { children: "أحسنت! أتممت الاختبار المكون من 10 أسئلة" }),
        c.jsxs("div", { className: "score", dir: "ltr", children: [totalCorrect, c.jsx("span", { children: ` / ${qList.length}` })] }),
        c.jsxs("p", { children: [
          "حصلت على ",
          c.jsx("strong", { children: totalCorrect }),
          " من أصل ",
          qList.length,
          ` في «${grammarQuizState.title}» (نسبة الإتقان: ${Math.round((totalCorrect / Math.max(1, qList.length)) * 100)}%). تم حفظ نتيجتك في الإحصائيات!`
        ] }),
        c.jsxs("div", { className: "result-actions", children: [
          c.jsxs("button", {
            type: "button",
            className: "btn primary",
            onClick: () => setGrammarQuizState(prev => ({ ...prev, idx: 0, answers: [], done: !1 })),
            children: ["إعادة الاختبار ", c.jsx(hc, { size: 17 })]
          }),
          c.jsxs("button", {
            type: "button",
            className: "btn secondary",
            onClick: onBackClick,
            children: [onBackLabel, " ", c.jsx(Ra, { size: 17 })]
          })
        ] })
      ] });
    }

    return c.jsxs("section", { className: "quiz-session", children: [
      c.jsxs("div", { className: "session-toolbar", children: [
        c.jsxs("span", { children: [grammarQuizState.title, " · السؤال ", c.jsx("strong", { children: qIdx + 1 }), " من ", qList.length] }),
        c.jsxs("button", { type: "button", className: "text-btn", onClick: onBackClick, children: [onBackLabel, " ", c.jsx(tt, { size: 15 })] })
      ] }),
      c.jsx("div", { className: "progress-track", children: c.jsx("span", { style: { width: `${((qIdx + 1) / Math.max(1, qList.length)) * 100}%` } }) }),
      c.jsxs("div", { className: "question-panel", children: [
        c.jsxs("div", { className: "eyebrow", children: [c.jsx("span", {}), `QUESTION ${qIdx + 1} OF ${qList.length}`] }),
        c.jsx("p", { children: currentQ?.subPrompt }),
        c.jsx("div", { className: "question-word", children: c.jsx("h2", { style: { fontSize: "22px", lineHeight: "1.65", whiteSpace: "pre-line" }, children: currentQ?.prompt }) }),
        c.jsx("div", { className: "options", children: (currentQ?.options || []).map((opt, oIdx) => {
          const isCorrect = opt === currentQ?.answer;
          const isSelected = userAns === opt;
          let cls = "option";
          if(isAnswered) {
            if(isCorrect) cls += " correct";
            else if(isSelected) cls += " incorrect";
          }
          return c.jsxs("button", {
            key: oIdx,
            type: "button",
            disabled: isAnswered,
            className: cls,
            dir: "auto",
            onClick: () => answerModuleQuizQuestion(opt),
            children: [
              c.jsx("span", { className: "option-letter", children: ["A", "B", "C", "D", "E"][oIdx] || oIdx + 1 }),
              c.jsx("span", { children: opt }),
              c.jsx("span", { className: "option-circle", children: isAnswered ? (isCorrect ? c.jsx(Lu, { size: 11 }) : isSelected ? c.jsx(tt, { size: 11 }) : null) : null })
            ]
          });
        }) }),
        isAnswered && c.jsxs("div", { className: "feedback", children: [
          c.jsx("p", { children: userAns === currentQ?.answer ? `✓ إجابة صحيحة! ${currentQ?.explanation || ""}` : `✗ إجابة غير صحيحة. الإجابة الصحيحة هي: (${currentQ?.answer}) — ${currentQ?.explanation || ""}` }),
          c.jsxs("button", {
            type: "button",
            className: "btn primary",
            onClick: nextModuleQuizQuestion,
            children: [qIdx + 1 >= qList.length ? "عرض النتيجة النهائية " : "السؤال التالي ", c.jsx(Ra, { size: 16 })]
          })
        ] })
      ] })
    ] });
  };

  const QuizModeLabels = {
    meaning_ar: "اختيار المعنى العربي",
    word_en: "اختيار الكلمة الإنجليزية",
    listening: "تحدي الاستماع الصوتي",
    sentence: "إكمال الجملة السياقية",
    spelling: "الإملاء وترتيب الحروف"
  };

  return c.jsxs("div",{className:"app-shell",children:[
    K&&c.jsx("div",{className:"sidebar-scrim",onClick:()=>k(!1)}),

    // Collapsible Sidebar Drawer
    c.jsxs("aside",{className:`sidebar ${K?"open":""}`,children:[
      c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"18px"},children:[
        c.jsxs("a",{href:"#home",onClick:v=>{v.preventDefault();Je("home");},className:"brand",style:{padding:0},"aria-label":"Lexora الرئيسية",children:[
          c.jsxs("span",{className:"brand-mark",children:[c.jsx(Ku,{size:25}),c.jsx("span",{})]}),
          c.jsxs("div",{children:[c.jsxs("strong",{dir:"ltr",children:["lexora",c.jsx("span",{children:"."})]}),c.jsx("small",{children:"ENGLISH VOCABULARY LAB"})]})
        ]}),
        c.jsx("button",{type:"button",className:"icon-btn","aria-label":"إغلاق القائمة الجانبية",onClick:()=>k(!1),children:c.jsx(tt,{size:19})})
      ]}),
      c.jsxs("div",{className:"workspace-label",children:["مساحتك للتعلّم ",c.jsx("span",{children:`النسخة الكاملة (${Qe.length} كلمة)`})]}),
      c.jsx("nav",{"aria-label":"التنقل الرئيسي",children:Li.map(v=>c.jsxs("button",{
        type:"button",
        onClick:()=>Je(v.id),
        className:`nav-item ${N===v.id?"active":""}`,
        "aria-current":N===v.id?"page":void 0,
        children:[c.jsx(v.icon,{size:20}),c.jsx("span",{children:v.label}),v.id==="dictionary"&&c.jsx("small",{children:Qe.length}),N===v.id&&c.jsx("i",{})]
      },v.id))}),
      c.jsxs("div",{className:"sidebar-note",children:[
        c.jsx("div",{className:"note-icon",children:c.jsx(Ii,{size:21})}),
        c.jsxs("h3",{children:["كلمة صغيرة.",c.jsx("br",{}),"عالم أكبر."]}),
        c.jsx("p",{children:"قائمتا أكسفورد الأساسيتان للمستويات A1 إلى C1 مدمجة بالكامل لخدمة مسارك التعليمي."}),
        c.jsxs("button",{type:"button",onClick:()=>Je("cards"),className:"text-btn",children:["نتعلّم كلمة؟ ",c.jsx(Ra,{size:16})]}),
        c.jsx("span",{className:"note-decoration",children:"Aa"})
      ]}),
      c.jsxs("div",{className:"sidebar-bottom",children:[
        c.jsxs("button",{type:"button",className:"nav-item",onClick:()=>{k(!1);A("settings");},children:[c.jsx(f1,{size:19})," إعدادات التعلّم"]}),
        c.jsxs("button",{type:"button",className:"source-link",onClick:()=>{k(!1);A("source");},children:[c.jsx(pc,{size:15})," المحتوى والمصدر ",c.jsx(at,{size:14})]}),
        c.jsxs("div",{className:"local-profile",children:[
          c.jsx("span",{className:"avatar",children:c.jsx(Ji,{size:20})}),
          c.jsxs("div",{children:[c.jsx("strong",{children:"مساحتك الشخصية"}),c.jsx("small",{children:"محفوظة على هذا الجهاز"})]}),
          c.jsx("span",{className:"local-dot",title:"بيانات محلية"})
        ]})
      ]})
    ]}),

    c.jsxs("div",{className:"main-shell",children:[
      c.jsxs("header",{className:"topbar",children:[
        c.jsxs("div",{className:"breadcrumb",children:[
          c.jsx("button",{
            type:"button",
            className:"icon-btn mobile-menu",
            "aria-label":"فتح القائمة الجانبية",
            "aria-expanded":K,
            title:"القائمة الجانبية",
            onClick:()=>k(v=>!v),
            children:c.jsx(eh,{size:22})
          }),
          c.jsxs("a",{
            href:"#home",
            onClick:e=>{e.preventDefault();Je("home");},
            className:"topbar-brand-mini",
            dir:"ltr",
            children:["lexora",c.jsx("span",{className:"green",children:"."})]
          }),
          c.jsx("span",{children:"مساحة التعلّم"}),
          c.jsx(r1,{size:14}),
          c.jsx("strong",{children:Li.find(v=>v.id===N)?.label})
        ]}),
        c.jsxs("div",{className:"top-actions",children:[
          c.jsxs("label",{className:"global-search",children:[
            c.jsx(th,{size:17}),
            c.jsx("input",{
              "aria-label":"ابحث عن كلمة أو ترجمتها",
              placeholder:"ابحث في الـ 5000 كلمة (عربي / إنجليزي)...",
              value:H.query,
              onChange:v=>{Y({...H,query:v.target.value});if(N!=="dictionary")q("dictionary");}
            }),
            H.query ? c.jsx("button",{type:"button",className:"icon-btn",style:{padding:"2px"},onClick:()=>Y({...H,query:""}),children:c.jsx(tt,{size:13})}) : c.jsx("span",{children:"EN / AR"})
          ]}),
          c.jsx("button",{
            type:"button",
            className:"icon-btn theme-btn",
            onClick:()=>E({...g,theme:g.theme==="light"?"dark":"light"}),
            "aria-label":g.theme==="light"?"تفعيل الوضع الليلي":"تفعيل الوضع النهاري",
            title:g.theme==="light"?"الوضع الليلي":"الوضع النهاري",
            children:g.theme==="light"?c.jsx(lh,{size:20}):c.jsx(uh,{size:20})
          }),
          c.jsx("button",{
            type:"button",
            className:"icon-btn settings-top-btn",
            "aria-label":"إعدادات التعلم والصوت",
            title:"إعدادات التعلم والصوت",
            onClick:()=>A("settings"),
            children:c.jsx(d1,{size:20})
          })
        ]})
      ]}),

      O&&c.jsx("div",{className:"system-banner warning",role:"status",children:O}),
      !Al&&c.jsxs("div",{className:"system-banner",role:"status",children:[
        c.jsx(nh,{size:16}),
        ` وضع عدم الاتصال نشط — الكلمات المحفوظة صوتياً (${cachedAudioCount}) والقاموس الكامل يعملون بدون إنترنت.`
      ]}),
      Ue&&c.jsxs("div",{className:"toast",role:"status",children:[
        c.jsx("span",{children:Ue}),
        c.jsx("button",{type:"button",className:"icon-btn","aria-label":"إغلاق التنبيه",onClick:()=>Ae(""),children:c.jsx(tt,{size:15})})
      ]}),

      c.jsxs("main",{children:[
        // 1. HOME VIEW
        N==="home"&&c.jsxs("div",{key:"page-home",className:"lexora-page-view",children:[
          c.jsxs("div",{className:"page-intro",children:[
            c.jsxs("div",{children:[
              c.jsxs("div",{className:"eyebrow",children:[c.jsx("span",{})," YOUR NEXT CHAPTER"]}),
              c.jsxs("h1",{children:["مفردات أكثر، ",c.jsx("em",{children:"آفاق أوسع."})]}),
              c.jsx("p",{children:"مساحتك الهادئة لبناء لغتك الإنجليزية، 5000 كلمة مختارة من أكسفورد للمستويات A1–C1."})
            ]}),
            c.jsxs("div",{className:"intro-stamp",children:[c.jsx("span",{className:"stamp-dot"})," رحلة تعلّم على إيقاعك"]})
          ]}),

          c.jsxs("section",{className:"hero",children:[
            c.jsxs("div",{className:"hero-content",children:[
              c.jsxs("span",{className:"hero-kicker",children:[c.jsx(Ii,{size:15})," قائمة Oxford 3000 & 5000 · A1–C1"]}),
              c.jsxs("h2",{children:["خطوة هادئة نحو ",c.jsx("span",{children:"طلاقةٍ أعمق."})]}),
              c.jsx("p",{children:"تعلّم أهم 5000 كلمة إنجليزية مدمجة وموحدة المعاني مع النطقين الأمريكي والبريطاني، الأمثلة السياقية المترجمة، البطاقات التفاعلية، والاختبارات المتدرجة."}),
              c.jsxs("div",{className:"hero-actions",children:[
                c.jsxs("button",{type:"button",className:"btn primary",onClick:()=>Je("dictionary"),children:["استكشف القاموس ",c.jsx(Ra,{size:16})]}),
                c.jsxs("button",{type:"button",className:"hero-secondary",onClick:()=>Je("cards"),children:["ابدأ بالبطاقات ",c.jsx(at,{size:15})]})
              ]}),
              c.jsxs("div",{className:"hero-foot",children:[
                c.jsxs("span",{children:[c.jsx(pc,{size:13})," حفظ تلقائي للصوت مدى الحياة"]}),
                c.jsx("i",{}),
                c.jsxs("span",{children:[c.jsx(Qi,{size:13})," نطق US & UK واضح"]}),
                c.jsx("i",{}),
                c.jsxs("span",{children:[c.jsx(Lu,{size:13})," يعمل على كل الأجهزة"]})
              ]})
            ]}),
            c.jsxs("div",{className:"hero-art",children:[
              c.jsx("div",{className:"orbit orbit-one"}),
              c.jsx("div",{className:"orbit orbit-two"}),
              c.jsx("span",{className:"art-star star-one","aria-hidden":"true",children:"✦"}),
              c.jsx("span",{className:"art-star star-two","aria-hidden":"true",children:"✦"}),
              c.jsxs("div",{className:"floating-tag tag-top",children:[
                c.jsx(Ii,{size:16}),
                c.jsx("span",{children:"نطق أصلي باللهجتين US & UK"})
              ]}),
              c.jsxs("div",{className:"hero-flashcard",onClick:()=>nt(Cl),style:{cursor:"pointer"},children:[
                c.jsxs("div",{className:"hero-flash-top",children:[
                  c.jsx("span",{children:"FEATURED WORD"}),
                  c.jsx(Ha,{level:Cl?.levels?.[0]||"B1"})
                ]}),
                c.jsxs("h3",{children:["achieve",c.jsx("span",{children:"ment"})]}),
                c.jsxs("div",{className:"pronunciation",children:[
                  Cl?.phonetics?.us || "/əˈtʃiːvmənt/",
                  c.jsx("span",{children:"•"}),
                  "noun"
                ]}),
                c.jsx("div",{className:"hero-ar",children:Cl?.senses?.[0]?.ar || "إنجاز؛ تحقيق"}),
                c.jsx("p",{children:"معنى موثّق مع جمل سياقية مترجمة ونطق صوتي"}),
                c.jsxs("div",{className:"hero-flash-bottom",children:[
                  da(Cl),
                  c.jsx("span",{children:"جرّب الاستماع الآن"})
                ]})
              ]}),
              c.jsxs("div",{className:"floating-tag tag-bottom",children:[
                c.jsx("span",{className:"mini-a",children:"Aa"}),
                c.jsxs("div",{children:[
                  c.jsx("strong",{children:"A1 → C1"}),
                  c.jsx("small",{children:`${Qe.length} كلمة مصنفة`})
                ]})
              ]})
            ]})
          ]}),

          c.jsxs("section",{className:"metrics","aria-label":"ملخص التقدم السريع",children:[
            c.jsxs("div",{className:"metric",children:[
              c.jsxs("div",{children:[
                c.jsx("span",{children:"إجمالي المفردات"}),
                c.jsxs("strong",{children:[Qe.length,c.jsx("small",{children:"كلمة A1–C1"})]})
              ]}),
              c.jsx("span",{className:"metric-icon sage",children:c.jsx(Ku,{})})
            ]}),
            c.jsxs("div",{className:"metric",children:[
              c.jsxs("div",{children:[
                c.jsx("span",{children:"كلمات أتقنتها"}),
                c.jsxs("strong",{children:[be.learned,c.jsx("small",{children:`من ${Qe.length}`})]})
              ]}),
              c.jsx("span",{className:"metric-icon lilac",children:c.jsx(vc,{})})
            ]}),
            c.jsxs("div",{className:"metric",children:[
              c.jsxs("div",{children:[
                c.jsx("span",{children:"دقة الاختبارات"}),
                c.jsxs("strong",{children:[be.accuracy!==null?`${be.accuracy}%`:"—",c.jsx("small",{children:`${be.quiz} إجابة`})]})
              ]}),
              c.jsx("span",{className:"metric-icon peach",children:c.jsx(yc,{})})
            ]}),
            c.jsxs("div",{className:"metric",children:[
              c.jsxs("div",{children:[
                c.jsx("span",{children:"المفضلة المحفوظة"}),
                c.jsxs("strong",{children:[g.favorites.length,c.jsx("small",{children:`${be.seen} مستكشفة`})]})
              ]}),
              c.jsx("span",{className:"metric-icon sand",children:c.jsx(s1,{})})
            ]})
          ]}),

          c.jsxs("section",{className:"home-columns",children:[
            c.jsxs("div",{children:[
              c.jsxs("div",{className:"section-heading",children:[
                c.jsxs("div",{children:[
                  c.jsx("h2",{children:"اختر مسارك التعليمي اليوم"}),
                  c.jsx("p",{children:"ثلاث مساحات متكاملة لبناء حصيلتك اللغوية وتثبيتها في الذاكرة."})
                ]}),
                c.jsx("span",{className:"section-number",children:"01 / PATHS"})
              ]}),
              c.jsxs("div",{className:"paths",children:[
                c.jsxs("button",{type:"button",className:"path-card",onClick:()=>Je("dictionary"),children:[
                  c.jsx("span",{className:"path-icon sage",children:c.jsx(Ku,{size:22})}),
                  c.jsxs("span",{className:"path-content",children:[
                    c.jsx("small",{children:"01 · THE DICTIONARY"}),
                    c.jsx("strong",{children:"القاموس التفاعلي الشامل"}),
                    c.jsx("span",{children:"تصفح الـ 5000 كلمة في صفحات منظمة (24 كلمة لكل صفحة) مع النطقين الأمريكي والبريطاني والأمثلة."})
                  ]}),
                  c.jsx("span",{className:"path-arrow",children:c.jsx(Ra,{size:15})})
                ]}),
                c.jsxs("button",{type:"button",className:"path-card",onClick:()=>Je("cards"),children:[
                  c.jsx("span",{className:"path-icon lilac",children:c.jsx(ki,{size:22})}),
                  c.jsxs("span",{className:"path-content",children:[
                    c.jsx("small",{children:"02 · FLASHCARDS"}),
                    c.jsx("strong",{children:"البطاقات التعليمية الذكية"}),
                    c.jsx("span",{children:"درّب ذاكرتك البصرية والسمعية عبر تقليب البطاقات وتقييم مدى إتقانك لكل مفردة."})
                  ]}),
                  c.jsx("span",{className:"path-arrow",children:c.jsx(Ra,{size:15})})
                ]}),
                c.jsxs("button",{type:"button",className:"path-card",onClick:()=>Je("quiz"),children:[
                  c.jsx("span",{className:"path-icon peach",children:c.jsx(Ji,{size:22})}),
                  c.jsxs("span",{className:"path-content",children:[
                    c.jsx("small",{children:"03 · ADAPTIVE QUIZZES"}),
                    c.jsx("strong",{children:"مركز الاختبارات المتدرجة"}),
                    c.jsx("span",{children:"اختبر نفسك في 5 أنماط تفاعلية و3 مستويات صعوبة مع تحكم كامل بوقت السؤال ومراجعة الإجابات."})
                  ]}),
                  c.jsx("span",{className:"path-arrow",children:c.jsx(Ra,{size:15})})
                ]}),
                c.jsxs("button",{type:"button",className:"path-card",onClick:()=>Je("grammar"),children:[
                  c.jsx("span",{className:"path-icon sand",children:c.jsx(v1,{size:22})}),
                  c.jsxs("span",{className:"path-content",children:[
                    c.jsx("small",{children:"04 · GRAMMAR & VERB CONJUGATIONS"}),
                    c.jsx("strong",{children:"موسوعة القواعد والتصاريف الثلاثة للأفعال"}),
                    c.jsx("span",{children:"شرح مفصل لجميع قواعد الإنجليزية (A1–C1) مع جدول التصاريف الثلاثة (V1, V2, V3) لـ 1244 فعلاً واختبارات لكل قاعدة."})
                  ]}),
                  c.jsx("span",{className:"path-arrow",children:c.jsx(Ra,{size:15})})
                ]}),
                c.jsxs("button",{type:"button",className:"path-card",onClick:()=>Je("immersion"),children:[
                  c.jsx("span",{className:"path-icon sage",children:c.jsx(d1,{size:22})}),
                  c.jsxs("span",{className:"path-content",children:[
                    c.jsx("small",{children:"05 · 500 STORIES & 500 CONVERSATIONS"}),
                    c.jsx("strong",{children:"مكتبة القصص والمحادثات التفاعلية الشاملة"}),
                    c.jsx("span",{children:"500 قصة قراءة و500 محادثة استماع (5 دقائق لـ A1–B1 و10 دقائق لـ B2–C1) مع اختبار من 10 أسئلة بعد كل نص."})
                  ]}),
                  c.jsx("span",{className:"path-arrow",children:c.jsx(Ra,{size:15})})
                ]})
              ]})
            ]}),
            c.jsxs("aside",{className:"daily-card",children:[
              c.jsxs("div",{className:"daily-top",children:[
                c.jsxs("span",{className:"eyebrow",children:[c.jsx("span",{})," DAILY RHYTHM"]}),
                c.jsx(yc,{size:16})
              ]}),
              c.jsx("h2",{children:"إيقاعك اليومي"}),
              c.jsx("p",{children:"مراجعات البطاقات وأسئلة الاختبارات المنجزة اليوم"}),
              c.jsx("div",{className:"goal-ring",style:{"--progress":`${goalPct}%`},children:c.jsxs("div",{children:[
                c.jsxs("strong",{children:[be.today,c.jsx("span",{children:`/${g.goal}`})]}),
                c.jsx("small",{children:"خطوة اليوم"})
              ]})}),
              c.jsx("p",{className:"goal-note",children:be.today>=g.goal?"أحسنت! أتممت هدفك اليومي بنجاح 🎉":`تبقّى لك ${Math.max(0,g.goal-be.today)} خطوات لإتمام هدفك اليومي.`}),
              c.jsxs("button",{type:"button",className:"btn",onClick:()=>Je("quiz"),children:["أكمل هدف اليوم ",c.jsx(Ra,{size:14})]})
            ]})
          ]}),

          c.jsxs("section",{className:"level-section",children:[
            c.jsxs("div",{className:"section-heading",children:[
              c.jsxs("div",{children:[
                c.jsx("h2",{children:"تصفح حسب المستوى اللغوي (CEFR)"}),
                c.jsx("p",{children:"انتقل مباشرة إلى مفردات مستواك من المبتدئ A1 وحتى المتقدم C1."})
              ]}),
              c.jsxs("button",{type:"button",className:"text-btn",onClick:()=>{Y({query:"",level:"",pos:"",favoritesOnly:!1});Je("dictionary");},children:["عرض القاموس كاملاً ",c.jsx(Ra,{size:14})]})
            ]}),
            c.jsx("div",{className:"level-grid",children:gc.map(lvl => {
              const info = be.byLevel[lvl] || { total: 0, learned: 0 };
              const ratio = info.total ? info.learned / info.total : 0;
              const filledDashes = info.learned > 0 ? Math.max(1, Math.round(ratio * 5)) : 0;
              return c.jsxs("button",{
                key:lvl,
                type:"button",
                className:`level-card level-card-${lvl}`,
                onClick:()=>{Y({query:"",level:lvl,pos:"",favoritesOnly:!1});Je("dictionary");},
                children:[
                  c.jsxs("div",{children:[
                    c.jsx(Ha,{level:lvl}),
                    c.jsx(at,{size:15})
                  ]}),
                  c.jsxs("h3",{children:[`المستوى ${lvl} · `,LevelNamesAr[lvl]]}),
                  c.jsxs("p",{children:[
                    `${info.total} كلمة`,
                    c.jsx("span",{children:"•"}),
                    `أتقنت ${info.learned}`
                  ]}),
                  c.jsx("div",{className:"level-dashes",children:[0,1,2,3,4].map(dIdx => c.jsx("i",{key:dIdx,className:dIdx<filledDashes?"filled":""}))})
                ]
              });
            })})
          ]}),

          c.jsxs("footer",{children:[
            c.jsxs("div",{children:[
              c.jsxs("span",{dir:"ltr",children:["lexora",c.jsx("span",{className:"green",children:"."})]}),
              c.jsx("small",{children:"Oxford 3000™ & 5000™ Vocabulary Lab"})
            ]}),
            c.jsxs("button",{type:"button",onClick:()=>A("source"),children:[c.jsx(pc,{size:14})," المحتوى والمصدر · يعمل بالكامل مع الإنترنت وبدونه"]})
          ]})
        ]}),

        // 2. DICTIONARY VIEW
        N==="dictionary"&&c.jsxs("div",{key:"page-dictionary",className:"lexora-page-view",children:[
          c.jsx(xc,{eyebrow:"THE WORD COLLECTION",title:"قاموسك، بحجم طموحك.",description:"تصفح وابحث في 5000 كلمة من Oxford 3000 و 5000 مع الترجمة العربية الكاملة والنطق باللهجتين."}),
          c.jsxs("div",{className:"collection-heading",children:[
            c.jsxs("span",{children:[c.jsx("strong",{children:el.length})," من ",Qe.length," كلمة موحدة (A1–C1) · صفحة ",safeDictPage," من ",totalDictPages]}),
            c.jsxs("span",{className:"muted",children:[c.jsx(pc,{size:15})," 24 كلمة في كل صفحة (12 يميناً و12 يساراً) · نطق US & UK"]})
          ]}),
          It,
          el.length ? c.jsxs(c.Fragment,{children:[
            c.jsx("div",{className:"word-grid dict-two-cols",children:currentDictSlice.map(Iu)}),
            c.jsxs("nav",{className:"pagination","aria-label":"تنقل صفحات القاموس",children:[
              c.jsxs("button",{
                type:"button",
                className:"btn secondary",
                disabled:safeDictPage <= 1,
                onClick:()=>{Xe(p=>Math.max(1,p-1));window.scrollTo({top:0,behavior:"smooth"});},
                children:[c.jsx(Wm,{size:15})," السابق"]
              }),
              c.jsxs("span",{children:[
                "صفحة ",
                c.jsx("strong",{children:safeDictPage}),
                " من ",
                c.jsx("strong",{children:totalDictPages}),
                ` (عرض ${(safeDictPage-1)*DICT_PAGE_SIZE + 1}–${Math.min(el.length, safeDictPage*DICT_PAGE_SIZE)} من ${el.length})`
              ]}),
              c.jsxs("button",{
                type:"button",
                className:"btn secondary",
                disabled:safeDictPage >= totalDictPages,
                onClick:()=>{Xe(p=>Math.min(totalDictPages,p+1));window.scrollTo({top:0,behavior:"smooth"});},
                children:["التالي ",c.jsx(r1,{size:15})]
              })
            ]})
          ]}) : c.jsx(vh,{
            title:"لم نجد كلمات مطابقة",
            text:"جرّب البحث بكلمة أخرى بالعربية أو الإنجليزية، أو قم بمسح الفلاتر الحالية.",
            action:c.jsx("button",{type:"button",className:"btn secondary",onClick:clearAllFilters,children:"عرض كل الكلمات"})
          })
        ]}),

        // 3. FLASHCARDS VIEW
        N==="cards"&&c.jsxs("div",{key:"page-cards",className:"lexora-page-view",children:[
          c.jsx(xc,{eyebrow:"MAKE IT STICK",title:"كلمة على الوجه. معرفة في ذهنك.",description:"حاول تذكّر المعنى قبل قلب البطاقة، واستمع للنطقين الأمريكي والبريطاني."}),
          (!xe.length||M)&&It,
          xe.length ? (M ? c.jsxs("section",{className:"session-start completed",children:[
            c.jsx("span",{className:"session-symbol",children:c.jsx(vc,{size:36})}),
            c.jsxs("span",{className:"eyebrow",children:[c.jsx("span",{})," A STEP WELL TAKEN"]}),
            c.jsx("h2",{children:"معرفة جديدة تستحق الاحتفال."}),
            c.jsxs("div",{className:"score",dir:"ltr",children:[oe,c.jsx("span",{children:` / ${xe.length}`})]}),
            c.jsxs("p",{children:["راجعت ",xe.length," بطاقات تعليمية، وأتقنت ",oe," منها في هذه الجلسة."]}),
            c.jsxs("div",{className:"result-actions",children:[
              c.jsxs("button",{type:"button",className:"btn primary",disabled:!el.length,onClick:ll,children:["جلسة بطاقات جديدة ",c.jsx(hc,{size:17})]}),
              c.jsxs("button",{type:"button",className:"btn secondary",onClick:()=>Je("stats"),children:["شاهد إحصائياتك ",c.jsx(Ra,{size:17})]})
            ]})
          ]}) : c.jsxs("section",{className:"flash-session",children:[
            c.jsxs("div",{className:"session-toolbar",children:[
              c.jsxs("span",{children:["البطاقة ",c.jsx("strong",{children:Ce+1})," من ",xe.length]}),
              c.jsxs("button",{type:"button",className:"text-btn",onClick:()=>Ke([]),children:["إنهاء الجلسة ",c.jsx(tt,{size:15})]})
            ]}),
            c.jsx("div",{className:"progress-track",children:c.jsx("span",{style:{width:`${((Ce+1)/xe.length)*100}%`}})}),
            c.jsxs("article",{
              className:`flash-card ${Be?"flipped":""}`,
              onClick:()=>b(prev=>!prev),
              style:{cursor:"pointer"},
              children:[
                c.jsxs("div",{className:"flash-top",children:[
                  c.jsxs("span",{className:"eyebrow",children:[c.jsx("span",{}), Be ? "MEANING & EXAMPLES" : "WORD & PRONUNCIATION"]}),
                  c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[
                    xe[Ce]?.levels?.map(lvl => c.jsx(Ha,{level:lvl},lvl)),
                    xe[Ce]&&it(xe[Ce])
                  ]})
                ]}),
                !Be ? c.jsxs("div",{className:"flash-main",children:[
                  c.jsx("h2",{dir:"ltr",children:xe[Ce]?.word}),
                  c.jsxs("div",{className:"pronunciation",dir:"ltr",children:[
                    xe[Ce]?.phonetics?.us || `/${cleanWordForSpeech(xe[Ce]?.word)}/`,
                    c.jsx("span",{children:"•"}),
                    [...new Set((xe[Ce]?.senses||[]).flatMap(s=>s.pos||[]))].map(p=>Zu[p]||p).join(" / ")
                  ]}),
                  c.jsx("div",{className:"centered",children:da(xe[Ce], !0)}),
                  c.jsx("p",{children:"اضغط على البطاقة أو زر القلب بالأسفل لإظهار المعنى والأمثلة السياقية"})
                ]}) : c.jsxs("div",{className:"flash-main",style:{alignItems:"stretch",justifyContent:"flex-start"},children:[
                  c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"10px",marginBottom:"16px",borderBottom:"1px solid var(--border)",paddingBottom:"12px"},dir:"ltr",children:[
                    c.jsx("span",{className:"flash-word-small",style:{margin:0},children:xe[Ce]?.word}),
                    da(xe[Ce])
                  ]}),
                  c.jsx("div",{className:"sense-list",children:(xe[Ce]?.senses||[]).map((s, sIdx) => c.jsxs("div",{key:sIdx,children:[
                    c.jsx(Ha,{level:s.level}),
                    c.jsxs("div",{style:{flex:1},children:[
                      c.jsx("small",{children:(s.pos||[]).map(p=>Zu[p]||p).join(" / ")}),
                      c.jsx("strong",{children:s.ar || s.meaning_ar}),
                      s.example_en&&c.jsxs("div",{className:"example-collapse-card",style:{marginTop:"6px"},onClick:e=>e.stopPropagation(),children:[
                        c.jsxs("div",{className:"example-en-line",dir:"ltr",children:[
                          c.jsx("span",{children:renderHighlightedSentence(s.example_en, xe[Ce]?.word)}),
                          renderSingleSentenceAudioBtn(s.example_en)
                        ]}),
                        s.example_ar&&c.jsx("div",{className:"example-ar-line",children:s.example_ar})
                      ]})
                    ]})
                  ]}))})
                ]}),
                c.jsxs("button",{
                  type:"button",
                  className:"flip-btn",
                  onClick:e=>{e.stopPropagation();b(prev=>!prev);},
                  children:[c.jsx(hc,{size:15}), Be ? "العودة إلى وجه الكلمة" : "اقلب البطاقة لإظهار المعنى والأمثلة"]
                })
              ]
            }),
            c.jsxs("div",{className:"rating-buttons",children:[
              c.jsxs("button",{type:"button",className:"btn secondary",disabled:!Be,onClick:()=>Ju(!1),children:[c.jsx(tt,{size:17})," أحتاج مراجعتها"]}),
              c.jsxs("button",{type:"button",className:"btn primary",disabled:!Be,onClick:()=>Ju(!0),children:[c.jsx(Lu,{size:17})," أعرفها بالتأكيد"]})
            ]}),
            c.jsx("p",{className:"session-hint",children:Be ? "اختر تقييمك للكلمة للانتقال إلى البطاقة التالية." : "اقلب البطاقة أولاً لتفعيل أزرار التقييم (أو اضغط مفتاح المسافة Space)."})
          ]})) : c.jsxs("section",{className:"session-start",children:[
            c.jsx("span",{className:"session-symbol",children:c.jsx(ki,{size:36})}),
            c.jsxs("span",{className:"eyebrow",children:[c.jsx("span",{})," READY TO DRILL"]}),
            c.jsx("h2",{children:"تدرّب بذكاء وسرعة."}),
            c.jsxs("p",{children:[
              "المجموعة المختارة تضم ",
              c.jsx("strong",{children:el.length}),
              " كلمة. ستبدأ جلسة تفاعلية مكونة من ",
              c.jsx("strong",{children:Math.min(flashcardCount, el.length)}),
              " بطاقات مع النطق والأمثلة."
            ]}),
            c.jsxs("button",{type:"button",className:"btn primary",disabled:!el.length,onClick:ll,children:["ابدأ جلسة البطاقات ",c.jsx(Ra,{size:17})]}),
            c.jsx("small",{children:"تُحفظ الكلمات التي تتقنها تلقائياً في سجل إحصائياتك."})
          ]})
        ]}),

        // 4. QUIZ VIEW
        N==="quiz"&&c.jsxs("div",{key:"page-quiz",className:"lexora-page-view",children:[
          c.jsx(xc,{eyebrow:"TEST YOUR MASTERY",title:"قيّم حفظك باختبار ذكي.",description:"5 أنماط تفاعلية مع 3 درجات صعوبة وتحكم مرن بالوقت في الوضع الصعب."}),
          (!o.length||ue)&&It,
          o.length ? (ue ? c.jsxs(c.Fragment,{children:[
            c.jsxs("section",{className:"session-start completed",children:[
              c.jsx("span",{className:"session-symbol peach",children:c.jsx(vc,{size:36})}),
              c.jsxs("span",{className:"eyebrow",children:[c.jsx("span",{})," QUIZ COMPLETED"]}),
              c.jsx("h2",{children:"أتممت الاختبار بنجاح!"}),
              c.jsxs("div",{className:"score",dir:"ltr",children:[
                Q.filter((ans,idx)=>ans===o[idx]?.answer).length,
                c.jsx("span",{children:` / ${o.length}`})
              ]}),
              c.jsxs("p",{children:[
                "أجبت بشكل صحيح على ",
                c.jsx("strong",{children:Q.filter((ans,idx)=>ans===o[idx]?.answer).length}),
                " من أصل ",
                o.length,
                " أسئلة (نسبة الدقة: ",
                Math.round((Q.filter((ans,idx)=>ans===o[idx]?.answer).length/o.length)*100),
                "%)."
              ]}),
              c.jsxs("div",{className:"result-actions",children:[
                c.jsxs("button",{type:"button",className:"btn primary",disabled:!el.length,onClick:kt,children:["اختبار جديد ",c.jsx(hc,{size:17})]}),
                c.jsxs("button",{type:"button",className:"btn secondary",onClick:()=>Je("stats"),children:["شاهد إحصائياتك ",c.jsx(Ra,{size:17})]})
              ]})
            ]}),
            c.jsxs("section",{className:"answer-review",children:[
              c.jsx("h3",{children:"مراجعة الإجابات التفصيلية"}),
              o.map((qItem, idx) => {
                const userAns = Q[idx];
                const isRight = userAns === qItem.answer;
                return c.jsxs("div",{key:idx,className:"review-row",children:[
                  c.jsx("span",{className:`review-status ${isRight?"":"incorrect"}`,children:isRight?c.jsx(Lu,{size:15}):c.jsx(tt,{size:15})}),
                  c.jsx("strong",{dir:"ltr",onClick:()=>nt(qItem.wordItem),style:{cursor:"pointer"},children:qItem.word}),
                  c.jsxs("div",{children:[
                    c.jsx("span",{children:qItem.wordItem?.senses?.[0]?.ar || qItem.answer}),
                    !isRight&&c.jsx("del",{children:userAns==="__TIMEOUT__"?"انتهى الوقت المحدد":`إجابتك: ${userAns}`})
                  ]}),
                  da(qItem.wordItem)
                ]});
              })
            ]})
          ]}) : c.jsxs("section",{className:"quiz-session",children:[
            c.jsxs("div",{className:"session-toolbar",children:[
              c.jsxs("span",{children:["السؤال ",c.jsx("strong",{children:z+1})," من ",o.length]}),
              o[z]?.difficulty==="difficult"&&c.jsxs("span",{className:"quiz-timer-pill",children:[
                c.jsx(ClockIcon,{size:14}),
                ` الوقت المتبقي: ${quizTimer} ثانية (من ${g.quizTimeLimit||12}ث)`
              ]}),
              c.jsxs("button",{type:"button",className:"text-btn",onClick:()=>S([]),children:["إنهاء الاختبار ",c.jsx(tt,{size:15})]})
            ]}),
            c.jsx("div",{className:"progress-track",children:c.jsx("span",{style:{width:`${((z+1)/o.length)*100}%`}})}),
            
            c.jsxs("div",{className:"question-panel",children:[
              c.jsxs("div",{className:"eyebrow",children:[
                c.jsx("span",{}),
                `QUESTION ${z+1} · ${(o[z]?.mode||"meaning_ar").toUpperCase()}`
              ]}),
              c.jsx("p",{children:QuizModeLabels[o[z]?.mode] || "اختر الإجابة الصحيحة"}),
              c.jsxs("div",{className:"question-word",children:[
                c.jsx("h2",{
                  dir:o[z]?.mode==="meaning_ar"||o[z]?.mode==="sentence"?"ltr":"rtl",
                  style:o[z]?.mode==="sentence"?{fontSize:"24px",lineHeight:"1.6"}:void 0,
                  children:o[z]?.questionPrompt
                }),
                // Show audio buttons ONLY in 'listening' mode OR 'easy' mode (NEVER in medium/difficult except listening)
                ((o[z]?.mode==="listening") || (o[z]?.difficulty==="easy" && o[z]?.mode!=="sentence" && o[z]?.wordItem)) && da(o[z]?.wordItem, !0)
              ]}),
              c.jsxs("div",{className:"question-meta",children:[
                o[z]?.level&&c.jsx(Ha,{level:o[z]?.level}),
                c.jsx("span",{children:o[z]?.subPrompt})
              ]}),

              // Mode: Spelling Letter Unscramble (Red for wrong slots + Green for correct answer)
              o[z]?.mode==="spelling" ? c.jsxs("div",{children:[
                c.jsx("div",{className:"quiz-letters-container",children:o[z]?.scrambledLetters.map((ltr,idx)=>{
                  const isAnswered = Q[z] !== void 0;
                  const isCorrect = Q[z] === o[z]?.answer;
                  const hasChar = spellingInput.length > idx;
                  let slotCls = "quiz-letter-slot";
                  if(isAnswered) {
                    slotCls += isCorrect ? " correct" : " wrong";
                  } else if(hasChar) {
                    slotCls += " filled";
                  }
                  return c.jsx("div",{key:idx,className:slotCls,children:hasChar?o[z]?.scrambledLetters[spellingInput[idx]]:""});
                })}),
                (Q[z]!==void 0 && Q[z]!==o[z]?.answer) && c.jsxs("div",{className:"spelling-correct-box",dir:"ltr",children:[
                  c.jsx("span",{dir:"rtl",style:{fontSize:"11px",marginLeft:"8px"},children:"الإجابة الصحيحة:"}),
                  o[z]?.answer.split("").map((chLtr, cIdx) => c.jsx("span",{key:cIdx,className:"quiz-letter-slot correct",children:chLtr}))
                ]}),
                Q[z]===void 0 && c.jsx("div",{className:"quiz-letters-container",children:o[z]?.scrambledLetters.map((ltr,idx)=>c.jsx("button",{type:"button",key:idx,disabled:spellingInput.includes(idx),className:`quiz-letter-btn ${spellingInput.includes(idx)?"used":""}`,onClick:()=>handleSpellingLetterClick(ltr,idx),children:ltr}))}),
                (spellingInput.length > 0 && Q[z]===void 0)&&c.jsx("div",{style:{marginTop:"10px"},children:c.jsxs("button",{type:"button",className:"btn secondary",style:{minHeight:"34px",padding:"6px 14px",fontSize:"10px"},onClick:handleSpellingBackspace,children:["تراجع عن حرف ",c.jsx(hc,{size:13})]})})
              ]}) : c.jsx("div",{className:"options",children:o[z]?.options?.map((opt,idx)=>{
                const isAnswered = Q[z] !== void 0;
                const isSelected = Q[z] === opt;
                const isCorrect = opt === o[z]?.answer;
                let optClass = "option";
                if(isAnswered) {
                  if(isCorrect) optClass += " correct";
                  else if(isSelected) optClass += " incorrect";
                }
                const isEnOption = o[z]?.mode==="word_en"||o[z]?.mode==="listening"||o[z]?.mode==="sentence";
                return c.jsxs("button",{
                  type:"button",
                  key:idx,
                  disabled:isAnswered,
                  className:optClass,
                  dir:isEnOption?"ltr":"rtl",
                  style:isEnOption?{textAlign:"left"}:void 0,
                  onClick:()=>ku(opt),
                  children:[
                    c.jsx("span",{className:"option-letter",children:["A","B","C","D","E","F"][idx]||idx+1}),
                    c.jsx("span",{children:opt}),
                    c.jsx("span",{className:"option-circle",children:isAnswered?(isCorrect?c.jsx(Lu,{size:11}):isSelected?c.jsx(tt,{size:11}):null):null})
                  ]
                });
              })}),

              Q[z]!==void 0 && c.jsxs("div",{className:"feedback",children:[
                c.jsx("p",{children:
                  Q[z]===o[z]?.answer
                    ? `✓ إجابة صحيحة وممتازة! (${o[z]?.word})`
                    : Q[z]==="__TIMEOUT__"
                      ? `⏰ انتهى الوقت المحدد! الإجابة الصحيحة هي: ${o[z]?.answer}`
                      : `✗ إجابة غير صحيحة. الإجابة الصحيحة هي: ${o[z]?.answer}`
                }),
                o[z]?.exampleEn&&c.jsxs("div",{className:"example-collapse-card",style:{marginBottom:"15px",textAlign:"right"},children:[
                  c.jsxs("div",{className:"example-en-line",dir:"ltr",children:[
                    c.jsx("span",{children:renderHighlightedSentence(o[z]?.exampleEn, o[z]?.word)}),
                    o[z]?.difficulty==="easy" && renderSingleSentenceAudioBtn(o[z]?.exampleEn)
                  ]}),
                  o[z]?.exampleAr&&c.jsx("div",{className:"example-ar-line",children:o[z]?.exampleAr})
                ]}),
                c.jsxs("button",{type:"button",className:"btn primary",onClick:rt,children:[
                  z+1>=o.length ? "عرض النتيجة النهائية " : "السؤال التالي ",
                  c.jsx(Ra,{size:16})
                ]})
              ]})
            ]})
          ]})) : c.jsxs("section",{className:"session-start",children:[
            c.jsx("span",{className:"session-symbol peach",children:c.jsx(Ji,{size:36})}),
            c.jsxs("span",{className:"eyebrow",children:[c.jsx("span",{})," CHALLENGE MODE"]}),
            c.jsx("h2",{children:"جاهز لاختبار معلوماتك؟"}),
            c.jsxs("p",{children:[
              "سيتم توليد اختبار مخصص من ",
              c.jsx("strong",{children:Math.min(g.quizCount, el.length)}),
              " أسئلة بمستوى صعوبة (",
              g.quizDifficulty==="easy"?"سهل - Easy":g.quizDifficulty==="medium"?"متوسط - Medium":`صعب - Difficult · ${g.quizTimeLimit||12} ثانية لكل سؤال`,
              ") عبر ",
              g.quizModes.length,
              " أنماط مختارة."
            ]}),
            c.jsxs("button",{type:"button",className:"btn primary",disabled:!el.length,onClick:kt,children:["ابدأ الاختبار الآن ",c.jsx(Ra,{size:17})]}),
            c.jsx("small",{children:g.quizDifficulty==="difficult"?"يمكنك تعديل وقت السؤال من زر الوقت في شريط التخصيص أعلاه.":"يمكنك تفعيل الوضع الصعب لإضافة مؤقت زمني قابل للتحكم."})
          ]})
        ]}),

        // ============================================================
        // 5. GRAMMAR & VERB CONJUGATIONS VIEW (القواعد والتصاريف الثلاثة)
        // ============================================================
        N==="grammar"&&c.jsxs("div",{key:"page-grammar",className:"lexora-page-view",children:[
          c.jsx(xc,{
            eyebrow:"GRAMMAR & VERB MASTERY",
            title:"قواعد اللغة وتصاريف الأفعال، بوضوح تام.",
            description:"موسوعة شاملة لجميع قواعد الإنجليزية للمستويات (A1–C1) مع جدول التصاريف الثلاثة (V1, V2, V3) لـ 1244 فعلاً واختبارات تطبيقية."
          }),

          // Sub-navigation switcher: Grammar Rules vs Verb Conjugations
          c.jsxs("div",{className:"module-tabs-bar",children:[
            c.jsxs("button",{
              type:"button",
              className:`module-tab-btn ${grammarSubTab==="rules"?"active":""}`,
              onClick:()=>{setGrammarSubTab("rules");setSelectedGrammarLesson(null);setGrammarQuizState({active:!1,questions:[],idx:0,answers:[],done:!1,title:"",targetType:"",targetId:""});},
              children:[c.jsx(Ku,{size:18}), ` موسوعة القواعد الشاملة (${grammarLessonsList.length} درساً · A1–C1)`]
            }),
            c.jsxs("button",{
              type:"button",
              className:`module-tab-btn ${grammarSubTab==="verbs"?"active":""}`,
              onClick:()=>{setGrammarSubTab("verbs");setSelectedGrammarLesson(null);setGrammarQuizState({active:!1,questions:[],idx:0,answers:[],done:!1,title:"",targetType:"",targetId:""});},
              children:[c.jsx(v1,{size:18}), ` التصاريف الثلاثة للأفعال (${verbConjugationsList.length} فعلاً · V1 / V2 / V3)`]
            })
          ]}),

          grammarQuizState.active ? renderModuleQuizModalOrSection(
            selectedGrammarLesson ? "العودة إلى شرح القاعدة" : "العودة إلى القائمة",
            () => setGrammarQuizState({active:!1,questions:[],idx:0,answers:[],done:!1,title:"",targetType:"",targetId:""})
          ) : grammarSubTab === "rules" ? (
            selectedGrammarLesson ? c.jsxs("section",{key:`gram-detail-${selectedGrammarLesson.id}`,className:"grammar-detail-card lexora-subview-transition",children:[
              c.jsxs("div",{className:"session-toolbar",children:[
                c.jsxs("button",{type:"button",className:"btn secondary",onClick:()=>setSelectedGrammarLesson(null),children:[c.jsx(Wm,{size:15})," العودة إلى جميع القواعد"]}),
                c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[
                  c.jsx(Ha,{level:selectedGrammarLesson.level}),
                  g.completedGrammar?.[selectedGrammarLesson.id]!==void 0 && c.jsxs("span",{className:"badge level-A1",children:[`✓ مكتمل · ${g.completedGrammar[selectedGrammarLesson.id]}/10`]})
                ]})
              ]}),
              c.jsxs("div",{className:"grammar-detail-header",children:[
                c.jsx("h2",{children:selectedGrammarLesson.title_ar}),
                c.jsx("p",{dir:"ltr",className:"grammar-en-subtitle",children:selectedGrammarLesson.title_en}),
                c.jsx("p",{className:"grammar-summary-lead",children:selectedGrammarLesson.summary_ar})
              ]}),
              c.jsxs("div",{className:"grammar-section-block",children:[
                c.jsx("h3",{children:"1. المفهوم العام والشرح التفصيلي للقاعدة"}),
                c.jsx("p",{children:selectedGrammarLesson.explanation_ar})
              ]}),
              c.jsxs("div",{className:"grammar-section-block",children:[
                c.jsx("h3",{children:"2. متى نستخدم هذه القاعدة؟ (حالات الاستخدام بالتفصيل)"}),
                c.jsx("div",{className:"grammar-examples-list",children:(selectedGrammarLesson.uses_list||[]).map((uItem, uIdx)=>c.jsx("div",{key:uIdx,className:"example-collapse-card",style:{fontSize:"13.5px",fontWeight:500,color:"var(--text)"},children:uItem}))})
              ]}),
              c.jsxs("div",{className:"grammar-section-block",children:[
                c.jsx("h3",{children:"3. الكلمات والعبارات الدالة (Signal Words & Time Markers)"}),
                c.jsx("div",{className:"grammar-examples-list",children:(selectedGrammarLesson.signal_words_list||[selectedGrammarLesson.markers]).map((mItem, mIdx)=>c.jsx("div",{key:mIdx,className:"example-collapse-card",dir:"auto",style:{fontSize:"13px",color:"var(--green-dark)",fontWeight:600},children:mItem}))})
              ]}),
              c.jsxs("div",{className:"grammar-formula-box",children:[
                c.jsx("h3",{children:"4. القاعدة والصيغة التركيبية المفصلة (Formulas)"}),
                c.jsx("pre",{dir:"ltr",children:selectedGrammarLesson.formula})
              ]}),
              selectedGrammarLesson.golden_notes&&c.jsxs("div",{className:"grammar-section-block",children:[
                c.jsx("h3",{children:"5. ملاحظات ذهبية وحالات خاصة (Golden Rules)"}),
                c.jsx("div",{className:"example-collapse-card",style:{background:"var(--hero)",borderColor:"#cfe0c9",fontSize:"13.5px",color:"var(--text)"},children:selectedGrammarLesson.golden_notes})
              ]}),
              c.jsxs("div",{className:"grammar-section-block",children:[
                c.jsx("h3",{children:"6. أمثلة تطبيقية شاملة ومترجمة بالصوت"}),
                c.jsx("div",{className:"grammar-examples-list",children:(selectedGrammarLesson.examples||[]).map((ex, idx)=>c.jsxs("div",{key:idx,className:"example-collapse-card",children:[
                  c.jsxs("div",{className:"example-en-line",dir:"ltr",children:[
                    c.jsx("strong",{children:ex.en}),
                    renderSingleSentenceAudioBtn(ex.en)
                  ]}),
                  c.jsx("div",{className:"example-ar-line",children:ex.ar})
                ]}))})
              ]}),
              (selectedGrammarLesson.mistakes && selectedGrammarLesson.mistakes.length > 0)&&c.jsxs("div",{className:"grammar-section-block",children:[
                c.jsx("h3",{children:"7. انتبه! أخطاء شائعة وتصحيحها"}),
                c.jsx("div",{className:"grammar-mistakes-list",children:selectedGrammarLesson.mistakes.map((m, idx)=>c.jsxs("div",{key:idx,className:"mistake-compare-card",children:[
                  c.jsxs("div",{className:"mistake-wrong",dir:"ltr",children:["✗ خطأ شائع: ", c.jsx("del",{children:m.wrong})]}),
                  c.jsxs("div",{className:"mistake-right",dir:"ltr",children:["✓ الصواب: ", c.jsx("strong",{children:m.right})]}),
                  c.jsx("small",{children:`💡 السبب النحوي: ${m.note}`})
                ]}))})
              ]}),
              c.jsxs("div",{className:"module-quiz-cta-box",children:[
                c.jsxs("div",{children:[
                  c.jsx("h3",{children:"هل استوعبت هذه القاعدة جيداً؟"}),
                  c.jsx("p",{children:"ادخل الآن إلى اختبار تطبيقي مكون من 10 أسئلة لقياس إتقانك لهذه القاعدة وتثبيتها في سجل إحصائياتك."})
                ]}),
                c.jsxs("button",{
                  type:"button",
                  className:"btn primary",
                  onClick:()=>startModuleQuiz("grammar", selectedGrammarLesson.id, `اختبار قاعدة: ${selectedGrammarLesson.title_ar}`, selectedGrammarLesson.quiz || []),
                  children:["اختبر فهمك للقاعدة (10 أسئلة) ", c.jsx(Ji,{size:18})]
                })
              ]})
            ]}) : c.jsxs(c.Fragment,{children:[
              c.jsxs("div",{className:"filter-bar",children:[
                c.jsxs("div",{className:"filter-label",children:[c.jsx(f1,{size:17}),c.jsx("span",{children:"تصفية دروس القواعد حسب المستوى"})]}),
                c.jsxs("label",{className:"select-wrap",children:[
                  c.jsxs("select",{"aria-label":"مستوى القواعد",value:H.level,onChange:v=>Y({...H,level:v.target.value}),children:[
                    c.jsx("option",{value:"",children:"كل المستويات (A1–C1 · 60 درساً)"}),
                    gc.map(v=>c.jsx("option",{value:v,children:`قواعد المستوى ${v} (${LevelNamesAr[v]})`},v))
                  ]}),
                  c.jsx(i1,{size:14})
                ]}),
                H.level&&c.jsxs("button",{type:"button",className:"text-btn",onClick:()=>Y({...H,level:""}),children:["عرض كل المستويات ",c.jsx(tt,{size:14})]})
              ]}),
              c.jsx("div",{className:"word-grid dict-two-cols",children:grammarLessonsList.filter(l => (!H.level || l.level === H.level) && (!H.query || jc(l.title_ar + " " + l.title_en + " " + l.summary_ar).includes(jc(H.query)))).map((lesson, idx) => {
                const doneScore = g.completedGrammar?.[lesson.id];
                return c.jsxs("article",{
                  key:lesson.id,
                  className:"word-card grammar-card",
                  onClick:()=>{setSelectedGrammarLesson(lesson);window.scrollTo({top:0,behavior:"smooth"});},
                  style:{cursor:"pointer"},
                  children:[
                    c.jsxs("div",{className:"word-card-top",children:[
                      c.jsxs("div",{className:"badges",children:[
                        c.jsx(Ha,{level:lesson.level}),
                        c.jsx("span",{className:"badge",style:{background:"var(--surface-soft)",color:"var(--muted)"},children:`الدرس ${idx+1}`})
                      ]}),
                      doneScore !== void 0 && c.jsxs("span",{className:"badge level-A1",children:[`✓ مكتمل · ${doneScore}/10`]})
                    ]}),
                    c.jsx("h3",{style:{fontSize:"17px",marginTop:"10px",color:"var(--text)"},children:lesson.title_ar}),
                    c.jsx("div",{className:"word-pos",dir:"ltr",style:{fontSize:"11px",color:"var(--green)",fontWeight:600},children:lesson.title_en}),
                    c.jsx("p",{className:"translation",style:{fontSize:"12px",margin:"10px 0 14px"},children:lesson.summary_ar}),
                    c.jsxs("div",{className:"word-card-foot",children:[
                      c.jsx("span",{children:"شرح مفصل + أمثلة صوتية + اختبار 10 أسئلة"}),
                      c.jsxs("button",{type:"button",className:"detail-link",children:["ادرس القاعدة ",c.jsx(Ra,{size:14})]})
                    ]})
                  ]
                });
              })})
            ]})
          ) : (
            // Sub-tab 2: THREE VERB CONJUGATIONS (V1, V2, V3, V-ing)
            (()=>{
              const filteredVerbs = verbConjugationsList.filter(v => {
                if(H.level && v.level !== H.level) return false;
                if(verbTypeFilter !== "all" && v.type !== verbTypeFilter) return false;
                if(H.query) {
                  const qNorm = jc(H.query);
                  const target = jc(`${v.word} ${v.v1} ${v.v2} ${v.v3} ${v.ar}`);
                  if(!target.includes(qNorm)) return false;
                }
                return true;
              });
              const totalVerbPages = Math.max(1, Math.ceil(filteredVerbs.length / DICT_PAGE_SIZE));
              const safeVerbPage = Math.min(verbPage, totalVerbPages);
              const verbSlice = filteredVerbs.slice((safeVerbPage - 1) * DICT_PAGE_SIZE, safeVerbPage * DICT_PAGE_SIZE);

              return c.jsxs(c.Fragment,{children:[
                c.jsxs("div",{className:"filter-bar",children:[
                  c.jsxs("div",{className:"filter-label",children:[c.jsx(f1,{size:17}),c.jsx("span",{children:`جدول تصاريف الأفعال (${filteredVerbs.length} فعل)`})]}),
                  c.jsxs("label",{className:"select-wrap",children:[
                    c.jsxs("select",{"aria-label":"مستوى الفعل",value:H.level,onChange:v=>Y({...H,level:v.target.value}),children:[
                      c.jsx("option",{value:"",children:"كل المستويات (A1–C1)"}),
                      gc.map(v=>c.jsx("option",{value:v,children:`أفعال المستوى ${v}`},v))
                    ]}),
                    c.jsx(i1,{size:14})
                  ]}),
                  c.jsxs("label",{className:"select-wrap",children:[
                    c.jsxs("select",{"aria-label":"نوع الفعل",value:verbTypeFilter,onChange:v=>setVerbTypeFilter(v.target.value),children:[
                      c.jsx("option",{value:"all",children:"كل الأفعال (الشاذة والقياسية)"}),
                      c.jsx("option",{value:"irregular",children:"الأفعال الشاذة فقط (Irregular Verbs)"}),
                      c.jsx("option",{value:"regular",children:"الأفعال القياسية فقط (Regular Verbs)"})
                    ]}),
                    c.jsx(i1,{size:14})
                  ]}),
                  c.jsxs("button",{
                    type:"button",
                    className:"btn primary",
                    style:{minHeight:"36px",padding:"6px 14px",fontSize:"11px"},
                    onClick:()=>startVerbConjugationQuiz(filteredVerbs),
                    children:["اختبر نفسك في التصاريف (10 أسئلة) ",c.jsx(Ji,{size:15})]
                  }),
                  (H.level || verbTypeFilter!=="all" || H.query)&&c.jsxs("button",{
                    type:"button",
                    className:"text-btn",
                    onClick:()=>{Y({...H,level:"",query:""});setVerbTypeFilter("all");},
                    children:["مسح الفلاتر ",c.jsx(tt,{size:14})]
                  })
                ]}),
                c.jsx("div",{className:"word-grid dict-two-cols",children:verbSlice.map(v => {
                  const isLearnedVerb = (g.learnedVerbs || []).includes(v.id);
                  return c.jsxs("article",{key:v.id,className:"word-card verb-conj-card",children:[
                    c.jsxs("div",{className:"word-card-top",children:[
                      c.jsxs("div",{className:"badges",children:[
                        c.jsx(Ha,{level:v.level}),
                        c.jsx("span",{
                          className:`badge ${v.type==="irregular"?"level-C1":"level-A1"}`,
                          children:v.type==="irregular"?"شاذ · Irregular":"قياسي · Regular"
                        })
                      ]}),
                      c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[
                        da(v.wordObj),
                        v.wordObj && it(v.wordObj)
                      ]})
                    ]}),
                    c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginTop:"10px"},children:[
                      c.jsx("strong",{style:{fontSize:"16px",color:"var(--green)"},children:v.ar}),
                      c.jsxs("button",{
                        type:"button",
                        className:"audio-pill-btn",
                        title:"استمع لنطق التصاريف الثلاثة معاً",
                        onClick:()=>speakSentence(`${v.v1}. ${v.v2}. ${v.v3}.`),
                        children:[c.jsx(Qi,{size:12}), " نطق التصاريف الثلاثة"]
                      })
                    ]}),
                    c.jsxs("div",{className:"conj-table-grid",dir:"ltr",children:[
                      c.jsxs("div",{className:"conj-cell",children:[c.jsx("small",{children:"V1 · Present"}),c.jsx("strong",{children:v.v1})]}),
                      c.jsxs("div",{className:"conj-cell",children:[c.jsx("small",{children:"V2 · Past"}),c.jsx("strong",{children:v.v2})]}),
                      c.jsxs("div",{className:"conj-cell",children:[c.jsx("small",{children:"V3 · Participle"}),c.jsx("strong",{children:v.v3})]}),
                      c.jsxs("div",{className:"conj-cell",children:[c.jsx("small",{children:"V-ing"}),c.jsx("strong",{children:v.ving})]})
                    ]}),
                    c.jsxs("div",{className:"word-card-foot",children:[
                      c.jsxs("button",{
                        type:"button",
                        className:`detail-link ${isLearnedVerb?"learned-on":""}`,
                        onClick:()=>toggleVerbLearned(v.id),
                        children:[c.jsx(Lu,{size:14}), isLearnedVerb?" أتقنت تصاريفه ✓":" تحديد كمتقن"]
                      }),
                      c.jsxs("button",{
                        type:"button",
                        className:"detail-link",
                        onClick:()=>setSelectedVerbDetail(v),
                        children:["الأمثلة والتفاصيل ",c.jsx(at,{size:14})]
                      })
                    ]})
                  ]});
                })}),
                c.jsxs("nav",{className:"pagination","aria-label":"تنقل صفحات الأفعال",children:[
                  c.jsxs("button",{
                    type:"button",
                    className:"btn secondary",
                    disabled:safeVerbPage <= 1,
                    onClick:()=>{setVerbPage(p=>Math.max(1,p-1));window.scrollTo({top:0,behavior:"smooth"});},
                    children:[c.jsx(Wm,{size:15})," السابق"]
                  }),
                  c.jsxs("span",{children:["صفحة ",c.jsx("strong",{children:safeVerbPage})," من ",c.jsx("strong",{children:totalVerbPages}),` (${filteredVerbs.length} فعل)`]}),
                  c.jsxs("button",{
                    type:"button",
                    className:"btn secondary",
                    disabled:safeVerbPage >= totalVerbPages,
                    onClick:()=>{setVerbPage(p=>Math.min(totalVerbPages,p+1));window.scrollTo({top:0,behavior:"smooth"});},
                    children:["التالي ",c.jsx(r1,{size:15})]
                  })
                ]})
              ]});
            })()
          )
        ]}),

        // ============================================================
        // 6. STORIES & CONVERSATIONS VIEW (500 قصة + 500 محادثة)
        // ============================================================
        N==="immersion"&&c.jsxs("div",{key:"page-immersion",className:"lexora-page-view",children:[
          c.jsx(xc,{
            eyebrow:"READING & LISTENING LAB",
            title:"قصص مشوّقة ومحادثات حيّة لكل مستوى.",
            description:"500 قصة قراءة متدرجة (100 لكل مستوى) و500 محادثة استماع تفاعلية (5 دقائق لـ A1–B1 و10 دقائق لـ B2–C1) مع اختبار من 10 أسئلة بعد كل نص."
          }),

          // Sub-tabs: Stories (500) vs Conversations (500)
          c.jsxs("div",{className:"module-tabs-bar",children:[
            c.jsxs("button",{
              type:"button",
              className:`module-tab-btn ${immersionSubTab==="stories"?"active":""}`,
              onClick:()=>{stopImmersionPlayback();setImmersionSubTab("stories");setSelectedStory(null);setSelectedConv(null);setGrammarQuizState({active:!1,questions:[],idx:0,answers:[],done:!1,title:"",targetType:"",targetId:""});},
              children:[c.jsx(Ku,{size:18}), ` حزمة قراءة القصص (${allStoriesList.length} قصة · 100 لكل مستوى)`]
            }),
            c.jsxs("button",{
              type:"button",
              className:`module-tab-btn ${immersionSubTab==="conversations"?"active":""}`,
              onClick:()=>{stopImmersionPlayback();setImmersionSubTab("conversations");setSelectedStory(null);setSelectedConv(null);setGrammarQuizState({active:!1,questions:[],idx:0,answers:[],done:!1,title:"",targetType:"",targetId:""});},
              children:[c.jsx(d1,{size:18}), ` حزمة استماع المحادثات (${allConversationsList.length} محادثة · 5 و 10 دقائق)`]
            })
          ]}),

          grammarQuizState.active ? renderModuleQuizModalOrSection(
            selectedStory ? "العودة إلى القصة" : selectedConv ? "العودة إلى المحادثة" : "العودة إلى القائمة",
            () => setGrammarQuizState({active:!1,questions:[],idx:0,answers:[],done:!1,title:"",targetType:"",targetId:""})
          ) : immersionSubTab === "stories" ? (
            selectedStory ? c.jsxs("section",{key:`story-detail-${selectedStory.id}`,className:"grammar-detail-card story-reader-view lexora-subview-transition",children:[
              c.jsxs("div",{className:"session-toolbar",children:[
                c.jsxs("button",{type:"button",className:"btn secondary",onClick:()=>{stopImmersionPlayback();setSelectedStory(null);},children:[c.jsx(Wm,{size:15})," العودة إلى مكتبة القصص"]}),
                c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[
                  c.jsx(Ha,{level:selectedStory.level}),
                  c.jsx("span",{className:"badge",style:{background:"var(--surface-soft)",color:"var(--text)"},children:`📖 ${selectedStory.linesCount} سطراً · ${selectedStory.readingMinutes} دقائق`}),
                  g.completedStories?.[selectedStory.id]!==void 0 && c.jsxs("span",{className:"badge level-A1",children:[`✓ مكتملة · ${g.completedStories[selectedStory.id]}/10`]})
                ]})
              ]}),

              c.jsxs("div",{className:"grammar-detail-header",children:[
                c.jsx("h2",{children:selectedStory.title_ar}),
                c.jsx("p",{dir:"ltr",className:"grammar-en-subtitle",children:selectedStory.title_en})
              ]}),

              // Audio & Translation Control Bar for Story (with Cancel Listening / Silent Reading Toggle!)
              c.jsxs("div",{className:"immersion-control-bar",children:[
                !storyAudioDisabled && (
                  playingStoryIdx === -1 ? c.jsxs("button",{
                    type:"button",
                    className:"btn primary",
                    onClick:()=>startStoryPlayback(selectedStory, 0),
                    children:[c.jsx(Qi,{size:17})," استمع للقصة كاملة بالصوت"]
                  }) : storyPaused ? c.jsxs("button",{
                    type:"button",
                    className:"btn primary",
                    onClick:()=>startStoryPlayback(selectedStory, Math.max(0, storyPlayRef.current.paraIdx)),
                    children:[c.jsx(Qi,{size:17}),` استئناف الاستماع (الفقرة ${playingStoryIdx+1})`]
                  }) : c.jsxs("button",{
                    type:"button",
                    className:"btn secondary",
                    onClick:pauseStoryPlayback,
                    children:[c.jsx($m,{size:17}),` إيقاف مؤقت (تُنطق الفقرة ${playingStoryIdx+1} من ${selectedStory.paragraphs.length})`]
                  })
                ),
                (!storyAudioDisabled && playingStoryIdx !== -1) && c.jsxs("button",{
                  type:"button",
                  className:"btn secondary",
                  onClick:stopImmersionPlayback,
                  children:[c.jsx(tt,{size:15})," إيقاف الصوت"]
                }),
                c.jsxs("button",{
                  type:"button",
                  className:`pill-toggle ${storyAudioDisabled?"on":""}`,
                  onClick:()=>{
                    if(!storyAudioDisabled) stopImmersionPlayback();
                    setStoryAudioDisabled(v=>!v);
                  },
                  children:[
                    c.jsx(storyAudioDisabled ? Qi : tt, {size:14}),
                    storyAudioDisabled ? " تفعيل الاستماع الصوتي للقصة" : " إلغاء الاستماع (قراءة صامتة فقط)"
                  ]
                }),
                c.jsxs("button",{
                  type:"button",
                  className:`pill-toggle ${showStoryAr?"on":""}`,
                  onClick:()=>setShowStoryAr(v=>!v),
                  children:[showStoryAr ? "إخفاء الترجمة العربية" : "إظهار الترجمة العربية"]
                })
              ]}),

              // Key Oxford Words Strip in Story
              c.jsxs("div",{className:"key-vocab-strip",children:[
                c.jsx("small",{children:"💡 الكلمات المفتاحية في هذه القصة (اضغط على أي كلمة لاستكشافها أو سماعها):"}),
                c.jsx("div",{className:"key-vocab-pills",children:(selectedStory.keyWords||[]).map(kw => c.jsxs("button",{
                  key:kw.id,
                  type:"button",
                  className:"key-vocab-pill",
                  onClick:()=>nt(kw),
                  children:[
                    c.jsx("strong",{dir:"ltr",children:cleanWordForSpeech(kw.word)}),
                    c.jsx("span",{children:kw.senses?.[0]?.ar || ""})
                  ]
                }))})
              ]}),

              // Story Paragraphs (6 Paragraphs / 22 Lines)
              c.jsx("div",{className:"story-paragraphs-container",children:selectedStory.paragraphs.map((para, pIdx) => c.jsxs("div",{
                key:pIdx,
                id:`story-para-${pIdx}`,
                className:`story-para-card ${playingStoryIdx===pIdx?"speaking-active":""}`,
                children:[
                  c.jsxs("div",{className:"story-para-top",children:[
                    c.jsx("span",{className:"badge",style:{background:"var(--surface-soft)",color:"var(--muted)"},children:`الفقرة ${pIdx+1}`}),
                    !storyAudioDisabled && c.jsxs("button",{
                      type:"button",
                      className:`audio-pill-btn sentence-audio-btn ${playingStoryIdx===pIdx && !storyPaused?"playing":""}`,
                      onClick:()=>startStoryPlayback(selectedStory, pIdx),
                      children:[c.jsx(Qi,{size:13}), playingStoryIdx===pIdx && !storyPaused ? " تُنطق الآن..." : " استمع للفقرة"]
                    })
                  ]}),
                  c.jsx("p",{className:"story-en-text",dir:"ltr",children:renderInteractiveTextWithWords(para.en, selectedStory.keyWords)}),
                  showStoryAr && c.jsx("p",{className:"story-ar-text",children:para.ar})
                ]
              }))}),

              // 10-Question Story Quiz Button
              c.jsxs("div",{className:"module-quiz-cta-box",children:[
                c.jsxs("div",{children:[
                  c.jsx("h3",{children:"أتممت قراءة القصة؟ اختبر ما قرأته الآن!"}),
                  c.jsx("p",{children:`اختبار فعلي مكون من 10 أسئلة بمستوى صعوبة يناسب المستوى (${selectedStory.level}) لقياس استيعابك ومفردات القصة.`})
                ]}),
                c.jsxs("button",{
                  type:"button",
                  className:"btn primary",
                  onClick:()=>startImmersionItemQuiz(selectedStory, !0),
                  children:["اختبر ما قرأته (10 أسئلة) ",c.jsx(Ji,{size:18})]
                })
              ]})
            ]}) : (()=>{
              const filteredStories = allStoriesList.filter(st => {
                if(H.level && st.level !== H.level) return false;
                const isDone = g.completedStories?.[st.id] !== void 0;
                if(immersionStatusFilter === "completed" && !isDone) return false;
                if(immersionStatusFilter === "remaining" && isDone) return false;
                if(H.query && !jc(st.title_ar + " " + st.title_en).includes(jc(H.query))) return false;
                return true;
              });
              const totalStPages = Math.max(1, Math.ceil(filteredStories.length / 20));
              const safeStPage = Math.min(immersionPage, totalStPages);
              const stSlice = filteredStories.slice((safeStPage - 1) * 20, safeStPage * 20);

              return c.jsxs(c.Fragment,{children:[
                c.jsxs("div",{className:"filter-bar",children:[
                  c.jsxs("div",{className:"filter-label",children:[c.jsx(Ku,{size:17}),c.jsx("span",{children:`مكتبة القصص (${filteredStories.length} قصة)`})]}),
                  c.jsxs("label",{className:"select-wrap",children:[
                    c.jsxs("select",{"aria-label":"مستوى القصص",value:H.level,onChange:v=>Y({...H,level:v.target.value}),children:[
                      c.jsx("option",{value:"",children:"كل المستويات (500 قصة · A1–C1)"}),
                      gc.map(v=>c.jsx("option",{value:v,children:`قصص المستوى ${v} (100 قصة)`},v))
                    ]}),
                    c.jsx(i1,{size:14})
                  ]}),
                  c.jsxs("label",{className:"select-wrap",children:[
                    c.jsxs("select",{"aria-label":"حالة الإنجاز",value:immersionStatusFilter,onChange:v=>setImmersionStatusFilter(v.target.value),children:[
                      c.jsx("option",{value:"all",children:"كل القصص"}),
                      c.jsx("option",{value:"completed",children:`القصص المكتملة (${Object.keys(g.completedStories||{}).length})`}),
                      c.jsx("option",{value:"remaining",children:"القصص غير المكتملة"})
                    ]}),
                    c.jsx(i1,{size:14})
                  ]}),
                  (H.level || immersionStatusFilter!=="all" || H.query)&&c.jsxs("button",{
                    type:"button",
                    className:"text-btn",
                    onClick:()=>{Y({...H,level:"",query:""});setImmersionStatusFilter("all");},
                    children:["مسح الفلاتر ",c.jsx(tt,{size:14})]
                  })
                ]}),
                c.jsx("div",{className:"word-grid dict-two-cols",children:stSlice.map(st => {
                  const sc = g.completedStories?.[st.id];
                  return c.jsxs("article",{
                    key:st.id,
                    className:"word-card",
                    onClick:()=>{setSelectedStory(st);window.scrollTo({top:0,behavior:"smooth"});},
                    style:{cursor:"pointer"},
                    children:[
                      c.jsxs("div",{className:"word-card-top",children:[
                        c.jsxs("div",{className:"badges",children:[
                          c.jsx(Ha,{level:st.level}),
                          c.jsx("span",{className:"badge",style:{background:"var(--surface-soft)",color:"var(--muted)"},children:`قصة #${st.number} · ${st.linesCount} سطراً`})
                        ]}),
                        sc !== void 0 && c.jsxs("span",{className:"badge level-A1",children:[`✓ مكتملة · ${sc}/10`]})
                      ]}),
                      c.jsx("h3",{style:{fontSize:"16px",marginTop:"10px"},children:st.title_ar}),
                      c.jsx("div",{className:"word-pos",dir:"ltr",children:st.title_en}),
                      c.jsxs("p",{className:"translation",style:{fontSize:"11.5px",margin:"10px 0 14px",color:"var(--muted)"},children:[
                        "المفردات المستهدفة: ",
                        (st.keyWords||[]).slice(0,5).map(w=>cleanWordForSpeech(w.word)).join(" · "),
                        " ..."
                      ]}),
                      c.jsxs("div",{className:"word-card-foot",children:[
                        c.jsx("span",{children:`⏱ قراءة واستماع (${st.readingMinutes} دقائق) + اختبار 10 أسئلة`}),
                        c.jsxs("button",{type:"button",className:"detail-link",children:["اقرأ القصة ",c.jsx(Ra,{size:14})]})
                      ]})
                    ]
                  });
                })}),
                c.jsxs("nav",{className:"pagination",children:[
                  c.jsxs("button",{type:"button",className:"btn secondary",disabled:safeStPage<=1,onClick:()=>{setImmersionPage(p=>Math.max(1,p-1));window.scrollTo({top:0,behavior:"smooth"});},children:[c.jsx(Wm,{size:15})," السابق"]}),
                  c.jsxs("span",{children:["صفحة ",c.jsx("strong",{children:safeStPage})," من ",c.jsx("strong",{children:totalStPages}),` (${filteredStories.length} قصة)`]}),
                  c.jsxs("button",{type:"button",className:"btn secondary",disabled:safeStPage>=totalStPages,onClick:()=>{setImmersionPage(p=>Math.min(totalStPages,p+1));window.scrollTo({top:0,behavior:"smooth"});},children:["التالي ",c.jsx(r1,{size:15})]})
                ]})
              ]});
            })()
          ) : (
            // Sub-tab 2: CONVERSATIONS (500 Conversations: 5 mins for A1-B1, 10 mins for B2-C1)
            selectedConv ? c.jsxs("section",{key:`conv-detail-${selectedConv.id}`,className:"grammar-detail-card conv-studio-view lexora-subview-transition",children:[
              c.jsxs("div",{className:"session-toolbar",children:[
                c.jsxs("button",{type:"button",className:"btn secondary",onClick:()=>{stopImmersionPlayback();setSelectedConv(null);},children:[c.jsx(Wm,{size:15})," العودة إلى مكتبة المحادثات"]}),
                c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[
                  c.jsx(Ha,{level:selectedConv.level}),
                  c.jsx("span",{className:"badge",style:{background:"var(--green-light)",color:"var(--green)",fontWeight:700},children:`🎧 المدة: ${selectedConv.durationMinutes} دقائق (${selectedConv.linesCount} سطراً حوارياً)`}),
                  g.completedConversations?.[selectedConv.id]!==void 0 && c.jsxs("span",{className:"badge level-A1",children:[`✓ مكتملة · ${g.completedConversations[selectedConv.id]}/10`]})
                ]})
              ]}),

              c.jsxs("div",{className:"grammar-detail-header",children:[
                c.jsx("h2",{children:selectedConv.title_ar}),
                c.jsx("p",{dir:"ltr",className:"grammar-en-subtitle",children:selectedConv.title_en}),
                c.jsxs("p",{className:"grammar-summary-lead",children:[`حوار تفاعلي بين `,c.jsx("strong",{children:selectedConv.speakerA_ar}),` (${selectedConv.speakerA}) و `,c.jsx("strong",{children:selectedConv.speakerB_ar}),` (${selectedConv.speakerB}) — اضغط على أي سطر لسماعه أو شغل المحادثة كاملة.`]})
              ]}),

              // Sticky Audio Control Bar for Conversation
              c.jsxs("div",{className:"immersion-control-bar",children:[
                playingConvIdx === -1 ? c.jsxs("button",{
                  type:"button",
                  className:"btn primary",
                  onClick:()=>startConversationPlayback(selectedConv, 0),
                  children:[c.jsx(Qi,{size:17}),` تشغيل المحادثة كاملة (${selectedConv.durationMinutes} دقائق)`]
                }) : convPaused ? c.jsxs("button",{
                  type:"button",
                  className:"btn primary",
                  onClick:()=>resumeConversationPlayback(selectedConv),
                  children:[c.jsx(Qi,{size:17}),` استئناف من السطر ${playingConvIdx+1}`]
                }) : c.jsxs("button",{
                  type:"button",
                  className:"btn secondary",
                  onClick:pauseConversationPlayback,
                  children:[c.jsx($m,{size:17}),` إيقاف مؤقت (السطر ${playingConvIdx+1} من ${selectedConv.lines.length})`]
                }),
                playingConvIdx !== -1 && c.jsxs("button",{
                  type:"button",
                  className:"btn secondary",
                  onClick:stopImmersionPlayback,
                  children:[c.jsx(tt,{size:15})," إيقاف"]
                }),
                c.jsxs("button",{
                  type:"button",
                  className:`pill-toggle ${showConvEn?"on":""}`,
                  onClick:()=>setShowConvEn(v=>!v),
                  children:[showConvEn ? "إخفاء النص الإنجليزي (تدريب الأذن)" : "إظهار النص الإنجليزي"]
                }),
                c.jsxs("button",{
                  type:"button",
                  className:`pill-toggle ${showConvAr?"on":""}`,
                  onClick:()=>setShowConvAr(v=>!v),
                  children:[showConvAr ? "إخفاء الترجمة العربية" : "إظهار الترجمة العربية"]
                })
              ]}),

              // Key Oxford Words Strip in Conversation
              c.jsxs("div",{className:"key-vocab-strip",children:[
                c.jsx("small",{children:"💡 المفردات المستهدفة في هذه المحادثة (اضغط على أي كلمة لاستكشافها):"}),
                c.jsx("div",{className:"key-vocab-pills",children:(selectedConv.keyWords||[]).map(kw => c.jsxs("button",{
                  key:kw.id,
                  type:"button",
                  className:"key-vocab-pill",
                  onClick:()=>nt(kw),
                  children:[
                    c.jsx("strong",{dir:"ltr",children:cleanWordForSpeech(kw.word)}),
                    c.jsx("span",{children:kw.senses?.[0]?.ar || ""})
                  ]
                }))})
              ]}),

              // Dialogue Lines
              c.jsx("div",{className:"conv-lines-container",children:selectedConv.lines.map((line, lIdx) => {
                const isActive = playingConvIdx === lIdx;
                return c.jsxs("div",{
                  key:lIdx,
                  id:`conv-line-${lIdx}`,
                  className:`conv-line-card role-${line.role} ${isActive?"speaking-active":""}`,
                  onClick:()=>startConversationPlayback(selectedConv, lIdx),
                  style:{cursor:"pointer"},
                  children:[
                    c.jsxs("div",{className:"conv-line-header",children:[
                      c.jsxs("span",{className:`speaker-badge role-${line.role} gender-${line.gender||"male"}`,children:[
                        `${line.gender==="female"?"👩":"👨"} ${line.speaker_ar} (${line.speaker}) · #${lIdx+1}`
                      ]}),
                      c.jsxs("button",{
                        type:"button",
                        className:`audio-pill-btn sentence-audio-btn ${isActive && !convPaused?"playing":""}`,
                        onClick:e=>{e.stopPropagation();startConversationPlayback(selectedConv, lIdx);},
                        children:[c.jsx(Qi,{size:12}), isActive && !convPaused ? " يُنطق الآن..." : " استمع للسطر"]
                      })
                    ]}),
                    showConvEn ? c.jsx("p",{className:"conv-en-text",dir:"ltr",onClick:e=>e.stopPropagation(),children:renderInteractiveTextWithWords(line.en, selectedConv.keyWords)}) : c.jsx("p",{className:"conv-hidden-placeholder",children:"🎧 [النص الإنجليزي مخفي لتدريب الأذن — اضغط لإظهاره أو استمع للصوت]"}),
                    showConvAr && c.jsx("p",{className:"conv-ar-text",children:line.ar})
                  ]
                });
              })}),

              // 10-Question Conversation Quiz Button
              c.jsxs("div",{className:"module-quiz-cta-box",children:[
                c.jsxs("div",{children:[
                  c.jsx("h3",{children:"أتممت الاستماع للمحادثة؟ اختبر ما سمعته الآن!"}),
                  c.jsx("p",{children:`اختبار فعلي مكون من 10 أسئلة بمستوى صعوبة يناسب المستوى (${selectedConv.level}) لقياس استيعابك ومفردات الحوار.`})
                ]}),
                c.jsxs("button",{
                  type:"button",
                  className:"btn primary",
                  onClick:()=>startImmersionItemQuiz(selectedConv, !1),
                  children:["اختبر ما سمعته (10 أسئلة) ",c.jsx(Ji,{size:18})]
                })
              ]})
            ]}) : (()=>{
              const filteredConvs = allConversationsList.filter(cv => {
                if(H.level && cv.level !== H.level) return false;
                const isDone = g.completedConversations?.[cv.id] !== void 0;
                if(immersionStatusFilter === "completed" && !isDone) return false;
                if(immersionStatusFilter === "remaining" && isDone) return false;
                if(H.query && !jc(cv.title_ar + " " + cv.title_en).includes(jc(H.query))) return false;
                return true;
              });
              const totalCvPages = Math.max(1, Math.ceil(filteredConvs.length / 20));
              const safeCvPage = Math.min(immersionPage, totalCvPages);
              const cvSlice = filteredConvs.slice((safeCvPage - 1) * 20, safeCvPage * 20);

              return c.jsxs(c.Fragment,{children:[
                c.jsxs("div",{className:"filter-bar",children:[
                  c.jsxs("div",{className:"filter-label",children:[c.jsx(d1,{size:17}),c.jsx("span",{children:`مكتبة المحادثات (${filteredConvs.length} محادثة)`})]}),
                  c.jsxs("label",{className:"select-wrap",children:[
                    c.jsxs("select",{"aria-label":"مستوى المحادثات",value:H.level,onChange:v=>Y({...H,level:v.target.value}),children:[
                      c.jsx("option",{value:"",children:"كل المستويات (500 محادثة · A1–C1)"}),
                      gc.map(v=>c.jsx("option",{value:v,children:`محادثات ${v} (100 محادثة · ${v==="B2"||v==="C1"?"10 دقائق":"5 دقائق"})`},v))
                    ]}),
                    c.jsx(i1,{size:14})
                  ]}),
                  c.jsxs("label",{className:"select-wrap",children:[
                    c.jsxs("select",{"aria-label":"حالة الإنجاز",value:immersionStatusFilter,onChange:v=>setImmersionStatusFilter(v.target.value),children:[
                      c.jsx("option",{value:"all",children:"كل المحادثات"}),
                      c.jsx("option",{value:"completed",children:`المحادثات المكتملة (${Object.keys(g.completedConversations||{}).length})`}),
                      c.jsx("option",{value:"remaining",children:"المحادثات غير المكتملة"})
                    ]}),
                    c.jsx(i1,{size:14})
                  ]}),
                  (H.level || immersionStatusFilter!=="all" || H.query)&&c.jsxs("button",{
                    type:"button",
                    className:"text-btn",
                    onClick:()=>{Y({...H,level:"",query:""});setImmersionStatusFilter("all");},
                    children:["مسح الفلاتر ",c.jsx(tt,{size:14})]
                  })
                ]}),
                c.jsx("div",{className:"word-grid dict-two-cols",children:cvSlice.map(cv => {
                  const sc = g.completedConversations?.[cv.id];
                  return c.jsxs("article",{
                    key:cv.id,
                    className:"word-card",
                    onClick:()=>{setSelectedConv(cv);window.scrollTo({top:0,behavior:"smooth"});},
                    style:{cursor:"pointer"},
                    children:[
                      c.jsxs("div",{className:"word-card-top",children:[
                        c.jsxs("div",{className:"badges",children:[
                          c.jsx(Ha,{level:cv.level}),
                          c.jsx("span",{className:"badge",style:{background:"var(--green-light)",color:"var(--green)"},children:`⏱ ${cv.durationMinutes} دقائق · ${cv.linesCount} سطراً`})
                        ]}),
                        sc !== void 0 && c.jsxs("span",{className:"badge level-A1",children:[`✓ مكتملة · ${sc}/10`]})
                      ]}),
                      c.jsx("h3",{style:{fontSize:"16px",marginTop:"10px"},children:cv.title_ar}),
                      c.jsx("div",{className:"word-pos",dir:"ltr",children:cv.title_en}),
                      c.jsxs("p",{className:"translation",style:{fontSize:"11.5px",margin:"10px 0 14px",color:"var(--muted)"},children:[
                        `المتحدثان: ${cv.speakerA_ar} و ${cv.speakerB_ar} · المفردات: `,
                        (cv.keyWords||[]).slice(0,4).map(w=>cleanWordForSpeech(w.word)).join(" · ")
                      ]}),
                      c.jsxs("div",{className:"word-card-foot",children:[
                        c.jsx("span",{children:`🎧 محادثة صوتية (${cv.durationMinutes} د) + اختبار 10 أسئلة`}),
                        c.jsxs("button",{type:"button",className:"detail-link",children:["ابدأ الاستماع ",c.jsx(Ra,{size:14})]})
                      ]})
                    ]
                  });
                })}),
                c.jsxs("nav",{className:"pagination",children:[
                  c.jsxs("button",{type:"button",className:"btn secondary",disabled:safeCvPage<=1,onClick:()=>{setImmersionPage(p=>Math.max(1,p-1));window.scrollTo({top:0,behavior:"smooth"});},children:[c.jsx(Wm,{size:15})," السابق"]}),
                  c.jsxs("span",{children:["صفحة ",c.jsx("strong",{children:safeCvPage})," من ",c.jsx("strong",{children:totalCvPages}),` (${filteredConvs.length} محادثة)`]}),
                  c.jsxs("button",{type:"button",className:"btn secondary",disabled:safeCvPage>=totalCvPages,onClick:()=>{setImmersionPage(p=>Math.min(totalCvPages,p+1));window.scrollTo({top:0,behavior:"smooth"});},children:["التالي ",c.jsx(r1,{size:15})]})
                ]})
              ]});
            })()
          )
        ]}),

        // 5. STATS VIEW (With Fixed 7-Day Device-Calendar Activity Chart)
        N==="stats"&&c.jsxs("div",{key:"page-stats",className:"lexora-page-view",children:[
          c.jsx(xc,{eyebrow:"YOUR LEARNING JOURNEY",title:"مسارك اللغوي، بالأرقام.",description:"تتبع حصيلتك المعجمية ونشاطك اليومي وتوزيع إتقانك عبر المستويات (A1–C1)."}),
          
          c.jsxs("section",{className:"stats-summary",children:[
            c.jsxs("div",{className:"stat-big",children:[
              c.jsx("span",{className:"metric-icon sage",children:c.jsx(vc,{size:20})}),
              c.jsx("strong",{children:be.learned}),
              c.jsx("span",{children:"كلمة متقنة"}),
              c.jsxs("small",{children:[`تمثل ${Math.round((be.learned/Qe.length)*100)}% من إجمالي ${Qe.length} كلمة · استكشفت ${be.seen} كلمة`]})
            ]}),
            c.jsxs("div",{className:"stat-big",children:[
              c.jsx("span",{className:"metric-icon peach",children:c.jsx(yc,{size:20})}),
              c.jsx("strong",{children:be.accuracy!==null?`${be.accuracy}%`:"—"}),
              c.jsx("span",{children:"دقة الاختبارات"}),
              c.jsxs("small",{children:[`${be.correct} إجابة صحيحة من أصل ${be.quiz} سؤال مسجل`]})
            ]}),
            c.jsxs("div",{className:"stat-big",children:[
              c.jsx("span",{className:"metric-icon lilac",children:c.jsx(o1,{size:20})}),
              c.jsx("strong",{children:be.streak}),
              c.jsx("span",{children:"أيام التعلّم المتتالية"}),
              c.jsxs("small",{children:[`أنجزت اليوم ${be.today} من أصل هدفك اليومي (${g.goal})`]})
            ]})
          ]}),

          c.jsxs("section",{className:"stats-columns",children:[
            c.jsxs("div",{className:"panel activity-panel",children:[
              c.jsxs("div",{className:"section-heading",children:[
                c.jsxs("div",{children:[
                  c.jsx("h2",{children:"نشاطك خلال آخر 7 أيام"}),
                  c.jsxs("p",{children:["مرتبط بتقويم جهازك اليومي (", c.jsx("strong",{dir:"ltr",children:currentToday}), ") — يحسب كل نشاط تعلّم تُنجزه يومياً."]})
                ]}),
                c.jsx(p1,{size:20})
              ]}),
              c.jsx("div",{className:"activity-chart",children:be.week.map(d => {
                const heightPct = d.count > 0 ? Math.max(12, Math.round((d.count / maxWeekCount) * 100)) : 5;
                return c.jsxs("div",{key:d.day,className:`chart-col ${d.isToday?"today":""} ${d.count>0?"has-data":""}`,children:[
                  c.jsx("strong",{children:d.count}),
                  c.jsx("div",{className:"bar-area",children:c.jsx("span",{style:{height:`${heightPct}%`}})}),
                  c.jsx("span",{children:d.label}),
                  c.jsx("small",{dir:"ltr",children:d.day.slice(5)})
                ]});
              })}),
              be.week.every(d=>d.count===0)&&c.jsx("p",{className:"chart-empty-note",children:"ابدأ بمراجعة البطاقات أو حل الاختبارات اليوم ليبدأ العداد بالارتفاع فوراً."})
            ]}),

            c.jsxs("div",{className:"panel level-progress",children:[
              c.jsx("h2",{children:"توزيع الإتقان حسب المستوى (A1–C1)"}),
              c.jsx("p",{children:"نسبة المفردات المتقنة في كل مستوى من مستويات أكسفورد المعتمدة."}),
              gc.map(lvl => {
                const data = be.byLevel[lvl] || { total: 1, learned: 0 };
                const pct = data.total ? Math.round((data.learned / data.total) * 100) : 0;
                return c.jsxs("div",{key:lvl,className:"level-progress-row",children:[
                  c.jsxs("div",{children:[
                    c.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[
                      c.jsx(Ha,{level:lvl}),
                      c.jsx("small",{style:{fontSize:"10px",color:"var(--muted)"},children:LevelNamesAr[lvl]})
                    ]}),
                    c.jsx("span",{children:`${data.learned} / ${data.total} (${pct}%)`})
                  ]}),
                  c.jsx("div",{className:"progress-track",children:c.jsx("span",{style:{width:`${pct}%`}})})
                ]});
              }),
              c.jsx("small",{children:"يُحتسب إتقان الكلمة عند تقييمها بـ «أعرفها بالتأكيد» في جلسات البطاقات التعليمية."})
            ]})
          ]}),

          // New Comprehensive Stats Section for Grammar, Verb Conjugations, 500 Stories, and 500 Conversations
          c.jsxs("section",{className:"panel",style:{marginTop:"24px"},children:[
            c.jsxs("div",{className:"section-heading",children:[
              c.jsxs("div",{children:[
                c.jsx("h2",{children:"إحصائيات القواعد والتصاريف والقصص والمحادثات"}),
                c.jsx("p",{children:"تتبع إنجازك في موسوعة القواعد (60 درساً)، وتصاريف الأفعال (1244 فعلاً)، ومكتبة الـ 500 قصة والـ 500 محادثة."})
              ]}),
              c.jsx(Ji,{size:22})
            ]}),
            c.jsxs("div",{className:"metrics",style:{marginTop:"12px"},children:[
              c.jsxs("div",{className:"metric",children:[
                c.jsxs("div",{children:[
                  c.jsx("span",{children:"دروس القواعد المكتملة"}),
                  c.jsxs("strong",{children:[Object.keys(g.completedGrammar||{}).length, c.jsx("small",{children:`من ${grammarLessonsList.length} درساً`})]})
                ]}),
                c.jsx("span",{className:"metric-icon sand",children:c.jsx(v1,{})})
              ]}),
              c.jsxs("div",{className:"metric",children:[
                c.jsxs("div",{children:[
                  c.jsx("span",{children:"تصاريف الأفعال المتقنة"}),
                  c.jsxs("strong",{children:[(g.learnedVerbs||[]).length, c.jsx("small",{children:`من ${verbConjugationsList.length} فعلاً`})]})
                ]}),
                c.jsx("span",{className:"metric-icon lilac",children:c.jsx(vc,{})})
              ]}),
              c.jsxs("div",{className:"metric",children:[
                c.jsxs("div",{children:[
                  c.jsx("span",{children:"القصص المقروءة والمختبرة"}),
                  c.jsxs("strong",{children:[Object.keys(g.completedStories||{}).length, c.jsx("small",{children:"من 500 قصة"})]})
                ]}),
                c.jsx("span",{className:"metric-icon sage",children:c.jsx(Ku,{})})
              ]}),
              c.jsxs("div",{className:"metric",children:[
                c.jsxs("div",{children:[
                  c.jsx("span",{children:"المحادثات المسموعة والمختبرة"}),
                  c.jsxs("strong",{children:[Object.keys(g.completedConversations||{}).length, c.jsx("small",{children:"من 500 محادثة"})]})
                ]}),
                c.jsx("span",{className:"metric-icon peach",children:c.jsx(d1,{})})
              ]})
            ]}),
            c.jsxs("div",{className:"stats-columns",style:{marginTop:"18px"},children:[
              c.jsxs("div",{className:"panel",style:{background:"var(--surface-soft)"},children:[
                c.jsx("h3",{style:{fontSize:"14px",marginBottom:"10px"},children:"📖 تقدم قراءة القصص حسب المستوى (100 قصة لكل مستوى)"}),
                gc.map(lvl => {
                  const doneCnt = Object.keys(g.completedStories||{}).filter(k => k.startsWith(`story-${lvl}-`)).length;
                  return c.jsxs("div",{key:lvl,className:"level-progress-row",style:{marginTop:"12px"},children:[
                    c.jsxs("div",{children:[c.jsx(Ha,{level:lvl}),c.jsx("span",{children:`${doneCnt} / 100 (${doneCnt}%)`})]}),
                    c.jsx("div",{className:"progress-track",children:c.jsx("span",{style:{width:`${doneCnt}%`}})})
                  ]});
                })
              ]}),
              c.jsxs("div",{className:"panel",style:{background:"var(--surface-soft)"},children:[
                c.jsx("h3",{style:{fontSize:"14px",marginBottom:"10px"},children:"🎧 تقدم استماع المحادثات حسب المستوى (100 محادثة لكل مستوى)"}),
                gc.map(lvl => {
                  const doneCnt = Object.keys(g.completedConversations||{}).filter(k => k.startsWith(`conv-${lvl}-`)).length;
                  return c.jsxs("div",{key:lvl,className:"level-progress-row",style:{marginTop:"12px"},children:[
                    c.jsxs("div",{children:[c.jsx(Ha,{level:lvl}),c.jsx("span",{children:`${doneCnt} / 100 (${doneCnt}%)`})]}),
                    c.jsx("div",{className:"progress-track",children:c.jsx("span",{style:{width:`${doneCnt}%`}})})
                  ]});
                })
              ]})
            ]})
          ]}),

          c.jsxs("section",{className:"panel honest-data",children:[
            c.jsx(pc,{size:28}),
            c.jsxs("div",{style:{flex:1},children:[
              c.jsx("h3",{children:"بياناتك محفوظة محلياً بالكامل على جهازك"}),
              c.jsx("p",{children:`يتم حفظ تقدمك وسجل الصوت (${cachedAudioCount} ملف صوتي مخزن أوفلاين) محلياً في جهازك، ويمكنك تصدير نسخة احتياطية (JSON) في أي وقت.`})
            ]}),
            c.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[
              c.jsxs("button",{type:"button",className:"btn secondary",onClick:()=>Vi("lexora-progress.json",g),children:["تصدير التقدم ",c.jsx(mc,{size:16})]}),
              c.jsxs("button",{type:"button",className:"btn secondary",onClick:()=>A("settings"),children:["إدارة البيانات ",c.jsx(f1,{size:16})]})
            ]})
          ]})
        ]})
      ]}),

      // FIXED BOTTOM NAVIGATION BAR
      c.jsx("nav",{className:"mobile-bottom-nav","aria-label":"شريط التنقل السفلي",children:Li.map(v=>c.jsxs("button",{
        type:"button",
        key:v.id,
        className:N===v.id?"active":"",
        "aria-current":N===v.id?"page":void 0,
        onClick:()=>Je(v.id),
        children:[
          c.jsx(v.icon,{size:20}),
          c.jsx("span",{children:v.shortLabel})
        ]
      },v.id))})
    ]}),

    // POPOVER / SMART BUBBLE: Quick Word Translation, Audio & Verb Conjugations in Stories & Conversations
    wordBubbleData&&c.jsx("div",{className:"modal-backdrop word-bubble-backdrop",onClick:()=>setWordBubbleData(null),children:c.jsxs("div",{
      className:"smart-word-bubble",
      role:"dialog",
      "aria-modal":"true",
      onClick:e=>e.stopPropagation(),
      children:[
        c.jsxs("div",{className:"bubble-top-row",children:[
          c.jsxs("div",{className:"badges",children:[
            c.jsx(Ha,{level:wordBubbleData.level||"B1"}),
            (wordBubbleData.posList||[]).map(p=>c.jsx("span",{key:p,className:"badge",style:{background:"var(--surface-soft)",color:"var(--muted)"},children:Zu[p]||p}))
          ]}),
          c.jsx("button",{type:"button",className:"icon-btn","aria-label":"إغلاق الفقاعة",onClick:()=>setWordBubbleData(null),children:c.jsx(tt,{size:18})})
        ]}),
        c.jsxs("div",{className:"bubble-word-header",dir:"ltr",children:[
          c.jsxs("div",{children:[
            c.jsx("strong",{className:"bubble-main-word",children:wordBubbleData.clickedText}),
            wordBubbleData.baseWord && wordBubbleData.baseWord.toLowerCase() !== wordBubbleData.clickedText.toLowerCase() && c.jsxs("small",{className:"bubble-base-note",children:[` (أصل الكلمة: ${wordBubbleData.baseWord})`]})
          ]}),
          c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[
            wordBubbleData.wordObj ? da(wordBubbleData.wordObj) : c.jsxs("button",{
              type:"button",
              className:"audio-pill-btn",
              onClick:()=>playAudio({id:`bubble_${wordBubbleData.baseWord||wordBubbleData.clickedText}`,word:wordBubbleData.clickedText}, g.defaultDialect||"us"),
              children:[c.jsx(Qi,{size:13})," نطق الكلمة"]
            }),
            wordBubbleData.wordObj && it(wordBubbleData.wordObj)
          ]})
        ]}),
        c.jsx("div",{className:"bubble-ar-meaning",children:wordBubbleData.ar}),

        // If the clicked word is a verb, show its 3 conjugations + translation + audio button inside the bubble!
        wordBubbleData.verbConj&&c.jsxs("div",{className:"bubble-verb-box",children:[
          c.jsxs("div",{className:"bubble-verb-head",children:[
            c.jsxs("span",{children:[
              "تصاريف الفعل (",
              wordBubbleData.verbConj.type==="irregular"?"شاذ Irregular":"قياسي Regular",
              "):"
            ]}),
            c.jsxs("button",{
              type:"button",
              className:"audio-pill-btn",
              onClick:()=>speakSentence(`${wordBubbleData.verbConj.v1}. ${wordBubbleData.verbConj.v2}. ${wordBubbleData.verbConj.v3}.`),
              children:[c.jsx(Qi,{size:12})," نطق التصاريف"]
            })
          ]}),
          c.jsxs("div",{className:"conj-table-grid",style:{margin:"8px 0 4px"},dir:"ltr",children:[
            c.jsxs("div",{className:"conj-cell",children:[c.jsx("small",{children:"V1 · مضارع"}),c.jsx("strong",{children:wordBubbleData.verbConj.v1})]}),
            c.jsxs("div",{className:"conj-cell",children:[c.jsx("small",{children:"V2 · ماضٍ"}),c.jsx("strong",{children:wordBubbleData.verbConj.v2})]}),
            c.jsxs("div",{className:"conj-cell",children:[c.jsx("small",{children:"V3 · ثالث"}),c.jsx("strong",{children:wordBubbleData.verbConj.v3})]}),
            c.jsxs("div",{className:"conj-cell",children:[c.jsx("small",{children:"V-ing · مستمر"}),c.jsx("strong",{children:wordBubbleData.verbConj.ving})]})
          ]}),
          c.jsxs("div",{style:{fontSize:"11.5px",color:"var(--muted)",textAlign:"right"},children:[
            `معنى الفعل: ${wordBubbleData.verbConj.ar}`
          ]})
        ]}),

        wordBubbleData.wordObj&&c.jsxs("div",{className:"bubble-footer",children:[
          c.jsxs("button",{
            type:"button",
            className:"text-btn",
            onClick:()=>{const wObj = wordBubbleData.wordObj; setWordBubbleData(null); nt(wObj);},
            children:["فتح البطاقة المعجمية الكاملة للكلمة ",c.jsx(at,{size:14})]
          })
        ]})
      ]
    })}),

    // MODAL: Verb Conjugations 3 Illustrative Sentences (in التصاريف الثلاثة للأفعال section ONLY)
    selectedVerbDetail&&c.jsxs(Ki,{title:"الأمثلة التوضيحية والتفاصيل للتصاريف الثلاثة",onClose:()=>setSelectedVerbDetail(null),children:[
      c.jsxs("div",{className:"detail-word",dir:"ltr",style:{marginBottom:"16px"},children:[
        c.jsxs("div",{style:{marginRight:"auto"},children:[
          c.jsx("h2",{children:selectedVerbDetail.v1}),
          c.jsxs("span",{className:`badge ${selectedVerbDetail.type==="irregular"?"level-C1":"level-A1"}`,children:[
            selectedVerbDetail.type==="irregular"?"فعل شاذ · Irregular Verb":"فعل قياسي · Regular Verb"
          ]})
        ]}),
        selectedVerbDetail.wordObj && da(selectedVerbDetail.wordObj, !0),
        selectedVerbDetail.wordObj && it(selectedVerbDetail.wordObj)
      ]}),
      c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"},children:[
        c.jsxs("strong",{style:{fontSize:"17px",color:"var(--green)"},children:[`المعنى: ${selectedVerbDetail.ar}`]}),
        c.jsxs("button",{
          type:"button",
          className:"audio-pill-btn large",
          onClick:()=>speakSentence(`${selectedVerbDetail.v1}. ${selectedVerbDetail.v2}. ${selectedVerbDetail.v3}.`),
          children:[c.jsx(Qi,{size:14})," استمع للتصاريف الثلاثة معاً"]
        })
      ]}),
      c.jsxs("div",{className:"conj-table-grid",dir:"ltr",style:{marginBottom:"20px"},children:[
        c.jsxs("div",{className:"conj-cell",children:[c.jsx("small",{children:"V1 · المضارع / المصدر"}),c.jsx("strong",{children:selectedVerbDetail.v1})]}),
        c.jsxs("div",{className:"conj-cell",children:[c.jsx("small",{children:"V2 · الماضي البسيط"}),c.jsx("strong",{children:selectedVerbDetail.v2})]}),
        c.jsxs("div",{className:"conj-cell",children:[c.jsx("small",{children:"V3 · التصريف الثالث"}),c.jsx("strong",{children:selectedVerbDetail.v3})]}),
        c.jsxs("div",{className:"conj-cell",children:[c.jsx("small",{children:"V-ing · المستمر"}),c.jsx("strong",{children:selectedVerbDetail.ving})]})
      ]}),
      c.jsx("h3",{style:{fontSize:"15px",color:"var(--text)",marginBottom:"12px"},children:"الجمل التوضيحية لكل تصريف مع النطق والترجمة:"}),
      c.jsx("div",{className:"grammar-examples-list",children:(selectedVerbDetail.conjugationExamples||[]).map((exItem, exIdx)=>c.jsxs("div",{key:exIdx,className:"example-collapse-card",children:[
        c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px"},children:[
          c.jsx("span",{className:"badge level-A2",children:exItem.tag}),
          c.jsx("strong",{dir:"ltr",style:{fontSize:"12px",color:"var(--green-dark)"},children:exItem.form})
        ]}),
        c.jsxs("div",{className:"example-en-line",dir:"ltr",children:[
          c.jsx("span",{children:renderHighlightedSentence(exItem.en, exItem.form.split(" ").pop())}),
          renderSingleSentenceAudioBtn(exItem.en)
        ]}),
        c.jsx("div",{className:"example-ar-line",children:exItem.ar})
      ]}))})
    ]}),

    // MODAL: Explore Word (with Single AI Sentence Audio Button)
    B&&typeof B=="object"&&c.jsxs(Ki,{title:"استكشف الكلمة",onClose:()=>A(null),children:[
      c.jsxs("div",{className:"detail-word",dir:"ltr",children:[
        c.jsxs("div",{style:{marginRight:"auto"},children:[
          c.jsx("h2",{children:B.word}),
          c.jsxs("div",{className:"pronunciation",children:[
            "US: ", B.phonetics?.us || `/${cleanWordForSpeech(B.word)}/`,
            c.jsx("span",{children:"•"}),
            "UK: ", B.phonetics?.uk || `/${cleanWordForSpeech(B.word)}/`
          ]})
        ]}),
        da(B,!0),
        it(B)
      ]}),
      c.jsx("div",{className:"sense-list detail-senses",children:B.senses.map((v,_)=>c.jsxs("div",{key:_,className:"sense-item-box",children:[
        c.jsx(Ha,{level:v.level}),
        c.jsxs("div",{style:{flex:1},children:[
          c.jsx("small",{children:v.pos?.map(C=>Zu[C]||C).join(" / ")}),
          c.jsx("strong",{style:{display:"block",margin:"3px 0"},children:v.ar||v.meaning_ar}),
          v.example_en&&c.jsxs("button",{
            type:"button",
            className:`example-collapse-btn ${openSenseIdx===_?"active":""}`,
            onClick:()=>setOpenSenseIdx(openSenseIdx===_?null:_),
            children:[c.jsx(Ii,{size:13}), openSenseIdx===_?"إخفاء المثال ▴":"مثال سياقي ▾"]
          }),
          (openSenseIdx===_ && v.example_en)&&c.jsxs("div",{className:"example-collapse-card",children:[
            c.jsxs("div",{className:"example-en-line",dir:"ltr",children:[
              c.jsx("span",{children:renderHighlightedSentence(v.example_en, B.word)}),
              renderSingleSentenceAudioBtn(v.example_en)
            ]}),
            c.jsx("div",{className:"example-ar-line",children:v.example_ar})
          ]})
        ]})
      ]}))}),
      c.jsxs("div",{className:"source-snippet",children:[
        c.jsx("span",{children:"البيانات المعجمية"}),
        c.jsxs("p",{dir:"ltr",children:[B.word," ",c.jsx("em",{children:B.sourceText||B.raw_notation})]}),
        c.jsxs("small",{children:["المستويات: ",B.levels?.join(", ")," · مراجعة قاموسية كاملة"]})
      ]}),
      c.jsx("p",{className:"fine-print",children:"كل كلمة تُسمع بالإنترنت تُحفظ تلقائياً في ذاكرة جهازك لتعمل بدون إنترنت مدى الحياة."})
    ]}),

    // MODAL: Quiz Mode Multi-Selector
    openQuizModeModal&&c.jsxs(Ki,{title:"اختيار أنماط الاختبار",onClose:()=>setOpenQuizModeModal(!1),children:[
      c.jsx("p",{style:{marginBottom:"12px"},children:"اختر نمطاً واحداً أو أكثر للاختبار (أو اختر الكل):"}),
      [
        {id:"meaning_ar", title:"اختيار المعنى العربي", desc:"عرض الكلمة الإنجليزية واختيار معناها العربي المناسب."},
        {id:"word_en", title:"اختيار الكلمة الإنجليزية", desc:"عرض المعنى العربي والنوع واختيار الكلمة الإنجليزية."},
        {id:"listening", title:"تحدي الاستماع الصوتي", desc:"سماع نطق الكلمة واختيار الكلمة الصحيحة."},
        {id:"sentence", title:"إكمال الجملة السياقية", desc:"عرض الجملة مع فراغ (_______) واختيار الكلمة المناسبة دون ترجمة."},
        {id:"spelling", title:"الإملاء السريع (ترتيب الحروف)", desc:"عرض المعنى وتركيب حروف الكلمة بالترتيب الصحيح."}
      ].map(m => {
        const isSelected = g.quizModes.includes(m.id);
        return c.jsxs("div",{
          key:m.id,
          className:`quiz-mode-item ${isSelected?"selected":""}`,
          onClick:()=>{
            const updated = isSelected 
              ? (g.quizModes.length > 1 ? g.quizModes.filter(x=>x!==m.id) : g.quizModes)
              : [...g.quizModes, m.id];
            E(prev => ({...prev, quizModes: updated}));
          },
          children:[
            c.jsxs("div",{children:[c.jsx("strong",{children:m.title}),c.jsx("small",{style:{display:"block",color:"var(--muted)"},children:m.desc})]}),
            c.jsx("span",{className:"badge",children:isSelected?"✓ مفعّل":"غير محدد"})
          ]
        });
      }),
      c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"14px"},children:[
        c.jsx("button",{
          type:"button",
          className:"btn secondary",
          onClick:()=>E(prev => ({...prev, quizModes:["meaning_ar","word_en","listening","sentence","spelling"]})),
          children:"اختيار الكل"
        }),
        c.jsx("button",{type:"button",className:"btn primary",onClick:()=>setOpenQuizModeModal(!1),children:"حفظ الإعدادات"})
      ]})
    ]}),

    // MODAL: Import JSON Progress Confirmation
    openImportModal&&c.jsxs(Ki,{title:"استيراد بيانات التقدم",onClose:()=>setOpenImportModal(!1),children:[
      c.jsx("p",{children:"تم فحص ملف النسخ الاحتياطي بنجاح. اختر كيف تود تطبيق البيانات:"}),
      c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",margin:"18px 0"},children:[
        c.jsxs("button",{type:"button",className:"btn primary",onClick:()=>executeImport(!0),children:[c.jsx(Lu,{size:17})," دمج مع التقدم الحالي (الحفاظ على الكلمات السابقة)"]}),
        c.jsxs("button",{type:"button",className:"btn secondary",onClick:()=>executeImport(!1),children:[c.jsx(hc,{size:17})," استبدال التقدم الحالي بالكامل"]})
      ]})
    ]}),

    // MODAL: Settings
    B==="settings"&&c.jsxs(Ki,{title:"إعدادات التعلّم",onClose:()=>A(null),children:[
      c.jsxs("div",{className:"settings-section",children:[
        c.jsxs("h3",{children:[c.jsx(d1,{size:19})," النطق واللهجة المفضلة"]}),
        c.jsxs("label",{className:"field-label",children:[
          "اللهجة الافتراضية للاختبارات والجمل",
          c.jsxs("select",{
            "aria-label":"اللهجة الافتراضية",
            value: g.defaultDialect || "us",
            onChange: v => E({...g, defaultDialect: v.target.value}),
            children:[
              c.jsx("option",{value:"us",children:"اللهجة الأمريكية (US Audio)"}),
              c.jsx("option",{value:"uk",children:"اللهجة البريطانية (UK Audio)"})
            ]
          })
        ]}),
        c.jsxs("label",{className:"field-label",children:[
          "سرعة النطق الصوتي ",
          c.jsxs("span",{dir:"ltr",children:[g.rate.toFixed(2),"×"]}),
          c.jsx("input",{type:"range","aria-label":"سرعة النطق",min:"0.5",max:"1.5",step:"0.05",value:g.rate,onChange:v=>E({...g,rate:Number(v.target.value)})})
        ]}),
        c.jsxs("div",{className:"speech-status",children:[
          c.jsx("span",{className:`status-dot ${Le.length||Al?"ready":""}`}),
          `الكلمات المحفوظة صوتياً للعمل بدون إنترنت مدى الحياة: ${cachedAudioCount} تسجيل صوتي.`
        ]}),
        c.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[
          c.jsxs("button",{type:"button",className:"btn secondary",onClick:()=>playAudio(Cl,"us"),children:[c.jsx(Qi,{size:17})," تجربة النطق الأمريكي (US)"]}),
          c.jsxs("button",{type:"button",className:"btn secondary",onClick:()=>playAudio(Cl,"uk"),children:[c.jsx(Qi,{size:17})," تجربة النطق البريطاني (UK)"]})
        ]})
      ]}),
      c.jsxs("div",{className:"settings-section",children:[
        c.jsxs("h3",{children:[c.jsx(yc,{size:19})," إيقاعك اليومي ووقت الاختبار"]}),
        c.jsxs("label",{className:"field-label",children:[
          "هدف المراجعات والإجابات يومياً",
          c.jsx("select",{"aria-label":"الهدف اليومي",value:g.goal,onChange:v=>E({...g,goal:Number(v.target.value)}),children:[5,10,15,20,30,50].map(v=>c.jsxs("option",{value:v,children:[v," خطوات في اليوم"]},v))})
        ]}),
        c.jsxs("label",{className:"field-label",children:[
          "وقت السؤال الافتراضي في الوضع الصعب (الاختبارات)",
          c.jsx("select",{"aria-label":"وقت السؤال في الوضع الصعب",value:g.quizTimeLimit||12,onChange:v=>E({...g,quizTimeLimit:Number(v.target.value)}),children:[5,8,10,12,15,20,30,45,60].map(v=>c.jsxs("option",{value:v,children:[v," ثانية لكل سؤال"]},v))})
        ]})
      ]}),
      c.jsxs("div",{className:"settings-section",children:[
        c.jsxs("h3",{children:[c.jsx(mc,{size:19})," بياناتك وإدارة التقدم"]}),
        c.jsx("p",{children:"جميع بياناتك ومفرداتك المتقنة محفوظة بأمان محلياً على جهازك. يمكنك تصديرها واستيرادها متى شئت:"}),
        c.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[
          c.jsxs("button",{type:"button",className:"btn secondary",onClick:()=>Vi("lexora-progress.json",g),children:["تصدير بيانات التقدم (JSON) ",c.jsx(mc,{size:17})]}),
          c.jsxs("button",{type:"button",className:"btn secondary",onClick:()=>fileInputRef.current?.click(),children:["استيراد بيانات التقدم (JSON) ",c.jsx(ah,{size:17})]}),
          c.jsx("input",{ref:fileInputRef,type:"file",accept:".json",style:{display:"none"},onChange:handleImportFile})
        ]}),
        Ve&&c.jsxs("button",{type:"button",className:"btn primary install-btn",style:{marginTop:"12px"},onClick:async()=>{await Ve.prompt();ml(null);},children:["تثبيت تطبيق Lexora على جهازك ",c.jsx(ah,{size:17})]})
      ]})
    ]}),

    // MODAL: Content Source
    B==="source"&&c.jsxs(Ki,{title:"المحتوى والمصدر",onClose:()=>A(null),children:[
      c.jsxs("div",{className:"source-count",children:[
        c.jsx("strong",{children:Qe.length}),
        c.jsxs("div",{children:[
          c.jsx("strong",{children:"مدخل معجمي موحّد (A1–C1)"}),
          c.jsx("small",{children:Vu.translations})
        ]}),
        c.jsx(pc,{size:28})
      ]}),
      c.jsx("p",{children:Vu.license}),
      c.jsx("p",{children:Vu.note}),
      c.jsx("p",{className:"fine-print",children:"مصمم وفق الهوية البصرية الأصلية الكاملة لمختبر Lexora للغة الإنجليزية مع دعم كامل للعمل على جميع الأجهزة بالإنترنت وبدونه."})
    ]})
  ]});
}

function xc({eyebrow:g,title:E,description:O}){
  return c.jsxs("div",{className:"page-intro subpage-intro",children:[
    c.jsxs("div",{children:[
      c.jsxs("div",{className:"eyebrow",children:[c.jsx("span",{}),g]}),
      c.jsx("h1",{children:E}),
      c.jsx("p",{children:O})
    ]}),
    c.jsx("span",{className:"intro-icon",children:c.jsx(Ii,{size:26})})
  ]});
}

Km.createRoot(document.getElementById("root")).render(c.jsx(Ym.StrictMode,{children:c.jsx(mh,{})}));
if("serviceWorker" in navigator) {
  window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js?v=11").catch(()=>{}));
}
