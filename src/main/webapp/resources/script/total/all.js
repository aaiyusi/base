/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});
/*! jQuery UI - v1.11.4 - 2015-03-11
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function s(e){for(var t,i;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",o)}function o(){e.datepicker._isDisabledDatepicker(v.inline?v.dpDiv.parent()[0]:v.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function r(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}function h(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var l=0,u=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,n=u.call(arguments,1),a=0,o=n.length;o>a;a++)for(i in n[a])s=n[a][i],n[a].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(n){var a="string"==typeof n,o=u.call(arguments,1),r=this;return a?this.each(function(){var i,a=e.data(this,s);return"instance"===n?(r=a,!1):a?e.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,o),i!==a&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+n+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+n+"'")}):(o.length&&(n=e.widget.extend.apply(null,[n].concat(o))),this.each(function(){var t=e.data(this,s);t?(t.option(n||{}),t._init&&t._init()):e.data(this,s,new i(n,this))})),r}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=l++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var d=!1;e(document).mouseup(function(){d=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!d){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),d=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),d=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,M=e.extend({},y),C=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?M.left-=d:"center"===n.my[0]&&(M.left-=d/2),"bottom"===n.my[1]?M.top-=c:"center"===n.my[1]&&(M.top-=c/2),M.left+=C[0],M.top+=C[1],a||(M.left=h(M.left),M.top=h(M.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](M,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+C[0],p[1]+C[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-M.left,i=t+m-d,s=v.top-M.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:M.left,top:M.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(M,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.accordion",{version:"1.11.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),t.collapsible||t.active!==!1&&null!=t.active||(t.active=0),this._processPanels(),0>t.active&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),e=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&(this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)),void 0)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,s=this.headers.length,n=this.headers.index(t.target),a=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(e(t.target).attr("tabIndex",-1),e(a).attr("tabIndex",0),a.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels(),t.active===!1&&t.collapsible===!0||!this.headers.length?(t.active=!1,this.active=e()):t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var e=this.headers,t=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),t&&(this._off(e.not(this.headers)),this._off(t.not(this.panels)))},_refresh:function(){var t,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var t=e(this),i=t.uniqueId().attr("id"),s=t.next(),n=s.uniqueId().attr("id");t.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(t=n.height(),this.element.siblings(":visible").each(function(){var i=e(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(t-=i.outerHeight(!0))}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===s&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n[0]===s[0],o=a&&i.collapsible,r=o?e():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:o?e():n,newPanel:r};t.preventDefault(),a&&!i.collapsible||this._trigger("beforeActivate",t,l)===!1||(i.active=o?!1:this.headers.index(n),this.active=a?e():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),a||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,s=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,t):(s.hide(),i.show(),this._toggleComplete(t)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(e(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(e,t,i){var s,n,a,o=this,r=0,h=e.css("box-sizing"),l=e.length&&(!t.length||e.index()<t.index()),u=this.options.animate||{},d=l&&u.down||u,c=function(){o._toggleComplete(i)};return"number"==typeof d&&(a=d),"string"==typeof d&&(n=d),n=n||d.easing||u.easing,a=a||d.duration||u.duration,t.length?e.length?(s=e.show().outerHeight(),t.animate(this.hideProps,{duration:a,easing:n,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(this.showProps,{duration:a,easing:n,complete:c,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?"content-box"===h&&(r+=i.now):"content"!==o.options.heightStyle&&(i.now=Math.round(s-t.outerHeight()-r),r=0)}}),void 0):t.animate(this.hideProps,a,n,c):e.animate(this.showProps,a,n,c)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}}),e.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.currentTarget);
i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,s,n,a,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,s=this.previousFilter||"",n=String.fromCharCode(t.keyCode),a=!1,clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,i,s=this,n=this.options.icons.submenu,a=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.parent(),s=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))}),t=a.add(this.element),i=t.find(this.options.items),i.not(".ui-menu-item").each(function(){var t=e(this);s._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=t.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-n}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(t),void 0)},previousPage:function(t){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+n>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())),void 0):(this.next(t),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(e.trim(e(this).text()))})}}),e.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,void 0;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),void 0):(this._searchTimeout(e),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(e),this._change(e),void 0)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;(!t||t&&!i&&!s)&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").text(i.label).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[e](t),void 0):(this.search(null,t),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete;var c,p="ui-button ui-widget ui-state-default ui-corner-all",f="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",m=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},g=function(t){var i=t.name,s=t.form,n=e([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?e(s).find("[name='"+i+"'][type=radio]"):e("[name='"+i+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),n};e.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,m),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,i=this.options,s="checkbox"===this.type||"radio"===this.type,n=s?"":"ui-state-active";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(p).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===c&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||e(this).removeClass(n)}).bind("click"+this.eventNamespace,function(e){i.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),s&&this.element.bind("change"+this.eventNamespace,function(){t.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return i.disabled?!1:void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var s=t.element[0];g(s).not(s).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return i.disabled?!1:(e(this).addClass("ui-state-active"),c=this,t.document.one("mouseup",function(){c=null}),void 0)}).bind("mouseup"+this.eventNamespace,function(){return i.disabled?!1:(e(this).removeClass("ui-state-active"),void 0)}).bind("keydown"+this.eventNamespace,function(t){return i.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),void 0)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var e,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(p+" ui-state-active "+f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),t&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")),void 0):(this._resetButton(),void 0)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?g(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),void 0;var t=this.buttonElement.removeClass(f),i=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(i)))):a.push("ui-button-text-only"),t.addClass(a.join(" "))}}),e.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction"),i=this.element.find(this.options.items),s=i.filter(":ui-button");i.not(":ui-button").button(),s.button("refresh"),this.buttons=i.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),e.ui.button,e.extend(e.ui,{datepicker:{version:"1.11.4"}});var v;e.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return r(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,n,a;s=t.nodeName.toLowerCase(),n="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),a=this._newInst(e(t),n),a.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,a):n&&this._inlineDatepicker(t,a)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(a?e("<img/>").attr({src:a,alt:n,title:n}):n)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,n,a=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,n=0;e.length>n;n++)e[n].length>i&&(i=e[n].length,s=n);return s},a.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),e.input.attr("size",this._formatDate(e,a).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,n,a){var o,h,l,u,d,c=this._dialogInst;return c||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),c=this._dialogInst=this._newInst(this._dialogInput,!1),c.settings={},e.data(this._dialogInput[0],"datepicker",c)),r(c.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(c,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),c.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",c),this},_destroyDatepicker:function(t){var i,s=e(t),n=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),v===n&&(v=null))},_enableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,i,s){var n,a,o,h,l=this._getInst(t);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),a=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),r(l.settings,n),null!==o&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,o)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),l),this._autoSize(l),this._setDate(l,a),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,n,a=e.datepicker._getInst(t.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",a.dpDiv),n[0]&&e.datepicker._selectDay(t.target,a.selectedMonth,a.selectedYear,n[0]),i=e.datepicker._get(a,"onSelect"),i?(s=e.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,s,n=e.datepicker._getInst(t.target);
return e.datepicker._get(n,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,n,a,o,h,l,u;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),n=e.datepicker._get(i,"beforeShow"),a=n?n.apply(t,[t,i]):{},a!==!1&&(r(i.settings,a),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),o=!1,e(t).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),h={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),h=e.datepicker._checkOffset(i,h,o),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),i.inline||(l=e.datepicker._get(i,"showAnim"),u=e.datepicker._get(i,"duration"),i.dpDiv.css("z-index",s(e(t))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[l]?i.dpDiv.show(l,e.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,v=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,s=this._getNumberOfMonths(t),n=s[1],a=17,r=t.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&t.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var n=t.dpDiv.outerWidth(),a=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?n-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),n=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,n,a,o=this._curInst;!o||t&&o!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var n=e(t),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(t){var i,s=e(t),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var n=e(t),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(t,i,s,n){var a,o=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=e("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(t,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,n=e(t),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,s,n,a=this._get(t,"altField");a&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),n=this.formatDate(i,s,this._getFormatConfig(t)),e(a).each(function(){e(this).val(n)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(t,i,s){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,c=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,y=-1,b=!1,_=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},x=function(e){var t=_(e),s="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n="y"===e?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(h).match(a);if(!o)throw"Missing number at position "+h;return h+=o[0].length,parseInt(o[0],10)},w=function(t,s,n){var a=-1,o=e.map(_(t)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,t){var s=t[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(a=t[0],h+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==t.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;t.length>n;n++)if(b)"'"!==t.charAt(n)||_("'")?k():b=!1;else switch(t.charAt(n)){case"d":v=x("d");break;case"D":w("D",d,c);break;case"o":y=x("o");break;case"m":g=x("m");break;case"M":g=w("M",p,f);break;case"y":m=x("y");break;case"@":r=new Date(x("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((x("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":_("'")?k():b=!0;break;default:k()}if(i.length>h&&(o=i.substr(h),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),y>-1)for(g=1,v=y;;){if(a=this._getDaysInMonth(m,g-1),a>=v)break;g++,v-=a}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(h(e))for(;i>s.length;)s="0"+s;return s},u=function(e,t,i,s){return h(e)?s[t]:i[t]},d="",c=!1;if(t)for(s=0;e.length>s;s++)if(c)"'"!==e.charAt(s)||h("'")?d+=e.charAt(s):c=!1;else switch(e.charAt(s)){case"d":d+=l("d",t.getDate(),2);break;case"D":d+=u("D",t.getDay(),n,a);break;case"o":d+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":d+=l("m",t.getMonth()+1,2);break;case"M":d+=u("M",t.getMonth(),o,r);break;case"y":d+=h("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":d+=t.getTime();break;case"!":d+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?d+="'":c=!0;break;default:d+=e.charAt(s)}return d},_possibleChars:function(e){var t,i="",s=!1,n=function(i){var s=e.length>t+1&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;e.length>t;t++)if(s)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),a=n,o=this._getFormatConfig(e);try{a=this.parseDate(i,s,o)||n}catch(r){s=t?"":s}e.selectedDay=a.getDate(),e.drawMonth=e.selectedMonth=a.getMonth(),e.drawYear=e.selectedYear=a.getFullYear(),e.currentDay=s?a.getDate():0,e.currentMonth=s?a.getMonth():0,e.currentYear=s?a.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o))}l=h.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,n=e.selectedMonth,a=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),n===e.selectedMonth&&a===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,n,a,o,r,h,l,u,d,c,p,f,m,g,v,y,b,_,x,w,k,T,D,S,M,C,N,A,P,I,H,z,F,E,O,j,W,L=new Date,R=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),Y=this._get(e,"isRTL"),B=this._get(e,"showButtonPanel"),J=this._get(e,"hideIfNoPrevNext"),q=this._get(e,"navigationAsDateFormat"),K=this._getNumberOfMonths(e),V=this._get(e,"showCurrentAtPos"),U=this._get(e,"stepMonths"),Q=1!==K[0]||1!==K[1],G=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),X=this._getMinMaxDate(e,"min"),$=this._getMinMaxDate(e,"max"),Z=e.drawMonth-V,et=e.drawYear;if(0>Z&&(Z+=12,et--),$)for(t=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-K[0]*K[1]+1,$.getDate())),t=X&&X>t?X:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=q?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-U,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=q?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z+U,1)),this._getFormatConfig(e)):n,a=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?G:R,o=q?this.formatDate(o,r,this._getFormatConfig(e)):o,h=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(e,"firstDay"),10),u=isNaN(u)?0:u,d=this._get(e,"showWeek"),c=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),_="",w=0;K[0]>w;w++){for(k="",this.maxRows=4,T=0;K[1]>T;T++){if(D=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),S=" ui-corner-all",M="",Q){if(M+="<div class='ui-datepicker-group",K[1]>1)switch(T){case 0:M+=" ui-datepicker-group-first",S=" ui-corner-"+(Y?"right":"left");break;case K[1]-1:M+=" ui-datepicker-group-last",S=" ui-corner-"+(Y?"left":"right");break;default:M+=" ui-datepicker-group-middle",S=""}M+="'>"}for(M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?Y?a:s:"")+(/all|right/.test(S)&&0===w?Y?s:a:"")+this._generateMonthYearHeader(e,Z,et,X,$,w>0||T>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",C=d?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",x=0;7>x;x++)N=(x+u)%7,C+="<th scope='col'"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+c[N]+"'>"+p[N]+"</span></th>";for(M+=C+"</tr></thead><tbody>",A=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,A)),P=(this._getFirstDayOfMonth(et,Z)-u+7)%7,I=Math.ceil((P+A)/7),H=Q?this.maxRows>I?this.maxRows:I:I,this.maxRows=H,z=this._daylightSavingAdjust(new Date(et,Z,1-P)),F=0;H>F;F++){for(M+="<tr>",E=d?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(z)+"</td>":"",x=0;7>x;x++)O=g?g.apply(e.input?e.input[0]:null,[z]):[!0,""],j=z.getMonth()!==Z,W=j&&!y||!O[0]||X&&X>z||$&&z>$,E+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(j?" ui-datepicker-other-month":"")+(z.getTime()===D.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===z.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(W?" "+this._unselectableClass+" ui-state-disabled":"")+(j&&!v?"":" "+O[1]+(z.getTime()===G.getTime()?" "+this._currentClass:"")+(z.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+(j&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(W?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(j&&!v?"&#xa0;":W?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===R.getTime()?" ui-state-highlight":"")+(z.getTime()===G.getTime()?" ui-state-active":"")+(j?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);M+=E+"</tr>"}Z++,Z>11&&(Z=0,et++),M+="</tbody></table>"+(Q?"</div>"+(K[0]>0&&T===K[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=M}_+=k}return _+=l,e._keyEvent=!1,_},_generateMonthYearHeader:function(e,t,i,s,n,a,o,r){var h,l,u,d,c,p,f,m,g=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",_="";if(a||!g)_+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,_+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(_+="<option value='"+u+"'"+(u===t?" selected='selected'":"")+">"+r[u]+"</option>");_+="</select>"}if(y||(b+=_+(!a&&g&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(d=this._get(e,"yearRange").split(":"),c=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?c+parseInt(e,10):parseInt(e,10);return isNaN(t)?c:t},f=p(d[0]),m=Math.max(f,p(d[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}return b+=this._get(e,"yearSuffix"),y&&(b+=(!a&&g&&v?"":"&#xa0;")+_),b+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),n=e.drawMonth+("M"===i?t:0),a=Math.min(e.selectedDay,this._getDaysInMonth(s,n))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,n,a)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),n=i&&i>t?i:t;return s&&n>s?s:n},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var n=this._getNumberOfMonths(e),a=this._daylightSavingAdjust(new Date(i,s+(0>t?t:n[0]*n[1]),1));return 0>t&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(e,a)},_isInRange:function(e,t){var i,s,n=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),o=null,r=null,h=this._get(e,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||t.getTime()>=n.getTime())&&(!a||t.getTime()<=a.getTime())&&(!o||t.getFullYear()>=o)&&(!r||r>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new n,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.11.4",e.datepicker,e.widget("ui.draggable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(s){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper),n=s?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)
},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var n=e.extend({},i,{item:s.element});s.sortables=[],e(s.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i,s){var n=e.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,e.each(s.sortables,function(){var e=this;e.isOver?(e.isOver=0,s.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,n))})},drag:function(t,i,s){e.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,e.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&e.contains(a.element[0],this.element[0])&&(n=!1),n})),n?(a.isOver||(a.isOver=1,s._parent=i.helper.parent(),a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},t.target=a.currentItem[0],a._mouseCapture(t,!0),a._mouseStart(t,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",t),s.dropped=a.element,e.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(t),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",t,a._uiHash(a)),a._mouseStop(t,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(t),i.position=s._generatePosition(t,!0),s._trigger("fromSortable",t),s.dropped=!1,e.each(s.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var n=e("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(t,i,s){var n=s.options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(t,i,s){var n=s.options;n._opacity&&e(i.helper).css("opacity",n._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:t.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:t.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-e(r).scrollTop()<n.scrollSensitivity?a=e(r).scrollTop(e(r).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<n.scrollSensitivity&&(a=e(r).scrollTop(e(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-e(r).scrollLeft()<n.scrollSensitivity?a=e(r).scrollLeft(e(r).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<n.scrollSensitivity&&(a=e(r).scrollLeft(e(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var n=s.options;s.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var n,a,o,r,h,l,u,d,c,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,y=i.offset.top,b=y+s.helperProportions.height;for(c=s.snapElements.length-1;c>=0;c--)h=s.snapElements[c].left-s.margins.left,l=h+s.snapElements[c].width,u=s.snapElements[c].top-s.margins.top,d=u+s.snapElements[c].height,h-m>v||g>l+m||u-m>b||y>d+m||!e.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(d-y),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-y),a=m>=Math.abs(d-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[c].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=n||a||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var n,a=s.options,o=e.makeArray(e(a.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(t,i,s){var n=s.options;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}}),e.ui.draggable,e.widget("ui.resizable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=e(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=e(this.handles[i]),this._on(this.handles[i],{mousedown:o._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var i,s,n,a=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),a.containment&&(i+=e(a.containment).scrollLeft()||0,s+=e(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===n?this.axis+"-resize":n),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,s,n=this.originalMousePosition,a=this.axis,o=t.pageX-n.left||0,r=t.pageY-n.top||0,h=this._change[a];return this._updatePrevProperties(),h?(i=h.apply(this,[t,o,r]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,i,s,n,a,o=this.options;a={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=a.minHeight*this.aspectRatio,s=a.minWidth/this.aspectRatio,i=a.maxHeight*this.aspectRatio,n=a.maxWidth/this.aspectRatio,t>a.minWidth&&(a.minWidth=t),s>a.minHeight&&(a.minHeight=s),a.maxWidth>i&&(a.maxWidth=i),a.maxHeight>n&&(a.maxHeight=n)),this._vBoundaries=a},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,i=this.size,s=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===s&&(e.left=t.left+(i.width-e.width),e.top=null),"nw"===s&&(e.top=t.top+(i.height-e.height),e.left=t.left+(i.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,i=this.axis,s=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,n=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,a=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return a&&(e.width=t.minWidth),o&&(e.height=t.minHeight),s&&(e.width=t.maxWidth),n&&(e.height=t.maxHeight),a&&l&&(e.left=r-t.minWidth),s&&l&&(e.left=r-t.maxWidth),o&&u&&(e.top=h-t.minHeight),n&&u&&(e.top=h-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_getPaddingPlusBorderDimensions:function(e){for(var t=0,i=[],s=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],n=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];4>t;t++)i[t]=parseInt(s[t],10)||0,i[t]+=parseInt(n[t],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e,t=0,i=this.helper||this.element;this._proportionallyResizeElements.length>t;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,i,s,n,a,o,r,h=e(this).resizable("instance"),l=h.options,u=h.element,d=l.containment,c=d instanceof e?d.get(0):/parent/.test(d)?u.parent().get(0):d;c&&(h.containerElement=e(c),/document/.test(d)||d===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(c),i=[],e(["Top","Right","Left","Bottom"]).each(function(e,s){i[e]=h._num(t.css("padding"+s))}),h.containerOffset=t.offset(),h.containerPosition=t.position(),h.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,a=h.containerSize.width,o=h._hasScroll(c,"left")?c.scrollWidth:a,r=h._hasScroll(c)?c.scrollHeight:n,h.parentData={element:c,left:s.left,top:s.top,width:o,height:r}))},resize:function(t){var i,s,n,a,o=e(this).resizable("instance"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,d={top:0,left:0},c=o.containerElement,p=!0;c[0]!==document&&/static/.test(c.css("position"))&&(d=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-d.left),u&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?h.top:0),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-h.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-h.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),i=t.options;e(i.alsoResize).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})},resize:function(t,i){var s=e(this).resizable("instance"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0};e(n.alsoResize).each(function(){var t=e(this),s=e(this).data("ui-resizable-alsoresize"),n={},a=t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(a,function(e,t){var i=(s[t]||0)+(r[t]||0);i&&i>=0&&(n[t]=i||null)}),t.css(n)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,i=e(this).resizable("instance"),s=i.options,n=i.size,a=i.originalSize,o=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,u=h[1]||1,d=Math.round((n.width-a.width)/l)*l,c=Math.round((n.height-a.height)/u)*u,p=a.width+d,f=a.height+c,m=s.maxWidth&&p>s.maxWidth,g=s.maxHeight&&f>s.maxHeight,v=s.minWidth&&s.minWidth>p,y=s.minHeight&&s.minHeight>f;s.grid=h,v&&(p+=l),y&&(f+=u),m&&(p-=l),g&&(f-=u),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=o.top-c):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=o.left-d):((0>=f-u||0>=p-l)&&(t=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=o.top-c):(f=u-t.height,i.size.height=f,i.position.top=o.top+a.height-f),p-l>0?(i.size.width=p,i.position.left=o.left-d):(p=l-t.width,i.size.width=p,i.position.left=o.left+a.width-p))}}),e.ui.resizable,e.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var i=e(this).css(t).offset().top;0>i&&e(this).css("top",t.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",t)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&e(i).blur()}catch(n){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+e(this).css("z-index")}).get(),a=Math.max.apply(null,n);return a>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",a+1),s=!0),s&&!i&&this._trigger("focus",t),s},open:function(){var t=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var e=this._focusedElement;e||(e=this.element.find("[autofocus]")),e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function i(){var t=this.document[0].activeElement,i=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);i||this._focusTabbable()}t.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE)return t.preventDefault(),this.close(t),void 0;
if(t.keyCode===e.ui.keyCode.TAB&&!t.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");t.target!==n[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==s[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay(function(){n.focus()}),t.preventDefault()):(this._delay(function(){s.focus()}),t.preventDefault())}},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),e.isEmptyObject(i)||e.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),void 0):(e.each(i,function(i,s){var n,a;s=e.isFunction(s)?{click:s,text:i}:s,s=e.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(t.element[0],arguments)},a={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,e("<button></button>",s).button(a).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){e(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,t(n))},drag:function(e,s){i._trigger("drag",e,t(s))},stop:function(n,a){var o=a.offset.left-i.document.scrollLeft(),r=a.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" "+"top"+(r>=0?"+":"")+r,of:i.window},e(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,t(a))}})},_makeResizable:function(){function t(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){e(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,t(n))},resize:function(e,s){i._trigger("resize",e,t(s))},stop:function(n,a){var o=i.uiDialog.offset(),r=o.left-i.document.scrollLeft(),h=o.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},e(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,t(a))}}).css("position",a)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=e(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),i=e.inArray(this,t);-1!==i&&t.splice(i,1)},_trackingInstances:function(){var e=this.document.data("ui-dialog-instances");return e||(e=[],this.document.data("ui-dialog-instances",e)),e},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,n={};e.each(t,function(e,t){i._setOption(e,t),e in i.sizeRelatedOptions&&(s=!0),e in i.resizableRelatedOptions&&(n[e]=t)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,t){var i,s,n=this.uiDialog;"dialogClass"===e&&n.removeClass(this.options.dialogClass).addClass(t),"disabled"!==e&&(this._super(e,t),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:""+t}),"draggable"===e&&(i=n.is(":data(ui-draggable)"),i&&!t&&n.draggable("destroy"),!i&&t&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(s=n.is(":data(ui-resizable)"),s&&!t&&n.resizable("destroy"),s&&"string"==typeof t&&n.resizable("option","handles",t),s||t===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var e,t,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),e=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),t=Math.max(0,s.minHeight-e),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-e):"none","auto"===s.height?this.element.css({minHeight:t,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay(function(){t=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(e){t||this._allowInteraction(e)||(e.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var e=this.document.data("ui-dialog-overlays")-1;e?this.document.data("ui-dialog-overlays",e):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}}),e.widget("ui.droppable",{version:"1.11.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(s)?s:function(e){return e.is(s)},this.proportions=function(){return arguments.length?(t=arguments[0],void 0):t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[],e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){for(var t=0;e.length>t;t++)e[t]===this&&e.splice(t,1)},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];this._splice(t),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){if("accept"===t)this.accept=e.isFunction(i)?i:function(e){return e.is(i)};else if("scope"===t){var s=e.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(t,i)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=e(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(i,{offset:i.element.offset()}),i.options.tolerance,t)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(){function e(e,t,i){return e>=t&&t+i>e}return function(t,i,s,n){if(!i.offset)return!1;var a=(t.positionAbs||t.position.absolute).left+t.margins.left,o=(t.positionAbs||t.position.absolute).top+t.margins.top,r=a+t.helperProportions.width,h=o+t.helperProportions.height,l=i.offset.left,u=i.offset.top,d=l+i.proportions().width,c=u+i.proportions().height;switch(s){case"fit":return a>=l&&d>=r&&o>=u&&c>=h;case"intersect":return a+t.helperProportions.width/2>l&&d>r-t.helperProportions.width/2&&o+t.helperProportions.height/2>u&&c>h-t.helperProportions.height/2;case"pointer":return e(n.pageY,u,i.proportions().height)&&e(n.pageX,l,i.proportions().width);case"touch":return(o>=u&&c>=o||h>=u&&c>=h||u>o&&h>c)&&(a>=l&&d>=a||r>=l&&d>=r||l>a&&r>d);default:return!1}}}(),e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions().height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions({width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight}))}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance,i),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e(this).droppable("instance").options.scope===n}),a.length&&(s=e(a[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}},e.ui.droppable;var y="ui-effects-",b=e;e.effects={effect:{}},function(e,t){function i(e,t,i){var s=d[t.type]||{};return null==e?i||!t.def?null:t.def:(e=s.floor?~~e:parseFloat(e),isNaN(e)?t.def:s.mod?(e+s.mod)%s.mod:0>e?0:e>s.max?s.max:e)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(e,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[u[l].cache]=o[u[l].cache],n=s._rgba=o._rgba,!1):t}),n.length?("0,0,0,0"===n.join()&&e.extend(n,a.transparent),s):a[i]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,s,n){return new e.Color.fn.parse(t,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},c=l.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",c.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(n,o,r,h){if(n===t)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=e(n).css(o),o=t);var d=this,c=e.type(n),p=this._rgba=[];return o!==t&&(n=[n,o,r,h],c="array"),"string"===c?this.parse(s(n)||a._default):"array"===c?(f(u.rgba.props,function(e,t){p[t.idx]=i(n[t.idx],t)}),this):"object"===c?(n instanceof l?f(u,function(e,t){n[t.cache]&&(d[t.cache]=n[t.cache].slice())}):f(u,function(t,s){var a=s.cache;f(s.props,function(e,t){if(!d[a]&&s.to){if("alpha"===e||null==n[e])return;d[a]=s.to(d._rgba)}d[a][t.idx]=i(n[e],t,!0)}),d[a]&&0>e.inArray(null,d[a].slice(0,3))&&(d[a][3]=1,s.from&&(d._rgba=s.from(d[a])))}),this):t},is:function(e){var i=l(e),s=!0,n=this;return f(u,function(e,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(e,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:t})),s}),s},_space:function(){var e=[],t=this;return f(u,function(i,s){t[s.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var s=l(e),n=s._space(),a=u[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(e,n){var a=n.idx,o=r[a],l=s[a],u=d[n.type]||{};null!==l&&(null===o?h[a]=l:(u.mod&&(l-o>u.mod/2?o+=u.mod:o-l>u.mod/2&&(o-=u.mod)),h[a]=i((l-o)*t+o,n)))}),this[n](h)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(t)._rgba;return l(e.map(i,function(e,t){return(1-s)*n[t]+s*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,s=e[0]/255,n=e[1]/255,a=e[2]/255,o=e[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,u=r+h,d=.5*u;return t=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==o?1:o]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],s=e[2],a=e[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,t+1/3)),Math.round(255*n(r,o,t)),Math.round(255*n(r,o,t-1/3)),a]},f(u,function(s,n){var a=n.props,o=n.cache,h=n.to,u=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===t)return this[o].slice();var n,r=e.type(s),d="array"===r||"object"===r?s:arguments,c=this[o].slice();return f(a,function(e,t){var s=d["object"===r?e:t.idx];null==s&&(s=c[t.idx]),c[t.idx]=i(s,t)}),u?(n=l(u(c)),n[o]=c,n):l(c)},f(a,function(t,i){l.fn[t]||(l.fn[t]=function(n){var a,o=e.type(n),h="alpha"===t?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===o?u:("function"===o&&(n=n.call(this,u),o=e.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=u+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,n){var a,o,r="";if("transparent"!==n&&("string"!==e.type(n)||(a=s(n)))){if(n=l(a||n),!c.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{t.style[i]=n}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,s){t["border"+s+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(b),function(){function t(t){var i,s,n=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[e.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function i(t,i){var s,a,o={};for(s in i)a=i[s],t[s]!==a&&(n[s]||(e.fx.step[s]||!isNaN(parseFloat(a)))&&(o[s]=a));return o}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(b.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(n,a,o,r){var h=e.speed(a,o,r);return this.queue(function(){var a,o=e(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var i=e(this);return{el:i,start:t(this)}}),a=function(){e.each(s,function(e,t){n[t]&&o[t+"Class"](n[t])})},a(),l=l.map(function(){return this.end=t(this.el[0]),this.diff=i(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var t=this,i=e.Deferred(),s=e.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,s),i.promise()}),e.when.apply(e,l.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,s,n,a){return s?e.effects.animateClass.call(this,{add:i},s,n,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,s,n,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},s,n,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,s,n,a,o){return"boolean"==typeof s||void 0===s?n?e.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},s,n,a)}}(e.fn.toggleClass),switchClass:function(t,i,s,n,a){return e.effects.animateClass.call(this,{add:i,remove:t},s,n,a)}})}(),function(){function t(t,i,s,n){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(n=s,s=i,i={}),e.isFunction(s)&&(n=s,s=null),i&&e.extend(t,i),s=s||i.duration,t.duration=e.fx.off?0:"number"==typeof s?s:s in e.fx.speeds?e.fx.speeds[s]:e.fx.speeds._default,t.complete=n||i.complete,t}function i(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.11.4",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(y+t[i],e[0].style[t[i]])},restore:function(e,t){var i,s;for(s=0;t.length>s;s++)null!==t[s]&&(i=e.data(y+t[s]),void 0===i&&(i=""),e.css(t[s],i))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,s;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=e[1]/t.width}return{x:s,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},s=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return t.wrap(s),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),s=t.parent(),"static"===t.css("position")?(s.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,s){i[s]=t.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(n),s.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,s,n){return n=n||{},e.each(i,function(e,i){var a=t.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),e.fn.extend({effect:function(){function i(t){function i(){e.isFunction(a)&&a.call(n[0]),e.isFunction(t)&&t()}var n=e(this),a=s.complete,r=s.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),i()):o.call(n[0],s,i)}var s=t.apply(this,arguments),n=s.mode,a=s.queue,o=e.effects.effect[s.effect];return e.fx.off||!o?n?this[n](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):a===!1?this.each(i):this.queue(a||"fx",i)},show:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(e.fn.show),hide:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(e.fn.hide),toggle:function(e){return function(s){if(i(s)||"boolean"==typeof s)return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),s=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(s=[parseFloat(i),t])}),s}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}(),e.effects,e.effects.effect.blind=function(t,i){var s,n,a,o=e(this),r=/up|down|vertical/,h=/up|left|vertical|horizontal/,l=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(o,t.mode||"hide"),d=t.direction||"up",c=r.test(d),p=c?"height":"width",f=c?"top":"left",m=h.test(d),g={},v="show"===u;o.parent().is(".ui-effects-wrapper")?e.effects.save(o.parent(),l):e.effects.save(o,l),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n=s[p](),a=parseFloat(s.css(f))||0,g[p]=v?n:0,m||(o.css(c?"bottom":"right",0).css(c?"top":"left","auto").css({position:"absolute"}),g[f]=v?a:n+a),v&&(s.css(p,0),m||s.css(f,a+n)),s.animate(g,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){"hide"===u&&o.hide(),e.effects.restore(o,l),e.effects.removeWrapper(o),i()}})},e.effects.effect.bounce=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"effect"),l="hide"===h,u="show"===h,d=t.direction||"up",c=t.distance,p=t.times||5,f=2*p+(u||l?1:0),m=t.duration/f,g=t.easing,v="up"===d||"down"===d?"top":"left",y="up"===d||"left"===d,b=o.queue(),_=b.length;for((u||l)&&r.push("opacity"),e.effects.save(o,r),o.show(),e.effects.createWrapper(o),c||(c=o["top"===v?"outerHeight":"outerWidth"]()/3),u&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,y?2*-c:2*c).animate(a,m,g)),l&&(c/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g).animate(a,m,g),c=l?2*c:c/2;l&&(n={opacity:0},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g)),o.queue(function(){l&&o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}),_>1&&b.splice.apply(b,[1,0].concat(b.splice(_,f+1))),o.dequeue()},e.effects.effect.clip=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"hide"),l="show"===h,u=t.direction||"vertical",d="vertical"===u,c=d?"height":"width",p=d?"top":"left",f={};e.effects.save(o,r),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[c](),l&&(n.css(c,0),n.css(p,a/2)),f[c]=l?a:0,f[p]=l?0:a/2,n.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){l||o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}})},e.effects.effect.drop=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","opacity","height","width"],o=e.effects.setMode(n,t.mode||"hide"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h?"pos":"neg",d={opacity:r?1:0};e.effects.save(n,a),n.show(),e.effects.createWrapper(n),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===u?-s:s),d[l]=(r?"pos"===u?"+=":"-=":"pos"===u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.explode=function(t,i){function s(){b.push(this),b.length===d*c&&n()}function n(){p.css({visibility:"visible"}),e(b).remove(),m||p.hide(),i()}var a,o,r,h,l,u,d=t.pieces?Math.round(Math.sqrt(t.pieces)):3,c=d,p=e(this),f=e.effects.setMode(p,t.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/c),y=Math.ceil(p.outerHeight()/d),b=[];for(a=0;d>a;a++)for(h=g.top+a*y,u=a-(d-1)/2,o=0;c>o;o++)r=g.left+o*v,l=o-(c-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*y}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:y,left:r+(m?l*v:0),top:h+(m?u*y:0),opacity:m?0:1}).animate({left:r+(m?0:l*v),top:h+(m?0:u*y),opacity:m?1:0},t.duration||500,t.easing,s)},e.effects.effect.fade=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:t.duration,easing:t.easing,complete:i})},e.effects.effect.fold=function(t,i){var s,n,a=e(this),o=["position","top","bottom","left","right","height","width"],r=e.effects.setMode(a,t.mode||"hide"),h="show"===r,l="hide"===r,u=t.size||15,d=/([0-9]+)%/.exec(u),c=!!t.horizFirst,p=h!==c,f=p?["width","height"]:["height","width"],m=t.duration/2,g={},v={};e.effects.save(a,o),a.show(),s=e.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],d&&(u=parseInt(d[1],10)/100*n[l?0:1]),h&&s.css(c?{height:0,width:u}:{height:u,width:0}),g[f[0]]=h?n[0]:u,v[f[1]]=h?n[1]:0,s.animate(g,m,t.easing).animate(v,m,t.easing,function(){l&&a.hide(),e.effects.restore(a,o),e.effects.removeWrapper(a),i()})},e.effects.effect.highlight=function(t,i){var s=e(this),n=["backgroundImage","backgroundColor","opacity"],a=e.effects.setMode(s,t.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),e.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===a&&s.hide(),e.effects.restore(s,n),i()}})},e.effects.effect.size=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],u=["fontSize"],d=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],c=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),f=t.restore||"effect"!==p,m=t.scale||"both",g=t.origin||["middle","center"],v=o.css("position"),y=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===t.mode&&"show"===p?(o.from=t.to||b,o.to=t.from||s):(o.from=t.from||("show"===p?b:s),o.to=t.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===m||"both"===m)&&(a.from.y!==a.to.y&&(y=y.concat(d),o.from=e.effects.setTransition(o,d,a.from.y,o.from),o.to=e.effects.setTransition(o,d,a.to.y,o.to)),a.from.x!==a.to.x&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,a.from.x,o.from),o.to=e.effects.setTransition(o,c,a.to.x,o.to))),("content"===m||"both"===m)&&a.from.y!==a.to.y&&(y=y.concat(u).concat(l),o.from=e.effects.setTransition(o,u,a.from.y,o.from),o.to=e.effects.setTransition(o,u,a.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(n=e.effects.getBaseline(g,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===m||"both"===m)&&(d=d.concat(["marginTop","marginBottom"]).concat(u),c=c.concat(["marginLeft","marginRight"]),l=r.concat(d).concat(c),o.find("*[width]").each(function(){var i=e(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};
f&&e.effects.save(i,l),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=e.effects.setTransition(i,d,a.from.y,i.from),i.to=e.effects.setTransition(i,d,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=e.effects.setTransition(i,c,a.from.x,i.from),i.to=e.effects.setTransition(i,c,a.to.x,i.to)),i.css(i.from),i.animate(i.to,t.duration,t.easing,function(){f&&e.effects.restore(i,l)})})),o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),e.effects.restore(o,y),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,i){var s=parseInt(i,10),n=e?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),e.effects.removeWrapper(o),i()}})},e.effects.effect.scale=function(t,i){var s=e(this),n=e.extend(!0,{},t),a=e.effects.setMode(s,t.mode||"effect"),o=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===a?0:100),r=t.direction||"both",h=t.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},u={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=h||["middle","center"],n.restore=!0),n.from=t.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*u.y,width:l.width*u.x,outerHeight:l.outerHeight*u.y,outerWidth:l.outerWidth*u.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},e.effects.effect.puff=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"hide"),a="hide"===n,o=parseInt(t.percent,10)||150,r=o/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(t)},e.effects.effect.pulsate=function(t,i){var s,n=e(this),a=e.effects.setMode(n,t.mode||"show"),o="show"===a,r="hide"===a,h=o||"hide"===a,l=2*(t.times||5)+(h?1:0),u=t.duration/l,d=0,c=n.queue(),p=c.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),d=1),s=1;l>s;s++)n.animate({opacity:d},u,t.easing),d=1-d;n.animate({opacity:d},u,t.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&c.splice.apply(c,[1,0].concat(c.splice(p,l+1))),n.dequeue()},e.effects.effect.shake=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","height","width"],o=e.effects.setMode(n,t.mode||"effect"),r=t.direction||"left",h=t.distance||20,l=t.times||3,u=2*l+1,d=Math.round(t.duration/u),c="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},m={},g={},v=n.queue(),y=v.length;for(e.effects.save(n,a),n.show(),e.effects.createWrapper(n),f[c]=(p?"-=":"+=")+h,m[c]=(p?"+=":"-=")+2*h,g[c]=(p?"-=":"+=")+2*h,n.animate(f,d,t.easing),s=1;l>s;s++)n.animate(m,d,t.easing).animate(g,d,t.easing);n.animate(m,d,t.easing).animate(f,d/2,t.easing).queue(function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}),y>1&&v.splice.apply(v,[1,0].concat(v.splice(y,u+1))),n.dequeue()},e.effects.effect.slide=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","width","height"],o=e.effects.setMode(n,t.mode||"show"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h,d={};e.effects.save(n,a),n.show(),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,u?isNaN(s)?"-"+s:-s:s),d[l]=(r?u?"+=":"-=":u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.transfer=function(t,i){var s=e(this),n=e(t.to),a="fixed"===n.css("position"),o=e("body"),r=a?o.scrollTop():0,h=a?o.scrollLeft():0,l=n.offset(),u={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},d=s.offset(),c=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:d.top-r,left:d.left-h,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(u,t.duration,t.easing,function(){c.remove(),i()})},e.widget("ui.progressbar",{version:"1.11.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){return void 0===e?this.options.value:(this.options.value=this._constrainedValue(e),this._refreshValue(),void 0)},_constrainedValue:function(e){return void 0===e&&(e=this.options.value),this.indeterminate=e===!1,"number"!=typeof e&&(e=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var t=e.value;delete e.value,this._super(e),this.options.value=this._constrainedValue(t),this._refreshValue()},_setOption:function(e,t){"max"===e&&(t=Math.max(this.min,t)),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}}),e.widget("ui.selectable",e.ui.mouse,{version:"1.11.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,s=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().addBack().each(function(){var s,n=e.data(this,"selectable-item");return n?(s=!t.metaKey&&!t.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",t,{selecting:n.element}):i._trigger("unselecting",t,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=t.pageX,h=t.pageY;return a>r&&(i=r,r=a,a=i),o>h&&(i=h,h=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:h-o}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||a>i.right||i.top>h||o>i.bottom):"fit"===n.tolerance&&(l=i.left>a&&r>i.right&&i.top>o&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}}),e.widget("ui.selectmenu",{version:"1.11.4",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var t=this;this.label=e("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(e){this.button.focus(),e.preventDefault()}}),this.element.hide(),this.button=e("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),e("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=e("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){t.menuItems||t._refreshMenu()}),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var t=this;this.menu=e("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=e("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:"listbox",select:function(e,i){e.preventDefault(),t._setSelection(),t._select(i.item.data("ui-selectmenu-item"),e)},focus:function(e,i){var s=i.item.data("ui-selectmenu-item");null!=t.focusIndex&&s.index!==t.focusIndex&&(t._trigger("focus",e,{item:s}),t.isOpen||t._select(s,e)),t.focusIndex=s.index,t.button.attr("aria-activedescendant",t.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var e,t=this.element.find("option");t.length&&(this._parseOptions(t),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),e=this._getSelectedItem(),this.menuInstance.focus(null,e),this._setAria(e.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(e){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",e))},_position:function(){this.menuWrap.position(e.extend({of:this.button},this.options.position))},close:function(e){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",e))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(t,i){var s=this,n="";e.each(i,function(i,a){a.optgroup!==n&&(e("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(a.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:a.optgroup}).appendTo(t),n=a.optgroup),s._renderItemData(t,a)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-selectmenu-item",t)},_renderItem:function(t,i){var s=e("<li>");return i.disabled&&s.addClass("ui-state-disabled"),this._setText(s,i.label),s.appendTo(t)},_setText:function(e,t){t?e.text(t):e.html("&#160;")},_move:function(e,t){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex):(i=this.menuItems.eq(this.element[0].selectedIndex),n+=":not(.ui-state-disabled)"),s="first"===e||"last"===e?i["first"===e?"prevAll":"nextAll"](n).eq(-1):i[e+"All"](n).eq(0),s.length&&this.menuInstance.focus(t,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(e){this[this.isOpen?"close":"open"](e)},_setSelection:function(){var e;this.range&&(window.getSelection?(e=window.getSelection(),e.removeAllRanges(),e.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(t){this.isOpen&&(e(t.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(t))}},_buttonEvents:{mousedown:function(){var e;window.getSelection?(e=window.getSelection(),e.rangeCount&&(this.range=e.getRangeAt(0))):this.range=document.selection.createRange()},click:function(e){this._setSelection(),this._toggle(e)},keydown:function(t){var i=!0;switch(t.keyCode){case e.ui.keyCode.TAB:case e.ui.keyCode.ESCAPE:this.close(t),i=!1;break;case e.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(t);break;case e.ui.keyCode.UP:t.altKey?this._toggle(t):this._move("prev",t);break;case e.ui.keyCode.DOWN:t.altKey?this._toggle(t):this._move("next",t);break;case e.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(t):this._toggle(t);break;case e.ui.keyCode.LEFT:this._move("prev",t);break;case e.ui.keyCode.RIGHT:this._move("next",t);break;case e.ui.keyCode.HOME:case e.ui.keyCode.PAGE_UP:this._move("first",t);break;case e.ui.keyCode.END:case e.ui.keyCode.PAGE_DOWN:this._move("last",t);break;default:this.menu.trigger(t),i=!1}i&&t.preventDefault()}},_selectFocusedItem:function(e){var t=this.menuItems.eq(this.focusIndex);t.hasClass("ui-state-disabled")||this._select(t.data("ui-selectmenu-item"),e)},_select:function(e,t){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=e.index,this._setText(this.buttonText,e.label),this._setAria(e),this._trigger("select",t,{item:e}),e.index!==i&&this._trigger("change",t,{item:e}),this.close(t)},_setAria:function(e){var t=this.menuItems.eq(e.index).attr("id");this.button.attr({"aria-labelledby":t,"aria-activedescendant":t}),this.menu.attr("aria-activedescendant",t)},_setOption:function(e,t){"icons"===e&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button),this._super(e,t),"appendTo"===e&&this.menuWrap.appendTo(this._appendTo()),"disabled"===e&&(this.menuInstance.option("disabled",t),this.button.toggleClass("ui-state-disabled",t).attr("aria-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===e&&this._resizeButton()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var e=this.options.width;e||(e=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(e)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(t){var i=[];t.each(function(t,s){var n=e(s),a=n.parent("optgroup");i.push({element:n,index:t,value:n.val(),label:n.text(),optgroup:a.attr("label")||"",disabled:a.prop("disabled")||n.prop("disabled")})}),this.items=i},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)}}),e.widget("ui.slider",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;i>t;t++)o.push(a);this.handles=n.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,r,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(n>i||n===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(n=i,a=e(this),o=t)}),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-a.width()/2,top:t.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(n=this.values(),n[t]=i,a=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),s=this.values(t?0:1),a!==!1&&this.values(t,i))):i!==this.value()&&(a=this._trigger("slide",e,{handle:this.handles[t],value:i}),a!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),void 0;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!i),this._super(t,i),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var e=this.options.max,t=this._valueMin(),i=this.options.step,s=Math.floor(+(e-t).toFixed(this._precision())/i)*i;e=s+t,this.max=parseFloat(e.toFixed(this._precision()))},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(t){var i,s,n,a,o=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(t.target).addClass("ui-state-active"),i=this._start(t,o),i===!1))return}switch(a=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(o):this.value(),t.keyCode){case e.ui.keyCode.HOME:n=this._valueMin();break;case e.ui.keyCode.END:n=this._valueMax();break;case e.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(t,o,n)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}}),e.widget("ui.sortable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,i){return e>=t&&t+i>e},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(e,t){this._super(e,t),"handle"===e&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,a.widgetName+"-item")===a?(s=e(this),!1):void 0}),e.data(t.target,a.widgetName+"-item")===a&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));
return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-this.document.scrollTop()<o.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(t.pageY-this.document.scrollTop())<o.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),t.pageX-this.document.scrollLeft()<o.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(t.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=e.left,o=a+e.width,r=e.top,h=r+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>r&&h>s+l,c="y"===this.options.axis||t+u>a&&o>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(e){var t="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),s=t&&i,n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return s?this.floating?a&&"right"===a||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&t||"up"===s&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){r.push(this)}var s,n,a,o,r=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(a=e(l[s],this.document[0]),n=a.length-1;n>=0;n--)o=e.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([e.isFunction(o.options.items)?o.options.items.call(o.element):e(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(n=e(c[i],this.document[0]),s=n.length-1;s>=0;s--)a=e.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(d.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a));for(i=d.length-1;i>=0;i--)for(o=d[i][1],r=d[i][0],s=0,l=r.length;l>s;s++)h=e(r[s]),h.data(this.widgetName+"-item",o),u.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),n=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tbody"===s?t._createTrPlaceholder(t.currentItem.find("tr").eq(0),e("<tr>",t.document[0]).appendTo(n)):"tr"===s?t._createTrPlaceholder(t.currentItem,n):"img"===s&&n.attr("src",t.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(e,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_createTrPlaceholder:function(t,i){var s=this;t.children().each(function(){e("<td>&#160;</td>",s.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(t){var i,s,n,a,o,r,h,l,u,d,c=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!e.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(c&&e.contains(this.containers[i].element[0],c.element[0]))continue;c=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0);if(c)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,a=null,u=c.floating||this._isFloating(this.currentItem),o=u?"left":"top",r=u?"width":"height",d=u?"clientX":"clientY",s=this.items.length-1;s>=0;s--)e.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[o],l=!1,t[d]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(t[d]-h)&&(n=Math.abs(t[d]-h),a=this.items[s],this.direction=l?"up":"down"));if(!a&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;a?this._rearrange(t,a,null,!0):this._rearrange(t,null,this.containers[p].element,!0),this._trigger("change",t,this._uiHash()),this.containers[p]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.width():this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(t=e(n.containment)[0],i=e(n.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n=this.options,a=t.pageX,o=t.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){function i(e,t,i){return function(s){i._trigger(e,s,t._uiHash(t))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&n.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||n.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(n.push(function(e){this._trigger("remove",e,this._uiHash())}),n.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)t||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!t){for(s=0;n.length>s;s++)n[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}}),e.widget("ui.spinner",{version:"1.11.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},i=this.element;return e.each(["min","max","step"],function(e,s){var n=i.attr(s);void 0!==n&&n.length&&(t[s]=n)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e),void 0)},mousewheel:function(e,t){if(t){if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()}},"mousedown .ui-spinner-button":function(t){function i(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(t)!==!1&&this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){return e(t.currentTarget).hasClass("ui-state-active")?this._start(t)===!1?!1:(this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*e.height())&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var i=this.options,s=e.ui.keyCode;switch(t.keyCode){case s.UP:return this._repeat(null,1,t),!0;case s.DOWN:return this._repeat(null,-1,t),!0;case s.PAGE_UP:return this._repeat(null,i.page,t),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return this.spinning||this._trigger("start",e)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(e,t,i){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,i)},e),this._spin(t*this.options.step,i)},_spin:function(e,t){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+e*this._increment(this.counter)),this.spinning&&this._trigger("spin",t,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(t){var i=this.options.incremental;return i?e.isFunction(i)?i(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_adjustValue:function(e){var t,i,s=this.options;return t=null!==s.min?s.min:0,i=e-t,i=Math.round(i/s.step)*s.step,e=t+i,e=parseFloat(e.toFixed(this._precision())),null!==s.max&&e>s.max?s.max:null!==s.min&&s.min>e?s.min:e},_stop:function(e){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e))},_setOption:function(e,t){if("culture"===e||"numberFormat"===e){var i=this._parse(this.element.val());return this.options[e]=t,this.element.val(this._format(i)),void 0}("max"===e||"min"===e||"step"===e)&&"string"==typeof t&&(t=this._parse(t)),"icons"===e&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),this._super(e,t),"disabled"===e&&(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable"))},_setOptions:h(function(e){this._super(e)}),_parse:function(e){return"string"==typeof e&&""!==e&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),""===e||isNaN(e)?null:e},_format:function(e){return""===e?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var e=this.value();return null===e?!1:e===this._adjustValue(e)},_value:function(e,t){var i;""!==e&&(i=this._parse(e),null!==i&&(t||(i=this._adjustValue(i)),e=this._format(i))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:h(function(e){this._stepUp(e)}),_stepUp:function(e){this._start()&&(this._spin((e||1)*this.options.step),this._stop())},stepDown:h(function(e){this._stepDown(e)}),_stepDown:function(e){this._start()&&(this._spin((e||1)*-this.options.step),this._stop())},pageUp:h(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:h(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){return arguments.length?(h(this._value).call(this,e),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),e.widget("ui.tabs",{version:"1.11.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var e=/#.*$/;return function(t){var i,s;t=t.cloneNode(!1),i=t.href.replace(e,""),s=location.href.replace(e,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return t.hash.length>1&&i===s}}(),_create:function(){var t=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible),this._processTabs(),i.active=this._initialActive(),e.isArray(i.disabled)&&(i.disabled=e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):e(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var t=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===t&&(s&&this.tabs.each(function(i,n){return e(n).attr("aria-controls")===s?(t=i,!1):void 0}),null===t&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===t||-1===t)&&(t=this.tabs.length?0:!1)),t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),-1===t&&(t=i?!1:0)),!i&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var i=e(this.document[0].activeElement).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(t)){switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:s++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:n=!1,s--;break;case e.ui.keyCode.END:s=this.anchors.length-1;break;case e.ui.keyCode.HOME:s=0;break;case e.ui.keyCode.SPACE:return t.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case e.ui.keyCode.ENTER:return t.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}t.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),t.ctrlKey||t.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){return t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(t,i){function s(){return t>n&&(t=0),0>t&&(t=n),t}for(var n=this.tabs.length-1;-1!==e.inArray(s(),this.options.disabled);)t=i?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):"disabled"===e?(this._setupDisabled(t),void 0):(this._super(e,t),"collapsible"===e&&(this.element.toggleClass("ui-tabs-collapsible",t),t||this.options.active!==!1||this._activate(0)),"event"===e&&this._setupEvents(t),"heightStyle"===e&&this._setupHeightStyle(t),void 0)},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,i=this.tablist.children(":has(a[href])");t.disabled=e.map(i.filter(".ui-state-disabled"),function(e){return i.index(e)}),this._processTabs(),t.active!==!1&&this.anchors.length?this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=e()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this,i=this.tabs,s=this.anchors,n=this.panels;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(i,s){var n,a,o,r=e(s).uniqueId().attr("id"),h=e(s).closest("li"),l=h.attr("aria-controls");t._isLocal(s)?(n=s.hash,o=n.substring(1),a=t.element.find(t._sanitizeSelector(n))):(o=h.attr("aria-controls")||e({}).uniqueId()[0].id,n="#"+o,a=t.element.find(n),a.length||(a=t._createPanel(o),a.insertAfter(t.panels[i-1]||t.tablist)),a.attr("aria-live","polite")),a.length&&(t.panels=t.panels.add(a)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":o,"aria-labelledby":r}),a.attr("aria-labelledby",r)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var i,s=0;i=this.tabs[s];s++)t===!0||-1!==e.inArray(s,t)?e(i).addClass("ui-state-disabled").attr("aria-disabled","true"):e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(e){e.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,s=this.element.parent();"fill"===t?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),s=t.css("position");"absolute"!==s&&"fixed"!==s&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,i-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,e(this).height("").height())}).height(i))},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?e():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):e(),u={oldTab:s,oldPanel:l,newTab:r?e():a,newPanel:h};t.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",t,u)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?e():a,this.xhr&&this.xhr.abort(),l.length||h.length||e.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),t),this._toggle(t,u))},_toggle:function(t,i){function s(){a.running=!1,a._trigger("activate",t,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(t){var i,s=this._findActive(t);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),i=t.data("ui-tabs-aria-controls");i?t.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(t){var i=this.options.disabled;i!==!1&&(void 0===t?i=!1:(t=this._getIndex(t),i=e.isArray(i)?e.map(i,function(e){return e!==t?e:null}):e.map(this.tabs,function(e,i){return i!==t?i:null})),this._setupDisabled(i))},disable:function(t){var i=this.options.disabled;if(i!==!0){if(void 0===t)i=!0;else{if(t=this._getIndex(t),-1!==e.inArray(t,i))return;i=e.isArray(i)?e.merge([t],i).sort():[t]}this._setupDisabled(i)}},load:function(t,i){t=this._getIndex(t);var s=this,n=this.tabs.eq(t),a=n.find(".ui-tabs-anchor"),o=this._getPanelForTab(n),r={tab:n,panel:o},h=function(e,t){"abort"===t&&s.panels.stop(!1,!0),n.removeClass("ui-tabs-loading"),o.removeAttr("aria-busy"),e===s.xhr&&delete s.xhr};this._isLocal(a[0])||(this.xhr=e.ajax(this._ajaxSettings(a,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(n.addClass("ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.done(function(e,t,n){setTimeout(function(){o.html(e),s._trigger("load",i,r),h(n,t)},1)}).fail(function(e,t){setTimeout(function(){h(e,t)},1)})))},_ajaxSettings:function(t,i,s){var n=this;return{url:t.attr("href"),beforeSend:function(t,a){return n._trigger("beforeLoad",i,e.extend({jqXHR:t,ajaxSettings:a},s))}}},_getPanelForTab:function(t){var i=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),e.widget("ui.tooltip",{version:"1.11.4",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(t,i){var s=(t.attr("aria-describedby")||"").split(/\s+/);s.push(i),t.data("ui-tooltip-id",i).attr("aria-describedby",e.trim(s.join(" ")))},_removeDescribedBy:function(t){var i=t.data("ui-tooltip-id"),s=(t.attr("aria-describedby")||"").split(/\s+/),n=e.inArray(i,s);-1!==n&&s.splice(n,1),t.removeData("ui-tooltip-id"),s=e.trim(s.join(" ")),s?t.attr("aria-describedby",s):t.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=e("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(t,i){var s=this;return"disabled"===t?(this[i?"_disable":"_enable"](),this.options[t]=i,void 0):(this._super(t,i),"content"===t&&e.each(this.tooltips,function(e,t){s._updateContent(t.element)}),void 0)},_disable:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur");n.target=n.currentTarget=s.element[0],t.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var i=this,s=e(t?t.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&s.parents().each(function(){var t,s=e(this);s.data("ui-tooltip-open")&&(t=e.Event("blur"),t.target=t.currentTarget=this,i.close(t,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._registerCloseHandlers(t,s),this._updateContent(s,t))},_updateContent:function(e,t){var i,s=this.options.content,n=this,a=t?t.type:null;return"string"==typeof s?this._open(t,e,s):(i=s.call(e[0],function(i){n._delay(function(){e.data("ui-tooltip-open")&&(t&&(t.type=a),this._open(t,e,i))})}),i&&this._open(t,e,i),void 0)},_open:function(t,i,s){function n(e){l.of=e,o.is(":hidden")||o.position(l)}var a,o,r,h,l=e.extend({},this.options.position);if(s){if(a=this._find(i))return a.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(t&&"mouseover"===t.type?i.attr("title",""):i.removeAttr("title")),a=this._tooltip(i),o=a.tooltip,this._addDescribedBy(i,o.attr("id")),o.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),s.clone?(h=s.clone(),h.removeAttr("id").find("[id]").removeAttr("id")):h=s,e("<div>").html(h).appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:n}),n(t)):o.position(e.extend({of:i},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){o.is(":visible")&&(n(l.of),clearInterval(r))},e.fx.interval)),this._trigger("open",t,{tooltip:o})}},_registerCloseHandlers:function(t,i){var s={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var s=e.Event(t);s.currentTarget=i[0],this.close(s,!0)}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip)}),t&&"mouseover"!==t.type||(s.mouseleave="close"),t&&"focusin"!==t.type||(s.focusout="close"),this._on(!0,i,s)},close:function(t){var i,s=this,n=e(t?t.currentTarget:this.element),a=this._find(n);return a?(i=a.tooltip,a.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),a.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(e(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&e.each(this.parents,function(t,i){e(i.element).attr("title",i.title),delete s.parents[t]}),a.closing=!0,this._trigger("close",t,{tooltip:i}),a.hiding||(a.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(t){var i=e("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),s=i.uniqueId().attr("id");return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[s]={element:t,tooltip:i}},_find:function(e){var t=e.data("ui-tooltip-id");return t?this.tooltips[t]:null},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur"),a=s.element;n.target=n.currentTarget=a[0],t.close(n,!0),e("#"+i).remove(),a.data("ui-tooltip-title")&&(a.attr("title")||a.attr("title",a.data("ui-tooltip-title")),a.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}})});/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */

// AMD support
(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // using AMD; register as anon module
        define(['jquery'], factory);
    } else {
        // no AMD; invoke directly
        factory( (typeof(jQuery) != 'undefined') ? jQuery : window.Zepto );
    }
}

(function($) {
"use strict";

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

var hasProp = !!$.fn.prop;

// attr2 uses prop when it can but checks the return type for
// an expected string.  this accounts for the case where a form 
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
$.fn.attr2 = function() {
    if ( ! hasProp ) {
        return this.attr.apply(this, arguments);
    }
    var val = this.prop.apply(this, arguments);
    if ( ( val && val.jquery ) || typeof val === 'string' ) {
        return val;
    }
    return this.attr.apply(this, arguments);
};

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }
    else if ( options === undefined ) {
        options = {};
    }

    method = options.type || this.attr2('method');
    action = options.url  || this.attr2('action');

    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || $.ajaxSettings.type,
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }

    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || this ;    // jQuery 1.4+ supports scope context
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    if (options.error) {
        var oldError = options.error;
        options.error = function(xhr, status, error) {
            var context = options.context || this;
            oldError.apply(context, [xhr, status, error, $form]);
        };
    }

     if (options.complete) {
        var oldComplete = options.complete;
        options.complete = function(xhr, status) {
            var context = options.context || this;
            oldComplete.apply(context, [xhr, status, $form]);
        };
    }

    // are there files to upload?

    // [value] (issue #113), also see comment:
    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
    var fileInputs = $('input[type=file]:enabled', this).filter(function() { return $(this).val() !== ''; });

    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
        }
        else {
            jqxhr = fileUploadIframe(a);
        }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        jqxhr = fileUploadXhr(a);
    }
    else {
        jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k=0; k < elements.length; k++) {
        elements[k] = null;
    }

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData){
        var serialized = $.param(extraData, options.traditional).split('&');
        var len = serialized.length;
        var result = [];
        var i, part;
        for (i=0; i < len; i++) {
            // #252; undo param space replacement
            serialized[i] = serialized[i].replace(/\+/g,' ');
            part = serialized[i].split('=');
            // #278; use array instead of object storage, favoring array serializations
            result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
        }
        return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = deepSerialize(options.extraData);
            for (i=0; i < serializedData.length; i++) {
                if (serializedData[i]) {
                    formdata.append(serializedData[i][0], serializedData[i][1]);
                }
            }
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: method || 'POST'
        });

        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.addEventListener('progress', function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    }, false);
                }
                return xhr;
            };
        }

        s.data = null;
        var beforeSend = s.beforeSend;
        s.beforeSend = function(xhr, o) {
            //Send FormData() provided by user
            if (options.formData) {
                o.data = options.formData;
            }
            else {
                o.data = formdata;
            }
            if(beforeSend) {
                beforeSend.call(this, xhr, o);
            }
        };
        return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var deferred = $.Deferred();

        // #341
        deferred.abort = function(status) {
            xhr.abort(status);
        };

        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( hasProp ) {
                    el.prop('disabled', false);
                }
                else {
                    el.removeAttr('disabled');
                }
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr2('name');
            if (!n) {
                $io.attr2('name', id);
            }
            else {
                id = n;
            }
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;

                try { // #214, #257
                    if (io.contentWindow.document.execCommand) {
                        io.contentWindow.document.execCommand('Stop');
                    }
                }
                catch(ignore) {}

                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error) {
                    s.error.call(s.context, xhr, e, status);
                }
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, e]);
                }
                if (s.complete) {
                    s.complete.call(s.context, xhr, e);
                }
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }

        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;
                
        function getDoc(frame) {
            /* it looks like contentWindow or contentDocument do not
             * carry the protocol property in ie8, when running under ssl
             * frame.document is the only valid response document, since
             * the protocol is know but not on the other two objects. strange?
             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
             */
            
            var doc = null;
            
            // IE8 cascading access check
            try {
                if (frame.contentWindow) {
                    doc = frame.contentWindow.document;
                }
            } catch(err) {
                // IE8 access denied under ssl & missing protocol
                log('cannot get iframe.contentWindow document: ' + err);
            }

            if (doc) { // successful getting content
                return doc;
            }

            try { // simply checking may throw in ie8 under ssl or mismatched protocol
                doc = frame.contentDocument ? frame.contentDocument : frame.document;
            } catch(err) {
                // last attempt
                log('cannot get iframe.contentDocument: ' + err);
                doc = frame.document;
            }
            return doc;
        }

        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr2('target'), 
                a = $form.attr2('action'), 
                mp = 'multipart/form-data',
                et = $form.attr('enctype') || $form.attr('encoding') || mp;

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method || /post/i.test(method) ) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }

            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized') {
                        setTimeout(checkState,50);
                    }
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle) {
                        clearTimeout(timeoutHandle);
                    }
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                }
                if (io.attachEvent) {
                    io.attachEvent('onload', cb);
                }
                else {
                    io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);

                try {
                    form.submit();
                } catch(err) {
                    // just in case form has element with name/id of 'submit'
                    var submitFn = document.createElement('form').submit;
                    submitFn.apply(form);
                }
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                form.setAttribute('enctype', et); // #380
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            
            doc = getDoc(io);
            if(!doc) {
                log('cannot access response document');
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut) {
                    return;
                }
            }
            if (io.detachEvent) {
                io.detachEvent('onload', cb);
            }
            else {
                io.removeEventListener('load', cb, false);
            }

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml) {
                    s.dataType = 'xml';
                }
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header.toLowerCase()];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (err) {
                    status = 'parsererror';
                    xhr.error = errMsg = (err || status);
                }
            }
            catch (err) {
                log('error caught: ',err);
                status = 'error';
                xhr.error = errMsg = (err || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success) {
                    s.success.call(s.context, data, 'success', xhr);
                }
                deferred.resolve(xhr.responseText, 'success', xhr);
                if (g) {
                    $.event.trigger("ajaxSuccess", [xhr, s]);
                }
            }
            else if (status) {
                if (errMsg === undefined) {
                    errMsg = xhr.statusText;
                }
                if (s.error) {
                    s.error.call(s.context, xhr, status, errMsg);
                }
                deferred.reject(xhr, 'error', errMsg);
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
                }
            }

            if (g) {
                $.event.trigger("ajaxComplete", [xhr, s]);
            }

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete) {
                s.complete.call(s.context, xhr, status);
            }

            callbackProcessed = true;
            if (s.timeout) {
                clearTimeout(timeoutHandle);
            }

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget) {
                    $io.remove();
                }
                else { //adding else to clean up existing iframe response.
                    $io.attr('src', s.iframeSrc);
                }
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error) {
                    $.error('parsererror');
                }
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };

        return deferred;
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(e.target).ajaxSubmit(options); // #365
    }
}

function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is("[type=submit],[type=image]"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest('[type=submit]');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var formId = this.attr('id');
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    var els2;

    if (els && !/MSIE [678]/.test(navigator.userAgent)) { // #390
        els = $(els).get();  // convert to standard array
    }

    // #386; account for inputs outside the form which use the 'form' attribute
    if ( formId ) {
        els2 = $(':input[form="' + formId + '"]').get(); // hat tip @thet
        if ( els2.length ) {
            els = (els || []).concat(els2);
        }
    }

    if (!els || !els.length) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n || el.disabled) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements) {
                elements.push(el);
            }
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file') {
            if (elements) {
                elements.push(el);
            }
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements) {
                elements.push(el);
            }
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $('input[type=text]').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $('input[type=checkbox]').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $('input[type=radio]').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array) {
            $.merge(val, v);
        }
        else {
            val.push(v);
        }
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
        else if (t == "file") {
            if (/MSIE/.test(navigator.userAgent)) {
                $(this).replaceWith($(this).clone(true));
            } else {
                $(this).val('');
            }
        }
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) ) {
                this.value = '';
            }
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug) {
        return;
    }
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}

}));/**
 * jQuery Form Fill - http://makoto.blog.br/formFill
 * --------------------------------------------------------------------------
 *
 * Licensed under The MIT License
 * 
 * @version     0.1
 * @since       16.06.2010
 * @author      Makoto Hashimoto
 * @link        http://makoto.blog.br/formFill
 * @twitter     http://twitter.com/makoto_vix
 * @license     http://www.opensource.org/licenses/mit-license.php MIT 
 * @package     jQuery Plugins
 * 
 * Usage:
 * --------------------------------------------------------------------------
 * 
 *	$('form#formUser').fill({"name" : "Makoto Hashimoto", "email" : "makoto@makoto.blog.br"});
 *  
 *  <form id="formUser">
 *  	<label>Name:</label>
 *  	<input type="text" name="user.name"/>
 *  	<label>E-mail:</label>
 *  	<input type="text" name="user.email"/>
 *  </form>
 */
(function($){
	
	function Fill() {
		this.defaults = {
			styleElementName: 'object',	// object | none
			dateFormat: 'mm/dd/yy',
			debug: false,
			elementsExecuteEvents: ['checkbox', 'radio', 'select-one']
		};
	};
	
	$.extend(Fill.prototype, {
		setDefaults : function (settings) {
			this.defaults = $.extend({}, this.defaults, settings);
			return this;
		},
		
		fill : function (obj, _element, settings) {
			options = $.extend({}, this.defaults, settings);

			_element.find("*").each(function(i, item){
				if ($(item).is("input") || $(item).is("select") || $(item).is("textarea")) {
					try {
						var objName;
						var arrayAtribute;
						try {

							if (options.styleElementName == "object") {
								// Verificando se � um array
								if ($(item).attr("name").match(/\[[0-9]*\]/i)) {
									objName = $(item).attr("name").replace(/^[a-z]*[0-9]*[a-z]*\./i, 'obj.').replace(/\[[0-9]*\].*/i, "");
									
									arrayAtribute = $(item).attr("name").match(/\[[0-9]*\]\.[a-z0-9]*/i) + "";
									arrayAtribute = arrayAtribute.replace(/\[[0-9]*\]\./i, "");
								} else {
									objName = $(item).attr("name").replace(/^[a-z]*[0-9]*[a-z]*\./i, 'obj.');
								}
							} else if (options.styleElementName == "none") {
								objName = 'obj.' + $(item).attr("name");
							}
							for(var x in obj){//obj为json数据列表，循环进行赋值取出
								if(objName == x){
									var value = obj[x];
									break;
								}
								}
							

						} catch(e) {
							if (options.debug) {
								debug(e.message);
							}
						}					

						if (value != null) {
							switch ($(item).attr("type")) {
								case "hidden":
									$(item).val(value);
								break;
								case "password":
								case "textarea":
									$(item).val(value);
								break;

								case "text":
									if ($(item).hasClass("hasDatepicker")) {
										var re = /^[-+]*[0-9]*$/;
										var dateValue = null;
										if (re.test(value)) {
											dateValue = new Date(parseInt(value));
											var strDate = dateValue.getUTCFullYear() + '-' + (dateValue.getUTCMonth() + 1) + '-' + dateValue.getUTCDate();
											dateValue = $.datepicker.parseDate('yy-mm-dd', strDate);
										} else if (value) {										
											dateValue = $.datepicker.parseDate(options.dateFormat, value);
										}
										$(item).datepicker('setDate', dateValue);							
									} else if ($(item).attr("alt") == "double") {
										$(item).val(value.toFixed(2));
									} else {
										$(item).val(value);
									}
								break;

								case "select":
										$(item).val(value);
								break;
								case "radio":
									$(item).each(function (i, radio) {
										if ($(radio).val() == value) {
											$(radio).attr("checked", "checked");
										}
									});
								break;
								case "checkbox":
									if ($.isArray(value)) {
										$.each(value, function(i, arrayItem) {
											if (typeof(arrayItem) == 'object') {											
												arrayItemValue = eval("arrayItem." + arrayAtribute);
											} else {
												arrayItemValue = arrayItem;
											}
											if ($(item).val() == arrayItemValue) {
												$(item).attr("checked", "checked");
											}
										}); 
									} else {
										if ($(item).val() == value) {
											$(item).attr("checked", "checked");
										}
									}						
								break;
							}
							executeEvents(item);
						}
					} catch(e) {
						if (options.debug) {
							debug(e.message);
						}
					}

				}

			});
		}
	});
	
	$.fn.fill = function (obj, settings) {
		$.fill.fill(obj, $(this), settings);
		return this;
	};
	
	$.fill = new Fill();
	
	function executeEvents(element) {
		if (jQuery.inArray($(element).attr('type'), $.fill.defaults.elementsExecuteEvents)) {
			if ($(element).attr('onchange')) {
				$(element).change();
			}

		/*	if ($(element).attr('onclick')) {
				$(element).click();
			}*/
		}	
	};
	
	function debug(message) {                                                                                            // Throws error messages in the browser console.
        if (window.console && window.console.log) {
            window.console.log(message);
        }
    };
})(jQuery);/**
 * jqGrid Chinese Translation
 * 咖啡兔 yanhonglei@gmail.com
 * http://www.kafeitu.me
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
/*global jQuery, define */
(function( factory ) {
	"use strict";
	if ( typeof define === "function" && define.amd ) {
		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"../grid.base"
		], factory );
	} else {
		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

$.jgrid = $.jgrid || {};
if(!$.jgrid.hasOwnProperty("regional")) {
	$.jgrid.regional = [];
}
$.jgrid.regional["cn"] = {
    defaults : {
        recordtext: "{0} - {1}\u3000共 {2} 条", // 共字前是全角空格
        emptyrecords: "无数据显示",
        loadtext: "<i class='fa fa-spinner'></i>读取中...",
		savetext: "Saving...",
        pgtext : " {0} 共 {1} 页",
		pgfirst : "First Page",
		pglast : "Last Page",
		pgnext : "Next Page",
		pgprev : "Previous Page",
		pgrecs : "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		// mobile
		pagerCaption : "Grid::Page Settings",
		pageText : "Page:",
		recordPage : "Records per Page",
		nomorerecs : "No more records...",
		scrollPullup: "Pull up to load more...",
		scrollPulldown : "Pull down to refresh...",
		scrollRefresh : "Release to refresh..."
    },
    search : {
        caption: "搜索...",
        Find: "查找",
        Reset: "重置",
        odata: [{ oper:'eq', text:'等于\u3000\u3000'},{ oper:'ne', text:'不等\u3000\u3000'},{ oper:'lt', text:'小于\u3000\u3000'},{ oper:'le', text:'小于等于'},{ oper:'gt', text:'大于\u3000\u3000'},{ oper:'ge', text:'大于等于'},{ oper:'bw', text:'开始于'},{ oper:'bn', text:'不开始于'},{ oper:'in', text:'属于\u3000\u3000'},{ oper:'ni', text:'不属于'},{ oper:'ew', text:'结束于'},{ oper:'en', text:'不结束于'},{ oper:'cn', text:'包含\u3000\u3000'},{ oper:'nc', text:'不包含'},{ oper:'nu', text:'不存在'},{ oper:'nn', text:'存在'}],
        groupOps: [ { op: "AND", text: "所有" },    { op: "OR",  text: "任一" } ],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
    },
    edit : {
        addCaption: "添加记录",
        editCaption: "编辑记录",
        bSubmit: "提交",
        bCancel: "取消",
        bClose: "关闭",
        saveData: "数据已改变，是否保存？",
        bYes : "是",
        bNo : "否",
        bExit : "取消",
        msg: {
            required:"此字段必需",
            number:"请输入有效数字",
            minValue:"输值必须大于等于 ",
            maxValue:"输值必须小于等于 ",
            email: "这不是有效的e-mail地址",
            integer: "请输入有效整数",
            date: "请输入有效时间",
            url: "无效网址。前缀必须为 ('http://' 或 'https://')",
            nodefined : " 未定义！",
            novalue : " 需要返回值！",
            customarray : "自定义函数需要返回数组！",
            customfcheck : "必须有自定义函数!"
        }
    },
    view : {
        caption: "查看记录",
        bClose: "关闭"
    },
    del : {
        caption: "删除",
        msg: "删除所选记录？",
        bSubmit: "删除",
        bCancel: "取消"
    },
    nav : {
        edittext: "",
        edittitle: "编辑所选记录",
        addtext:"",
        addtitle: "添加新记录",
        deltext: "",
        deltitle: "删除所选记录",
        searchtext: "",
        searchtitle: "查找",
        refreshtext: "",
        refreshtitle: "刷新表格",
        alertcap: "注意",
        alerttext: "请选择记录",
        viewtext: "",
        viewtitle: "查看所选记录",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle : "Cancel row editing",
		selectcaption : "Actions..."
    },
    col : {
        caption: "选择列",
        bSubmit: "确定",
        bCancel: "取消"
    },
    errors : {
        errcap : "错误",
        nourl : "没有设置url",
        norecords: "没有要处理的记录",
        model : "colNames 和 colModel 长度不等！"
    },
    formatter : {
        integer : {thousandsSeparator: ",", defaultValue: '0'},
        number : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: '0.00'},
        currency : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
        date : {
            dayNames:   [
                "日", "一", "二", "三", "四", "五", "六",
                "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六",
            ],
            monthNames: [
                "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二",
                "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
            ],
            AmPm : ["am","pm","上午","下午"],
            S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
            srcformat: 'Y-m-d',
            newformat: 'Y-m-d',
            parseRe : /[#%\\\/:_;.,\t\s-]/,
            masks : {
                // see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
                // and see http://docs.jquery.com/UI/Datepicker/formatDate
                // and https://github.com/jquery/globalize#dates for alternative formats used frequently
                // one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
                // information about date, time, numbers and currency formats used in different countries
                // one should just convert the information in PHP format
                ISO8601Long:"Y-m-d H:i:s",
                ISO8601Short:"Y-m-d",
                // short date:
                //    n - Numeric representation of a month, without leading zeros
                //    j - Day of the month without leading zeros
                //    Y - A full numeric representation of a year, 4 digits
                // example: 3/1/2012 which means 1 March 2012
                ShortDate: "n/j/Y", // in jQuery UI Datepicker: "M/d/yyyy"
                // long date:
                //    l - A full textual representation of the day of the week
                //    F - A full textual representation of a month
                //    d - Day of the month, 2 digits with leading zeros
                //    Y - A full numeric representation of a year, 4 digits
                LongDate: "l, F d, Y", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
                // long date with long time:
                //    l - A full textual representation of the day of the week
                //    F - A full textual representation of a month
                //    d - Day of the month, 2 digits with leading zeros
                //    Y - A full numeric representation of a year, 4 digits
                //    g - 12-hour format of an hour without leading zeros
                //    i - Minutes with leading zeros
                //    s - Seconds, with leading zeros
                //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
                FullDateTime: "l, F d, Y g:i:s A", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
                // month day:
                //    F - A full textual representation of a month
                //    d - Day of the month, 2 digits with leading zeros
                MonthDay: "F d", // in jQuery UI Datepicker: "MMMM dd"
                // short time (without seconds)
                //    g - 12-hour format of an hour without leading zeros
                //    i - Minutes with leading zeros
                //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
                ShortTime: "g:i A", // in jQuery UI Datepicker: "h:mm tt"
                // long time (with seconds)
                //    g - 12-hour format of an hour without leading zeros
                //    i - Minutes with leading zeros
                //    s - Seconds, with leading zeros
                //    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
                LongTime: "g:i:s A", // in jQuery UI Datepicker: "h:mm:ss tt"
                SortableDateTime: "Y-m-d\\TH:i:s",
                UniversalSortableDateTime: "Y-m-d H:i:sO",
                // month with year
                //    Y - A full numeric representation of a year, 4 digits
                //    F - A full textual representation of a month
                YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
            },
            reformatAfterEdit : false,
			userLocalTime : false
        },
        baseLinkUrl: '',
        showAction: '',
        target: '',
        checkbox : {disabled:true},
        idName : 'id'
    }
};
}));
/**
*
* @license Guriddo jqGrid JS - v5.0.0 - 2015-08-03
* Copyright(c) 2008, Tony Tomov, tony@trirand.com
*
* License: http://guriddo.net/?page_id=103334
*/

!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function($){"use strict";function _pivotfilter(a,b){var c,d,e,f=[];if(!this||"function"!=typeof a||a instanceof RegExp)throw new TypeError;for(e=this.length,c=0;e>c;c++)if(this.hasOwnProperty(c)&&(d=this[c],a.call(b,d,c,this))){f.push(d);break}return f}$.jgrid=$.jgrid||{},$.jgrid.hasOwnProperty("defaults")||($.jgrid.defaults={}),$.extend($.jgrid,{version:"5.0.0",htmlDecode:function(a){return a&&("&nbsp;"===a||"&#160;"===a||1===a.length&&160===a.charCodeAt(0))?"":a?String(a).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&amp;/g,"&"):a},htmlEncode:function(a){return a?String(a).replace(/&/g,"&amp;").replace(/\"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):a},template:function(a){var b,c=$.makeArray(arguments).slice(1),d=c.length;return null==a&&(a=""),a.replace(/\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,function(a,e){if(!isNaN(parseInt(e,10)))return c[parseInt(e,10)];for(b=0;d>b;b++)if($.isArray(c[b]))for(var f=c[b],g=f.length;g--;)if(e===f[g].nm)return f[g].v})},msie:"Microsoft Internet Explorer"===navigator.appName,msiever:function(){var a=-1,b=navigator.userAgent,c=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");return null!=c.exec(b)&&(a=parseFloat(RegExp.$1)),a},getCellIndex:function(a){var b=$(a);return b.is("tr")?-1:(b=(b.is("td")||b.is("th")?b:b.closest("td,th"))[0],$.jgrid.msie?$.inArray(b,b.parentNode.cells):b.cellIndex)},stripHtml:function(a){a=String(a);var b=/<("[^"]*"|'[^']*'|[^'">])*>/gi;return a?(a=a.replace(b,""),a&&"&nbsp;"!==a&&"&#160;"!==a?a.replace(/\"/g,"'"):""):a},stripPref:function(a,b){var c=$.type(a);return("string"===c||"number"===c)&&(a=String(a),b=""!==a?String(b).replace(String(a),""):b),b},parse:function(jsonString){var js=jsonString;return"while(1);"===js.substr(0,9)&&(js=js.substr(9)),"/*"===js.substr(0,2)&&(js=js.substr(2,js.length-4)),js||(js="{}"),$.jgrid.useJSON===!0&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(js):eval("("+js+")")},parseDate:function(a,b,c,d){var e,f,g,h=/\\.|[dDjlNSwzWFmMntLoYyaABgGhHisueIOPTZcrU]/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,j=/[^-+\dA-Z]/g,k=new RegExp("^/Date\\((([-+])?[0-9]+)(([-+])([0-9]{2})([0-9]{2}))?\\)/$"),l="string"==typeof b?b.match(k):null,m=function(a,b){for(a=String(a),b=parseInt(b,10)||2;a.length<b;)a="0"+a;return a},n={m:1,d:1,y:1970,h:0,i:0,s:0,u:0},o=0,p=function(a,b){return 0===a?12===b&&(b=0):12!==b&&(b+=12),b},q=0;if(void 0===d&&(d=$.jgrid.getRegional(this,"formatter.date")),void 0===d.parseRe&&(d.parseRe=/[#%\\\/:_;.,\t\s-]/),d.masks.hasOwnProperty(a)&&(a=d.masks[a]),b&&null!=b)if(isNaN(b-0)||"u"!==String(a).toLowerCase())if(b.constructor===Date)o=b;else if(null!==l)o=new Date(parseInt(l[1],10)),l[3]&&(q=60*Number(l[5])+Number(l[6]),q*="-"===l[4]?1:-1,q-=o.getTimezoneOffset(),o.setTime(Number(Number(o)+60*q*1e3)));else{for("ISO8601Long"===d.srcformat&&"Z"===b.charAt(b.length-1)&&(q-=(new Date).getTimezoneOffset()),b=String(b).replace(/\T/g,"#").replace(/\t/,"%").split(d.parseRe),a=a.replace(/\T/g,"#").replace(/\t/,"%").split(d.parseRe),f=0,g=a.length;g>f;f++){switch(a[f]){case"M":e=$.inArray(b[f],d.monthNames),-1!==e&&12>e&&(b[f]=e+1,n.m=b[f]);break;case"F":e=$.inArray(b[f],d.monthNames,12),-1!==e&&e>11&&(b[f]=e+1-12,n.m=b[f]);break;case"n":a[f]="m";break;case"j":a[f]="d";break;case"a":e=$.inArray(b[f],d.AmPm),-1!==e&&2>e&&b[f]===d.AmPm[e]&&(b[f]=e,n.h=p(b[f],n.h));break;case"A":e=$.inArray(b[f],d.AmPm),-1!==e&&e>1&&b[f]===d.AmPm[e]&&(b[f]=e-2,n.h=p(b[f],n.h));break;case"g":n.h=parseInt(b[f],10)}void 0!==b[f]&&(n[a[f].toLowerCase()]=parseInt(b[f],10))}if(n.f&&(n.m=n.f),0===n.m&&0===n.y&&0===n.d)return"&#160;";n.m=parseInt(n.m,10)-1;var r=n.y;r>=70&&99>=r?n.y=1900+n.y:r>=0&&69>=r&&(n.y=2e3+n.y),o=new Date(n.y,n.m,n.d,n.h,n.i,n.s,n.u),q>0&&o.setTime(Number(Number(o)+60*q*1e3))}else o=new Date(1e3*parseFloat(b));else o=new Date(n.y,n.m,n.d,n.h,n.i,n.s,n.u);if(d.userLocalTime&&0===q&&(q-=(new Date).getTimezoneOffset(),q>0&&o.setTime(Number(Number(o)+60*q*1e3))),void 0===c)return o;d.masks.hasOwnProperty(c)?c=d.masks[c]:c||(c="Y-m-d");var s=o.getHours(),t=o.getMinutes(),u=o.getDate(),v=o.getMonth()+1,w=o.getTimezoneOffset(),x=o.getSeconds(),y=o.getMilliseconds(),z=o.getDay(),A=o.getFullYear(),B=(z+6)%7+1,C=(new Date(A,v-1,u)-new Date(A,0,1))/864e5,D={d:m(u),D:d.dayNames[z],j:u,l:d.dayNames[z+7],N:B,S:d.S(u),w:z,z:C,W:5>B?Math.floor((C+B-1)/7)+1:Math.floor((C+B-1)/7)||((new Date(A-1,0,1).getDay()+6)%7<4?53:52),F:d.monthNames[v-1+12],m:m(v),M:d.monthNames[v-1],n:v,t:"?",L:"?",o:"?",Y:A,y:String(A).substring(2),a:12>s?d.AmPm[0]:d.AmPm[1],A:12>s?d.AmPm[2]:d.AmPm[3],B:"?",g:s%12||12,G:s,h:m(s%12||12),H:m(s),i:m(t),s:m(x),u:y,e:"?",I:"?",O:(w>0?"-":"+")+m(100*Math.floor(Math.abs(w)/60)+Math.abs(w)%60,4),P:"?",T:(String(o).match(i)||[""]).pop().replace(j,""),Z:"?",c:"?",r:"?",U:Math.floor(o/1e3)};return c.replace(h,function(a){return D.hasOwnProperty(a)?D[a]:a.substring(1)})},jqID:function(a){return String(a).replace(/[!"#$%&'()*+,.\/:; <=>?@\[\\\]\^`{|}~]/g,"\\$&")},guid:1,uidPref:"jqg",randId:function(a){return(a||$.jgrid.uidPref)+$.jgrid.guid++},getAccessor:function(a,b){var c,d,e,f=[];if("function"==typeof b)return b(a);if(c=a[b],void 0===c)try{if("string"==typeof b&&(f=b.split(".")),e=f.length)for(c=a;c&&e--;)d=f.shift(),c=c[d]}catch(g){}return c},getXmlData:function(a,b,c){var d,e="string"==typeof b?b.match(/^(.*)\[(\w+)\]$/):null;return"function"==typeof b?b(a):e&&e[2]?e[1]?$(e[1],a).attr(e[2]):$(a).attr(e[2]):(d=$(b,a),c?d:d.length>0?$(d).text():void 0)},cellWidth:function(){var a=$("<div class='ui-jqgrid' style='left:10000px'><table class='ui-jqgrid-btable ui-common-table' style='width:5px;'><tr class='jqgrow'><td style='width:5px;display:block;'></td></tr></table></div>"),b=a.appendTo("body").find("td").width();return a.remove(),Math.abs(b-5)>.1},isLocalStorage:function(){try{return"localStorage"in window&&null!==window.localStorage}catch(a){return!1}},getRegional:function(a,b,c){var d;return void 0!==c?c:(a.p&&a.p.regional&&$.jgrid.regional&&(d=$.jgrid.getAccessor($.jgrid.regional[a.p.regional]||{},b)),void 0===d&&(d=$.jgrid.getAccessor($.jgrid,b)),d)},isMobile:function(){try{return/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)?!0:!1}catch(a){return!1}},cell_width:!0,ajaxOptions:{},from:function(source){var $t=this,QueryObject=function(d,q){"string"==typeof d&&(d=$.data(d));var self=this,_data=d,_usecase=!0,_trim=!1,_query=q,_stripNum=/[\$,%]/g,_lastCommand=null,_lastField=null,_orDepth=0,_negate=!1,_queuedOperator="",_sorting=[],_useProperties=!0;if("object"!=typeof d||!d.push)throw"data provides is not an array";return d.length>0&&(_useProperties="object"!=typeof d[0]?!1:!0),this._hasData=function(){return null===_data?!1:0===_data.length?!1:!0},this._getStr=function(a){var b=[];return _trim&&b.push("jQuery.trim("),b.push("String("+a+")"),_trim&&b.push(")"),_usecase||b.push(".toLowerCase()"),b.join("")},this._strComp=function(a){return"string"==typeof a?".toString()":""},this._group=function(a,b){return{field:a.toString(),unique:b,items:[]}},this._toStr=function(a){return _trim&&(a=$.trim(a)),a=a.toString().replace(/\\/g,"\\\\").replace(/\"/g,'\\"'),_usecase?a:a.toLowerCase()},this._funcLoop=function(a){var b=[];return $.each(_data,function(c,d){b.push(a(d))}),b},this._append=function(a){var b;for(null===_query?_query="":_query+=""===_queuedOperator?" && ":_queuedOperator,b=0;_orDepth>b;b++)_query+="(";_negate&&(_query+="!"),_query+="("+a+")",_negate=!1,_queuedOperator="",_orDepth=0},this._setCommand=function(a,b){_lastCommand=a,_lastField=b},this._resetNegate=function(){_negate=!1},this._repeatCommand=function(a,b){return null===_lastCommand?self:null!==a&&null!==b?_lastCommand(a,b):null===_lastField?_lastCommand(a):_useProperties?_lastCommand(_lastField,a):_lastCommand(a)},this._equals=function(a,b){return 0===self._compare(a,b,1)},this._compare=function(a,b,c){var d=Object.prototype.toString;return void 0===c&&(c=1),void 0===a&&(a=null),void 0===b&&(b=null),null===a&&null===b?0:null===a&&null!==b?1:null!==a&&null===b?-1:"[object Date]"===d.call(a)&&"[object Date]"===d.call(b)?b>a?-c:a>b?c:0:(_usecase||"number"==typeof a||"number"==typeof b||(a=String(a),b=String(b)),b>a?-c:a>b?c:0)},this._performSort=function(){0!==_sorting.length&&(_data=self._doSort(_data,0))},this._doSort=function(a,b){var c=_sorting[b].by,d=_sorting[b].dir,e=_sorting[b].type,f=_sorting[b].datefmt,g=_sorting[b].sfunc;if(b===_sorting.length-1)return self._getOrder(a,c,d,e,f,g);b++;var h,i,j,k=self._getGroup(a,c,d,e,f),l=[];for(h=0;h<k.length;h++)for(j=self._doSort(k[h].items,b),i=0;i<j.length;i++)l.push(j[i]);return l},this._getOrder=function(a,b,c,d,e,f){var g,h,i,j,k=[],l=[],m="a"===c?1:-1;void 0===d&&(d="text"),j="float"===d||"number"===d||"currency"===d||"numeric"===d?function(a){var b=parseFloat(String(a).replace(_stripNum,""));return isNaN(b)?Number.NEGATIVE_INFINITY:b}:"int"===d||"integer"===d?function(a){return a?parseFloat(String(a).replace(_stripNum,"")):Number.NEGATIVE_INFINITY}:"date"===d||"datetime"===d?function(a){return $.jgrid.parseDate.call($t,e,a).getTime()}:$.isFunction(d)?d:function(a){return a=a?$.trim(String(a)):"",_usecase?a:a.toLowerCase()},$.each(a,function(a,c){h=""!==b?$.jgrid.getAccessor(c,b):c,void 0===h&&(h=""),h=j(h,c),l.push({vSort:h,index:a})}),l.sort($.isFunction(f)?function(a,b){return a=a.vSort,b=b.vSort,f.call(this,a,b,m)}:function(a,b){return a=a.vSort,b=b.vSort,self._compare(a,b,m)}),i=0;for(var n=a.length;n>i;)g=l[i].index,k.push(a[g]),i++;return k},this._getGroup=function(a,b,c,d,e){var f,g=[],h=null,i=null;return $.each(self._getOrder(a,b,c,d,e),function(a,c){f=$.jgrid.getAccessor(c,b),null==f&&(f=""),self._equals(i,f)||(i=f,null!==h&&g.push(h),h=self._group(b,f)),h.items.push(c)}),null!==h&&g.push(h),g},this.ignoreCase=function(){return _usecase=!1,self},this.useCase=function(){return _usecase=!0,self},this.trim=function(){return _trim=!0,self},this.noTrim=function(){return _trim=!1,self},this.execute=function(){var match=_query,results=[];return null===match?self:($.each(_data,function(){eval(match)&&results.push(this)}),_data=results,self)},this.data=function(){return _data},this.select=function(a){if(self._performSort(),!self._hasData())return[];if(self.execute(),$.isFunction(a)){var b=[];return $.each(_data,function(c,d){b.push(a(d))}),b}return _data},this.hasMatch=function(){return self._hasData()?(self.execute(),_data.length>0):!1},this.andNot=function(a,b,c){return _negate=!_negate,self.and(a,b,c)},this.orNot=function(a,b,c){return _negate=!_negate,self.or(a,b,c)},this.not=function(a,b,c){return self.andNot(a,b,c)},this.and=function(a,b,c){return _queuedOperator=" && ",void 0===a?self:self._repeatCommand(a,b,c)},this.or=function(a,b,c){return _queuedOperator=" || ",void 0===a?self:self._repeatCommand(a,b,c)},this.orBegin=function(){return _orDepth++,self},this.orEnd=function(){return null!==_query&&(_query+=")"),self},this.isNot=function(a){return _negate=!_negate,self.is(a)},this.is=function(a){return self._append("this."+a),self._resetNegate(),self},this._compareValues=function(a,b,c,d,e){var f;f=_useProperties?"jQuery.jgrid.getAccessor(this,'"+b+"')":"this",void 0===c&&(c=null);var g=c,h=void 0===e.stype?"text":e.stype;if(null!==c)switch(h){case"int":case"integer":g=isNaN(Number(g))||""===g?"0":g,f="parseInt("+f+",10)",g="parseInt("+g+",10)";break;case"float":case"number":case"numeric":g=String(g).replace(_stripNum,""),g=isNaN(Number(g))||""===g?"0":g,f="parseFloat("+f+")",g="parseFloat("+g+")";break;case"date":case"datetime":g=String($.jgrid.parseDate.call($t,e.srcfmt||"Y-m-d",g).getTime()),f='jQuery.jgrid.parseDate.call(jQuery("#'+$.jgrid.jqID($t.p.id)+'")[0],"'+e.srcfmt+'",'+f+").getTime()";break;default:f=self._getStr(f),g=self._getStr('"'+self._toStr(g)+'"')}return self._append(f+" "+d+" "+g),self._setCommand(a,b),self._resetNegate(),self},this.equals=function(a,b,c){return self._compareValues(self.equals,a,b,"==",c)},this.notEquals=function(a,b,c){return self._compareValues(self.equals,a,b,"!==",c)},this.isNull=function(a,b,c){return self._compareValues(self.equals,a,null,"===",c)},this.greater=function(a,b,c){return self._compareValues(self.greater,a,b,">",c)},this.less=function(a,b,c){return self._compareValues(self.less,a,b,"<",c)},this.greaterOrEquals=function(a,b,c){return self._compareValues(self.greaterOrEquals,a,b,">=",c)},this.lessOrEquals=function(a,b,c){return self._compareValues(self.lessOrEquals,a,b,"<=",c)},this.startsWith=function(a,b){var c=null==b?a:b,d=_trim?$.trim(c.toString()).length:c.toString().length;return _useProperties?self._append(self._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+".substr(0,"+d+") == "+self._getStr('"'+self._toStr(b)+'"')):(null!=b&&(d=_trim?$.trim(b.toString()).length:b.toString().length),self._append(self._getStr("this")+".substr(0,"+d+") == "+self._getStr('"'+self._toStr(a)+'"'))),self._setCommand(self.startsWith,a),self._resetNegate(),self},this.endsWith=function(a,b){var c=null==b?a:b,d=_trim?$.trim(c.toString()).length:c.toString().length;return self._append(_useProperties?self._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+".substr("+self._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+".length-"+d+","+d+') == "'+self._toStr(b)+'"':self._getStr("this")+".substr("+self._getStr("this")+'.length-"'+self._toStr(a)+'".length,"'+self._toStr(a)+'".length) == "'+self._toStr(a)+'"'),self._setCommand(self.endsWith,a),self._resetNegate(),self},this.contains=function(a,b){return self._append(_useProperties?self._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+'.indexOf("'+self._toStr(b)+'",0) > -1':self._getStr("this")+'.indexOf("'+self._toStr(a)+'",0) > -1'),self._setCommand(self.contains,a),self._resetNegate(),self},this.groupBy=function(a,b,c,d){return self._hasData()?self._getGroup(_data,a,b,c,d):null},this.orderBy=function(a,b,c,d,e){return b=null==b?"a":$.trim(b.toString().toLowerCase()),null==c&&(c="text"),null==d&&(d="Y-m-d"),null==e&&(e=!1),("desc"===b||"descending"===b)&&(b="d"),("asc"===b||"ascending"===b)&&(b="a"),_sorting.push({by:a,dir:b,type:c,datefmt:d,sfunc:e}),self},self};return new QueryObject(source,null)},getMethod:function(a){return this.getAccessor($.fn.jqGrid,a)},extend:function(a){$.extend($.fn.jqGrid,a),this.no_legacy_api||$.fn.extend(a)},clearBeforeUnload:function(a){var b,c=$("#"+$.jgrid.jqID(a))[0];if(c.grid){b=c.grid,$.isFunction(b.emptyRows)&&b.emptyRows.call(c,!0,!0),$(document).unbind("mouseup.jqGrid"+c.p.id),$(b.hDiv).unbind("mousemove"),$(c).unbind();var d,e=b.headers.length,f=["formatCol","sortData","updatepager","refreshIndex","setHeadCheckBox","constructTr","formatter","addXmlData","addJSONData","grid","p"];for(d=0;e>d;d++)b.headers[d].el=null;for(d in b)b.hasOwnProperty(d)&&(b[d]=null);for(d in c.p)c.p.hasOwnProperty(d)&&(c.p[d]=$.isArray(c.p[d])?[]:null);for(e=f.length,d=0;e>d;d++)c.hasOwnProperty(f[d])&&(c[f[d]]=null,delete c[f[d]])}},gridUnload:function(a){if(a){a=$.trim(a),0===a.indexOf("#")&&(a=a.substring(1));var b=$("#"+$.jgrid.jqID(a))[0];if(b.grid){var c={id:$(b).attr("id"),cl:$(b).attr("class")};b.p.pager&&$(b.p.pager).unbind().empty().removeClass("ui-state-default ui-jqgrid-pager ui-corner-bottom");var d=document.createElement("table");d.className=c.cl;var e=$.jgrid.jqID(b.id);$(d).removeClass("ui-jqgrid-btable ui-common-table").insertBefore("#gbox_"+e),1===$(b.p.pager).parents("#gbox_"+e).length&&$(b.p.pager).insertBefore("#gbox_"+e),$.jgrid.clearBeforeUnload(a),$("#gbox_"+e).remove(),$(d).attr({id:c.id}),$("#alertmod_"+$.jgrid.jqID(a)).remove()}}},gridDestroy:function(a){if(a){a=$.trim(a),0===a.indexOf("#")&&(a=a.substring(1));var b=$("#"+$.jgrid.jqID(a))[0];if(b.grid){b.p.pager&&$(b.p.pager).remove();try{$.jgrid.clearBeforeUnload(a),$("#gbox_"+$.jgrid.jqID(a)).remove()}catch(c){}}}},styleUI:{jQueryUI:{common:{disabled:"ui-state-disabled",highlight:"ui-state-highlight",hover:"ui-state-hover",cornerall:"ui-corner-all",cornertop:"ui-corner-top",cornerbottom:"ui-corner-bottom",hidden:"ui-helper-hidden",icon_base:"ui-icon",overlay:"ui-widget-overlay",active:"ui-state-active",error:"ui-state-error",button:"ui-state-default ui-corner-all",content:"ui-widget-content"},base:{entrieBox:"ui-widget ui-widget-content ui-corner-all",viewBox:"",headerTable:"",headerBox:"ui-state-default",rowTable:"",rowBox:"ui-widget-content",footerTable:"",footerBox:"ui-widget-content",headerDiv:"ui-state-default",gridtitleBox:"ui-widget-header ui-corner-top ui-helper-clearfix",customtoolbarBox:"ui-state-default",loadingBox:"ui-state-default ui-state-active",rownumBox:"ui-state-default",scrollBox:"ui-widget-content",multiBox:"cbox",pagerBox:"ui-state-default ui-corner-bottom",toppagerBox:"ui-state-default",pgInput:"ui-corner-all",pgSelectBox:"ui-widget-content ui-corner-all",pgButtonBox:"ui-corner-all",icon_first:"ui-icon-seek-first",icon_prev:"ui-icon-seek-prev",icon_next:"ui-icon-seek-next",icon_end:"ui-icon-seek-end",icon_asc:"ui-icon-triangle-1-n",icon_desc:"ui-icon-triangle-1-s",icon_caption_open:"ui-icon-circle-triangle-n",icon_caption_close:"ui-icon-circle-triangle-s"},modal:{modal:"ui-widget ui-widget-content ui-corner-all",header:"ui-widget-header ui-corner-all ui-helper-clearfix",content:"ui-widget-content",resizable:"ui-resizable-handle ui-resizable-se",icon_close:"ui-icon-closethick",icon_resizable:"ui-icon-gripsmall-diagonal-se"},celledit:{inputClass:"ui-widget-content ui-corner-all"},inlinedit:{inputClass:"ui-widget-content ui-corner-all",icon_edit_nav:"ui-icon-pencil",icon_add_nav:"ui-icon-plus",icon_save_nav:"ui-icon-disk",icon_cancel_nav:"ui-icon-cancel"},formedit:{inputClass:"ui-widget-content ui-corner-all",icon_prev:"ui-icon-triangle-1-w",icon_next:"ui-icon-triangle-1-e",icon_save:"ui-icon-disk",icon_close:"ui-icon-close",icon_del:"ui-icon-scissors",icon_cancel:"ui-icon-cancel"},navigator:{icon_edit_nav:"ui-icon-pencil",icon_add_nav:"ui-icon-plus",icon_del_nav:"ui-icon-trash",icon_search_nav:"ui-icon-search",icon_refresh_nav:"ui-icon-refresh",icon_view_nav:"ui-icon-document",icon_newbutton_nav:"ui-icon-newwin"},grouping:{icon_plus:"ui-icon-circlesmall-plus",icon_minus:"ui-icon-circlesmall-minus"},filter:{table_widget:"ui-widget ui-widget-content",srSelect:"ui-widget-content ui-corner-all",srInput:"ui-widget-content ui-corner-all",menu_widget:"ui-widget ui-widget-content ui-corner-all",icon_search:"ui-icon-search",icon_reset:"ui-icon-arrowreturnthick-1-w",icon_query:"ui-icon-comment"},subgrid:{icon_plus:"ui-icon-plus",icon_minus:"ui-icon-minus",icon_open:"ui-icon-carat-1-sw"},treegrid:{icon_plus:"ui-icon-triangle-1-",icon_minus:"ui-icon-triangle-1-s",icon_leaf:"ui-icon-radio-off"},fmatter:{icon_edit:"ui-icon-pencil",icon_add:"ui-icon-plus",icon_save:"ui-icon-disk",icon_cancel:"ui-icon-cancel",icon_del:"ui-icon-trash"}},Bootstrap:{common:{disabled:"ui-disabled",highlight:"success",hover:"active",cornerall:"",cornertop:"",cornerbottom:"",hidden:"",icon_base:"fa",overlay:"ui-overlay",active:"active",error:"bg-danger",button:"btn btn-default",content:""},base:{entrieBox:"",viewBox:"table-responsive",headerTable:"table table-bordered",headerBox:"",rowTable:"table table-bordered",rowBox:"",footerTable:"table table-bordered",footerBox:"",headerDiv:"",gridtitleBox:"",customtoolbarBox:"",loadingBox:"row",rownumBox:"active",scrollBox:"",multiBox:"checkbox",pagerBox:"",toppagerBox:"",pgInput:"form-control",pgSelectBox:"form-control",pgButtonBox:"",icon_first:"fa-step-backward",icon_prev:"fa-backward",icon_next:"fa-forward",icon_end:"fa-step-forward",icon_asc:"fa-triangle-top",icon_desc:"fa-triangle-bottom",icon_caption_open:"fa-circle-arrow-up",icon_caption_close:"fa-circle-arrow-down"},modal:{modal:"modal-content",header:"modal-header",title:"modal-title",content:"modal-body",resizable:"ui-resizable-handle ui-resizable-se",icon_close:"fa-remove-circle",icon_resizable:"fa-import"},celledit:{inputClass:"form-control"},inlinedit:{inputClass:"form-control",icon_edit_nav:"fa-edit",icon_add_nav:"fa-plus",icon_save_nav:"fa-save",icon_cancel_nav:"fa-remove-circle"},formedit:{inputClass:"form-control",icon_prev:"fa-step-backward",icon_next:"fa-step-forward",icon_save:"fa-save",icon_close:"fa-remove-circle",icon_del:"fa-trash",icon_cancel:"fa-remove-circle"},navigator:{icon_edit_nav:"fa-edit",icon_add_nav:"fa-plus",icon_del_nav:"fa-trash",icon_search_nav:"fa-search",icon_refresh_nav:"fa-refresh",icon_view_nav:"fa-info-sign",icon_newbutton_nav:"fa-new-window"},grouping:{icon_plus:"fa-triangle-right",icon_minus:"fa-triangle-bottom"},filter:{table_widget:"table table-condensed",srSelect:"form-control",srInput:"form-control",menu_widget:"",icon_search:"fa-search",icon_reset:"fa-refresh",icon_query:"fa-comment"},subgrid:{icon_plus:"fa-triangle-right",icon_minus:"fa-triangle-bottom",icon_open:"fa-indent-left"},treegrid:{icon_plus:"fa-triangle-right",icon_minus:"fa-triangle-bottom",icon_leaf:"fa-unchecked"},fmatter:{icon_edit:"fa-edit",icon_add:"fa-plus",icon_save:"fa-save",icon_cancel:"fa-remove-circle",icon_del:"fa-trash"}}}}),$.fn.jqGrid=function(a){if("string"==typeof a){var b=$.jgrid.getMethod(a);if(!b)throw"jqGrid - No such method: "+a;var c=$.makeArray(arguments).slice(1);return b.apply(this,c)}return this.each(function(){if(!this.grid){var b;null!=a&&void 0!==a.data&&(b=a.data,a.data=[]);var c=$.extend(!0,{url:"",height:150,page:1,rowNum:20,rowTotal:null,records:0,pager:"",pgbuttons:!0,pginput:!0,colModel:[],rowList:[],colNames:[],sortorder:"asc",sortname:"",datatype:"xml",mtype:"GET",altRows:!1,selarrrow:[],savedRow:[],shrinkToFit:!0,xmlReader:{},jsonReader:{},subGrid:!1,subGridModel:[],reccount:0,lastpage:0,lastsort:0,selrow:null,beforeSelectRow:null,onSelectRow:null,onSortCol:null,ondblClickRow:null,onRightClickRow:null,onPaging:null,onSelectAll:null,onInitGrid:null,loadComplete:null,gridComplete:null,loadError:null,loadBeforeSend:null,afterInsertRow:null,beforeRequest:null,beforeProcessing:null,onHeaderClick:null,viewrecords:!1,loadonce:!1,multiselect:!1,multikey:!1,editurl:null,search:!1,caption:"",hidegrid:!0,hiddengrid:!1,postData:{},userData:{},treeGrid:!1,treeGridModel:"nested",treeReader:{},treeANode:-1,ExpandColumn:null,tree_root_level:0,prmNames:{page:"page",rows:"rows",sort:"sidx",order:"sord",search:"_search",nd:"nd",id:"id",oper:"oper",editoper:"edit",addoper:"add",deloper:"del",subgridid:"id",npage:null,totalrows:"totalrows"},forceFit:!1,gridstate:"visible",cellEdit:!1,cellsubmit:"remote",nv:0,loadui:"enable",toolbar:[!1,""],scroll:!1,multiboxonly:!1,deselectAfterSort:!0,scrollrows:!1,autowidth:!1,scrollOffset:18,cellLayout:5,subGridWidth:20,multiselectWidth:30,gridview:!0,rownumWidth:35,rownumbers:!1,pagerpos:"center",recordpos:"right",footerrow:!1,userDataOnFooter:!1,hoverrows:!0,altclass:"ui-priority-secondary",viewsortcols:[!1,"vertical",!0],resizeclass:"",autoencode:!1,remapColumns:[],ajaxGridOptions:{},direction:"ltr",toppager:!1,headertitles:!1,scrollTimeout:40,data:[],_index:{},grouping:!1,groupingView:{groupField:[],groupOrder:[],groupText:[],groupColumnShow:[],groupSummary:[],showSummaryOnHide:!1,sortitems:[],sortnames:[],summary:[],summaryval:[],plusicon:"",minusicon:"",displayField:[],groupSummaryPos:[],formatDisplayField:[],_locgr:!1},ignoreCase:!0,cmTemplate:{},idPrefix:"",multiSort:!1,minColWidth:33,scrollPopUp:!1,scrollTopOffset:0,scrollLeftOffset:"100%",storeNavOptions:!1,regional:"en",styleUI:"jQueryUI",responsive:!1},$.jgrid.defaults,a);void 0!==b&&(c.data=b,a.data=b);var d=this,e={headers:[],cols:[],footers:[],dragStart:function(a,b,e){var f=$(this.bDiv).offset().left;this.resizing={idx:a,startX:b.pageX,sOL:b.pageX-f},this.hDiv.style.cursor="col-resize",this.curGbox=$("#rs_m"+$.jgrid.jqID(c.id),"#gbox_"+$.jgrid.jqID(c.id)),this.curGbox.css({display:"block",left:b.pageX-f,top:e[1],height:e[2]}),$(d).triggerHandler("jqGridResizeStart",[b,a]),$.isFunction(c.resizeStart)&&c.resizeStart.call(d,b,a),document.onselectstart=function(){return!1}},dragMove:function(a){if(this.resizing){var b,d,e=a.pageX-this.resizing.startX,f=this.headers[this.resizing.idx],g="ltr"===c.direction?f.width+e:f.width-e;g>33&&(this.curGbox.css({left:this.resizing.sOL+e}),c.forceFit===!0?(b=this.headers[this.resizing.idx+c.nv],d="ltr"===c.direction?b.width-e:b.width+e,d>c.minColWidth&&(f.newWidth=g,b.newWidth=d)):(this.newWidth="ltr"===c.direction?c.tblwidth+e:c.tblwidth-e,f.newWidth=g))}},dragEnd:function(a){if(this.hDiv.style.cursor="default",this.resizing){var b=this.resizing.idx,e=this.headers[b].newWidth||this.headers[b].width;e=parseInt(e,10),this.resizing=!1,$("#rs_m"+$.jgrid.jqID(c.id)).css("display","none"),c.colModel[b].width=e,this.headers[b].width=e,this.headers[b].el.style.width=e+"px",this.cols[b].style.width=e+"px",this.footers.length>0&&(this.footers[b].style.width=e+"px"),c.forceFit===!0?(e=this.headers[b+c.nv].newWidth||this.headers[b+c.nv].width,this.headers[b+c.nv].width=e,this.headers[b+c.nv].el.style.width=e+"px",this.cols[b+c.nv].style.width=e+"px",this.footers.length>0&&(this.footers[b+c.nv].style.width=e+"px"),c.colModel[b+c.nv].width=e):(c.tblwidth=this.newWidth||c.tblwidth,$("table:first",this.bDiv).css("width",c.tblwidth+"px"),$("table:first",this.hDiv).css("width",c.tblwidth+"px"),this.hDiv.scrollLeft=this.bDiv.scrollLeft,c.footerrow&&($("table:first",this.sDiv).css("width",c.tblwidth+"px"),this.sDiv.scrollLeft=this.bDiv.scrollLeft)),a&&($(d).triggerHandler("jqGridResizeStop",[e,b]),$.isFunction(c.resizeStop)&&c.resizeStop.call(d,e,b))}this.curGbox=null,document.onselectstart=function(){return!0}},populateVisible:function(){e.timer&&clearTimeout(e.timer),e.timer=null;var a=$(e.bDiv).height();if(a){var b,f,g=$("table:first",e.bDiv);if(g[0].rows.length)try{b=g[0].rows[1],f=b?$(b).outerHeight()||e.prevRowHeight:e.prevRowHeight}catch(h){f=e.prevRowHeight}if(f){e.prevRowHeight=f;var i,j,k,l=c.rowNum,m=e.scrollTop=e.bDiv.scrollTop,n=Math.round(g.position().top)-m,o=n+g.height(),p=f*l;if(a>o&&0>=n&&(void 0===c.lastpage||(parseInt((o+m+p-1)/p,10)||0)<=c.lastpage)&&(j=parseInt((a-o+p-1)/p,10)||1,o>=0||2>j||c.scroll===!0?(i=(Math.round((o+m)/p)||0)+1,n=-1):n=1),n>0&&(i=(parseInt(m/p,10)||0)+1,j=(parseInt((m+a)/p,10)||0)+2-i,k=!0),j){if(c.lastpage&&(i>c.lastpage||1===c.lastpage||i===c.page&&i===c.lastpage))return;e.hDiv.loading?e.timer=setTimeout(e.populateVisible,c.scrollTimeout):(c.page=i,k&&(e.selectionPreserver(g[0]),e.emptyRows.call(g[0],!1,!1)),e.populate(j)),c.scrollPopUp&&null!=c.lastpage&&($("#scroll_g"+c.id).show().html($.jgrid.template($.jgrid.getRegional(d,"defaults.pgtext",c.pgtext),c.page,c.lastpage)).css({top:c.scrollTopOffset+m*((parseInt(c.height,10)-45)/(parseInt(f,10)*parseInt(c.records,10)))+"px",left:c.scrollLeftOffset}),$(this).mouseout(function(){$("#scroll_g"+c.id).hide()}))}}}},scrollGrid:function(a){if(c.scroll){var b=e.bDiv.scrollTop;void 0===e.scrollTop&&(e.scrollTop=0),b!==e.scrollTop&&(e.scrollTop=b,e.timer&&clearTimeout(e.timer),e.timer=setTimeout(e.populateVisible,c.scrollTimeout))}e.hDiv.scrollLeft=e.bDiv.scrollLeft,c.footerrow&&(e.sDiv.scrollLeft=e.bDiv.scrollLeft),c.frozenColumns&&$(e.fbDiv).scrollTop(e.bDiv.scrollTop),a&&a.stopPropagation()},selectionPreserver:function(a){var b=a.p,c=b.selrow,d=b.selarrrow?$.makeArray(b.selarrrow):null,e=a.grid.bDiv.scrollLeft,f=function(){var g;if(b.selrow=null,b.selarrrow=[],b.multiselect&&d&&d.length>0)for(g=0;g<d.length;g++)d[g]!==c&&$(a).jqGrid("setSelection",d[g],!1,null);c&&$(a).jqGrid("setSelection",c,!1,null),a.grid.bDiv.scrollLeft=e,$(a).unbind(".selectionPreserver",f)};$(a).bind("jqGridGridComplete.selectionPreserver",f)}};if("TABLE"!==this.tagName.toUpperCase()||null==this.id)return void alert("Element is not a table or has no id!");if(void 0!==document.documentMode&&document.documentMode<=5)return void alert("Grid can not be used in this ('quirks') mode!");var f,g,h,i=0;for(g in $.jgrid.regional)$.jgrid.regional.hasOwnProperty(g)&&(0===i&&(f=g),i++);if(1===i&&f!==c.regional&&(c.regional=f),$(this).empty().attr("tabindex","0"),this.p=c,this.p.useProp=!!$.fn.prop,0===this.p.colNames.length)for(i=0;i<this.p.colModel.length;i++)this.p.colNames[i]=this.p.colModel[i].label||this.p.colModel[i].name;if(this.p.colNames.length!==this.p.colModel.length)return void alert($.jgrid.getRegional(this,"errors.model"));var j,k=$.jgrid.getMethod("getStyleUI"),l=d.p.styleUI+".common",m=k(l,"disabled",!0),n=k(l,"highlight",!0),o=k(l,"hover",!0),p=k(l,"cornerall",!0),q=k(l,"icon_base",!0),r=$.jgrid.msie,s=[],t=[],u=[];l=d.p.styleUI+".base",j=$("<div "+k(l,"viewBox",!1,"ui-jqgrid-view")+" role='grid'></div>"),d.p.direction=$.trim(d.p.direction.toLowerCase()),d.p._ald=!1,-1===$.inArray(d.p.direction,["ltr","rtl"])&&(d.p.direction="ltr"),h=d.p.direction,$(j).insertBefore(this),$(this).appendTo(j);var v=$("<div "+k(l,"entrieBox",!1,"ui-jqgrid")+"></div>");$(v).attr({id:"gbox_"+this.id,dir:h}).insertBefore(j),$(j).attr("id","gview_"+this.id).appendTo(v),$("<div "+k(d.p.styleUI+".common","overlay",!1,"jqgrid-overlay")+" id='lui_"+this.id+"'></div>").insertBefore(j),$("<div "+k(l,"loadingBox",!1,"loading")+" id='load_"+this.id+"'>"+$.jgrid.getRegional(d,"defaults.loadtext",this.p.loadtext)+"</div>").insertBefore(j),$(this).attr({role:"presentation","aria-multiselectable":!!this.p.multiselect,"aria-labelledby":"gbox_"+this.id});var w,x=["shiftKey","altKey","ctrlKey"],y=function(a,b){return a=parseInt(a,10),isNaN(a)?b||0:a},z=function(a,b,c,f,g,h){var i,j,k=d.p.colModel[a],l=k.align,m='style="',n=k.classes,o=k.name,p=[];return l&&(m+="text-align:"+l+";"),k.hidden===!0&&(m+="display:none;"),0===b?m+="width: "+e.headers[a].width+"px;":($.isFunction(k.cellattr)||"string"==typeof k.cellattr&&null!=$.jgrid.cellattr&&$.isFunction($.jgrid.cellattr[k.cellattr]))&&(i=$.isFunction(k.cellattr)?k.cellattr:$.jgrid.cellattr[k.cellattr],j=i.call(d,g,c,f,k,h),j&&"string"==typeof j&&(j=j.replace(/style/i,"style").replace(/title/i,"title"),j.indexOf("title")>-1&&(k.title=!1),j.indexOf("class")>-1&&(n=void 0),p=j.replace(/\-style/g,"-sti").split(/style/),2===p.length?(p[1]=$.trim(p[1].replace(/\-sti/g,"-style").replace("=","")),(0===p[1].indexOf("'")||0===p[1].indexOf('"'))&&(p[1]=p[1].substring(1)),m+=p[1].replace(/'/gi,'"')):m+='"')),p.length||(p[0]="",m+='"'),m+=(void 0!==n?' class="'+n+'"':"")+(k.title&&c?' title="'+$.jgrid.stripHtml(c)+'"':""),m+=' aria-describedby="'+d.p.id+"_"+o+'"',m+p[0]},A=function(a){return null==a||""===a?"&#160;":d.p.autoencode?$.jgrid.htmlEncode(a):String(a)},B=function(a,b,c,e,f){var g,h=d.p.colModel[c];if(void 0!==h.formatter){a=""!==String(d.p.idPrefix)?$.jgrid.stripPref(d.p.idPrefix,a):a;var i={rowId:a,colModel:h,gid:d.p.id,pos:c,styleUI:d.p.styleUI};g=$.isFunction(h.formatter)?h.formatter.call(d,b,i,e,f):$.fmatter?$.fn.fmatter.call(d,h.formatter,b,i,e,f):A(b)}else g=A(b);return g},C=function(a,b,c,d,e,f){var g,h;return g=B(a,b,c,e,"add"),h=z(c,d,g,e,a,f),'<td role="gridcell" '+h+">"+g+"</td>"},D=function(a,b,c,e,f){var g='<input role="checkbox" type="checkbox" id="jqg_'+d.p.id+"_"+a+'" '+f+' name="jqg_'+d.p.id+"_"+a+'"'+(e?'checked="checked"':"")+"/>",h=z(b,c,"",null,a,!0);return'<td role="gridcell" '+h+">"+g+"</td>"},E=function(a,b,c,d,e){var f=(parseInt(c,10)-1)*parseInt(d,10)+1+b,g=z(a,b,f,null,b,!0);return'<td role="gridcell" '+e+" "+g+">"+f+"</td>"},F=function(a){var b,c,e=[],f=0;for(c=0;c<d.p.colModel.length;c++)b=d.p.colModel[c],"cb"!==b.name&&"subgrid"!==b.name&&"rn"!==b.name&&(e[f]="local"===a?b.name:"xml"===a||"xmlstring"===a?b.xmlmap||b.name:b.jsonmap||b.name,d.p.keyName!==!1&&b.key===!0&&(d.p.keyName=e[f]),f++);
return e},G=function(a){var b=d.p.remapColumns;return b&&b.length||(b=$.map(d.p.colModel,function(a,b){return b})),a&&(b=$.map(b,function(b){return a>b?null:b-a})),b},H=function(a,b){var c;this.p.deepempty?$(this.rows).slice(1).remove():(c=this.rows.length>0?this.rows[0]:null,$(this.firstChild).empty().append(c)),a&&this.p.scroll&&($(this.grid.bDiv.firstChild).css({height:"auto"}),$(this.grid.bDiv.firstChild.firstChild).css({height:"0px",display:"none"}),0!==this.grid.bDiv.scrollTop&&(this.grid.bDiv.scrollTop=0)),b===!0&&this.p.treeGrid&&!this.p.loadonce&&(this.p.data=[],this.p._index={})},I=function(){var a,b,c,e,f,g,h,i,j,k,l,m=d.p,n=m.data,o=n.length,p=m.localReader,q=m.colModel,r=p.cell,s=(m.multiselect===!0?1:0)+(m.subGrid===!0?1:0)+(m.rownumbers===!0?1:0),t=m.scroll?$.jgrid.randId():1;if("local"===m.datatype&&p.repeatitems===!0)for(j=G(s),k=F("local"),e=m.keyIndex===!1?$.isFunction(p.id)?p.id.call(d,n):p.id:m.keyIndex,a=0;o>a;a++){for(c=n[a],f=$.jgrid.getAccessor(c,e),void 0===f&&("number"==typeof e&&null!=q[e+s]&&(f=$.jgrid.getAccessor(c,q[e+s].name)),void 0===f&&(f=t+a,r&&(g=$.jgrid.getAccessor(c,r)||c,f=null!=g&&void 0!==g[e]?g[e]:f,g=null))),i={},i[p.id]=f,r&&(c=$.jgrid.getAccessor(c,r)||c),l=$.isArray(c)?j:k,b=0;b<l.length;b++)h=$.jgrid.getAccessor(c,l[b]),i[q[b+s].name]=h;$.extend(!0,n[a],i)}},J=function(){var a,b,c,e=d.p.data.length;for(a=d.p.keyName===!1||d.p.loadonce===!0?d.p.localReader.id:d.p.keyName,d.p._index=[],b=0;e>b;b++)c=$.jgrid.getAccessor(d.p.data[b],a),void 0===c&&(c=String(b+1)),d.p._index[c]=b},K=function(a,b,c,e,f){var g,h="-1",i="",j=b?"display:none;":"",k=$(d).triggerHandler("jqGridRowAttr",[e,f,a]);if("object"!=typeof k&&(k=$.isFunction(d.p.rowattr)?d.p.rowattr.call(d,e,f,a):"string"==typeof d.p.rowattr&&null!=$.jgrid.rowattr&&$.isFunction($.jgrid.rowattr[d.p.rowattr])?$.jgrid.rowattr[d.p.rowattr].call(d,e,f,a):{}),!$.isEmptyObject(k)){k.hasOwnProperty("id")&&(a=k.id,delete k.id),k.hasOwnProperty("tabindex")&&(h=k.tabindex,delete k.tabindex),k.hasOwnProperty("style")&&(j+=k.style,delete k.style),k.hasOwnProperty("class")&&(c+=" "+k["class"],delete k["class"]);try{delete k.role}catch(l){}for(g in k)k.hasOwnProperty(g)&&(i+=" "+g+"="+k[g])}return'<tr role="row" id="'+a+'" tabindex="'+h+'" class="'+c+'"'+(""===j?"":' style="'+j+'"')+i+">"},L=function(a,b,c,e){var f=new Date,g="local"!==d.p.datatype&&d.p.loadonce||"xmlstring"===d.p.datatype,h="_id_",i=d.p.xmlReader,j="local"===d.p.datatype?"local":"xml";if(g&&(d.p.data=[],d.p._index={},d.p.localReader.id=h),d.p.reccount=0,$.isXMLDoc(a)){-1!==d.p.treeANode||d.p.scroll?b=b>1?b:1:(H.call(d,!1,!0),b=1);var m,n,o,p,q,r,s,t,u,v,w=$(d),x=0,z=d.p.multiselect===!0?1:0,A=0,B=d.p.rownumbers===!0?1:0,I=[],J={},L=[],M=d.p.altRows===!0?d.p.altclass:"",N=k(l,"rowBox",!0,"jqgrow ui-row-"+d.p.direction);d.p.subGrid===!0&&(A=1,p=$.jgrid.getMethod("addSubGridCell")),i.repeatitems||(I=F(j)),q=d.p.keyName===!1?$.isFunction(i.id)?i.id.call(d,a):i.id:d.p.keyName,r=-1===String(q).indexOf("[")?I.length?function(a,b){return $(q,a).text()||b}:function(a,b){return $(i.cell,a).eq(q).text()||b}:function(a,b){return a.getAttribute(q.replace(/[\[\]]/g,""))||b},d.p.userData={},d.p.page=y($.jgrid.getXmlData(a,i.page),d.p.page),d.p.lastpage=y($.jgrid.getXmlData(a,i.total),1),d.p.records=y($.jgrid.getXmlData(a,i.records)),$.isFunction(i.userdata)?d.p.userData=i.userdata.call(d,a)||{}:$.jgrid.getXmlData(a,i.userdata,!0).each(function(){d.p.userData[this.getAttribute("name")]=$(this).text()});var O=$.jgrid.getXmlData(a,i.root,!0);O=$.jgrid.getXmlData(O,i.row,!0),O||(O=[]);var P,Q=O.length,R=0,S=[],T=parseInt(d.p.rowNum,10),U=d.p.scroll?$.jgrid.randId():1;if(Q>0&&d.p.page<=0&&(d.p.page=1),O&&Q){e&&(T*=e+1);var V,W=$.isFunction(d.p.afterInsertRow),X=!1,Y=$("#"+$.jgrid.jqID(d.p.id)+" tbody:first"),Z=B?k(l,"rownumBox",!1,"jqgrid-rownum"):"",_=z?k(l,"multiBox",!1,"cbox"):"";for(d.p.grouping&&(X=d.p.groupingView.groupCollapse===!0,V=$.jgrid.getMethod("groupingPrepare"));Q>R;){t=O[R],u=r(t,U+R),u=d.p.idPrefix+u,P=0===b?0:b+1,v=N+((P+R)%2===1?" "+M:"");var ab=L.length;if(L.push(""),B&&L.push(E(0,R,d.p.page,d.p.rowNum,Z)),z&&L.push(D(u,B,R,!1,_)),A&&L.push(p.call(w,z+B,R+b)),i.repeatitems){s||(s=G(z+A+B));var bb=$.jgrid.getXmlData(t,i.cell,!0);$.each(s,function(a){var c=bb[this];return c?(o=c.textContent||c.text,J[d.p.colModel[a+z+A+B].name]=o,void L.push(C(u,o,a+z+A+B,R+b,t,J))):!1})}else for(m=0;m<I.length;m++)o=$.jgrid.getXmlData(t,I[m]),J[d.p.colModel[m+z+A+B].name]=o,L.push(C(u,o,m+z+A+B,R+b,t,J));if(L[ab]=K(u,X,v,J,t),L.push("</tr>"),d.p.grouping&&(S.push(L),d.p.groupingView._locgr||V.call(w,J,R),L=[]),(g||d.p.treeGrid===!0&&!d.p._ald)&&(J[h]=$.jgrid.stripPref(d.p.idPrefix,u),d.p.data.push(J),d.p._index[J[h]]=d.p.data.length-1),d.p.gridview===!1&&(Y.append(L.join("")),w.triggerHandler("jqGridAfterInsertRow",[u,J,t]),W&&d.p.afterInsertRow.call(d,u,J,t),L=[]),J={},x++,R++,x===T)break}}if(d.p.gridview===!0&&(n=d.p.treeANode>-1?d.p.treeANode:0,d.p.grouping?g||(w.jqGrid("groupingRender",S,d.p.colModel.length,d.p.page,T),S=null):d.p.treeGrid===!0&&n>0?$(d.rows[n]).after(L.join("")):(Y.append(L.join("")),d.grid.cols=d.rows[0].cells)),d.p.subGrid===!0)try{w.jqGrid("addSubGrid",z+B)}catch(cb){}if(d.p.totaltime=new Date-f,x>0&&0===d.p.records&&(d.p.records=Q),L=null,d.p.treeGrid===!0)try{w.jqGrid("setTreeNode",n+1,x+n+1)}catch(db){}if(d.p.reccount=x,d.p.treeANode=-1,d.p.userDataOnFooter&&w.jqGrid("footerData","set",d.p.userData,!0),g&&(d.p.records=Q,d.p.lastpage=Math.ceil(Q/T)),c||d.updatepager(!1,!0),g){for(;Q>x;){if(t=O[x],u=r(t,x+U),u=d.p.idPrefix+u,i.repeatitems){s||(s=G(z+A+B));var eb=$.jgrid.getXmlData(t,i.cell,!0);$.each(s,function(a){var b=eb[this];return b?(o=b.textContent||b.text,void(J[d.p.colModel[a+z+A+B].name]=o)):!1})}else for(m=0;m<I.length;m++)o=$.jgrid.getXmlData(t,I[m]),J[d.p.colModel[m+z+A+B].name]=o;J[h]=$.jgrid.stripPref(d.p.idPrefix,u),d.p.grouping&&V.call(w,J,x),d.p.data.push(J),d.p._index[J[h]]=d.p.data.length-1,J={},x++}d.p.grouping&&(d.p.groupingView._locgr=!0,w.jqGrid("groupingRender",S,d.p.colModel.length,d.p.page,T),S=null)}}},M=function(a,b,c,e){var f=new Date;if(a){-1!==d.p.treeANode||d.p.scroll?b=b>1?b:1:(H.call(d,!1,!0),b=1);var g,h,i="_id_",j="local"!==d.p.datatype&&d.p.loadonce||"jsonstring"===d.p.datatype;j&&(d.p.data=[],d.p._index={},d.p.localReader.id=i),d.p.reccount=0,"local"===d.p.datatype?(g=d.p.localReader,h="local"):(g=d.p.jsonReader,h="json");var m,o,p,q,r,s,t,u,v,w,x,z,A=$(d),B=0,I=[],J=d.p.multiselect?1:0,L=d.p.subGrid===!0?1:0,M=d.p.rownumbers===!0?1:0,N=G(J+L+M),O=F(h),P={},Q=[],R=d.p.altRows===!0?d.p.altclass:"",S=k(l,"rowBox",!0,"jqgrow ui-row-"+d.p.direction);d.p.page=y($.jgrid.getAccessor(a,g.page),d.p.page),d.p.lastpage=y($.jgrid.getAccessor(a,g.total),1),d.p.records=y($.jgrid.getAccessor(a,g.records)),d.p.userData=$.jgrid.getAccessor(a,g.userdata)||{},L&&(r=$.jgrid.getMethod("addSubGridCell")),v=d.p.keyName===!1?$.isFunction(g.id)?g.id.call(d,a):g.id:d.p.keyName,u=$.jgrid.getAccessor(a,g.root),null==u&&$.isArray(a)&&(u=a),u||(u=[]),t=u.length,o=0,t>0&&d.p.page<=0&&(d.p.page=1);var T,U,V=parseInt(d.p.rowNum,10),W=d.p.scroll?$.jgrid.randId():1,X=!1;e&&(V*=e+1),"local"!==d.p.datatype||d.p.deselectAfterSort||(X=!0);var Y,Z=$.isFunction(d.p.afterInsertRow),_=[],ab=!1,bb=$("#"+$.jgrid.jqID(d.p.id)+" tbody:first"),cb=M?k(l,"rownumBox",!1,"jqgrid-rownum"):"",db=J?k(l,"multiBox",!1,"cbox"):"";for(d.p.grouping&&(ab=d.p.groupingView.groupCollapse===!0,Y=$.jgrid.getMethod("groupingPrepare"));t>o;){if(q=u[o],x=$.jgrid.getAccessor(q,v),void 0===x&&("number"==typeof v&&null!=d.p.colModel[v+J+L+M]&&(x=$.jgrid.getAccessor(q,d.p.colModel[v+J+L+M].name)),void 0===x&&(x=W+o,0===I.length&&g.cell))){var eb=$.jgrid.getAccessor(q,g.cell)||q;x=null!=eb&&void 0!==eb[v]?eb[v]:x,eb=null}x=d.p.idPrefix+x,T=1===b?0:b,z=S+((T+o)%2===1?" "+R:""),X&&(U=d.p.multiselect?-1!==$.inArray(x,d.p.selarrrow):x===d.p.selrow);var fb=Q.length;for(Q.push(""),M&&Q.push(E(0,o,d.p.page,d.p.rowNum,cb)),J&&Q.push(D(x,M,o,U,db)),L&&Q.push(r.call(A,J+M,o+b)),s=O,g.repeatitems&&(g.cell&&(q=$.jgrid.getAccessor(q,g.cell)||q),$.isArray(q)&&(s=N)),p=0;p<s.length;p++)m=$.jgrid.getAccessor(q,s[p]),P[d.p.colModel[p+J+L+M].name]=m,Q.push(C(x,m,p+J+L+M,o+b,q,P));if(z+=U?" "+n:"",Q[fb]=K(x,ab,z,P,q),Q.push("</tr>"),d.p.grouping&&(_.push(Q),d.p.groupingView._locgr||Y.call(A,P,o),Q=[]),(j||d.p.treeGrid===!0&&!d.p._ald)&&(P[i]=$.jgrid.stripPref(d.p.idPrefix,x),d.p.data.push(P),d.p._index[P[i]]=d.p.data.length-1),d.p.gridview===!1&&(bb.append(Q.join("")),A.triggerHandler("jqGridAfterInsertRow",[x,P,q]),Z&&d.p.afterInsertRow.call(d,x,P,q),Q=[]),P={},B++,o++,B===V)break}if(d.p.gridview===!0&&(w=d.p.treeANode>-1?d.p.treeANode:0,d.p.grouping?j||(A.jqGrid("groupingRender",_,d.p.colModel.length,d.p.page,V),_=null):d.p.treeGrid===!0&&w>0?$(d.rows[w]).after(Q.join("")):(bb.append(Q.join("")),d.grid.cols=d.rows[0].cells)),d.p.subGrid===!0)try{A.jqGrid("addSubGrid",J+M)}catch(gb){}if(d.p.totaltime=new Date-f,B>0&&0===d.p.records&&(d.p.records=t),Q=null,d.p.treeGrid===!0)try{A.jqGrid("setTreeNode",w+1,B+w+1)}catch(hb){}if(d.p.reccount=B,d.p.treeANode=-1,d.p.userDataOnFooter&&A.jqGrid("footerData","set",d.p.userData,!0),j&&(d.p.records=t,d.p.lastpage=Math.ceil(t/V)),c||d.updatepager(!1,!0),j){for(;t>B&&u[B];){if(q=u[B],x=$.jgrid.getAccessor(q,v),void 0===x&&("number"==typeof v&&null!=d.p.colModel[v+J+L+M]&&(x=$.jgrid.getAccessor(q,d.p.colModel[v+J+L+M].name)),void 0===x&&(x=W+B,0===I.length&&g.cell))){var ib=$.jgrid.getAccessor(q,g.cell)||q;x=null!=ib&&void 0!==ib[v]?ib[v]:x,ib=null}if(q){for(x=d.p.idPrefix+x,s=O,g.repeatitems&&(g.cell&&(q=$.jgrid.getAccessor(q,g.cell)||q),$.isArray(q)&&(s=N)),p=0;p<s.length;p++)P[d.p.colModel[p+J+L+M].name]=$.jgrid.getAccessor(q,s[p]);P[i]=$.jgrid.stripPref(d.p.idPrefix,x),d.p.grouping&&Y.call(A,P,B),d.p.data.push(P),d.p._index[P[i]]=d.p.data.length-1,P={}}B++}d.p.grouping&&(d.p.groupingView._locgr=!0,A.jqGrid("groupingRender",_,d.p.colModel.length,d.p.page,V),_=null)}}},N=function(){function a(b){var c,e,f,g,h,i,k=0;if(null!=b.groups){for(e=b.groups.length&&"OR"===b.groupOp.toString().toUpperCase(),e&&q.orBegin(),c=0;c<b.groups.length;c++){k>0&&e&&q.or();try{a(b.groups[c])}catch(l){alert(l)}k++}e&&q.orEnd()}if(null!=b.rules)try{for(f=b.rules.length&&"OR"===b.groupOp.toString().toUpperCase(),f&&q.orBegin(),c=0;c<b.rules.length;c++)h=b.rules[c],g=b.groupOp.toString().toUpperCase(),p[h.op]&&h.field&&(k>0&&g&&"OR"===g&&(q=q.or()),i=j[h.field],"date"===i.stype&&i.srcfmt&&i.newfmt&&i.srcfmt!==i.newfmt&&(h.data=$.jgrid.parseDate.call(d,i.newfmt,h.data,i.srcfmt)),q=p[h.op](q,g)(h.field,h.data,j[h.field])),k++;f&&q.orEnd()}catch(m){alert(m)}}var b,c,e,f,g=d.p.multiSort?[]:"",h=[],i=!1,j={},k=[],l=[];if($.isArray(d.p.data)){var m,n,o=d.p.grouping?d.p.groupingView:!1;if($.each(d.p.colModel,function(){if(c=this.sorttype||"text","date"===c||"datetime"===c?(this.formatter&&"string"==typeof this.formatter&&"date"===this.formatter?(b=this.formatoptions&&this.formatoptions.srcformat?this.formatoptions.srcformat:$.jgrid.getRegional(d,"formatter.date.srcformat"),e=this.formatoptions&&this.formatoptions.newformat?this.formatoptions.newformat:$.jgrid.getRegional(d,"formatter.date.newformat")):b=e=this.datefmt||"Y-m-d",j[this.name]={stype:c,srcfmt:b,newfmt:e,sfunc:this.sortfunc||null}):j[this.name]={stype:c,srcfmt:"",newfmt:"",sfunc:this.sortfunc||null},d.p.grouping)for(n=0,m=o.groupField.length;m>n;n++)if(this.name===o.groupField[n]){var a=this.name;this.index&&(a=this.index),k[n]=j[a],l[n]=a}d.p.multiSort||i||this.index!==d.p.sortname&&this.name!==d.p.sortname||(g=this.name,i=!0)}),d.p.multiSort&&(g=s,h=t),d.p.treeGrid&&d.p._sort)return void $(d).jqGrid("SortTree",g,d.p.sortorder,j[g].stype||"text",j[g].srcfmt||"");var p={eq:function(a){return a.equals},ne:function(a){return a.notEquals},lt:function(a){return a.less},le:function(a){return a.lessOrEquals},gt:function(a){return a.greater},ge:function(a){return a.greaterOrEquals},cn:function(a){return a.contains},nc:function(a,b){return"OR"===b?a.orNot().contains:a.andNot().contains},bw:function(a){return a.startsWith},bn:function(a,b){return"OR"===b?a.orNot().startsWith:a.andNot().startsWith},en:function(a,b){return"OR"===b?a.orNot().endsWith:a.andNot().endsWith},ew:function(a){return a.endsWith},ni:function(a,b){return"OR"===b?a.orNot().equals:a.andNot().equals},"in":function(a){return a.equals},nu:function(a){return a.isNull},nn:function(a,b){return"OR"===b?a.orNot().isNull:a.andNot().isNull}},q=$.jgrid.from.call(d,d.p.data);if(d.p.ignoreCase&&(q=q.ignoreCase()),d.p.search===!0){var r=d.p.postData.filters;if(r)"string"==typeof r&&(r=$.jgrid.parse(r)),a(r);else try{f=j[d.p.postData.searchField],"date"===f.stype&&f.srcfmt&&f.newfmt&&f.srcfmt!==f.newfmt&&(d.p.postData.searchString=$.jgrid.parseDate.call(d,f.newfmt,d.p.postData.searchString,f.srcfmt)),q=p[d.p.postData.searchOper](q)(d.p.postData.searchField,d.p.postData.searchString,j[d.p.postData.searchField])}catch(u){}}else d.p.treeGrid&&"nested"===d.p.treeGridModel&&q.orderBy(d.p.treeReader.left_field,"asc","integer","",null);if(d.p.treeGrid&&"adjacency"===d.p.treeGridModel&&(m=0,g=null),d.p.grouping)for(n=0;m>n;n++)q.orderBy(l[n],o.groupOrder[n],k[n].stype,k[n].srcfmt);d.p.multiSort?$.each(g,function(a){q.orderBy(this,h[a],j[this].stype,j[this].srcfmt,j[this].sfunc)}):g&&d.p.sortorder&&i&&("DESC"===d.p.sortorder.toUpperCase()?q.orderBy(d.p.sortname,"d",j[g].stype,j[g].srcfmt,j[g].sfunc):q.orderBy(d.p.sortname,"a",j[g].stype,j[g].srcfmt,j[g].sfunc));var v=q.select(),w=parseInt(d.p.rowNum,10),x=v.length,y=parseInt(d.p.page,10),z=Math.ceil(x/w),A={};if((d.p.search||d.p.resetsearch)&&d.p.grouping&&d.p.groupingView._locgr){d.p.groupingView.groups=[];var B,C,D,E=$.jgrid.getMethod("groupingPrepare");if(d.p.footerrow&&d.p.userDataOnFooter){for(C in d.p.userData)d.p.userData.hasOwnProperty(C)&&(d.p.userData[C]=0);D=!0}for(B=0;x>B;B++){if(D)for(C in d.p.userData)d.p.userData.hasOwnProperty(C)&&(d.p.userData[C]+=parseFloat(v[B][C]||0));E.call($(d),v[B],B,w)}}return v=d.p.treeGrid&&d.p.search?$(d).jqGrid("searchTree",v):v.slice((y-1)*w,y*w),q=null,j=null,A[d.p.localReader.total]=z,A[d.p.localReader.page]=y,A[d.p.localReader.records]=x,A[d.p.localReader.root]=v,A[d.p.localReader.userdata]=d.p.userData,v=null,A}},O=function(a,b){var c,e,f,g,h,i,j,n,p="",q=d.p.pager?$.jgrid.jqID(d.p.pager.substr(1)):"",r=q?"_"+q:"",s=d.p.toppager?"_"+d.p.toppager.substr(1):"";if(f=parseInt(d.p.page,10)-1,0>f&&(f=0),f*=parseInt(d.p.rowNum,10),h=f+d.p.reccount,d.p.scroll){var t=$("tbody:first > tr:gt(0)",d.grid.bDiv);f=h-t.length,d.p.reccount=t.length;var u=t.outerHeight()||d.grid.prevRowHeight;if(u){var v=f*u,w=parseInt(d.p.records,10)*u;$(">div:first",d.grid.bDiv).css({height:w}).children("div:first").css({height:v,display:v?"":"none"}),0===d.grid.bDiv.scrollTop&&d.p.page>1&&(d.grid.bDiv.scrollTop=d.p.rowNum*(d.p.page-1)*u)}d.grid.bDiv.scrollLeft=d.grid.hDiv.scrollLeft}if(p=d.p.pager||"",p+=d.p.toppager?p?","+d.p.toppager:d.p.toppager:""){if(j=$.jgrid.getRegional(d,"formatter.integer"),c=y(d.p.page),e=y(d.p.lastpage),$(".selbox",p)[this.p.useProp?"prop":"attr"]("disabled",!1),d.p.pginput===!0&&($("#input"+r).html($.jgrid.template($.jgrid.getRegional(d,"defaults.pgtext",d.p.pgtext)||"","<input "+k(l,"pgInput",!1,"ui-pg-input")+" type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1_"+$.jgrid.jqID(q)+"'></span>")),d.p.toppager&&$("#input_t"+s).html($.jgrid.template($.jgrid.getRegional(d,"defaults.pgtext",d.p.pgtext)||"","<input "+k(l,"pgInput",!1,"ui-pg-input")+" type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1_"+$.jgrid.jqID(q)+"_toppager'></span>")),$(".ui-pg-input",p).val(d.p.page),n=d.p.toppager?"#sp_1"+r+",#sp_1"+r+"_toppager":"#sp_1"+r,$(n).html($.fmatter?$.fmatter.util.NumberFormat(d.p.lastpage,j):d.p.lastpage)),d.p.viewrecords)if(0===d.p.reccount)$(".ui-paging-info",p).html($.jgrid.getRegional(d,"defaults.emptyrecords",d.p.emptyrecords));else{g=f+1,i=d.p.records,$.fmatter&&(g=$.fmatter.util.NumberFormat(g,j),h=$.fmatter.util.NumberFormat(h,j),i=$.fmatter.util.NumberFormat(i,j));var x=$.jgrid.getRegional(d,"defaults.recordtext",d.p.recordtext);$(".ui-paging-info",p).html($.jgrid.template(x,g,h,i))}d.p.pgbuttons===!0&&(0>=c&&(c=e=0),1===c||0===c?($("#first"+r+", #prev"+r).addClass(m).removeClass(o),d.p.toppager&&$("#first_t"+s+", #prev_t"+s).addClass(m).removeClass(o)):($("#first"+r+", #prev"+r).removeClass(m),d.p.toppager&&$("#first_t"+s+", #prev_t"+s).removeClass(m)),c===e||0===c?($("#next"+r+", #last"+r).addClass(m).removeClass(o),d.p.toppager&&$("#next_t"+s+", #last_t"+s).addClass(m).removeClass(o)):($("#next"+r+", #last"+r).removeClass(m),d.p.toppager&&$("#next_t"+s+", #last_t"+s).removeClass(m)))}a===!0&&d.p.rownumbers===!0&&$(">td.jqgrid-rownum",d.rows).each(function(a){$(this).html(f+1+a)}),b&&d.p.jqgdnd&&$(d).jqGrid("gridDnD","updateDnD"),$(d).triggerHandler("jqGridGridComplete"),$.isFunction(d.p.gridComplete)&&d.p.gridComplete.call(d),$(d).triggerHandler("jqGridAfterGridComplete")},P=function(){d.grid.hDiv.loading=!0,d.p.hiddengrid||$(d).jqGrid("progressBar",{method:"show",loadtype:d.p.loadui,htmlcontent:$.jgrid.getRegional(d,"defaults.loadtext",d.p.loadtext)})},Q=function(){d.grid.hDiv.loading=!1,$(d).jqGrid("progressBar",{method:"hide",loadtype:d.p.loadui})},R=function(a){if(!d.grid.hDiv.loading){var b,c,e=d.p.scroll&&a===!1,f={},g=d.p.prmNames;d.p.page<=0&&(d.p.page=Math.min(1,d.p.lastpage)),null!==g.search&&(f[g.search]=d.p.search),null!==g.nd&&(f[g.nd]=(new Date).getTime()),null!==g.rows&&(f[g.rows]=d.p.rowNum),null!==g.page&&(f[g.page]=d.p.page),null!==g.sort&&(f[g.sort]=d.p.sortname),null!==g.order&&(f[g.order]=d.p.sortorder),null!==d.p.rowTotal&&null!==g.totalrows&&(f[g.totalrows]=d.p.rowTotal);var h=$.isFunction(d.p.loadComplete),i=h?d.p.loadComplete:null,j=0;if(a=a||1,a>1?null!==g.npage?(f[g.npage]=a,j=a-1,a=1):i=function(b){d.p.page++,d.grid.hDiv.loading=!1,h&&d.p.loadComplete.call(d,b),R(a-1)}:null!==g.npage&&delete d.p.postData[g.npage],d.p.grouping){$(d).jqGrid("groupingSetup");var k,l=d.p.groupingView,m="";for(k=0;k<l.groupField.length;k++){var n=l.groupField[k];$.each(d.p.colModel,function(a,b){b.name===n&&b.index&&(n=b.index)}),m+=n+" "+l.groupOrder[k]+", "}f[g.sort]=m+f[g.sort]}$.extend(d.p.postData,f);var o=d.p.scroll?d.rows.length-1:1,p=$(d).triggerHandler("jqGridBeforeRequest");if(p===!1||"stop"===p)return;if($.isFunction(d.p.datatype))return void d.p.datatype.call(d,d.p.postData,"load_"+d.p.id,o,a,j);if($.isFunction(d.p.beforeRequest)&&(p=d.p.beforeRequest.call(d),void 0===p&&(p=!0),p===!1))return;switch(b=d.p.datatype.toLowerCase()){case"json":case"jsonp":case"xml":case"script":$.ajax($.extend({url:d.p.url,type:d.p.mtype,dataType:b,data:$.isFunction(d.p.serializeGridData)?d.p.serializeGridData.call(d,d.p.postData):d.p.postData,success:function(c,f,g){return $.isFunction(d.p.beforeProcessing)&&d.p.beforeProcessing.call(d,c,f,g)===!1?void Q():("xml"===b?L(c,o,a>1,j):M(c,o,a>1,j),$(d).triggerHandler("jqGridLoadComplete",[c]),i&&i.call(d,c),$(d).triggerHandler("jqGridAfterLoadComplete",[c]),e&&d.grid.populateVisible(),(d.p.loadonce||d.p.treeGrid)&&(d.p.datatype="local"),c=null,void(1===a&&Q()))},error:function(b,c,e){$.isFunction(d.p.loadError)&&d.p.loadError.call(d,b,c,e),1===a&&Q(),b=null},beforeSend:function(a,b){var c=!0;return $.isFunction(d.p.loadBeforeSend)&&(c=d.p.loadBeforeSend.call(d,a,b)),void 0===c&&(c=!0),c===!1?!1:void P()}},$.jgrid.ajaxOptions,d.p.ajaxGridOptions));break;case"xmlstring":P(),c="string"!=typeof d.p.datastr?d.p.datastr:$.parseXML(d.p.datastr),L(c),$(d).triggerHandler("jqGridLoadComplete",[c]),h&&d.p.loadComplete.call(d,c),$(d).triggerHandler("jqGridAfterLoadComplete",[c]),d.p.datatype="local",d.p.datastr=null,Q();break;case"jsonstring":P(),c="string"==typeof d.p.datastr?$.jgrid.parse(d.p.datastr):d.p.datastr,M(c),$(d).triggerHandler("jqGridLoadComplete",[c]),h&&d.p.loadComplete.call(d,c),$(d).triggerHandler("jqGridAfterLoadComplete",[c]),d.p.datatype="local",d.p.datastr=null,Q();break;case"local":case"clientside":P(),d.p.datatype="local",d.p._ald=!0;var q=N();M(q,o,a>1,j),$(d).triggerHandler("jqGridLoadComplete",[q]),i&&i.call(d,q),$(d).triggerHandler("jqGridAfterLoadComplete",[q]),e&&d.grid.populateVisible(),Q(),d.p._ald=!1}d.p._sort=!1}},S=function(a){$("#cb_"+$.jgrid.jqID(d.p.id),d.grid.hDiv)[d.p.useProp?"prop":"attr"]("checked",a);var b=d.p.frozenColumns?d.p.id+"_frozen":"";b&&$("#cb_"+$.jgrid.jqID(d.p.id),d.grid.fhDiv)[d.p.useProp?"prop":"attr"]("checked",a)},T=function(a,b){var c,e,f,g,i,j,n,p="<td class='ui-pg-button "+m+"'><span class='ui-separator'></span></td>",r="",s="<table class='ui-pg-table ui-common-table ui-paging-pager'><tbody><tr>",t="",u=function(a,b){var c;return $.isFunction(d.p.onPaging)&&(c=d.p.onPaging.call(d,a,b)),"stop"===c?!1:(d.p.selrow=null,d.p.multiselect&&(d.p.selarrrow=[],S(!1)),d.p.savedRow=[],!0)};if(a=a.substr(1),b+="_"+a,c="pg_"+a,e=a+"_left",f=a+"_center",g=a+"_right",$("#"+$.jgrid.jqID(a)).append("<div id='"+c+"' class='ui-pager-control' role='group'><table class='ui-pg-table ui-common-table ui-pager-table'><tbody><tr><td id='"+e+"' align='left'></td><td id='"+f+"' align='center' style='white-space:pre;'></td><td id='"+g+"' align='right'></td></tr></tbody></table></div>").attr("dir","ltr"),d.p.rowList.length>0){t='<td dir="'+h+'">',t+="<select "+k(l,"pgSelectBox",!1,"ui-pg-selbox")+' role="listbox" title="'+($.jgrid.getRegional(d,"defaults.pgrecs",d.p.pgrecs)||"")+'">';var v;for(n=0;n<d.p.rowList.length;n++)v=d.p.rowList[n].toString().split(":"),1===v.length&&(v[1]=v[0]),t+='<option role="option" value="'+v[0]+'"'+(y(d.p.rowNum,0)===y(v[0],0)?' selected="selected"':"")+">"+v[1]+"</option>";t+="</select></td>"}if("rtl"===h&&(s+=t),d.p.pginput===!0&&(r="<td id='input"+b+"' dir='"+h+"'>"+$.jgrid.template($.jgrid.getRegional(d,"defaults.pgtext",d.p.pgtext)||"","<input class='ui-pg-input' type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1_"+$.jgrid.jqID(a)+"'></span>")+"</td>"),d.p.pgbuttons===!0){var w=["first"+b,"prev"+b,"next"+b,"last"+b],x=k(l,"pgButtonBox",!0,"ui-pg-button"),z=[$.jgrid.getRegional(d,"defaults.pgfirst",d.p.pgfirst)||"",$.jgrid.getRegional(d,"defaults.pgprev",d.p.pgprev)||"",$.jgrid.getRegional(d,"defaults.pgnext",d.p.pgnext)||"",$.jgrid.getRegional(d,"defaults.pglast",d.p.pglast)||""];"rtl"===h&&(w.reverse(),z.reverse()),s+="<td id='"+w[0]+"' class='"+x+"' title='"+z[0]+"'><span "+k(l,"icon_first",!1,q)+"></span></td>",s+="<td id='"+w[1]+"' class='"+x+"'  title='"+z[1]+"'><span "+k(l,"icon_prev",!1,q)+"></span></td>",s+=""!==r?p+r+p:"",s+="<td id='"+w[2]+"' class='"+x+"' title='"+z[2]+"'><span "+k(l,"icon_next",!1,q)+"></span></td>",s+="<td id='"+w[3]+"' class='"+x+"' title='"+z[3]+"'><span "+k(l,"icon_end",!1,q)+"></span></td>"}else""!==r&&(s+=r);"ltr"===h&&(s+=t),s+="</tr></tbody></table>",d.p.viewrecords===!0&&$("td#"+a+"_"+d.p.recordpos,"#"+c).append("<div dir='"+h+"' style='text-align:"+d.p.recordpos+"' class='ui-paging-info'></div>"),$("td#"+a+"_"+d.p.pagerpos,"#"+c).append(s),j=$("#gbox_"+$.jgrid.jqID(d.p.id)).css("font-size")||"11px",$("#gbox_"+$.jgrid.jqID(d.p.id)).append("<div id='testpg' "+k(l,"entrieBox",!1,"ui-jqgrid")+" style='font-size:"+j+";visibility:hidden;' ></div>"),i=$(s).clone().appendTo("#testpg").width(),$("#testpg").remove(),i>0&&(""!==r&&(i+=50),$("td#"+a+"_"+d.p.pagerpos,"#"+c).width(i)),d.p._nvtd=[],d.p._nvtd[0]=Math.floor(i?(d.p.width-i)/2:d.p.width/3),d.p._nvtd[1]=0,s=null,$(".ui-pg-selbox","#"+c).bind("change",function(){return u("records",this)?(d.p.page=Math.round(d.p.rowNum*(d.p.page-1)/this.value-.5)+1,d.p.rowNum=this.value,d.p.pager&&$(".ui-pg-selbox",d.p.pager).val(this.value),d.p.toppager&&$(".ui-pg-selbox",d.p.toppager).val(this.value),R(),!1):!1}),d.p.pgbuttons===!0&&($(".ui-pg-button","#"+c).hover(function(){$(this).hasClass(m)?this.style.cursor="default":($(this).addClass(o),this.style.cursor="pointer")},function(){$(this).hasClass(m)||($(this).removeClass(o),this.style.cursor="default")}),$("#first"+$.jgrid.jqID(b)+", #prev"+$.jgrid.jqID(b)+", #next"+$.jgrid.jqID(b)+", #last"+$.jgrid.jqID(b)).click(function(){if($(this).hasClass(m))return!1;var a=y(d.p.page,1),c=y(d.p.lastpage,1),e=!1,f=!0,g=!0,h=!0,i=!0;return 0===c||1===c?(f=!1,g=!1,h=!1,i=!1):c>1&&a>=1?1===a?(f=!1,g=!1):a===c&&(h=!1,i=!1):c>1&&0===a&&(h=!1,i=!1,a=c-1),u(this.id.split("_")[0],this)?(this.id==="first"+b&&f&&(d.p.page=1,e=!0),this.id==="prev"+b&&g&&(d.p.page=a-1,e=!0),this.id==="next"+b&&h&&(d.p.page=a+1,e=!0),this.id==="last"+b&&i&&(d.p.page=c,e=!0),e&&R(),!1):!1})),d.p.pginput===!0&&$("#"+c).on("keypress","input.ui-pg-input",function(a){var b=a.charCode||a.keyCode||0;return 13===b?u("user",this)?($(this).val(y($(this).val(),1)),d.p.page=$(this).val()>0?$(this).val():d.p.page,R(),!1):!1:this})},U=function(a,b){var c,e=d.p.colModel,f=d.p.frozenColumns?b:d.grid.headers[a].el,g="";$("span.ui-grid-ico-sort",f).addClass(m),$(f).attr("aria-selected","false"),c="local"===d.p.datatype?e[a].name:e[a].index||e[a].name,e[a].lso?"asc"===e[a].lso?(e[a].lso+="-desc",g="desc"):"desc"===e[a].lso?(e[a].lso+="-asc",g="asc"):("asc-desc"===e[a].lso||"desc-asc"===e[a].lso)&&(e[a].lso=""):e[a].lso=g=e[a].firstsortorder||"asc",g?($("span.s-ico",f).show(),$("span.ui-icon-"+g,f).removeClass(m),$(f).attr("aria-selected","true")):d.p.viewsortcols[0]||$("span.s-ico",f).hide();var h=s.indexOf(c);-1===h?(s.push(c),t.push(g)):g?t[h]=g:(t.splice(h,1),s.splice(h,1)),d.p.sortorder="",d.p.sortname="";for(var i=0,j=s.length;j>i;i++)i>0&&(d.p.sortname+=", "),d.p.sortname+=s[i],i!==j-1&&(d.p.sortname+=" "+t[i]);d.p.sortorder=t[j-1]},V=function(a,b,c,e,f){if(d.p.colModel[b].sortable&&!(d.p.savedRow.length>0)){if(c||(d.p.lastsort===b&&""!==d.p.sortname?"asc"===d.p.sortorder?d.p.sortorder="desc":"desc"===d.p.sortorder&&(d.p.sortorder="asc"):d.p.sortorder=d.p.colModel[b].firstsortorder||"asc",d.p.page=1),d.p.multiSort)U(b,f);else{if(e){if(d.p.lastsort===b&&d.p.sortorder===e&&!c)return;d.p.sortorder=e}var g,h=d.grid.headers[d.p.lastsort]?d.grid.headers[d.p.lastsort].el:null,i=d.p.frozenColumns?f:d.grid.headers[b].el,j="single"===d.p.viewsortcols[1]?!0:!1;g=$(h).find("span.ui-grid-ico-sort"),g.addClass(m),j&&$(g).css("display","none"),$(h).attr("aria-selected","false"),d.p.frozenColumns&&(g=d.grid.fhDiv.find("span.ui-grid-ico-sort"),g.addClass(m),j&&g.css("display","none"),d.grid.fhDiv.find("th").attr("aria-selected","false")),g=$(i).find("span.ui-icon-"+d.p.sortorder),g.removeClass(m),j&&g.css("display",""),$(i).attr("aria-selected","true"),d.p.viewsortcols[0]||(d.p.lastsort!==b?(d.p.frozenColumns&&d.grid.fhDiv.find("span.s-ico").hide(),$("span.s-ico",h).hide(),$("span.s-ico",i).show()):""===d.p.sortname&&$("span.s-ico",i).show()),a=a.substring(5+d.p.id.length+1),d.p.sortname=d.p.colModel[b].index||a}if("stop"===$(d).triggerHandler("jqGridSortCol",[d.p.sortname,b,d.p.sortorder]))return void(d.p.lastsort=b);if($.isFunction(d.p.onSortCol)&&"stop"===d.p.onSortCol.call(d,d.p.sortname,b,d.p.sortorder))return void(d.p.lastsort=b);if("local"===d.p.datatype?d.p.deselectAfterSort&&$(d).jqGrid("resetSelection"):(d.p.selrow=null,d.p.multiselect&&S(!1),d.p.selarrrow=[],d.p.savedRow=[]),d.p.scroll){var k=d.grid.bDiv.scrollLeft;H.call(d,!0,!1),d.grid.hDiv.scrollLeft=k}d.p.subGrid&&"local"===d.p.datatype&&$("td.sgexpanded","#"+$.jgrid.jqID(d.p.id)).each(function(){$(this).trigger("click")}),d.p._sort=!0,R(),d.p.lastsort=b,d.p.sortname!==a&&b&&(d.p.lastsort=b)}},W=function(){var a,b,c,f,g=0,h=$.jgrid.cell_width?0:y(d.p.cellLayout,0),i=0,j=y(d.p.scrollOffset,0),k=!1,l=0;$.each(d.p.colModel,function(){if(void 0===this.hidden&&(this.hidden=!1),d.p.grouping&&d.p.autowidth){var a=$.inArray(this.name,d.p.groupingView.groupField);a>=0&&d.p.groupingView.groupColumnShow.length>a&&(this.hidden=!d.p.groupingView.groupColumnShow[a])}this.widthOrg=b=y(this.width,0),this.hidden===!1&&(g+=b+h,this.fixed?l+=b+h:i++)}),isNaN(d.p.width)&&(d.p.width=g+(d.p.shrinkToFit!==!1||isNaN(d.p.height)?0:j)),e.width=d.p.width,d.p.tblwidth=g,d.p.shrinkToFit===!1&&d.p.forceFit===!0&&(d.p.forceFit=!1),d.p.shrinkToFit===!0&&i>0&&(c=e.width-h*i-l,isNaN(d.p.height)||(c-=j,k=!0),g=0,$.each(d.p.colModel,function(e){this.hidden!==!1||this.fixed||(b=Math.round(c*this.width/(d.p.tblwidth-h*i-l)),this.width=b,g+=b,a=e)}),f=0,k?e.width-l-(g+h*i)!==j&&(f=e.width-l-(g+h*i)-j):k||1===Math.abs(e.width-l-(g+h*i))||(f=e.width-l-(g+h*i)),d.p.colModel[a].width+=f,d.p.tblwidth=g+f+h*i+l,d.p.tblwidth>d.p.width&&(d.p.colModel[a].width-=d.p.tblwidth-parseInt(d.p.width,10),d.p.tblwidth=d.p.width))},X=function(a){var b,c=a,e=a;for(b=a+1;b<d.p.colModel.length;b++)if(d.p.colModel[b].hidden!==!0){e=b;break}return e-c},Y=function(a){var b=$(d.grid.headers[a].el),c=[b.position().left+b.outerWidth()];return"rtl"===d.p.direction&&(c[0]=d.p.width-c[0]),c[0]-=d.grid.bDiv.scrollLeft,c.push($(d.grid.hDiv).position().top),c.push($(d.grid.bDiv).offset().top-$(d.grid.hDiv).offset().top+$(d.grid.bDiv).height()),c},Z=function(a){var b,c=d.grid.headers,e=$.jgrid.getCellIndex(a);for(b=0;b<c.length;b++)if(a===c[b].el){e=b;break}return e};for(this.p.id=this.id,-1===$.inArray(d.p.multikey,x)&&(d.p.multikey=!1),d.p.keyName=!1,i=0;i<d.p.colModel.length;i++)w="string"==typeof d.p.colModel[i].template?null!=$.jgrid.cmTemplate&&"object"==typeof $.jgrid.cmTemplate[d.p.colModel[i].template]?$.jgrid.cmTemplate[d.p.colModel[i].template]:{}:d.p.colModel[i].template,d.p.colModel[i]=$.extend(!0,{},d.p.cmTemplate,w||{},d.p.colModel[i]),d.p.keyName===!1&&d.p.colModel[i].key===!0&&(d.p.keyName=d.p.colModel[i].name);if(d.p.sortorder=d.p.sortorder.toLowerCase(),$.jgrid.cell_width=$.jgrid.cellWidth(),d.p.grouping===!0&&(d.p.scroll=!1,d.p.rownumbers=!1,d.p.treeGrid=!1,d.p.gridview=!0),this.p.treeGrid===!0){try{$(this).jqGrid("setTreeGrid")}catch(_){}"local"!==d.p.datatype&&(d.p.localReader={id:"_id_"})}if(this.p.subGrid)try{$(d).jqGrid("setSubGrid")}catch(ab){}this.p.multiselect&&(this.p.colNames.unshift("<input role='checkbox' id='cb_"+this.p.id+"' class='cbox' type='checkbox'/>"),this.p.colModel.unshift({name:"cb",width:$.jgrid.cell_width?d.p.multiselectWidth+d.p.cellLayout:d.p.multiselectWidth,sortable:!1,resizable:!1,hidedlg:!0,search:!1,align:"center",fixed:!0,frozen:!0})),this.p.rownumbers&&(this.p.colNames.unshift(""),this.p.colModel.unshift({name:"rn",width:d.p.rownumWidth,sortable:!1,resizable:!1,hidedlg:!0,search:!1,align:"center",fixed:!0,frozen:!0})),d.p.xmlReader=$.extend(!0,{root:"rows",row:"row",page:"rows>page",total:"rows>total",records:"rows>records",repeatitems:!0,cell:"cell",id:"[id]",userdata:"userdata",subgrid:{root:"rows",row:"row",repeatitems:!0,cell:"cell"}},d.p.xmlReader),d.p.jsonReader=$.extend(!0,{root:"rows",page:"page",total:"total",records:"records",repeatitems:!0,cell:"cell",id:"id",userdata:"userdata",subgrid:{root:"rows",repeatitems:!0,cell:"cell"}},d.p.jsonReader),d.p.localReader=$.extend(!0,{root:"rows",page:"page",total:"total",records:"records",repeatitems:!1,cell:"cell",id:"id",userdata:"userdata",subgrid:{root:"rows",repeatitems:!0,cell:"cell"}},d.p.localReader),d.p.scroll&&(d.p.pgbuttons=!1,d.p.pginput=!1,d.p.rowList=[]),d.p.data.length&&(I(),J());var bb,cb,db,eb,fb,gb,hb,ib,jb="<thead><tr class='ui-jqgrid-labels' role='row'>",kb="",lb="",mb="";if(d.p.shrinkToFit===!0&&d.p.forceFit===!0)for(i=d.p.colModel.length-1;i>=0;i--)if(!d.p.colModel[i].hidden){d.p.colModel[i].resizable=!1;break}if("horizontal"===d.p.viewsortcols[1]?(lb=" ui-i-asc",mb=" ui-i-desc"):"single"===d.p.viewsortcols[1]&&(lb=" ui-single-sort-asc",mb=" ui-single-sort-desc",kb=" style='display:none'",d.p.viewsortcols[0]=!1),bb=r?"class='ui-th-div-ie'":"",ib="<span class='s-ico' style='display:none'>",ib+="<span sort='asc'  class='ui-grid-ico-sort ui-icon-asc"+lb+" ui-sort-"+h+" "+m+" "+q+" "+k(l,"icon_asc",!0)+"'"+kb+"></span>",ib+="<span sort='desc' class='ui-grid-ico-sort ui-icon-desc"+mb+" ui-sort-"+h+" "+m+" "+q+" "+k(l,"icon_desc",!0)+"'"+kb+"></span></span>",d.p.multiSort&&d.p.sortname)for(s=d.p.sortname.split(","),i=0;i<s.length;i++)u=$.trim(s[i]).split(" "),s[i]=$.trim(u[0]),t[i]=u[1]?$.trim(u[1]):d.p.sortorder||"asc";
for(i=0;i<this.p.colNames.length;i++){var nb=d.p.headertitles?' title="'+$.jgrid.stripHtml(d.p.colNames[i])+'"':"";jb+="<th id='"+d.p.id+"_"+d.p.colModel[i].name+"' role='columnheader' "+k(l,"headerBox",!1,"ui-th-column ui-th-"+h)+" "+nb+">",cb=d.p.colModel[i].index||d.p.colModel[i].name,jb+="<div id='jqgh_"+d.p.id+"_"+d.p.colModel[i].name+"' "+bb+">"+d.p.colNames[i],d.p.colModel[i].width=d.p.colModel[i].width?parseInt(d.p.colModel[i].width,10):150,"boolean"!=typeof d.p.colModel[i].title&&(d.p.colModel[i].title=!0),d.p.colModel[i].lso="",cb===d.p.sortname&&(d.p.lastsort=i),d.p.multiSort&&(u=$.inArray(cb,s),-1!==u&&(d.p.colModel[i].lso=t[u])),jb+=ib+"</div></th>"}if(jb+="</tr></thead>",ib=null,$(this).append(jb),$("thead tr:first th",this).hover(function(){$(this).addClass(o)},function(){$(this).removeClass(o)}),this.p.multiselect){var ob,pb=[];$("#cb_"+$.jgrid.jqID(d.p.id),this).bind("click",function(){d.p.selarrrow=[];var a=d.p.frozenColumns===!0?d.p.id+"_frozen":"";this.checked?($(d.rows).each(function(b){b>0&&($(this).hasClass("ui-subgrid")||$(this).hasClass("jqgroup")||$(this).hasClass(m)||$(this).hasClass("jqfoot")||($("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(this.id))[d.p.useProp?"prop":"attr"]("checked",!0),$(this).addClass(n).attr("aria-selected","true"),d.p.selarrrow.push(this.id),d.p.selrow=this.id,a&&($("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(this.id),d.grid.fbDiv)[d.p.useProp?"prop":"attr"]("checked",!0),$("#"+$.jgrid.jqID(this.id),d.grid.fbDiv).addClass(n))))}),ob=!0,pb=[]):($(d.rows).each(function(b){b>0&&($(this).hasClass("ui-subgrid")||$(this).hasClass("jqgroup")||$(this).hasClass(m)||$(this).hasClass("jqfoot")||($("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(this.id))[d.p.useProp?"prop":"attr"]("checked",!1),$(this).removeClass(n).attr("aria-selected","false"),pb.push(this.id),a&&($("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(this.id),d.grid.fbDiv)[d.p.useProp?"prop":"attr"]("checked",!1),$("#"+$.jgrid.jqID(this.id),d.grid.fbDiv).removeClass(n))))}),d.p.selrow=null,ob=!1),$(d).triggerHandler("jqGridSelectAll",[ob?d.p.selarrrow:pb,ob]),$.isFunction(d.p.onSelectAll)&&d.p.onSelectAll.call(d,ob?d.p.selarrrow:pb,ob)})}if(d.p.autowidth===!0){var qb=$(v).innerWidth();d.p.width=qb>0?qb:"nw"}W(),$(v).css("width",e.width+"px").append("<div class='ui-jqgrid-resize-mark' id='rs_m"+d.p.id+"'>&#160;</div>"),d.p.scrollPopUp&&$(v).append("<div "+k(l,"scrollBox",!1,"loading ui-scroll-popup")+" id='scroll_g"+d.p.id+"'></div>"),$(j).css("width",e.width+"px"),jb=$("thead:first",d).get(0);var rb="";d.p.footerrow&&(rb+="<table role='presentation' style='width:"+d.p.tblwidth+"px' "+k(l,"footerTable",!1,"ui-jqgrid-ftable ui-common-table")+"><tbody><tr role='row' "+k(l,"footerBox",!1,"footrow footrow-"+h)+">");var sb=$("tr:first",jb),tb="<tr class='jqgfirstrow' role='row'>";if(d.p.disableClick=!1,$("th",sb).each(function(a){db=d.p.colModel[a].width,void 0===d.p.colModel[a].resizable&&(d.p.colModel[a].resizable=!0),d.p.colModel[a].resizable?(eb=document.createElement("span"),$(eb).html("&#160;").addClass("ui-jqgrid-resize ui-jqgrid-resize-"+h).css("cursor","col-resize"),$(this).addClass(d.p.resizeclass)):eb="",$(this).css("width",db+"px").prepend(eb),eb=null;var b="";d.p.colModel[a].hidden&&($(this).css("display","none"),b="display:none;"),tb+="<td role='gridcell' style='height:0px;width:"+db+"px;"+b+"'></td>",e.headers[a]={width:db,el:this},kb=d.p.colModel[a].sortable,"boolean"!=typeof kb&&(d.p.colModel[a].sortable=!0,kb=!0);var c=d.p.colModel[a].name;"cb"!==c&&"subgrid"!==c&&"rn"!==c&&d.p.viewsortcols[2]&&$(">div",this).addClass("ui-jqgrid-sortable"),kb&&(d.p.multiSort?d.p.viewsortcols[0]?($("div span.s-ico",this).show(),d.p.colModel[a].lso&&$("div span.ui-icon-"+d.p.colModel[a].lso,this).removeClass(m).css("display","")):d.p.colModel[a].lso&&($("div span.s-ico",this).show(),$("div span.ui-icon-"+d.p.colModel[a].lso,this).removeClass(m).css("display","")):d.p.viewsortcols[0]?($("div span.s-ico",this).show(),a===d.p.lastsort&&$("div span.ui-icon-"+d.p.sortorder,this).removeClass(m).css("display","")):a===d.p.lastsort&&""!==d.p.sortname&&($("div span.s-ico",this).show(),$("div span.ui-icon-"+d.p.sortorder,this).removeClass(m).css("display",""))),d.p.footerrow&&(rb+="<td role='gridcell' "+z(a,0,"",null,"",!1)+">&#160;</td>")}).mousedown(function(a){if(1===$(a.target).closest("th>span.ui-jqgrid-resize").length){var b=Z(this);return d.p.forceFit===!0&&(d.p.nv=X(b)),e.dragStart(b,a,Y(b)),!1}}).click(function(a){if(d.p.disableClick)return d.p.disableClick=!1,!1;var b,c,e="th>div.ui-jqgrid-sortable";d.p.viewsortcols[2]||(e="th>div>span>span.ui-grid-ico-sort");var f=$(a.target).closest(e);if(1===f.length){var g;if(d.p.frozenColumns){var h=$(this)[0].id.substring(d.p.id.length+1);$(d.p.colModel).each(function(a){return this.name===h?(g=a,!1):void 0})}else g=Z(this);return d.p.viewsortcols[2]||(b=!0,c=f.attr("sort")),null!=g&&V($("div",this)[0].id,g,b,c,this),!1}}),d.p.sortable&&$.fn.sortable)try{$(d).jqGrid("sortableColumns",sb)}catch(ub){}d.p.footerrow&&(rb+="</tr></tbody></table>"),tb+="</tr>",hb=document.createElement("tbody"),this.appendChild(hb),$(this).addClass(k(l,"rowTable",!0,"ui-jqgrid-btable ui-common-table")).append(tb),tb=null;var vb=$("<table "+k(l,"headerTable",!1,"ui-jqgrid-htable ui-common-table")+" style='width:"+d.p.tblwidth+"px' role='presentation' aria-labelledby='gbox_"+this.id+"'></table>").append(jb),wb=d.p.caption&&d.p.hiddengrid===!0?!0:!1,xb=$("<div class='ui-jqgrid-hbox"+("rtl"===h?"-rtl":"")+"'></div>");jb=null,e.hDiv=document.createElement("div"),e.hDiv.style.width=e.width+"px",e.hDiv.className=k(l,"headerDiv",!0,"ui-jqgrid-hdiv"),$(e.hDiv).append(xb),$(xb).append(vb),vb=null,wb&&$(e.hDiv).hide(),d.p.pager&&("string"==typeof d.p.pager?"#"!==d.p.pager.substr(0,1)&&(d.p.pager="#"+d.p.pager):d.p.pager="#"+$(d.p.pager).attr("id"),$(d.p.pager).css({width:e.width+"px"}).addClass(k(l,"pagerBox",!0,"ui-jqgrid-pager")).appendTo(v),wb&&$(d.p.pager).hide(),T(d.p.pager,"")),d.p.cellEdit===!1&&d.p.hoverrows===!0&&$(d).bind("mouseover",function(a){gb=$(a.target).closest("tr.jqgrow"),"ui-subgrid"!==$(gb).attr("class")&&$(gb).addClass(o)}).bind("mouseout",function(a){gb=$(a.target).closest("tr.jqgrow"),$(gb).removeClass(o)});var yb,zb,Ab;$(d).before(e.hDiv).click(function(a){if(fb=a.target,gb=$(fb,d.rows).closest("tr.jqgrow"),0===$(gb).length||gb[0].className.indexOf(m)>-1||($(fb,d).closest("table.ui-jqgrid-btable").attr("id")||"").replace("_frozen","")!==d.id)return this;var b=$(fb).hasClass("cbox"),c=$(d).triggerHandler("jqGridBeforeSelectRow",[gb[0].id,a]);if(c=c===!1||"stop"===c?!1:!0,$.isFunction(d.p.beforeSelectRow)){var e=d.p.beforeSelectRow.call(d,gb[0].id,a);(e===!1||"stop"===e)&&(c=!1)}if("A"!==fb.tagName&&("INPUT"!==fb.tagName&&"TEXTAREA"!==fb.tagName&&"OPTION"!==fb.tagName&&"SELECT"!==fb.tagName||b)){if(yb=gb[0].id,fb=$(fb).closest("tr.jqgrow>td"),fb.length>0&&(zb=$.jgrid.getCellIndex(fb),Ab=$(fb).closest("td,th").html(),$(d).triggerHandler("jqGridCellSelect",[yb,zb,Ab,a]),$.isFunction(d.p.onCellSelect)&&d.p.onCellSelect.call(d,yb,zb,Ab,a)),d.p.cellEdit===!0)if(d.p.multiselect&&b&&c)$(d).jqGrid("setSelection",yb,!0,a);else if(fb.length>0){yb=gb[0].rowIndex;try{$(d).jqGrid("editCell",yb,zb,!0)}catch(f){}}if(c)if(d.p.multikey)a[d.p.multikey]?$(d).jqGrid("setSelection",yb,!0,a):d.p.multiselect&&b&&(b=$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+yb).is(":checked"),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+yb)[d.p.useProp?"prop":"attr"]("checked",!b));else if(d.p.multiselect&&d.p.multiboxonly)if(b)$(d).jqGrid("setSelection",yb,!0,a);else{var g=d.p.frozenColumns?d.p.id+"_frozen":"";$(d.p.selarrrow).each(function(a,b){var c=$(d).jqGrid("getGridRowById",b);c&&$(c).removeClass(n),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b))[d.p.useProp?"prop":"attr"]("checked",!1),g&&($("#"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(g)).removeClass(n),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(g))[d.p.useProp?"prop":"attr"]("checked",!1))}),d.p.selarrrow=[],$(d).jqGrid("setSelection",yb,!0,a)}else $(d).jqGrid("setSelection",yb,!0,a)}}).bind("reloadGrid",function(a,b){if(d.p.treeGrid===!0&&(d.p.datatype=d.p.treedatatype),b=b||{},b.current&&d.grid.selectionPreserver(d),"local"===d.p.datatype?($(d).jqGrid("resetSelection"),d.p.data.length&&(I(),J())):d.p.treeGrid||(d.p.selrow=null,d.p.multiselect&&(d.p.selarrrow=[],S(!1)),d.p.savedRow=[]),d.p.scroll&&H.call(d,!0,!1),b.page){var c=b.page;c>d.p.lastpage&&(c=d.p.lastpage),1>c&&(c=1),d.p.page=c,d.grid.bDiv.scrollTop=d.grid.prevRowHeight?(c-1)*d.grid.prevRowHeight*d.p.rowNum:0}return d.grid.prevRowHeight&&d.p.scroll&&void 0===b.page?(delete d.p.lastpage,d.grid.populateVisible()):d.grid.populate(),d.p.inlineNav===!0&&$(d).jqGrid("showAddEditButtons"),!1}).dblclick(function(a){if(fb=a.target,gb=$(fb,d.rows).closest("tr.jqgrow"),0!==$(gb).length){yb=gb[0].rowIndex,zb=$.jgrid.getCellIndex(fb);var b=$(d).triggerHandler("jqGridDblClickRow",[$(gb).attr("id"),yb,zb,a]);return null!=b?b:$.isFunction(d.p.ondblClickRow)&&(b=d.p.ondblClickRow.call(d,$(gb).attr("id"),yb,zb,a),null!=b)?b:void 0}}).bind("contextmenu",function(a){if(fb=a.target,gb=$(fb,d.rows).closest("tr.jqgrow"),0!==$(gb).length){d.p.multiselect||$(d).jqGrid("setSelection",gb[0].id,!0,a),yb=gb[0].rowIndex,zb=$.jgrid.getCellIndex(fb);var b=$(d).triggerHandler("jqGridRightClickRow",[$(gb).attr("id"),yb,zb,a]);return null!=b?b:$.isFunction(d.p.onRightClickRow)&&(b=d.p.onRightClickRow.call(d,$(gb).attr("id"),yb,zb,a),null!=b)?b:void 0}}),e.bDiv=document.createElement("div"),r&&"auto"===String(d.p.height).toLowerCase()&&(d.p.height="100%"),$(e.bDiv).append($('<div style="position:relative;"></div>').append("<div></div>").append(this)).addClass("ui-jqgrid-bdiv").css({height:d.p.height+(isNaN(d.p.height)?"":"px"),width:e.width+"px"}).scroll(e.scrollGrid),$("table:first",e.bDiv).css({width:d.p.tblwidth+"px"}),$.support.tbody||2===$("tbody",this).length&&$("tbody:gt(0)",this).remove(),d.p.multikey&&($.jgrid.msie?$(e.bDiv).bind("selectstart",function(){return!1}):$(e.bDiv).bind("mousedown",function(){return!1})),wb&&$(e.bDiv).hide();var Bb=q+" "+k(l,"icon_caption_open",!0),Cb=q+" "+k(l,"icon_caption_close",!0);e.cDiv=document.createElement("div");var Db=d.p.hidegrid===!0?$("<a role='link' class='ui-jqgrid-titlebar-close HeaderButton "+p+"' title='"+($.jgrid.getRegional(d,"defaults.showhide",d.p.showhide)||"")+"' />").hover(function(){Db.addClass(o)},function(){Db.removeClass(o)}).append("<span class='ui-jqgrid-headlink "+Bb+"'></span>").css("rtl"===h?"left":"right","0px"):"";if($(e.cDiv).append(Db).append("<span class='ui-jqgrid-title'>"+d.p.caption+"</span>").addClass("ui-jqgrid-titlebar ui-jqgrid-caption"+("rtl"===h?"-rtl":"")+" "+k(l,"gridtitleBox",!0)),$(e.cDiv).insertBefore(e.hDiv),d.p.toolbar[0]){var Eb=k(l,"customtoolbarBox",!0,"ui-userdata");e.uDiv=document.createElement("div"),"top"===d.p.toolbar[1]?$(e.uDiv).insertBefore(e.hDiv):"bottom"===d.p.toolbar[1]&&$(e.uDiv).insertAfter(e.hDiv),"both"===d.p.toolbar[1]?(e.ubDiv=document.createElement("div"),$(e.uDiv).addClass(Eb+" ui-userdata-top").attr("id","t_"+this.id).insertBefore(e.hDiv).width(e.width),$(e.ubDiv).addClass(Eb+" ui-userdata-bottom").attr("id","tb_"+this.id).insertAfter(e.hDiv).width(e.width),wb&&$(e.ubDiv).hide()):$(e.uDiv).width(e.width).addClass(Eb+" ui-userdata-top").attr("id","t_"+this.id),wb&&$(e.uDiv).hide()}if(d.p.toppager&&(d.p.toppager=$.jgrid.jqID(d.p.id)+"_toppager",e.topDiv=$("<div id='"+d.p.toppager+"'></div>")[0],d.p.toppager="#"+d.p.toppager,$(e.topDiv).addClass(k(l,"toppagerBox",!0,"ui-jqgrid-toppager")).width(e.width).insertBefore(e.hDiv),T(d.p.toppager,"_t")),d.p.footerrow&&(e.sDiv=$("<div class='ui-jqgrid-sdiv'></div>")[0],xb=$("<div class='ui-jqgrid-hbox"+("rtl"===h?"-rtl":"")+"'></div>"),$(e.sDiv).append(xb).width(e.width).insertAfter(e.hDiv),$(xb).append(rb),e.footers=$(".ui-jqgrid-ftable",e.sDiv)[0].rows[0].cells,d.p.rownumbers&&(e.footers[0].className=k(l,"rownumBox",!0,"jqgrid-rownum")),wb&&$(e.sDiv).hide()),xb=null,d.p.caption){var Fb=d.p.datatype;d.p.hidegrid===!0&&($(".ui-jqgrid-titlebar-close",e.cDiv).click(function(a){var b,c=$.isFunction(d.p.onHeaderClick),f=".ui-jqgrid-bdiv, .ui-jqgrid-hdiv, .ui-jqgrid-toppager, .ui-jqgrid-pager, .ui-jqgrid-sdiv",g=this;return d.p.toolbar[0]===!0&&("both"===d.p.toolbar[1]&&(f+=", #"+$(e.ubDiv).attr("id")),f+=", #"+$(e.uDiv).attr("id")),b=$(f,"#gview_"+$.jgrid.jqID(d.p.id)).length,"visible"===d.p.gridstate?$(f,"#gbox_"+$.jgrid.jqID(d.p.id)).slideUp("fast",function(){b--,0===b&&($("span",g).removeClass(Bb).addClass(Cb),d.p.gridstate="hidden",$("#gbox_"+$.jgrid.jqID(d.p.id)).hasClass("ui-resizable")&&$(".ui-resizable-handle","#gbox_"+$.jgrid.jqID(d.p.id)).hide(),$(d).triggerHandler("jqGridHeaderClick",[d.p.gridstate,a]),c&&(wb||d.p.onHeaderClick.call(d,d.p.gridstate,a)))}):"hidden"===d.p.gridstate&&$(f,"#gbox_"+$.jgrid.jqID(d.p.id)).slideDown("fast",function(){b--,0===b&&($("span",g).removeClass(Cb).addClass(Bb),wb&&(d.p.datatype=Fb,R(),wb=!1),d.p.gridstate="visible",$("#gbox_"+$.jgrid.jqID(d.p.id)).hasClass("ui-resizable")&&$(".ui-resizable-handle","#gbox_"+$.jgrid.jqID(d.p.id)).show(),$(d).triggerHandler("jqGridHeaderClick",[d.p.gridstate,a]),c&&(wb||d.p.onHeaderClick.call(d,d.p.gridstate,a)))}),!1}),wb&&(d.p.datatype="local",$(".ui-jqgrid-titlebar-close",e.cDiv).trigger("click")))}else $(e.cDiv).hide(),d.p.toppager||$(e.hDiv).addClass(k(d.p.styleUI+".common","cornertop",!0));if($(e.hDiv).after(e.bDiv).mousemove(function(a){return e.resizing?(e.dragMove(a),!1):void 0}),$(".ui-jqgrid-labels",e.hDiv).bind("selectstart",function(){return!1}),$(document).bind("mouseup.jqGrid"+d.p.id,function(){return e.resizing?(e.dragEnd(!0),!1):!0}),d.formatCol=z,d.sortData=V,d.updatepager=O,d.refreshIndex=J,d.setHeadCheckBox=S,d.constructTr=K,d.formatter=function(a,b,c,d,e){return B(a,b,c,d,e)},$.extend(e,{populate:R,emptyRows:H,beginReq:P,endReq:Q}),this.grid=e,d.addXmlData=function(a){L(a)},d.addJSONData=function(a){M(a)},this.grid.cols=this.rows[0].cells,$(d).triggerHandler("jqGridInitGrid"),$.isFunction(d.p.onInitGrid)&&d.p.onInitGrid.call(d),R(),d.p.hiddengrid=!1,d.p.responsive){var Gb="onorientationchange"in window,Hb=Gb?"orientationchange":"resize";$(window).on(Hb,function(){$(d).jqGrid("resizeGrid")})}}})},$.jgrid.extend({getGridParam:function(a,b){var c,d=this[0];if(d&&d.grid){if(void 0===b&&"string"!=typeof b&&(b="jqGrid"),c=d.p,"jqGrid"!==b)try{c=$(d).data(b)}catch(e){c=d.p}return a?void 0!==c[a]?c[a]:null:c}},setGridParam:function(a,b){return this.each(function(){if(null==b&&(b=!1),this.grid&&"object"==typeof a)if(b===!0){var c=$.extend({},this.p,a);this.p=c}else $.extend(!0,this.p,a)})},getGridRowById:function(a){var b;return this.each(function(){try{for(var c=this.rows.length;c--;)if(a.toString()===this.rows[c].id){b=this.rows[c];break}}catch(d){b=$(this.grid.bDiv).find("#"+$.jgrid.jqID(a))}}),b},getDataIDs:function(){var a,b=[],c=0,d=0;return this.each(function(){if(a=this.rows.length,a&&a>0)for(;a>c;)$(this.rows[c]).hasClass("jqgrow")&&(b[d]=this.rows[c].id,d++),c++}),b},setSelection:function(a,b,c){return this.each(function(){function d(a){var b=$(l.grid.bDiv)[0].clientHeight,c=$(l.grid.bDiv)[0].scrollTop,d=$(l.rows[a]).position().top,e=l.rows[a].clientHeight;d+e>=b+c?$(l.grid.bDiv)[0].scrollTop=d-(b+c)+e+c:b+c>d&&c>d&&($(l.grid.bDiv)[0].scrollTop=d)}var e,f,g,h,i,j,k,l=this,m=$.jgrid.getMethod("getStyleUI"),n=m(l.p.styleUI+".common","highlight",!0),o=m(l.p.styleUI+".common","disabled",!0);void 0!==a&&(b=b===!1?!1:!0,f=$(l).jqGrid("getGridRowById",a),!f||!f.className||f.className.indexOf(o)>-1||(l.p.scrollrows===!0&&(g=$(l).jqGrid("getGridRowById",a).rowIndex,g>=0&&d(g)),l.p.frozenColumns===!0&&(j=l.p.id+"_frozen"),l.p.multiselect?(l.setHeadCheckBox(!1),l.p.selrow=f.id,h=$.inArray(l.p.selrow,l.p.selarrrow),-1===h?("ui-subgrid"!==f.className&&$(f).addClass(n).attr("aria-selected","true"),e=!0,l.p.selarrrow.push(l.p.selrow)):("ui-subgrid"!==f.className&&$(f).removeClass(n).attr("aria-selected","false"),e=!1,l.p.selarrrow.splice(h,1),i=l.p.selarrrow[0],l.p.selrow=void 0===i?null:i),$("#jqg_"+$.jgrid.jqID(l.p.id)+"_"+$.jgrid.jqID(f.id))[l.p.useProp?"prop":"attr"]("checked",e),j&&(-1===h?$("#"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(j)).addClass(n):$("#"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(j)).removeClass(n),$("#jqg_"+$.jgrid.jqID(l.p.id)+"_"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(j))[l.p.useProp?"prop":"attr"]("checked",e)),b&&($(l).triggerHandler("jqGridSelectRow",[f.id,e,c]),l.p.onSelectRow&&l.p.onSelectRow.call(l,f.id,e,c))):"ui-subgrid"!==f.className&&(l.p.selrow!==f.id?(k=$(l).jqGrid("getGridRowById",l.p.selrow),k&&$(k).removeClass(n).attr({"aria-selected":"false",tabindex:"-1"}),$(f).addClass(n).attr({"aria-selected":"true",tabindex:"0"}),j&&($("#"+$.jgrid.jqID(l.p.selrow),"#"+$.jgrid.jqID(j)).removeClass(n),$("#"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(j)).addClass(n)),e=!0):e=!1,l.p.selrow=f.id,b&&($(l).triggerHandler("jqGridSelectRow",[f.id,e,c]),l.p.onSelectRow&&l.p.onSelectRow.call(l,f.id,e,c)))))})},resetSelection:function(a){return this.each(function(){var b,c,d=this,e=$.jgrid.getMethod("getStyleUI"),f=e(d.p.styleUI+".common","highlight",!0),g=e(d.p.styleUI+".common","hover",!0);if(d.p.frozenColumns===!0&&(c=d.p.id+"_frozen"),void 0!==a){if(b=a===d.p.selrow?d.p.selrow:a,$("#"+$.jgrid.jqID(d.p.id)+" tbody:first tr#"+$.jgrid.jqID(b)).removeClass(f).attr("aria-selected","false"),c&&$("#"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(c)).removeClass(f),d.p.multiselect){$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(d.p.id))[d.p.useProp?"prop":"attr"]("checked",!1),c&&$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(c))[d.p.useProp?"prop":"attr"]("checked",!1),d.setHeadCheckBox(!1);var h=$.inArray($.jgrid.jqID(b),d.p.selarrrow);-1!==h&&d.p.selarrrow.splice(h,1)}d.p.onUnSelectRow&&d.p.onUnSelectRow.call(d,b),b=null}else d.p.multiselect?($(d.p.selarrrow).each(function(a,b){$($(d).jqGrid("getGridRowById",b)).removeClass(f).attr("aria-selected","false"),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b))[d.p.useProp?"prop":"attr"]("checked",!1),c&&($("#"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(c)).removeClass(f),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(c))[d.p.useProp?"prop":"attr"]("checked",!1)),d.p.onUnSelectRow&&d.p.onUnSelectRow.call(d,b)}),d.setHeadCheckBox(!1),d.p.selarrrow=[],d.p.selrow=null):d.p.selrow&&($("#"+$.jgrid.jqID(d.p.id)+" tbody:first tr#"+$.jgrid.jqID(d.p.selrow)).removeClass(f).attr("aria-selected","false"),c&&$("#"+$.jgrid.jqID(d.p.selrow),"#"+$.jgrid.jqID(c)).removeClass(f),d.p.onUnSelectRow&&d.p.onUnSelectRow.call(d,d.p.selrow),d.p.selrow=null);d.p.cellEdit===!0&&parseInt(d.p.iCol,10)>=0&&parseInt(d.p.iRow,10)>=0&&($("td:eq("+d.p.iCol+")",d.rows[d.p.iRow]).removeClass("edit-cell "+f),$(d.rows[d.p.iRow]).removeClass("selected-row "+g)),d.p.savedRow=[]})},getRowData:function(a,b){var c,d,e={},f=!1,g=0;return this.each(function(){var h,i,j=this;if(null==a)f=!0,c=[],d=j.rows.length;else{if(i=$(j).jqGrid("getGridRowById",a),!i)return e;d=2}for(b&&b===!0&&j.p.data.length>0||(b=!1);d>g;)f&&(i=j.rows[g]),$(i).hasClass("jqgrow")&&(b?e=j.p.data[j.p._index[i.id]]:$('td[role="gridcell"]',i).each(function(a){if(h=j.p.colModel[a].name,"cb"!==h&&"subgrid"!==h&&"rn"!==h)if(j.p.treeGrid===!0&&h===j.p.ExpandColumn)e[h]=$.jgrid.htmlDecode($("span:first",this).html());else try{e[h]=$.unformat.call(j,this,{rowId:i.id,colModel:j.p.colModel[a]},a)}catch(b){e[h]=$.jgrid.htmlDecode($(this).html())}}),f&&(c.push(e),e={})),g++}),c||e},delRowData:function(a){var b,c,d,e=!1;return this.each(function(){var f=this;if(b=$(f).jqGrid("getGridRowById",a),!b)return!1;if(f.p.subGrid&&(d=$(b).next(),d.hasClass("ui-subgrid")&&d.remove()),$(b).remove(),f.p.records--,f.p.reccount--,f.updatepager(!0,!1),e=!0,f.p.multiselect&&(c=$.inArray(a,f.p.selarrrow),-1!==c&&f.p.selarrrow.splice(c,1)),f.p.selrow=f.p.multiselect&&f.p.selarrrow.length>0?f.p.selarrrow[f.p.selarrrow.length-1]:null,"local"===f.p.datatype){var g=$.jgrid.stripPref(f.p.idPrefix,a),h=f.p._index[g];void 0!==h&&(f.p.data.splice(h,1),f.refreshIndex())}if(f.p.altRows===!0&&e){var i=f.p.altclass;$(f.rows).each(function(a){a%2===1?$(this).addClass(i):$(this).removeClass(i)})}}),e},setRowData:function(a,b,c){var d,e,f=!0;return this.each(function(){if(!this.grid)return!1;var g,h,i=this,j=typeof c,k={};if(h=$(this).jqGrid("getGridRowById",a),!h)return!1;if(b)try{if($(this.p.colModel).each(function(c){d=this.name;var f=$.jgrid.getAccessor(b,d);void 0!==f&&(k[d]=this.formatter&&"string"==typeof this.formatter&&"date"===this.formatter?$.unformat.date.call(i,f,this):f,g=i.formatter(a,k[d],c,b,"edit"),e=this.title?{title:$.jgrid.stripHtml(g)}:{},i.p.treeGrid===!0&&d===i.p.ExpandColumn?$("td[role='gridcell']:eq("+c+") > span:first",h).html(g).attr(e):$("td[role='gridcell']:eq("+c+")",h).html(g).attr(e))}),"local"===i.p.datatype){var l,m=$.jgrid.stripPref(i.p.idPrefix,a),n=i.p._index[m];if(i.p.treeGrid)for(l in i.p.treeReader)i.p.treeReader.hasOwnProperty(l)&&delete k[i.p.treeReader[l]];void 0!==n&&(i.p.data[n]=$.extend(!0,i.p.data[n],k)),k=null}}catch(o){f=!1}f&&("string"===j?$(h).addClass(c):null!==c&&"object"===j&&$(h).css(c),$(i).triggerHandler("jqGridAfterGridComplete"))}),f},addRowData:function(a,b,c,d){-1==["first","last","before","after"].indexOf(c)&&(c="last");var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s=!1,t="",u="",v="";return b&&($.isArray(b)?(m=!0,n=a):(b=[b],m=!1),this.each(function(){var w=this,x=b.length;i=w.p.rownumbers===!0?1:0,g=w.p.multiselect===!0?1:0,h=w.p.subGrid===!0?1:0,m||(void 0!==a?a=String(a):(a=$.jgrid.randId(),w.p.keyName!==!1&&(n=w.p.keyName,void 0!==b[0][n]&&(a=b[0][n])))),o=w.p.altclass;var y,z=0,A=$(w).jqGrid("getStyleUI",w.p.styleUI+".base","rowBox",!0,"jqgrow ui-row-"+w.p.direction),B={},C=$.isFunction(w.p.afterInsertRow)?!0:!1;for(i&&(t=$(w).jqGrid("getStyleUI",w.p.styleUI+".base","rownumBox",!1,"jqgrid-rownum")),g&&(u=$(w).jqGrid("getStyleUI",w.p.styleUI+".base","multiBox",!1,"cbox"));x>z;){if(p=b[z],f=[],y=A,m){try{a=p[n],void 0===a&&(a=$.jgrid.randId())}catch(D){a=$.jgrid.randId()}y+=w.p.altRows===!0&&(w.rows.length-1)%2===0?" "+o:""}for(r=a,a=w.p.idPrefix+a,i&&(v=w.formatCol(0,1,"",null,a,!0),f[f.length]='<td role="gridcell" '+t+" "+v+">0</td>"),g&&(l='<input role="checkbox" type="checkbox" id="jqg_'+w.p.id+"_"+a+'" '+u+"/>",v=w.formatCol(i,1,"",null,a,!0),f[f.length]='<td role="gridcell" '+v+">"+l+"</td>"),h&&(f[f.length]=$(w).jqGrid("addSubGridCell",g+i,1)),k=g+h+i;k<w.p.colModel.length;k++)q=w.p.colModel[k],e=q.name,B[e]=p[e],l=w.formatter(a,$.jgrid.getAccessor(p,e),k,p),v=w.formatCol(k,1,l,p,a,B),f[f.length]='<td role="gridcell" '+v+">"+l+"</td>";if(f.unshift(w.constructTr(a,!1,y,B,p)),f[f.length]="</tr>",0===w.rows.length)$("table:first",w.grid.bDiv).append(f.join(""));else switch(c){case"last":$(w.rows[w.rows.length-1]).after(f.join("")),j=w.rows.length-1;break;case"first":$(w.rows[0]).after(f.join("")),j=1;break;case"after":j=$(w).jqGrid("getGridRowById",d),j&&($(w.rows[j.rowIndex+1]).hasClass("ui-subgrid")?$(w.rows[j.rowIndex+1]).after(f):$(j).after(f.join("")),j=j.rowIndex+1);break;case"before":j=$(w).jqGrid("getGridRowById",d),j&&($(j).before(f.join("")),j=j.rowIndex-1)}w.p.subGrid===!0&&$(w).jqGrid("addSubGrid",g+i,j),w.p.records++,w.p.reccount++,$(w).triggerHandler("jqGridAfterInsertRow",[a,p,p]),C&&w.p.afterInsertRow.call(w,a,p,p),z++,"local"===w.p.datatype&&(B[w.p.localReader.id]=r,w.p._index[r]=w.p.data.length,w.p.data.push(B),B={})}w.p.altRows!==!0||m||("last"===c?(w.rows.length-1)%2===0&&$(w.rows[w.rows.length-1]).addClass(o):$(w.rows).each(function(a){a%2===0?$(this).addClass(o):$(this).removeClass(o)})),w.updatepager(!0,!0),s=!0})),s},footerData:function(a,b,c){function d(a){var b;for(b in a)if(a.hasOwnProperty(b))return!1;return!0}var e,f,g=!1,h={};return void 0===a&&(a="get"),"boolean"!=typeof c&&(c=!0),a=a.toLowerCase(),this.each(function(){var i,j=this;return j.grid&&j.p.footerrow?"set"===a&&d(b)?!1:(g=!0,void $(this.p.colModel).each(function(d){e=this.name,"set"===a?void 0!==b[e]&&(i=c?j.formatter("",b[e],d,b,"edit"):b[e],f=this.title?{title:$.jgrid.stripHtml(i)}:{},$("tr.footrow td:eq("+d+")",j.grid.sDiv).html(i).attr(f),g=!0):"get"===a&&(h[e]=$("tr.footrow td:eq("+d+")",j.grid.sDiv).html())})):!1}),"get"===a?h:g},showHideCol:function(a,b){return this.each(function(){var c,d=this,e=!1,f=$.jgrid.cell_width?0:d.p.cellLayout;if(d.grid){"string"==typeof a&&(a=[a]),b="none"!==b?"":"none";var g=""===b?!0:!1,h=d.p.groupHeader&&($.isArray(d.p.groupHeader)||$.isFunction(d.p.groupHeader));if(h&&$(d).jqGrid("destroyGroupHeader",!1),$(this.p.colModel).each(function(h){if(-1!==$.inArray(this.name,a)&&this.hidden===g){if(d.p.frozenColumns===!0&&this.frozen===!0)return!0;$("tr[role=row]",d.grid.hDiv).each(function(){$(this.cells[h]).css("display",b)}),$(d.rows).each(function(){$(this).hasClass("jqgroup")||$(this.cells[h]).css("display",b)}),d.p.footerrow&&$("tr.footrow td:eq("+h+")",d.grid.sDiv).css("display",b),c=parseInt(this.width,10),"none"===b?d.p.tblwidth-=c+f:d.p.tblwidth+=c+f,this.hidden=!g,e=!0,$(d).triggerHandler("jqGridShowHideCol",[g,this.name,h])}}),e===!0&&(d.p.shrinkToFit!==!0||isNaN(d.p.height)||(d.p.tblwidth+=parseInt(d.p.scrollOffset,10)),$(d).jqGrid("setGridWidth",d.p.shrinkToFit===!0?d.p.tblwidth:d.p.width)),h){var i=$.extend([],d.p.groupHeader);d.p.groupHeader=null;for(var j=0;j<i.length;j++)$(d).jqGrid("setGroupHeaders",i[j])}}})},hideCol:function(a){return this.each(function(){$(this).jqGrid("showHideCol",a,"none")})},showCol:function(a){return this.each(function(){$(this).jqGrid("showHideCol",a,"")})},remapColumns:function(a,b,c){function d(b){var c;c=b.length?$.makeArray(b):$.extend({},b),$.each(a,function(a){b[a]=c[this]})}function e(b,c){$(">tr"+(c||""),b).each(function(){var b=this,c=$.makeArray(b.cells);$.each(a,function(){var a=c[this];a&&b.appendChild(a)})})}var f=this.get(0);d(f.p.colModel),d(f.p.colNames),d(f.grid.headers),e($("thead:first",f.grid.hDiv),c&&":not(.ui-jqgrid-labels)"),b&&e($("#"+$.jgrid.jqID(f.p.id)+" tbody:first"),".jqgfirstrow, tr.jqgrow, tr.jqfoot"),f.p.footerrow&&e($("tbody:first",f.grid.sDiv)),f.p.remapColumns&&(f.p.remapColumns.length?d(f.p.remapColumns):f.p.remapColumns=$.makeArray(a)),f.p.lastsort=$.inArray(f.p.lastsort,a),f.p.treeGrid&&(f.p.expColInd=$.inArray(f.p.expColInd,a)),$(f).triggerHandler("jqGridRemapColumns",[a,b,c])},setGridWidth:function(a,b){return this.each(function(){if(this.grid){var c,d,e,f,g=this,h=0,i=$.jgrid.cell_width?0:g.p.cellLayout,j=0,k=!1,l=g.p.scrollOffset,m=0;if("boolean"!=typeof b&&(b=g.p.shrinkToFit),!isNaN(a)){if(a=parseInt(a,10),g.grid.width=g.p.width=a,$("#gbox_"+$.jgrid.jqID(g.p.id)).css("width",a+"px"),$("#gview_"+$.jgrid.jqID(g.p.id)).css("width",a+"px"),$(g.grid.bDiv).css("width",a+"px"),$(g.grid.hDiv).css("width",a+"px"),g.p.pager&&$(g.p.pager).css("width",a+"px"),g.p.toppager&&$(g.p.toppager).css("width",a+"px"),g.p.toolbar[0]===!0&&($(g.grid.uDiv).css("width",a+"px"),"both"===g.p.toolbar[1]&&$(g.grid.ubDiv).css("width",a+"px")),g.p.footerrow&&$(g.grid.sDiv).css("width",a+"px"),b===!1&&g.p.forceFit===!0&&(g.p.forceFit=!1),b===!0){if($.each(g.p.colModel,function(){this.hidden===!1&&(c=this.widthOrg,h+=c+i,this.fixed?m+=c+i:j++)}),0===j)return;g.p.tblwidth=h,e=a-i*j-m,isNaN(g.p.height)||($(g.grid.bDiv)[0].clientHeight<$(g.grid.bDiv)[0].scrollHeight||1===g.rows.length)&&(k=!0,e-=l),h=0;var n=g.grid.cols.length>0;if($.each(g.p.colModel,function(a){if(this.hidden===!1&&!this.fixed){if(c=this.widthOrg,c=Math.round(e*c/(g.p.tblwidth-i*j-m)),0>c)return;this.width=c,h+=c,g.grid.headers[a].width=c,g.grid.headers[a].el.style.width=c+"px",g.p.footerrow&&(g.grid.footers[a].style.width=c+"px"),n&&(g.grid.cols[a].style.width=c+"px"),d=a}}),!d)return;if(f=0,k?a-m-(h+i*j)!==l&&(f=a-m-(h+i*j)-l):1!==Math.abs(a-m-(h+i*j))&&(f=a-m-(h+i*j)),g.p.colModel[d].width+=f,g.p.tblwidth=h+f+i*j+m,g.p.tblwidth>a){var o=g.p.tblwidth-parseInt(a,10);g.p.tblwidth=a,c=g.p.colModel[d].width=g.p.colModel[d].width-o}else c=g.p.colModel[d].width;g.grid.headers[d].width=c,g.grid.headers[d].el.style.width=c+"px",n&&(g.grid.cols[d].style.width=c+"px"),g.p.footerrow&&(g.grid.footers[d].style.width=c+"px")}g.p.tblwidth&&($("table:first",g.grid.bDiv).css("width",g.p.tblwidth+"px"),$("table:first",g.grid.hDiv).css("width",g.p.tblwidth+"px"),g.grid.hDiv.scrollLeft=g.grid.bDiv.scrollLeft,g.p.footerrow&&$("table:first",g.grid.sDiv).css("width",g.p.tblwidth+"px"))}}})},setGridHeight:function(a){return this.each(function(){var b=this;if(b.grid){var c=$(b.grid.bDiv);c.css({height:a+(isNaN(a)?"":"px")}),b.p.frozenColumns===!0&&$("#"+$.jgrid.jqID(b.p.id)+"_frozen").parent().height(c.height()-16),b.p.height=a,b.p.scroll&&b.grid.populateVisible()}})},setCaption:function(a){return this.each(function(){var b=$(this).jqGrid("getStyleUI",this.p.styleUI+".common","cornertop",!0);this.p.caption=a,$(".ui-jqgrid-title, .ui-jqgrid-title-rtl",this.grid.cDiv).html(a),$(this.grid.cDiv).show(),$(this.grid.hDiv).removeClass(b)})},setLabel:function(a,b,c,d){return this.each(function(){var e=this,f=-1;if(e.grid&&void 0!==a&&($(e.p.colModel).each(function(b){return this.name===a?(f=b,!1):void 0}),f>=0)){var g=$("tr.ui-jqgrid-labels th:eq("+f+")",e.grid.hDiv);if(b){var h=$(".s-ico",g);$("[id^=jqgh_]",g).empty().html(b).append(h),e.p.colNames[f]=b}c&&("string"==typeof c?$(g).addClass(c):$(g).css(c)),"object"==typeof d&&$(g).attr(d)}})},setCell:function(a,b,c,d,e,f){return this.each(function(){var g,h,i=this,j=-1;if(i.grid&&(isNaN(b)?$(i.p.colModel).each(function(a){return this.name===b?(j=a,!1):void 0}):j=parseInt(b,10),j>=0)){var k=$(i).jqGrid("getGridRowById",a);if(k){var l=$("td:eq("+j+")",k),m=0,n=[];if(""!==c||f===!0){if(void 0!==k.cells)for(;m<k.cells.length;)n.push(k.cells[m].innerHTML),m++;if(g=i.formatter(a,c,j,n,"edit"),h=i.p.colModel[j].title?{title:$.jgrid.stripHtml(g)}:{},i.p.treeGrid&&$(".tree-wrap",$(l)).length>0?$("span",$(l)).html(g).attr(h):$(l).html(g).attr(h),"local"===i.p.datatype){var o,p=i.p.colModel[j];c=p.formatter&&"string"==typeof p.formatter&&"date"===p.formatter?$.unformat.date.call(i,c,p):c,o=i.p._index[$.jgrid.stripPref(i.p.idPrefix,a)],void 0!==o&&(i.p.data[o][p.name]=c)}}"string"==typeof d?$(l).addClass(d):d&&$(l).css(d),"object"==typeof e&&$(l).attr(e)}}})},getCell:function(a,b){var c=!1;return this.each(function(){var d=this,e=-1;if(d.grid&&(isNaN(b)?$(d.p.colModel).each(function(a){return this.name===b?(e=a,!1):void 0}):e=parseInt(b,10),e>=0)){var f=$(d).jqGrid("getGridRowById",a);if(f)try{c=$.unformat.call(d,$("td:eq("+e+")",f),{rowId:f.id,colModel:d.p.colModel[e]},e)}catch(g){c=$.jgrid.htmlDecode($("td:eq("+e+")",f).html())}}}),c},getCol:function(a,b,c){var d,e,f,g,h=[],i=0;return b="boolean"!=typeof b?!1:b,void 0===c&&(c=!1),this.each(function(){var j=this,k=-1;if(j.grid&&(isNaN(a)?$(j.p.colModel).each(function(b){return this.name===a?(k=b,!1):void 0}):k=parseInt(a,10),k>=0)){var l=j.rows.length,m=0,n=0;if(l&&l>0){for(;l>m;){if($(j.rows[m]).hasClass("jqgrow")){try{d=$.unformat.call(j,$(j.rows[m].cells[k]),{rowId:j.rows[m].id,colModel:j.p.colModel[k]},k)}catch(o){d=$.jgrid.htmlDecode(j.rows[m].cells[k].innerHTML)}c?(g=parseFloat(d),isNaN(g)||(i+=g,void 0===f&&(f=e=g),e=Math.min(e,g),f=Math.max(f,g),n++)):h.push(b?{id:j.rows[m].id,value:d}:d)}m++}if(c)switch(c.toLowerCase()){case"sum":h=i;break;case"avg":h=i/n;break;case"count":h=l-1;break;case"min":h=e;break;case"max":h=f}}}}),h},clearGridData:function(a){return this.each(function(){var b=this;if(b.grid){if("boolean"!=typeof a&&(a=!1),b.p.deepempty)$("#"+$.jgrid.jqID(b.p.id)+" tbody:first tr:gt(0)").remove();else{var c=$("#"+$.jgrid.jqID(b.p.id)+" tbody:first tr:first")[0];$("#"+$.jgrid.jqID(b.p.id)+" tbody:first").empty().append(c)}b.p.footerrow&&a&&$(".ui-jqgrid-ftable td",b.grid.sDiv).html("&#160;"),b.p.selrow=null,b.p.selarrrow=[],b.p.savedRow=[],b.p.records=0,b.p.page=1,b.p.lastpage=0,b.p.reccount=0,b.p.data=[],b.p._index={},b.updatepager(!0,!1)}})},getInd:function(a,b){var c,d=!1;
return this.each(function(){c=$(this).jqGrid("getGridRowById",a),c&&(d=b===!0?c:c.rowIndex)}),d},bindKeys:function(a){var b=$.extend({onEnter:null,onSpace:null,onLeftKey:null,onRightKey:null,scrollingRows:!0},a||{});return this.each(function(){var a=this;$("body").is("[role]")||$("body").attr("role","application"),a.p.scrollrows=b.scrollingRows,$(a).keydown(function(c){var d,e,f,g=$(a).find("tr[tabindex=0]")[0],h=a.p.treeReader.expanded_field;if(g)if(f=a.p._index[$.jgrid.stripPref(a.p.idPrefix,g.id)],37===c.keyCode||38===c.keyCode||39===c.keyCode||40===c.keyCode){if(38===c.keyCode){if(e=g.previousSibling,d="",e)if($(e).is(":hidden")){for(;e;)if(e=e.previousSibling,!$(e).is(":hidden")&&$(e).hasClass("jqgrow")){d=e.id;break}}else d=e.id;$(a).jqGrid("setSelection",d,!0,c),c.preventDefault()}if(40===c.keyCode){if(e=g.nextSibling,d="",e)if($(e).is(":hidden")){for(;e;)if(e=e.nextSibling,!$(e).is(":hidden")&&$(e).hasClass("jqgrow")){d=e.id;break}}else d=e.id;$(a).jqGrid("setSelection",d,!0,c),c.preventDefault()}37===c.keyCode&&(a.p.treeGrid&&a.p.data[f][h]&&$(g).find("div.treeclick").trigger("click"),$(a).triggerHandler("jqGridKeyLeft",[a.p.selrow]),$.isFunction(b.onLeftKey)&&b.onLeftKey.call(a,a.p.selrow)),39===c.keyCode&&(a.p.treeGrid&&!a.p.data[f][h]&&$(g).find("div.treeclick").trigger("click"),$(a).triggerHandler("jqGridKeyRight",[a.p.selrow]),$.isFunction(b.onRightKey)&&b.onRightKey.call(a,a.p.selrow))}else 13===c.keyCode?($(a).triggerHandler("jqGridKeyEnter",[a.p.selrow]),$.isFunction(b.onEnter)&&b.onEnter.call(a,a.p.selrow)):32===c.keyCode&&($(a).triggerHandler("jqGridKeySpace",[a.p.selrow]),$.isFunction(b.onSpace)&&b.onSpace.call(a,a.p.selrow))})})},unbindKeys:function(){return this.each(function(){$(this).unbind("keydown")})},getLocalRow:function(a){var b,c=!1;return this.each(function(){void 0!==a&&(b=this.p._index[$.jgrid.stripPref(this.p.idPrefix,a)],b>=0&&(c=this.p.data[b]))}),c},progressBar:function(a){return a=$.extend({htmlcontent:"",method:"hide",loadtype:"disable"},a||{}),this.each(function(){var b,c,d="show"===a.method?!0:!1,e=$("#load_"+$.jgrid.jqID(this.p.id)),f=$(window).scrollTop();switch(""!==a.htmlcontent&&e.html(a.htmlcontent),a.loadtype){case"disable":break;case"enable":e.toggle(d);break;case"block":$("#lui_"+$.jgrid.jqID(this.p.id)).toggle(d),e.toggle(d)}e.is(":visible")&&(b=e.offsetParent(),e.css("top",""),e.offset().top<f&&(c=Math.min(10+f-b.offset().top,b.height()-e.height()),e.css("top",c+"px")))})},getColProp:function(a){var b={},c=this[0];if(!c.grid)return!1;var d,e=c.p.colModel;for(d=0;d<e.length;d++)if(e[d].name===a){b=e[d];break}return b},setColProp:function(a,b){return this.each(function(){if(this.grid&&b){var c,d=this.p.colModel;for(c=0;c<d.length;c++)if(d[c].name===a){$.extend(!0,this.p.colModel[c],b);break}}})},sortGrid:function(a,b,c){return this.each(function(){var d,e=this,f=-1,g=!1;if(e.grid){for(a||(a=e.p.sortname),d=0;d<e.p.colModel.length;d++)if(e.p.colModel[d].index===a||e.p.colModel[d].name===a){f=d,e.p.frozenColumns===!0&&e.p.colModel[d].frozen===!0&&(g=e.grid.fhDiv.find("#"+e.p.id+"_"+a));break}if(-1!==f){var h=e.p.colModel[f].sortable;g||(g=e.grid.headers[f].el),"boolean"!=typeof h&&(h=!0),"boolean"!=typeof b&&(b=!1),h&&e.sortData("jqgh_"+e.p.id+"_"+a,f,b,c,g)}}})},setGridState:function(a){return this.each(function(){if(this.grid){var b=this,c=$(this).jqGrid("getStyleUI",this.p.styleUI+".base","icon_caption_open",!0),d=$(this).jqGrid("getStyleUI",this.p.styleUI+".base","icon_caption_close",!0);"hidden"===a?($(".ui-jqgrid-bdiv, .ui-jqgrid-hdiv","#gview_"+$.jgrid.jqID(b.p.id)).slideUp("fast"),b.p.pager&&$(b.p.pager).slideUp("fast"),b.p.toppager&&$(b.p.toppager).slideUp("fast"),b.p.toolbar[0]===!0&&("both"===b.p.toolbar[1]&&$(b.grid.ubDiv).slideUp("fast"),$(b.grid.uDiv).slideUp("fast")),b.p.footerrow&&$(".ui-jqgrid-sdiv","#gbox_"+$.jgrid.jqID(b.p.id)).slideUp("fast"),$(".ui-jqgrid-headlink",b.grid.cDiv).removeClass(c).addClass(d),b.p.gridstate="hidden"):"visible"===a&&($(".ui-jqgrid-hdiv, .ui-jqgrid-bdiv","#gview_"+$.jgrid.jqID(b.p.id)).slideDown("fast"),b.p.pager&&$(b.p.pager).slideDown("fast"),b.p.toppager&&$(b.p.toppager).slideDown("fast"),b.p.toolbar[0]===!0&&("both"===b.p.toolbar[1]&&$(b.grid.ubDiv).slideDown("fast"),$(b.grid.uDiv).slideDown("fast")),b.p.footerrow&&$(".ui-jqgrid-sdiv","#gbox_"+$.jgrid.jqID(b.p.id)).slideDown("fast"),$(".ui-jqgrid-headlink",b.grid.cDiv).removeClass(d).addClass(c),b.p.gridstate="visible")}})},setFrozenColumns:function(){return this.each(function(){if(this.grid){var a=this,b=a.p.colModel,c=0,d=b.length,e=-1,f=!1,g=$(a).jqGrid("getStyleUI",a.p.styleUI+".base","headerDiv",!0,"ui-jqgrid-hdiv"),h=$(a).jqGrid("getStyleUI",a.p.styleUI+".common","hover",!0);if(a.p.subGrid!==!0&&a.p.treeGrid!==!0&&a.p.cellEdit!==!0&&!a.p.sortable&&!a.p.scroll){for(a.p.rownumbers&&c++,a.p.multiselect&&c++;d>c&&b[c].frozen===!0;)f=!0,e=c,c++;if(e>=0&&f){var i=a.p.caption?$(a.grid.cDiv).outerHeight():0,j=$(".ui-jqgrid-htable","#gview_"+$.jgrid.jqID(a.p.id)).height();a.p.toppager&&(i+=$(a.grid.topDiv).outerHeight()),a.p.toolbar[0]===!0&&"bottom"!==a.p.toolbar[1]&&(i+=$(a.grid.uDiv).outerHeight()),a.grid.fhDiv=$('<div style="position:absolute;'+("rtl"===a.p.direction?"right:0;":"left:0;")+"top:"+i+"px;height:"+j+'px;" class="frozen-div '+g+'"></div>'),a.grid.fbDiv=$('<div style="position:absolute;'+("rtl"===a.p.direction?"right:0;":"left:0;")+"top:"+(parseInt(i,10)+parseInt(j,10)+1)+'px;overflow-y:hidden" class="frozen-bdiv ui-jqgrid-bdiv"></div>'),$("#gview_"+$.jgrid.jqID(a.p.id)).append(a.grid.fhDiv);var k=$(".ui-jqgrid-htable","#gview_"+$.jgrid.jqID(a.p.id)).clone(!0);if(a.p.groupHeader){$("tr.jqg-first-row-header, tr.jqg-third-row-header",k).each(function(){$("th:gt("+e+")",this).remove()});var l,m,n=-1,o=-1;$("tr.jqg-second-row-header th",k).each(function(){return l=parseInt($(this).attr("colspan"),10),m=parseInt($(this).attr("rowspan"),10),m&&(n++,o++),l&&(n+=l,o++),n===e?(o=e,!1):void 0}),n!==e&&(o=e),$("tr.jqg-second-row-header",k).each(function(){$("th:gt("+o+")",this).remove()})}else $("tr",k).each(function(){$("th:gt("+e+")",this).remove()});if($(k).width(1),$(a.grid.fhDiv).append(k).mousemove(function(b){return a.grid.resizing?(a.grid.dragMove(b),!1):void 0}),a.p.footerrow){var p=$(".ui-jqgrid-bdiv","#gview_"+$.jgrid.jqID(a.p.id)).height();a.grid.fsDiv=$('<div style="position:absolute;left:0px;top:'+(parseInt(i,10)+parseInt(j,10)+parseInt(p,10)+1)+'px;" class="frozen-sdiv ui-jqgrid-sdiv"></div>'),$("#gview_"+$.jgrid.jqID(a.p.id)).append(a.grid.fsDiv);var q=$(".ui-jqgrid-ftable","#gview_"+$.jgrid.jqID(a.p.id)).clone(!0);$("tr",q).each(function(){$("td:gt("+e+")",this).remove()}),$(q).width(1),$(a.grid.fsDiv).append(q)}$(a).bind("jqGridResizeStop.setFrozenColumns",function(b,c,d){var e=$(".ui-jqgrid-htable",a.grid.fhDiv);$("th:eq("+d+")",e).width(c);var f=$(".ui-jqgrid-btable",a.grid.fbDiv);if($("tr:first td:eq("+d+")",f).width(c),a.p.footerrow){var g=$(".ui-jqgrid-ftable",a.grid.fsDiv);$("tr:first td:eq("+d+")",g).width(c)}}),$("#gview_"+$.jgrid.jqID(a.p.id)).append(a.grid.fbDiv),$(a.grid.fbDiv).bind("mousewheel DOMMouseScroll",function(b){var c=$(a.grid.bDiv).scrollTop();$(a.grid.bDiv).scrollTop(b.originalEvent.wheelDelta>0||b.originalEvent.detail<0?c-25:c+25),b.preventDefault()}),a.p.hoverrows===!0&&$("#"+$.jgrid.jqID(a.p.id)).unbind("mouseover").unbind("mouseout"),$(a).bind("jqGridAfterGridComplete.setFrozenColumns",function(){$("#"+$.jgrid.jqID(a.p.id)+"_frozen").remove(),$(a.grid.fbDiv).height($(a.grid.bDiv).height()-16);var b=$("#"+$.jgrid.jqID(a.p.id)).clone(!0);$("tr[role=row]",b).each(function(){$("td[role=gridcell]:gt("+e+")",this).remove()}),$(b).width(1).attr("id",a.p.id+"_frozen"),$(a.grid.fbDiv).append(b),a.p.hoverrows===!0&&($("tr.jqgrow",b).hover(function(){$(this).addClass(h),$("#"+$.jgrid.jqID(this.id),"#"+$.jgrid.jqID(a.p.id)).addClass(h)},function(){$(this).removeClass(h),$("#"+$.jgrid.jqID(this.id),"#"+$.jgrid.jqID(a.p.id)).removeClass(h)}),$("tr.jqgrow","#"+$.jgrid.jqID(a.p.id)).hover(function(){$(this).addClass(h),$("#"+$.jgrid.jqID(this.id),"#"+$.jgrid.jqID(a.p.id)+"_frozen").addClass(h)},function(){$(this).removeClass(h),$("#"+$.jgrid.jqID(this.id),"#"+$.jgrid.jqID(a.p.id)+"_frozen").removeClass(h)})),b=null}),a.grid.hDiv.loading||$(a).triggerHandler("jqGridAfterGridComplete"),a.p.frozenColumns=!0}}}})},destroyFrozenColumns:function(){return this.each(function(){if(this.grid&&this.p.frozenColumns===!0){var a=this,b=$(a).jqGrid("getStyleUI",a.p.styleUI+".common","hover",!0);if($(a.grid.fhDiv).remove(),$(a.grid.fbDiv).remove(),a.grid.fhDiv=null,a.grid.fbDiv=null,a.p.footerrow&&($(a.grid.fsDiv).remove(),a.grid.fsDiv=null),$(this).unbind(".setFrozenColumns"),a.p.hoverrows===!0){var c;$("#"+$.jgrid.jqID(a.p.id)).bind("mouseover",function(a){c=$(a.target).closest("tr.jqgrow"),"ui-subgrid"!==$(c).attr("class")&&$(c).addClass(b)}).bind("mouseout",function(a){c=$(a.target).closest("tr.jqgrow"),$(c).removeClass(b)})}this.p.frozenColumns=!1}})},resizeColumn:function(a,b){return this.each(function(){var c,d,e,f=this.grid,g=this.p,h=g.colModel,i=h.length;if("string"==typeof a){for(c=0;i>c;c++)if(h[c].name===a){a=c;break}}else a=parseInt(a,10);if(b=parseInt(b,10),!("number"!=typeof a||0>a||a>h.length-1||"number"!=typeof b||b<g.minColWidth)){if(g.forceFit)for(g.nv=0,c=a+1;i>c;c++)if(h[c].hidden!==!0){g.nv=c-a;break}if(f.resizing={idx:a},d=b-f.headers[a].width,g.forceFit){if(e=f.headers[a+g.nv].width-d,e<g.minColWidth)return;f.headers[a+g.nv].newWidth=f.headers[a+g.nv].width-d}f.newWidth=g.tblwidth+d,f.headers[a].newWidth=b,f.dragEnd(!1)}})},getStyleUI:function(a,b,c,d){try{var e="",f=a.split("."),g="";switch(c||(e="class=",g='"'),null==d&&(d=""),f.length){case 1:e+=g+d+" "+$.jgrid.styleUI[f[0]][b]+g;break;case 2:e+=g+d+" "+$.jgrid.styleUI[f[0]][f[1]][b]+g}}catch(h){e=""}return $.trim(e)},resizeGrid:function(a){return this.each(function(){var b=this;void 0===a&&(a=500),setTimeout(function(){var a=$(window).width(),c=$("#gbox_"+$.jgrid.jqID(b.p.id)).parent().width(),d=b.p.width;d=a-c>3?c:a,$("#"+$.jgrid.jqID(b.p.id)).jqGrid("setGridWidth",d)},a)})}}),$.jgrid.extend({editCell:function(a,b,c){return this.each(function(){var d,e,f,g,h=this,i=$(this).jqGrid("getStyleUI",h.p.styleUI+".common","highlight",!0),j=$(this).jqGrid("getStyleUI",h.p.styleUI+".common","hover",!0),k=$(this).jqGrid("getStyleUI",h.p.styleUI+".celledit","inputClass",!0);if(h.grid&&h.p.cellEdit===!0){if(b=parseInt(b,10),h.p.selrow=h.rows[a].id,h.p.knv||$(h).jqGrid("GridNav"),h.p.savedRow.length>0){if(c===!0&&a==h.p.iRow&&b==h.p.iCol)return;$(h).jqGrid("saveCell",h.p.savedRow[0].id,h.p.savedRow[0].ic)}else window.setTimeout(function(){$("#"+$.jgrid.jqID(h.p.knv)).attr("tabindex","-1").focus()},1);if(g=h.p.colModel[b],d=g.name,"subgrid"!==d&&"cb"!==d&&"rn"!==d){if(f=$("td:eq("+b+")",h.rows[a]),g.editable!==!0||c!==!0||f.hasClass("not-editable-cell")||$.isFunction(h.p.isCellEditable)&&!h.p.isCellEditable.call(h,d,a,b))parseInt(h.p.iCol,10)>=0&&parseInt(h.p.iRow,10)>=0&&$(h.rows[h.p.iRow]).removeClass("selected-row "+j).find("td:eq("+h.p.iCol+")").removeClass("edit-cell "+i),f.addClass("edit-cell "+i),$(h.rows[a]).addClass("selected-row "+j),e=f.html().replace(/\&#160\;/gi,""),$(h).triggerHandler("jqGridSelectCell",[h.rows[a].id,d,e,a,b]),$.isFunction(h.p.onSelectCell)&&h.p.onSelectCell.call(h,h.rows[a].id,d,e,a,b);else{parseInt(h.p.iCol,10)>=0&&parseInt(h.p.iRow,10)>=0&&$(h.rows[h.p.iRow]).removeClass("selected-row "+j).find("td:eq("+h.p.iCol+")").removeClass("edit-cell "+i),$(f).addClass("edit-cell "+i),$(h.rows[a]).addClass("selected-row "+j);try{e=$.unformat.call(h,f,{rowId:h.rows[a].id,colModel:g},b)}catch(l){e=g.edittype&&"textarea"===g.edittype?$(f).text():$(f).html()}if(h.p.autoencode&&(e=$.jgrid.htmlDecode(e)),g.edittype||(g.edittype="text"),h.p.savedRow.push({id:a,ic:b,name:d,v:e}),("&nbsp;"===e||"&#160;"===e||1===e.length&&160===e.charCodeAt(0))&&(e=""),$.isFunction(h.p.formatCell)){var m=h.p.formatCell.call(h,h.rows[a].id,d,e,a,b);void 0!==m&&(e=m)}$(h).triggerHandler("jqGridBeforeEditCell",[h.rows[a].id,d,e,a,b]),$.isFunction(h.p.beforeEditCell)&&h.p.beforeEditCell.call(h,h.rows[a].id,d,e,a,b);var n=$.extend({},g.editoptions||{},{id:a+"_"+d,name:d,rowId:h.rows[a].id,oper:"edit"}),o=$.jgrid.createEl.call(h,g.edittype,n,e,!0,$.extend({},$.jgrid.ajaxOptions,h.p.ajaxSelectOptions||{}));$.inArray(g.edittype,["text","textarea","password","select"])>-1&&$(o).addClass(k),$(f).html("").append(o).attr("tabindex","0"),$.jgrid.bindEv.call(h,o,n),window.setTimeout(function(){$(o).focus()},1),$("input, select, textarea",f).bind("keydown",function(c){if(27===c.keyCode&&($("input.hasDatepicker",f).length>0?$(".ui-datepicker").is(":hidden")?$(h).jqGrid("restoreCell",a,b):$("input.hasDatepicker",f).datepicker("hide"):$(h).jqGrid("restoreCell",a,b)),13===c.keyCode&&!c.shiftKey)return $(h).jqGrid("saveCell",a,b),!1;if(9===c.keyCode){if(h.grid.hDiv.loading)return!1;c.shiftKey?$(h).jqGrid("prevCell",a,b):$(h).jqGrid("nextCell",a,b)}c.stopPropagation()}),$(h).triggerHandler("jqGridAfterEditCell",[h.rows[a].id,d,e,a,b]),$.isFunction(h.p.afterEditCell)&&h.p.afterEditCell.call(h,h.rows[a].id,d,e,a,b)}h.p.iCol=b,h.p.iRow=a}}})},saveCell:function(a,b){return this.each(function(){var c,d=this,e=$.jgrid.getRegional(this,"errors"),f=$.jgrid.getRegional(this,"edit");if(d.grid&&d.p.cellEdit===!0){if(c=d.p.savedRow.length>=1?0:null,null!==c){var g,h,i=$("td:eq("+b+")",d.rows[a]),j=d.p.colModel[b],k=j.name,l=$.jgrid.jqID(k);switch(j.edittype){case"select":if(j.editoptions.multiple){var m=$("#"+a+"_"+l,d.rows[a]),n=[];g=$(m).val(),g?g.join(","):g="",$("option:selected",m).each(function(a,b){n[a]=$(b).text()}),h=n.join(",")}else g=$("#"+a+"_"+l+" option:selected",d.rows[a]).val(),h=$("#"+a+"_"+l+" option:selected",d.rows[a]).text();j.formatter&&(h=g);break;case"checkbox":var o=["Yes","No"];j.editoptions&&(o=j.editoptions.value.split(":")),g=$("#"+a+"_"+l,d.rows[a]).is(":checked")?o[0]:o[1],h=g;break;case"password":case"text":case"textarea":case"button":g=$("#"+a+"_"+l,d.rows[a]).val(),h=g;break;case"custom":try{if(!j.editoptions||!$.isFunction(j.editoptions.custom_value))throw"e1";if(g=j.editoptions.custom_value.call(d,$(".customelement",i),"get"),void 0===g)throw"e2";h=g}catch(p){"e1"===p?$.jgrid.info_dialog(e.errcap,"function 'custom_value' "+f.msg.nodefined,f.bClose,{styleUI:d.p.styleUI}):"e2"===p?$.jgrid.info_dialog(e.errcap,"function 'custom_value' "+f.msg.novalue,f.bClose,{styleUI:d.p.styleUI}):$.jgrid.info_dialog(e.errcap,p.message,f.bClose,{styleUI:d.p.styleUI})}}if(h!==d.p.savedRow[c].v){var q=$(d).triggerHandler("jqGridBeforeSaveCell",[d.rows[a].id,k,g,a,b]);if(q&&(g=q,h=q),$.isFunction(d.p.beforeSaveCell)){var r=d.p.beforeSaveCell.call(d,d.rows[a].id,k,g,a,b);r&&(g=r,h=r)}var s=$.jgrid.checkValues.call(d,g,b);if(s[0]===!0){var t=$(d).triggerHandler("jqGridBeforeSubmitCell",[d.rows[a].id,k,g,a,b])||{};if($.isFunction(d.p.beforeSubmitCell)&&(t=d.p.beforeSubmitCell.call(d,d.rows[a].id,k,g,a,b),t||(t={})),$("input.hasDatepicker",i).length>0&&$("input.hasDatepicker",i).datepicker("hide"),"remote"===d.p.cellsubmit)if(d.p.cellurl){var u={};d.p.autoencode&&(g=$.jgrid.htmlEncode(g)),u[k]=g;var v,w,x;x=d.p.prmNames,v=x.id,w=x.oper,u[v]=$.jgrid.stripPref(d.p.idPrefix,d.rows[a].id),u[w]=x.editoper,u=$.extend(t,u),$(d).jqGrid("progressBar",{method:"show",loadtype:d.p.loadui,htmlcontent:$.jgrid.getRegional(d,"defaults.savetext")}),d.grid.hDiv.loading=!0,$.ajax($.extend({url:d.p.cellurl,data:$.isFunction(d.p.serializeCellData)?d.p.serializeCellData.call(d,u):u,type:"POST",complete:function(c,j){if($(d).jqGrid("progressBar",{method:"hide",loadtype:d.p.loadui}),d.grid.hDiv.loading=!1,"success"===j){var l=$(d).triggerHandler("jqGridAfterSubmitCell",[d,c,u.id,k,g,a,b])||[!0,""];l[0]===!0&&$.isFunction(d.p.afterSubmitCell)&&(l=d.p.afterSubmitCell.call(d,c,u.id,k,g,a,b)),l[0]===!0?($(i).empty(),$(d).jqGrid("setCell",d.rows[a].id,b,h,!1,!1,!0),$(i).addClass("dirty-cell"),$(d.rows[a]).addClass("edited"),$(d).triggerHandler("jqGridAfterSaveCell",[d.rows[a].id,k,g,a,b]),$.isFunction(d.p.afterSaveCell)&&d.p.afterSaveCell.call(d,d.rows[a].id,k,g,a,b),d.p.savedRow.splice(0,1)):($.jgrid.info_dialog(e.errcap,l[1],f.bClose,{styleUI:d.p.styleUI}),$(d).jqGrid("restoreCell",a,b))}},error:function(c,g,h){$("#lui_"+$.jgrid.jqID(d.p.id)).hide(),d.grid.hDiv.loading=!1,$(d).triggerHandler("jqGridErrorCell",[c,g,h]),$.isFunction(d.p.errorCell)?(d.p.errorCell.call(d,c,g,h),$(d).jqGrid("restoreCell",a,b)):($.jgrid.info_dialog(e.errcap,c.status+" : "+c.statusText+"<br/>"+g,f.bClose,{styleUI:d.p.styleUI}),$(d).jqGrid("restoreCell",a,b))}},$.jgrid.ajaxOptions,d.p.ajaxCellOptions||{}))}else try{$.jgrid.info_dialog(e.errcap,e.nourl,f.bClose,{styleUI:d.p.styleUI}),$(d).jqGrid("restoreCell",a,b)}catch(p){}"clientArray"===d.p.cellsubmit&&($(i).empty(),$(d).jqGrid("setCell",d.rows[a].id,b,h,!1,!1,!0),$(i).addClass("dirty-cell"),$(d.rows[a]).addClass("edited"),$(d).triggerHandler("jqGridAfterSaveCell",[d.rows[a].id,k,g,a,b]),$.isFunction(d.p.afterSaveCell)&&d.p.afterSaveCell.call(d,d.rows[a].id,k,g,a,b),d.p.savedRow.splice(0,1))}else try{window.setTimeout(function(){$.jgrid.info_dialog(e.errcap,g+" "+s[1],f.bClose,{styleUI:d.p.styleUI})},100),$(d).jqGrid("restoreCell",a,b)}catch(p){}}else $(d).jqGrid("restoreCell",a,b)}window.setTimeout(function(){$("#"+$.jgrid.jqID(d.p.knv)).attr("tabindex","-1").focus()},0)}})},restoreCell:function(a,b){return this.each(function(){var c,d=this;if(d.grid&&d.p.cellEdit===!0){if(c=d.p.savedRow.length>=1?0:null,null!==c){var e=$("td:eq("+b+")",d.rows[a]);if($.isFunction($.fn.datepicker))try{$("input.hasDatepicker",e).datepicker("hide")}catch(f){}$(e).empty().attr("tabindex","-1"),$(d).jqGrid("setCell",d.rows[a].id,b,d.p.savedRow[c].v,!1,!1,!0),$(d).triggerHandler("jqGridAfterRestoreCell",[d.rows[a].id,d.p.savedRow[c].v,a,b]),$.isFunction(d.p.afterRestoreCell)&&d.p.afterRestoreCell.call(d,d.rows[a].id,d.p.savedRow[c].v,a,b),d.p.savedRow.splice(0,1)}window.setTimeout(function(){$("#"+d.p.knv).attr("tabindex","-1").focus()},0)}})},nextCell:function(a,b){return this.each(function(){var c,d=this,e=!1;if(d.grid&&d.p.cellEdit===!0){for(c=b+1;c<d.p.colModel.length;c++)if(d.p.colModel[c].editable===!0&&(!$.isFunction(d.p.isCellEditable)||d.p.isCellEditable.call(d,d.p.colModel[c].name,a,c))){e=c;break}e!==!1?$(d).jqGrid("editCell",a,e,!0):d.p.savedRow.length>0&&$(d).jqGrid("saveCell",a,b)}})},prevCell:function(a,b){return this.each(function(){var c,d=this,e=!1;if(d.grid&&d.p.cellEdit===!0){for(c=b-1;c>=0;c--)if(d.p.colModel[c].editable===!0&&(!$.isFunction(d.p.isCellEditable)||d.p.isCellEditable.call(d,d.p.colModel[c].name,a,c))){e=c;break}e!==!1?$(d).jqGrid("editCell",a,e,!0):d.p.savedRow.length>0&&$(d).jqGrid("saveCell",a,b)}})},GridNav:function(){return this.each(function(){function a(a,b,d){if("v"===d.substr(0,1)){var e=$(c.grid.bDiv)[0].clientHeight,f=$(c.grid.bDiv)[0].scrollTop,g=c.rows[a].offsetTop+c.rows[a].clientHeight,h=c.rows[a].offsetTop;"vd"===d&&g>=e&&($(c.grid.bDiv)[0].scrollTop=$(c.grid.bDiv)[0].scrollTop+c.rows[a].clientHeight),"vu"===d&&f>h&&($(c.grid.bDiv)[0].scrollTop=$(c.grid.bDiv)[0].scrollTop-c.rows[a].clientHeight)}if("h"===d){var i=$(c.grid.bDiv)[0].clientWidth,j=$(c.grid.bDiv)[0].scrollLeft,k=c.rows[a].cells[b].offsetLeft+c.rows[a].cells[b].clientWidth,l=c.rows[a].cells[b].offsetLeft;k>=i+parseInt(j,10)?$(c.grid.bDiv)[0].scrollLeft=$(c.grid.bDiv)[0].scrollLeft+c.rows[a].cells[b].clientWidth:j>l&&($(c.grid.bDiv)[0].scrollLeft=$(c.grid.bDiv)[0].scrollLeft-c.rows[a].cells[b].clientWidth)}}function b(a,b){var d,e;if("lft"===b)for(d=a+1,e=a;e>=0;e--)if(c.p.colModel[e].hidden!==!0){d=e;break}if("rgt"===b)for(d=a-1,e=a;e<c.p.colModel.length;e++)if(c.p.colModel[e].hidden!==!0){d=e;break}return d}var c=this;if(c.grid&&c.p.cellEdit===!0){c.p.knv=c.p.id+"_kn";var d,e,f=$("<div style='position:fixed;top:0px;width:1px;height:1px;' tabindex='0'><div tabindex='-1' style='width:1px;height:1px;' id='"+c.p.knv+"'></div></div>");$(f).insertBefore(c.grid.cDiv),$("#"+c.p.knv).focus().keydown(function(f){switch(e=f.keyCode,"rtl"===c.p.direction&&(37===e?e=39:39===e&&(e=37)),e){case 38:c.p.iRow-1>0&&(a(c.p.iRow-1,c.p.iCol,"vu"),$(c).jqGrid("editCell",c.p.iRow-1,c.p.iCol,!1));break;case 40:c.p.iRow+1<=c.rows.length-1&&(a(c.p.iRow+1,c.p.iCol,"vd"),$(c).jqGrid("editCell",c.p.iRow+1,c.p.iCol,!1));break;case 37:c.p.iCol-1>=0&&(d=b(c.p.iCol-1,"lft"),a(c.p.iRow,d,"h"),$(c).jqGrid("editCell",c.p.iRow,d,!1));break;case 39:c.p.iCol+1<=c.p.colModel.length-1&&(d=b(c.p.iCol+1,"rgt"),a(c.p.iRow,d,"h"),$(c).jqGrid("editCell",c.p.iRow,d,!1));break;case 13:parseInt(c.p.iCol,10)>=0&&parseInt(c.p.iRow,10)>=0&&$(c).jqGrid("editCell",c.p.iRow,c.p.iCol,!0);break;default:return!0}return!1})}})},getChangedCells:function(a){var b=[];return a||(a="all"),this.each(function(){var c,d=this;d.grid&&d.p.cellEdit===!0&&$(d.rows).each(function(e){var f={};$(this).hasClass("edited")&&($("td",this).each(function(b){if(c=d.p.colModel[b].name,"cb"!==c&&"subgrid"!==c)if("dirty"===a){if($(this).hasClass("dirty-cell"))try{f[c]=$.unformat.call(d,this,{rowId:d.rows[e].id,colModel:d.p.colModel[b]},b)}catch(g){f[c]=$.jgrid.htmlDecode($(this).html())}}else try{f[c]=$.unformat.call(d,this,{rowId:d.rows[e].id,colModel:d.p.colModel[b]},b)}catch(g){f[c]=$.jgrid.htmlDecode($(this).html())}}),f.id=this.id,b.push(f))})}),b}}),$.extend($.jgrid,{showModal:function(a){a.w.show()},closeModal:function(a){a.w.hide().attr("aria-hidden","true"),a.o&&a.o.remove()},hideModal:function(a,b){b=$.extend({jqm:!0,gb:"",removemodal:!1,formprop:!1,form:""},b||{});var c=b.gb&&"string"==typeof b.gb&&"#gbox_"===b.gb.substr(0,6)?$("#"+b.gb.substr(6))[0]:!1;if(b.onClose){var d=c?b.onClose.call(c,a):b.onClose(a);if("boolean"==typeof d&&!d)return}if(b.formprop&&c&&b.form){var e=$(a)[0].style.height,f=$(a)[0].style.width;e.indexOf("px")>-1&&(e=parseFloat(e)),f.indexOf("px")>-1&&(f=parseFloat(f));var g,h;"edit"===b.form?(g="#"+$.jgrid.jqID("FrmGrid_"+b.gb.substr(6)),h="formProp"):"view"===b.form&&(g="#"+$.jgrid.jqID("ViewGrid_"+b.gb.substr(6)),h="viewProp"),$(c).data(h,{top:parseFloat($(a).css("top")),left:parseFloat($(a).css("left")),width:f,height:e,dataheight:$(g).height(),datawidth:$(g).width()})}if($.fn.jqm&&b.jqm===!0)$(a).attr("aria-hidden","true").jqmHide();else{if(""!==b.gb)try{$(".jqgrid-overlay:first",b.gb).hide()}catch(i){}$(a).hide().attr("aria-hidden","true")}b.removemodal&&$(a).remove()},findPos:function(a){var b=0,c=0;if(a.offsetParent)do b+=a.offsetLeft,c+=a.offsetTop;while(a=a.offsetParent);return[b,c]},createModal:function(a,b,c,d,e,f,g){c=$.extend(!0,{},$.jgrid.jqModal||{},c);var h=this,i="rtl"===$(c.gbox).attr("dir")?!0:!1,j=$.jgrid.styleUI[c.styleUI||"jQueryUI"].modal,k=$.jgrid.styleUI[c.styleUI||"jQueryUI"].common,l=document.createElement("div");g=$.extend({},g||{}),l.className="ui-jqdialog "+j.modal,l.id=a.themodal;var m=document.createElement("div");m.className="ui-jqdialog-titlebar "+j.header,m.id=a.modalhead,$(m).append("<span class='ui-jqdialog-title'>"+c.caption+"</span>");var n=$("<a class='ui-jqdialog-titlebar-close "+k.cornerall+"'></a>").hover(function(){n.addClass(k.hover)},function(){n.removeClass(k.hover)}).append("<span class='"+k.icon_base+" "+j.icon_close+"'></span>");$(m).append(n),i?(l.dir="rtl",$(".ui-jqdialog-title",m).css("float","right"),$(".ui-jqdialog-titlebar-close",m).css("left","0.3em")):(l.dir="ltr",$(".ui-jqdialog-title",m).css("float","left"),$(".ui-jqdialog-titlebar-close",m).css("right","0.3em"));var o=document.createElement("div");$(o).addClass("ui-jqdialog-content "+j.content).attr("id",a.modalcontent),$(o).append(b),l.appendChild(o),$(l).prepend(m),f===!0?$("body").append(l):"string"==typeof f?$(f).append(l):$(l).insertBefore(d),$(l).css(g),void 0===c.jqModal&&(c.jqModal=!0);var p={};if($.fn.jqm&&c.jqModal===!0){if(0===c.left&&0===c.top&&c.overlay){var q=[];q=$.jgrid.findPos(e),c.left=q[0]+4,c.top=q[1]+4}p.top=c.top+"px",p.left=c.left}else(0!==c.left||0!==c.top)&&(p.left=c.left,p.top=c.top+"px");if($("a.ui-jqdialog-titlebar-close",m).click(function(){var b=$("#"+$.jgrid.jqID(a.themodal)).data("onClose")||c.onClose,d=$("#"+$.jgrid.jqID(a.themodal)).data("gbox")||c.gbox;return h.hideModal("#"+$.jgrid.jqID(a.themodal),{gb:d,jqm:c.jqModal,onClose:b,removemodal:c.removemodal||!1,formprop:!c.recreateForm||!1,form:c.form||""}),!1}),0!==c.width&&c.width||(c.width=300),0!==c.height&&c.height||(c.height=200),!c.zIndex){var r=$(d).parents("*[role=dialog]").filter(":first").css("z-index");c.zIndex=r?parseInt(r,10)+2:950}var s=0;if(i&&p.left&&!f&&(s=$(c.gbox).width()-(isNaN(c.width)?0:parseInt(c.width,10))-8,p.left=parseInt(p.left,10)+parseInt(s,10)),p.left&&(p.left+="px"),$(l).css($.extend({width:isNaN(c.width)?"auto":c.width+"px",height:isNaN(c.height)?"auto":c.height+"px",zIndex:c.zIndex,overflow:"hidden"},p)).attr({tabIndex:"-1",role:"dialog","aria-labelledby":a.modalhead,"aria-hidden":"true"}),void 0===c.drag&&(c.drag=!0),void 0===c.resize&&(c.resize=!0),c.drag)if($(m).css("cursor","move"),$.fn.jqDrag)$(l).jqDrag(m);else try{$(l).draggable({handle:$("#"+$.jgrid.jqID(m.id))})}catch(t){}if(c.resize)if($.fn.jqResize)$(l).append("<div class='jqResize "+j.resizable+" "+k.icon_base+" "+j.icon_resizable+"'></div>"),$("#"+$.jgrid.jqID(a.themodal)).jqResize(".jqResize",a.scrollelm?"#"+$.jgrid.jqID(a.scrollelm):!1);else try{$(l).resizable({handles:"se, sw",alsoResize:a.scrollelm?"#"+$.jgrid.jqID(a.scrollelm):!1})}catch(u){}c.closeOnEscape===!0&&$(l).keydown(function(b){if(27===b.which){var d=$("#"+$.jgrid.jqID(a.themodal)).data("onClose")||c.onClose;h.hideModal("#"+$.jgrid.jqID(a.themodal),{gb:c.gbox,jqm:c.jqModal,onClose:d,removemodal:c.removemodal||!1,formprop:!c.recreateForm||!1,form:c.form||""})}})},viewModal:function(a,b){if(b=$.extend({toTop:!0,overlay:10,modal:!1,overlayClass:"ui-widget-overlay",onShow:$.jgrid.showModal,onHide:$.jgrid.closeModal,gbox:"",jqm:!0,jqM:!0},b||{}),void 0===b.focusField&&(b.focusField=0),b.focusField="number"==typeof b.focusField&&b.focusField>=0?parseInt(b.focusField,10):"boolean"!=typeof b.focusField||b.focusField?0:!1,$.fn.jqm&&b.jqm===!0)b.jqM?$(a).attr("aria-hidden","false").jqm(b).jqmShow():$(a).attr("aria-hidden","false").jqmShow();else if(""!==b.gbox&&($(".jqgrid-overlay:first",b.gbox).show(),$(a).data("gbox",b.gbox)),$(a).show().attr("aria-hidden","false"),b.focusField>=0)try{$(":input:visible",a)[parseInt(b.focusField,10)].focus()}catch(c){}},info_dialog:function(a,b,c,d){var e={width:290,height:"auto",dataheight:"auto",drag:!0,resize:!1,left:250,top:170,zIndex:1e3,jqModal:!0,modal:!1,closeOnEscape:!0,align:"center",buttonalign:"center",buttons:[]};$.extend(!0,e,$.jgrid.jqModal||{},{caption:"<b>"+a+"</b>"},d||{});var f=e.jqModal,g=this,h=$.jgrid.styleUI[e.styleUI||"jQueryUI"].modal,i=$.jgrid.styleUI[e.styleUI||"jQueryUI"].common;$.fn.jqm&&!f&&(f=!1);var j,k="";if(e.buttons.length>0)for(j=0;j<e.buttons.length;j++)void 0===e.buttons[j].id&&(e.buttons[j].id="info_button_"+j),k+="<a id='"+e.buttons[j].id+"' class='fm-button "+i.button+"'>"+e.buttons[j].text+"</a>";var l=isNaN(e.dataheight)?e.dataheight:e.dataheight+"px",m="text-align:"+e.align+";",n="<div id='info_id'>";n+="<div id='infocnt' style='margin:0px;padding-bottom:1em;width:100%;overflow:auto;position:relative;height:"+l+";"+m+"'>"+b+"</div>",n+=c?"<div class='"+h.header+"' style='text-align:"+e.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'><a id='closedialog' class='fm-button "+i.button+"'>"+c+"</a>"+k+"</div>":""!==k?"<div class='"+h.header+"' style='text-align:"+e.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'>"+k+"</div>":"",n+="</div>";try{"false"===$("#info_dialog").attr("aria-hidden")&&$.jgrid.hideModal("#info_dialog",{jqm:f}),$("#info_dialog").remove()}catch(o){}$.jgrid.createModal({themodal:"info_dialog",modalhead:"info_head",modalcontent:"info_content",scrollelm:"infocnt"},n,e,"","",!0),k&&$.each(e.buttons,function(a){$("#"+$.jgrid.jqID(this.id),"#info_id").bind("click",function(){return e.buttons[a].onClick.call($("#info_dialog")),!1})}),$("#closedialog","#info_id").click(function(){return g.hideModal("#info_dialog",{jqm:f,onClose:$("#info_dialog").data("onClose")||e.onClose,gb:$("#info_dialog").data("gbox")||e.gbox}),!1}),$(".fm-button","#info_dialog").hover(function(){$(this).addClass(i.hover)},function(){$(this).removeClass(i.hover)}),$.isFunction(e.beforeOpen)&&e.beforeOpen(),$.jgrid.viewModal("#info_dialog",{onHide:function(a){a.w.hide().remove(),a.o&&a.o.remove()},modal:e.modal,jqm:f}),$.isFunction(e.afterOpen)&&e.afterOpen();try{$("#info_dialog").focus()}catch(p){}},bindEv:function(a,b){var c=this;$.isFunction(b.dataInit)&&b.dataInit.call(c,a,b),b.dataEvents&&$.each(b.dataEvents,function(){void 0!==this.data?$(a).bind(this.type,this.data,this.fn):$(a).bind(this.type,this.fn)})},createEl:function(a,b,c,d,e){function f(a,b,c){var d=["dataInit","dataEvents","dataUrl","buildSelect","sopt","searchhidden","defaultValue","attr","custom_element","custom_value","oper"];void 0!==c&&$.isArray(c)&&$.merge(d,c),$.each(b,function(b,c){-1===$.inArray(b,d)&&$(a).attr(b,c)}),b.hasOwnProperty("id")||$(a).attr("id",$.jgrid.randId())}var g="",h=this;switch(a){case"textarea":g=document.createElement("textarea"),d?b.cols||$(g).css({width:"98%"}):b.cols||(b.cols=20),b.rows||(b.rows=2),("&nbsp;"===c||"&#160;"===c||1===c.length&&160===c.charCodeAt(0))&&(c=""),g.value=c,f(g,b),$(g).attr({role:"textbox",multiline:"true"});break;case"checkbox":if(g=document.createElement("input"),g.type="checkbox",b.value){var i=b.value.split(":");c===i[0]&&(g.checked=!0,g.defaultChecked=!0),g.value=i[0],$(g).attr("offval",i[1])}else{var j=(c+"").toLowerCase();j.search(/(false|f|0|no|n|off|undefined)/i)<0&&""!==j?(g.checked=!0,g.defaultChecked=!0,g.value=c):g.value="on",$(g).attr("offval","off")}f(g,b,["value"]),$(g).attr("role","checkbox");break;case"select":g=document.createElement("select"),g.setAttribute("role","select");var k,l=[];if(b.multiple===!0?(k=!0,g.multiple="multiple",$(g).attr("aria-multiselectable","true")):k=!1,null!=b.dataUrl){var m=null,n=b.postData||e.postData;try{m=b.rowId}catch(o){}h.p&&h.p.idPrefix&&(m=$.jgrid.stripPref(h.p.idPrefix,m)),$.ajax($.extend({url:$.isFunction(b.dataUrl)?b.dataUrl.call(h,m,c,String(b.name)):b.dataUrl,type:"GET",dataType:"html",data:$.isFunction(n)?n.call(h,m,c,String(b.name)):n,context:{elem:g,options:b,vl:c},success:function(a){var b,c=[],d=this.elem,e=this.vl,g=$.extend({},this.options),i=g.multiple===!0,j=g.cacheUrlData===!0,k="",l=$.isFunction(g.buildSelect)?g.buildSelect.call(h,a):a;"string"==typeof l&&(l=$($.trim(l)).html()),l&&($(d).append(l),f(d,g,n?["postData"]:void 0),void 0===g.size&&(g.size=i?3:1),i?(c=e.split(","),c=$.map(c,function(a){return $.trim(a)})):c[0]=$.trim(e),setTimeout(function(){if($("option",d).each(function(a){b=$(this).text(),e=$(this).val()||b,j&&(k+=(0!==a?";":"")+e+":"+b),0===a&&d.multiple&&(this.selected=!1),$(this).attr("role","option"),($.inArray($.trim(b),c)>-1||$.inArray($.trim(e),c)>-1)&&(this.selected="selected")}),j)if("edit"===g.oper)$(h).jqGrid("setColProp",g.name,{editoptions:{buildSelect:null,dataUrl:null,value:k}});else if("search"===g.oper)$(h).jqGrid("setColProp",g.name,{searchoptions:{dataUrl:null,value:k}});else if("filter"===g.oper&&$("#fbox_"+h.p.id)[0].p){var a,f=$("#fbox_"+h.p.id)[0].p.columns;$.each(f,function(){return a=this.index||this.name,g.name===a?(this.searchoptions.dataUrl=null,this.searchoptions.value=k,!1):void 0})}$(h).triggerHandler("jqGridAddEditAfterSelectUrlComplete",[d])},0))}},e||{}))}else if(b.value){var p;void 0===b.size&&(b.size=k?3:1),k&&(l=c.split(","),l=$.map(l,function(a){return $.trim(a)})),"function"==typeof b.value&&(b.value=b.value());var q,r,s,t,u,v,w=void 0===b.separator?":":b.separator,x=void 0===b.delimiter?";":b.delimiter;if("string"==typeof b.value)for(q=b.value.split(x),p=0;p<q.length;p++)r=q[p].split(w),r.length>2&&(r[1]=$.map(r,function(a,b){return b>0?a:void 0
}).join(w)),s=document.createElement("option"),s.setAttribute("role","option"),s.value=r[0],s.innerHTML=r[1],g.appendChild(s),k||$.trim(r[0])!==$.trim(c)&&$.trim(r[1])!==$.trim(c)||(s.selected="selected"),k&&($.inArray($.trim(r[1]),l)>-1||$.inArray($.trim(r[0]),l)>-1)&&(s.selected="selected");else if("[object Array]"===Object.prototype.toString.call(b.value))for(t=b.value,p=0;p<t.length;p++)2===t[p].length&&(u=t[p][0],v=t[p][1],s=document.createElement("option"),s.setAttribute("role","option"),s.value=u,s.innerHTML=v,g.appendChild(s),k||$.trim(u)!==$.trim(c)&&$.trim(v)!==$.trim(c)||(s.selected="selected"),k&&($.inArray($.trim(v),l)>-1||$.inArray($.trim(u),l)>-1)&&(s.selected="selected"));else if("object"==typeof b.value){t=b.value;for(u in t)t.hasOwnProperty(u)&&(s=document.createElement("option"),s.setAttribute("role","option"),s.value=u,s.innerHTML=t[u],g.appendChild(s),k||$.trim(u)!==$.trim(c)&&$.trim(t[u])!==$.trim(c)||(s.selected="selected"),k&&($.inArray($.trim(t[u]),l)>-1||$.inArray($.trim(u),l)>-1)&&(s.selected="selected"))}f(g,b,["value"])}break;case"image":case"file":g=document.createElement("input"),g.type=a,f(g,b);break;case"custom":g=document.createElement("span");try{if(!$.isFunction(b.custom_element))throw"e1";var y=b.custom_element.call(h,c,b);if(!y)throw"e2";y=$(y).addClass("customelement").attr({id:b.id,name:b.name}),$(g).empty().append(y)}catch(o){var z=$.jgrid.getRegional(h,"errors"),A=$.jgrid.getRegional(h,"edit");"e1"===o?$.jgrid.info_dialog(z.errcap,"function 'custom_element' "+A.msg.nodefined,A.bClose,{styleUI:h.p.styleUI}):"e2"===o?$.jgrid.info_dialog(z.errcap,"function 'custom_element' "+A.msg.novalue,A.bClose,{styleUI:h.p.styleUI}):$.jgrid.info_dialog(z.errcap,"string"==typeof o?o:o.message,A.bClose,{styleUI:h.p.styleUI})}break;default:var B;B="button"===a?"button":"textbox",g=document.createElement("input"),g.type=a,g.value=c,f(g,b),"button"!==a&&(d?b.size||$(g).css({width:"96%"}):b.size||(b.size=20)),$(g).attr("role",B)}return g},checkDate:function(a,b){var c,d=function(a){return a%4!==0||a%100===0&&a%400!==0?28:29},e={};if(a=a.toLowerCase(),c=-1!==a.indexOf("/")?"/":-1!==a.indexOf("-")?"-":-1!==a.indexOf(".")?".":"/",a=a.split(c),b=b.split(c),3!==b.length)return!1;var f,g,h=-1,i=-1,j=-1;for(g=0;g<a.length;g++){var k=isNaN(b[g])?0:parseInt(b[g],10);e[a[g]]=k,f=a[g],-1!==f.indexOf("y")&&(h=g),-1!==f.indexOf("m")&&(j=g),-1!==f.indexOf("d")&&(i=g)}f="y"===a[h]||"yyyy"===a[h]?4:"yy"===a[h]?2:-1;var l,m=[0,31,29,31,30,31,30,31,31,30,31,30,31];return-1===h?!1:(l=e[a[h]].toString(),2===f&&1===l.length&&(f=1),l.length!==f||0===e[a[h]]&&"00"!==b[h]?!1:-1===j?!1:(l=e[a[j]].toString(),l.length<1||e[a[j]]<1||e[a[j]]>12?!1:-1===i?!1:(l=e[a[i]].toString(),l.length<1||e[a[i]]<1||e[a[i]]>31||2===e[a[j]]&&e[a[i]]>d(e[a[h]])||e[a[i]]>m[e[a[j]]]?!1:!0)))},isEmpty:function(a){return a.match(/^\s+$/)||""===a?!0:!1},checkTime:function(a){var b,c=/^(\d{1,2}):(\d{2})([apAP][Mm])?$/;if(!$.jgrid.isEmpty(a)){if(b=a.match(c),!b)return!1;if(b[3]){if(b[1]<1||b[1]>12)return!1}else if(b[1]>23)return!1;if(b[2]>59)return!1}return!0},checkValues:function(a,b,c,d){var e,f,g,h,i,j,k=this,l=k.p.colModel,m=$.jgrid.getRegional(this,"edit.msg");if(void 0===c)if("string"==typeof b){for(f=0,i=l.length;i>f;f++)if(l[f].name===b){e=l[f].editrules,b=f,null!=l[f].formoptions&&(g=l[f].formoptions.label);break}}else b>=0&&(e=l[b].editrules);else e=c,g=void 0===d?"_":d;if(e){if(g||(g=null!=k.p.colNames?k.p.colNames[b]:l[b].label),e.required===!0&&$.jgrid.isEmpty(a))return[!1,g+": "+m.required,""];var n=e.required===!1?!1:!0;if(e.number===!0&&(n!==!1||!$.jgrid.isEmpty(a))&&isNaN(a))return[!1,g+": "+m.number,""];if(void 0!==e.minValue&&!isNaN(e.minValue)&&parseFloat(a)<parseFloat(e.minValue))return[!1,g+": "+m.minValue+" "+e.minValue,""];if(void 0!==e.maxValue&&!isNaN(e.maxValue)&&parseFloat(a)>parseFloat(e.maxValue))return[!1,g+": "+m.maxValue+" "+e.maxValue,""];var o;if(e.email===!0&&!(n===!1&&$.jgrid.isEmpty(a)||(o=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,o.test(a))))return[!1,g+": "+m.email,""];if(e.integer===!0&&(n!==!1||!$.jgrid.isEmpty(a))){if(isNaN(a))return[!1,g+": "+m.integer,""];if(a%1!==0||-1!==a.indexOf("."))return[!1,g+": "+m.integer,""]}if(e.date===!0&&!(n===!1&&$.jgrid.isEmpty(a)||(l[b].formatoptions&&l[b].formatoptions.newformat?(h=l[b].formatoptions.newformat,j=$.jgrid.getRegional(k,"formatter.date.masks"),j&&j.hasOwnProperty(h)&&(h=j[h])):h=l[b].datefmt||"Y-m-d",$.jgrid.checkDate(h,a))))return[!1,g+": "+m.date+" - "+h,""];if(e.time===!0&&!(n===!1&&$.jgrid.isEmpty(a)||$.jgrid.checkTime(a)))return[!1,g+": "+m.date+" - hh:mm (am/pm)",""];if(e.url===!0&&!(n===!1&&$.jgrid.isEmpty(a)||(o=/^(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i,o.test(a))))return[!1,g+": "+m.url,""];if(e.custom===!0&&(n!==!1||!$.jgrid.isEmpty(a))){if($.isFunction(e.custom_func)){var p=e.custom_func.call(k,a,g,b);return $.isArray(p)?p:[!1,m.customarray,""]}return[!1,m.customfcheck,""]}}return[!0,"",""]}}),$.fn.jqFilter=function(a){if("string"==typeof a){var b=$.fn.jqFilter[a];if(!b)throw"jqFilter - No such method: "+a;var c=$.makeArray(arguments).slice(1);return b.apply(this,c)}var d=$.extend(!0,{filter:null,columns:[],sortStrategy:null,onChange:null,afterRedraw:null,checkValues:null,error:!1,errmsg:"",errorcheck:!0,showQuery:!0,sopt:null,ops:[],operands:null,numopts:["eq","ne","lt","le","gt","ge","nu","nn","in","ni"],stropts:["eq","ne","bw","bn","ew","en","cn","nc","nu","nn","in","ni"],strarr:["text","string","blob"],groupOps:[{op:"AND",text:"AND"},{op:"OR",text:"OR"}],groupButton:!0,ruleButtons:!0,direction:"ltr"},$.jgrid.filter,a||{});return this.each(function(){if(!this.filter){this.p=d,(null===this.p.filter||void 0===this.p.filter)&&(this.p.filter={groupOp:this.p.groupOps[0].op,rules:[],groups:[]}),null!=this.p.sortStrategy&&$.isFunction(this.p.sortStrategy)&&this.p.columns.sort(this.p.sortStrategy);var a,b,c=this.p.columns.length,e=/msie/i.test(navigator.userAgent)&&!window.opera;if(this.p.initFilter=$.extend(!0,{},this.p.filter),c){for(a=0;c>a;a++)b=this.p.columns[a],b.stype?b.inputtype=b.stype:b.inputtype||(b.inputtype="text"),b.sorttype?b.searchtype=b.sorttype:b.searchtype||(b.searchtype="string"),void 0===b.hidden&&(b.hidden=!1),b.label||(b.label=b.name),b.index&&(b.name=b.index),b.hasOwnProperty("searchoptions")||(b.searchoptions={}),b.hasOwnProperty("searchrules")||(b.searchrules={});var f=function(){return $("#"+$.jgrid.jqID(d.id))[0]||null},g=f(),h=$.jgrid.styleUI[g.p.styleUI||"jQueryUI"].filter,i=$.jgrid.styleUI[g.p.styleUI||"jQueryUI"].common;this.p.showQuery&&$(this).append("<table class='queryresult "+h.table_widget+"' style='display:block;max-width:440px;border:0px none;' dir='"+this.p.direction+"'><tbody><tr><td class='query'></td></tr></tbody></table>");var j=function(a,b){var c=[!0,""],e=f();if($.isFunction(b.searchrules))c=b.searchrules.call(e,a,b);else if($.jgrid&&$.jgrid.checkValues)try{c=$.jgrid.checkValues.call(e,a,-1,b.searchrules,b.label)}catch(g){}c&&c.length&&c[0]===!1&&(d.error=!c[0],d.errmsg=c[1])};this.onchange=function(){return this.p.error=!1,this.p.errmsg="",$.isFunction(this.p.onChange)?this.p.onChange.call(this,this.p):!1},this.reDraw=function(){$("table.group:first",this).remove();var a=this.createTableForGroup(d.filter,null);$(this).append(a),$.isFunction(this.p.afterRedraw)&&this.p.afterRedraw.call(this,this.p)},this.createTableForGroup=function(a,b){var c,e=this,f=$("<table class='group "+h.table_widget+" ui-search-table' style='border:0px none;'><tbody></tbody></table>"),g="left";"rtl"===this.p.direction&&(g="right",f.attr("dir","rtl")),null===b&&f.append("<tr class='error' style='display:none;'><th colspan='5' class='"+i.error+"' align='"+g+"'></th></tr>");var j=$("<tr></tr>");f.append(j);var k=$("<th colspan='5' align='"+g+"'></th>");if(j.append(k),this.p.ruleButtons===!0){var l=$("<select class='opsel "+h.srSelect+"'></select>");k.append(l);var m,n="";for(c=0;c<d.groupOps.length;c++)m=a.groupOp===e.p.groupOps[c].op?" selected='selected'":"",n+="<option value='"+e.p.groupOps[c].op+"'"+m+">"+e.p.groupOps[c].text+"</option>";l.append(n).bind("change",function(){a.groupOp=$(l).val(),e.onchange()})}var o="<span></span>";if(this.p.groupButton&&(o=$("<input type='button' value='+ {}' title='Add subgroup' class='add-group "+i.button+"'/>"),o.bind("click",function(){return void 0===a.groups&&(a.groups=[]),a.groups.push({groupOp:d.groupOps[0].op,rules:[],groups:[]}),e.reDraw(),e.onchange(),!1})),k.append(o),this.p.ruleButtons===!0){var p,q=$("<input type='button' value='+' title='Add rule' class='add-rule ui-add "+i.button+"'/>");q.bind("click",function(){for(void 0===a.rules&&(a.rules=[]),c=0;c<e.p.columns.length;c++){var b=void 0===e.p.columns[c].search?!0:e.p.columns[c].search,d=e.p.columns[c].hidden===!0,f=e.p.columns[c].searchoptions.searchhidden===!0;if(f&&b||b&&!d){p=e.p.columns[c];break}}var g;return g=p.searchoptions.sopt?p.searchoptions.sopt:e.p.sopt?e.p.sopt:-1!==$.inArray(p.searchtype,e.p.strarr)?e.p.stropts:e.p.numopts,a.rules.push({field:p.name,op:g[0],data:""}),e.reDraw(),!1}),k.append(q)}if(null!==b){var r=$("<input type='button' value='-' title='Delete group' class='delete-group "+i.button+"'/>");k.append(r),r.bind("click",function(){for(c=0;c<b.groups.length;c++)if(b.groups[c]===a){b.groups.splice(c,1);break}return e.reDraw(),e.onchange(),!1})}if(void 0!==a.groups)for(c=0;c<a.groups.length;c++){var s=$("<tr></tr>");f.append(s);var t=$("<td class='first'></td>");s.append(t);var u=$("<td colspan='4'></td>");u.append(this.createTableForGroup(a.groups[c],a)),s.append(u)}if(void 0===a.groupOp&&(a.groupOp=e.p.groupOps[0].op),void 0!==a.rules)for(c=0;c<a.rules.length;c++)f.append(this.createTableRowForRule(a.rules[c],a));return f},this.createTableRowForRule=function(a,b){var c,g,j,k,l,m=this,n=f(),o=$("<tr></tr>"),p="";o.append("<td class='first'></td>");var q=$("<td class='columns'></td>");o.append(q);var r,s=$("<select class='"+h.srSelect+"'></select>"),t=[];q.append(s),s.bind("change",function(){for(a.field=$(s).val(),j=$(this).parents("tr:first"),$(".data",j).empty(),c=0;c<m.p.columns.length;c++)if(m.p.columns[c].name===a.field){k=m.p.columns[c];break}if(k){k.searchoptions.id=$.jgrid.randId(),k.searchoptions.name=a.field,k.searchoptions.oper="filter",e&&"text"===k.inputtype&&(k.searchoptions.size||(k.searchoptions.size=10));var b=$.jgrid.createEl.call(n,k.inputtype,k.searchoptions,"",!0,m.p.ajaxSelectOptions||{},!0);$(b).addClass("input-elm "+h.srInput),g=k.searchoptions.sopt?k.searchoptions.sopt:m.p.sopt?m.p.sopt:-1!==$.inArray(k.searchtype,m.p.strarr)?m.p.stropts:m.p.numopts;var d="",f=0;for(t=[],$.each(m.p.ops,function(){t.push(this.oper)}),c=0;c<g.length;c++)r=$.inArray(g[c],t),-1!==r&&(0===f&&(a.op=m.p.ops[r].oper),d+="<option value='"+m.p.ops[r].oper+"'>"+m.p.ops[r].text+"</option>",f++);if($(".selectopts",j).empty().append(d),$(".selectopts",j)[0].selectedIndex=0,$.jgrid.msie&&$.jgrid.msiever()<9){var i=parseInt($("select.selectopts",j)[0].offsetWidth,10)+1;$(".selectopts",j).width(i),$(".selectopts",j).css("width","auto")}$(".data",j).append(b),$.jgrid.bindEv.call(n,b,k.searchoptions),$(".input-elm",j).bind("change",function(b){var c=b.target;a.data="SPAN"===c.nodeName.toUpperCase()&&k.searchoptions&&$.isFunction(k.searchoptions.custom_value)?k.searchoptions.custom_value.call(n,$(c).children(".customelement:first"),"get"):c.value,m.onchange()}),setTimeout(function(){a.data=$(b).val(),m.onchange()},0)}});var u=0;for(c=0;c<m.p.columns.length;c++){var v=void 0===m.p.columns[c].search?!0:m.p.columns[c].search,w=m.p.columns[c].hidden===!0,x=m.p.columns[c].searchoptions.searchhidden===!0;(x&&v||v&&!w)&&(l="",a.field===m.p.columns[c].name&&(l=" selected='selected'",u=c),p+="<option value='"+m.p.columns[c].name+"'"+l+">"+m.p.columns[c].label+"</option>")}s.append(p);var y=$("<td class='operators'></td>");o.append(y),k=d.columns[u],k.searchoptions.id=$.jgrid.randId(),e&&"text"===k.inputtype&&(k.searchoptions.size||(k.searchoptions.size=10)),k.searchoptions.name=a.field,k.searchoptions.oper="filter";var z=$.jgrid.createEl.call(n,k.inputtype,k.searchoptions,a.data,!0,m.p.ajaxSelectOptions||{},!0);("nu"===a.op||"nn"===a.op)&&($(z).attr("readonly","true"),$(z).attr("disabled","true"));var A=$("<select class='selectopts "+h.srSelect+"'></select>");for(y.append(A),A.bind("change",function(){a.op=$(A).val(),j=$(this).parents("tr:first");var b=$(".input-elm",j)[0];"nu"===a.op||"nn"===a.op?(a.data="","SELECT"!==b.tagName.toUpperCase()&&(b.value=""),b.setAttribute("readonly","true"),b.setAttribute("disabled","true")):("SELECT"===b.tagName.toUpperCase()&&(a.data=b.value),b.removeAttribute("readonly"),b.removeAttribute("disabled")),m.onchange()}),g=k.searchoptions.sopt?k.searchoptions.sopt:m.p.sopt?m.p.sopt:-1!==$.inArray(k.searchtype,m.p.strarr)?m.p.stropts:m.p.numopts,p="",$.each(m.p.ops,function(){t.push(this.oper)}),c=0;c<g.length;c++)r=$.inArray(g[c],t),-1!==r&&(l=a.op===m.p.ops[r].oper?" selected='selected'":"",p+="<option value='"+m.p.ops[r].oper+"'"+l+">"+m.p.ops[r].text+"</option>");A.append(p);var B=$("<td class='data'></td>");o.append(B),B.append(z),$.jgrid.bindEv.call(n,z,k.searchoptions),$(z).addClass("input-elm "+h.srInput).bind("change",function(){a.data="custom"===k.inputtype?k.searchoptions.custom_value.call(n,$(this).children(".customelement:first"),"get"):$(this).val(),m.onchange()});var C=$("<td></td>");if(o.append(C),this.p.ruleButtons===!0){var D=$("<input type='button' value='-' title='Delete rule' class='delete-rule ui-del "+i.button+"'/>");C.append(D),D.bind("click",function(){for(c=0;c<b.rules.length;c++)if(b.rules[c]===a){b.rules.splice(c,1);break}return m.reDraw(),m.onchange(),!1})}return o},this.getStringForGroup=function(a){var b,c="(";if(void 0!==a.groups)for(b=0;b<a.groups.length;b++){c.length>1&&(c+=" "+a.groupOp+" ");try{c+=this.getStringForGroup(a.groups[b])}catch(d){alert(d)}}if(void 0!==a.rules)try{for(b=0;b<a.rules.length;b++)c.length>1&&(c+=" "+a.groupOp+" "),c+=this.getStringForRule(a.rules[b])}catch(e){alert(e)}return c+=")","()"===c?"":c},this.getStringForRule=function(a){var b,c,e,f,g="",h="",i=["int","integer","float","number","currency"];for(b=0;b<this.p.ops.length;b++)if(this.p.ops[b].oper===a.op){g=this.p.operands.hasOwnProperty(a.op)?this.p.operands[a.op]:"",h=this.p.ops[b].oper;break}for(b=0;b<this.p.columns.length;b++)if(this.p.columns[b].name===a.field){c=this.p.columns[b];break}return void 0===c?"":(f=a.data,("bw"===h||"bn"===h)&&(f+="%"),("ew"===h||"en"===h)&&(f="%"+f),("cn"===h||"nc"===h)&&(f="%"+f+"%"),("in"===h||"ni"===h)&&(f=" ("+f+")"),d.errorcheck&&j(a.data,c),e=-1!==$.inArray(c.searchtype,i)||"nn"===h||"nu"===h?a.field+" "+g+" "+f:a.field+" "+g+' "'+f+'"')},this.resetFilter=function(){this.p.filter=$.extend(!0,{},this.p.initFilter),this.reDraw(),this.onchange()},this.hideError=function(){$("th."+i.error,this).html(""),$("tr.error",this).hide()},this.showError=function(){$("th."+i.error,this).html(this.p.errmsg),$("tr.error",this).show()},this.toUserFriendlyString=function(){return this.getStringForGroup(d.filter)},this.toString=function(){function a(a){if(c.p.errorcheck){var b,d;for(b=0;b<c.p.columns.length;b++)if(c.p.columns[b].name===a.field){d=c.p.columns[b];break}d&&j(a.data,d)}return a.op+"(item."+a.field+",'"+a.data+"')"}function b(c){var d,e="(";if(void 0!==c.groups)for(d=0;d<c.groups.length;d++)e.length>1&&(e+="OR"===c.groupOp?" || ":" && "),e+=b(c.groups[d]);if(void 0!==c.rules)for(d=0;d<c.rules.length;d++)e.length>1&&(e+="OR"===c.groupOp?" || ":" && "),e+=a(c.rules[d]);return e+=")","()"===e?"":e}var c=this;return b(this.p.filter)},this.reDraw(),this.p.showQuery&&this.onchange(),this.filter=!0}}})},$.extend($.fn.jqFilter,{toSQLString:function(){var a="";return this.each(function(){a=this.toUserFriendlyString()}),a},filterData:function(){var a;return this.each(function(){a=this.p.filter}),a},getParameter:function(a){return void 0!==a&&this.p.hasOwnProperty(a)?this.p[a]:this.p},resetFilter:function(){return this.each(function(){this.resetFilter()})},addFilter:function(a){"string"==typeof a&&(a=$.jgrid.parse(a)),this.each(function(){this.p.filter=a,this.reDraw(),this.onchange()})}}),$.jgrid.extend({filterToolbar:function(a){var b=$.jgrid.getRegional(this[0],"search");return a=$.extend({autosearch:!0,autosearchDelay:500,searchOnEnter:!0,beforeSearch:null,afterSearch:null,beforeClear:null,afterClear:null,searchurl:"",stringResult:!1,groupOp:"AND",defaultSearch:"bw",searchOperators:!1,resetIcon:"x",operands:{eq:"==",ne:"!",lt:"<",le:"<=",gt:">",ge:">=",bw:"^",bn:"!^","in":"=",ni:"!=",ew:"|",en:"!@",cn:"~",nc:"!~",nu:"#",nn:"!#"}},b,a||{}),this.each(function(){var c=this;if(!c.p.filterToolbar){$(c).data("filterToolbar")||$(c).data("filterToolbar",a),c.p.force_regional&&(a=$.extend(a,b));var d,e=$.jgrid.styleUI[c.p.styleUI||"jQueryUI"].filter,f=$.jgrid.styleUI[c.p.styleUI||"jQueryUI"].common,g=$.jgrid.styleUI[c.p.styleUI||"jQueryUI"].base,h=function(){var b,d,e,f={},g=0,h={};$.each(c.p.colModel,function(){var i=$("#gs_"+c.p.idPrefix+$.jgrid.jqID(this.name),this.frozen===!0&&c.p.frozenColumns===!0?c.grid.fhDiv:c.grid.hDiv);if(d=this.index||this.name,e=a.searchOperators?i.parent().prev().children("a").attr("soper")||a.defaultSearch:this.searchoptions&&this.searchoptions.sopt?this.searchoptions.sopt[0]:"select"===this.stype?"eq":a.defaultSearch,b="custom"===this.stype&&$.isFunction(this.searchoptions.custom_value)&&i.length>0&&"SPAN"===i[0].nodeName.toUpperCase()?this.searchoptions.custom_value.call(c,i.children(".customelement:first"),"get"):i.val(),b||"nu"===e||"nn"===e)f[d]=b,h[d]=e,g++;else try{delete c.p.postData[d]}catch(j){}});var i=g>0?!0:!1;if(a.stringResult===!0||"local"===c.p.datatype||a.searchOperators===!0){var j='{"groupOp":"'+a.groupOp+'","rules":[',k=0;$.each(f,function(a,b){k>0&&(j+=","),j+='{"field":"'+a+'",',j+='"op":"'+h[a]+'",',b+="",j+='"data":"'+b.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',k++}),j+="]}",$.extend(c.p.postData,{filters:j}),$.each(["searchField","searchString","searchOper"],function(a,b){c.p.postData.hasOwnProperty(b)&&delete c.p.postData[b]})}else $.extend(c.p.postData,f);var l;c.p.searchurl&&(l=c.p.url,$(c).jqGrid("setGridParam",{url:c.p.searchurl}));var m="stop"===$(c).triggerHandler("jqGridToolbarBeforeSearch")?!0:!1;!m&&$.isFunction(a.beforeSearch)&&(m=a.beforeSearch.call(c)),m||$(c).jqGrid("setGridParam",{search:i}).trigger("reloadGrid",[{page:1}]),l&&$(c).jqGrid("setGridParam",{url:l}),$(c).triggerHandler("jqGridToolbarAfterSearch"),$.isFunction(a.afterSearch)&&a.afterSearch.call(c)},i=function(b){var d,e={},f=0;b="boolean"!=typeof b?!0:b,$.each(c.p.colModel,function(){var a,b=$("#gs_"+c.p.idPrefix+$.jgrid.jqID(this.name),this.frozen===!0&&c.p.frozenColumns===!0?c.grid.fhDiv:c.grid.hDiv);switch(this.searchoptions&&void 0!==this.searchoptions.defaultValue&&(a=this.searchoptions.defaultValue),d=this.index||this.name,this.stype){case"select":if(b.find("option").each(function(b){return 0===b&&(this.selected=!0),$(this).val()===a?(this.selected=!0,!1):void 0}),void 0!==a)e[d]=a,f++;else try{delete c.p.postData[d]}catch(g){}break;case"text":if(b.val(a||""),void 0!==a)e[d]=a,f++;else try{delete c.p.postData[d]}catch(h){}break;case"custom":$.isFunction(this.searchoptions.custom_value)&&b.length>0&&"SPAN"===b[0].nodeName.toUpperCase()&&this.searchoptions.custom_value.call(c,b.children(".customelement:first"),"set",a||"")}});var g=f>0?!0:!1;if(c.p.resetsearch=!0,a.stringResult===!0||"local"===c.p.datatype){var h='{"groupOp":"'+a.groupOp+'","rules":[',i=0;$.each(e,function(a,b){i>0&&(h+=","),h+='{"field":"'+a+'",',h+='"op":"eq",',b+="",h+='"data":"'+b.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',i++}),h+="]}",$.extend(c.p.postData,{filters:h}),$.each(["searchField","searchString","searchOper"],function(a,b){c.p.postData.hasOwnProperty(b)&&delete c.p.postData[b]})}else $.extend(c.p.postData,e);var j;c.p.searchurl&&(j=c.p.url,$(c).jqGrid("setGridParam",{url:c.p.searchurl}));var k="stop"===$(c).triggerHandler("jqGridToolbarBeforeClear")?!0:!1;!k&&$.isFunction(a.beforeClear)&&(k=a.beforeClear.call(c)),k||b&&$(c).jqGrid("setGridParam",{search:g}).trigger("reloadGrid",[{page:1}]),j&&$(c).jqGrid("setGridParam",{url:j}),$(c).triggerHandler("jqGridToolbarAfterClear"),$.isFunction(a.afterClear)&&a.afterClear()},j=function(){var a=$("tr.ui-search-toolbar",c.grid.hDiv),b=c.p.frozenColumns===!0?$("tr.ui-search-toolbar",c.grid.fhDiv):!1;"none"===a.css("display")?(a.show(),b&&b.show()):(a.hide(),b&&b.hide())},k=function(b,d,g){$("#sopt_menu").remove(),d=parseInt(d,10),g=parseInt(g,10)+18;for(var i,j,k=$(".ui-jqgrid-view").css("font-size")||"11px",l='<ul id="sopt_menu" class="ui-search-menu modal-content" role="menu" tabindex="0" style="font-size:'+k+";left:"+d+"px;top:"+g+'px;">',m=$(b).attr("soper"),n=[],o=0,p=$(b).attr("colname"),q=c.p.colModel.length;q>o&&c.p.colModel[o].name!==p;)o++;var r=c.p.colModel[o],s=$.extend({},r.searchoptions);for(s.sopt||(s.sopt=[],s.sopt[0]="select"===r.stype?"eq":a.defaultSearch),$.each(a.odata,function(){n.push(this.oper)}),o=0;o<s.sopt.length;o++)j=$.inArray(s.sopt[o],n),-1!==j&&(i=m===a.odata[j].oper?f.highlight:"",l+='<li class="ui-menu-item '+i+'" role="presentation"><a class="'+f.cornerall+' g-menu-item" tabindex="0" role="menuitem" value="'+a.odata[j].oper+'" oper="'+a.operands[a.odata[j].oper]+'"><table class="ui-common-table"><tr><td width="25px">'+a.operands[a.odata[j].oper]+"</td><td>"+a.odata[j].text+"</td></tr></table></a></li>");l+="</ul>",$("body").append(l),$("#sopt_menu").addClass("ui-menu "+e.menu_widget),$("#sopt_menu > li > a").hover(function(){$(this).addClass(f.hover)},function(){$(this).removeClass(f.hover)}).click(function(){var d=$(this).attr("value"),e=$(this).attr("oper");if($(c).triggerHandler("jqGridToolbarSelectOper",[d,e,b]),$("#sopt_menu").hide(),$(b).text(e).attr("soper",d),a.autosearch===!0){var f=$(b).parent().next().children()[0];($(f).val()||"nu"===d||"nn"===d)&&h()}})},l=$("<tr class='ui-search-toolbar' role='row'></tr>");$.each(c.p.colModel,function(b){var f,i,j,k,m,n,o,p=this,q="",r="=",s=$("<th role='columnheader' class='"+g.headerBox+" ui-th-"+c.p.direction+"' id='gsh_"+c.p.id+"_"+p.name+"' ></th>"),t=$("<div></div>"),u=$("<table class='ui-search-table' cellspacing='0'><tr><td class='ui-search-oper' headers=''></td><td class='ui-search-input' headers=''></td><td class='ui-search-clear' headers=''></td></tr></table>");if(this.hidden===!0&&$(s).css("display","none"),this.search=this.search===!1?!1:!0,void 0===this.stype&&(this.stype="text"),f=$.extend({},this.searchoptions||{},{name:p.index||p.name,id:"gs_"+c.p.idPrefix+p.name,oper:"search"}),this.search){if(a.searchOperators){for(i=f.sopt?f.sopt[0]:"select"===p.stype?"eq":a.defaultSearch,j=0;j<a.odata.length;j++)if(a.odata[j].oper===i){r=a.operands[i]||"";break}k=null!=f.searchtitle?f.searchtitle:a.operandTitle,q="<a title='"+k+"' style='padding-right: 0.5em;' soper='"+i+"' class='soptclass' colname='"+this.name+"'>"+r+"</a>"}switch($("td:eq(0)",u).attr("colindex",b).append(q),void 0===f.clearSearch&&(f.clearSearch=!0),f.clearSearch?(m=a.resetTitle||"Clear Search Value",$("td:eq(2)",u).append("<a title='"+m+"' style='padding-right: 0.3em;padding-left: 0.3em;' class='clearsearchclass'>"+a.resetIcon+"</a>")):$("td:eq(2)",u).hide(),this.surl&&(f.dataUrl=this.surl),n="",f.defaultValue&&(n=$.isFunction(f.defaultValue)?f.defaultValue.call(c):f.defaultValue),o=$.jgrid.createEl.call(c,this.stype,f,n,!1,$.extend({},$.jgrid.ajaxOptions,c.p.ajaxSelectOptions||{})),$(o).css({width:"100%"}).addClass(e.srInput),$("td:eq(1)",u).append(o),$(t).append(u),this.stype){case"select":a.autosearch===!0&&(f.dataEvents=[{type:"change",fn:function(){return h(),!1}}]);break;case"text":a.autosearch===!0&&(f.dataEvents=a.searchOnEnter?[{type:"keypress",fn:function(a){var b=a.charCode||a.keyCode||0;return 13===b?(h(),!1):this}}]:[{type:"keydown",fn:function(b){var c=b.which;switch(c){case 13:return!1;case 9:case 16:case 37:case 38:case 39:case 40:case 27:break;default:d&&clearTimeout(d),d=setTimeout(function(){h()},a.autosearchDelay)}}}])}$.jgrid.bindEv.call(c,o,f)}$(s).append(t),$(l).append(s),a.searchOperators||$("td:eq(0)",u).hide()}),$("table thead",c.grid.hDiv).append(l),a.searchOperators&&($(".soptclass",l).click(function(a){var b=$(this).offset(),c=b.left,d=b.top;k(this,c,d),a.stopPropagation()}),$("body").on("click",function(a){"soptclass"!==a.target.className&&$("#sopt_menu").hide()})),$(".clearsearchclass",l).click(function(){var b=$(this).parents("tr:first"),d=parseInt($("td.ui-search-oper",b).attr("colindex"),10),e=$.extend({},c.p.colModel[d].searchoptions||{}),f=e.defaultValue?e.defaultValue:"";"select"===c.p.colModel[d].stype?f?$("td.ui-search-input select",b).val(f):$("td.ui-search-input select",b)[0].selectedIndex=0:$("td.ui-search-input input",b).val(f),a.autosearch===!0&&h()}),this.p.filterToolbar=!0,this.triggerToolbar=h,this.clearToolbar=i,this.toggleToolbar=j}})},destroyFilterToolbar:function(){return this.each(function(){this.p.filterToolbar&&(this.triggerToolbar=null,this.clearToolbar=null,this.toggleToolbar=null,this.p.filterToolbar=!1,$(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove())})},searchGrid:function(a){var b=$.jgrid.getRegional(this[0],"search");return a=$.extend(!0,{recreateFilter:!1,drag:!0,sField:"searchField",sValue:"searchString",sOper:"searchOper",sFilter:"filters",loadDefaults:!0,beforeShowSearch:null,afterShowSearch:null,onInitializeSearch:null,afterRedraw:null,afterChange:null,sortStrategy:null,closeAfterSearch:!1,closeAfterReset:!1,closeOnEscape:!1,searchOnEnter:!1,multipleSearch:!1,multipleGroup:!1,top:0,left:0,jqModal:!0,modal:!1,resize:!0,width:450,height:"auto",dataheight:"auto",showQuery:!1,errorcheck:!0,sopt:null,stringResult:void 0,onClose:null,onSearch:null,onReset:null,toTop:!0,overlay:30,columns:[],tmplNames:null,tmplFilters:null,tmplLabel:" Template: ",showOnLoad:!1,layer:null,operands:{eq:"=",ne:"<>",lt:"<",le:"<=",gt:">",ge:">=",bw:"LIKE",bn:"NOT LIKE","in":"IN",ni:"NOT IN",ew:"LIKE",en:"NOT LIKE",cn:"LIKE",nc:"NOT LIKE",nu:"IS NULL",nn:"ISNOT NULL"}},b,a||{}),this.each(function(){function b(b){f=$(c).triggerHandler("jqGridFilterBeforeShow",[b]),void 0===f&&(f=!0),f&&$.isFunction(a.beforeShowSearch)&&(f=a.beforeShowSearch.call(c,b)),f&&($.jgrid.viewModal("#"+$.jgrid.jqID(h.themodal),{gbox:"#gbox_"+$.jgrid.jqID(e),jqm:a.jqModal,modal:a.modal,overlay:a.overlay,toTop:a.toTop}),$(c).triggerHandler("jqGridFilterAfterShow",[b]),$.isFunction(a.afterShowSearch)&&a.afterShowSearch.call(c,b))}var c=this;if(c.grid){var d,e="fbox_"+c.p.id,f=!0,g=!0,h={themodal:"searchmod"+e,modalhead:"searchhd"+e,modalcontent:"searchcnt"+e,scrollelm:e},i=c.p.postData[a.sFilter],j=$.jgrid.styleUI[c.p.styleUI||"jQueryUI"].filter,k=$.jgrid.styleUI[c.p.styleUI||"jQueryUI"].common;if(a.styleUI=c.p.styleUI,"string"==typeof i&&(i=$.jgrid.parse(i)),a.recreateFilter===!0&&$("#"+$.jgrid.jqID(h.themodal)).remove(),void 0!==$("#"+$.jgrid.jqID(h.themodal))[0])b($("#fbox_"+$.jgrid.jqID(c.p.id)));else{var l=$("<div><div id='"+e+"' class='searchFilter' style='overflow:auto'></div></div>").insertBefore("#gview_"+$.jgrid.jqID(c.p.id)),m="left",n="";"rtl"===c.p.direction&&(m="right",n=" style='text-align:left'",l.attr("dir","rtl"));var o,p,q=$.extend([],c.p.colModel),r="<a id='"+e+"_search' class='fm-button "+k.button+" fm-button-icon-right ui-search'><span class='"+k.icon_base+" "+j.icon_search+"'></span>"+a.Find+"</a>",s="<a id='"+e+"_reset' class='fm-button "+k.button+" fm-button-icon-left ui-reset'><span class='"+k.icon_base+" "+j.icon_reset+"'></span>"+a.Reset+"</a>",t="",u="",v=!1,w=-1;if(a.showQuery&&(t="<a id='"+e+"_query' class='fm-button "+k.button+" fm-button-icon-left'><span class='"+k.icon_base+" "+j.icon_query+"'></span>Query</a>"),a.columns.length?(q=a.columns,w=0,o=q[0].index||q[0].name):$.each(q,function(a,b){if(b.label||(b.label=c.p.colNames[a]),!v){var d=void 0===b.search?!0:b.search,e=b.hidden===!0,f=b.searchoptions&&b.searchoptions.searchhidden===!0;(f&&d||d&&!e)&&(v=!0,o=b.index||b.name,w=a)}}),!i&&o||a.multipleSearch===!1){var x="eq";w>=0&&q[w].searchoptions&&q[w].searchoptions.sopt?x=q[w].searchoptions.sopt[0]:a.sopt&&a.sopt.length&&(x=a.sopt[0]),i={groupOp:"AND",rules:[{field:o,op:x,data:""}]}}v=!1,a.tmplNames&&a.tmplNames.length&&(v=!0,u="<tr><td class='ui-search-label'>"+a.tmplLabel+"</td>",u+="<td><select class='ui-template "+j.srSelect+"'>",u+="<option value='default'>Default</option>",$.each(a.tmplNames,function(a,b){u+="<option value='"+a+"'>"+b+"</option>"}),u+="</select></td></tr>"),p="<table class='EditTable' style='border:0px none;margin-top:5px' id='"+e+"_2'><tbody><tr><td colspan='2'><hr class='"+k.content+"' style='margin:1px'/></td></tr>"+u+"<tr><td class='EditButton' style='text-align:"+m+"'>"+s+"</td><td class='EditButton' "+n+">"+t+r+"</td></tr></tbody></table>",e=$.jgrid.jqID(e),$("#"+e).jqFilter({columns:q,sortStrategy:a.sortStrategy,filter:a.loadDefaults?i:null,showQuery:a.showQuery,errorcheck:a.errorcheck,sopt:a.sopt,groupButton:a.multipleGroup,ruleButtons:a.multipleSearch,afterRedraw:a.afterRedraw,ops:a.odata,operands:a.operands,ajaxSelectOptions:c.p.ajaxSelectOptions,groupOps:a.groupOps,onChange:function(){this.p.showQuery&&$(".query",this).html(this.toUserFriendlyString()),$.isFunction(a.afterChange)&&a.afterChange.call(c,$("#"+e),a)},direction:c.p.direction,id:c.p.id}),l.append(p),v&&a.tmplFilters&&a.tmplFilters.length&&$(".ui-template",l).bind("change",function(){var b=$(this).val();return"default"===b?$("#"+e).jqFilter("addFilter",i):$("#"+e).jqFilter("addFilter",a.tmplFilters[parseInt(b,10)]),!1}),a.multipleGroup===!0&&(a.multipleSearch=!0),$(c).triggerHandler("jqGridFilterInitialize",[$("#"+e)]),$.isFunction(a.onInitializeSearch)&&a.onInitializeSearch.call(c,$("#"+e)),a.gbox="#gbox_"+e,a.layer?$.jgrid.createModal(h,l,a,"#gview_"+$.jgrid.jqID(c.p.id),$("#gbox_"+$.jgrid.jqID(c.p.id))[0],"#"+$.jgrid.jqID(a.layer),{position:"relative"}):$.jgrid.createModal(h,l,a,"#gview_"+$.jgrid.jqID(c.p.id),$("#gbox_"+$.jgrid.jqID(c.p.id))[0]),(a.searchOnEnter||a.closeOnEscape)&&$("#"+$.jgrid.jqID(h.themodal)).keydown(function(b){var c=$(b.target);return!a.searchOnEnter||13!==b.which||c.hasClass("add-group")||c.hasClass("add-rule")||c.hasClass("delete-group")||c.hasClass("delete-rule")||c.hasClass("fm-button")&&c.is("[id$=_query]")?a.closeOnEscape&&27===b.which?($("#"+$.jgrid.jqID(h.modalhead)).find(".ui-jqdialog-titlebar-close").click(),!1):void 0:($("#"+e+"_search").click(),!1)}),t&&$("#"+e+"_query").bind("click",function(){return $(".queryresult",l).toggle(),!1}),void 0===a.stringResult&&(a.stringResult=a.multipleSearch),$("#"+e+"_search").bind("click",function(){var b,f,i={};if(d=$("#"+e),d.find(".input-elm:focus").change(),f=d.jqFilter("filterData"),a.errorcheck&&(d[0].hideError(),a.showQuery||d.jqFilter("toSQLString"),d[0].p.error))return d[0].showError(),!1;if(a.stringResult){try{b=JSON.stringify(f)}catch(j){}"string"==typeof b&&(i[a.sFilter]=b,$.each([a.sField,a.sValue,a.sOper],function(){i[this]=""}))}else a.multipleSearch?(i[a.sFilter]=f,$.each([a.sField,a.sValue,a.sOper],function(){i[this]=""
})):(i[a.sField]=f.rules[0].field,i[a.sValue]=f.rules[0].data,i[a.sOper]=f.rules[0].op,i[a.sFilter]="");return c.p.search=!0,$.extend(c.p.postData,i),g=$(c).triggerHandler("jqGridFilterSearch"),void 0===g&&(g=!0),g&&$.isFunction(a.onSearch)&&(g=a.onSearch.call(c,c.p.filters)),g!==!1&&$(c).trigger("reloadGrid",[{page:1}]),a.closeAfterSearch&&$.jgrid.hideModal("#"+$.jgrid.jqID(h.themodal),{gb:"#gbox_"+$.jgrid.jqID(c.p.id),jqm:a.jqModal,onClose:a.onClose}),!1}),$("#"+e+"_reset").bind("click",function(){var b={},d=$("#"+e);return c.p.search=!1,c.p.resetsearch=!0,a.multipleSearch===!1?b[a.sField]=b[a.sValue]=b[a.sOper]="":b[a.sFilter]="",d[0].resetFilter(),v&&$(".ui-template",l).val("default"),$.extend(c.p.postData,b),g=$(c).triggerHandler("jqGridFilterReset"),void 0===g&&(g=!0),g&&$.isFunction(a.onReset)&&(g=a.onReset.call(c)),g!==!1&&$(c).trigger("reloadGrid",[{page:1}]),a.closeAfterReset&&$.jgrid.hideModal("#"+$.jgrid.jqID(h.themodal),{gb:"#gbox_"+$.jgrid.jqID(c.p.id),jqm:a.jqModal,onClose:a.onClose}),!1}),b($("#"+e)),$(".fm-button:not(."+k.disabled+")",l).hover(function(){$(this).addClass(k.hover)},function(){$(this).removeClass(k.hover)})}}})}});var rp_ge={};if($.jgrid.extend({editGridRow:function(a,b){var c=$.jgrid.getRegional(this[0],"edit"),d=this[0].p.styleUI,e=$.jgrid.styleUI[d].formedit,f=$.jgrid.styleUI[d].common;return b=$.extend(!0,{top:0,left:0,width:"500",datawidth:"auto",height:"auto",dataheight:"auto",modal:!1,overlay:30,drag:!0,resize:!0,url:null,mtype:"POST",clearAfterAdd:!0,closeAfterEdit:!1,reloadAfterSubmit:!0,onInitializeForm:null,beforeInitData:null,beforeShowForm:null,afterShowForm:null,beforeSubmit:null,afterSubmit:null,onclickSubmit:null,afterComplete:null,onclickPgButtons:null,afterclickPgButtons:null,editData:{},recreateForm:!1,jqModal:!0,closeOnEscape:!1,addedrow:"first",topinfo:"",bottominfo:"",saveicon:[],closeicon:[],savekey:[!1,13],navkeys:[!1,38,40],checkOnSubmit:!1,checkOnUpdate:!1,_savedData:{},processing:!1,onClose:null,ajaxEditOptions:{},serializeEditData:null,viewPagerButtons:!0,overlayClass:f.overlay,removemodal:!0,form:"edit",template:null,focusField:!0},c,b||{}),rp_ge[$(this)[0].p.id]=b,this.each(function(){function c(){return $(x).find(".FormElement").each(function(){var a=$(".customelement",this);if(a.length){var b=a[0],c=$(b).attr("name");$.each(p.p.colModel,function(){if(this.name===c&&this.editoptions&&$.isFunction(this.editoptions.custom_value)){try{if(r[c]=this.editoptions.custom_value.call(p,$("#"+$.jgrid.jqID(c),x),"get"),void 0===r[c])throw"e1"}catch(a){"e1"===a?$.jgrid.info_dialog(D.errcap,"function 'custom_value' "+rp_ge[$(this)[0]].p.msg.novalue,rp_ge[$(this)[0]].p.bClose,{styleUI:rp_ge[$(this)[0]].p.styleUI}):$.jgrid.info_dialog(D.errcap,a.message,rp_ge[$(this)[0]].p.bClose,{styleUI:rp_ge[$(this)[0]].p.styleUI})}return!0}})}else{switch($(this).get(0).type){case"checkbox":if($(this).is(":checked"))r[this.name]=$(this).val();else{var d=$(this).attr("offval");r[this.name]=d}break;case"select-one":r[this.name]=$("option:selected",this).val();break;case"select-multiple":r[this.name]=$(this).val(),r[this.name]=r[this.name]?r[this.name].join(","):"";var e=[];$("option:selected",this).each(function(a,b){e[a]=$(b).text()});break;case"password":case"text":case"textarea":case"button":r[this.name]=$(this).val()}p.p.autoencode&&(r[this.name]=$.jgrid.htmlEncode(r[this.name]))}}),!0}function d(a,b,c,d){var f,g,h,i,j,k,l,m=0,n=[],o=!1,q="<td class='CaptionTD'>&#160;</td><td class='DataTD'>&#160;</td>",r="";for(l=1;d>=l;l++)r+=q;if("_empty"!==a&&(o=$(b).jqGrid("getInd",a)),$(b.p.colModel).each(function(l){if(f=this.name,g=this.editrules&&this.editrules.edithidden===!0?!1:this.hidden===!0?!0:!1,j=g?"style='display:none'":"","cb"!==f&&"subgrid"!==f&&this.editable===!0&&"rn"!==f){if(o===!1)i="";else if(f===b.p.ExpandColumn&&b.p.treeGrid===!0)i=$("td[role='gridcell']:eq("+l+")",b.rows[o]).text();else{try{i=$.unformat.call(b,$("td[role='gridcell']:eq("+l+")",b.rows[o]),{rowId:a,colModel:this},l)}catch(q){i=this.edittype&&"textarea"===this.edittype?$("td[role='gridcell']:eq("+l+")",b.rows[o]).text():$("td[role='gridcell']:eq("+l+")",b.rows[o]).html()}(!i||"&nbsp;"===i||"&#160;"===i||1===i.length&&160===i.charCodeAt(0))&&(i="")}var s=$.extend({},this.editoptions||{},{id:f,name:f,rowId:a,oper:"edit"}),t=$.extend({},{elmprefix:"",elmsuffix:"",rowabove:!1,rowcontent:""},this.formoptions||{}),u=parseInt(t.rowpos,10)||m+1,w=parseInt(2*(parseInt(t.colpos,10)||1),10);if("_empty"===a&&s.defaultValue&&(i=$.isFunction(s.defaultValue)?s.defaultValue.call(p):s.defaultValue),this.edittype||(this.edittype="text"),p.p.autoencode&&(i=$.jgrid.htmlDecode(i)),k=$.jgrid.createEl.call(p,this.edittype,s,i,!1,$.extend({},$.jgrid.ajaxOptions,b.p.ajaxSelectOptions||{})),"select"===this.edittype&&(i=$(k).val(),"select-multiple"===$(k).get(0).type&&i&&(i=i.join(","))),"checkbox"===this.edittype&&(i=$(k).is(":checked")?$(k).val():$(k).attr("offval")),(rp_ge[p.p.id].checkOnSubmit||rp_ge[p.p.id].checkOnUpdate)&&(rp_ge[p.p.id]._savedData[f]=i),$(k).addClass("FormElement"),$.inArray(this.edittype,["text","textarea","password","select"])>-1&&$(k).addClass(e.inputClass),C)$(I).find("#"+f).replaceWith(k);else{if(h=$(c).find("tr[rowpos="+u+"]"),t.rowabove){var x=$("<tr><td class='contentinfo' colspan='"+2*d+"'>"+t.rowcontent+"</td></tr>");$(c).append(x),x[0].rp=u}0===h.length&&(h=$("<tr "+j+" rowpos='"+u+"'></tr>").addClass("FormData").attr("id","tr_"+f),$(h).append(r),$(c).append(h),h[0].rp=u),$("td:eq("+(w-2)+")",h[0]).html("<label for='"+f+"'>"+(void 0===t.label?b.p.colNames[l]:t.label)+"</label>"),$("td:eq("+(w-1)+")",h[0]).append(t.elmprefix).append(k).append(t.elmsuffix)}"custom"===this.edittype&&$.isFunction(s.custom_value)&&s.custom_value.call(p,$("#"+f,v),"set",i),$.jgrid.bindEv.call(p,k,s),n[m]=l,m++}}),m>0){var s;C?(s="<div class='FormData' style='display:none'><input class='FormElement' id='id_g' type='text' name='"+b.p.id+"_id' value='"+a+"'/>",$(I).append(s)):(s=$("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='"+(2*d-1)+"' class='DataTD'><input class='FormElement' id='id_g' type='text' name='"+b.p.id+"_id' value='"+a+"'/></td></tr>"),s[0].rp=m+999,$(c).append(s)),(rp_ge[p.p.id].checkOnSubmit||rp_ge[p.p.id].checkOnUpdate)&&(rp_ge[p.p.id]._savedData[b.p.id+"_id"]=a)}return n}function g(a,b,c){var d,e,f,g,h,i,j=0;(rp_ge[p.p.id].checkOnSubmit||rp_ge[p.p.id].checkOnUpdate)&&(rp_ge[p.p.id]._savedData={},rp_ge[p.p.id]._savedData[b.p.id+"_id"]=a);var k=b.p.colModel;if("_empty"===a)return $(k).each(function(){d=this.name,g=$.extend({},this.editoptions||{}),f=$("#"+$.jgrid.jqID(d),c),f&&f.length&&null!==f[0]&&(h="","custom"===this.edittype&&$.isFunction(g.custom_value)?g.custom_value.call(p,$("#"+d,c),"set",h):g.defaultValue?(h=$.isFunction(g.defaultValue)?g.defaultValue.call(p):g.defaultValue,"checkbox"===f[0].type?(i=h.toLowerCase(),i.search(/(false|f|0|no|n|off|undefined)/i)<0&&""!==i?(f[0].checked=!0,f[0].defaultChecked=!0,f[0].value=h):(f[0].checked=!1,f[0].defaultChecked=!1)):f.val(h)):"checkbox"===f[0].type?(f[0].checked=!1,f[0].defaultChecked=!1,h=$(f).attr("offval")):f[0].type&&"select"===f[0].type.substr(0,6)?f[0].selectedIndex=0:f.val(h),(rp_ge[p.p.id].checkOnSubmit===!0||rp_ge[p.p.id].checkOnUpdate)&&(rp_ge[p.p.id]._savedData[d]=h))}),void $("#id_g",c).val(a);var l=$(b).jqGrid("getInd",a,!0);l&&($('td[role="gridcell"]',l).each(function(f){if(d=k[f].name,"cb"!==d&&"subgrid"!==d&&"rn"!==d&&k[f].editable===!0){if(d===b.p.ExpandColumn&&b.p.treeGrid===!0)e=$(this).text();else try{e=$.unformat.call(b,$(this),{rowId:a,colModel:k[f]},f)}catch(g){e="textarea"===k[f].edittype?$(this).text():$(this).html()}switch(p.p.autoencode&&(e=$.jgrid.htmlDecode(e)),(rp_ge[p.p.id].checkOnSubmit===!0||rp_ge[p.p.id].checkOnUpdate)&&(rp_ge[p.p.id]._savedData[d]=e),d=$.jgrid.jqID(d),k[f].edittype){case"password":case"text":case"button":case"image":case"textarea":("&nbsp;"===e||"&#160;"===e||1===e.length&&160===e.charCodeAt(0))&&(e=""),$("#"+d,c).val(e);break;case"select":var h=e.split(",");h=$.map(h,function(a){return $.trim(a)}),$("#"+d+" option",c).each(function(){this.selected=k[f].editoptions.multiple||$.trim(e)!==$.trim($(this).text())&&h[0]!==$.trim($(this).text())&&h[0]!==$.trim($(this).val())?k[f].editoptions.multiple&&($.inArray($.trim($(this).text()),h)>-1||$.inArray($.trim($(this).val()),h)>-1)?!0:!1:!0}),(rp_ge[p.p.id].checkOnSubmit===!0||rp_ge[p.p.id].checkOnUpdate)&&(e=$("#"+d,c).val(),k[f].editoptions.multiple&&(e=e.join(",")),rp_ge[p.p.id]._savedData[d]=e);break;case"checkbox":if(e=String(e),k[f].editoptions&&k[f].editoptions.value){var i=k[f].editoptions.value.split(":");$("#"+d,c)[p.p.useProp?"prop":"attr"](i[0]===e?{checked:!0,defaultChecked:!0}:{checked:!1,defaultChecked:!1})}else e=e.toLowerCase(),e.search(/(false|f|0|no|n|off|undefined)/i)<0&&""!==e?($("#"+d,c)[p.p.useProp?"prop":"attr"]("checked",!0),$("#"+d,c)[p.p.useProp?"prop":"attr"]("defaultChecked",!0)):($("#"+d,c)[p.p.useProp?"prop":"attr"]("checked",!1),$("#"+d,c)[p.p.useProp?"prop":"attr"]("defaultChecked",!1));(rp_ge[p.p.id].checkOnSubmit===!0||rp_ge[p.p.id].checkOnUpdate)&&(e=$("#"+d,c).is(":checked")?$("#"+d,c).val():$("#"+d,c).attr("offval"));break;case"custom":try{if(!k[f].editoptions||!$.isFunction(k[f].editoptions.custom_value))throw"e1";k[f].editoptions.custom_value.call(p,$("#"+d,c),"set",e)}catch(l){"e1"===l?$.jgrid.info_dialog(D.errcap,"function 'custom_value' "+rp_ge[$(this)[0]].p.msg.nodefined,$.rp_ge[$(this)[0]].p.bClose,{styleUI:rp_ge[$(this)[0]].p.styleUI}):$.jgrid.info_dialog(D.errcap,l.message,$.rp_ge[$(this)[0]].p.bClose,{styleUI:rp_ge[$(this)[0]].p.styleUI})}}j++}}),j>0&&$("#id_g",x).val(a))}function h(){$.each(p.p.colModel,function(a,b){b.editoptions&&b.editoptions.NullIfEmpty===!0&&r.hasOwnProperty(b.name)&&""===r[b.name]&&(r[b.name]="null")})}function i(){var a,c,d,e,i,j,k,l=[!0,"",""],m={},n=p.p.prmNames,o=$(p).triggerHandler("jqGridAddEditBeforeCheckValues",[$(v),t]);o&&"object"==typeof o&&(r=o),$.isFunction(rp_ge[p.p.id].beforeCheckValues)&&(o=rp_ge[p.p.id].beforeCheckValues.call(p,r,$(v),t),o&&"object"==typeof o&&(r=o));for(e in r)if(r.hasOwnProperty(e)&&(l=$.jgrid.checkValues.call(p,r[e],e),l[0]===!1))break;if(h(),l[0]&&(m=$(p).triggerHandler("jqGridAddEditClickSubmit",[rp_ge[p.p.id],r,t]),void 0===m&&$.isFunction(rp_ge[p.p.id].onclickSubmit)&&(m=rp_ge[p.p.id].onclickSubmit.call(p,rp_ge[p.p.id],r,t)||{}),l=$(p).triggerHandler("jqGridAddEditBeforeSubmit",[r,$(v),t]),void 0===l&&(l=[!0,"",""]),l[0]&&$.isFunction(rp_ge[p.p.id].beforeSubmit)&&(l=rp_ge[p.p.id].beforeSubmit.call(p,r,$(v),t))),l[0]&&!rp_ge[p.p.id].processing){if(rp_ge[p.p.id].processing=!0,$("#sData",x+"_2").addClass(f.active),k=rp_ge[p.p.id].url||$(p).jqGrid("getGridParam","editurl"),d=n.oper,c="clientArray"===k?p.p.keyName:n.id,r[d]="_empty"===$.trim(r[p.p.id+"_id"])?n.addoper:n.editoper,r[d]!==n.addoper?r[c]=r[p.p.id+"_id"]:void 0===r[c]&&(r[c]=r[p.p.id+"_id"]),delete r[p.p.id+"_id"],r=$.extend(r,rp_ge[p.p.id].editData,m),p.p.treeGrid===!0){if(r[d]===n.addoper){i=$(p).jqGrid("getGridParam","selrow");var q="adjacency"===p.p.treeGridModel?p.p.treeReader.parent_id_field:"parent_id";r[q]=i}for(j in p.p.treeReader)if(p.p.treeReader.hasOwnProperty(j)){var s=p.p.treeReader[j];if(r.hasOwnProperty(s)){if(r[d]===n.addoper&&"parent_id_field"===j)continue;delete r[s]}}}r[c]=$.jgrid.stripPref(p.p.idPrefix,r[c]);var w=$.extend({url:k,type:rp_ge[p.p.id].mtype,data:$.isFunction(rp_ge[p.p.id].serializeEditData)?rp_ge[p.p.id].serializeEditData.call(p,r):r,complete:function(e,h){var j;if($("#sData",x+"_2").removeClass(f.active),r[c]=p.p.idPrefix+r[c],e.status>=300&&304!==e.status?(l[0]=!1,l[1]=$(p).triggerHandler("jqGridAddEditErrorTextFormat",[e,t]),l[1]=$.isFunction(rp_ge[p.p.id].errorTextFormat)?rp_ge[p.p.id].errorTextFormat.call(p,e,t):h+" Status: '"+e.statusText+"'. Error code: "+e.status):(l=$(p).triggerHandler("jqGridAddEditAfterSubmit",[e,r,t]),void 0===l&&(l=[!0,"",""]),l[0]&&$.isFunction(rp_ge[p.p.id].afterSubmit)&&(l=rp_ge[p.p.id].afterSubmit.call(p,e,r,t))),l[0]===!1)$(".FormError",v).html(l[1]),$(".FormError",v).show();else if(p.p.autoencode&&$.each(r,function(a,b){r[a]=$.jgrid.htmlDecode(b)}),r[d]===n.addoper?(l[2]||(l[2]=$.jgrid.randId()),null==r[c]||"_empty"===r[c]?r[c]=l[2]:l[2]=r[c],rp_ge[p.p.id].reloadAfterSubmit?$(p).trigger("reloadGrid"):p.p.treeGrid===!0?$(p).jqGrid("addChildNode",l[2],i,r):$(p).jqGrid("addRowData",l[2],r,b.addedrow),rp_ge[p.p.id].closeAfterAdd?(p.p.treeGrid!==!0&&$(p).jqGrid("setSelection",l[2]),$.jgrid.hideModal("#"+$.jgrid.jqID(y.themodal),{gb:"#gbox_"+$.jgrid.jqID(u),jqm:b.jqModal,onClose:rp_ge[p.p.id].onClose,removemodal:rp_ge[p.p.id].removemodal,formprop:!rp_ge[p.p.id].recreateForm,form:rp_ge[p.p.id].form})):rp_ge[p.p.id].clearAfterAdd&&g("_empty",p,v)):(rp_ge[p.p.id].reloadAfterSubmit?($(p).trigger("reloadGrid"),rp_ge[p.p.id].closeAfterEdit||setTimeout(function(){$(p).jqGrid("setSelection",r[c])},1e3)):p.p.treeGrid===!0?$(p).jqGrid("setTreeRow",r[c],r):$(p).jqGrid("setRowData",r[c],r),rp_ge[p.p.id].closeAfterEdit&&$.jgrid.hideModal("#"+$.jgrid.jqID(y.themodal),{gb:"#gbox_"+$.jgrid.jqID(u),jqm:b.jqModal,onClose:rp_ge[p.p.id].onClose,removemodal:rp_ge[p.p.id].removemodal,formprop:!rp_ge[p.p.id].recreateForm,form:rp_ge[p.p.id].form})),$.isFunction(rp_ge[p.p.id].afterComplete)&&(a=e,setTimeout(function(){$(p).triggerHandler("jqGridAddEditAfterComplete",[a,r,$(v),t]),rp_ge[p.p.id].afterComplete.call(p,a,r,$(v),t),a=null},500)),(rp_ge[p.p.id].checkOnSubmit||rp_ge[p.p.id].checkOnUpdate)&&($(v).data("disabled",!1),"_empty"!==rp_ge[p.p.id]._savedData[p.p.id+"_id"]))for(j in rp_ge[p.p.id]._savedData)rp_ge[p.p.id]._savedData.hasOwnProperty(j)&&r[j]&&(rp_ge[p.p.id]._savedData[j]=r[j]);rp_ge[p.p.id].processing=!1;try{$(":input:visible",v)[0].focus()}catch(k){}}},$.jgrid.ajaxOptions,rp_ge[p.p.id].ajaxEditOptions);if(w.url||rp_ge[p.p.id].useDataProxy||($.isFunction(p.p.dataProxy)?rp_ge[p.p.id].useDataProxy=!0:(l[0]=!1,l[1]+=" "+D.nourl)),l[0])if(rp_ge[p.p.id].useDataProxy){var z=p.p.dataProxy.call(p,w,"set_"+p.p.id);void 0===z&&(z=[!0,""]),z[0]===!1?(l[0]=!1,l[1]=z[1]||"Error deleting the selected row!"):(w.data.oper===n.addoper&&rp_ge[p.p.id].closeAfterAdd&&$.jgrid.hideModal("#"+$.jgrid.jqID(y.themodal),{gb:"#gbox_"+$.jgrid.jqID(u),jqm:b.jqModal,onClose:rp_ge[p.p.id].onClose,removemodal:rp_ge[p.p.id].removemodal,formprop:!rp_ge[p.p.id].recreateForm,form:rp_ge[p.p.id].form}),w.data.oper===n.editoper&&rp_ge[p.p.id].closeAfterEdit&&$.jgrid.hideModal("#"+$.jgrid.jqID(y.themodal),{gb:"#gbox_"+$.jgrid.jqID(u),jqm:b.jqModal,onClose:rp_ge[p.p.id].onClose,removemodal:rp_ge[p.p.id].removemodal,formprop:!rp_ge[p.p.id].recreateForm,form:rp_ge[p.p.id].form}))}else"clientArray"===w.url?(rp_ge[p.p.id].reloadAfterSubmit=!1,r=w.data,w.complete({status:200,statusText:""},"")):$.ajax(w)}l[0]===!1&&($(".FormError",v).html(l[1]),$(".FormError",v).show())}function j(a,b){var c,d=!1;for(c in a)if(a.hasOwnProperty(c)&&a[c]!=b[c]){d=!0;break}return d}function k(){var a=!0;return $(".FormError",v).hide(),rp_ge[p.p.id].checkOnUpdate&&(r={},c(),s=j(r,rp_ge[p.p.id]._savedData),s&&($(v).data("disabled",!0),$(".confirm","#"+y.themodal).show(),a=!1)),a}function l(){var b;if("_empty"!==a&&void 0!==p.p.savedRow&&p.p.savedRow.length>0&&$.isFunction($.fn.jqGrid.restoreRow))for(b=0;b<p.p.savedRow.length;b++)if(p.p.savedRow[b].id===a){$(p).jqGrid("restoreRow",a);break}}function m(a,b){var c=b[1].length-1;0===a?$("#pData",q).addClass(f.disabled):void 0!==b[1][a-1]&&$("#"+$.jgrid.jqID(b[1][a-1])).hasClass(f.disabled)?$("#pData",q).addClass(f.disabled):$("#pData",q).removeClass(f.disabled),a===c?$("#nData",q).addClass(f.disabled):void 0!==b[1][a+1]&&$("#"+$.jgrid.jqID(b[1][a+1])).hasClass(f.disabled)?$("#nData",q).addClass(f.disabled):$("#nData",q).removeClass(f.disabled)}function n(){var a=$(p).jqGrid("getDataIDs"),b=$("#id_g",x).val(),c=$.inArray(b,a);return[c,a]}function o(a){var b="";return"string"==typeof a&&(b=a.replace(/\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,function(a,b){return'<span id="'+b+'" ></span>'})),b}var p=this;if(p.grid&&a){var q,r,s,t,u=p.p.id,v="FrmGrid_"+u,w="TblGrid_"+u,x="#"+$.jgrid.jqID(w),y={themodal:"editmod"+u,modalhead:"edithd"+u,modalcontent:"editcnt"+u,scrollelm:v},z=!0,A=1,B=0,C="string"==typeof rp_ge[p.p.id].template&&rp_ge[p.p.id].template.length>0,D=$.jgrid.getRegional(this,"errors");rp_ge[p.p.id].styleUI=p.p.styleUI||"jQueryUI",$.jgrid.isMobile()&&(rp_ge[p.p.id].resize=!1),"new"===a?(a="_empty",t="add",b.caption=rp_ge[p.p.id].addCaption):(b.caption=rp_ge[p.p.id].editCaption,t="edit"),b.recreateForm||$(p).data("formProp")&&$.extend(rp_ge[$(this)[0].p.id],$(p).data("formProp"));var E=!0;b.checkOnUpdate&&b.jqModal&&!b.modal&&(E=!1);var F,G=isNaN(rp_ge[$(this)[0].p.id].dataheight)?rp_ge[$(this)[0].p.id].dataheight:rp_ge[$(this)[0].p.id].dataheight+"px",H=isNaN(rp_ge[$(this)[0].p.id].datawidth)?rp_ge[$(this)[0].p.id].datawidth:rp_ge[$(this)[0].p.id].datawidth+"px",I=$("<form name='FormPost' id='"+v+"' class='FormGrid' onSubmit='return false;' style='width:"+H+";height:"+G+";'></form>").data("disabled",!1);if(C?(F=o(rp_ge[$(this)[0].p.id].template),q=x):(F=$("<table id='"+w+"' class='EditTable ui-common-table'><tbody></tbody></table>"),q=x+"_2"),v="#"+$.jgrid.jqID(v),$(I).append("<div class='FormError "+f.error+"' style='display:none;'></div>"),$(I).append("<div class='tinfo topinfo'>"+rp_ge[p.p.id].topinfo+"</div>"),$(p.p.colModel).each(function(){var a=this.formoptions;A=Math.max(A,a?a.colpos||0:0),B=Math.max(B,a?a.rowpos||0:0)}),$(I).append(F),z=$(p).triggerHandler("jqGridAddEditBeforeInitData",[I,t]),void 0===z&&(z=!0),z&&$.isFunction(rp_ge[p.p.id].beforeInitData)&&(z=rp_ge[p.p.id].beforeInitData.call(p,I,t)),z!==!1){l(),d(a,p,F,A);var J="rtl"===p.p.direction?!0:!1,K=J?"nData":"pData",L=J?"pData":"nData",M="<a id='"+K+"' class='fm-button "+f.button+"'><span class='"+f.icon_base+" "+e.icon_prev+"'></span></a>",N="<a id='"+L+"' class='fm-button "+f.button+"'><span class='"+f.icon_base+" "+e.icon_next+"'></span></a>",O="<a id='sData' class='fm-button "+f.button+"'>"+b.bSubmit+"</a>",P="<a id='cData' class='fm-button "+f.button+"'>"+b.bCancel+"</a>",Q="<table style='height:auto' class='EditTable ui-common-table' id='"+w+"_2'><tbody><tr><td colspan='2'><hr class='"+f.content+"' style='margin:1px'/></td></tr><tr id='Act_Buttons'><td class='navButton'>"+(J?N+M:M+N)+"</td><td class='EditButton'>"+O+P+"</td></tr>";if(Q+="</tbody></table>",B>0){var R=[];$.each($(F)[0].rows,function(a,b){R[a]=b}),R.sort(function(a,b){return a.rp>b.rp?1:a.rp<b.rp?-1:0}),$.each(R,function(a,b){$("tbody",F).append(b)})}b.gbox="#gbox_"+$.jgrid.jqID(u);var S=!1;b.closeOnEscape===!0&&(b.closeOnEscape=!1,S=!0);var T;if(C?($(I).find("#pData").replaceWith(M),$(I).find("#nData").replaceWith(N),$(I).find("#sData").replaceWith(O),$(I).find("#cData").replaceWith(P),T=$("<div id="+w+"></div>").append(I)):T=$("<div></div>").append(I).append(Q),$(I).append("<div class='binfo topinfo bottominfo'>"+rp_ge[p.p.id].bottominfo+"</div>"),$.jgrid.createModal(y,T,rp_ge[$(this)[0].p.id],"#gview_"+$.jgrid.jqID(p.p.id),$("#gbox_"+$.jgrid.jqID(p.p.id))[0]),J&&($("#pData, #nData",x+"_2").css("float","right"),$(".EditButton",x+"_2").css("text-align","left")),rp_ge[p.p.id].topinfo&&$(".tinfo",v).show(),rp_ge[p.p.id].bottominfo&&$(".binfo",v).show(),T=null,Q=null,$("#"+$.jgrid.jqID(y.themodal)).keydown(function(a){var c=a.target;if($(v).data("disabled")===!0)return!1;if(rp_ge[p.p.id].savekey[0]===!0&&a.which===rp_ge[p.p.id].savekey[1]&&"TEXTAREA"!==c.tagName)return $("#sData",x+"_2").trigger("click"),!1;if(27===a.which)return k()?(S&&$.jgrid.hideModal("#"+$.jgrid.jqID(y.themodal),{gb:b.gbox,jqm:b.jqModal,onClose:rp_ge[p.p.id].onClose,removemodal:rp_ge[p.p.id].removemodal,formprop:!rp_ge[p.p.id].recreateForm,form:rp_ge[p.p.id].form}),!1):!1;if(rp_ge[p.p.id].navkeys[0]===!0){if("_empty"===$("#id_g",x).val())return!0;if(a.which===rp_ge[p.p.id].navkeys[1])return $("#pData",q).trigger("click"),!1;if(a.which===rp_ge[p.p.id].navkeys[2])return $("#nData",q).trigger("click"),!1}}),b.checkOnUpdate&&($("a.ui-jqdialog-titlebar-close span","#"+$.jgrid.jqID(y.themodal)).removeClass("jqmClose"),$("a.ui-jqdialog-titlebar-close","#"+$.jgrid.jqID(y.themodal)).unbind("click").click(function(){return k()?($.jgrid.hideModal("#"+$.jgrid.jqID(y.themodal),{gb:"#gbox_"+$.jgrid.jqID(u),jqm:b.jqModal,onClose:rp_ge[p.p.id].onClose,removemodal:rp_ge[p.p.id].removemodal,formprop:!rp_ge[p.p.id].recreateForm,form:rp_ge[p.p.id].form}),!1):!1})),b.saveicon=$.extend([!0,"left",e.icon_save],b.saveicon),b.closeicon=$.extend([!0,"left",e.icon_close],b.closeicon),b.saveicon[0]===!0&&$("#sData",q).addClass("right"===b.saveicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+f.icon_base+" "+b.saveicon[2]+"'></span>"),b.closeicon[0]===!0&&$("#cData",q).addClass("right"===b.closeicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+f.icon_base+" "+b.closeicon[2]+"'></span>"),rp_ge[p.p.id].checkOnSubmit||rp_ge[p.p.id].checkOnUpdate){O="<a id='sNew' class='fm-button "+f.button+"' style='z-index:1002'>"+b.bYes+"</a>",N="<a id='nNew' class='fm-button "+f.button+"' style='z-index:1002;margin-left:5px'>"+b.bNo+"</a>",P="<a id='cNew' class='fm-button "+f.button+"' style='z-index:1002;margin-left:5px;'>"+b.bExit+"</a>";var U=b.zIndex||999;U++,$("<div class='"+b.overlayClass+" jqgrid-overlay confirm' style='z-index:"+U+";display:none;'>&#160;</div><div class='confirm ui-jqconfirm "+f.content+"' style='z-index:"+(U+1)+"'>"+b.saveData+"<br/><br/>"+O+N+P+"</div>").insertAfter(v),$("#sNew","#"+$.jgrid.jqID(y.themodal)).click(function(){return i(),$(v).data("disabled",!1),$(".confirm","#"+$.jgrid.jqID(y.themodal)).hide(),!1}),$("#nNew","#"+$.jgrid.jqID(y.themodal)).click(function(){return $(".confirm","#"+$.jgrid.jqID(y.themodal)).hide(),$(v).data("disabled",!1),setTimeout(function(){$(":input:visible",v)[0].focus()},0),!1}),$("#cNew","#"+$.jgrid.jqID(y.themodal)).click(function(){return $(".confirm","#"+$.jgrid.jqID(y.themodal)).hide(),$(v).data("disabled",!1),$.jgrid.hideModal("#"+$.jgrid.jqID(y.themodal),{gb:"#gbox_"+$.jgrid.jqID(u),jqm:b.jqModal,onClose:rp_ge[p.p.id].onClose,removemodal:rp_ge[p.p.id].removemodal,formprop:!rp_ge[p.p.id].recreateForm,form:rp_ge[p.p.id].form}),!1})}$(p).triggerHandler("jqGridAddEditInitializeForm",[$(v),t]),$.isFunction(rp_ge[p.p.id].onInitializeForm)&&rp_ge[p.p.id].onInitializeForm.call(p,$(v),t),"_empty"!==a&&rp_ge[p.p.id].viewPagerButtons?$("#pData,#nData",q).show():$("#pData,#nData",q).hide(),$(p).triggerHandler("jqGridAddEditBeforeShowForm",[$(v),t]),$.isFunction(rp_ge[p.p.id].beforeShowForm)&&rp_ge[p.p.id].beforeShowForm.call(p,$(v),t),$("#"+$.jgrid.jqID(y.themodal)).data("onClose",rp_ge[p.p.id].onClose),$.jgrid.viewModal("#"+$.jgrid.jqID(y.themodal),{gbox:"#gbox_"+$.jgrid.jqID(u),jqm:b.jqModal,overlay:b.overlay,modal:b.modal,overlayClass:b.overlayClass,focusField:b.focusField,onHide:function(a){var b=$("#editmod"+u)[0].style.height,c=$("#editmod"+u)[0].style.width;b.indexOf("px")>-1&&(b=parseFloat(b)),c.indexOf("px")>-1&&(c=parseFloat(c)),$(p).data("formProp",{top:parseFloat($(a.w).css("top")),left:parseFloat($(a.w).css("left")),width:c,height:b,dataheight:$(v).height(),datawidth:$(v).width()}),a.w.remove(),a.o&&a.o.remove()}}),E||$("."+$.jgrid.jqID(b.overlayClass)).click(function(){return k()?($.jgrid.hideModal("#"+$.jgrid.jqID(y.themodal),{gb:"#gbox_"+$.jgrid.jqID(u),jqm:b.jqModal,onClose:rp_ge[p.p.id].onClose,removemodal:rp_ge[p.p.id].removemodal,formprop:!rp_ge[p.p.id].recreateForm,form:rp_ge[p.p.id].form}),!1):!1}),$(".fm-button","#"+$.jgrid.jqID(y.themodal)).hover(function(){$(this).addClass(f.hover)},function(){$(this).removeClass(f.hover)}),$("#sData",q).click(function(){return r={},$(".FormError",v).hide(),c(),"_empty"===r[p.p.id+"_id"]?i():b.checkOnSubmit===!0?(s=j(r,rp_ge[p.p.id]._savedData),s?($(v).data("disabled",!0),$(".confirm","#"+$.jgrid.jqID(y.themodal)).show()):i()):i(),!1}),$("#cData",q).click(function(){return k()?($.jgrid.hideModal("#"+$.jgrid.jqID(y.themodal),{gb:"#gbox_"+$.jgrid.jqID(u),jqm:b.jqModal,onClose:rp_ge[p.p.id].onClose,removemodal:rp_ge[p.p.id].removemodal,formprop:!rp_ge[p.p.id].recreateForm,form:rp_ge[p.p.id].form}),!1):!1}),$("#nData",q).click(function(){if(!k())return!1;$(".FormError",v).hide();var a=n();if(a[0]=parseInt(a[0],10),-1!==a[0]&&a[1][a[0]+1]){$(p).triggerHandler("jqGridAddEditClickPgButtons",["next",$(v),a[1][a[0]]]);var c;if($.isFunction(b.onclickPgButtons)&&(c=b.onclickPgButtons.call(p,"next",$(v),a[1][a[0]]),void 0!==c&&c===!1))return!1;if($("#"+$.jgrid.jqID(a[1][a[0]+1])).hasClass(f.disabled))return!1;g(a[1][a[0]+1],p,v),$(p).jqGrid("setSelection",a[1][a[0]+1]),$(p).triggerHandler("jqGridAddEditAfterClickPgButtons",["next",$(v),a[1][a[0]]]),$.isFunction(b.afterclickPgButtons)&&b.afterclickPgButtons.call(p,"next",$(v),a[1][a[0]+1]),m(a[0]+1,a)}return!1}),$("#pData",q).click(function(){if(!k())return!1;$(".FormError",v).hide();var a=n();if(-1!==a[0]&&a[1][a[0]-1]){$(p).triggerHandler("jqGridAddEditClickPgButtons",["prev",$(v),a[1][a[0]]]);var c;if($.isFunction(b.onclickPgButtons)&&(c=b.onclickPgButtons.call(p,"prev",$(v),a[1][a[0]]),void 0!==c&&c===!1))return!1;if($("#"+$.jgrid.jqID(a[1][a[0]-1])).hasClass(f.disabled))return!1;g(a[1][a[0]-1],p,v),$(p).jqGrid("setSelection",a[1][a[0]-1]),$(p).triggerHandler("jqGridAddEditAfterClickPgButtons",["prev",$(v),a[1][a[0]]]),$.isFunction(b.afterclickPgButtons)&&b.afterclickPgButtons.call(p,"prev",$(v),a[1][a[0]-1]),m(a[0]-1,a)}return!1}),$(p).triggerHandler("jqGridAddEditAfterShowForm",[$(v),t]),$.isFunction(rp_ge[p.p.id].afterShowForm)&&rp_ge[p.p.id].afterShowForm.call(p,$(v),t);var V=n();m(V[0],V)}}})},viewGridRow:function(a,b){var c=$.jgrid.getRegional(this[0],"view"),d=this[0].p.styleUI,e=$.jgrid.styleUI[d].formedit,f=$.jgrid.styleUI[d].common;return b=$.extend(!0,{top:0,left:0,width:500,datawidth:"auto",height:"auto",dataheight:"auto",modal:!1,overlay:30,drag:!0,resize:!0,jqModal:!0,closeOnEscape:!1,labelswidth:"30%",closeicon:[],navkeys:[!1,38,40],onClose:null,beforeShowForm:null,beforeInitData:null,viewPagerButtons:!0,recreateForm:!1,removemodal:!0,form:"view"},c,b||{}),rp_ge[$(this)[0].p.id]=b,this.each(function(){function c(){(rp_ge[j.p.id].closeOnEscape===!0||rp_ge[j.p.id].navkeys[0]===!0)&&setTimeout(function(){$(".ui-jqdialog-titlebar-close","#"+$.jgrid.jqID(p.modalhead)).attr("tabindex","-1").focus()},0)}function d(a,c,d,e){var g,h,i,j,k,l,m,n,o,p=0,q=[],r=!1,s="<td class='CaptionTD form-view-label "+f.content+"' width='"+b.labelswidth+"'>&#160;</td><td class='DataTD form-view-data ui-helper-reset "+f.content+"'>&#160;</td>",t="",u="<td class='CaptionTD form-view-label "+f.content+"'>&#160;</td><td class='DataTD form-view-data "+f.content+"'>&#160;</td>",v=["integer","number","currency"],w=0,x=0;for(l=1;e>=l;l++)t+=1===l?s:u;if($(c.p.colModel).each(function(){h=this.editrules&&this.editrules.edithidden===!0?!1:this.hidden===!0?!0:!1,h||"right"!==this.align||(this.formatter&&-1!==$.inArray(this.formatter,v)?w=Math.max(w,parseInt(this.width,10)):x=Math.max(x,parseInt(this.width,10)))}),m=0!==w?w:0!==x?x:0,r=$(c).jqGrid("getInd",a),$(c.p.colModel).each(function(a){if(g=this.name,n=!1,h=this.editrules&&this.editrules.edithidden===!0?!1:this.hidden===!0?!0:!1,k=h?"style='display:none'":"",o="boolean"!=typeof this.viewable?!0:this.viewable,"cb"!==g&&"subgrid"!==g&&"rn"!==g&&o){j=r===!1?"":g===c.p.ExpandColumn&&c.p.treeGrid===!0?$("td:eq("+a+")",c.rows[r]).text():$("td:eq("+a+")",c.rows[r]).html(),n="right"===this.align&&0!==m?!0:!1;var b=$.extend({},{rowabove:!1,rowcontent:""},this.formoptions||{}),f=parseInt(b.rowpos,10)||p+1,l=parseInt(2*(parseInt(b.colpos,10)||1),10);if(b.rowabove){var s=$("<tr><td class='contentinfo' colspan='"+2*e+"'>"+b.rowcontent+"</td></tr>");$(d).append(s),s[0].rp=f}i=$(d).find("tr[rowpos="+f+"]"),0===i.length&&(i=$("<tr "+k+" rowpos='"+f+"'></tr>").addClass("FormData").attr("id","trv_"+g),$(i).append(t),$(d).append(i),i[0].rp=f),$("td:eq("+(l-2)+")",i[0]).html("<b>"+(void 0===b.label?c.p.colNames[a]:b.label)+"</b>"),$("td:eq("+(l-1)+")",i[0]).append("<span>"+j+"</span>").attr("id","v_"+g),n&&$("td:eq("+(l-1)+") span",i[0]).css({"text-align":"right",width:m+"px"}),q[p]=a,p++}}),p>0){var y=$("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='"+(2*e-1)+"' class='DataTD'><input class='FormElement' id='id_g' type='text' name='id' value='"+a+"'/></td></tr>");y[0].rp=p+99,$(d).append(y)}return q}function g(a,b){var c,d,e,f,g=0;f=$(b).jqGrid("getInd",a,!0),f&&($("td",f).each(function(a){c=b.p.colModel[a].name,d=b.p.colModel[a].editrules&&b.p.colModel[a].editrules.edithidden===!0?!1:b.p.colModel[a].hidden===!0?!0:!1,"cb"!==c&&"subgrid"!==c&&"rn"!==c&&(e=c===b.p.ExpandColumn&&b.p.treeGrid===!0?$(this).text():$(this).html(),c=$.jgrid.jqID("v_"+c),$("#"+c+" span","#"+m).html(e),d&&$("#"+c,"#"+m).parents("tr:first").hide(),g++)}),g>0&&$("#id_g","#"+m).val(a))}function h(a,b){var c=b[1].length-1;0===a?$("#pData","#"+m+"_2").addClass(f.disabled):void 0!==b[1][a-1]&&$("#"+$.jgrid.jqID(b[1][a-1])).hasClass(f.disabled)?$("#pData",m+"_2").addClass(f.disabled):$("#pData","#"+m+"_2").removeClass(f.disabled),a===c?$("#nData","#"+m+"_2").addClass(f.disabled):void 0!==b[1][a+1]&&$("#"+$.jgrid.jqID(b[1][a+1])).hasClass(f.disabled)?$("#nData",m+"_2").addClass(f.disabled):$("#nData","#"+m+"_2").removeClass(f.disabled)}function i(){var a=$(j).jqGrid("getDataIDs"),b=$("#id_g","#"+m).val(),c=$.inArray(b,a);return[c,a]}var j=this;if(j.grid&&a){var k=j.p.id,l="ViewGrid_"+$.jgrid.jqID(k),m="ViewTbl_"+$.jgrid.jqID(k),n="ViewGrid_"+k,o="ViewTbl_"+k,p={themodal:"viewmod"+k,modalhead:"viewhd"+k,modalcontent:"viewcnt"+k,scrollelm:l},q=$.isFunction(rp_ge[j.p.id].beforeInitData)?rp_ge[j.p.id].beforeInitData:!1,r=!0,s=1,t=0;rp_ge[j.p.id].styleUI=j.p.styleUI||"jQueryUI",b.recreateForm||$(j).data("viewProp")&&$.extend(rp_ge[$(this)[0].p.id],$(j).data("viewProp"));var u=isNaN(rp_ge[$(this)[0].p.id].dataheight)?rp_ge[$(this)[0].p.id].dataheight:rp_ge[$(this)[0].p.id].dataheight+"px",v=isNaN(rp_ge[$(this)[0].p.id].datawidth)?rp_ge[$(this)[0].p.id].datawidth:rp_ge[$(this)[0].p.id].datawidth+"px",w=$("<form name='FormPost' id='"+n+"' class='FormGrid' style='width:"+v+";height:"+u+";'></form>"),x=$("<table id='"+o+"' class='EditTable ViewTable'><tbody></tbody></table>");if($(j.p.colModel).each(function(){var a=this.formoptions;s=Math.max(s,a?a.colpos||0:0),t=Math.max(t,a?a.rowpos||0:0)}),$(w).append(x),q&&(r=q.call(j,w),void 0===r&&(r=!0)),r!==!1){d(a,j,x,s);var y="rtl"===j.p.direction?!0:!1,z=y?"nData":"pData",A=y?"pData":"nData",B="<a id='"+z+"' class='fm-button "+f.button+"'><span class='"+f.icon_base+" "+e.icon_prev+"'></span></a>",C="<a id='"+A+"' class='fm-button "+f.button+"'><span class='"+f.icon_base+" "+e.icon_next+"'></span></a>",D="<a id='cData' class='fm-button "+f.button+"'>"+b.bClose+"</a>";if(t>0){var E=[];$.each($(x)[0].rows,function(a,b){E[a]=b}),E.sort(function(a,b){return a.rp>b.rp?1:a.rp<b.rp?-1:0}),$.each(E,function(a,b){$("tbody",x).append(b)})}b.gbox="#gbox_"+$.jgrid.jqID(k);var F=$("<div></div>").append(w).append("<table border='0' class='EditTable' id='"+m+"_2'><tbody><tr id='Act_Buttons'><td class='navButton' width='"+b.labelswidth+"'>"+(y?C+B:B+C)+"</td><td class='EditButton'>"+D+"</td></tr></tbody></table>");$.jgrid.createModal(p,F,rp_ge[$(this)[0].p.id],"#gview_"+$.jgrid.jqID(j.p.id),$("#gview_"+$.jgrid.jqID(j.p.id))[0]),y&&($("#pData, #nData","#"+m+"_2").css("float","right"),$(".EditButton","#"+m+"_2").css("text-align","left")),b.viewPagerButtons||$("#pData, #nData","#"+m+"_2").hide(),F=null,$("#"+p.themodal).keydown(function(a){if(27===a.which)return rp_ge[j.p.id].closeOnEscape&&$.jgrid.hideModal("#"+$.jgrid.jqID(p.themodal),{gb:b.gbox,jqm:b.jqModal,onClose:b.onClose,removemodal:rp_ge[j.p.id].removemodal,formprop:!rp_ge[j.p.id].recreateForm,form:rp_ge[j.p.id].form}),!1;
if(b.navkeys[0]===!0){if(a.which===b.navkeys[1])return $("#pData","#"+m+"_2").trigger("click"),!1;if(a.which===b.navkeys[2])return $("#nData","#"+m+"_2").trigger("click"),!1}}),b.closeicon=$.extend([!0,"left",e.icon_close],b.closeicon),b.closeicon[0]===!0&&$("#cData","#"+m+"_2").addClass("right"===b.closeicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+f.icon_base+" "+b.closeicon[2]+"'></span>"),$.isFunction(b.beforeShowForm)&&b.beforeShowForm.call(j,$("#"+l)),$.jgrid.viewModal("#"+$.jgrid.jqID(p.themodal),{gbox:"#gbox_"+$.jgrid.jqID(k),jqm:b.jqModal,overlay:b.overlay,modal:b.modal,onHide:function(a){$(j).data("viewProp",{top:parseFloat($(a.w).css("top")),left:parseFloat($(a.w).css("left")),width:$(a.w).width(),height:$(a.w).height(),dataheight:$("#"+l).height(),datawidth:$("#"+l).width()}),a.w.remove(),a.o&&a.o.remove()}}),$(".fm-button:not(."+f.disabled+")","#"+m+"_2").hover(function(){$(this).addClass(f.hover)},function(){$(this).removeClass(f.hover)}),c(),$("#cData","#"+m+"_2").click(function(){return $.jgrid.hideModal("#"+$.jgrid.jqID(p.themodal),{gb:"#gbox_"+$.jgrid.jqID(k),jqm:b.jqModal,onClose:b.onClose,removemodal:rp_ge[j.p.id].removemodal,formprop:!rp_ge[j.p.id].recreateForm,form:rp_ge[j.p.id].form}),!1}),$("#nData","#"+m+"_2").click(function(){$("#FormError","#"+m).hide();var a=i();return a[0]=parseInt(a[0],10),-1!==a[0]&&a[1][a[0]+1]&&($.isFunction(b.onclickPgButtons)&&b.onclickPgButtons.call(j,"next",$("#"+l),a[1][a[0]]),g(a[1][a[0]+1],j),$(j).jqGrid("setSelection",a[1][a[0]+1]),$.isFunction(b.afterclickPgButtons)&&b.afterclickPgButtons.call(j,"next",$("#"+l),a[1][a[0]+1]),h(a[0]+1,a)),c(),!1}),$("#pData","#"+m+"_2").click(function(){$("#FormError","#"+m).hide();var a=i();return-1!==a[0]&&a[1][a[0]-1]&&($.isFunction(b.onclickPgButtons)&&b.onclickPgButtons.call(j,"prev",$("#"+l),a[1][a[0]]),g(a[1][a[0]-1],j),$(j).jqGrid("setSelection",a[1][a[0]-1]),$.isFunction(b.afterclickPgButtons)&&b.afterclickPgButtons.call(j,"prev",$("#"+l),a[1][a[0]-1]),h(a[0]-1,a)),c(),!1});var G=i();h(G[0],G)}}})},delGridRow:function(a,b){var c=$.jgrid.getRegional(this[0],"del"),d=this[0].p.styleUI,e=$.jgrid.styleUI[d].formedit,f=$.jgrid.styleUI[d].common;return b=$.extend(!0,{top:0,left:0,width:240,height:"auto",dataheight:"auto",modal:!1,overlay:30,drag:!0,resize:!0,url:"",mtype:"POST",reloadAfterSubmit:!0,beforeShowForm:null,beforeInitData:null,afterShowForm:null,beforeSubmit:null,onclickSubmit:null,afterSubmit:null,jqModal:!0,closeOnEscape:!1,delData:{},delicon:[],cancelicon:[],onClose:null,ajaxDelOptions:{},processing:!1,serializeDelData:null,useDataProxy:!1},c,b||{}),rp_ge[$(this)[0].p.id]=b,this.each(function(){var c=this;if(c.grid&&a){var d,g,h,i,j=$.isFunction(rp_ge[c.p.id].beforeShowForm),k=$.isFunction(rp_ge[c.p.id].afterShowForm),l=$.isFunction(rp_ge[c.p.id].beforeInitData)?rp_ge[c.p.id].beforeInitData:!1,m=c.p.id,n={},o=!0,p="DelTbl_"+$.jgrid.jqID(m),q="DelTbl_"+m,r={themodal:"delmod"+m,modalhead:"delhd"+m,modalcontent:"delcnt"+m,scrollelm:p};if(rp_ge[c.p.id].styleUI=c.p.styleUI||"jQueryUI",$.isArray(a)&&(a=a.join()),void 0!==$("#"+$.jgrid.jqID(r.themodal))[0]){if(l&&(o=l.call(c,$("#"+p)),void 0===o&&(o=!0)),o===!1)return;$("#DelData>td","#"+p).text(a),$("#DelError","#"+p).hide(),rp_ge[c.p.id].processing===!0&&(rp_ge[c.p.id].processing=!1,$("#dData","#"+p).removeClass(f.active)),j&&rp_ge[c.p.id].beforeShowForm.call(c,$("#"+p)),$.jgrid.viewModal("#"+$.jgrid.jqID(r.themodal),{gbox:"#gbox_"+$.jgrid.jqID(m),jqm:rp_ge[c.p.id].jqModal,jqM:!1,overlay:rp_ge[c.p.id].overlay,modal:rp_ge[c.p.id].modal}),k&&rp_ge[c.p.id].afterShowForm.call(c,$("#"+p))}else{var s=isNaN(rp_ge[c.p.id].dataheight)?rp_ge[c.p.id].dataheight:rp_ge[c.p.id].dataheight+"px",t=isNaN(b.datawidth)?b.datawidth:b.datawidth+"px",u="<div id='"+q+"' class='formdata' style='width:"+t+";overflow:auto;position:relative;height:"+s+";'>";u+="<table class='DelTable'><tbody>",u+="<tr id='DelError' style='display:none'><td class='"+f.error+"'></td></tr>",u+="<tr id='DelData' style='display:none'><td >"+a+"</td></tr>",u+='<tr><td class="delmsg" style="white-space:pre;">'+rp_ge[c.p.id].msg+"</td></tr><tr><td >&#160;</td></tr>",u+="</tbody></table></div>";var v="<a id='dData' class='fm-button "+f.button+"'>"+b.bSubmit+"</a>",w="<a id='eData' class='fm-button "+f.button+"'>"+b.bCancel+"</a>";if(u+="<table class='EditTable ui-common-table' id='"+p+"_2'><tbody><tr><td><hr class='"+f.content+"' style='margin:1px'/></td></tr><tr><td class='DelButton EditButton'>"+v+"&#160;"+w+"</td></tr></tbody></table>",b.gbox="#gbox_"+$.jgrid.jqID(m),$.jgrid.createModal(r,u,rp_ge[c.p.id],"#gview_"+$.jgrid.jqID(c.p.id),$("#gview_"+$.jgrid.jqID(c.p.id))[0]),l&&(o=l.call(c,$(u)),void 0===o&&(o=!0)),o===!1)return;$(".fm-button","#"+p+"_2").hover(function(){$(this).addClass(f.hover)},function(){$(this).removeClass(f.hover)}),b.delicon=$.extend([!0,"left",e.icon_del],rp_ge[c.p.id].delicon),b.cancelicon=$.extend([!0,"left",e.icon_cancel],rp_ge[c.p.id].cancelicon),b.delicon[0]===!0&&$("#dData","#"+p+"_2").addClass("right"===b.delicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+f.icon_base+" "+b.delicon[2]+"'></span>"),b.cancelicon[0]===!0&&$("#eData","#"+p+"_2").addClass("right"===b.cancelicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+f.icon_base+" "+b.cancelicon[2]+"'></span>"),$("#dData","#"+p+"_2").click(function(){var a,e=[!0,""],j=$("#DelData>td","#"+p).text();if(n={},$.isFunction(rp_ge[c.p.id].onclickSubmit)&&(n=rp_ge[c.p.id].onclickSubmit.call(c,rp_ge[c.p.id],j)||{}),$.isFunction(rp_ge[c.p.id].beforeSubmit)&&(e=rp_ge[c.p.id].beforeSubmit.call(c,j)),e[0]&&!rp_ge[c.p.id].processing){if(rp_ge[c.p.id].processing=!0,h=c.p.prmNames,d=$.extend({},rp_ge[c.p.id].delData,n),i=h.oper,d[i]=h.deloper,g=h.id,j=String(j).split(","),!j.length)return!1;for(a in j)j.hasOwnProperty(a)&&(j[a]=$.jgrid.stripPref(c.p.idPrefix,j[a]));d[g]=j.join(),$(this).addClass(f.active);var k=$.extend({url:rp_ge[c.p.id].url||$(c).jqGrid("getGridParam","editurl"),type:rp_ge[c.p.id].mtype,data:$.isFunction(rp_ge[c.p.id].serializeDelData)?rp_ge[c.p.id].serializeDelData.call(c,d):d,complete:function(a,g){var h;if($("#dData","#"+p+"_2").removeClass(f.active),a.status>=300&&304!==a.status?(e[0]=!1,e[1]=$.isFunction(rp_ge[c.p.id].errorTextFormat)?rp_ge[c.p.id].errorTextFormat.call(c,a):g+" Status: '"+a.statusText+"'. Error code: "+a.status):$.isFunction(rp_ge[c.p.id].afterSubmit)&&(e=rp_ge[c.p.id].afterSubmit.call(c,a,d)),e[0]===!1)$("#DelError>td","#"+p).html(e[1]),$("#DelError","#"+p).show();else{if(rp_ge[c.p.id].reloadAfterSubmit&&"local"!==c.p.datatype)$(c).trigger("reloadGrid");else{if(c.p.treeGrid===!0)try{$(c).jqGrid("delTreeNode",c.p.idPrefix+j[0])}catch(i){}else for(h=0;h<j.length;h++)$(c).jqGrid("delRowData",c.p.idPrefix+j[h]);c.p.selrow=null,c.p.selarrrow=[]}$.isFunction(rp_ge[c.p.id].afterComplete)&&setTimeout(function(){rp_ge[c.p.id].afterComplete.call(c,a,j)},500)}rp_ge[c.p.id].processing=!1,e[0]&&$.jgrid.hideModal("#"+$.jgrid.jqID(r.themodal),{gb:"#gbox_"+$.jgrid.jqID(m),jqm:b.jqModal,onClose:rp_ge[c.p.id].onClose})}},$.jgrid.ajaxOptions,rp_ge[c.p.id].ajaxDelOptions);if(k.url||rp_ge[c.p.id].useDataProxy||($.isFunction(c.p.dataProxy)?rp_ge[c.p.id].useDataProxy=!0:(e[0]=!1,e[1]+=" "+$.jgrid.getRegional(c,"errors.nourl"))),e[0])if(rp_ge[c.p.id].useDataProxy){var l=c.p.dataProxy.call(c,k,"del_"+c.p.id);void 0===l&&(l=[!0,""]),l[0]===!1?(e[0]=!1,e[1]=l[1]||"Error deleting the selected row!"):$.jgrid.hideModal("#"+$.jgrid.jqID(r.themodal),{gb:"#gbox_"+$.jgrid.jqID(m),jqm:b.jqModal,onClose:rp_ge[c.p.id].onClose})}else"clientArray"===k.url?(d=k.data,k.complete({status:200,statusText:""},"")):$.ajax(k)}return e[0]===!1&&($("#DelError>td","#"+p).html(e[1]),$("#DelError","#"+p).show()),!1}),$("#eData","#"+p+"_2").click(function(){return $.jgrid.hideModal("#"+$.jgrid.jqID(r.themodal),{gb:"#gbox_"+$.jgrid.jqID(m),jqm:rp_ge[c.p.id].jqModal,onClose:rp_ge[c.p.id].onClose}),!1}),j&&rp_ge[c.p.id].beforeShowForm.call(c,$("#"+p)),$.jgrid.viewModal("#"+$.jgrid.jqID(r.themodal),{gbox:"#gbox_"+$.jgrid.jqID(m),jqm:rp_ge[c.p.id].jqModal,overlay:rp_ge[c.p.id].overlay,modal:rp_ge[c.p.id].modal}),k&&rp_ge[c.p.id].afterShowForm.call(c,$("#"+p))}rp_ge[c.p.id].closeOnEscape===!0&&setTimeout(function(){$(".ui-jqdialog-titlebar-close","#"+$.jgrid.jqID(r.modalhead)).attr("tabindex","-1").focus()},0)}})},navGrid:function(a,b,c,d,e,f,g){var h=$.jgrid.getRegional(this[0],"nav"),i=this[0].p.styleUI,j=$.jgrid.styleUI[i].navigator,k=$.jgrid.styleUI[i].common;return b=$.extend({edit:!0,editicon:j.icon_edit_nav,add:!0,addicon:j.icon_add_nav,del:!0,delicon:j.icon_del_nav,search:!0,searchicon:j.icon_search_nav,refresh:!0,refreshicon:j.icon_refresh_nav,refreshstate:"firstpage",view:!1,viewicon:j.icon_view_nav,position:"left",closeOnEscape:!0,beforeRefresh:null,afterRefresh:null,cloneToTop:!1,alertwidth:200,alertheight:"auto",alerttop:null,alertleft:null,alertzIndex:null,dropmenu:!1},h,b||{}),this.each(function(){if(!this.p.navGrid){var j,l,m,n={themodal:"alertmod_"+this.p.id,modalhead:"alerthd_"+this.p.id,modalcontent:"alertcnt_"+this.p.id},o=this;if(o.grid&&"string"==typeof a){$(o).data("navGrid")||$(o).data("navGrid",b),m=$(o).data("navGrid"),o.p.force_regional&&(m=$.extend(m,h)),void 0===$("#"+n.themodal)[0]&&(m.alerttop||m.alertleft||(void 0!==window.innerWidth?(m.alertleft=window.innerWidth,m.alerttop=window.innerHeight):void 0!==document.documentElement&&void 0!==document.documentElement.clientWidth&&0!==document.documentElement.clientWidth?(m.alertleft=document.documentElement.clientWidth,m.alerttop=document.documentElement.clientHeight):(m.alertleft=1024,m.alerttop=768),m.alertleft=m.alertleft/2-parseInt(m.alertwidth,10)/2,m.alerttop=m.alerttop/2-25),$.jgrid.createModal(n,"<div>"+m.alerttext+"</div><span tabindex='0'><span tabindex='-1' id='jqg_alrt'></span></span>",{gbox:"#gbox_"+$.jgrid.jqID(o.p.id),jqModal:!0,drag:!0,resize:!0,caption:m.alertcap,top:m.alerttop,left:m.alertleft,width:m.alertwidth,height:m.alertheight,closeOnEscape:m.closeOnEscape,zIndex:m.alertzIndex,styleUI:o.p.styleUI},"#gview_"+$.jgrid.jqID(o.p.id),$("#gbox_"+$.jgrid.jqID(o.p.id))[0],!0));var p,q=1,r=function(){$(this).hasClass(k.disabled)||$(this).addClass(k.hover)},s=function(){$(this).removeClass(k.hover)};for(m.cloneToTop&&o.p.toppager&&(q=2),p=0;q>p;p++){var t,u,v,w=$("<table class='ui-pg-table navtable ui-common-table'><tbody><tr></tr></tbody></table>"),x="<td class='ui-pg-button "+k.disabled+"' style='width:4px;'><span class='ui-separator'></span></td>";0===p?(u=a,v=o.p.id,u===o.p.toppager&&(v+="_top",q=1)):(u=o.p.toppager,v=o.p.id+"_top"),"rtl"===o.p.direction&&$(w).attr("dir","rtl").css("float","right"),d=d||{},m.add&&(t=$("<td class='ui-pg-button "+k.cornerall+"'></td>"),$(t).append("<div class='ui-pg-div'><span class='"+k.icon_base+" "+m.addicon+"'></span>"+m.addtext+"</div>"),$("tr",w).append(t),$(t,w).attr({title:m.addtitle||"",id:d.id||"add_"+v}).click(function(){return $(this).hasClass(k.disabled)||($.isFunction(m.addfunc)?m.addfunc.call(o):$(o).jqGrid("editGridRow","new",d)),!1}).hover(r,s),t=null),c=c||{},m.edit&&(t=$("<td class='ui-pg-button "+k.cornerall+"'></td>"),$(t).append("<div class='ui-pg-div'><span class='"+k.icon_base+" "+m.editicon+"'></span>"+m.edittext+"</div>"),$("tr",w).append(t),$(t,w).attr({title:m.edittitle||"",id:c.id||"edit_"+v}).click(function(){if(!$(this).hasClass(k.disabled)){var a=o.p.selrow;a?$.isFunction(m.editfunc)?m.editfunc.call(o,a):$(o).jqGrid("editGridRow",a,c):($.jgrid.viewModal("#"+n.themodal,{gbox:"#gbox_"+$.jgrid.jqID(o.p.id),jqm:!0}),$("#jqg_alrt").focus())}return!1}).hover(r,s),t=null),g=g||{},m.view&&(t=$("<td class='ui-pg-button "+k.cornerall+"'></td>"),$(t).append("<div class='ui-pg-div'><span class='"+k.icon_base+" "+m.viewicon+"'></span>"+m.viewtext+"</div>"),$("tr",w).append(t),$(t,w).attr({title:m.viewtitle||"",id:g.id||"view_"+v}).click(function(){if(!$(this).hasClass(k.disabled)){var a=o.p.selrow;a?$.isFunction(m.viewfunc)?m.viewfunc.call(o,a):$(o).jqGrid("viewGridRow",a,g):($.jgrid.viewModal("#"+n.themodal,{gbox:"#gbox_"+$.jgrid.jqID(o.p.id),jqm:!0}),$("#jqg_alrt").focus())}return!1}).hover(r,s),t=null),e=e||{},m.del&&(t=$("<td class='ui-pg-button "+k.cornerall+"'></td>"),$(t).append("<div class='ui-pg-div'><span class='"+k.icon_base+" "+m.delicon+"'></span>"+m.deltext+"</div>"),$("tr",w).append(t),$(t,w).attr({title:m.deltitle||"",id:e.id||"del_"+v}).click(function(){if(!$(this).hasClass(k.disabled)){var a;o.p.multiselect?(a=o.p.selarrrow,0===a.length&&(a=null)):a=o.p.selrow,a?$.isFunction(m.delfunc)?m.delfunc.call(o,a):$(o).jqGrid("delGridRow",a,e):($.jgrid.viewModal("#"+n.themodal,{gbox:"#gbox_"+$.jgrid.jqID(o.p.id),jqm:!0}),$("#jqg_alrt").focus())}return!1}).hover(r,s),t=null),(m.add||m.edit||m.del||m.view)&&$("tr",w).append(x),f=f||{},m.search&&(t=$("<td class='ui-pg-button "+k.cornerall+"'></td>"),$(t).append("<div class='ui-pg-div'><span class='"+k.icon_base+" "+m.searchicon+"'></span>"+m.searchtext+"</div>"),$("tr",w).append(t),$(t,w).attr({title:m.searchtitle||"",id:f.id||"search_"+v}).click(function(){return $(this).hasClass(k.disabled)||($.isFunction(m.searchfunc)?m.searchfunc.call(o,f):$(o).jqGrid("searchGrid",f)),!1}).hover(r,s),f.showOnLoad&&f.showOnLoad===!0&&$(t,w).click(),t=null),m.refresh&&(t=$("<td class='ui-pg-button "+k.cornerall+"'></td>"),$(t).append("<div class='ui-pg-div'><span class='"+k.icon_base+" "+m.refreshicon+"'></span>"+m.refreshtext+"</div>"),$("tr",w).append(t),$(t,w).attr({title:m.refreshtitle||"",id:"refresh_"+v}).click(function(){if(!$(this).hasClass(k.disabled)){$.isFunction(m.beforeRefresh)&&m.beforeRefresh.call(o),o.p.search=!1,o.p.resetsearch=!0;try{if("currentfilter"!==m.refreshstate){var a=o.p.id;o.p.postData.filters="";try{$("#fbox_"+$.jgrid.jqID(a)).jqFilter("resetFilter")}catch(b){}$.isFunction(o.clearToolbar)&&o.clearToolbar.call(o,!1)}}catch(c){}switch(m.refreshstate){case"firstpage":$(o).trigger("reloadGrid",[{page:1}]);break;case"current":case"currentfilter":$(o).trigger("reloadGrid",[{current:!0}])}$.isFunction(m.afterRefresh)&&m.afterRefresh.call(o)}return!1}).hover(r,s),t=null),l=$(".ui-jqgrid").css("font-size")||"11px",$("body").append("<div id='testpg2' class='ui-jqgrid "+$.jgrid.styleUI[i].base.entrieBox+"' style='font-size:"+l+";visibility:hidden;' ></div>"),j=$(w).clone().appendTo("#testpg2").width(),$("#testpg2").remove(),o.p._nvtd&&(m.dropmenu?(w=null,$(o).jqGrid("_buildNavMenu",u,v,b,c,d,e,f,g)):j>o.p._nvtd[0]?(o.p.responsive?(w=null,$(o).jqGrid("_buildNavMenu",u,v,b,c,d,e,f,g)):$(u+"_"+m.position,u).width(j),o.p._nvtd[0]=j):$(u+"_"+m.position,u).append(w),o.p._nvtd[1]=j),o.p.navGrid=!0}o.p.storeNavOptions&&(o.p.navOptions=m,o.p.editOptions=c,o.p.addOptions=d,o.p.delOptions=e,o.p.searchOptions=f,o.p.viewOptions=g)}}})},navButtonAdd:function(a,b){var c=this[0].p.styleUI,d=$.jgrid.styleUI[c].navigator;return b=$.extend({caption:"newButton",title:"",buttonicon:d.icon_newbutton_nav,onClickButton:null,position:"last",cursor:"pointer"},b||{}),this.each(function(){if(this.grid){"string"==typeof a&&0!==a.indexOf("#")&&(a="#"+$.jgrid.jqID(a));var d=$(".navtable",a)[0],e=this,f=$.jgrid.styleUI[c].common.disabled,g=$.jgrid.styleUI[c].common.hover,h=$.jgrid.styleUI[c].common.cornerall,i=$.jgrid.styleUI[c].common.icon_base;if(d){if(b.id&&void 0!==$("#"+$.jgrid.jqID(b.id),d)[0])return;var j=$("<td></td>");$(j).addClass("ui-pg-button "+h).append("NONE"===b.buttonicon.toString().toUpperCase()?"<div class='ui-pg-div'>"+b.caption+"</div>":"<div class='ui-pg-div'><span class='"+i+" "+b.buttonicon+"'></span>"+b.caption+"</div>"),b.id&&$(j).attr("id",b.id),"first"===b.position?0===d.rows[0].cells.length?$("tr",d).append(j):$("tr td:eq(0)",d).before(j):$("tr",d).append(j),$(j,d).attr("title",b.title||"").click(function(a){return $(this).hasClass(f)||$.isFunction(b.onClickButton)&&b.onClickButton.call(e,a),!1}).hover(function(){$(this).hasClass(f)||$(this).addClass(g)},function(){$(this).removeClass(g)})}else if(d=$(".dropdownmenu",a)[0]){var k=$(d).val(),l=b.id||$.jgrid.randId(),m=$('<li class="ui-menu-item" role="presentation"><a class="'+h+' g-menu-item" tabindex="0" role="menuitem" id="'+l+'">'+(b.caption||b.title)+"</a></li>");k&&("first"===b.position?$("#"+k).prepend(m):$("#"+k).append(m),$(m).on("click",function(a){return $(this).hasClass(f)||($("#"+k).hide(),$.isFunction(b.onClickButton)&&b.onClickButton.call(e,a)),!1}).find("a").hover(function(){$(this).hasClass(f)||$(this).addClass(g)},function(){$(this).removeClass(g)}))}}})},navSeparatorAdd:function(a,b){var c=this[0].p.styleUI,d=$.jgrid.styleUI[c].common;return b=$.extend({sepclass:"ui-separator",sepcontent:"",position:"last"},b||{}),this.each(function(){if(this.grid){"string"==typeof a&&0!==a.indexOf("#")&&(a="#"+$.jgrid.jqID(a));var c,e,f=$(".navtable",a)[0];f?(c="<td class='ui-pg-button "+d.disabled+"' style='width:4px;'><span class='"+b.sepclass+"'></span>"+b.sepcontent+"</td>","first"===b.position?0===f.rows[0].cells.length?$("tr",f).append(c):$("tr td:eq(0)",f).before(c):$("tr",f).append(c)):(f=$(".dropdownmenu",a)[0],c="<li class='ui-menu-item "+d.disabled+"' style='width:100%' role='presentation'><hr class='ui-separator-li'></li>",f&&(e=$(f).val(),e&&("first"===b.position?$("#"+e).prepend(c):$("#"+e).append(c))))}})},_buildNavMenu:function(a,b,c,d,e,f,g,h){return this.each(function(){var i=this,j=i.p.styleUI,k=($.jgrid.styleUI[j].navigator,$.jgrid.styleUI[j].filter),l=$.jgrid.styleUI[j].common,m="form_menu_"+$.jgrid.randId(),n="<button class='dropdownmenu "+l.button+"' value='"+m+"'>Actions</button>";$(a+"_"+c.position,a).append(n);var o={themodal:"alertmod_"+this.p.id,modalhead:"alerthd_"+this.p.id,modalcontent:"alertcnt_"+this.p.id},p=function(){var a,j,n=$(".ui-jqgrid-view").css("font-size")||"11px",p=$('<ul id="'+m+'" class="ui-nav-menu modal-content" role="menu" tabindex="0" style="display:none;font-size:'+n+'"></ul>');c.add&&(e=e||{},a=e.id||"add_"+b,j=$('<li class="ui-menu-item" role="presentation"><a class="'+l.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+a+'">'+(c.addtext||c.addtitle)+"</a></li>").click(function(){return $(this).hasClass(l.disabled)||($.isFunction(c.addfunc)?c.addfunc.call(i):$(i).jqGrid("editGridRow","new",e),$(p).hide()),!1}),$(p).append(j)),c.edit&&(d=d||{},a=d.id||"edit_"+b,j=$('<li class="ui-menu-item" role="presentation"><a class="'+l.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+a+'">'+(c.edittext||c.edittitle)+"</a></li>").click(function(){if(!$(this).hasClass(l.disabled)){var a=i.p.selrow;a?$.isFunction(c.editfunc)?c.editfunc.call(i,a):$(i).jqGrid("editGridRow",a,d):($.jgrid.viewModal("#"+o.themodal,{gbox:"#gbox_"+$.jgrid.jqID(i.p.id),jqm:!0}),$("#jqg_alrt").focus()),$(p).hide()}return!1}),$(p).append(j)),c.view&&(h=h||{},a=h.id||"view_"+b,j=$('<li class="ui-menu-item" role="presentation"><a class="'+l.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+a+'">'+(c.viewtext||c.viewtitle)+"</a></li>").click(function(){if(!$(this).hasClass(l.disabled)){var a=i.p.selrow;a?$.isFunction(c.editfunc)?c.viewfunc.call(i,a):$(i).jqGrid("viewGridRow",a,h):($.jgrid.viewModal("#"+o.themodal,{gbox:"#gbox_"+$.jgrid.jqID(i.p.id),jqm:!0}),$("#jqg_alrt").focus()),$(p).hide()}return!1}),$(p).append(j)),c.del&&(f=f||{},a=f.id||"del_"+b,j=$('<li class="ui-menu-item" role="presentation"><a class="'+l.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+a+'">'+(c.deltext||c.deltitle)+"</a></li>").click(function(){if(!$(this).hasClass(l.disabled)){var a;i.p.multiselect?(a=i.p.selarrrow,0===a.length&&(a=null)):a=i.p.selrow,a?$.isFunction(c.delfunc)?c.delfunc.call(i,a):$(i).jqGrid("delGridRow",a,f):($.jgrid.viewModal("#"+o.themodal,{gbox:"#gbox_"+$.jgrid.jqID(i.p.id),jqm:!0}),$("#jqg_alrt").focus()),$(p).hide()}return!1}),$(p).append(j)),(c.add||c.edit||c.del||c.view)&&$(p).append("<li class='ui-menu-item "+l.disabled+"' style='width:100%' role='presentation'><hr class='ui-separator-li'></li>"),c.search&&(g=g||{},a=g.id||"search_"+b,j=$('<li class="ui-menu-item" role="presentation"><a class="'+l.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+a+'">'+(c.searchtext||c.searchtitle)+"</a></li>").click(function(){return $(this).hasClass(l.disabled)||($.isFunction(c.searchfunc)?c.searchfunc.call(i,g):$(i).jqGrid("searchGrid",g),$(p).hide()),!1}),$(p).append(j),g.showOnLoad&&g.showOnLoad===!0&&$(j).click()),c.refresh&&(a=g.id||"search_"+b,j=$('<li class="ui-menu-item" role="presentation"><a class="'+l.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+a+'">'+(c.refreshtext||c.refreshtitle)+"</a></li>").click(function(){if(!$(this).hasClass(l.disabled)){$.isFunction(c.beforeRefresh)&&c.beforeRefresh.call(i),i.p.search=!1,i.p.resetsearch=!0;try{if("currentfilter"!==c.refreshstate){var a=i.p.id;i.p.postData.filters="";try{$("#fbox_"+$.jgrid.jqID(a)).jqFilter("resetFilter")}catch(b){}$.isFunction(i.clearToolbar)&&i.clearToolbar.call(i,!1)}}catch(d){}switch(c.refreshstate){case"firstpage":$(i).trigger("reloadGrid",[{page:1}]);break;case"current":case"currentfilter":$(i).trigger("reloadGrid",[{current:!0}])}$.isFunction(c.afterRefresh)&&c.afterRefresh.call(i),$(p).hide()}return!1}),$(p).append(j)),$(p).hide(),$("body").append(p),$("#"+m).addClass("ui-menu "+k.menu_widget),$("#"+m+" > li > a").hover(function(){$(this).addClass(l.hover)},function(){$(this).removeClass(l.hover)})};p(),$(".dropdownmenu").on("click",function(){var a=$(this).offset(),b=a.left,c=parseInt(a.top),d=$(this).val();$("#"+d).show().css({top:c-($("#"+d).height()+10)+"px",left:b+"px"})}),$("body").on("click",function(a){$(a.target).hasClass("dropdownmenu")||$("#"+m).hide()})})},GridToForm:function(a,b){return this.each(function(){var c,d=this;if(d.grid){var e=$(d).jqGrid("getRowData",a);if(e)for(c in e)e.hasOwnProperty(c)&&($("[name="+$.jgrid.jqID(c)+"]",b).is("input:radio")||$("[name="+$.jgrid.jqID(c)+"]",b).is("input:checkbox")?$("[name="+$.jgrid.jqID(c)+"]",b).each(function(){$(this).val()==e[c]?$(this)[d.p.useProp?"prop":"attr"]("checked",!0):$(this)[d.p.useProp?"prop":"attr"]("checked",!1)}):$("[name="+$.jgrid.jqID(c)+"]",b).val(e[c]))}})},FormToGrid:function(a,b,c,d){return this.each(function(){var e=this;if(e.grid){c||(c="set"),d||(d="first");var f=$(b).serializeArray(),g={};$.each(f,function(a,b){g[b.name]=b.value}),"add"===c?$(e).jqGrid("addRowData",a,g,d):"set"===c&&$(e).jqGrid("setRowData",a,g)}})}}),$.jgrid.extend({groupingSetup:function(){return this.each(function(){var a,b,c,d=this,e=d.p.colModel,f=d.p.groupingView,g=$.jgrid.styleUI[d.p.styleUI||"jQueryUI"].grouping;if(null===f||"object"!=typeof f&&!$.isFunction(f))d.p.grouping=!1;else if(f.plusicon||(f.plusicon=g.icon_plus),f.minusicon||(f.minusicon=g.icon_minus),f.groupField.length){for(void 0===f.visibiltyOnNextGrouping&&(f.visibiltyOnNextGrouping=[]),f.lastvalues=[],f._locgr||(f.groups=[]),f.counters=[],a=0;a<f.groupField.length;a++)f.groupOrder[a]||(f.groupOrder[a]="asc"),f.groupText[a]||(f.groupText[a]="{0}"),"boolean"!=typeof f.groupColumnShow[a]&&(f.groupColumnShow[a]=!0),"boolean"!=typeof f.groupSummary[a]&&(f.groupSummary[a]=!1),f.groupSummaryPos[a]||(f.groupSummaryPos[a]="footer"),f.groupColumnShow[a]===!0?(f.visibiltyOnNextGrouping[a]=!0,$(d).jqGrid("showCol",f.groupField[a])):(f.visibiltyOnNextGrouping[a]=$("#"+$.jgrid.jqID(d.p.id+"_"+f.groupField[a])).is(":visible"),$(d).jqGrid("hideCol",f.groupField[a]));for(f.summary=[],f.hideFirstGroupCol&&(f.formatDisplayField[0]=function(a){return a}),b=0,c=e.length;c>b;b++)f.hideFirstGroupCol&&(e[b].hidden||f.groupField[0]!==e[b].name||(e[b].formatter=function(){return""})),e[b].summaryType&&f.summary.push(e[b].summaryDivider?{nm:e[b].name,st:e[b].summaryType,v:"",sd:e[b].summaryDivider,vd:"",sr:e[b].summaryRound,srt:e[b].summaryRoundType||"round"}:{nm:e[b].name,st:e[b].summaryType,v:"",sr:e[b].summaryRound,srt:e[b].summaryRoundType||"round"})}else d.p.grouping=!1})},groupingPrepare:function(a,b){return this.each(function(){var c,d,e,f,g,h=this.p.groupingView,i=this,j=function(){$.isFunction(this.st)?this.v=this.st.call(i,this.v,this.nm,a):(this.v=$(i).jqGrid("groupingCalculations.handler",this.st,this.v,this.nm,this.sr,this.srt,a),"avg"===this.st.toLowerCase()&&this.sd&&(this.vd=$(i).jqGrid("groupingCalculations.handler",this.st,this.vd,this.sd,this.sr,this.srt,a)))},k=h.groupField.length,l=0;for(c=0;k>c;c++)d=h.groupField[c],f=h.displayField[c],e=a[d],g=null==f?null:a[f],null==g&&(g=e),void 0!==e&&(0===b?(h.groups.push({idx:c,dataIndex:d,value:e,displayValue:g,startRow:b,cnt:1,summary:[]}),h.lastvalues[c]=e,h.counters[c]={cnt:1,pos:h.groups.length-1,summary:$.extend(!0,[],h.summary)},$.each(h.counters[c].summary,j),h.groups[h.counters[c].pos].summary=h.counters[c].summary):"object"==typeof e||($.isArray(h.isInTheSameGroup)&&$.isFunction(h.isInTheSameGroup[c])?h.isInTheSameGroup[c].call(i,h.lastvalues[c],e,c,h):h.lastvalues[c]===e)?1===l?(h.groups.push({idx:c,dataIndex:d,value:e,displayValue:g,startRow:b,cnt:1,summary:[]}),h.lastvalues[c]=e,h.counters[c]={cnt:1,pos:h.groups.length-1,summary:$.extend(!0,[],h.summary)},$.each(h.counters[c].summary,j),h.groups[h.counters[c].pos].summary=h.counters[c].summary):(h.counters[c].cnt+=1,h.groups[h.counters[c].pos].cnt=h.counters[c].cnt,$.each(h.counters[c].summary,j),h.groups[h.counters[c].pos].summary=h.counters[c].summary):(h.groups.push({idx:c,dataIndex:d,value:e,displayValue:g,startRow:b,cnt:1,summary:[]}),h.lastvalues[c]=e,l=1,h.counters[c]={cnt:1,pos:h.groups.length-1,summary:$.extend(!0,[],h.summary)},$.each(h.counters[c].summary,j),h.groups[h.counters[c].pos].summary=h.counters[c].summary))}),this},groupingToggle:function(a){return this.each(function(){var b=this,c=b.p.groupingView,d=a.split("_"),e=parseInt(d[d.length-2],10);d.splice(d.length-2,2);var f,g,h=d.join("_"),i=c.minusicon,j=c.plusicon,k=$("#"+$.jgrid.jqID(a)),l=k.length?k[0].nextSibling:null,m=$("#"+$.jgrid.jqID(a)+" span.tree-wrap-"+b.p.direction),n=function(a){var b=$.map(a.split(" "),function(a){return a.substring(0,h.length+1)===h+"_"?parseInt(a.substring(h.length+1),10):void 0});return b.length>0?b[0]:void 0},o=!1,p=!1,q=b.p.frozenColumns?b.p.id+"_frozen":!1,r=q?$("#"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(q)):!1,s=r&&r.length?r[0].nextSibling:null;if(m.hasClass(i)){if(c.showSummaryOnHide){if(l)for(;l&&(f=n(l.className),!(void 0!==f&&e>=f));)$(l).hide(),l=l.nextSibling,q&&($(s).hide(),s=s.nextSibling)}else if(l)for(;l&&(f=n(l.className),!(void 0!==f&&e>=f));)$(l).hide(),l=l.nextSibling,q&&($(s).hide(),s=s.nextSibling);m.removeClass(i).addClass(j),o=!0}else{if(l)for(g=void 0;l;){if(f=n(l.className),void 0===g&&(g=void 0===f),p=$(l).hasClass("ui-subgrid")&&$(l).hasClass("ui-sg-collapsed"),void 0!==f){if(e>=f)break;f===e+1&&(p||($(l).show().find(">td>span.tree-wrap-"+b.p.direction).removeClass(i).addClass(j),q&&$(s).show().find(">td>span.tree-wrap-"+b.p.direction).removeClass(i).addClass(j)))}else g&&(p||($(l).show(),q&&$(s).show()));l=l.nextSibling,q&&(s=s.nextSibling)}m.removeClass(j).addClass(i)}$(b).triggerHandler("jqGridGroupingClickGroup",[a,o]),$.isFunction(b.p.onClickGroup)&&b.p.onClickGroup.call(b,a,o)}),!1},groupingRender:function(a,b,c,d){return this.each(function(){function e(a,b,c){var d,e=!1;if(0===b)e=c[a];else{var f=c[a].idx;if(0===f)e=c[a];else for(d=a;d>=0;d--)if(c[d].idx===f-b){e=c[d];break}}return e}function f(a,c,d,f){var g,h,i=e(a,c,d),k=j.p.colModel,l=i.cnt,m="";for(h=f;b>h;h++){var n="<td "+j.formatCol(h,1,"")+">&#160;</td>",o="{0}";$.each(i.summary,function(){if(this.nm===k[h].name){k[h].summaryTpl&&(o=k[h].summaryTpl),"string"==typeof this.st&&"avg"===this.st.toLowerCase()&&(this.sd&&this.vd?this.v=this.v/this.vd:this.v&&l>0&&(this.v=this.v/l));try{this.groupCount=i.cnt,this.groupIndex=i.dataIndex,this.groupValue=i.value,g=j.formatter("",this.v,h,this)}catch(a){g=this.v}return n="<td "+j.formatCol(h,1,"")+">"+$.jgrid.template(o,g)+"</td>",!1}}),m+=n}return m}var g,h,i,j=this,k=j.p.groupingView,l="",m="",n=k.groupCollapse?k.plusicon:k.minusicon,o=[],p=k.groupField.length,q=$.jgrid.styleUI[j.p.styleUI||"jQueryUI"].common;n=n+" tree-wrap-"+j.p.direction,$.each(j.p.colModel,function(a,b){var c;for(c=0;p>c;c++)if(k.groupField[c]===b.name){o[c]=a;break}});var r,s=0,t=$.makeArray(k.groupSummary);t.reverse(),r=j.p.multiselect?' colspan="2"':"",$.each(k.groups,function(e,u){if(k._locgr&&!(u.startRow+u.cnt>(c-1)*d&&u.startRow<c*d))return!0;s++,h=j.p.id+"ghead_"+u.idx,g=h+"_"+e,m="<span style='cursor:pointer;margin-right:8px;margin-left:5px;' class='"+q.icon_base+" "+n+"' onclick=\"jQuery('#"+$.jgrid.jqID(j.p.id)+"').jqGrid('groupingToggle','"+g+"');return false;\"></span>";try{$.isArray(k.formatDisplayField)&&$.isFunction(k.formatDisplayField[u.idx])?(u.displayValue=k.formatDisplayField[u.idx].call(j,u.displayValue,u.value,j.p.colModel[o[u.idx]],u.idx,k),i=u.displayValue):i=j.formatter(g,u.displayValue,o[u.idx],u.value)}catch(v){i=u.displayValue}var w="";w=$.isFunction(k.groupText[u.idx])?k.groupText[u.idx].call(j,i,u.cnt,u.summary):$.jgrid.template(k.groupText[u.idx],i,u.cnt,u.summary),"string"!=typeof w&&"number"!=typeof w&&(w=i),"header"===k.groupSummaryPos[u.idx]?(l+='<tr id="'+g+'"'+(k.groupCollapse&&u.idx>0?' style="display:none;" ':" ")+'role="row" class= "'+q.content+" jqgroup ui-row-"+j.p.direction+" "+h+'"><td style="padding-left:'+12*u.idx+'px;"'+r+">"+m+w+"</td>",l+=f(e,0,k.groups,k.groupColumnShow[u.idx]===!1?""===r?2:3:""===r?1:2),l+="</tr>"):l+='<tr id="'+g+'"'+(k.groupCollapse&&u.idx>0?' style="display:none;" ':" ")+'role="row" class= "'+q.content+" jqgroup ui-row-"+j.p.direction+" "+h+'"><td style="padding-left:'+12*u.idx+'px;" colspan="'+(k.groupColumnShow[u.idx]===!1?b-1:b)+'">'+m+w+"</td></tr>";var x=p-1===u.idx;if(x){var y,z,A=k.groups[e+1],B=0,C=u.startRow,D=void 0!==A?A.startRow:k.groups[e].startRow+k.groups[e].cnt;for(k._locgr&&(B=(c-1)*d,B>u.startRow&&(C=B)),y=C;D>y&&a[y-B];y++)l+=a[y-B].join("");if("header"!==k.groupSummaryPos[u.idx]){var E;if(void 0!==A){for(E=0;E<k.groupField.length&&A.dataIndex!==k.groupField[E];E++);s=k.groupField.length-E}for(z=0;s>z;z++)if(t[z]){var F="";k.groupCollapse&&!k.showSummaryOnHide&&(F=' style="display:none;"'),l+="<tr"+F+' jqfootlevel="'+(u.idx-z)+'" role="row" class="'+q.content+" jqfoot ui-row-"+j.p.direction+'">',l+=f(e,z,k.groups,0),l+="</tr>"}s=E}}}),$("#"+$.jgrid.jqID(j.p.id)+" tbody:first").append(l),l=null})},groupingGroupBy:function(a,b){return this.each(function(){var c=this;"string"==typeof a&&(a=[a]);var d=c.p.groupingView;c.p.grouping=!0,d._locgr=!1,void 0===d.visibiltyOnNextGrouping&&(d.visibiltyOnNextGrouping=[]);var e;for(e=0;e<d.groupField.length;e++)!d.groupColumnShow[e]&&d.visibiltyOnNextGrouping[e]&&$(c).jqGrid("showCol",d.groupField[e]);for(e=0;e<a.length;e++)d.visibiltyOnNextGrouping[e]=$("#"+$.jgrid.jqID(c.p.id)+"_"+$.jgrid.jqID(a[e])).is(":visible");c.p.groupingView=$.extend(c.p.groupingView,b||{}),d.groupField=a,$(c).trigger("reloadGrid")})},groupingRemove:function(a){return this.each(function(){var b=this;if(void 0===a&&(a=!0),b.p.grouping=!1,a===!0){var c,d=b.p.groupingView;for(c=0;c<d.groupField.length;c++)!d.groupColumnShow[c]&&d.visibiltyOnNextGrouping[c]&&$(b).jqGrid("showCol",d.groupField);$("tr.jqgroup, tr.jqfoot","#"+$.jgrid.jqID(b.p.id)+" tbody:first").remove(),$("tr.jqgrow:hidden","#"+$.jgrid.jqID(b.p.id)+" tbody:first").show()}else $(b).trigger("reloadGrid")})},groupingCalculations:{handler:function(a,b,c,d,e,f){var g={sum:function(){return parseFloat(b||0)+parseFloat(f[c]||0)},min:function(){return""===b?parseFloat(f[c]||0):Math.min(parseFloat(b),parseFloat(f[c]||0))},max:function(){return""===b?parseFloat(f[c]||0):Math.max(parseFloat(b),parseFloat(f[c]||0))},count:function(){return""===b&&(b=0),f.hasOwnProperty(c)?b+1:0},avg:function(){return g.sum()}};if(!g[a])throw"jqGrid Grouping No such method: "+a;var h=g[a]();if(null!=d)if("fixed"===e)h=h.toFixed(d);else{var i=Math.pow(10,d);h=Math.round(h*i)/i}return h}},setGroupHeaders:function(a){return a=$.extend({useColSpanStyle:!1,groupHeaders:[]},a||{}),this.each(function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p=this,q=0,r=p.p.colModel,s=r.length,t=p.grid.headers,u=$("table.ui-jqgrid-htable",p.grid.hDiv),v=u.children("thead").children("tr.ui-jqgrid-labels:last").addClass("jqg-second-row-header"),w=u.children("thead"),x=u.find(".jqg-first-row-header"),y=$.jgrid.styleUI[p.p.styleUI||"jQueryUI"].base;
p.p.groupHeader||(p.p.groupHeader=[]),p.p.groupHeader.push(a),void 0===x[0]?x=$("<tr>",{role:"row","aria-hidden":"true"}).addClass("jqg-first-row-header").css("height","auto"):x.empty();var z,A=function(a,b){var c,d=b.length;for(c=0;d>c;c++)if(b[c].startColumnName===a)return c;return-1};for($(p).prepend(w),d=$("<tr>",{role:"row"}).addClass("ui-jqgrid-labels jqg-third-row-header"),b=0;s>b;b++)if(f=t[b].el,g=$(f),c=r[b],h={height:"0px",width:t[b].width+"px",display:c.hidden?"none":""},$("<th>",{role:"gridcell"}).css(h).addClass("ui-first-th-"+p.p.direction).appendTo(x),f.style.width="",i=A(c.name,a.groupHeaders),i>=0){for(j=a.groupHeaders[i],k=j.numberOfColumns,l=j.titleText,n=j.className||"",m=0,i=0;k>i&&s>b+i;i++)r[b+i].hidden||m++;e=$("<th>").attr({role:"columnheader"}).addClass(y.headerBox+" ui-th-column-header ui-th-"+p.p.direction+" "+n).html(l),m>0&&e.attr("colspan",String(m)),p.p.headertitles&&e.attr("title",e.text()),0===m&&e.hide(),g.before(e),d.append(f),q=k-1}else 0===q?a.useColSpanStyle?g.attr("rowspan","2"):($("<th>",{role:"columnheader"}).addClass(y.headerBox+" ui-th-column-header ui-th-"+p.p.direction).css({display:c.hidden?"none":""}).insertBefore(g),d.append(f)):(d.append(f),q--);o=$(p).children("thead"),o.prepend(x),d.insertAfter(v),u.append(o),a.useColSpanStyle&&(u.find("span.ui-jqgrid-resize").each(function(){var a=$(this).parent();a.is(":visible")&&(this.style.cssText="height: "+a.height()+"px !important; cursor: col-resize;")}),u.find("div.ui-jqgrid-sortable").each(function(){var a=$(this),b=a.parent();b.is(":visible")&&b.is(":has(span.ui-jqgrid-resize)")&&a.css("top",(b.height()-a.outerHeight())/2-4+"px")})),z=o.find("tr.jqg-first-row-header"),$(p).bind("jqGridResizeStop.setGroupHeaders",function(a,b,c){z.find("th").eq(c).width(b)})})},destroyGroupHeader:function(a){return void 0===a&&(a=!0),this.each(function(){var b,c,d,e,f,g,h,i=this,j=i.grid,k=$("table.ui-jqgrid-htable thead",j.hDiv),l=i.p.colModel;if(j){for($(this).unbind(".setGroupHeaders"),b=$("<tr>",{role:"row"}).addClass("ui-jqgrid-labels"),e=j.headers,c=0,d=e.length;d>c;c++){h=l[c].hidden?"none":"",f=$(e[c].el).width(e[c].width).css("display",h);try{f.removeAttr("rowSpan")}catch(m){f.attr("rowSpan",1)}b.append(f),g=f.children("span.ui-jqgrid-resize"),g.length>0&&(g[0].style.height=""),f.children("div")[0].style.top=""}$(k).children("tr.ui-jqgrid-labels").remove(),$(k).prepend(b),a===!0&&$(i).jqGrid("setGridParam",{groupHeader:null})}})}}),$.jgrid=$.jgrid||{},$.extend($.jgrid,{saveState:function(a,b){if(b=$.extend({useStorage:!0,storageType:"localStorage",beforeSetItem:null,compression:!1,compressionModule:"LZString",compressionMethod:"compressToUTF16"},b||{}),a){var c,d,e="",f="",g=$("#"+a)[0];if(g.grid){if(d=$(g).data("inlineNav"),d&&g.p.inlineNav&&$(g).jqGrid("setGridParam",{_iN:d}),d=$(g).data("filterToolbar"),d&&g.p.filterToolbar&&$(g).jqGrid("setGridParam",{_fT:d}),e=$(g).jqGrid("jqGridExport",{exptype:"jsonstring",ident:"",root:""}),$(g.grid.bDiv).find(".ui-jqgrid-btable tr:gt(0)").each(function(a,b){f+=b.outerHTML}),$.isFunction(b.beforeSetItem)&&(c=b.beforeSetItem.call(g,e),null!=c&&(e=c)),b.compression&&b.compressionModule)try{c=window[b.compressionModule][b.compressionMethod](e),null!=c&&(e=c,f=window[b.compressionModule][b.compressionMethod](f))}catch(h){}if(b.useStorage&&$.jgrid.isLocalStorage())try{window[b.storageType].setItem("jqGrid"+g.p.id,e),window[b.storageType].setItem("jqGrid"+g.p.id+"_data",f)}catch(h){22===h.code&&alert("Local storage limit is over!")}return e}}},loadState:function(a,b,c){if(c=$.extend({useStorage:!0,storageType:"localStorage",clearAfterLoad:!1,beforeSetGrid:null,decompression:!1,decompressionModule:"LZString",decompressionMethod:"decompressFromUTF16"},c||{}),a){var d,e,f,g,h,i=$("#"+a)[0];if(i.grid&&$.jgrid.gridUnload(a),c.useStorage)try{b=window[c.storageType].getItem("jqGrid"+i.id),f=window[c.storageType].getItem("jqGrid"+i.id+"_data")}catch(j){}if(b){if(c.decompression&&c.decompressionModule)try{d=window[c.decompressionModule][c.decompressionMethod](b),null!=d&&(b=d,f=window[c.decompressionModule][c.decompressionMethod](f))}catch(j){}if(d=jqGridUtils.parse(b),d&&"object"===$.type(d)){$.isFunction(c.beforeSetGrid)&&(e=c.beforeSetGrid(d),e&&"object"===$.type(e)&&(d=e));var k=function(a){var b;return b=a},l={reccount:d.reccount,records:d.records,lastpage:d.lastpage,shrinkToFit:k(d.shrinkToFit),data:k(d.data),datatype:k(d.datatype),grouping:k(d.grouping)};d.shrinkToFit=!1,d.data=[],d.datatype="local",d.grouping=!1,d.navGrid=!1,d.inlineNav&&(g=k(d._iN),d._iN=null,delete d._iN),d.filterToolbar&&(h=k(d._fT),d._fT=null,delete d._fT);var m=$("#"+a).jqGrid(d);m.append(f),m.jqGrid("setGridParam",l),d.storeNavOptions&&m.jqGrid("navGrid",d.pager,d.navOptions,d.editOptions,d.addOptions,d.delOptions,d.searchOptions,d.viewOptions),d.inlineNav&&g&&(m.jqGrid("setGridParam",{inlineNav:!1}),m.jqGrid("inlineNav",d.pager,g)),d.filterToolbar&&h&&(m.jqGrid("setGridParam",{filterToolbar:!1}),m.jqGrid("filterToolbar",h)),m[0].updatepager(!0,!0),c.clearAfterLoad&&(window[c.storageType].removeItem("jqGrid"+i.id),window[c.storageType].removeItem("jqGrid"+i.id+"_data"))}else alert("can not convert to object")}}},setRegional:function(a,b){$.jgrid.saveState(a,{storageType:"sessionStorage"}),$.jgrid.loadState(a,null,{storageType:"sessionStorage",beforeSetGrid:function(a){return a.regional=b.regional,a.force_regional=!0,a}});var c=$("#"+a)[0],d=$(c).jqGrid("getGridParam","colModel"),e=-1,f=$.jgrid.getRegional(c,"nav");$.each(d,function(a){return this.formatter&&"actions"===this.formatter?(e=a,!1):void 0}),-1!==e&&f&&$("#"+a+" tbody tr").each(function(){var a=this.cells[e];$(a).find(".ui-inline-edit").attr("title",f.edittitle),$(a).find(".ui-inline-del").attr("title",f.deltitle),$(a).find(".ui-inline-save").attr("title",f.savetitle),$(a).find(".ui-inline-cancel").attr("title",f.canceltitle)});try{window.sessionStorage.removeItem("jqGrid"+c.id),window.sessionStorage.removeItem("jqGrid"+c.id+"_data")}catch(g){}},jqGridImport:function(a,b){b=$.extend({imptype:"xml",impstring:"",impurl:"",mtype:"GET",impData:{},xmlGrid:{config:"root>grid",data:"root>rows"},jsonGrid:{config:"grid",data:"data"},ajaxOptions:{}},b||{});var c=(0===a.indexOf("#")?"":"#")+$.jgrid.jqID(a),d=function(a,b){var d,e,f,g=$(b.xmlGrid.config,a)[0],h=$(b.xmlGrid.data,a)[0];if(jqGridUtils.xmlToJSON){d=jqGridUtils.xmlToJSON(g);for(f in d)d.hasOwnProperty(f)&&(e=d[f]);if(h){var i=d.grid.datatype;d.grid.datatype="xmlstring",d.grid.datastr=a,$(c).jqGrid(e).jqGrid("setGridParam",{datatype:i})}else setTimeout(function(){$(c).jqGrid(e)},0)}else alert("xml2json or parse are not present")},e=function(a,b){if(a&&"string"==typeof a){var d=jqGridUtils.parse(a),e=d[b.jsonGrid.config],f=d[b.jsonGrid.data];if(f){var g=e.datatype;e.datatype="jsonstring",e.datastr=f,$(c).jqGrid(e).jqGrid("setGridParam",{datatype:g})}else $(c).jqGrid(e)}};switch(b.imptype){case"xml":$.ajax($.extend({url:b.impurl,type:b.mtype,data:b.impData,dataType:"xml",complete:function(a,e){"success"===e&&(d(a.responseXML,b),$(c).triggerHandler("jqGridImportComplete",[a,b]),$.isFunction(b.importComplete)&&b.importComplete(a)),a=null}},b.ajaxOptions));break;case"xmlstring":if(b.impstring&&"string"==typeof b.impstring){var f=$.parseXML(b.impstring);f&&(d(f,b),$(c).triggerHandler("jqGridImportComplete",[f,b]),$.isFunction(b.importComplete)&&b.importComplete(f))}break;case"json":$.ajax($.extend({url:b.impurl,type:b.mtype,data:b.impData,dataType:"json",complete:function(a){try{e(a.responseText,b),$(c).triggerHandler("jqGridImportComplete",[a,b]),$.isFunction(b.importComplete)&&b.importComplete(a)}catch(d){}a=null}},b.ajaxOptions));break;case"jsonstring":b.impstring&&"string"==typeof b.impstring&&(e(b.impstring,b),$(c).triggerHandler("jqGridImportComplete",[b.impstring,b]),$.isFunction(b.importComplete)&&b.importComplete(b.impstring))}}}),$.jgrid.extend({jqGridExport:function(a){a=$.extend({exptype:"xmlstring",root:"grid",ident:"	",addOptions:{}},a||{});var b=null;return this.each(function(){if(this.grid){var c,d=$.extend(!0,{},$(this).jqGrid("getGridParam"),a.addOptions);if(d.rownumbers&&(d.colNames.splice(0,1),d.colModel.splice(0,1)),d.multiselect&&(d.colNames.splice(0,1),d.colModel.splice(0,1)),d.subGrid&&(d.colNames.splice(0,1),d.colModel.splice(0,1)),d.knv=null,d.treeGrid)for(c in d.treeReader)d.treeReader.hasOwnProperty(c)&&(d.colNames.splice(d.colNames.length-1),d.colModel.splice(d.colModel.length-1));switch(a.exptype){case"xmlstring":b="<"+a.root+">"+jqGridUtils.jsonToXML(d,{xmlDecl:""})+"</"+a.root+">";break;case"jsonstring":b=jqGridUtils.stringify(d),a.root&&(b="{"+a.root+":"+b+"}")}}}),b},excelExport:function(a){return a=$.extend({exptype:"remote",url:null,oper:"oper",tag:"excel",exportOptions:{}},a||{}),this.each(function(){if(this.grid){var b;if("remote"===a.exptype){var c=$.extend({},this.p.postData);c[a.oper]=a.tag;var d=jQuery.param(c);b=-1!==a.url.indexOf("?")?a.url+"&"+d:a.url+"?"+d,window.location=b}}})}}),$.jgrid.inlineEdit=$.jgrid.inlineEdit||{},$.jgrid.extend({editRow:function(a,b,c,d,e,f,g,h,i){var j={},k=$.makeArray(arguments).slice(1);return"object"===$.type(k[0])?j=k[0]:(void 0!==b&&(j.keys=b),$.isFunction(c)&&(j.oneditfunc=c),$.isFunction(d)&&(j.successfunc=d),void 0!==e&&(j.url=e),void 0!==f&&(j.extraparam=f),$.isFunction(g)&&(j.aftersavefunc=g),$.isFunction(h)&&(j.errorfunc=h),$.isFunction(i)&&(j.afterrestorefunc=i)),j=$.extend(!0,{keys:!1,oneditfunc:null,successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,mtype:"POST",focusField:!0},$.jgrid.inlineEdit,j),this.each(function(){var b,c,d,e,f,g,h=this,i=0,k=null,l={},m=$(this).jqGrid("getStyleUI",h.p.styleUI+".inlinedit","inputClass",!0);h.grid&&(e=$(h).jqGrid("getInd",a,!0),e!==!1&&(g=$.isFunction(j.beforeEditRow)?j.beforeEditRow.call(h,j,a):void 0,void 0===g&&(g=!0),g&&(d=$(e).attr("editable")||"0","0"!==d||$(e).hasClass("not-editable-row")||(f=h.p.colModel,$('td[role="gridcell"]',e).each(function(d){b=f[d].name;var e=h.p.treeGrid===!0&&b===h.p.ExpandColumn;if(e)c=$("span:first",this).html();else try{c=$.unformat.call(h,this,{rowId:a,colModel:f[d]},d)}catch(g){c=f[d].edittype&&"textarea"===f[d].edittype?$(this).text():$(this).html()}if("cb"!==b&&"subgrid"!==b&&"rn"!==b&&(h.p.autoencode&&(c=$.jgrid.htmlDecode(c)),l[b]=c,f[d].editable===!0)){null===k&&(k=d),e?$("span:first",this).html(""):$(this).html("");var j=$.extend({},f[d].editoptions||{},{id:a+"_"+b,name:b,rowId:a,oper:"edit"});f[d].edittype||(f[d].edittype="text"),("&nbsp;"===c||"&#160;"===c||1===c.length&&160===c.charCodeAt(0))&&(c="");var n=$.jgrid.createEl.call(h,f[d].edittype,j,c,!0,$.extend({},$.jgrid.ajaxOptions,h.p.ajaxSelectOptions||{}));$(n).addClass("editable inline-edit-cell"),$.inArray(f[d].edittype,["text","textarea","password","select"])>-1&&$(n).addClass(m),e?$("span:first",this).append(n):$(this).append(n),$.jgrid.bindEv.call(h,n,j),"select"===f[d].edittype&&void 0!==f[d].editoptions&&f[d].editoptions.multiple===!0&&void 0===f[d].editoptions.dataUrl&&$.jgrid.msie&&$(n).width($(n).width()),i++}}),i>0&&(l.id=a,h.p.savedRow.push(l),$(e).attr("editable","1"),j.focusField&&("number"==typeof j.focusField&&parseInt(j.focusField,10)<=f.length&&(k=j.focusField),setTimeout(function(){var a=$("td:eq("+k+") :input:visible",e).not(":disabled");a.length>0&&a.focus()},0)),j.keys===!0&&$(e).bind("keyup",function(b){if(27===b.keyCode){if($(h).jqGrid("restoreRow",a,j.afterrestorefunc),h.p.inlineNav)try{$(h).jqGrid("showAddEditButtons")}catch(c){}return!1}if(13===b.keyCode){var d=b.target;if("TEXTAREA"===d.tagName)return!0;if($(h).jqGrid("saveRow",a,j)&&h.p.inlineNav)try{$(h).jqGrid("showAddEditButtons")}catch(e){}return!1}}),$(h).triggerHandler("jqGridInlineEditRow",[a,j]),$.isFunction(j.oneditfunc)&&j.oneditfunc.call(h,a))))))})},saveRow:function(a,b,c,d,e,f,g){var h=$.makeArray(arguments).slice(1),i={},j=this[0];"object"===$.type(h[0])?i=h[0]:($.isFunction(b)&&(i.successfunc=b),void 0!==c&&(i.url=c),void 0!==d&&(i.extraparam=d),$.isFunction(e)&&(i.aftersavefunc=e),$.isFunction(f)&&(i.errorfunc=f),$.isFunction(g)&&(i.afterrestorefunc=g)),i=$.extend(!0,{successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,mtype:"POST",saveui:"enable",savetext:$.jgrid.getRegional(j,"defaults.savetext")},$.jgrid.inlineEdit,i);var k,l,m,n,o,p=!1,q={},r={},s={},t=!1,u=$.trim($(j).jqGrid("getStyleUI",j.p.styleUI+".common","error",!0));if(!j.grid)return p;if(o=$(j).jqGrid("getInd",a,!0),o===!1)return p;var v=$.jgrid.getRegional(this,"errors"),w=$.jgrid.getRegional(this,"edit"),x=$.isFunction(i.beforeSaveRow)?i.beforeSaveRow.call(j,i,a):void 0;if(void 0===x&&(x=!0),x){if(l=$(o).attr("editable"),i.url=i.url||j.p.editurl,"1"===l){var y;if($('td[role="gridcell"]',o).each(function(a){if(y=j.p.colModel[a],k=y.name,"cb"!==k&&"subgrid"!==k&&y.editable===!0&&"rn"!==k&&!$(this).hasClass("not-editable-cell")){switch(y.edittype){case"checkbox":var b=["Yes","No"];y.editoptions&&(b=y.editoptions.value.split(":")),q[k]=$("input",this).is(":checked")?b[0]:b[1];break;case"text":case"password":case"textarea":case"button":q[k]=$("input, textarea",this).val();break;case"select":if(y.editoptions.multiple){var c=$("select",this),d=[];q[k]=$(c).val(),q[k]=q[k]?q[k].join(","):"",$("select option:selected",this).each(function(a,b){d[a]=$(b).text()}),r[k]=d.join(",")}else q[k]=$("select option:selected",this).val(),r[k]=$("select option:selected",this).text();y.formatter&&"select"===y.formatter&&(r={});break;case"custom":try{if(!y.editoptions||!$.isFunction(y.editoptions.custom_value))throw"e1";if(q[k]=y.editoptions.custom_value.call(j,$(".customelement",this),"get"),void 0===q[k])throw"e2"}catch(e){"e1"===e?$.jgrid.info_dialog(v.errcap,"function 'custom_value' "+w.msg.nodefined,w.bClose,{styleUI:j.p.styleUI}):$.jgrid.info_dialog(v.errcap,e.message,w.bClose,{styleUI:j.p.styleUI})}}if(n=$.jgrid.checkValues.call(j,q[k],a),n[0]===!1)return!1;j.p.autoencode&&(q[k]=$.jgrid.htmlEncode(q[k])),"clientArray"!==i.url&&y.editoptions&&y.editoptions.NullIfEmpty===!0&&""===q[k]&&(s[k]="null",t=!0)}}),n[0]===!1){try{var z=$(j).jqGrid("getGridRowById",a),A=$.jgrid.findPos(z);$.jgrid.info_dialog(v.errcap,n[1],w.bClose,{left:A[0],top:A[1]+$(z).outerHeight(),styleUI:j.p.styleUI})}catch(B){alert(n[1])}return p}var C,D=j.p.prmNames,E=a;if(C=j.p.keyName===!1?D.id:j.p.keyName,q){if(q[D.oper]=D.editoper,void 0===q[C]||""===q[C])q[C]=a;else if(o.id!==j.p.idPrefix+q[C]){var F=$.jgrid.stripPref(j.p.idPrefix,a);if(void 0!==j.p._index[F]&&(j.p._index[q[C]]=j.p._index[F],delete j.p._index[F]),a=j.p.idPrefix+q[C],$(o).attr("id",a),j.p.selrow===E&&(j.p.selrow=a),$.isArray(j.p.selarrrow)){var G=$.inArray(E,j.p.selarrrow);G>=0&&(j.p.selarrrow[G]=a)}if(j.p.multiselect){var H="jqg_"+j.p.id+"_"+a;$("input.cbox",o).attr("id",H).attr("name",H)}}void 0===j.p.inlineData&&(j.p.inlineData={}),q=$.extend({},q,j.p.inlineData,i.extraparam)}if("clientArray"===i.url){q=$.extend({},q,r),j.p.autoencode&&$.each(q,function(a,b){q[a]=$.jgrid.htmlDecode(b)});var I,J=$(j).jqGrid("setRowData",a,q);for($(o).attr("editable","0"),I=0;I<j.p.savedRow.length;I++)if(String(j.p.savedRow[I].id)===String(E)){m=I;break}m>=0&&j.p.savedRow.splice(m,1),$(j).triggerHandler("jqGridInlineAfterSaveRow",[a,J,q,i]),$.isFunction(i.aftersavefunc)&&i.aftersavefunc.call(j,a,J,q,i),p=!0,$(o).removeClass("jqgrid-new-row").unbind("keydown")}else $(j).jqGrid("progressBar",{method:"show",loadtype:i.saveui,htmlcontent:i.savetext}),s=$.extend({},q,s),s[C]=$.jgrid.stripPref(j.p.idPrefix,s[C]),$.ajax($.extend({url:i.url,data:$.isFunction(j.p.serializeRowData)?j.p.serializeRowData.call(j,s):s,type:i.mtype,async:!1,complete:function(b,c){if($(j).jqGrid("progressBar",{method:"hide",loadtype:i.saveui,htmlcontent:i.savetext}),"success"===c){var d,e,f=!0;if(d=$(j).triggerHandler("jqGridInlineSuccessSaveRow",[b,a,i]),$.isArray(d)||(d=[!0,s]),d[0]&&$.isFunction(i.successfunc)&&(d=i.successfunc.call(j,b)),$.isArray(d)?(f=d[0],q=d[1]||q):f=d,f===!0){for(j.p.autoencode&&$.each(q,function(a,b){q[a]=$.jgrid.htmlDecode(b)}),t&&$.each(q,function(a){"null"===q[a]&&(q[a]="")}),q=$.extend({},q,r),$(j).jqGrid("setRowData",a,q),$(o).attr("editable","0"),e=0;e<j.p.savedRow.length;e++)if(String(j.p.savedRow[e].id)===String(a)){m=e;break}m>=0&&j.p.savedRow.splice(m,1),$(j).triggerHandler("jqGridInlineAfterSaveRow",[a,b,q,i]),$.isFunction(i.aftersavefunc)&&i.aftersavefunc.call(j,a,b,q,i),p=!0,$(o).removeClass("jqgrid-new-row").unbind("keydown")}else $(j).triggerHandler("jqGridInlineErrorSaveRow",[a,b,c,null,i]),$.isFunction(i.errorfunc)&&i.errorfunc.call(j,a,b,c,null),i.restoreAfterError===!0&&$(j).jqGrid("restoreRow",a,i.afterrestorefunc)}},error:function(b,c,d){if($("#lui_"+$.jgrid.jqID(j.p.id)).hide(),$(j).triggerHandler("jqGridInlineErrorSaveRow",[a,b,c,d,i]),$.isFunction(i.errorfunc))i.errorfunc.call(j,a,b,c,d);else{var e=b.responseText||b.statusText;try{$.jgrid.info_dialog(v.errcap,'<div class="'+u+'">'+e+"</div>",w.bClose,{buttonalign:"right",styleUI:j.p.styleUI})}catch(f){alert(e)}}i.restoreAfterError===!0&&$(j).jqGrid("restoreRow",a,i.afterrestorefunc)}},$.jgrid.ajaxOptions,j.p.ajaxRowOptions||{}))}return p}},restoreRow:function(a,b){var c=$.makeArray(arguments).slice(1),d={};return"object"===$.type(c[0])?d=c[0]:$.isFunction(b)&&(d.afterrestorefunc=b),d=$.extend(!0,{},$.jgrid.inlineEdit,d),this.each(function(){var b,c,e=this,f=-1,g={};if(e.grid&&(b=$(e).jqGrid("getInd",a,!0),b!==!1)){var h=$.isFunction(d.beforeCancelRow)?d.beforeCancelRow.call(e,d,a):void 0;if(void 0===h&&(h=!0),h){for(c=0;c<e.p.savedRow.length;c++)if(String(e.p.savedRow[c].id)===String(a)){f=c;break}if(f>=0){if($.isFunction($.fn.datepicker))try{$("input.hasDatepicker","#"+$.jgrid.jqID(b.id)).datepicker("hide")}catch(i){}$.each(e.p.colModel,function(){this.editable===!0&&e.p.savedRow[f].hasOwnProperty(this.name)&&(g[this.name]=e.p.savedRow[f][this.name])}),$(e).jqGrid("setRowData",a,g),$(b).attr("editable","0").unbind("keydown"),e.p.savedRow.splice(f,1),$("#"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(e.p.id)).hasClass("jqgrid-new-row")&&setTimeout(function(){$(e).jqGrid("delRowData",a),$(e).jqGrid("showAddEditButtons")},0)}$(e).triggerHandler("jqGridInlineAfterRestoreRow",[a]),$.isFunction(d.afterrestorefunc)&&d.afterrestorefunc.call(e,a)}}})},addRow:function(a){return a=$.extend(!0,{rowID:null,initdata:{},position:"first",useDefValues:!0,useFormatter:!1,addRowParams:{extraparam:{}}},a||{}),this.each(function(){if(this.grid){var b=this,c=$.isFunction(a.beforeAddRow)?a.beforeAddRow.call(b,a.addRowParams):void 0;if(void 0===c&&(c=!0),c)if(a.rowID=$.isFunction(a.rowID)?a.rowID.call(b,a):null!=a.rowID?a.rowID:$.jgrid.randId(),a.useDefValues===!0&&$(b.p.colModel).each(function(){if(this.editoptions&&this.editoptions.defaultValue){var c=this.editoptions.defaultValue,d=$.isFunction(c)?c.call(b):c;a.initdata[this.name]=d}}),$(b).jqGrid("addRowData",a.rowID,a.initdata,a.position),a.rowID=b.p.idPrefix+a.rowID,$("#"+$.jgrid.jqID(a.rowID),"#"+$.jgrid.jqID(b.p.id)).addClass("jqgrid-new-row"),a.useFormatter)$("#"+$.jgrid.jqID(a.rowID)+" .ui-inline-edit","#"+$.jgrid.jqID(b.p.id)).click();else{var d=b.p.prmNames,e=d.oper;a.addRowParams.extraparam[e]=d.addoper,$(b).jqGrid("editRow",a.rowID,a.addRowParams),$(b).jqGrid("setSelection",a.rowID)}}})},inlineNav:function(a,b){var c=this[0],d=$.jgrid.getRegional(c,"nav"),e=$.jgrid.styleUI[c.p.styleUI].inlinedit;return b=$.extend(!0,{edit:!0,editicon:e.icon_edit_nav,add:!0,addicon:e.icon_add_nav,save:!0,saveicon:e.icon_save_nav,cancel:!0,cancelicon:e.icon_cancel_nav,addParams:{addRowParams:{extraparam:{}}},editParams:{},restoreAfterSelect:!0},d,b||{}),this.each(function(){if(this.grid&&!this.p.inlineNav){var e=$.jgrid.jqID(c.p.id),f=$.trim($(c).jqGrid("getStyleUI",c.p.styleUI+".common","disabled",!0));if(c.p.navGrid||$(c).jqGrid("navGrid",a,{refresh:!1,edit:!1,add:!1,del:!1,search:!1,view:!1}),$(c).data("inlineNav")||$(c).data("inlineNav",b),c.p.force_regional&&(b=$.extend(b,d)),c.p.inlineNav=!0,b.addParams.useFormatter===!0){var g,h=c.p.colModel;for(g=0;g<h.length;g++)if(h[g].formatter&&"actions"===h[g].formatter){if(h[g].formatoptions){var i={keys:!1,onEdit:null,onSuccess:null,afterSave:null,onError:null,afterRestore:null,extraparam:{},url:null},j=$.extend(i,h[g].formatoptions);b.addParams.addRowParams={keys:j.keys,oneditfunc:j.onEdit,successfunc:j.onSuccess,url:j.url,extraparam:j.extraparam,aftersavefunc:j.afterSave,errorfunc:j.onError,afterrestorefunc:j.afterRestore}}break}}b.add&&$(c).jqGrid("navButtonAdd",a,{caption:b.addtext,title:b.addtitle,buttonicon:b.addicon,id:c.p.id+"_iladd",onClickButton:function(){$(c).jqGrid("addRow",b.addParams),b.addParams.useFormatter||($("#"+e+"_ilsave").removeClass(f),$("#"+e+"_ilcancel").removeClass(f),$("#"+e+"_iladd").addClass(f),$("#"+e+"_iledit").addClass(f))}}),b.edit&&$(c).jqGrid("navButtonAdd",a,{caption:b.edittext,title:b.edittitle,buttonicon:b.editicon,id:c.p.id+"_iledit",onClickButton:function(){var a=$(c).jqGrid("getGridParam","selrow");a?($(c).jqGrid("editRow",a,b.editParams),$("#"+e+"_ilsave").removeClass(f),$("#"+e+"_ilcancel").removeClass(f),$("#"+e+"_iladd").addClass(f),$("#"+e+"_iledit").addClass(f)):($.jgrid.viewModal("#alertmod_"+e,{gbox:"#gbox_"+e,jqm:!0}),$("#jqg_alrt").focus())}}),b.save&&($(c).jqGrid("navButtonAdd",a,{caption:b.savetext||"",title:b.savetitle||"Save row",buttonicon:b.saveicon,id:c.p.id+"_ilsave",onClickButton:function(){var a=c.p.savedRow[0].id;if(a){var d=c.p.prmNames,f=d.oper,g=b.editParams;$("#"+$.jgrid.jqID(a),"#"+e).hasClass("jqgrid-new-row")?(b.addParams.addRowParams.extraparam[f]=d.addoper,g=b.addParams.addRowParams):(b.editParams.extraparam||(b.editParams.extraparam={}),b.editParams.extraparam[f]=d.editoper),$(c).jqGrid("saveRow",a,g)&&$(c).jqGrid("showAddEditButtons")}else $.jgrid.viewModal("#alertmod_"+e,{gbox:"#gbox_"+e,jqm:!0}),$("#jqg_alrt").focus()}}),$("#"+e+"_ilsave").addClass(f)),b.cancel&&($(c).jqGrid("navButtonAdd",a,{caption:b.canceltext||"",title:b.canceltitle||"Cancel row editing",buttonicon:b.cancelicon,id:c.p.id+"_ilcancel",onClickButton:function(){var a=c.p.savedRow[0].id,d=b.editParams;a?($("#"+$.jgrid.jqID(a),"#"+e).hasClass("jqgrid-new-row")&&(d=b.addParams.addRowParams),$(c).jqGrid("restoreRow",a,d),$(c).jqGrid("showAddEditButtons")):($.jgrid.viewModal("#alertmod",{gbox:"#gbox_"+e,jqm:!0}),$("#jqg_alrt").focus())}}),$("#"+e+"_ilcancel").addClass(f)),b.restoreAfterSelect===!0&&$(c).bind("jqGridBeforeSelectRow.inlineNav",function(a,d){c.p.savedRow.length>0&&c.p.inlineNav===!0&&d!==c.p.selrow&&null!==c.p.selrow&&(c.p.selrow===b.addParams.rowID?$(c).jqGrid("delRowData",c.p.selrow):$(c).jqGrid("restoreRow",c.p.selrow,b.editParams),$(c).jqGrid("showAddEditButtons"))})}})},showAddEditButtons:function(){return this.each(function(){if(this.grid){var a=$.jgrid.jqID(this.p.id),b=$.trim($(this).jqGrid("getStyleUI",this.p.styleUI+".common","disabled",!0));$("#"+a+"_ilsave").addClass(b),$("#"+a+"_ilcancel").addClass(b),$("#"+a+"_iladd").removeClass(b),$("#"+a+"_iledit").removeClass(b)}})}}),$.jgrid.msie&&8===$.jgrid.msiever()&&($.expr[":"].hidden=function(a){return 0===a.offsetWidth||0===a.offsetHeight||"none"===a.style.display}),$.jgrid._multiselect=!1,$.ui&&$.ui.multiselect){if($.ui.multiselect.prototype._setSelected){var setSelected=$.ui.multiselect.prototype._setSelected;$.ui.multiselect.prototype._setSelected=function(a,b){var c=setSelected.call(this,a,b);if(b&&this.selectedList){var d=this.element;this.selectedList.find("li").each(function(){$(this).data("optionLink")&&$(this).data("optionLink").remove().appendTo(d)})}return c}}$.ui.multiselect.prototype.destroy&&($.ui.multiselect.prototype.destroy=function(){this.element.show(),this.container.remove(),void 0===$.Widget?$.widget.prototype.destroy.apply(this,arguments):$.Widget.prototype.destroy.apply(this,arguments)}),$.jgrid._multiselect=!0}$.jgrid.extend({sortableColumns:function(a){return this.each(function(){function b(){c.p.disableClick=!0}var c=this,d=$.jgrid.jqID(c.p.id),e={tolerance:"pointer",axis:"x",scrollSensitivity:"1",items:">th:not(:has(#jqgh_"+d+"_cb,#jqgh_"+d+"_rn,#jqgh_"+d+"_subgrid),:hidden)",placeholder:{element:function(a){var b=$(document.createElement(a[0].nodeName)).addClass(a[0].className+" ui-sortable-placeholder ui-state-highlight").removeClass("ui-sortable-helper")[0];return b},update:function(a,b){b.height(a.currentItem.innerHeight()-parseInt(a.currentItem.css("paddingTop")||0,10)-parseInt(a.currentItem.css("paddingBottom")||0,10)),b.width(a.currentItem.innerWidth()-parseInt(a.currentItem.css("paddingLeft")||0,10)-parseInt(a.currentItem.css("paddingRight")||0,10))}},update:function(a,b){var d=$(b.item).parent(),e=$(">th",d),f=c.p.colModel,g={},h=c.p.id+"_";$.each(f,function(a){g[this.name]=a});var i=[];e.each(function(){var a=$(">div",this).get(0).id.replace(/^jqgh_/,"").replace(h,"");g.hasOwnProperty(a)&&i.push(g[a])}),$(c).jqGrid("remapColumns",i,!0,!0),$.isFunction(c.p.sortable.update)&&c.p.sortable.update(i),setTimeout(function(){c.p.disableClick=!1},50)}};if(c.p.sortable.options?$.extend(e,c.p.sortable.options):$.isFunction(c.p.sortable)&&(c.p.sortable={update:c.p.sortable}),e.start){var f=e.start;e.start=function(a,c){b(),f.call(this,a,c)}}else e.start=b;c.p.sortable.exclude&&(e.items+=":not("+c.p.sortable.exclude+")");var g=a.sortable(e),h=g.data("sortable")||g.data("uiSortable");null!=h&&(h.data("sortable").floating=!0)})},columnChooser:function(a){function b(a,b,c){var d,e;return b>=0?(d=a.slice(),e=d.splice(b,Math.max(a.length-b,b)),b>a.length&&(b=a.length),d[b]=c,d.concat(e)):a}function c(a,b){a&&("string"==typeof a?$.fn[a]&&$.fn[a].apply(b,$.makeArray(arguments).slice(2)):$.isFunction(a)&&a.apply(b,$.makeArray(arguments).slice(2)))}var d,e,f,g,h,i,j,k=this,l={},m=[],n=k.jqGrid("getGridParam","colModel"),o=k.jqGrid("getGridParam","colNames"),p=function(a){return $.ui.multiselect.prototype&&a.data($.ui.multiselect.prototype.widgetFullName||$.ui.multiselect.prototype.widgetName)||a.data("ui-multiselect")||a.data("multiselect")},q=$.jgrid.getRegional(this[0],"col");if(!$("#colchooser_"+$.jgrid.jqID(k[0].p.id)).length){if(d=$('<div id="colchooser_'+k[0].p.id+'" style="position:relative;overflow:hidden"><div><select multiple="multiple"></select></div></div>'),e=$("select",d),a=$.extend({width:400,height:240,classname:null,done:function(a){a&&k.jqGrid("remapColumns",a,!0)},msel:"multiselect",dlog:"dialog",dialog_opts:{minWidth:470,dialogClass:"ui-jqdialog"},dlog_opts:function(a){var b={};return b[a.bSubmit]=function(){a.apply_perm(),a.cleanup(!1)},b[a.bCancel]=function(){a.cleanup(!0)},$.extend(!0,{buttons:b,close:function(){a.cleanup(!0)},modal:a.modal||!1,resizable:a.resizable||!0,width:a.width+70,resize:function(){var a=p(e),b=a.container.closest(".ui-dialog-content");b.length>0&&"object"==typeof b[0].style?b[0].style.width="":b.css("width",""),a.selectedList.height(Math.max(a.selectedContainer.height()-a.selectedActions.outerHeight()-1,1)),a.availableList.height(Math.max(a.availableContainer.height()-a.availableActions.outerHeight()-1,1))}},a.dialog_opts||{})},apply_perm:function(){var c=[];$("option",e).each(function(){$(this).is("[selected]")?k.jqGrid("showCol",n[this.value].name):k.jqGrid("hideCol",n[this.value].name)}),$("option[selected]",e).each(function(){c.push(parseInt(this.value,10))}),$.each(c,function(){delete l[n[parseInt(this,10)].name]}),$.each(l,function(){var a=parseInt(this,10);c=b(c,a,a)}),a.done&&a.done.call(k,c),k.jqGrid("setGridWidth",k[0].p.width,k[0].p.shrinkToFit)},cleanup:function(b){c(a.dlog,d,"destroy"),c(a.msel,e,"destroy"),d.remove(),b&&a.done&&a.done.call(k)},msel_opts:{}},q,a||{}),$.ui&&$.ui.multiselect&&$.ui.multiselect.defaults){if(!$.jgrid._multiselect)return void alert("Multiselect plugin loaded after jqGrid. Please load the plugin before the jqGrid!");a.msel_opts=$.extend($.ui.multiselect.defaults,a.msel_opts)}a.caption&&d.attr("title",a.caption),a.classname&&(d.addClass(a.classname),e.addClass(a.classname)),a.width&&($(">div",d).css({width:a.width,margin:"0 auto"}),e.css("width",a.width)),a.height&&($(">div",d).css("height",a.height),e.css("height",a.height-10)),e.empty(),$.each(n,function(a){return l[this.name]=a,this.hidedlg?void(this.hidden||m.push(a)):void e.append("<option value='"+a+"' "+(this.hidden?"":"selected='selected'")+">"+$.jgrid.stripHtml(o[a])+"</option>")}),f=$.isFunction(a.dlog_opts)?a.dlog_opts.call(k,a):a.dlog_opts,c(a.dlog,d,f),g=$.isFunction(a.msel_opts)?a.msel_opts.call(k,a):a.msel_opts,c(a.msel,e,g),h=$("#colchooser_"+$.jgrid.jqID(k[0].p.id)),h.css({margin:"auto"}),h.find(">div").css({width:"100%",height:"100%",margin:"auto"}),i=p(e),i.container.css({width:"100%",height:"100%",margin:"auto"}),i.selectedContainer.css({width:100*i.options.dividerLocation+"%",height:"100%",margin:"auto",boxSizing:"border-box"}),i.availableContainer.css({width:100-100*i.options.dividerLocation+"%",height:"100%",margin:"auto",boxSizing:"border-box"}),i.selectedList.css("height","auto"),i.availableList.css("height","auto"),j=Math.max(i.selectedList.height(),i.availableList.height()),j=Math.min(j,$(window).height()),i.selectedList.css("height",j),i.availableList.css("height",j)}},sortableRows:function(a){return this.each(function(){var b=this;b.grid&&(b.p.treeGrid||$.fn.sortable&&(a=$.extend({cursor:"move",axis:"y",items:" > .jqgrow"},a||{}),a.start&&$.isFunction(a.start)?(a._start_=a.start,delete a.start):a._start_=!1,a.update&&$.isFunction(a.update)?(a._update_=a.update,delete a.update):a._update_=!1,a.start=function(c,d){if($(d.item).css("border-width","0"),$("td",d.item).each(function(a){this.style.width=b.grid.cols[a].style.width}),b.p.subGrid){var e=$(d.item).attr("id");try{$(b).jqGrid("collapseSubGridRow",e)}catch(f){}}a._start_&&a._start_.apply(this,[c,d])},a.update=function(c,d){$(d.item).css("border-width",""),b.p.rownumbers===!0&&$("td.jqgrid-rownum",b.rows).each(function(a){$(this).html(a+1+(parseInt(b.p.page,10)-1)*parseInt(b.p.rowNum,10))}),a._update_&&a._update_.apply(this,[c,d])},$("tbody:first",b).sortable(a),$("tbody:first > .jqgrow",b).disableSelection()))})},gridDnD:function(a){return this.each(function(){function b(){var a=$.data(e,"dnd");$("tr.jqgrow:not(.ui-draggable)",e).draggable($.isFunction(a.drag)?a.drag.call($(e),a):a.drag)}var c,d,e=this;if(e.grid&&!e.p.treeGrid&&$.fn.draggable&&$.fn.droppable){var f="<table id='jqgrid_dnd' class='ui-jqgrid-dnd'></table>";if(void 0===$("#jqgrid_dnd")[0]&&$("body").append(f),"string"==typeof a&&"updateDnD"===a&&e.p.jqgdnd===!0)return void b();if(a=$.extend({drag:function(a){return $.extend({start:function(b,c){var d,f;if(e.p.subGrid){f=$(c.helper).attr("id");try{$(e).jqGrid("collapseSubGridRow",f)}catch(g){}}for(d=0;d<$.data(e,"dnd").connectWith.length;d++)0===$($.data(e,"dnd").connectWith[d]).jqGrid("getGridParam","reccount")&&$($.data(e,"dnd").connectWith[d]).jqGrid("addRowData","jqg_empty_row",{});c.helper.addClass("ui-state-highlight"),$("td",c.helper).each(function(a){this.style.width=e.grid.headers[a].width+"px"}),a.onstart&&$.isFunction(a.onstart)&&a.onstart.call($(e),b,c)},stop:function(b,c){var d,f;for(c.helper.dropped&&!a.dragcopy&&(f=$(c.helper).attr("id"),void 0===f&&(f=$(this).attr("id")),$(e).jqGrid("delRowData",f)),d=0;d<$.data(e,"dnd").connectWith.length;d++)$($.data(e,"dnd").connectWith[d]).jqGrid("delRowData","jqg_empty_row");a.onstop&&$.isFunction(a.onstop)&&a.onstop.call($(e),b,c)}},a.drag_opts||{})},drop:function(a){return $.extend({accept:function(a){if(!$(a).hasClass("jqgrow"))return a;var b=$(a).closest("table.ui-jqgrid-btable");if(b.length>0&&void 0!==$.data(b[0],"dnd")){var c=$.data(b[0],"dnd").connectWith;return-1!==$.inArray("#"+$.jgrid.jqID(this.id),c)?!0:!1}return!1},drop:function(b,c){if($(c.draggable).hasClass("jqgrow")){var d=$(c.draggable).attr("id"),f=c.draggable.parent().parent().jqGrid("getRowData",d);if(!a.dropbyname){var g,h,i=0,j={},k=$("#"+$.jgrid.jqID(this.id)).jqGrid("getGridParam","colModel");
try{for(h in f)f.hasOwnProperty(h)&&(g=k[i].name,"cb"!==g&&"rn"!==g&&"subgrid"!==g&&f.hasOwnProperty(h)&&k[i]&&(j[g]=f[h]),i++);f=j}catch(l){}}if(c.helper.dropped=!0,a.beforedrop&&$.isFunction(a.beforedrop)){var m=a.beforedrop.call(this,b,c,f,$("#"+$.jgrid.jqID(e.p.id)),$(this));void 0!==m&&null!==m&&"object"==typeof m&&(f=m)}if(c.helper.dropped){var n;a.autoid&&($.isFunction(a.autoid)?n=a.autoid.call(this,f):(n=Math.ceil(1e3*Math.random()),n=a.autoidprefix+n)),$("#"+$.jgrid.jqID(this.id)).jqGrid("addRowData",n,f,a.droppos)}a.ondrop&&$.isFunction(a.ondrop)&&a.ondrop.call(this,b,c,f)}}},a.drop_opts||{})},onstart:null,onstop:null,beforedrop:null,ondrop:null,drop_opts:{activeClass:"ui-state-active",hoverClass:"ui-state-hover"},drag_opts:{revert:"invalid",helper:"clone",cursor:"move",appendTo:"#jqgrid_dnd",zIndex:5e3},dragcopy:!1,dropbyname:!1,droppos:"first",autoid:!0,autoidprefix:"dnd_"},a||{}),a.connectWith)for(a.connectWith=a.connectWith.split(","),a.connectWith=$.map(a.connectWith,function(a){return $.trim(a)}),$.data(e,"dnd",a),0===e.p.reccount||e.p.jqgdnd||b(),e.p.jqgdnd=!0,c=0;c<a.connectWith.length;c++)d=a.connectWith[c],$(d).droppable($.isFunction(a.drop)?a.drop.call($(e),a):a.drop)}})},gridResize:function(opts){return this.each(function(){var $t=this,gID=$.jgrid.jqID($t.p.id),req;if($t.grid&&$.fn.resizable){if(opts=$.extend({},opts||{}),opts.alsoResize?(opts._alsoResize_=opts.alsoResize,delete opts.alsoResize):opts._alsoResize_=!1,opts.stop&&$.isFunction(opts.stop)?(opts._stop_=opts.stop,delete opts.stop):opts._stop_=!1,opts.stop=function(a,b){$($t).jqGrid("setGridParam",{height:$("#gview_"+gID+" .ui-jqgrid-bdiv").height()}),$($t).jqGrid("setGridWidth",b.size.width,opts.shrinkToFit),opts._stop_&&opts._stop_.call($t,a,b),$t.p.caption&&$("#gbox_"+gID).css({height:"auto"}),$t.p.frozenColumns&&(req&&clearTimeout(req),req=setTimeout(function(){req&&clearTimeout(req),$("#"+gID).jqGrid("destroyFrozenColumns"),$("#"+gID).jqGrid("setFrozenColumns")}))},opts._alsoResize_){var optstest="{'#gview_"+gID+" .ui-jqgrid-bdiv':true,'"+opts._alsoResize_+"':true}";opts.alsoResize=eval("("+optstest+")")}else opts.alsoResize=$(".ui-jqgrid-bdiv","#gview_"+gID);delete opts._alsoResize_,$("#gbox_"+gID).resizable(opts)}})}}),$.assocArraySize=function(a){var b,c=0;for(b in a)a.hasOwnProperty(b)&&c++;return c},$.jgrid.extend({pivotSetup:function(a,b){var c=[],d=[],e=[],f=[],g=[],h={grouping:!0,groupingView:{groupField:[],groupSummary:[],groupSummaryPos:[]}},i=[],j=$.extend({rowTotals:!1,rowTotalsText:"Total",colTotals:!1,groupSummary:!0,groupSummaryPos:"header",frozenStaticCols:!1},b||{});return this.each(function(){function b(a,b,c){var d;return d=_pivotfilter.call(a,b,c),d.length>0?d[0]:null}function k(a,b){var c,d=0,e=!0;for(c in a)if(a.hasOwnProperty(c)){if(a[c]!=this[d]){e=!1;break}if(d++,d>=this.length)break}return e&&(p=b),e}function l(a,b,c,d){var e;switch(a){case"sum":e=parseFloat(b||0)+parseFloat(d[c]||0);break;case"count":(""===b||null==b)&&(b=0),e=d.hasOwnProperty(c)?b+1:0;break;case"min":e=""===b||null==b?parseFloat(d[c]||0):Math.min(parseFloat(b),parseFloat(d[c]||0));break;case"max":e=""===b||null==b?parseFloat(d[c]||0):Math.max(parseFloat(b),parseFloat(d[c]||0))}return e}function m(a,b,c,d){var e,h,i,j,k=b.length,m="",n=[];for($.isArray(c)?(j=c.length,n=c):(j=1,n[0]=c),f=[],g=[],f.root=0,i=0;j>i;i++){var o,p=[];for(e=0;k>e;e++){if(null==c)h=$.trim(b[e].member)+"_"+b[e].aggregator,o=h,n[0]=b[e].label||b[e].aggregator+" "+$.trim(b[e].member);else{o=c[i].replace(/\s+/g,"");try{h=1===k?m+o:m+o+"_"+b[e].aggregator+"_"+String(e)}catch(q){}n[i]=c[i]}h=isNaN(parseInt(h,10))?h:h+" ",d[h]=p[h]=l(b[e].aggregator,d[h],b[e].member,a),1>=i&&"_r_Totals"!==o&&""===m&&(m=o)}f[h]=p,g[h]=n[i]}return d}function n(a){var b,d,e,f,g;for(e in a)if(a.hasOwnProperty(e)){if("object"!=typeof a[e]){if("level"===e){if(void 0===J[a.level]&&(J[a.level]="",a.level>0&&"_r_Totals"!==a.text&&(i[a.level-1]={useColSpanStyle:!1,groupHeaders:[]})),J[a.level]!==a.text&&a.children.length&&"_r_Totals"!==a.text&&a.level>0){i[a.level-1].groupHeaders.push({titleText:a.label,numberOfColumns:0});var h=i[a.level-1].groupHeaders.length-1,k=0===h?L:K+t;if(a.level-1===(j.rowTotals?1:0)&&h>0){for(var l=0,m=0;h>m;m++)l+=i[a.level-1].groupHeaders[m].numberOfColumns;l&&(k=l+r)}c[k]&&(i[a.level-1].groupHeaders[h].startColumnName=c[k].name,i[a.level-1].groupHeaders[h].numberOfColumns=c.length-k),K=c.length}J[a.level]=a.text}if(a.level===s&&"level"===e&&s>0)if(t>1){var o=1;for(b in a.fields)a.fields.hasOwnProperty(b)&&(1===o&&i[s-1].groupHeaders.push({startColumnName:b,numberOfColumns:1,titleText:a.label||a.text}),o++);i[s-1].groupHeaders[i[s-1].groupHeaders.length-1].numberOfColumns=o-1}else i.splice(s-1,1)}if(null!=a[e]&&"object"==typeof a[e]&&n(a[e]),"level"===e&&a.level>0&&a.level===(0===s?a.level:s)){d=0;for(b in a.fields)if(a.fields.hasOwnProperty(b)){g={};for(f in j.aggregates[d])if(j.aggregates[d].hasOwnProperty(f))switch(f){case"member":case"label":case"aggregator":break;default:g[f]=j.aggregates[d][f]}t>1?(g.name=b,g.label=j.aggregates[d].label||a.label):(g.name=a.text,g.label="_r_Totals"===a.text?j.rowTotalsText:a.label),c.push(g),d++}}}}var o,p,q,r,s,t,u,v,w=a.length,x=0;if(j.rowTotals&&j.yDimension.length>0){var y=j.yDimension[0].dataName;j.yDimension.splice(0,0,{dataName:y}),j.yDimension[0].converter=function(){return"_r_Totals"}}if(r=$.isArray(j.xDimension)?j.xDimension.length:0,s=j.yDimension.length,t=$.isArray(j.aggregates)?j.aggregates.length:0,0===r||0===t)throw"xDimension or aggregates optiona are not set!";var z;for(q=0;r>q;q++)z={name:j.xDimension[q].dataName,frozen:j.frozenStaticCols},null==j.xDimension[q].isGroupField&&(j.xDimension[q].isGroupField=!0),z=$.extend(!0,z,j.xDimension[q]),c.push(z);for(var A=r-1,B={};w>x;){o=a[x];var C=[],D=[];u={},q=0;do C[q]=$.trim(o[j.xDimension[q].dataName]),u[j.xDimension[q].dataName]=C[q],q++;while(r>q);var E=0;if(p=-1,v=b(d,k,C)){if(p>=0){if(E=0,s>=1){for(E=0;s>E;E++)D[E]=$.trim(o[j.yDimension[E].dataName]),j.yDimension[E].converter&&$.isFunction(j.yDimension[E].converter)&&(D[E]=j.yDimension[E].converter.call(this,D[E],C,D));v=m(o,j.aggregates,D,v)}else 0===s&&(v=m(o,j.aggregates,null,v));d[p]=v}}else{if(E=0,s>=1){for(E=0;s>E;E++)D[E]=$.trim(o[j.yDimension[E].dataName]),j.yDimension[E].converter&&$.isFunction(j.yDimension[E].converter)&&(D[E]=j.yDimension[E].converter.call(this,D[E],C,D));u=m(o,j.aggregates,D,u)}else 0===s&&(u=m(o,j.aggregates,null,u));d.push(u)}var F,G=0,H=null,I=null;for(F in f)if(f.hasOwnProperty(F)){if(0===G)B.children&&void 0!==B.children||(B={text:F,level:0,children:[],label:F}),H=B.children;else{for(I=null,q=0;q<H.length;q++)if(H[q].text===F){I=H[q];break}I?H=I.children:(H.push({children:[],text:F,level:G,fields:f[F],label:g[F]}),H=H[H.length-1].children)}G++}x++}var J=[],K=c.length,L=K;s>0&&(i[s-1]={useColSpanStyle:!1,groupHeaders:[]}),n(B);var M;if(j.colTotals)for(var N=d.length;N--;)for(q=r;q<c.length;q++)M=c[q].name,e[M]?e[M]+=parseFloat(d[N][M]||0):e[M]=parseFloat(d[N][M]||0);if(A>0)for(q=0;A>q;q++)c[q].isGroupField&&(h.groupingView.groupField.push(c[q].name),h.groupingView.groupSummary.push(j.groupSummary),h.groupingView.groupSummaryPos.push(j.groupSummaryPos));else h.grouping=!1;h.sortname=c[A].name,h.groupingView.hideFirstGroupCol=!0}),{colModel:c,rows:d,groupOptions:h,groupHeaders:i,summary:e}},jqPivot:function(a,b,c,d){return this.each(function(){function e(a){var d,e=jQuery(f).jqGrid("pivotSetup",a,b),g=$.assocArraySize(e.summary)>0?!0:!1,h=$.jgrid.from.call(f,e.rows);for(d=0;d<e.groupOptions.groupingView.groupField.length;d++)h.orderBy(e.groupOptions.groupingView.groupField[d],"a","text","");jQuery(f).jqGrid($.extend(!0,{datastr:$.extend(h.select(),g?{userdata:e.summary}:{}),datatype:"jsonstring",footerrow:g,userDataOnFooter:g,colModel:e.colModel,viewrecords:!0,sortname:b.xDimension[0].dataName},e.groupOptions,c||{}));var i=e.groupHeaders;if(i.length)for(d=0;d<i.length;d++)i[d]&&i[d].groupHeaders.length&&jQuery(f).jqGrid("setGroupHeaders",i[d]);b.frozenStaticCols&&jQuery(f).jqGrid("setFrozenColumns")}var f=this;"string"==typeof a?$.ajax($.extend({url:a,dataType:"json",success:function(a){e($.jgrid.getAccessor(a,d&&d.reader?d.reader:"rows"))}},d||{})):e(a)})}}),$.jgrid.extend({setSubGrid:function(){return this.each(function(){var a,b,c=this,d=$.jgrid.styleUI[c.p.styleUI||"jQueryUI"].subgrid,e={plusicon:d.icon_plus,minusicon:d.icon_minus,openicon:d.icon_open,expandOnLoad:!1,delayOnLoad:50,selectOnExpand:!1,selectOnCollapse:!1,reloadOnExpand:!0};if(c.p.subGridOptions=$.extend(e,c.p.subGridOptions||{}),c.p.colNames.unshift(""),c.p.colModel.unshift({name:"subgrid",width:$.jgrid.cell_width?c.p.subGridWidth+c.p.cellLayout:c.p.subGridWidth,sortable:!1,resizable:!1,hidedlg:!0,search:!1,fixed:!0}),a=c.p.subGridModel,a[0])for(a[0].align=$.extend([],a[0].align||[]),b=0;b<a[0].name.length;b++)a[0].align[b]=a[0].align[b]||"left"})},addSubGridCell:function(a,b){var c,d,e,f="";return this.each(function(){f=this.formatCol(a,b),d=this.p.id,c=this.p.subGridOptions.plusicon,e=$.jgrid.styleUI[this.p.styleUI||"jQueryUI"].common}),'<td role="gridcell" aria-describedby="'+d+'_subgrid" class="ui-sgcollapsed sgcollapsed" '+f+"><a style='cursor:pointer;' class='ui-sghref'><span class='"+e.icon_base+" "+c+"'></span></a></td>"},addSubGrid:function(a,b){return this.each(function(){var c=this;if(c.grid){var d,e,f,g,h,i=$.jgrid.styleUI[c.p.styleUI||"jQueryUI"].base,j=$.jgrid.styleUI[c.p.styleUI||"jQueryUI"].common,k=function(a,b,d){var e=$("<td align='"+c.p.subGridModel[0].align[d]+"'></td>").html(b);$(a).append(e)},l=function(a,b){var d,e,f,g=$("<table class='"+i.rowTable+" ui-common-table'><tbody></tbody></table>"),h=$("<tr></tr>");for(e=0;e<c.p.subGridModel[0].name.length;e++)d=$("<th class='"+i.headerBox+" ui-th-subgrid ui-th-column ui-th-"+c.p.direction+"'></th>"),$(d).html(c.p.subGridModel[0].name[e]),$(d).width(c.p.subGridModel[0].width[e]),$(h).append(d);$(g).append(h),a&&(f=c.p.xmlReader.subgrid,$(f.root+" "+f.row,a).each(function(){if(h=$("<tr class='"+j.content+" ui-subtblcell'></tr>"),f.repeatitems===!0)$(f.cell,this).each(function(a){k(h,$(this).text()||"&#160;",a)});else{var a=c.p.subGridModel[0].mapping||c.p.subGridModel[0].name;if(a)for(e=0;e<a.length;e++)k(h,$(a[e],this).text()||"&#160;",e)}$(g).append(h)}));var l=$("table:first",c.grid.bDiv).attr("id")+"_";return $("#"+$.jgrid.jqID(l+b)).append(g),c.grid.hDiv.loading=!1,$("#load_"+$.jgrid.jqID(c.p.id)).hide(),!1},m=function(a,b){var d,e,f,g,h,l,m=$("<table class='"+i.rowTable+" ui-common-table'><tbody></tbody></table>"),n=$("<tr></tr>");for(f=0;f<c.p.subGridModel[0].name.length;f++)d=$("<th class='"+i.headerBox+" ui-th-subgrid ui-th-column ui-th-"+c.p.direction+"'></th>"),$(d).html(c.p.subGridModel[0].name[f]),$(d).width(c.p.subGridModel[0].width[f]),$(n).append(d);if($(m).append(n),a&&(h=c.p.jsonReader.subgrid,e=$.jgrid.getAccessor(a,h.root),void 0!==e))for(f=0;f<e.length;f++){if(g=e[f],n=$("<tr class='"+j.content+" ui-subtblcell'></tr>"),h.repeatitems===!0)for(h.cell&&(g=g[h.cell]),l=0;l<g.length;l++)k(n,g[l]||"&#160;",l);else{var o=c.p.subGridModel[0].mapping||c.p.subGridModel[0].name;if(o.length)for(l=0;l<o.length;l++)k(n,g[o[l]]||"&#160;",l)}$(m).append(n)}var p=$("table:first",c.grid.bDiv).attr("id")+"_";return $("#"+$.jgrid.jqID(p+b)).append(m),c.grid.hDiv.loading=!1,$("#load_"+$.jgrid.jqID(c.p.id)).hide(),!1},n=function(a){var b,d,e,f;if(b=$(a).attr("id"),d={nd_:(new Date).getTime()},d[c.p.prmNames.subgridid]=b,!c.p.subGridModel[0])return!1;if(c.p.subGridModel[0].params)for(f=0;f<c.p.subGridModel[0].params.length;f++)for(e=0;e<c.p.colModel.length;e++)c.p.colModel[e].name===c.p.subGridModel[0].params[f]&&(d[c.p.colModel[e].name]=$("td:eq("+e+")",a).text().replace(/\&#160\;/gi,""));if(!c.grid.hDiv.loading)switch(c.grid.hDiv.loading=!0,$("#load_"+$.jgrid.jqID(c.p.id)).show(),c.p.subgridtype||(c.p.subgridtype=c.p.datatype),$.isFunction(c.p.subgridtype)?c.p.subgridtype.call(c,d):c.p.subgridtype=c.p.subgridtype.toLowerCase(),c.p.subgridtype){case"xml":case"json":$.ajax($.extend({type:c.p.mtype,url:$.isFunction(c.p.subGridUrl)?c.p.subGridUrl.call(c,d):c.p.subGridUrl,dataType:c.p.subgridtype,data:$.isFunction(c.p.serializeSubGridData)?c.p.serializeSubGridData.call(c,d):d,complete:function(a){"xml"===c.p.subgridtype?l(a.responseXML,b):m($.jgrid.parse(a.responseText),b),a=null}},$.jgrid.ajaxOptions,c.p.ajaxSubgridOptions||{}))}return!1},o=0;$.each(c.p.colModel,function(){(this.hidden===!0||"rn"===this.name||"cb"===this.name)&&o++});var p=c.rows.length,q=1;for(void 0!==b&&b>0&&(q=b,p=b+1);p>q;)$(c.rows[q]).hasClass("jqgrow")&&(c.p.scroll&&$(c.rows[q].cells[a]).unbind("click"),$(c.rows[q].cells[a]).bind("click",function(){var b=$(this).parent("tr")[0];if(e=c.p.id,d=b.id,h=$("#"+e+"_"+d+"_expandedContent"),$(this).hasClass("sgcollapsed")){if(g=$(c).triggerHandler("jqGridSubGridBeforeExpand",[e+"_"+d,d]),g=g===!1||"stop"===g?!1:!0,g&&$.isFunction(c.p.subGridBeforeExpand)&&(g=c.p.subGridBeforeExpand.call(c,e+"_"+d,d)),g===!1)return!1;c.p.subGridOptions.reloadOnExpand===!0||c.p.subGridOptions.reloadOnExpand===!1&&!h.hasClass("ui-subgrid")?(f=a>=1?"<td colspan='"+a+"'>&#160;</td>":"",$(b).after("<tr role='row' id='"+e+"_"+d+"_expandedContent' class='ui-subgrid ui-sg-expanded'>"+f+"<td class='"+j.content+" subgrid-cell'><span class='"+j.icon_base+" "+c.p.subGridOptions.openicon+"'></span></td><td colspan='"+parseInt(c.p.colNames.length-1-o,10)+"' class='"+j.content+" subgrid-data'><div id="+e+"_"+d+" class='tablediv'></div></td></tr>"),$(c).triggerHandler("jqGridSubGridRowExpanded",[e+"_"+d,d]),$.isFunction(c.p.subGridRowExpanded)?c.p.subGridRowExpanded.call(c,e+"_"+d,d):n(b)):h.show().removeClass("ui-sg-collapsed").addClass("ui-sg-expanded"),$(this).html("<a style='cursor:pointer;' class='ui-sghref'><span class='"+j.icon_base+" "+c.p.subGridOptions.minusicon+"'></span></a>").removeClass("sgcollapsed").addClass("sgexpanded"),c.p.subGridOptions.selectOnExpand&&$(c).jqGrid("setSelection",d)}else if($(this).hasClass("sgexpanded")){if(g=$(c).triggerHandler("jqGridSubGridRowColapsed",[e+"_"+d,d]),g=g===!1||"stop"===g?!1:!0,g&&$.isFunction(c.p.subGridRowColapsed)&&(g=c.p.subGridRowColapsed.call(c,e+"_"+d,d)),g===!1)return!1;c.p.subGridOptions.reloadOnExpand===!0?h.remove(".ui-subgrid"):h.hasClass("ui-subgrid")&&h.hide().addClass("ui-sg-collapsed").removeClass("ui-sg-expanded"),$(this).html("<a style='cursor:pointer;' class='ui-sghref'><span class='"+j.icon_base+" "+c.p.subGridOptions.plusicon+"'></span></a>").removeClass("sgexpanded").addClass("sgcollapsed"),c.p.subGridOptions.selectOnCollapse&&$(c).jqGrid("setSelection",d)}return!1})),q++;c.p.subGridOptions.expandOnLoad===!0&&$(c.rows).filter(".jqgrow").each(function(a,b){$(b.cells[0]).click()}),c.subGridXml=function(a,b){l(a,b)},c.subGridJson=function(a,b){m(a,b)}}})},expandSubGridRow:function(a){return this.each(function(){var b=this;if((b.grid||a)&&b.p.subGrid===!0){var c=$(this).jqGrid("getInd",a,!0);if(c){var d=$("td.sgcollapsed",c)[0];d&&$(d).trigger("click")}}})},collapseSubGridRow:function(a){return this.each(function(){var b=this;if((b.grid||a)&&b.p.subGrid===!0){var c=$(this).jqGrid("getInd",a,!0);if(c){var d=$("td.sgexpanded",c)[0];d&&$(d).trigger("click")}}})},toggleSubGridRow:function(a){return this.each(function(){var b=this;if((b.grid||a)&&b.p.subGrid===!0){var c=$(this).jqGrid("getInd",a,!0);if(c){var d=$("td.sgcollapsed",c)[0];d?$(d).trigger("click"):(d=$("td.sgexpanded",c)[0],d&&$(d).trigger("click"))}}})}}),$.jgrid.extend({setTreeNode:function(a,b){return this.each(function(){var c=this;if(c.grid&&c.p.treeGrid)for(var d,e,f,g,h,i,j,k,l=c.p.expColInd,m=c.p.treeReader.expanded_field,n=c.p.treeReader.leaf_field,o=c.p.treeReader.level_field,p=c.p.treeReader.icon_field,q=c.p.treeReader.loaded,r=$.jgrid.styleUI[c.p.styleUI||"jQueryUI"].common;b>a;){var s,t=$.jgrid.stripPref(c.p.idPrefix,c.rows[a].id),u=c.p._index[t];j=c.p.data[u],"nested"===c.p.treeGridModel&&(j[n]||(d=parseInt(j[c.p.treeReader.left_field],10),e=parseInt(j[c.p.treeReader.right_field],10),j[n]=e===d+1?"true":"false",c.rows[a].cells[c.p._treeleafpos].innerHTML=j[n])),f=parseInt(j[o],10),0===c.p.tree_root_level?(g=f+1,h=f):(g=f,h=f-1),i="<div class='tree-wrap tree-wrap-"+c.p.direction+"' style='width:"+18*g+"px;'>",i+="<div style='"+("rtl"===c.p.direction?"right:":"left:")+18*h+"px;' class='"+r.icon_base+" ",void 0!==j[q]&&(j[q]="true"===j[q]||j[q]===!0?!0:!1),"true"===j[n]||j[n]===!0?(i+=(void 0!==j[p]&&""!==j[p]?j[p]:c.p.treeIcons.leaf)+" tree-leaf treeclick",j[n]=!0,k="leaf"):(j[n]=!1,k=""),j[m]=("true"===j[m]||j[m]===!0?!0:!1)&&(j[q]||void 0===j[q]),i+=j[m]===!1?j[n]===!0?"'":c.p.treeIcons.plus+" tree-plus treeclick'":j[n]===!0?"'":c.p.treeIcons.minus+" tree-minus treeclick'",i+="></div></div>",$(c.rows[a].cells[l]).wrapInner("<span class='cell-wrapper"+k+"'></span>").prepend(i),f!==parseInt(c.p.tree_root_level,10)&&(s=$(c).jqGrid("isVisibleNode",j),s||$(c.rows[a]).css("display","none")),$(c.rows[a].cells[l]).find("div.treeclick").bind("click",function(a){var b=a.target||a.srcElement,d=$.jgrid.stripPref(c.p.idPrefix,$(b,c.rows).closest("tr.jqgrow")[0].id),e=c.p._index[d];return c.p.data[e][n]||(c.p.data[e][m]?($(c).jqGrid("collapseRow",c.p.data[e]),$(c).jqGrid("collapseNode",c.p.data[e])):($(c).jqGrid("expandRow",c.p.data[e]),$(c).jqGrid("expandNode",c.p.data[e]))),!1}),c.p.ExpandColClick===!0&&$(c.rows[a].cells[l]).find("span.cell-wrapper").css("cursor","pointer").bind("click",function(a){var b=a.target||a.srcElement,d=$.jgrid.stripPref(c.p.idPrefix,$(b,c.rows).closest("tr.jqgrow")[0].id),e=c.p._index[d];return c.p.data[e][n]||(c.p.data[e][m]?($(c).jqGrid("collapseRow",c.p.data[e]),$(c).jqGrid("collapseNode",c.p.data[e])):($(c).jqGrid("expandRow",c.p.data[e]),$(c).jqGrid("expandNode",c.p.data[e]))),$(c).jqGrid("setSelection",d),!1}),a++}})},setTreeGrid:function(){return this.each(function(){var a,b,c,d,e=this,f=0,g=!1,h=[],i=$.jgrid.styleUI[e.p.styleUI||"jQueryUI"].treegrid;if(e.p.treeGrid){e.p.treedatatype||$.extend(e.p,{treedatatype:e.p.datatype}),e.p.loadonce&&(e.p.treedatatype="local"),e.p.subGrid=!1,e.p.altRows=!1,e.p.pgbuttons=!1,e.p.pginput=!1,e.p.gridview=!0,null===e.p.rowTotal&&(e.p.rowNum=1e4),e.p.multiselect=!1,e.p.rowList=[],e.p.expColInd=0,a=i.icon_plus,"jQueryUI"===e.p.styleUI&&(a+="rtl"===e.p.direction?"w":"e"),e.p.treeIcons=$.extend({plus:a,minus:i.icon_minus,leaf:i.icon_leaf},e.p.treeIcons||{}),"nested"===e.p.treeGridModel?e.p.treeReader=$.extend({level_field:"level",left_field:"lft",right_field:"rgt",leaf_field:"isLeaf",expanded_field:"expanded",loaded:"loaded",icon_field:"icon"},e.p.treeReader):"adjacency"===e.p.treeGridModel&&(e.p.treeReader=$.extend({level_field:"level",parent_id_field:"parent",leaf_field:"isLeaf",expanded_field:"expanded",loaded:"loaded",icon_field:"icon"},e.p.treeReader));for(c in e.p.colModel)if(e.p.colModel.hasOwnProperty(c)){b=e.p.colModel[c].name,b!==e.p.ExpandColumn||g||(g=!0,e.p.expColInd=f),f++;for(d in e.p.treeReader)e.p.treeReader.hasOwnProperty(d)&&e.p.treeReader[d]===b&&h.push(b)}$.each(e.p.treeReader,function(a,b){b&&-1===$.inArray(b,h)&&("leaf_field"===a&&(e.p._treeleafpos=f),f++,e.p.colNames.push(b),e.p.colModel.push({name:b,width:1,hidden:!0,sortable:!1,resizable:!1,hidedlg:!0,editable:!0,search:!1}))})}})},expandRow:function(a){this.each(function(){var b=this;if(b.grid&&b.p.treeGrid){var c=$(b).jqGrid("getNodeChildren",a),d=b.p.treeReader.expanded_field,e=a[b.p.localReader.id],f=$.isFunction(b.p.beforeExpandTreeGridRow)?b.p.beforeExpandTreeGridRow.call(b,e,a,c):!0;f!==!1&&($(c).each(function(){var a=b.p.idPrefix+$.jgrid.getAccessor(this,b.p.localReader.id);$($(b).jqGrid("getGridRowById",a)).css("display",""),this[d]&&$(b).jqGrid("expandRow",this)}),$.isFunction(b.p.afterExpandTreeGridRow)&&b.p.afterExpandTreeGridRow.call(b,e,a,c))}})},collapseRow:function(a){this.each(function(){var b=this;if(b.grid&&b.p.treeGrid){var c=$(b).jqGrid("getNodeChildren",a),d=b.p.treeReader.expanded_field,e=a[b.p.localReader.id],f=$.isFunction(b.p.beforeCollapseTreeGridRow)?b.p.beforeCollapseTreeGridRow.call(b,e,a,c):!0;f!==!1&&($(c).each(function(){var a=b.p.idPrefix+$.jgrid.getAccessor(this,b.p.localReader.id);$($(b).jqGrid("getGridRowById",a)).css("display","none"),this[d]&&$(b).jqGrid("collapseRow",this)}),$.isFunction(b.p.afterCollapseTreeGridRow)&&b.p.afterCollapseTreeGridRow.call(b,e,a,c))}})},getRootNodes:function(a){var b=[];return this.each(function(){var c,d,e,f=this;if(f.grid&&f.p.treeGrid)switch("boolean"!=typeof a&&(a=!1),e=a?$(f).jqGrid("getRowData",null,!0):f.p.data,f.p.treeGridModel){case"nested":c=f.p.treeReader.level_field,$(e).each(function(){parseInt(this[c],10)===parseInt(f.p.tree_root_level,10)&&b.push(a?f.p.data[f.p._index[this[f.p.keyName]]]:this)});break;case"adjacency":d=f.p.treeReader.parent_id_field,$(e).each(function(){(null===this[d]||"null"===String(this[d]).toLowerCase())&&b.push(a?f.p.data[f.p._index[this[f.p.keyName]]]:this)})}}),b},getNodeDepth:function(a){var b=null;return this.each(function(){if(this.grid&&this.p.treeGrid){var c=this;switch(c.p.treeGridModel){case"nested":var d=c.p.treeReader.level_field;b=parseInt(a[d],10)-parseInt(c.p.tree_root_level,10);break;case"adjacency":b=$(c).jqGrid("getNodeAncestors",a).length}}}),b},getNodeParent:function(a){var b=null;return this.each(function(){var c=this;if(c.grid&&c.p.treeGrid)switch(c.p.treeGridModel){case"nested":var d=c.p.treeReader.left_field,e=c.p.treeReader.right_field,f=c.p.treeReader.level_field,g=parseInt(a[d],10),h=parseInt(a[e],10),i=parseInt(a[f],10);$(this.p.data).each(function(){return parseInt(this[f],10)===i-1&&parseInt(this[d],10)<g&&parseInt(this[e],10)>h?(b=this,!1):void 0});break;case"adjacency":for(var j=c.p.treeReader.parent_id_field,k=c.p.localReader.id,l=a[k],m=c.p._index[l];m--;)if(c.p.data[m][k]===$.jgrid.stripPref(c.p.idPrefix,a[j])){b=c.p.data[m];break}}}),b},getNodeChildren:function(a){var b=[];return this.each(function(){var c=this;if(c.grid&&c.p.treeGrid)switch(c.p.treeGridModel){case"nested":var d=c.p.treeReader.left_field,e=c.p.treeReader.right_field,f=c.p.treeReader.level_field,g=parseInt(a[d],10),h=parseInt(a[e],10),i=parseInt(a[f],10);$(this.p.data).each(function(){parseInt(this[f],10)===i+1&&parseInt(this[d],10)>g&&parseInt(this[e],10)<h&&b.push(this)});break;case"adjacency":var j=c.p.treeReader.parent_id_field,k=c.p.localReader.id;$(this.p.data).each(function(){this[j]==$.jgrid.stripPref(c.p.idPrefix,a[k])&&b.push(this)})}}),b},getFullTreeNode:function(a,b){var c=[];return this.each(function(){var d,e=this,f=e.p.treeReader.expanded_field;if(e.grid&&e.p.treeGrid)switch((null==b||"boolean"!=typeof b)&&(b=!1),e.p.treeGridModel){case"nested":var g=e.p.treeReader.left_field,h=e.p.treeReader.right_field,i=e.p.treeReader.level_field,j=parseInt(a[g],10),k=parseInt(a[h],10),l=parseInt(a[i],10);$(this.p.data).each(function(){parseInt(this[i],10)>=l&&parseInt(this[g],10)>=j&&parseInt(this[g],10)<=k&&(b&&(this[f]=!0),c.push(this))});break;case"adjacency":if(a){c.push(a);var m=e.p.treeReader.parent_id_field,n=e.p.localReader.id;$(this.p.data).each(function(a){for(d=c.length,a=0;d>a;a++)if($.jgrid.stripPref(e.p.idPrefix,c[a][n])===this[m]){b&&(this[f]=!0),c.push(this);break}})}}}),c},getNodeAncestors:function(a){var b=[];return this.each(function(){if(this.grid&&this.p.treeGrid)for(var c=$(this).jqGrid("getNodeParent",a);c;)b.push(c),c=$(this).jqGrid("getNodeParent",c)}),b},isVisibleNode:function(a){var b=!0;return this.each(function(){var c=this;if(c.grid&&c.p.treeGrid){var d=$(c).jqGrid("getNodeAncestors",a),e=c.p.treeReader.expanded_field;$(d).each(function(){return b=b&&this[e],b?void 0:!1})}}),b},isNodeLoaded:function(a){var b;return this.each(function(){var c=this;if(c.grid&&c.p.treeGrid){var d=c.p.treeReader.leaf_field,e=c.p.treeReader.loaded;b=void 0!==a?void 0!==a[e]?a[e]:a[d]||$(c).jqGrid("getNodeChildren",a).length>0?!0:!1:!1}}),b},reloadNode:function(a){return this.each(function(){if(this.grid&&this.p.treeGrid){var b=this.p.localReader.id,c=this.p.selrow;$(this).jqGrid("delChildren",a[b]);var d=this.p.treeReader.expanded_field,e=this.p.treeReader.parent_id_field,f=this.p.treeReader.loaded,g=this.p.treeReader.level_field,h=this.p.treeReader.left_field,i=this.p.treeReader.right_field,j=$.jgrid.getAccessor(a,this.p.localReader.id),k=$("#"+j,this.grid.bDiv)[0];a[d]=!0,$("div.treeclick",k).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus"),this.p.treeANode=k.rowIndex,this.p.datatype=this.p.treedatatype,"nested"===this.p.treeGridModel?$(this).jqGrid("setGridParam",{postData:{nodeid:j,n_left:a[h],n_right:a[i],n_level:a[g]}}):$(this).jqGrid("setGridParam",{postData:{nodeid:j,parentid:a[e],n_level:a[g]}}),$(this).trigger("reloadGrid"),a[f]=!0,"nested"===this.p.treeGridModel?$(this).jqGrid("setGridParam",{selrow:c,postData:{nodeid:"",n_left:"",n_right:"",n_level:""}}):$(this).jqGrid("setGridParam",{selrow:c,postData:{nodeid:"",parentid:"",n_level:""}})}})},expandNode:function(a){return this.each(function(){if(this.grid&&this.p.treeGrid){var b=this.p.treeReader.expanded_field,c=this.p.treeReader.parent_id_field,d=this.p.treeReader.loaded,e=this.p.treeReader.level_field,f=this.p.treeReader.left_field,g=this.p.treeReader.right_field;if(!a[b]){var h=$.jgrid.getAccessor(a,this.p.localReader.id),i=$("#"+this.p.idPrefix+$.jgrid.jqID(h),this.grid.bDiv)[0],j=this.p._index[h],k=$.isFunction(this.p.beforeExpandTreeGridNode)?this.p.beforeExpandTreeGridNode.call(this,h,a):!0;if(k===!1)return;$(this).jqGrid("isNodeLoaded",this.p.data[j])?(a[b]=!0,$("div.treeclick",i).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus")):this.grid.hDiv.loading||(a[b]=!0,$("div.treeclick",i).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus"),this.p.treeANode=i.rowIndex,this.p.datatype=this.p.treedatatype,"nested"===this.p.treeGridModel?$(this).jqGrid("setGridParam",{postData:{nodeid:h,n_left:a[f],n_right:a[g],n_level:a[e]}}):$(this).jqGrid("setGridParam",{postData:{nodeid:h,parentid:a[c],n_level:a[e]}}),$(this).trigger("reloadGrid"),a[d]=!0,"nested"===this.p.treeGridModel?$(this).jqGrid("setGridParam",{postData:{nodeid:"",n_left:"",n_right:"",n_level:""}}):$(this).jqGrid("setGridParam",{postData:{nodeid:"",parentid:"",n_level:""}})),$.isFunction(this.p.afterExpandTreeGridNode)&&this.p.afterExpandTreeGridNode.call(this,h,a)}}})},collapseNode:function(a){return this.each(function(){if(this.grid&&this.p.treeGrid){var b=this.p.treeReader.expanded_field;if(a[b]){var c=$.jgrid.getAccessor(a,this.p.localReader.id),d=$.isFunction(this.p.beforeCollapseTreeGridNode)?this.p.beforeCollapseTreeGridNode.call(this,c,a):!0,e=$("#"+this.p.idPrefix+$.jgrid.jqID(c),this.grid.bDiv)[0];if(a[b]=!1,d===!1)return;$("div.treeclick",e).removeClass(this.p.treeIcons.minus+" tree-minus").addClass(this.p.treeIcons.plus+" tree-plus"),$.isFunction(this.p.afterCollapseTreeGridNode)&&this.p.afterCollapseTreeGridNode.call(this,c,a)}}})},SortTree:function(a,b,c,d){return this.each(function(){if(this.grid&&this.p.treeGrid){var e,f,g,h,i,j=[],k=this,l=$(this).jqGrid("getRootNodes",k.p.search);for(h=$.jgrid.from.call(this,l),h.orderBy(a,b,c,d),i=h.select(),e=0,f=i.length;f>e;e++)g=i[e],j.push(g),$(this).jqGrid("collectChildrenSortTree",j,g,a,b,c,d);$.each(j,function(a){var b=$.jgrid.getAccessor(this,k.p.localReader.id);$("#"+$.jgrid.jqID(k.p.id)+" tbody tr:eq("+a+")").after($("tr#"+$.jgrid.jqID(b),k.grid.bDiv))}),h=null,i=null,j=null}})},searchTree:function(a){var b,c,d,e=a.length||0,f=[],g=[],h=[];return this.each(function(){if(this.grid&&this.p.treeGrid&&e)for(c=this.p.localReader.id,b=0;e>b;b++)f=$(this).jqGrid("getNodeAncestors",a[b]),f.length||f.push(a[b]),d=f[f.length-1][c],-1===$.inArray(d,g)&&(g.push(d),f=$(this).jqGrid("getFullTreeNode",f[f.length-1],!0),h=h.concat(f))}),h},collectChildrenSortTree:function(a,b,c,d,e,f){return this.each(function(){if(this.grid&&this.p.treeGrid){var g,h,i,j,k,l;for(j=$(this).jqGrid("getNodeChildren",b),k=$.jgrid.from.call(this,j),k.orderBy(c,d,e,f),l=k.select(),g=0,h=l.length;h>g;g++)i=l[g],a.push(i),$(this).jqGrid("collectChildrenSortTree",a,i,c,d,e,f)}})},setTreeRow:function(a,b){var c=!1;return this.each(function(){var d=this;d.grid&&d.p.treeGrid&&(c=$(d).jqGrid("setRowData",a,b))}),c},delTreeNode:function(a){return this.each(function(){var b,c,d,e,f,g=this,h=g.p.localReader.id,i=g.p.treeReader.left_field,j=g.p.treeReader.right_field;if(g.grid&&g.p.treeGrid){var k=g.p._index[a];if(void 0!==k){c=parseInt(g.p.data[k][j],10),d=c-parseInt(g.p.data[k][i],10)+1;var l=$(g).jqGrid("getFullTreeNode",g.p.data[k]);if(l.length>0)for(b=0;b<l.length;b++)$(g).jqGrid("delRowData",l[b][h]);if("nested"===g.p.treeGridModel){if(e=$.jgrid.from.call(g,g.p.data).greater(i,c,{stype:"integer"}).select(),e.length)for(f in e)e.hasOwnProperty(f)&&(e[f][i]=parseInt(e[f][i],10)-d);if(e=$.jgrid.from.call(g,g.p.data).greater(j,c,{stype:"integer"}).select(),e.length)for(f in e)e.hasOwnProperty(f)&&(e[f][j]=parseInt(e[f][j],10)-d)}}}})},delChildren:function(a){return this.each(function(){var b,c,d,e,f=this,g=f.p.localReader.id,h=f.p.treeReader.left_field,i=f.p.treeReader.right_field;if(f.grid&&f.p.treeGrid){var j=f.p._index[a];if(void 0!==j){b=parseInt(f.p.data[j][i],10),c=b-parseInt(f.p.data[j][h],10)+1;var k=$(f).jqGrid("getFullTreeNode",f.p.data[j]);if(k.length>0)for(var l=0;l<k.length;l++)k[l][g]!==a&&$(f).jqGrid("delRowData",k[l][g]);if("nested"===f.p.treeGridModel){if(d=$.jgrid.from(f.p.data).greater(h,b,{stype:"integer"}).select(),d.length)for(e in d)d.hasOwnProperty(e)&&(d[e][h]=parseInt(d[e][h],10)-c);if(d=$.jgrid.from(f.p.data).greater(i,b,{stype:"integer"}).select(),d.length)for(e in d)d.hasOwnProperty(e)&&(d[e][i]=parseInt(d[e][i],10)-c)}}}})},addChildNode:function(a,b,c,d){var e=this[0];if(c){var f,g,h,i,j,k,l,m,n=e.p.treeReader.expanded_field,o=e.p.treeReader.leaf_field,p=e.p.treeReader.level_field,q=e.p.treeReader.parent_id_field,r=e.p.treeReader.left_field,s=e.p.treeReader.right_field,t=e.p.treeReader.loaded,u=0,v=b;if(void 0===d&&(d=!1),null==a){if(j=e.p.data.length-1,j>=0)for(;j>=0;)u=Math.max(u,parseInt(e.p.data[j][e.p.localReader.id],10)),j--;a=u+1}var w=$(e).jqGrid("getInd",b);if(l=!1,void 0===b||null===b||""===b)b=null,v=null,f="last",i=e.p.tree_root_level,j=e.p.data.length+1;else{f="after",g=e.p._index[b],h=e.p.data[g],b=h[e.p.localReader.id],i=parseInt(h[p],10)+1;var x=$(e).jqGrid("getFullTreeNode",h);x.length?(j=x[x.length-1][e.p.localReader.id],v=j,j=$(e).jqGrid("getInd",v)+1):j=$(e).jqGrid("getInd",b)+1,h[o]&&(l=!0,h[n]=!0,$(e.rows[w]).find("span.cell-wrapperleaf").removeClass("cell-wrapperleaf").addClass("cell-wrapper").end().find("div.tree-leaf").removeClass(e.p.treeIcons.leaf+" tree-leaf").addClass(e.p.treeIcons.minus+" tree-minus"),e.p.data[g][o]=!1,h[t]=!0)}if(k=j+1,void 0===c[n]&&(c[n]=!1),void 0===c[t]&&(c[t]=!1),c[p]=i,void 0===c[o]&&(c[o]=!0),"adjacency"===e.p.treeGridModel&&(c[q]=b),"nested"===e.p.treeGridModel){var y,z,A;if(null!==b){if(m=parseInt(h[s],10),y=$.jgrid.from.call(e,e.p.data),y=y.greaterOrEquals(s,m,{stype:"integer"}),z=y.select(),z.length)for(A in z)z.hasOwnProperty(A)&&(z[A][r]=z[A][r]>m?parseInt(z[A][r],10)+2:z[A][r],z[A][s]=z[A][s]>=m?parseInt(z[A][s],10)+2:z[A][s]);c[r]=m,c[s]=m+1}else{if(m=parseInt($(e).jqGrid("getCol",s,!1,"max"),10),z=$.jgrid.from.call(e,e.p.data).greater(r,m,{stype:"integer"}).select(),z.length)for(A in z)z.hasOwnProperty(A)&&(z[A][r]=parseInt(z[A][r],10)+2);if(z=$.jgrid.from.call(e,e.p.data).greater(s,m,{stype:"integer"}).select(),z.length)for(A in z)z.hasOwnProperty(A)&&(z[A][s]=parseInt(z[A][s],10)+2);c[r]=m+1,c[s]=m+2}}(null===b||$(e).jqGrid("isNodeLoaded",h)||l)&&($(e).jqGrid("addRowData",a,c,f,v),$(e).jqGrid("setTreeNode",j,k)),h&&!h[n]&&d&&$(e.rows[w]).find("div.treeclick").click()}}}),$.fn.jqDrag=function(a){return i(this,a,"d")},$.fn.jqResize=function(a,b){return i(this,a,"r",b)},$.jqDnR={dnr:{},e:0,drag:function(a){return"d"==M.k?E.css({left:M.X+a.pageX-M.pX,top:M.Y+a.pageY-M.pY}):(E.css({width:Math.max(a.pageX-M.pX+M.W,0),height:Math.max(a.pageY-M.pY+M.H,0)}),M1&&E1.css({width:Math.max(a.pageX-M1.pX+M1.W,0),height:Math.max(a.pageY-M1.pY+M1.H,0)})),!1
},stop:function(){$(document).unbind("mousemove",J.drag).unbind("mouseup",J.stop)}};var J=$.jqDnR,M=J.dnr,E=J.e,E1,M1,i=function(a,b,c,d){return a.each(function(){b=b?$(b,a):a,b.bind("mousedown",{e:a,k:c},function(a){var b=a.data,c={};if(E=b.e,E1=d?$(d):!1,"relative"!=E.css("position"))try{E.position(c)}catch(e){}if(M={X:c.left||f("left")||0,Y:c.top||f("top")||0,W:f("width")||E[0].scrollWidth||0,H:f("height")||E[0].scrollHeight||0,pX:a.pageX,pY:a.pageY,k:b.k},M1=E1&&"d"!=b.k?{X:c.left||f1("left")||0,Y:c.top||f1("top")||0,W:E1[0].offsetWidth||f1("width")||0,H:E1[0].offsetHeight||f1("height")||0,pX:a.pageX,pY:a.pageY,k:b.k}:!1,$("input.hasDatepicker",E[0])[0])try{$("input.hasDatepicker",E[0]).datepicker("hide")}catch(g){}return $(document).mousemove($.jqDnR.drag).mouseup($.jqDnR.stop),!1})})},f=function(a){return parseInt(E.css(a),10)||!1},f1=function(a){return parseInt(E1.css(a),10)||!1};$.fn.jqm=function(a){var b={overlay:50,closeoverlay:!0,overlayClass:"jqmOverlay",closeClass:"jqmClose",trigger:".jqModal",ajax:F,ajaxText:"",target:F,modal:F,toTop:F,onShow:F,onHide:F,onLoad:F};return this.each(function(){return this._jqm?H[this._jqm].c=$.extend({},H[this._jqm].c,a):(s++,this._jqm=s,H[s]={c:$.extend(b,$.jqm.params,a),a:F,w:$(this).addClass("jqmID"+s),s:s},void(b.trigger&&$(this).jqmAddTrigger(b.trigger)))})},$.fn.jqmAddClose=function(a){return hs(this,a,"jqmHide")},$.fn.jqmAddTrigger=function(a){return hs(this,a,"jqmShow")},$.fn.jqmShow=function(a){return this.each(function(){$.jqm.open(this._jqm,a)})},$.fn.jqmHide=function(a){return this.each(function(){$.jqm.close(this._jqm,a)})},$.jqm={hash:{},open:function(a,b){var c=H[a],d=c.c,f="."+d.closeClass,g=parseInt(c.w.css("z-index"));g=g>0?g:3e3;var h=$("<div></div>").css({height:"100%",width:"100%",position:"fixed",left:0,top:0,"z-index":g-1,opacity:d.overlay/100});if(c.a)return F;if(c.t=b,c.a=!0,c.w.css("z-index",g),d.modal?(A[0]||setTimeout(function(){new L("bind")},1),A.push(a)):d.overlay>0?d.closeoverlay&&c.w.jqmAddClose(h):h=F,c.o=h?h.addClass(d.overlayClass).prependTo("body"):F,d.ajax){var i=d.target||c.w,j=d.ajax;i="string"==typeof i?$(i,c.w):$(i),j="@"===j.substr(0,1)?$(b).attr(j.substring(1)):j,i.html(d.ajaxText).load(j,function(){d.onLoad&&d.onLoad.call(this,c),f&&c.w.jqmAddClose($(f,c.w)),e(c)})}else f&&c.w.jqmAddClose($(f,c.w));return d.toTop&&c.o&&c.w.before('<span id="jqmP'+c.w[0]._jqm+'"></span>').insertAfter(c.o),d.onShow?d.onShow(c):c.w.show(),e(c),F},close:function(a){var b=H[a];return b.a?(b.a=F,A[0]&&(A.pop(),A[0]||new L("unbind")),b.c.toTop&&b.o&&$("#jqmP"+b.w[0]._jqm).after(b.w).remove(),b.c.onHide?b.c.onHide(b):(b.w.hide(),b.o&&b.o.remove()),F):F},params:{}};var s=0,H=$.jqm.hash,A=[],F=!1,e=function(a){void 0===a.c.focusField&&(a.c.focusField=0),a.c.focusField>=0&&f(a)},f=function(a){try{$(":input:visible",a.w)[parseInt(a.c.focusField,10)].focus()}catch(b){}},L=function(a){$(document)[a]("keypress",m)[a]("keydown",m)[a]("mousedown",m)},m=function(a){var b=H[A[A.length-1]],c=!$(a.target).parents(".jqmID"+b.s)[0];return c&&($(".jqmID"+b.s).each(function(){var b=$(this),d=b.offset();return d.top<=a.pageY&&a.pageY<=d.top+b.height()&&d.left<=a.pageX&&a.pageX<=d.left+b.width()?(c=!1,!1):void 0}),f(b)),!c},hs=function(a,b,c){return a.each(function(){var a=this._jqm;$(b).each(function(){this[c]||(this[c]=[],$(this).click(function(){for(var a in{jqmShow:1,jqmHide:1})for(var b in this[a])H[this[a][b]]&&H[this[a][b]].w[a](this);return F})),this[c].push(a)})})};$.fmatter={},$.extend($.fmatter,{isBoolean:function(a){return"boolean"==typeof a},isObject:function(a){return a&&("object"==typeof a||$.isFunction(a))||!1},isString:function(a){return"string"==typeof a},isNumber:function(a){return"number"==typeof a&&isFinite(a)},isValue:function(a){return this.isObject(a)||this.isString(a)||this.isNumber(a)||this.isBoolean(a)},isEmpty:function(a){return!this.isString(a)&&this.isValue(a)?!1:this.isValue(a)?(a=$.trim(a).replace(/\&nbsp\;/gi,"").replace(/\&#160\;/gi,""),""===a):!0}}),$.fn.fmatter=function(a,b,c,d,e){var f=b;c=$.extend({},$.jgrid.getRegional(this,"formatter"),c);try{f=$.fn.fmatter[a].call(this,b,c,d,e)}catch(g){}return f},$.fmatter.util={NumberFormat:function(a,b){if($.fmatter.isNumber(a)||(a*=1),$.fmatter.isNumber(a)){var c,d=0>a,e=String(a),f=b.decimalSeparator||".";if($.fmatter.isNumber(b.decimalPlaces)){var g=b.decimalPlaces,h=Math.pow(10,g);if(e=String(Math.round(a*h)/h),c=e.lastIndexOf("."),g>0)for(0>c?(e+=f,c=e.length-1):"."!==f&&(e=e.replace(".",f));e.length-1-c<g;)e+="0"}if(b.thousandsSeparator){var i=b.thousandsSeparator;c=e.lastIndexOf(f),c=c>-1?c:e.length;var j,k=e.substring(c),l=-1;for(j=c;j>0;j--)l++,l%3===0&&j!==c&&(!d||j>1)&&(k=i+k),k=e.charAt(j-1)+k;e=k}return e=b.prefix?b.prefix+e:e,e=b.suffix?e+b.suffix:e}return a}},$.fn.fmatter.defaultFormat=function(a,b){return $.fmatter.isValue(a)&&""!==a?a:b.defaultValue||"&#160;"},$.fn.fmatter.email=function(a,b){return $.fmatter.isEmpty(a)?$.fn.fmatter.defaultFormat(a,b):'<a href="mailto:'+a+'">'+a+"</a>"},$.fn.fmatter.checkbox=function(a,b){var c,d=$.extend({},b.checkbox);void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(d=$.extend({},d,b.colModel.formatoptions)),c=d.disabled===!0?'disabled="disabled"':"",($.fmatter.isEmpty(a)||void 0===a)&&(a=$.fn.fmatter.defaultFormat(a,d)),a=String(a),a=(a+"").toLowerCase();var e=a.search(/(false|f|0|no|n|off|undefined)/i)<0?" checked='checked' ":"";return'<input type="checkbox" '+e+' value="'+a+'" offval="no" '+c+"/>"},$.fn.fmatter.link=function(a,b){var c={target:b.target},d="";return void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(c=$.extend({},c,b.colModel.formatoptions)),c.target&&(d="target="+c.target),$.fmatter.isEmpty(a)?$.fn.fmatter.defaultFormat(a,b):"<a "+d+' href="'+a+'">'+a+"</a>"},$.fn.fmatter.showlink=function(a,b){var c,d={baseLinkUrl:b.baseLinkUrl,showAction:b.showAction,addParam:b.addParam||"",target:b.target,idName:b.idName},e="";return void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(d=$.extend({},d,b.colModel.formatoptions)),d.target&&(e="target="+d.target),c=d.baseLinkUrl+d.showAction+"?"+d.idName+"="+b.rowId+d.addParam,$.fmatter.isString(a)||$.fmatter.isNumber(a)?"<a "+e+' href="'+c+'">'+a+"</a>":$.fn.fmatter.defaultFormat(a,b)},$.fn.fmatter.integer=function(a,b){var c=$.extend({},b.integer);return void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(c=$.extend({},c,b.colModel.formatoptions)),$.fmatter.isEmpty(a)?c.defaultValue:$.fmatter.util.NumberFormat(a,c)},$.fn.fmatter.number=function(a,b){var c=$.extend({},b.number);return void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(c=$.extend({},c,b.colModel.formatoptions)),$.fmatter.isEmpty(a)?c.defaultValue:$.fmatter.util.NumberFormat(a,c)},$.fn.fmatter.currency=function(a,b){var c=$.extend({},b.currency);return void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(c=$.extend({},c,b.colModel.formatoptions)),$.fmatter.isEmpty(a)?c.defaultValue:$.fmatter.util.NumberFormat(a,c)},$.fn.fmatter.date=function(a,b,c,d){var e=$.extend({},b.date);return void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(e=$.extend({},e,b.colModel.formatoptions)),e.reformatAfterEdit||"edit"!==d?$.fmatter.isEmpty(a)?$.fn.fmatter.defaultFormat(a,b):$.jgrid.parseDate.call(this,e.srcformat,a,e.newformat,e):$.fn.fmatter.defaultFormat(a,b)},$.fn.fmatter.select=function(a,b){a=String(a);var c,d,e=!1,f=[];if(void 0!==b.colModel.formatoptions?(e=b.colModel.formatoptions.value,c=void 0===b.colModel.formatoptions.separator?":":b.colModel.formatoptions.separator,d=void 0===b.colModel.formatoptions.delimiter?";":b.colModel.formatoptions.delimiter):void 0!==b.colModel.editoptions&&(e=b.colModel.editoptions.value,c=void 0===b.colModel.editoptions.separator?":":b.colModel.editoptions.separator,d=void 0===b.colModel.editoptions.delimiter?";":b.colModel.editoptions.delimiter),e){var g,h=(null!=b.colModel.editoptions&&b.colModel.editoptions.multiple===!0)==!0?!0:!1,i=[];if(h&&(i=a.split(","),i=$.map(i,function(a){return $.trim(a)})),$.fmatter.isString(e)){var j,k=e.split(d),l=0;for(j=0;j<k.length;j++)if(g=k[j].split(c),g.length>2&&(g[1]=$.map(g,function(a,b){return b>0?a:void 0}).join(c)),h)$.inArray(g[0],i)>-1&&(f[l]=g[1],l++);else if($.trim(g[0])===$.trim(a)){f[0]=g[1];break}}else $.fmatter.isObject(e)&&(h?f=$.map(i,function(a){return e[a]}):f[0]=e[a]||"")}return a=f.join(", "),""===a?$.fn.fmatter.defaultFormat(a,b):a},$.fn.fmatter.rowactions=function(a){var b=$(this).closest("tr.jqgrow"),c=b.attr("id"),d=$(this).closest("table.ui-jqgrid-btable").attr("id").replace(/_frozen([^_]*)$/,"$1"),e=$("#"+d),f=e[0],g=f.p,h=g.colModel[$.jgrid.getCellIndex(this)],i=h.frozen?$("tr#"+c+" td:eq("+$.jgrid.getCellIndex(this)+") > div",e):$(this).parent(),j={extraparam:{}},k=function(a,b){$.isFunction(j.afterSave)&&j.afterSave.call(f,a,b),i.find("div.ui-inline-edit,div.ui-inline-del").show(),i.find("div.ui-inline-save,div.ui-inline-cancel").hide()},l=function(a){$.isFunction(j.afterRestore)&&j.afterRestore.call(f,a),i.find("div.ui-inline-edit,div.ui-inline-del").show(),i.find("div.ui-inline-save,div.ui-inline-cancel").hide()};void 0!==h.formatoptions&&(j=$.extend(j,h.formatoptions)),void 0!==g.editOptions&&(j.editOptions=g.editOptions),void 0!==g.delOptions&&(j.delOptions=g.delOptions),b.hasClass("jqgrid-new-row")&&(j.extraparam[g.prmNames.oper]=g.prmNames.addoper);var m={keys:j.keys,oneditfunc:j.onEdit,successfunc:j.onSuccess,url:j.url,extraparam:j.extraparam,aftersavefunc:k,errorfunc:j.onError,afterrestorefunc:l,restoreAfterError:j.restoreAfterError,mtype:j.mtype};switch(a){case"edit":e.jqGrid("editRow",c,m),i.find("div.ui-inline-edit,div.ui-inline-del").hide(),i.find("div.ui-inline-save,div.ui-inline-cancel").show(),e.triggerHandler("jqGridAfterGridComplete");break;case"save":e.jqGrid("saveRow",c,m)&&(i.find("div.ui-inline-edit,div.ui-inline-del").show(),i.find("div.ui-inline-save,div.ui-inline-cancel").hide(),e.triggerHandler("jqGridAfterGridComplete"));break;case"cancel":e.jqGrid("restoreRow",c,l),i.find("div.ui-inline-edit,div.ui-inline-del").show(),i.find("div.ui-inline-save,div.ui-inline-cancel").hide(),e.triggerHandler("jqGridAfterGridComplete");break;case"del":e.jqGrid("delGridRow",c,j.delOptions);break;case"formedit":e.jqGrid("setSelection",c),e.jqGrid("editGridRow",c,j.editOptions)}},$.fn.fmatter.actions=function(a,b){var c,d={keys:!1,editbutton:!0,delbutton:!0,editformbutton:!1},e=b.rowId,f="",g=$.jgrid.getRegional(this,"nav"),h=$.jgrid.styleUI[b.styleUI||"jQueryUI"].fmatter,i=$.jgrid.styleUI[b.styleUI||"jQueryUI"].common;if(void 0!==b.colModel.formatoptions&&(d=$.extend(d,b.colModel.formatoptions)),void 0===e||$.fmatter.isEmpty(e))return"";var j="onmouseover=jQuery(this).addClass('"+i.hover+"'); onmouseout=jQuery(this).removeClass('"+i.hover+"');  ";return d.editformbutton?(c="id='jEditButton_"+e+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'formedit'); "+j,f+="<div title='"+g.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+c+"><span class='"+i.icon_base+" "+h.icon_edit+"'></span></div>"):d.editbutton&&(c="id='jEditButton_"+e+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'edit'); "+j,f+="<div title='"+g.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+c+"><span class='"+i.icon_base+" "+h.icon_edit+"'></span></div>"),d.delbutton&&(c="id='jDeleteButton_"+e+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'del'); "+j,f+="<div title='"+g.deltitle+"' style='float:left;' class='ui-pg-div ui-inline-del' "+c+"><span class='"+i.icon_base+" "+h.icon_del+"'></span></div>"),c="id='jSaveButton_"+e+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'save'); "+j,f+="<div title='"+g.savetitle+"' style='float:left;display:none' class='ui-pg-div ui-inline-save' "+c+"><span class='"+i.icon_base+" "+h.icon_save+"'></span></div>",c="id='jCancelButton_"+e+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'cancel'); "+j,f+="<div title='"+g.canceltitle+"' style='float:left;display:none;' class='ui-pg-div ui-inline-cancel' "+c+"><span class='"+i.icon_base+" "+h.icon_cancel+"'></span></div>","<div style='margin-left:8px;'>"+f+"</div>"},$.unformat=function(a,b,c,d){var e,f,g=b.colModel.formatter,h=b.colModel.formatoptions||{},i=/([\.\*\_\'\(\)\{\}\+\?\\])/g,j=b.colModel.unformat||$.fn.fmatter[g]&&$.fn.fmatter[g].unformat;if(void 0!==j&&$.isFunction(j))e=j.call(this,$(a).text(),b,a);else if(void 0!==g&&$.fmatter.isString(g)){var k,l=$.jgrid.getRegional(this,"formatter")||{};switch(g){case"integer":h=$.extend({},l.integer,h),f=h.thousandsSeparator.replace(i,"\\$1"),k=new RegExp(f,"g"),e=$(a).text().replace(k,"");break;case"number":h=$.extend({},l.number,h),f=h.thousandsSeparator.replace(i,"\\$1"),k=new RegExp(f,"g"),e=$(a).text().replace(k,"").replace(h.decimalSeparator,".");break;case"currency":h=$.extend({},l.currency,h),f=h.thousandsSeparator.replace(i,"\\$1"),k=new RegExp(f,"g"),e=$(a).text(),h.prefix&&h.prefix.length&&(e=e.substr(h.prefix.length)),h.suffix&&h.suffix.length&&(e=e.substr(0,e.length-h.suffix.length)),e=e.replace(k,"").replace(h.decimalSeparator,".");break;case"checkbox":var m=b.colModel.editoptions?b.colModel.editoptions.value.split(":"):["Yes","No"];e=$("input",a).is(":checked")?m[0]:m[1];break;case"select":e=$.unformat.select(a,b,c,d);break;case"actions":return"";default:e=$(a).text()}}return void 0!==e?e:d===!0?$(a).text():$.jgrid.htmlDecode($(a).html())},$.unformat.select=function(a,b,c,d){var e=[],f=$(a).text();if(d===!0)return f;var g=$.extend({},void 0!==b.colModel.formatoptions?b.colModel.formatoptions:b.colModel.editoptions),h=void 0===g.separator?":":g.separator,i=void 0===g.delimiter?";":g.delimiter;if(g.value){var j,k=g.value,l=g.multiple===!0?!0:!1,m=[];if(l&&(m=f.split(","),m=$.map(m,function(a){return $.trim(a)})),$.fmatter.isString(k)){var n,o=k.split(i),p=0;for(n=0;n<o.length;n++)if(j=o[n].split(h),j.length>2&&(j[1]=$.map(j,function(a,b){return b>0?a:void 0}).join(h)),l)$.inArray($.trim(j[1]),m)>-1&&(e[p]=j[0],p++);else if($.trim(j[1])===$.trim(f)){e[0]=j[0];break}}else($.fmatter.isObject(k)||$.isArray(k))&&(l||(m[0]=f),e=$.map(m,function(a){var b;return $.each(k,function(c,d){return d===a?(b=c,!1):void 0}),void 0!==b?b:void 0}));return e.join(", ")}return f||""},$.unformat.date=function(a,b){var c=$.jgrid.getRegional(this,"formatter.date")||{};return void 0!==b.formatoptions&&(c=$.extend({},c,b.formatoptions)),$.fmatter.isEmpty(a)?$.fn.fmatter.defaultFormat(a,b):$.jgrid.parseDate.call(this,c.newformat,a,c.srcformat,c)},window.jqGridUtils={stringify:function(a){return JSON.stringify(a,function(a,b){return"function"==typeof b?b.toString():b})},parse:function(str){return JSON.parse(str,function(key,value){return"string"==typeof value&&-1!==value.indexOf("function")?eval("("+value+")"):value})},encode:function(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},jsonToXML:function(a,b){var c=$.extend({xmlDecl:'<?xml version="1.0" encoding="UTF-8" ?>\n',attr_prefix:"-",encode:!0},b||{}),d=this,e=function(a,b){return"#text"===a?c.encode?d.encode(b):b:"function"==typeof b?"<"+a+"><![CDATA["+b+"]]></"+a+">\n":""===b?"<"+a+">__EMPTY_STRING_</"+a+">\n":"<"+a+">"+(c.encode?d.encode(b):b)+"</"+a+">\n"},f=function(a,b){for(var c=[],d=0;d<b.length;d++){var h=b[d];c[c.length]="undefined"==typeof h||null==h?"<"+a+" />":"object"==typeof h&&h.constructor==Array?f(a,h):"object"==typeof h?g(a,h):e(a,h)}return c.length||(c[0]="<"+a+">__EMPTY_ARRAY_</"+a+">\n"),c.join("")},g=function(a,b){var h=[],i=[];for(var j in b)if(b.hasOwnProperty(j)){var k=b[j];j.charAt(0)!==c.attr_prefix?h[h.length]=null==k?"<"+j+" />":"object"==typeof k&&k.constructor===Array?f(j,k):"object"==typeof k?g(j,k):e(j,k):i[i.length]=" "+j.substring(1)+'="'+(c.encode?d.encode(k):k)+'"'}var l=i.join(""),m=h.join("");return null==a||(m=h.length>0?m.match(/\n/)?"<"+a+l+">\n"+m+"</"+a+">\n":"<"+a+l+">"+m+"</"+a+">\n":"<"+a+l+" />\n"),m},h=g(null,a);return c.xmlDecl+h},xmlToJSON:function(root,options){var o=$.extend({force_array:[],attr_prefix:"-"},options||{});if(root){var __force_array={};if(o.force_array)for(var i=0;i<o.force_array.length;i++)__force_array[o.force_array[i]]=1;"string"==typeof root&&(root=$.parseXML(root)),root.documentElement&&(root=root.documentElement);var addNode=function(hash,key,cnts,val){if("string"==typeof val)if(-1!==val.indexOf("function"))val=eval("("+val+")");else switch(val){case"__EMPTY_ARRAY_":val=[];break;case"__EMPTY_STRING_":val="";break;case"false":val=!1;break;case"true":val=!0}__force_array[key]?(1===cnts&&(hash[key]=[]),hash[key][hash[key].length]=val):1===cnts?hash[key]=val:2===cnts?hash[key]=[hash[key],val]:hash[key][hash[key].length]=val},parseElement=function(a){if(7!==a.nodeType){if(3===a.nodeType||4===a.nodeType){var b=a.nodeValue.match(/[^\x00-\x20]/);if(null==b)return;return a.nodeValue}var c,d,e,f,g={};if(a.attributes&&a.attributes.length)for(c={},d=0;d<a.attributes.length;d++)e=a.attributes[d].nodeName,"string"==typeof e&&(f=a.attributes[d].nodeValue,f&&(e=o.attr_prefix+e,"undefined"==typeof g[e]&&(g[e]=0),g[e]++,addNode(c,e,g[e],f)));if(a.childNodes&&a.childNodes.length){var h=!0;for(c&&(h=!1),d=0;d<a.childNodes.length&&h;d++){var i=a.childNodes[d].nodeType;3!==i&&4!==i&&(h=!1)}if(h)for(c||(c=""),d=0;d<a.childNodes.length;d++)c+=a.childNodes[d].nodeValue;else for(c||(c={}),d=0;d<a.childNodes.length;d++)e=a.childNodes[d].nodeName,"string"==typeof e&&(f=parseElement(a.childNodes[d]),f&&("undefined"==typeof g[e]&&(g[e]=0),g[e]++,addNode(c,e,g[e],f)))}return c}},json=parseElement(root);if(__force_array[root.nodeName]&&(json=[json]),11!==root.nodeType){var tmp={};tmp[root.nodeName]=json,json=tmp}return json}}}});
//# sourceMappingURL=jquery.jqGrid.min.js.map
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
var $parentNode = window.parent.document;
function $childNode(name) {
    return window.frames[name]
}

$(function(){
	// tooltips
	$('.tooltip-demo').tooltip({
	    selector: "[data-toggle=tooltip]",
	    container: "body"
	});
	
	// 使用animation.css修改Bootstrap Modal
	$('.modal').appendTo("body");
	
	$("[data-toggle=popover]").popover();
	
	//折叠ibox
	$('.collapse-link').click(function () {
	    var ibox = $(this).closest('div.ibox');
	    var button = $(this).find('i');
	    var content = ibox.find('div.ibox-content');
	    content.slideToggle(200);
	    button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
	    ibox.toggleClass('').toggleClass('border-bottom');
	    setTimeout(function () {
	        ibox.resize();
	        ibox.find('[id^=map-]').resize();
	    }, 50);
	});
	
	//关闭ibox
	$('.close-link').click(function () {
	    var content = $(this).closest('div.ibox');
	    content.remove();
	});
});

//判断当前页面是否在iframe中
if (top == this) {
    var gohome = '<div class="gohome"><a class="animated bounceInUp" href="index.html?v=4.0" title="返回首页"><i class="fa fa-home"></i></a></div>';
    $('body').append(gohome);
}

//animation.css
function animationHover(element, animation) {
    element = $(element);
    element.hover(
        function () {
            element.addClass('animated ' + animation);
        },
        function () {
            //动画完成之前移除class
            window.setTimeout(function () {
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

//拖动面板
function WinMove() {
    var element = "[class*=col]";
    var handle = ".ibox-title";
    var connect = "[class*=col]";
    $(element).sortable({
            handle: handle,
            connectWith: connect,
            tolerance: 'pointer',
            forcePlaceholderSize: true,
            opacity: 0.8,
        })
        .disableSelection();
};
!function(e,t,n){"use strict";!function o(e,t,n){function a(s,l){if(!t[s]){if(!e[s]){var i="function"==typeof require&&require;if(!l&&i)return i(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return a(n?n:t)},c,c.exports,o,e,t,n)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(o){var a,r,s,l,i=function(e){return e&&e.__esModule?e:{"default":e}},u=o("./modules/handle-dom"),c=o("./modules/utils"),d=o("./modules/handle-swal-dom"),f=o("./modules/handle-click"),p=o("./modules/handle-key"),m=i(p),v=o("./modules/default-params"),y=i(v),h=o("./modules/set-params"),g=i(h);s=l=function(){function o(e){var t=s;return t[e]===n?y["default"][e]:t[e]}var s=arguments[0];if(u.addClass(t.body,"stop-scrolling"),d.resetInput(),s===n)return c.logStr("SweetAlert expects at least 1 attribute!"),!1;var l=c.extend({},y["default"]);switch(typeof s){case"string":l.title=s,l.text=arguments[1]||"",l.type=arguments[2]||"";break;case"object":if(s.title===n)return c.logStr('Missing "title" argument!'),!1;l.title=s.title;for(var i in y["default"])l[i]=o(i);l.confirmButtonText=l.showCancelButton?"Confirm":y["default"].confirmButtonText,l.confirmButtonText=o("confirmButtonText"),l.doneFunction=arguments[1]||null;break;default:return c.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof s),!1}g["default"](l),d.fixVerticalPosition(),d.openModal(arguments[1]);for(var p=d.getModal(),v=p.querySelectorAll("button"),h=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],b=function(e){return f.handleButton(e,l,p)},w=0;w<v.length;w++)for(var C=0;C<h.length;C++){var S=h[C];v[w][S]=b}d.getOverlay().onclick=b,a=e.onkeydown;var x=function(e){return m["default"](e,l,p)};e.onkeydown=x,e.onfocus=function(){setTimeout(function(){r!==n&&(r.focus(),r=n)},0)}},s.setDefaults=l.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");c.extend(y["default"],e)},s.close=l.close=function(){var o=d.getModal();u.fadeOut(d.getOverlay(),5),u.fadeOut(o,5),u.removeClass(o,"showSweetAlert"),u.addClass(o,"hideSweetAlert"),u.removeClass(o,"visible");var s=o.querySelector(".sa-icon.sa-success");u.removeClass(s,"animate"),u.removeClass(s.querySelector(".sa-tip"),"animateSuccessTip"),u.removeClass(s.querySelector(".sa-long"),"animateSuccessLong");var l=o.querySelector(".sa-icon.sa-error");u.removeClass(l,"animateErrorIcon"),u.removeClass(l.querySelector(".sa-x-mark"),"animateXMark");var i=o.querySelector(".sa-icon.sa-warning");return u.removeClass(i,"pulseWarning"),u.removeClass(i.querySelector(".sa-body"),"pulseWarningIns"),u.removeClass(i.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var e=o.getAttribute("data-custom-class");u.removeClass(o,e)},300),u.removeClass(t.body,"stop-scrolling"),e.onkeydown=a,e.previousActiveElement&&e.previousActiveElement.focus(),r=n,clearTimeout(o.timeout),!0},s.showInputError=l.showInputError=function(e){var t=d.getModal(),n=t.querySelector(".sa-input-error");u.addClass(n,"show");var o=t.querySelector(".sa-error-container");u.addClass(o,"show"),o.querySelector("p").innerHTML=e,t.querySelector("input").focus()},s.resetInputError=l.resetInputError=function(e){if(e&&13===e.keyCode)return!1;var t=d.getModal(),n=t.querySelector(".sa-input-error");u.removeClass(n,"show");var o=t.querySelector(".sa-error-container");u.removeClass(o,"show")},"undefined"!=typeof e?e.sweetAlert=e.swal=s:c.logStr("SweetAlert is a frontend module!")},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#AEDEF4",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:""};n["default"]=o,t.exports=n["default"]},{}],3:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=t("./utils"),r=(t("./handle-swal-dom"),t("./handle-dom")),s=function(t,n,o){function s(e){m&&n.confirmButtonColor&&(p.style.backgroundColor=e)}var u,c,d,f=t||e.event,p=f.target||f.srcElement,m=-1!==p.className.indexOf("confirm"),v=-1!==p.className.indexOf("sweet-overlay"),y=r.hasClass(o,"visible"),h=n.doneFunction&&"true"===o.getAttribute("data-has-done-function");switch(m&&n.confirmButtonColor&&(u=n.confirmButtonColor,c=a.colorLuminance(u,-.04),d=a.colorLuminance(u,-.14)),f.type){case"mouseover":s(c);break;case"mouseout":s(u);break;case"mousedown":s(d);break;case"mouseup":s(c);break;case"focus":var g=o.querySelector("button.confirm"),b=o.querySelector("button.cancel");m?b.style.boxShadow="none":g.style.boxShadow="none";break;case"click":var w=o===p,C=r.isDescendant(o,p);if(!w&&!C&&y&&!n.allowOutsideClick)break;m&&h&&y?l(o,n):h&&y||v?i(o,n):r.isDescendant(o,p)&&"BUTTON"===p.tagName&&sweetAlert.close()}},l=function(e,t){var n=!0;r.hasClass(e,"show-input")&&(n=e.querySelector("input").value,n||(n="")),t.doneFunction(n),t.closeOnConfirm&&sweetAlert.close()},i=function(e,t){var n=String(t.doneFunction).replace(/\s/g,""),o="function("===n.substring(0,9)&&")"!==n.substring(9,10);o&&t.doneFunction(!1),t.closeOnCancel&&sweetAlert.close()};o["default"]={handleButton:s,handleConfirm:l,handleCancel:i},n.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(n,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){r(e,t)||(e.className+=" "+t)},l=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(r(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},i=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},u=function(e){e.style.opacity="",e.style.display="block"},c=function(e){if(e&&!e.length)return u(e);for(var t=0;t<e.length;++t)u(e[t])},d=function(e){e.style.opacity="",e.style.display="none"},f=function(e){if(e&&!e.length)return d(e);for(var t=0;t<e.length;++t)d(e[t])},p=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},m=function(e){e.style.left="-9999px",e.style.display="block";var t,n=e.clientHeight;return t="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding-top"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt((n+t)/2)+"px"},v=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)});o()}e.style.display="block"},y=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"});o()},h=function(n){if("function"==typeof MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var a=t.createEvent("MouseEvents");a.initEvent("click",!1,!1),n.dispatchEvent(a)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},g=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)};a.hasClass=r,a.addClass=s,a.removeClass=l,a.escapeHtml=i,a._show=u,a.show=c,a._hide=d,a.hide=f,a.isDescendant=p,a.getTopMargin=m,a.fadeIn=v,a.fadeOut=y,a.fireClick=h,a.stopEventPropagation=g},{}],5:[function(t,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=t("./handle-dom"),s=t("./handle-swal-dom"),l=function(t,o,a){var l=t||e.event,i=l.keyCode||l.which,u=a.querySelector("button.confirm"),c=a.querySelector("button.cancel"),d=a.querySelectorAll("button[tabindex]");if(-1!==[9,13,32,27].indexOf(i)){for(var f=l.target||l.srcElement,p=-1,m=0;m<d.length;m++)if(f===d[m]){p=m;break}9===i?(f=-1===p?u:p===d.length-1?d[0]:d[p+1],r.stopEventPropagation(l),f.focus(),o.confirmButtonColor&&s.setFocusStyle(f,o.confirmButtonColor)):13===i?("INPUT"===f.tagName&&(f=u,u.focus()),f=-1===p?u:n):27===i&&o.allowEscapeKey===!0?(f=c,r.fireClick(f,l)):f=n}};a["default"]=l,o.exports=a["default"]},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(n,o,a){var r=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(a,"__esModule",{value:!0});var s=n("./utils"),l=n("./handle-dom"),i=n("./default-params"),u=r(i),c=n("./injected-html"),d=r(c),f=".sweet-alert",p=".sweet-overlay",m=function(){var e=t.createElement("div");for(e.innerHTML=d["default"];e.firstChild;)t.body.appendChild(e.firstChild)},v=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=t.querySelector(f);return e||(m(),e=v()),e}),y=function(){var e=v();return e?e.querySelector("input"):void 0},h=function(){return t.querySelector(p)},g=function(e,t){var n=s.hexToRgb(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},b=function(n){var o=v();l.fadeIn(h(),10),l.show(o),l.addClass(o,"showSweetAlert"),l.removeClass(o,"hideSweetAlert"),e.previousActiveElement=t.activeElement;var a=o.querySelector("button.confirm");a.focus(),setTimeout(function(){l.addClass(o,"visible")},500);var r=o.getAttribute("data-timer");if("null"!==r&&""!==r){var s=n;o.timeout=setTimeout(function(){var e=(s||null)&&"true"===o.getAttribute("data-has-done-function");e?s(null):sweetAlert.close()},r)}},w=function(){var e=v(),t=y();l.removeClass(e,"show-input"),t.value=u["default"].inputValue,t.setAttribute("type",u["default"].inputType),t.setAttribute("placeholder",u["default"].inputPlaceholder),C()},C=function(e){if(e&&13===e.keyCode)return!1;var t=v(),n=t.querySelector(".sa-input-error");l.removeClass(n,"show");var o=t.querySelector(".sa-error-container");l.removeClass(o,"show")},S=function(){var e=v();e.style.marginTop=l.getTopMargin(v())};a.sweetAlertInitialize=m,a.getModal=v,a.getOverlay=h,a.getInput=y,a.setFocusStyle=g,a.openModal=b,a.resetInput=w,a.resetInputError=C,a.fixVerticalPosition=S},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <button class="confirm" tabIndex="1">OK</button>\n    </div></div>';n["default"]=o,t.exports=n["default"]},{}],8:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});var a=e("./utils"),r=e("./handle-swal-dom"),s=e("./handle-dom"),l=["error","warning","info","success","input","prompt"],i=function(e){var t=r.getModal(),o=t.querySelector("h2"),i=t.querySelector("p"),u=t.querySelector("button.cancel"),c=t.querySelector("button.confirm");if(o.innerHTML=e.html?e.title:s.escapeHtml(e.title).split("\n").join("<br>"),i.innerHTML=e.html?e.text:s.escapeHtml(e.text||"").split("\n").join("<br>"),e.text&&s.show(i),e.customClass)s.addClass(t,e.customClass),t.setAttribute("data-custom-class",e.customClass);else{var d=t.getAttribute("data-custom-class");s.removeClass(t,d),t.setAttribute("data-custom-class","")}if(s.hide(t.querySelectorAll(".sa-icon")),e.type&&!a.isIE8()){var f=function(){for(var o=!1,a=0;a<l.length;a++)if(e.type===l[a]){o=!0;break}if(!o)return logStr("Unknown alert type: "+e.type),{v:!1};var i=["success","error","warning","info"],u=n;-1!==i.indexOf(e.type)&&(u=t.querySelector(".sa-icon.sa-"+e.type),s.show(u));var c=r.getInput();switch(e.type){case"success":s.addClass(u,"animate"),s.addClass(u.querySelector(".sa-tip"),"animateSuccessTip"),s.addClass(u.querySelector(".sa-long"),"animateSuccessLong");break;case"error":s.addClass(u,"animateErrorIcon"),s.addClass(u.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":s.addClass(u,"pulseWarning"),s.addClass(u.querySelector(".sa-body"),"pulseWarningIns"),s.addClass(u.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":c.setAttribute("type",e.inputType),c.value=e.inputValue,c.setAttribute("placeholder",e.inputPlaceholder),s.addClass(t,"show-input"),setTimeout(function(){c.focus(),c.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof f)return f.v}if(e.imageUrl){var p=t.querySelector(".sa-icon.sa-custom");p.style.backgroundImage="url("+e.imageUrl+")",s.show(p);var m=80,v=80;if(e.imageSize){var y=e.imageSize.toString().split("x"),h=y[0],g=y[1];h&&g?(m=h,v=g):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+e.imageSize)}p.setAttribute("style",p.getAttribute("style")+"width:"+m+"px; height:"+v+"px")}t.setAttribute("data-has-cancel-button",e.showCancelButton),e.showCancelButton?u.style.display="inline-block":s.hide(u),t.setAttribute("data-has-confirm-button",e.showConfirmButton),e.showConfirmButton?c.style.display="inline-block":s.hide(c),e.cancelButtonText&&(u.innerHTML=s.escapeHtml(e.cancelButtonText)),e.confirmButtonText&&(c.innerHTML=s.escapeHtml(e.confirmButtonText)),e.confirmButtonColor&&(c.style.backgroundColor=e.confirmButtonColor,r.setFocusStyle(c,e.confirmButtonColor)),t.setAttribute("data-allow-outside-click",e.allowOutsideClick);var b=e.doneFunction?!0:!1;t.setAttribute("data-has-done-function",b),e.animation?"string"==typeof e.animation?t.setAttribute("data-animation",e.animation):t.setAttribute("data-animation","pop"):t.setAttribute("data-animation","none"),t.setAttribute("data-timer",e.timer)};o["default"]=i,t.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},r=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null},s=function(){return e.attachEvent&&!e.addEventListener},l=function(t){e.console&&e.console.log("SweetAlert: "+t)},i=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n,o,a="#";for(o=0;3>o;o++)n=parseInt(e.substr(2*o,2),16),n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16),a+=("00"+n).substr(n.length);return a};o.extend=a,o.hexToRgb=r,o.isIE8=s,o.logStr=l,o.colorLuminance=i},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document);
/* ========================================================================
 * bootstrap-switch - v3.3.2
 * http://www.bootstrap-switch.org
 * ========================================================================
 * Copyright 2012-2013 Mattia Larentis
 *
 * ========================================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================================
 */

(function(){var t=[].slice;!function(e,i){"use strict";var n;return n=function(){function t(t,i){null==i&&(i={}),this.$element=e(t),this.options=e.extend({},e.fn.bootstrapSwitch.defaults,{state:this.$element.is(":checked"),size:this.$element.data("size"),animate:this.$element.data("animate"),disabled:this.$element.is(":disabled"),readonly:this.$element.is("[readonly]"),indeterminate:this.$element.data("indeterminate"),inverse:this.$element.data("inverse"),radioAllOff:this.$element.data("radio-all-off"),onColor:this.$element.data("on-color"),offColor:this.$element.data("off-color"),onText:this.$element.data("on-text"),offText:this.$element.data("off-text"),labelText:this.$element.data("label-text"),handleWidth:this.$element.data("handle-width"),labelWidth:this.$element.data("label-width"),baseClass:this.$element.data("base-class"),wrapperClass:this.$element.data("wrapper-class")},i),this.prevOptions={},this.$wrapper=e("<div>",{"class":function(t){return function(){var e;return e=[""+t.options.baseClass].concat(t._getClasses(t.options.wrapperClass)),e.push(t.options.state?t.options.baseClass+"-on":t.options.baseClass+"-off"),null!=t.options.size&&e.push(t.options.baseClass+"-"+t.options.size),t.options.disabled&&e.push(t.options.baseClass+"-disabled"),t.options.readonly&&e.push(t.options.baseClass+"-readonly"),t.options.indeterminate&&e.push(t.options.baseClass+"-indeterminate"),t.options.inverse&&e.push(t.options.baseClass+"-inverse"),t.$element.attr("id")&&e.push(t.options.baseClass+"-id-"+t.$element.attr("id")),e.join(" ")}}(this)()}),this.$container=e("<div>",{"class":this.options.baseClass+"-container"}),this.$on=e("<span>",{html:this.options.onText,"class":this.options.baseClass+"-handle-on "+this.options.baseClass+"-"+this.options.onColor}),this.$off=e("<span>",{html:this.options.offText,"class":this.options.baseClass+"-handle-off "+this.options.baseClass+"-"+this.options.offColor}),this.$label=e("<span>",{html:this.options.labelText,"class":this.options.baseClass+"-label"}),this.$element.on("init.bootstrapSwitch",function(e){return function(){return e.options.onInit.apply(t,arguments)}}(this)),this.$element.on("switchChange.bootstrapSwitch",function(i){return function(n){return!1===i.options.onSwitchChange.apply(t,arguments)?i.$element.is(":radio")?e("[name='"+i.$element.attr("name")+"']").trigger("previousState.bootstrapSwitch",!0):i.$element.trigger("previousState.bootstrapSwitch",!0):void 0}}(this)),this.$container=this.$element.wrap(this.$container).parent(),this.$wrapper=this.$container.wrap(this.$wrapper).parent(),this.$element.before(this.options.inverse?this.$off:this.$on).before(this.$label).before(this.options.inverse?this.$on:this.$off),this.options.indeterminate&&this.$element.prop("indeterminate",!0),this._init(),this._elementHandlers(),this._handleHandlers(),this._labelHandlers(),this._formHandler(),this._externalLabelHandler(),this.$element.trigger("init.bootstrapSwitch",this.options.state)}return t.prototype._constructor=t,t.prototype.setPrevOptions=function(){return this.prevOptions=e.extend(!0,{},this.options)},t.prototype.state=function(t,i){return"undefined"==typeof t?this.options.state:this.options.disabled||this.options.readonly?this.$element:this.options.state&&!this.options.radioAllOff&&this.$element.is(":radio")?this.$element:(this.$element.is(":radio")?e("[name='"+this.$element.attr("name")+"']").trigger("setPreviousOptions.bootstrapSwitch"):this.$element.trigger("setPreviousOptions.bootstrapSwitch"),this.options.indeterminate&&this.indeterminate(!1),t=!!t,this.$element.prop("checked",t).trigger("change.bootstrapSwitch",i),this.$element)},t.prototype.toggleState=function(t){return this.options.disabled||this.options.readonly?this.$element:this.options.indeterminate?(this.indeterminate(!1),this.state(!0)):this.$element.prop("checked",!this.options.state).trigger("change.bootstrapSwitch",t)},t.prototype.size=function(t){return"undefined"==typeof t?this.options.size:(null!=this.options.size&&this.$wrapper.removeClass(this.options.baseClass+"-"+this.options.size),t&&this.$wrapper.addClass(this.options.baseClass+"-"+t),this._width(),this._containerPosition(),this.options.size=t,this.$element)},t.prototype.animate=function(t){return"undefined"==typeof t?this.options.animate:(t=!!t,t===this.options.animate?this.$element:this.toggleAnimate())},t.prototype.toggleAnimate=function(){return this.options.animate=!this.options.animate,this.$wrapper.toggleClass(this.options.baseClass+"-animate"),this.$element},t.prototype.disabled=function(t){return"undefined"==typeof t?this.options.disabled:(t=!!t,t===this.options.disabled?this.$element:this.toggleDisabled())},t.prototype.toggleDisabled=function(){return this.options.disabled=!this.options.disabled,this.$element.prop("disabled",this.options.disabled),this.$wrapper.toggleClass(this.options.baseClass+"-disabled"),this.$element},t.prototype.readonly=function(t){return"undefined"==typeof t?this.options.readonly:(t=!!t,t===this.options.readonly?this.$element:this.toggleReadonly())},t.prototype.toggleReadonly=function(){return this.options.readonly=!this.options.readonly,this.$element.prop("readonly",this.options.readonly),this.$wrapper.toggleClass(this.options.baseClass+"-readonly"),this.$element},t.prototype.indeterminate=function(t){return"undefined"==typeof t?this.options.indeterminate:(t=!!t,t===this.options.indeterminate?this.$element:this.toggleIndeterminate())},t.prototype.toggleIndeterminate=function(){return this.options.indeterminate=!this.options.indeterminate,this.$element.prop("indeterminate",this.options.indeterminate),this.$wrapper.toggleClass(this.options.baseClass+"-indeterminate"),this._containerPosition(),this.$element},t.prototype.inverse=function(t){return"undefined"==typeof t?this.options.inverse:(t=!!t,t===this.options.inverse?this.$element:this.toggleInverse())},t.prototype.toggleInverse=function(){var t,e;return this.$wrapper.toggleClass(this.options.baseClass+"-inverse"),e=this.$on.clone(!0),t=this.$off.clone(!0),this.$on.replaceWith(t),this.$off.replaceWith(e),this.$on=t,this.$off=e,this.options.inverse=!this.options.inverse,this.$element},t.prototype.onColor=function(t){var e;return e=this.options.onColor,"undefined"==typeof t?e:(null!=e&&this.$on.removeClass(this.options.baseClass+"-"+e),this.$on.addClass(this.options.baseClass+"-"+t),this.options.onColor=t,this.$element)},t.prototype.offColor=function(t){var e;return e=this.options.offColor,"undefined"==typeof t?e:(null!=e&&this.$off.removeClass(this.options.baseClass+"-"+e),this.$off.addClass(this.options.baseClass+"-"+t),this.options.offColor=t,this.$element)},t.prototype.onText=function(t){return"undefined"==typeof t?this.options.onText:(this.$on.html(t),this._width(),this._containerPosition(),this.options.onText=t,this.$element)},t.prototype.offText=function(t){return"undefined"==typeof t?this.options.offText:(this.$off.html(t),this._width(),this._containerPosition(),this.options.offText=t,this.$element)},t.prototype.labelText=function(t){return"undefined"==typeof t?this.options.labelText:(this.$label.html(t),this._width(),this.options.labelText=t,this.$element)},t.prototype.handleWidth=function(t){return"undefined"==typeof t?this.options.handleWidth:(this.options.handleWidth=t,this._width(),this._containerPosition(),this.$element)},t.prototype.labelWidth=function(t){return"undefined"==typeof t?this.options.labelWidth:(this.options.labelWidth=t,this._width(),this._containerPosition(),this.$element)},t.prototype.baseClass=function(t){return this.options.baseClass},t.prototype.wrapperClass=function(t){return"undefined"==typeof t?this.options.wrapperClass:(t||(t=e.fn.bootstrapSwitch.defaults.wrapperClass),this.$wrapper.removeClass(this._getClasses(this.options.wrapperClass).join(" ")),this.$wrapper.addClass(this._getClasses(t).join(" ")),this.options.wrapperClass=t,this.$element)},t.prototype.radioAllOff=function(t){return"undefined"==typeof t?this.options.radioAllOff:(t=!!t,t===this.options.radioAllOff?this.$element:(this.options.radioAllOff=t,this.$element))},t.prototype.onInit=function(t){return"undefined"==typeof t?this.options.onInit:(t||(t=e.fn.bootstrapSwitch.defaults.onInit),this.options.onInit=t,this.$element)},t.prototype.onSwitchChange=function(t){return"undefined"==typeof t?this.options.onSwitchChange:(t||(t=e.fn.bootstrapSwitch.defaults.onSwitchChange),this.options.onSwitchChange=t,this.$element)},t.prototype.destroy=function(){var t;return t=this.$element.closest("form"),t.length&&t.off("reset.bootstrapSwitch").removeData("bootstrap-switch"),this.$container.children().not(this.$element).remove(),this.$element.unwrap().unwrap().off(".bootstrapSwitch").removeData("bootstrap-switch"),this.$element},t.prototype._width=function(){var t,e;return t=this.$on.add(this.$off),t.add(this.$label).css("width",""),e="auto"===this.options.handleWidth?Math.max(this.$on.width(),this.$off.width()):this.options.handleWidth,t.width(e),this.$label.width(function(t){return function(i,n){return"auto"!==t.options.labelWidth?t.options.labelWidth:e>n?e:n}}(this)),this._handleWidth=this.$on.outerWidth(),this._labelWidth=this.$label.outerWidth(),this.$container.width(2*this._handleWidth+this._labelWidth),this.$wrapper.width(this._handleWidth+this._labelWidth)},t.prototype._containerPosition=function(t,e){return null==t&&(t=this.options.state),this.$container.css("margin-left",function(e){return function(){var i;return i=[0,"-"+e._handleWidth+"px"],e.options.indeterminate?"-"+e._handleWidth/2+"px":t?e.options.inverse?i[1]:i[0]:e.options.inverse?i[0]:i[1]}}(this)),e?setTimeout(function(){return e()},50):void 0},t.prototype._init=function(){var t,e;return t=function(t){return function(){return t.setPrevOptions(),t._width(),t._containerPosition(null,function(){return t.options.animate?t.$wrapper.addClass(t.options.baseClass+"-animate"):void 0})}}(this),this.$wrapper.is(":visible")?t():e=i.setInterval(function(n){return function(){return n.$wrapper.is(":visible")?(t(),i.clearInterval(e)):void 0}}(this),50)},t.prototype._elementHandlers=function(){return this.$element.on({"setPreviousOptions.bootstrapSwitch":function(t){return function(e){return t.setPrevOptions()}}(this),"previousState.bootstrapSwitch":function(t){return function(e){return t.options=t.prevOptions,t.options.indeterminate&&t.$wrapper.addClass(t.options.baseClass+"-indeterminate"),t.$element.prop("checked",t.options.state).trigger("change.bootstrapSwitch",!0)}}(this),"change.bootstrapSwitch":function(t){return function(i,n){var o;return i.preventDefault(),i.stopImmediatePropagation(),o=t.$element.is(":checked"),t._containerPosition(o),o!==t.options.state?(t.options.state=o,t.$wrapper.toggleClass(t.options.baseClass+"-off").toggleClass(t.options.baseClass+"-on"),n?void 0:(t.$element.is(":radio")&&e("[name='"+t.$element.attr("name")+"']").not(t.$element).prop("checked",!1).trigger("change.bootstrapSwitch",!0),t.$element.trigger("switchChange.bootstrapSwitch",[o]))):void 0}}(this),"focus.bootstrapSwitch":function(t){return function(e){return e.preventDefault(),t.$wrapper.addClass(t.options.baseClass+"-focused")}}(this),"blur.bootstrapSwitch":function(t){return function(e){return e.preventDefault(),t.$wrapper.removeClass(t.options.baseClass+"-focused")}}(this),"keydown.bootstrapSwitch":function(t){return function(e){if(e.which&&!t.options.disabled&&!t.options.readonly)switch(e.which){case 37:return e.preventDefault(),e.stopImmediatePropagation(),t.state(!1);case 39:return e.preventDefault(),e.stopImmediatePropagation(),t.state(!0)}}}(this)})},t.prototype._handleHandlers=function(){return this.$on.on("click.bootstrapSwitch",function(t){return function(e){return e.preventDefault(),e.stopPropagation(),t.state(!1),t.$element.trigger("focus.bootstrapSwitch")}}(this)),this.$off.on("click.bootstrapSwitch",function(t){return function(e){return e.preventDefault(),e.stopPropagation(),t.state(!0),t.$element.trigger("focus.bootstrapSwitch")}}(this))},t.prototype._labelHandlers=function(){return this.$label.on({click:function(t){return t.stopPropagation()},"mousedown.bootstrapSwitch touchstart.bootstrapSwitch":function(t){return function(e){return t._dragStart||t.options.disabled||t.options.readonly?void 0:(e.preventDefault(),e.stopPropagation(),t._dragStart=(e.pageX||e.originalEvent.touches[0].pageX)-parseInt(t.$container.css("margin-left"),10),t.options.animate&&t.$wrapper.removeClass(t.options.baseClass+"-animate"),t.$element.trigger("focus.bootstrapSwitch"))}}(this),"mousemove.bootstrapSwitch touchmove.bootstrapSwitch":function(t){return function(e){var i;if(null!=t._dragStart&&(e.preventDefault(),i=(e.pageX||e.originalEvent.touches[0].pageX)-t._dragStart,!(i<-t._handleWidth||i>0)))return t._dragEnd=i,t.$container.css("margin-left",t._dragEnd+"px")}}(this),"mouseup.bootstrapSwitch touchend.bootstrapSwitch":function(t){return function(e){var i;if(t._dragStart)return e.preventDefault(),t.options.animate&&t.$wrapper.addClass(t.options.baseClass+"-animate"),t._dragEnd?(i=t._dragEnd>-(t._handleWidth/2),t._dragEnd=!1,t.state(t.options.inverse?!i:i)):t.state(!t.options.state),t._dragStart=!1}}(this),"mouseleave.bootstrapSwitch":function(t){return function(e){return t.$label.trigger("mouseup.bootstrapSwitch")}}(this)})},t.prototype._externalLabelHandler=function(){var t;return t=this.$element.closest("label"),t.on("click",function(e){return function(i){return i.preventDefault(),i.stopImmediatePropagation(),i.target===t[0]?e.toggleState():void 0}}(this))},t.prototype._formHandler=function(){var t;return t=this.$element.closest("form"),t.data("bootstrap-switch")?void 0:t.on("reset.bootstrapSwitch",function(){return i.setTimeout(function(){return t.find("input").filter(function(){return e(this).data("bootstrap-switch")}).each(function(){return e(this).bootstrapSwitch("state",this.checked)})},1)}).data("bootstrap-switch",!0)},t.prototype._getClasses=function(t){var i,n,o,s;if(!e.isArray(t))return[this.options.baseClass+"-"+t];for(n=[],o=0,s=t.length;s>o;o++)i=t[o],n.push(this.options.baseClass+"-"+i);return n},t}(),e.fn.bootstrapSwitch=function(){var i,o,s;return o=arguments[0],i=2<=arguments.length?t.call(arguments,1):[],s=this,this.each(function(){var t,a;return t=e(this),a=t.data("bootstrap-switch"),a||t.data("bootstrap-switch",a=new n(this,o)),"string"==typeof o?s=a[o].apply(a,i):void 0}),s},e.fn.bootstrapSwitch.Constructor=n,e.fn.bootstrapSwitch.defaults={state:!0,size:null,animate:!0,disabled:!1,readonly:!1,indeterminate:!1,inverse:!1,radioAllOff:!1,onColor:"primary",offColor:"default",onText:"ON",offText:"OFF",labelText:"&nbsp;",handleWidth:"auto",labelWidth:"auto",baseClass:"bootstrap-switch",wrapperClass:"wrapper",onInit:function(){},onSwitchChange:function(){}}}(window.jQuery,window)}).call(this);/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 Jörn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function($) {

$.extend($.fn, {
	// http://docs.jquery.com/Plugins/Validation/validate
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data( this[0], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[0] );
		$.data( this[0], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.validateDelegate( ":submit", "click", function( event ) {
				if ( validator.settings.submitHandler ) {
					validator.submitButton = event.target;
				}
				// allow suppressing validation by adding a cancel class to the submit button
				if ( $(event.target).hasClass("cancel") ) {
					validator.cancelSubmit = true;
				}

				// allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $(event.target).attr("formnovalidate") !== undefined ) {
					validator.cancelSubmit = true;
				}
			});

			// validate the form on submit
			this.submit( function( event ) {
				if ( validator.settings.debug ) {
					// prevent form submit to be able to see console output
					event.preventDefault();
				}
				function handle() {
					var hidden;
					if ( validator.settings.submitHandler ) {
						if ( validator.submitButton ) {
							// insert a hidden input as a replacement for the missing submit button
							hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val( $(validator.submitButton).val() ).appendTo(validator.currentForm);
						}
						validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( validator.submitButton ) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						return false;
					}
					return true;
				}

				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}

		return validator;
	},
	// http://docs.jquery.com/Plugins/Validation/valid
	valid: function() {
		if ( $(this[0]).is("form")) {
			return this.validate().form();
		} else {
			var valid = true;
			var validator = $(this[0].form).validate();
			this.each(function() {
				valid = valid && validator.element(this);
			});
			return valid;
		}
	},
	// attributes: space seperated list of attributes to retrieve and remove
	removeAttrs: function( attributes ) {
		var result = {},
			$element = this;
		$.each(attributes.split(/\s/), function( index, value ) {
			result[value] = $element.attr(value);
			$element.removeAttr(value);
		});
		return result;
	},
	// http://docs.jquery.com/Plugins/Validation/rules
	rules: function( command, argument ) {
		var element = this[0];

		if ( command ) {
			var settings = $.data(element.form, "validator").settings;
			var staticRules = settings.rules;
			var existingRules = $.validator.staticRules(element);
			switch(command) {
			case "add":
				$.extend(existingRules, $.validator.normalizeRule(argument));
				// remove messages from rules, but allow them to be set separetely
				delete existingRules.messages;
				staticRules[element.name] = existingRules;
				if ( argument.messages ) {
					settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[element.name];
					return existingRules;
				}
				var filtered = {};
				$.each(argument.split(/\s/), function( index, method ) {
					filtered[method] = existingRules[method];
					delete existingRules[method];
				});
				return filtered;
			}
		}

		var data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules(element),
			$.validator.attributeRules(element),
			$.validator.dataRules(element),
			$.validator.staticRules(element)
		), element);

		// make sure required is at front
		if ( data.required ) {
			var param = data.required;
			delete data.required;
			data = $.extend({required: param}, data);
		}

		return data;
	}
});

// Custom selectors
$.extend($.expr[":"], {
	// http://docs.jquery.com/Plugins/Validation/blank
	blank: function( a ) { return !$.trim("" + $(a).val()); },
	// http://docs.jquery.com/Plugins/Validation/filled
	filled: function( a ) { return !!$.trim("" + $(a).val()); },
	// http://docs.jquery.com/Plugins/Validation/unchecked
	unchecked: function( a ) { return !$(a).prop("checked"); }
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray(arguments);
			args.unshift(source);
			return $.validator.format.apply( this, args );
		};
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray(arguments).slice(1);
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each(params, function( i, n ) {
		source = source.replace( new RegExp("\\{" + i + "\\}", "g"), function() {
			return n;
		});
	});
	return source;
};

$.extend($.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		errorElementClass : "error",
		focusInvalid: true,
		errorContainer: $([]),
		errorLabelContainer: $([]),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element, event ) {
			this.lastActive = element;

			// hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.addWrapper(this.errorsFor(element)).hide();
			}
		},
		onfocusout: function( element, event ) {
			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
				this.element(element);
			}
		},
		onkeyup: function( element, event ) {
			if ( event.which === 9 && this.elementValue(element) === "" ) {
				return;
			} else if ( element.name in this.submitted || element === this.lastElement ) {
				this.element(element);
			}
		},
		onclick: function( element, event ) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element(element);
			}
			// or option elements, check parent select in that case
			else if ( element.parentNode.name in this.submitted ) {
				this.element(element.parentNode);
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName(element.name).addClass(errorClass).removeClass(validClass);
			} else {
				$(element).addClass(errorClass).removeClass(validClass);
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName(element.name).removeClass(errorClass).addClass(validClass);
			} else {
				$(element).removeClass(errorClass).addClass(validClass);
			}
		}
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format("Please enter no more than {0} characters."),
		minlength: $.validator.format("Please enter at least {0} characters."),
		rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
		range: $.validator.format("Please enter a value between {0} and {1}."),
		max: $.validator.format("Please enter a value less than or equal to {0}."),
		min: $.validator.format("Please enter a value greater than or equal to {0}.")
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $(this.settings.errorLabelContainer);
			this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
			this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = (this.groups = {});
			$.each(this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split(/\s/);
				}
				$.each(value, function( index, name ) {
					groups[name] = key;
				});
			});
			var rules = this.settings.rules;
			$.each(rules, function( key, value ) {
				rules[key] = $.validator.normalizeRule(value);
			});

			function delegate(event) {
				var validator = $.data(this[0].form, "validator"),
					eventType = "on" + event.type.replace(/^validate/, "");
				if ( validator.settings[eventType] ) {
					validator.settings[eventType].call(validator, this[0], event);
				}
			}
			$(this.currentForm)
				.validateDelegate(":text, [type='password'], [type='file'], select, textarea, " +
					"[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
					"[type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], " +
					"[type='range'], [type='color'] ",
					"focusin focusout keyup", delegate)
				.validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", delegate);

			if ( this.settings.invalidHandler ) {
				$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
			}
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/form
		form: function() {
			this.checkForm();
			$.extend(this.submitted, this.errorMap);
			this.invalid = $.extend({}, this.errorMap);
			if ( !this.valid() ) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
				this.check( elements[i] );
			}
			return this.valid();
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/element
		element: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );
			this.lastElement = element;
			this.prepareElement( element );
			this.currentElements = $(element);
			var result = this.check( element ) !== false;
			if ( result ) {
				delete this.invalid[element.name];
			} else {
				this.invalid[element.name] = true;
			}
			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/showErrors
		showErrors: function( errors ) {
			if ( errors ) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[name],
						element: this.findByName(name)[0]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !(element.name in errors);
				});
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/resetForm
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$(this.currentForm).resetForm();
			}
			this.submitted = {};
			this.lastElement = null;
			this.prepareForm();
			this.hideErrors();
			this.elements().removeClass( this.settings.errorClass ).removeData( "previousValue" );
		},

		numberOfInvalids: function() {
			return this.objectLength(this.invalid);
		},

		objectLength: function( obj ) {
			var count = 0;
			for ( var i in obj ) {
				count++;
			}
			return count;
		},

		hideErrors: function() {
			this.addWrapper( this.toHide ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
					.filter(":visible")
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger("focusin");
				} catch(e) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep(this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			}).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// select all valid inputs inside the form (no submit or reset buttons)
			return $(this.currentForm)
			.find("input, select, textarea")
			.not(":submit, :reset, :image, [disabled]")
			.not( this.settings.ignore )
			.filter(function() {
				if ( !this.name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this);
				}

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength($(this).rules()) ) {
					return false;
				}

				rulesCache[this.name] = true;
				return true;
			});
		},

		clean: function( selector ) {
			return $(selector)[0];
		},

		errors: function() {
			var errorElementClass = this.settings.errorElementClass.replace(" ", ".");
			return $(this.settings.errorElement + "." + errorElementClass, this.errorContext);
		},

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $([]);
			this.toHide = $([]);
			this.currentElements = $([]);
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor(element);
		},

		elementValue: function( element ) {
			var type = $(element).attr("type"),
				val = $(element).val();

			if ( type === "radio" || type === "checkbox" ) {
				return $("input[name='" + $(element).attr("name") + "']:checked").val();
			}

			if ( typeof val === "string" ) {
				return val.replace(/\r/g, "");
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $(element).rules();
			var dependencyMismatch = false;
			var val = this.elementValue(element);
			var result;

			for (var method in rules ) {
				var rule = { method: method, parameters: rules[method] };
				try {

					result = $.validator.methods[method].call( this, val, element, rule.parameters );

					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor(element) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch(e) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength(rules) ) {
				this.successList.push(element);
			}
			return true;
		},

		// return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		customDataMessage: function( element, method ) {
			return $(element).data("msg-" + method.toLowerCase()) || (element.attributes && $(element).attr("data-msg-" + method.toLowerCase()));
		},

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[name];
			return m && (m.constructor === String ? m : m[method]);
		},

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for(var i = 0; i < arguments.length; i++) {
				if ( arguments[i] !== undefined ) {
					return arguments[i];
				}
			}
			return undefined;
		},

		defaultMessage: function( element, method ) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customDataMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[method],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call(this, rule.parameters, element);
			} else if (theregex.test(message)) {
				message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
			}
			this.errorList.push({
				message: message,
				element: element
			});

			this.errorMap[element.name] = message;
			this.submitted[element.name] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements;
			for ( i = 0; this.errorList[i]; i++ ) {
				var error = this.errorList[i];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[i]; i++ ) {
					this.showLabel( this.successList[i] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[i]; i++ ) {
					this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not(this.invalidElements());
		},

		invalidElements: function() {
			return $(this.errorList).map(function() {
				return this.element;
			});
		},

		showLabel: function( element, message ) {
			var label = this.errorsFor( element );
			if ( label.length ) {
				// refresh error/success class
				label.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );
				// replace message on existing label
				label.html(message);
			} else {
				// create label
				label = $("<" + this.settings.errorElement + ">")
					.attr("for", this.idOrName(element))
					.addClass(this.settings.errorElementClass)
					.html(message || "");
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
				}
				if ( !this.labelContainer.append(label).length ) {
					if ( this.settings.errorPlacement ) {
						this.settings.errorPlacement(label, $(element) );
					} else {
						label.insertAfter(element);
					}
				}
			}
			if ( !message && this.settings.success ) {
				label.text("");
				if ( typeof this.settings.success === "string" ) {
					label.addClass( this.settings.success );
				} else {
					this.settings.success( label, element );
				}
			}
			this.toShow = this.toShow.add(label);
		},

		errorsFor: function( element ) {
			var name = this.idOrName(element);
			return this.errors().filter(function() {
				return $(this).attr("for") === name;
			});
		},

		idOrName: function( element ) {
			return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
		},

		validationTargetFor: function( element ) {
			// if radio/checkbox, validate first element in group instead
			if ( this.checkable(element) ) {
				element = this.findByName( element.name ).not(this.settings.ignore)[0];
			}
			return element;
		},

		checkable: function( element ) {
			return (/radio|checkbox/i).test(element.type);
		},

		findByName: function( name ) {
			return $(this.currentForm).find("[name='" + name + "']");
		},

		getLength: function( value, element ) {
			switch( element.nodeName.toLowerCase() ) {
			case "select":
				return $("option:selected", element).length;
			case "input":
				if ( this.checkable( element) ) {
					return this.findByName(element.name).filter(":checked").length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
		},

		dependTypes: {
			"boolean": function( param, element ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$(param, element.form).length;
			},
			"function": function( param, element ) {
				return param(element);
			}
		},

		optional: function( element ) {
			var val = this.elementValue(element);
			return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[element.name] ) {
				this.pendingRequest++;
				this.pending[element.name] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[element.name];
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$(this.currentForm).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
				this.formSubmitted = false;
			}
		},

		previousValue: function( element ) {
			return $.data(element, "previousValue") || $.data(element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		}

	},

	classRuleSettings: {
		required: {required: true},
		email: {email: true},
		url: {url: true},
		date: {date: true},
		dateISO: {dateISO: true},
		number: {number: true},
		digits: {digits: true},
		creditcard: {creditcard: true}
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[className] = rules;
		} else {
			$.extend(this.classRuleSettings, className);
		}
	},

	classRules: function( element ) {
		var rules = {};
		var classes = $(element).attr("class");
		if ( classes ) {
			$.each(classes.split(" "), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend(rules, $.validator.classRuleSettings[this]);
				}
			});
		}
		return rules;
	},

	attributeRules: function( element ) {
		var rules = {};
		var $element = $(element);
		var type = $element[0].getAttribute("type");

		for (var method in $.validator.methods) {
			var value;

			// support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = $element.get(0).getAttribute(method);
				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}
				// force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr(method);
			}

			// convert the value to a number for number inputs, and for text for backwards compability
			// allows type="date" and others to be compared as strings
			if ( /min|max/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
				value = Number(value);
			}

			if ( value ) {
				rules[method] = value;
			} else if ( type === method && type !== 'range' ) {
				// exception: the jquery validate 'range' method
				// does not test for the html5 'range' type
				rules[method] = true;
			}
		}

		// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var method, value,
			rules = {}, $element = $(element);
		for (method in $.validator.methods) {
			value = $element.data("rule-" + method.toLowerCase());
			if ( value !== undefined ) {
				rules[method] = value;
			}
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {};
		var validator = $.data(element.form, "validator");
		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {
		// handle dependency check
		$.each(rules, function( prop, val ) {
			// ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[prop];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch (typeof val.depends) {
				case "string":
					keepRule = !!$(val.depends, element.form).length;
					break;
				case "function":
					keepRule = val.depends.call(element, element);
					break;
				}
				if ( keepRule ) {
					rules[prop] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[prop];
				}
			}
		});

		// evaluate parameters
		$.each(rules, function( rule, parameter ) {
			rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
		});

		// clean number parameters
		$.each(['minlength', 'maxlength'], function() {
			if ( rules[this] ) {
				rules[this] = Number(rules[this]);
			}
		});
		$.each(['rangelength', 'range'], function() {
			var parts;
			if ( rules[this] ) {
				if ( $.isArray(rules[this]) ) {
					rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
				} else if ( typeof rules[this] === "string" ) {
					parts = rules[this].split(/[\s,]+/);
					rules[this] = [Number(parts[0]), Number(parts[1])];
				}
			}
		});

		if ( $.validator.autoCreateRanges ) {
			// auto-create ranges
			if ( rules.min && rules.max ) {
				rules.range = [rules.min, rules.max];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength && rules.maxlength ) {
				rules.rangelength = [rules.minlength, rules.maxlength];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each(data.split(/\s/), function() {
				transformed[this] = true;
			});
			data = transformed;
		}
		return data;
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/addMethod
	addMethod: function( name, method, message ) {
		$.validator.methods[name] = method;
		$.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
		if ( method.length < 3 ) {
			$.validator.addClassRules(name, $.validator.normalizeRule(name));
		}
	},

	methods: {

		// http://docs.jquery.com/Plugins/Validation/Methods/required
		required: function( value, element, param ) {
			// check if dependency is met
			if ( !this.depend(param, element) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {
				// could be an array for select-multiple or a string, both are fine this way
				var val = $(element).val();
				return val && val.length > 0;
			}
			if ( this.checkable(element) ) {
				return this.getLength(value, element) > 0;
			}
			return $.trim(value).length > 0;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/email
		email: function( value, element ) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
			return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/url
		url: function( value, element ) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
			return this.optional(element) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/date
		date: function( value, element ) {
			return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/dateISO
		dateISO: function( value, element ) {
			return this.optional(element) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/number
		number: function( value, element ) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/digits
		digits: function( value, element ) {
			return this.optional(element) || /^\d+$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/creditcard
		// based on http://en.wikipedia.org/wiki/Luhn
		creditcard: function( value, element ) {
			if ( this.optional(element) ) {
				return "dependency-mismatch";
			}
			// accept only spaces, digits and dashes
			if ( /[^0-9 \-]+/.test(value) ) {
				return false;
			}
			var nCheck = 0,
				nDigit = 0,
				bEven = false;

			value = value.replace(/\D/g, "");

			for (var n = value.length - 1; n >= 0; n--) {
				var cDigit = value.charAt(n);
				nDigit = parseInt(cDigit, 10);
				if ( bEven ) {
					if ( (nDigit *= 2) > 9 ) {
						nDigit -= 9;
					}
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return (nCheck % 10) === 0;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/minlength
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || length >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/maxlength
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || length <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/rangelength
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
			return this.optional(element) || ( length >= param[0] && length <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/min
		min: function( value, element, param ) {
			return this.optional(element) || value >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/max
		max: function( value, element, param ) {
			return this.optional(element) || value <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/range
		range: function( value, element, param ) {
			return this.optional(element) || ( value >= param[0] && value <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/equalTo
		equalTo: function( value, element, param ) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $(param);
			if ( this.settings.onfocusout ) {
				target.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
					$(element).valid();
				});
			}
			return value === target.val();
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/remote
		remote: function( value, element, param ) {
			if ( this.optional(element) ) {
				return "dependency-mismatch";
			}

			var previous = this.previousValue(element);
			if (!this.settings.messages[element.name] ) {
				this.settings.messages[element.name] = {};
			}
			previous.originalMessage = this.settings.messages[element.name].remote;
			this.settings.messages[element.name].remote = previous.message;

			param = typeof param === "string" && {url:param} || param;

			if ( previous.old === value ) {
				return previous.valid;
			}

			previous.old = value;
			var validator = this;
			this.startRequest(element);
			var data = {};
			data[element.name] = value;
			$.ajax($.extend(true, {
				url: param,
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				success: function( response ) {
					validator.settings.messages[element.name].remote = previous.originalMessage;
					var valid = response === true || response === "true";
					if ( valid ) {
						var submitted = validator.formSubmitted;
						validator.prepareElement(element);
						validator.formSubmitted = submitted;
						validator.successList.push(element);
						delete validator.invalid[element.name];
						validator.showErrors();
					} else {
						var errors = {};
						var message = response || validator.defaultMessage( element, "remote" );
						errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
						validator.invalid[element.name] = true;
						validator.showErrors(errors);
					}
					previous.valid = valid;
					validator.stopRequest(element, valid);
				}
			}, param));
			return "pending";
		}

	}

});

// deprecated, use $.validator.format instead
$.format = $.validator.format;

}(jQuery));

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
(function($) {
	var pendingRequests = {};
	// Use a prefilter if available (1.5+)
	if ( $.ajaxPrefilter ) {
		$.ajaxPrefilter(function( settings, _, xhr ) {
			var port = settings.port;
			if ( settings.mode === "abort" ) {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = xhr;
			}
		});
	} else {
		// Proxy ajax
		var ajax = $.ajax;
		$.ajax = function( settings ) {
			var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
				port = ( "port" in settings ? settings : $.ajaxSettings ).port;
			if ( mode === "abort" ) {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = ajax.apply(this, arguments);
				return pendingRequests[port];
			}
			return ajax.apply(this, arguments);
		};
	}
}(jQuery));

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
(function($) {
	$.extend($.fn, {
		validateDelegate: function( delegate, type, handler ) {
			return this.bind(type, function( event ) {
				var target = $(event.target);
				if ( target.is(delegate) ) {
					return handler.apply(target, arguments);
				}
			});
		}
	});
}(jQuery));
/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 Jörn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function() {

	function stripHtml(value) {
		// remove html tags and space chars
		return value.replace(/<.[^<>]*?>/g, ' ').replace(/&nbsp;|&#160;/gi, ' ')
		// remove punctuation
		.replace(/[.(),;:!?%#$'"_+=\/\-]*/g,'');
	}
	jQuery.validator.addMethod("maxWords", function(value, element, params) {
		return this.optional(element) || stripHtml(value).match(/\b\w+\b/g).length <= params;
	}, jQuery.validator.format("Please enter {0} words or less."));

	jQuery.validator.addMethod("minWords", function(value, element, params) {
		return this.optional(element) || stripHtml(value).match(/\b\w+\b/g).length >= params;
	}, jQuery.validator.format("Please enter at least {0} words."));

	jQuery.validator.addMethod("rangeWords", function(value, element, params) {
		var valueStripped = stripHtml(value);
		var regex = /\b\w+\b/g;
		return this.optional(element) || valueStripped.match(regex).length >= params[0] && valueStripped.match(regex).length <= params[1];
	}, jQuery.validator.format("Please enter between {0} and {1} words."));

}());

jQuery.validator.addMethod("letterswithbasicpunc", function(value, element) {
	return this.optional(element) || /^[a-z\-.,()'"\s]+$/i.test(value);
}, "Letters or punctuation only please");

jQuery.validator.addMethod("alphanumeric", function(value, element) {
	return this.optional(element) || /^\w+$/i.test(value);
}, "Letters, numbers, and underscores only please");

jQuery.validator.addMethod("lettersonly", function(value, element) {
	return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Letters only please");

jQuery.validator.addMethod("nowhitespace", function(value, element) {
	return this.optional(element) || /^\S+$/i.test(value);
}, "No white space please");

jQuery.validator.addMethod("ziprange", function(value, element) {
	return this.optional(element) || /^90[2-5]\d\{2\}-\d{4}$/.test(value);
}, "Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx");

jQuery.validator.addMethod("zipcodeUS", function(value, element) {
	return this.optional(element) || /\d{5}-\d{4}$|^\d{5}$/.test(value);
}, "The specified US ZIP Code is invalid");

jQuery.validator.addMethod("integer", function(value, element) {
	return this.optional(element) || /^-?\d+$/.test(value);
}, "A positive or negative non-decimal number please");

jQuery.validator.addMethod("positive", function(value, element) {
	return this.optional(element) || /^\d+$/.test(value);
}, "请输入一个正整数！");
/**
 * Return true, if the value is a valid vehicle identification number (VIN).
 *
 * Works with all kind of text inputs.
 *
 * @example <input type="text" size="20" name="VehicleID" class="{required:true,vinUS:true}" />
 * @desc Declares a required input element whose value must be a valid vehicle identification number.
 *
 * @name jQuery.validator.methods.vinUS
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
jQuery.validator.addMethod("vinUS", function(v) {
	if (v.length !== 17) {
		return false;
	}
	var i, n, d, f, cd, cdv;
	var LL = ["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"];
	var VL = [1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9];
	var FL = [8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];
	var rs = 0;
	for(i = 0; i < 17; i++){
		f = FL[i];
		d = v.slice(i,i+1);
		if (i === 8) {
			cdv = d;
		}
		if (!isNaN(d)) {
			d *= f;
		} else {
			for (n = 0; n < LL.length; n++) {
				if (d.toUpperCase() === LL[n]) {
					d = VL[n];
					d *= f;
					if (isNaN(cdv) && n === 8) {
						cdv = LL[n];
					}
					break;
				}
			}
		}
		rs += d;
	}
	cd = rs % 11;
	if (cd === 10) {
		cd = "X";
	}
	if (cd === cdv) {
		return true;
	}
	return false;
}, "The specified vehicle identification number (VIN) is invalid.");

/**
 * Return true, if the value is a valid date, also making this formal check dd/mm/yyyy.
 *
 * @example jQuery.validator.methods.date("01/01/1900")
 * @result true
 *
 * @example jQuery.validator.methods.date("01/13/1990")
 * @result false
 *
 * @example jQuery.validator.methods.date("01.01.1900")
 * @result false
 *
 * @example <input name="pippo" class="{dateITA:true}" />
 * @desc Declares an optional input element whose value must be a valid date.
 *
 * @name jQuery.validator.methods.dateITA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
jQuery.validator.addMethod("dateITA", function(value, element) {
	var check = false;
	var re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
	if( re.test(value)) {
		var adata = value.split('/');
		var gg = parseInt(adata[0],10);
		var mm = parseInt(adata[1],10);
		var aaaa = parseInt(adata[2],10);
		var xdata = new Date(aaaa,mm-1,gg);
		if ( ( xdata.getFullYear() === aaaa ) && ( xdata.getMonth() === mm - 1 ) && ( xdata.getDate() === gg ) ){
			check = true;
		} else {
			check = false;
		}
	} else {
		check = false;
	}
	return this.optional(element) || check;
}, "Please enter a correct date");

/**
 * IBAN is the international bank account number.
 * It has a country - specific format, that is checked here too
 */
jQuery.validator.addMethod("iban", function(value, element) {
	// some quick simple tests to prevent needless work
	if (this.optional(element)) {
		return true;
	}
	if (!(/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(value))) {
		return false;
	}

	// check the country code and find the country specific format
	var iban = value.replace(/ /g,'').toUpperCase(); // remove spaces and to upper case
	var countrycode = iban.substring(0,2);
	var bbancountrypatterns = {
		'AL': "\\d{8}[\\dA-Z]{16}",
		'AD': "\\d{8}[\\dA-Z]{12}",
		'AT': "\\d{16}",
		'AZ': "[\\dA-Z]{4}\\d{20}",
		'BE': "\\d{12}",
		'BH': "[A-Z]{4}[\\dA-Z]{14}",
		'BA': "\\d{16}",
		'BR': "\\d{23}[A-Z][\\dA-Z]",
		'BG': "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
		'CR': "\\d{17}",
		'HR': "\\d{17}",
		'CY': "\\d{8}[\\dA-Z]{16}",
		'CZ': "\\d{20}",
		'DK': "\\d{14}",
		'DO': "[A-Z]{4}\\d{20}",
		'EE': "\\d{16}",
		'FO': "\\d{14}",
		'FI': "\\d{14}",
		'FR': "\\d{10}[\\dA-Z]{11}\\d{2}",
		'GE': "[\\dA-Z]{2}\\d{16}",
		'DE': "\\d{18}",
		'GI': "[A-Z]{4}[\\dA-Z]{15}",
		'GR': "\\d{7}[\\dA-Z]{16}",
		'GL': "\\d{14}",
		'GT': "[\\dA-Z]{4}[\\dA-Z]{20}",
		'HU': "\\d{24}",
		'IS': "\\d{22}",
		'IE': "[\\dA-Z]{4}\\d{14}",
		'IL': "\\d{19}",
		'IT': "[A-Z]\\d{10}[\\dA-Z]{12}",
		'KZ': "\\d{3}[\\dA-Z]{13}",
		'KW': "[A-Z]{4}[\\dA-Z]{22}",
		'LV': "[A-Z]{4}[\\dA-Z]{13}",
		'LB': "\\d{4}[\\dA-Z]{20}",
		'LI': "\\d{5}[\\dA-Z]{12}",
		'LT': "\\d{16}",
		'LU': "\\d{3}[\\dA-Z]{13}",
		'MK': "\\d{3}[\\dA-Z]{10}\\d{2}",
		'MT': "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
		'MR': "\\d{23}",
		'MU': "[A-Z]{4}\\d{19}[A-Z]{3}",
		'MC': "\\d{10}[\\dA-Z]{11}\\d{2}",
		'MD': "[\\dA-Z]{2}\\d{18}",
		'ME': "\\d{18}",
		'NL': "[A-Z]{4}\\d{10}",
		'NO': "\\d{11}",
		'PK': "[\\dA-Z]{4}\\d{16}",
		'PS': "[\\dA-Z]{4}\\d{21}",
		'PL': "\\d{24}",
		'PT': "\\d{21}",
		'RO': "[A-Z]{4}[\\dA-Z]{16}",
		'SM': "[A-Z]\\d{10}[\\dA-Z]{12}",
		'SA': "\\d{2}[\\dA-Z]{18}",
		'RS': "\\d{18}",
		'SK': "\\d{20}",
		'SI': "\\d{15}",
		'ES': "\\d{20}",
		'SE': "\\d{20}",
		'CH': "\\d{5}[\\dA-Z]{12}",
		'TN': "\\d{20}",
		'TR': "\\d{5}[\\dA-Z]{17}",
		'AE': "\\d{3}\\d{16}",
		'GB': "[A-Z]{4}\\d{14}",
		'VG': "[\\dA-Z]{4}\\d{16}"
	};
	var bbanpattern = bbancountrypatterns[countrycode];
	// As new countries will start using IBAN in the
	// future, we only check if the countrycode is known.
	// This prevents false negatives, while almost all
	// false positives introduced by this, will be caught
	// by the checksum validation below anyway.
	// Strict checking should return FALSE for unknown
	// countries.
	if (typeof bbanpattern !== 'undefined') {
		var ibanregexp = new RegExp("^[A-Z]{2}\\d{2}" + bbanpattern + "$", "");
		if (!(ibanregexp.test(iban))) {
			return false; // invalid country specific format
		}
	}

	// now check the checksum, first convert to digits
	var ibancheck = iban.substring(4,iban.length) + iban.substring(0,4);
	var ibancheckdigits = "";
	var leadingZeroes = true;
	var charAt;
	for (var i =0; i<ibancheck.length; i++) {
		charAt = ibancheck.charAt(i);
		if (charAt !== "0") {
			leadingZeroes = false;
		}
		if (!leadingZeroes) {
			ibancheckdigits += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(charAt);
		}
	}

	// calculate the result of: ibancheckdigits % 97
    var cRest = '';
    var cOperator = '';
	for (var p=0; p<ibancheckdigits.length; p++) {
		var cChar = ibancheckdigits.charAt(p);
		cOperator = '' + cRest + '' + cChar;
		cRest = cOperator % 97;
    }
	return cRest === 1;
}, "Please specify a valid IBAN");

jQuery.validator.addMethod("dateNL", function(value, element) {
	return this.optional(element) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(value);
}, "Please enter a correct date");

/**
 * Dutch phone numbers have 10 digits (or 11 and start with +31).
 */
jQuery.validator.addMethod("phoneNL", function(value, element) {
	return this.optional(element) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(value);
}, "Please specify a valid phone number.");

jQuery.validator.addMethod("mobileNL", function(value, element) {
	return this.optional(element) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(value);
}, "Please specify a valid mobile number");

jQuery.validator.addMethod("postalcodeNL", function(value, element) {
	return this.optional(element) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(value);
}, "Please specify a valid postal code");

/*
 * Dutch bank account numbers (not 'giro' numbers) have 9 digits
 * and pass the '11 check'.
 * We accept the notation with spaces, as that is common.
 * acceptable: 123456789 or 12 34 56 789
 */
jQuery.validator.addMethod("bankaccountNL", function(value, element) {
	if (this.optional(element)) {
		return true;
	}
	if (!(/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(value))) {
		return false;
	}
	// now '11 check'
	var account = value.replace(/ /g,''); // remove spaces
	var sum = 0;
	var len = account.length;
	for (var pos=0; pos<len; pos++) {
		var factor = len - pos;
		var digit = account.substring(pos, pos+1);
		sum = sum + factor * digit;
	}
	return sum % 11 === 0;
}, "Please specify a valid bank account number");

/**
 * Dutch giro account numbers (not bank numbers) have max 7 digits
 */
jQuery.validator.addMethod("giroaccountNL", function(value, element) {
	return this.optional(element) || /^[0-9]{1,7}$/.test(value);
}, "Please specify a valid giro account number");

jQuery.validator.addMethod("bankorgiroaccountNL", function(value, element) {
	return this.optional(element) ||
			($.validator.methods["bankaccountNL"].call(this, value, element)) ||
			($.validator.methods["giroaccountNL"].call(this, value, element));
}, "Please specify a valid bank or giro account number");


jQuery.validator.addMethod("time", function(value, element) {
	return this.optional(element) || /^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(value);
}, "Please enter a valid time, between 00:00 and 23:59");
jQuery.validator.addMethod("time12h", function(value, element) {
	return this.optional(element) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(value);
}, "Please enter a valid time in 12-hour am/pm format");

/**
 * matches US phone number format
 *
 * where the area code may not start with 1 and the prefix may not start with 1
 * allows '-' or ' ' as a separator and allows parens around area code
 * some people may want to put a '1' in front of their number
 *
 * 1(212)-999-2345 or
 * 212 999 2344 or
 * 212-999-0983
 *
 * but not
 * 111-123-5434
 * and not
 * 212 123 4567
 */
jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
	phone_number = phone_number.replace(/\s+/g, "");
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
}, "Please specify a valid phone number");

jQuery.validator.addMethod('phoneUK', function(phone_number, element) {
	phone_number = phone_number.replace(/\(|\)|\s+|-/g,'');
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/);
}, 'Please specify a valid phone number');

jQuery.validator.addMethod('mobileUK', function(phone_number, element) {
	phone_number = phone_number.replace(/\(|\)|\s+|-/g,'');
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[45789]\d{2}|624)\s?\d{3}\s?\d{3})$/);
}, 'Please specify a valid mobile number');

//Matches UK landline + mobile, accepting only 01-3 for landline or 07 for mobile to exclude many premium numbers
jQuery.validator.addMethod('phonesUK', function(phone_number, element) {
	phone_number = phone_number.replace(/\(|\)|\s+|-/g,'');
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[45789]\d{8}|624\d{6})))$/);
}, 'Please specify a valid uk phone number');
// On the above three UK functions, do the following server side processing:
//  Compare original input with this RegEx pattern:
//   ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
//  Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
//  Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
// A number of very detailed GB telephone number RegEx patterns can also be found at:
// http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers

// Matches UK postcode. Does not match to UK Channel Islands that have their own postcodes (non standard UK)
jQuery.validator.addMethod('postcodeUK', function(value, element) {
	return this.optional(element) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(value);
}, 'Please specify a valid UK postcode');

// TODO check if value starts with <, otherwise don't try stripping anything
jQuery.validator.addMethod("strippedminlength", function(value, element, param) {
	return jQuery(value).text().length >= param;
}, jQuery.validator.format("Please enter at least {0} characters"));

// same as email, but TLD is optional
jQuery.validator.addMethod("email2", function(value, element, param) {
	return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
}, jQuery.validator.messages.email);

// same as url, but TLD is optional
jQuery.validator.addMethod("url2", function(value, element, param) {
	return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}, jQuery.validator.messages.url);

// NOTICE: Modified version of Castle.Components.Validator.CreditCardValidator
// Redistributed under the the Apache License 2.0 at http://www.apache.org/licenses/LICENSE-2.0
// Valid Types: mastercard, visa, amex, dinersclub, enroute, discover, jcb, unknown, all (overrides all other settings)
jQuery.validator.addMethod("creditcardtypes", function(value, element, param) {
	if (/[^0-9\-]+/.test(value)) {
		return false;
	}

	value = value.replace(/\D/g, "");

	var validTypes = 0x0000;

	if (param.mastercard) {
		validTypes |= 0x0001;
	}
	if (param.visa) {
		validTypes |= 0x0002;
	}
	if (param.amex) {
		validTypes |= 0x0004;
	}
	if (param.dinersclub) {
		validTypes |= 0x0008;
	}
	if (param.enroute) {
		validTypes |= 0x0010;
	}
	if (param.discover) {
		validTypes |= 0x0020;
	}
	if (param.jcb) {
		validTypes |= 0x0040;
	}
	if (param.unknown) {
		validTypes |= 0x0080;
	}
	if (param.all) {
		validTypes = 0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0020 | 0x0040 | 0x0080;
	}
	if (validTypes & 0x0001 && /^(5[12345])/.test(value)) { //mastercard
		return value.length === 16;
	}
	if (validTypes & 0x0002 && /^(4)/.test(value)) { //visa
		return value.length === 16;
	}
	if (validTypes & 0x0004 && /^(3[47])/.test(value)) { //amex
		return value.length === 15;
	}
	if (validTypes & 0x0008 && /^(3(0[012345]|[68]))/.test(value)) { //dinersclub
		return value.length === 14;
	}
	if (validTypes & 0x0010 && /^(2(014|149))/.test(value)) { //enroute
		return value.length === 15;
	}
	if (validTypes & 0x0020 && /^(6011)/.test(value)) { //discover
		return value.length === 16;
	}
	if (validTypes & 0x0040 && /^(3)/.test(value)) { //jcb
		return value.length === 16;
	}
	if (validTypes & 0x0040 && /^(2131|1800)/.test(value)) { //jcb
		return value.length === 15;
	}
	if (validTypes & 0x0080) { //unknown
		return true;
	}
	return false;
}, "Please enter a valid credit card number.");

jQuery.validator.addMethod("ipv4", function(value, element, param) {
	return this.optional(element) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(value);
}, "Please enter a valid IP v4 address.");

jQuery.validator.addMethod("ipv6", function(value, element, param) {
	return this.optional(element) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(value);
}, "Please enter a valid IP v6 address.");

/**
* Return true if the field value matches the given format RegExp
*
* @example jQuery.validator.methods.pattern("AR1004",element,/^AR\d{4}$/)
* @result true
*
* @example jQuery.validator.methods.pattern("BR1004",element,/^AR\d{4}$/)
* @result false
*
* @name jQuery.validator.methods.pattern
* @type Boolean
* @cat Plugins/Validate/Methods
*/
jQuery.validator.addMethod("pattern", function(value, element, param) {
	if (this.optional(element)) {
		return true;
	}
	if (typeof param === 'string') {
		param = new RegExp('^(?:' + param + ')$');
	}
	return param.test(value);
}, "Invalid format.");


/*
 * Lets you say "at least X inputs that match selector Y must be filled."
 *
 * The end result is that neither of these inputs:
 *
 *  <input class="productinfo" name="partnumber">
 *  <input class="productinfo" name="description">
 *
 *  ...will validate unless at least one of them is filled.
 *
 * partnumber:  {require_from_group: [1,".productinfo"]},
 * description: {require_from_group: [1,".productinfo"]}
 *
 */
jQuery.validator.addMethod("require_from_group", function(value, element, options) {
	var validator = this;
	var selector = options[1];
	var validOrNot = $(selector, element.form).filter(function() {
		return validator.elementValue(this);
	}).length >= options[0];

	if(!$(element).data('being_validated')) {
		var fields = $(selector, element.form);
		fields.data('being_validated', true);
		fields.valid();
		fields.data('being_validated', false);
	}
	return validOrNot;
}, jQuery.format("Please fill at least {0} of these fields."));

/*
 * Lets you say "either at least X inputs that match selector Y must be filled,
 * OR they must all be skipped (left blank)."
 *
 * The end result, is that none of these inputs:
 *
 *  <input class="productinfo" name="partnumber">
 *  <input class="productinfo" name="description">
 *  <input class="productinfo" name="color">
 *
 *  ...will validate unless either at least two of them are filled,
 *  OR none of them are.
 *
 * partnumber:  {skip_or_fill_minimum: [2,".productinfo"]},
 *  description: {skip_or_fill_minimum: [2,".productinfo"]},
 * color:       {skip_or_fill_minimum: [2,".productinfo"]}
 *
 */
jQuery.validator.addMethod("skip_or_fill_minimum", function(value, element, options) {
	var validator = this,
		numberRequired = options[0],
		selector = options[1];
	var numberFilled = $(selector, element.form).filter(function() {
		return validator.elementValue(this);
	}).length;
	var valid = numberFilled >= numberRequired || numberFilled === 0;

	if(!$(element).data('being_validated')) {
		var fields = $(selector, element.form);
		fields.data('being_validated', true);
		fields.valid();
		fields.data('being_validated', false);
	}
	return valid;
}, jQuery.format("Please either skip these fields or fill at least {0} of them."));

// Accept a value from a file input based on a required mimetype
jQuery.validator.addMethod("accept", function(value, element, param) {
	// Split mime on commas in case we have multiple types we can accept
	var typeParam = typeof param === "string" ? param.replace(/\s/g, '').replace(/,/g, '|') : "image/*",
	optionalValue = this.optional(element),
	i, file;

	// Element is optional
	if (optionalValue) {
		return optionalValue;
	}

	if ($(element).attr("type") === "file") {
		// If we are using a wildcard, make it regex friendly
		typeParam = typeParam.replace(/\*/g, ".*");

		// Check if the element has a FileList before checking each file
		if (element.files && element.files.length) {
			for (i = 0; i < element.files.length; i++) {
				file = element.files[i];

				// Grab the mimetype from the loaded file, verify it matches
				if (!file.type.match(new RegExp( ".?(" + typeParam + ")$", "i"))) {
					return false;
				}
			}
		}
	}

	// Either return true because we've validated each file, or because the
	// browser does not support element.files and the FileList feature
	return true;
}, jQuery.format("Please enter a value with a valid mimetype."));

//Older "accept" file extension method. Old docs: http://docs.jquery.com/Plugins/Validation/Methods/accept
jQuery.validator.addMethod("extension", function(value, element, param) {
	param = typeof param === "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
	return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
}, jQuery.format("请上传后缀为{0}的文件！"));

jQuery.validator.addMethod("img", function(value, element, param) {
	var pattern = "png|jpe?g|gif|PNG|JPE?G|GIF";
	return this.optional(element) || value.match(new RegExp(".(" + pattern + ")$", "i"));
//	var img = /^(([a-zA-Z]:)|(\\{2}\w+)\$?)(\\(\w[\w].*))(.JPEG|.jpeg|.JPG|.jpg|.GIF|.gif|.PNG|.png)$/;
//	return this.optional(element) || value.match(new RegExp(".(" + img + ")$", "i"));
}, jQuery.format("请上传图片格式文件！"));

jQuery.validator.addMethod("phone", function(value, element, param) {
	var length = value.length;
	var mobile = /^1[358]\d{9}$/;
	var mobile1 = /^147\d{8}$/;
	return this.optional(element) || (mobile.test(value) && length == 11 ) || (mobile1.test(value) && length == 11 );
}, jQuery.format("请输入正确的手机号码！"));

jQuery.validator.addMethod("tel", function(value, element, param) {
	var length = value.length;
	var tel = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/;
	return this.optional(element) || (tel.test(value));
}, jQuery.format("请输入正确固定电话号码！"));

jQuery.validator.addMethod("qq", function(value, element, param) {
	var length = value.length;
	var qq = /^\d{5,11}$/;
	return this.optional(element) || (qq.test(value));
}, jQuery.format("请输入正确的QQ号码！"));

jQuery.validator.addMethod("idcard", function(value, element, param) {
	var length = value.length;
	var idcard = /^[0-9a-zA-Z]{18}$/;
	return this.optional(element) || (idcard.test(value));
}, jQuery.format("请输入正确的身份证号码！"));

jQuery.validator.addMethod("orderNo", function(value, element, param) {
	var value = Number(value);
	return this.optional(element) || (value>=0&&value<=9999);
}, jQuery.format("请输入正确的排序号！"));

jQuery.validator.addMethod("ip", function(value, element, param) {
	return this.optional(element) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(value);
}, "请输入正确的IP地址！");

jQuery.validator.addMethod("postcode", function(value, element, param) {
	return this.optional(element) || /^[0-9]{6}$/i.test(value);
}, "请输入正确的邮政编码！");

jQuery.validator.addMethod("notEqualTo", function(value, element, param) {
	var val = $("#"+param).val();
	return !(value==val);
}, "值相同！");

jQuery.validator.addMethod("equalTo", function(value, element, param) {
	var val = $("#"+param).val();
	return (value==val);
}, "值不相同！");

jQuery.validator.addMethod("gtOrEq", function(value, element, param) {
	var val = $("#"+param).val();
	return +value>=+val;
}, "值太小！");

jQuery.validator.addMethod("ltOrEq", function(value, element, param) {
	var val = $("#"+param).val();
	return +value<=+val;
}, "值太大！");

jQuery.validator.addMethod("compareDate", function(value, element, param) {
	var startDate = $(param).val();
    if ( value == "" ){
    	return true;
    }
    var a1 = startDate.split("-");
    var b1 = value.split("-");
    var date1 = new Date(a1[0],a1[1]-1,a1[2]);
    var date2 = new Date(b1[0],b1[1]-1,b1[2]); 
    return date1 <= date2;
}, "结束日期必须大于开始日期！");

jQuery.validator.addMethod("compareDateTS", function(value, element, param) {
    var a1 = param.split("-");
    var b1 = value.split("-");
    var date1 = new Date(a1[0],a1[1]-1,a1[2]);
    var date2 = new Date(b1[0],b1[1]-1,b1[2]); 
    return date1 <= date2;
}, "日期过早！");

jQuery.validator.addMethod("compareDateTimeTS", function(value, element, param) {
	if ( param == "" ){
    	return true;
    }
	var reCat = /(\d{1,4})/gm;  
	var t1 = param.match(reCat);
    t1[1] = t1[1] - 1;
    eval('var date1 = new Date('+t1.join(',')+');');
    var t2 = value.match(reCat);
    t2[1] = t2[1] - 1;
    eval('var date2 = new Date('+t2.join(',')+');');
    return date1 <= date2;
}, "时间过早！");

jQuery.validator.addMethod("compareDateTime", function(value, element, param) {
    var reCat = /(\d{1,4})/gm;  
	var startDate = $(param).val();
    if ( value == "" ){
    	return true;
    }
    var t1 = startDate.match(reCat);
    t1[1] = t1[1] - 1;
    eval('var date1 = new Date('+t1.join(',')+');');
    var t2 = value.match(reCat);
    t2[1] = t2[1] - 1;
    eval('var date2 = new Date('+t2.join(',')+');');
    return date1 <= date2;
}, "结束时间必须大于开始时间！");
//扩展方法，结束日期必须比开始日期大
jQuery.validator.addMethod("compareDateBQ",function(value, element, param) {
    //var startDate = jQuery(param).val() + ":00";//补全yyyy-MM-dd HH:mm:ss格式
    //value = value + ":00";
    var startDate = $(param).val();
    //2012-09-13 00:00:00
    if ( startDate == "" && value == "" ){
    	return true;
    }
    var a = startDate.split(/[- :]/);
	var date1 = new Date(a[0], a[1]-1, a[2], a[3], a[4], a[5]);
   	var b = value.split(/[- :]/);
	var date2 = new Date(b[0], b[1]-1, b[2], b[3], b[4], b[5]);
	return date1 < date2;
},"结束日期必须大于开始日期！");
jQuery.validator.addMethod("csv", function(value, element, param) {
	var csv = /^[0-9]+(\,[0-9]+)*\,?$/;
	return this.optional(element) || csv.test(value);
}, jQuery.format("请输入正确内容！"));

jQuery.validator.addMethod("money", function(value, element, param) {
	var money = /^(-)?(([1-9]{1}\d*)|([0]{1}))(\.(\d){1,3})?$/;
	return this.optional(element) || money.test(value);
}, jQuery.format("请输入正确金额！"));//是否特殊字符
jQuery.validator.addMethod('specChar', function(invalue, element){
	return this.optional(element) || invalue.match(/^[^<>&@*#]*$/);
},"请不要输入特殊字符作为登录名!");

//扩展方法，校验正负整数
jQuery.validator.addMethod('digitIncludeMinus', function(value, element) {
	return this.optional(element) || (/^([-])?\d+$/.test(value));
  }, '请输入正确的数字！');

//扩展方法，校验是否是手机号
jQuery.validator.addMethod('isMobile', function(value, element){
	var length = value.length;
	mobile = /^1[3578]\d{9}$/;
	mobile1 = /^147\d{8}$/;
	return this.optional(element) || (mobile.test(value) && length == 11 ) || (mobile1.test(value) && length == 11 );
},"请输入正确的手机号码");

//扩展方法，校验是否是手机号
jQuery.validator.addMethod('isMobileOrEmail', function(value, element){
	var length = value.length;
	return this.optional(element) || CheckTool.checkUserName(value) || ('admin'==value);
},"请输入正确的手机号码/邮箱");

//扩展方法，校验是否是电话号码
jQuery.validator.addMethod('isTel', function(value, element){
	tel = /^0[0-9]{2,3}\d{6,9}$/;
	mobile = /^1[3578]\d{9}$/;
	mobile1 = /^147\d{8}$/;
	return this.optional(element) || (tel.test(value)) || (mobile.test(value)) || (mobile1.test(value));
},"请输入正确的电话号码");

//扩展方法，校验IP地址
jQuery.validator.addMethod('ipAddr', function(ipvalue, element) {
    return this.optional(element) ||ipvalue.match(/^\d+\.\d+\.\d+\.\d+$/);
  }, '请输入有效的IP地址');

//扩展方法，校验qq
jQuery.validator.addMethod('qq', function(value, element) {
	qq = /^\d{5,11}$/;
	return this.optional(element) || (qq.test(value));
  }, '请输入正确的QQ号码！');

//扩展方法，校验身份证号码
jQuery.validator.addMethod('idcard', function(value, element) {
	idcard = /^[0-9a-zA-Z]{18}$/;
	return this.optional(element) || (idcard.test(value));
  }, '请输入正确的身份证号码！');

//扩展方法，校验邮政编码
jQuery.validator.addMethod('postCode', function(value, element) {
	postCode = /^[1-9]\d{5}(?!\d)$/;
	return this.optional(element) || (postCode.test(value));
  }, '请输入正确的邮政编码！');

//扩展方法，校验400号码
jQuery.validator.addMethod('isEps400', function(value, element) {
	value = $.trim(value);
	element.value = value; 
	eps400 = /^400\d{7}$/;
	return this.optional(element) || (eps400.test(value));
  }, '请输入正确的400号码！');

//扩展方法，钱数，必须是非负整数或小数，小数点后最多3位
jQuery.validator.addMethod('money', function(value, element) {
	value = $.trim(value);
	element.value = value; 
	money = /^[0-9]{1,9}([.]{1}[0-9]{1,3})?$/;
	return this.optional(element) || (money.test(value));
  }, '请输入正确的金额');

//扩展方法，小数点后最多3位判断,包括整数和负数
jQuery.validator.addMethod('threePoint', function(value, element) {
	value = $.trim(value);
	element.value = value; 
	money = /^-?\d+([.]{1}[0-9]{1,3})?$/;
	return this.optional(element) || (money.test(value));
  }, '请输入小数点后最多三位的数字');

//扩展方法，金额必须大于0，且非负的小数点后最多3位
jQuery.validator.addMethod('moneyOverZero', function(value, element) {
	value = $.trim(value);
	if(value <= 0){
		return false;
	} else {
		return true;
	}
	/*element.value = value; 
	var length = value.length;
	money = /^[0-9]+([.]{1}[0-9]{1,3})?$/;
	return this.optional(element) || (money.test(value));*/
  }, '请输入大于0的数字');

//扩展方法，代理提款
jQuery.validator.addMethod('accountMoney', function(value, element) {
	var flag = false;
	value = $.trim(value);
	var accMoney = $("#accountMoney").val();  //代理账户金额
	if (Number(accMoney) >= Number(value)) {
		flag = true;
	}
	return flag;
  }, '申请提款金额不能大于代理账户金额！');

//扩展方法，代理商编码只限数字或字母
jQuery.validator.addMethod('isNumOrChar', function(value, element) {
	value = $.trim(value);
	element.value = value;
	numOrChar = /^[0-9a-zA-Z]*$/;
	return this.optional(element) || (numOrChar.test(value));
  }, '只能由数字或字母组成');

//扩展方法，上传文件大小验证
jQuery.validator.addMethod('fileSize', function(value, element) {
	var flag = false;
	var limit_size = 2 * 1024 * 1024;
	var upload_size = 0;
	if(value != null && $.trim(value) != ''){
		upload_size = $("input[type='file']")[0].files[0].size;
	}
	if (Number(limit_size) >= Number(upload_size)) {
		flag = true;
	}
	return flag;
  }, '上传附件不能超过2M');

//扩展方法，上传文件必须以.csv扩展名
jQuery.validator.addMethod('uploadFile', function(value, element) {	
	var reg = /\.(csv)$/;
	var reg1 = /\.(CSV)$/;
	return this.optional(element) || reg.test(value) || reg1.test(value);
  }, '请上传格式为.csv的文件!');

//扩展方法，选择了省份校验城市也要填,之前的数据不为空的情况下、与之关联的也不为空
jQuery.validator.addMethod('beforeIsNotBlank', function(value, element) {
	
	return false;
  }, '之前的数据不为空的情况下、与之关联的也不为空');

//扩展方法，代理商选择控件，输入不存在的代理商时验证
jQuery.validator.addMethod('unSelectProxyId', function(value, element) {
	var flag = false;
	var proxyId = $("#proxyId").val();
	if (proxyId != null && proxyId != '') {
		flag = true;
	}
	return flag;
  }, '请选择正确的代理商');

//扩展方法，公司选择控件，输入不存在的公司时验证
jQuery.validator.addMethod('unSelectEnterpriseId', function(value, element) {
	var flag = false;
	var enterpriseId = $("#enterpriseId").val();
	if (enterpriseId != null && enterpriseId != '') {
		flag = true;
	}
	return flag;
}, '请选择正确的公司');

//扩展方法，邮政编码验证
jQuery.validator.addMethod("postCode", function(value, element) {   
    var tel = /^[1-9]\d{5}(?!\d)$/;
    return this.optional(element) || (tel.test(value));
}, "请输入正确的邮政编码");

//地址加端口
jQuery.validator.addMethod("ipAndPort", function(value, element) {   
    var tel =/^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9]):\d{0,5}$/;
    return this.optional(element) || (tel.test(value));
}, "请输入正确的IP地址和端口");
var checkUtil = {
	isNumber : function(str){//是否是数字
		var reg = /^\d+$/;
		return reg.test(str);
	},
	isCode4 : function(str){//是否是四位数字验证码
		var regu = /^[0-9][4]$/;
		return regu.test(str);
	},
	isInt : function(str){//是否是正整数
		var reg = /^[1-9]{1,}[0-9]*$/;
		return reg.test(str);
	},
	isNaturalNumber:function(str){//是否是自然数
		return isInt(str) || str==0;
	},
	isChinaOrNumbOrLett:function(str){//判断是否是汉字、字母、数字组成
		var regu = /^[0-9a-zA-Z\u4e00-\u9fa5]+$/;
		return regu.test(str);
	},
	isNumberOrLetter:function(str){//判断是否是数字或字母 (6-14位)
		var regu = /^[0-9a-zA-Z]{6,14}$/;
		return regu.test(str);
	},
	isMobileNum:function(str){//验证手机号
		var regu =/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
		return regu.test(str);
	},
	isTelephoneNum:function(str){//验证电话号
		var regu = /^(([0\+]\d{2,3}-?)?(0\d{2,3})-?)?(\d{7,8})(-?(\d{3,}))?$/ ;
		return regu.test(str);
	},
	isPhone:function(str){//验证手机号 或者 验证电话号
		return this.isTelephoneNum(str) || this.isMobileNum(str);
	},
	isEmail:function(str){//email格式验证
		var regu =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regu.test(str);
	},
	isMoney:function(value){//验证是否为金额
		value = $.trim(value);
		if(value == ""){
			return false;
		}
		
		var reg = /^[0-9]{1,9}([.]{1}[0-9]{1,3})?$/;
		return reg.test(value);
	},
	isNull:function(str){//验证是否为空
		var value = $("#" + id).val();
		value = $.trim(value);
		if (value == "") {
			return true;
		} else {
			return false;
		}
	},
	isMoneyValue:function(str){//校验是否是金额 ，后三位
		var regu =  /^\d+([.]{1}[0-9]{1,3})?$/;
		return regu.test(str);
	},
	isNullValue:function(value){//验证是否为空
		value = $.trim(value);
		if (value == "") {
			return true;
		} else {
			return false;
		}
	},
	ispCode:function(str){
		var regu =  /^[1-9]\d{5}(?!\d)$/;
		return regu.test(str);
	},//邮政编码正则
	isObjNull:function(value){
		value = $.trim(value);
		if($.isEmptyObject(value)){
			return true;
		}else{
			return false;
		}
	},
	getStrLength:function(str){//获取字符串字节长度
		return str.replace(/[^\x00-\xff]/g, 'xx').length;
	},
	isQQ:function(str){
		var checkqqPattern= /^\d{5,10}$/;
		return checkqqPattern.test(str);
	},
	validateWebsite:function(){//网址的验证
		 var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
	    + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
	    + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
	    + "|" // 允许IP和DOMAIN（域名）
	    + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
	    + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
	    + "[a-z]{2,6})" // first level domain- .com or .museum
	    + "(:[0-9]{1,4})?" // 端口- :80
	    + "((/?)|" // a slash isn't required if there is no file name
	    + "(/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+/?)$";
	    var re=new RegExp(strRegex);
	    if (re.test(str_url)){
	        return true;
	    }else{
	        return false;
	    }
	}
};




//校验工具
function CheckTool() {
	this.isCode4 = function(str){//是否是四位数字验证码
		var regu = /^[0-9]{4}$/;
		return regu.test(str);
	};
	
	this.checkEmpty=function(inStr){
		return typeof(inStr)=='undefined'||inStr==null||inStr=="";
	};
	
	this.checkPhone=function(phone){
		var checkPhonePattern = /^(130|131|132|133|134|135|136|137|138|139|145|147|150|151|152|153|155|156|157|158|159|170|176|177|178|180|181|182|183|184|185|186|187|188|189)\d{8}$/;
		return checkPhonePattern.test(phone);
	};
	
	this.checkEmail=function(email){
		var checkEmailPattern= /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
		return checkEmailPattern.test(email);
	};
	
	this.checkEmoji=function(emoji){
		//var checkEmojiPattern= /^[\ud83c-\ud83c][\udc00-\udfff]|[\ud83d-\ud83d][\udc00-\udfff]|[\u2600-\u27ff]$/;
		//var checkEmojiPattern = new RegExp("[\\u4E00-\\u9FFF]+","g");
		var checkEmojiPattern = new RegExp("[\\ud83c-\ud83c][\\udc00-\\udfff]|[\\ud83d-\\ud83d][\\udc00-\\udfff]|[\\u2600-\\u27ff]+","g");
		return checkEmojiPattern.test(emoji);
	};
	
	this.checkUserName=function(userName){
		return !this.checkEmpty(userName)&&(this.checkPhone(userName)||this.checkEmail(userName));
	};
	
	this.checkPwd=function(pwd){
		return !this.checkEmpty(pwd)&&pwd.length>=6;
	};
	
	this.checkIp=function(ip){
		var checkIpPattern= /^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/;
		return checkIpPattern.test(ip);
	};
	//校验特殊字符，只能输入中文、英文、数字以及下划线
	this.checkSpecialCharacter=function(str){
		var checkSpecialCharacterPattern=/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;
		return checkSpecialCharacterPattern.test(str);
	};
	
	this.checkURL=function(url){
		var checkUrlPattern= /^((http|https|ftp)\:\/\/)?([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|localhost|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*$/;
		return checkUrlPattern.test(url);
	};
	
	/**
	 * 端口验证
	 */
	this.checkPort=function(port){
		var checkPortPattern= /^\d{1,6}$/;
		return checkPortPattern.test(port);
	};
	
	/**
	 * qq
	 */
	this.checkQQ=function(qq){
		var checkqqPattern= /^\d{5,10}$/;
		return checkqqPattern.test(qq);
	};
	
	/**
	 *  电话号码正则表达式（支持手机号码，3-4位区号，7-8位直播号码，1－4位分机号）
	 */
	this.checkContactTel=function(tel){
		if(!this.checkPhone(tel)){
			var reg = /^(\d{4}|\d{3})-?(\d{7,8})$/;
			return reg.test(tel);
		}
		return true;
	};
	
}

var CheckTool=new CheckTool();//表单工具类
var FormUtil={
	//重置表单
	resetForm:function(formId){
		var _formId = "commonForm";
		if(typeof(formId) !="undefined"){
			_formId = formId;
		}
		$("#"+_formId).resetForm();//弹窗隐藏后表单清空
		$("#"+_formId).find(":input").each(function(){
			if($(this).attr("type") == "button")return;
			if($(this).attr("type") == "reset")return;
			if($(this).attr("type") == "radio")return;
			if($(this).attr("type") == "checkbox")return;
			if($(this).attr("type") == "hidden"){
				$(this).val("");
				return;
			}
			$(this).removeClass("error").siblings("label").hide();
		});
	},
	//给对象赋默认值
	getDefaultStrValue:function(obj){
		return obj || "";
	}
};

$(function(){  
	var layerMask;
    // 设置 Ajax全局的参数  
	$.ajaxSetup({
	    global: true,
	    layerMaskFlag:false,//显示遮罩层，默认不显示
	    beforeSend:function(XHR){
	    	if(this.layerMaskFlag){
	    		layerMask = layer.load(1);
	    	}
        },
	    complete:function(xhr, status, err){
			      if(this.layerMaskFlag){
			    	  layer.close(layerMask); 
			      }
	    		  if(typeof(xhr.responseJSON)!="undefined"&&xhr.responseJSON.rs==-1){
	        		  //session过期异常
	        		  if(xhr.responseJSON.detailCode=="40_901"||xhr.responseJSON.detailCode=="40_902"){
	        		  	window.top.location.href="${ctx.path}/resources/platform/views/login.jsp";
	        		  }else if(xhr.responseJSON.alertExpFlag==1){
	        			  top.toastr.error(xhr.responseJSON.msg);
	        		  }
	        	  }
	    },
	    error: function(xhr, status, err) {
	    	if(this.layerMaskFlag){
	    		layer.close(layerMask); 
	    	}
	    	//angularRootScope.errorPageTime = true;//定义变量 发生400 500刷新页面回到主界面
	        if (xhr.status == 404) {
	        	//angularState.go('main.404');
//	           window.location.href = angularRootScope.rootHref+"#main/404";
	        }else{
	        	//angularState.go('main.500');
//	        	window.location.href = angularRootScope.rootHref+"#main/500";
	        }
	    }
	});
});

//将表单封装为对象
(function($){  
    $.fn.serializeJson=function(){  
        var serializeObj={};  
        var array=this.serializeArray();  
        $(array).each(function(){  
            if(serializeObj[this.name]){  
                if($.isArray(serializeObj[this.name])){  
                    serializeObj[this.name].push(this.value);  
                }else{  
                    serializeObj[this.name]=[serializeObj[this.name],this.value];  
                }  
            }else{  
                serializeObj[this.name]=this.value;   
            }  
        });  
        return serializeObj;  
    };  
})(jQuery);
/**
 * 字符串转json
 * @param str
 * @returns
 */
function strToJson(str){ 
	var json = eval('(' + str + ')'); 
	return json; 
} 

/**
 * object转json
 * @param obj
 * @returns
 */
function objectToJson(obj){
	return JSON.stringify(obj); 
}

var HttpUtil = {
		post : function(c, d, b, a) {
			this.ajax("json", c, d, b, a, true)
		},
		postSync : function(c, d, b, a){
			this.ajax("json", c, d, b, a, false)
		},
		ajax : function(c, d, f, b, a, e){
			if(c == "json"){
				$.ajax({
					type : "post",
					async : e,
					url : d,
					data : f,
					dataType : "json",
					success : function(h) {
						if (b && typeof (b) == "function") {
							b(h)
						}
					},
					error : function(h) {
						if (a && typeof (a) == "function") {
							a()
						}
					}
				})
			}else if(c == "jsonp"){
				
			}
		}
}