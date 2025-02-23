/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.37.0.
 * Original file: /npm/@vue/shared@3.5.13/dist/shared.esm-bundler.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var e="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */function t(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}const n={},r=[],i=()=>{},o=()=>!1,a=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),s=e=>e.startsWith("onUpdate:"),l=Object.assign,c=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},p=Object.prototype.hasOwnProperty,d=(e,t)=>p.call(e,t),f=Array.isArray,m=e=>"[object Map]"===A(e),u=e=>"[object Set]"===A(e),h=e=>"[object Date]"===A(e),g=e=>"[object RegExp]"===A(e),y=e=>"function"==typeof e,b=e=>"string"==typeof e,E=e=>"symbol"==typeof e,T=e=>null!==e&&"object"==typeof e,N=e=>(T(e)||y(e))&&y(e.then)&&y(e.catch),k=Object.prototype.toString,A=e=>k.call(e),O=e=>A(e).slice(8,-1),x=e=>"[object Object]"===A(e),S=e=>b(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,v=t(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_=t("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),C=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},L=/-(\w)/g,M=C((e=>e.replace(L,((e,t)=>t?t.toUpperCase():"")))),w=/\B([A-Z])/g,R=C((e=>e.replace(w,"-$1").toLowerCase())),D=C((e=>e.charAt(0).toUpperCase()+e.slice(1))),P=C((e=>e?`on${D(e)}`:"")),F=(e,t)=>!Object.is(e,t),I=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},U=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},j=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Y=e=>{const t=b(e)?Number(e):NaN;return isNaN(t)?e:t};let z;const $=()=>z||(z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:{}),B=/^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;function H(e){return B.test(e)?`__props.${e}`:`__props[${JSON.stringify(e)}]`}function q(e,t){return e+JSON.stringify(t,((e,t)=>"function"==typeof t?t.toString():t))}const G={TEXT:1,1:"TEXT",CLASS:2,2:"CLASS",STYLE:4,4:"STYLE",PROPS:8,8:"PROPS",FULL_PROPS:16,16:"FULL_PROPS",NEED_HYDRATION:32,32:"NEED_HYDRATION",STABLE_FRAGMENT:64,64:"STABLE_FRAGMENT",KEYED_FRAGMENT:128,128:"KEYED_FRAGMENT",UNKEYED_FRAGMENT:256,256:"UNKEYED_FRAGMENT",NEED_PATCH:512,512:"NEED_PATCH",DYNAMIC_SLOTS:1024,1024:"DYNAMIC_SLOTS",DEV_ROOT_FRAGMENT:2048,2048:"DEV_ROOT_FRAGMENT",CACHED:-1,"-1":"CACHED",BAIL:-2,"-2":"BAIL"},V={1:"TEXT",2:"CLASS",4:"STYLE",8:"PROPS",16:"FULL_PROPS",32:"NEED_HYDRATION",64:"STABLE_FRAGMENT",128:"KEYED_FRAGMENT",256:"UNKEYED_FRAGMENT",512:"NEED_PATCH",1024:"DYNAMIC_SLOTS",2048:"DEV_ROOT_FRAGMENT",[-1]:"HOISTED",[-2]:"BAIL"},K={ELEMENT:1,1:"ELEMENT",FUNCTIONAL_COMPONENT:2,2:"FUNCTIONAL_COMPONENT",STATEFUL_COMPONENT:4,4:"STATEFUL_COMPONENT",TEXT_CHILDREN:8,8:"TEXT_CHILDREN",ARRAY_CHILDREN:16,16:"ARRAY_CHILDREN",SLOTS_CHILDREN:32,32:"SLOTS_CHILDREN",TELEPORT:64,64:"TELEPORT",SUSPENSE:128,128:"SUSPENSE",COMPONENT_SHOULD_KEEP_ALIVE:256,256:"COMPONENT_SHOULD_KEEP_ALIVE",COMPONENT_KEPT_ALIVE:512,512:"COMPONENT_KEPT_ALIVE",COMPONENT:6,6:"COMPONENT"},X={STABLE:1,1:"STABLE",DYNAMIC:2,2:"DYNAMIC",FORWARDED:3,3:"FORWARDED"},W={1:"STABLE",2:"DYNAMIC",3:"FORWARDED"},J=t("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol"),Z=J;function Q(e,t=0,n=e.length){if((t=Math.max(0,Math.min(t,e.length)))>(n=Math.max(0,Math.min(n,e.length))))return"";let r=e.split(/(\r?\n)/);const i=r.filter(((e,t)=>t%2==1));r=r.filter(((e,t)=>t%2==0));let o=0;const a=[];for(let e=0;e<r.length;e++)if(o+=r[e].length+(i[e]&&i[e].length||0),o>=t){for(let s=e-2;s<=e+2||n>o;s++){if(s<0||s>=r.length)continue;const l=s+1;a.push(`${l}${" ".repeat(Math.max(3-String(l).length,0))}|  ${r[s]}`);const c=r[s].length,p=i[s]&&i[s].length||0;if(s===e){const e=t-(o-(c+p)),r=Math.max(1,n>o?c-e:n-t);a.push("   |  "+" ".repeat(e)+"^".repeat(r))}else if(s>e){if(n>o){const e=Math.max(Math.min(n-o,c),1);a.push("   |  "+"^".repeat(e))}o+=c+p}}break}return a.join("\n")}function ee(e){if(f(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=b(r)?ie(r):ee(r);if(i)for(const e in i)t[e]=i[e]}return t}if(b(e)||T(e))return e}const te=/;(?![^(]*\))/g,ne=/:([^]+)/,re=/\/\*[^]*?\*\//g;function ie(e){const t={};return e.replace(re,"").split(te).forEach((e=>{if(e){const n=e.split(ne);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function oe(e){if(!e)return"";if(b(e))return e;let t="";for(const n in e){const r=e[n];if(b(r)||"number"==typeof r){t+=`${n.startsWith("--")?n:R(n)}:${r};`}}return t}function ae(e){let t="";if(b(e))t=e;else if(f(e))for(let n=0;n<e.length;n++){const r=ae(e[n]);r&&(t+=r+" ")}else if(T(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function se(e){if(!e)return null;let{class:t,style:n}=e;return t&&!b(t)&&(e.class=ae(t)),n&&(e.style=ee(n)),e}const le=t("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"),ce=t("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view"),pe=t("annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics"),de=t("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr"),fe="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",me=t(fe),ue=t(fe+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");function he(e){return!!e||""===e}const ge=/[>/="'\u0009\u000a\u000c\u0020]/,ye={};function be(e){if(ye.hasOwnProperty(e))return ye[e];const t=ge.test(e);return t&&console.error(`unsafe attribute name: ${e}`),ye[e]=!t}const Ee={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},Te=t("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"),Ne=t("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"),ke=t("accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns");function Ae(e){if(null==e)return!1;const t=typeof e;return"string"===t||"number"===t||"boolean"===t}const Oe=/["'&<>]/;function xe(e){const t=""+e,n=Oe.exec(t);if(!n)return t;let r,i,o="",a=0;for(i=n.index;i<t.length;i++){switch(t.charCodeAt(i)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}a!==i&&(o+=t.slice(a,i)),a=i+1,o+=r}return a!==i?o+t.slice(a,i):o}const Se=/^-?>|<!--|-->|--!>|<!-$/g;function ve(e){return e.replace(Se,"")}const _e=/[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;function Ce(e,t){return e.replace(_e,(e=>t?'"'===e?'\\\\\\"':`\\\\${e}`:`\\${e}`))}function Le(e,t){if(e===t)return!0;let n=h(e),r=h(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=E(e),r=E(t),n||r)return e===t;if(n=f(e),r=f(t),n||r)return!(!n||!r)&&function(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Le(e[r],t[r]);return n}(e,t);if(n=T(e),r=T(t),n||r){if(!n||!r)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!Le(e[n],t[n]))return!1}}return String(e)===String(t)}function Me(e,t){return e.findIndex((e=>Le(e,t)))}const we=e=>!(!e||!0!==e.__v_isRef),Re=e=>b(e)?e:null==e?"":f(e)||T(e)&&(e.toString===k||!y(e.toString))?we(e)?Re(e.value):JSON.stringify(e,De,2):String(e),De=(e,t)=>we(t)?De(e,t.value):m(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[Pe(t,r)+" =>"]=n,e)),{})}:u(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>Pe(e)))}:E(t)?Pe(t):!T(t)||f(t)||x(t)?t:String(t),Pe=(e,t="")=>{var n;return E(e)?`Symbol(${null!=(n=e.description)?n:t})`:e};export{r as EMPTY_ARR,n as EMPTY_OBJ,o as NO,i as NOOP,V as PatchFlagNames,G as PatchFlags,K as ShapeFlags,X as SlotFlags,M as camelize,D as capitalize,_e as cssVarNameEscapeSymbolsRE,U as def,xe as escapeHtml,ve as escapeHtmlComment,l as extend,q as genCacheKey,H as genPropsAccessExp,Q as generateCodeFrame,Ce as getEscapedCssVarName,$ as getGlobalThis,F as hasChanged,d as hasOwn,R as hyphenate,he as includeBooleanAttr,I as invokeArrayFns,f as isArray,ue as isBooleanAttr,_ as isBuiltInDirective,h as isDate,y as isFunction,J as isGloballyAllowed,Z as isGloballyWhitelisted,le as isHTMLTag,S as isIntegerKey,Te as isKnownHtmlAttr,ke as isKnownMathMLAttr,Ne as isKnownSvgAttr,m as isMap,pe as isMathMLTag,s as isModelListener,T as isObject,a as isOn,x as isPlainObject,N as isPromise,g as isRegExp,Ae as isRenderableAttrValue,v as isReservedProp,be as isSSRSafeAttrName,ce as isSVGTag,u as isSet,me as isSpecialBooleanAttr,b as isString,E as isSymbol,de as isVoidTag,Le as looseEqual,Me as looseIndexOf,j as looseToNumber,t as makeMap,ae as normalizeClass,se as normalizeProps,ee as normalizeStyle,k as objectToString,ie as parseStringStyle,Ee as propsToAttrMap,c as remove,W as slotFlagsText,oe as stringifyStyle,Re as toDisplayString,P as toHandlerKey,Y as toNumber,O as toRawType,A as toTypeString};export default null;
