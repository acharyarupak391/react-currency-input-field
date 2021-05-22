(()=>{"use strict";var e={660:function(e,r,t){var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,r,t,a){void 0===a&&(a=t),Object.defineProperty(e,a,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,a){void 0===a&&(a=t),e[a]=r[t]}),i=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(r,e,t);return i(r,e),r},u=this&&this.__rest||function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]])}return t};Object.defineProperty(r,"__esModule",{value:!0}),r.CurrencyInput=void 0;var l=o(t(297)),c=t(497);r.CurrencyInput=l.forwardRef((function(e,r){var t=e.allowDecimals,n=void 0===t||t,i=e.allowNegativeValue,o=void 0===i||i,p=e.id,d=e.name,f=e.className,v=e.customInput,s=e.decimalsLimit,m=e.defaultValue,g=e.disabled,b=void 0!==g&&g,y=e.maxLength,h=e.value,x=e.onValueChange,S=e.fixedDecimalLength,_=e.placeholder,w=e.decimalScale,O=e.prefix,j=e.suffix,P=e.intlConfig,V=e.step,E=e.min,R=e.max,C=e.disableGroupSeparators,M=void 0!==C&&C,D=e.disableAbbreviations,N=void 0!==D&&D,I=e.decimalSeparator,A=e.groupSeparator,F=e.onChange,L=e.onFocus,T=e.onBlur,k=e.onKeyDown,K=e.onKeyUp,U=u(e,["allowDecimals","allowNegativeValue","id","name","className","customInput","decimalsLimit","defaultValue","disabled","maxLength","value","onValueChange","fixedDecimalLength","placeholder","decimalScale","prefix","suffix","intlConfig","step","min","max","disableGroupSeparators","disableAbbreviations","decimalSeparator","groupSeparator","onChange","onFocus","onBlur","onKeyDown","onKeyUp"]);if(I&&A&&I===A)throw new Error("decimalSeparator cannot be the same as groupSeparator");if(I&&c.isNumber(I))throw new Error("decimalSeparator cannot be a number");if(A&&c.isNumber(A))throw new Error("groupSeparator cannot be a number");var B=l.useMemo((function(){return c.getLocaleConfig(P)}),[P]),G=I||B.decimalSeparator||"",$=A||B.groupSeparator||"",q={decimalSeparator:G,groupSeparator:$,disableGroupSeparators:M,intlConfig:P,prefix:O||B.prefix,suffix:j},z={decimalSeparator:G,groupSeparator:$,allowDecimals:n,decimalsLimit:s||S||2,allowNegativeValue:o,disableAbbreviations:N,prefix:O||B.prefix},H=void 0!==m?c.formatValue(a(a({},q),{decimalScale:w,value:String(m)})):void 0!==h?c.formatValue(a(a({},q),{decimalScale:w,value:String(h)})):"",J=l.useState(H),Q=J[0],W=J[1],X=l.useState(!1),Y=X[0],Z=X[1],ee=l.useState(0),re=ee[0],te=ee[1],ae=r||l.useRef(null),ne=function(e,r){Z(!0);var t=c.cleanValue(a({value:e},z));if(""===t)return x&&x(void 0,d),void W("");if(!(y&&t.replace(/-/g,"").length>y)){if("-"===t||t===G)return x&&x(void 0,d),void W(e);var n=c.formatValue(a({value:t},q));if(null!=r){var i=r+(n.length-e.length)||1;te(i)}W(n),x&&x(t,d)}};l.useEffect((function(){Y&&"-"!==Q&&ae&&"object"==typeof ae&&ae.current&&ae.current.setSelectionRange(re,re)}),[Q,re,ae,Y]);var ie=void 0!==h?c.formatValue(a(a({},q),{decimalScale:Y?void 0:w,value:String(h)})):void 0,oe=a({type:"text",inputMode:"decimal",id:p,name:d,className:f,onChange:function(e){var r=e.target,t=r.value,a=r.selectionStart;ne(t,a),F&&F(e)},onBlur:function(e){var r=e.target.value,t=c.cleanValue(a({value:r},z));if("-"===t||!t)return W(""),void(T&&T(e));var n=c.fixedDecimalValue(t,G,S),i=c.padTrimValue(n,G,void 0!==w?w:S);x&&x(i,d);var o=c.formatValue(a(a({},q),{value:i}));W(o),T&&T(e)},onFocus:function(e){return L&&L(e),Q?Q.length:0},onKeyDown:function(e){var r=e.key;if(V&&("ArrowUp"===r||"ArrowDown"===r)){e.preventDefault(),te(Q.length);var t=parseFloat(void 0!==h?String(h).replace(G,"."):c.cleanValue(a({value:Q},z)))||0,n="ArrowUp"===r?t+V:t-V;if(void 0!==E&&n<E)return;if(void 0!==R&&n>R)return;var i=String(V).includes(G)?Number(String(V).split(G)[1].length):void 0;ne(String(i?n.toFixed(i):n).replace(".",G))}k&&k(e)},onKeyUp:function(e){var r=e.key,t=e.currentTarget.selectionStart;if("ArrowUp"!==r&&"ArrowDown"!==r&&"-"!==Q){var a=c.getSuffix(Q,{groupSeparator:$,decimalSeparator:G});if(a&&t&&t>Q.length-a.length&&ae&&"object"==typeof ae&&ae.current){var n=Q.length-a.length;ae.current.setSelectionRange(n,n)}}K&&K(e)},placeholder:_,disabled:b,value:void 0!==ie&&"-"!==Q&&Q!==G?ie:Q,ref:ae},U);if(v){var ue=v;return l.default.createElement(ue,a({},oe))}return l.default.createElement("input",a({},oe))})),r.CurrencyInput.displayName="CurrencyInput",r.default=r.CurrencyInput},243:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0})},226:function(e,r,t){var a=this&&this.__spreadArray||function(e,r){for(var t=0,a=r.length,n=e.length;t<a;t++,n++)e[n]=r[t];return e};Object.defineProperty(r,"__esModule",{value:!0}),r.cleanValue=void 0;var n=t(231),i=t(566),o=t(512),u=t(857);r.cleanValue=function(e){var r=e.value,t=e.groupSeparator,l=void 0===t?",":t,c=e.decimalSeparator,p=void 0===c?".":c,d=e.allowDecimals,f=void 0===d||d,v=e.decimalsLimit,s=void 0===v?2:v,m=e.allowNegativeValue,g=void 0===m||m,b=e.disableAbbreviations,y=void 0!==b&&b,h=e.prefix,x=void 0===h?"":h;if("-"===r)return r;var S=y?[]:["k","m","b"],_=new RegExp("((^|\\D)-\\d)|(-"+u.escapeRegExp(x)+")").test(r),w=RegExp("(\\d+)-?"+u.escapeRegExp(x)).exec(r)||[],O=w[0],j=w[1],P=x?O?r.replace(O,"").concat(j):r.replace(x,""):r,V=i.removeSeparators(P,l),E=o.removeInvalidChars(V,a([l,p],S)),R=E;if(!y){if(S.some((function(e){return e===E.toLowerCase()})))return"";var C=n.parseAbbrValue(E,p);C&&(R=String(C))}var M=_&&g?"-":"";if(p&&R.includes(p)){var D=E.split(p),N=D[0],I=D[1],A=s&&I?I.slice(0,s):I;return""+M+N+(f?""+p+A:"")}return""+M+R}},857:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.escapeRegExp=void 0,r.escapeRegExp=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}},806:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.fixedDecimalValue=void 0,r.fixedDecimalValue=function(e,r,t){if(t&&e.length>1){if(e.includes(r)){var a=e.split(r),n=a[0];if((i=a[1]).length>t)return""+n+r+i.slice(0,t)}var i,o=e.length>t?new RegExp("(\\d+)(\\d{"+t+"})"):new RegExp("(\\d)(\\d+)"),u=e.match(o);if(u)return""+(n=u[1])+r+u[2]}return e}},106:function(e,r,t){var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},n=this&&this.__spreadArray||function(e,r){for(var t=0,a=r.length,n=e.length;t<a;t++,n++)e[n]=r[t];return e};Object.defineProperty(r,"__esModule",{value:!0}),r.formatValue=void 0;var i=t(857),o=t(888);r.formatValue=function(e){var r=e.value,t=e.decimalSeparator,n=e.intlConfig,c=e.decimalScale,p=e.prefix,d=void 0===p?"":p,f=e.suffix,v=void 0===f?"":f;if(""===r||void 0===r)return"";if("-"===r)return"-";var s=new RegExp("^\\d?-"+(d?i.escapeRegExp(d)+"?":"")+"\\d").test(r),m="."!==t?u(r,t,s):r,g=(n?new Intl.NumberFormat(n.locale,n.currency?{style:"currency",currency:n.currency,minimumFractionDigits:c||0,maximumFractionDigits:20}:void 0):new Intl.NumberFormat(void 0,{minimumFractionDigits:c||0,maximumFractionDigits:20})).formatToParts(Number(m)),b=l(g,e),y=o.getSuffix(b,a({},e)),h=r.slice(-1)===t?t:"",x=(m.match(RegExp("\\d+\\.(\\d+)"))||[])[1];return void 0===c&&x&&t&&(b=b.includes(t)?b.replace(RegExp("(\\d+)("+i.escapeRegExp(t)+")(\\d+)","g"),"$1$2"+x):y&&!v?b.replace(y,""+t+x+y):""+b+t+x),v&&h?""+b+h+v:y&&h?b.replace(y,""+h+y):y&&v?b.replace(y,""+h+v):[b,h,v].join("")};var u=function(e,r,t){var a=e;return r&&"."!==r&&(a=a.replace(RegExp(i.escapeRegExp(r),"g"),"."),t&&"-"===r&&(a="-"+a.slice(1))),a},l=function(e,r){var t=r.prefix,a=r.groupSeparator,i=r.decimalSeparator,o=r.decimalScale,u=r.disableGroupSeparators,l=void 0!==u&&u;return e.reduce((function(e,r,u){var c=r.type,p=r.value;return 0===u&&t?"minusSign"===c?[p,t]:"currency"===c?n(n([],e),[t]):[t,p]:"currency"===c?t?e:n(n([],e),[p]):"group"===c?l?e:n(n([],e),[void 0!==a?a:p]):"decimal"===c?void 0!==o&&0===o?e:n(n([],e),[void 0!==i?i:p]):n(n([],e),"fraction"===c?[void 0!==o?p.slice(0,o):p]:[p])}),[""]).join("")}},15:function(e,r){var t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0}),r.getLocaleConfig=void 0;var a={currencySymbol:"",groupSeparator:"",decimalSeparator:"",prefix:"",suffix:""};r.getLocaleConfig=function(e){var r=e||{},n=r.locale,i=r.currency;return(n?new Intl.NumberFormat(n,i?{currency:i,style:"currency"}:void 0):new Intl.NumberFormat).formatToParts(1000.1).reduce((function(e,r,a){return"currency"===r.type?t(t({},e),0===a?{currencySymbol:r.value,prefix:r.value}:{currencySymbol:r.value,suffix:r.value}):"group"===r.type?t(t({},e),{groupSeparator:r.value}):"decimal"===r.type?t(t({},e),{decimalSeparator:r.value}):e}),a)}},888:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.getSuffix=void 0;var a=t(857);r.getSuffix=function(e,r){var t=r.groupSeparator,n=void 0===t?",":t,i=r.decimalSeparator,o=void 0===i?".":i,u=new RegExp("\\d([^"+a.escapeRegExp(n)+a.escapeRegExp(o)+"0-9]+)"),l=e.match(u);return l?l[1]:void 0}},497:function(e,r,t){var a=this&&this.__createBinding||(Object.create?function(e,r,t,a){void 0===a&&(a=t),Object.defineProperty(e,a,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,a){void 0===a&&(a=t),e[a]=r[t]}),n=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||a(r,e,t)};Object.defineProperty(r,"__esModule",{value:!0}),n(t(226),r),n(t(806),r),n(t(106),r),n(t(15),r),n(t(888),r),n(t(435),r),n(t(170),r)},435:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.isNumber=void 0,r.isNumber=function(e){return RegExp(/\d/,"gi").test(e)}},170:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.padTrimValue=void 0,r.padTrimValue=function(e,r,t){if(void 0===r&&(r="."),void 0===t||""===e||void 0===e)return e;if(!e.match(/\d/g))return"";var a=e.split(r),n=a[0],i=a[1];if(0===t)return n;var o=i||"";if(o.length<t)for(;o.length<t;)o+="0";else o=o.slice(0,t);return""+n+r+o}},231:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.parseAbbrValue=r.abbrValue=void 0;var a=t(857);r.abbrValue=function(e,r,t){if(void 0===r&&(r="."),void 0===t&&(t=10),e>999){var a=(""+e).length,n=Math.pow,i=n(10,t);return a-=a%3,(Math.round(e*i/n(10,a))/i+" kMGTPE"[a/3]).replace(".",r)}return String(e)};var n={k:1e3,m:1e6,b:1e9};r.parseAbbrValue=function(e,r){void 0===r&&(r=".");var t=new RegExp("(\\d+("+a.escapeRegExp(r)+"\\d+)?)([kmb])$","i"),i=e.match(t);if(i){var o=i[1],u=i[3],l=n[u.toLowerCase()];return Number(o.replace(r,"."))*l}}},512:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.removeInvalidChars=void 0;var a=t(857);r.removeInvalidChars=function(e,r){var t=a.escapeRegExp(r.join("")),n=new RegExp("[^\\d"+t+"]","gi");return e.replace(n,"")}},566:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.removeSeparators=void 0;var a=t(857);r.removeSeparators=function(e,r){void 0===r&&(r=",");var t=new RegExp(a.escapeRegExp(r),"g");return e.replace(t,"")}},22:function(e,r,t){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.formatValue=r.CurrencyInputProps=void 0;var n=a(t(660)),i=t(243);Object.defineProperty(r,"CurrencyInputProps",{enumerable:!0,get:function(){return i.CurrencyInputProps}}),r.default=n.default;var o=t(106);Object.defineProperty(r,"formatValue",{enumerable:!0,get:function(){return o.formatValue}})},297:e=>{e.exports=require("react")}},r={},t=function t(a){var n=r[a];if(void 0!==n)return n.exports;var i=r[a]={exports:{}};return e[a].call(i.exports,i,i.exports,t),i.exports}(22);module.exports=t})();
//# sourceMappingURL=index.js.map