module.exports=(()=>{"use strict";var e={270:(e,r,s)=>{const t=s(892);const n=/^(.+?|\([\s\S]+?\))\s+from\s+("[^"]*"|'[^']*'|[\w-]+)$/;const o=/(?:\s+|^)([\w-]+):?(.*?)$/;const p=/^([\w-]+)(?:\s+as\s+([\w-]+))?/;e.exports=(e=>{let r=0;const s=e&&e.createImportedName||(e=>`i__const_${e.replace(/\W/g,"_")}_${r++}`);return{postcssPlugin:"postcss-modules-values",prepare(e){const r=[];const a={};return{Once(c,l){c.walkAtRules(/value/i,c=>{const l=c.params.match(n);if(l){let[,e,t]=l;if(a[t]){t=a[t]}const n=e.replace(/^\(\s*([\s\S]+)\s*\)$/,"$1").split(/\s*,\s*/).map(e=>{const r=p.exec(e);if(r){const[,e,t=e]=r;const n=s(t);a[t]=n;return{theirName:e,importedName:n}}else{throw new Error(`@import statement "${e}" is invalid!`)}});r.push({path:t,imports:n});c.remove();return}if(c.params.indexOf("@value")!==-1){e.warn("Invalid value definition: "+c.params)}let[,u,i]=`${c.params}${c.raws.between}`.match(o);const _=i.replace(/\/\*((?!\*\/).*?)\*\//g,"");if(_.length===0){e.warn("Invalid value definition: "+c.params);c.remove();return}let f=/^\s+$/.test(_);if(!f){i=i.trim()}a[u]=t.replaceValueSymbols(i,a);c.remove()});if(!Object.keys(a).length){return}t.replaceSymbols(c,a);const u=Object.keys(a).map(e=>l.decl({value:a[e],prop:e,raws:{before:"\n  "}}));if(u.length>0){const e=l.rule({selector:":export",raws:{after:"\n"}});e.append(u);c.prepend(e)}r.reverse().forEach(({path:e,imports:r})=>{const s=l.rule({selector:`:import(${e})`,raws:{after:"\n"}});r.forEach(({theirName:e,importedName:r})=>{s.append({value:e,prop:r,raws:{before:"\n  "}})});c.prepend(s)})}}}}});e.exports.postcss=true},892:e=>{e.exports=require("next/dist/compiled/icss-utils")}};var r={};function __nccwpck_require__(s){if(r[s]){return r[s].exports}var t=r[s]={exports:{}};var n=true;try{e[s](t,t.exports,__nccwpck_require__);n=false}finally{if(n)delete r[s]}return t.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(270)})();