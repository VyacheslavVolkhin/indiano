
/* Jet Cache: catalog/view/theme/indiano/js/jquery.min.js */
try{
/*! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.1",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=lt(),k=lt(),E=lt(),S=!1,A=function(){return 0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=bt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+xt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return At(e.replace(z,"$1"),t,n,i)}function st(e){return K.test(e+"")}function lt(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[b]=!0,e}function ct(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function pt(e,t,n){e=e.split("|");var r,i=e.length,a=n?null:t;while(i--)(r=o.attrHandle[e[i]])&&r!==t||(o.attrHandle[e[i]]=a)}function ft(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function dt(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:t}function gt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function yt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function vt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.parentWindow;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.frameElement&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ct(function(e){return e.innerHTML="<a href='#'></a>",pt("type|href|height|width",dt,"#"===e.firstChild.getAttribute("href")),pt(B,ft,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),r.input=ct(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),pt("value",ht,r.attributes&&r.input),r.getElementsByTagName=ct(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ct(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ct(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=st(n.querySelectorAll))&&(ct(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ct(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=st(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ct(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=st(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},r.sortDetached=ct(function(e){return 1&e.compareDocumentPosition(n.createElement("div"))}),A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return gt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?gt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:ut,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=bt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?ut(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return at(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:ut(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:vt(function(){return[0]}),last:vt(function(e,t){return[t-1]}),eq:vt(function(e,t,n){return[0>n?n+t:n]}),even:vt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:vt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:vt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:vt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=mt(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=yt(n);function bt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function wt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function Tt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Ct(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function Nt(e,t,n,r,i,o){return r&&!r[b]&&(r=Nt(r)),i&&!i[b]&&(i=Nt(i,o)),ut(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||St(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:Ct(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=Ct(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=Ct(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function kt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=wt(function(e){return e===t},s,!0),p=wt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[wt(Tt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return Nt(l>1&&Tt(f),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),i>r&&kt(e=e.slice(r)),i>r&&xt(e))}f.push(n)}return Tt(f)}function Et(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=Ct(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?ut(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=bt(e)),n=t.length;while(n--)o=kt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Et(i,r))}return o};function St(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function At(e,t,n,i){var a,s,u,c,p,f=bt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&xt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}o.pseudos.nth=o.pseudos.eq;function jt(){}jt.prototype=o.filters=o.pseudos,o.setFilters=new jt,r.sortStable=b.split("").sort(A).join("")===b,p(),[0,0].sort(A),r.detectDuplicates=S,x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!u||(n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)
}),n=s=l=u=r=o=null,t}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=x(this),l=t,u=e.match(T)||[];while(o=u[a++])l=r?l:!s.hasClass(o),s[l?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
}catch(e){console.log('Error in: catalog/view/theme/indiano/js/jquery.min.js: '+e.message);};

/* Jet Cache: catalog/view/javascript/jquery/dflip/js/dflip.min.js */
try{
/**
 * @preserve
 * Plugin Name: dflip
 * Description: dflip - 3D & 2D FlipBook
 *
 * Author: Deepak Ghimire
 * Author URI: http://codecanyon.net/user/dearhive?ref=dearhive
 */
"use strict";var DFLIP=DFLIP||{};var PRESENTATION=DFLIP;(function e(t,i){t.version="1.7.3.5";t.PAGE_MODE={SINGLE:1,DOUBLE:2,AUTO:null};t.SINGLE_PAGE_MODE={ZOOM:1,BOOKLET:2,AUTO:null};t.CONTROLSPOSITION={HIDDEN:"hide",TOP:"top",BOTTOM:"bottom"};t.DIRECTION={LTR:1,RTL:2};t.LINK_TARGET={NONE:0,SELF:1,BLANK:2,PARENT:3,TOP:4};t.CORNERS={TL:"tl",TR:"tr",BL:"bl",BR:"br",L:"l",R:"r",NONE:null};t.SOURCE_TYPE={IMAGE:"image",PDF:"pdf",HTML:"html"};t.DISPLAY_TYPE={WEBGL:"3D",HTML:"2D"};t.PAGE_SIZE={AUTO:0,SINGLE:1,DOUBLEINTERNAL:2};var n=t.defaults={webgl:true,webglShadow:true,soundEnable:true,search:false,height:"auto",autoEnableOutline:false,autoEnableThumbnail:false,overwritePDFOutline:false,enableDownload:true,duration:800,direction:t.DIRECTION.LTR,pageMode:t.PAGE_MODE.AUTO,singlePageMode:t.SINGLE_PAGE_MODE.AUTO,backgroundColor:"#fff",forceFit:true,transparent:false,hard:"none",openPage:1,annotationClass:"",autoPlay:false,autoPlayDuration:5e3,autoPlayStart:false,maxTextureSize:1600,minTextureSize:256,rangeChunkSize:524288,icons:{altnext:"ti-angle-right",altprev:"ti-angle-left",next:"ti-angle-right",prev:"ti-angle-left",end:"ti-angle-double-right",start:"ti-angle-double-left",share:"ti-sharethis",help:"ti-help-alt",more:"ti-more-alt",download:"ti-download",zoomin:"ti-zoom-in",zoomout:"ti-zoom-out",fullscreen:"ti-fullscreen",fitscreen:"ti-arrows-corner",thumbnail:"ti-layout-grid2",outline:"ti-menu-alt",close:"ti-close",search:"ti-search",doublepage:"ti-book",singlepage:"ti-file",sound:"ti-volume",facebook:"ti-facebook",google:"ti-google",twitter:"ti-twitter-alt",mail:"ti-email",play:"ti-control-play",pause:"ti-control-pause"},text:{toggleSound:"Turn on/off Sound",toggleThumbnails:"Toggle Thumbnails",toggleOutline:"Toggle Outline/Bookmark",previousPage:"Previous Page",nextPage:"Next Page",toggleFullscreen:"Toggle Fullscreen",zoomIn:"Zoom In",zoomOut:"Zoom Out",toggleHelp:"Toggle Help",singlePageMode:"Single Page Mode",doublePageMode:"Double Page Mode",downloadPDFFile:"Download PDF File",gotoFirstPage:"Goto First Page",gotoLastPage:"Goto Last Page",play:"Start AutoPlay",pause:"Pause AutoPlay",share:"Share",mailSubject:"I wanted you to see this FlipBook",mailBody:"Check out this site {{url}}",loading:"Loading"},allControls:"altPrev,pageNumber,altNext,play,outline,thumbnail,zoomIn,zoomOut,fullScreen,share,download,search,more,pageMode,startPage,endPage,sound",moreControls:"download,pageMode,startPage,endPage,sound",hideControls:"",controlsPosition:t.CONTROLSPOSITION.BOTTOM,paddingTop:30,paddingLeft:20,paddingRight:20,paddingBottom:30,enableAnalytics:false,scrollWheel:true,onCreate:function(e){},onCreateUI:function(e){},onFlip:function(e){},beforeFlip:function(e){},onReady:function(e){},zoomRatio:1.5,pageSize:t.PAGE_SIZE.AUTO,pdfjsSrc:"js/libs/pdf.min.js",pdfjsCompatibilitySrc:"js/libs/compatibility.js",pdfjsWorkerSrc:"js/libs/pdf.worker.min.js",threejsSrc:"js/libs/three.min.js",mockupjsSrc:"js/libs/mockup.min.js",soundFile:"sound/turn2.mp3",imagesLocation:"images",imageResourcesPath:"images/pdfjs/",cMapUrl:"cmaps/",enableDebugLog:false,canvasToBlob:false,enableAnnotation:true,pdfRenderQuality:.9,textureLoadFallback:"blank",stiffness:3,backgroundImage:"",pageRatio:null,pixelRatio:window.devicePixelRatio||1,thumbElement:"div",spotLightIntensity:.22,ambientLightColor:"#fff",ambientLightIntensity:.8,shadowOpacity:.15,linkTarget:t.LINK_TARGET.BLANK,sharePrefix:"flipbook-"};var a="WebKitCSSMatrix"in window||document.body&&"MozPerspective"in document.body.style,o="onmousedown"in window,r="ontouchstart"in window;var s=navigator.userAgent;var l=t.utils={drag:{left:0,right:1,none:-1},mouseEvents:o?{type:"mouse",start:"mousedown",move:"mousemove",end:"mouseup"}:{type:"touch",start:"touchstart",move:"touchmove",end:"touchend"},html:{div:"<div/>",img:"<img/>",a:"<a>",input:"<input type='text'/>"},getSharePrefix:function(){var e=l.getSharePrefixes();return e[0]},getSharePrefixes:function(){var e=(t.defaults.sharePrefix+",dflip-,flipbook-,dearflip-").split(",").filter(function(e){return e});return e},toRad:function(e){return e*Math.PI/180},isset:function(e,t){return e==null?t:e},isnull:function(e){return e==null||e==null},toDeg:function(e){return e*180/Math.PI},transition:function(e,t){return e?t/1e3+"s ease-out":"0s none"},hasCompatibility:function(){var e=false;if(window.dFlipLocation!=null){if(window.dFlipLocation.indexOf("lip-lit")>0)e=true}return e},scrollIntoView:function(e,t,i){t=t||e.parentNode;t.scrollTop=e.offsetTop-t.offsetTop+(i===false?e.offsetHeight-t.offsetHeight:0);t.scrollLeft=e.offsetLeft-t.offsetLeft},display:function(e){return e?"block":"none"},resetTranslate:function(){return w(0,0)},translateStr:function(e,t){return a?" translate3d("+e+"px,"+t+"px, 0px) ":" translate("+e+"px, "+t+"px) "},httpsCorrection:function(e){var t=window.location;if(t.href.indexOf("https://")>-1&&e.indexOf(t.hostname)>-1){e=e.replace("http://","https://")}if(t.href.indexOf("http://")>-1&&e.indexOf(t.hostname)>-1){e=e.replace("https://","http://")}return e},resetBoxShadow:function(){return"rgba(0, 0, 0, 0) 0px 0px 20px"},rotateStr:function(e){return" rotateZ("+e+"deg) "},bg:function(e){return"#fff"+C(e)},bgImage:function(e){return e==null||e=="blank"?"":" url("+e+")"},src:function(e){return e!=null?""+e+"":""},limitAt:function(e,t,i){return e<t?t:e>i?i:e},distOrigin:function(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))},distPoints:function(e,t,i,n){return Math.sqrt(Math.pow(i-e,2)+Math.pow(n-t,2))},calculateScale:function(e,t){var i=I(e[0].x,e[0].y,e[1].x,e[1].y),n=I(t[0].x,t[0].y,t[1].x,t[1].y);return n/i},getVectorAvg:function(e){return{x:e.map(function(e){return e.x}).reduce(l.sum)/e.length,y:e.map(function(e){return e.y}).reduce(l.sum)/e.length}},sum:function(e,t){return e+t},getTouches:function(e,t){t=t||{left:0,top:0};return Array.prototype.slice.call(e.touches).map(function(e){return{x:e.pageX-t.left,y:e.pageY-t.top}})},angleByDistance:function(e,t){var i=t/2;var n=S(e,0,t);return n<i?m(Math.asin(n/i)):90+m(Math.asin((n-i)/i))},log:function(e){if(n.enableDebugLog==true&&window.console)console.log(e)},lowerPowerOfTwo:function(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))},nearestPowerOfTwo:function(e,t){return Math.min(t||2048,Math.pow(2,Math.ceil(Math.log(e)/Math.LN2)))},zoomStops:function(e,t,i,n,a){if(n==null)n=256;if(a==null)a=2048;var o=Math.log(e/n)/Math.log(t);return n*Math.pow(t,i==null?Math.round(o):i==true?Math.ceil(o):Math.floor(o))},extendOptions:function(e,t){return i.extend(true,{},e,t)},getFullscreenElement:function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement},hasFullscreenEnabled:function(){return document.fullscreenEnabled||document.mozFullScreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled},getBasePage:function(e){return Math.floor(e/2)*2},loadResources:function e(t,i,n){var a=document,o=a.createElement(t),r=a.getElementsByTagName(t)[0];o.async=true;if(n){o.addEventListener("load",function(e){n(null,e)},false)}o.src=i;r.parentNode.insertBefore(o,r)},getScriptCallbacks:[],getScript:function(e,t,n){var a=l.getScriptCallbacks[e],o;function r(e,t){if(o!=null){if(t||!o.readyState||/loaded|complete/.test(o.readyState)){o.onload=o.onreadystatechange=null;o=null;o=null;if(!t){for(var i=0;i<a.length;i++){if(a[i])a[i]();a[i]=null}n=null}}}}if(i("script[src='"+e+"']").length===0){a=l.getScriptCallbacks[e]=[];a.push(t);o=document.createElement("script");var s=document.body.getElementsByTagName("script")[0];o.async=1;o.setAttribute("data-cfasync",false);if(s!=null){s.parentNode.insertBefore(o,s);s=null}else{document.body.appendChild(o)}o.addEventListener("load",r,false);o.addEventListener("readystatechange",r,false);o.addEventListener("complete",r,false);if(n){o.addEventListener("error",n,false)}o.src=e+(N.dom=="MS"?"?"+Math.random(1):"")}else{a.push(t)}},isHardPage:function(e,t,i,n){if(e!=null){if(e=="cover"){return t==0||n&&t==1||t==Math.ceil(i/(n?1:2))-(n?0:1)}else if(e=="all"){return true}else{var a=(","+e+",").indexOf(","+(t*2+1)+",")>-1;var o=(","+e+",").indexOf(","+(t*2+2)+",")>-1;return a||o}}return false},fixMouseEvent:function(e){if(e){var t=e.originalEvent||e;if(t.changedTouches&&t.changedTouches.length>0){var n=i.event.fix(e);var a=t.changedTouches[0];n.clientX=a.clientX;n.clientY=a.clientY;n.pageX=a.pageX;n.touches=t.touches;n.pageY=a.pageY;n.movementX=a.movementX;n.movementY=a.movementY;return n}else{return e}}else{return e}},hasWebgl:function(){try{var e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch(e){return false}}(),isBookletMode:function(e){return e.pageMode==t.PAGE_MODE.SINGLE&&e.singlePageMode==t.SINGLE_PAGE_MODE.BOOKLET},isRTLMode:function(e){return e.direction==t.DIRECTION.RTL},isMobile:function(){var e=false;(function(t){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))e=true})(s||navigator.vendor||window.opera);return e}(),isIOS:/(iPad|iPhone|iPod)/g.test(s),isSafari:/constructor/i.test(window.HTMLElement)||function(e){return e.toString()==="[object SafariRemoteNotification]"}(!window["safari"]||safari.pushNotification),prefix:function(){var e=window.getComputedStyle(document.documentElement,""),t=Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)[1],i="WebKit|Moz|MS".match(new RegExp("("+t+")","i"))[1];return{dom:i,lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.substr(1)}}(),__extends:function(e,t){for(var i in t)if(t.hasOwnProperty(i))e[i]=t[i];function n(){this.constructor=e}n.prototype=t.prototype;e.prototype=new n;e.__super=t.prototype;return e}};var c=t.SOURCE_TYPE,u=t.DISPLAY_TYPE,d=l.drag,f=l.mouseEvents,h=l.html,p=l.isset,g=l.isnull,v=l.toRad,m=l.toDeg,b=l.transition,w=l.translateStr,x=l.resetBoxShadow,P=l.rotateStr,y=l.bg,C=l.bgImage,L=l.src,S=l.limitAt,E=l.distOrigin,I=l.distPoints,T=l.angleByDistance,k=l.log,O=l.nearestPowerOfTwo,R=l.extendOptions,F=l.getBasePage,M=l.getScript,D=l.fixMouseEvent,N=l.prefix,A=l.isBookletMode,z=l.isRTLMode,B=l.isMobile,j=l.hasWebgl,_=l.isSafari,U=l.isIOS,H=l.__extends;(function e(){if(window.CanvasPixelArray){if(typeof window.CanvasPixelArray.prototype.set!=="function"){window.CanvasPixelArray.prototype.set=function(e){for(var t=0,i=this.length;t<i;t++){this[t]=e[t]}}}}else{var t=false,i;if(_){i=s.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//);t=i&&parseInt(i[1])<6}if(t){var n=window.CanvasRenderingContext2D.prototype;var a=n.createImageData;n.createImageData=function(e,t){var i=a.call(this,e,t);i.data.set=function(e){for(var t=0,i=this.length;t<i;t++){this[t]=e[t]}};return i};n=null}}})();(function e(){function t(e){window.setTimeout(e,20)}if("requestAnimationFrame"in window){return}window.requestAnimationFrame=window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t})();(function e(){if(typeof Uint8Array!=="undefined"){if(typeof Uint8Array.prototype.subarray==="undefined"){Uint8Array.prototype.subarray=function e(t,i){return new Uint8Array(this.slice(t,i))};Float32Array.prototype.subarray=function e(t,i){return new Float32Array(this.slice(t,i))}}if(typeof Float64Array==="undefined"){window.Float64Array=Float32Array}return}function t(e,t){return new n(this.slice(e,t))}function i(e,t){if(arguments.length<2){t=0}for(var i=0,n=e.length;i<n;++i,++t){this[t]=e[i]&255}}function n(e){var n,a,o;if(typeof e==="number"){n=[];for(a=0;a<e;++a){n[a]=0}}else if("slice"in e){n=e.slice(0)}else{n=[];for(a=0,o=e.length;a<o;++a){n[a]=e[a]}}n.subarray=t;n.buffer=n;n.byteLength=n.length;n.set=i;if(typeof e==="object"&&e.buffer){n.buffer=e.buffer}return n}window.Uint8Array=n;window.Int8Array=n;window.Uint32Array=n;window.Int32Array=n;window.Uint16Array=n;window.Float32Array=n;window.Float64Array=n})();var W=function(e){return i.extend(true,{},n,e)};var V=function(e,n){var a="df-ui";var o="df-ui-wrapper";var r=a+"-"+"btn";var s=z(n.target);var c=n.ui=i(h.div,{class:a});var u=n.options;c.dispose=function(){e.find("."+r).each(function(){i(this).off()});P.off();f.off();p.off();g.off();v.off();m.off();b.off();w.off();y.off();E.off();M.off();D.off();j.off();_.off();H.off();W.off();V.off();G.off();q.off();Z.off();N.remove();x.remove();p.remove();f.remove();v.remove();if(c.shareBox){if(c.shareBox.dispose)c.shareBox.dispose();c.shareBox=null}document.removeEventListener("keyup",be,false);window.removeEventListener("click",I,false);c.update=null;n=null};var d=function(e){if(isNaN(e))e=n.target._activePage;else if(e<1)e=1;else if(e>n.target.pageCount)e=n.target.pageCount;return e};var f=c.next=i(h.div,{class:r+" "+a+"-next "+u.icons["next"],title:s?u.text.previousPage:u.text.nextPage,html:"<span>"+u.text.nextPage+"</span>"}).on("click",function(){n.next()});var p=c.prev=i(h.div,{class:r+" "+a+"-prev "+u.icons["prev"],title:s?u.text.nextPage:u.text.previousPage,html:"<span>"+u.text.previousPage+"</span>"}).on("click",function(){n.prev()});var g=i(h.div,{class:r+" "+a+"-play "+u.icons["play"],title:u.text.play,html:"<span>"+u.text.play+"</span>"}).on("click",function(){var e=i(this);n.setAutoPlay(!e.hasClass(u.icons["pause"]))});if(u.autoPlay==true){c.play=g;n.setAutoPlay(u.autoPlayStart)}var v=i(h.div,{class:o+" "+a+"-zoom"});var m=c.zoomIn=i(h.div,{class:r+" "+a+"-zoomin "+u.icons["zoomin"],title:u.text.zoomIn,html:"<span>"+u.text.zoomIn+"</span>"}).on("click",function(){n.zoom(1);c.update();if(n.target.startPoint&&n.target.pan)n.target.pan(n.target.startPoint)});var b=c.zoomOut=i(h.div,{class:r+" "+a+"-zoomout "+u.icons["zoomout"],title:u.text.zoomOut,html:"<span>"+u.text.zoomOut+"</span>"}).on("click",function(){n.zoom(-1);c.update();if(n.target.startPoint&&n.target.pan)n.target.pan(n.target.startPoint)});v.append(m).append(b);var w=c.pageNumber=i(h.div,{class:r+" "+a+"-page"}).on("change",function(){var e=parseInt(c.pageInput.val(),10);e=d(e);n.gotoPage(e)}).on("keyup",function(e){if(e.keyCode==13){var t=parseInt(c.pageInput.val(),10);t=d(t);if(t!==d(n.target._activePage||n._activePage))n.gotoPage(t)}});c.pageInput=i('<input id="df_book_page_number" type="text"/>').appendTo(w);c.pageLabel=i('<label for="df_book_page_number"/>').appendTo(w);var x=i(h.div,{class:o+" "+a+"-size"});var P=i(h.div,{class:r+" "+a+"-help "+u.icons["help"],title:u.text.toggleHelp,html:"<span>"+u.text.toggleHelp+"</span>"}).on("click",function(){});var y=c.sound=i(h.div,{class:r+" "+a+"-sound "+u.icons["sound"],title:u.text.toggleSound,html:"<span>"+u.text.toggleSound+"</span>"}).on("click",function(){u.soundEnable=!u.soundEnable;c.updateSound()});c.updateSound=function(){if(u.soundEnable==false||u.soundEnable=="false")y.addClass("disabled");else y.removeClass("disabled")};c.updateSound();function C(e){c.search.removeClass("df-active")}if(typeof u.source=="string"&&u.search==true){var L=c.search=i(h.div,{class:r+" "+a+"-search "+u.icons["search"]}).on("click",function(e){if(!L.hasClass("df-active")){i(this).addClass("df-active");e.stopPropagation()}});window.addEventListener("click",C,false);var S=i(h.div,{class:"search-container"});L.append(S)}var E=c.more=i(h.div,{class:r+" "+a+"-more "+u.icons["more"]}).on("click",function(e){if(!E.hasClass("df-active")){i(this).addClass("df-active");e.stopPropagation()}});function I(e){E.removeClass("df-active")}window.addEventListener("click",I,false);var T=i(h.div,{class:"more-container"});E.append(T);if(typeof u.source=="string"&&u.enableDownload==true){var O=r+" "+a+"-download "+u.icons["download"];var R=c.download=i('<a download target="_blank" class="'+O+'"><span>'+u.text.downloadPDFFile+"</span></a>");R.attr("href",u.source).attr("title",u.text.downloadPDFFile)}var F=l.hasFullscreenEnabled();if(!F){e.addClass("df-custom-fullscreen")}c.switchFullscreen=function(){var e=l.getFullscreenElement();var t=n.container[0];if(c.isFullscreen!=true){n.container.addClass("df-fullscreen");if(t.requestFullscreen){t.requestFullscreen()}else if(t.msRequestFullscreen){t.msRequestFullscreen()}else if(t.mozRequestFullScreen){t.mozRequestFullScreen()}else if(t.webkitRequestFullscreen){t.webkitRequestFullscreen()}c.isFullscreen=true}else{n.container.removeClass("df-fullscreen");c.isFullscreen=false;if(document.exitFullscreen){if(document.fullscreenElement)document.exitFullscreen()}else if(document.msExitFullscreen){document.msExitFullscreen()}else if(document.mozCancelFullScreen){if(document.fullscreenElement)document.mozCancelFullScreen()}else if(document.webkitExitFullscreen){document.webkitExitFullscreen()}}if(!l.hasFullscreenEnabled()){setTimeout(function(){n.resize()},50)}};var M=c.fullScreen=i(h.div,{class:r+" "+a+"-fullscreen "+u.icons["fullscreen"],title:u.text.toggleFullscreen,html:"<span>"+u.text.toggleFullscreen+"</span>"}).on("click",c.switchFullscreen);var D=c.fit=i(h.div,{class:r+" "+a+"-fit "+u.icons["fitscreen"]}).on("click",function(){i(this).toggleClass("df-button-fit-active")});x.append(M);var N=i(h.div,{class:o+" "+a+"-controls"});var A=c.shareBox=new t.Share(e,u);var j=c.share=i(h.div,{class:r+" "+a+"-share "+u.icons["share"],title:u.text.share,html:"<span>"+u.text.share+"</span>"}).on("click",function(e){if(c.shareBox.isOpen==true)c.shareBox.close();else{c.shareBox.update(n.getURLHash());c.shareBox.show()}});var _=c.startPage=i(h.div,{class:r+" "+a+"-start "+(s?u.icons["end"]:u.icons["start"]),title:u.text.gotoFirstPage,html:"<span>"+u.text.gotoFirstPage+"</span>"}).on("click",function(){n.start()});var H=c.endPage=i(h.div,{class:r+" "+a+"-end "+(s?u.icons["start"]:u.icons["end"]),title:u.text.gotoLastPage,html:"<span>"+u.text.gotoLastPage+"</span>"}).on("click",function(){n.end()});var W=c.pageMode=i(h.div,{class:r+" "+a+"-pagemode "+u.icons["singlepage"],html:"<span>"+u.text.singlePageMode+"</span>"}).on("click",function(){var e=i(this);n.setPageMode(!e.hasClass(u.icons["doublepage"]))});n.setPageMode(n.target.pageMode==t.PAGE_MODE.SINGLE);var V=c.altPrev=i(h.div,{class:r+" "+a+"-prev"+" "+a+"-alt "+u.icons["prev"],title:s?u.text.nextPage:u.text.previousPage,html:"<span>"+u.text.previousPage+"</span>"}).on("click",function(){n.prev()});var G=c.altNext=i(h.div,{class:r+" "+a+"-next"+" "+a+"-alt "+u.icons["next"],title:s?u.text.previousPage:u.text.nextPage,html:"<span>"+u.text.nextPage+"</span>"}).on("click",function(){n.next()});var q=c.thumbnail=i(h.div,{class:r+" "+a+"-thumbnail "+u.icons["thumbnail"],title:u.text.toggleThumbnails,html:"<span>"+u.text.toggleThumbnails+"</span>"}).on("click",function(){var e=i(this);if(n.target.thumbContainer){var t=n.target.thumbContainer;t.toggleClass("df-sidemenu-visible");e.toggleClass("df-active")}else{n.contentProvider.initThumbs();e.toggleClass("df-active")}if(e.hasClass("df-active")){e.siblings(".df-active").trigger("click")}c.update(true)});var Z=c.outline=i(h.div,{class:r+" "+a+"-outline "+u.icons["outline"],title:u.text.toggleOutline,html:"<span>"+u.text.toggleOutline+"</span>"}).on("click",function(){var e=i(this);if(n.target.outlineContainer){var t=n.target.outlineContainer;e.toggleClass("df-active");t.toggleClass("df-sidemenu-visible");if(e.hasClass("df-active")){e.siblings(".df-active").trigger("click")}c.update(true)}});var Y=u.allControls.replace(/ /g,"").split(","),K=","+u.moreControls.replace(/ /g,"")+",",X=","+u.hideControls.replace(/ /g,"")+",";if(U&&B){X+=",fullScreen,"}var Q=K.split(",");for(var $=0;$<Y.length;$++){var J=Y[$];if(X.indexOf(","+J+",")<0){var ee=c[J];if(ee!=null&&typeof ee=="object"){if(K.indexOf(","+J+",")>-1&&J!=="more"&&J!=="pageNumber"){T.append(ee)}else{N.append(ee)}}}}e.append(N).append(p).append(f).append(v);var te=false,ie=false,ne=false;var ae=16,oe=17,re=18,se=83,le=86,ce=67,ue=69,de=71,fe=78,he=79,pe=46,ge=39,ve=37,me=27;document.addEventListener("keyup",be,false);function be(e){switch(e.keyCode){case me:if(c.isFullscreen==true){c.fullScreen.trigger("click")}else if(window.dfLightBox&&window.dfActiveLightBoxBook){window.dfLightBox.closeButton.trigger("click")}break;case ae:ie=false;break;case oe:te=false;break;case re:ne=false;break;case ve:n.prev();break;case ge:n.next();break;default:break}}c.update=function(i){k("ui update");var a=n.target;var o=d(a._activePage||n._activePage);var r=a.pageCount||n.pageCount;var s=a.direction==t.DIRECTION.RTL,l=o==1||o==0,u=o==r;c.next.show();c.prev.show();c.altNext.removeClass("disabled");c.altPrev.removeClass("disabled");if(l&&!s||u&&s){c.prev.hide();c.altPrev.addClass("disabled")}if(u&&!s||l&&s){c.next.hide();c.altNext.addClass("disabled")}c.pageInput.val(o);c.pageLabel.html(o+"/"+r);if(e.find(".df-sidemenu-visible").length>0){e.addClass("df-sidemenu-open")}else{e.removeClass("df-sidemenu-open")}if(i==true)n.resize();if(a.contentProvider.zoomScale==a.contentProvider.maxZoom){c.zoomIn.addClass("disabled")}else{c.zoomIn.removeClass("disabled")}if(a.contentProvider.zoomScale==1){c.zoomOut.addClass("disabled")}else{c.zoomOut.removeClass("disabled")}};if(n.target!=null){n.target.ui=c}if(u.onCreateUI!=null)u.onCreateUI(n)};var G=null;function q(){G=function(e){H(t,e);function t(t){t=t||{};var a=this;e.call(this,t);a.options=t;a.canvas=i(a.renderer.domElement).addClass("df-3dcanvas");a.container=t.container;a.container.append(a.canvas);a.type="PreviewStage";a.mouse=new THREE.Vector2;a.raycaster=new THREE.Raycaster;a.camera.position.set(0,20,600);a.camera.lookAt(new THREE.Vector3(0,0,0));a.spotLight.position.set(-220,330,550);a.spotLight.castShadow=B?false:t.webglShadow;if(a.spotLight.shadow){a.spotLight.shadow.bias=-8e-4}a.spotLight.intensity=p(t.spotLightIntensity,n.spotLightIntensity);a.ambientLight.color=new THREE.Color(p(t.ambientLightColor,n.ambientLightColor));a.ambientLight.intensity=p(t.ambientLightIntensity,n.ambientLightIntensity);var o=new THREE.ShadowMaterial;o.opacity=p(t.shadowOpacity,n.shadowOpacity);a.ground.material=o;a.ground.position.z=-2;a.orbitControl.maxAzimuthAngle=0;a.orbitControl.minAzimuthAngle=0;a.orbitControl.minPolarAngle=Math.PI/2;a.orbitControl.maxPolarAngle=2.2;a.orbitControl.mouseButtons.ORBIT=THREE.MOUSE.RIGHT;a.orbitControl.mouseButtons.PAN=-1;a.orbitControl.maxDistance=5e3;a.orbitControl.minDistance=50;a.orbitControl.noZoom=true;a.selectiveRendering=true;a.orbitControl.zoomSpeed=5;a.orbitControl.keyPanSpeed=0;a.orbitControl.center.set(0,0,0);a.orbitControl.update();a.swipe_threshold=B?15:20;var r=a.cssRenderer=new THREE.CSS3DRenderer;i(r.domElement).css({position:"absolute",top:0,pointerEvents:"none"}).addClass("df-3dcanvas df-csscanvas");a.container[0].appendChild(r.domElement);var s=a.cssScene=new THREE.Scene;var c=document.createElement("div");c.className="df-page-content df-page-content-left";var u=document.createElement("div");u.className="df-page-content df-page-content-right";var d=s.divLeft=new THREE.CSS3DObject(c);var h=s.divRight=new THREE.CSS3DObject(u);s.add(d);s.add(h);a.resizeCallback=function(){r.setSize(a.canvas.width(),a.canvas.height())};function g(){a.renderRequestPending=true}window.addEventListener(f.move,g,false);window.addEventListener("keyup",g,false);a.dispose=function(){-a.clearChild();a.render();window.removeEventListener(f.move,g,false);if(a.options.scrollWheel==true){a.container[0].removeEventListener("mousewheel",v,false);a.container[0].removeEventListener("DOMMouseScroll",v,false)}window.removeEventListener("keyup",g,false);a.renderer.domElement.removeEventListener("mousemove",m,false);a.renderer.domElement.removeEventListener("touchmove",m,false);a.renderer.domElement.removeEventListener("mousedown",b,false);a.renderer.domElement.removeEventListener("touchstart",b,false);a.renderer.domElement.removeEventListener("mouseup",x,false);a.renderer.domElement.removeEventListener("touchend",x,false);a.canvas.remove();r.domElement.parentNode.removeChild(r.domElement);r=null;a.renderCallback=null;a.renderCallback=null;a.orbitControl.dispose();a.orbitControl=null;a.renderer.dispose();a.cancelRAF()};a.renderCallback=function(){if(TWEEN.getAll().length>0)a.renderRequestPending=true;TWEEN.update();r.render(s,a.camera)};var v=function(e){var t=0;if(e.wheelDelta!=null){t=e.wheelDelta}else if(e.detail!=null){t=-e.detail}if(t){var i=a.previewObject.contentProvider.zoomScale;if(t>0&&i==1||t<0&&i>1){e.preventDefault()}a.previewObject.zoom(t>0?1:-1)}g()};var m=function(e){a.renderRequestPending=true;e=D(e);if(a.isMouseDown&&e.movementX!=0&&e.movementY!=0){a.isMouseMoving=true}if(e.touches!=null&&e.touches.length==2&&a.startTouches!=null){a.zoomDirty=true;var t=l.getVectorAvg(l.getTouches(e,a.container.offset())),i=l.calculateScale(a.startTouches,l.getTouches(e)),n=i/a.lastScale;var o=a.previewObject.contentProvider.zoomScale,r=t.x,s=t.y;a.camera.position.z=a.originalZ/i;a.lastScale=i;a.lastZoomCenter=t;e.preventDefault();return}if(a.isMouseDown==true&&a.previewObject.contentProvider.zoomScale==1){var c=e.pageX-a.lastPos,u=performance.now()-a.lastTime;if(Math.abs(c)>a.swipe_threshold){if(c<0){a.target.next()}else{a.target.prev()}e.preventDefault();a.isMouseDown=false}a.lastPos=e.pageX;a.lastTime=performance.now()}};var b=function(e){e=D(e);if(e.touches!=null&&e.touches.length==2&&a.startTouches==null){a.startTouches=l.getTouches(e);a.lastScale=1;a.originalZ=a.camera.position.z*1}document.activeElement.blur();a.mouseValue=e.pageX+","+e.pageY;a.isMouseMoving=false;a.isMouseDown=true;a.lastPos=e.pageX;a.lastTime=performance.now()};var w=function(e){a.isMouseDown=false;if(e.button!==0)return this;var t=e.pageX+","+e.pageY;if(a.isMouseMoving){}else if(t==a.mouseValue){e=e||window.event;e=i.event.fix(e);var n=a.mouse,o=a.raycaster;n.x=e.offsetX/a.canvas.innerWidth()*2-1;n.y=1-e.offsetY/a.canvas.innerHeight()*2;o.setFromCamera(n,a.camera);var r=o.intersectObjects(a.target instanceof MOCKUP.Bundle?a.target.children:[a.target],true);if(r.length>0){var s,l=0;do{s=r[l]!=null?r[l].object:null;l++}while((s instanceof THREE.BoxHelper||!(s instanceof MOCKUP.Paper)||s.isFlipping==true)&&l<r.length);if(s.userData.object!=null){}else{if(s.angles[1]>90){if(s.isEdge!=true)a.target.next()}else{if(s.isEdge!=true)a.target.prev()}}}else{}}};var x=function(e){e=D(e);if(e.touches!=null&&e.touches.length==0){var t=a.previewObject.contentProvider.zoomScale;if(a.zoomDirty==true){a.previewObject.contentProvider.zoomScale=l.limitAt(a.previewObject.contentProvider.zoomScale*a.lastScale,1,a.previewObject.contentProvider.maxZoom);a.previewObject.zoomValue=a.previewObject.contentProvider.zoomScale*1;a.previewObject.resize();a.zoomDirty=false}a.lastScale=null;a.startTouches=null}if(e.touches!=null&&e.touches.length>1)return;w(e)};a.renderer.domElement.addEventListener("mousemove",m,false);a.renderer.domElement.addEventListener("touchmove",m,false);a.renderer.domElement.addEventListener("mousedown",b,false);a.renderer.domElement.addEventListener("touchstart",b,false);a.renderer.domElement.addEventListener("mouseup",x,false);a.renderer.domElement.addEventListener("touchend",x,false);if(a.options.scrollWheel==true){a.container[0].addEventListener("mousewheel",v,false);a.container[0].addEventListener("DOMMouseScroll",v,false)}i(a.renderer.domElement).css({display:"block"});i(window).trigger("resize");return this}t.prototype.width=function(){return this.container.width()};t.prototype.height=function(){return this.container.height()};return t}(MOCKUP.Stage);MOCKUP.PreviewStage=G;var e=function(e){H(i,e);function i(t,i){t=t||{};t.folds=1;e.call(this,t,i);this.angle=0;this.isFlipping=false;this.material.materials[5].transparent=true;this.material.materials[4].transparent=true;this.type="BookPaper"}i.prototype.tween=function(e,i){var n=this;var a=1e-5;n.originalStiff=n.stiffness;var o=n.newStiffness;var r=A(n.parent);var s=i-e;var l=e>90;var c=n.parent.direction==t.DIRECTION.RTL;n.init={angle:e,angle2:e<90?0:180,stiff:n.originalStiff,index:l&&!c||!l&&c?1:0};n.first={angle:e+s/4,angle2:e<90?90:90,stiff:n.originalStiff,index:l&&!c||!l&&c?1:.25};n.mid={angle:e+s*2/4,angle2:e<90?135:45,stiff:n.newStiffness,index:l&&!c||!l&&c?.5:.5};n.mid2={angle:e+s*3/4,angle2:e<90?180:0,stiff:n.newStiffness,index:l&&!c||!l&&c?.25:1};n.end={angle:i,angle2:e<90?180:0,stiff:n.newStiffness,index:l&&!c||!l&&c?0:1};n.isFlipping=true;var u=function(e,t){n.angles[1]=e.angle;n.angles[4]=n.isHard?e.angle:e.angle2;if(n.isHard==true){n.stiffness=0}else{n.stiffness=e.stiff/(o+a)*(n.newStiffness+a);n.stiffness=isNaN(n.stiffness)?0:e.stiff}if(r){n.material.materials[5].opacity=n.material.materials[4].opacity=e.index;n.castShadow=l&&!c||!l&&c?e.index>.5:e.index>.5}n.updateAngle(true)};if(r&&(!l&&!c||l&&c)){n.material.materials[5].opacity=n.material.materials[4].opacity=0;n.castShadow=false}n.currentTween=new TWEEN.Tween(n.init).to({angle:[n.first.angle,n.mid.angle,n.mid2.angle,n.end.angle],angle2:[n.first.angle2,n.mid.angle2,n.mid2.angle2,n.end.angle2],stiff:[n.first.stiff,n.mid.stiff,n.mid2.stiff,n.end.stiff],index:[n.first.index,n.mid.index,n.mid2.index,n.end.index]},n.parent.duration).onUpdate(function(e){u(this,e)}).easing(TWEEN.Easing.Sinusoidal.Out).onComplete(function(e){n.stiffness=n.newStiffness;n.updateAngle();n.material.materials[5].opacity=n.material.materials[4].opacity=1;n.castShadow=true;n.isFlipping=false;if(n.parent&&n.parent.refresh)n.parent.refresh()}).start()};return i}(MOCKUP.FlexBoxPaper);MOCKUP.BookPaper=e;var a=function(e){H(i,e);function i(i,n){i=i||{};i.segments=i.segments||50;this.pageCount=i.pageCount;this.height=i.height;this.width=i.width;this.direction=i.direction||t.DIRECTION.LTR;this.startPage=1;this.endPage=this.pageCount;this.stackCount=i.stackCount||6;this.materials=[];e.call(this,i,n);this.angles=[0,0,0,0,0,0];this.stiffness=i.stiffness==null?1.5:i.stiffness;this.hardConfig=i.hard;this._activePage=i.openPage||this.startPage;this.createStack(i);this.pageMode=i.pageMode||(B||this.pageCount<=2?t.PAGE_MODE.SINGLE:t.PAGE_MODE.DOUBLE);this.singlePageMode=i.singlePageMode||(B?t.SINGLE_PAGE_MODE.BOOKLET:t.SINGLE_PAGE_MODE.ZOOM);this.type="Book"}i.prototype.getPageByNumber=function(e){var t=A(this)?z(this)?e+1:e:Math.floor((e-1)/2);return this.getObjectByName(t.toString())};i.prototype.isPageHard=function(e){return l.isHardPage(this.hardConfig,e,this.pageCount)};i.prototype.activePage=function(e){if(e==null)return this._activePage;this.gotoPage(e)};i.prototype.gotoPage=function(e){e=parseInt(e,10);this._activePage=e;if(this.autoPlay==true){this.previewObject.setAutoPlay(this.autoPlay)}this.updatePage(e);if(this&&this.thumblist&&this.thumblist.review)this.thumblist.review()};i.prototype.moveBy=function(e){var t=this._activePage+e;t=S(t,this.startPage,this.endPage);if(this.firstFlipped!=true){this.previewObject.analytics({eventAction:"First Page Flip",options:this.previewObject.options});this.firstFlipped=true}this.gotoPage(t)};i.prototype.next=function(e){if(e==null)e=this.direction==t.DIRECTION.RTL?-this.pageMode:this.pageMode;this.moveBy(e)};i.prototype.prev=function(e){if(e==null)e=this.direction==t.DIRECTION.RTL?this.pageMode:-this.pageMode;this.moveBy(e)};i.prototype.updateAngle=function(){var e=this.angles[1];var t=this.angles[4];var i=t-e;var n=this.stackCount;for(var a=0;a<n;a++){var o=this.children[a];o.angles[1]=e+a*i/(n*100);o.stiffness=this.stiffness;o.updateAngle()}};i.prototype.refresh=function(){this.updatePage(this._activePage);if(this.flipCallback!=null)this.flipCallback()};i.prototype.updatePage=function(e){var i=this.direction==t.DIRECTION.RTL,a=A(this),o=F(e);var r=a?1:2;e=Math.floor(e/r);if(i)e=Math.ceil(this.pageCount/r)-e;var s=this.oldBaseNumber||0;var l=this.pageCount/r;var c=this.stackCount;var u=.02;var d=.4;var f=a?0:(.5-Math.abs(l/2-e)/l)/this.stiffness;var h=1;var p=Math.floor(c/2);var g=false;if(s>e){g=true;this.children[c-1].skipFlip=true;this.children.unshift(this.children.pop())}else if(s<e){this.children[0].skipFlip=true;this.children.push(this.children.shift())}var v=l-e;var m=5/l;var b=m*e/2;var w=m*v/2;var x=b<w?w:b;for(var P=0;P<c;P++){var y=this.children[P];var C=y.color;var L=y.angles[1];var S;var E=e-p+P;if(i)E=a?this.pageCount-E:Math.ceil(this.pageCount/2)-E-1;var I=y.isHard=this.isPageHard(E);var T=y.name;y.isEdge=false;if(P==0){y.depth=b<d?d:b}else if(P==c-1){y.depth=w<d?d:w}else{y.depth=d;y.isEdge=false}if(y.isFlipping==true){y.depth=d}y.position.x=0;var k=u*P,O=180-u*(P-p)+u*P;if(P<p){y.newStiffness=I||this.stiffness==0?0:f/(e/l)/4;S=k;y.position.z=x-(-P+p)*d;if(g==true)y.position.z-=d}else{S=O;y.newStiffness=I||this.stiffness==0?0:f/(Math.abs(l-e)/l)/4;y.position.z=x-(-c+P+p+1)*d-y.depth}if(y.isFlipping==false){if(Math.abs(L-S)>20&&y.skipFlip==false){y.depth=d;var R=y.stiffness;if(L>S){R=f/(Math.abs(l-e)/l)/4}else{R=f/(e/l)/4}y.position.z+=d;y.stiffness=isNaN(R)?y.stiffness:R;y.updateAngle(true);y.targetStiffness=I?0:P<e?f/(Math.abs(l-e)/l)/4:f/(e/l)/4;y.targetStiffness=I?0:isNaN(y.targetStiffness)?y.stiffness:y.targetStiffness;y.isFlipping=true;y.tween(L,S);if(this.preFlipCallback!=null)this.preFlipCallback()}else{y.skipFlip=false;y.newStiffness=isNaN(y.newStiffness)?0:y.newStiffness;if(y.angles[1]!=S||y.stiffness!=y.newStiffness||y.depth!=y.oldDepth){y.angles[1]=y.angles[4]=S;y.stiffness=y.newStiffness;y.updateAngle(true)}else{}}}y.visible=a?i?P<p||y.isFlipping:P>=p||y.isFlipping:E>=0&&E<l||a&&E==l;if(this.requestPage!=null){y.name=E.toString();if(y.name!=T){y.textureLoaded=false;y.frontImage(n.textureLoadFallback);y.frontPageStamp="-1";y.frontTextureLoaded=false;y.thumbLoaded=false;y.backImage(n.textureLoadFallback);y.backPageStamp="-1";y.backTextureLoaded=false;this.requestPage()}}y.oldDepth=y.depth;var M=Math.abs(y.geometry.boundingBox.max.x)<Math.abs(y.geometry.boundingBox.min.x)?y.geometry.boundingBox.max.x:y.geometry.boundingBox.min.x;y.position.x=y.isEdge==true&&y.isFlipping==false?P<p?M:-M:0}this.oldBaseNumber=e;if(this.updatePageCallback!=null)this.updatePageCallback()};i.prototype.createCover=function(e){e.width=e.width*2;this.cover=new MOCKUP.BiFold(e);this.add(this.cover)};i.prototype.createStack=function(e){var t="red,green,blue,yellow,orange,black".split(",");for(var i=0;i<this.stackCount;i++){e.angles=[,this.stackCount-i];e.stiffness=(this.stackCount-i)/100;var n=new MOCKUP.BookPaper(e);n.angles[1]=180;n.index=i;n.updateAngle();n.textureReady=false;n.textureRequested=false;this.add(n);n.color=t[i];n.position.z=-1*i}};i.prototype.shininess=function(e){if(e==null){return this.mainObject.shininess()}else{this.mainObject.shininess(e)}};i.prototype.bumpScale=function(e){if(e==null){return this.mainObject.bumpScale()}else{this.mainObject.bumpScale(e)}};i.prototype.frontImage=function(e){if(e==null){return this.mainObject.frontImage()}else{this.mainObject.frontImage(e)}};i.prototype.backImage=function(e){if(e==null){return this.mainObject.backImage()}else{this.mainObject.backImage(e)}};return i}(MOCKUP.Bundle);MOCKUP.Book=a}var Z=function(e){function n(e){e=e||{};this.type="PreviewObject";var i=this;i.zoomValue=1;function n(){setTimeout(function(){i.resize()},50)}window.addEventListener("resize",n,false);this.sound=document.createElement("audio");this.sound.setAttribute("src",e.soundFile+"?ver="+t.version);this.sound.setAttribute("type","audio/mpeg");this.autoPlayFunction=function(){if(i&&i.target.autoPlay){if(i.target.direction==t.DIRECTION.RTL)i.target.prev();else i.target.next()}};this.dispose=function(){clearInterval(this.autoPlayTimer);this.autoPlayTimer=null;this.autoPlayFunction=null;if(this.target&&this.target.children){for(var e=0;e<this.target.children.length;e++){var t=this.target.children[e];if(t&&t.currentTween)t.currentTween.stop()}}if(this.zoomTween){if(this.zoomTween.stop)this.zoomTween.stop();this.zoomTween=null}if(this.container&&this.container.info&&this.container.info.remove)this.container.info.remove();if(this.target&&this.target.dispose)this.target.dispose();this.target=null;if(this.stage&&this.stage.dispose)this.stage.dispose();this.stage=null;if(this.ui&&this.ui.dispose)this.ui.dispose();this.ui=null;if(this.contentProvider&&this.contentProvider.dispose)this.contentProvider.dispose();this.contentProvider=null;window.removeEventListener("resize",n)}}n.prototype={start:function(){this.target.gotoPage(this.target.startPage)},end:function(){this.target.gotoPage(this.target.endPage)},next:function(){},prev:function(){},getPageTextContent:function(e){return this.contentProvider.pdfDocument.getPage(e+1).then(function(e){return e.getTextContent({normalizeWhitespace:true})})},calculateSize:function(e,t,i,n,a,o,r,s){var l=e;var c=t-a;var u=l-n;var d=Math.ceil(s?c:c/2);var f=d/r;var h=null;if(o){h=Math.min(f,i-n);l=h}else{h=Math.min(u,i-n)}var p=f>h;var g,v;if(p){v=h;g=Math.floor(v*r)}else{g=d;v=Math.ceil(d/r)}if(o){l=Math.max(v+n,320)}return{stageHeight:l,isWide:p,height:v,width:g}},zoom:function(e){this.pendingZoom=true;this.zoomDelta=e;this.resize();if(this.ui)this.ui.update()},resize:function(){var e=this;if(e.target==null||e.target.ui==null||e.target.contentProvider==null||e.target.contentProvider.viewport==null||e.target.stage==null)return;if(this.ui&&this.ui.isFullscreen==true&&l.hasFullscreenEnabled()==true&&l.getFullscreenElement()==null){this.ui.switchFullscreen()}var n=e.target,a=e.container,o=e.options,r=n.stage,s=n.contentProvider,u=s.pageRatio,d=s.zoomViewport,f=z(n),h=n.mode!=="css",p=s.pageRatio>1,g=this.ui.isFullscreen==true?false:o.height==="auto",v,m,b,w,x,P,y,C=a.hasClass("df-sidemenu-open")?220:0,L=this.target.pageMode==t.PAGE_MODE.SINGLE;var I=a.width();if(I<400){e.container.addClass("df-xs")}else{e.container.removeClass("df-xs")}var T=a.find(".df-ui-controls").height();var k=o.paddingTop+(o.controlsPosition==t.CONTROLSPOSITION.TOP?T:0),O=o.paddingRight,R=o.paddingBottom+(o.controlsPosition==t.CONTROLSPOSITION.BOTTOM?T:0),F=o.paddingLeft;k=isNaN(k)?0:S(k,0,k),R=isNaN(R)?0:S(R,0,R),F=isNaN(F)?0:S(F,0,F),O=isNaN(O)?0:S(O,0,O);var M=k+R,D=F+O;var N=I-C;a.height(o.height);var A=i(window).height();var B=Math.min(a.height(),A);var j=e.calculateSize(B,N,A,M,D,g,u,L);if(g){B=_=e.calculateSize(B,N+C,A,M,D,g,u,L).stageHeight}else{B=_=j.stageHeight}a.height(B);var _=B;var U=N-D,H=_-M;b=Math.floor(L?U:U/2);m=Math.floor(b/u);v=m>H;if(v){m=H;b=m*u}y=s.maxZoom=s.zoomViewport.height/m;if(e.zoomValue==null)e.zoomValue=1;if(s.zoomScale==null)s.zoomScale=1;if(e.pendingZoom==true&&e.zoomDelta!=null){var W=e.zoomDelta,V,G=Math.max(m,b);e.zoomValue=e.zoomDelta>0?e.zoomValue*e.options.zoomRatio:e.zoomValue/e.options.zoomRatio;e.zoomValue=S(e.zoomValue,1,y);if(e.zoomValue==1){s.zoomScale=1}else{s.zoomScale=S(e.zoomValue,1,y)}}P=s.zoomScale;s.checkViewportSize(b,m,P);if(s.contentSourceType==c.PDF){b=s.imageViewport.width/P;m=s.imageViewport.height/P}if(s.zoomScale!=1){this.target.container.addClass("df-zoom-enabled")}var q=n.zoomWidth=Math.floor(b*P),Z=n.zoomHeight=Math.floor(m*P);var Y=q*2;if(h){var K=Z/n.height,X=N/_;var Q=P*(m+M)/K,$=P*(b*(L?1:2)+D)/K;var J=v?Q:$/X;r.resizeCanvas(N,_);w=1/(2*Math.tan(Math.PI*r.camera.fov*.5/180)/(J/P))+2.2;r.camera.updateProjectionMatrix();r.renderRequestPending=true;var ee=(k-R)*(n.height/m)/P/2;var te=s.zoomScale==1;if(r.camera.position.z!==w&&e.pendingZoom==true){if(e.zoomTween!=null)e.zoomTween.stop();e.zoomTween=new TWEEN.Tween({campos:r.camera.position.z,otx:r.orbitControl.target.x,oty:r.orbitControl.target.y,otz:r.orbitControl.target.z}).delay(0).to({campos:w,otx:0,oty:ee,otz:0},100).onUpdate(function(){r.camera.position.z=this.campos;if(te){r.camera.position.y=this.oty;r.orbitControl.target=new THREE.Vector3(this.otx,this.oty,this.otz)}r.orbitControl.update()}).easing(TWEEN.Easing.Linear.None).onComplete(function(){r.camera.position.z=w;if(s.zoomScale==1){r.camera.position.set(0,ee,w);r.orbitControl.target=new THREE.Vector3(0,ee,0)}r.orbitControl.update()}).start()}else{if(s.zoomScale==1){r.camera.position.set(0,ee,w);r.orbitControl.target=new THREE.Vector3(0,ee,0)}r.orbitControl.update()}r.orbitControl.update();r.orbitControl.mouseButtons.ORBIT=P!=1?-1:THREE.MOUSE.RIGHT;r.orbitControl.mouseButtons.PAN=P!=1?THREE.MOUSE.LEFT:-1}else{n.pageWidth=Math.round(b);n.fullWidth=n.pageWidth*2;n.height=Math.round(m);var ie=n.shiftHeight=Math.round(S((Z-_+M)/2,0,Z)),ne=n.shiftWidth=Math.round(S((Y-N+D)/2,0,Y));if(P==1){n.left=0;n.top=0}n.stage.css({top:-ie,bottom:-ie,right:-ne+(f?C:0),left:-ne+(f?0:C),paddingTop:k,paddingRight:O,paddingBottom:R,paddingLeft:F,transform:"translate3d("+n.left+"px,"+n.top+"px,0)"});n.stageHeight=r.height();n.wrapper.css({width:Y,height:Z,marginTop:B-Z-M>0?(B-M-Z)/2:0});var ae=Math.floor(E(b,m)*P);n.stage.find(".df-page-wrapper").width(ae).height(ae);n.stage.find(".df-book-page, .df-page-front , .df-page-back, .df-page-fold-inner-shadow").height(Z).width(q)}e.checkCenter({type:"resize"});if(s.zoomScale==1){this.target.container.removeClass("df-zoom-enabled")}if(n.thumblist){n.thumblist.reset(i(n.thumblist.container).height())}e.pendingZoom=false},playSound:function(){try{if(this.options&&this.options.soundEnable==true){this.sound.currentTime=0;this.sound.play()}}catch(e){}},setPageMode:function(e){if(e==true){this.ui.pageMode.addClass(this.options.icons["doublepage"]);this.ui.pageMode.html("<span>"+this.options.text.doublePageMode+"</span>");this.ui.pageMode.attr("title",this.options.text.doublePageMode);this.target.pageMode=t.PAGE_MODE.SINGLE}else{this.ui.pageMode.removeClass(this.options.icons["doublepage"]);this.ui.pageMode.html("<span>"+this.options.text.singlePageMode+"</span>");this.ui.pageMode.attr("title",this.options.text.singlePageMode);this.target.pageMode=t.PAGE_MODE.DOUBLE}if(this.target&&this.target.singlePageMode==t.SINGLE_PAGE_MODE.BOOKLET){this.target.reset()}this.resize()},setAutoPlay:function(e){if(this.options.autoPlay){e=e==true;var t=e?this.options.text.pause:this.options.text.play;this.ui.play.toggleClass(this.options.icons["pause"],e);this.ui.play.html("<span>"+t+"</span>");this.ui.play.attr("title",t);clearInterval(this.autoPlayTimer);if(e){this.autoPlayTimer=setInterval(this.autoPlayFunction,this.options.autoPlayDuration)}this.target.autoPlay=e}},height:function(e){if(e==null){return this.container.height()}else{this.options.height=e;this.container.height(e);this.resize()}},checkCenter:function(e){e=e==null?{}:e;this.centerType=this.centerType||"start";var i=this.target;var n=0,a=0,o=0;var r=l.getBasePage(i._activePage);var s=i._activePage%2==0;var c=i.direction==t.DIRECTION.RTL;var u=i.pageMode==t.PAGE_MODE.SINGLE,d=u&&i.singlePageMode==t.SINGLE_PAGE_MODE.BOOKLET;var f=i.stage.width(),h;if(i.mode=="css"){h=i.wrapper.width();n=Math.max((h-f)/2,0);a=-h/4;o=h/4;if(r==0||d){i.wrapper.css({left:u?c?o-n:a-n:c?o:a});i.shadow.css({width:"50%",left:c?0:"50%",transitionDelay:""})}else if(r==i.pageCount){i.wrapper.css({left:u?c?a-n:o-n:c?a:o});i.shadow.css({width:"50%",left:c?"50%":0,transitionDelay:""})}else{i.wrapper.css({left:u?c?s?a-n:o-n:s?o-n:a-n:0});i.shadow.css({width:"100%",left:0,transitionDelay:parseInt(i.duration,10)+50+"ms"})}i.wrapper.css({transition:e.type=="resize"?"none":""})}else if(i.stage!=null){var p=i.position.x,g;n=i.width/4;h=i.width;a=-h/2;o=h/2;if(r==0||d){g=c?o:a}else if(r==i.pageCount){g=c?a:o}else{g=u?c?s?a:o:s?o:a:0}if(g!==this.centerEnd){this.centerTween=new TWEEN.Tween({x:p}).delay(0).to({x:g},i.duration).onUpdate(function(){i.position.x=this.x;i.stage.cssScene.position.x=this.x}).easing(i.ease).start();this.centerEnd=g}}},width:function(e){if(e==null){return this.container.width()}else{this.options.width=e;this.container.width(e);this.resize()}}};return n}({});t.PreviewObject=Z;var Y=function(e){H(a,e);function a(e,a,o,r){o=o||{};var s=this;s.contentRawSource=e||[n.textureLoadFallback];s.contentSource=s.contentRawSource;s.contentSourceType=null;s.minDimension=o.minTextureSize||256;s.maxDimension=o.maxTextureSize||2048;s.pdfRenderQuality=o.pdfRenderQuality||t.defaults.pdfRenderQuality;s.flipbook=r;s.waitPeriod=50;s.maxLength=297;s.enableDebug=false;s.zoomScale=1;s.maxZoom=2;s.options=o;s.outline=o.outline;s.links=o.links;s.html=o.html;s.isCrossOrigin=o.isCrossOrigin;s.normalViewport={height:297,width:210,scale:1};s.viewport={height:297,width:210,scale:1};s.imageViewport={height:297,width:210,scale:1};s.bookSize={height:297,width:210};s.zoomViewport={height:297,width:210};s.thumbsize=128;s.cacheIndex=256;s.cache=[];s.pageRatio=o.pageRatio||s.viewport.width/s.viewport.height;s.textureLoadTimeOut=null;s.type="TextureLibrary";if(Array===s.contentSource.constructor||Array.isArray(s.contentSource)||s.contentSource instanceof Array){s.contentSourceType=c.IMAGE;s.pageCount=s.contentSource.length;for(var u=0;u<s.contentSource.length;u++){s.contentSource[u]=l.httpsCorrection(s.contentSource[u].toString())}i("<img/>").attr("src",s.contentSource[0]).on("load",function(){s.viewport.height=this.height;s.viewport.width=this.width;s.pageRatio=s.viewport.width/s.viewport.height;s.bookSize={width:(s.pageRatio>1?1:s.pageRatio)*s.maxLength,height:s.maxLength/(s.pageRatio<1?1:s.pageRatio)};s.zoomViewport={width:(s.pageRatio>1?1:s.pageRatio)*s.maxDimension,height:s.maxDimension/(s.pageRatio<1?1:s.pageRatio)};s.linkService=new PDFLinkService;i(this).off();if(s.options.pageSize==t.PAGE_SIZE.DOUBLEINTERNAL){s.pageCount=s.contentSource.length*2-2;if(s.options.webgl==true)s.requiresImageTextureScaling=true}if(a!=null){a(s);a=null}k(this.height+":"+this.width)})}else if(typeof s.contentSource=="string"||s.contentSource instanceof String){var d=function(){if(s.contentSource.indexOf(".base64")>1){i.ajax({url:s.contentSource,xhrFields:{onprogress:function(e){if(e.lengthComputable){var t=100*e.loaded/e.total;s.updateInfo(s.options.text.loading+" PDF "+t.toString().split(".")[0]+"% ...")}}},success:function(e){s.options.docParameters={data:atob(e)};f()}})}else{f()}};var f=function(){if(s){pdfjsLib.GlobalWorkerOptions.workerSrc=n.pdfjsWorkerSrc;s.contentSourceType=c.PDF;var i=s.options.disableFontFace;if(_||U||s.options.disableFontFace==true){}var o=s.loading=pdfjsLib.getDocument(s.options.docParameters?s.options.docParameters:{url:l.httpsCorrection(e),rangeChunkSize:isNaN(s.options.rangeChunkSize)?524288:s.options.rangeChunkSize,cMapUrl:n.cMapUrl,cMapPacked:true,imageResourcesPath:n.imageResourcesPath,disableAutoFetch:true,disableStream:true,disableFontFace:i});o.promise.then(function e(i){s.pdfDocument=i;i.getPage(1).then(function(e){s.normalViewport=e.getViewport({scale:1});s.viewport=e.getViewport({scale:1});s.viewport.height=s.viewport.height/10;s.viewport.width=s.viewport.width/10;s.pageRatio=s.viewport.width/s.viewport.height;s.bookSize={width:(s.pageRatio>1?1:s.pageRatio)*s.maxLength,height:s.maxLength/(s.pageRatio<1?1:s.pageRatio)};s.zoomViewport={width:(s.pageRatio>1?1:s.pageRatio)*s.maxDimension,height:s.maxDimension/(s.pageRatio<1?1:s.pageRatio)};s.refPage=e;if(i.numPages>1){i.getPage(2).then(function(e){if(s.options.pageSize==t.PAGE_SIZE.AUTO){var n=e.getViewport({scale:1});var o=n.width/n.height;if(o>s.pageRatio*1.5){s.options.pageSize=t.PAGE_SIZE.DOUBLEINTERNAL;s.pageCount=i.numPages*2-2}else{s.options.pageSize=t.PAGE_SIZE.SINGLE}}if(a!=null){a(s);a=null}})}else{if(a!=null){a(s);a=null}}});s.linkService=new PDFLinkService;s.linkService.setDocument(i,null);s.pageCount=i.numPages;s.contentSource=i},function e(t){if(s){var i="",n=document.createElement("a");n.href=s.contentSource;if(n.hostname!==window.location.hostname)i="CROSS ORIGIN!! ";s.updateInfo(i+"Cannot access file!  "+s.contentSource)}});o.onProgress=function e(t){if(s){var i=100*t.loaded/t.total;if(isNaN(i)){if(t&&t.loaded){s.updateInfo(s.options.text.loading+" PDF "+(Math.ceil(t.loaded/1e4)/100).toString()+"MB ...")}else{s.updateInfo(s.options.text.loading+" PDF ...")}}else{s.updateInfo(s.options.text.loading+" PDF "+i.toString().split(".")[0]+"% ...")}}}}};var h=function(){if(s){if(n.pdfjsWorkerSrc.indexOf("?ver")<0)n.pdfjsWorkerSrc+="?ver="+t.version;s.updateInfo(s.options.text.loading+" PDF Worker ...");var e=document.createElement("a");e.href=n.pdfjsWorkerSrc;if(e.hostname!==window.location.hostname){s.updateInfo(s.options.text.loading+" PDF Worker CORS ...");i.ajax({url:n.pdfjsWorkerSrc,cache:true,success:function(e){n.pdfjsWorkerSrc=t.createObjectURL(e,"text/javascript");d()}})}else{d()}}};if(window.pdfjsLib==null){if(s){s.updateInfo(s.options.text.loading+" PDF Service ...");M(n.pdfjsSrc+"?ver="+t.version,function(){if(typeof define==="function"&&define.amd&&window.requirejs){s.updateInfo(s.options.text.loading+" PDF Service (require) ...");require.config({paths:{"pdfjs-dist/build/pdf.worker":n.pdfjsWorkerSrc.replace(".js","")}});require(["pdfjs-dist/build/pdf"],function(e){window.pdfjsLib=e;h()})}else if(typeof exports==="object"&&exports["pdfjs-dist/build/pdf"]!=null){window.pdfjsLib=exports["pdfjs-dist/build/pdf"];h()}else{h()}},function(){s.updateInfo("Unable to load PDF service..")})}}else{d()}}else{console.error("Unknown source type. Please check documentation for help")}this.dispose=function(){if(s.loading&&s.loading.destroy){s.loading.destroy()}s.loading=null;if(s.textureLoadTimeOut){clearTimeout(s.textureLoadTimeOut);s.textureLoadTimeOut=null}if(this.targetObject){if(this.targetObject.thumbContainer&&this.targetObject.thumbContainer.remove)this.targetObject.thumbContainer.remove();if(this.targetObject.outlineContainer&&this.targetObject.outlineContainer.remove)this.targetObject.outlineContainer.remove();if(this.targetObject.dispose)this.targetObject.dispose();this.targetObject.processPage=null;this.targetObject.requestPage=null;if(this.targetObject.container&&this.targetObject.container.off)this.targetObject.container.off()}if(this.pdfDocument&&this.pdfDocument.destroy)this.pdfDocument.destroy();if(this.linkService&&this.linkService.dispose)this.linkService.dispose();if(this.outlineViewer&&this.outlineViewer.dispose)this.outlineViewer.dispose();if(this.thumblist&&this.thumblist.dispose){this.thumblist.review=null;this.thumblist.dispose()}this.activeThumb=null;this.targetObject=null;this.pdfDocument=null;this.linkService=null;this.outlineViewer=null;this.thumblist=null;s=null};return this}a.prototype.updateInfo=function(e){if(this.flipbook&&this.flipbook.updateInfo){this.flipbook.updateInfo(e)}};a.prototype.initThumbs=function(){var e=this;if(e.cache[e.thumbsize]==null)e.cache[e.thumbsize]=[];var t;var n=function(){clearTimeout(t);t=setTimeout(function(){t=setTimeout(a,e.waitPeriod/2)},e.waitPeriod)};var a=function(){var a=0;if(Date.now()-e.thumblist.lastScrolled<100){a=1}else{e.targetObject.container.find(".df-thumb-container .df-vrow").each(function(){var t=i(this);if(!t.hasClass("df-thumb-loaded")){a++;var o=i(this).attr("id").replace("df-thumb","");e.getPage(o,n,true);t.addClass("df-thumb-loaded");return false}});if(a==0){clearTimeout(t)}}if(a>0){n()}if(e.activeThumb!=e.targetObject._activePage){var o=e.targetObject.thumbContainer!=null&&e.targetObject.thumbContainer.hasClass("df-sidemenu-visible");if(o){var r=e.thumblist.container;var s=r.scrollTop,c=r.getBoundingClientRect().height;var u=e.targetObject.thumbContainer.find("#df-thumb"+e.targetObject._activePage);if(u.length>0){e.targetObject.thumbContainer.find(".df-selected").removeClass("df-selected");u.addClass("df-selected");u=u[0];if(s+c<u.offsetTop+u.scrollHeight)l.scrollIntoView(u,null,false);else if(s>u.offsetTop)l.scrollIntoView(u);e.activeThumb=e.targetObject._activePage}else{i(r).scrollTop(e.targetObject._activePage*124);n()}}}};e.thumblist=e.targetObject.thumblist=new ThumbList({h:500,addFn:function(e){},scrollFn:n,itemHeight:128,totalRows:e.pageCount,generatorFn:function(e){var t=document.createElement("div");var i=e+1;t.id="df-thumb"+i;var n=document.createElement("div");n.innerHTML=i;t.appendChild(n);return t}});e.thumblist.lastScrolled=Date.now();e.thumblist.review=n;n();var o=i("<div>").addClass("df-thumb-container df-sidemenu-visible df-sidemenu");o.append(i(e.thumblist.container).addClass("df-thumb-wrapper"));e.targetObject.thumbContainer=o;e.targetObject.container.append(o);var r=i(h.div,{class:"df-ui-btn df-ui-sidemenu-close ti-close"});o.append(r);e.thumblist.reset(i(e.thumblist.container).height());e.targetObject.container.on("click",".df-thumb-container .df-vrow",function(t){t.stopPropagation();var n=i(this).attr("id").replace("df-thumb","");e.targetObject.gotoPage(parseInt(n,10))})};a.prototype.initOutline=function(){var e=this;var t=i("<div>").addClass("df-outline-container df-sidemenu");var n=i("<div>").addClass("df-outline-wrapper");var a=i(h.div,{class:"df-ui-btn df-ui-sidemenu-close ti-close"});t.append(a).append(n);e.targetObject.container.append(t);e.targetObject.outlineContainer=t;e.outlineViewer=new BookMarkViewer({container:n[0],linkService:e.linkService,outlineItemClass:"df-outline-item",outlineToggleClass:"df-outline-toggle",outlineToggleHiddenClass:"df-outlines-hidden"});function o(t){if(e.options.overwritePDFOutline==true){t=[]}t=t||[];if(e.outline){for(var i=0;i<e.outline.length;i++){e.outline[i].custom=true;if(t)t.push(e.outline[i])}}if(t.length===0&&e.targetObject.ui.outline!=null){e.targetObject.ui.outline.hide()}e.outlineViewer.render({outline:t})}if(e.pdfDocument){e.pdfDocument.getOutline().then(function(e){o(e)})}else{o([])}if(e.options.autoEnableOutline==true){e.targetObject.ui.outline.trigger("click")}if(e.options.autoEnableThumbnail==true){e.targetObject.ui.thumbnail.trigger("click")}};a.prototype.checkViewportSize=function(e,t,i){var a=this;var o=a.targetObject;var r=e*i,s=t*i;var l=a.cacheIndex;if(a.contentSourceType==c.PDF){a.cacheIndex=Math.ceil(Math.max(r,s));a.cacheIndex=Math.floor(Math.max(r,s));a.cacheIndex=S(a.cacheIndex*n.pixelRatio,a.minDimension,a.maxDimension);if(a.cache[a.cacheIndex]==null)a.cache[a.cacheIndex]=[];if(l!==a.cacheIndex){for(var u=0;u<o.children.length;u++){var d=o.children[u]}o.refresh()}a.imageViewport=a.refPage.getViewport({scale:s/a.normalViewport.height});a.viewport=o.mode=="css"?a.imageViewport:a.refPage.getViewport({scale:a.bookSize.height/a.normalViewport.height});k(a.cacheIndex);a.annotedPage=undefined;a.review()}else{if(a.cache[a.cacheIndex]==null)a.cache[a.cacheIndex]=[]}};a.prototype.getCache=function(e,t){return t==true?this.cache[this.thumbsize]==null?null:this.cache[this.thumbsize][e]:this.cache[this.cacheIndex]==null?null:this.cache[this.cacheIndex][e]};a.prototype.setCache=function(e,t,i,n){if(i==true){if(this.cache[this.thumbsize]!=null)this.cache[this.thumbsize][e]=t}else{var a=n==null?this.cacheIndex:n;if(this.cache[a]!=null)this.cache[a][e]=t}};a.prototype.setTarget=function(e){var t=this;if(e==null){return this.targetObject}else{this.targetObject=e;e.contentProvider=this;e.container.removeClass("df-loading df-init");if(t.linkService!=null){t.linkService.setViewer(e);t.initOutline()}e.processPage=function(e,i){if(e>0&&e<=t.pageCount){t.getPage(e,i)}else{t.setPage(e,n.textureLoadFallback,i)}};e.requestPage=function(){t.review("Request")};if(e.resize!=null)e.resize()}};a.prototype.review=function(e){var t=this;e=e||"timer review";clearTimeout(t.textureLoadTimeOut);t.textureLoadTimeOut=setTimeout(function(){t.textureLoadTimeOut=setTimeout(t.reviewPages,t.waitPeriod/2,t,e)},t.waitPeriod)};a.prototype.reviewPages=function(e,t){e=e||this;var n=e.targetObject;if(n==null)return;var a=A(n);if(t!=null)k(t);var o=false;var r,s;for(r=0;r<e.targetObject.children.length;r++){s=n.children[r];if(s.isFlipping==true){o=true;break}}if(o==false){var l=n.children.length>3?3:n.children.length;var c=l/2;var u=a?n._activePage:F(n._activePage);e.baseNumber=u;if(e.zoomScale>1){l=1}for(r=0;r<l;r++){var d=Math.floor(r/2);var f=r%2==0?-d*(a?1:2):(d==0?1:d)*(a?1:2);var h=u+f,p=u+f+1;var g=n.getPageByNumber(h),v=n.getPageByNumber(p),m=h+"|"+e.cacheIndex,b=p+"|"+e.cacheIndex;var w=0;if(g!=null&&g.frontPageStamp!=m&&g.visible==true){g.frontTextureLoaded=false;n.processPage(h,function(){e.review("Batch Call")});g.frontPageStamp=m;w++}if(v!=null&&v.backPageStamp!=b&&v.visible==true&&!a){v.backTextureLoaded=false;n.processPage(p,function(){e.review("Batch Call")});v.backPageStamp=b;w++}if(f==0&&e.annotedPage!==u){e.getAnnotations(h);if(!a)e.getAnnotations(p);e.annotedPage=u}if(w>0){break}}if(w==0){if(n.mode!=="css"){e.setLoading(u)}else{}}}else{e.review("Revisit request");if(e.annotedPage!=null&&n.mode!=="css"){var x=F(n._activePage);i(n.getContentLayer(x)).html("");i(n.getContentLayer(x+1)).html("");e.annotedPage=null}}};a.prototype.getPage=function(e,a,o){var r=this;e=parseInt(e,10);var s=e;var l=r.contentSource;if(e<=0&&e>=r.pageCount){r.setPage(e,n.textureLoadFallback,a,o)}else{if(r.contentSourceType==c.PDF){if(r.getCache(e,o)!=null){r.setPage(e,r.getCache(e,o),a,o);k("Page "+e+" loaded from cache")}else{if(o!==true)r.setLoading(e,true);if(r.options.pageSize==t.PAGE_SIZE.DOUBLEINTERNAL&&e>2){s=Math.ceil((e-1)/2)+1}l.getPage(s,o).then(function(t){f(t,e,a,o)})}}else if(r.contentSourceType==c.IMAGE||r.contentSourceType==c.HTML){if(r.getCache(e,o)!=null){r.setPage(e,r.getCache(e,o),a,o);k("Page "+e+" loaded from cache")}else{if(o!==true)r.setLoading(e,true);if(r.options.pageSize==t.PAGE_SIZE.DOUBLEINTERNAL&&e>2){s=Math.ceil((e-1)/2)+1}d(l[s-1],function(t){r.setCache(e,t,o,r.cacheIndex);r.setPage(e,t,a,o);if(a!=null)a()},r.isCrossOrigin)}}}function u(e,i,a){var o=new Image;o.crossOrigin="Anonymous";o.onload=function(){if(a==true){var r=document.createElement("canvas"),s=r.getContext("2d");r.width=o.width;r.height=o.height;s.drawImage(o,0,0);if(n.canvasToBlob==true){r.toBlob(function(e){var n=t.createObjectURL(e,"image/jpeg");if(i!=null)i(n)},"image/jpeg",.85)}else{if(i!=null)i(r)}}else{if(i!=null)i(e)}o.onload=null;o=null};o.src=e;if(o.complete||o.complete===undefined){o.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";o.src=e}}function d(e,t,n){i("<img/>").attr("src",e).on("load",function(){i(this).off();if(t!=null){t(e)}k(this.height+":"+this.width)})}function f(e,i,n,a){var o=r.options.forceFit;var s=r.options.pageSize==t.PAGE_SIZE.DOUBLEINTERNAL&&i>1&&i<r.pageCount;var l=s&&o?2:1;var c=o?e.getViewport({scale:1}):r.normalViewport;var u=r.cacheIndex/Math.max(c.width/l,c.height);if(r.webgl==true){u=O(r.cacheIndex)/(r.pageRatio>1?c.width/l:c.height)}var d=document.createElement("canvas");var f=performance.now();var h=r.cacheIndex;var p=d.getContext("2d");if(a==true){u=r.thumbsize/r.normalViewport.height}d.height=Math.round(c.height*u);d.width=Math.round(c.width/l*u);if(r.targetObject.mode=="css"&&Math.abs(r.targetObject.zoomHeight-d.height)<2){d.height=r.targetObject.zoomHeight+0;d.width=r.targetObject.zoomWidth+0}c=e.getViewport({scale:u});k("rendering "+i+" at "+d.width+"x"+d.height);if(s){if(z(r.targetObject)){if(i%2==0){c.transform[4]=-d.width}}else{if(i%2==1){c.transform[4]=-d.width}}}var g={canvasContext:p,viewport:c};e.cleanupAfterRender=true;var v=e.render(g);v.promise.then(function(){k(performance.now()-f);f=performance.now();if(a==true||r.options.canvasToBlob==true&&r.webgl!==true){d.toBlob(function(e){var o=t.createObjectURL(e,"image/jpeg");k(performance.now()-f);r.setCache(i,o,a,h);r.setPage(i,o,n,a)},"image/jpeg",r.pdfRenderQuality)}else{k("Setting Page "+i);r.setPage(i,d,n,a)}g=null})}};a.prototype.getTargetPage=function(e){};a.prototype.setLoading=function(e,t){if(this.targetObject!=null){if(this.webgl==true){var n=this.targetObject.container;if(t==true){if(n.isLoading!==true){n.addClass("df-loading");n.isLoading=true;k("Loading icon at "+e+" as "+t)}}else{if(n.isLoading!=null){n.removeClass("df-loading");n.isLoading=null;k("Loading icon at "+e+" as "+t)}}}else{var a=i(this.targetObject.getContentLayer(e));if(a!=null){if(t==true)a.addClass("df-page-loading");else a.removeClass("df-page-loading");k("Loading icon at "+e+" as "+t)}}}};a.prototype.getAnnotations=function(e){var n=this;if(n.options.enableAnnotation==false)return;var a=n.targetObject;e=parseInt(e,10);var o=n.contentSource;var r=i(a.getContentLayer(e));r.empty();if(e>0&&e<=n.pageCount){if(n.contentSourceType==c.PDF){var s=F(e);var l=e;if(n.options.pageSize==t.PAGE_SIZE.DOUBLEINTERNAL&&e>2){l=Math.ceil((e-1)/2)+1}o.getPage(l).then(function(t){if(r!=null&&r.length>0){var i=t.getViewport({scale:1});i=t.getViewport({scale:n.viewport.height/i.height});n.setupAnnotations(t,i,r,e)}})}if(n.links!=null&&n.links[e]!=null){var u=n.links[e];for(var d=0;d<u.length;d++){var f=u[d];var h;if(f.dest&&f.dest.indexOf&&f.dest.indexOf("[html]")==0){h=document.createElement("div");h.innerHTML=f.dest.substr(6);h.className="customHtmlAnnotation"}else{h=document.createElement("a");h.setAttribute("dest",f.dest);h.className="customLinkAnnotation";h.href="#"+f.dest;h.onclick=function(){var e=this.getAttribute("dest");if(e){n.linkService.customNavigateTo(e)}return false}}h.style.left=f.x+"%";h.style.top=f.y+"%";h.style.width=f.w+"%";h.style.height=f.h+"%";r[0].appendChild(h)}}if(n.html!=null&&n.html[e]!=null){var p=n.html[e];r.append(i("<div class='customHTMLAnnotation'>").html(p))}}};a.prototype.setPage=function(e,t,i,a){var o=this;var r=o.targetObject;var s=z(r);var l=A(r);if(a==true){var c=o.targetObject.container.find("#df-thumb"+e);c.css({backgroundImage:C(t)})}else{if(t==n.textureLoadFallback){k("Fallback on "+e)}var u=r.getPageByNumber(e);if(u!=null){if(e%2!=0&&!s||e%2!=1&&s&&!l||l&&!s){k(e+"rendered to back of "+u.color);u.backImage(t,function(t,n){u.backTextureLoaded=true;o.setLoading(e);if(o.requiresImageTextureScaling&&n&&e!=1&&e!=o.pageCount){n.repeat.x=.5;n.offset.x=.5}if(i!=null)i()})}else{k(e+"rendered to front of "+u.color);u.frontImage(t,function(t,n){u.frontTextureLoaded=true;o.setLoading(e);if(o.requiresImageTextureScaling&&n&&e!=1&&e!=o.pageCount){n.repeat.x=.5}if(i!=null)i()})}}else{k("Invalid set request on Page "+e)}}};a.prototype.setupAnnotations=function(e,a,o,r){if(o==null||i(o).length==0)return;var s=this;return e.getAnnotations().then(function(l){a=a.clone({dontFlip:true});if(s.options.pageSize==t.PAGE_SIZE.DOUBLEINTERNAL&&r>2&&r%2==1){}else if(r==1){}if(o==null){return}o=i(o);if(o.find(".annotationDiv").length==0){o.append(i("<div class='annotationDiv'>"))}var c=o.find(".annotationDiv");c.empty();if(s.options.pageSize==t.PAGE_SIZE.DOUBLEINTERNAL&&r>2&&r%2==1){c.css({left:"-100%"})}else if(r==1){c.css({left:""})}pdfjsLib.AnnotationLayer.render({annotations:l,div:c[0],page:e,viewport:a,imageResourcesPath:n.imageResourcesPath,linkService:s.linkService});if(s.options.annotationClass&&s.options.annotationClass!==""){c.find(" > section").addClass(s.options.annotationClass)}if(s.options.search==true){if(o.find(".textLayerDiv").length==0){o.append(i("<div class='textLayerDiv'>"))}var u=o.find(".textLayerDiv");e.getTextContent().then(function(e){var i=new t.TextLayerBuilder({textLayerDiv:u[0],pageIndex:null,viewport:a.clone({dontFlip:false})});i.setTextContent(e);i.render()})}})};return a}({});var K=function(){function e(e){this.angles=e.angles||[0,0,0,0,0,0];this.stiffness=e.angles||.1;this.segments=e.segments||1;this.canvasMode=e.contentSourceType!==c.IMAGE&&e.canvasToBlob==false;this.initDOM()}function a(e){var t=e.contentLayer=i(h.div,{class:"df-page-content"});e.append(t)}e.prototype={initDOM:function(){var e=this.element=i(h.div,{class:"df-book-page"});var t=this.wrapper=i(h.div,{class:"df-page-wrapper"});var n=this.front=i(h.div,{class:"df-page-front"});var o=this.back=i(h.div,{class:"df-page-back"});var r=this.foldInnerShadow=i(h.div,{class:"df-page-fold-inner-shadow"});var s=this.foldOuterShadow=i(h.div,{class:"df-page-fold-outer-shadow"});this.frontIMG=new Image;this.backIMG=new Image;a(n,this.segments,true);a(o,this.segments,false);e.append(t).append(s);t.append(n).append(o).append(r)},updatePoint:function(e){if(e==null)return;var i=this.parent.dragPage!=null?this.parent.dragPage:e.page!=null?e.page:this;var n=i.element.width(),a=i.element.height();var o=this.parent.corner!=null?this.parent.corner:e.corner,r=t.CORNERS;var s=i.side==d.right,l=o==r.BL||o==r.BR;e.rx=s==true?n*2-e.x:e.x;e.ry=l==true?a-e.y:e.y;var c=Math.atan2(e.ry,e.rx);c=Math.PI/2-S(c,0,v(90));var u=s?e.x/2:n-e.x/2,f=e.ry/2,h=Math.max(0,Math.sin(c-Math.atan2(f,u))*E(u,f)),p=.5*E(e.rx,e.ry);var g=Math.round(n-h*Math.sin(c)),b=Math.round(h*Math.cos(c)),x=m(c);var y=l?s?180+(90-x):180+x:s?x:90-x;var C=l?s?180+(90-x):x:s?x+180:y,L=l?s?90-x:x+90:s?y-90:y+180,I=s?n-g:g,T=l?a+b:-b,k=s?-g:g-n,O=l?-a-b:b;var R=S(e.distance*.5/n,0,.5);var F=S((n*2-e.rx)*.5/n,.05,.3);i.element.addClass("df-folding");var M=s?i.back:i.front;var D=s?i.front:i.back;var A=i.foldOuterShadow;var z=i.foldInnerShadow;i.wrapper.css({transform:w(I,T)+P(y)});M.css({transform:P(-y)+w(-I,-T)});D.css({transform:P(C)+w(k,O),boxShadow:"rgba(0, 0, 0, "+R+") 0px 0px 20px"});z.css({transform:P(C)+w(k,O),opacity:F/2,backgroundImage:N.css+"linear-gradient( "+L+"deg, rgba(0, 0, 0, 0.25) , rgb(0, 0, 0) "+p*.7+"px, rgb(255, 255, 255) "+p+"px)"});A.css({opacity:F/2,left:s?"auto":0,right:s?0:"auto",backgroundImage:N.css+"linear-gradient( "+(-L+180)+"deg, rgba(0, 0, 0,0) "+p/3+"px, rgb(0, 0, 0) "+p+"px)"})},updateAngle:function(e,t){var i=this.element.width()*5;this.wrapper.css({perspective:i,perspectiveOrigin:t==true?"0% 50%":"100% 50%"});this.front.css({display:t==true?e<=-90?"block":"none":e<90?"block":"none",transform:(N.dom!=="MfS"?"":"perspective("+i+"px) ")+(t==true?"translateX(-100%) ":"")+"rotateY("+((t==true?180:0)+e)+"deg)"});this.back.css({display:t==true?e>-90?"block":"none":e>=90?"block":"none",transform:(N.dom!=="MSd"?"":"perspective("+i+"px) ")+(t==false?"translateX(100%) ":"")+"rotateY("+((t==false?-180:0)+e)+"deg)"});return},tween:function(e){var i=this;if(i==null||i.parent==null)return;var n=A(i.parent);var a=i.side==d.right;var o=i.parent.direction==t.DIRECTION.RTL;var r=i.parent.corner==t.CORNERS.BL||i.parent.corner==t.CORNERS.BR;var s=i.magnetic==true;var l=r?i.parent.height:0;var c,u,f,h=0;var p=i.end=i&&i.animateToReset==true?{x:a?i.parent.fullWidth:0,y:l}:{x:a?0:i.parent.fullWidth,y:l};i.ease=i.isHard?TWEEN.Easing.Quadratic.InOut:TWEEN.Easing.Linear.None;var g=i.parent.duration;if(i.isHard==true){if(e!=null){h=T(e.distance,e.fullWidth)}c=i.init={angle:h*(a?-1:1)};p=i.end=i&&i.animateToReset==true?{angle:a?0:-0}:{angle:a?-180:180}}else{if(e==null){c=i.init=i&&i.animateToReset==true?{x:a?0:i.parent.fullWidth,y:0}:{x:a?i.parent.fullWidth:0,y:0};u=i.first={x:(a?3:1)*i.parent.fullWidth/4,y:0};f=i.mid={x:(a?1:3)*i.parent.fullWidth/4,y:0}}else{c=i.init={x:e.x,y:e.y,opacity:1};u=i.first={x:e.x*3/4,y:e.y*3/4,opacity:1};f=i.mid={x:e.x/4,y:e.y/4,opacity:1};g=i.parent.duration*I(c.x,c.y,p.x,p.y)/i.parent.fullWidth;g=S(g,i.parent.duration/3,i.parent.duration)}}c.index=0;p.index=1;i.isFlipping=true;var v=function(e){if(i.isHard==true){i.updateAngle(e.angle,a);i.angle=e.angle}else{i.updatePoint({x:e.x,y:e.y});i.x=e.x;i.y=e.y}if(n&&!s)i.element[0].style.opacity=a&&!o||!a&&o?e.index>.5?2*(1-e.index):1:e.index<.5?2*e.index:1};if(n&&(!a&&!o||a&&o))i.element[0].style.opacity=0;var m=i.completeTween=i.completeTween||function(e){i.isFlipping=false;if(i.isHard==true){i.updateAngle(i.end.angle);i.back.css({display:"block"});i.front.css({display:"block"})}else{i.updatePoint({x:i.end.x,y:i.end.y})}i.element[0].style.opacity=1;if(i.animateToReset!==true){i.side=i.side==d.right?d.left:d.right}else i.animateToReset=null;i.currentTween=null;i.pendingPoint=null;i.magnetic=false;i.parent.dragPage=null;i.parent.corner=t.CORNERS.NONE;if(e!=true)i.parent.refresh()};if(i.isHard==true){i.currentTween=new TWEEN.Tween(c).delay(0).to(p,i.parent.duration).onUpdate(function(){v(this)}).easing(i.ease).onComplete(i.completeTween).start()}else{if(e==null){i.currentTween=new TWEEN.Tween(c).delay(0).to(p,i.parent.duration).onUpdate(function(){v(this)}).easing(TWEEN.Easing.Sinusoidal.Out).onComplete(i.completeTween).start()}else{i.currentTween=new TWEEN.Tween(c).delay(0).to(p,g).onUpdate(function(){v(this)}).easing(TWEEN.Easing.Sinusoidal.Out).onComplete(i.completeTween);i.currentTween.start()}}},frontImage:function(e,t){var a=this;function o(){a.front.css({backgroundImage:C(e)});if(t!=null)t()}if(a.canvasMode==true){a.front.find(">canvas").remove();if(e!==n.textureLoadFallback){a.front.append(i(e))}if(t!=null)t()}else{if(e==n.textureLoadFallback){o()}else{a.frontIMG.onload=o;a.frontIMG.src=e}}},backImage:function(e,t){var a=this;function o(){a.back.css({backgroundImage:C(e)});if(t!=null)t()}if(a.canvasMode==true){a.back.find(">canvas").remove();if(e!==n.textureLoadFallback){a.back.append(i(e))}if(t!=null)t()}else{if(e==n.textureLoadFallback){o()}else{a.backIMG.onload=o;a.backIMG.src=e}}},updateCSS:function(e){this.element.css(e)},resetCSS:function(){this.wrapper.css({transform:""});this.front.css({transform:"",boxShadow:""});this.back.css({transform:"",boxShadow:""})},clearTween:function(e){this.currentTween.stop();this.completeTween(e==true);this.resetCSS()}};return e}();var X=function(e){H(s,e);function o(e){e.parent.container.find(".df-folding").removeClass("df-folding");e.element.addClass("df-folding")}function r(e){var t=false;for(var i=0;i<e.pages.length;i++){var n=e.pages[i];if(n.isFlipping==true){t=true;break}}return t}function s(e,n){var s=this;s.type="BookCSS";s.images=e.images||[];s.pageCount=e.pageCount||1;s.foldSense=50;s.stackCount=4;s.mode="css";s.pages=[];s.duration=e.duration;s.container=i(n);s.options=e;s.drag=d.none;s.pageMode=e.pageMode||(B||s.pageCount<=2?t.PAGE_MODE.SINGLE:t.PAGE_MODE.DOUBLE);s.singlePageMode=e.singlePageMode||(B?t.SINGLE_PAGE_MODE.BOOKLET:t.SINGLE_PAGE_MODE.ZOOM);s.swipe_threshold=B?15:50;s.direction=e.direction||t.DIRECTION.LTR;s.startPage=1;s.endPage=s.pageCount;s._activePage=e.openPage||s.startPage;s.hardConfig=e.hard;a="WebKitCSSMatrix"in window||document.body&&"MozPerspective"in document.body.style;s.animateF=function(){if(TWEEN.getAll().length>0)TWEEN.update();else clearInterval(s.animate)};s.init(e);s.skipDrag=false;function c(e){if(s.dragPage!=e.page&&e.page.visible==true){s.dragPage.clearTween(true);s.dragPage=e.page;s.corner=e.corner;s.dragPage.pendingPoint=e}}var u=function(e){var i=s.eventToPoint(e);if(e.touches!=null&&e.touches.length==2&&s.startTouches!=null){s.zoomDirty=true;var n=l.getVectorAvg(l.getTouches(e,s.container.offset())),a=l.calculateScale(s.startTouches,l.getTouches(e)),o=a/s.lastScale;var c=s.contentProvider.zoomScale,u=n.x,f=n.y;s.stage.css({transform:"translate3d("+s.left+"px,"+s.top+"px,0) scale3d("+a+","+a+",1)"});s.lastScale=a;s.lastZoomCenter=n;e.preventDefault()}if(e.touches!=null&&e.touches.length>1||s.startPoint==null||s.startTouches!=null)return;var h=s.dragPage||i.page;if(s.contentProvider.zoomScale!==1){if(e.touches!=null||s.isPanning==true){s.pan(i);e.preventDefault()}}else{if(s.skipDrag!==true){var p=i.distance;if(!r(s)){if(s.dragPage!=null||i.isInside==true){if(s.dragPage!=null){k("set mouse down move")}else{i.y=S(i.y,1,s.height-1);i.x=S(i.x,1,i.fullWidth-1)}var g=s.corner||i.corner;if(h.isHard){var v=g==t.CORNERS.BR||g==t.CORNERS.TR;var m=T(i.distance,i.fullWidth);h.updateAngle(m*(v?-1:1),v)}else{h.updatePoint(i,s)}h.magnetic=true;h.magneticCorner=i.corner;e.preventDefault()}if(s.dragPage==null&&h!=null&&i.isInside==false&&h.magnetic==true){h.pendingPoint=i;h.animateToReset=true;s.corner=h.magneticCorner;s.animatePage(h);h.pendingPoint=null;h.magnetic=false;h.magneticCorner=null}if(s.isPanning==true&&s.dragPage==null&&s.contentProvider.zoomScale==1){var b=i.x-s.lastPos,w=performance.now()-s.lastTime;if(Math.abs(b)>s.swipe_threshold){if(b<0){s.next()}else{s.prev()}s.drag=d.none;s.isPanning=false;e.preventDefault()}s.lastPos=i.x;s.lastTime=performance.now()}}}}},f=function(e){if(e.touches!=null&&e.touches.length==0){var i=s.contentProvider.zoomScale;if(s.zoomDirty==true){s.previewObject.contentProvider.zoomScale=l.limitAt(s.previewObject.contentProvider.zoomScale*s.lastScale,1,s.previewObject.contentProvider.maxZoom);s.previewObject.zoomValue=s.previewObject.contentProvider.zoomScale*1;s.previewObject.resize();s.zoomDirty=false}s.wrapper.css({transform:""});s.lastScale=null;s.startTouches=null}s.isPanning=false;if(e.touches!=null&&e.touches.length>1)return;if(s.skipDrag!==true){var n=s.eventToPoint(e);if(s.dragPage){e.preventDefault();s.dragPage.pendingPoint=n;if(n.x==s.startPoint.x&&n.y==s.startPoint.y&&n.isInside==true){if(s.corner==t.CORNERS.BR||s.corner==t.CORNERS.TR){c(n);if(s.dragPage.isFlipping!==true)s.next()}else if(s.corner==t.CORNERS.BL||s.corner==t.CORNERS.TL){c(n);if(s.dragPage.isFlipping!==true)s.prev()}}else if(s.dragPage.isFlipping!==true){if(n.distance>n.fullWidth/2){if(n.x>n.fullWidth/2)s.prev();else s.next()}else{s.dragPage.animateToReset=true;s.animatePage(s.dragPage)}}if(s.dragPage){s.dragPage.pendingPoint=null;s.dragPage.magnetic=false}}else{}s.drag=d.none}},h=function(e){var i=s.eventToPoint(e);var n=e.srcElement||e.originalTarget;if(s.dragPage&&s.dragPage.magnetic)return;if(s.wrapper[0].contains(e.target)&&s.contentProvider.zoomScale==1&&i.x==s.startPoint.x&&i.y==s.startPoint.y&&i.isInsidePage&&s.startPoint.page==i.page&&!i.page.isFlipping&&n.nodeName!=="A"){if(s.startPoint.page.side==0){s.corner=t.CORNERS.TL;s.prev();s.startPoint.page=null}else{s.corner=t.CORNERS.TR;s.next();s.startPoint.page=null}s.isPanning=false}},p=function(e){if(e.touches!=null&&e.touches.length==2&&s.startTouches==null){s.startTouches=l.getTouches(e);s.lastScale=1}if(e.touches!=null&&e.touches.length>1||e.touches==null&&e.button!==0)return;var i=s.eventToPoint(e);s.startPoint=i;s.left=s.left||0;s.top=s.top||0;s.isPanning=true;s.lastPos=i.x;s.lastTime=performance.now();if(s.skipDrag!==true){if(i.isInside==true&&!r(s)){s.startPoint=i;s.drag=i.drag;s.dragPage=i.page;s.corner=i.corner;k(s.corner);o(s.dragPage);if(i.page.isHard){}else{i.page.updatePoint(i,s)}if(i.page.name=="0"){s.shadow.css({width:"50%",left:s.direction==t.DIRECTION.RTL?0:"50%",transitionDelay:""})}else if(i.page.name==Math.ceil(s.pageCount/2)-1){s.shadow.css({width:"50%",left:s.direction==t.DIRECTION.RTL?"50%":0,transitionDelay:""})}}}},g=function(e){var t=0;if(e.wheelDelta!=null){t=e.wheelDelta/120}else if(e.detail!=null){t=-e.detail/3}var i=s.contentProvider.zoomScale,n=s.contentProvider.maxZoom;if(t){if(t>0&&i<n||t<0&&i>1){e.stopPropagation();e.preventDefault();var a=s.eventToPoint(e);var o=s.eventToPoint(e);var r={x:s.container.width()/2,y:-23+s.container.height()/2};s.previewObject.zoom(t);var l=s.contentProvider.zoomScale;if(i!==l){var c=l/i;if(l==1){s.left=0;s.top=0}else{s.left*=c;s.top*=c}var u=(a.raw.x-r.x)*c,d=(a.raw.y-r.y)*c;o.raw.x=r.x+u;o.raw.y=r.y+d;s.startPoint=o;s.pan(a);var f=s.dragPage||a.page;if(s.dragPage==null&&f!=null&&a.isInside==true&&f.magnetic==true){f.pendingPoint=a;f.animateToReset=true;s.corner=f.magneticCorner;s.animatePage(f);f.pendingPoint=null;f.magnetic=false;f.magneticCorner=null}}}}};var v=s.container[0];var m=s.stage[0];if(v){m.addEventListener("mousemove",u,false);m.addEventListener("touchmove",u,false);m.addEventListener("mousedown",p,false);m.addEventListener("click",h,false);m.addEventListener("mouseup",f,false);m.addEventListener("touchend",f,false);m.addEventListener("touchstart",p,false);if(s.options.scrollWheel==true){m.addEventListener("mousewheel",g,false);m.addEventListener("DOMMouseScroll",g,false)}}this.dispose=function(){m.removeEventListener("mousemove",u,false);m.removeEventListener("touchmove",u,false);m.removeEventListener("mousedown",p,false);m.removeEventListener("click",h,false);m.removeEventListener("mouseup",f,false);m.removeEventListener("touchend",f,false);m.removeEventListener("touchstart",p,false);if(s.options.scrollWheel==true){m.removeEventListener("mousewheel",g,false);m.removeEventListener("DOMMouseScroll",g,false)}s.updatePageCallback=null;s.flipCallback=null;s.animateF=null;s.stage.remove()}}s.prototype={add:function(e){if(e instanceof K)this.container.append(i(e.element));else this.container.append(i(e))},pan:function(e){var t=this.startPoint;var i=this.contentProvider.zoomScale;var n=this.left+(e.raw.x-t.raw.x),a=this.top+(e.raw.y-t.raw.y);this.left=Math.round(S(n,-this.shiftWidth,this.shiftWidth));this.top=Math.round(S(a,-this.shiftHeight,this.shiftHeight));if(i==1){this.left=0;this.top=0}this.startPoint=e;this.stage.css({transform:"translate3d("+this.left+"px,"+this.top+"px,0)"})},getPageByNumber:function(e){var t=A(this)?z(this)?e+1:e:Math.floor((e-1)/2);var i;for(var n=0;n<this.pages.length;n++){if(t==parseInt(this.pages[n].name,10))i=this.pages[n]}return i},getPageSide:function(e){var i=this.direction==t.DIRECTION.RTL;var n=this.getPageByNumber(e);if(n==null)return;if(A(this))return i?n.front:n.back;if(e%2==0)return i?n.back:n.front;else return i?n.front:n.back},getContentLayer:function(e){var t=this.getPageSide(e);return t==null?null:t.contentLayer}};s.prototype.init=function(e){var t=this;t.stage=i(h.div,{class:"df-book-stage"});t.wrapper=i(h.div,{class:"df-book-wrapper"});t.shadow=i(h.div,{class:"df-book-shadow"});t.container.append(t.stage);t.stage.append(t.wrapper);t.wrapper.append(t.shadow);t.createStack(e)};s.prototype.createStack=function(e){var t="red,green,blue,yellow,orange,black".split(",");for(var i=0;i<this.stackCount;i++){e.angles=[,this.stackCount-i];e.stiffness=(this.stackCount-i)/100;var n=new K(e);n.angles[1]=180;n.index=i;n.parent=this;n.textureReady=false;n.textureRequested=false;this.wrapper.append(n.element);n.isFlipping=false;this.pages.push(n);n.color=t[i]}this.children=this.pages};s.prototype.isPageHard=function(e){return l.isHardPage(this.hardConfig,e,this.pageCount,A(this))};s.prototype.setDuration=function(e){this.duration=e};s.prototype.moveBy=function(e){var t=this._activePage+e;t=S(t,this.startPage,this.endPage);if(this.firstFlipped!=true){this.previewObject.analytics({eventAction:"First Page Flip",options:this.previewObject.options});this.firstFlipped=true}this.gotoPage(t)};s.prototype.next=function(e){if(e==null)e=this.direction==t.DIRECTION.RTL?-this.pageMode:this.pageMode;this.moveBy(e)};s.prototype.prev=function(e){if(e==null)e=this.direction==t.DIRECTION.RTL?this.pageMode:-this.pageMode;this.moveBy(e)};s.prototype.eventToPoint=function(e){e=D(e);var n=this.wrapper,a=this.pages,o=this.pageWidth,r=this.fullWidth,s=this.height,l=i(window),c={x:e.clientX,y:e.clientY};var u=c.x-n[0].getBoundingClientRect().left;var f=c.y-n[0].getBoundingClientRect().top;c.x=c.x-this.container[0].getBoundingClientRect().left;c.y=c.y-this.container[0].getBoundingClientRect().top;var h=this.drag==d.none?u<o?u:r-u:this.drag==d.left?u:r-u;var p=u<o?a[this.stackCount/2-1]:a[this.stackCount/2];var g=u<this.foldSense?d.left:u>r-this.foldSense?d.right:d.none;var v=u,m=f,b=s,w=r,x=this.foldSense,P=t.CORNERS,y;if(v>=0&&v<x){if(m>=0&&m<=x)y=P.TL;else if(m>=b-x&&m<=b)y=P.BL;else if(m>x&&m<b-x)y=P.L;else y=P.NONE}else if(v>=w-x&&v<=w){if(m>=0&&m<=x)y=P.TR;else if(m>=b-x&&m<=b)y=P.BR;else if(m>x&&m<b-x)y=P.R;else y=P.NONE}else y=P.NONE;return{isInsidePage:v>=0&&v<=w&&m>=0&&m<=b,isInside:y!==P.NONE&&y!==P.L&&y!==P.R,x:u,y:f,fullWidth:r,rawDistance:r-u,distance:h,page:p,drag:g,foldSense:this.foldSense,event:e,raw:c,corner:y}};s.prototype.gotoPage=function(e){e=parseInt(e,10);this._activePage=e;if(this.autoPlay==true){this.previewObject.setAutoPlay(this.autoPlay)}this.updatePage(e);if(this&&this.thumblist&&this.thumblist.review)this.thumblist.review()};s.prototype.refresh=function(){this.updatePage(this._activePage);if(this.flipCallback!=null)this.flipCallback()};s.prototype.updatePage=function(e){var a=this.direction==t.DIRECTION.RTL,o=A(this),r=F(e);var s=o?1:2;e=Math.floor(e/s);if(a)e=Math.ceil(this.pageCount/s)-e;var l=this.oldBaseNumber||0;var c=this.pageCount/s;var u=this.stackCount;var f=Math.floor(u/2);if(l>e){this.children[u-1].skipFlip=true;this.children.unshift(this.children.pop())}else if(l<e){this.children[0].skipFlip=true;this.children.push(this.children.shift())}for(var h=0;h<u;h++){var p=this.children[h];if(l!==e){if(p.currentTween!=null){p.clearTween(true)}}var g=p.side;var v;var m=e-f+h;if(a)m=o?this.pageCount-m:Math.ceil(this.pageCount/2)-m-1;var b=p.name;p.isHard=this.isPageHard(m);if(p.isHard){p.element.addClass("df-hard-page")}else{p.element.removeClass("df-hard-page");p.front.css({display:"block"});p.back.css({display:"block"})}if(m==0||m==c){p.element.addClass("df-cover-page")}else{p.element.removeClass("df-cover-page")}var w=i(p.element).attr("pageNumber");if(w!=m){p.front.contentLayer.empty();p.back.contentLayer.empty()}i(p.element).attr("pageNumber",m);p.isEdge=false;if(h==0){}else if(h==u-1){}else{p.isEdge=false}if(h<f){v=d.left}else{v=d.right}if(p.isFlipping==false){if(v!==g&&p.skipFlip==false){this.animatePage(p);if(this.preFlipCallback!=null)this.preFlipCallback()}else{p.skipFlip=false;p.element.removeClass("df-flipping df-quick-turn df-folding df-left-side df-right-side");p.element.addClass(h<f?"df-left-side":"df-right-side");p.side=v}}p.visible=o?a?h<f||p.isFlipping:h>=f||p.isFlipping:m>=0&&m<c||o&&m==c;if(this.requestPage!=null&&p.visible==true){p.name=m.toString();if(p.name!=b){p.backTextureLoaded=false;p.frontTextureLoaded=false;p.backPageStamp="-1";p.frontPageStamp="-1";p.thumbLoaded=false;p.front.contentLayer.html("");p.back.contentLayer.html("");p.frontImage(n.textureLoadFallback);p.backImage(n.textureLoadFallback);this.requestPage()}}p.oldDepth=p.depth;p.updateCSS({display:p.visible==true?"block":"none",zIndex:6+(h<f?h-f:f-h),transform:""});if(p.pendingPoint==null&&p.isFlipping==false){p.resetCSS()}}if(TWEEN.getAll().length==0){clearInterval(this.animate)}i(".quick-hint").html(e);this.oldBaseNumber=e;if(this.updatePageCallback)this.updatePageCallback()};s.prototype.animatePage=function(e){e.element.addClass("df-flipping");e.isFlipping=true;if(this.animate!=null){clearInterval(this.animate)}this.animate=setInterval(this.animateF,30);e.tween(e.pendingPoint)};return s}({});var Q=function(e){H(a,e);function a(n,a,o){e.call(this,o);var r=this;r.type="FlipBook";r.container=n;r.options=o;r.options.source=a;r.contentSource=a;if(o.height!=null&&o.height.toString().indexOf("%")<0){r.container.height(Math.min(o.height,i(window).height()))}else{r.container.height(o.height)}if(r.options.isLightBox){window.dfLightBox.closeButton.addClass(r.options.icons["close"])}if(r.options.pageSize==t.PAGE_SIZE.DOUBLEINTERNAL){if(Array===r.contentSource.constructor||Array.isArray(r.contentSource)||r.contentSource instanceof Array){r.options.singlePageMode=t.SINGLE_PAGE_MODE.ZOOM}r.container.addClass("df-double-internal")}if(!r.options.isLightBox&&r.container.attr("id")!=null){r.options.id=r.container.attr("id")}if(r.options.parsed!==true&&r.options.links!=null){t.parseLinks(r.options.links)}var l=r.webgl=o.webgl==true&&j==true;n.addClass("df-container df-loading df-init df-floating"+" df-controls-"+r.options.controlsPosition);if(r.options.transparent==true){n.addClass("df-transparent")}if(r.options.direction==t.DIRECTION.RTL){n.addClass("df-rtl")}r.container.info=i(h.div,{class:"loading-info"}).appendTo(r.container).html(r.options.text.loading+"...");if(s.indexOf("MSIE")!==-1||navigator.appVersion.indexOf("Trident/")>0||_&&!U){r.options.webgl=false}if(!!s.match(/msie\s[5-9]/i)){r.container.info.html("Your browser (Internet Explorer) is out of date to run DFlip Flipbook Plugin. <br><a href='http://browsehappy.com/'>Upgrade to a new one</a>").addClass("df-old-browser");n.removeClass("df-loading");return r}var c=o.backgroundImage==null||o.backgroundImage==""?"":"url('"+o.backgroundImage+"')";r.container.css({position:"relative",overflow:"hidden",backgroundColor:o.backgroundColor,backgroundImage:c});if(r.options.isLightBox==true){r.analytics({eventAction:"Open Book",options:r.options})}r.init(l,a);if(r.options.onCreate!=null)r.options.onCreate(r);return r}a.prototype.init=function(e){var a=this;var o=a.target;var r=a.options;if(e==true){var s=function(e){var i=function(){MOCKUP.defaults.anisotropy=0;MOCKUP.defaults.groundTexture="blank";THREE.skipPowerOfTwo=true;q();if(e!=null)e()};if(window.MOCKUP==null){a.updateInfo(r.text.loading+" WEBGL 3D ...");if(typeof define==="function"&&define.amd&&window.requirejs){requirejs.config({paths:{three:n.threejsSrc.replace(".js","")},shim:{three:{exports:"THREE"}}});require(["three"],function(e){window.THREE=e;M(n.mockupjsSrc+"?ver="+t.version,function(){i()});return e})}else if(typeof define==="function"&&define.amd){require(["three",n.threejsSrc.replace(".js","")],function(e,t){e(function(){})})}else{M(n.threejsSrc+"?ver="+t.version,function(){M(n.mockupjsSrc+"?ver="+t.version,function(){i()})})}}else{i()}};s(function(){a.container.css({minHeight:300,minWidth:300});a.stage=new G(R(a.options,{container:a.container}));a.stage.previewObject=a;a.contentProvider=new Y(a.contentSource,function(n){var r={pageCount:n.pageCount,stackCount:6,segments:20,width:n.bookSize.width,height:n.bookSize.height};a.target=o=a.stage.target=new MOCKUP.Book(R(a.options,r),a.stage);a.extendtarget();V(a.container,a);o.ui=a.ui;o.container=a.container;n.webgl=e;n.setTarget(a.target);o.getContentLayer=function(e){var i=o.direction==t.DIRECTION.RTL,n=a.stage.cssScene.divLeft.element,r=a.stage.cssScene.divRight.element;var s=F(o._activePage);if(A(o))return i?n:r;if(e%2==0)return i?r:n;else return i?n:r};o.stage=a.stage;o.flipCallback=function(){if(a.contentProvider){a.contentProvider.review("flipCallback");var e=F(o._activePage);var n,r;var s=o.getPageByNumber(e),l=o.getPageByNumber(e+1);var c=o.parent.cssScene.divLeft,u=o.parent.cssScene.divRight;var d=o.pageMode==t.PAGE_MODE.SINGLE;var f=o.direction==t.DIRECTION.RTL;if(s!=null&&c!=null){n=Math.abs(s.geometry.boundingBox.max.x-s.geometry.boundingBox.min.x);r=Math.abs(s.geometry.boundingBox.max.z-s.geometry.boundingBox.min.z);c.rotation.y=-Math.atan2(r,n)*.9;c.position.z=r*.8;c.position.x=r/2.5;i(c.element).css({width:n,left:-n/2})}if(l!=null&&u!=null){n=Math.abs(l.geometry.boundingBox.max.x-l.geometry.boundingBox.min.x);r=Math.abs(l.geometry.boundingBox.max.z-l.geometry.boundingBox.min.z);u.rotation.y=Math.atan2(r,n)*.9;u.position.z=r*.8;u.position.x=-r/2.5;i(u.element).css({width:n,left:n/2})}if(a.options.onFlip!=null)a.options.onFlip(a)}};o.resize=function(){a.resize()}();o.updatePageCallback=function(){a.ui.update();a.checkCenter();a.stage.renderRequestPending=true};var s=i(a.stage.cssScene.divLeft.element);var l=i(a.stage.cssScene.divRight.element);o.preFlipCallback=function(){s.empty();l.empty();if(a.options.beforeFlip!=null)a.options.beforeFlip(a);a.playSound()};i(window).trigger("resize");s.css({width:n.bookSize.width,height:n.bookSize.height,left:-n.bookSize.width/2});l.css({width:n.bookSize.width,height:n.bookSize.height,left:n.bookSize.width/2});o.ease=TWEEN.Easing.Cubic.InOut;o.contentProvider=n;o.duration=a.options.duration;o.gotoPage(o._activePage);o.flipCallback();if(a.options.isLightBox==true){a.analytics({eventAction:"Book Ready",options:a.options})}if(a.options.onReady!=null)a.options.onReady(a)},r,a)})}else{a.contentProvider=new Y(a.contentSource,function(t){var n={pageCount:t.pageCount,contentSourceType:t.contentSourceType};a.target=o=new X(R(a.options,n),a.container);a.target.previewObject=a;a.extendtarget();V(a.container,a);t.webgl=e;t.setTarget(a.target);t.waitPeriod=2;o.ease=TWEEN.Easing.Quadratic.InOut;o.duration=a.options.duration;o.container=a.container;o.updatePageCallback=function(){a.ui.update();a.checkCenter()};o.resize=function(){a.resize()}();i(window).trigger("resize");o.flipCallback=function(){if(a.contentProvider){a.contentProvider.review("flipCallback");if(a.options.onFlip!=null)a.options.onFlip(a)}};o.preFlipCallback=function(){if(a.options.beforeFlip!=null)a.options.beforeFlip(a);a.playSound()};o.gotoPage(o._activePage);o.flipCallback();if(a.options.onReady!=null)a.options.onReady(a);a.analytics({eventAction:"Book Ready",options:a.options})},r,a)}};a.prototype.extendtarget=function(){var e=this;e.target.previewObject=e;e.target.reset=function(){for(var t=0;t<e.target.children.length;t++){var i=e.target.children[t];i.skipFlip=true;i.name="-2"}e.contentProvider.annotedPage="-2";e.target.refresh()}};a.prototype.getURLHash=function(){if(this.options.id!=null){var e=l.getSharePrefix()+(this.options.slug!=null?this.options.slug:this.options.id)+"/";if(this.target!=null&&this.target._activePage!=null){e+=this.target._activePage+"/"}window.location.hash=e}return window.location.href};a.prototype.end=function(){this.target.gotoPage(this.target.endPage)};a.prototype.gotoPage=function(e){this.target.gotoPage(e);if(this.ui!=null)this.ui.update()};a.prototype.prev=function(){this.target.prev()};a.prototype.next=function(){this.target.next()};a.prototype.updateInfo=function(e){if(this.container&&this.container.info&&this.container.info.html)this.container.info.html(e)};a.prototype.analytics=function(e){if(this.options.enableAnalytics==true){try{var t=e.options,i=undefined;if(t){i=t.bookTitle||t.slug||t.id}var n=window.gtag;if(n){n("event",e.eventAction,{event_category:"Flipbook",event_label:i})}else{var a=window.ga||window.__gaTracker;a("send",{hitType:"event",eventCategory:"Flipbook",eventAction:e.eventAction,eventLabel:i})}}catch(e){}}};return a}(Z);i.fn.extend({shelf:function(){},flipBook:function(e,t){return new Q(i(this),e,W(t))}})})(DFLIP,jQuery);(function(e){"use strict";e.URL=e.URL||e.webkitURL;if(e.Blob&&e.URL){try{new Blob;return}catch(e){}}var t=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||function(e){var t=function(e){return Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1]},i=function e(){this.data=[]},n=function e(t,i,n){this.data=t;this.size=t.length;this.type=i;this.encoding=n},a=i.prototype,o=n.prototype,r=e.FileReaderSync,s=function(e){this.code=this[this.name=e]},l=("NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR "+"NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR").split(" "),c=l.length,u=e.URL||e.webkitURL||e,d=u.createObjectURL,f=u.revokeObjectURL,h=u,p=e.btoa,g=e.atob,v=e.ArrayBuffer,m=e.Uint8Array,b=/^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;n.fake=o.fake=true;while(c--){s.prototype[l[c]]=c+1}if(!u.createObjectURL){h=e.URL=function(e){var t=document.createElementNS("http://www.w3.org/1999/xhtml","a"),i;t.href=e;if(!("origin"in t)){if(t.protocol.toLowerCase()==="data:"){t.origin=null}else{i=e.match(b);t.origin=i&&i[1]}}return t}}h.createObjectURL=function(e){var t=e.type,i;if(t===null){t="application/octet-stream"}if(e instanceof n){i="data:"+t;if(e.encoding==="base64"){return i+";base64,"+e.data}else if(e.encoding==="URI"){return i+","+decodeURIComponent(e.data)}if(p){return i+";base64,"+p(e.data)}else{return i+","+encodeURIComponent(e.data)}}else if(d){return d.call(u,e)}};h.revokeObjectURL=function(e){if(e.substring(0,5)!=="data:"&&f){f.call(u,e)}};a.append=function(e){var i=this.data;if(m&&(e instanceof v||e instanceof m)){var a="",o=new m(e),l=0,c=o.length;for(;l<c;l++){a+=String.fromCharCode(o[l])}i.push(a)}else if(t(e)==="Blob"||t(e)==="File"){if(r){var u=new r;i.push(u.readAsBinaryString(e))}else{throw new s("NOT_READABLE_ERR")}}else if(e instanceof n){if(e.encoding==="base64"&&g){i.push(g(e.data))}else if(e.encoding==="URI"){i.push(decodeURIComponent(e.data))}else if(e.encoding==="raw"){i.push(e.data)}}else{if(typeof e!=="string"){e+=""}i.push(unescape(encodeURIComponent(e)))}};a.getBlob=function(e){if(!arguments.length){e=null}return new n(this.data.join(""),e,"raw")};a.toString=function(){return"[object BlobBuilder]"};o.slice=function(e,t,i){var a=arguments.length;if(a<3){i=null}return new n(this.data.slice(e,a>1?t:this.data.length),i,this.encoding)};o.toString=function(){return"[object Blob]"};o.close=function(){this.size=0;delete this.data};return i}(e);e.Blob=function(e,i){var n=i?i.type||"":"";var a=new t;if(e){for(var o=0,r=e.length;o<r;o++){if(Uint8Array&&e[o]instanceof Uint8Array){a.append(e[o].buffer)}else{a.append(e[o])}}}var s=a.getBlob(n);if(!s.slice&&s.webkitSlice){s.slice=s.webkitSlice}return s};var i=Object.getPrototypeOf||function(e){return e.__proto__};e.Blob.prototype=i(new e.Blob)})(window);(function(e){"use strict";var t=e.Uint8Array,i=e.HTMLCanvasElement,n=i&&i.prototype,a=/\s*;\s*base64\s*(?:;|$)/i,o="toDataURL",r,s=function(e){var i=e.length,n=new t(i/4*3|0),a=0,o=0,s=[0,0],l=0,c=0,u,d;while(i--){d=e.charCodeAt(a++);u=r[d-43];if(u!==255&&u!=null){s[1]=s[0];s[0]=d;c=c<<6|u;l++;if(l===4){n[o++]=c>>>16;if(s[1]!==61){n[o++]=c>>>8}if(s[0]!==61){n[o++]=c}l=0}}}return n};if(t){r=new t([62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,0,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51])}if(i&&!n.toBlob){n.toBlob=function(e,i){if(!i){i="image/png"}if(this.mozGetAsFile){e(this.mozGetAsFile("canvas",i));return}if(this.msToBlob&&/^\s*image\/png\s*(?:$|;)/i.test(i)){e(this.msToBlob());return}var n=Array.prototype.slice.call(arguments,1),r=this[o].apply(this,n),l=r.indexOf(","),c=r.substring(l+1),u=a.test(r.substring(0,l)),d;if(Blob.fake){d=new Blob;if(u){d.encoding="base64"}else{d.encoding="URI"}d.data=c;d.size=c.length}else if(t){if(u){d=new Blob([s(c)],{type:i})}else{d=new Blob([decodeURIComponent(c)],{type:i})}}e(d)};if(n.toDataURLHD){n.toBlobHD=function(){o="toDataURLHD";var e=this.toBlob();o="toDataURL";return e}}else{n.toBlobHD=n.toBlob}}})(window);(function e(){if("performance"in window===false){window.performance={}}Date.now=Date.now||function(){return(new Date).getTime()};if("now"in window.performance===false){var t=window.performance.timing&&window.performance.timing.navigationStart?window.performance.timing.navigationStart:Date.now();window.performance.now=function(){return Date.now()-t}}})();(function e(){var t=t||function(){var e=[];return{getAll:function(){return e},removeAll:function(){e=[]},add:function(t){e.push(t)},remove:function(t){var i=e.indexOf(t);if(i!==-1){e.splice(i,1)}},update:function(t){if(e.length===0){return false}var i=0;t=t!=null?t:window.performance.now();while(i<e.length){if(e[i].update(t)){i++}else{e.splice(i,1)}}return true}}}();t.Tween=function(e){var i=e;var n={};var a={};var o={};var r=1e3;var s=0;var l=false;var c=false;var u=false;var d=0;var f=null;var h=t.Easing.Linear.None;var p=t.Interpolation.Linear;var g=[];var v=null;var m=false;var b=null;var w=null;var x=null;for(var P in e){n[P]=parseFloat(e[P],10)}this.to=function(e,t){if(t!=null){r=t}a=e;return this};this.start=function(e){t.add(this);c=true;m=false;f=e!=null?e:window.performance.now();f+=d;for(var r in a){if(a[r]instanceof Array){if(a[r].length===0){continue}a[r]=[i[r]].concat(a[r])}if(n[r]===null){continue}n[r]=i[r];if(n[r]instanceof Array===false){n[r]*=1}o[r]=n[r]||0}return this};this.stop=function(){if(!c){return this}t.remove(this);c=false;if(x!==null){x.call(i)}this.stopChainedTweens();return this};this.stopChainedTweens=function(){for(var e=0,t=g.length;e<t;e++){g[e].stop()}};this.complete=function(){if(!c){return this}t.remove(this);c=false;if(w!==null){w.call(i)}this.completeChainedTweens();return this};this.completeChainedTweens=function(){for(var e=0,t=g.length;e<t;e++){g[e].complete()}};this.delay=function(e){d=e;return this};this.repeat=function(e){s=e;return this};this.yoyo=function(e){l=e;return this};this.easing=function(e){h=e==null?h:e;return this};this.interpolation=function(e){p=e;return this};this.chain=function(){g=arguments;return this};this.onStart=function(e){v=e;return this};this.onUpdate=function(e){b=e;return this};this.onComplete=function(e){w=e;return this};this.onStop=function(e){x=e;return this};this.update=function(e){var t;var c;var x;if(e<f){return true}if(m===false){if(v!==null){v.call(i)}m=true}c=(e-f)/r;c=c>1?1:c;x=h(c);for(t in a){if(n[t]===null){continue}var P=n[t]||0;var y=a[t];if(y instanceof Array){i[t]=p(y,x)}else{if(typeof y==="string"){if(y.startsWith("+")||y.startsWith("-")){y=P+parseFloat(y,10)}else{y=parseFloat(y,10)}}if(typeof y==="number"){i[t]=P+(y-P)*x}}}if(b!==null){b.call(i,x)}if(c===1){if(s>0){if(isFinite(s)){s--}for(t in o){if(typeof a[t]==="string"){o[t]=o[t]+parseFloat(a[t],10)}if(l){var C=o[t];o[t]=a[t];a[t]=C}n[t]=o[t]}if(l){u=!u}f=e+d;return true}else{if(w!==null){w.call(i)}for(var L=0,S=g.length;L<S;L++){g[L].start(f+r)}return false}}return true}};t.Easing={Linear:{None:function(e){return e}},Quadratic:{In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){if((e*=2)<1){return.5*e*e}return-.5*(--e*(e-2)-1)}},Quartic:{In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){if((e*=2)<1){return.5*e*e*e*e}return-.5*((e-=2)*e*e*e-2)}},Sinusoidal:{In:function(e){return 1-Math.cos(e*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return.5*(1-Math.cos(Math.PI*e))}},Cubic:{In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){if((e*=2)<1){return.5*e*e*e}return.5*((e-=2)*e*e+2)}}};t.Interpolation={Linear:function(e,i){var n=e.length-1;var a=n*i;var o=Math.floor(a);var r=t.Interpolation.Utils.Linear;if(i<0){return r(e[0],e[1],a)}if(i>1){return r(e[n],e[n-1],n-a)}return r(e[o],e[o+1>n?n:o+1],a-o)},Bezier:function(e,i){var n=0;var a=e.length-1;var o=Math.pow;var r=t.Interpolation.Utils.Bernstein;for(var s=0;s<=a;s++){n+=o(1-i,a-s)*o(i,s)*e[s]*r(a,s)}return n},Utils:{Linear:function(e,t,i){return(t-e)*i+e},Bernstein:function(e,i){var n=t.Interpolation.Utils.Factorial;return n(e)/n(i)/n(e-i)},Factorial:function(){var e=[1];return function(t){var i=1;if(e[t]){return e[t]}for(var n=t;n>1;n--){i*=n}e[t]=i;return i}}(),CatmullRom:function(e,t,i,n,a){var o=(i-e)*.5;var r=(n-t)*.5;var s=a*a;var l=a*s;return(2*t-2*i+o+r)*l+(-3*t+3*i-2*o-r)*s+o*a+t}}};window.TWEEN=t})();DFLIP.createBlob=function e(t,i){if(typeof Blob!=="undefined"){return new Blob([t],{type:i})}var n=new MozBlobBuilder;n.append(t);return n.getBlob(i)};DFLIP.createObjectURL=function e(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return function e(i,n){if(typeof URL!=="undefined"&&URL.createObjectURL){var a=DFLIP.createBlob(i,n);return URL.createObjectURL(a)}var o="data:"+n+";base64,";for(var r=0,s=i.length;r<s;r+=3){var l=i[r]&255;var c=i[r+1]&255;var u=i[r+2]&255;var d=l>>2,f=(l&3)<<4|c>>4;var h=r+1<s?(c&15)<<2|u>>6:64;var p=r+2<s?u&63:64;o+=t[d]+t[f]+t[h]+t[p]}return o}}();var ThumbList=function e(){function t(e){var i=e&&e.w+"px"||"100%";var n=e&&e.h+"px"||"100%";var a=this.itemHeight=e.itemHeight;this.items=e.items;this.generatorFn=e.generatorFn;this.totalRows=e.totalRows||e.items&&e.items.length;this.addFn=e.addFn;this.scrollFn=e.scrollFn;var o=t.createScroller(a*this.totalRows);this.container=t.createContainer(i,n);this.container.appendChild(o);this.screenItemsLen=Math.ceil(e.h/a);this.offsetItems=this.screenItemsLen;this.cachedItemsLen=this.screenItemsLen+this.offsetItems*2;this._renderChunk(this.container,0);var r=this;r.lastRepaintY=0;var s=this.screenItemsLen*a;var l=0;var c;function u(e){var t=e.target.scrollTop;if(!r.lastRepaintY||Math.abs(t-r.lastRepaintY)>=r.offsetItems*r.itemHeight){var i=parseInt(t/a,10)-r.offsetItems;r._renderChunk(r.container,i<0?0:i);r.lastRepaintY=t}r.lastScrolled=l=Date.now();if(r.scrollFn!=null){r.scrollFn()}e.preventDefault&&e.preventDefault()}r.dispose=function(){if(r.container){if(r.container.parentNode){r.container.parentNode.removeChild(r.container)}}r.container.removeEventListener("scroll",u)};r.container.addEventListener("scroll",u)}t.prototype.reset=function(e){this.screenItemsLen=Math.ceil(e/this.itemHeight);this.cachedItemsLen=this.screenItemsLen+this.offsetItems*2;var t=parseInt(this.lastRepaintY/this.itemHeight,10)-this.offsetItems;this.needReset=true;this._renderChunk(this.container,Math.max(t,0))};t.prototype.createRow=function(e){var t;if(this.generatorFn){t=this.generatorFn(e);t.classList.add("df-vrow");t.style.position="absolute";t.style.top=e*this.itemHeight+"px";t.setAttribute("index",e)}return t};t.prototype._renderChunk=function(e,t){var i=this.range==null;this.range=this.range||{min:0,max:this.cachedItemsLen};var n=this.range;var a=n.min,o=n.max;var r=i?true:t>=a;if(!i&&t==a&&this.needReset==false)return;var s;var l=i?a:r?o:t;l=l>this.totalRows?this.totalRows:l<0?0:l;var c=t+this.cachedItemsLen;c=c>this.totalRows?this.totalRows:c;for(s=l;s<c;s++){if(r)e.appendChild(this.createRow(s));else e.insertBefore(this.createRow(s),e.childNodes[1+s-l]);if(this.addFn!=null){this.addFn(s)}}var u=Math.abs(t-a);this.needReset=false;if(!i&&e.childNodes.length>this.cachedItemsLen+1){var d=r?1:1+this.cachedItemsLen,f=d+(c-l);for(var h=f;h>d;h--){if(e.childNodes[d])this.container.removeChild(e.childNodes[d])}}this.range.min=t;this.range.max=c};t.createContainer=function(e,t){var i=document.createElement("div");i.style.width=e;i.style.height=t;i.style.overflow="auto";i.style.position="relative";i.style.padding=0;return i};t.createScroller=function(e){var t=document.createElement("div");t.style.opacity=0;t.style.position="absolute";t.style.top=0;t.style.left=0;t.style.width="1px";t.style.height=e+"px";return t};return t}();var BookMarkViewer=function e(){function t(e){this.outline=null;this.lastToggleIsShow=true;this.container=e.container;this.linkService=e.linkService;this.outlineItemClass=e.outlineItemClass||"outlineItem";this.outlineToggleClass=e.outlineToggleClass||"outlineItemToggler";this.outlineToggleHiddenClass=e.outlineToggleHiddenClass||"outlineItemsHidden"}t.prototype={dispose:function(){if(this.container){if(this.container.parentNode){this.container.parentNode.removeChild(this.container)}}this.linkService=null},reset:function e(){this.outline=null;this.lastToggleIsShow=true;var t=this.container;while(t.firstChild){t.removeChild(t.firstChild)}},_dispatchEvent:function e(t){var i=document.createEvent("CustomEvent");i.initCustomEvent("outlineloaded",true,true,{outlineCount:t});this.container.dispatchEvent(i)},_bindLink:function e(t,i){var n=this.linkService;if(i.custom==true){t.href=n.getCustomDestinationHash(i.dest);t.onclick=function e(t){n.customNavigateTo(i.dest);return false}}else{if(i.url){pdfjsLib.addLinkAttributes(t,{url:i.url});return}t.href=n.getDestinationHash(i.dest);t.onclick=function e(t){n.navigateTo(i.dest);return false}}},_addToggleButton:function e(t){var i=document.createElement("div");i.className=this.outlineToggleClass+" "+this.outlineToggleHiddenClass;i.onclick=function(e){e.stopPropagation();i.classList.toggle(this.outlineToggleHiddenClass);if(e.shiftKey){var n=!i.classList.contains(this.outlineToggleHiddenClass);this._toggleOutlineItem(t,n)}}.bind(this);t.insertBefore(i,t.firstChild)},_toggleOutlineItem:function e(t,i){this.lastToggleIsShow=i;var n=t.querySelectorAll("."+this.outlineToggleClass);for(var a=0,o=n.length;a<o;++a){n[a].classList[i?"remove":"add"](this.outlineToggleHiddenClass)}},toggleOutlineTree:function e(){if(!this.outline){return}this._toggleOutlineItem(this.container,!this.lastToggleIsShow)},render:function e(t){var i=t&&t.outline||null;var n=0;if(this.outline){this.reset()}this.outline=i;if(!i){return}var a=document.createDocumentFragment();var o=[{parent:a,items:this.outline}];var r=false;while(o.length>0){var s=o.shift();var l=s.custom;for(var c=0,u=s.items.length;c<u;c++){var d=s.items[c];var f=document.createElement("div");f.className=this.outlineItemClass;var h=document.createElement("a");if(d.custom==null&&l!=null)d.custom=l;this._bindLink(h,d);h.textContent=d.title.replace(/\x00/g,"");f.appendChild(h);if(d.items&&d.items.length>0){r=true;this._addToggleButton(f);var p=document.createElement("div");p.className=this.outlineItemClass+"s";f.appendChild(p);o.push({parent:p,custom:d.custom,items:d.items})}s.parent.appendChild(f);n++}}if(r){if(this.container.classList!=null){this.container.classList.add(this.outlineItemClass+"s")}else if(this.container.className!=null){this.container.className+=" picWindow"}}this.container.appendChild(a);this._dispatchEvent(n)}};return t}();var DFLightBox=function e(t){function i(e,i){this.duration=300;var n=this;n.lightboxWrapper=t("<div>").addClass("df-lightbox-wrapper");n.container=t("<div>").addClass("df-container").appendTo(n.lightboxWrapper);n.controls=t("<div>").addClass("df-lightbox-controls").appendTo(n.lightboxWrapper);n.closeButton=t("<div>").addClass("df-lightbox-close df-ui-btn").on("click",function(){n.close(e)}).appendTo(n.controls);n.lightboxWrapper.append(n.container);return n}i.prototype.show=function(e){if(this.lightboxWrapper.parent().length==0)t("body").append(this.lightboxWrapper);t("html,body").addClass("df-lightbox-open");this.lightboxWrapper.fadeIn(this.duration,e);return this};i.prototype.close=function(e){this.lightboxWrapper.fadeOut(this.duration);setTimeout(e,this.duration);t("html,body").removeClass("df-lightbox-open");return this};return i}(jQuery);DFLIP.Share=function e(t){function i(e,i){var n=this;var a="<div>";var o="df-share-button";var r="width=500,height=400";n.isOpen=false;n.shareUrl="";n.wrapper=t('<div class="df-share-wrapper" style="display: none;">').on("click",function(e){n.close()});n.box=t('<div class="df-share-box">').on("click",function(e){e.preventDefault();e.stopPropagation()}).appendTo(n.wrapper).html('<span class="df-share-title">'+i.text.share+"</span>");n.urlInput=t('<textarea class="df-share-url">').on("click",function(){t(this).select()});n.facebook=t(a,{class:o+" df-share-facebook "+i.icons["facebook"]}).on("click",function(e){window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(n.shareUrl),"Sharer",r)});n.google=t(a,{class:o+" df-share-google "+i.icons["google"]}).on("click",function(e){window.open("https://plus.google.com/share?url="+encodeURIComponent(n.shareUrl),"Sharer",r)});n.twitter=t(a,{class:o+" df-share-twitter "+i.icons["twitter"]}).on("click",function(e){window.open("http://twitter.com/share?url="+encodeURIComponent(n.shareUrl),"Sharer",r)});n.mail=t("<a>",{class:o+" df-share-mail "+i.icons["mail"],href:"mailto:?subject="+i.text["mailSubject"]+"&body="+i.text["mailBody"].replace("{{url}}",encodeURIComponent(n.shareUrl)),target:"_blank"}).on("click",function(e){t(this).attr("href","mailto:?subject="+i.text["mailSubject"]+"&body="+i.text["mailBody"].replace("{{url}}",encodeURIComponent(n.shareUrl)));e.stopPropagation()});n.box.append(n.urlInput).append(n.facebook).append(n.twitter).append(n.mail);t(e).append(n.wrapper)}i.prototype.show=function(){this.wrapper.fadeIn(300);this.urlInput.val(this.shareUrl);this.urlInput.trigger("click");this.isOpen=true};i.prototype.dispose=function(){var e=this;e.box.off();e.google.off();e.twitter.off();e.facebook.off();e.mail.off();e.urlInput.off();e.wrapper.off().remove()};i.prototype.close=function(){this.wrapper.fadeOut(300);this.isOpen=false};i.prototype.update=function(e){this.shareUrl=e};return i}(jQuery);DFLIP.Popup=function e(t){function i(e,i){var n=this;var a="<div>";var o="width=500,height=400";n.isOpen=false;n.wrapper=t('<div class="df-popup-wrapper" style="display: none;">').on("click",function(e){n.close()});n.box=t('<div class="df-popup-box">').on("click",function(e){e.preventDefault();e.stopPropagation()}).appendTo(n.wrapper);t(e).append(n.wrapper)}i.prototype.show=function(){this.wrapper.fadeIn(300);this.isOpen=true};i.prototype.dispose=function(){var e=this;e.box.off();e.wrapper.off().remove()};i.prototype.close=function(){this.wrapper.fadeOut(300);this.isOpen=false};return i}(jQuery);var PDFLinkService=function(){function e(){this.baseUrl=null;this.pdfDocument=null;this.pdfViewer=null;this.pdfHistory=null;this._pagesRefCache=null}e.prototype={dispose:function(){this.baseUrl=null;this.pdfDocument=null;this.pdfViewer=null;this.pdfHistory=null;this._pagesRefCache=null},setDocument:function e(t,i){this.baseUrl=i;this.pdfDocument=t;this._pagesRefCache=Object.create(null)},setViewer:function e(t){this.pdfViewer=t;this.externalLinkTarget=t.previewObject.options.linkTarget},setHistory:function e(t){this.pdfHistory=t},get pagesCount(){return this.pdfDocument.numPages},get page(){return this.pdfViewer.currentPageNumber},set page(e){this.pdfViewer.currentPageNumber=e},navigateTo:function e(t){var i="";var n=this;var a=function(e){var o=e instanceof Object?n._pagesRefCache[e.num+" "+e.gen+" R"]:e+1;if(o){if(n.pdfViewer.contentProvider.options.pageSize==DFLIP.PAGE_SIZE.DOUBLEINTERNAL&&o>2){o=o*2-1}if(o>n.pdfViewer.pageCount){o=n.pdfViewer.pageCount}n.pdfViewer.gotoPage(o);if(n.pdfHistory){n.pdfHistory.push({dest:t,hash:i,page:o})}}else{n.pdfDocument.getPageIndex(e).then(function(t){var i=t+1;var o=e.num+" "+e.gen+" R";n._pagesRefCache[o]=i;a(e)})}};var o;if(typeof t==="string"){i=t;o=this.pdfDocument.getDestination(t)}else{o=Promise.resolve(t)}o.then(function(e){t=e;if(!(e instanceof Array)){return}a(e[0])})},customNavigateTo:function e(t){if(t==""||t==null||t=="null")return;var i=null;if(!isNaN(Math.round(t))){i=t}else if(typeof t==="string"){i=parseInt(t.replace("#",""),10);if(isNaN(i)){window.open(t,DFLIP.defaults.linkTarget==DFLIP.LINK_TARGET.SELF?"_self":"_blank");return}}if(i!=null)this.pdfViewer.gotoPage(i)},getDestinationHash:function e(t){if(typeof t==="string"){return this.getAnchorUrl("#"+escape(t))}if(t instanceof Array){var i=t[0];var n=i instanceof Object?this._pagesRefCache[i.num+" "+i.gen+" R"]:i+1;if(n){var a=this.getAnchorUrl("#page="+n);var o=t[1];if(typeof o==="object"&&"name"in o&&o.name==="XYZ"){var r=t[4]||this.pdfViewer.currentScaleValue;var s=parseFloat(r);if(s){r=s*100}a+="&zoom="+r;if(t[2]||t[3]){a+=","+(t[2]||0)+","+(t[3]||0)}}return a}}return this.getAnchorUrl("")},getCustomDestinationHash:function e(t){return"#"+escape(t)},getAnchorUrl:function e(t){return(this.baseUrl||"")+t},setHash:function e(t){if(t.indexOf("=")>=0){var i=parseQueryString(t);if("nameddest"in i){if(this.pdfHistory){this.pdfHistory.updateNextHashParam(i.nameddest)}this.navigateTo(i.nameddest);return}var n,a;if("page"in i){n=i.page|0||1}if("zoom"in i){var o=i.zoom.split(",");var r=o[0];var s=parseFloat(r);if(r.indexOf("Fit")===-1){a=[null,{name:"XYZ"},o.length>1?o[1]|0:null,o.length>2?o[2]|0:null,s?s/100:r]}else{if(r==="Fit"||r==="FitB"){a=[null,{name:r}]}else if(r==="FitH"||r==="FitBH"||(r==="FitV"||r==="FitBV")){a=[null,{name:r},o.length>1?o[1]|0:null]}else if(r==="FitR"){if(o.length!==5){console.error("PDFLinkService_setHash: "+"Not enough parameters for 'FitR'.")}else{a=[null,{name:r},o[1]|0,o[2]|0,o[3]|0,o[4]|0]}}else{console.error("PDFLinkService_setHash: '"+r+"' is not a valid zoom value.")}}}if(a){this.pdfViewer.scrollPageIntoView(n||this.page,a)}else if(n){this.page=n}if("pagemode"in i){var l=document.createEvent("CustomEvent");l.initCustomEvent("pagemode",true,true,{mode:i.pagemode});this.pdfViewer.container.dispatchEvent(l)}}else if(/^\d+$/.test(t)){this.page=t}else{if(this.pdfHistory){this.pdfHistory.updateNextHashParam(unescape(t))}this.navigateTo(unescape(t))}},executeNamedAction:function e(t){switch(t){case"GoBack":if(this.pdfHistory){this.pdfHistory.back()}break;case"GoForward":if(this.pdfHistory){this.pdfHistory.forward()}break;case"NextPage":this.page++;break;case"PrevPage":this.page--;break;case"LastPage":this.page=this.pagesCount;break;case"FirstPage":this.page=1;break;default:break}var i=document.createEvent("CustomEvent");i.initCustomEvent("namedaction",true,true,{action:t});this.pdfViewer.container.dispatchEvent(i)},cachePageRef:function e(t,i){var n=i.num+" "+i.gen+" R";this._pagesRefCache[n]=t}};return e}();var FindStates={FIND_FOUND:0,FIND_NOTFOUND:1,FIND_WRAPPED:2,FIND_PENDING:3};var FIND_SCROLL_OFFSET_TOP=-50;var FIND_SCROLL_OFFSET_LEFT=-400;var CHARACTERS_TO_NORMALIZE={"‘":"'","’":"'","‚":"'","‛":"'","“":'"',"”":'"',"„":'"',"‟":'"',"¼":"1/4","½":"1/2","¾":"3/4"};DFLIP.PDFFindController=function e(){function t(e){this.pdfViewer=e.pdfViewer||null;this.onUpdateResultsCount=null;this.onUpdateState=null;this.reset();var t=Object.keys(CHARACTERS_TO_NORMALIZE).join("");this.normalizationRegex=new RegExp("["+t+"]","g")}t.prototype={reset:function e(){this.startedTextExtraction=false;this.extractTextPromises=[];this.pendingFindMatches=Object.create(null);this.active=false;this.pageContents=[];this.pageMatches=[];this.pageMatchesLength=null;this.matchCount=0;this.selected={pageIdx:-1,matchIdx:-1};this.offset={pageIdx:null,matchIdx:null};this.pagesToSearch=null;this.resumePageIdx=null;this.state=null;this.dirtyMatch=false;this.findTimeout=null;this.firstPagePromise=new Promise(function(e){this.resolveFirstPage=e}.bind(this))},normalize:function e(t){return t.replace(this.normalizationRegex,function(e){return CHARACTERS_TO_NORMALIZE[e]})},_prepareMatches:function e(t,i,n){function a(e,t){var i,n,a;i=e[t];a=e[t+1];if(t<e.length-1&&i.match===a.match){i.skipped=true;return true}for(var o=t-1;o>=0;o--){n=e[o];if(n.skipped){continue}if(n.match+n.matchLength<i.match){break}if(n.match+n.matchLength>=i.match+i.matchLength){i.skipped=true;return true}}return false}var o,r;t.sort(function(e,t){return e.match===t.match?e.matchLength-t.matchLength:e.match-t.match});for(o=0,r=t.length;o<r;o++){if(a(t,o)){continue}i.push(t[o].match);n.push(t[o].matchLength)}},calcFindPhraseMatch:function e(t,i,n){var a=[];var o=t.length;var r=-o;while(true){r=n.indexOf(t,r+o);if(r===-1){break}a.push(r)}this.pageMatches[i]=a},calcFindWordMatch:function e(t,i,n){var a=[];var o=t.match(/\S+/g);var r,s,l;for(var c=0,u=o.length;c<u;c++){r=o[c];s=r.length;l=-s;while(true){l=n.indexOf(r,l+s);if(l===-1){break}a.push({match:l,matchLength:s,skipped:false})}}if(!this.pageMatchesLength){this.pageMatchesLength=[]}this.pageMatchesLength[i]=[];this.pageMatches[i]=[];this._prepareMatches(a,this.pageMatches[i],this.pageMatchesLength[i])},calcFindMatch:function e(t){var i=this.normalize(this.pageContents[t]);var n=this.normalize(this.state.query);var a=this.state.caseSensitive;var o=this.state.phraseSearch;var r=n.length;if(r===0){return}if(!a){i=i.toLowerCase();n=n.toLowerCase()}if(o){this.calcFindPhraseMatch(n,t,i)}else{this.calcFindWordMatch(n,t,i)}this.updatePage(t);if(this.resumePageIdx===t){this.resumePageIdx=null;this.nextPageMatch()}if(this.pageMatches[t].length>0){this.matchCount+=this.pageMatches[t].length;this.updateUIResultsCount()}},extractText:function e(){if(this.startedTextExtraction){return}this.startedTextExtraction=true;this.pageContents=[];var t=[];var i=this.pdfViewer.contentProvider.pdfDocument.numPages;for(var n=0;n<i;n++){this.extractTextPromises.push(new Promise(function(e){t.push(e)}))}var a=this;function o(e){a.pdfViewer.getPageTextContent(e).then(function i(n){var r=n.items;var s=[];for(var l=0,c=r.length;l<c;l++){s.push(r[l].str)}a.pageContents.push(s.join(""));t[e](e);console.log("extracting Page"+e);if(e+1<a.pdfViewer.contentProvider.pdfDocument.numPages){o(e+1)}})}o(0)},executeCommand:function e(t,i){if(this.state===null||t!=="findagain"){this.dirtyMatch=true}this.state=i;this.updateUIState(FindStates.FIND_PENDING);this.firstPagePromise.then(function(){this.extractText();clearTimeout(this.findTimeout);if(t==="find"){this.findTimeout=setTimeout(this.nextMatch.bind(this),250)}else{this.nextMatch()}}.bind(this))},updatePage:function e(t){if(this.selected.pageIdx===t){this.pdfViewer.currentPageNumber=t+1}var i=this.pdfViewer.getPageView(t);if(i.textLayer){i.textLayer.updateMatches()}},nextMatch:function e(){var t=this.state.findPrevious;var i=this.pdfViewer.currentPageNumber-1;var n=this.pdfViewer.contentProvider.pageCount;this.active=true;if(this.dirtyMatch){this.dirtyMatch=false;this.selected.pageIdx=this.selected.matchIdx=-1;this.offset.pageIdx=i;this.offset.matchIdx=null;this.hadMatch=false;this.resumePageIdx=null;this.pageMatches=[];this.matchCount=0;this.pageMatchesLength=null;var a=this;for(var o=0;o<n;o++){this.updatePage(o);if(!(o in this.pendingFindMatches)){this.pendingFindMatches[o]=true;this.extractTextPromises[o].then(function(e){delete a.pendingFindMatches[e];a.calcFindMatch(e)})}}}if(this.state.query===""){this.updateUIState(FindStates.FIND_FOUND);return}if(this.resumePageIdx){return}var r=this.offset;this.pagesToSearch=n;if(r.matchIdx!==null){var s=this.pageMatches[r.pageIdx].length;if(!t&&r.matchIdx+1<s||t&&r.matchIdx>0){this.hadMatch=true;r.matchIdx=t?r.matchIdx-1:r.matchIdx+1;this.updateMatch(true);return}this.advanceOffsetPage(t)}this.nextPageMatch()},matchesReady:function e(t){var i=this.offset;var n=t.length;var a=this.state.findPrevious;if(n){this.hadMatch=true;i.matchIdx=a?n-1:0;this.updateMatch(true);return true}this.advanceOffsetPage(a);if(i.wrapped){i.matchIdx=null;if(this.pagesToSearch<0){this.updateMatch(false);return true}}return false},updateMatchPosition:function e(t,i,n,a){if(this.selected.matchIdx===i&&this.selected.pageIdx===t){var o={top:FIND_SCROLL_OFFSET_TOP,left:FIND_SCROLL_OFFSET_LEFT};scrollIntoView(n[a],o,true)}},nextPageMatch:function e(){if(this.resumePageIdx!==null){console.error("There can only be one pending page.")}do{var t=this.offset.pageIdx;var i=this.pageMatches[t];if(!i){this.resumePageIdx=t;break}}while(!this.matchesReady(i))},advanceOffsetPage:function e(t){var i=this.offset;var n=this.extractTextPromises.length;i.pageIdx=t?i.pageIdx-1:i.pageIdx+1;i.matchIdx=null;this.pagesToSearch--;if(i.pageIdx>=n||i.pageIdx<0){i.pageIdx=t?n-1:0;i.wrapped=true}},updateMatch:function e(t){var i=FindStates.FIND_NOTFOUND;var n=this.offset.wrapped;this.offset.wrapped=false;if(t){var a=this.selected.pageIdx;this.selected.pageIdx=this.offset.pageIdx;this.selected.matchIdx=this.offset.matchIdx;i=n?FindStates.FIND_WRAPPED:FindStates.FIND_FOUND;if(a!==-1&&a!==this.selected.pageIdx){this.updatePage(a)}}this.updateUIState(i,this.state.findPrevious);if(this.selected.pageIdx!==-1){this.updatePage(this.selected.pageIdx)}},updateUIResultsCount:function e(){if(this.onUpdateResultsCount){this.onUpdateResultsCount(this.matchCount)}},updateUIState:function e(t,i){if(this.onUpdateState){this.onUpdateState(t,i,this.matchCount)}}};return t}();DFLIP.TextLayerBuilder=function e(){function t(e){this.textLayerDiv=e.textLayerDiv;this.renderingDone=false;this.divContentDone=false;this.pageIdx=e.pageIndex;this.pageNumber=this.pageIdx+1;this.matches=[];this.viewport=e.viewport;this.textDivs=[];this.findController=e.findController||null;this.textLayerRenderTask=null;this.enhanceTextSelection=e.enhanceTextSelection;this._bindMouse()}t.prototype={_finishRendering:function e(){this.renderingDone=true;if(!this.enhanceTextSelection){var t=document.createElement("div");t.className="endOfContent";this.textLayerDiv.appendChild(t)}},render:function e(t){if(!this.divContentDone||this.renderingDone){return}if(this.textLayerRenderTask){this.textLayerRenderTask.cancel();this.textLayerRenderTask=null}this.textDivs=[];var i=document.createDocumentFragment();this.textLayerRenderTask=pdfjsLib.renderTextLayer({textContent:this.textContent,container:i,viewport:this.viewport,textDivs:this.textDivs,timeout:t,enhanceTextSelection:this.enhanceTextSelection});this.textLayerRenderTask.promise.then(function(){this.textLayerDiv.appendChild(i);this._finishRendering();this.updateMatches()}.bind(this),function(e){})},setTextContent:function e(t){if(this.textLayerRenderTask){this.textLayerRenderTask.cancel();this.textLayerRenderTask=null}this.textContent=t;this.divContentDone=true},convertMatches:function e(t,i){var n=0;var a=0;var o=this.textContent.items;var r=o.length-1;var s=this.findController===null?0:this.findController.state.query.length;var l=[];if(!t){return l}for(var c=0,u=t.length;c<u;c++){var d=t[c];while(n!==r&&d>=a+o[n].str.length){a+=o[n].str.length;n++}if(n===o.length){console.error("Could not find a matching mapping")}var f={begin:{divIdx:n,offset:d-a}};if(i){d+=i[c]}else{d+=s}while(n!==r&&d>a+o[n].str.length){a+=o[n].str.length;n++}f.end={divIdx:n,offset:d-a};l.push(f)}return l},renderMatches:function e(t){if(t.length===0){return}var i=this.textContent.items;var n=this.textDivs;var a=null;var o=this.pageIdx;var r=this.findController===null?false:o===this.findController.selected.pageIdx;var s=this.findController===null?-1:this.findController.selected.matchIdx;var l=this.findController===null?false:this.findController.state.highlightAll;var c={divIdx:-1,offset:undefined};function u(e,t){var i=e.divIdx;n[i].textContent="";d(i,0,e.offset,t)}function d(e,t,a,o){var r=n[e];var s=i[e].str.substring(t,a);var l=document.createTextNode(s);if(o){var c=document.createElement("span");c.className=o;c.appendChild(l);r.appendChild(c);return}r.appendChild(l)}var f=s,h=f+1;if(l){f=0;h=t.length}else if(!r){return}for(var p=f;p<h;p++){var g=t[p];var v=g.begin;var m=g.end;var b=r&&p===s;var w=b?" selected":"";if(this.findController){this.findController.updateMatchPosition(o,p,n,v.divIdx)}if(!a||v.divIdx!==a.divIdx){if(a!==null){d(a.divIdx,a.offset,c.offset)}u(v)}else{d(a.divIdx,a.offset,v.offset)}if(v.divIdx===m.divIdx){d(v.divIdx,v.offset,m.offset,"highlight"+w)}else{d(v.divIdx,v.offset,c.offset,"highlight begin"+w);for(var x=v.divIdx+1,P=m.divIdx;x<P;x++){n[x].className="highlight middle"+w}u(m,"highlight end"+w)}a=m}if(a){d(a.divIdx,a.offset,c.offset)}},updateMatches:function e(){if(!this.renderingDone){return}var t=this.matches;var i=this.textDivs;var n=this.textContent.items;var a=-1;for(var o=0,r=t.length;o<r;o++){var s=t[o];var l=Math.max(a,s.begin.divIdx);for(var c=l,u=s.end.divIdx;c<=u;c++){var d=i[c];d.textContent=n[c].str;d.className=""}a=s.end.divIdx+1}if(this.findController===null||!this.findController.active){return}var f,h;if(this.findController!==null){f=this.findController.pageMatches[this.pageIdx]||null;h=this.findController.pageMatchesLength?this.findController.pageMatchesLength[this.pageIdx]||null:null}this.matches=this.convertMatches(f,h);this.renderMatches(this.matches)},_bindMouse:function e(){var t=this.textLayerDiv;var i=this;t.addEventListener("mousedown",function(e){if(i.enhanceTextSelection&&i.textLayerRenderTask){i.textLayerRenderTask.expandTextDivs(true);return}var n=t.querySelector(".endOfContent");if(!n){return}var a=e.target!==t;a=a&&window.getComputedStyle(n).getPropertyValue("-moz-user-select")!=="none";if(a){var o=t.getBoundingClientRect();var r=Math.max(0,(e.pageY-o.top)/o.height);n.style.top=(r*100).toFixed(2)+"%"}n.classList.add("active")});t.addEventListener("mouseup",function(e){if(i.enhanceTextSelection&&i.textLayerRenderTask){i.textLayerRenderTask.expandTextDivs(false);return}var n=t.querySelector(".endOfContent");if(!n){return}n.style.top="";n.classList.remove("active")})}};return t}();DFLIP.ConvertPageLinks=function(){var e=arguments[0]/100,t=arguments[1]/100;var i=function(i,n,a,o,r){return{x:i/e,y:n/t,w:a/e,h:o/t,dest:r}};var n=[];var a;for(var o=2;o<arguments.length;o++){a=arguments[o];n[o-2]=i.apply(this,a)}return n};DFLIP.parseLinks=function(e){var t;if(e!=null&&e.length>0){for(var i=0;i<e.length;i++){t=e[i];if(t!=null&&t[0]!=null&&t[0].dest==null){t=DFLIP.ConvertPageLinks.apply(this,t);e[i]=t}}}return e};(function(e){function t(e){return e=="true"||e==true}function i(e){if(e.webgl!=null)e.webgl=t(e.webgl);if(e.enableDownload!=null)e.enableDownload=t(e.enableDownload);if(e.search!=null)e.search=t(e.search);if(e.enableAnalytics!=null)e.enableAnalytics=t(e.enableAnalytics);if(e.scrollWheel!=null)e.scrollWheel=t(e.scrollWheel);if(e.autoEnableOutline!=null)e.autoEnableOutline=t(e.autoEnableOutline);if(e.autoEnableThumbnail!=null)e.autoEnableThumbnail=t(e.autoEnableThumbnail);if(e.transparent!=null)e.transparent=t(e.transparent);if(e.overwritePDFOutline!=null)e.overwritePDFOutline=t(e.overwritePDFOutline);if(e.soundEnable!=null)e.soundEnable=t(e.soundEnable);if(e.forceFit!=null)e.forceFit=t(e.forceFit);if(e.enableAnnotation!=null)e.enableAnnotation=t(e.enableAnnotation);if(e.webglShadow!=null)e.webglShadow=t(e.webglShadow);if(e.autoPlay!=null)e.autoPlay=t(e.autoPlay);if(e.autoPlayStart!=null)e.autoPlayStart=t(e.autoPlayStart);if(e.paddingTop!=null)e.paddingTop=parseInt(e.paddingTop,10);if(e.paddingRight!=null)e.paddingRight=parseInt(e.paddingRight,10);if(e.paddingBottom!=null)e.paddingBottom=parseInt(e.paddingBottom,10);if(e.paddingLeft!=null)e.paddingLeft=parseInt(e.paddingLeft,10);if(e.zoomRatio!=null)e.zoomRatio=parseFloat(e.zoomRatio,10);if(e.stiffness!=null)e.stiffness=parseFloat(e.stiffness,10);if(e.autoPlayDuration!=null)e.autoPlayDuration=parseInt(e.autoPlayDuration,10);if(e.linkTarget!=null)e.linkTarget=parseInt(e.linkTarget,10);if(e.pageMode==0||e.pageMode=="0")e.pageMode=null;if(e.singlePageMode==0||e.singlePageMode=="0")e.singlePageMode=null}function n(e){if(e.parsed==true)return;e.parsed=true;var t=[];i(e);if(typeof dFlipWPGlobal!=="undefined"&&e.wpOptions=="true"){try{for(var n in e.links){var a=e.links[n];var o=[100,100];for(var r=0;r<a.length;r++){var s=a[r];var l=s.substr(1).slice(0,-1).split(",");var c=[];for(var u=0;u<5;u++){c[u]=l[u]}o.push(c)}t[parseInt(n,10)+1]=o}}catch(e){console.error(e.stack)}e.links=DFLIP.parseLinks(t)}else{e.links=DFLIP.parseLinks(e.links)}}DFLIP.getOptions=function(t){t=e(t);var i=t.attr("id");var a="option_"+i,o=t.attr("source")||t.attr("df-source");a=a==null||a==""||window[a]==null?{}:window[a];a.source=o==null||o==""?a.source:o;var r={webgl:t.attr("webgl"),height:t.attr("height"),soundEnable:t.attr("sound"),bookTitle:t.data("title"),transparent:t.attr("transparent"),enableDownload:t.attr("download"),search:t.attr("search"),duration:t.attr("duration"),hard:t.attr("hard"),openPage:t.data("page"),pageMode:t.attr("pagemode"),direction:t.attr("direction"),backgroundColor:t.attr("backgroundcolor"),scrollWheel:t.attr("scrollwheel"),backgroundImage:t.attr("backgroundimage"),paddingTop:t.attr("paddingtop"),paddingRight:t.attr("paddingright"),paddingBottom:t.attr("paddingbottom"),paddingLeft:t.attr("paddingleft"),wpOptions:t.attr("wpoptions")};a=e.extend(true,{},a,r);n(a);return a};DFLIP.parseBooks=function(){e("._df_button, ._df_thumb, ._df_custom, ._df_book").each(function(){var t=e(this);var i=t.attr("parsed")||t.attr("df-parsed");if(i!=="true"){t.attr("df-parsed","true");if(t.hasClass("_df_book")){var n=t.attr("id"),a=t.attr("slug");var o=DFLIP.getOptions(t);o.id=n;if(a!=null)o.slug=a;if(n){window[n.toString()]=e(t).flipBook(o.source,o)}else{e(t).flipBook(o.source,o)}}else{if(t.hasClass("_df_thumb")){var r=e("<div class='_df_book-cover'>");var s=t.html().trim();t.html("");var l=e("<span class='_df_book-title'>").html(s).appendTo(r);var c=t.attr("thumb")||t.attr("df-thumb"),u=t.attr("thumbtype")||DFLIP.defaults.thumbElement||"div",d=t.attr("tags")||t.attr("df-tags");if(d){d=d.split(",");if(d.length>0){for(var f=0;f<d.length;f++){t.append("<span class='_df_book-tag'>"+d[f]+"</span>")}}}if(c!=null&&c.toString().trim()!=""){if(u=="img"){r.append('<img src="'+c+'" alt="'+s+'"/>');t.attr("thumb-type","img")}else{r.css({backgroundImage:"url('"+c+"')"})}}else{r.addClass("_df_thumb-not-found")}t.append(r)}}}})};e(document).ready(function(){if(typeof dFlipLocation=="undefined"&&DFLIP.autoDetectLocation!=false){e("script").each(function(){var t=e(this)[0].src;if((t.indexOf("/dflip.js")>-1||t.indexOf("/dflip.min.js")>-1)&&(t.indexOf("https://")>-1||t.indexOf("http://")>-1)&&t.indexOf("js/dflip.")>-1){var i=t.split("/");window.dFlipLocation=i.slice(0,-2).join("/")}})}if(typeof dFlipLocation!=="undefined"){if(dFlipLocation.length>2&&dFlipLocation.slice(-1)!=="/"){window.dFlipLocation+="/"}DFLIP.defaults.mockupjsSrc=dFlipLocation+"js/libs/mockup.min.js";DFLIP.defaults.pdfjsSrc=dFlipLocation+"js/libs/pdf.min.js";DFLIP.defaults.pdfjsCompatibilitySrc=dFlipLocation+"js/libs/compatibility.js";DFLIP.defaults.threejsSrc=dFlipLocation+"js/libs/three.min.js";DFLIP.defaults.pdfjsWorkerSrc=dFlipLocation+"js/libs/pdf.worker.min.js";DFLIP.defaults.soundFile=dFlipLocation+"sound/turn2.mp3";DFLIP.defaults.imagesLocation=dFlipLocation+"images";DFLIP.defaults.imageResourcesPath=dFlipLocation+"images/pdfjs/";DFLIP.defaults.cMapUrl=dFlipLocation+"js/libs/cmaps/";if(typeof dFlipWPGlobal!=="undefined"){i(dFlipWPGlobal);e.extend(true,DFLIP.defaults,dFlipWPGlobal)}}DFLIP.preParseHash=window.location.hash;e("body").on("click","._df_button, ._df_thumb, ._df_custom",function(t){t.preventDefault();var i=e(this);if(!window.dfLightBox){window.dfLightBox=new DFLightBox(function(){Array.prototype.forEach.call(DFLIP.utils.getSharePrefixes(),function(e){if(window.location.hash.indexOf("#"+e)==0)window.location.hash="#_"});window.dfActiveLightBoxBook.analytics({eventAction:"Book Closed",options:window.dfActiveLightBoxBook.options});window.dfActiveLightBoxBook.dispose();window.dfActiveLightBoxBook=null})}window.dfLightBox.duration=500;if(window.dfActiveLightBoxBook&&window.dfActiveLightBoxBook.dispose){window.dfActiveLightBoxBook.dispose()}else{window.dfLightBox.show(function(){var t=DFLIP.getOptions(i);t.transparent=false;t.height="100%";t.id=i.attr("id");var n=i.attr("slug");if(n!=null)t.slug=n;t.isLightBox=true;window.dfActiveLightBoxBook=e(window.dfLightBox.container).flipBook(t.source,t)})}});if(DFLIP.utils.isSafari||DFLIP.utils.isIOS){e("body").addClass("df-webkit")}var t=false;Array.prototype.forEach.call(DFLIP.utils.getSharePrefixes(),function(i){if(DFLIP.preParseHash&&DFLIP.preParseHash.indexOf(i)>=0&&t===false){var n=DFLIP.preParseHash.split(i)[1].split("/")[0];var a=DFLIP.preParseHash.split(i)[1].split("/")[1];if(a!=null){a=a.split("/")[0]}var o;o=e("[slug="+n+"]");if(o.length==0)o=e("#"+n);if(o.length==0)o=e("[_slug="+n+"]");if(o.length>0){if(a!=null){o.data("page",a)}if(o.is("._df_button, ._df_thumb, ._df_custom")){o.trigger("click");t=true}}}});DFLIP.parseBooks();if(e("body").hasClass("attachment-pdf")){var n=e("[attachment_pdf_flipbook_lightbox]");if(n.length>0){e(n[0]).trigger("click")}}e("body").on("click",".df-ui-sidemenu-close",function(){var t=e(this);t.closest(".df-container").find(".df-ui-outline.df-active , .df-ui-thumbnail.df-active").trigger("click")})})})(jQuery);
}catch(e){console.log('Error in: catalog/view/javascript/jquery/dflip/js/dflip.min.js: '+e.message);};

/* Jet Cache: catalog/view/theme/indiano/libs/formstyler/jquery.formstyler.min.js */
try{
/* jQuery Form Styler v2.0.0 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e($||require("jquery")):e(jQuery)}(function(e){"use strict";function t(t,s){this.element=t,this.options=e.extend({},l,s);var i=this.options.locale;void 0!==this.options.locales[i]&&e.extend(this.options,this.options.locales[i]),this.init()}function s(t){if(!e(t.target).parents().hasClass("jq-selectbox")&&"OPTION"!=t.target.nodeName&&e("div.jq-selectbox.opened").length){var s=e("div.jq-selectbox.opened"),l=e("div.jq-selectbox__search input",s),o=e("div.jq-selectbox__dropdown",s);s.find("select").data("_"+i).options.onSelectClosed.call(s),l.length&&l.val("").keyup(),o.hide().find("li.sel").addClass("selected"),s.removeClass("focused opened dropup dropdown")}}var i="styler",l={idSuffix:"-styler",filePlaceholder:"Файл не выбран",fileBrowse:"Обзор...",fileNumber:"Выбрано файлов: %s",selectPlaceholder:"Выберите...",selectSearch:!1,selectSearchLimit:10,selectSearchNotFound:"Совпадений не найдено",selectSearchPlaceholder:"Поиск...",selectVisibleOptions:0,selectSmartPositioning:!0,locale:"ru",locales:{en:{filePlaceholder:"No file selected",fileBrowse:"Browse...",fileNumber:"Selected files: %s",selectPlaceholder:"Select...",selectSearchNotFound:"No matches found",selectSearchPlaceholder:"Search..."}},onSelectOpened:function(){},onSelectClosed:function(){},onFormStyled:function(){}};t.prototype={init:function(){function t(){void 0!==i.attr("id")&&""!==i.attr("id")&&(this.id=i.attr("id")+l.idSuffix),this.title=i.attr("title"),this.classes=i.attr("class"),this.data=i.data()}var i=e(this.element),l=this.options,o=!(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)||navigator.userAgent.match(/(Windows\sPhone)/i)),a=!(!navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/(Windows\sPhone)/i));if(i.is(":checkbox")){var d=function(){var s=new t,l=e('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.after(l).prependTo(l),i.is(":checked")&&l.addClass("checked"),i.is(":disabled")&&l.addClass("disabled"),l.click(function(e){e.preventDefault(),i.triggerHandler("click"),l.is(".disabled")||(i.is(":checked")?(i.prop("checked",!1),l.removeClass("checked")):(i.prop("checked",!0),l.addClass("checked")),i.focus().change())}),i.closest("label").add('label[for="'+i.attr("id")+'"]').on("click.styler",function(t){e(t.target).is("a")||e(t.target).closest(l).length||(l.triggerHandler("click"),t.preventDefault())}),i.on("change.styler",function(){i.is(":checked")?l.addClass("checked"):l.removeClass("checked")}).on("keydown.styler",function(e){32==e.which&&l.click()}).on("focus.styler",function(){l.is(".disabled")||l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")})};d(),i.on("refresh",function(){i.closest("label").add('label[for="'+i.attr("id")+'"]').off(".styler"),i.off(".styler").parent().before(i).remove(),d()})}else if(i.is(":radio")){var r=function(){var s=new t,l=e('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.after(l).prependTo(l),i.is(":checked")&&l.addClass("checked"),i.is(":disabled")&&l.addClass("disabled"),e.fn.commonParents=function(){var t=this;return t.first().parents().filter(function(){return e(this).find(t).length===t.length})},e.fn.commonParent=function(){return e(this).commonParents().first()},l.click(function(t){if(t.preventDefault(),i.triggerHandler("click"),!l.is(".disabled")){var s=e('input[name="'+i.attr("name")+'"]');s.commonParent().find(s).prop("checked",!1).parent().removeClass("checked"),i.prop("checked",!0).parent().addClass("checked"),i.focus().change()}}),i.closest("label").add('label[for="'+i.attr("id")+'"]').on("click.styler",function(t){e(t.target).is("a")||e(t.target).closest(l).length||(l.triggerHandler("click"),t.preventDefault())}),i.on("change.styler",function(){i.parent().addClass("checked")}).on("focus.styler",function(){l.is(".disabled")||l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")})};r(),i.on("refresh",function(){i.closest("label").add('label[for="'+i.attr("id")+'"]').off(".styler"),i.off(".styler").parent().before(i).remove(),r()})}else if(i.is(":file")){var c=function(){var s=new t,o=i.data("placeholder");void 0===o&&(o=l.filePlaceholder);var a=i.data("browse");void 0!==a&&""!==a||(a=l.fileBrowse);var d=e('<div class="jq-file"><div class="jq-file__name">'+o+'</div><div class="jq-file__browse">'+a+"</div></div>").attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.after(d).appendTo(d),i.is(":disabled")&&d.addClass("disabled");var r=i.val(),c=e("div.jq-file__name",d);r&&c.text(r.replace(/.+[\\\/]/,"")),i.on("change.styler",function(){var e=i.val();if(i.is("[multiple]")){e="";var t=i[0].files.length;if(t>0){var s=i.data("number");void 0===s&&(s=l.fileNumber),s=s.replace("%s",t),e=s}}c.text(e.replace(/.+[\\\/]/,"")),""===e?(c.text(o),d.removeClass("changed")):d.addClass("changed")}).on("focus.styler",function(){d.addClass("focused")}).on("blur.styler",function(){d.removeClass("focused")}).on("click.styler",function(){d.removeClass("focused")})};c(),i.on("refresh",function(){i.off(".styler").parent().before(i).remove(),c()})}else if(i.is('input[type="number"]')){var n=function(){var s=new t,l=e('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.after(l).prependTo(l).wrap('<div class="jq-number__field"></div>'),i.is(":disabled")&&l.addClass("disabled");var o,a,d,r=null,c=null;void 0!==i.attr("min")&&(o=i.attr("min")),void 0!==i.attr("max")&&(a=i.attr("max")),d=void 0!==i.attr("step")&&e.isNumeric(i.attr("step"))?Number(i.attr("step")):Number(1);var n=function(t){var s,l=i.val();e.isNumeric(l)||(l=0,i.val("0")),t.is(".minus")?s=Number(l)-d:t.is(".plus")&&(s=Number(l)+d);var r=(d.toString().split(".")[1]||[]).length;if(r>0){for(var c="1";c.length<=r;)c+="0";s=Math.round(s*c)/c}e.isNumeric(o)&&e.isNumeric(a)?s>=o&&s<=a&&i.val(s):e.isNumeric(o)&&!e.isNumeric(a)?s>=o&&i.val(s):!e.isNumeric(o)&&e.isNumeric(a)?s<=a&&i.val(s):i.val(s)};l.is(".disabled")||(l.on("mousedown","div.jq-number__spin",function(){var t=e(this);n(t),r=setTimeout(function(){c=setInterval(function(){n(t)},40)},350)}).on("mouseup mouseout","div.jq-number__spin",function(){clearTimeout(r),clearInterval(c)}).on("mouseup","div.jq-number__spin",function(){i.change()}),i.on("focus.styler",function(){l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")}))};n(),i.on("refresh",function(){i.off(".styler").closest(".jq-number").before(i).remove(),n()})}else if(i.is("select")){var f=function(){function d(e){var t=e.prop("scrollHeight")-e.outerHeight(),s=null,i=null;e.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",function(l){s=l.originalEvent.detail<0||l.originalEvent.wheelDelta>0?1:-1,((i=e.scrollTop())>=t&&s<0||i<=0&&s>0)&&(l.stopPropagation(),l.preventDefault())})}function r(){for(var e=0;e<c.length;e++){var t=c.eq(e),s="",i="",o="",a="",d="",r="",f="",h="",u="";t.prop("selected")&&(i="selected sel"),t.is(":disabled")&&(i="disabled"),t.is(":selected:disabled")&&(i="selected sel disabled"),void 0!==t.attr("id")&&""!==t.attr("id")&&(a=' id="'+t.attr("id")+l.idSuffix+'"'),void 0!==t.attr("title")&&""!==c.attr("title")&&(d=' title="'+t.attr("title")+'"'),void 0!==t.attr("class")&&(f=" "+t.attr("class"),u=' data-jqfs-class="'+t.attr("class")+'"');var p=t.data();for(var v in p)""!==p[v]&&(r+=" data-"+v+'="'+p[v]+'"');i+f!==""&&(o=' class="'+i+f+'"'),s="<li"+u+r+o+d+a+">"+t.html()+"</li>",t.parent().is("optgroup")&&(void 0!==t.parent().attr("class")&&(h=" "+t.parent().attr("class")),s="<li"+u+r+' class="'+i+f+" option"+h+'"'+d+a+">"+t.html()+"</li>",t.is(":first-child")&&(s='<li class="optgroup'+h+'">'+t.parent().attr("label")+"</li>"+s)),n+=s}}var c=e("option",i),n="";if(i.is("[multiple]")){if(a||o)return;!function(){var s=new t,l=e('<div class="jq-select-multiple jqselect"></div>').attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.after(l),r(),l.append("<ul>"+n+"</ul>");var o=e("ul",l),a=e("li",l),f=i.attr("size"),h=o.outerHeight(),u=a.outerHeight();void 0!==f&&f>0?o.css({height:u*f}):o.css({height:4*u}),h>l.height()&&(o.css("overflowY","scroll"),d(o),a.filter(".selected").length&&o.scrollTop(o.scrollTop()+a.filter(".selected").position().top)),i.prependTo(l),i.is(":disabled")?(l.addClass("disabled"),c.each(function(){e(this).is(":selected")&&a.eq(e(this).index()).addClass("selected")})):(a.filter(":not(.disabled):not(.optgroup)").click(function(t){i.focus();var s=e(this);if(t.ctrlKey||t.metaKey||s.addClass("selected"),t.shiftKey||s.addClass("first"),t.ctrlKey||t.metaKey||t.shiftKey||s.siblings().removeClass("selected first"),(t.ctrlKey||t.metaKey)&&(s.is(".selected")?s.removeClass("selected first"):s.addClass("selected first"),s.siblings().removeClass("first")),t.shiftKey){var l=!1,o=!1;s.siblings().removeClass("selected").siblings(".first").addClass("selected"),s.prevAll().each(function(){e(this).is(".first")&&(l=!0)}),s.nextAll().each(function(){e(this).is(".first")&&(o=!0)}),l&&s.prevAll().each(function(){if(e(this).is(".selected"))return!1;e(this).not(".disabled, .optgroup").addClass("selected")}),o&&s.nextAll().each(function(){if(e(this).is(".selected"))return!1;e(this).not(".disabled, .optgroup").addClass("selected")}),1==a.filter(".selected").length&&s.addClass("first")}c.prop("selected",!1),a.filter(".selected").each(function(){var t=e(this),s=t.index();t.is(".option")&&(s-=t.prevAll(".optgroup").length),c.eq(s).prop("selected",!0)}),i.change()}),c.each(function(t){e(this).data("optionIndex",t)}),i.on("change.styler",function(){a.removeClass("selected");var t=[];c.filter(":selected").each(function(){t.push(e(this).data("optionIndex"))}),a.not(".optgroup").filter(function(s){return e.inArray(s,t)>-1}).addClass("selected")}).on("focus.styler",function(){l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")}),h>l.height()&&i.on("keydown.styler",function(e){38!=e.which&&37!=e.which&&33!=e.which||o.scrollTop(o.scrollTop()+a.filter(".selected").position().top-u),40!=e.which&&39!=e.which&&34!=e.which||o.scrollTop(o.scrollTop()+a.filter(".selected:last").position().top-o.innerHeight()+2*u)}))}()}else!function(){var a=new t,f="",h=i.data("placeholder"),u=i.data("search"),p=i.data("search-limit"),v=i.data("search-not-found"),m=i.data("search-placeholder"),g=i.data("smart-positioning");void 0===h&&(h=l.selectPlaceholder),void 0!==u&&""!==u||(u=l.selectSearch),void 0!==p&&""!==p||(p=l.selectSearchLimit),void 0!==v&&""!==v||(v=l.selectSearchNotFound),void 0===m&&(m=l.selectSearchPlaceholder),void 0!==g&&""!==g||(g=l.selectSmartPositioning);var b=e('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').attr({id:a.id,title:a.title}).addClass(a.classes).data(a.data);i.after(b).prependTo(b);var C=b.css("z-index");C=C>0?C:1;var x=e("div.jq-selectbox__select",b),y=e("div.jq-selectbox__select-text",b),w=c.filter(":selected");r(),u&&(f='<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="'+m+'"></div><div class="jq-selectbox__not-found">'+v+"</div>");var q=e('<div class="jq-selectbox__dropdown">'+f+"<ul>"+n+"</ul></div>");b.append(q);var _=e("ul",q),j=e("li",q),k=e("input",q),S=e("div.jq-selectbox__not-found",q).hide();j.length<p&&k.parent().hide(),""===c.first().text()&&c.first().is(":selected")&&!1!==h?y.text(h).addClass("placeholder"):y.text(w.text());var T=0,N=0;if(j.css({display:"inline-block"}),j.each(function(){var t=e(this);t.innerWidth()>T&&(T=t.innerWidth(),N=t.width())}),j.css({display:""}),y.is(".placeholder")&&y.width()>T)y.width(y.width());else{var P=b.clone().appendTo("body").width("auto"),H=P.outerWidth();P.remove(),H==b.outerWidth()&&y.width(N)}T>b.width()&&q.width(T),""===c.first().text()&&""!==i.data("placeholder")&&j.first().hide();var A=b.outerHeight(!0),D=k.parent().outerHeight(!0)||0,I=_.css("max-height"),K=j.filter(".selected");if(K.length<1&&j.first().addClass("selected sel"),void 0===j.data("li-height")){var O=j.outerHeight();!1!==h&&(O=j.eq(1).outerHeight()),j.data("li-height",O)}var M=q.css("top");if("auto"==q.css("left")&&q.css({left:0}),"auto"==q.css("top")&&(q.css({top:A}),M=A),q.hide(),K.length&&(c.first().text()!=w.text()&&b.addClass("changed"),b.data("jqfs-class",K.data("jqfs-class")),b.addClass(K.data("jqfs-class"))),i.is(":disabled"))return b.addClass("disabled"),!1;x.click(function(){if(e("div.jq-selectbox").filter(".opened").length&&l.onSelectClosed.call(e("div.jq-selectbox").filter(".opened")),i.focus(),!o){var t=e(window),s=j.data("li-height"),a=b.offset().top,r=t.height()-A-(a-t.scrollTop()),n=i.data("visible-options");void 0!==n&&""!==n||(n=l.selectVisibleOptions);var f=5*s,h=s*n;n>0&&n<6&&(f=h),0===n&&(h="auto");var u=function(){q.height("auto").css({bottom:"auto",top:M});var e=function(){_.css("max-height",Math.floor((r-20-D)/s)*s)};e(),_.css("max-height",h),"none"!=I&&_.css("max-height",I),r<q.outerHeight()+20&&e()};!0===g||1===g?r>f+D+20?(u(),b.removeClass("dropup").addClass("dropdown")):(function(){q.height("auto").css({top:"auto",bottom:M});var e=function(){_.css("max-height",Math.floor((a-t.scrollTop()-20-D)/s)*s)};e(),_.css("max-height",h),"none"!=I&&_.css("max-height",I),a-t.scrollTop()-20<q.outerHeight()+20&&e()}(),b.removeClass("dropdown").addClass("dropup")):!1===g||0===g?r>f+D+20&&(u(),b.removeClass("dropup").addClass("dropdown")):(q.height("auto").css({bottom:"auto",top:M}),_.css("max-height",h),"none"!=I&&_.css("max-height",I)),b.offset().left+q.outerWidth()>t.width()&&q.css({left:"auto",right:0}),e("div.jqselect").css({zIndex:C-1}).removeClass("opened"),b.css({zIndex:C}),q.is(":hidden")?(e("div.jq-selectbox__dropdown:visible").hide(),q.show(),b.addClass("opened focused"),l.onSelectOpened.call(b)):(q.hide(),b.removeClass("opened dropup dropdown"),e("div.jq-selectbox").filter(".opened").length&&l.onSelectClosed.call(b)),k.length&&(k.val("").keyup(),S.hide(),k.keyup(function(){var t=e(this).val();j.each(function(){e(this).html().match(new RegExp(".*?"+t+".*?","i"))?e(this).show():e(this).hide()}),""===c.first().text()&&""!==i.data("placeholder")&&j.first().hide(),j.filter(":visible").length<1?S.show():S.hide()})),j.filter(".selected").length&&(""===i.val()?_.scrollTop(0):(_.innerHeight()/s%2!=0&&(s/=2),_.scrollTop(_.scrollTop()+j.filter(".selected").position().top-_.innerHeight()/2+s))),d(_)}}),j.hover(function(){e(this).siblings().removeClass("selected")});var W=j.filter(".selected").text();j.filter(":not(.disabled):not(.optgroup)").click(function(){i.focus();var t=e(this),s=t.text();if(!t.is(".selected")){var o=t.index();o-=t.prevAll(".optgroup").length,t.addClass("selected sel").siblings().removeClass("selected sel"),c.prop("selected",!1).eq(o).prop("selected",!0),W=s,y.text(s),b.data("jqfs-class")&&b.removeClass(b.data("jqfs-class")),b.data("jqfs-class",t.data("jqfs-class")),b.addClass(t.data("jqfs-class")),i.change()}q.hide(),b.removeClass("opened dropup dropdown"),l.onSelectClosed.call(b)}),q.mouseout(function(){e("li.sel",q).addClass("selected")}),i.on("change.styler",function(){y.text(c.filter(":selected").text()).removeClass("placeholder"),j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"),c.first().text()!=j.filter(".selected").text()?b.addClass("changed"):b.removeClass("changed")}).on("focus.styler",function(){b.addClass("focused"),e("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()}).on("blur.styler",function(){b.removeClass("focused")}).on("keydown.styler keyup.styler",function(e){var t=j.data("li-height");""===i.val()?y.text(h).addClass("placeholder"):y.text(c.filter(":selected").text()),j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"),38!=e.which&&37!=e.which&&33!=e.which&&36!=e.which||(""===i.val()?_.scrollTop(0):_.scrollTop(_.scrollTop()+j.filter(".selected").position().top)),40!=e.which&&39!=e.which&&34!=e.which&&35!=e.which||_.scrollTop(_.scrollTop()+j.filter(".selected").position().top-_.innerHeight()+t),13==e.which&&(e.preventDefault(),q.hide(),b.removeClass("opened dropup dropdown"),l.onSelectClosed.call(b))}).on("keydown.styler",function(e){32==e.which&&(e.preventDefault(),x.click())}),s.registered||(e(document).on("click",s),s.registered=!0)}()};f(),i.on("refresh",function(){i.off(".styler").parent().before(i).remove(),f()})}else i.is(":reset")&&i.on("click",function(){setTimeout(function(){i.closest("form").find("input, select").trigger("refresh")},1)})},destroy:function(){var t=e(this.element);t.is(":checkbox")||t.is(":radio")?(t.removeData("_"+i).off(".styler refresh").removeAttr("style").parent().before(t).remove(),t.closest("label").add('label[for="'+t.attr("id")+'"]').off(".styler")):t.is('input[type="number"]')?t.removeData("_"+i).off(".styler refresh").closest(".jq-number").before(t).remove():(t.is(":file")||t.is("select"))&&t.removeData("_"+i).off(".styler refresh").removeAttr("style").parent().before(t).remove()}},e.fn[i]=function(s){var l=arguments;if(void 0===s||"object"==typeof s)return this.each(function(){e.data(this,"_"+i)||e.data(this,"_"+i,new t(this,s))}).promise().done(function(){var t=e(this[0]).data("_"+i);t&&t.options.onFormStyled.call()}),this;if("string"==typeof s&&"_"!==s[0]&&"init"!==s){var o;return this.each(function(){var a=e.data(this,"_"+i);a instanceof t&&"function"==typeof a[s]&&(o=a[s].apply(a,Array.prototype.slice.call(l,1)))}),void 0!==o?o:this}},s.registered=!1});
}catch(e){console.log('Error in: catalog/view/theme/indiano/libs/formstyler/jquery.formstyler.min.js: '+e.message);};

/* Jet Cache: catalog/view/theme/indiano/libs/bootstrap/bootstrap.min.js */
try{
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
}catch(e){console.log('Error in: catalog/view/theme/indiano/libs/bootstrap/bootstrap.min.js: '+e.message);};

/* Jet Cache: catalog/view/theme/indiano/libs/matchHeight/jquery.matchHeight.min.js */
try{
/*
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,n=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),i=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-n(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(i-a))<=o?r[r.length-1]=s.add(e):r.push(e),i=a}),r},i=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=i(e);if(o.remove){var n=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.2",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=n,r._parseOptions=i,r._apply=function(e,o){var s=i(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),u=h.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),i=0;if(s.target)i=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var a={
display:n};a[s.property]="",e.css(a),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),o+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(s.property,i-o+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),n=o.attr("data-mh")||o.attr("data-match-height");n in e?e[n]=e[n].add(o):e[n]=o}),t.each(e,function(){this.matchHeight({property:'min-height'})})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(n,a){if(a&&"resize"===a.type){var i=t(window).width();if(i===e)return;e=i;
}n?o===-1&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi);var h=t.fn.on?"on":"bind";t(window)[h]("load",function(t){r._update(!1,t)}),t(window)[h]("resize orientationchange",function(t){r._update(!0,t)})});

}catch(e){console.log('Error in: catalog/view/theme/indiano/libs/matchHeight/jquery.matchHeight.min.js: '+e.message);};

/* Jet Cache: catalog/view/theme/indiano/libs/fancybox/jquery.fancybox.min.js */
try{
// ==================================================
// fancyBox v3.4.1
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=p(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),a=n.fancybox.getInstance(),a&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload"><source src="{{src}}" type="{{format}}" />Your browser doesn\'t support HTML5 video</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zurück",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Maßstab"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){var t,n=e.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(n.style[t]!==o)return i[t];return"transitionend"}(),f=function(t){return t&&t.length&&t[0].offsetHeight},p=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},h=function(t,e,o){var i=this;i.opts=p({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=p(i.opts,e)),n.fancybox.isMobile&&(i.opts=p(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(h.prototype,{init:function(){var i,a,s,r=this,c=r.group[r.currIndex],l=c.opts,d=n.fancybox.scrollbarWidth;l.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&l.hideScrollbar!==!1&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(d===o&&(i=n('<div style="width:100px;height:100px;overflow:scroll;" />').appendTo("body"),d=n.fancybox.scrollbarWidth=i[0].offsetWidth-i[0].clientWidth,i.remove()),n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: '+d+"px; }</style>"),n("body").addClass("compensate-for-scrollbar")),s="",n.each(l.buttons,function(t,e){s+=l.btnTpl[e]||""}),a=n(r.translate(r,l.baseTpl.replace("{{buttons}}",s).replace("{{arrows}}",l.btnTpl.arrowLeft+l.btnTpl.arrowRight))).attr("id","fancybox-container-"+r.id).addClass(l.baseClass).data("FancyBox",r).appendTo(l.parentEl),r.$refs={container:a},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){r.$refs[t]=a.find(".fancybox-"+t)}),r.trigger("onInit"),r.activate(),r.jumpTo(r.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var i=n[e];return i===o?t:i})},addContent:function(t){var e,i=this,a=n.makeArray(t);n.each(a,function(t,e){var a,s,r,c,l,d={},u={};n.isPlainObject(e)?(d=e,u=e.opts||e):"object"===n.type(e)&&n(e).length?(a=n(e),u=a.data()||{},u=n.extend(!0,{},u,u.options),u.$orig=a,d.src=i.opts.src||u.src||a.attr("href"),d.type||d.src||(d.type="inline",d.src=e)):d={type:"html",src:e+""},d.opts=n.extend(!0,{},i.opts,u),n.isArray(u.buttons)&&(d.opts.buttons=u.buttons),n.fancybox.isMobile&&d.opts.mobile&&(d.opts=p(d.opts,d.opts.mobile)),s=d.type||d.opts.type,c=d.src||"",!s&&c&&((r=c.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(s="video",d.opts.video.format||(d.opts.video.format="video/"+("ogv"===r[1]?"ogg":r[1]))):c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":c.match(/\.(pdf)((\?|#).*)?$/i)?s="iframe":"#"===c.charAt(0)&&(s="inline")),s?d.type=s:i.trigger("objectNeedsType",d),d.contentType||(d.contentType=n.inArray(d.type,["html","inline","ajax"])>-1?"html":d.type),d.index=i.group.length,"auto"==d.opts.smallBtn&&(d.opts.smallBtn=n.inArray(d.type,["html","inline","ajax"])>-1),"auto"===d.opts.toolbar&&(d.opts.toolbar=!d.opts.smallBtn),d.opts.$trigger&&d.index===i.opts.index&&(d.opts.$thumb=d.opts.$trigger.find("img:first"),d.opts.$thumb.length&&(d.opts.$orig=d.opts.$trigger)),d.opts.$thumb&&d.opts.$thumb.length||!d.opts.$orig||(d.opts.$thumb=d.opts.$orig.find("img:first")),"function"===n.type(d.opts.caption)&&(d.opts.caption=d.opts.caption.apply(e,[i,d])),"function"===n.type(i.opts.caption)&&(d.opts.caption=i.opts.caption.apply(e,[i,d])),d.opts.caption instanceof n||(d.opts.caption=d.opts.caption===o?"":d.opts.caption+""),"ajax"===d.type&&(l=c.split(/\s+/,2),l.length>1&&(d.src=l.shift(),d.opts.filter=l.shift())),d.opts.modal&&(d.opts=n.extend(!0,d.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),i.group.push(d)}),Object.keys(i.slides).length&&(i.updateControls(),e=i.Thumbs,e&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?d(function(){e.update()}):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update()},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input")||n(t.target).is("textarea")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){e.idleSecondsCounter++,e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var i,a,s,r,c,l,d,u=this,f=u.group.length;if(!(u.isDragging||u.isClosing||u.isAnimating&&u.firstRun)){if(t=parseInt(t,10),s=u.current?u.current.opts.loop:u.opts.loop,!s&&(t<0||t>=f))return!1;if(i=u.firstRun=!Object.keys(u.slides).length,!(f<2&&!i&&u.isDragging)){if(c=u.current,u.prevIndex=u.currIndex,u.prevPos=u.currPos,r=u.createSlide(t),f>1&&((s||r.index<f-1)&&u.createSlide(t+1),(s||r.index>0)&&u.createSlide(t-1)),u.current=r,u.currIndex=r.index,u.currPos=r.pos,u.trigger("beforeShow",i),u.updateControls(),a=u.isMoved(r),r.forcedDuration=o,n.isNumeric(e)?r.forcedDuration=e:e=r.opts[i?"animationDuration":"transitionDuration"],e=parseInt(e,10),i)return r.opts.animationEffect&&e&&u.$refs.container.css("transition-duration",e+"ms"),u.$refs.container.addClass("fancybox-is-open"),r.$slide.addClass("fancybox-slide--previous"),u.loadSlide(r),r.$slide.removeClass("fancybox-slide--previous").addClass("fancybox-slide--current"),u.preload("image"),void u.$refs.container.trigger("focus");n.each(u.slides,function(t,e){n.fancybox.stop(e.$slide,!0),e.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")})}),r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),a?(l=Math.round(r.$slide.width()),n.each(u.slides,function(t,o){var i=o.pos-r.pos;n.fancybox.animate(o.$slide,{top:0,left:i*l+i*o.opts.gutter},e,function(){o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===u.currPos&&u.complete()})})):u.$refs.stage.children().removeAttr("style"),r.isLoaded?u.revealContent(r):u.loadSlide(r),u.preload("image"),c.pos!==r.pos&&(d="fancybox-slide--"+(c.pos>r.pos?"next":"previous"),c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),c.isComplete=!1,e&&(a||r.opts.transitionEffect)&&(a?c.$slide.addClass(d):(d="fancybox-animated "+d+" fancybox-fx-"+r.opts.transitionEffect,n.fancybox.animate(c.$slide,d,e,null,!1))))}}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,i){var a,s,r,c,l,d=this,u=d.current,f=u.$content,p=n.fancybox.getTranslate(u.$slide).width,h=n.fancybox.getTranslate(u.$slide).height,g=u.width,b=u.height;!d.isAnimating&&f&&"image"==u.type&&u.isLoaded&&!u.hasError&&(n.fancybox.stop(f),d.isAnimating=!0,t=t===o?.5*p:t,e=e===o?.5*h:e,a=n.fancybox.getTranslate(f),a.top-=n.fancybox.getTranslate(u.$slide).top,a.left-=n.fancybox.getTranslate(u.$slide).left,c=g/a.width,l=b/a.height,s=.5*p-.5*g,r=.5*h-.5*b,g>p&&(s=a.left*c-(t*c-t),s>0&&(s=0),s<p-g&&(s=p-g)),b>h&&(r=a.top*l-(e*l-e),r>0&&(r=0),r<h-b&&(r=h-b)),d.updateCursor(g,b),n.fancybox.animate(f,{top:r,left:s,scaleX:c,scaleY:l},i||330,function(){d.isAnimating=!1}),d.SlideShow&&d.SlideShow.isActive&&d.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;!o.isAnimating&&a&&"image"==i.type&&i.isLoaded&&!i.hasError&&(n.fancybox.stop(a),o.isAnimating=!0,e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||330,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l=Math.floor(i*l),d=Math.floor(i*d),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(){var t=this;n.each(t.slides,function(e,n){t.updateSlide(n)})},updateSlide:function(t){var e=this,o=t&&t.$content,i=t.width||t.opts.width,a=t.height||t.opts.height,s=t.$slide;o&&(i||a||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(o),n.fancybox.setTranslate(o,e.getFitPos(t)),t.pos===e.currPos&&(e.isAnimating=!1,e.updateCursor())),s.length&&(s.trigger("refresh"),e.$refs.toolbar.toggleClass("compensate-for-scrollbar",s.get(0).scrollHeight>s.get(0).clientHeight)),e.trigger("onUpdate",t)},centerSlide:function(t,e){var i,a,s=this;s.current&&(i=Math.round(t.$slide.width()),a=t.pos-s.current.pos,n.fancybox.animate(t.$slide,{top:0,left:a*i+a*t.opts.gutter,opacity:1},e===o?0:e,null,!1))},isMoved:function(t){var e=t||this.current,o=n.fancybox.getTranslate(e.$slide);return(0!==o.left||0!==o.top)&&!e.$slide.hasClass("fancybox-animated")},updateCursor:function(t,e){var o,i=this,a=i.current,s=i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");a&&!i.isClosing&&(o=i.isZoomable(),s.toggleClass("fancybox-is-zoomable",o),n("[data-fancybox-zoom]").prop("disabled",!o),i.canPan(t,e)?s.addClass("fancybox-can-pan"):o&&("zoom"===a.opts.clickContent||n.isFunction(a.opts.clickContent)&&"zoom"==a.opts.clickContent(a))?s.addClass("fancybox-can-zoomIn"):a.opts.touch&&(a.opts.touch.vertical||i.group.length>1)&&"video"!==a.contentType&&s.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if(t=e.getFitPos(n),n.width>t.width||n.height>t.height)return!0}return!1},isScaledDown:function(t,e){var i=this,a=!1,s=i.current,r=s.$content;return t!==o&&e!==o?a=t<s.width&&e<s.height:r&&(a=n.fancybox.getTranslate(r),a=a.width<s.width&&a.height<s.height),a},canPan:function(t,e){var i,a,s=this,r=!1,c=s.current;return"image"===c.type&&(i=c.$content)&&!c.hasError&&(r=s.getFitPos(c),a=t!==o&&e!==o?{width:t,height:e}:n.fancybox.getTranslate(i),r=Math.abs(a.width-r.width)>1.5||Math.abs(a.height-r.height)>1.5),r},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){switch(t.isLoading=!0,a.trigger("beforeLoad",t),e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace("{{src}}",t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(e){var o,i,a,s,r,c=this,l=e.opts.srcset||e.opts.image.srcset;if(e.timouts=setTimeout(function(){var t=e.$image;!e.isLoading||t&&t.length&&t[0].complete||e.hasError||c.showLoading(e)},350),l){s=t.devicePixelRatio||1,r=t.innerWidth*s,a=l.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),a.sort(function(t,e){return t.value-e.value});for(var d=0;d<a.length;d++){var u=a[d];if("w"===u.postfix&&u.value>=r||"x"===u.postfix&&u.value>=s){i=u;break}}!i&&a.length&&(i=a[a.length-1]),i&&(e.src=i.url,e.width&&e.height&&"w"==i.postfix&&(e.height=e.width/e.height*i.value,e.width=i.value),e.opts.srcset=l)}e.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")),o=e.opts.thumb||!(!e.opts.$thumb||!e.opts.$thumb.length)&&e.opts.$thumb.attr("src"),e.opts.preload!==!1&&e.opts.width&&e.opts.height&&o&&(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("error",function(){n(this).remove(),e.$ghost=null}).one("load",function(){c.afterLoad(e)}).addClass("fancybox-image").appendTo(e.$content).attr("src",o)),c.setBigImage(e)},setBigImage:function(t){var e=this,o=n("<img />");t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){var n;t.$ghost||(e.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),e.afterLoad(t)),t.timouts&&(clearTimeout(t.timouts),t.timouts=null),e.isClosing||(t.opts.srcset&&(n=t.opts.sizes,n&&"auto"!==n||(n=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),o.attr("sizes",n).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!e.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),e.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(o[0].complete||"complete"==o[0].readyState)&&o[0].naturalWidth&&o[0].naturalHeight?o.trigger("load"):o[0].error&&o.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,i=this,a=t.opts.iframe,s=t.$slide;t.$content=n('<div class="fancybox-content'+(a.preload?" fancybox-is-hidden":"")+'"></div>').css(a.css).appendTo(s),s.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(a.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(a.attr).appendTo(t.$content),a.preload?(i.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),i.afterLoad(t)}),s.on("refresh.fb",function(){var n,i,r=t.$content,c=a.css.width,l=a.css.height;if(1===e[0].isReady){try{n=e.contents(),i=n.find("body")}catch(t){}i&&i.length&&i.children().length&&(s.css("overflow","visible"),r.css({width:"100%",height:""}),c===o&&(c=Math.ceil(Math.max(i[0].clientWidth,i.outerWidth(!0)))),c&&r.width(c),l===o&&(l=Math.ceil(Math.max(i[0].clientHeight,i.outerHeight(!0)))),l&&r.height(l),s.css("overflow","auto")),r.removeClass("fancybox-is-hidden")}})):this.afterLoad(t),e.attr("src",t.src),s.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?(e.hasClass("fancybox-content")&&e.parent(".fancybox-slide--html").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.pos===e.currPos&&e.updateCursor(),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.revealContent(t))},revealContent:function(t){var e,i,a,s,r=this,c=t.$slide,l=!1,d=!1,u=r.isMoved(t),p=t.isRevealed;if(!u||!p){if(t.isRevealed=!0,e=t.opts[r.firstRun?"animationEffect":"transitionEffect"],a=t.opts[r.firstRun?"animationDuration":"transitionDuration"],a=parseInt(t.forcedDuration===o?a:t.forcedDuration,10),t.pos===r.currPos&&(t.isComplete?e=!1:r.isAnimating=!0),!u&&t.pos===r.currPos&&a||(e=!1),"zoom"===e&&(t.pos===r.currPos&&a&&"image"===t.type&&!t.hasError&&(d=r.getThumbPos(t))?l=r.getFitPos(t):e="fade"),"zoom"===e)return l.scaleX=l.width/d.width,l.scaleY=l.height/d.height,s=t.opts.zoomOpacity,"auto"==s&&(s=Math.abs(t.width/t.height-d.width/d.height)>.1),s&&(d.opacity=.1,l.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),d),f(t.$content),void n.fancybox.animate(t.$content,l,a,function(){r.isAnimating=!1,r.complete()});if(r.updateSlide(t),!e)return f(c),p||t.$content.removeClass("fancybox-is-hidden").hide().fadeIn("fast"),void(t.pos===r.currPos&&r.complete());n.fancybox.stop(c),i="fancybox-animated fancybox-slide--"+(t.pos>=r.prevPos?"next":"previous")+" fancybox-fx-"+e,c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i),t.$content.removeClass("fancybox-is-hidden"),f(c),n.fancybox.animate(c,"fancybox-slide--current",a,function(){c.removeClass(i).removeAttr("style"),t.pos===r.currPos&&r.complete()},!0)}},getThumbPos:function(o){var i,a=this,s=!1,r=o.opts.$thumb,c=r&&r.length&&r[0].ownerDocument===e?r.offset():0,l=function(e){for(var o,i=e[0],a=i.getBoundingClientRect(),s=[];null!==i.parentElement;)"hidden"!==n(i.parentElement).css("overflow")&&"auto"!==n(i.parentElement).css("overflow")||s.push(i.parentElement.getBoundingClientRect()),i=i.parentElement;return o=s.every(function(t){var e=Math.min(a.right,t.right)-Math.max(a.left,t.left),n=Math.min(a.bottom,t.bottom)-Math.max(a.top,t.top);return e>0&&n>0}),o&&a.bottom>0&&a.right>0&&a.left<n(t).width()&&a.top<n(t).height()};return c&&l(r)&&(i=a.$refs.stage.offset(),s={top:c.top-i.top+parseFloat(r.css("border-top-width")||0),left:c.left-i.left+parseFloat(r.css("border-left-width")||0),width:r.width(),height:r.height(),scaleX:1,scaleY:1}),s},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),f(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play"),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e=this,n=e.slides[e.currPos+1],o=e.slides[e.currPos-1];o&&o.type===t&&e.loadSlide(o),n&&n.type===t&&e.loadSlide(n)},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,p=this,h=p.current,g=function(){p.cleanUp(t)};return!p.isClosing&&(p.isClosing=!0,p.trigger("beforeClose",t)===!1?(p.isClosing=!1,d(function(){p.update()}),!1):(p.removeEvents(),h.timouts&&clearTimeout(h.timouts),a=h.$content,o=h.opts.animationEffect,i=n.isNumeric(e)?e:o?h.opts.animationDuration:0,h.$slide.off(u).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),h.$slide.siblings().trigger("onReset").remove(),i&&p.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),p.hideLoading(h),p.hideControls(),p.updateCursor(),"zoom"!==o||t!==!0&&a&&i&&"image"===h.type&&!h.hasError&&(l=p.getThumbPos(h))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=h.opts.zoomOpacity,"auto"==r&&(r=Math.abs(h.width/h.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),f(a),n.fancybox.animate(a,l,i,g),!0):(o&&i?t===!0?setTimeout(g,i):n.fancybox.animate(h.$slide.removeClass("fancybox-slide--current"),"fancybox-animated fancybox-slide--previous fancybox-fx-"+o,i,g):g(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;return s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),o===!1?o:void("afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i))},updateControls:function(){var t=this,o=t.current,i=o.index,a=o.opts.caption,s=t.$refs.container,r=t.$refs.caption;o.$slide.trigger("refresh"),t.$caption=a&&a.length?r.html(a):null,t.isHiddenControls||t.isIdle||t.showControls(),s.find("[data-fancybox-count]").html(t.group.length),s.find("[data-fancybox-index]").html(i+1),s.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),s.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?s.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&s.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.isHiddenControls=!1,
t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.isHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.4.1",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof h&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new h(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",i={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().left:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(i.transform=n),e.opacity!==o&&(i.opacity=e.opacity),e.width!==o&&(i.width=e.width),e.height!==o&&(i.height=e.height),t.css(i)},animate:function(t,e,i,a,s){var r,c=!1;n.isFunction(i)&&(a=i,i=null),n.isPlainObject(e)||t.removeAttr("style"),n.fancybox.stop(t),t.on(u,function(o){(!o||!o.originalEvent||t.is(o.originalEvent.target)&&"z-index"!=o.originalEvent.propertyName)&&(n.fancybox.stop(t),c&&n.fancybox.setTranslate(t,c),n.isNumeric(i)&&t.css("transition-duration",""),n.isPlainObject(e)?s===!1&&t.removeAttr("style"):s!==!0&&t.removeClass(e),n.isFunction(a)&&a(o))}),n.isNumeric(i)&&t.css("transition-duration",i+"ms"),n.isPlainObject(e)?(e.scaleX!==o&&e.scaleY!==o&&(r=n.fancybox.getTranslate(t),c=n.extend({},e,{width:r.width*e.scaleX,height:r.height*e.scaleY,scaleX:1,scaleY:1}),delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger("transitionend")},i+16))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(u),t.off(u).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=".fancybox-button",e="fancybox-focus",o=null;r.on("mousedown mouseup focus blur",t,function(i){switch(i.type){case"mousedown":o=n(this);break;case"mouseup":o=null;break;case"focusin":n(t).removeClass(e),n(this).is(o)||n(this).is("[disabled]")||n(this).addClass(e);break;case"focusout":n(t).removeClass(e)}})}()}}(window,document,jQuery),function(t){"use strict";var e=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube-nocookie.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},n,a.opts.media),t.each(s,function(n,o){if(c=p.match(o.matcher)){if(h=o.type,f=n,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[n],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):e(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):e(o.thumb,c),"youtube"===n?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===n&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){this.$container.off(".fb.touch")},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||d.isClosing)return o.stopPropagation(),void o.preventDefault();if(i.realPoints=i.startPoints=a(o),i.startPoints.length){if(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=i.sliderLastPos||n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),!i.opts&&!i.canPan||!c.is(i.$stage)&&!i.$stage.find(c).length)return void(c.is(".fancybox-image")&&o.preventDefault());i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.$content.css("transition-duration",""),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.$content.css("transition-duration",""),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))}}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&e.isSwiping===!0||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.isSwiping,c=s.sliderStartPos.left||0;if(r!==!0)"x"==r&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?c+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?c-=Math.pow(-s.distanceX,.8):c+=s.distanceX),s.sliderLastPos={top:"x"==r?0:s.sliderStartPos.top+s.distanceY,left:c},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,s.instance.group.length<2&&s.opts.vertical?s.isSwiping="y":s.instance.isDragging||s.opts.vertical===!1||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),s.canTap=!1,"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);s.instance.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(s.instance.slides,function(t,e){n.fancybox.stop(e.$slide),e.$slide.css("transition-duration",""),e.inTransition=!1,e.pos===s.instance.current.pos&&(s.sliderStartPos.left=n.fancybox.getTranslate(e.$slide).left-n.fancybox.getTranslate(s.instance.$refs.stage).left)}),s.instance.SlideShow&&s.instance.SlideShow.isActive&&s.instance.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;return s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5)?void(t.startPoints=t.newPoints):(t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&(i(t.requestId),t.requestId=null),void(t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})))},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&(i(e.requestId),e.requestId=null),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=Math.max((new Date).getTime()-o.startTime,1),r=o.isSwiping,c=o.isPanning,l=o.isZooming,d=o.isScrolling;return o.endPoints=a(t),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap?o.onTap(t):(o.speed=366,o.velocityX=o.distanceX/s*.5,o.velocityY=o.distanceY/s*.5,o.speedX=Math.max(.5*o.speed,Math.min(1.5*o.speed,1/Math.abs(o.velocityX)*o.speed)),void(c?o.endPanning():l?o.endZooming():o.endSwiping(r,d)))},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length;o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,200)):"x"==t&&o.distanceX>50&&a>1?i=o.instance.previous(o.speedX):"x"==t&&o.distanceX<-50&&a>1&&(i=o.instance.next(o.speedX)),i!==!1||"x"!=t&&"y"!=t||(e||a<2?o.instance.centerSlide(o.instance.current,150):o.instance.jumpTo(o.instance.current.index)),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(i.opts.momentum===!1?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+i.velocityX*i.speed,e=i.contentLastPos.top+i.velocityY*i.speed),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,330))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.setTranslate(a.$content,n.fancybox.getTranslate(a.$content)),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls(!0);break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this;t.$button=t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),(t.instance.group.length<2||!t.instance.group[t.instance.currIndex].opts.slideShow)&&t.$button.hide()},set:function(t){var e=this,n=e.instance,o=n.current,i=function(){e.isActive&&n.jumpTo((n.currIndex+1)%n.group.length)};o&&(t===!0||o.opts.loop||n.currIndex<n.group.length-1)?e.timer=setTimeout(function(){var t;e.isActive&&(t=o.$slide.find("video,audio").filter(":visible:first"),t.length?t.one("ended",i):i())},o.opts.slideShow.speed):(e.stop(),n.idleSecondsCounter=0,n.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1)},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.current.$content.css("transition","none"),n.isAnimating=!1,n.update(!0,!0,0)),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;return n?void(e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&e.opts.fullScreen.autoStart===!0&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()):void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs",o=n+"-active";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var i=function(t){this.init(t)};e.extend(i.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e,n,o=this;o.instance=t,t.Thumbs=o,o.opts=t.group[t.currIndex].opts.thumbs,e=t.group[0],e=e.opts.thumb||!(!e.opts.$thumb||!e.opts.$thumb.length)&&e.opts.$thumb.attr("src"),t.group.length>1&&(n=t.group[1],n=n.opts.thumb||!(!n.opts.$thumb||!n.opts.$thumb.length)&&n.opts.$thumb.attr("src")),o.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]"),o.opts&&e&&n?(o.$button.show().on("click",function(){o.toggle()}),o.isActive=!0):o.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.opts.thumb||(n.opts.$thumb?n.opts.$thumb.attr("src"):null),t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'" '+(t&&t.length?' style="background-image:url('+t+')" />':"")+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,i=this,a=i.$list,s=i.$grid;i.instance.current&&(e=a.children().removeClass(o).filter('[data-index="'+i.instance.current.index+'"]').addClass(o),n=e.position(),"y"===i.opts.axis&&(n.top<0||n.top>a.height()-e.outerHeight())?a.stop().animate({scrollTop:a.scrollTop()+n.top},t):"x"===i.opts.axis&&(n.left<s.scrollLeft()||n.left>s.scrollLeft()+(s.width()-e.outerWidth()))&&a.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new i(e),n.isActive&&n.opts.autoStart===!0&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&n.opts.hideOnClose!==!1&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""),""!==n&&n)}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)}),n(function(){n.fancybox.defaults.hash!==!1&&(n(e).on({"onInit.fb":function(t,e){var n,i;e.group[e.currIndex].opts.hash!==!1&&(n=o(),i=a(e),i&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&i.opts.hash!==!1&&(r=a(o),r&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300))))},"beforeClose.fb":function(n,o,i){i.opts.hash!==!1&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){
var o=e.current,i=(new Date).getTime();e.group.length<2||o.opts.wheel===!1||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);
}catch(e){console.log('Error in: catalog/view/theme/indiano/libs/fancybox/jquery.fancybox.min.js: '+e.message);};

/* Jet Cache: catalog/view/theme/indiano/libs/slick/slick.min.js */
try{
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

}catch(e){console.log('Error in: catalog/view/theme/indiano/libs/slick/slick.min.js: '+e.message);};

/* Jet Cache: catalog/view/theme/indiano/libs/inputmask/inputmask.js */
try{
/*
 * Input Mask Core
 * http://github.com/RobinHerbots/jquery.inputmask
 * Copyright (c) 2010 -	Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 0.0.0-dev
 */
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["./dependencyLibs/inputmask.dependencyLib", "./global/window", "./global/document"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("./dependencyLibs/inputmask.dependencyLib"), require("./global/window"), require("./global/document"));
    } else {
        window.Inputmask = factory(window.dependencyLib || jQuery, window, document);
    }
}
(function ($, window, document, undefined) {
        var ua = navigator.userAgent,
            mobile = /mobile/i.test(ua),
            iemobile = /iemobile/i.test(ua),
            iphone = /iphone/i.test(ua) && !iemobile,
            android = /android/i.test(ua) && !iemobile;

        function Inputmask(alias, options, internal) {
            //allow instanciating without new
            if (!(this instanceof Inputmask)) {
                return new Inputmask(alias, options, internal);
            }

            this.el = undefined;
            this.events = {};
            this.maskset = undefined;
            this.refreshValue = false; //indicate a refresh from the inputvalue is needed (form.reset)

            if (internal !== true) {
                //init options
                if ($.isPlainObject(alias)) {
                    options = alias;
                } else {
                    options = options || {};
                    options.alias = alias;
                }
                this.opts = $.extend(true, {}, this.defaults, options);
                this.noMasksCache = options && options.definitions !== undefined;
                this.userOptions = options || {}; //user passed options
                this.isRTL = this.opts.numericInput;
                resolveAlias(this.opts.alias, options, this.opts);
            }
        }

        Inputmask.prototype = {
            dataAttribute: "data-inputmask", //data attribute prefix used for attribute binding
            //options default
            defaults: {
                placeholder: "_",
                optionalmarker: {
                    start: "[",
                    end: "]"
                },
                quantifiermarker: {
                    start: "{",
                    end: "}"
                },
                groupmarker: {
                    start: "(",
                    end: ")"
                },
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null, //needs tobe null instead of undefined as the extend method does not consider props with the undefined value
                regex: null, //regular expression as a mask
                oncomplete: $.noop, //executes when the mask is complete
                onincomplete: $.noop, //executes when the mask is incomplete and focus is lost
                oncleared: $.noop, //executes when the mask is cleared
                repeat: 0, //repetitions of the mask: * ~ forever, otherwise specify an integer
                greedy: true, //true: allocated buffer for the mask and repetitions - false: allocate only if needed
                autoUnmask: false, //automatically unmask when retrieving the value with $.fn.val or value if the browser supports __lookupGetter__ or getOwnPropertyDescriptor
                removeMaskOnSubmit: false, //remove the mask before submitting the form.
                clearMaskOnLostFocus: true,
                insertMode: true, //insert the input or overwrite the input
                clearIncomplete: false, //clear the incomplete input on blur
                alias: null,
                onKeyDown: $.noop, //callback to implement autocomplete on certain keys for example. args => event, buffer, caretPos, opts
                onBeforeMask: null, //executes before masking the initial value to allow preprocessing of the initial value.	args => initialValue, opts => return processedValue
                onBeforePaste: function (pastedValue, opts) {
                    return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask(pastedValue, opts) : pastedValue;
                }, //executes before masking the pasted value to allow preprocessing of the pasted value.	args => pastedValue, opts => return processedValue
                onBeforeWrite: null, //executes before writing to the masked element. args => event, opts
                onUnMask: null, //executes after unmasking to allow postprocessing of the unmaskedvalue.	args => maskedValue, unmaskedValue, opts
                showMaskOnFocus: true, //show the mask-placeholder when the input has focus
                showMaskOnHover: true, //show the mask-placeholder when hovering the empty input
                onKeyValidation: $.noop, //executes on every key-press with the result of isValid. Params: key, result, opts
                skipOptionalPartCharacter: " ", //a character which can be used to skip an optional part of a mask
                numericInput: false, //numericInput input direction style (input shifts to the left while holding the caret position)
                rightAlign: false, //align to the right
                undoOnEscape: true, //pressing escape reverts the value to the value before focus
                //numeric basic properties
                radixPoint: "", //".", // | ","
                radixPointDefinitionSymbol: undefined, //set the radixPoint definitionSymbol ~ used for awareness of the radixpoint
                groupSeparator: "", //",", // | "."
                //numeric basic properties
                keepStatic: null, //try to keep the mask static while typing. Decisions to alter the mask will be posponed if possible - null see auto selection for multi masks
                positionCaretOnTab: true, //when enabled the caret position is set after the latest valid position on TAB
                tabThrough: false, //allows for tabbing through the different parts of the masked field
                supportsInputType: ["text", "tel", "password"], //list with the supported input types
                //specify keyCodes which should not be considered in the keypress event, otherwise the preventDefault will stop their default behavior especially in FF
                ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
                isComplete: null, //override for isComplete - args => buffer, opts - return true || false
                canClearPosition: $.noop, //hook to alter the clear behavior in the stripValidPositions args => maskset, position, lastValidPosition, opts => return true|false/command object
                preValidation: null, //hook to preValidate the input.  Usefull for validating regardless the definition.	args => buffer, pos, char, isSelection, opts => return true/false/command object
                postValidation: null, //hook to postValidate the result from isValid.	Usefull for validating the entry as a whole.	args => buffer, currentResult, opts => return true/false/json
                staticDefinitionSymbol: undefined, //specify a definitionSymbol for static content, used to make matches for alternators
                jitMasking: false, //just in time masking ~ only mask while typing, can n (number), true or false
                nullable: true, //return nothing instead of the buffertemplate when the user hasn't entered anything.
                inputEventOnly: false, //dev option - testing inputfallback behavior
                noValuePatching: false, //disable value property patching
                positionCaretOnClick: "lvp", //none, lvp (based on the last valid position (default), radixFocus (position caret to radixpoint on initial click)
                casing: null, //mask-level casing. Options: null, "upper", "lower" or "title" or callback args => elem, test, pos, validPositions return charValue
                inputmode: "verbatim", //specify the inputmode  - already in place for when browsers will support it
                colorMask: false, //enable css styleable mask
                androidHack: false //see README_android.md
            },
            definitions: {
                "9": {
                    validator: "[0-9]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                "a": {
                    validator: "[A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                "*": {
                    validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]",
                    cardinality: 1
                }
            },
            aliases: {}, //aliases definitions => see jquery.inputmask.extensions.js
            masksCache: {},
            mask: function (elems) {
                var that = this;

                function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
                    //handle dir=rtl
                    if (npt.dir === "rtl" || opts.rightAlign) {
                        npt.style.textAlign = "right";
                    }

                    if (npt.dir === "rtl" || opts.numericInput) {
                        npt.dir = "ltr";
                        npt.removeAttribute("dir");
                        opts.isRTL = true;
                    }

                    var attrOptions = npt.getAttribute(dataAttribute),
                        option, dataoptions, optionData, p;

                    function importOption(option, optionData) {
                        optionData = optionData !== undefined ? optionData : npt.getAttribute(dataAttribute + "-" + option);
                        if (optionData !== null) {
                            if (typeof optionData === "string") {
                                if (option.indexOf("on") === 0) optionData = window[optionData]; //get function definition
                                else if (optionData === "false") optionData = false;
                                else if (optionData === "true") optionData = true;
                            }
                            userOptions[option] = optionData;
                        }
                    }

                    if (attrOptions && attrOptions !== "") {
                        attrOptions = attrOptions.replace(new RegExp("'", "g"), '"');
                        dataoptions = JSON.parse("{" + attrOptions + "}");
                    }

                    //resolve aliases
                    if (dataoptions) { //pickup alias from dataAttribute
                        optionData = undefined;
                        for (p in dataoptions) {
                            if (p.toLowerCase() === "alias") {
                                optionData = dataoptions[p];
                                break;
                            }
                        }
                    }
                    importOption("alias", optionData); //pickup alias from dataAttribute-alias
                    if (userOptions.alias) {
                        resolveAlias(userOptions.alias, userOptions, opts);
                    }

                    for (option in opts) {
                        if (dataoptions) {
                            optionData = undefined;
                            for (p in dataoptions) {
                                if (p.toLowerCase() === option.toLowerCase()) {
                                    optionData = dataoptions[p];
                                    break;
                                }
                            }
                        }
                        importOption(option, optionData);
                    }

                    $.extend(true, opts, userOptions);
                    return opts;
                }

                if (typeof elems === "string") {
                    elems = document.getElementById(elems) || document.querySelectorAll(elems);
                }
                elems = elems.nodeName ? [elems] : elems;
                $.each(elems, function (ndx, el) {
                    var scopedOpts = $.extend(true, {}, that.opts);
                    importAttributeOptions(el, scopedOpts, $.extend(true, {}, that.userOptions), that.dataAttribute);
                    var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                    if (maskset !== undefined) {
                        if (el.inputmask !== undefined) {
                            el.inputmask.remove();
                        }
                        //store inputmask instance on the input with element reference
                        el.inputmask = new Inputmask(undefined, undefined, true);
                        el.inputmask.opts = scopedOpts;
                        el.inputmask.noMasksCache = that.noMasksCache;
                        el.inputmask.userOptions = $.extend(true, {}, that.userOptions);
                        el.inputmask.isRTL = scopedOpts.isRTL;
                        el.inputmask.el = el;
                        el.inputmask.maskset = maskset;

                        $.data(el, "_inputmask_opts", scopedOpts);

                        maskScope.call(el.inputmask, {
                            "action": "mask"
                        });
                    }
                });
                return elems && elems[0] ? (elems[0].inputmask || this) : this;
            },
            option: function (options, noremask) { //set extra options || retrieve value of a current option
                if (typeof options === "string") {
                    return this.opts[options];
                } else if (typeof options === "object") {
                    $.extend(this.userOptions, options); //user passed options
                    //remask
                    if (this.el && noremask !== true) {
                        this.mask(this.el);
                    }
                    return this;
                }
            },
            unmaskedvalue: function (value) {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return maskScope.call(this, {
                    "action": "unmaskedvalue",
                    "value": value
                });
            },
            remove: function () {
                return maskScope.call(this, {
                    "action": "remove"
                });
            },
            getemptymask: function () { //return the default (empty) mask value, usefull for setting the default value in validation
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return maskScope.call(this, {
                    "action": "getemptymask"
                });
            },
            hasMaskedValue: function () { //check wheter the returned value is masked or not; currently only works reliable when using jquery.val fn to retrieve the value
                return !this.opts.autoUnmask;
            },
            isComplete: function () {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return maskScope.call(this, {
                    "action": "isComplete"
                });
            },
            getmetadata: function () { //return mask metadata if exists
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return maskScope.call(this, {
                    "action": "getmetadata"
                });
            },
            isValid: function (value) {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return maskScope.call(this, {
                    "action": "isValid",
                    "value": value
                });
            },
            format: function (value, metadata) {
                this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                return maskScope.call(this, {
                    "action": "format",
                    "value": value,
                    "metadata": metadata //true/false getmetadata
                });
            },
            analyseMask: function (mask, regexMask, opts) {
                var tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                    //Thx to https://github.com/slevithan/regex-colorizer for the regexTokenizer regex
                    regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                    escaped = false,
                    currentToken = new MaskToken(),
                    match,
                    m,
                    openenings = [],
                    maskTokens = [],
                    openingToken,
                    currentOpeningToken,
                    alternator,
                    lastMatch,
                    groupToken;

                function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                    this.matches = [];
                    this.openGroup = isGroup || false;
                    this.alternatorGroup = false;
                    this.isGroup = isGroup || false;
                    this.isOptional = isOptional || false;
                    this.isQuantifier = isQuantifier || false;
                    this.isAlternator = isAlternator || false;
                    this.quantifier = {
                        min: 1,
                        max: 1
                    };
                }

                //test definition => {fn: RegExp/function, cardinality: int, optionality: bool, newBlockMarker: bool, casing: null/upper/lower, def: definitionSymbol, placeholder: placeholder, mask: real maskDefinition}
                function insertTestDefinition(mtoken, element, position) {
                    position = position !== undefined ? position : mtoken.matches.length;
                    var prevMatch = mtoken.matches[position - 1];
                    if (regexMask) {
                        if (element.indexOf("[") === 0 || escaped) {
                            mtoken.matches.splice(position++, 0, {
                                fn: new RegExp(element, opts.casing ? "i" : ""),
                                cardinality: 1,
                                optionality: mtoken.isOptional,
                                newBlockMarker: prevMatch === undefined || prevMatch.def !== element,
                                casing: null,
                                def: element,
                                placeholder: undefined,
                                nativeDef: element
                            });
                        } else {
                            $.each(element.split(""), function (ndx, lmnt) {
                                prevMatch = mtoken.matches[position - 1];
                                mtoken.matches.splice(position++, 0, {
                                    fn: null,
                                    cardinality: 0,
                                    optionality: mtoken.isOptional,
                                    newBlockMarker: prevMatch === undefined || (prevMatch.def !== lmnt && prevMatch.fn !== null),
                                    casing: null,
                                    def: opts.staticDefinitionSymbol || lmnt,
                                    placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,
                                    nativeDef: lmnt
                                });
                            });
                        }
                        escaped = false;
                    } else {
                        var maskdef = (opts.definitions ? opts.definitions[element] : undefined) || Inputmask.prototype.definitions[element];
                        if (maskdef && !escaped) {
                            var prevalidators = maskdef.prevalidator,
                                prevalidatorsL = prevalidators ? prevalidators.length : 0;
                            //handle prevalidators
                            for (var i = 1; i < maskdef.cardinality; i++) {
                                var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [],
                                    validator = prevalidator.validator,
                                    cardinality = prevalidator.cardinality;
                                mtoken.matches.splice(position++, 0, {
                                    fn: validator ? typeof validator === "string" ? new RegExp(validator, opts.casing ? "i" : "") : new function () {
                                        this.test = validator;
                                    } : new RegExp("."),
                                    cardinality: cardinality ? cardinality : 1,
                                    optionality: mtoken.isOptional,
                                    newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),
                                    casing: maskdef.casing,
                                    def: maskdef.definitionSymbol || element,
                                    placeholder: maskdef.placeholder,
                                    nativeDef: element
                                });
                                prevMatch = mtoken.matches[position - 1];
                            }
                            mtoken.matches.splice(position++, 0, {
                                fn: maskdef.validator ? typeof maskdef.validator == "string" ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function () {
                                    this.test = maskdef.validator;
                                } : new RegExp("."),
                                cardinality: maskdef.cardinality,
                                optionality: mtoken.isOptional,
                                newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),
                                casing: maskdef.casing,
                                def: maskdef.definitionSymbol || element,
                                placeholder: maskdef.placeholder,
                                nativeDef: element
                            });
                        } else {
                            mtoken.matches.splice(position++, 0, {
                                fn: null,
                                cardinality: 0,
                                optionality: mtoken.isOptional,
                                newBlockMarker: prevMatch === undefined || (prevMatch.def !== element && prevMatch.fn !== null),
                                casing: null,
                                def: opts.staticDefinitionSymbol || element,
                                placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
                                nativeDef: element
                            });
                            escaped = false;
                        }
                    }
                }

                function verifyGroupMarker(maskToken) {
                    if (maskToken && maskToken.matches) {
                        $.each(maskToken.matches, function (ndx, token) {
                                var nextToken = maskToken.matches[ndx + 1];
                                if ((nextToken === undefined || (nextToken.matches === undefined || nextToken.isQuantifier === false)) && token && token.isGroup) { //this is not a group but a normal mask => convert
                                    token.isGroup = false;
                                    if (!regexMask) {
                                        insertTestDefinition(token, opts.groupmarker.start, 0);
                                        if (token.openGroup !== true) {
                                            insertTestDefinition(token, opts.groupmarker.end);
                                        }
                                    }
                                }
                                verifyGroupMarker(token);
                            }
                        );
                    }
                }

                function defaultCase() {
                    if (openenings.length > 0) {
                        currentOpeningToken = openenings[openenings.length - 1];
                        insertTestDefinition(currentOpeningToken, m);
                        if (currentOpeningToken.isAlternator) { //handle alternator a | b case
                            alternator = openenings.pop();
                            for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                                alternator.matches[mndx].isGroup = false; //don't mark alternate groups as group
                            }
                            if (openenings.length > 0) {
                                currentOpeningToken = openenings[openenings.length - 1];
                                currentOpeningToken.matches.push(alternator);
                            } else {
                                currentToken.matches.push(alternator);
                            }
                        }
                    } else {
                        insertTestDefinition(currentToken, m);
                    }
                }

                function reverseTokens(maskToken) {
                    function reverseStatic(st) {
                        if (st === opts.optionalmarker.start) st = opts.optionalmarker.end;
                        else if (st === opts.optionalmarker.end) st = opts.optionalmarker.start;
                        else if (st === opts.groupmarker.start) st = opts.groupmarker.end;
                        else if (st === opts.groupmarker.end) st = opts.groupmarker.start;

                        return st;
                    }

                    maskToken.matches = maskToken.matches.reverse();
                    for (var match in maskToken.matches) {
                        if (maskToken.matches.hasOwnProperty(match)) {
                            var intMatch = parseInt(match);
                            if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) { //reposition quantifier
                                var qt = maskToken.matches[match];
                                maskToken.matches.splice(match, 1);
                                maskToken.matches.splice(intMatch + 1, 0, qt);
                            }
                            if (maskToken.matches[match].matches !== undefined) {
                                maskToken.matches[match] = reverseTokens(maskToken.matches[match]);
                            } else {
                                maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
                            }
                        }
                    }

                    return maskToken;
                }


                if (regexMask) {
                    opts.optionalmarker.start = undefined;
                    opts.optionalmarker.end = undefined;
                }
                while (match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask)) {
                    m = match[0];

                    if (regexMask && escaped !== true) {
                        switch (m.charAt(0)) {
                            //Quantifier
                            case "?":
                                m = "{0,1}";
                                break;
                            case "+":
                            case "*":
                                m = "{" + m + "}";
                                break;
                        }
                    }

                    if (escaped) {
                        defaultCase();
                        continue;
                    }
                    switch (m.charAt(0)) {
                        case opts.escapeChar:
                            escaped = true;
                            if (regexMask) defaultCase();
                            break;
                        case opts.optionalmarker.end:
                        // optional closing
                        case opts.groupmarker.end:
                            // Group closing
                            openingToken = openenings.pop();
                            openingToken.openGroup = false; //mark group as complete
                            if (openingToken !== undefined) {
                                if (openenings.length > 0) {
                                    currentOpeningToken = openenings[openenings.length - 1];
                                    currentOpeningToken.matches.push(openingToken);
                                    if (currentOpeningToken.isAlternator) { //handle alternator (a) | (b) case
                                        alternator = openenings.pop();
                                        for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                                            alternator.matches[mndx].isGroup = false; //don't mark alternate groups as group
                                            alternator.matches[mndx].alternatorGroup = false;
                                        }
                                        if (openenings.length > 0) {
                                            currentOpeningToken = openenings[openenings.length - 1];
                                            currentOpeningToken.matches.push(alternator);
                                        } else {
                                            currentToken.matches.push(alternator);
                                        }
                                    }
                                } else {
                                    currentToken.matches.push(openingToken);
                                }
                            } else defaultCase();
                            break;
                        case opts.optionalmarker.start:
                            // optional opening
                            openenings.push(new MaskToken(false, true));
                            break;
                        case opts.groupmarker.start:
                            // Group opening
                            openenings.push(new MaskToken(true));
                            break;
                        case opts.quantifiermarker.start:
                            //Quantifier
                            var quantifier = new MaskToken(false, false, true);

                            m = m.replace(/[{}]/g, "");
                            var mq = m.split(","),
                                mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                                mq1 = mq.length === 1 ? mq0 : (isNaN(mq[1]) ? mq[1] : parseInt(mq[1]));
                            if (mq1 === "*" || mq1 === "+") {
                                mq0 = mq1 === "*" ? 0 : 1;
                            }
                            quantifier.quantifier = {
                                min: mq0,
                                max: mq1
                            };
                            if (openenings.length > 0) {
                                var matches = openenings[openenings.length - 1].matches;
                                match = matches.pop();
                                if (!match.isGroup) {
                                    groupToken = new MaskToken(true);
                                    groupToken.matches.push(match);
                                    match = groupToken;
                                }
                                matches.push(match);
                                matches.push(quantifier);
                            } else {
                                match = currentToken.matches.pop();
                                if (!match.isGroup) {
                                    if (regexMask && match.fn === null) {
                                        if (match.def === ".") match.fn = new RegExp(match.def, opts.casing ? "i" : "");
                                    }

                                    groupToken = new MaskToken(true);
                                    groupToken.matches.push(match);
                                    match = groupToken;
                                }
                                currentToken.matches.push(match);
                                currentToken.matches.push(quantifier);
                            }
                            break;
                        case opts.alternatormarker:
                            if (openenings.length > 0) {
                                currentOpeningToken = openenings[openenings.length - 1];
                                var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                                if (currentOpeningToken.openGroup && //regexp alt syntax
                                    (subToken.matches === undefined || (subToken.isGroup === false && subToken.isAlternator === false))) { //alternations within group
                                    lastMatch = openenings.pop();
                                } else {
                                    lastMatch = currentOpeningToken.matches.pop();
                                }
                            } else {
                                lastMatch = currentToken.matches.pop();
                            }
                            if (lastMatch.isAlternator) {
                                openenings.push(lastMatch);
                            } else {
                                if (lastMatch.alternatorGroup) {
                                    alternator = openenings.pop();
                                    lastMatch.alternatorGroup = false;
                                } else {
                                    alternator = new MaskToken(false, false, false, true);
                                }
                                alternator.matches.push(lastMatch);
                                openenings.push(alternator);
                                if (lastMatch.openGroup) { //regexp alt syntax
                                    lastMatch.openGroup = false;
                                    var alternatorGroup = new MaskToken(true);
                                    alternatorGroup.alternatorGroup = true;
                                    openenings.push(alternatorGroup);
                                }
                            }
                            break;
                        default:
                            defaultCase();
                    }
                }

                while (openenings.length > 0) {
                    openingToken = openenings.pop();
                    currentToken.matches.push(openingToken);
                }
                if (currentToken.matches.length > 0) {
                    verifyGroupMarker(currentToken);
                    maskTokens.push(currentToken);
                }

                if (opts.numericInput || opts.isRTL) {
                    reverseTokens(maskTokens[0]);
                }
                // console.log(JSON.stringify(maskTokens));
                return maskTokens;
            }
        };

        //apply defaults, definitions, aliases
        Inputmask.extendDefaults = function (options) {
            $.extend(true, Inputmask.prototype.defaults, options);
        };
        Inputmask.extendDefinitions = function (definition) {
            $.extend(true, Inputmask.prototype.definitions, definition);
        };
        Inputmask.extendAliases = function (alias) {
            $.extend(true, Inputmask.prototype.aliases, alias);
        };
        //static fn on inputmask
        Inputmask.format = function (value, options, metadata) {
            return Inputmask(options).format(value, metadata);
        };
        Inputmask.unmask = function (value, options) {
            return Inputmask(options).unmaskedvalue(value);
        };
        Inputmask.isValid = function (value, options) {
            return Inputmask(options).isValid(value);
        };
        Inputmask.remove = function (elems) {
            $.each(elems, function (ndx, el) {
                if (el.inputmask) el.inputmask.remove();
            });
        };
        Inputmask.escapeRegex = function (str) {
            var specials = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
            return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1");
        };
        Inputmask.keyCode = {
            ALT: 18,
            BACKSPACE: 8,
            BACKSPACE_SAFARI: 127,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91,
            X: 88
        };

        function resolveAlias(aliasStr, options, opts) {
            var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
            if (aliasDefinition) {
                if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias, undefined, opts); //alias is another alias
                $.extend(true, opts, aliasDefinition); //merge alias definition in the options
                $.extend(true, opts, options); //reapply extra given options
                return true;
            } else //alias not found - try as mask
            if (opts.mask === null) {
                opts.mask = aliasStr;
            }

            return false;
        }

        function generateMaskSet(opts, nocache) {
            function generateMask(mask, metadata, opts) {
                var regexMask = false;
                if (mask === null || mask === "") {
                    regexMask = opts.regex !== null;
                    if (regexMask) {
                        mask = opts.regex;
                        mask = mask.replace(/^(\^)(.*)(\$)$/, "$2");
                    } else {
                        regexMask = true;
                        mask = ".*";
                    }
                }
                if (mask.length === 1 && opts.greedy === false && opts.repeat !== 0) {
                    opts.placeholder = "";
                } //hide placeholder with single non-greedy mask
                if (opts.repeat > 0 || opts.repeat === "*" || opts.repeat === "+") {
                    var repeatStart = opts.repeat === "*" ? 0 : (opts.repeat === "+" ? 1 : opts.repeat);
                    mask = opts.groupmarker.start + mask + opts.groupmarker.end + opts.quantifiermarker.start + repeatStart + "," + opts.repeat + opts.quantifiermarker.end;
                }

                // console.log(mask);
                var masksetDefinition,
                    maskdefKey = regexMask ? "regex_" + opts.regex : (opts.numericInput ? mask.split("").reverse().join("") : mask);
                if (Inputmask.prototype.masksCache[maskdefKey] === undefined || nocache === true) {
                    masksetDefinition = {
                        "mask": mask,
                        "maskToken": Inputmask.prototype.analyseMask(mask, regexMask, opts),
                        "validPositions": {},
                        "_buffer": undefined,
                        "buffer": undefined,
                        "tests": {},
                        "metadata": metadata,
                        maskLength: undefined
                    };
                    if (nocache !== true) {
                        Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition;
                        masksetDefinition = $.extend(true, {}, Inputmask.prototype.masksCache[maskdefKey]);
                    }
                } else masksetDefinition = $.extend(true, {}, Inputmask.prototype.masksCache[maskdefKey]);

                return masksetDefinition;
            }

            var ms;

            if ($.isFunction(opts.mask)) { //allow mask to be a preprocessing fn - should return a valid mask
                opts.mask = opts.mask(opts);
            }
            if ($.isArray(opts.mask)) {
                if (opts.mask.length > 1) {
                    opts.keepStatic = opts.keepStatic === null ? true : opts.keepStatic; //enable by default when passing multiple masks when the option is not explicitly specified
                    var altMask = opts.groupmarker.start;
                    $.each(opts.numericInput ? opts.mask.reverse() : opts.mask, function (ndx, msk) {
                        if (altMask.length > 1) {
                            altMask += opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start;
                        }
                        if (msk.mask !== undefined && !$.isFunction(msk.mask)) {
                            altMask += msk.mask;
                        } else {
                            altMask += msk;
                        }
                    });
                    altMask += opts.groupmarker.end;
                    // console.log(altMask);
                    return generateMask(altMask, opts.mask, opts);
                } else opts.mask = opts.mask.pop();
            }

            if (opts.mask && opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask)) {
                ms = generateMask(opts.mask.mask, opts.mask, opts);
            } else {
                ms = generateMask(opts.mask, opts.mask, opts);
            }

            return ms;
        };


        //masking scope
        //actionObj definition see below
        function maskScope(actionObj, maskset, opts) {
            maskset = maskset || this.maskset;
            opts = opts || this.opts;
            var el = this.el,
                isRTL = this.isRTL,
                undoValue,
                $el,
                skipKeyPressEvent = false, //Safari 5.1.x - modal dialog fires keypress twice workaround
                skipInputEvent = false, //skip when triggered from within inputmask
                ignorable = false,
                maxLength,
                mouseEnter = false,
                colorMask;

            //maskset helperfunctions
            function getMaskTemplate(baseOnInput, minimalPos, includeMode) {
                //includeMode true => input, undefined => placeholder, false => mask
                minimalPos = minimalPos || 0;
                var maskTemplate = [],
                    ndxIntlzr, pos = 0,
                    test, testPos, lvp = getLastValidPosition();
                maxLength = el !== undefined ? el.maxLength : undefined;
                if (maxLength === -1) maxLength = undefined;
                do {
                    if (baseOnInput === true && getMaskSet().validPositions[pos]) {
                        testPos = getMaskSet().validPositions[pos];
                        test = testPos.match;
                        ndxIntlzr = testPos.locator.slice();
                        maskTemplate.push(includeMode === true ? testPos.input : includeMode === false ? test.nativeDef : getPlaceholder(pos, test));
                    } else {
                        testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                        test = testPos.match;
                        ndxIntlzr = testPos.locator.slice();
                        if (opts.jitMasking === false || pos < lvp || (typeof opts.jitMasking === "number" && isFinite(opts.jitMasking) && opts.jitMasking > pos)) {
                            maskTemplate.push(includeMode === false ? test.nativeDef : getPlaceholder(pos, test));
                        }
                    }
                    pos++;
                } while ((maxLength === undefined || pos < maxLength) && (test.fn !== null || test.def !== "") || minimalPos > pos);
                if (maskTemplate[maskTemplate.length - 1] === "") {
                    maskTemplate.pop(); //drop the last one which is empty
                }

                getMaskSet().maskLength = pos + 1;
                return maskTemplate;
            }

            function getMaskSet() {
                return maskset;
            }

            function resetMaskSet(soft) {
                var maskset = getMaskSet();
                maskset.buffer = undefined;
                if (soft !== true) {
                    // maskset._buffer = undefined;
                    maskset.validPositions = {};
                    maskset.p = 0;
                }
            }

            function getLastValidPosition(closestTo, strict, validPositions) {
                var before = -1,
                    after = -1,
                    valids = validPositions || getMaskSet().validPositions; //for use in valhook ~ context switch
                if (closestTo === undefined) closestTo = -1;
                for (var posNdx in valids) {
                    var psNdx = parseInt(posNdx);
                    if (valids[psNdx] && (strict || valids[psNdx].generatedInput !== true)) {
                        if (psNdx <= closestTo) before = psNdx;
                        if (psNdx >= closestTo) after = psNdx;
                    }
                }
                return (before !== -1 && (closestTo - before) > 1) || after < closestTo ? before : after;
            }

            function stripValidPositions(start, end, nocheck, strict) {
                function IsEnclosedStatic(pos) {
                    var posMatch = getMaskSet().validPositions[pos];
                    if (posMatch !== undefined && posMatch.match.fn === null) {
                        var prevMatch = getMaskSet().validPositions[pos - 1],
                            nextMatch = getMaskSet().validPositions[pos + 1];
                        return prevMatch !== undefined && nextMatch !== undefined;
                    }
                    return false;
                }

                var i, startPos = start,
                    positionsClone = $.extend(true, {}, getMaskSet().validPositions), needsValidation = false;
                getMaskSet().p = start; //needed for alternated position after overtype selection

                for (i = end - 1; i >= startPos; i--) { //clear selection
                    if (getMaskSet().validPositions[i] !== undefined) {
                        if (nocheck === true ||
                            ((getMaskSet().validPositions[i].match.optionality || !IsEnclosedStatic(i)) && opts.canClearPosition(getMaskSet(), i, getLastValidPosition(), strict, opts) !== false)) {
                            delete getMaskSet().validPositions[i];
                        }
                    }
                }

                //clear buffer
                resetMaskSet(true);
                for (i = startPos + 1; i <= getLastValidPosition();) {
                    while (getMaskSet().validPositions[startPos] !== undefined) startPos++;
                    if (i < startPos) i = startPos + 1;
                    if (getMaskSet().validPositions[i] !== undefined || !isMask(i)) {
                        var t = getTestTemplate(i);
                        if (needsValidation === false && positionsClone[startPos] && positionsClone[startPos].match.def === t.match.def) { //obvious match
                            getMaskSet().validPositions[startPos] = $.extend(true, {}, positionsClone[startPos]);
                            getMaskSet().validPositions[startPos].input = t.input;
                            delete getMaskSet().validPositions[i];
                            i++;
                        } else if (positionCanMatchDefinition(startPos, t.match.def)) {
                            if (isValid(startPos, t.input || getPlaceholder(i), true) !== false) {
                                delete getMaskSet().validPositions[i];
                                i++;
                                needsValidation = true;
                            }
                        } else if (!isMask(i)) {
                            i++;
                            startPos--;
                        }
                        startPos++;
                    } else i++;
                }

                resetMaskSet(true);
            }

            function determineTestTemplate(tests, guessNextBest) {
                var testPos,
                    testPositions = tests,
                    lvp = getLastValidPosition(),
                    lvTest = getMaskSet().validPositions[lvp] || getTests(0)[0],
                    lvTestAltArr = (lvTest.alternation !== undefined) ? lvTest.locator[lvTest.alternation].toString().split(",") : [];
                for (var ndx = 0; ndx < testPositions.length; ndx++) {
                    testPos = testPositions[ndx];

                    if (testPos.match &&
                        (((opts.greedy && testPos.match.optionalQuantifier !== true) || (testPos.match.optionality === false || testPos.match.newBlockMarker === false) && testPos.match.optionalQuantifier !== true) &&
                        ((lvTest.alternation === undefined || lvTest.alternation !== testPos.alternation) ||
                        (testPos.locator[lvTest.alternation] !== undefined && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAltArr))))) {

                        if (guessNextBest !== true || (testPos.match.fn === null && !/[0-9a-bA-Z]/.test(testPos.match.def))) {
                            break;
                        }
                    }
                }

                return testPos;
            }

            function getTestTemplate(pos, ndxIntlzr, tstPs) {
                return getMaskSet().validPositions[pos] || determineTestTemplate(getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
            }

            function getTest(pos) {
                if (getMaskSet().validPositions[pos]) {
                    return getMaskSet().validPositions[pos];
                }
                return getTests(pos)[0];
            }

            function positionCanMatchDefinition(pos, def) {
                var valid = false,
                    tests = getTests(pos);
                for (var tndx = 0; tndx < tests.length; tndx++) {
                    if (tests[tndx].match && tests[tndx].match.def === def) {
                        valid = true;
                        break;
                    }
                }
                return valid;
            }


            function getTests(pos, ndxIntlzr, tstPs) {
                var maskTokens = getMaskSet().maskToken,
                    testPos = ndxIntlzr ? tstPs : 0,
                    ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0],
                    matches = [],
                    insertStop = false,
                    latestMatch,
                    cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";

                function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) { //ndxInitializer contains a set of indexes to speedup searches in the mtokens
                    function handleMatch(match, loopNdx, quantifierRecurse) {
                        function isFirstMatch(latestMatch, tokenGroup) {
                            var firstMatch = $.inArray(latestMatch, tokenGroup.matches) === 0;
                            if (!firstMatch) {
                                $.each(tokenGroup.matches, function (ndx, match) {
                                    if (match.isQuantifier === true) {
                                        firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]);
                                        if (firstMatch) return false;
                                    }
                                });
                            }
                            return firstMatch;
                        }

                        function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                            var bestMatch, indexPos;

                            if (getMaskSet().validPositions[pos - 1] && targetAlternation && getMaskSet().tests[pos]) { //detect altarnation offset
                                var vpAlternation = getMaskSet().validPositions[pos - 1].locator;
                                var tpAlternation = getMaskSet().tests[pos][0].locator;
                                for (var i = 0; i < targetAlternation; i++) {
                                    if (vpAlternation[i] !== tpAlternation[i]) {
                                        return vpAlternation.slice(targetAlternation + 1);
                                    }
                                }
                            }

                            if (getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) {
                                $.each(getMaskSet().tests[pos] || [getMaskSet().validPositions[pos]], function (ndx, lmnt) {
                                    var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation,
                                        ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                                    if ((indexPos === undefined || ndxPos < indexPos) && ndxPos !== -1) {
                                        bestMatch = lmnt;
                                        indexPos = ndxPos;
                                    }
                                });
                            }
                            return bestMatch ?
                                bestMatch.locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1) :
                                targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
                        }

                        function definitionCanMatchDefinition(source, target) {
                            return source.match.nativeDef === target.match.nativeDef || source.match.def === target.match.nativeDef || source.match.nativeDef === target.match.def;
                        }

                        function isSubsetOf(source, target) {
                            if (source.match.fn !== null && target.match.fn !== null) {//is regex a subset
                                //do we need a dfa for this?
                                //currently only a simplistic approach
                                return target.match.fn.test(source.match.def.replace(/[\[\]]/g, ""), getMaskSet(), pos, false, opts, false);
                            }
                            return false;
                        }

                        function staticCanMatchDefinition(source, target) {
                            return source.match.fn === null && target.match.fn !== null ? target.match.fn.test(source.match.def, getMaskSet(), pos, false, opts, false) : false;
                        }

                        if (testPos > 10000) {
                            throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
                        }
                        if (testPos === pos && match.matches === undefined) {
                            matches.push({
                                "match": match,
                                "locator": loopNdx.reverse(),
                                "cd": cacheDependency
                            });
                            return true;
                        } else if (match.matches !== undefined) {
                            if (match.isGroup && quantifierRecurse !== match) { //when a group pass along to the quantifier
                                match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx);
                                if (match) return true;
                            } else if (match.isOptional) {
                                var optionalToken = match;
                                match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                                if (match) {
                                    latestMatch = matches[matches.length - 1].match;
                                    if (isFirstMatch(latestMatch, optionalToken)) {
                                        insertStop = true; //insert a stop
                                        testPos = pos; //match the position after the group
                                    } else return true;
                                }
                            } else if (match.isAlternator) {
                                var alternateToken = match,
                                    malternateMatches = [],
                                    maltMatches,
                                    currentMatches = matches.slice(),
                                    loopNdxCnt = loopNdx.length;
                                var altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
                                if (altIndex === -1 || typeof altIndex === "string") {
                                    var currentPos = testPos,
                                        ndxInitializerClone = ndxInitializer.slice(),
                                        altIndexArr = [],
                                        amndx;
                                    if (typeof altIndex == "string") {
                                        altIndexArr = altIndex.split(",");
                                    } else {
                                        for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
                                            altIndexArr.push(amndx);
                                        }
                                    }
                                    for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
                                        amndx = parseInt(altIndexArr[ndx]);
                                        matches = [];
                                        //set the correct ndxInitializer
                                        ndxInitializer = resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice();
                                        match = handleMatch(alternateToken.matches[amndx] || maskToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse) || match;
                                        if (match !== true && match !== undefined && (altIndexArr[altIndexArr.length - 1] < alternateToken.matches.length)) { //no match in the alternations (length mismatch) => look further
                                            var ntndx = $.inArray(match, maskToken.matches) + 1;
                                            if (maskToken.matches.length > ntndx) {
                                                match = handleMatch(maskToken.matches[ntndx], [ntndx].concat(loopNdx.slice(1, loopNdx.length)), quantifierRecurse);
                                                if (match) {
                                                    altIndexArr.push(ntndx.toString());
                                                    $.each(matches, function (ndx, lmnt) {
                                                        lmnt.alternation = loopNdx.length - 1;
                                                    });
                                                }
                                            }
                                        }
                                        maltMatches = matches.slice();
                                        testPos = currentPos;
                                        matches = [];

                                        //fuzzy merge matches
                                        for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                            var altMatch = maltMatches[ndx1], dropMatch = false;
                                            altMatch.alternation = altMatch.alternation || loopNdxCnt;
                                            for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                                var altMatch2 = malternateMatches[ndx2];
                                                //verify equality
                                                if (typeof altIndex !== "string" || $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr) !== -1) {
                                                    if (definitionCanMatchDefinition(altMatch, altMatch2)) {
                                                        dropMatch = true;
                                                        if (altMatch.alternation === altMatch2.alternation &&
                                                            altMatch2.locator[altMatch2.alternation].toString().indexOf(altMatch.locator[altMatch.alternation]) === -1) {
                                                            altMatch2.locator[altMatch2.alternation] = altMatch2.locator[altMatch2.alternation] + "," + altMatch.locator[altMatch.alternation];
                                                            altMatch2.alternation = altMatch.alternation; //we pass the alternation index => used in determineLastRequiredPosition
                                                        }
                                                        if (altMatch.match.nativeDef === altMatch2.match.def) {
                                                            altMatch.locator[altMatch.alternation] = altMatch2.locator[altMatch2.alternation];
                                                            malternateMatches.splice(malternateMatches.indexOf(altMatch2), 1, altMatch);
                                                        }
                                                        break;
                                                    } else if (altMatch.match.def === altMatch2.match.def) {
                                                        dropMatch = false;
                                                        break;
                                                    } else if (staticCanMatchDefinition(altMatch, altMatch2) || isSubsetOf(altMatch, altMatch2)) {
                                                        // console.log("case 5");
                                                        if (altMatch.alternation == altMatch2.alternation &&
                                                            altMatch.locator[altMatch.alternation].toString().indexOf(altMatch2.locator[altMatch2.alternation].toString().split("")[0]) === -1) {

                                                            //no alternation marker
                                                            altMatch.na = altMatch.na || altMatch.locator[altMatch.alternation].toString();
                                                            if (altMatch.na.indexOf(altMatch.locator[altMatch.alternation].toString().split("")[0]) === -1) {
                                                                altMatch.na = altMatch.na + "," + altMatch.locator[altMatch2.alternation].toString().split("")[0];
                                                            }
                                                            //insert match above general match
                                                            dropMatch = true;
                                                            altMatch.locator[altMatch.alternation] = altMatch2.locator[altMatch2.alternation].toString().split("")[0] + "," + altMatch.locator[altMatch.alternation];
                                                            malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                                                        }
                                                        break;
                                                    }
                                                }
                                            }
                                            if (!dropMatch) {
                                                malternateMatches.push(altMatch);
                                            }
                                        }
                                    }
                                    if (typeof altIndex == "string") { //filter matches
                                        malternateMatches = $.map(malternateMatches, function (lmnt, ndx) {
                                            if (isFinite(ndx)) {
                                                var mamatch,
                                                    alternation = lmnt.alternation,
                                                    altLocArr = lmnt.locator[alternation].toString().split(",");
                                                lmnt.locator[alternation] = undefined;
                                                lmnt.alternation = undefined;

                                                for (var alndx = 0; alndx < altLocArr.length; alndx++) {
                                                    mamatch = $.inArray(altLocArr[alndx], altIndexArr) !== -1;
                                                    if (mamatch) { //rebuild the locator with valid entries
                                                        if (lmnt.locator[alternation] !== undefined) {
                                                            lmnt.locator[alternation] += ",";
                                                            lmnt.locator[alternation] += altLocArr[alndx];
                                                        } else lmnt.locator[alternation] = parseInt(altLocArr[alndx]);

                                                        lmnt.alternation = alternation;
                                                    }
                                                }

                                                if (lmnt.locator[alternation] !== undefined) return lmnt;
                                            }
                                        });
                                    }

                                    matches = currentMatches.concat(malternateMatches);
                                    testPos = pos;
                                    insertStop = matches.length > 0; //insert a stopelemnt when there is an alternate - needed for non-greedy option
                                    match = malternateMatches.length > 0; //set correct match state

                                    //cloneback
                                    ndxInitializer = ndxInitializerClone.slice();
                                } else {
                                    // if (alternateToken.matches[altIndex]) { //if not in the initial alternation => look further
                                    match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);
                                    // } else match = false;
                                }
                                if (match) return true;
                            } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) {
                                var qt = match;
                                for (var qndx = (ndxInitializer.length > 0) ? ndxInitializer.shift() : 0; (qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max)) && testPos <= pos; qndx++) {
                                    var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                                    match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup); //set the tokenGroup as quantifierRecurse marker
                                    if (match) {
                                        //get latest match
                                        latestMatch = matches[matches.length - 1].match;
                                        latestMatch.optionalQuantifier = qndx > (qt.quantifier.min - 1);
                                        if (isFirstMatch(latestMatch, tokenGroup)) { //search for next possible match
                                            if (qndx > (qt.quantifier.min - 1)) {
                                                insertStop = true;
                                                testPos = pos; //match the position after the group
                                                break; //stop quantifierloop
                                            } else return true;
                                        } else {
                                            return true;
                                        }
                                    }
                                }
                            } else {
                                match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                                if (match) return true;
                            }
                        }

                        else {
                            testPos++;
                        }
                    }

                    for (var tndx = (ndxInitializer.length > 0 ? ndxInitializer.shift() : 0); tndx < maskToken.matches.length; tndx++) {
                        if (maskToken.matches[tndx].isQuantifier !== true) {
                            var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
                            if (match && testPos === pos) {
                                return match;
                            } else if (testPos > pos) {
                                break;
                            }
                        }
                    }
                }

                function mergeLocators(tests) {
                    var locator = [];
                    if (!$.isArray(tests)) tests = [tests];
                    if (tests.length > 0) {
                        if (tests[0].alternation === undefined) {
                            locator = determineTestTemplate(tests.slice()).locator.slice();
                            if (locator.length === 0) locator = tests[0].locator.slice();
                        }
                        else {
                            $.each(tests, function (ndx, tst) {
                                if (tst.def !== "") {
                                    if (locator.length === 0) locator = tst.locator.slice();
                                    else {
                                        for (var i = 0; i < locator.length; i++) {
                                            if (tst.locator[i] && locator[i].toString().indexOf(tst.locator[i]) === -1) {
                                                locator[i] += "," + tst.locator[i];
                                            }
                                        }
                                    }
                                }
                            });
                        }
                    }
                    return locator;
                }

                function filterTests(tests) {
                    if (opts.keepStatic && pos > 0) {
                        if (tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
                            if (tests[0].match.optionality !== true &&
                                tests[0].match.optionalQuantifier !== true &&
                                tests[0].match.fn === null && !/[0-9a-bA-Z]/.test(tests[0].match.def)) {
                                if (getMaskSet().validPositions[pos - 1] === undefined) {
                                    return [determineTestTemplate(tests)];
                                }
                                else if (getMaskSet().validPositions[pos - 1].alternation === tests[0].alternation) {
                                    return [determineTestTemplate(tests)];
                                } else if (getMaskSet().validPositions[pos - 1]) {
                                    return [determineTestTemplate(tests)];
                                }
                            }
                        }
                    }

                    return tests;
                }

                if (pos > -1) {
                    if (ndxIntlzr === undefined) { //determine index initializer
                        var previousPos = pos - 1,
                            test;
                        while ((test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1) {
                            previousPos--;
                        }
                        if (test !== undefined && previousPos > -1) {
                            ndxInitializer = mergeLocators(test);
                            cacheDependency = ndxInitializer.join("");
                            testPos = previousPos;
                        }
                    }
                    if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) { //cacheDependency is set on all tests, just check on the first
                        //console.log("cache hit " + pos + " - " + ndxIntlzr);
                        return filterTests(getMaskSet().tests[pos]);
                    }
                    for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                        var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
                        if ((match && testPos === pos) || testPos > pos) {
                            break;
                        }
                    }
                }
                if (matches.length === 0 || insertStop) {
                    matches.push({
                        match: {
                            fn: null,
                            cardinality: 0,
                            optionality: true,
                            casing: null,
                            def: "",
                            placeholder: ""
                        },
                        locator: [],
                        cd: cacheDependency
                    });
                }

                if (ndxIntlzr !== undefined && getMaskSet().tests[pos]) { //prioritize full tests for caching
                    return filterTests($.extend(true, [], matches));
                }
                getMaskSet().tests[pos] = $.extend(true, [], matches); //set a clone to prevent overwriting some props
                // console.log(pos + " - " + JSON.stringify(matches));
                return filterTests(getMaskSet().tests[pos]);
            }

            function getBufferTemplate() {
                if (getMaskSet()._buffer === undefined) {
                    //generate template
                    getMaskSet()._buffer = getMaskTemplate(false, 1);
                    if (getMaskSet().buffer === undefined) {
                        getMaskSet().buffer = getMaskSet()._buffer.slice();
                    }
                }
                return getMaskSet()._buffer;
            }

            function getBuffer(noCache) {
                if (getMaskSet().buffer === undefined || noCache === true) {
                    getMaskSet().buffer = getMaskTemplate(true, getLastValidPosition(), true);
                }
                return getMaskSet().buffer;
            }

            function refreshFromBuffer(start, end, buffer) {
                var i, p;
                if (start === true) {
                    resetMaskSet();
                    start = 0;
                    end = buffer.length;
                } else {
                    for (i = start; i < end; i++) {
                        delete getMaskSet().validPositions[i];
                    }
                }
                p = start;
                for (i = start; i < end; i++) {
                    resetMaskSet(true); //prevents clobber from the buffer
                    if (buffer[i] !== opts.skipOptionalPartCharacter) {
                        var valResult = isValid(p, buffer[i], true, true);
                        if (valResult !== false) {
                            resetMaskSet(true);
                            p = valResult.caret !== undefined ? valResult.caret : valResult.pos + 1;
                        }
                    }
                }
            }

            function casing(elem, test, pos) {
                switch (opts.casing || test.casing) {
                    case "upper":
                        elem = elem.toUpperCase();
                        break;
                    case "lower":
                        elem = elem.toLowerCase();
                        break;
                    case "title":
                        var posBefore = getMaskSet().validPositions[pos - 1];
                        if (pos === 0 || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE)) {
                            elem = elem.toUpperCase();
                        } else {
                            elem = elem.toLowerCase();
                        }
                        break;
                    default:
                        if ($.isFunction(opts.casing)) {
                            var args = Array.prototype.slice.call(arguments);
                            args.push(getMaskSet().validPositions);
                            elem = opts.casing.apply(this, args);
                        }
                }

                return elem;
            }

            function checkAlternationMatch(altArr1, altArr2, na) {
                var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1),
                    isMatch = false, naArr = na !== undefined ? na.split(",") : [],
                    naNdx;

                //remove no alternate indexes from alternation array
                for (var i = 0; i < naArr.length; i++) {
                    if ((naNdx = altArr1.indexOf(naArr[i])) !== -1) {
                        altArr1.splice(naNdx, 1);
                    }
                }

                for (var alndx = 0; alndx < altArr1.length; alndx++) {
                    if ($.inArray(altArr1[alndx], altArrC) !== -1) {
                        isMatch = true;
                        break;
                    }
                }
                return isMatch;
            }

            function isValid(pos, c, strict, fromSetValid, fromAlternate) { //strict true ~ no correction or autofill
                function isSelection(posObj) {
                    var selection = isRTL ? (posObj.begin - posObj.end) > 1 || ((posObj.begin - posObj.end) === 1) :
                        (posObj.end - posObj.begin) > 1 || ((posObj.end - posObj.begin) === 1);

                    return selection && posObj.begin === 0 && posObj.end === getMaskSet().maskLength ? "full" : selection;
                }

                strict = strict === true; //always set a value to strict to prevent possible strange behavior in the extensions

                var maskPos = pos;
                if (pos.begin !== undefined) { //position was a position object - used to handle a delete by typing over a selection
                    maskPos = isRTL && !isSelection(pos) ? pos.end : pos.begin;
                }

                function _isValid(position, c, strict) {
                    var rslt = false;
                    $.each(getTests(position), function (ndx, tst) {
                            var test = tst.match,
                                loopend = c ? 1 : 0,
                                chrs = "";
                            for (var i = test.cardinality; i > loopend; i--) {
                                chrs += getBufferElement(position - (i - 1));
                            }
                            if (c) {
                                chrs += c;
                            }

                            //make sure the buffer is set and correct
                            getBuffer(true);
                            //return is false or a json object => { pos: ??, c: ??} or true
                            rslt = test.fn != null ?
                                test.fn.test(chrs, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && test.def !== "" ? //non mask
                                    {
                                        c: getPlaceholder(position, test, true) || test.def,
                                        pos: position
                                    } : false;

                            if (rslt !== false) {
                                var elem = rslt.c !== undefined ? rslt.c : c;
                                elem = (elem === opts.skipOptionalPartCharacter && test.fn === null) ?
                                    (getPlaceholder(position, test, true) || test.def) : elem;

                                var validatedPos = position,
                                    possibleModifiedBuffer = getBuffer();

                                if (rslt.remove !== undefined) { //remove position(s)
                                    if (!$.isArray(rslt.remove)) rslt.remove = [rslt.remove];
                                    $.each(rslt.remove.sort(function (a, b) {
                                        return b - a;
                                    }), function (ndx, lmnt) {
                                        stripValidPositions(lmnt, lmnt + 1, true);
                                    });
                                }
                                if (rslt.insert !== undefined) { //insert position(s)
                                    if (!$.isArray(rslt.insert)) rslt.insert = [rslt.insert];
                                    $.each(rslt.insert.sort(function (a, b) {
                                        return a - b;
                                    }), function (ndx, lmnt) {
                                        isValid(lmnt.pos, lmnt.c, true, fromSetValid);
                                    });
                                }

                                if (rslt.refreshFromBuffer) {
                                    var refresh = rslt.refreshFromBuffer;
                                    // strict = true;
                                    refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, possibleModifiedBuffer);
                                    if (rslt.pos === undefined && rslt.c === undefined) {
                                        rslt.pos = getLastValidPosition();
                                        return false; //breakout if refreshFromBuffer && nothing to insert
                                    }
                                    validatedPos = rslt.pos !== undefined ? rslt.pos : position;
                                    if (validatedPos !== position) {
                                        rslt = $.extend(rslt, isValid(validatedPos, elem, true, fromSetValid)); //revalidate new position strict
                                        return false;
                                    }

                                } else if (rslt !== true && rslt.pos !== undefined && rslt.pos !== position) { //their is a position offset
                                    validatedPos = rslt.pos;
                                    refreshFromBuffer(position, validatedPos, getBuffer().slice());
                                    if (validatedPos !== position) {
                                        rslt = $.extend(rslt, isValid(validatedPos, elem, true)); //revalidate new position strict
                                        return false;
                                    }
                                }

                                if (rslt !== true && rslt.pos === undefined && rslt.c === undefined) {
                                    return false; //breakout if nothing to insert
                                }

                                if (ndx > 0) {
                                    resetMaskSet(true);
                                }

                                if (!setValidPosition(validatedPos, $.extend({}, tst, {
                                        "input": casing(elem, test, validatedPos)
                                    }), fromSetValid, isSelection(pos))) {
                                    rslt = false;
                                }
                                return false; //break from $.each
                            }
                        }
                    );
                    return rslt;
                }

                function alternate(pos, c, strict) {
                    var validPsClone = $.extend(true, {}, getMaskSet().validPositions),
                        lastAlt,
                        alternation,
                        isValidRslt = false,
                        altPos, prevAltPos, i, validPos, lAltPos = getLastValidPosition(), altNdxs, decisionPos;
                    //find last modified alternation
                    prevAltPos = getMaskSet().validPositions[lAltPos];
                    for (; lAltPos >= 0; lAltPos--) {
                        altPos = getMaskSet().validPositions[lAltPos];
                        if (altPos && altPos.alternation !== undefined) {
                            lastAlt = lAltPos;
                            alternation = getMaskSet().validPositions[lastAlt].alternation;
                            if (prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) {
                                break;
                            }
                            prevAltPos = altPos;
                        }
                    }
                    if (alternation !== undefined) {
                        decisionPos = parseInt(lastAlt);
                        var decisionTaker = prevAltPos.locator[prevAltPos.alternation || alternation] !== undefined ? prevAltPos.locator[prevAltPos.alternation || alternation] : altNdxs[0]; //no match in the alternations (length mismatch)
                        if (decisionTaker.length > 0) { //no decision taken ~ take first one as decider
                            decisionTaker = decisionTaker.split(",")[0];
                        }
                        var possibilityPos = getMaskSet().validPositions[decisionPos],
                            prevPos = getMaskSet().validPositions[decisionPos - 1];
                        $.each(getTests(decisionPos, prevPos ? prevPos.locator : undefined, decisionPos - 1), function (ndx, test) {
                            altNdxs = test.locator[alternation] ? test.locator[alternation].toString().split(",") : [];
                            for (var mndx = 0; mndx < altNdxs.length; mndx++) {
                                var validInputs = [],
                                    staticInputsBeforePos = 0,
                                    staticInputsBeforePosAlternate = 0,
                                    verifyValidInput = false;
                                if (decisionTaker < altNdxs[mndx] && (test.na === undefined || ($.inArray(altNdxs[mndx], test.na.split(",")) === -1 || $.inArray(decisionTaker.toString(), altNdxs) === -1))) {
                                    getMaskSet().validPositions[decisionPos] = $.extend(true, {}, test);
                                    var possibilities = getMaskSet().validPositions[decisionPos].locator;
                                    getMaskSet().validPositions[decisionPos].locator[alternation] = parseInt(altNdxs[mndx]); //set forced decision
                                    if (test.match.fn == null) {
                                        if (possibilityPos.input !== test.match.def) {
                                            verifyValidInput = true; //verify that the new definition matches the input
                                            if (possibilityPos.generatedInput !== true) {
                                                validInputs.push(possibilityPos.input);
                                            }
                                        }
                                        staticInputsBeforePosAlternate++;
                                        getMaskSet().validPositions[decisionPos].generatedInput = !/[0-9a-bA-Z]/.test(test.match.def);
                                        getMaskSet().validPositions[decisionPos].input = test.match.def;
                                    } else {
                                        getMaskSet().validPositions[decisionPos].input = possibilityPos.input;
                                    }
                                    for (i = decisionPos + 1; i < getLastValidPosition(undefined, true) + 1; i++) {
                                        validPos = getMaskSet().validPositions[i];
                                        if (validPos && validPos.generatedInput !== true && /[0-9a-bA-Z]/.test(validPos.input)) {
                                            validInputs.push(validPos.input);
                                        } else if (i < pos) staticInputsBeforePos++;
                                        delete getMaskSet().validPositions[i];
                                    }
                                    if (verifyValidInput && validInputs[0] === test.match.def) {
                                        validInputs.shift();
                                    }
                                    resetMaskSet(true); //clear getbuffer
                                    isValidRslt = true;
                                    while (validInputs.length > 0) {
                                        var input = validInputs.shift();
                                        if (input !== opts.skipOptionalPartCharacter) {
                                            if (!(isValidRslt = isValid(getLastValidPosition(undefined, true) + 1, input, false, fromSetValid, true))) {
                                                break;
                                            }
                                        }
                                    }

                                    if (isValidRslt) {
                                        getMaskSet().validPositions[decisionPos].locator = possibilities; //reset forceddecision ~ needed for proper delete
                                        var targetLvp = getLastValidPosition(pos) + 1;
                                        for (i = decisionPos + 1; i < getLastValidPosition() + 1; i++) {
                                            validPos = getMaskSet().validPositions[i];
                                            if ((validPos === undefined || validPos.match.fn == null) && i < (pos + (staticInputsBeforePosAlternate - staticInputsBeforePos))) {
                                                staticInputsBeforePosAlternate++;
                                            }
                                        }
                                        pos = pos + (staticInputsBeforePosAlternate - staticInputsBeforePos);
                                        isValidRslt = isValid(pos > targetLvp ? targetLvp : pos, c, strict, fromSetValid, true);
                                    }
                                    if (!isValidRslt) {
                                        resetMaskSet();
                                        getMaskSet().validPositions = $.extend(true, {}, validPsClone);
                                    } else return false; //exit $.each
                                }
                            }
                        });
                    }

                    return isValidRslt;
                }

                //set alternator choice on previous skipped placeholder positions
                function trackbackAlternations(originalPos, newPos) {
                    var vp = getMaskSet().validPositions[newPos];
                    if (vp) {
                        var targetLocator = vp.locator,
                            tll = targetLocator.length;

                        for (var ps = originalPos; ps < newPos; ps++) {
                            if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, true)) {
                                var tests = getTests(ps).slice(),
                                    bestMatch = determineTestTemplate(tests, true),
                                    equality = -1;
                                if (tests[tests.length - 1].match.def === "") tests.pop();
                                $.each(tests, function (ndx, tst) { //find best matching
                                    for (var i = 0; i < tll; i++) {
                                        if (tst.locator[i] !== undefined && checkAlternationMatch(tst.locator[i].toString().split(","), targetLocator[i].toString().split(","), tst.na)) {
                                            if (equality < i) {
                                                equality = i;
                                                bestMatch = tst;
                                            }
                                        } else {
                                            //check if alternationIndex is closer then the current bestmatch
                                            var targetAI = targetLocator[i],
                                                bestMatchAI = bestMatch.locator[i],
                                                tstAI = tst.locator[i];
                                            if ((targetAI - bestMatchAI) > Math.abs(targetAI - tstAI)) {
                                                bestMatch = tst;
                                            }
                                            break;
                                        }
                                    }
                                });
                                bestMatch = $.extend({}, bestMatch, {
                                    "input": getPlaceholder(ps, bestMatch.match, true) || bestMatch.match.def
                                });
                                bestMatch.generatedInput = true;
                                setValidPosition(ps, bestMatch, true);
                                //revalidate the new position to update the locator value
                                getMaskSet().validPositions[newPos] = undefined;
                                _isValid(newPos, vp.input, true);
                            }
                        }
                    }
                }

                function setValidPosition(pos, validTest, fromSetValid, isSelection) {
                    if (isSelection || (opts.insertMode && getMaskSet().validPositions[pos] !== undefined && fromSetValid === undefined)) {
                        //reposition & revalidate others
                        var positionsClone = $.extend(true, {}, getMaskSet().validPositions),
                            lvp = getLastValidPosition(undefined, true),
                            i;
                        for (i = pos; i <= lvp; i++) { //clear selection
                            delete getMaskSet().validPositions[i];
                        }
                        getMaskSet().validPositions[pos] = $.extend(true, {}, validTest);
                        var valid = true,
                            j, vps = getMaskSet().validPositions, needsValidation = false,
                            initialLength = getMaskSet().maskLength;
                        for (i = (j = pos); i <= lvp; i++) {
                            var t = positionsClone[i];
                            if (t !== undefined /*&& (t.generatedInput !== true || t.match.fn === null)*/) {
                                var posMatch = j;
                                while (posMatch < getMaskSet().maskLength && ((t.match.fn === null && vps[i] && (vps[i].match.optionalQuantifier === true || vps[i].match.optionality === true)) || t.match.fn != null)) {
                                    posMatch++;
                                    if (needsValidation === false && positionsClone[posMatch] && positionsClone[posMatch].match.def === t.match.def) { //obvious match
                                        getMaskSet().validPositions[posMatch] = $.extend(true, {}, positionsClone[posMatch]);
                                        getMaskSet().validPositions[posMatch].input = t.input;
                                        fillMissingNonMask(posMatch);
                                        j = posMatch;
                                        valid = true;
                                    } else if (positionCanMatchDefinition(posMatch, t.match.def)) { //validated match
                                        var result = isValid(posMatch, t.input, true, true);
                                        valid = result !== false;
                                        j = (result.caret || result.insert) ? getLastValidPosition() : posMatch;
                                        needsValidation = true;
                                    } else {
                                        valid = t.generatedInput === true;
                                        if (!valid && posMatch >= getMaskSet().maskLength - 1) break;
                                    }
                                    if (getMaskSet().maskLength < initialLength) getMaskSet().maskLength = initialLength; //a bit hacky but the masklength is corrected later on
                                    if (valid) break;
                                }
                            }
                            if (!valid) break;
                        }

                        if (!valid) {
                            getMaskSet().validPositions = $.extend(true, {}, positionsClone);
                            resetMaskSet(true);
                            return false;
                        }
                    }

                    else {
                        getMaskSet().validPositions[pos] = $.extend(true, {}, validTest);
                    }


                    resetMaskSet(true);
                    return true;
                }

                function fillMissingNonMask(maskPos) {
                    //Check for a nonmask before the pos
                    //find previous valid
                    for (var pndx = maskPos - 1; pndx > -1; pndx--) {
                        if (getMaskSet().validPositions[pndx]) break;
                    }
                    ////fill missing nonmask and valid placeholders
                    var testTemplate, testsFromPos;
                    for (pndx++; pndx < maskPos; pndx++) {
                        if (getMaskSet().validPositions[pndx] === undefined && (opts.jitMasking === false || opts.jitMasking > pndx)) {
                            testsFromPos = getTests(pndx, getTestTemplate(pndx - 1).locator, pndx - 1).slice();
                            if (testsFromPos[testsFromPos.length - 1].match.def === "") testsFromPos.pop();
                            testTemplate = determineTestTemplate(testsFromPos);
                            if (testTemplate && (testTemplate.match.def === opts.radixPointDefinitionSymbol || !isMask(pndx, true) ||
                                ($.inArray(opts.radixPoint, getBuffer()) < pndx && testTemplate.match.fn && testTemplate.match.fn.test(getPlaceholder(pndx), getMaskSet(), pndx, false, opts)))) {
                                result = _isValid(pndx, getPlaceholder(pndx, testTemplate.match, true) || (testTemplate.match.fn == null ? testTemplate.match.def : (getPlaceholder(pndx) !== "" ? getPlaceholder(pndx) : getBuffer()[pndx])), true);
                                if (result !== false) {
                                    getMaskSet().validPositions[result.pos || pndx].generatedInput = true;
                                }
                            }
                        }
                    }
                }

                var result = true,
                    positionsClone = $.extend(true, {}, getMaskSet().validPositions); //clone the currentPositions

                if ($.isFunction(opts.preValidation) && !strict && fromSetValid !== true) {
                    result = opts.preValidation(getBuffer(), maskPos, c, isSelection(pos), opts);
                }
                if (result === true) {
                    fillMissingNonMask(maskPos);

                    if (isSelection(pos)) {
                        handleRemove(undefined, Inputmask.keyCode.DELETE, pos, true);
                        maskPos = getMaskSet().p;
                    }

                    if (maskPos < getMaskSet().maskLength && (maxLength === undefined || maskPos < maxLength)) {
                        result = _isValid(maskPos, c, strict);
                        if ((!strict || fromSetValid === true) && result === false) {
                            var currentPosValid = getMaskSet().validPositions[maskPos];
                            if (currentPosValid && currentPosValid.match.fn === null && (currentPosValid.match.def === c || c === opts.skipOptionalPartCharacter)) {
                                result = {
                                    "caret": seekNext(maskPos)
                                };
                            } else if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && !isMask(maskPos, true)) { //does the input match on a further position?
                                for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) {
                                    // if (!isMask(nPos, true)) {
                                    // 	continue;
                                    // }
                                    result = _isValid(nPos, c, strict);
                                    if (result !== false) {
                                        trackbackAlternations(maskPos, result.pos !== undefined ? result.pos : nPos);
                                        maskPos = nPos;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (result === false && opts.keepStatic && !strict && fromAlternate !== true) { //try fuzzy alternator logic
                        result = alternate(maskPos, c, strict);
                    }
                    if (result === true) {
                        result = {
                            "pos": maskPos
                        };
                    }
                }
                if ($.isFunction(opts.postValidation) && result !== false && !strict && fromSetValid !== true) {
                    var postResult = opts.postValidation(getBuffer(true), result, opts);
                    if (postResult.refreshFromBuffer && postResult.buffer) {
                        var refresh = postResult.refreshFromBuffer;
                        refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, postResult.buffer);
                    }
                    result = postResult === true ? result : postResult;
                }

                if (result && result.pos === undefined) {
                    result.pos = maskPos;
                }

                if (result === false) {
                    resetMaskSet(true);
                    getMaskSet().validPositions = $.extend(true, {}, positionsClone); //revert validation changes
                }

                return result;
            }

            function isMask(pos, strict) {
                var test = getTestTemplate(pos).match;
                if (test.def === "") test = getTest(pos).match;

                if (test.fn != null) {
                    return test.fn;
                } else if (strict !== true && pos > -1) {
                    var tests = getTests(pos);
                    return tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0);
                }
                return false;
            }

            function seekNext(pos, newBlock) {
                var maskL = getMaskSet().maskLength;
                if (pos >= maskL) return maskL;
                var position = pos;
                if (getTests(maskL + 1).length > 1) {
                    getMaskTemplate(true, maskL + 1, true);
                    maskL = getMaskSet().maskLength;
                }
                while (++position < maskL &&
                ((newBlock === true && (getTest(position).match.newBlockMarker !== true || !isMask(position))) ||
                (newBlock !== true && !isMask(position)))) {
                }
                return position;
            }

            function seekPrevious(pos, newBlock) {
                var position = pos, tests;
                if (position <= 0) return 0;

                while (--position > 0 &&
                ((newBlock === true && getTest(position).match.newBlockMarker !== true) ||
                (newBlock !== true && !isMask(position) &&
                (tests = getTests(position), tests.length < 2 || (tests.length === 2 && tests[1].match.def === ""))))) {
                }

                return position;
            }

            function getBufferElement(position) {
                return getMaskSet().validPositions[position] === undefined ? getPlaceholder(position) : getMaskSet().validPositions[position].input;
            }

            function writeBuffer(input, buffer, caretPos, event, triggerInputEvent) {
                if (event && $.isFunction(opts.onBeforeWrite)) {
                    var result = opts.onBeforeWrite(event, buffer, caretPos, opts);
                    if (result) {
                        if (result.refreshFromBuffer) {
                            var refresh = result.refreshFromBuffer;
                            refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, result.buffer || buffer);
                            buffer = getBuffer(true);
                        }
                        //only alter when intented !== undefined
                        if (caretPos !== undefined) caretPos = result.caret !== undefined ? result.caret : caretPos;
                    }
                }
                if (input !== undefined) {
                    input.inputmask._valueSet(buffer.join(""));
                    if (caretPos !== undefined && (event === undefined || event.type !== "blur")) {
                        if (android && event.type === "input") {
                            setTimeout(function () {
                                caret(input, caretPos);
                            }, 0);
                        } else caret(input, caretPos);
                    } else renderColorMask(input, buffer, caretPos);
                    if (triggerInputEvent === true) {
                        skipInputEvent = true;
                        $(input).trigger("input");
                    }
                }
            }

            function getPlaceholder(pos, test, returnPL) {
                test = test || getTest(pos).match;
                if (test.placeholder !== undefined || returnPL === true) {
                    return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
                } else if (test.fn === null) {
                    if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {
                        var tests = getTests(pos),
                            staticAlternations = [],
                            prevTest;
                        if (tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
                            for (var i = 0; i < tests.length; i++) {
                                if (tests[i].match.optionality !== true && tests[i].match.optionalQuantifier !== true &&
                                    (tests[i].match.fn === null || (prevTest === undefined || tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, true, opts) !== false))) {
                                    staticAlternations.push(tests[i]);
                                    if (tests[i].match.fn === null) prevTest = tests[i];
                                    if (staticAlternations.length > 1) {
                                        if (/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)) {
                                            return opts.placeholder.charAt(pos % opts.placeholder.length);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return test.def;
                }

                return opts.placeholder.charAt(pos % opts.placeholder.length);
            }

            function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
                var inputValue = nptvl.slice(),
                    charCodes = "",
                    initialNdx = 0, result = undefined;

                // console.log(nptvl);

                function isTemplateMatch(ndx, charCodes) {
                    var charCodeNdx = getBufferTemplate().slice(ndx, seekNext(ndx)).join("").indexOf(charCodes);
                    return charCodeNdx !== -1 && !isMask(ndx) && getTest(ndx).match.nativeDef === charCodes.charAt(charCodes.length - 1);
                }

                resetMaskSet();
                getMaskSet().p = seekNext(-1);
                // if (writeOut) input.inputmask._valueSet(""); //initial clear

                if (!strict) {
                    if (opts.autoUnmask !== true) {
                        var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""),
                            matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));
                        if (matches && matches.length > 0) {
                            inputValue.splice(0, matches.length * staticInput.length);
                            initialNdx = seekNext(initialNdx);
                        }
                    } else {
                        initialNdx = seekNext(initialNdx);
                    }
                }
                $.each(inputValue, function (ndx, charCode) {
                    // console.log(charCode);
                    if (charCode !== undefined) { //inputfallback strips some elements out of the inputarray.  $.each logically presents them as undefined
                        var keypress = new $.Event("_checkval");
                        keypress.which = charCode.charCodeAt(0);
                        charCodes += charCode;
                        var lvp = getLastValidPosition(undefined, true),
                            lvTest = getMaskSet().validPositions[lvp],
                            nextTest = getTestTemplate(lvp + 1, lvTest ? lvTest.locator.slice() : undefined, lvp);
                        if (!isTemplateMatch(initialNdx, charCodes) || strict || opts.autoUnmask) {
                            var pos = strict ? ndx : (nextTest.match.fn == null && nextTest.match.optionality && (lvp + 1) < getMaskSet().p ? lvp + 1 : getMaskSet().p);
                            result = EventHandlers.keypressEvent.call(input, keypress, true, false, strict, pos);
                            initialNdx = pos + 1;
                            charCodes = "";
                        } else {
                            result = EventHandlers.keypressEvent.call(input, keypress, true, false, true, lvp + 1);
                        }
                        if (result !== false && !strict && $.isFunction(opts.onBeforeWrite)) {
                            var fp = result.forwardPosition;
                            result = opts.onBeforeWrite(keypress, getBuffer(), result.forwardPosition, opts);
                            result.forwardPosition = fp;
                            if (result && result.refreshFromBuffer) {
                                var refresh = result.refreshFromBuffer;
                                refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, result.buffer);
                                resetMaskSet(true);
                                if (result.caret) {
                                    getMaskSet().p = result.caret;
                                    result.forwardPosition = result.caret;
                                }
                            }
                        }
                    }
                });
                if (writeOut) {
                    var caretPos = undefined;
                    if (document.activeElement === input && result) {
                        caretPos = opts.numericInput ? seekPrevious(result.forwardPosition) : result.forwardPosition;
                    }

                    writeBuffer(input, getBuffer(), caretPos, initiatingEvent || new $.Event("checkval"), initiatingEvent && initiatingEvent.type === "input");
                }
            }

            function unmaskedvalue(input) {
                if (input) {
                    if (input.inputmask === undefined) {
                        return input.value;
                    }
                    if (input.inputmask && input.inputmask.refreshValue) { //forced refresh from the value form.reset
                        EventHandlers.setValueEvent.call(input);
                    }
                }
                var umValue = [],
                    vps = getMaskSet().validPositions;
                for (var pndx in vps) {
                    if (vps[pndx].match && vps[pndx].match.fn != null) {
                        umValue.push(vps[pndx].input);
                    }
                }
                var unmaskedValue = umValue.length === 0 ? "" : (isRTL ? umValue.reverse() : umValue).join("");
                if ($.isFunction(opts.onUnMask)) {
                    var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
                    unmaskedValue = opts.onUnMask(bufferValue, unmaskedValue, opts);
                }
                return unmaskedValue;
            }

            function caret(input, begin, end, notranslate) {
                function translatePosition(pos) {
                    if (notranslate !== true && isRTL && typeof pos === "number" && (!opts.greedy || opts.placeholder !== "")) {
                        var bffrLght = getBuffer().join("").length; //join is needed because sometimes we get an empty buffer element which must not be counted for the caret position (numeric alias)
                        pos = bffrLght - pos;
                    }
                    return pos;
                }

                var range;
                if (begin !== undefined) {
                    if (begin.begin !== undefined) {
                        end = begin.end;
                        begin = begin.begin;
                    }
                    if (typeof begin === "number") {
                        begin = translatePosition(begin);
                        end = translatePosition(end);
                        end = (typeof end == "number") ? end : begin;
                        // if (!$(input).is(":visible")) {
                        // 	return;
                        // }

                        var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                        input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0;

                        if (!mobile && opts.insertMode === false && begin === end) end++; //set visualization for insert/overwrite mode
                        if (input.setSelectionRange) {
                            input.selectionStart = begin;
                            input.selectionEnd = end;
                        } else if (window.getSelection) {
                            range = document.createRange();
                            if (input.firstChild === undefined || input.firstChild === null) {
                                var textNode = document.createTextNode("");
                                input.appendChild(textNode);
                            }
                            range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length);
                            range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length);
                            range.collapse(true);
                            var sel = window.getSelection();
                            sel.removeAllRanges();
                            sel.addRange(range);
                            //input.focus();
                        } else if (input.createTextRange) {
                            range = input.createTextRange();
                            range.collapse(true);
                            range.moveEnd("character", end);
                            range.moveStart("character", begin);
                            range.select();

                        }
                        renderColorMask(input, undefined, {begin: begin, end: end});
                    }
                } else {
                    if (input.setSelectionRange) {
                        begin = input.selectionStart;
                        end = input.selectionEnd;
                    } else if (window.getSelection) {
                        range = window.getSelection().getRangeAt(0);
                        if (range.commonAncestorContainer.parentNode === input || range.commonAncestorContainer === input) {
                            begin = range.startOffset;
                            end = range.endOffset;
                        }
                    } else if (document.selection && document.selection.createRange) {
                        range = document.selection.createRange();
                        begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length);
                        end = begin + range.text.length;
                    }

                    /*eslint-disable consistent-return */
                    return {
                        "begin": translatePosition(begin),
                        "end": translatePosition(end)
                    };
                    /*eslint-enable consistent-return */
                }
            }

            function determineLastRequiredPosition(returnDefinition) {
                var buffer = getBuffer(),
                    bl = buffer.length,
                    pos, lvp = getLastValidPosition(),
                    positions = {},
                    lvTest = getMaskSet().validPositions[lvp],
                    ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined,
                    testPos;
                for (pos = lvp + 1; pos < buffer.length; pos++) {
                    testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                    ndxIntlzr = testPos.locator.slice();
                    positions[pos] = $.extend(true, {}, testPos);
                }

                var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;
                for (pos = bl - 1; pos > lvp; pos--) {
                    testPos = positions[pos];
                    if ((testPos.match.optionality ||
                        (testPos.match.optionalQuantifier && testPos.match.newBlockMarker) ||
                        (lvTestAlt &&
                        ((lvTestAlt !== positions[pos].locator[lvTest.alternation] && testPos.match.fn != null) ||
                        (testPos.match.fn === null && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && getTests(pos)[0].def !== "")))) &&
                        buffer[pos] === getPlaceholder(pos, testPos.match)) {
                        bl--;
                    } else break;
                }
                return returnDefinition ? {
                    "l": bl,
                    "def": positions[bl] ? positions[bl].match : undefined
                } : bl;
            }

            function clearOptionalTail(buffer) {
                var rl = determineLastRequiredPosition(),
                    validPos, bl = buffer.length;

                var lv = getMaskSet().validPositions[getLastValidPosition()];
                while (rl < bl &&
                !isMask(rl, true) &&
                (validPos = (lv !== undefined ? getTestTemplate(rl, lv.locator.slice(""), lv) : getTest(rl))) &&
                validPos.match.optionality !== true &&
                ((validPos.match.optionalQuantifier !== true && validPos.match.newBlockMarker !== true) || (rl + 1 === bl &&
                (lv !== undefined ? getTestTemplate(rl + 1, lv.locator.slice(""), lv) : getTest(rl + 1)).match.def === ""))) {
                    rl++;
                }

                //exceptionally strip from the validatedPositions
                while ((validPos = getMaskSet().validPositions[rl - 1]) && validPos && validPos.match.optionality && validPos.input === opts.skipOptionalPartCharacter) {
                    rl--;
                }
                buffer.splice(rl);
                return buffer;
            }

            function isComplete(buffer) { //return true / false / undefined (repeat *)
                if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
                if (opts.repeat === "*") return undefined;
                var complete = false,
                    lrp = determineLastRequiredPosition(true),
                    aml = seekPrevious(lrp.l);

                if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                    complete = true;
                    for (var i = 0; i <= aml; i++) {
                        var test = getTestTemplate(i).match;
                        if ((test.fn !== null && getMaskSet().validPositions[i] === undefined && test.optionality !== true && test.optionalQuantifier !== true) || (test.fn === null && buffer[i] !== getPlaceholder(i, test))) {
                            complete = false;
                            break;
                        }
                    }
                }
                return complete;
            }


            function handleRemove(input, k, pos, strict, fromIsValid) {
                function generalize() {
                    if (opts.keepStatic) {
                        var validInputs = [],
                            lastAlt = getLastValidPosition(-1, true),
                            positionsClone = $.extend(true, {}, getMaskSet().validPositions),
                            prevAltPos = getMaskSet().validPositions[lastAlt];
                        //find last alternation
                        for (; lastAlt >= 0; lastAlt--) {
                            var altPos = getMaskSet().validPositions[lastAlt];
                            if (altPos) {
                                if (altPos.generatedInput !== true && /[0-9a-bA-Z]/.test(altPos.input)) {
                                    validInputs.push(altPos.input);
                                }
                                delete getMaskSet().validPositions[lastAlt];
                                if (altPos.alternation !== undefined && altPos.locator[altPos.alternation] !== prevAltPos.locator[altPos.alternation]) {
                                    break;
                                }
                                prevAltPos = altPos;
                            }
                        }

                        if (lastAlt > -1) {
                            getMaskSet().p = seekNext(getLastValidPosition(-1, true));
                            while (validInputs.length > 0) {
                                var keypress = new $.Event("keypress");
                                keypress.which = validInputs.pop().charCodeAt(0);
                                // eslint-disable-next-line no-use-before-define
                                EventHandlers.keypressEvent.call(input, keypress, true, false, false, getMaskSet().p);

                            }
                        } else getMaskSet().validPositions = $.extend(true, {}, positionsClone); //restore original positions
                    }
                }

                if (opts.numericInput || isRTL) {
                    if (k === Inputmask.keyCode.BACKSPACE) {
                        k = Inputmask.keyCode.DELETE;
                    } else if (k === Inputmask.keyCode.DELETE) {
                        k = Inputmask.keyCode.BACKSPACE;
                    }

                    if (isRTL) {
                        var pend = pos.end;
                        pos.end = pos.begin;
                        pos.begin = pend;
                    }
                }

                if (k === Inputmask.keyCode.BACKSPACE && (pos.end - pos.begin < 1 || opts.insertMode === false)) {
                    pos.begin = seekPrevious(pos.begin);
                    if (getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator) {
                        pos.begin--;
                    }
                } else if (k === Inputmask.keyCode.DELETE && pos.begin === pos.end) {
                    pos.end = isMask(pos.end, true) && (getMaskSet().validPositions[pos.end] && getMaskSet().validPositions[pos.end].input !== opts.radixPoint  ) ?
                        pos.end + 1 :
                        seekNext(pos.end) + 1;
                    if (getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator) {
                        pos.end++;
                    }
                }

                stripValidPositions(pos.begin, pos.end, false, strict);
                if (strict !== true) {
                    generalize(); //revert the alternation
                }
                var lvp = getLastValidPosition(pos.begin, true);
                if (lvp < pos.begin) {
                    //if (lvp === -1) resetMaskSet();
                    getMaskSet().p = seekNext(lvp);
                } else if (strict !== true) {
                    getMaskSet().p = pos.begin;
                    if (fromIsValid !== true) {
                        //put position on first valid from pos.begin ~ #1351
                        while (getMaskSet().p < lvp && getMaskSet().validPositions[getMaskSet().p] === undefined) {
                            getMaskSet().p++;
                        }
                    }
                }
            }

            var EventRuler = {
                on: function (input, eventName, eventHandler) {
                    var ev = function (e) {
                        // console.log("triggered " + e.type);

                        if (this.inputmask === undefined && this.nodeName !== "FORM") { //happens when cloning an object with jquery.clone
                            var imOpts = $.data(this, "_inputmask_opts");
                            if (imOpts) (new Inputmask(imOpts)).mask(this);
                            else EventRuler.off(this);
                        } else if (e.type !== "setvalue" && this.nodeName !== "FORM" && (this.disabled || (this.readOnly && !(e.type === "keydown" && (e.ctrlKey && e.keyCode === 67) || (opts.tabThrough === false && e.keyCode === Inputmask.keyCode.TAB))))) {
                            e.preventDefault();
                        } else {
                            switch (e.type) {
                                case "input":
                                    if (skipInputEvent === true) {
                                        skipInputEvent = false;
                                        return e.preventDefault();
                                    }
                                    break;
                                case "keydown":
                                    //Safari 5.1.x - modal dialog fires keypress twice workaround
                                    skipKeyPressEvent = false;
                                    skipInputEvent = false;
                                    break;
                                case "keypress":
                                    if (skipKeyPressEvent === true) {
                                        return e.preventDefault();
                                    }
                                    skipKeyPressEvent = true;
                                    break;
                                case "click":
                                    if (iemobile || iphone) {
                                        var that = this, args = arguments;
                                        setTimeout(function () {
                                            eventHandler.apply(that, args);
                                        }, 0);
                                        return false;
                                    }
                                    break;
                            }
                            // console.log("executed " + e.type);
                            var returnVal = eventHandler.apply(this, arguments);
                            if (returnVal === false) {
                                e.preventDefault();
                                e.stopPropagation();
                            }
                            return returnVal;
                        }
                    };
                    //keep instance of the event
                    input.inputmask.events[eventName] = input.inputmask.events[eventName] || [];
                    input.inputmask.events[eventName].push(ev);

                    if ($.inArray(eventName, ["submit", "reset"]) !== -1) {
                        if (input.form != null) $(input.form).on(eventName, ev);
                    } else {
                        $(input).on(eventName, ev);
                    }
                },
                off: function (input, event) {
                    if (input.inputmask && input.inputmask.events) {
                        var events;
                        if (event) {
                            events = [];
                            events[event] = input.inputmask.events[event];
                        } else {
                            events = input.inputmask.events;
                        }
                        $.each(events, function (eventName, evArr) {
                            while (evArr.length > 0) {
                                var ev = evArr.pop();
                                if ($.inArray(eventName, ["submit", "reset"]) !== -1) {
                                    if (input.form != null) $(input.form).off(eventName, ev);
                                } else {
                                    $(input).off(eventName, ev);
                                }
                            }
                            delete input.inputmask.events[eventName];
                        });
                    }
                }
            };
            var EventHandlers = {
                keydownEvent: function (e) {
                    function isInputEventSupported(eventName) {
                        var el = document.createElement("input"),
                            evName = "on" + eventName,
                            isSupported = (evName in el);
                        if (!isSupported) {
                            el.setAttribute(evName, "return;");
                            isSupported = typeof el[evName] == "function";
                        }
                        el = null;
                        return isSupported;
                    }

                    var input = this,
                        $input = $(input),
                        k = e.keyCode,
                        pos = caret(input);

                    //backspace, delete, and escape get special treatment
                    if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || (iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI) || (e.ctrlKey && k === Inputmask.keyCode.X && !isInputEventSupported("cut"))) { //backspace/delete
                        e.preventDefault(); //stop default action but allow propagation
                        handleRemove(input, k, pos);
                        writeBuffer(input, getBuffer(true), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join(""));
                        if (input.inputmask._valueGet() === getBufferTemplate().join("")) {
                            $input.trigger("cleared");
                        } else if (isComplete(getBuffer()) === true) {
                            $input.trigger("complete");
                        }
                    } else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) { //when END or PAGE_DOWN pressed set position at lastmatch
                        e.preventDefault();
                        var caretPos = seekNext(getLastValidPosition());
                        if (!opts.insertMode && caretPos === getMaskSet().maskLength && !e.shiftKey) caretPos--;
                        caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, true);
                    } else if ((k === Inputmask.keyCode.HOME && !e.shiftKey) || k === Inputmask.keyCode.PAGE_UP) { //Home or page_up
                        e.preventDefault();
                        caret(input, 0, e.shiftKey ? pos.begin : 0, true);
                    } else if (((opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE) || (k === 90 && e.ctrlKey)) && e.altKey !== true) { //escape && undo && #762
                        checkVal(input, true, false, undoValue.split(""));
                        $input.trigger("click");
                    } else if (k === Inputmask.keyCode.INSERT && !(e.shiftKey || e.ctrlKey)) { //insert
                        opts.insertMode = !opts.insertMode;
                        caret(input, !opts.insertMode && pos.begin === getMaskSet().maskLength ? pos.begin - 1 : pos.begin);
                    } else if (opts.tabThrough === true && k === Inputmask.keyCode.TAB) {
                        if (e.shiftKey === true) {
                            if (getTest(pos.begin).match.fn === null) {
                                pos.begin = seekNext(pos.begin);
                            }
                            pos.end = seekPrevious(pos.begin, true);
                            pos.begin = seekPrevious(pos.end, true);
                        } else {
                            pos.begin = seekNext(pos.begin, true);
                            pos.end = seekNext(pos.begin, true);
                            if (pos.end < getMaskSet().maskLength) pos.end--;
                        }
                        if (pos.begin < getMaskSet().maskLength) {
                            e.preventDefault();
                            caret(input, pos.begin, pos.end);
                        }
                    } else if (!e.shiftKey) {
                        if (opts.insertMode === false) {
                            if (k === Inputmask.keyCode.RIGHT) {
                                setTimeout(function () {
                                    var caretPos = caret(input);
                                    caret(input, caretPos.begin);
                                }, 0);
                            } else if (k === Inputmask.keyCode.LEFT) {
                                setTimeout(function () {
                                    var caretPos = caret(input);
                                    caret(input, isRTL ? caretPos.begin + 1 : caretPos.begin - 1);
                                }, 0);
                            }
                        }
                    }
                    opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts);
                    ignorable = $.inArray(k, opts.ignorables) !== -1;
                },
                keypressEvent: function (e, checkval, writeOut, strict, ndx) {
                    var input = this,
                        $input = $(input),
                        k = e.which || e.charCode || e.keyCode;

                    if (checkval !== true && (!(e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable))) {
                        if (k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("")) {
                            undoValue = getBuffer().join("");
                            // e.preventDefault();
                            setTimeout(function () {
                                $input.trigger("change");
                            }, 0);
                        }
                        return true;
                    } else {
                        if (k) {
                            //special treat the decimal separator
                            if (k === 46 && e.shiftKey === false && opts.radixPoint !== "") k = opts.radixPoint.charCodeAt(0);
                            var pos = checkval ? {
                                    begin: ndx,
                                    end: ndx
                                } : caret(input),
                                forwardPosition, c = String.fromCharCode(k);

                            getMaskSet().writeOutBuffer = true;
                            var valResult = isValid(pos, c, strict);
                            if (valResult !== false) {
                                resetMaskSet(true);
                                forwardPosition = valResult.caret !== undefined ? valResult.caret : checkval ? valResult.pos + 1 : seekNext(valResult.pos);
                                getMaskSet().p = forwardPosition; //needed for checkval
                            }

                            if (writeOut !== false) {
                                setTimeout(function () {
                                    opts.onKeyValidation.call(input, k, valResult, opts);
                                }, 0);
                                if (getMaskSet().writeOutBuffer && valResult !== false) {
                                    var buffer = getBuffer();
                                    writeBuffer(input, buffer, (opts.numericInput && valResult.caret === undefined) ? seekPrevious(forwardPosition) : forwardPosition, e, checkval !== true);
                                    if (checkval !== true) {
                                        setTimeout(function () { //timeout needed for IE
                                            if (isComplete(buffer) === true) $input.trigger("complete");
                                        }, 0);
                                    }
                                }
                            }

                            e.preventDefault();

                            if (checkval) {
                                if (valResult !== false) valResult.forwardPosition = forwardPosition;
                                return valResult;
                            }
                        }
                    }
                },
                pasteEvent: function (e) {
                    var input = this,
                        ev = e.originalEvent || e,
                        $input = $(input),
                        inputValue = input.inputmask._valueGet(true),
                        caretPos = caret(input),
                        tempValue;

                    if (isRTL) {
                        tempValue = caretPos.end;
                        caretPos.end = caretPos.begin;
                        caretPos.begin = tempValue;
                    }

                    var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
                        valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);

                    if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("")) valueBeforeCaret = "";
                    if (valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("")) valueAfterCaret = "";
                    if (isRTL) {
                        tempValue = valueBeforeCaret;
                        valueBeforeCaret = valueAfterCaret;
                        valueAfterCaret = tempValue;
                    }

                    if (window.clipboardData && window.clipboardData.getData) { // IE
                        inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;
                    } else if (ev.clipboardData && ev.clipboardData.getData) {
                        inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;
                    } else return true; //allow native paste event as fallback ~ masking will continue by inputfallback

                    var pasteValue = inputValue;
                    if ($.isFunction(opts.onBeforePaste)) {
                        pasteValue = opts.onBeforePaste(inputValue, opts);
                        if (pasteValue === false) {
                            return e.preventDefault();
                        }
                        if (!pasteValue) {
                            pasteValue = inputValue;
                        }
                    }
                    checkVal(input, false, false, isRTL ? pasteValue.split("").reverse() : pasteValue.toString().split(""));
                    writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join(""));
                    if (isComplete(getBuffer()) === true) {
                        $input.trigger("complete");
                    }

                    return e.preventDefault();
                },
                inputFallBackEvent: function (e) { //fallback when keypress is not triggered
                    function repositionCaret(input, frontPart, backPart) {
                        var targetPos = caret(input).begin, currentValue = input.inputmask._valueGet(),
                            pos = currentValue.indexOf(frontPart), currentPos = targetPos;
                        if (pos === 0 && targetPos !== frontPart.length) {
                            targetPos = frontPart.length;
                        } else {
                            while (currentValue.match(Inputmask.escapeRegex(backPart) + "$") === null) {
                                backPart = backPart.substr(1);
                            }
                            var pos2 = currentValue.indexOf(backPart);
                            if (pos2 !== -1 && backPart !== "" && targetPos > pos2 && pos2 > pos) {
                                targetPos = pos2;
                            }
                        }

                        if (!isMask(targetPos)) targetPos = seekNext(targetPos);
                        if (currentPos !== targetPos) {
                            caret(input, targetPos);
                            if (android) { //caret is set by android after inputevent
                                setTimeout(function () {
                                    caret(input, targetPos);
                                }, 0);
                            }
                        }
                    }

                    var input = this,
                        inputValue = input.inputmask._valueGet();

                    if (getBuffer().join("") !== inputValue) {
                        var caretPos = caret(input);
                        //radixpoint tweak
                        if (inputValue.charAt(caretPos.begin - 1) === "." && opts.radixPoint !== "") {
                            inputValue = inputValue.split("");
                            inputValue[caretPos.begin - 1] = opts.radixPoint.charAt(0);
                            inputValue = inputValue.join("");
                        }

                        if (inputValue.charAt(caretPos.begin - 1) === opts.radixPoint && inputValue.length > getBuffer().length) {
                            var keypress = new $.Event("keypress");
                            keypress.which = opts.radixPoint.charCodeAt(0);
                            EventHandlers.keypressEvent.call(input, keypress, true, true, false, caretPos.begin);
                            return false;

                        }

                        inputValue = inputValue.replace(new RegExp("(" + Inputmask.escapeRegex(getBufferTemplate().join("")) + ")*"), "");

                        if (iemobile) { //iemobile just set the character at the end althought the caret position is correctly set
                            var inputChar = inputValue.replace(getBuffer().join(""), "");
                            if (inputChar.length === 1) {
                                var keypress = new $.Event("keypress");
                                keypress.which = inputChar.charCodeAt(0);
                                EventHandlers.keypressEvent.call(input, keypress, true, true, false, getMaskSet().validPositions[caretPos.begin - 1] ? caretPos.begin : caretPos.begin - 1);
                                return false;
                            }
                        }

                        if (caretPos.begin > inputValue.length) {
                            caret(input, inputValue.length);
                            caretPos = caret(input);
                        }
                        //detect & treat possible backspace before static
                        if ((getBuffer().length - inputValue.length) === 1 && inputValue.charAt(caretPos.begin) !== getBuffer()[caretPos.begin] && inputValue.charAt(caretPos.begin + 1) !== getBuffer()[caretPos.begin] && !isMask(caretPos.begin)) {
                            e.keyCode = Inputmask.keyCode.BACKSPACE;
                            EventHandlers.keydownEvent.call(input, e);
                        } else {
                            var stickyParts = [],
                                bufferTemplate = getBufferTemplate().join("");
                            stickyParts.push(inputValue.substr(0, caretPos.begin));
                            stickyParts.push(inputValue.substr(caretPos.begin));

                            while (inputValue.match(Inputmask.escapeRegex(bufferTemplate) + "$") === null) {
                                bufferTemplate = bufferTemplate.slice(1);
                            }
                            inputValue = inputValue.replace(bufferTemplate, "");
                            if ($.isFunction(opts.onBeforeMask)) inputValue = opts.onBeforeMask(inputValue, opts) || inputValue;

                            checkVal(input, true, false, inputValue.split(""), e);
                            repositionCaret(input, stickyParts[0], stickyParts[1]);

                            if (isComplete(getBuffer()) === true) {
                                $(input).trigger("complete");
                            }
                        }
                        e.preventDefault();
                    }
                },
                setValueEvent: function (e) {
                    this.inputmask.refreshValue = false;
                    var input = this,
                        value = input.inputmask._valueGet(true);

                    if ($.isFunction(opts.onBeforeMask)) value = opts.onBeforeMask(value, opts) || value;
                    value = value.split("");
                    checkVal(input, true, false, isRTL ? value.reverse() : value);
                    undoValue = getBuffer().join("");
                    if ((opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("")) {
                        input.inputmask._valueSet("");
                    }
                }

                ,
                focusEvent: function (e) {
                    var input = this,
                        nptValue = input.inputmask._valueGet();
                    if (opts.showMaskOnFocus && (!opts.showMaskOnHover || (opts.showMaskOnHover && nptValue === ""))) {
                        if (input.inputmask._valueGet() !== getBuffer().join("")) {
                            writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()));
                        } else if (mouseEnter === false) { //only executed on focus without mouseenter
                            caret(input, seekNext(getLastValidPosition()));
                        }
                    }
                    if (opts.positionCaretOnTab === true && mouseEnter === false) {
                        writeBuffer(input, getBuffer(), caret(input));
                        EventHandlers.clickEvent.apply(input, [e, true]);
                    }
                    undoValue = getBuffer().join("");
                }
                ,
                mouseleaveEvent: function (e) {
                    var input = this;
                    mouseEnter = false;
                    if (opts.clearMaskOnLostFocus && document.activeElement !== input) {
                        var buffer = getBuffer().slice(),
                            nptValue = input.inputmask._valueGet();
                        if (nptValue !== input.getAttribute("placeholder") && nptValue !== "") {
                            if (getLastValidPosition() === -1 && nptValue === getBufferTemplate().join("")) {
                                buffer = [];
                            } else { //clearout optional tail of the mask
                                clearOptionalTail(buffer);
                            }
                            writeBuffer(input, buffer);
                        }
                    }
                }
                ,
                clickEvent: function (e, tabbed) {
                    function doRadixFocus(clickPos) {
                        if (opts.radixPoint !== "") {
                            var vps = getMaskSet().validPositions;
                            if (vps[clickPos] === undefined || (vps[clickPos].input === getPlaceholder(clickPos))) {
                                if (clickPos < seekNext(-1)) return true;
                                var radixPos = $.inArray(opts.radixPoint, getBuffer());
                                if (radixPos !== -1) {
                                    for (var vp in vps) {
                                        if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) {
                                            return false;
                                        }
                                    }
                                    return true;
                                }
                            }
                        }
                        return false;
                    }

                    var input = this;
                    setTimeout(function () { //needed for Chrome ~ initial selection clears after the clickevent
                        if (document.activeElement === input) {
                            var selectedCaret = caret(input);
                            if (tabbed) {
                                if (isRTL) {
                                    selectedCaret.end = selectedCaret.begin;
                                }
                                else {
                                    selectedCaret.begin = selectedCaret.end;
                                }
                            }
                            if (selectedCaret.begin === selectedCaret.end) {
                                switch (opts.positionCaretOnClick) {
                                    case "none":
                                        break;
                                    case "radixFocus":
                                        if (doRadixFocus(selectedCaret.begin)) {
                                            var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                                            caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);
                                            break;
                                        }
                                    default: //lvp:
                                        var clickPosition = selectedCaret.begin,
                                            lvclickPosition = getLastValidPosition(clickPosition, true),
                                            lastPosition = seekNext(lvclickPosition);
                                        if (clickPosition < lastPosition) {
                                            caret(input, !isMask(clickPosition) && !isMask(clickPosition - 1) ? seekNext(clickPosition) : clickPosition);
                                        } else {
                                            var placeholder = getPlaceholder(lastPosition),
                                                lvp = getMaskSet().validPositions[lvclickPosition],
                                                tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : undefined, lvp);
                                            if ((placeholder !== "" && getBuffer()[lastPosition] !== placeholder && tt.match.optionalQuantifier !== true) || (!isMask(lastPosition) && tt.match.def === placeholder)) {
                                                var newPos = seekNext(lastPosition);
                                                if (clickPosition >= newPos)
                                                    lastPosition = newPos;
                                            }
                                            caret(input, lastPosition);
                                        }
                                        break;
                                }
                            }
                        }
                    }, 0);
                }
                ,
                dblclickEvent: function (e) {
                    var input = this;
                    setTimeout(function () {
                        caret(input, 0, seekNext(getLastValidPosition()));
                    }, 0);
                },
                cutEvent: function (e) {
                    var input = this,
                        $input = $(input),
                        pos = caret(input),
                        ev = e.originalEvent || e;

                    //correct clipboardData
                    var clipboardData = window.clipboardData || ev.clipboardData,
                        clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
                    clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join(""));
                    if (document.execCommand) document.execCommand("copy"); // copy selected content to system clipbaord

                    handleRemove(input, Inputmask.keyCode.DELETE, pos);
                    writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join(""));

                    if (input.inputmask._valueGet() === getBufferTemplate().join("")) {
                        $input.trigger("cleared");
                    }
                },
                blurEvent: function (e) {
                    var $input = $(this),
                        input = this;
                    if (input.inputmask) {
                        var nptValue = input.inputmask._valueGet(),
                            buffer = getBuffer().slice();

                        if (nptValue !== "") {
                            if (opts.clearMaskOnLostFocus) {
                                if (getLastValidPosition() === -1 && nptValue === getBufferTemplate().join("")) {
                                    buffer = [];
                                } else { //clearout optional tail of the mask
                                    clearOptionalTail(buffer);
                                }
                            }
                            if (isComplete(buffer) === false) {
                                setTimeout(function () {
                                    $input.trigger("incomplete");
                                }, 0);
                                if (opts.clearIncomplete) {
                                    resetMaskSet();
                                    if (opts.clearMaskOnLostFocus) {
                                        buffer = [];
                                    } else {
                                        buffer = getBufferTemplate().slice();
                                    }
                                }
                            }

                            writeBuffer(input, buffer, undefined, e);
                        }

                        if (undoValue !== getBuffer().join("")) {
                            undoValue = buffer.join("");
                            $input.trigger("change");
                        }
                    }
                },
                mouseenterEvent: function (e) {
                    var input = this;
                    mouseEnter = true;
                    if (document.activeElement !== input && opts.showMaskOnHover) {
                        if (input.inputmask._valueGet() !== getBuffer().join("")) {
                            writeBuffer(input, getBuffer());
                        }
                    }
                }
                ,
                submitEvent: function (e) { //trigger change on submit if any
                    if (undoValue !== getBuffer().join("")) {
                        $el.trigger("change");
                    }
                    if (opts.clearMaskOnLostFocus && getLastValidPosition() === -1 && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("")) {
                        el.inputmask._valueSet(""); //clear masktemplete on submit and still has focus
                    }
                    if (opts.removeMaskOnSubmit) {
                        el.inputmask._valueSet(el.inputmask.unmaskedvalue(), true);
                        setTimeout(function () {
                            writeBuffer(el, getBuffer());
                        }, 0);
                    }
                }
                ,
                resetEvent: function (e) {
                    el.inputmask.refreshValue = true; //indicate a forced refresh when there is a call to the value before leaving the triggering event fn
                    setTimeout(function () {
                        $el.trigger("setvalue");
                    }, 0);
                }
            };


            function initializeColorMask(input) {
                var offset = $(input).position(),
                    computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null);
                // parentNode = input.parentNode;

                function findCaretPos(clientx) {
                    //calculate text width
                    var e = document.createElement("span"), caretPos;
                    for (var style in computedStyle) { //clone styles
                        if (isNaN(style) && style.indexOf("font") !== -1) {
                            e.style[style] = computedStyle[style];
                        }
                    }
                    e.style.textTransform = computedStyle.textTransform;
                    e.style.letterSpacing = computedStyle.letterSpacing;
                    e.style.position = "absolute";
                    e.style.height = "auto";
                    e.style.width = "auto";
                    e.style.visibility = "hidden";
                    e.style.whiteSpace = "nowrap";

                    document.body.appendChild(e);
                    var inputText = input.inputmask._valueGet(), previousWidth = 0, itl;
                    for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {
                        e.innerHTML += inputText.charAt(caretPos) || "_";
                        if (e.offsetWidth >= clientx) {
                            var offset1 = (clientx - previousWidth);
                            var offset2 = e.offsetWidth - clientx;
                            e.innerHTML = inputText.charAt(caretPos);
                            offset1 -= (e.offsetWidth / 3);
                            caretPos = offset1 < offset2 ? caretPos - 1 : caretPos;
                            break;
                        }
                        previousWidth = e.offsetWidth;
                    }
                    document.body.removeChild(e);
                    return caretPos;
                }

                function position() {
                    colorMask.style.position = "absolute";
                    colorMask.style.top = offset.top + "px";
                    colorMask.style.left = offset.left + "px";
                    colorMask.style.width = parseInt(input.offsetWidth) - parseInt(computedStyle.paddingLeft) - parseInt(computedStyle.paddingRight) - parseInt(computedStyle.borderLeftWidth) - parseInt(computedStyle.borderRightWidth) + "px";
                    colorMask.style.height = parseInt(input.offsetHeight) - parseInt(computedStyle.paddingTop) - parseInt(computedStyle.paddingBottom) - parseInt(computedStyle.borderTopWidth) - parseInt(computedStyle.borderBottomWidth) + "px";

                    colorMask.style.lineHeight = colorMask.style.height;
                    colorMask.style.zIndex = isNaN(computedStyle.zIndex) ? -1 : computedStyle.zIndex - 1;
                    colorMask.style.webkitAppearance = "textfield";
                    colorMask.style.mozAppearance = "textfield";
                    colorMask.style.Appearance = "textfield";

                }


                colorMask = document.createElement("div");
                document.body.appendChild(colorMask); //insert at body to prevent css clash :last-child for example
                for (var style in computedStyle) { //clone styles
                    if (computedStyle.hasOwnProperty(style)) {
                        if (isNaN(style) && style !== "cssText" && style.indexOf("webkit") == -1) {
                            colorMask.style[style] = computedStyle[style];
                        }
                    }
                }

                //restyle input
                input.style.backgroundColor = "transparent";
                input.style.color = "transparent";
                input.style.webkitAppearance = "caret";
                input.style.mozAppearance = "caret";
                input.style.Appearance = "caret";

                position();

                //event passthrough
                $(window).on("resize", function (e) {
                    offset = $(input).position();
                    computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null);
                    position();
                });
                $(input).on("click", function (e) {
                    caret(input, findCaretPos(e.clientX));
                    return EventHandlers.clickEvent.call(this, [e]);
                });
                $(input).on("keydown", function (e) {
                    if (!e.shiftKey && opts.insertMode !== false) {
                        setTimeout(function () {
                            renderColorMask(input);
                        }, 0);
                    }
                });
            }

            function renderColorMask(input, buffer, caretPos) {
                function handleStatic() {
                    if (!isStatic && (test.fn === null || testPos.input === undefined)) {
                        isStatic = true;
                        maskTemplate += "<span class='im-static''>"
                    } else if (isStatic && (test.fn !== null && testPos.input !== undefined)) {
                        isStatic = false;
                        maskTemplate += "</span>"
                    }
                }

                if (colorMask !== undefined) {
                    buffer = buffer || getBuffer();
                    if (caretPos === undefined) {
                        caretPos = caret(input);
                    } else if (caretPos.begin === undefined) {
                        caretPos = {begin: caretPos, end: caretPos};
                    }

                    var maskTemplate = "", isStatic = false;
                    if (buffer != "") {
                        var ndxIntlzr, pos = 0,
                            test, testPos, lvp = getLastValidPosition();
                        do {
                            if (pos === caretPos.begin && document.activeElement === input) {
                                maskTemplate += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>";
                            }
                            if (getMaskSet().validPositions[pos]) {
                                testPos = getMaskSet().validPositions[pos];
                                test = testPos.match;
                                ndxIntlzr = testPos.locator.slice();
                                handleStatic();
                                maskTemplate += testPos.input;
                            } else {
                                testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                                test = testPos.match;
                                ndxIntlzr = testPos.locator.slice();
                                if (opts.jitMasking === false || pos < lvp || (typeof opts.jitMasking === "number" && isFinite(opts.jitMasking) && opts.jitMasking > pos)) {
                                    handleStatic();
                                    maskTemplate += getPlaceholder(pos, test);
                                }
                            }
                            pos++;
                        } while ((maxLength === undefined || pos < maxLength) && (test.fn !== null || test.def !== "") || lvp > pos);
                    }
                    colorMask.innerHTML = maskTemplate;
                }
            }

            function mask(elem) {
                function isElementTypeSupported(input, opts) {
                    function patchValueProperty(npt) {
                        var valueGet;
                        var valueSet;

                        function patchValhook(type) {
                            if ($.valHooks && ($.valHooks[type] === undefined || $.valHooks[type].inputmaskpatch !== true)) {
                                var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
                                    return elem.value;
                                };
                                var valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
                                    elem.value = value;
                                    return elem;
                                };

                                $.valHooks[type] = {
                                    get: function (elem) {
                                        if (elem.inputmask) {
                                            if (elem.inputmask.opts.autoUnmask) {
                                                return elem.inputmask.unmaskedvalue();
                                            } else {
                                                var result = valhookGet(elem);
                                                return getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) !== -1 || opts.nullable !== true ? result : "";
                                            }
                                        } else return valhookGet(elem);
                                    },
                                    set: function (elem, value) {
                                        var $elem = $(elem),
                                            result;
                                        result = valhookSet(elem, value);
                                        if (elem.inputmask) {
                                            $elem.trigger("setvalue");
                                        }
                                        return result;
                                    },
                                    inputmaskpatch: true
                                };
                            }
                        }

                        function getter() {
                            if (this.inputmask) {
                                return this.inputmask.opts.autoUnmask ?
                                    this.inputmask.unmaskedvalue() :
                                    (getLastValidPosition() !== -1 || opts.nullable !== true ?
                                        (document.activeElement === this && opts.clearMaskOnLostFocus ?
                                            (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") :
                                            valueGet.call(this)) :
                                        "");
                            } else return valueGet.call(this);
                        }

                        function setter(value) {
                            valueSet.call(this, value);
                            if (this.inputmask) {
                                $(this).trigger("setvalue");
                            }
                        }

                        function installNativeValueSetFallback(npt) {
                            EventRuler.on(npt, "mouseenter", function (event) {
                                var $input = $(this),
                                    input = this,
                                    value = input.inputmask._valueGet();
                                if (value !== getBuffer().join("") /*&& getLastValidPosition() > 0*/) {
                                    $input.trigger("setvalue");
                                }
                            });
                        }

                        if (!npt.inputmask.__valueGet) {
                            if (opts.noValuePatching !== true) {
                                if (Object.getOwnPropertyDescriptor) {
                                    if (typeof Object.getPrototypeOf !== "function") {
                                        Object.getPrototypeOf = typeof "test".__proto__ === "object" ? function (object) {
                                            return object.__proto__;
                                        } : function (object) {
                                            return object.constructor.prototype;
                                        };
                                    }

                                    var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
                                    if (valueProperty && valueProperty.get && valueProperty.set) {
                                        valueGet = valueProperty.get;
                                        valueSet = valueProperty.set;
                                        Object.defineProperty(npt, "value", {
                                            get: getter,
                                            set: setter,
                                            configurable: true
                                        });
                                    } else if (npt.tagName !== "INPUT") {
                                        valueGet = function () {
                                            return this.textContent;
                                        };
                                        valueSet = function (value) {
                                            this.textContent = value;
                                        };
                                        Object.defineProperty(npt, "value", {
                                            get: getter,
                                            set: setter,
                                            configurable: true
                                        });
                                    }
                                } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
                                    valueGet = npt.__lookupGetter__("value");
                                    valueSet = npt.__lookupSetter__("value");

                                    npt.__defineGetter__("value", getter);
                                    npt.__defineSetter__("value", setter);
                                }
                                npt.inputmask.__valueGet = valueGet; //store native property getter
                                npt.inputmask.__valueSet = valueSet; //store native property setter
                            }
                            npt.inputmask._valueGet = function (overruleRTL) {
                                return isRTL && overruleRTL !== true ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                            };
                            npt.inputmask._valueSet = function (value, overruleRTL) { //null check is needed for IE8 => otherwise converts to "null"
                                valueSet.call(this.el, (value === null || value === undefined) ? "" : ((overruleRTL !== true && isRTL) ? value.split("").reverse().join("") : value));
                            };

                            if (valueGet === undefined) { //jquery.val fallback
                                valueGet = function () {
                                    return this.value;
                                };
                                valueSet = function (value) {
                                    this.value = value;
                                };
                                patchValhook(npt.type);
                                installNativeValueSetFallback(npt);
                            }
                        }
                    }

                    var elementType = input.getAttribute("type");
                    var isSupported = (input.tagName === "INPUT" && $.inArray(elementType, opts.supportsInputType) !== -1) || input.isContentEditable || input.tagName === "TEXTAREA";
                    if (!isSupported) {
                        if (input.tagName === "INPUT") {
                            var el = document.createElement("input");
                            el.setAttribute("type", elementType);
                            isSupported = el.type === "text"; //apply mask only if the type is not natively supported
                            el = null;
                        } else isSupported = "partial";
                    }
                    if (isSupported !== false) {
                        patchValueProperty(input);
                    }
                    return isSupported;
                }

                //unbind all events - to make sure that no other mask will interfere when re-masking
                EventRuler.off(elem);
                var isSupported = isElementTypeSupported(elem, opts);
                if (isSupported !== false) {
                    el = elem;
                    $el = $(el);

                    if (opts.colorMask === true) {
                        initializeColorMask(el);
                    }

                    if (android) {
                        if (el.hasOwnProperty("inputmode")) {
                            el.inputmode = opts.inputmode;
                            el.setAttribute("inputmode", opts.inputmode);
                        }
                        if (opts.androidHack === "rtfm") {
                            if (opts.colorMask !== true) {
                                initializeColorMask(el);
                            }
                            el.type = "password";
                        }
                    }

                    if (isSupported === true) {
                        //bind events
                        EventRuler.on(el, "submit", EventHandlers.submitEvent);
                        EventRuler.on(el, "reset", EventHandlers.resetEvent);

                        EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent);
                        EventRuler.on(el, "blur", EventHandlers.blurEvent);
                        EventRuler.on(el, "focus", EventHandlers.focusEvent);
                        EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent);
                        if (opts.colorMask !== true) {
                            EventRuler.on(el, "click", EventHandlers.clickEvent);
                        }
                        EventRuler.on(el, "dblclick", EventHandlers.dblclickEvent);
                        EventRuler.on(el, "paste", EventHandlers.pasteEvent);
                        EventRuler.on(el, "dragdrop", EventHandlers.pasteEvent);
                        EventRuler.on(el, "drop", EventHandlers.pasteEvent);
                        EventRuler.on(el, "cut", EventHandlers.cutEvent);
                        EventRuler.on(el, "complete", opts.oncomplete);
                        EventRuler.on(el, "incomplete", opts.onincomplete);
                        EventRuler.on(el, "cleared", opts.oncleared);
                        if (!android && opts.inputEventOnly !== true) {
                            EventRuler.on(el, "keydown", EventHandlers.keydownEvent);
                            EventRuler.on(el, "keypress", EventHandlers.keypressEvent);
                        }
                        EventRuler.on(el, "compositionstart", $.noop);
                        EventRuler.on(el, "compositionupdate", $.noop);
                        EventRuler.on(el, "compositionend", $.noop);
                        EventRuler.on(el, "keyup", $.noop);
                        EventRuler.on(el, "input", EventHandlers.inputFallBackEvent);
                        EventRuler.on(el, "beforeinput", $.noop); //https://github.com/w3c/input-events - to implement
                    }
                    EventRuler.on(el, "setvalue", EventHandlers.setValueEvent);

                    //apply mask
                    undoValue = getBufferTemplate().join(""); //initialize the buffer and getmasklength
                    if (el.inputmask._valueGet(true) !== "" || opts.clearMaskOnLostFocus === false || document.activeElement === el) {
                        var initialValue = $.isFunction(opts.onBeforeMask) ? (opts.onBeforeMask(el.inputmask._valueGet(true), opts) || el.inputmask._valueGet(true)) : el.inputmask._valueGet(true);
                        if (initialValue !== "") checkVal(el, true, false, isRTL ? initialValue.split("").reverse() : initialValue.split(""));
                        var buffer = getBuffer().slice();
                        undoValue = buffer.join("");
                        // Wrap document.activeElement in a try/catch block since IE9 throw "Unspecified error" if document.activeElement is undefined when we are in an IFrame.
                        if (isComplete(buffer) === false) {
                            if (opts.clearIncomplete) {
                                resetMaskSet();
                            }
                        }
                        if (opts.clearMaskOnLostFocus && document.activeElement !== el) {
                            if (getLastValidPosition() === -1) {
                                buffer = [];
                            } else {
                                clearOptionalTail(buffer);
                            }
                        }
                        writeBuffer(el, buffer);
                        if (document.activeElement === el) { //position the caret when in focus
                            caret(el, seekNext(getLastValidPosition()));
                        }
                    }
                }
            }

//action object
            var valueBuffer;
            if (actionObj !== undefined) {
                switch (actionObj.action) {
                    case "isComplete":
                        el = actionObj.el;
                        return isComplete(getBuffer());
                    case "unmaskedvalue":
                        if (el === undefined || actionObj.value !== undefined) {
                            valueBuffer = actionObj.value;
                            valueBuffer = ($.isFunction(opts.onBeforeMask) ? (opts.onBeforeMask(valueBuffer, opts) || valueBuffer) : valueBuffer).split("");
                            checkVal(undefined, false, false, isRTL ? valueBuffer.reverse() : valueBuffer);
                            if ($.isFunction(opts.onBeforeWrite)) opts.onBeforeWrite(undefined, getBuffer(), 0, opts);
                        }
                        return unmaskedvalue(el);
                    case "mask":
                        mask(el);
                        break;
                    case "format":
                        valueBuffer = ($.isFunction(opts.onBeforeMask) ? (opts.onBeforeMask(actionObj.value, opts) || actionObj.value) : actionObj.value).split("");
                        checkVal(undefined, true, false, isRTL ? valueBuffer.reverse() : valueBuffer);
                        if (actionObj.metadata) {
                            return {
                                value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                                metadata: maskScope.call(this, {
                                    "action": "getmetadata"
                                }, maskset, opts)
                            };
                        }

                        return isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");
                    case "isValid":
                        if (actionObj.value) {
                            valueBuffer = actionObj.value.split("");
                            checkVal(undefined, true, true, isRTL ? valueBuffer.reverse() : valueBuffer);
                        } else {
                            actionObj.value = getBuffer().join("");
                        }
                        var buffer = getBuffer();
                        var rl = determineLastRequiredPosition(),
                            lmib = buffer.length - 1;
                        for (; lmib > rl; lmib--) {
                            if (isMask(lmib)) break;
                        }
                        buffer.splice(rl, lmib + 1 - rl);

                        return isComplete(buffer) && actionObj.value === getBuffer().join("");
                    case "getemptymask":
                        return getBufferTemplate().join("");
                    case "remove":
                        if (el && el.inputmask) {
                            $el = $(el);
                            //writeout the value
                            el.inputmask._valueSet(opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(true));
                            //unbind all events
                            EventRuler.off(el);
                            //restore the value property
                            var valueProperty;
                            if (Object.getOwnPropertyDescriptor && Object.getPrototypeOf) {
                                valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value");
                                if (valueProperty) {
                                    if (el.inputmask.__valueGet) {
                                        Object.defineProperty(el, "value", {
                                            get: el.inputmask.__valueGet,
                                            set: el.inputmask.__valueSet,
                                            configurable: true
                                        });
                                    }
                                }
                            } else if (document.__lookupGetter__ && el.__lookupGetter__("value")) {
                                if (el.inputmask.__valueGet) {
                                    el.__defineGetter__("value", el.inputmask.__valueGet);
                                    el.__defineSetter__("value", el.inputmask.__valueSet);
                                }
                            }
                            //clear data
                            el.inputmask = undefined;
                        }
                        return el;
                        break;
                    case "getmetadata":
                        if ($.isArray(maskset.metadata)) {
                            var maskTarget = getMaskTemplate(true, 0, false).join("");
                            $.each(maskset.metadata, function (ndx, mtdt) {
                                if (mtdt.mask === maskTarget) {
                                    maskTarget = mtdt;
                                    return false;
                                }
                            });
                            return maskTarget;
                        }

                        return maskset.metadata;
                }
            }
        }

//make inputmask available
        return Inputmask;
    }
))
;

}catch(e){console.log('Error in: catalog/view/theme/indiano/libs/inputmask/inputmask.js: '+e.message);};

/* Jet Cache: catalog/view/theme/indiano/libs/inputmask/jquery.inputmask.js */
try{
/*
 * Input Mask plugin for jquery
 * http://github.com/RobinHerbots/jquery.inputmask
 * Copyright (c) 2010 -	Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 0.0.0-dev
 */

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define(["jquery", "./inputmask"], factory);
	} else if (typeof exports === "object") {
		module.exports = factory(require("jquery"), require("./inputmask"));
	} else {
		factory(jQuery, window.Inputmask);
	}
}
(function ($, Inputmask) {
	if ($.fn.inputmask === undefined) {
		//jquery plugin
		$.fn.inputmask = function (fn, options) {
			var nptmask, input = this[0];
			if (options === undefined) options = {};
			if (typeof fn === "string") {
				switch (fn) {
					case "unmaskedvalue":
						return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();
					case "remove":
						return this.each(function () {
							if (this.inputmask) this.inputmask.remove();
						});
					case "getemptymask":
						return input && input.inputmask ? input.inputmask.getemptymask() : "";
					case "hasMaskedValue": //check wheter the returned value is masked or not; currently only works reliable when using jquery.val fn to retrieve the value
						return input && input.inputmask ? input.inputmask.hasMaskedValue() : false;
					case "isComplete":
						return input && input.inputmask ? input.inputmask.isComplete() : true;
					case "getmetadata": //return mask metadata if exists
						return input && input.inputmask ? input.inputmask.getmetadata() : undefined;
					case "setvalue":
						$(input).val(options);
						if (input && input.inputmask === undefined) { //reactivate jquery.clone
							$(input).triggerHandler("setvalue");
						}
						break;
					case "option":
						if (typeof options === "string") {
							if (input && input.inputmask !== undefined) {
								return input.inputmask.option(options);
							}
						} else {
							return this.each(function () {
								if (this.inputmask !== undefined) {
									return this.inputmask.option(options);
								}
							});
						}
						break;
					default:
						options.alias = fn;
						nptmask = new Inputmask(options);
						return this.each(function () {
							nptmask.mask(this);
						});
				}
			} else if (typeof fn == "object") {
				nptmask = new Inputmask(fn);
				if (fn.mask === undefined && fn.alias === undefined) {
					return this.each(function () {
						if (this.inputmask !== undefined) {
							return this.inputmask.option(fn);
						} else nptmask.mask(this);
					});
				} else {
					return this.each(function () {
						nptmask.mask(this);
					});
				}
			} else if (fn === undefined) {
				//look for data-inputmask atributes
				return this.each(function () {
					nptmask = new Inputmask(options);
					nptmask.mask(this);
				});
			}
		};
	}
	return $.fn.inputmask;
}));

}catch(e){console.log('Error in: catalog/view/theme/indiano/libs/inputmask/jquery.inputmask.js: '+e.message);};
